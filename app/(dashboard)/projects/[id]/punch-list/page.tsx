import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { PunchListModule } from "@/components/punch-list/punch-list-module";

export const metadata = { title: "Punch List" };

async function getData(projectId: string) {
  const [items, members] = await Promise.all([
    db.punchItem.findMany({
      where: { projectId },
      include: {
        createdBy: true,
        assignee: true,
        _count: { select: { comments: true, attachments: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.projectMember.findMany({
      where: { projectId },
      include: { user: { select: { id: true, name: true, image: true } } },
    }),
  ]);
  return { items, members };
}

export default async function PunchListPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const { items, members } = await getData(id);

  return (
    <PunchListModule
      projectId={id}
      items={items as Parameters<typeof PunchListModule>[0]["items"]}
      members={members as Parameters<typeof PunchListModule>[0]["members"]}
      currentUserId={session!.user!.id!}
    />
  );
}
