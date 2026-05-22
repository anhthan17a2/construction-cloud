import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { SettingsModule } from "@/components/settings/settings-module";

export const metadata = { title: "Cài đặt" };

export default async function SettingsPage() {
  const session = await auth();
  const user = await db.user.findUnique({
    where: { id: session!.user!.id! },
    select: { id: true, name: true, email: true, image: true, company: true, title: true, phone: true, role: true },
  });

  return <SettingsModule user={user!} />;
}
