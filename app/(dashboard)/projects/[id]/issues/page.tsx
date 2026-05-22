import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { IssuesModule } from "@/components/issues/issues-module";

export const metadata = { title: "Issues" };

async function getData(projectId: string) {
  const [issues, drawings, members] = await Promise.all([
    db.issue.findMany({
      where: { projectId },
      include: {
        createdBy: true,
        assignee: true,
        drawing: true,
        _count: { select: { comments: true, attachments: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.drawing.findMany({
      where: { projectId },
      select: { id: true, sheetNumber: true, title: true },
    }),
    db.projectMember.findMany({
      where: { projectId },
      include: { user: { select: { id: true, name: true, image: true } } },
    }),
  ]);
  return { issues, drawings, members };
}

export default async function IssuesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const { issues, drawings, members } = await getData(id);

  return (
    <IssuesModule
      projectId={id}
      issues={issues as Parameters<typeof IssuesModule>[0]["issues"]}
      drawings={drawings}
      members={members as Parameters<typeof IssuesModule>[0]["members"]}
      currentUserId={session!.user!.id!}
    />
  );
}
