"use client";

import { useState } from "react";
import { Camera, X, Download, MapPin, FileText, Search, Grid3x3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { TimeAgo } from "@/components/ui/time-ago";
import type { Drawing, ProjectMember, User } from "@/types";

interface Photo {
  id: string;
  imageUrl: string;
  text: string;
  drawingId: string;
  sheetNumber: string;
  drawingTitle: string;
  author: User;
  createdAt: Date;
  x: number;
  y: number;
  pageNumber: number;
}

interface Props {
  projectId: string;
  photos: Photo[];
  drawings: Drawing[];
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  currentUserId: string;
}

export function PhotosModule({ projectId, photos: initPhotos }: Props) {
  const [photos] = useState(initPhotos);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selected, setSelected] = useState<Photo | null>(null);
  const [filterSheet, setFilterSheet] = useState<string>("ALL");

  const sheets = Array.from(new Set(photos.map((p) => p.sheetNumber)));

  const filtered = photos.filter((p) => {
    if (filterSheet !== "ALL" && p.sheetNumber !== filterSheet) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.text.toLowerCase().includes(q) || p.sheetNumber.toLowerCase().includes(q) || p.drawingTitle.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b flex-shrink-0">
        <h1 className="text-base font-semibold flex items-center gap-2">
          <Camera className="w-4 h-4" /> Ảnh hiện trường
        </h1>
        <div className="w-px h-4 bg-border mx-1" />
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input placeholder="Tìm ảnh..." className="pl-8 h-8 w-48 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {/* Sheet filter */}
        <select
          value={filterSheet}
          onChange={(e) => setFilterSheet(e.target.value)}
          className="h-8 text-xs bg-muted border border-border rounded px-2 text-foreground"
        >
          <option value="ALL">Tất cả bản vẽ</option>
          {sheets.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <div className="ml-auto flex items-center gap-1">
          <Button variant={view === "grid" ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("grid")}><Grid3x3 className="w-3.5 h-3.5" /></Button>
          <Button variant={view === "list" ? "secondary" : "ghost"} size="icon" className="h-8 w-8" onClick={() => setView("list")}><List className="w-3.5 h-3.5" /></Button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 py-2.5 border-b flex items-center gap-4 flex-shrink-0 bg-muted/20">
        <span className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{filtered.length}</span> ảnh
          {filterSheet !== "ALL" && <span> trên sheet <span className="font-mono font-medium">{filterSheet}</span></span>}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-5">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <Camera className="w-14 h-14 text-muted-foreground/30 mb-4" />
            <h3 className="font-medium text-muted-foreground mb-1">Chưa có ảnh hiện trường</h3>
            <p className="text-sm text-muted-foreground">
              Dùng công cụ <strong>Camera</strong> trong PDF Viewer để ghim ảnh vào vị trí bản vẽ
            </p>
          </div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} onClick={() => setSelected(photo)} />
            ))}
          </div>
        ) : (
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Ảnh</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Sheet</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Người chụp</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Thời gian</th>
                  <th className="px-4 py-2.5" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((photo) => (
                  <tr key={photo.id} className="border-b last:border-0 hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(photo)}>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-3">
                        <img src={photo.imageUrl} alt="" className="w-12 h-10 object-cover rounded border" />
                        <div className="min-w-0">
                          <div className="font-medium truncate max-w-[200px]">{photo.text || "Ảnh hiện trường"}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className="font-mono">{photo.sheetNumber}</span>
                      <div className="text-muted-foreground truncate max-w-[120px]">{photo.drawingTitle}</div>
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <Avatar className="w-5 h-5">
                          <AvatarImage src={photo.author.image ?? undefined} />
                          <AvatarFallback className="text-[7px] bg-primary text-white">{getInitials(photo.author.name)}</AvatarFallback>
                        </Avatar>
                        <span className="text-muted-foreground">{photo.author.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground"><TimeAgo date={photo.createdAt} /></td>
                    <td className="px-4 py-2.5">
                      <a href={photo.imageUrl} download onClick={(e) => e.stopPropagation()} className="text-muted-foreground hover:text-foreground">
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between bg-[#0F172A] rounded-t-xl px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-sky-400" />
                <div>
                  <p className="text-sm font-medium text-slate-200">{selected.text || "Ảnh hiện trường"}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <FileText className="w-3 h-3" />
                    <span className="font-mono">{selected.sheetNumber}</span>
                    <span>—</span>
                    <span>{selected.drawingTitle}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a href={selected.imageUrl} download={selected.text} className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white">
                  <Download className="w-3.5 h-3.5" /> Tải xuống
                </a>
                <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="bg-[#1E293B] rounded-b-xl overflow-hidden flex items-center justify-center max-h-[80vh]">
              <img src={selected.imageUrl} alt={selected.text} className="max-w-full max-h-[80vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <div onClick={onClick} className="group rounded-xl border overflow-hidden cursor-pointer hover:border-primary/40 hover:shadow-md transition-all">
      <div className="aspect-square bg-muted overflow-hidden">
        <img src={photo.imageUrl} alt={photo.text} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-2.5">
        <div className="text-[11px] font-medium truncate">{photo.text || "Ảnh hiện trường"}</div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[10px] font-mono text-muted-foreground">{photo.sheetNumber}</span>
          <span className="text-[10px] text-muted-foreground">·</span>
          <TimeAgo date={photo.createdAt} className="text-[10px] text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
