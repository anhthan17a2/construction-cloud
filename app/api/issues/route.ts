import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { z } from "zod";

const createSchema = z.object({
  projectId: z.string(),
  title: z.string().min(3),
  description: z.string().optional(),
  status: z.enum(["OPEN","IN_PROGRESS","RESOLVED","CLOSED","VOID"]).default("OPEN"),
  priority: z.enum(["LOW","MEDIUM","HIGH","CRITICAL"]).default("MEDIUM"),
  type: z.enum(["DEFECT","DESIGN_ISSUE","SAFETY","CLARIFICATION","OTHER"]).default("DEFECT"),
  drawingId: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
  location: z.any().optional(),
  tags: z.array(z.string()).default([]),
});

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
  if (!projectId) return NextResponse.json({ error: "projectId required" }, { status: 400 });

  const issues = await db.issue.findMany({
    where: { projectId },
    include: {
      createdBy: true,
      assignee: true,
      drawing: true,
      _count: { select: { comments: true, attachments: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: issues });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { projectId, title, description, status, priority, type, drawingId, assigneeId, dueDate, location, tags } = parsed.data;

  // Get next issue number for project
  const lastIssue = await db.issue.findFirst({
    where: { projectId },
    orderBy: { number: "desc" },
    select: { number: true },
  });
  const number = (lastIssue?.number ?? 0) + 1;

  const issue = await db.issue.create({
    data: {
      projectId, title, description, status, priority, type, tags: JSON.stringify(tags ?? []),
      number,
      drawingId: drawingId ?? null,
      assigneeId: assigneeId ?? null,
      dueDate: dueDate ? new Date(dueDate) : null,
      location: location ?? null,
      createdById: session.user.id!,
    },
    include: {
      createdBy: true,
      assignee: true,
      drawing: true,
      _count: { select: { comments: true, attachments: true } },
    },
  });

  await db.activity.create({
    data: {
      projectId,
      userId: session.user.id!,
      actorName: session.user.name ?? "Unknown",
      action: "created",
      entity: "issue",
      entityId: issue.id,
      entityName: `#${number} ${title}`,
    },
  });

  if (assigneeId) {
    await db.notification.create({
      data: {
        userId: assigneeId,
        type: "ISSUE_ASSIGNED",
        title: "Issue assigned to you",
        body: `#${number}: ${title}`,
        link: `/projects/${projectId}/issues/${issue.id}`,
      },
    });
  }

  return NextResponse.json({ data: issue }, { status: 201 });
}
