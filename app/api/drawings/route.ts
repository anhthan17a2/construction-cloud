import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const createSchema = z.object({
  projectId: z.string(),
  sheetNumber: z.string().min(1),
  title: z.string().min(1),
  discipline: z.enum(["HVAC","PLUMBING","ELECTRICAL","FIRE_PROTECTION","ARCHITECTURAL","STRUCTURAL","CIVIL","OTHER"]),
  revision: z.string().default("R1"),
  fileKey: z.string(),
  fileUrl: z.string(),
  fileSize: z.number().int(),
  pageCount: z.number().int().default(1),
  thumbnailUrl: z.string().optional(),
  versionSetName: z.string().optional(),
  folderId: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  if (!projectId) return NextResponse.json({ error: "projectId required" }, { status: 400 });

  const drawings = await db.drawing.findMany({
    where: { projectId },
    include: {
      uploadedBy: true,
      versions: { orderBy: { uploadedAt: "desc" }, take: 1 },
      _count: { select: { issues: true, annotations: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json({ data: drawings });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { projectId, sheetNumber, title, discipline, revision, fileKey, fileUrl, fileSize, pageCount, thumbnailUrl, tags, folderId } = parsed.data;

  // Check if sheet number already exists
  const existing = await db.drawing.findUnique({
    where: { projectId_sheetNumber: { projectId, sheetNumber } },
  });

  if (existing) {
    // Add new revision to existing drawing
    const updated = await db.drawing.update({
      where: { id: existing.id },
      data: {
        currentRev: revision,
        updatedAt: new Date(),
        versions: {
          updateMany: { where: { drawingId: existing.id }, data: { isLatest: false } },
          create: {
            revision, fileKey, fileUrl, fileSize,
            uploadedBy: session.user.id!,
            isLatest: true,
          },
        },
      },
      include: {
        uploadedBy: true,
        versions: { orderBy: { uploadedAt: "desc" }, take: 1 },
        _count: { select: { issues: true, annotations: true } },
      },
    });
    return NextResponse.json({ data: updated });
  }

  const drawing = await db.drawing.create({
    data: {
      projectId, sheetNumber, title, discipline,
      currentRev: revision, pageCount, thumbnailUrl, tags: JSON.stringify(tags ?? []),
      folderId: folderId ?? null,
      uploadedById: session.user.id!,
      versions: {
        create: {
          revision, fileKey, fileUrl, fileSize,
          uploadedBy: session.user.id!,
          isLatest: true,
        },
      },
    },
    include: {
      uploadedBy: true,
      versions: { orderBy: { uploadedAt: "desc" }, take: 1 },
      _count: { select: { issues: true, annotations: true } },
    },
  });

  await db.activity.create({
    data: {
      projectId,
      userId: session.user.id!,
      actorName: session.user.name ?? "Unknown",
      action: "uploaded",
      entity: "drawing",
      entityId: drawing.id,
      entityName: `${sheetNumber} — ${title}`,
    },
  });

  return NextResponse.json({ data: drawing }, { status: 201 });
}
