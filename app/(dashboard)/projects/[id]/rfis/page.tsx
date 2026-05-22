import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { RFIsModule } from "@/components/rfis/rfis-module";

export const metadata = { title: "RFIs" };

async function getData(projectId: string) {
  const [rfis, drawings, members] = await Promise.all([
    db.rFI.findMany({
      where: { projectId },
      include: {
        createdBy: true,
        assignee: true,
        drawing: true,
        _count: { select: { comments: true } },
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
  return { rfis, drawings, members };
}

export default async function RFIsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const { rfis, drawings, members } = await getData(id);

  return (
    <RFIsModule
      projectId={id}
      rfis={rfis as Parameters<typeof RFIsModule>[0]["rfis"]}
      drawings={drawings}
      members={members as Parameters<typeof RFIsModule>[0]["members"]}
      currentUserId={session!.user!.id!}
    />
  );
}
