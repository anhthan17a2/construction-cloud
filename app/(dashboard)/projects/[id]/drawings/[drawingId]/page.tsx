import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { generateDownloadUrl } from "@/lib/s3";
import { PDFViewer } from "@/components/viewer/pdf-viewer";

export async function generateMetadata({ params }: { params: Promise<{ drawingId: string }> }) {
  const { drawingId } = await params;
  const drawing = await db.drawing.findUnique({ where: { id: drawingId }, select: { title: true, sheetNumber: true } });
  return { title: drawing ? `${drawing.sheetNumber} — ${drawing.title}` : "Bản vẽ" };
}

async function getDrawing(drawingId: string) {
  return db.drawing.findUnique({
    where: { id: drawingId },
    include: {
      versions: { orderBy: { uploadedAt: "desc" } },
      annotations: { include: { author: true } },
      issues: {
        where: { status: { not: "CLOSED" } },
        include: { assignee: true },
        take: 20,
      },
    },
  });
}

export default async function DrawingViewerPage({
  params,
}: {
  params: Promise<{ id: string; drawingId: string }>;
}) {
  const { id: projectId, drawingId } = await params;
  const session = await auth();
  const drawing = await getDrawing(drawingId);
  if (!drawing) notFound();

  const latestVersion = drawing.versions[0];
  let fileUrl: string | null = null;

  if (latestVersion) {
    const key = latestVersion.fileKey;
    if (latestVersion.fileUrl?.startsWith("https://")) {
      // Vercel Blob or any direct HTTPS URL — use as-is
      fileUrl = latestVersion.fileUrl;
    } else if (key.startsWith("uploads/")) {
      fileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/${key}`;
    } else {
      // Legacy S3 key — try signed URL
      try {
        fileUrl = await generateDownloadUrl(key);
      } catch {
        fileUrl = null;
      }
    }
  }

  return (
    <PDFViewer
      drawing={drawing}
      fileUrl={fileUrl}
      projectId={projectId}
      currentUserId={session!.user!.id!}
    />
  );
}
