"use client";

import Link from "next/link";
import { TimeAgo } from "@/components/ui/time-ago";
import {
  FileText,
  AlertCircle,
  MessageSquare,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  Upload,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { DISCIPLINE_COLORS, DISCIPLINE_LABELS, getInitials, cn } from "@/lib/utils";
import type { Project, ProjectMember, User, Drawing, Issue, Activity as ActivityType } from "@/types";

interface Props {
  project: Project & {
    members: (ProjectMember & { user: User })[];
    _count: { drawings: number; issues: number; rfis: number; punchItems: number };
  };
  recentDrawings: (Drawing & { uploadedBy: User })[];
  openIssues: (Issue & { assignee: User | null; createdBy: User })[];
  recentActivity: ActivityType[];
  chartData: { name: string; issues: number; drawings: number }[];
}

const ISSUE_STATUS_COLOR: Record<string, string> = {
  OPEN: "text-red-500 bg-red-500/10",
  IN_PROGRESS: "text-yellow-500 bg-yellow-500/10",
  RESOLVED: "text-green-500 bg-green-500/10",
  CLOSED: "text-slate-400 bg-slate-400/10",
};
const ISSUE_STATUS_LABEL: Record<string, string> = {
  OPEN: "Mở", IN_PROGRESS: "Đang xử lý", RESOLVED: "Đã xử lý", CLOSED: "Đóng",
};

export function ProjectDashboard({ project, recentDrawings, openIssues, recentActivity, chartData }: Props) {
  const base = `/projects/${project.id}`;

  const kpis = [
    { label: "Bản vẽ", value: project._count.drawings, icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10", href: `${base}/drawings` },
    { label: "Issues mở", value: project._count.issues, icon: AlertCircle, color: "text-red-500", bg: "bg-red-500/10", href: `${base}/issues` },
    { label: "RFIs", value: project._count.rfis, icon: MessageSquare, color: "text-purple-500", bg: "bg-purple-500/10", href: `${base}/rfis` },
    { label: "Punch List", value: project._count.punchItems, icon: CheckCircle2, color: "text-orange-500", bg: "bg-orange-500/10", href: `${base}/punch-list` },
    { label: "Team", value: project.members.length, icon: Users, color: "text-green-500", bg: "bg-green-500/10", href: `${base}/team` },
  ];

  return (
    <div className="p-6 space-y-5 max-w-[1300px] mx-auto">
      {/* Project title */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: project.color }} />
        <h1 className="text-xl font-semibold">{project.name}</h1>
        <span className="text-xs font-mono text-muted-foreground border rounded px-1.5 py-0.5">
          {project.code}
        </span>
      </div>

      {/* KPIs — 5 cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <Link key={k.label} href={k.href}>
              <Card className="hover:border-primary/30 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${k.color}`} style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold leading-none">{k.value}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{k.label}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Activity chart — real 7-day data */}
        <Card className="xl:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Hoạt động 7 ngày qua</CardTitle>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500 inline-block" /> Bản vẽ</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500 inline-block" /> Issues</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={chartData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                  labelFormatter={(label) => `${label}`}
                />
                <Bar dataKey="drawings" name="Bản vẽ" fill="#0EA5E9" radius={[3, 3, 0, 0]} />
                <Bar dataKey="issues" name="Issues" fill="#EF4444" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Team */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Team</CardTitle>
              <Link href={`${base}/team`} className="text-xs text-primary">View all</Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {project.members.slice(0, 6).map((m) => (
              <div key={m.id} className="flex items-center gap-2.5">
                <Avatar className="w-7 h-7">
                  <AvatarImage src={m.user.image ?? undefined} />
                  <AvatarFallback className="text-[9px] bg-primary text-white">
                    {getInitials(m.user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium truncate">{m.user.name || m.user.email}</div>
                  <div className="text-[10px] text-muted-foreground">{m.role.replace("_", " ")}</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Recent Sheets */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Recent Sheets</CardTitle>
              <Link href={`${base}/drawings`} className="text-xs text-primary flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {recentDrawings.length === 0 ? (
              <div className="text-center py-8 text-sm text-muted-foreground">
                No sheets uploaded yet.{" "}
                <Link href={`${base}/drawings`} className="text-primary">Upload now</Link>
              </div>
            ) : (
              recentDrawings.map((d) => (
                <Link
                  key={d.id}
                  href={`${base}/drawings/${d.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white text-[9px] font-bold"
                    style={{ background: DISCIPLINE_COLORS[d.discipline] }}
                  >
                    {d.discipline.slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium truncate">{d.title}</div>
                    <div className="text-[10px] text-muted-foreground font-mono">{d.sheetNumber} · {d.currentRev}</div>
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    <TimeAgo date={new Date(d.updatedAt)} />
                  </div>
                </Link>
              ))
            )}
          </CardContent>
        </Card>

        {/* Open Issues */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
              <Link href={`${base}/issues`} className="text-xs text-primary flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {openIssues.length === 0 ? (
              <div className="text-center py-8 text-sm text-muted-foreground">
                No open issues.
              </div>
            ) : (
              openIssues.map((issue) => (
                <Link
                  key={issue.id}
                  href={`${base}/issues/${issue.id}`}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium truncate">{issue.title}</div>
                    <div className="text-[10px] text-muted-foreground">
                      #{issue.number} · {issue.assignee ? issue.assignee.name : "Unassigned"}
                    </div>
                  </div>
                  <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full font-medium", ISSUE_STATUS_COLOR[issue.status])}>
                    {ISSUE_STATUS_LABEL[issue.status]}
                  </span>
                </Link>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
