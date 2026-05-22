import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  role: z.enum(["OWNER","ADMIN","MEMBER","VIEWER"]),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Caller must be ADMIN or OWNER of the org
  const caller = await db.user.findUnique({ where: { id: session.user.id }, select: { orgId: true } });
  if (!caller?.orgId) return NextResponse.json({ error: "No organisation" }, { status: 403 });

  const callerMember = await db.orgMember.findUnique({
    where: { orgId_userId: { orgId: caller.orgId, userId: session.user.id } },
  });
  if (!callerMember || !["OWNER","ADMIN"].includes(callerMember.role)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { userId } = await params;
  const body  = await req.json();
  const parse = schema.safeParse(body);
  if (!parse.success) return NextResponse.json({ error: "Invalid role" }, { status: 400 });

  // Cannot change OWNER role unless caller is also OWNER
  const target = await db.orgMember.findUnique({
    where: { orgId_userId: { orgId: caller.orgId, userId } },
  });
  if (target?.role === "OWNER" && callerMember.role !== "OWNER") {
    return NextResponse.json({ error: "Không thể thay đổi role của OWNER" }, { status: 403 });
  }

  const [updated] = await Promise.all([
    db.orgMember.update({
      where: { orgId_userId: { orgId: caller.orgId, userId } },
      data:  { role: parse.data.role },
    }),
    // Sync to User.role for app-wide permission checks
    db.user.update({
      where: { id: userId },
      data:  { role: parse.data.role === "OWNER" ? "ADMIN" : parse.data.role },
    }),
  ]);

  return NextResponse.json({ data: updated });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
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

  const { userId } = await params;
  // Cannot remove yourself
  if (userId === session.user.id) {
    return NextResponse.json({ error: "Không thể xóa chính mình" }, { status: 400 });
  }

  await db.orgMember.delete({
    where: { orgId_userId: { orgId: caller.orgId, userId } },
  });

  return NextResponse.json({ message: "Removed" });
}
