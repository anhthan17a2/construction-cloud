# ConstructionCloud

A modern SaaS platform for construction drawing management and field collaboration — similar to PlanGrid / Autodesk Construction Cloud.

Built with **Next.js 15**, **TypeScript**, **PostgreSQL** (Prisma), **shadcn/ui**, and **AWS S3**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) + TypeScript |
| UI | TailwindCSS + shadcn/ui + Radix UI |
| Auth | Auth.js v5 (next-auth) |
| Database | PostgreSQL + Prisma ORM |
| File Storage | AWS S3 (presigned uploads) |
| Realtime | Pusher |
| PDF Rendering | PDF.js |
| Charts | Recharts |
| Deployment | Vercel |

---

## Project Structure

```
construction-cloud/
├── app/
│   ├── (auth)/login/          # Login page
│   ├── (dashboard)/           # Protected app shell
│   │   ├── page.tsx           # Projects list
│   │   └── projects/[id]/
│   │       ├── page.tsx       # Project dashboard
│   │       ├── drawings/      # Sheets list + PDF viewer
│   │       ├── issues/        # Issues board
│   │       ├── rfis/          # RFI tracker
│   │       ├── punch-list/    # Punch list
│   │       ├── photos/        # Photo gallery
│   │       ├── field-reports/ # Field reports
│   │       └── team/          # Team management
│   └── api/
│       ├── auth/              # NextAuth handlers
│       ├── projects/          # Project CRUD
│       ├── drawings/          # Drawing management + annotations
│       ├── issues/            # Issue tracking
│       ├── rfis/              # RFI management
│       ├── punch-items/       # Punch list CRUD
│       └── upload/presign/    # S3 presigned URLs
├── components/
│   ├── layout/                # Sidebar, header
│   ├── projects/              # Project cards, dashboard
│   ├── drawings/              # Drawing list, upload modal, detail panel
│   ├── viewer/                # PDF viewer + markup canvas + annotation panel
│   ├── issues/                # Issues board + create modal
│   ├── rfis/                  # RFI list
│   ├── punch-list/            # Punch list module
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── auth.ts                # Auth.js config
│   ├── prisma.ts              # Prisma client
│   ├── s3.ts                  # AWS S3 helpers
│   ├── pusher.ts              # Realtime events
│   └── utils.ts               # Utilities + constants
├── prisma/
│   ├── schema.prisma          # Full database schema
│   └── seed.ts                # Demo data seeder
└── types/index.ts             # TypeScript types
```

---

## Quick Start

### 1. Prerequisites

- Node.js 20+
- PostgreSQL 15+
- AWS S3 bucket (or use Supabase Storage)

### 2. Install

```bash
cd construction-cloud
npm install
```

### 3. Configure environment

```bash
cp .env.example .env
```

Edit `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/construction_cloud"
AUTH_SECRET="your-random-32-char-secret"
AUTH_URL="http://localhost:3000"

# AWS S3
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
AWS_REGION="ap-southeast-1"
AWS_S3_BUCKET="your-bucket"

# Pusher (optional for realtime)
PUSHER_APP_ID="..."
PUSHER_KEY="..."
PUSHER_SECRET="..."
PUSHER_CLUSTER="ap1"
NEXT_PUBLIC_PUSHER_KEY="..."
NEXT_PUBLIC_PUSHER_CLUSTER="ap1"
```

### 4. Database setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed demo data
npm run db:seed
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Demo Accounts

| Role | Email | Password |
|---|---|---|
| Admin | admin@demo.com | password123 |
| Project Manager | pm@demo.com | password123 |
| Engineer | engineer@demo.com | password123 |
| Field Tech | tech@demo.com | password123 |

---

## Core Features

### Drawing Management
- Upload PDF drawings with drag & drop
- Auto-detect sheet number from filename (e.g. `M-102 HVAC Plan.pdf`)
- Version control with revision history
- Drawing categories: HVAC, Plumbing, Electrical, Fire Protection, Architectural, Structural
- Discipline-based folder tree navigation

### PDF Viewer & Markup
- High-performance PDF.js rendering
- Zoom in/out with fit-to-page
- Page navigation
- Markup tools: Pen, Highlight, Arrow, Rectangle, Circle, Text
- Stamps: APPROVED, REJECTED, FOR REVIEW
- Color palette + stroke width selection
- Undo/redo
- Save annotations to database
- Annotation panel showing all marks per page

### Issue Tracking
- Kanban board view (Open → In Progress → Resolved → Closed)
- List view with sortable columns
- Priority: Low, Medium, High, Critical
- Assign to team members
- Link issues to specific drawing sheets
- Due dates
- Comments and attachments

### RFI Module
- Create and track Requests for Information
- Status workflow: Draft → Submitted → In Review → Answered → Closed
- Link to drawing sheets
- Assignee workflow

### Punch List
- Create punch items with location
- One-click status progression
- Attach photos
- Assign to contractors/subcontractors

### Project Dashboard
- KPI cards (sheets, issues, RFIs, team size)
- Weekly activity chart
- Recent sheets and open issues
- Team members list

---

## Database Schema

18 tables covering:
- `users` — Authentication, roles, profile
- `projects` — Project metadata, status, color
- `project_members` — Role-based project access
- `drawings` — Sheet metadata, discipline, status
- `drawing_versions` — Revision history with S3 file references
- `drawing_folders` — Hierarchical folder tree
- `version_sets` — Logical grouping of drawing revisions
- `annotations` — Markup data stored as JSON
- `issues` — Field issues with priority/status
- `rfis` — Request for Information tracking
- `punch_items` — Punch list items
- `comments` — Threaded comments on issues/RFIs
- `attachments` — File attachments (S3 references)
- `notifications` — In-app notifications
- `activities` — Project activity timeline
- `audit_logs` — Change tracking

---

## API Routes

| Method | Path | Description |
|---|---|---|
| GET/POST | `/api/projects` | List / create projects |
| GET/PATCH/DELETE | `/api/projects/[id]` | Project detail |
| GET/POST | `/api/drawings` | List / upload drawing |
| PUT | `/api/drawings/[id]/annotations` | Save markup |
| GET/POST | `/api/issues` | List / create issues |
| PATCH/DELETE | `/api/issues/[id]` | Update / delete issue |
| GET/POST | `/api/rfis` | RFI management |
| POST | `/api/upload/presign` | Get S3 presigned URL |

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add environment variables in Vercel dashboard. Use **Supabase** or **Neon** for PostgreSQL in production.

---

## Using Supabase Instead of AWS S3

Replace `lib/s3.ts` with Supabase Storage:

```typescript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function uploadFile(path: string, file: Buffer, contentType: string) {
  const { data, error } = await supabase.storage
    .from("drawings")
    .upload(path, file, { contentType, upsert: true });
  if (error) throw error;
  return supabase.storage.from("drawings").getPublicUrl(data.path).data.publicUrl;
}
```

---

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button input dialog select dropdown-menu avatar badge card tabs scroll-area separator toast tooltip
```
