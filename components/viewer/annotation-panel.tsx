"use client";

import { X, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AnnotationData } from "@/types";
import type { Issue, User } from "@/types";

const TYPE_LABEL: Record<string, string> = {
  pen: "Pen", highlight: "Highlight", arrow: "Arrow",
  rect: "Rectangle", circle: "Circle", text: "Text", stamp: "Stamp",
};

interface Props {
  annotations: AnnotationData[];
  issues: (Issue & { assignee: User | null })[];
  onClose: () => void;
}

export function AnnotationPanel({ annotations, issues, onClose }: Props) {
  return (
    <div className="w-56 flex-shrink-0 flex flex-col bg-[#0F172A] border-l border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/10 flex-shrink-0">
        <span className="text-[11px] font-semibold text-slate-300">Annotations</span>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-500 hover:text-white" onClick={onClose}>
          <X className="w-3.5 h-3.5" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {annotations.length === 0 ? (
          <p className="text-[11px] text-slate-500 text-center py-8">No annotations on this page</p>
        ) : (
          annotations.map((ann, i) => (
            <div
              key={i}
              className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div
                className="w-3 h-3 rounded-full mt-0.5 flex-shrink-0"
                style={{ background: ann.color }}
              />
              <div>
                <div className="text-[11px] font-medium text-slate-300">
                  {TYPE_LABEL[ann.type] || ann.type}
                </div>
                {ann.text && (
                  <div className="text-[10px] text-slate-500 truncate">{ann.text}</div>
                )}
                {ann.stampType && (
                  <div className="text-[9px] font-bold uppercase text-slate-400">{ann.stampType}</div>
                )}
              </div>
            </div>
          ))
        )}

        {issues.length > 0 && (
          <>
            <div className="pt-2 pb-1 px-1">
              <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                Issues on this sheet
              </span>
            </div>
            {issues.map((issue) => (
              <div key={issue.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5">
                <AlertCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-300 leading-tight">{issue.title}</div>
                  <div className="text-[9px] text-slate-500">
                    #{issue.number} · {issue.assignee?.name ?? "Unassigned"}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
