import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const createSchema = z.object({
  projectId: z.string(),
  subject: z.string().min(3),
  question: z.string().min(5),
  drawingId: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  if (!projectId) return NextResponse.json({ error: "projectId required" }, { status: 400 });

  const rfis = await db.rFI.findMany({
    where: { projectId },
    include: {
      createdBy: true,
      assignee: true,
      drawing: true,
      _count: { select: { comments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: rfis });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { projectId, subject, question, drawingId, assigneeId, dueDate, tags } = parsed.data;

  const lastRFI = await db.rFI.findFirst({
    where: { projectId },
    orderBy: { number: "desc" },
    select: { number: true },
  });
  const number = (lastRFI?.number ?? 0) + 1;

  const rfi = await db.rFI.create({
    data: {
      projectId, subject, question, number,
      tags: JSON.stringify(tags ?? []),
      drawingId: drawingId ?? null,
      assigneeId: assigneeId ?? null,
      dueDate: dueDate ? new Date(dueDate) : null,
      status: "DRAFT",
      createdById: session.user.id!,
    },
    include: {
      createdBy: true,
      assignee: true,
      drawing: true,
      _count: { select: { comments: true } },
    },
  });

  await db.activity.create({
    data: {
      projectId,
      userId: session.user.id!,
      actorName: session.user.name ?? "Unknown",
      action: "created",
      entity: "rfi",
      entityId: rfi.id,
      entityName: `#${number} ${subject}`,
    },
  });

  return NextResponse.json({ data: rfi }, { status: 201 });
}
