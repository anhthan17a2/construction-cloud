import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { FieldReportsModule } from "@/components/field-reports/field-reports-module";

export const metadata = { title: "Báo cáo hiện trường" };

async function getData(projectId: string) {
  const [issues, punchItems, rfis, members] = await Promise.all([
    db.issue.findMany({
      where: { projectId },
      include: {
        createdBy: { select: { id: true, name: true, image: true } },
        assignee:  { select: { id: true, name: true, image: true } },
        drawing:   { select: { id: true, sheetNumber: true, title: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.punchItem.findMany({
      where: { projectId },
      include: {
        createdBy: { select: { id: true, name: true, image: true } },
        assignee:  { select: { id: true, name: true, image: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.rFI.findMany({
      where: { projectId },
      include: {
        createdBy: { select: { id: true, name: true, image: true } },
        assignee:  { select: { id: true, name: true, image: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    db.projectMember.findMany({
      where: { projectId },
      include: { user: { select: { id: true, name: true, image: true } } },
    }),
  ]);
  return { issues, punchItems, rfis, members };
}

export default async function FieldReportsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await auth();
  const { issues, punchItems, rfis } = await getData(id);

  return (
    <FieldReportsModule
      projectId={id}
      issues={issues as Parameters<typeof FieldReportsModule>[0]["issues"]}
      punchItems={punchItems as Parameters<typeof FieldReportsModule>[0]["punchItems"]}
      rfis={rfis as Parameters<typeof FieldReportsModule>[0]["rfis"]}
    />
  );
}
