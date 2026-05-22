import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const user = session.user;

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar user={user} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <AppHeader user={user} />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
