import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

// Local file upload for development — stores to public/uploads/
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() ?? "bin";
  const filename = `${uuidv4()}.${ext}`;
  const uploadDir = join(process.cwd(), "public", "uploads", folder);

  await mkdir(uploadDir, { recursive: true });
  await writeFile(join(uploadDir, filename), buffer);

  const fileKey = `uploads/${folder}/${filename}`;
  const fileUrl = `${process.env.NEXT_PUBLIC_APP_URL}/uploads/${folder}/${filename}`;

  return NextResponse.json({ fileKey, fileUrl });
}
