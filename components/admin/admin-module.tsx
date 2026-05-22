"use client";

import { useState } from "react";
import { TimeAgo } from "@/components/ui/time-ago";
import { Users, FolderOpen, Shield, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";

const ROLE_COLORS: Record<string, string> = {
  ADMIN: "bg-red-500/10 text-red-500",
  PROJECT_MANAGER: "bg-purple-500/10 text-purple-500",
  BIM_MANAGER: "bg-blue-500/10 text-blue-400",
  ENGINEER: "bg-sky-500/10 text-sky-400",
  FIELD_TECH: "bg-green-500/10 text-green-400",
  QS_QC: "bg-yellow-500/10 text-yellow-400",
  VIEWER: "bg-slate-500/10 text-slate-400",
};

interface Props {
  users: { id: string; name: string | null; email: string; role: string; company: string | null; createdAt: Date }[];
  projects: { id: string; name: string; code: string; status: string; color: string; createdAt: Date; _count: { members: number; drawings: number; issues: number } }[];
}

export function AdminModule({ users, projects }: Props) {
  const [userSearch, setUserSearch] = useState("");
  const [projSearch, setProjSearch] = useState("");

  const filteredUsers = users.filter((u) =>
    !userSearch || u.name?.toLowerCase().includes(userSearch.toLowerCase()) || u.email.toLowerCase().includes(userSearch.toLowerCase())
  );
  const filteredProjects = projects.filter((p) =>
    !projSearch || p.name.toLowerCase().includes(projSearch.toLowerCase()) || p.code.toLowerCase().includes(projSearch.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-primary" />
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{users.length}</div>
            <div className="text-xs text-muted-foreground">Người dùng</div>
          </div>
        </div>
        <div className="border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">{projects.length}</div>
            <div className="text-xs text-muted-foreground">Dự án</div>
          </div>
        </div>
        <div className="border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">
              {users.filter((u) => u.role === "ADMIN").length}
            </div>
            <div className="text-xs text-muted-foreground">Admins</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="mb-4">
          <TabsTrigger value="users">Người dùng ({users.length})</TabsTrigger>
          <TabsTrigger value="projects">Dự án ({projects.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <div className="relative mb-3 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input placeholder="Tìm người dùng..." className="pl-8 h-8 text-xs" value={userSearch} onChange={(e) => setUserSearch(e.target.value)} />
          </div>
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Người dùng</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Vai trò</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Công ty</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Ngày tham gia</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="w-7 h-7">
                          <AvatarFallback className="bg-primary text-white text-[9px]">
                            {getInitials(u.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{u.name || "—"}</div>
                          <div className="text-muted-foreground">{u.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">
                      <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium", ROLE_COLORS[u.role] ?? ROLE_COLORS.VIEWER)}>
                        {u.role.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{u.company || "—"}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      <TimeAgo date={new Date(u.createdAt)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="relative mb-3 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input placeholder="Tìm dự án..." className="pl-8 h-8 text-xs" value={projSearch} onChange={(e) => setProjSearch(e.target.value)} />
          </div>
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Dự án</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Thành viên</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Bản vẽ</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Issues</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((p) => (
                  <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="font-mono text-muted-foreground">{p.code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2.5">{p._count.members}</td>
                    <td className="px-4 py-2.5">{p._count.drawings}</td>
                    <td className="px-4 py-2.5">{p._count.issues}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">
                      <TimeAgo date={new Date(p.createdAt)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
