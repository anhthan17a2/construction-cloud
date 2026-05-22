"use client";

import { useState, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { jsPDF } from "jspdf";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileImage, FileText, FilePlus2, Loader2, Download } from "lucide-react";
import type { AnnotationData } from "@/types";

type DrawAnnotationFn = (ctx: CanvasRenderingContext2D, ann: AnnotationData, sc: number) => void;

interface Props {
  open: boolean;
  onClose: () => void;
  drawing: { id: string; title: string; sheetNumber: string };
  pdfDoc: pdfjsLib.PDFDocumentProxy | null;
  annotations: AnnotationData[];
  pdfCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  mkCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  fitScale: number;
  curPage: number;
  totalPages: number;
  drawAnnotation: DrawAnnotationFn;
}

// ── Render one page to a composited canvas ─────────────────────────────────
async function renderComposite(
  pdfDoc: pdfjsLib.PDFDocumentProxy,
  pageNum: number,
  annotations: AnnotationData[],
  drawAnnotation: DrawAnnotationFn,
  exportSc: number
): Promise<{ canvas: HTMLCanvasElement; widthPt: number; heightPt: number }> {
  const page   = await pdfDoc.getPage(pageNum);
  const origVp = page.getViewport({ scale: 1 });          // original pt dimensions
  const expVp  = page.getViewport({ scale: exportSc });   // render at 2× for sharpness

  const canvas = document.createElement("canvas");
  canvas.width  = Math.round(expVp.width);
  canvas.height = Math.round(expVp.height);

  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport: expVp }).promise;

  // Overlay annotations
  for (const ann of annotations.filter((a) => a.pageNumber === pageNum)) {
    drawAnnotation(ctx, ann, exportSc);
  }

  return { canvas, widthPt: origVp.width, heightPt: origVp.height };
}

// ── Component ─────────────────────────────────────────────────────────────────

export function ExportModal({
  open, onClose,
  drawing, pdfDoc, annotations,
  pdfCanvasRef, mkCanvasRef,
  fitScale, curPage, totalPages,
  drawAnnotation,
}: Props) {
  const [busy,      setBusy]      = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [statusMsg, setStatusMsg] = useState("");

  const exportSc = Math.max(2, fitScale); // render at ≥2× for crispness

  // ── Download current page as PNG ─────────────────────────────────────────
  const downloadPng = useCallback(async () => {
    if (!pdfDoc) return;
    setBusy(true); setStatusMsg("Đang render…");
    try {
      const { canvas } = await renderComposite(pdfDoc, curPage, annotations, drawAnnotation, exportSc);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a   = Object.assign(document.createElement("a"), {
          href: url,
          download: `${drawing.sheetNumber}_trang${curPage}.png`,
        });
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    } finally {
      setBusy(false); setStatusMsg("");
    }
  }, [pdfDoc, curPage, annotations, drawAnnotation, exportSc, drawing.sheetNumber]);

  // ── Export current page as PDF (original paper size, 1-click) ────────────
  const exportCurrentPdf = useCallback(async () => {
    if (!pdfDoc) return;
    setBusy(true); setStatusMsg("Đang tạo PDF trang hiện tại…");
    try {
      const { canvas, widthPt, heightPt } = await renderComposite(
        pdfDoc, curPage, annotations, drawAnnotation, exportSc
      );

      const pdf = new jsPDF({
        orientation: widthPt >= heightPt ? "landscape" : "portrait",
        unit: "pt",
        format: [widthPt, heightPt],
        compress: true,
      });

      pdf.addImage(
        canvas.toDataURL("image/png", 0.92),
        "PNG", 0, 0, widthPt, heightPt,
        undefined, "FAST"
      );

      pdf.save(`${drawing.sheetNumber}_trang${curPage}.pdf`);
    } finally {
      setBusy(false); setStatusMsg("");
    }
  }, [pdfDoc, curPage, annotations, drawAnnotation, exportSc, drawing.sheetNumber]);

  // ── Export all pages as multi-page PDF ────────────────────────────────────
  const exportAllPdf = useCallback(async () => {
    if (!pdfDoc) return;
    setBusy(true);

    try {
      let pdf: jsPDF | null = null;

      for (let pn = 1; pn <= totalPages; pn++) {
        setProgress(pn / totalPages);
        setStatusMsg(`Đang render trang ${pn} / ${totalPages}…`);

        const { canvas, widthPt, heightPt } = await renderComposite(
          pdfDoc, pn, annotations, drawAnnotation, exportSc
        );
        const imgData = canvas.toDataURL("image/png", 0.92);

        if (!pdf) {
          pdf = new jsPDF({
            orientation: widthPt >= heightPt ? "landscape" : "portrait",
            unit: "pt",
            format: [widthPt, heightPt],
            compress: true,
          });
        } else {
          pdf.addPage(
            [widthPt, heightPt],
            widthPt >= heightPt ? "landscape" : "portrait"
          );
        }

        pdf.addImage(imgData, "PNG", 0, 0, widthPt, heightPt, undefined, "FAST");
      }

      pdf?.save(`${drawing.sheetNumber}_all_pages.pdf`);
    } finally {
      setBusy(false); setProgress(0); setStatusMsg("");
    }
  }, [pdfDoc, totalPages, annotations, drawAnnotation, exportSc, drawing.sheetNumber]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm bg-[#0F172A] border-white/15 text-slate-200">
        <DialogHeader>
          <DialogTitle className="text-slate-200 flex items-center gap-2 text-base">
            <Download className="w-4 h-4 text-sky-400" /> Xuất bản vẽ
          </DialogTitle>
        </DialogHeader>

        {/* Progress */}
        {busy ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <Loader2 className="w-8 h-8 animate-spin text-sky-400" />
            <p className="text-sm text-slate-300">{statusMsg}</p>
            {progress > 0 && (
              <>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full bg-sky-500 transition-all duration-300 rounded-full"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500">{Math.round(progress * 100)}%</p>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-2 mt-1">
            {/* Current page */}
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold px-1 pb-1">
              Trang hiện tại — {drawing.sheetNumber} (trang {curPage}/{totalPages})
            </p>

            {/* PDF — primary action */}
            <button
              onClick={exportCurrentPdf}
              className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400/50 transition-all text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                <FilePlus2 className="w-4 h-4 text-sky-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-sky-300">Tải xuống PDF trang này</div>
                <div className="text-[11px] text-slate-400">Giữ nguyên kích thước giấy gốc · 1 click</div>
              </div>
            </button>

            {/* PNG */}
            <button
              onClick={downloadPng}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-500/20 flex items-center justify-center flex-shrink-0">
                <FileImage className="w-4 h-4 text-slate-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-300">Tải xuống PNG</div>
                <div className="text-[11px] text-slate-500">Ảnh chất lượng cao kèm markup</div>
              </div>
            </button>

            {/* All pages */}
            {totalPages > 1 && (
              <>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold px-1 pt-2 pb-1">
                  Toàn bộ tài liệu ({totalPages} trang)
                </p>
                <button
                  onClick={exportAllPdf}
                  className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 hover:border-violet-400/50 transition-all text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-violet-300">Tải xuống PDF toàn bộ</div>
                    <div className="text-[11px] text-slate-400">PDF đa trang · kích thước giấy gốc · 1 click</div>
                  </div>
                </button>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
