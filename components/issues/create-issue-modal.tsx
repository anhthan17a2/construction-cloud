"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Camera, X as XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import type { Drawing, ProjectMember, User, Issue } from "@/types";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  status: z.string(),
  priority: z.string(),
  type: z.string(),
  drawingId: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
  projectId: string;
  defaultStatus: string;
  drawings: Pick<Drawing, "id" | "sheetNumber" | "title">[];
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  onCreated: (issue: Issue & { createdBy: User; assignee: User | null; drawing: Drawing | null; _count: { comments: number; attachments: number } }) => void;
}

export function CreateIssueModal({ open, onClose, projectId, defaultStatus, drawings, members, onCreated }: Props) {
  const [photos, setPhotos] = useState<{ file: File; preview: string }[]>([]);
  const [uploadingPhotos, setUploadingPhotos] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const {
    register, handleSubmit, setValue, watch, reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { status: defaultStatus, priority: "MEDIUM", type: "DEFECT" },
  });

  const addPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const newPhotos = files.map((f) => ({ file: f, preview: URL.createObjectURL(f) }));
    setPhotos((p) => [...p, ...newPhotos]);
    e.target.value = "";
  };

  const removePhoto = (i: number) => {
    setPhotos((p) => { URL.revokeObjectURL(p[i].preview); return p.filter((_, j) => j !== i); });
  };

  const onSubmit = async (data: FormData) => {
    // Create issue
    const res = await fetch("/api/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, projectId }),
    });
    if (!res.ok) return;
    const { data: issue } = await res.json();

    // Upload photos if any
    if (photos.length > 0) {
      setUploadingPhotos(true);
      for (const { file } of photos) {
        try {
          const form = new FormData();
          form.append("file", file);
          form.append("folder", "issue-photos");
          const uploadRes  = await fetch("/api/upload/local", { method: "POST", body: form });
          const uploadData = await uploadRes.json();
          await fetch("/api/attachments", {
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
        } catch { /* non-blocking */ }
      }
      setUploadingPhotos(false);
    }

    onCreated(issue);
    setPhotos([]);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Issue</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3 py-2">
            <div>
              <Label>Title *</Label>
              <Input className="mt-1.5 text-sm" placeholder="Issue description..." {...register("title")} />
              {errors.title && <p className="text-xs text-destructive mt-1">{errors.title.message}</p>}
            </div>
            <div>
              <Label>Description</Label>
              <Textarea className="mt-1.5 text-sm resize-none" rows={3} placeholder="More details..." {...register("description")} />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <Label className="text-xs">Status</Label>
                <Select defaultValue={defaultStatus} onValueChange={(v) => setValue("status", v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[["OPEN","Open"],["IN_PROGRESS","In Progress"],["RESOLVED","Resolved"]].map(([v,l]) => (
                      <SelectItem key={v} value={v} className="text-xs">{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Priority</Label>
                <Select defaultValue="MEDIUM" onValueChange={(v) => setValue("priority", v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[["LOW","Low"],["MEDIUM","Medium"],["HIGH","High"],["CRITICAL","Critical"]].map(([v,l]) => (
                      <SelectItem key={v} value={v} className="text-xs">{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Type</Label>
                <Select defaultValue="DEFECT" onValueChange={(v) => setValue("type", v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {[["DEFECT","Defect"],["DESIGN_ISSUE","Design"],["SAFETY","Safety"],["CLARIFICATION","Clarification"]].map(([v,l]) => (
                      <SelectItem key={v} value={v} className="text-xs">{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Sheet</Label>
                <Select onValueChange={(v) => setValue("drawingId", v === "none" ? undefined : v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5"><SelectValue placeholder="Select sheet" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" className="text-xs">No sheet</SelectItem>
                    {drawings.map((d) => (
                      <SelectItem key={d.id} value={d.id} className="text-xs">{d.sheetNumber} — {d.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Assignee</Label>
                <Select onValueChange={(v) => setValue("assigneeId", v === "none" ? undefined : v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5"><SelectValue placeholder="Assign to..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" className="text-xs">Unassigned</SelectItem>
                    {members.map((m) => (
                      <SelectItem key={m.user.id} value={m.user.id} className="text-xs">{m.user.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label className="text-xs">Due Date</Label>
              <Input type="date" className="mt-1.5 h-8 text-xs" {...register("dueDate")} />
            </div>

            {/* Photo attachments */}
            <div>
              <Label className="text-xs">Ảnh hiện trường</Label>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {photos.map((p, i) => (
                  <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border group">
                    <img src={p.preview} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                    >
                      <XIcon className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => photoInputRef.current?.click()}
                  className="w-16 h-16 rounded-lg border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-muted/30 transition-colors"
                >
                  <Camera className="w-4 h-4 text-muted-foreground" />
                  <span className="text-[9px] text-muted-foreground">Thêm</span>
                </button>
              </div>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                multiple
                capture="environment"
                className="hidden"
                onChange={addPhoto}
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" size="sm" onClick={() => { setPhotos([]); onClose(); }}>Hủy</Button>
            <Button type="submit" size="sm" disabled={isSubmitting || uploadingPhotos}>
              {(isSubmitting || uploadingPhotos)
                ? <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" /> {uploadingPhotos ? "Upload ảnh..." : "Đang tạo..."}</>
                : `Tạo Issue${photos.length > 0 ? ` + ${photos.length} ảnh` : ""}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
