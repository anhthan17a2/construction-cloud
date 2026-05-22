"use client";

import { useState, useMemo } from "react";
import { TimeAgo } from "@/components/ui/time-ago";
import {
  Search, Plus, AlertCircle, Clock, CheckCircle2, X,
  User, MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CreateIssueModal } from "./create-issue-modal";
import { IssueDetailPanel } from "./issue-detail-panel";
import { cn, getInitials, PRIORITY_CONFIG } from "@/lib/utils";
import type { Issue, Drawing, ProjectMember, User as UserType } from "@/types";

type IssueWithRelations = Issue & {
  createdBy: UserType;
  assignee: UserType | null;
  drawing: Drawing | null;
  _count: { comments: number; attachments: number };
};

const STATUS_COLUMNS = [
  { id: "OPEN",        label: "Mở",          color: "text-red-500",    bg: "bg-red-500/10",    icon: AlertCircle },
  { id: "IN_PROGRESS", label: "Đang xử lý",  color: "text-yellow-500", bg: "bg-yellow-500/10", icon: Clock },
  { id: "RESOLVED",    label: "Đã giải quyết", color: "text-green-500", bg: "bg-green-500/10",  icon: CheckCircle2 },
  { id: "CLOSED",      label: "Đóng",         color: "text-slate-400",  bg: "bg-slate-400/10",  icon: X },
];

interface Props {
  projectId: string;
  issues: IssueWithRelations[];
  drawings: Pick<Drawing, "id" | "sheetNumber" | "title">[];
  members: (ProjectMember & { user: Pick<UserType, "id" | "name" | "image"> })[];
  currentUserId: string;
}

