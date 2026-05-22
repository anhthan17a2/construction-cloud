"use client";

import { useState } from "react";
import { ClipboardList, AlertCircle, CheckSquare, MessageSquare, TrendingUp, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, getInitials, PRIORITY_CONFIG, formatDate } from "@/lib/utils";
import { TimeAgo } from "@/components/ui/time-ago";
import type { Issue, PunchItem, RFI, User, Drawing } from "@/types";

type IssueR = Issue & { createdBy: Pick<User,"id"|"name"|"image">; assignee: Pick<User,"id"|"name"|"image"> | null; drawing: Pick<Drawing,"id"|"sheetNumber"|"title"> | null };
type PunchR = PunchItem & { createdBy: Pick<User,"id"|"name"|"image">; assignee: Pick<User,"id"|"name"|"image"> | null };
type RFIR   = RFI & { createdBy: Pick<User,"id"|"name"|"image">; assignee: Pick<User,"id"|"name"|"image"> | null };

interface Props {
  projectId: string;
  issues: IssueR[];
  punchItems: PunchR[];
  rfis: RFIR[];
}

const ISSUE_STATUS: Record<string, { label: string; color: string }> = {
  OPEN:        { label: "Mở",          color: "bg-red-500/10 text-red-500" },
  IN_PROGRESS: { label: "Đang xử lý", color: "bg-yellow-500/10 text-yellow-500" },
  RESOLVED:    { label: "Đã xử lý",   color: "bg-green-500/10 text-green-500" },
  CLOSED:      { label: "Đóng",        color: "bg-slate-500/10 text-slate-400" },
};
const PUNCH_STATUS: Record<string, { label: string; color: string }> = {
  OPEN:             { label: "Chưa xử lý", color: "bg-red-500/10 text-red-500" },
  READY_FOR_REVIEW: { label: "Chờ nghiệm thu", color: "bg-blue-500/10 text-blue-500" },
  ACCEPTED:         { label: "Đã nghiệm thu", color: "bg-green-500/10 text-green-500" },
  REJECTED:         { label: "Không đạt",     color: "bg-orange-500/10 text-orange-500" },
};
const RFI_STATUS: Record<string, { label: string; color: string }> = {
  DRAFT:     { label: "Nháp",       color: "bg-slate-500/10 text-slate-400" },
  SUBMITTED: { label: "Đã gửi",    color: "bg-blue-500/10 text-blue-500" },
  IN_REVIEW: { label: "Đang xem",  color: "bg-yellow-500/10 text-yellow-500" },
  ANSWERED:  { label: "Đã trả lời",color: "bg-green-500/10 text-green-500" },
  CLOSED:    { label: "Đóng",      color: "bg-slate-500/10 text-slate-400" },
};

