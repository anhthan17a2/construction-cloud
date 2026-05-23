import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// One-time setup endpoint — creates admin user if DB is empty
// DELETE this file after first use
export async function GET() {
  const userCount = await db.user.count();
  if (userCount > 0) {
    return NextResponse.json({ message: "Already set up", users: userCount });
  }

  // Create organization
  const org = await db.organization.create({
    data: {
      name: "Demo Organization",
      slug: "demo-org",
      plan: "free",
    },
  });

  // Create admin user
  const hash = await bcrypt.hash("Admin@123", 12);
  const user = await db.user.create({
    data: {
      name: "Admin",
      email: "admin@demo.com",
      password: hash,
      role: "ADMIN",
      orgId: org.id,
    },
  });

  // Link user to org as OWNER
  await db.orgMember.create({
    data: {
      orgId: org.id,
      userId: user.id,
      role: "OWNER",
    },
  });

  return NextResponse.json({
    success: true,
    message: "Admin created",
    email: "admin@demo.com",
    password: "Admin@123",
    org: org.slug,
  });
}
