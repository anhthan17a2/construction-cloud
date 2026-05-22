"use client";

import { useState } from "react";
import {
  Users, Mail, Shield, Crown, Eye, UserMinus,
  Copy, Check, Loader2, UserPlus, Building2, X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn, getInitials } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type OrgRole = "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";

interface Member {
  id: string;
  userId: string;
  role: OrgRole;
  joinedAt: Date;
  user: { id: string; name: string | null; email: string; image: string | null; title: string | null; createdAt: Date };
}

interface Invitation {
  id: string;
  email: string;
  role: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  inviter: { name: string | null };
}

interface Props {
  org:           { id: string; name: string; slug: string };
  members:       Member[];
  invitations:   Invitation[];
  callerRole:    OrgRole;
  currentUserId: string;
}

// ── Role config ───────────────────────────────────────────────────────────────

const ROLE_CONFIG: Record<OrgRole, { label: string; description: string; color: string; icon: React.ElementType }> = {
  OWNER:  { label: "Owner",  description: "Toàn quyền quản lý",       color: "bg-yellow-500/15 text-yellow-500 border-yellow-500/30",  icon: Crown  },
  ADMIN:  { label: "Admin",  description: "Quản lý thành viên & dự án", color: "bg-red-500/15 text-red-400 border-red-500/30",          icon: Shield },
  MEMBER: { label: "Member", description: "Tạo & chỉnh sửa bản vẽ",   color: "bg-blue-500/15 text-blue-400 border-blue-500/30",       icon: Users  },
  VIEWER: { label: "Viewer", description: "Chỉ xem, không chỉnh sửa", color: "bg-slate-500/15 text-slate-400 border-slate-500/30",    icon: Eye    },
};

// ── Main component ────────────────────────────────────────────────────────────

