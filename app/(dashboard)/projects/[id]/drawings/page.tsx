import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { DrawingsModule } from "@/components/drawings/drawings-module";

export const metadata = { title: "Bản vẽ" };

async function getData(projectId: string) {
  const [drawings, folders, versionSets] = await Promise.all([
    db.drawing.findMany({
      where: { projectId },
      include: {
        uploadedBy: true,
        versions: { orderBy: { uploadedAt: "desc" }, take: 1 },
        _count: { select: { issues: true, annotations: true } },
      },
      orderBy: { updatedAt: "desc" },
    }),
    db.drawingFolder.findMany({ where: { projectId } }),
    db.versionSet.findMany({ where: { projectId } }),
  ]);
  return { drawings, folders, versionSets };
}

export default async function DrawingsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const { drawings, folders, versionSets } = await getData(id);

  return (
    <DrawingsModule
      projectId={id}
      drawings={drawings as Parameters<typeof DrawingsModule>[0]["drawings"]}
      folders={folders}
      versionSets={versionSets}
      currentUserId={session!.user!.id!}
    />
  );
}
