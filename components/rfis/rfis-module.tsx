"use client";

import { useState } from "react";
import { TimeAgo } from "@/components/ui/time-ago";
import { Plus, Search, MessageSquare, Clock, CheckCircle2, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { CreateRFIModal } from "./create-rfi-modal";
import type { RFI, Drawing, ProjectMember, User } from "@/types";

type RFIWithRelations = RFI & {
  createdBy: User;
  assignee: User | null;
  drawing: Drawing | null;
  _count: { comments: number };
};

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  DRAFT:     { label: "Draft",       color: "text-slate-400",   bg: "bg-slate-400/10",   icon: X },
  SUBMITTED: { label: "Submitted",   color: "text-blue-400",    bg: "bg-blue-400/10",    icon: Send },
  IN_REVIEW: { label: "In Review",   color: "text-yellow-400",  bg: "bg-yellow-400/10",  icon: Clock },
  ANSWERED:  { label: "Answered",    color: "text-green-400",   bg: "bg-green-400/10",   icon: CheckCircle2 },
  CLOSED:    { label: "Closed",      color: "text-slate-400",   bg: "bg-slate-400/10",   icon: X },
};

interface Props {
  projectId: string;
  rfis: RFIWithRelations[];
  drawings: Pick<Drawing, "id" | "sheetNumber" | "title">[];
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  currentUserId: string;
}

export function RFIsModule({ projectId, rfis: initRFIs, drawings, members }: Props) {
  const [rfis, setRFIs] = useState(initRFIs);
  const [search, setSearch] = useState("");
  const [selStatus, setSelStatus] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);

  const filtered = rfis.filter((r) => {
    if (selStatus && r.status !== selStatus) return false;
    if (search) return r.subject.toLowerCase().includes(search.toLowerCase());
    return true;
  });

  const handleCreated = (rfi: RFIWithRelations) => {
    setRFIs((p) => [rfi, ...p]);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3 border-b flex-shrink-0">
        <h1 className="text-base font-semibold">RFIs</h1>
        <div className="w-px h-4 bg-border mx-1" />
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input placeholder="Search RFIs..." className="pl-8 h-8 w-48 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex gap-1">
          {[null, ...Object.keys(STATUS_CONFIG)].map((s) => (
            <button
              key={s ?? "ALL"}
              onClick={() => setSelStatus(s)}
              className={cn(
                "text-[10px] px-2.5 py-1 rounded-full font-medium transition-colors",
                selStatus === s ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/70"
              )}
            >
              {s ? STATUS_CONFIG[s].label : "All"}
            </button>
          ))}
        </div>
        <Button size="sm" className="h-8 text-xs ml-auto" onClick={() => setCreating(true)}>
          <Plus className="w-3.5 h-3.5 mr-1" /> New RFI
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-5 border-b">
          {Object.entries(STATUS_CONFIG).map(([key, cfg]) => {
            const count = rfis.filter((r) => r.status === key).length;
            const Icon = cfg.icon;
            return (
              <button
                key={key}
                onClick={() => setSelStatus(key === selStatus ? null : key)}
                className={cn(
                  "flex flex-col items-center gap-1 py-3 border-r last:border-r-0 transition-colors hover:bg-muted/30",
                  selStatus === key && "bg-muted/50"
                )}
              >
                <div className={cn("text-xl font-bold", cfg.color)}>{count}</div>
                <div className={cn("text-[10px] font-medium flex items-center gap-1", cfg.color)}>
                  <Icon className="w-3 h-3" /> {cfg.label}
                </div>
              </button>
            );
          })}
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-muted/80 backdrop-blur z-10 border-b">
            <tr>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">#</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Subject</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Status</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Assignee</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Sheet</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Due</th>
              <th className="text-left font-medium text-muted-foreground px-4 py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rfi) => {
              const status = STATUS_CONFIG[rfi.status];
              const StatusIcon = status.icon;
              return (
                <tr key={rfi.id} className="border-b hover:bg-muted/30 cursor-pointer transition-colors">
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">#{rfi.number}</td>
                  <td className="px-4 py-2.5">
                    <div className="font-medium truncate max-w-[260px]">{rfi.subject}</div>
                    <div className="text-muted-foreground truncate max-w-[260px] text-[10px] mt-0.5">
                      {rfi.question.slice(0, 80)}...
                    </div>
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={cn("inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium", status.bg, status.color)}>
                      <StatusIcon className="w-2.5 h-2.5" />
                      {status.label}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    {rfi.assignee ? (
                      <div className="flex items-center gap-1.5">
                        <Avatar className="w-5 h-5">
                          <AvatarImage src={rfi.assignee.image ?? undefined} />
                          <AvatarFallback className="text-[7px] bg-primary text-white">
                            {getInitials(rfi.assignee.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground">{rfi.assignee.name}</span>
                      </div>
                    ) : <span className="text-muted-foreground">—</span>}
                  </td>
                  <td className="px-4 py-2.5 font-mono text-muted-foreground">
                    {rfi.drawing?.sheetNumber ?? "—"}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    {rfi.dueDate ? <TimeAgo date={new Date(rfi.dueDate)} /> : "—"}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">
                    <TimeAgo date={new Date(rfi.createdAt)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <MessageSquare className="w-10 h-10 text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">Không có RFI nào</p>
          </div>
        )}
      </div>

      <CreateRFIModal
        open={creating}
        onClose={() => setCreating(false)}
        projectId={projectId}
        drawings={drawings}
        members={members}
        onCreated={handleCreated}
      />
    </div>
  );
}
