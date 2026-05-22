import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { ProjectDashboard } from "@/components/projects/project-dashboard";

type ChartDay = { name: string; issues: number; drawings: number };

async function getProjectData(id: string, userId: string) {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const [project, recentDrawings, openIssues, recentActivity, weeklyIssues, weeklyDrawings] = await Promise.all([
    db.project.findUnique({
      where: { id },
      include: {
        members: { include: { user: true } },
        _count: { select: { drawings: true, issues: true, rfis: true, punchItems: true } },
      },
    }),
    db.drawing.findMany({ where: { projectId: id }, include: { uploadedBy: true }, orderBy: { updatedAt: "desc" }, take: 6 }),
    db.issue.findMany({
      where: { projectId: id, status: { in: ["OPEN", "IN_PROGRESS"] } },
      include: { assignee: true, createdBy: true },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
    db.activity.findMany({ where: { projectId: id }, orderBy: { createdAt: "desc" }, take: 10 }),
    db.issue.findMany({ where: { projectId: id, createdAt: { gte: weekAgo } }, select: { createdAt: true } }),
    db.drawing.findMany({ where: { projectId: id, createdAt: { gte: weekAgo } }, select: { createdAt: true } }),
  ]);

  // Build last-7-days chart data
  const DAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const chartData: ChartDay[] = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekAgo.getTime() + (i + 1) * 24 * 60 * 60 * 1000);
    const dayStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const dayEnd   = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);
    return {
      name: DAYS[d.getDay()],
      issues:   weeklyIssues.filter(   (x) => x.createdAt >= dayStart && x.createdAt < dayEnd).length,
      drawings: weeklyDrawings.filter( (x) => x.createdAt >= dayStart && x.createdAt < dayEnd).length,
    };
  });

  return { project, recentDrawings, openIssues, recentActivity, chartData };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const { project, recentDrawings, openIssues, recentActivity, chartData } =
    await getProjectData(id, session!.user!.id!);

  if (!project) notFound();

  return (
    <ProjectDashboard
      project={project}
      recentDrawings={recentDrawings}
      openIssues={openIssues}
      recentActivity={recentActivity}
      chartData={chartData}
    />
  );
}
