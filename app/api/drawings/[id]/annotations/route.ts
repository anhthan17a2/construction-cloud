import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

// Use .catchall so extra fields (imageUrl, hatch, filled, fillOpacity, etc.) are preserved
const annotationItemSchema = z.object({
  type:        z.string(),
  color:       z.string(),
  strokeWidth: z.number(),
  pageNumber:  z.number(),
}).catchall(z.unknown());

const schema = z.object({
  annotations: z.array(annotationItemSchema),
  userId: z.string(),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;

  const annotations = await db.annotation.findMany({
    where: { drawingId: id },
    include: { author: true },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json({ data: annotations });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id: drawingId } = await params;

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });

  const { annotations, userId } = parsed.data;

  // Delete existing annotations for this user and drawing
  await db.annotation.deleteMany({ where: { drawingId, authorId: userId } });

  // Re-create all
  if (annotations.length > 0) {
    await db.annotation.createMany({
      data: annotations.map((ann) => ({
        drawingId,
        authorId: userId,
        type:        String(ann.type),
        color:       String(ann.color),
        strokeWidth: Number(ann.strokeWidth),
        pageNumber:  Number(ann.pageNumber),
        data: JSON.stringify(ann), // full object — includes imageUrl, hatch, filled, etc.
      })),
    });
  }

  return NextResponse.json({ message: "Saved" });
}
