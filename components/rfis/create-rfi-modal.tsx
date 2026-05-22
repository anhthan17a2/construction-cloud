"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
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
import type { Drawing, ProjectMember, User, RFI } from "@/types";

const schema = z.object({
  subject: z.string().min(3, "Tối thiểu 3 ký tự"),
  question: z.string().min(5, "Tối thiểu 5 ký tự"),
  drawingId: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

interface Props {
  open: boolean;
  onClose: () => void;
  projectId: string;
  drawings: Pick<Drawing, "id" | "sheetNumber" | "title">[];
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  onCreated: (rfi: RFI & { createdBy: User; assignee: User | null; drawing: Drawing | null; _count: { comments: number } }) => void;
}

export function CreateRFIModal({ open, onClose, projectId, drawings, members, onCreated }: Props) {
  const {
    register, handleSubmit, setValue, reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/rfis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, projectId }),
    });
    if (res.ok) {
      const { data: rfi } = await res.json();
      onCreated(rfi);
      reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Tạo RFI mới</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 py-2">
            <div>
              <Label>Chủ đề *</Label>
              <Input
                className="mt-1.5"
                placeholder="VD: Xác nhận vật liệu ống HVAC tầng 3"
                {...register("subject")}
              />
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <Label>Nội dung câu hỏi *</Label>
              <Textarea
                className="mt-1.5 resize-none"
                rows={4}
                placeholder="Mô tả chi tiết vấn đề cần giải đáp..."
                {...register("question")}
              />
              {errors.question && <p className="text-xs text-destructive mt-1">{errors.question.message}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Bản vẽ liên quan</Label>
                <Select onValueChange={(v) => setValue("drawingId", v === "none" ? undefined : v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5">
                    <SelectValue placeholder="Chọn bản vẽ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" className="text-xs">Không có</SelectItem>
                    {drawings.map((d) => (
                      <SelectItem key={d.id} value={d.id} className="text-xs">
                        {d.sheetNumber} — {d.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Phân công</Label>
                <Select onValueChange={(v) => setValue("assigneeId", v === "none" ? undefined : v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5">
                    <SelectValue placeholder="Giao cho..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none" className="text-xs">Chưa phân công</SelectItem>
                    {members.map((m) => (
                      <SelectItem key={m.user.id} value={m.user.id} className="text-xs">
                        {m.user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label className="text-xs">Deadline</Label>
              <Input type="date" className="mt-1.5 h-8 text-xs" {...register("dueDate")} />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>Hủy</Button>
            <Button type="submit" size="sm" disabled={isSubmitting}>
              {isSubmitting ? <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" /> Đang tạo...</> : "Tạo RFI"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
