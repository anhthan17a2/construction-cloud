import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const schema = z.object({
  name:        z.string().min(2),
  email:       z.string().email(),
  password:    z.string().min(8),
  company:     z.string().min(2),
  inviteToken: z.string().optional(),
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .substring(0, 48);
}

async function uniqueSlug(base: string): Promise<string> {
  let slug = slugify(base) || "org";
  let n = 0;
  while (await db.organization.findUnique({ where: { slug } })) {
    n++;
    slug = `${slugify(base)}-${n}`;
  }
  return slug;
}

export async function POST(req: Request) {
  const body   = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  }

  const { name, email, password, company, inviteToken } = parsed.data;

  // ── Check email unique ──────────────────────────────────────────────────
  const existing = await db.user.findUnique({ where: { email } });
  if (existing) return NextResponse.json({ error: "Email đã được sử dụng" }, { status: 409 });

  const hashed = await bcrypt.hash(password, 12);

  // ── Handle invitation flow ────────────────────────────────────────────
  if (inviteToken) {
    const invite = await db.orgInvitation.findUnique({
      where:   { token: inviteToken },
      include: { org: true },
    });

    if (!invite || invite.usedAt || invite.expiresAt < new Date()) {
      return NextResponse.json({ error: "Lời mời không hợp lệ hoặc đã hết hạn" }, { status: 400 });
    }

    const user = await db.user.create({
      data: {
        name, email, password: hashed,
        company: invite.org.name,
        role: invite.role,
        orgId: invite.orgId,
      },
    });

    // Add to org
    await db.orgMember.create({ data: { orgId: invite.orgId, userId: user.id, role: invite.role } });
    // Mark invitation used
    await db.orgInvitation.update({ where: { id: invite.id }, data: { usedAt: new Date() } });

    return NextResponse.json({ data: { id: user.id } }, { status: 201 });
  }

  // ── New user → create new organisation ───────────────────────────────
  const slug = await uniqueSlug(company);
  const user = await db.$transaction(async (tx) => {
    const org = await tx.organization.create({
      data: { name: company, slug },
    });

    const u = await tx.user.create({
      data: {
        name, email, password: hashed,
        company,
        role: "ADMIN",      // first user of a new org is always ADMIN
        orgId: org.id,
      },
    });

    await tx.orgMember.create({ data: { orgId: org.id, userId: u.id, role: "OWNER" } });

    return u;
  });

  return NextResponse.json({ data: { id: user.id } }, { status: 201 });
}
