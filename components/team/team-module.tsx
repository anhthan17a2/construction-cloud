"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users, Plus, Mail, Loader2, Crown, Shield, Wrench, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { formatDate, getInitials, cn } from "@/lib/utils";
import type { ProjectMember, User } from "@/types";

type MemberWithUser = ProjectMember & { user: User };

const ROLE_CONFIG: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  ADMIN:           { label: "Admin",           color: "text-red-500",    icon: Crown },
  PROJECT_MANAGER: { label: "Project Manager", color: "text-purple-500", icon: Shield },
  BIM_MANAGER:     { label: "BIM Manager",     color: "text-blue-500",   icon: Shield },
  ENGINEER:        { label: "Kỹ sư",           color: "text-sky-500",    icon: Wrench },
  FIELD_TECH:      { label: "Kỹ thuật viên",   color: "text-green-500",  icon: Wrench },
  QS_QC:           { label: "QS/QC",           color: "text-yellow-500", icon: Shield },
  VIEWER:          { label: "Viewer",           color: "text-slate-400",  icon: Eye },
};

const ROLES = Object.entries(ROLE_CONFIG).map(([value, cfg]) => ({ value, label: cfg.label }));

interface Props {
  projectId: string;
  projectName: string;
  members: MemberWithUser[];
  currentUserId: string;
}

export function TeamModule({ projectId, projectName, members: initMembers, currentUserId }: Props) {
  const router = useRouter();
  const [members, setMembers] = useState(initMembers);
  const [addOpen, setAddOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("VIEWER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAdd = async () => {
    setLoading(true);
    setError("");
    const res = await fetch(`/api/projects/${projectId}/members`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.error || "Lỗi thêm thành viên");
    } else {
      setMembers((p) => [...p, json.data]);
      setEmail("");
      setRole("VIEWER");
      setAddOpen(false);
      router.refresh();
    }
    setLoading(false);
  };

  const handleRemove = async (userId: string) => {
    if (!confirm("Xóa thành viên này?")) return;
    await fetch(`/api/projects/${projectId}/members?userId=${userId}`, { method: "DELETE" });
    setMembers((p) => p.filter((m) => m.userId !== userId));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5" /> Team
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">{members.length} thành viên</p>
        </div>
        <Button size="sm" onClick={() => setAddOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" /> Thêm thành viên
        </Button>
      </div>

      <div className="border rounded-xl overflow-hidden">
        {members.map((m, i) => {
          const cfg = ROLE_CONFIG[m.role] ?? ROLE_CONFIG.VIEWER;
          const Icon = cfg.icon;
          const isCurrentUser = m.userId === currentUserId;
          return (
            <div key={m.id} className={cn("flex items-center gap-3 px-4 py-3", i !== 0 && "border-t")}>
              <Avatar className="w-9 h-9 flex-shrink-0">
                <AvatarImage src={m.user.image ?? undefined} />
                <AvatarFallback className="bg-primary text-white text-xs">
                  {getInitials(m.user.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{m.user.name || "—"}</span>
                  {isCurrentUser && (
                    <span className="text-[10px] bg-primary/10 text-primary rounded-full px-2 py-0.5">Bạn</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Mail className="w-3 h-3" /> {m.user.email}
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                <span className={`text-xs font-medium ${cfg.color}`}>{cfg.label}</span>
              </div>
              <div className="text-xs text-muted-foreground hidden md:block">
                Tham gia {formatDate(m.joinedAt)}
              </div>
              {!isCurrentUser && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs text-destructive hover:text-destructive"
                  onClick={() => handleRemove(m.userId)}
                >
                  Xóa
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Thêm thành viên</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label>Email</Label>
              <Input
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label>Vai trò</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="mt-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((r) => (
                    <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddOpen(false)}>Hủy</Button>
            <Button onClick={handleAdd} disabled={!email || loading}>
              {loading ? <Loader2 className="w-4 h-4 animate-spin mr-1.5" /> : null}
              Thêm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
