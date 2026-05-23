import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { put } from "@vercel/blob";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const ext = file.name.split(".").pop() ?? "bin";
  const filename = `${uuidv4()}.${ext}`;
  const pathname = `${folder}/${filename}`;

  const blob = await put(pathname, file, { access: "public" });

  return NextResponse.json({ fileKey: blob.pathname, fileUrl: blob.url });
}
