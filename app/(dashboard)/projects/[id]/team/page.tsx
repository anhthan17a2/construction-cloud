import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { TeamModule } from "@/components/team/team-module";

export const metadata = { title: "Team" };

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: projectId } = await params;
  const session = await auth();

  const members = await db.projectMember.findMany({
    where: { projectId },
    include: { user: true },
    orderBy: { joinedAt: "asc" },
  });

  const project = await db.project.findUnique({
    where: { id: projectId },
    select: { id: true, name: true },
  });

  return (
    <TeamModule
      projectId={projectId}
      projectName={project?.name ?? ""}
      members={members}
      currentUserId={session!.user!.id!}
    />
  );
}
