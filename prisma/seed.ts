import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ── Organisation ────────────────────────────────────────────────────────
  const org = await db.organization.upsert({
    where:  { slug: "intech-group" },
    update: {},
    create: { name: "INTECH Group", slug: "intech-group", plan: "pro" },
  });

  // Users
  const hashedPassword = await bcrypt.hash("password123", 12);

  const admin = await db.user.upsert({
    where:  { email: "admin@demo.com" },
    update: {},
    create: {
      email: "admin@demo.com", name: "Nguyễn Văn Admin",
      password: hashedPassword, role: "ADMIN",
      company: "INTECH Group", title: "Project Director", orgId: org.id,
    },
  });

  const pm = await db.user.upsert({
    where:  { email: "pm@demo.com" },
    update: {},
    create: {
      email: "pm@demo.com", name: "Trần Thị Lan",
      password: hashedPassword, role: "PROJECT_MANAGER",
      company: "INTECH Group", title: "Project Manager", orgId: org.id,
    },
  });

  const engineer = await db.user.upsert({
    where:  { email: "engineer@demo.com" },
    update: {},
    create: {
      email: "engineer@demo.com", name: "Lê Minh Kỹ Sư",
      password: hashedPassword, role: "ENGINEER",
      company: "INTECH Group", title: "MEP Engineer", orgId: org.id,
    },
  });

  // Org members
  for (const { user, role } of [
    { user: admin,    role: "OWNER"  },
    { user: pm,       role: "ADMIN"  },
    { user: engineer, role: "MEMBER" },
  ]) {
    await db.orgMember.upsert({
      where:  { orgId_userId: { orgId: org.id, userId: user.id } },
      update: {},
      create: { orgId: org.id, userId: user.id, role },
    });
  }

  const tech = await db.user.upsert({
    where: { email: "tech@demo.com" },
    update: {},
    create: {
      email: "tech@demo.com",
      name: "Phạm Văn Kỹ Thuật",
      password: hashedPassword,
      role: "FIELD_TECH",
      company: "INTECH Group",
      title: "Field Technician",
    },
  });

  console.log("✅ Users created");

  // Project 1
  const project1 = await db.project.upsert({
    where: { code: "DN-001" },
    update: {},
    create: {
      code: "DN-001",
      name: "Da Nang Office Tower",
      description: "40-storey mixed-use development with MEP systems",
      location: "Da Nang, Vietnam",
      client: "Da Nang Development Corp",
      color: "#0EA5E9",
      status: "ACTIVE",
      startDate: new Date("2025-01-01"),
      createdById: admin.id,
    },
  });

  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project1.id, userId: admin.id } },
    update: {},
    create: { projectId: project1.id, userId: admin.id, role: "ADMIN" },
  });
  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project1.id, userId: pm.id } },
    update: {},
    create: { projectId: project1.id, userId: pm.id, role: "PROJECT_MANAGER" },
  });
  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project1.id, userId: engineer.id } },
    update: {},
    create: { projectId: project1.id, userId: engineer.id, role: "ENGINEER" },
  });
  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project1.id, userId: tech.id } },
    update: {},
    create: { projectId: project1.id, userId: tech.id, role: "FIELD_TECH" },
  });

  // Project 2
  const project2 = await db.project.upsert({
    where: { code: "HCM-002" },
    update: {},
    create: {
      code: "HCM-002",
      name: "Ho Chi Minh City Metro Station",
      description: "Underground metro station MEP infrastructure",
      location: "Ho Chi Minh City, Vietnam",
      client: "HCMC Metro Corp",
      color: "#8B5CF6",
      status: "ACTIVE",
      createdById: admin.id,
    },
  });

  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project2.id, userId: admin.id } },
    update: {},
    create: { projectId: project2.id, userId: admin.id, role: "ADMIN" },
  });
  await db.projectMember.upsert({
    where: { projectId_userId: { projectId: project2.id, userId: pm.id } },
    update: {},
    create: { projectId: project2.id, userId: pm.id, role: "PROJECT_MANAGER" },
  });

  console.log("✅ Projects created");

  // Demo PDF URL — publicly accessible, CORS-friendly
  const DEMO_PDF = "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

  const drawingData = [
    { sheetNumber: "E-001", title: "Main Electrical Single Line", discipline: "ELECTRICAL" as const, rev: "R3", status: "APPROVED" as const },
    { sheetNumber: "E-002", title: "Basement B1 Electrical Plan", discipline: "ELECTRICAL" as const, rev: "R2", status: "IN_REVIEW" as const },
    { sheetNumber: "M-001", title: "Level 1 HVAC Plan", discipline: "HVAC" as const, rev: "R2", status: "APPROVED" as const },
    { sheetNumber: "M-002", title: "AHU Room Layout", discipline: "HVAC" as const, rev: "R1", status: "DRAFT" as const },
    { sheetNumber: "P-001", title: "Domestic Water System", discipline: "PLUMBING" as const, rev: "R2", status: "IN_REVIEW" as const },
    { sheetNumber: "F-001", title: "Sprinkler System — Ground Floor", discipline: "FIRE_PROTECTION" as const, rev: "R1", status: "DRAFT" as const },
  ];

  for (const d of drawingData) {
    const existing = await db.drawing.findUnique({
      where: { projectId_sheetNumber: { projectId: project1.id, sheetNumber: d.sheetNumber } },
    });
    if (!existing) {
      await db.drawing.create({
        data: {
          projectId: project1.id,
          sheetNumber: d.sheetNumber,
          title: d.title,
          discipline: d.discipline,
          status: d.status,
          currentRev: d.rev,
          uploadedById: engineer.id,
          versions: {
            create: {
              revision: d.rev,
              fileKey: `demo/${d.sheetNumber}.pdf`,
              fileUrl: DEMO_PDF,
              fileSize: 4096000,
              uploadedBy: engineer.id,
              isLatest: true,
            },
          },
        },
      });
    }
  }

  console.log("✅ Drawings created");

  // Sample issues
  const drawings = await db.drawing.findMany({ where: { projectId: project1.id } });

  const issueData = [
    { title: "HVAC duct clearance conflict with structural beam", type: "DESIGN_ISSUE" as const, priority: "HIGH" as const, status: "OPEN" as const },
    { title: "Missing fire damper at duct penetration FL-05", type: "SAFETY" as const, priority: "CRITICAL" as const, status: "IN_PROGRESS" as const },
    { title: "Electrical conduit routing unclear in basement", type: "CLARIFICATION" as const, priority: "MEDIUM" as const, status: "OPEN" as const },
    { title: "Pump base dimension mismatch", type: "DEFECT" as const, priority: "HIGH" as const, status: "RESOLVED" as const },
    { title: "Sprinkler head position conflicts with ceiling fixture", type: "DESIGN_ISSUE" as const, priority: "MEDIUM" as const, status: "OPEN" as const },
  ];

  for (let i = 0; i < issueData.length; i++) {
    const id = issueData[i];
    const existing = await db.issue.findFirst({
      where: { projectId: project1.id, number: i + 1 },
    });
    if (!existing) {
      await db.issue.create({
        data: {
          projectId: project1.id,
          number: i + 1,
          title: id.title,
          type: id.type,
          priority: id.priority,
          status: id.status,
          createdById: engineer.id,
          assigneeId: i % 2 === 0 ? tech.id : engineer.id,
          drawingId: drawings[i % drawings.length]?.id ?? null,
        },
      });
    }
  }

  console.log("✅ Issues created");

  // Sample RFIs
  const rfiData = [
    { subject: "HVAC duct material specification", question: "Can we use galvanized steel duct instead of stainless steel for sections below FL3?" },
    { subject: "Electrical switchboard location", question: "The indicated location for MSB conflicts with the structural column. Please advise alternative." },
  ];

  for (let i = 0; i < rfiData.length; i++) {
    const r = rfiData[i];
    const existing = await db.rFI.findFirst({
      where: { projectId: project1.id, number: i + 1 },
    });
    if (!existing) {
      await db.rFI.create({
        data: {
          projectId: project1.id,
          number: i + 1,
          subject: r.subject,
          question: r.question,
          status: i === 0 ? "SUBMITTED" : "DRAFT",
          createdById: engineer.id,
          assigneeId: pm.id,
        },
      });
    }
  }

  console.log("✅ RFIs created");

  console.log("\n🎉 Seed complete!");
  console.log("\nDemo accounts:");
  console.log("  Admin:    admin@demo.com    / password123");
  console.log("  PM:       pm@demo.com       / password123");
  console.log("  Engineer: engineer@demo.com / password123");
  console.log("  Tech:     tech@demo.com     / password123");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
