import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await db.user.findUnique({ where: { id: session.user.id }, select: { orgId: true } });
  if (!user?.orgId) return NextResponse.json({ data: [] });

  const members = await db.orgMember.findMany({
    where: { orgId: user.orgId },
    include: { user: { select: { id: true, name: true, email: true, image: true, role: true, createdAt: true, title: true } } },
    orderBy: { joinedAt: "asc" },
  });

  return NextResponse.json({ data: members });
}
