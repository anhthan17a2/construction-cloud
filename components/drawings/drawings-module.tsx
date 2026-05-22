"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TimeAgo } from "@/components/ui/time-ago";
import {
  Search, Upload, Grid3x3, List, ChevronRight, ChevronDown,
  Layers, FileText, MoreHorizontal, Eye, Download, Trash2,
  CheckCircle2, Clock, X, Pencil, AlertTriangle, Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { UploadDrawingModal } from "./upload-drawing-modal";
import { DrawingDetailPanel } from "./drawing-detail-panel";
import { cn, DISCIPLINE_COLORS, DISCIPLINE_LABELS } from "@/lib/utils";
import type { Drawing, DrawingVersion, User, DrawingFolder, VersionSet } from "@/types";

type DrawingWithRelations = Drawing & {
  uploadedBy: User;
  versions: DrawingVersion[];
  _count: { issues: number; annotations: number };
};

const DISCIPLINE_ORDER = ["HVAC","PLUMBING","ELECTRICAL","FIRE_PROTECTION","ARCHITECTURAL","STRUCTURAL","CIVIL","OTHER"];

const STATUS_CONFIG: Record<string, { label: string; class: string; icon: React.ElementType }> = {
  DRAFT:      { label: "Draft",      class: "bg-slate-500/10 text-slate-400",   icon: Clock },
  IN_REVIEW:  { label: "In Review",  class: "bg-yellow-500/10 text-yellow-500", icon: Eye },
  APPROVED:   { label: "Approved",   class: "bg-green-500/10 text-green-500",   icon: CheckCircle2 },
  SUPERSEDED: { label: "Superseded", class: "bg-orange-500/10 text-orange-400", icon: X },
  VOID:       { label: "Void",       class: "bg-red-500/10 text-red-400",       icon: X },
};

interface Props {
  projectId: string;
  drawings: DrawingWithRelations[];
  folders: DrawingFolder[];
  versionSets: VersionSet[];
  currentUserId: string;
}

export function DrawingsModule({ projectId, drawings, folders, versionSets, currentUserId }: Props) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selDisc, setSelDisc] = useState<string | null>(null);
  const [selFolderId, setSelFolderId] = useState<string | null>(null);
  const [selId, setSelId] = useState<string | null>(null); // detail panel selection
  const [expandedDiscs, setExpandedDiscs] = useState<Set<string>>(new Set(["HVAC","ELECTRICAL"]));
  const [uploadOpen, setUploadOpen] = useState(false);
  const [view, setView] = useState<"list" | "grid">("list");
  const [localDrawings, setLocalDrawings] = useState(drawings);

  // Delete state
  const [deleteTarget, setDeleteTarget] = useState<DrawingWithRelations | null>(null);
  const [deleting, setDeleting] = useState(false);

  // Rename state
  const [renameTarget, setRenameTarget] = useState<DrawingWithRelations | null>(null);
  const [renameTitle, setRenameTitle] = useState("");
  const [renameSheetNumber, setRenameSheetNumber] = useState("");
  const [renaming, setRenaming] = useState(false);

  const openRename = (d: DrawingWithRelations) => {
    setRenameTarget(d);
    setRenameTitle(d.title);
    setRenameSheetNumber(d.sheetNumber);
  };

  const handleRename = async () => {
    if (!renameTarget || !renameTitle.trim() || !renameSheetNumber.trim()) return;
    setRenaming(true);
    const res = await fetch(`/api/drawings/${renameTarget.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: renameTitle.trim() }),
    });
    if (res.ok) {
      setLocalDrawings((p) =>
        p.map((d) =>
          d.id === renameTarget.id
            ? { ...d, title: renameTitle.trim(), sheetNumber: renameSheetNumber.trim() }
            : d
        )
      );
      setRenameTarget(null);
    }
    setRenaming(false);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    const res = await fetch(`/api/drawings/${deleteTarget.id}`, { method: "DELETE" });
    if (res.ok) {
      setLocalDrawings((p) => p.filter((d) => d.id !== deleteTarget.id));
      if (selId === deleteTarget.id) setSelId(null);
      setDeleteTarget(null);
    }
    setDeleting(false);
  };

  const disciplines = useMemo(() => {
    const used = new Set(localDrawings.map((d) => d.discipline));
    return DISCIPLINE_ORDER.filter((d) => used.has(d as any));
  }, [localDrawings]);

  const filtered = useMemo(() => {
    return localDrawings.filter((d) => {
      if (selDisc && d.discipline !== selDisc) return false;
      if (selFolderId && d.folderId !== selFolderId) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          d.title.toLowerCase().includes(q) ||
          d.sheetNumber.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [localDrawings, selDisc, selFolderId, search]);

  const selectedDrawing = localDrawings.find((d) => d.id === selId) ?? null;

  const toggleDisc = (disc: string) => {
    setExpandedDiscs((prev) => {
      const next = new Set(prev);
      if (next.has(disc)) next.delete(disc);
      else next.add(disc);
      return next;
    });
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left tree */}
      <div className="w-[200px] flex-shrink-0 border-r overflow-y-auto bg-muted/20">
        <div className="px-3 py-2 border-b">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            Disciplines
          </div>
        </div>

        <div className="py-1.5">
          {/* All */}
          <button
            onClick={() => { setSelDisc(null); setSelFolderId(null); }}
            className={cn(
              "w-full flex items-center gap-2 px-3 py-1.5 text-[12px] transition-colors",
              !selDisc ? "bg-primary/10 text-primary font-medium" : "text-foreground/70 hover:bg-muted"
            )}
          >
            <Layers className="w-3.5 h-3.5 flex-shrink-0" />
            All Sheets
            <span className="ml-auto text-[9px] text-muted-foreground">{localDrawings.length}</span>
          </button>

          {disciplines.map((disc) => {
            const count = localDrawings.filter((d) => d.discipline === disc).length;
            const isExp = expandedDiscs.has(disc);
            const color = DISCIPLINE_COLORS[disc];
            return (
              <div key={disc}>
                <button
                  onClick={() => {
                    setSelDisc(disc);
                    setSelFolderId(null);
                    toggleDisc(disc);
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-1.5 text-[12px] transition-colors",
                    selDisc === disc ? "bg-primary/10 text-primary font-medium" : "text-foreground/70 hover:bg-muted"
                  )}
                >
                  {isExp ? (
                    <ChevronDown className="w-3 h-3 flex-shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-3 h-3 flex-shrink-0 text-muted-foreground" />
                  )}
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="flex-1 text-left">{DISCIPLINE_LABELS[disc] || disc}</span>
                  <span className="text-[9px] text-muted-foreground">{count}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main list */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Toolbar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b flex-shrink-0">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input
              placeholder="Search sheets..."
              className="pl-8 h-8 text-xs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", view === "list" && "bg-muted")}
              onClick={() => setView("list")}
            >
              <List className="w-3.5 h-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", view === "grid" && "bg-muted")}
              onClick={() => setView("grid")}
            >
              <Grid3x3 className="w-3.5 h-3.5" />
            </Button>
            <div className="w-px h-5 bg-border mx-1" />
            <Button size="sm" className="h-8 text-xs" onClick={() => setUploadOpen(true)}>
              <Upload className="w-3.5 h-3.5 mr-1.5" /> Add Sheet
            </Button>
          </div>
        </div>

        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Drawing list */}
          <div className="flex-1 overflow-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <FileText className="w-12 h-12 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">No sheets found</p>
                <Button
                  variant="link"
                  className="text-xs mt-1"
                  onClick={() => setUploadOpen(true)}
                >
                  Upload a sheet
                </Button>
              </div>
            ) : view === "list" ? (
              <table className="w-full text-xs">
                <thead className="sticky top-0 bg-muted/80 backdrop-blur z-10">
                  <tr className="border-b">
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Sheet</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Discipline</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Status</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Rev</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Updated</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2">Issues</th>
                    <th className="px-2 py-2" />
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((d) => {
                    const disc = d.discipline;
                    const status = STATUS_CONFIG[d.status];
                    const StatusIcon = status.icon;
                    const isSel = d.id === selId;
                    return (
                      <tr
                        key={d.id}
                        // Single click → open viewer directly
                        onClick={() => router.push(`/projects/${projectId}/drawings/${d.id}`)}
                        className="border-b cursor-pointer transition-colors hover:bg-muted/40 group"
                      >
                        <td className="px-4 py-2.5">
                          {/* Title is the primary click target — visually link-like */}
                          <div className="font-medium truncate max-w-[200px] group-hover:text-primary transition-colors">
                            {d.title}
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground">{d.sheetNumber}</div>
                        </td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full" style={{ background: DISCIPLINE_COLORS[disc] }} />
                            <span className="text-muted-foreground">{DISCIPLINE_LABELS[disc]?.split(" ")[0] || disc}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium", status.class)}>
                            <StatusIcon className="w-2.5 h-2.5" />
                            {status.label}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">{d.currentRev}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">
                          <TimeAgo date={new Date(d.updatedAt)} />
                        </td>
                        <td className="px-4 py-2.5">
                          {d._count.issues > 0 && <span className="text-red-500 font-medium">{d._count.issues}</span>}
                        </td>
                        <td className="px-2 py-2.5">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost" size="icon"
                                className="h-7 w-7 opacity-0 group-hover:opacity-100"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MoreHorizontal className="w-3.5 h-3.5" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/projects/${projectId}/drawings/${d.id}`}>
                                  <Eye className="w-3.5 h-3.5 mr-2" /> Mở & Markup
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={(e) => { e.stopPropagation(); openRename(d); }}
                              >
                                <Pencil className="w-3.5 h-3.5 mr-2" /> Đổi tên
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={(e) => { e.stopPropagation(); setDeleteTarget(d); }}
                              >
                                <Trash2 className="w-3.5 h-3.5 mr-2" /> Xóa sheet
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
                {filtered.map((d) => (
                  <DrawingCard
                    key={d.id}
                    drawing={d}
                    projectId={projectId}
                    onRename={() => openRename(d)}
                    onDelete={() => setDeleteTarget(d)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Detail panel */}
          {selectedDrawing && (
            <DrawingDetailPanel
              drawing={selectedDrawing}
              projectId={projectId}
              onClose={() => setSelId(null)}
            />
          )}
        </div>
      </div>

      <UploadDrawingModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        projectId={projectId}
        onSuccess={(d) => {
          setLocalDrawings((prev) => [d as DrawingWithRelations, ...prev]);
        }}
      />

      {/* ── Rename Dialog ──────────────────────────────────────────────── */}
      <Dialog open={!!renameTarget} onOpenChange={(o) => !o && setRenameTarget(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Pencil className="w-4 h-4" /> Đổi tên sheet
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Sheet Number</Label>
              <Input
                className="mt-1.5 font-mono"
                value={renameSheetNumber}
                onChange={(e) => setRenameSheetNumber(e.target.value)}
                placeholder="E-001"
              />
            </div>
            <div>
              <Label className="text-xs">Tên sheet</Label>
              <Input
                className="mt-1.5"
                value={renameTitle}
                onChange={(e) => setRenameTitle(e.target.value)}
                placeholder="Main Electrical Single Line"
                onKeyDown={(e) => e.key === "Enter" && handleRename()}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setRenameTarget(null)}>Hủy</Button>
            <Button size="sm" onClick={handleRename} disabled={renaming || !renameTitle.trim()}>
              {renaming ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" /> : null}
              Lưu
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ── Delete Confirm Dialog ──────────────────────────────────────── */}
      <Dialog open={!!deleteTarget} onOpenChange={(o) => !o && setDeleteTarget(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="w-4 h-4" /> Xóa sheet
            </DialogTitle>
          </DialogHeader>
          <div className="py-3">
            <p className="text-sm text-muted-foreground">
              Bạn chắc chắn muốn xóa sheet{" "}
              <span className="font-mono font-semibold text-foreground">{deleteTarget?.sheetNumber}</span>
              {" "}—{" "}
              <span className="font-semibold text-foreground">{deleteTarget?.title}</span>?
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Hành động này không thể hoàn tác. Tất cả revision, markup và issue liên kết sẽ bị mất.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" size="sm" onClick={() => setDeleteTarget(null)}>Hủy</Button>
            <Button variant="destructive" size="sm" onClick={handleDelete} disabled={deleting}>
              {deleting ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" /> : <Trash2 className="w-3.5 h-3.5 mr-1.5" />}
              Xóa sheet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DrawingCard({
  drawing: d,
  projectId,
  onRename,
  onDelete,
}: {
  drawing: DrawingWithRelations;
  projectId: string;
  onRename: () => void;
  onDelete: () => void;
}) {
  const color = DISCIPLINE_COLORS[d.discipline];
  const status = STATUS_CONFIG[d.status];
  const viewerHref = `/projects/${projectId}/drawings/${d.id}`;

  return (
    <div className="group rounded-xl border overflow-hidden transition-all hover:border-primary/40 hover:shadow-md">
      {/* Thumbnail — click to open viewer */}
      <Link href={viewerHref} className="block">
        <div
          className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
          style={{ background: `${color}15` }}
        >
          {d.thumbnailUrl ? (
            <img src={d.thumbnailUrl} alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200" />
          ) : (
            <div className="flex flex-col items-center gap-1">
              <div className="text-xl font-bold font-mono group-hover:scale-110 transition-transform" style={{ color }}>
                {d.sheetNumber}
              </div>
              <div className="text-[10px] text-muted-foreground">{DISCIPLINE_LABELS[d.discipline]}</div>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/8 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-[11px] font-semibold text-primary bg-background/90 rounded-full px-3 py-1 transition-opacity shadow">
              Mở bản vẽ
            </span>
          </div>
          <span className={cn("absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded-full font-medium", status.class)}>
            {status.label}
          </span>
        </div>
      </Link>

      {/* Footer with name + actions */}
      <div className="p-2.5 flex items-start justify-between gap-1">
        <Link href={viewerHref} className="flex-1 min-w-0">
          <div className="text-[11px] font-medium truncate group-hover:text-primary transition-colors">{d.title}</div>
          <div className="text-[10px] text-muted-foreground font-mono mt-0.5">{d.sheetNumber} · {d.currentRev}</div>
        </Link>
        {/* Card actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 flex-shrink-0 -mr-1 mt-0.5" onClick={(e) => e.preventDefault()}>
              <MoreHorizontal className="w-3.5 h-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={viewerHref}><Eye className="w-3.5 h-3.5 mr-2" /> Mở & Markup</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onRename}>
              <Pencil className="w-3.5 h-3.5 mr-2" /> Đổi tên
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={onDelete}>
              <Trash2 className="w-3.5 h-3.5 mr-2" /> Xóa sheet
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
