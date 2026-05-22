import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const createSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  location: z.string().optional(),
  client: z.string().optional(),
  color: z.string().default("#0EA5E9"),
});

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const projects = await db.project.findMany({
    where: { members: { some: { userId: session.user.id } } },
    include: {
      members: { include: { user: true }, take: 5 },
      _count: { select: { drawings: true, issues: true, rfis: true, punchItems: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ data: projects });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { name, description, location, client, color } = parsed.data;

  // Generate unique project code
  let code = generateCode(name);
  let attempts = 0;
  while (await db.project.findUnique({ where: { code } })) {
    code = generateCode(name) + (++attempts);
  }

  const project = await db.project.create({
    data: {
      name, description, location, client, color, code,
      createdById: session.user.id,
      members: {
        create: { userId: session.user.id, role: "ADMIN" },
      },
    },
    include: {
      members: { include: { user: true } },
      _count: { select: { drawings: true, issues: true, rfis: true, punchItems: true } },
    },
  });

  await db.activity.create({
    data: {
      projectId: project.id,
      userId: session.user.id,
      actorName: session.user.name ?? "Unknown",
      action: "created",
      entity: "project",
      entityId: project.id,
      entityName: project.name,
    },
  });

  return NextResponse.json({ data: project }, { status: 201 });
}

function generateCode(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    const prefix = (words[0][0] + words[1][0]).toUpperCase();
    return `${prefix}-${String(Math.floor(Math.random() * 900) + 100)}`;
  }
  return name.slice(0, 2).toUpperCase() + "-" + String(Math.floor(Math.random() * 900) + 100);
}
