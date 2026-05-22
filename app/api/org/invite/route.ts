import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  role:  z.enum(["ADMIN","MEMBER","VIEWER"]).default("MEMBER"),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const caller = await db.user.findUnique({ where: { id: session.user.id }, select: { orgId: true } });
  if (!caller?.orgId) return NextResponse.json({ error: "No organisation" }, { status: 403 });

  const callerMember = await db.orgMember.findUnique({
    where: { orgId_userId: { orgId: caller.orgId, userId: session.user.id } },
  });
  if (!callerMember || !["OWNER","ADMIN"].includes(callerMember.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body  = await req.json();
  const parse = schema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: "Invalid" }, { status: 400 });

  const { email, role } = parse.data;

  // Check if already a member
  const existing = await db.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) {
    const alreadyMember = await db.orgMember.findUnique({
      where: { orgId_userId: { orgId: caller.orgId, userId: existing.id } },
    });
    if (alreadyMember) {
      return NextResponse.json({ error: "Người dùng đã là thành viên" }, { status: 409 });
    }
    // Add directly
    await db.orgMember.create({ data: { orgId: caller.orgId, userId: existing.id, role } });
    await db.user.update({ where: { id: existing.id }, data: { role, orgId: caller.orgId } });
    return NextResponse.json({ data: { message: "Đã thêm thành viên trực tiếp" } });
  }

  // Create invitation (expires in 7 days)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const invite = await db.orgInvitation.create({
    data: { orgId: caller.orgId, email, role, invitedBy: session.user.id, expiresAt },
    include: { org: { select: { name: true, slug: true } } },
  });

  // In production you'd send an email here. For now, return the invite link.
  const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/register?invite=${invite.token}`;

  return NextResponse.json({ data: { token: invite.token, inviteUrl, expiresAt } }, { status: 201 });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const caller = await db.user.findUnique({ where: { id: session.user.id }, select: { orgId: true } });
  if (!caller?.orgId) return NextResponse.json({ data: [] });

  const invites = await db.orgInvitation.findMany({
    where:   { orgId: caller.orgId, usedAt: null },
    include: { inviter: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: invites });
}
