"use client";

import { useState, useRef, useEffect } from "react";
import { Share2, Copy, Check, Link2, QrCode, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  drawing: { title: string; sheetNumber: string };
}

export function SharePopover({ drawing }: Props) {
  const [open,        setOpen]        = useState(false);
  const [copyStatus,  setCopyStatus]  = useState<"idle" | "copied">("idle");
  const [qrVisible,   setQrVisible]   = useState(false);
  const [pos,         setPos]         = useState({ top: 0, right: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(shareUrl)}`;

  const openPopover = () => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ top: rect.bottom + 6, right: window.innerWidth - rect.right });
    setOpen(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2500);
    } catch {
      prompt("Copy link này:", shareUrl);
    }
  };

  const nativeShare = async () => {
    if (!navigator.share) { copyLink(); return; }
    try {
      await navigator.share({
        title: `${drawing.sheetNumber} — ${drawing.title}`,
        text: `Xem bản vẽ ${drawing.sheetNumber} trên ConstructionCloud`,
        url: shareUrl,
      });
    } catch { /* cancelled */ }
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!(e.target as Element)?.closest("[data-share-popover]")) setOpen(false);
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={openPopover}
        title="Chia sẻ bản vẽ"
        className={cn(
          "h-7 w-7 rounded-md flex items-center justify-center transition-colors",
          open ? "bg-white/10 text-sky-400" : "text-slate-400 hover:bg-white/10 hover:text-sky-300"
        )}
      >
        <Share2 className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div
          data-share-popover
          className="fixed z-50 w-80 bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl overflow-hidden"
          style={{ top: pos.top, right: pos.right }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Share2 className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-sm font-semibold text-slate-200">Chia sẻ bản vẽ</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-slate-500 hover:text-slate-300 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3">
            {/* Drawing info */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-mono text-slate-400">{drawing.sheetNumber}</span>
              <span>—</span>
              <span className="truncate">{drawing.title}</span>
            </div>

            {/* Link display */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
              <Link2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
              <span className="text-[10px] text-slate-400 truncate flex-1 font-mono select-all">
                {shareUrl}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <button
                onClick={copyLink}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-medium transition-all",
                  copyStatus === "copied"
                    ? "bg-green-500/20 border-green-500/40 text-green-400"
                    : "bg-white/5 border-white/10 text-slate-300 hover:bg-sky-500/10 hover:border-sky-500/40 hover:text-sky-300"
                )}
              >
                {copyStatus === "copied"
                  ? <><Check className="w-3.5 h-3.5" /> Đã copy!</>
                  : <><Copy className="w-3.5 h-3.5" /> Copy link</>}
              </button>

              {"share" in navigator && (
                <button
                  onClick={nativeShare}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-sky-500/10 hover:border-sky-500/40 hover:text-sky-300 text-xs font-medium transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" /> Chia sẻ
                </button>
              )}
            </div>

            {/* QR code */}
            <button
              onClick={() => setQrVisible((v) => !v)}
              className="flex items-center gap-2 text-[11px] text-slate-500 hover:text-slate-300 transition-colors w-full"
            >
              <QrCode className="w-3.5 h-3.5" />
              {qrVisible ? "Ẩn QR Code" : "Hiện QR Code để mở trên điện thoại"}
            </button>

            {qrVisible && (
              <div className="flex flex-col items-center gap-2 pt-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrApiUrl}
                  alt="QR Code"
                  width={160}
                  height={160}
                  className="rounded-lg bg-white p-2"
                />
                <p className="text-[10px] text-slate-600">Quét để mở trên điện thoại</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
