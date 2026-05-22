import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { generateUploadUrl } from "@/lib/s3";
import { z } from "zod";

const schema = z.object({
  filename: z.string(),
  contentType: z.string(),
  folder: z.string().default("uploads"),
});

const isMockS3 = !process.env.AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID === "mock-key";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  // In dev mode with mock S3 credentials, tell client to use local upload
  if (isMockS3) {
    return NextResponse.json({ useLocalUpload: true, folder: parsed.data.folder });
  }

  const { filename, contentType, folder } = parsed.data;
  const result = await generateUploadUrl(folder, filename, contentType);
  return NextResponse.json(result);
}
