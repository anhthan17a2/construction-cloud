import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { TeamManagement } from "@/components/settings/team-management";

export const metadata = { title: "Quản lý thành viên" };

async function getData(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: { primaryOrg: true },
  });
  if (!user?.orgId) return null;

  const members = await db.orgMember.findMany({
    where:   { orgId: user.orgId },
    include: { user: { select: { id: true, name: true, email: true, image: true, createdAt: true, title: true } } },
    orderBy: { joinedAt: "asc" },
  });

  const invitations = await db.orgInvitation.findMany({
    where:   { orgId: user.orgId, usedAt: null },
    include: { inviter: { select: { name: true } } },
    orderBy: { createdAt: "desc" },
  });

  const callerMember = members.find((m) => m.userId === userId);

  return {
    org:           user.primaryOrg!,
    members:       members.map((m) => ({ ...m, role: m.role as "OWNER"|"ADMIN"|"MEMBER"|"VIEWER" })),
    invitations,
    callerRole:    (callerMember?.role ?? "MEMBER") as "OWNER"|"ADMIN"|"MEMBER"|"VIEWER",
    currentUserId: userId,
  };
}

export default async function TeamPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const data = await getData(session.user.id);
  if (!data) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Bạn chưa thuộc tổ chức nào.
      </div>
    );
  }

  if (!["OWNER","ADMIN"].includes(data.callerRole)) {
    redirect("/");
  }

  return <TeamManagement {...data} />;
}
