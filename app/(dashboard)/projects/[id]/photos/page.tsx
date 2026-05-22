import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { PhotosModule } from "@/components/photos/photos-module";

export const metadata = { title: "Ảnh hiện trường" };

async function getData(projectId: string) {
  // Fetch photo annotations from all drawings in this project
  const drawings = await db.drawing.findMany({
    where: { projectId },
    include: {
      annotations: {
        where: { type: "photo" },
        include: { author: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  // Flatten and enrich
  const photos = drawings.flatMap((d) =>
    d.annotations
      .filter((a) => {
        try {
          const data = JSON.parse(a.data as string);
          return data.type === "photo" && data.imageUrl;
        } catch {
          return false;
        }
      })
      .map((a) => {
        const data = JSON.parse(a.data as string);
        return {
          id: a.id,
          imageUrl: data.imageUrl as string,
          text: (data.text as string) ?? "",
          drawingId: d.id,
          sheetNumber: d.sheetNumber,
          drawingTitle: d.title,
          author: a.author,
          createdAt: a.createdAt,
          x: data.x as number,
          y: data.y as number,
          pageNumber: data.pageNumber as number,
        };
      })
  );

  const members = await db.projectMember.findMany({
    where: { projectId },
    include: { user: { select: { id: true, name: true, image: true } } },
  });

  return { photos, drawings, members };
}

export default async function PhotosPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const { photos, drawings, members } = await getData(id);

  return (
    <PhotosModule
      projectId={id}
      photos={photos}
      drawings={drawings as Parameters<typeof PhotosModule>[0]["drawings"]}
      members={members as Parameters<typeof PhotosModule>[0]["members"]}
      currentUserId={session!.user!.id!}
    />
  );
}
