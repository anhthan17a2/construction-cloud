import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const updateSchema = z.object({
  subject: z.string().optional(),
  question: z.string().optional(),
  answer: z.string().nullable().optional(),
  status: z.enum(["DRAFT","SUBMITTED","IN_REVIEW","ANSWERED","CLOSED"]).optional(),
  assigneeId: z.string().nullable().optional(),
  dueDate: z.string().nullable().optional(),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const rfi = await db.rFI.findUnique({
    where: { id },
    include: {
      createdBy: true,
      assignee: true,
      drawing: true,
      comments: { include: { author: true }, orderBy: { createdAt: "asc" } },
      attachments: true,
    },
  });

  if (!rfi) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: rfi });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const data: Record<string, unknown> = { ...parsed.data };
  if (parsed.data.status === "ANSWERED") data.answeredAt = new Date();
  if (parsed.data.status === "CLOSED") data.closedAt = new Date();
  if (parsed.data.dueDate !== undefined) {
    data.dueDate = parsed.data.dueDate ? new Date(parsed.data.dueDate) : null;
  }

  const rfi = await db.rFI.update({ where: { id }, data });
  return NextResponse.json({ data: rfi });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  await db.rFI.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
