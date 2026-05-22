"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  LayoutDashboard,
  FileText,
  CheckSquare,
  MessageSquareWarning,
  ClipboardList,
  Camera,
  ClipboardCheck,
  Users,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectSidebarProps {
  project: Project & { _count: { drawings: number; issues: number; rfis: number; punchItems: number } };
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const pathname = usePathname();
  const base = `/projects/${project.id}`;

  const nav = [
    { label: "Home", href: base, icon: LayoutDashboard, exact: true },
    {
      label: "Sheets",
      href: `${base}/drawings`,
      icon: FileText,
      badge: project._count.drawings,
    },
    {
      label: "Issues",
      href: `${base}/issues`,
      icon: MessageSquareWarning,
      badge: project._count.issues,
      badgeColor: "bg-red-500",
    },
    {
      label: "RFIs",
      href: `${base}/rfis`,
      icon: CheckSquare,
      badge: project._count.rfis,
      badgeColor: "bg-purple-500",
    },
    {
      label: "Punch List",
      href: `${base}/punch-list`,
      icon: ClipboardCheck,
      badge: project._count.punchItems,
      badgeColor: "bg-orange-500",
    },
    { label: "Photos", href: `${base}/photos`, icon: Camera },
    { label: "Field Reports", href: `${base}/field-reports`, icon: ClipboardList },
  ];

  const bottomNav = [
    { label: "Team", href: `${base}/team`, icon: Users },
    { label: "Settings", href: `${base}/settings`, icon: Settings },
  ];

  return (
    <aside className="w-[210px] flex-shrink-0 flex flex-col bg-sidebar border-r border-sidebar-border overflow-hidden">
      {/* Back */}
      <Link
        href="/"
        className="h-10 flex items-center gap-2 px-3 text-[11px] text-sidebar-foreground/50 hover:text-sidebar-foreground border-b border-sidebar-border transition-colors flex-shrink-0"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        All Projects
      </Link>

      {/* Project header */}
      <div className="px-3 py-3 border-b border-sidebar-border flex-shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: project.color }}
          />
          <span className="text-[9px] font-bold font-mono text-sidebar-foreground/40 tracking-wider">
            {project.code}
          </span>
        </div>
        <div className="text-[12.5px] font-semibold text-sidebar-foreground leading-tight line-clamp-2">
          {project.name}
        </div>
        {project.location && (
          <div className="text-[10px] text-sidebar-foreground/40 mt-0.5 truncate">
            {project.location}
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2 px-2 overflow-y-auto space-y-0.5">
        <div className="pt-1 pb-1 px-1.5">
          <span className="text-[9.5px] font-semibold text-sidebar-foreground/35 uppercase tracking-wider">
            Project
          </span>
        </div>
        {nav.map((item) => {
          const Icon = item.icon;
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-white"
                  : "text-sidebar-foreground/65 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge !== undefined && (
                <span
                  className={cn(
                    "text-[9px] rounded-full px-1.5 py-0.5 leading-none font-medium",
                    isActive
                      ? "bg-white/20 text-white"
                      : `${item.badgeColor ?? "bg-sidebar-foreground/20"} text-white`
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-sidebar-border px-2 py-2 space-y-0.5 flex-shrink-0">
        {bottomNav.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-white"
                  : "text-sidebar-foreground/65 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
