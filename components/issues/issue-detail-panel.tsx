"use client";

import { useState, useEffect, useRef } from "react";
import { TimeAgo } from "@/components/ui/time-ago";
import {
  X, AlertCircle, Clock, CheckCircle2, Send, Loader2,
  Calendar, User, FileText, MapPin, Camera, Image, Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn, getInitials, PRIORITY_CONFIG, formatDate } from "@/lib/utils";
import type { Issue, User as UserType, Drawing, Comment, Attachment } from "@/types";

type IssueWithRelations = Issue & {
  createdBy: UserType;
  assignee: UserType | null;
  drawing: Drawing | null;
  comments?: (Comment & { author: UserType })[];
  _count: { comments: number; attachments: number };
};

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string; icon: React.ElementType }> = {
  OPEN:        { label: "Mở",          color: "text-red-500",    bg: "bg-red-500/10",    icon: AlertCircle },
  IN_PROGRESS: { label: "Đang xử lý", color: "text-yellow-500", bg: "bg-yellow-500/10", icon: Clock },
  RESOLVED:    { label: "Đã giải quyết", color: "text-green-500", bg: "bg-green-500/10", icon: CheckCircle2 },
  CLOSED:      { label: "Đóng",        color: "text-slate-400",  bg: "bg-slate-400/10",  icon: X },
};

const PRIORITY_LABELS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;

interface Props {
  issue: IssueWithRelations;
  currentUserId: string;
  onClose: () => void;
  onStatusChange: (id: string, status: string) => void;
}