export function FieldReportsModule({ projectId, issues, punchItems, rfis }: Props) {
  // Summary stats
  const openIssues    = issues.filter((i) => i.status === "OPEN" || i.status === "IN_PROGRESS").length;
  const closedIssues  = issues.filter((i) => i.status === "RESOLVED" || i.status === "CLOSED").length;
  const openPunch     = punchItems.filter((p) => p.status === "OPEN").length;
  const donePunch     = punchItems.filter((p) => p.status === "ACCEPTED").length;
  const openRFI       = rfis.filter((r) => r.status !== "CLOSED" && r.status !== "ANSWERED").length;

  const printReport = () => window.print();

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-3 border-b flex-shrink-0">
        <h1 className="text-base font-semibold flex items-center gap-2">
          <ClipboardList className="w-4 h-4" /> Báo cáo hiện trường
        </h1>
        <div className="ml-auto">
          <Button variant="outline" size="sm" onClick={printReport}>
            <Download className="w-3.5 h-3.5 mr-1.5" /> Xuất báo cáo
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-5 space-y-5">
        {/* Summary KPIs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { icon: AlertCircle, label: "Issue đang mở",    value: openIssues,   color: "text-red-500",    bg: "bg-red-500/10" },
            { icon: AlertCircle, label: "Issue đã đóng",    value: closedIssues, color: "text-green-500",  bg: "bg-green-500/10" },
            { icon: CheckSquare, label: "Punch chưa xử lý", value: openPunch,    color: "text-orange-500", bg: "bg-orange-500/10" },
            { icon: CheckSquare, label: "Punch nghiệm thu", value: donePunch,    color: "text-green-500",  bg: "bg-green-500/10" },
            { icon: MessageSquare, label: "RFI đang mở",   value: openRFI,      color: "text-purple-500", bg: "bg-purple-500/10" },
          ].map((k) => {
            const Icon = k.icon;
            return (
              <Card key={k.label}>
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${k.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{k.value}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{k.label}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="issues">
          <TabsList>
            <TabsTrigger value="issues">Issues ({issues.length})</TabsTrigger>
            <TabsTrigger value="punch">Punch List ({punchItems.length})</TabsTrigger>
            <TabsTrigger value="rfis">RFIs ({rfis.length})</TabsTrigger>
          </TabsList>

          {/* Issues tab */}
          <TabsContent value="issues" className="mt-4">
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">#</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Tiêu đề</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Ưu tiên</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Trạng thái</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Phụ trách</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Sheet</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Deadline</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Tạo lúc</th>
                  </tr>
                </thead>
                <tbody>
                  {issues.map((issue) => {
                    const st = ISSUE_STATUS[issue.status] ?? ISSUE_STATUS.OPEN;
                    const pr = PRIORITY_CONFIG[issue.priority as keyof typeof PRIORITY_CONFIG] ?? PRIORITY_CONFIG.MEDIUM;
                    return (
                      <tr key={issue.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">#{issue.number}</td>
                        <td className="px-4 py-2.5 font-medium max-w-[220px] truncate">{issue.title}</td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className={`w-2 h-2 rounded-full ${pr.dot}`} />
                            <span className={pr.color}>{pr.label}</span>
                          </div>
                        </td>
                        <td className="px-4 py-2.5">
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium", st.color)}>{st.label}</span>
                        </td>
                        <td className="px-4 py-2.5">
                          {issue.assignee ? (
                            <div className="flex items-center gap-1.5">
                              <Avatar className="w-5 h-5">
                                <AvatarImage src={issue.assignee.image ?? undefined} />
                                <AvatarFallback className="text-[7px] bg-primary text-white">{getInitials(issue.assignee.name)}</AvatarFallback>
                              </Avatar>
                              <span className="text-muted-foreground">{issue.assignee.name}</span>
                            </div>
                          ) : <span className="text-muted-foreground">—</span>}
                        </td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">{issue.drawing?.sheetNumber ?? "—"}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{formatDate(issue.dueDate)}</td>
                        <td className="px-4 py-2.5 text-muted-foreground"><TimeAgo date={issue.createdAt} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Punch List tab */}
          <TabsContent value="punch" className="mt-4">
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">#</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Hạng mục</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Trạng thái</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Vị trí</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Nhà thầu</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {punchItems.map((item) => {
                    const st = PUNCH_STATUS[item.status] ?? PUNCH_STATUS.OPEN;
                    return (
                      <tr key={item.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">#{item.number}</td>
                        <td className="px-4 py-2.5 font-medium max-w-[240px] truncate">{item.title}</td>
                        <td className="px-4 py-2.5">
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium", st.color)}>{st.label}</span>
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">{item.location ?? "—"}</td>
                        <td className="px-4 py-2.5">
                          {item.assignee ? (
                            <div className="flex items-center gap-1.5">
                              <Avatar className="w-5 h-5">
                                <AvatarImage src={item.assignee.image ?? undefined} />
                                <AvatarFallback className="text-[7px] bg-primary text-white">{getInitials(item.assignee.name)}</AvatarFallback>
                              </Avatar>
                              <span className="text-muted-foreground">{item.assignee.name}</span>
                            </div>
                          ) : <span className="text-muted-foreground">—</span>}
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">{formatDate(item.dueDate)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* RFIs tab */}
          <TabsContent value="rfis" className="mt-4">
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-muted/50 border-b">
                  <tr>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">#</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Chủ đề</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Trạng thái</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Phân công</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Deadline</th>
                    <th className="text-left font-medium text-muted-foreground px-4 py-2.5">Tạo lúc</th>
                  </tr>
                </thead>
                <tbody>
                  {rfis.map((rfi) => {
                    const st = RFI_STATUS[rfi.status] ?? RFI_STATUS.DRAFT;
                    return (
                      <tr key={rfi.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">#{rfi.number}</td>
                        <td className="px-4 py-2.5 font-medium max-w-[240px] truncate">{rfi.subject}</td>
                        <td className="px-4 py-2.5">
                          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium", st.color)}>{st.label}</span>
                        </td>
                        <td className="px-4 py-2.5">
                          {rfi.assignee ? (
                            <div className="flex items-center gap-1.5">
                              <Avatar className="w-5 h-5">
                                <AvatarImage src={rfi.assignee.image ?? undefined} />
                                <AvatarFallback className="text-[7px] bg-primary text-white">{getInitials(rfi.assignee.name)}</AvatarFallback>
                              </Avatar>
                              <span className="text-muted-foreground">{rfi.assignee.name}</span>
                            </div>
                          ) : <span className="text-muted-foreground">—</span>}
                        </td>
                        <td className="px-4 py-2.5 text-muted-foreground">{formatDate(rfi.dueDate)}</td>
                        <td className="px-4 py-2.5 text-muted-foreground"><TimeAgo date={rfi.createdAt} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