export function IssuesModule({ projectId, issues: initIssues, drawings, members, currentUserId }: Props) {
  const [issues, setIssues] = useState(initIssues);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [filterPriority, setFilterPriority] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"board" | "list">("board");
  const [createOpen, setCreateOpen] = useState(false);
  const [createStatus, setCreateStatus] = useState("OPEN");
  const [selectedIssue, setSelectedIssue] = useState<IssueWithRelations | null>(null);

  const filtered = useMemo(() => {
    return issues.filter((i) => {
      if (filterStatus !== "ALL" && i.status !== filterStatus) return false;
      if (filterPriority !== "ALL" && i.priority !== filterPriority) return false;
      if (search) {
        const q = search.toLowerCase();
        return i.title.toLowerCase().includes(q) || `#${i.number}`.includes(q);
      }
      return true;
    });
  }, [issues, filterStatus, filterPriority, search]);

  const byStatus = (status: string) => filtered.filter((i) => i.status === status);

  const updateStatus = async (issueId: string, newStatus: string) => {
    const res = await fetch(`/api/issues/${issueId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    if (res.ok) {
      setIssues((p) => p.map((i) => (i.id === issueId ? { ...i, status: newStatus as Issue["status"] } : i)));
      setSelectedIssue((prev) => prev?.id === issueId ? { ...prev, status: newStatus as Issue["status"] } : prev);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b flex-shrink-0">
        <h1 className="text-base font-semibold">Issues</h1>
        <div className="w-px h-4 bg-border mx-1" />
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input placeholder="Tìm issue..." className="pl-8 h-8 w-52 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="h-8 w-36 text-xs">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Tất cả</SelectItem>
            {STATUS_COLUMNS.map((s) => <SelectItem key={s.id} value={s.id}>{s.label}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={filterPriority} onValueChange={setFilterPriority}>
          <SelectTrigger className="h-8 w-32 text-xs">
            <SelectValue placeholder="Ưu tiên" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Tất cả</SelectItem>
            {Object.entries(PRIORITY_CONFIG).map(([k, v]) => (
              <SelectItem key={k} value={k}>{v.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center gap-1">
          <Button variant={viewMode === "board" ? "secondary" : "ghost"} size="sm" className="h-8 text-xs" onClick={() => setViewMode("board")}>Board</Button>
          <Button variant={viewMode === "list" ? "secondary" : "ghost"} size="sm" className="h-8 text-xs" onClick={() => setViewMode("list")}>Danh sách</Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Button size="sm" className="h-8 text-xs" onClick={() => { setCreateStatus("OPEN"); setCreateOpen(true); }}>
            <Plus className="w-3.5 h-3.5 mr-1" /> Tạo issue
          </Button>
        </div>
      </div>

      {/* Board */}
      {viewMode === "board" && (
        <div className="flex-1 overflow-x-auto overflow-y-hidden">
          <div className="flex gap-3 p-4 h-full min-w-max">
            {STATUS_COLUMNS.map((col) => {
              const items = byStatus(col.id);
              const Icon = col.icon;
              return (
                <div key={col.id} className="w-72 flex-shrink-0 flex flex-col bg-muted/30 rounded-xl border overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2.5 border-b flex-shrink-0">
                    <Icon className={`w-3.5 h-3.5 ${col.color}`} />
                    <span className="text-xs font-semibold">{col.label}</span>
                    <span className="ml-auto text-[10px] bg-muted rounded-full px-1.5 py-0.5 font-medium">{items.length}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 -mr-1" onClick={() => { setCreateStatus(col.id); setCreateOpen(true); }}>
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-2">
                    {items.map((issue) => (
                      <IssueCard
                        key={issue.id}
                        issue={issue}
                        selected={selectedIssue?.id === issue.id}
                        onStatusChange={updateStatus}
                        onClick={() => setSelectedIssue(issue)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* List */}
      {viewMode === "list" && (
        <div className="flex-1 overflow-auto">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-muted/80 backdrop-blur z-10 border-b">
              <tr>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">#</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Tiêu đề</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Trạng thái</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Ưu tiên</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Phụ trách</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Bản vẽ</th>
                <th className="text-left font-medium text-muted-foreground px-4 py-2">Tạo lúc</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((issue) => {
                const statusCol = STATUS_COLUMNS.find((s) => s.id === issue.status)!;
                const StatusIcon = statusCol?.icon ?? AlertCircle;
                const priority = PRIORITY_CONFIG[issue.priority as keyof typeof PRIORITY_CONFIG] ?? PRIORITY_CONFIG.MEDIUM;
                const isSelected = selectedIssue?.id === issue.id;
                return (
                  <tr
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue)}
                    className={cn("border-b transition-colors cursor-pointer", isSelected ? "bg-primary/5" : "hover:bg-muted/30")}
                  >
                    <td className="px-4 py-2.5 font-mono text-muted-foreground">#{issue.number}</td>
                    <td className="px-4 py-2.5 font-medium max-w-[240px] truncate">{issue.title}</td>
                    <td className="px-4 py-2.5">
                      <span className={cn("inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium", statusCol.bg, statusCol.color)}>
                        <StatusIcon className="w-2.5 h-2.5" />{statusCol.label}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${priority.dot}`} />
                        <span className={priority.color}>{priority.label}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      {issue.assignee ? (
                        <div className="flex items-center gap-1.5">
                          <Avatar className="w-5 h-5">
                            <AvatarImage src={issue.assignee.image ?? undefined} />
                            <AvatarFallback className="text-[7px] bg-primary text-white">{getInitials(issue.assignee.name)}</AvatarFallback>
                          </Avatar>
                          <span className="text-muted-foreground">{issue.assignee.name}</span>
                        </div>
                      ) : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="px-4 py-2.5 font-mono text-muted-foreground">{issue.drawing?.sheetNumber ?? "—"}</td>
                    <td className="px-4 py-2.5 text-muted-foreground"><TimeAgo date={new Date(issue.createdAt)} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <CreateIssueModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        projectId={projectId}
        defaultStatus={createStatus}
        drawings={drawings}
        members={members}
        onCreated={(issue) => setIssues((p) => [issue, ...p])}
      />

      {selectedIssue && (
        <>
          <div className="fixed inset-0 z-30 bg-black/20" onClick={() => setSelectedIssue(null)} />
          <IssueDetailPanel
            issue={selectedIssue}
            currentUserId={currentUserId}
            onClose={() => setSelectedIssue(null)}
            onStatusChange={updateStatus}
          />
        </>
      )}
    </div>
  );
}

function IssueCard({ issue, selected, onStatusChange, onClick }: {
  issue: IssueWithRelations;
  selected: boolean;
  onStatusChange: (id: string, status: string) => void;
  onClick: () => void;
}) {
  const priority = (PRIORITY_CONFIG as Record<string, typeof PRIORITY_CONFIG[keyof typeof PRIORITY_CONFIG]>)[issue.priority] ?? PRIORITY_CONFIG.MEDIUM;

  return (
    <div
      onClick={onClick}
      className={cn(
        "bg-card border rounded-xl p-3 space-y-2.5 hover:shadow-sm transition-all cursor-pointer group",
        selected && "border-primary ring-1 ring-primary/30"
      )}
    >
      <div className="flex items-start justify-between gap-1">
        <div className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${priority.dot}`} />
          <span className="text-[9px] font-mono text-muted-foreground">#{issue.number}</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost" size="icon"
              className="h-5 w-5 opacity-0 group-hover:opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {[["OPEN","Mở"], ["IN_PROGRESS","Đang xử lý"], ["RESOLVED","Đã giải quyết"], ["CLOSED","Đóng"]].map(([s, l]) => (
              <DropdownMenuItem key={s} onClick={(e) => { e.stopPropagation(); onStatusChange(issue.id, s); }} className="text-xs">
                Chuyển sang {l}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <p className="text-[12px] font-medium leading-tight line-clamp-2">{issue.title}</p>

      {issue.drawing && (
        <div className="text-[10px] text-muted-foreground font-mono bg-muted/50 rounded px-1.5 py-0.5 inline-block">
          {issue.drawing.sheetNumber}
        </div>
      )}

      <div className="flex items-center justify-between">
        {issue.assignee ? (
          <Avatar className="w-6 h-6">
            <AvatarImage src={issue.assignee.image ?? undefined} />
            <AvatarFallback className="text-[8px] bg-primary text-white">{getInitials(issue.assignee.name)}</AvatarFallback>
          </Avatar>
        ) : (
          <div className="w-6 h-6 rounded-full bg-muted border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
            <User className="w-3 h-3 text-muted-foreground/40" />
          </div>
        )}
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          {issue._count.comments > 0 && <span>{issue._count.comments} bình luận</span>}
          <span><TimeAgo date={new Date(issue.createdAt)} /></span>
        </div>
      </div>
    </div>
  );
}
