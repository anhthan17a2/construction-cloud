import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const addSchema = z.object({
  email: z.string().email(),
  role: z.enum(["ADMIN","PROJECT_MANAGER","BIM_MANAGER","ENGINEER","FIELD_TECH","QS_QC","VIEWER"]).default("VIEWER"),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id: projectId } = await params;

  const members = await db.projectMember.findMany({
    where: { projectId },
    include: { user: true },
    orderBy: { joinedAt: "asc" },
  });

  return NextResponse.json({ data: members });
}

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id: projectId } = await params;

  const body = await req.json();
  const parsed = addSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const user = await db.user.findUnique({ where: { email: parsed.data.email } });
  if (!user) return NextResponse.json({ error: "Người dùng không tồn tại" }, { status: 404 });

  const existing = await db.projectMember.findUnique({
    where: { projectId_userId: { projectId, userId: user.id } },
  });
  if (existing) return NextResponse.json({ error: "Đã là thành viên" }, { status: 409 });

  const member = await db.projectMember.create({
    data: { projectId, userId: user.id, role: parsed.data.role },
    include: { user: true },
  });

  await db.notification.create({
    data: {
      userId: user.id,
      type: "PROJECT_INVITE",
      title: "Bạn được thêm vào dự án",
      body: `Bạn đã được thêm vào dự án với vai trò ${parsed.data.role}`,
      link: `/projects/${projectId}`,
    },
  });

  return NextResponse.json({ data: member }, { status: 201 });
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id: projectId } = await params;

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });

  await db.projectMember.delete({
    where: { projectId_userId: { projectId, userId } },
  });

  return NextResponse.json({ message: "Removed" });
}
