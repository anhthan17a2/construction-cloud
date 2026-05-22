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
import type { PunchItem, ProjectMember, User } from "@/types";

const schema = z.object({
  title: z.string().min(3, "Tối thiểu 3 ký tự"),
  description: z.string().optional(),
  location: z.string().optional(),
  assigneeId: z.string().optional(),
  dueDate: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

type PunchItemWithRelations = PunchItem & {
  createdBy: User;
  assignee: User | null;
  _count: { comments: number; attachments: number };
};

interface Props {
  open: boolean;
  onClose: () => void;
  projectId: string;
  members: (ProjectMember & { user: Pick<User, "id" | "name" | "image"> })[];
  onCreated: (item: PunchItemWithRelations) => void;
}

export function CreatePunchModal({ open, onClose, projectId, members, onCreated }: Props) {
  const {
    register, handleSubmit, setValue, reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/punch-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, projectId }),
    });
    if (res.ok) {
      const { data: item } = await res.json();
      onCreated(item);
      reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thêm Punch Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 py-2">
            <div>
              <Label>Tiêu đề *</Label>
              <Input
                className="mt-1.5"
                placeholder="VD: Kiểm tra kết nối ống HVAC tầng 5"
                {...register("title")}
              />
              {errors.title && <p className="text-xs text-destructive mt-1">{errors.title.message}</p>}
            </div>
            <div>
              <Label>Mô tả</Label>
              <Textarea
                className="mt-1.5 resize-none"
                rows={3}
                placeholder="Chi tiết công việc cần thực hiện..."
                {...register("description")}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Vị trí</Label>
                <Input
                  className="mt-1.5 h-8 text-xs"
                  placeholder="VD: Tầng 3, Phòng A301"
                  {...register("location")}
                />
              </div>
              <div>
                <Label className="text-xs">Nhà thầu / Người phụ trách</Label>
                <Select onValueChange={(v) => setValue("assigneeId", v === "none" ? undefined : v)}>
                  <SelectTrigger className="h-8 text-xs mt-1.5">
                    <SelectValue placeholder="Phân công..." />
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
              <Label className="text-xs">Deadline nghiệm thu</Label>
              <Input type="date" className="mt-1.5 h-8 text-xs" {...register("dueDate")} />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" size="sm" onClick={onClose}>Hủy</Button>
            <Button type="submit" size="sm" disabled={isSubmitting}>
              {isSubmitting
                ? <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" /> Đang tạo...</>
                : "Thêm item"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
