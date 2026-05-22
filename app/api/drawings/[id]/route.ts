import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const updateSchema = z.object({
  title: z.string().optional(),
  status: z.enum(["DRAFT","IN_REVIEW","APPROVED","SUPERSEDED","VOID"]).optional(),
  discipline: z.enum(["HVAC","PLUMBING","ELECTRICAL","FIRE_PROTECTION","ARCHITECTURAL","STRUCTURAL","CIVIL","OTHER"]).optional(),
  folderId: z.string().nullable().optional(),
  tags: z.array(z.string()).optional(),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const drawing = await db.drawing.findUnique({
    where: { id },
    include: {
      uploadedBy: true,
      versions: { orderBy: { uploadedAt: "desc" } },
      annotations: { include: { author: true } },
      issues: {
        where: { status: { not: "CLOSED" } },
        include: { assignee: true },
        take: 20,
      },
    },
  });

  if (!drawing) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ data: drawing });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const body = await req.json();
  const parsed = updateSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const data: Record<string, unknown> = { ...parsed.data };
  if (parsed.data.tags) data.tags = JSON.stringify(parsed.data.tags);

  const drawing = await db.drawing.update({ where: { id }, data });
  return NextResponse.json({ data: drawing });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  await db.drawing.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}
