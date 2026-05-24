import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectsHeader } from "@/components/projects/projects-header";

export const metadata = { title: "Projects" };

async function getProjects(userId: string) {
  return db.project.findMany({
    where: {
      members: { some: { userId } },
    },
    include: {
      members: { include: { user: true }, take: 5 },
      _count: {
        select: { drawings: true, issues: true, rfis: true, punchItems: true },
      },
    },
    orderBy: { updatedAt: "desc" },
  });
}

export default async function ProjectsPage() {
  const session = await auth();
  const projects = await getProjects(session!.user!.id!);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      <ProjectsHeader count={projects.length} />
      <ProjectGrid projects={projects} />
    </div>
  );
}