export function IssueDetailPanel({ issue, currentUserId, onClose, onStatusChange }: Props) {
  const [comments,       setComments]       = useState<(Comment & { author: UserType })[]>(issue.comments ?? []);
  const [attachments,    setAttachments]    = useState<Attachment[]>([]);
  const [commentText,    setCommentText]    = useState("");
  const [sendingComment, setSendingComment] = useState(false);
  const [loadingComments, setLoadingComments] = useState(!issue.comments);
  const [uploadingPhoto,  setUploadingPhoto]  = useState(false);
  const [lightbox,        setLightbox]        = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const bottomRef     = useRef<HTMLDivElement>(null);

  // Load comments + attachments
  useEffect(() => {
    setLoadingComments(!issue.comments);
    if (!issue.comments) {
      fetch(`/api/issues/${issue.id}`)
        .then((r) => r.json())
        .then((d) => {
          setComments(d.data?.comments ?? []);
          setAttachments(d.data?.attachments ?? []);
          setLoadingComments(false);
        });
    } else {
      // Also fetch attachments when comments already provided
      fetch(`/api/issues/${issue.id}`)
        .then((r) => r.json())
        .then((d) => setAttachments(d.data?.attachments ?? []));
    }
  }, [issue.id]);

  // Realtime: Pusher subscription with polling fallback
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    // Try to import Pusher client (null when mock credentials)
    import("@/lib/pusher").then(({ getPusherClient, PUSHER_EVENTS }) => {
      const pusher = getPusherClient();

      if (pusher) {
        // Real Pusher — subscribe to issue channel
        const channel = pusher.subscribe(`issue-${issue.id}`);
        channel.bind(PUSHER_EVENTS.COMMENT_ADDED, (data: { comment: Comment & { author: UserType } }) => {
          setComments((prev) => {
            if (prev.find((c) => c.id === data.comment.id)) return prev;
            return [...prev, data.comment];
          });
        });
        cleanup = () => pusher.unsubscribe(`issue-${issue.id}`);
      } else {
        // Polling fallback: refresh comments every 15 seconds
        const interval = setInterval(async () => {
          try {
            const res = await fetch(`/api/issues/${issue.id}`);
            const d = await res.json();
            if (d.data?.comments) setComments(d.data.comments);
          } catch { /* silent */ }
        }, 15000);
        cleanup = () => clearInterval(interval);
      }
    }).catch(() => { /* Pusher import failed — no realtime */ });

    return () => { cleanup?.(); };
  }, [issue.id]);

  const uploadPhoto = async (file: File) => {
    setUploadingPhoto(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", "issue-photos");
      const uploadRes  = await fetch("/api/upload/local", { method: "POST", body: form });
      const uploadData = await uploadRes.json();

      // Save attachment record
      const attRes = await fetch("/api/attachments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          issueId:  issue.id,
          filename: file.name,
          fileKey:  uploadData.fileKey,
          fileUrl:  uploadData.fileUrl,
          fileSize: file.size,
          mimeType: file.type,
        }),
      });
      if (attRes.ok) {
        const { data } = await attRes.json();
        setAttachments((p) => [...p, data]);
      }
    } catch (err) {
      console.error("Photo upload failed:", err);
    } finally {
      setUploadingPhoto(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  const sendComment = async () => {
    if (!commentText.trim()) return;
    setSendingComment(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: commentText, issueId: issue.id }),
    });
    if (res.ok) {
      const { data } = await res.json();
      setComments((p) => [...p, data]);
      setCommentText("");
    }
    setSendingComment(false);
  };

  const status = STATUS_CONFIG[issue.status] ?? STATUS_CONFIG.OPEN;
  const StatusIcon = status.icon;
  const priority = PRIORITY_CONFIG[issue.priority as keyof typeof PRIORITY_CONFIG] ?? PRIORITY_CONFIG.MEDIUM;

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-[420px] flex flex-col bg-background border-l shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b flex-shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-mono text-muted-foreground">#{issue.number}</span>
          <span className="text-sm font-semibold truncate">{issue.title}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 flex-shrink-0" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Meta */}
        <div className="px-5 py-4 space-y-3 border-b">
          {/* Status selector */}
          <div className="flex items-center gap-2">
            <Select
              value={issue.status}
              onValueChange={(v) => onStatusChange(issue.id, v)}
            >
              <SelectTrigger className={cn("h-7 w-36 text-xs border-0 px-2", status.bg, status.color)}>
                <StatusIcon className="w-3 h-3 mr-1.5" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                  <SelectItem key={k} value={k} className="text-xs">{v.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className={cn("text-xs font-medium flex items-center gap-1", priority.color)}>
              <span className={cn("w-2 h-2 rounded-full inline-block", priority.dot)} />
              {priority.label}
            </span>
          </div>

          {/* Details grid */}
          <div className="space-y-2 text-xs">
            <MetaRow icon={User} label="Người tạo">
              <div className="flex items-center gap-1.5">
                <Avatar className="w-4 h-4">
                  <AvatarImage src={issue.createdBy.image ?? undefined} />
                  <AvatarFallback className="text-[7px] bg-primary text-white">
                    {getInitials(issue.createdBy.name)}
                  </AvatarFallback>
                </Avatar>
                {issue.createdBy.name}
              </div>
            </MetaRow>
            <MetaRow icon={User} label="Phụ trách">
              {issue.assignee ? (
                <div className="flex items-center gap-1.5">
                  <Avatar className="w-4 h-4">
                    <AvatarImage src={issue.assignee.image ?? undefined} />
                    <AvatarFallback className="text-[7px] bg-primary text-white">
                      {getInitials(issue.assignee.name)}
                    </AvatarFallback>
                  </Avatar>
                  {issue.assignee.name}
                </div>
              ) : <span className="text-muted-foreground">Chưa phân công</span>}
            </MetaRow>
            {issue.drawing && (
              <MetaRow icon={FileText} label="Bản vẽ">
                <span className="font-mono">{issue.drawing.sheetNumber}</span>
              </MetaRow>
            )}
            {issue.dueDate && (
              <MetaRow icon={Calendar} label="Deadline">
                {formatDate(issue.dueDate)}
              </MetaRow>
            )}
            {issue.location && (
              <MetaRow icon={MapPin} label="Vị trí">
                {issue.location as string}
              </MetaRow>
            )}
            <MetaRow icon={Clock} label="Tạo lúc">
              <TimeAgo date={new Date(issue.createdAt)} />
            </MetaRow>
          </div>

          {/* Description */}
          {issue.description && (
            <div className="bg-muted/40 rounded-lg p-3 text-xs text-foreground/80 leading-relaxed">
              {issue.description}
            </div>
          )}

          {/* Photo attachments */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Ảnh hiện trường ({attachments.filter((a) => a.mimeType?.startsWith("image/")).length})
              </span>
              <button
                onClick={() => photoInputRef.current?.click()}
                disabled={uploadingPhoto}
                className="flex items-center gap-1 text-[10px] text-primary hover:underline disabled:opacity-50"
              >
                {uploadingPhoto ? <Loader2 className="w-3 h-3 animate-spin" /> : <Camera className="w-3 h-3" />}
                {uploadingPhoto ? "Đang upload..." : "Thêm ảnh"}
              </button>
            </div>
            {attachments.filter((a) => a.mimeType?.startsWith("image/")).length > 0 ? (
              <div className="grid grid-cols-3 gap-1.5">
                {attachments
                  .filter((a) => a.mimeType?.startsWith("image/"))
                  .map((att) => (
                    <div
                      key={att.id}
                      className="relative aspect-square rounded-lg overflow-hidden border cursor-pointer group"
                      onClick={() => setLightbox(att.fileUrl)}
                    >
                      <img src={att.fileUrl} alt={att.filename} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-1">
                        <a
                          href={att.fileUrl}
                          download={att.filename}
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-white"
                        >
                          <Download className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                {/* Add more button */}
                <button
                  onClick={() => photoInputRef.current?.click()}
                  disabled={uploadingPhoto}
                  className="aspect-square rounded-lg border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-muted/30 transition-colors disabled:opacity-50"
                >
                  {uploadingPhoto ? <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" /> : <Camera className="w-4 h-4 text-muted-foreground" />}
                  <span className="text-[9px] text-muted-foreground">Thêm</span>
                </button>
              </div>
            ) : !loadingComments && (
              <button
                onClick={() => photoInputRef.current?.click()}
                disabled={uploadingPhoto}
                className="w-full py-4 rounded-xl border-2 border-dashed border-muted-foreground/20 flex flex-col items-center gap-1.5 hover:border-primary/30 hover:bg-muted/20 transition-colors disabled:opacity-50"
              >
                <Image className="w-7 h-7 text-muted-foreground/30" />
                <span className="text-xs text-muted-foreground">Chụp hoặc chọn ảnh hiện trường</span>
              </button>
            )}
          </div>
        </div>

        {/* Comments */}
        <div className="px-5 py-4">
          <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Bình luận ({comments.length})
          </div>

          {loadingComments ? (
            <div className="flex items-center gap-2 text-muted-foreground py-4">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs">Đang tải...</span>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-2.5">
                  <Avatar className="w-6 h-6 flex-shrink-0 mt-0.5">
                    <AvatarImage src={c.author.image ?? undefined} />
                    <AvatarFallback className="text-[8px] bg-primary text-white">
                      {getInitials(c.author.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xs font-medium">{c.author.name}</span>
                      <span className="text-[10px] text-muted-foreground">
                        <TimeAgo date={new Date(c.createdAt)} />
                      </span>
                    </div>
                    <div className="text-xs text-foreground/80 leading-relaxed bg-muted/40 rounded-lg px-3 py-2">
                      {c.body}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>

      {/* Comment input */}
      <div className="border-t px-4 py-3 flex-shrink-0">
        <div className="flex gap-2">
          <Textarea
            placeholder="Thêm bình luận..."
            className="resize-none text-xs min-h-[60px] flex-1"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) sendComment();
            }}
          />
          <Button
            size="icon"
            className="h-9 w-9 self-end flex-shrink-0"
            onClick={sendComment}
            disabled={!commentText.trim() || sendingComment}
          >
            {sendingComment
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <Send className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1.5">Ctrl+Enter để gửi</p>
      </div>

      {/* Hidden photo input */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) { uploadPhoto(file); e.target.value = ""; }
        }}
      />

      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] mx-4">
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={lightbox} alt="Ảnh hiện trường" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
}

function MetaRow({
  icon: Icon, label, children,
}: {
  icon: React.ElementType; label: string; children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
      <span className="text-muted-foreground w-24 flex-shrink-0">{label}</span>
      <span className="font-medium">{children}</span>
    </div>
  );
}
