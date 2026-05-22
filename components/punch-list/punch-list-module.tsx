"use client";

import { useState, useRef } from "react";
import { TimeAgo } from "@/components/ui/time-ago";
import { Plus, Search, CheckCircle2, Clock, X, AlertCircle, Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { CreatePunchModal } from "./create-punch-modal";
import type { PunchItem, ProjectMember, User, Attachment } from "@/types";

type PunchItemWithRelations = PunchItem & {
  createdBy: User;
  assignee: User | null;
  _count: { comments: number; attachments: number };
  localPhotos?: string[]; // URLs of locally uploaded photos (client-side only)
};

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  OPEN:             { label: "Open",              color: "text-red-500",    bg: "bg-red-500/10",    icon: AlertCircle },
  READY_FOR_REVIEW: { label: "Ready for Review",  color: "text-blue-500",   bg: "bg-blue-500/10",   icon: Clock },
  ACCEPTED:         { label: "Accepted",          color: "text-green-500",  bg: "bg-green-500/10",  icon: CheckCircle2 },
  REJECTED:         { label: "Rejected",          color: "text-orange-500", bg: "bg-orange-500/10", icon: X },
  VOID:             { label: "Void",              color: "text-slate-400",  bg: "bg-slate-400/10",  icon: X },
};

interface Props {
  projectId: string;
  items: PunchItemWithRelations[];
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  currentUserId: string;
}

export function PunchListModule({ projectId, items: initItems, members }: Props) {
  const [items, setItems] = useState(initItems);
  const [search, setSearch] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const uploadTargetId = useRef<string | null>(null);

  const handlePhotoUpload = async (file: File, punchItemId: string) => {
    setUploadingId(punchItemId);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", "punch-photos");
      const uploadRes  = await fetch("/api/upload/local", { method: "POST", body: form });
      const uploadData = await uploadRes.json();

      await fetch("/api/attachments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          punchItemId,
          filename: file.name,
          fileKey:  uploadData.fileKey,
          fileUrl:  uploadData.fileUrl,
          fileSize: file.size,
          mimeType: file.type,
        }),
      });

      // Add photo URL to local state for instant display
      setItems((p) =>
        p.map((i) =>
          i.id === punchItemId
            ? { ...i, localPhotos: [...(i.localPhotos ?? []), uploadData.fileUrl] }
            : i
        )
      );
    } finally {
      setUploadingId(null);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/punch-items/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setItems((p) => p.map((i) => (i.id === id ? { ...i, status: status as PunchItem["status"] } : i)));
    }
  };

  const filtered = items.filter((i) =>
    !search || i.title.toLowerCase().includes(search.toLowerCase())
  );

  const stats = Object.keys(STATUS_CONFIG).map((k) => {
    const cfg = STATUS_CONFIG[k as keyof typeof STATUS_CONFIG];
    return {
      key: k,
      count: items.filter((i) => i.status === k).length,
      ...cfg,
    };
  });

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3 border-b flex-shrink-0">
        <h1 className="text-base font-semibold">Punch List</h1>
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <Input placeholder="Search items..." className="pl-8 h-8 w-48 text-xs" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Button size="sm" className="h-8 text-xs ml-auto" onClick={() => setCreateOpen(true)}>
          <Plus className="w-3.5 h-3.5 mr-1" /> Thêm item
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 border-b flex-shrink-0">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.key} className="flex flex-col items-center gap-1 py-3 border-r last:border-r-0">
              <div className={cn("text-xl font-bold", s.color)}>{s.count}</div>
              <div className={cn("text-[9px] font-medium flex items-center gap-1", s.color)}>
                <Icon className="w-2.5 h-2.5" /> {s.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* List */}
      <div className="flex-1 overflow-auto">
        <div className="divide-y">
          {filtered.map((item) => {
            const status = STATUS_CONFIG[item.status];
            return (
              <div key={item.id} className="flex items-start gap-3 px-5 py-3 hover:bg-muted/30 transition-colors">
                <button
                  onClick={() => {
                    const next = item.status === "OPEN" ? "READY_FOR_REVIEW" : item.status === "READY_FOR_REVIEW" ? "ACCEPTED" : "OPEN";
                    updateStatus(item.id, next);
                  }}
                  className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors",
                    item.status === "ACCEPTED" ? "border-green-500 bg-green-500" : "border-muted-foreground/40 hover:border-primary"
                  )}
                >
                  {item.status === "ACCEPTED" && <CheckCircle2 className="w-3 h-3 text-white" />}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[9px] font-mono text-muted-foreground">#{item.number} </span>
                      <span className={cn("text-sm font-medium", item.status === "ACCEPTED" && "line-through text-muted-foreground")}>
                        {item.title}
                      </span>
                    </div>
                    <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap", status.bg, status.color)}>
                      {status.label}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{item.description}</p>
                  )}
                  <div className="flex items-center gap-3 mt-1.5">
                    {item.assignee && (
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <Avatar className="w-4 h-4">
                          <AvatarImage src={item.assignee.image ?? undefined} />
                          <AvatarFallback className="text-[6px] bg-primary text-white">
                            {getInitials(item.assignee.name)}
                          </AvatarFallback>
                        </Avatar>
                        {item.assignee.name}
                      </div>
                    )}
                    {item.location && (
                      <span className="text-[10px] text-muted-foreground">{item.location}</span>
                    )}
                    <span className="text-[10px] text-muted-foreground ml-auto">
                      <TimeAgo date={new Date(item.createdAt)} />
                    </span>
                    {/* Camera upload button */}
                    <button
                      onClick={() => {
                        uploadTargetId.current = item.id;
                        photoInputRef.current?.click();
                      }}
                      disabled={uploadingId === item.id}
                      className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                      title="Thêm ảnh nghiệm thu"
                    >
                      {uploadingId === item.id
                        ? <Loader2 className="w-3 h-3 animate-spin" />
                        : <Camera className="w-3 h-3" />}
                      <span>{(item.localPhotos?.length ?? 0) > 0 ? item.localPhotos!.length : ""}</span>
                    </button>
                  </div>

                  {/* Photo thumbnails */}
                  {item.localPhotos && item.localPhotos.length > 0 && (
                    <div className="flex gap-1.5 mt-2 flex-wrap">
                      {item.localPhotos.map((url, i) => (
                        <button
                          key={i}
                          onClick={() => setLightbox(url)}
                          className="w-14 h-14 rounded-md overflow-hidden border hover:border-primary/50 transition-colors flex-shrink-0"
                        >
                          <img src={url} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <CheckCircle2 className="w-10 h-10 text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">Chưa có punch item nào</p>
          </div>
        )}
      </div>

      <CreatePunchModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        projectId={projectId}
        members={members}
        onCreated={(item) => setItems((p) => [item, ...p])}
      />

      {/* Hidden photo file input */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          const id = uploadTargetId.current;
          if (file && id) { handlePhotoUpload(file, id); e.target.value = ""; }
        }}
      />

      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="w-6 h-6" />
          </button>
          <img src={lightbox} alt="Ảnh nghiệm thu" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl mx-4" />
        </div>
      )}
    </div>
  );
}
