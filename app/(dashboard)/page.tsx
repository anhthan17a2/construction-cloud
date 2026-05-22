import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { ProjectGrid } from "@/components/projects/project-grid";
import { CreateProjectButton } from "@/components/projects/create-project-button";

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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold">Projects</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {projects.length} active project{projects.length !== 1 ? "s" : ""}
          </p>
        </div>
        <CreateProjectButton />
      </div>

      {/* Project grid */}
      <ProjectGrid projects={projects} />
    </div>
  );
}
