import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const createSchema = z.object({
  projectId: z.string(),
  title: z.string().min(3),
  description: z.string().optional(),
  location: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  if (!projectId) return NextResponse.json({ error: "projectId required" }, { status: 400 });

  const items = await db.punchItem.findMany({
    where: { projectId },
    include: {
      createdBy: true,
      assignee: true,
      _count: { select: { comments: true, attachments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: items });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { projectId, title, description, location, assigneeId, dueDate } = parsed.data;

  const last = await db.punchItem.findFirst({
    where: { projectId },
    orderBy: { number: "desc" },
    select: { number: true },
  });
  const number = (last?.number ?? 0) + 1;

  const item = await db.punchItem.create({
    data: {
      projectId, title, description, location, number,
      assigneeId: assigneeId ?? null,
      dueDate: dueDate ? new Date(dueDate) : null,
      status: "OPEN",
      createdById: session.user.id!,
    },
    include: {
      createdBy: true,
      assignee: true,
      _count: { select: { comments: true, attachments: true } },
    },
  });

  await db.activity.create({
    data: {
      projectId,
      userId: session.user.id!,
      actorName: session.user.name ?? "Unknown",
      action: "created",
      entity: "punch_item",
      entityId: item.id,
      entityName: `#${number} ${title}`,
    },
  });

  return NextResponse.json({ data: item }, { status: 201 });
}
