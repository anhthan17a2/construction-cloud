import type {
  User,
  Project,
  Drawing,
  DrawingVersion,
  DrawingFolder,
  VersionSet,
  Annotation,
  Issue,
  RFI,
  PunchItem,
  Comment,
  Attachment,
  ProjectMember,
  Activity,
  Notification,
} from "@prisma/client";

export type {
  User,
  Project,
  Drawing,
  DrawingVersion,
  DrawingFolder,
  VersionSet,
  Annotation,
  Issue,
  RFI,
  PunchItem,
  Comment,
  Attachment,
  ProjectMember,
  Activity,
  Notification,
};

// String literal types (replacing Prisma enums for SQLite compatibility)
export type Role = "ADMIN" | "PROJECT_MANAGER" | "ENGINEER" | "FIELD_TECH" | "VIEWER";
export type ProjectStatus = "ACTIVE" | "ON_HOLD" | "COMPLETED" | "ARCHIVED";
export type DrawingDiscipline = "HVAC" | "PLUMBING" | "ELECTRICAL" | "FIRE_PROTECTION" | "ARCHITECTURAL" | "STRUCTURAL" | "CIVIL" | "OTHER";
export type DrawingStatus = "DRAFT" | "IN_REVIEW" | "APPROVED" | "SUPERSEDED" | "VOID";
export type IssueStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED" | "VOID";
export type IssuePriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type IssueType = "DEFECT" | "DESIGN_ISSUE" | "SAFETY" | "CLARIFICATION" | "OTHER";
export type RFIStatus = "DRAFT" | "SUBMITTED" | "IN_REVIEW" | "ANSWERED" | "CLOSED";
export type PunchStatus = "OPEN" | "READY_FOR_REVIEW" | "ACCEPTED" | "REJECTED" | "VOID";
export type NotificationType = "ISSUE_ASSIGNED" | "ISSUE_COMMENT" | "DRAWING_UPLOADED" | "RFI_RESPONSE" | "PUNCH_UPDATED" | "MENTION" | "PROJECT_INVITE";

// Extended types with relations
export type ProjectWithMembers = Project & {
  members: (ProjectMember & { user: User })[];
  _count: {
    drawings: number;
    issues: number;
    rfis: number;
    punchItems: number;
  };
};

export type DrawingWithVersion = Drawing & {
  versions: DrawingVersion[];
  uploadedBy: User;
  _count: { issues: number; annotations: number };
};

export type IssueWithRelations = Issue & {
  createdBy: User;
  assignee: User | null;
  drawing: Drawing | null;
  comments: (Comment & { author: User })[];
  attachments: Attachment[];
};

export type RFIWithRelations = RFI & {
  createdBy: User;
  assignee: User | null;
  drawing: Drawing | null;
  comments: (Comment & { author: User })[];
  attachments: Attachment[];
};

export type PunchItemWithRelations = PunchItem & {
  createdBy: User;
  assignee: User | null;
  comments: (Comment & { author: User })[];
  attachments: Attachment[];
};

// API response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Upload types
export interface UploadUrlResponse {
  uploadUrl: string;
  fileKey: string;
  fileUrl: string;
}

// Annotation types
export interface AnnotationData {
  type: "pen" | "highlight" | "line" | "arrow" | "rect" | "circle" | "text" | "stamp" | "cloud" | "measurement" | "photo" | "callout" | "polygon";
  color: string;
  strokeWidth: number;
  points?: { x: number; y: number }[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  text?: string;
  stampType?: "approved" | "rejected" | "review";
  imageUrl?: string; // for photo pin annotations
  filled?: boolean;  // filled shape (rect, circle, cloud, polygon)
  fillOpacity?: number; // 0–1, default 0.4
  hatch?: "none" | "solid" | "h" | "v" | "d45" | "cross" | "xcross"; // hatch pattern
  hatchSpacing?: number; // normalized units, default 8
  labelLocked?: boolean;  // measurement: user manually set this text, skip auto-recompute
  measureUnit?: string;   // per-measurement unit override (DisplayUnit); undefined = use global
  fontSize?: number;    // font size in screen-px at scale=1 (scaled with zoom)
  fontStyle?: "normal" | "bold" | "italic" | "bold-italic";
  fontFamily?: string;  // css font-family, e.g. "sans-serif"
  pageNumber: number;
  // All coords are normalized to scale=1.0 — multiply by current scale when rendering
}

// Session user
export interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: Role;
}
