import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string | null): string {
  if (!date) return "—";
  return format(new Date(date), "dd/MM/yyyy");
}

export function formatDateTime(date: Date | string | null): string {
  if (!date) return "—";
  return format(new Date(date), "dd/MM/yyyy HH:mm");
}

export function timeAgo(date: Date | string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

export function getInitials(name: string | null | undefined): string {
  if (!name) return "?";
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function generateProjectCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const prefix = Array.from({ length: 2 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
  const num = String(Math.floor(Math.random() * 900) + 100);
  return `${prefix}-${num}`;
}

export const DISCIPLINE_COLORS: Record<string, string> = {
  HVAC: "#8B5CF6",
  PLUMBING: "#22C55E",
  ELECTRICAL: "#0EA5E9",
  FIRE_PROTECTION: "#EF4444",
  ARCHITECTURAL: "#64748B",
  STRUCTURAL: "#F59E0B",
  CIVIL: "#F97316",
  OTHER: "#94A3B8",
};

export const DISCIPLINE_LABELS: Record<string, string> = {
  HVAC: "HVAC & Cơ điện",
  PLUMBING: "Cấp thoát nước",
  ELECTRICAL: "Điện",
  FIRE_PROTECTION: "PCCC",
  ARCHITECTURAL: "Kiến trúc",
  STRUCTURAL: "Kết cấu",
  CIVIL: "Hạ tầng",
  OTHER: "Khác",
};

export const STATUS_CONFIG = {
  issue: {
    OPEN: { label: "Mở", color: "text-red-500", bg: "bg-red-500/10 text-red-500" },
    IN_PROGRESS: { label: "Đang xử lý", color: "text-yellow-500", bg: "bg-yellow-500/10 text-yellow-500" },
    RESOLVED: { label: "Đã giải quyết", color: "text-green-500", bg: "bg-green-500/10 text-green-500" },
    CLOSED: { label: "Đóng", color: "text-slate-500", bg: "bg-slate-500/10 text-slate-500" },
    VOID: { label: "Hủy", color: "text-slate-400", bg: "bg-slate-400/10 text-slate-400" },
  },
  rfi: {
    DRAFT: { label: "Nháp", bg: "bg-slate-500/10 text-slate-400" },
    SUBMITTED: { label: "Đã gửi", bg: "bg-blue-500/10 text-blue-400" },
    IN_REVIEW: { label: "Đang xem xét", bg: "bg-yellow-500/10 text-yellow-400" },
    ANSWERED: { label: "Đã trả lời", bg: "bg-green-500/10 text-green-400" },
    CLOSED: { label: "Đóng", bg: "bg-slate-500/10 text-slate-400" },
  },
  drawing: {
    DRAFT: { label: "Nháp", bg: "bg-slate-500/10 text-slate-400" },
    IN_REVIEW: { label: "Đang review", bg: "bg-yellow-500/10 text-yellow-400" },
    APPROVED: { label: "Đã duyệt", bg: "bg-green-500/10 text-green-400" },
    SUPERSEDED: { label: "Đã thay thế", bg: "bg-orange-500/10 text-orange-400" },
    VOID: { label: "Hủy", bg: "bg-red-500/10 text-red-400" },
  },
};

export const PRIORITY_CONFIG = {
  LOW: { label: "Thấp", color: "text-slate-400", dot: "bg-slate-400" },
  MEDIUM: { label: "Trung bình", color: "text-yellow-500", dot: "bg-yellow-500" },
  HIGH: { label: "Cao", color: "text-orange-500", dot: "bg-orange-500" },
  CRITICAL: { label: "Nghiêm trọng", color: "text-red-500", dot: "bg-red-500" },
};
