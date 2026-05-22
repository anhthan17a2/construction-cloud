import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";
import { pusherServer } from "@/lib/pusher";

const schema = z.object({
  body: z.string().min(1),
  issueId: z.string().optional(),
  rfiId: z.string().optional(),
  punchItemId: z.string().optional(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { body: text, issueId, rfiId, punchItemId } = parsed.data;

  if (!issueId && !rfiId && !punchItemId) {
    return NextResponse.json({ error: "Need at least one parent ID" }, { status: 400 });
  }

  const comment = await db.comment.create({
    data: {
      body: text,
      authorId: session.user.id!,
      issueId: issueId ?? null,
      rfiId: rfiId ?? null,
      punchItemId: punchItemId ?? null,
    },
    include: { author: true },
  });

  // Realtime: push to Pusher channel (no-op when mock credentials)
  if (issueId) {
    await pusherServer.trigger(`issue-${issueId}`, "comment:added", { comment });
  }
  if (rfiId) {
    await pusherServer.trigger(`rfi-${rfiId}`, "comment:added", { comment });
  }

  return NextResponse.json({ data: comment }, { status: 201 });
}
