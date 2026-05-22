import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  issueId:     z.string().optional(),
  rfiId:       z.string().optional(),
  punchItemId: z.string().optional(),
  filename:    z.string(),
  fileKey:     z.string(),
  fileUrl:     z.string(),
  fileSize:    z.number().int(),
  mimeType:    z.string(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  if (!parsed.data.issueId && !parsed.data.rfiId && !parsed.data.punchItemId) {
    return NextResponse.json({ error: "Need issueId, rfiId, or punchItemId" }, { status: 400 });
  }

  const attachment = await db.attachment.create({
    data: {
      filename:    parsed.data.filename,
      fileKey:     parsed.data.fileKey,
      fileUrl:     parsed.data.fileUrl,
      fileSize:    parsed.data.fileSize,
      mimeType:    parsed.data.mimeType,
      issueId:     parsed.data.issueId ?? null,
      rfiId:       parsed.data.rfiId ?? null,
      punchItemId: parsed.data.punchItemId ?? null,
      uploadedBy:  session.user.id!,
    },
  });

  return NextResponse.json({ data: attachment }, { status: 201 });
}
