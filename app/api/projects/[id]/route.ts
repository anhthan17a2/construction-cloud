import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().optional(),
  location: z.string().optional(),
  client: z.string().optional(),
  color: z.string().optional(),
  status: z.enum(["ACTIVE","ON_HOLD","COMPLETED","ARCHIVED"]).optional(),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const project = await db.project.findFirst({
    where: { id, members: { some: { userId: session.user.id } } },
    include: {
      members: { include: { user: true } },
      _count: { select: { drawings: true, issues: true, rfis: true, punchItems: true } },
    },
  });

  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: project });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const project = await db.project.update({
    where: { id },
    data: parsed.data,
  });

  return NextResponse.json({ data: project });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  await db.project.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