export function TeamManagement({ org, members: initMembers, invitations: initInvitations, callerRole, currentUserId }: Props) {
  const [members,     setMembers]     = useState(initMembers);
  const [invitations, setInvitations] = useState(initInvitations);
  const [showInvite,  setShowInvite]  = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole,  setInviteRole]  = useState<"ADMIN" | "MEMBER" | "VIEWER">("MEMBER");
  const [inviting,    setInviting]    = useState(false);
  const [inviteResult, setInviteResult] = useState<{ url: string; email: string } | null>(null);
  const [copied,      setCopied]      = useState(false);
  const [inviteError, setInviteError] = useState("");

  const canManage = callerRole === "OWNER" || callerRole === "ADMIN";

  // ── Change member role ──────────────────────────────────────────────────

  const changeRole = async (userId: string, newRole: OrgRole) => {
    const res = await fetch(`/api/org/members/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: newRole }),
    });
    if (res.ok) {
      setMembers((prev) => prev.map((m) => m.userId === userId ? { ...m, role: newRole } : m));
    }
  };

  // ── Remove member ────────────────────────────────────────────────────────

  const removeMember = async (userId: string) => {
    if (!confirm("Xóa thành viên này khỏi tổ chức?")) return;
    const res = await fetch(`/api/org/members/${userId}`, { method: "DELETE" });
    if (res.ok) setMembers((prev) => prev.filter((m) => m.userId !== userId));
  };

  // ── Invite ───────────────────────────────────────────────────────────────

  const sendInvite = async () => {
    if (!inviteEmail) return;
    setInviting(true); setInviteError("");
    const res = await fetch("/api/org/invite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inviteEmail, role: inviteRole }),
    });
    const json = await res.json();
    if (!res.ok) {
      setInviteError(json.error || "Lỗi khi gửi lời mời");
    } else if (json.data?.inviteUrl) {
      setInviteResult({ url: json.data.inviteUrl, email: inviteEmail });
      setInvitations((prev) => [...prev, {
        id: Date.now().toString(), email: inviteEmail, role: inviteRole,
        token: json.data.token, expiresAt: new Date(json.data.expiresAt),
        createdAt: new Date(), inviter: { name: "Bạn" },
      }]);
    } else {
      // Direct add (user already exists)
      const memberRes = await fetch("/api/org/members");
      const memberData = await memberRes.json();
      if (memberData.data) setMembers(memberData.data);
      setInviteResult(null);
      setShowInvite(false);
      setInviteEmail("");
    }
    setInviting(false);
  };

  const copyInviteLink = async () => {
    if (!inviteResult) return;
    await navigator.clipboard.writeText(inviteResult.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            {org.name}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {members.length} thành viên · workspace: <span className="font-mono">{org.slug}</span>
          </p>
        </div>
        {canManage && (
          <Button onClick={() => { setShowInvite(true); setInviteResult(null); setInviteEmail(""); setInviteError(""); }}
            size="sm" className="gap-1.5">
            <UserPlus className="w-4 h-4" /> Mời thành viên
          </Button>
        )}
      </div>

      {/* Invite panel */}
      {showInvite && (
        <div className="border rounded-xl p-5 bg-muted/30 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-sm flex items-center gap-2">
              <Mail className="w-4 h-4" /> Mời thành viên mới
            </h2>
            <button onClick={() => setShowInvite(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          {!inviteResult ? (
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                  <Label className="text-xs">Email</Label>
                  <Input placeholder="name@company.com" value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendInvite()} />
                </div>
                <div className="w-36 space-y-1">
                  <Label className="text-xs">Vai trò</Label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as typeof inviteRole)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="ADMIN">Admin</option>
                    <option value="MEMBER">Member</option>
                    <option value="VIEWER">Viewer</option>
                  </select>
                </div>
              </div>
              {inviteError && <p className="text-xs text-destructive">{inviteError}</p>}
              <Button onClick={sendInvite} size="sm" disabled={!inviteEmail || inviting}>
                {inviting ? <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" /> Đang gửi...</> : "Gửi lời mời"}
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-green-600 dark:text-green-400">
                ✓ Đã tạo lời mời cho <strong>{inviteResult.email}</strong>
              </p>
              <div>
                <Label className="text-xs mb-1.5 block">Link mời (copy và gửi cho họ)</Label>
                <div className="flex gap-2">
                  <Input readOnly value={inviteResult.url} className="text-xs font-mono flex-1" />
                  <Button variant="outline" size="sm" onClick={copyInviteLink}>
                    {copied ? <><Check className="w-3.5 h-3.5 mr-1" /> Đã copy</> : <><Copy className="w-3.5 h-3.5 mr-1" /> Copy</>}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">Link hết hạn sau 7 ngày</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => { setInviteResult(null); setInviteEmail(""); }}>
                Mời người khác
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Members table */}
      <div className="border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b bg-muted/30 flex items-center justify-between">
          <h2 className="text-sm font-semibold">Thành viên ({members.length})</h2>
        </div>

        <div className="divide-y">
          {members.map((m) => {
            const cfg = ROLE_CONFIG[m.role];
            const Icon = cfg.icon;
            const isMe = m.userId === currentUserId;
            const canEdit = canManage && !isMe && m.role !== "OWNER";

            return (
              <div key={m.id} className="flex items-center gap-4 px-4 py-3.5 hover:bg-muted/20 transition-colors">
                <Avatar className="w-9 h-9 flex-shrink-0">
                  <AvatarImage src={m.user.image ?? undefined} />
                  <AvatarFallback className="text-xs bg-primary/10 text-primary">
                    {getInitials(m.user.name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium truncate">{m.user.name || "—"}</span>
                    {isMe && <span className="text-[10px] text-muted-foreground">(Bạn)</span>}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">{m.user.email}</div>
                  {m.user.title && <div className="text-[10px] text-muted-foreground">{m.user.title}</div>}
                </div>

                {/* Role selector */}
                {canEdit ? (
                  <select
                    value={m.role}
                    onChange={(e) => changeRole(m.userId, e.target.value as OrgRole)}
                    className={cn("text-xs border rounded-md px-2 py-1 font-medium cursor-pointer", cfg.color)}
                  >
                    {(["ADMIN","MEMBER","VIEWER"] as OrgRole[]).map((r) => (
                      <option key={r} value={r}>{ROLE_CONFIG[r].label}</option>
                    ))}
                  </select>
                ) : (
                  <Badge variant="outline" className={cn("text-xs gap-1 font-medium", cfg.color)}>
                    <Icon className="w-3 h-3" />
                    {cfg.label}
                  </Badge>
                )}

                {canEdit && (
                  <button
                    onClick={() => removeMember(m.userId)}
                    className="ml-1 text-muted-foreground hover:text-destructive transition-colors"
                    title="Xóa khỏi tổ chức"
                  >
                    <UserMinus className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pending invitations */}
      {invitations.length > 0 && (
        <div className="border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b bg-muted/30">
            <h2 className="text-sm font-semibold">Lời mời đang chờ ({invitations.length})</h2>
          </div>
          <div className="divide-y">
            {invitations.map((inv) => (
              <div key={inv.id} className="flex items-center gap-4 px-4 py-3 text-sm">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">{inv.email}</div>
                  <div className="text-xs text-muted-foreground">
                    Mời bởi {inv.inviter.name} · hết hạn {new Date(inv.expiresAt).toLocaleDateString("vi-VN")}
                  </div>
                </div>
                <Badge variant="outline" className={cn("text-xs", ROLE_CONFIG[inv.role as OrgRole]?.color)}>
                  {ROLE_CONFIG[inv.role as OrgRole]?.label ?? inv.role}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Role legend */}
      <div className="border rounded-xl p-4 bg-muted/20">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Giải thích vai trò</h3>
        <div className="grid grid-cols-2 gap-2">
          {(Object.entries(ROLE_CONFIG) as [OrgRole, typeof ROLE_CONFIG[OrgRole]][]).map(([role, cfg]) => {
            const Icon = cfg.icon;
            return (
              <div key={role} className="flex items-start gap-2 text-xs">
                <div className={cn("mt-0.5 p-1 rounded border flex-shrink-0", cfg.color)}>
                  <Icon className="w-3 h-3" />
                </div>
                <div>
                  <span className="font-medium">{cfg.label}</span>
                  <p className="text-muted-foreground">{cfg.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
