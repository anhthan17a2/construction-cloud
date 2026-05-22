import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import { ProjectSidebar } from "@/components/layout/project-sidebar";

async function getProject(id: string) {
  return db.project.findUnique({
    where: { id },
    include: {
      _count: {
        select: { drawings: true, issues: true, rfis: true, punchItems: true },
      },
    },
  });
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <div className="flex h-full overflow-hidden">
      <ProjectSidebar project={project} />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
