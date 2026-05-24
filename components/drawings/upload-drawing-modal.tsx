"use client";

import { useState, useCallback } from "react";
import { upload } from "@vercel/blob/client";
import { useDropzone } from "react-dropzone";
import { Upload, X, FileText, Loader2, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, DISCIPLINE_LABELS, formatFileSize } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/provider";

const DISCIPLINES = Object.keys(DISCIPLINE_LABELS);
const SHEET_NUMBER_RE = /^([A-Za-z]{1,4}-\d{2,4}(?:-[A-Za-z0-9]+)?)/;

interface UploadFile {
  file: File;
  sheetNumber: string;
  title: string;
  discipline: string;
  revision: string;
  status: "pending" | "uploading" | "done" | "error";
  progress: number;
}

function parseFilename(name: string): { sheetNumber: string; title: string; discipline: string } {
  const withoutExt = name.replace(/\.[^.]+$/, "");
  const match = withoutExt.match(SHEET_NUMBER_RE);
  const sheetNumber = match ? match[1].toUpperCase() : withoutExt.slice(0, 10).toUpperCase();
  const title = match
    ? withoutExt.slice(match[1].length).replace(/^[\s_\-–]+/, "").trim() || withoutExt
    : withoutExt;
  const prefix = sheetNumber.split("-")[0];
  const discMap: Record<string, string> = {
    M: "HVAC", H: "HVAC", V: "HVAC",
    P: "PLUMBING", W: "PLUMBING",
    E: "ELECTRICAL", EL: "ELECTRICAL",
    F: "FIRE_PROTECTION", FA: "FIRE_PROTECTION",
    A: "ARCHITECTURAL", AR: "ARCHITECTURAL",
    S: "STRUCTURAL", ST: "STRUCTURAL",
    C: "CIVIL",
  };
  return { sheetNumber, title, discipline: discMap[prefix] || "OTHER" };
}

interface Props {
  open: boolean;
  onClose: () => void;
  projectId: string;
  onSuccess: (drawing: { id: string; [k: string]: unknown }) => void;
}

