"use client";

import { useState } from "react";
import Link from "next/link";
import { TimeAgo } from "@/components/ui/time-ago";
import {
  FileText,
  AlertCircle,
  Users,
  Search,
  Grid3x3,
  List,
  MapPin,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getInitials, DISCIPLINE_COLORS } from "@/lib/utils";
import type { Project, ProjectMember, User } from "@/types";

type ProjectWithCounts = Project & {
  members: (ProjectMember & { user: User })[];
  _count: { drawings: number; issues: number; rfis: number; punchItems: number };
};

const STATUS_BADGE: Record<string, { label: string; class: string }> = {
  ACTIVE: { label: "Active", class: "bg-green-500/10 text-green-500 border-green-500/20" },
  ON_HOLD: { label: "On Hold", class: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
  COMPLETED: { label: "Completed", class: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  ARCHIVED: { label: "Archived", class: "bg-slate-500/10 text-slate-400 border-slate-500/20" },
};

export function ProjectGrid({ projects }: { projects: ProjectWithCounts[] }) {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      (p.location ?? "").toLowerCase().includes(search.toLowerCase())
  );

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <FileText className="w-7 h-7 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-medium mb-1">No projects yet</h2>
        <p className="text-sm text-muted-foreground">
          Create your first project to get started.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8 h-8 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex border rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8 rounded-none", view === "grid" && "bg-muted")}
            onClick={() => setView("grid")}
          >
            <Grid3x3 className="w-3.5 h-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-8 w-8 rounded-none", view === "list" && "bg-muted")}
            onClick={() => setView("list")}
          >
            <List className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <div className="border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Project</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Location</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Drawings</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Issues</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Team</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-2.5">Updated</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const s = STATUS_BADGE[p.status];
                return (
                  <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <Link href={`/projects/${p.id}`} className="flex items-center gap-2 group">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                        <div>
                          <div className="text-sm font-medium group-hover:text-primary transition-colors">
                            {p.name}
                          </div>
                          <div className="text-[10px] font-mono text-muted-foreground">{p.code}</div>
                        </div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{p.location ?? "—"}</td>
                    <td className="px-4 py-3 text-sm">{p._count.drawings}</td>
                    <td className="px-4 py-3 text-sm">{p._count.issues}</td>
                    <td className="px-4 py-3">
                      <div className="flex -space-x-1.5">
                        {p.members.slice(0, 4).map((m) => (
                          <Avatar key={m.id} className="w-6 h-6 border-2 border-background">
                            <AvatarImage src={m.user.image ?? undefined} />
                            <AvatarFallback className="text-[8px] bg-primary text-white">
                              {getInitials(m.user.name)}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full border font-medium", s.class)}>
                        {s.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      <TimeAgo date={new Date(p.updatedAt)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project: p }: { project: ProjectWithCounts }) {
  const s = STATUS_BADGE[p.status];
  return (
    <Link
      href={`/projects/${p.id}`}
      className="group block rounded-xl border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Color strip + thumbnail */}
      <div
        className="h-2 w-full"
        style={{ background: p.color }}
      />
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="min-w-0">
            <div className="text-[9px] font-bold font-mono text-muted-foreground tracking-wider mb-0.5">
              {p.code}
            </div>
            <div className="text-[13px] font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {p.name}
            </div>
          </div>
          <span className={cn("text-[9px] px-2 py-0.5 rounded-full border font-medium whitespace-nowrap flex-shrink-0", s.class)}>
            {s.label}
          </span>
        </div>

        {p.location && (
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground mb-3">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
            <span className="truncate">{p.location}</span>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y">
          <div className="text-center">
            <div className="text-base font-bold">{p._count.drawings}</div>
            <div className="text-[9px] text-muted-foreground">Sheets</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-red-500">{p._count.issues}</div>
            <div className="text-[9px] text-muted-foreground">Issues</div>
          </div>
          <div className="text-center">
            <div className="text-base font-bold text-purple-500">{p._count.rfis}</div>
            <div className="text-[9px] text-muted-foreground">RFIs</div>
          </div>
        </div>

        {/* Team */}
        <div className="flex items-center justify-between">
          <div className="flex -space-x-1.5">
            {p.members.slice(0, 5).map((m) => (
              <Avatar key={m.id} className="w-6 h-6 border-2 border-card">
                <AvatarImage src={m.user.image ?? undefined} />
                <AvatarFallback className="text-[8px] bg-primary text-white">
                  {getInitials(m.user.name)}
                </AvatarFallback>
              </Avatar>
            ))}
            {p.members.length > 5 && (
              <div className="w-6 h-6 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[8px] font-medium text-muted-foreground">
                +{p.members.length - 5}
              </div>
            )}
          </div>
          <span className="text-[10px] text-muted-foreground">
            <TimeAgo date={new Date(p.updatedAt)} />
          </span>
        </div>
      </div>
    </Link>
  );
}
