"use client";

import Link from "next/link";
import { TimeAgo } from "@/components/ui/time-ago";
import { X, Eye, Download, Upload, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, DISCIPLINE_COLORS, DISCIPLINE_LABELS, getInitials } from "@/lib/utils";
import type { Drawing, DrawingVersion, User } from "@/types";

type DrawingWithRelations = Drawing & {
  uploadedBy: User;
  versions: DrawingVersion[];
  _count: { issues: number; annotations: number };
};

const STATUS_CONFIG: Record<string, { label: string; class: string }> = {
  DRAFT:      { label: "Draft",      class: "bg-slate-500/10 text-slate-400" },
  IN_REVIEW:  { label: "In Review",  class: "bg-yellow-500/10 text-yellow-500" },
  APPROVED:   { label: "Approved",   class: "bg-green-500/10 text-green-500" },
  SUPERSEDED: { label: "Superseded", class: "bg-orange-500/10 text-orange-400" },
  VOID:       { label: "Void",       class: "bg-red-500/10 text-red-400" },
};

export function DrawingDetailPanel({
  drawing: d,
  projectId,
  onClose,
}: {
  drawing: DrawingWithRelations;
  projectId: string;
  onClose: () => void;
}) {
  const color = DISCIPLINE_COLORS[d.discipline];
  const status = STATUS_CONFIG[d.status];
  const latest = d.versions[0];

  return (
    <div className="w-[240px] flex-shrink-0 border-l flex flex-col overflow-hidden bg-card">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b flex-shrink-0">
        <span className="text-xs font-semibold">Sheet Details</span>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
          <X className="w-3.5 h-3.5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Thumbnail — click to open viewer */}
        <Link
          href={`/projects/${projectId}/drawings/${d.id}`}
          className="block w-full aspect-video relative border-b overflow-hidden group"
          style={{ background: `${color}12` }}
        >
          <div className="w-full h-full flex items-center justify-center">
            {d.thumbnailUrl ? (
              <img src={d.thumbnailUrl} alt="" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200" />
            ) : (
              <div className="text-center">
                <div className="text-2xl font-bold font-mono group-hover:scale-110 transition-transform" style={{ color }}>
                  {d.sheetNumber}
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">{DISCIPLINE_LABELS[d.discipline]}</div>
              </div>
            )}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 text-xs font-semibold text-white bg-black/60 rounded-full px-3 py-1 transition-opacity flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> Mở & Markup
            </span>
          </div>
        </Link>

        {/* Info */}
        <div className="p-3 space-y-3">
          <div>
            <div className="text-[11px] font-semibold leading-tight">{d.title}</div>
            <div className="text-[10px] font-mono text-muted-foreground mt-0.5">{d.sheetNumber}</div>
          </div>

          <div
            className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-medium"
            style={{ background: `${color}12`, color }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            {DISCIPLINE_LABELS[d.discipline]}
          </div>

          <div className="space-y-1.5">
            <Row label="Status">
              <span className={cn("text-[10px] px-1.5 py-0.5 rounded-full font-medium", status.class)}>
                {status.label}
              </span>
            </Row>
            <Row label="Revision">
              <span className="font-mono text-[11px]">{d.currentRev}</span>
            </Row>
            <Row label="Pages">
              <span className="text-[11px]">{d.pageCount}</span>
            </Row>
            <Row label="Issues">
              <span className={cn("text-[11px]", d._count.issues > 0 ? "text-red-500 font-medium" : "")}>
                {d._count.issues}
              </span>
            </Row>
            <Row label="Updated">
              <span className="text-[10px] text-muted-foreground">
                <TimeAgo date={new Date(d.updatedAt)} />
              </span>
            </Row>
          </div>

          {/* Uploaded by */}
          <div className="pt-1 border-t">
            <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Uploaded by
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={d.uploadedBy.image ?? undefined} />
                <AvatarFallback className="text-[8px] bg-primary text-white">
                  {getInitials(d.uploadedBy.name)}
                </AvatarFallback>
              </Avatar>
              <span className="text-[11px] font-medium">{d.uploadedBy.name}</span>
            </div>
          </div>

          {/* Version history */}
          {d.versions.length > 0 && (
            <div className="border-t pt-2">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Revision History
              </div>
              <div className="space-y-2">
                {d.versions.map((v, i) => (
                  <div key={v.id} className="flex items-start gap-2">
                    <div className={cn(
                      "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0",
                      i === 0 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    )}>
                      {v.revision}
                    </div>
                    <div>
                      <div className="text-[10px] font-medium">{v.note || "Revision upload"}</div>
                      <div className="text-[9px] text-muted-foreground">
                        <TimeAgo date={new Date(v.uploadedAt)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="border-t p-3 space-y-2 flex-shrink-0">
        <Button className="w-full h-8 text-xs" asChild>
          <Link href={`/projects/${projectId}/drawings/${d.id}`}>
            <Eye className="w-3.5 h-3.5 mr-1.5" /> View & Markup
          </Link>
        </Button>
        {latest?.fileUrl && (
          <Button variant="outline" className="w-full h-8 text-xs" asChild>
            <a href={latest.fileUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-3.5 h-3.5 mr-1.5" /> Download {d.currentRev}
            </a>
          </Button>
        )}
        <Button variant="outline" className="w-full h-8 text-xs">
          <Upload className="w-3.5 h-3.5 mr-1.5" /> Upload Revision
        </Button>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-[10px] text-muted-foreground flex-shrink-0">{label}</span>
      <div className="flex-1 text-right">{children}</div>
    </div>
  );
}