export function UploadDrawingModal({ open, onClose, projectId, onSuccess }: Props) {
  const { t } = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [vsetName, setVsetName] = useState("");
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((accepted: File[]) => {
    const mapped: UploadFile[] = accepted.map((f) => {
      const parsed = parseFilename(f.name);
      return {
        file: f,
        ...parsed,
        revision: "R1",
        status: "pending",
        progress: 0,
      };
    });
    setFiles((prev) => [...prev, ...mapped]);
    if (step === 1) setStep(2);
  }, [step]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
  });

  const updateFile = (idx: number, patch: Partial<UploadFile>) => {
    setFiles((prev) => prev.map((f, i) => (i === idx ? { ...f, ...patch } : f)));
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleUpload = async () => {
    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      updateFile(i, { status: "uploading" });
      try {
        // Upload directly from browser to Vercel Blob (no 4.5MB server limit)
        const ext = f.file.name.split(".").pop() ?? "pdf";
        const uid = crypto.randomUUID();
        const pathname = `projects/${projectId}/drawings/${uid}.${ext}`;
        const blob = await upload(pathname, f.file, {
          access: "public",
          handleUploadUrl: "/api/upload/blob-token",
        });

        const fileKey = blob.pathname;
        const fileUrl = blob.url;

        // 2. Create drawing record
        const res = await fetch("/api/drawings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            projectId,
            sheetNumber: f.sheetNumber,
            title: f.title,
            discipline: f.discipline,
            revision: f.revision,
            fileKey,
            fileUrl,
            fileSize: f.file.size,
            versionSetName: vsetName || undefined,
          }),
        });

        if (!res.ok) throw new Error("Upload failed");
        const { data } = await res.json();
        updateFile(i, { status: "done" });
        if (i === 0) onSuccess(data);
      } catch (err) {
        console.error("Upload error:", err);
        updateFile(i, { status: "error" });
      }
    }
    setUploading(false);
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setFiles([]);
    setVsetName("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>{t("upload.title")}</DialogTitle>
          {/* Step indicator */}
          <div className="flex items-center gap-1 mt-3">
            {[
              { n: 1, label: t("upload.stepVersionSet") },
              { n: 2, label: t("upload.stepUpload") },
              { n: 3, label: t("upload.stepReview") },
            ].map(({ n, label }, i) => (
              <div key={n} className="flex items-center gap-1">
                <div className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                  step >= n ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                )}>
                  {n}
                </div>
                <span className={cn("text-[11px]", step >= n ? "text-foreground" : "text-muted-foreground")}>
                  {label}
                </span>
                {i < 2 && <ChevronRight className="w-3 h-3 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {/* Step 1: Version Set */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {t("upload.versionSetHint")}
              </p>
              <div>
                <Label>{t("upload.versionSetLabel")}</Label>
                <Input
                  className="mt-1.5"
                  placeholder={t("upload.versionSetPh")}
                  value={vsetName}
                  onChange={(e) => setVsetName(e.target.value)}
                />
              </div>
              {/* Drop zone on step 1 to advance */}
              <div
                {...getRootProps()}
                className={cn(
                  "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors",
                  isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                )}
              >
                <input {...getInputProps()} />
                <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                <p className="text-sm font-medium">{t("upload.dropFiles")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("upload.orBrowse")}</p>
              </div>
            </div>
          )}

          {/* Step 2: Files list & edit */}
          {step === 2 && (
            <div className="space-y-3">
              {/* Add more files */}
              <div
                {...getRootProps()}
                className={cn(
                  "border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors",
                  isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                )}
              >
                <input {...getInputProps()} />
                <p className="text-xs text-muted-foreground">
                  <Upload className="w-3.5 h-3.5 inline mr-1" /> {t("upload.addMore")}
                </p>
              </div>

              {files.map((f, i) => (
                <div key={i} className="border rounded-xl p-3 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs font-medium truncate flex-1">{f.file.name}</span>
                    <span className="text-[10px] text-muted-foreground">{formatFileSize(f.file.size)}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 flex-shrink-0"
                      onClick={() => removeFile(i)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-[10px]">{t("upload.sheetNumber")}</Label>
                      <Input
                        className="h-7 text-xs mt-1 font-mono"
                        value={f.sheetNumber}
                        onChange={(e) => updateFile(i, { sheetNumber: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label className="text-[10px]">{t("upload.revision")}</Label>
                      <Input
                        className="h-7 text-xs mt-1 font-mono"
                        value={f.revision}
                        onChange={(e) => updateFile(i, { revision: e.target.value })}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label className="text-[10px]">{t("upload.titleField")}</Label>
                      <Input
                        className="h-7 text-xs mt-1"
                        value={f.title}
                        onChange={(e) => updateFile(i, { title: e.target.value })}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label className="text-[10px]">{t("upload.discipline")}</Label>
                      <Select
                        value={f.discipline}
                        onValueChange={(v) => updateFile(i, { discipline: v })}
                      >
                        <SelectTrigger className="h-7 text-xs mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {DISCIPLINES.map((d) => (
                            <SelectItem key={d} value={d} className="text-xs">
                              {DISCIPLINE_LABELS[d]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Done */}
          {step === 3 && (
            <div className="space-y-2">
              <div className="text-center py-4">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold">{t("upload.uploadComplete")}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {files.filter((f) => f.status === "done").length} / {files.length} {t("upload.uploadedSheets")}
                </p>
              </div>
              {files.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg border text-xs">
                  <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="flex-1 font-mono">{f.sheetNumber}</span>
                  <span className="text-muted-foreground">{f.title}</span>
                  {f.status === "done" && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                  {f.status === "error" && <X className="w-4 h-4 text-red-500" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t flex-shrink-0">
          <Button variant="outline" onClick={step > 1 ? () => setStep((s) => (s - 1) as any) : handleClose}>
            {step === 1 ? t("common.cancel") : `← ${t("common.back")}`}
          </Button>
          {step === 1 && (
            <Button onClick={() => setStep(2)} disabled={files.length === 0}>
              {t("common.next")} →
            </Button>
          )}
          {step === 2 && (
            <Button onClick={handleUpload} disabled={files.length === 0 || uploading}>
              {uploading ? (
                <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> {t("common.uploading")}</>
              ) : (
                t("upload.uploadN", { n: files.length })
              )}
            </Button>
          )}
          {step === 3 && (
            <Button onClick={handleClose}>{t("common.done")}</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
