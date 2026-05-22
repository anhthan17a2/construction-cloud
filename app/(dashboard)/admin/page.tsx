import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/prisma";
import { AdminModule } from "@/components/admin/admin-module";

export const metadata = { title: "Admin Panel" };

export default async function AdminPage() {
  const session = await auth();
  const user = await db.user.findUnique({
    where: { id: session!.user!.id! },
    select: { role: true },
  });

  if (user?.role !== "ADMIN") redirect("/");

  const [users, projects] = await Promise.all([
    db.user.findMany({
      select: { id: true, name: true, email: true, role: true, company: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
    db.project.findMany({
      include: { _count: { select: { members: true, drawings: true, issues: true } } },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return <AdminModule users={users} projects={projects} />;
}
