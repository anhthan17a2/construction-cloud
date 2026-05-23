"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import * as pdfjsLib from "pdfjs-dist";
import {
  ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2,
  Pencil, Highlighter, ArrowUpRight, Square, Circle, Type, Hand,
  MousePointer2, Undo2, Trash2, Save, List, AlertCircle, Loader2,
  Cloud, Ruler, Camera, X, Download, MapPin, Shapes, Minus,
  MessageSquare, Hexagon, Palette, Share2, FileDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectSeparator, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AnnotationPanel } from "./annotation-panel";
import { ExportModal }     from "./export-modal";
import { SharePopover }    from "./share-popover";
import type { Drawing, DrawingVersion, Annotation, User, Issue } from "@/types";
import type { AnnotationData } from "@/types";

if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

type ToolType =
  | "pointer" | "pan"
  | "pen" | "highlight" | "line" | "arrow" | "rect" | "circle" | "cloud" | "text"
  | "measurement" | "photo" | "callout" | "polygon"
  | "stamp-approved" | "stamp-rejected" | "stamp-review";

const SHAPE_TOOLS = ["line", "arrow", "rect", "circle", "cloud", "callout", "polygon"] as const;
type ShapeToolType = typeof SHAPE_TOOLS[number];

interface TextInputState {
  vx: number; vy: number;   // viewport (fixed) position
  nx: number; ny: number;   // normalized canvas position
  pageNumber: number;
  calloutTip?: { x: number; y: number }; // set when committing a callout annotation
  editIndex?: number;       // index of annotation being edited (text/callout)
}

const COLORS = ["#EF4444", "#F59E0B", "#22C55E", "#3B82F6", "#8B5CF6", "#F1F5F9"];
const WIDTHS = [1, 2, 4];
const ZOOM_MIN = 0.2;
const ZOOM_MAX = 6;
const ZOOM_FACTOR = 1.15;

// ─── Drawing scale presets ────────────────────────────────────────────────────
// 1 normalized PDF unit = 1 PDF point = 1/72 inch on paper
// ratio = real/paper multiplier (e.g., 100 for 1:100 scale)
type ScalePreset = {
  key: string;
  label: string;
  ratio: number;        // paper → reality scale factor
  system: "metric" | "imperial";
};

const METRIC_SCALES: ScalePreset[] = [
  { key: "1:1",    label: "1:1",    ratio: 1,    system: "metric" },
  { key: "1:2",    label: "1:2",    ratio: 2,    system: "metric" },
  { key: "1:5",    label: "1:5",    ratio: 5,    system: "metric" },
  { key: "1:10",   label: "1:10",   ratio: 10,   system: "metric" },
  { key: "1:20",   label: "1:20",   ratio: 20,   system: "metric" },
  { key: "1:25",   label: "1:25",   ratio: 25,   system: "metric" },
  { key: "1:50",   label: "1:50",   ratio: 50,   system: "metric" },
  { key: "1:100",  label: "1:100",  ratio: 100,  system: "metric" },
  { key: "1:200",  label: "1:200",  ratio: 200,  system: "metric" },
  { key: "1:250",  label: "1:250",  ratio: 250,  system: "metric" },
  { key: "1:500",  label: "1:500",  ratio: 500,  system: "metric" },
  { key: "1:1000", label: "1:1000", ratio: 1000, system: "metric" },
];

// US Architectural: ratio = inch_reality / inch_paper
// e.g., 1/4" = 1'-0"  → 1 paper inch = 48 reality inches
const US_ARCH_SCALES: ScalePreset[] = [
  { key: 'us-1/32', label: '1/32" = 1\'-0"', ratio: 384, system: "imperial" },
  { key: 'us-1/16', label: '1/16" = 1\'-0"', ratio: 192, system: "imperial" },
  { key: 'us-3/32', label: '3/32" = 1\'-0"', ratio: 128, system: "imperial" },
  { key: 'us-1/8',  label: '1/8" = 1\'-0"',  ratio: 96,  system: "imperial" },
  { key: 'us-3/16', label: '3/16" = 1\'-0"', ratio: 64,  system: "imperial" },
  { key: 'us-1/4',  label: '1/4" = 1\'-0"',  ratio: 48,  system: "imperial" },
  { key: 'us-3/8',  label: '3/8" = 1\'-0"',  ratio: 32,  system: "imperial" },
  { key: 'us-1/2',  label: '1/2" = 1\'-0"',  ratio: 24,  system: "imperial" },
  { key: 'us-3/4',  label: '3/4" = 1\'-0"',  ratio: 16,  system: "imperial" },
  { key: 'us-1',    label: '1" = 1\'-0"',     ratio: 12,  system: "imperial" },
];

// US Engineering: 1" = N feet
const US_ENG_SCALES: ScalePreset[] = [
  { key: 'us-e10',   label: "1\" = 10'",  ratio: 120,  system: "imperial" },
  { key: 'us-e20',   label: "1\" = 20'",  ratio: 240,  system: "imperial" },
  { key: 'us-e30',   label: "1\" = 30'",  ratio: 360,  system: "imperial" },
  { key: 'us-e40',   label: "1\" = 40'",  ratio: 480,  system: "imperial" },
  { key: 'us-e50',   label: "1\" = 50'",  ratio: 600,  system: "imperial" },
  { key: 'us-e60',   label: "1\" = 60'",  ratio: 720,  system: "imperial" },
  { key: 'us-e100',  label: "1\" = 100'", ratio: 1200, system: "imperial" },
];

const ALL_PRESETS: ScalePreset[] = [...METRIC_SCALES, ...US_ARCH_SCALES, ...US_ENG_SCALES];

// Explicit display-unit override for measurement results
type DisplayUnit = "auto" | "mm" | "cm" | "m" | "km" | "in" | "ft" | "ft-in" | "yd";

const DISPLAY_UNIT_LABELS: Record<DisplayUnit, string> = {
  auto: "Auto", mm: "mm", cm: "cm", m: "m", km: "km",
  in: "in", ft: "ft", "ft-in": "ft' in\"", yd: "yd",
};

// Format measurement with an explicit unit (overrides auto-select logic)
function formatDist(
  normDist: number,
  preset: ScalePreset,
  unit: DisplayUnit,
  custom?: { scale: number; unit: string }
): string {
  if (custom) return `${trimZeros((normDist * custom.scale).toFixed(3))} ${custom.unit}`;
  const paperInches = normDist / 72;
  const realInches  = paperInches * preset.ratio;
  switch (unit) {
    case "auto":  return calcRealDistance(normDist, preset);
    case "mm":    return `${trimZeros((realInches * 25.4).toFixed(2))} mm`;
    case "cm":    return `${trimZeros((realInches * 2.54).toFixed(3))} cm`;
    case "m":     return `${trimZeros((realInches * 0.0254).toFixed(4))} m`;
    case "km":    return `${trimZeros((realInches * 0.0000254).toFixed(6))} km`;
    case "in":    return `${trimZeros(realInches.toFixed(3))}"`;
    case "ft":    return `${trimZeros((realInches / 12).toFixed(4))}'`;
    case "ft-in": {
      const ft = Math.floor(realInches / 12);
      const inch = realInches - ft * 12;
      const frac = toArchFraction(inch);
      if (ft === 0) return `${frac}"`;
      if (inch < 0.02) return `${ft}'-0"`;
      return `${ft}'-${frac}"`;
    }
    case "yd":    return `${trimZeros((realInches / 36).toFixed(4))} yd`;
  }
}

// Convert normalized PDF distance to real-world label
// normDist: distance in PDF points at scale=1 (1 point = 1/72 inch on paper)
function calcRealDistance(normDist: number, preset: ScalePreset): string {
  const paperInches = normDist / 72; // inches on the physical drawing paper

  if (preset.system === "metric") {
    const realMm = paperInches * 25.4 * preset.ratio;
    if (realMm >= 1000)  return `${trimZeros((realMm / 1000).toFixed(3))} m`;
    if (realMm >= 100)   return `${trimZeros((realMm / 10).toFixed(2))} cm`;
    if (realMm >= 10)    return `${trimZeros(realMm.toFixed(1))} cm`;
    return `${trimZeros(realMm.toFixed(2))} mm`;
  } else {
    const realInches = paperInches * preset.ratio;
    const feet = Math.floor(realInches / 12);
    const inches = realInches - feet * 12;
    const inFrac = toArchFraction(inches);
    if (feet === 0) return `${inFrac}"`;
    if (inches < 0.02) return `${feet}'-0"`;
    return `${feet}'-${inFrac}"`;
  }
}

function trimZeros(s: string): string {
  return s.replace(/\.?0+$/, "");
}

// Snap cursor to nearest N-degree angle from start (AutoCAD ortho/polar)
function constrainOrtho(
  start: { x: number; y: number },
  cursor: { x: number; y: number },
  step = 45
): { x: number; y: number } {
  const dx = cursor.x - start.x;
  const dy = cursor.y - start.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 1) return cursor;
  const deg = Math.atan2(dy, dx) * (180 / Math.PI);
  const snapped = Math.round(deg / step) * step;
  const rad = snapped * (Math.PI / 180);
  return {
    x: start.x + dist * Math.cos(rad),
    y: start.y + dist * Math.sin(rad),
  };
}

// Format inches as nearest 1/16" fraction for readability
function toArchFraction(inches: number): string {
  const wholeIn = Math.floor(inches);
  const frac = inches - wholeIn;
  // Round to nearest 1/16
  const sixteenths = Math.round(frac * 16);
  if (sixteenths === 0)  return `${wholeIn}`;
  if (sixteenths === 16) return `${wholeIn + 1}`;
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = gcd(sixteenths, 16);
  return wholeIn > 0
    ? `${wholeIn} ${sixteenths / g}/${16 / g}`
    : `${sixteenths / g}/${16 / g}`;
}

interface Props {
  drawing: Drawing & {
    versions: DrawingVersion[];
    annotations: (Annotation & { author: User })[];
    issues: (Issue & { assignee: User | null })[];
  };
  fileUrl: string | null;
  projectId: string;
  currentUserId: string;
}

export function PDFViewer({ drawing, fileUrl, projectId, currentUserId }: Props) {
  const pdfCanvasRef = useRef<HTMLCanvasElement>(null);
  const mkCanvasRef   = useRef<HTMLCanvasElement>(null);
  const containerRef  = useRef<HTMLDivElement>(null);
  const renderTaskRef = useRef<pdfjsLib.RenderTask | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const photoPinRef   = useRef<{ x: number; y: number } | null>(null);

  const [pdfDoc,     setPdfDoc]     = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [curPage,    setCurPage]    = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale,      setScale]      = useState(1.0);
  const [fitScale,   setFitScale]   = useState(1.0);
  const [isLoading,  setIsLoading]  = useState(false);
  const [loadError,  setLoadError]  = useState<string | null>(null);

  const [tool,     setTool]     = useState<ToolType>("pointer");
  const [color,    setColor]    = useState("#EF4444");
  const [strokeW,  setStrokeW]  = useState(2);

  // Measurement scale — default 1:100 (common MEP drawing scale)
  const [presetKey,   setPresetKey]   = useState("1:100");
  const [isCustom,    setIsCustom]    = useState(false);
  const [customScale, setCustomScale] = useState(1);
  const [customUnit,  setCustomUnit]  = useState("m");

  const activePreset = ALL_PRESETS.find((p) => p.key === presetKey) ?? METRIC_SCALES[7];

  // Ortho mode (Shift key) + live measurement display
  const [isShiftDown,  setIsShiftDown]  = useState(false);
  const [liveMeasure,  setLiveMeasure]  = useState<{ label: string; angle: number } | null>(null);
  const isShiftDownRef = useRef(false);

  // Explicit display unit (overrides auto-unit in calcRealDistance)
  const [displayUnit, setDisplayUnit] = useState<DisplayUnit>("auto");

  // Refs for scale state (used in useCallback redrawMarkup to avoid stale closure)
  const isCustomRef     = useRef(isCustom);
  const activePresetRef = useRef(activePreset);
  const customScaleRef  = useRef(customScale);
  const customUnitRef   = useRef(customUnit);
  const displayUnitRef  = useRef<DisplayUnit>("auto");
  useEffect(() => { isCustomRef.current    = isCustom;         }, [isCustom]);
  useEffect(() => { activePresetRef.current = activePreset;    }, [activePreset]);
  useEffect(() => { customScaleRef.current = customScale;      }, [customScale]);
  useEffect(() => { displayUnitRef.current = displayUnit;      }, [displayUnit]);
  useEffect(() => { customUnitRef.current  = customUnit;  }, [customUnit]);
  const [measureStart, setMeasureStart] = useState<{ x: number; y: number } | null>(null);
  const [measurePreview, setMeasurePreview] = useState<{ x: number; y: number } | null>(null);

  const [photoModal, setPhotoModal] = useState<AnnotationData | null>(null);
  const [photoUploading, setPhotoUploading] = useState(false);

  // Bluebeam-style: fill, hatch, callout, polygon, inline text input
  const [isFilled,     setIsFilled]     = useState(false);
  const [shapeOpacity, setShapeOpacity] = useState(0.4);  // fill opacity 0–1
  const [hatch,        setHatch]        = useState<"none"|"solid"|"h"|"v"|"d45"|"cross"|"xcross">("none");
  const [calloutStart, setCalloutStart] = useState<{ x: number; y: number } | null>(null);
  const [polygonPts,   setPolygonPts]   = useState<{ x: number; y: number }[]>([]); // normalized
  const [polyPreview,  setPolyPreview]  = useState<{ x: number; y: number } | null>(null); // canvas px
  const [textInput,    setTextInput]    = useState<TextInputState | null>(null);
  const [textValue,    setTextValue]    = useState("");
  // Text formatting
  const [fontSize,     setFontSize]     = useState(14);
  const [fontBold,     setFontBold]     = useState(false);
  const [fontItalic,   setFontItalic]   = useState(false);
  const [fontFamily,   setFontFamily]   = useState("sans-serif");

  // ── Selection / drag state ────────────────────────────────────────────────
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [pointerCursor, setPointerCursor] = useState<string>("default");

  const [annotations, setAnnotations] = useState<AnnotationData[]>(
    drawing.annotations
      .map((a) => { try { return JSON.parse(a.data as string) as AnnotationData; } catch { return null; } })
      .filter(Boolean) as AnnotationData[]
  );
  const [undoStack, setUndoStack] = useState<AnnotationData[][]>([]);
  const [showAnnPanel,  setShowAnnPanel]  = useState(false);
  const [showExport,    setShowExport]    = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  // Auto-save status: idle → pending (debounce) → saving → saved → idle
  const [saveStatus, setSaveStatus]   = useState<"idle"|"pending"|"saving"|"saved">("idle");
  const autoSaveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSavingRef2   = useRef(false); // prevent concurrent saves
  const isInitialLoad  = useRef(true);  // skip first render

  // Mutable refs for event-listener closures
  const scaleRef       = useRef(scale);
  const annRef         = useRef(annotations);
  const curPageRef     = useRef(curPage);
  const toolRef        = useRef(tool);
  useEffect(() => { scaleRef.current   = scale;       }, [scale]);
  useEffect(() => { annRef.current     = annotations; }, [annotations]);
  useEffect(() => { curPageRef.current = curPage;     }, [curPage]);
  useEffect(() => { toolRef.current    = tool;        }, [tool]);

  // Refs for new Bluebeam features (used in callbacks/redrawMarkup)
  const colorRef        = useRef(color);
  const strokeWRef      = useRef(strokeW);
  const isFilledRef     = useRef(isFilled);
  const shapeOpacityRef = useRef(shapeOpacity);
  const hatchRef        = useRef(hatch);
  const calloutStartRef = useRef<{ x: number; y: number } | null>(null);
  const polygonPtsRef   = useRef<{ x: number; y: number }[]>([]); // mutable, updated synchronously
  const polyPreviewRef  = useRef<{ x: number; y: number } | null>(null);
  const textAreaRef2    = useRef<HTMLTextAreaElement>(null);
  const editingIndexRef  = useRef<number | undefined>(undefined);
  // Drag/select refs (all mutable — no React re-renders during drag)
  const selectedIdxRef   = useRef<number | null>(null);
  const isDragging2Ref   = useRef(false);
  const dragStartRef2    = useRef<{ x: number; y: number } | null>(null); // canvas px
  const dragDeltaRef     = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 }); // normalized
  const dragSnapshotRef  = useRef<AnnotationData | null>(null);
  const hasDraggedRef    = useRef(false);
  const dragHandleRef    = useRef<HandleInfo | null>(null); // null = move, set = resize/vertex
  // Multi-select lasso refs
  const selectedSetRef   = useRef<Set<number>>(new Set());
  const groupSnapshotRef = useRef<AnnotationData[]>([]);
  const isLassoRef       = useRef(false);
  const lassoStartRef    = useRef<{ x: number; y: number } | null>(null);
  const lassoCurrentRef  = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => { colorRef.current       = color;       }, [color]);
  useEffect(() => { strokeWRef.current     = strokeW;     }, [strokeW]);
  useEffect(() => { isFilledRef.current    = isFilled;      }, [isFilled]);
  useEffect(() => { shapeOpacityRef.current = shapeOpacity; }, [shapeOpacity]);
  useEffect(() => { hatchRef.current       = hatch;         }, [hatch]);
  useEffect(() => { calloutStartRef.current = calloutStart; }, [calloutStart]);
  useEffect(() => { polyPreviewRef.current = polyPreview; }, [polyPreview]);

  // Drawing state
  const isDrawingRef = useRef(false);
  const drawStartRef = useRef({ x: 0, y: 0 });
  const penPtsRef    = useRef<{ x: number; y: number }[]>([]);

  // Pan state
  const isPanningRef = useRef(false);
  const panStartRef  = useRef({ mx: 0, my: 0, sl: 0, st: 0 });

  // ─── Load PDF ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!fileUrl) return;
    renderTaskRef.current?.cancel();
    renderTaskRef.current = null;
    setIsLoading(true);
    setLoadError(null);
    setPdfDoc(null);
    pdfjsLib
      .getDocument({ url: fileUrl, cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@latest/cmaps/", cMapPacked: true })
      .promise
      .then((doc) => { setPdfDoc(doc); setTotalPages(doc.numPages); setIsLoading(false); })
      .catch((e)  => { setLoadError(e.message); setIsLoading(false); });
  }, [fileUrl]);

  // ─── Auto-fit ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!pdfDoc || !containerRef.current) return;
    pdfDoc.getPage(curPage).then((pg) => {
      const vp = pg.getViewport({ scale: 1 });
      const el = containerRef.current!;
      const fs = Math.min((el.clientWidth - 80) / vp.width, (el.clientHeight - 80) / vp.height) * 0.95;
      setFitScale(fs);
      setScale(fs);
    });
  }, [pdfDoc]);

  // ─── Render page ───────────────────────────────────────────────────────────
  const renderPage = useCallback(async (pageNum: number, sc: number) => {
    if (!pdfDoc || !pdfCanvasRef.current || !mkCanvasRef.current) return;
    renderTaskRef.current?.cancel();
    renderTaskRef.current = null;

    const page = await pdfDoc.getPage(pageNum);
    const vp = page.getViewport({ scale: sc });
    const pdfC = pdfCanvasRef.current, mkC = mkCanvasRef.current;
    pdfC.width = mkC.width = Math.round(vp.width);
    pdfC.height = mkC.height = Math.round(vp.height);
    pdfC.style.width = mkC.style.width = `${vp.width}px`;
    pdfC.style.height = mkC.style.height = `${vp.height}px`;
    const ctx = pdfC.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, pdfC.width, pdfC.height);

    try {
      const task = page.render({ canvasContext: ctx, viewport: vp });
      renderTaskRef.current = task;
      await task.promise;
      renderTaskRef.current = null;
      redrawMarkup(sc);
    } catch (e: unknown) {
      if ((e as { name?: string })?.name === "RenderingCancelledException") return;
      console.error("PDF render error:", e);
    }
  }, [pdfDoc]);

  useEffect(() => { renderPage(curPage, scale); }, [curPage, scale, pdfDoc]);

  // ─── Redraw markup ─────────────────────────────────────────────────────────
  const redrawMarkup = useCallback((sc: number) => {
    const mkC = mkCanvasRef.current;
    if (!mkC) return;
    const ctx = mkC.getContext("2d")!;
    ctx.clearRect(0, 0, mkC.width, mkC.height);
    const selIdx   = selectedIdxRef.current;
    const delta    = dragDeltaRef.current;
    const dragging = isDragging2Ref.current && hasDraggedRef.current;

    for (let _i = 0; _i < annRef.current.length; _i++) {
      const ann = annRef.current[_i];
      if (ann.pageNumber !== curPageRef.current) continue;
      if (editingIndexRef.current === _i) continue; // hide while being edited

      // If this annotation is being dragged, draw it at its live position
      const displayAnn = (dragging && selIdx === _i && dragSnapshotRef.current)
        ? dragHandleRef.current
          ? applyHandleDrag(dragSnapshotRef.current, dragHandleRef.current, delta.dx, delta.dy)
          : moveAnnotation(dragSnapshotRef.current, delta.dx, delta.dy)
        : ann;

      if (displayAnn.type === "measurement" && displayAnn.points?.length === 2) {
        if (displayAnn.labelLocked) {
          // User manually set label — draw as-is, no recompute
          drawAnnotation(ctx, displayAnn, sc);
        } else {
          const [p1, p2] = displayAnn.points;
          const normDist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
          // Per-measurement unit takes priority; fall back to global
          const unit = (displayAnn.measureUnit ?? displayUnitRef.current) as DisplayUnit;
          const label = isCustomRef.current
            ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}`
            : formatDist(normDist, activePresetRef.current, unit);
          drawAnnotation(ctx, { ...displayAnn, text: label }, sc);
        }
      } else {
        drawAnnotation(ctx, displayAnn, sc);
      }
    }

    // Draw multi-selection boxes
    selectedSetRef.current.forEach((i) => {
      if (i === selIdx) return; // will be drawn below with full handles
      const a = annRef.current[i];
      if (a && a.pageNumber === curPageRef.current) {
        ctx.save();
        ctx.strokeStyle = "#3B82F6"; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
        drawSelectionBox(ctx, a, sc);
        ctx.restore();
      }
    });

    // Draw lasso rect
    if (isLassoRef.current && lassoStartRef.current && lassoCurrentRef.current) {
      const ls = lassoStartRef.current, lc = lassoCurrentRef.current;
      ctx.save();
      ctx.strokeStyle = "#3B82F6"; ctx.lineWidth = 1; ctx.setLineDash([5, 3]);
      ctx.fillStyle = "rgba(59,130,246,0.08)";
      const lx = Math.min(ls.x, lc.x), ly = Math.min(ls.y, lc.y);
      const lw = Math.abs(lc.x - ls.x), lh = Math.abs(lc.y - ls.y);
      ctx.fillRect(lx, ly, lw, lh);
      ctx.strokeRect(lx, ly, lw, lh);
      ctx.restore();
    }

    // Draw selection box over the selected annotation
    if (selIdx !== null && selIdx < annRef.current.length &&
        annRef.current[selIdx].pageNumber === curPageRef.current) {
      const selAnn = (dragging && dragSnapshotRef.current)
        ? dragHandleRef.current
          ? applyHandleDrag(dragSnapshotRef.current, dragHandleRef.current, delta.dx, delta.dy)
          : moveAnnotation(dragSnapshotRef.current, delta.dx, delta.dy)
        : annRef.current[selIdx];
      drawSelectionBox(ctx, selAnn, sc);
    }
    // Draw first-click indicator (before cursor moves)
    const ms = measureStartRef.current;
    const mp = measurePreviewRef.current;
    if (ms && !mp && toolRef.current === "measurement") {
      ctx.save();
      ctx.fillStyle   = measureColorRef.current;
      ctx.strokeStyle = measureColorRef.current;
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(ms.x * sc, ms.y * sc, 5, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.35;
      ctx.lineWidth   = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.arc(ms.x * sc, ms.y * sc, 13, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    }
    // Draw measurement preview (with real-world label + ortho indicator)
    if (ms && mp && toolRef.current === "measurement") {
      const sx = ms.x * sc, sy = ms.y * sc;
      const ex = mp.x,      ey = mp.y;
      const normDist = Math.sqrt((ex/sc - ms.x) ** 2 + (ey/sc - ms.y) ** 2);
      const realLabel = isCustomRef.current
        ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}`
        : formatDist(normDist, activePresetRef.current, displayUnitRef.current);
      // isOrtho = !shift (ortho is now DEFAULT; shift = free)
      drawMeasurementPreview(ctx, sx, sy, ex, ey, measureColorRef.current, realLabel, !isShiftDownRef.current);
    }

    // Draw polygon-in-progress preview
    const ppPts   = polygonPtsRef.current;
    const ppCur   = polyPreviewRef.current;
    if (ppPts.length > 0 && ppCur && toolRef.current === "polygon") {
      const col = colorRef.current;
      const lw  = strokeWRef.current;
      ctx.save();
      ctx.strokeStyle = col; ctx.fillStyle = col;
      ctx.lineWidth   = lw; ctx.lineCap = "round"; ctx.lineJoin = "round";
      const cPts = ppPts.map((p) => ({ x: p.x * sc, y: p.y * sc }));
      // Solid lines between placed points
      ctx.setLineDash([]); ctx.globalAlpha = 0.85;
      ctx.beginPath(); ctx.moveTo(cPts[0].x, cPts[0].y);
      for (let i = 1; i < cPts.length; i++) ctx.lineTo(cPts[i].x, cPts[i].y);
      ctx.lineTo(ppCur.x, ppCur.y);
      ctx.stroke();
      // Faint closing preview line
      if (cPts.length >= 2) {
        ctx.setLineDash([5, 8]); ctx.globalAlpha = 0.3;
        ctx.beginPath(); ctx.moveTo(ppCur.x, ppCur.y); ctx.lineTo(cPts[0].x, cPts[0].y); ctx.stroke();
        ctx.setLineDash([]);
      }
      // Dots at placed points
      ctx.globalAlpha = 1;
      for (const pt of cPts) {
        ctx.beginPath(); ctx.arc(pt.x, pt.y, Math.max(3, lw + 1), 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }

    // Draw callout-in-progress preview (leader line from tip to cursor)
    const cs  = calloutStartRef.current;
    const cCur = polyPreviewRef.current;
    if (cs && cCur && toolRef.current === "callout") {
      ctx.save();
      ctx.strokeStyle = colorRef.current; ctx.fillStyle = colorRef.current;
      ctx.lineWidth   = strokeWRef.current;
      ctx.setLineDash([4, 4]); ctx.globalAlpha = 0.75;
      ctx.beginPath(); ctx.moveTo(cs.x * sc, cs.y * sc); ctx.lineTo(cCur.x, cCur.y); ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(cs.x * sc, cs.y * sc, 5, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }
  }, []);

  // Keep measurement refs in sync with state/tool
  const measureStartRef   = useRef<{ x: number; y: number } | null>(null);
  const measurePreviewRef = useRef<{ x: number; y: number } | null>(null);
  const measureColorRef   = useRef(color);
  useEffect(() => { measureStartRef.current = measureStart; }, [measureStart]);
  useEffect(() => { measureColorRef.current = color; }, [color]);

  useEffect(() => { redrawMarkup(scale); }, [annotations, curPage, scale]);

  // Redraw when preview changes (measurement live line, polygon preview, callout preview)
  useEffect(() => {
    measurePreviewRef.current = measurePreview;
    redrawMarkup(scale);
  }, [measurePreview, scale]);

  useEffect(() => {
    polyPreviewRef.current = polyPreview;
    redrawMarkup(scale);
  }, [polyPreview, scale]);

  useEffect(() => { redrawMarkup(scale); }, [polygonPts, scale]);

  // Focus inline text input when it appears
  useEffect(() => {
    if (textInput) setTimeout(() => textAreaRef2.current?.focus(), 0);
  }, [textInput]);

  // ─── Mouse wheel zoom — smooth, no React re-render during gesture ─────────
  //
  // Strategy:
  //   1. Each wheel tick: instantly stretch canvas pixels + redraw markup (sub-ms).
  //      No React state update → no React re-render → no PDF.js decode → smooth.
  //   2. After user stops scrolling (250 ms idle): fire setScale() ONCE to trigger
  //      a full PDF re-render at the new scale (crisp quality restored).
  //
  // The PDF canvas is "blurry-stretched" during the gesture; annotations stay
  // sharp because redrawMarkup() is a Canvas 2D draw call (no decode needed).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Single reusable temp canvas — allocated once, reused across wheel ticks.
    const tmpCanvas = document.createElement("canvas");
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const handler = (e: WheelEvent) => {
      e.preventDefault();

      const oldSc = scaleRef.current;
      const newSc = Math.max(
        ZOOM_MIN,
        Math.min(ZOOM_MAX, e.deltaY < 0 ? oldSc * ZOOM_FACTOR : oldSc / ZOOM_FACTOR)
      );
      if (Math.abs(newSc - oldSc) < 0.001) return;

      const ratio = newSc / oldSc;
      const rect  = el.getBoundingClientRect();
      const cx    = e.clientX - rect.left;
      const cy    = e.clientY - rect.top;
      const px    = el.scrollLeft + cx;
      const py    = el.scrollTop + cy;

      const pdfC = pdfCanvasRef.current;
      const mkC  = mkCanvasRef.current;

      if (pdfC && mkC && pdfC.width > 0 && pdfC.height > 0) {
        const newW = Math.round(pdfC.width  * ratio);
        const newH = Math.round(pdfC.height * ratio);

        // ── Fast-scale the PDF canvas using a temp canvas ──────────────────
        // Resize temp canvas to current PDF canvas size (only when needed)
        if (tmpCanvas.width !== pdfC.width || tmpCanvas.height !== pdfC.height) {
          tmpCanvas.width  = pdfC.width;
          tmpCanvas.height = pdfC.height;
        }
        const tmpCtx = tmpCanvas.getContext("2d")!;
        tmpCtx.drawImage(pdfC, 0, 0);            // copy current pixels
        pdfC.width  = newW; pdfC.height = newH;  // resize (clears canvas)
        pdfC.style.width  = `${newW}px`;
        pdfC.style.height = `${newH}px`;
        const pdfCtx = pdfC.getContext("2d")!;
        pdfCtx.imageSmoothingEnabled  = true;
        pdfCtx.imageSmoothingQuality  = "high";
        pdfCtx.drawImage(tmpCanvas, 0, 0, newW, newH); // draw scaled back

        // ── Resize markup canvas + immediately redraw annotations sharply ──
        mkC.width  = newW; mkC.height = newH;
        mkC.style.width  = `${newW}px`;
        mkC.style.height = `${newH}px`;
      }

      // Update scale ref (no React re-render yet)
      scaleRef.current = newSc;

      // Annotations are redrawn at new scale (Canvas 2D, very fast)
      redrawMarkup(newSc);

      // Correct scroll so the point under the cursor stays fixed
      el.scrollLeft = px * ratio - cx;
      el.scrollTop  = py * ratio - cy;

      // ── Debounce: trigger full PDF re-render 250 ms after last wheel tick ──
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        debounceTimer = null;
        setScale(scaleRef.current); // → useEffect → renderPage → crisp PDF
      }, 250);
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => {
      el.removeEventListener("wheel", handler);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []); // deps empty — handler reads only refs + stable callbacks

  // ─── Canvas helpers ────────────────────────────────────────────────────────
  const getPos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = mkCanvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };
  const N  = (v: number) => v / scale;
  const Np = (p: { x: number; y: number }) => ({ x: N(p.x), y: N(p.y) });

  // ─── Pan ───────────────────────────────────────────────────────────────────
  const startPan = (e: React.MouseEvent) => {
    isPanningRef.current = true;
    panStartRef.current = { mx: e.clientX, my: e.clientY, sl: containerRef.current?.scrollLeft ?? 0, st: containerRef.current?.scrollTop ?? 0 };
  };
  const movePan = (e: React.MouseEvent) => {
    if (!isPanningRef.current || !containerRef.current) return;
    containerRef.current.scrollLeft = panStartRef.current.sl - (e.clientX - panStartRef.current.mx);
    containerRef.current.scrollTop  = panStartRef.current.st - (e.clientY - panStartRef.current.my);
  };
  const endPan = () => { isPanningRef.current = false; };

  // ─── Pointer mode: check photo pin click ───────────────────────────────────
  // The pin is drawn with tip at (x, y) and camera-circle at (x, y - PIN_R).
  // We test against the circle center so clicks on the icon always register.
  const checkPhotoPinClick = (pos: { x: number; y: number }) => {
    const PIN_R = 14; // must match drawPhotoPin
    for (const ann of annotations) {
      if (ann.type === "photo" && ann.x != null && ann.pageNumber === curPage) {
        const cx = ann.x * scale;
        const cy = ann.y! * scale - PIN_R; // circle centre
        if (Math.sqrt((pos.x - cx) ** 2 + (pos.y - cy) ** 2) < PIN_R + 8) {
          setPhotoModal(ann);
          return true;
        }
      }
    }
    return false;
  };

  // ─── Mouse events ──────────────────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pointer") {
      const pos = getPos(e);
      // 1. Check handles of currently selected annotation (highest priority)
      if (selectedIdxRef.current !== null) {
        const selAnn = annotations[selectedIdxRef.current];
        if (selAnn?.pageNumber === curPage) {
          const handles = getAnnotationHandles(selAnn, scale);
          const hitHandle = hitTestHandle(pos, handles);
          if (hitHandle) {
            // Start handle drag (resize / vertex move)
            isDragging2Ref.current  = true;
            dragHandleRef.current   = hitHandle;
            dragStartRef2.current   = pos;
            dragDeltaRef.current    = { dx: 0, dy: 0 };
            dragSnapshotRef.current = { ...selAnn };
            hasDraggedRef.current   = false;
            setPointerCursor(hitHandle.cursor);
            return;
          }
        }
      }

      // 2. Photo pins
      if (checkPhotoPinClick(pos)) return;

      // 3. Hit-test annotations back-to-front
      let hitIdx: number | null = null;
      for (let i = annotations.length - 1; i >= 0; i--) {
        const ann = annotations[i];
        if (ann.pageNumber !== curPage) continue;
        if (ann.type === "photo") continue;
        if (hitTestAnnotation(pos, ann, scale)) { hitIdx = i; break; }
      }

      if (hitIdx !== null) {
        // If clicked annotation is in the multi-select group → group drag
        if (selectedSetRef.current.size > 1 && selectedSetRef.current.has(hitIdx)) {
          isDragging2Ref.current  = true;
          dragHandleRef.current   = null;
          dragStartRef2.current   = pos;
          dragDeltaRef.current    = { dx: 0, dy: 0 };
          hasDraggedRef.current   = false;
          groupSnapshotRef.current = [...selectedSetRef.current].map((i) => ({ ...annotations[i] }));
          setPointerCursor("move");
        } else {
          // Single annotation select + drag
          selectedSetRef.current  = new Set([hitIdx]);
          selectedIdxRef.current  = hitIdx;
          setSelectedIndex(hitIdx);
          isDragging2Ref.current  = true;
          dragHandleRef.current   = null;
          dragStartRef2.current   = pos;
          dragDeltaRef.current    = { dx: 0, dy: 0 };
          dragSnapshotRef.current = { ...annotations[hitIdx] };
          groupSnapshotRef.current = [];
          hasDraggedRef.current   = false;
          setPointerCursor("move");
        }
      } else {
        // Start lasso selection on empty space
        selectedIdxRef.current = null;
        setSelectedIndex(null);
        selectedSetRef.current = new Set();
        isLassoRef.current     = true;
        lassoStartRef.current  = pos;
        lassoCurrentRef.current = pos;
        isDragging2Ref.current = false;
        dragHandleRef.current  = null;
        redrawMarkup(scale);
      }
      return;
    }
    if (tool === "pan")     { startPan(e); return; }
    if (tool === "photo")   { handlePhotoPin(getPos(e)); return; }
    if (tool === "measurement") { handleMeasureClick(getPos(e)); return; }
    if (tool === "callout") { handleCalloutClick(getPos(e)); return; }
    if (tool === "polygon") { handlePolygonClick(getPos(e)); return; }
    if (tool === "text")    { handleTextClick(getPos(e)); return; } // single-click

    e.preventDefault();
    isDrawingRef.current = true;
    const pos = getPos(e);
    drawStartRef.current = pos;
    if (tool === "pen" || tool === "highlight") penPtsRef.current = [pos];
  };

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pan") { movePan(e); return; }

    if (tool === "pointer") {
      const pos = getPos(e);

      // ── Lasso: update selection rect ──
      if (isLassoRef.current && lassoStartRef.current) {
        lassoCurrentRef.current = pos;
        redrawMarkup(scaleRef.current);
        return;
      }

      // ── Drag: move annotation(s) in real time ──
      if (isDragging2Ref.current && dragStartRef2.current !== null) {
        let dx = (pos.x - dragStartRef2.current.x) / scaleRef.current;
        let dy = (pos.y - dragStartRef2.current.y) / scaleRef.current;
        // Without Shift: constrain to dominant axis (H or V)
        if (!isShiftDownRef.current && Math.hypot(dx, dy) * scaleRef.current > 3) {
          if (Math.abs(dx) >= Math.abs(dy)) dy = 0; else dx = 0;
        }
        dragDeltaRef.current  = { dx, dy };
        hasDraggedRef.current = Math.hypot(dx, dy) * scaleRef.current > 3;
        redrawMarkup(scaleRef.current);
        if (hasDraggedRef.current) setPointerCursor("grabbing");
        return;
      }

      // ── Hover: update cursor ──
      // 1. Check handles of selected annotation
      if (selectedIdxRef.current !== null) {
        const selAnn = annotations[selectedIdxRef.current];
        if (selAnn?.pageNumber === curPage) {
          const hh = hitTestHandle(pos, getAnnotationHandles(selAnn, scale));
          if (hh) { setPointerCursor(hh.cursor); setNearPhotoPin(false); return; }
        }
      }
      // 2. Photo pins / annotations
      const PIN_R = 14;
      let nearPhoto = false, nearAnn = false;
      for (const ann of annotations) {
        if (ann.pageNumber !== curPage) continue;
        if (ann.type === "photo" && ann.x != null) {
          const cx = ann.x * scale, cy = ann.y! * scale - PIN_R;
          if (Math.hypot(pos.x - cx, pos.y - cy) < PIN_R + 8) { nearPhoto = true; break; }
        } else if (!nearAnn && hitTestAnnotation(pos, ann, scale)) {
          nearAnn = true;
        }
      }
      setNearPhotoPin(nearPhoto);
      setPointerCursor(nearPhoto ? "pointer" : nearAnn ? "move" : "default");
      return;
    }

    // Polygon / callout cursor preview (updates ref + triggers redraw via setPolyPreview)
    if (tool === "polygon" || tool === "callout") {
      setPolyPreview(getPos(e));
      return;
    }

    // Measurement live preview with ortho constraint
    if (tool === "measurement") {
      const rawPos = getPos(e);
      const ms = measureStartRef.current;
      if (ms) {
        // Default = orthogonal (H/V). Shift = free angle (any direction).
        const startCanvas = { x: ms.x * scale, y: ms.y * scale };
        const constrained = isShiftDownRef.current
          ? rawPos                                    // Shift = tự do góc
          : constrainOrtho(startCanvas, rawPos, 90); // mặc định = ngang/dọc

        setMeasurePreview(constrained);

        // Live measurement display in toolbar
        const normDist = Math.sqrt((constrained.x/scale - ms.x)**2 + (constrained.y/scale - ms.y)**2);
        const realLabel = isCustomRef.current
          ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}`
          : formatDist(normDist, activePresetRef.current, displayUnitRef.current);
        const angleDeg = Math.atan2(constrained.y - startCanvas.y, constrained.x - startCanvas.x) * 180 / Math.PI;
        setLiveMeasure({ label: realLabel, angle: +((angleDeg + 360) % 360).toFixed(1) });
      }
      return;
    }

    if (!isDrawingRef.current || tool === "photo") return;

    const pos = getPos(e);
    const s   = drawStartRef.current;
    const mkC = mkCanvasRef.current!;
    const ctx = mkC.getContext("2d")!;

    ctx.clearRect(0, 0, mkC.width, mkC.height);
    for (const ann of annotations) {
      if (ann.pageNumber === curPage) drawAnnotation(ctx, ann, scale);
    }

    if (tool === "pen") {
      penPtsRef.current.push(pos);
      ctx.beginPath(); ctx.strokeStyle = color; ctx.lineWidth = strokeW;
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      const pts = penPtsRef.current;
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();
    } else if (tool === "highlight") {
      penPtsRef.current.push(pos);
      ctx.globalAlpha = 0.35; ctx.strokeStyle = color;
      ctx.lineWidth = 20; ctx.lineCap = "round";
      ctx.beginPath();
      const pts = penPtsRef.current;
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.stroke();
      ctx.globalAlpha = 1;
    } else {
      previewShape(ctx, tool, color, strokeW, s, pos, isFilled, shapeOpacity, hatch);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pan") { endPan(); return; }

    // ── Pointer mode: commit drag ──────────────────────────────────────────
    if (tool === "pointer") {
      // ── Lasso complete: select annotations inside rect ──
      if (isLassoRef.current && lassoStartRef.current && lassoCurrentRef.current) {
        const ls = lassoStartRef.current, lc = lassoCurrentRef.current;
        const rx1 = Math.min(ls.x, lc.x) / scaleRef.current;
        const ry1 = Math.min(ls.y, lc.y) / scaleRef.current;
        const rx2 = Math.max(ls.x, lc.x) / scaleRef.current;
        const ry2 = Math.max(ls.y, lc.y) / scaleRef.current;
        const newSet = new Set<number>();
        annRef.current.forEach((ann, i) => {
          if (ann.pageNumber !== curPageRef.current || ann.type === "photo") return;
          // Use bounding box center to test containment
          const bbox = getAnnotationBBox(ann, 1);
          if (bbox) {
            const cx = bbox.x + bbox.w / 2, cy = bbox.y + bbox.h / 2;
            if (cx >= rx1 && cx <= rx2 && cy >= ry1 && cy <= ry2) newSet.add(i);
          }
        });
        selectedSetRef.current = newSet;
        if (newSet.size === 1) {
          const idx = [...newSet][0];
          selectedIdxRef.current = idx;
          setSelectedIndex(idx);
        } else {
          selectedIdxRef.current = null;
          setSelectedIndex(null);
        }
        isLassoRef.current      = false;
        lassoStartRef.current   = null;
        lassoCurrentRef.current = null;
        redrawMarkup(scaleRef.current);
        return;
      }

      // ── Drag complete ──
      if (isDragging2Ref.current) {
        const { dx, dy } = dragDeltaRef.current;
        if (hasDraggedRef.current && (dx !== 0 || dy !== 0)) {
          // Group move (multi-select)
          if (selectedSetRef.current.size > 1 && groupSnapshotRef.current.length > 0) {
            const indices = [...selectedSetRef.current];
            setUndoStack((p) => [...p, annotations]);
            setAnnotations((prev) => {
              const next = [...prev];
              indices.forEach((i, j) => {
                next[i] = moveAnnotation(groupSnapshotRef.current[j], dx, dy);
              });
              return next;
            });
          } else if (selectedIdxRef.current !== null) {
            // Single annotation move/resize
            const idx  = selectedIdxRef.current;
            const snap = dragSnapshotRef.current!;
            const handle = dragHandleRef.current;
            const newAnn = handle
              ? applyHandleDrag(snap, handle, dx, dy)
              : moveAnnotation(snap, dx, dy);
            setUndoStack((p) => [...p, annotations]);
            setAnnotations((prev) => prev.map((a, i) => (i === idx ? newAnn : a)));
          }
        }
        isDragging2Ref.current  = false;
        dragStartRef2.current   = null;
        dragSnapshotRef.current = null;
        dragHandleRef.current   = null;
        dragDeltaRef.current    = { dx: 0, dy: 0 };
        hasDraggedRef.current   = false;
        groupSnapshotRef.current = [];
        setPointerCursor("default");
      }
      return;
    }

    if (!isDrawingRef.current || tool === "photo") return;
    isDrawingRef.current = false;

    const pos = getPos(e);
    const s   = drawStartRef.current;
    const base = { pageNumber: curPage, color, strokeWidth: strokeW };
    let ann: AnnotationData | null = null;

    if (tool === "pen") {
      const pts = [...penPtsRef.current, pos];
      if (pts.length < 2) return;
      ann = { ...base, type: "pen", points: pts.map(Np) };
    } else if (tool === "highlight") {
      const pts = [...penPtsRef.current, pos];
      if (pts.length < 2) return;
      ann = { ...base, type: "highlight", points: pts.map(Np) };
    } else if (tool === "line") {
      ann = { ...base, type: "line", points: [Np(s), Np(pos)] };
    } else if (tool === "arrow") {
      ann = { ...base, type: "arrow", points: [Np(s), Np(pos)] };
    } else if (tool === "rect") {
      const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
      if (w < 4 || h < 4) return;
      ann = { ...base, type: "rect", x: N(Math.min(s.x, pos.x)), y: N(Math.min(s.y, pos.y)), width: N(w), height: N(h), filled: isFilled, fillOpacity: shapeOpacity, hatch: hatch !== "none" ? hatch : undefined };
    } else if (tool === "circle") {
      const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
      if (w < 4 || h < 4) return;
      ann = { ...base, type: "circle", x: N((s.x + pos.x) / 2), y: N((s.y + pos.y) / 2), width: N(w), height: N(h), filled: isFilled, fillOpacity: shapeOpacity, hatch: hatch !== "none" ? hatch : undefined };
    } else if (tool === "cloud") {
      const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
      if (w < 8 || h < 8) return;
      ann = { ...base, type: "cloud", x: N(Math.min(s.x, pos.x)), y: N(Math.min(s.y, pos.y)), width: N(w), height: N(h), filled: isFilled, fillOpacity: shapeOpacity };
    } else if (tool.startsWith("stamp-")) {
      const stampType = tool.replace("stamp-", "") as "approved" | "rejected" | "review";
      ann = { ...base, type: "stamp", stampType, x: N(s.x), y: N(s.y), width: N(100), height: N(32) };
    }

    if (ann) {
      setUndoStack((p) => [...p, annotations]);
      setAnnotations((p) => [...p, ann!]);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (tool === "pan") { endPan(); return; }
    if (tool === "pointer") {
      if (isDragging2Ref.current) onMouseUp(e); // commit any drag in progress
      setPointerCursor("default");
      return;
    }
    if (isDrawingRef.current) onMouseUp(e);
    if (tool === "measurement") setMeasurePreview(null);
    if (tool === "polygon" || tool === "callout") setPolyPreview(null);
  };

  const onDblClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const pos = getPos(e);

    // Close polygon (remove extra point added by the double-click's first mousedown)
    if (tool === "polygon") {
      const pts = polygonPtsRef.current;
      if (pts.length >= 3) {
        const finalPts = pts.slice(0, -1); // remove last (duplicate from dbl-click mousedown)
        const toUse = finalPts.length >= 3 ? finalPts : pts;
        const ann: AnnotationData = {
          type: "polygon", pageNumber: curPage,
          color, strokeWidth: strokeW,
          points: toUse,
          filled: isFilled, fillOpacity: shapeOpacity, hatch: hatch !== "none" ? hatch : undefined,
        };
        setUndoStack((p) => [...p, annotations]);
        setAnnotations((p) => [...p, ann]);
        polygonPtsRef.current = [];
        setPolygonPts([]);
        setPolyPreview(null);
      }
      return;
    }

    // Pointer mode: double-click on text or callout to edit
    if (tool === "pointer") {
      // Text annotation
      const textIdx = findTextAnn(pos);
      if (textIdx !== null) {
        const ann = annotations[textIdx];
        const rect = mkCanvasRef.current!.getBoundingClientRect();
        const vx = Math.min(rect.left + ann.x! * scale + 4, window.innerWidth - 220);
        const vy = Math.min(rect.top  + ann.y! * scale + 4, window.innerHeight - 140);
        openTextEditor(vx, vy, ann.x!, ann.y!, ann.pageNumber, {
          editIndex: textIdx, prefill: ann.text ?? "", ann,
        });
        return;
      }
      // Measurement annotation — manually edit the label
      for (let i = annotations.length - 1; i >= 0; i--) {
        const ann = annotations[i];
        if (ann.type !== "measurement" || ann.pageNumber !== curPage || !ann.points) continue;
        if (hitTestAnnotation(pos, ann, scale)) {
          selectedIdxRef.current = i; setSelectedIndex(i);
          const mx = (ann.points[0].x + ann.points[1].x) / 2 * scale;
          const my = (ann.points[0].y + ann.points[1].y) / 2 * scale;
          const rect = mkCanvasRef.current!.getBoundingClientRect();
          const vx = Math.min(rect.left + mx + 4, window.innerWidth - 240);
          const vy = Math.min(rect.top  + my - 40, window.innerHeight - 140);
          openTextEditor(vx, vy, (ann.points[0].x + ann.points[1].x) / 2, my / scale, ann.pageNumber, {
            editIndex: i, prefill: ann.text ?? "", ann,
          });
          return;
        }
      }

      // Callout annotation — re-edit the label text
      for (let i = annotations.length - 1; i >= 0; i--) {
        const ann = annotations[i];
        if (ann.type !== "callout" || ann.pageNumber !== curPage || !ann.points) continue;
        const anchor = ann.points[1];
        const fs = (ann.fontSize ?? 14) * scale;
        const tw = (ann.text?.length ?? 0) * fs * 0.58 + 12;
        const ax = anchor.x * scale, ay = anchor.y * scale;
        if (pos.x >= ax - 6 && pos.x <= ax + tw + 6 && pos.y >= ay - fs - 6 && pos.y <= ay + fs + 6) {
          const rect = mkCanvasRef.current!.getBoundingClientRect();
          const vx = Math.min(rect.left + ax + 4, window.innerWidth - 220);
          const vy = Math.min(rect.top  + ay - fs - 4, window.innerHeight - 140);
          openTextEditor(vx, vy, anchor.x, anchor.y, ann.pageNumber, {
            editIndex: i, prefill: ann.text ?? "",
            ann: { ...ann, calloutTip: undefined } as AnnotationData,
          });
          return;
        }
      }
      return;
    }
  };

  // ─── Measurement 2-click flow ──────────────────────────────────────────────
  const handleMeasureClick = (pos: { x: number; y: number }) => {
    if (!measureStart) {
      // First click: set start point (normalized)
      setMeasureStart(Np(pos));
      setLiveMeasure(null);
    } else {
      // Second click: apply ortho constraint if Shift held, then commit
      const start = measureStart;
      const startCanvas = { x: start.x * scale, y: start.y * scale };
      const finalCanvas = isShiftDownRef.current
        ? pos                                       // Shift = tự do góc
        : constrainOrtho(startCanvas, pos, 90);    // mặc định = ngang/dọc
      const end = Np(finalCanvas);

      const dx = end.x - start.x, dy = end.y - start.y;
      const distUnits = Math.sqrt(dx * dx + dy * dy);
      const label = isCustom
        ? `${trimZeros((distUnits * customScale).toFixed(3))} ${customUnit}`
        : formatDist(distUnits, activePreset, displayUnit);

      const ann: AnnotationData = {
        type: "measurement", pageNumber: curPage,
        color, strokeWidth: strokeW,
        points: [start, end],
        text: label,
        // Store the unit used so this measurement stays in its unit even if global changes
        measureUnit: isCustom ? undefined : (displayUnit !== "auto" ? displayUnit : undefined),
      };
      setUndoStack((p) => [...p, annotations]);
      setAnnotations((p) => [...p, ann]);
      setMeasureStart(null);
      setMeasurePreview(null);
      setLiveMeasure(null);
    }
  };

  // ─── Photo pin flow ────────────────────────────────────────────────────────
  const handlePhotoPin = (pos: { x: number; y: number }) => {
    photoPinRef.current = Np(pos);
    photoInputRef.current?.click();
  };

  const handlePhotoFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !photoPinRef.current) return;
    e.target.value = "";

    setPhotoUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", "field-photos");
      const res  = await fetch("/api/upload/local", { method: "POST", body: form });
      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();

      const pin = photoPinRef.current;
      const ann: AnnotationData = {
        type: "photo", pageNumber: curPage,
        color, strokeWidth: strokeW,
        x: pin.x, y: pin.y,
        imageUrl: data.fileUrl,
        text: file.name,
      };

      // Update local state
      const newAnnotations = [...annRef.current, ann];
      setUndoStack((p) => [...p, annRef.current]);
      setAnnotations(newAnnotations);

      // Auto-save immediately so the photo appears in the Photos module
      // without requiring the user to click "Save"
      await fetch(`/api/drawings/${drawing.id}/annotations`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ annotations: newAnnotations, userId: currentUserId }),
      });
    } catch (err) {
      console.error("Photo upload failed:", err);
    } finally {
      setPhotoUploading(false);
    }
  };

  // ─── Find text annotation at canvas position (for double-click edit) ────────
  const findTextAnn = (pos: { x: number; y: number }): number | null => {
    for (let i = annotations.length - 1; i >= 0; i--) {
      const ann = annotations[i];
      if (ann.pageNumber !== curPage) continue;
      if (ann.type === "text" && ann.x != null) {
        const fs  = (ann.fontSize ?? 14) * scale;
        const tx  = ann.x * scale;
        const ty  = ann.y! * scale;
        const approxW = Math.max(60, (ann.text?.length ?? 4) * fs * 0.58);
        if (pos.x >= tx - 4 && pos.x <= tx + approxW + 8 &&
            pos.y >= ty - fs - 4 && pos.y <= ty + fs * 0.35 + 4) return i;
      }
    }
    return null;
  };

  // ─── Open text editor (new or edit) ─────────────────────────────────────────
  const openTextEditor = (
    vx: number, vy: number,
    nx: number, ny: number,
    pageNumber: number,
    opts?: { editIndex?: number; calloutTip?: { x: number; y: number }; prefill?: string; ann?: AnnotationData }
  ) => {
    if (opts?.ann) {
      // Pre-load formatting from the annotation being edited
      setFontSize(opts.ann.fontSize ?? 14);
      setFontBold(opts.ann.fontStyle === "bold" || opts.ann.fontStyle === "bold-italic");
      setFontItalic(opts.ann.fontStyle === "italic" || opts.ann.fontStyle === "bold-italic");
      setFontFamily(opts.ann.fontFamily ?? "sans-serif");
    }
    editingIndexRef.current = opts?.editIndex;
    setTextInput({ vx, vy, nx, ny, pageNumber, editIndex: opts?.editIndex, calloutTip: opts?.calloutTip });
    setTextValue(opts?.prefill ?? "");
    redrawMarkup(scaleRef.current); // hide the annotation being edited
  };

  // ─── Text single-click flow ───────────────────────────────────────────────
  const handleTextClick = (pos: { x: number; y: number }) => {
    const rect = mkCanvasRef.current!.getBoundingClientRect();
    const vx = Math.min(rect.left + pos.x + 4, window.innerWidth - 220);
    const vy = Math.min(rect.top  + pos.y + 4, window.innerHeight - 110);
    openTextEditor(vx, vy, N(pos.x), N(pos.y), curPage);
  };

  // ─── Callout 2-click flow ─────────────────────────────────────────────────
  const handleCalloutClick = (pos: { x: number; y: number }) => {
    if (!calloutStart) {
      const tip = Np(pos);
      calloutStartRef.current = tip;
      setCalloutStart(tip);
    } else {
      // Second click: show inline text input at this position
      const rect = mkCanvasRef.current!.getBoundingClientRect();
      setTextInput({
        vx: rect.left + pos.x, vy: rect.top + pos.y,
        nx: N(pos.x), ny: N(pos.y),
        pageNumber: curPage,
        calloutTip: calloutStart,
      });
      setTextValue("");
      calloutStartRef.current = null;
      setCalloutStart(null);
      setPolyPreview(null);
    }
  };

  // ─── Polygon click ────────────────────────────────────────────────────────
  const handlePolygonClick = (pos: { x: number; y: number }) => {
    const newPt = Np(pos);
    const pts   = polygonPtsRef.current;
    // Skip near-duplicate points (prevents double-click from adding 2 identical points)
    if (pts.length > 0) {
      const last = pts[pts.length - 1];
      if (Math.abs(last.x - newPt.x) < 4 / scaleRef.current && Math.abs(last.y - newPt.y) < 4 / scaleRef.current) return;
    }
    polygonPtsRef.current = [...pts, newPt];
    setPolygonPts([...polygonPtsRef.current]);
    redrawMarkup(scaleRef.current);
  };

  // Keep a ref for the latest textValue so onBlur always reads the newest text
  const textValueRef = useRef("");
  useEffect(() => { textValueRef.current = textValue; }, [textValue]);

  // ─── Commit inline text input ─────────────────────────────────────────────
  const commitTextInput = () => {
    const snap = textInput; // capture before clearing
    if (!snap) return;
    const trimmed = textValueRef.current.trim();

    // Clear editor state first
    editingIndexRef.current = undefined;
    setTextInput(null);
    setTextValue("");

    if (!trimmed) {
      redrawMarkup(scaleRef.current); // restore hidden annotation if cancelled
      return;
    }

    const resolvedStyle: AnnotationData["fontStyle"] =
      fontBold && fontItalic ? "bold-italic" :
      fontBold   ? "bold"   :
      fontItalic ? "italic" : "normal";

    if (snap.editIndex !== undefined) {
      // ── Update existing annotation ──
      setUndoStack((p) => [...p, annotations]);
      setAnnotations((prev) =>
        prev.map((a, i) => {
          if (i !== snap.editIndex) return a;
          // Measurement: only update text + lock it (don't touch font settings)
          if (a.type === "measurement") return { ...a, text: trimmed, labelLocked: true };
          // Text/callout: update text + font
          return { ...a, text: trimmed, fontSize, fontStyle: resolvedStyle, fontFamily };
        })
      );
    } else if (snap.calloutTip) {
      // ── New callout ──
      const ann: AnnotationData = {
        type: "callout", pageNumber: snap.pageNumber,
        color, strokeWidth: strokeW,
        points: [snap.calloutTip, { x: snap.nx, y: snap.ny }],
        text: trimmed, fontSize, fontStyle: resolvedStyle, fontFamily,
      };
      setUndoStack((p) => [...p, annotations]);
      setAnnotations((p) => [...p, ann]);
    } else {
      // ── New text ──
      const ann: AnnotationData = {
        type: "text", pageNumber: snap.pageNumber,
        color, strokeWidth: strokeW,
        x: snap.nx, y: snap.ny,
        text: trimmed, fontSize, fontStyle: resolvedStyle, fontFamily,
      };
      setUndoStack((p) => [...p, annotations]);
      setAnnotations((p) => [...p, ann]);
    }
  };

  // ─── Annotation actions ────────────────────────────────────────────────────
  const undo = () => {
    if (!undoStack.length) return;
    setAnnotations(undoStack[undoStack.length - 1]);
    setUndoStack((s) => s.slice(0, -1));
  };
  // ── Delete selected annotation ───────────────────────────────────────────
  const deleteSelected = () => {
    if (selectedIdxRef.current === null) return;
    const idx = selectedIdxRef.current;
    setUndoStack((p) => [...p, annotations]);
    setAnnotations((p) => p.filter((_, i) => i !== idx));
    selectedIdxRef.current = null;
    setSelectedIndex(null);
  };

  // ── Core save (uses refs for latest data) ─────────────────────────────────
  const performSave = useCallback(async () => {
    if (isSavingRef2.current) return;
    isSavingRef2.current = true;
    setIsSaving(true);
    setSaveStatus("saving");

    const toSave = annRef.current.map((ann) => {
      if (ann.type === "measurement" && ann.points?.length === 2 && !ann.labelLocked) {
        const [p1, p2] = ann.points;
        const normDist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        const unit = (ann.measureUnit ?? displayUnitRef.current) as DisplayUnit;
        const label = isCustomRef.current
          ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}`
          : formatDist(normDist, activePresetRef.current, unit);
        return { ...ann, text: label };
      }
      return ann;
    });

    try {
      await fetch(`/api/drawings/${drawing.id}/annotations`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ annotations: toSave, userId: currentUserId }),
      });
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2500);
    } catch {
      setSaveStatus("idle");
    } finally {
      isSavingRef2.current = false;
      setIsSaving(false);
    }
  }, []);

  // ── Auto-save: debounce 2 s after every annotation change ─────────────────
  useEffect(() => {
    if (isInitialLoad.current) { isInitialLoad.current = false; return; }
    setSaveStatus("pending");
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(performSave, 2000);
    return () => { if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current); };
  }, [annotations]);

  // ── Manual force-save ─────────────────────────────────────────────────────
  const saveAnnotations = async () => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    await performSave();
  };
  const zoomBy = (d: number) => setScale((s) => Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s + d)));

  // ─── Keyboard shortcuts + Shift tracking ─────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Track Shift for ortho (no input-field guard — need it globally)
      if (e.key === "Shift") {
        isShiftDownRef.current = true;
        setIsShiftDown(true);
      }
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "Escape") {
        setMeasureStart(null); setMeasurePreview(null); setLiveMeasure(null);
        calloutStartRef.current = null; setCalloutStart(null);
        polygonPtsRef.current = []; setPolygonPts([]); setPolyPreview(null);
        setTextInput(null);
        // Deselect
        if (selectedIdxRef.current !== null) {
          selectedIdxRef.current = null;
          setSelectedIndex(null);
          redrawMarkup(scaleRef.current);
        }
      }
      // Delete/Backspace — remove selected annotation
      if ((e.key === "Delete" || e.key === "Backspace") && selectedIdxRef.current !== null) {
        e.preventDefault();
        deleteSelected();
      }
      if (e.key === "v" || e.key === "V") setTool("pointer");
      if (e.key === "h" || e.key === "H") setTool("pan");
      if (e.key === "p" || e.key === "P") setTool("pen");
      if (e.key === "r" || e.key === "R") setTool("measurement");
      if (e.key === "l" || e.key === "L") setTool("line");
      if (e.key === "a" || e.key === "A") setTool("arrow");
      if (e.key === "t" || e.key === "T") setTool("text");
      if (e.key === "z" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); undo(); }
      if (e.key === "+" || e.key === "=") zoomBy(0.2);
      if (e.key === "-") zoomBy(-0.2);
      if (e.key === "0") setScale(fitScale);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        isShiftDownRef.current = false;
        setIsShiftDown(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [fitScale, undoStack]);

  // ─── Cursor ────────────────────────────────────────────────────────────────
  const [nearPhotoPin, setNearPhotoPin] = useState(false);
  const cursor =
    tool === "pointer"     ? pointerCursor :
    tool === "pan"         ? (isPanningRef.current ? "grabbing" : "grab") :
    tool === "measurement" ? "crosshair" :
    tool === "photo"       ? "cell" :
    "crosshair";

  const photoCount = annotations.filter((a) => a.pageNumber === curPage && a.type === "photo").length;
  const measCount  = annotations.filter((a) => a.pageNumber === curPage && a.type === "measurement").length;

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#1a1a2e]">
      {/* ── Top toolbar ─────────────────────────────────────────────────── */}
      <div className="flex items-center gap-2 px-3 h-12 bg-[#0F172A] border-b border-white/10 flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white" asChild>
          <Link href={`/projects/${projectId}/drawings`}><ArrowLeft className="w-4 h-4" /></Link>
        </Button>
        <div className="w-px h-5 bg-white/10 mx-1" />
        <div className="min-w-0">
          <div className="text-[11px] text-sky-400 font-mono font-bold">{drawing.sheetNumber}</div>
          <div className="text-[12px] font-medium text-slate-200 truncate max-w-[200px]">{drawing.title}</div>
        </div>
        <div className="flex-1" />

        {/* Page nav */}
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" disabled={curPage <= 1} onClick={() => setCurPage((p) => p - 1)}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Input
            className="h-7 w-10 text-center bg-white/10 border-white/15 text-slate-200 text-xs p-0"
            value={curPage}
            onChange={(e) => { const v = parseInt(e.target.value); if (v >= 1 && v <= totalPages) setCurPage(v); }}
          />
          <span className="whitespace-nowrap">/ {totalPages || "—"}</span>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" disabled={curPage >= totalPages} onClick={() => setCurPage((p) => p + 1)}>
          <ChevronRight className="w-4 h-4" />
        </Button>
        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Zoom */}
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" onClick={() => zoomBy(-0.2)}><ZoomOut className="w-3.5 h-3.5" /></Button>
        <span className="text-xs text-slate-400 w-10 text-center tabular-nums">{Math.round(scale * 100)}%</span>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" onClick={() => zoomBy(+0.2)}><ZoomIn className="w-3.5 h-3.5" /></Button>
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400" title="Fit page (0)" onClick={() => setScale(fitScale)}><Maximize2 className="w-3.5 h-3.5" /></Button>
        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* ── Compact scale + unit selector — always visible ── */}
        <div className="flex items-center gap-1 px-2 h-7 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" title="Tỷ lệ bản vẽ và đơn vị hiển thị">
          <Ruler className="w-3 h-3 text-yellow-400/80 flex-shrink-0" />
          {/* Scale preset */}
          <Select
            value={isCustom ? "custom" : presetKey}
            onValueChange={(val) => {
              if (val === "custom") setIsCustom(true);
              else { setIsCustom(false); setPresetKey(val); }
            }}
          >
            <SelectTrigger className="h-5 w-[76px] border-0 bg-transparent p-0 text-[10px] text-slate-300 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl max-h-80">
              <SelectGroup>
                <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">Hệ mét — VN / ISO</SelectLabel>
                {METRIC_SCALES.map((p) => (
                  <SelectItem key={p.key} value={p.key} className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3">{p.label}</SelectItem>
                ))}
              </SelectGroup>
              <SelectSeparator className="bg-white/10 my-1" />
              <SelectGroup>
                <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">Kiến trúc Mỹ</SelectLabel>
                {US_ARCH_SCALES.map((p) => (
                  <SelectItem key={p.key} value={p.key} className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3">{p.label}</SelectItem>
                ))}
              </SelectGroup>
              <SelectSeparator className="bg-white/10 my-1" />
              <SelectGroup>
                <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">Kỹ thuật Mỹ</SelectLabel>
                {US_ENG_SCALES.map((p) => (
                  <SelectItem key={p.key} value={p.key} className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3">{p.label}</SelectItem>
                ))}
              </SelectGroup>
              <SelectSeparator className="bg-white/10 my-1" />
              <SelectGroup>
                <SelectItem value="custom" className="text-xs text-yellow-400 focus:bg-yellow-500/20 focus:text-yellow-300 pl-3">Tùy chỉnh...</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Divider */}
          <div className="w-px h-4 bg-white/15" />

          {/* Global display unit */}
          <Select
            value={displayUnit}
            onValueChange={(v) => setDisplayUnit(v as DisplayUnit)}
          >
            <SelectTrigger className="h-5 w-[52px] border-0 bg-transparent p-0 text-[10px] text-sky-300 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden font-mono">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl">
              <SelectGroup>
                <SelectLabel className="text-[10px] text-slate-400 uppercase tracking-wider px-2 py-1.5">Đơn vị mặc định</SelectLabel>
                {(Object.entries(DISPLAY_UNIT_LABELS) as [DisplayUnit, string][]).map(([val, lbl]) => (
                  <SelectItem key={val} value={val} className="text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300">
                    {lbl}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Actions */}
        <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-white" onClick={undo} title="Undo (Ctrl+Z)"><Undo2 className="w-3.5 h-3.5" /></Button>

        {/* Delete selected annotation (replaces "clear all" which was too risky) */}
        <Button
          variant="ghost" size="icon"
          title={selectedIndex !== null ? "Xóa annotation đã chọn (Delete)" : "Chọn một annotation để xóa"}
          onClick={deleteSelected}
          disabled={selectedIndex === null}
          className={cn(
            "h-7 w-7 transition-colors",
            selectedIndex !== null ? "text-red-400 hover:text-red-300 hover:bg-red-500/10" : "text-slate-600 cursor-not-allowed opacity-40"
          )}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </Button>

        {/* Auto-save status + manual force-save */}
        <button
          onClick={saveAnnotations}
          title="Lưu ngay (auto-save mỗi 2 giây)"
          className={cn(
            "h-7 px-2 rounded text-[10px] font-medium flex items-center gap-1.5 transition-colors",
            saveStatus === "saving"  && "text-yellow-400",
            saveStatus === "pending" && "text-slate-400 hover:text-slate-200",
            saveStatus === "saved"   && "text-green-400",
            saveStatus === "idle"    && "text-slate-500 hover:text-slate-300",
          )}
        >
          {saveStatus === "saving"  && <><Loader2 className="w-3 h-3 animate-spin" /> Lưu...</>}
          {saveStatus === "pending" && <><Save className="w-3 h-3" /> Chờ lưu</>}
          {saveStatus === "saved"   && <><Save className="w-3 h-3" /> Đã lưu</>}
          {saveStatus === "idle"    && <><Save className="w-3 h-3" /> Lưu</>}
        </button>
        <div className="w-px h-5 bg-white/10 mx-1" />

        {/* Export button */}
        <Button
          variant="ghost" size="icon"
          className="h-7 w-7 text-slate-400 hover:text-sky-300"
          onClick={() => setShowExport(true)}
          title="Xuất PDF / PNG"
        >
          <FileDown className="w-3.5 h-3.5" />
        </Button>

        {/* Share popover (self-contained, no modal) */}
        <SharePopover drawing={drawing} />

        <div className="w-px h-5 bg-white/10 mx-1" />
        <Button
          variant="ghost" size="icon"
          className={cn("h-7 w-7 text-slate-400", showAnnPanel && "bg-white/10 text-white")}
          onClick={() => setShowAnnPanel(!showAnnPanel)} title="Danh sách markup"
        >
          <List className="w-3.5 h-3.5" />
        </Button>
      </div>

      {/* ── Shape fill / hatch properties bar ──────────────────────────── */}
      {(["rect", "circle", "cloud", "polygon"] as ToolType[]).includes(tool) && (
        <div className="flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap">
          {/* Fill toggle — color swatch, links to hatch */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 shrink-0">Fill:</span>
            <button
              onClick={() => {
                if (hatch !== "none") { setHatch("none"); setIsFilled(false); }
                else { setHatch("solid"); setIsFilled(true); }
              }}
              title={hatch !== "none" ? "Tắt fill" : "Bật fill"}
              className={cn(
                "w-5 h-5 rounded border-2 transition-all flex-shrink-0",
                hatch !== "none" ? "border-white/50 shadow-sm" : "border-white/20 opacity-30"
              )}
              style={{ background: color }}
            />
          </div>

          {/* Opacity — show when any fill is active */}
          {hatch !== "none" && (
            <Select
              value={String(Math.round(shapeOpacity * 100))}
              onValueChange={(v) => setShapeOpacity(Number(v) / 100)}
            >
              <SelectTrigger className="h-6 w-[68px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl min-w-[4.5rem]">
                {[10, 20, 30, 40, 50, 60, 70, 80, 100].map((p) => (
                  <SelectItem key={p} value={String(p)} className="text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300">{p}%</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <div className="w-px h-4 bg-white/10" />

          {/* Hatch / fill type */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 shrink-0">Hatch:</span>
            <Select
              value={hatch}
              onValueChange={(v) => {
                const val = v as typeof hatch;
                setHatch(val);
                setIsFilled(val !== "none");
              }}
            >
              <SelectTrigger className="h-6 w-[110px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 font-mono">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl">
                <SelectItem value="none"   className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">— None</SelectItem>
                <SelectItem value="solid"  className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">■ Solid</SelectItem>
                <SelectItem value="h"      className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">═ Ngang</SelectItem>
                <SelectItem value="v"      className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">║ Dọc</SelectItem>
                <SelectItem value="d45"    className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">╱╱ Chéo</SelectItem>
                <SelectItem value="cross"  className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">╬ Lưới +</SelectItem>
                <SelectItem value="xcross" className="text-xs font-mono text-slate-200 focus:bg-sky-500/20">╳ Lưới ×</SelectItem>
              </SelectContent>
            </Select>

            {/* Live swatch */}
            {hatch !== "none" && <HatchSwatch hatch={hatch} color={color} opacity={shapeOpacity} />}
          </div>
        </div>
      )}

      {/* ── Measurement scale bar ────────────────────────────────────────── */}
      {tool === "measurement" && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs">
          {/* Status hint + live readout */}
          <div className="flex items-center gap-3 min-w-0 flex-wrap">
            <Ruler className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
            <span className="text-yellow-400 font-medium whitespace-nowrap">
              {measureStart
                ? "➋ Nhấp điểm cuối  •  Esc hủy"
                : "➊ Nhấp điểm đầu  →  di chuyển chuột  →  nhấp điểm cuối"}
            </span>

            {/* Mode badge — ORTHO is default; Shift unlocks free angle */}
            {!isShiftDown && (
              <span className="px-2 py-0.5 rounded bg-sky-500/25 text-sky-300 font-mono text-[10px] font-bold tracking-wider border border-sky-500/30">
                ORTHO
              </span>
            )}
            {isShiftDown && (
              <span className="px-2 py-0.5 rounded bg-orange-500/25 text-orange-300 font-mono text-[10px] font-bold tracking-wider border border-orange-500/30">
                FREE
              </span>
            )}
            {!isShiftDown && (
              <span className="text-slate-500 text-[10px]">Giữ Shift = góc tự do</span>
            )}
            {isShiftDown && (
              <span className="text-orange-400/70 text-[10px]">Thả Shift = về ngang/dọc</span>
            )}

            {/* Live distance + angle */}
            {liveMeasure && measureStart && (
              <>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <span className="font-mono text-[11px] text-white font-semibold tabular-nums">
                  {liveMeasure.label}
                </span>
                <span className="text-slate-400 text-[10px] tabular-nums">
                  {liveMeasure.angle}°
                </span>
              </>
            )}
          </div>

          {/* Scale selector — right side */}
          <div className="ml-auto flex items-center gap-2 flex-shrink-0">
            <span className="text-slate-500 whitespace-nowrap">Tỷ lệ bản vẽ:</span>

            {/* Preset dropdown — dark-themed shadcn Select */}
            <Select
              value={isCustom ? "custom" : presetKey}
              onValueChange={(val) => {
                if (val === "custom") { setIsCustom(true); }
                else { setIsCustom(false); setPresetKey(val); }
              }}
            >
              <SelectTrigger className="h-7 w-44 text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0 hover:bg-white/15 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl max-h-80">
                <SelectGroup>
                  <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">
                    Hệ mét — Việt Nam / ISO
                  </SelectLabel>
                  {METRIC_SCALES.map((p) => (
                    <SelectItem
                      key={p.key} value={p.key}
                      className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3"
                    >
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectSeparator className="bg-white/10 my-1" />
                <SelectGroup>
                  <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">
                    Kiến trúc Mỹ — Architectural
                  </SelectLabel>
                  {US_ARCH_SCALES.map((p) => (
                    <SelectItem
                      key={p.key} value={p.key}
                      className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3"
                    >
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectSeparator className="bg-white/10 my-1" />
                <SelectGroup>
                  <SelectLabel className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5">
                    Kỹ thuật Mỹ — Engineering
                  </SelectLabel>
                  {US_ENG_SCALES.map((p) => (
                    <SelectItem
                      key={p.key} value={p.key}
                      className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3"
                    >
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
                <SelectSeparator className="bg-white/10 my-1" />
                <SelectGroup>
                  <SelectItem
                    value="custom"
                    className="text-xs text-yellow-400 focus:bg-yellow-500/20 focus:text-yellow-300 pl-3"
                  >
                    Tùy chỉnh...
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Custom inputs */}
            {isCustom && (
              <>
                <span className="text-slate-500">1 đơn vị =</span>
                <input
                  type="number"
                  min="0.0001"
                  step="0.1"
                  value={customScale}
                  onChange={(e) => setCustomScale(parseFloat(e.target.value) || 1)}
                  className="w-16 h-7 bg-white/10 border border-white/15 rounded px-2 text-slate-200 text-xs text-right focus:outline-none focus:border-sky-500/50"
                />
                <Select value={customUnit} onValueChange={setCustomUnit}>
                  <SelectTrigger className="h-7 w-16 text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl min-w-[4rem]">
                    {["mm", "cm", "m", "ft", "in"].map((u) => (
                      <SelectItem key={u} value={u} className="text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono">
                        {u}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </>
            )}

            {/* Active scale summary badge */}
            {!isCustom && (
              <span className="px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 font-mono text-[10px] whitespace-nowrap">
                {activePreset.label}
              </span>
            )}

            {/* ── Unit override ── */}
            <div className="w-px h-4 bg-white/10 mx-1" />
            <span className="text-slate-500 whitespace-nowrap">Đơn vị:</span>
            <Select
              value={displayUnit}
              onValueChange={(v) => setDisplayUnit(v as DisplayUnit)}
            >
              <SelectTrigger className="h-7 w-[90px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0 font-mono hover:bg-white/15">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl">
                {(Object.entries(DISPLAY_UNIT_LABELS) as [DisplayUnit, string][]).map(([val, lbl]) => (
                  <SelectItem key={val} value={val} className="text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300">
                    {lbl}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* ── Measurement selected — unit + edit label ────────────────────── */}
      {tool === "pointer" && selectedIndex !== null &&
       annotations[selectedIndex]?.type === "measurement" && (
        <div className="flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap">
          <Ruler className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />

          {/* ── Per-measurement unit ── */}
          <span className="text-slate-500 shrink-0">Đơn vị:</span>
          <Select
            value={annotations[selectedIndex].measureUnit ?? "global"}
            onValueChange={(v) => {
              const newUnit = v === "global" ? undefined : v;
              setUndoStack((p) => [...p, annotations]);
              setAnnotations((prev) =>
                prev.map((a, i) =>
                  i === selectedIndex ? { ...a, measureUnit: newUnit, labelLocked: false } : a
                )
              );
            }}
          >
            <SelectTrigger className="h-6 w-[106px] text-xs bg-white/10 border-white/20 text-sky-300 focus:ring-0 focus:ring-offset-0 font-mono">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl">
              <SelectItem value="global" className="text-xs font-mono text-slate-400 focus:bg-sky-500/20">
                ↳ Global ({DISPLAY_UNIT_LABELS[displayUnit]})
              </SelectItem>
              <SelectSeparator className="bg-white/10 my-0.5" />
              {(Object.entries(DISPLAY_UNIT_LABELS) as [DisplayUnit, string][])
                .filter(([v]) => v !== "auto")
                .map(([val, lbl]) => (
                  <SelectItem key={val} value={val} className="text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300">
                    {lbl}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          <div className="w-px h-4 bg-white/10 shrink-0" />

          {/* Current label */}
          <span className="text-slate-500 shrink-0">Nhãn:</span>
          <code className="font-mono text-yellow-300 bg-yellow-500/10 px-2 py-0.5 rounded max-w-[130px] truncate">
            {annotations[selectedIndex].text || "—"}
          </code>
          {annotations[selectedIndex].labelLocked && (
            <span className="text-[9px] text-orange-400 border border-orange-400/40 px-1.5 py-0.5 rounded-full shrink-0">
              manual
            </span>
          )}

          {/* Edit label button */}
          <button
            onClick={() => {
              const ann = annotations[selectedIndex];
              if (!ann.points) return;
              const rect = mkCanvasRef.current!.getBoundingClientRect();
              const mx = (ann.points[0].x + ann.points[1].x) / 2 * scale;
              const my = (ann.points[0].y + ann.points[1].y) / 2 * scale;
              const vx = Math.min(rect.left + mx + 4, window.innerWidth - 240);
              const vy = Math.min(rect.top  + my - 40, window.innerHeight - 140);
              openTextEditor(vx, vy, (ann.points[0].x + ann.points[1].x) / 2, my / scale, ann.pageNumber, {
                editIndex: selectedIndex, prefill: ann.text ?? "", ann,
              });
            }}
            className="flex items-center gap-1 px-2 py-1 rounded hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors shrink-0"
          >
            <Pencil className="w-3 h-3" /> Sửa nhãn
          </button>

          {/* Reset locked label */}
          {annotations[selectedIndex].labelLocked && (
            <button
              onClick={() => {
                setUndoStack((p) => [...p, annotations]);
                setAnnotations((prev) =>
                  prev.map((a, i) => i === selectedIndex ? { ...a, labelLocked: false } : a)
                );
              }}
              className="flex items-center gap-1 px-2 py-1 rounded hover:bg-yellow-500/20 text-yellow-500/70 hover:text-yellow-400 transition-colors shrink-0"
            >
              ↺ Auto
            </button>
          )}

          <span className="text-slate-600 text-[10px] ml-auto hidden lg:block shrink-0">
            Dbl-click để sửa nhanh
          </span>
        </div>
      )}

      {/* ── Photo tool hint ──────────────────────────────────────────────── */}
      {tool === "photo" && (
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs">
          <Camera className="w-3.5 h-3.5 text-sky-400" />
          {photoUploading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-400" />
              <span className="text-sky-400 font-medium">Đang upload và lưu ảnh...</span>
            </>
          ) : (
            <span className="text-sky-400 font-medium">
              Nhấp vào vị trí bản vẽ để ghim ảnh
              {photoCount > 0 && <span className="ml-2 text-slate-400">• Chuyển sang <kbd className="bg-white/10 px-1 rounded text-[10px]">V</kbd> rồi click pin để xem ảnh • {photoCount} ảnh trang này</span>}
            </span>
          )}
        </div>
      )}

      {/* ── Callout hint ─────────────────────────────────────────────────── */}
      {tool === "callout" && (
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs">
          <MessageSquare className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-violet-400 font-medium">
            {calloutStart
              ? "Nhấp điểm neo text  •  Esc hủy"
              : "Nhấp điểm mũi tên (tip) trước"}
          </span>
        </div>
      )}

      {/* ── Polygon hint ─────────────────────────────────────────────────── */}
      {tool === "polygon" && (
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs">
          <Hexagon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-medium">
            {polygonPts.length === 0
              ? "Nhấp để thêm điểm đầu tiên"
              : polygonPts.length < 3
              ? `${polygonPts.length} điểm — cần ít nhất 3 điểm rồi double-click để đóng`
              : `${polygonPts.length} điểm — Double-click để đóng  •  Esc hủy`}
          </span>
          {isFilled && (
            <span className="ml-1 px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 font-mono text-[10px]">Fill ON</span>
          )}
        </div>
      )}

      {/* ── Text inline input hint ───────────────────────────────────────── */}
      {tool === "text" && !textInput && (
        <div className="flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap">
          <Type className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          {/* Bold */}
          <button
            onClick={() => setFontBold((b) => !b)}
            className={cn("w-6 h-6 rounded text-sm font-bold leading-none transition-colors",
              fontBold ? "bg-sky-500/30 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10")}
          >B</button>
          {/* Italic */}
          <button
            onClick={() => setFontItalic((v) => !v)}
            className={cn("w-6 h-6 rounded text-sm italic font-semibold leading-none transition-colors",
              fontItalic ? "bg-sky-500/30 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10")}
          >I</button>
          <div className="w-px h-4 bg-white/10" />
          {/* Font size */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">Size:</span>
            <select
              value={String(fontSize)}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="h-6 bg-white/10 border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[58px] outline-none"
            >
              {[8,10,11,12,14,16,18,20,24,28,32,36,48].map((s) => (
                <option key={s} value={s}>{s}pt</option>
              ))}
            </select>
          </div>
          {/* Font family */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">Font:</span>
            <select
              value={fontFamily}
              onChange={(e) => setFontFamily(e.target.value)}
              className="h-6 bg-white/10 border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[72px] outline-none"
            >
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Mono</option>
            </select>
          </div>
          <span className="text-amber-400/70 text-[10px] ml-1">
            Nhấp vào bản vẽ để thêm • Double-click text có sẵn để sửa
          </span>
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* ── Left toolbar ──────────────────────────────────────────────── */}
        <div className="w-12 flex-shrink-0 bg-[#0F172A] border-r border-white/10 flex flex-col items-center gap-1 py-3 overflow-y-auto">
          <ToolBtn icon={MousePointer2} active={tool === "pointer"}  onClick={() => setTool("pointer")}  label="Chọn (V)" />
          <ToolBtn icon={Hand}          active={tool === "pan"}       onClick={() => setTool("pan")}       label="Di chuyển (H)" />

          <div className="w-7 h-px bg-white/10 my-1" />

          <ToolBtn icon={Pencil}      active={tool === "pen"}       onClick={() => setTool("pen")}       label="Vẽ tự do (P)" />
          <ToolBtn icon={Highlighter} active={tool === "highlight"} onClick={() => setTool("highlight")} label="Highlight" />
          {/* ── Shapes picker — groups line/arrow/rect/circle/cloud ── */}
          <ShapePickerBtn tool={tool} setTool={setTool} />
          <ToolBtn icon={Type}        active={tool === "text"}      onClick={() => setTool("text")}      label="Văn bản (T)" />

          <div className="w-7 h-px bg-white/10 my-1" />

          {/* Measurement tool */}
          <ToolBtn
            icon={Ruler}
            active={tool === "measurement"}
            onClick={() => { setTool("measurement"); setMeasureStart(null); }}
            label="Đo khoảng cách (R)"
            badge={measCount > 0 ? measCount : undefined}
          />

          {/* Photo pin tool */}
          <ToolBtn
            icon={Camera}
            active={tool === "photo"}
            onClick={() => setTool("photo")}
            label="Ghim ảnh hiện trường"
            badge={photoCount > 0 ? photoCount : undefined}
            badgeColor="text-sky-400"
          />

          <div className="w-7 h-px bg-white/10 my-1" />

          {/* Stamps */}
          <StampBtn active={tool === "stamp-approved"} onClick={() => setTool("stamp-approved")} type="approved" />
          <StampBtn active={tool === "stamp-rejected"} onClick={() => setTool("stamp-rejected")} type="rejected" />
          <StampBtn active={tool === "stamp-review"}   onClick={() => setTool("stamp-review")}   type="review" />

          <div className="w-7 h-px bg-white/10 my-1" />

          {/* Fill / hatch toggle (for rect / circle / cloud / polygon) */}
          <button
            onClick={() => {
              if (hatch !== "none") { setHatch("none"); setIsFilled(false); }
              else { setHatch("solid"); setIsFilled(true); }
            }}
            title={hatch !== "none" ? "Tắt tô màu" : "Bật tô màu (Fill)"}
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center transition-all",
              hatch !== "none"
                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                : "text-slate-500 hover:bg-white/10 hover:text-slate-300"
            )}
          >
            <Palette className="w-4 h-4" />
          </button>

          <div className="w-7 h-px bg-white/10 my-1" />

          {/* Colors */}
          {COLORS.map((c) => (
            <button
              key={c} onClick={() => setColor(c)} title={c}
              className={cn("w-5 h-5 rounded-full transition-all", color === c ? "scale-125 ring-2 ring-white/50 ring-offset-1 ring-offset-[#0F172A]" : "hover:scale-110")}
              style={{ background: c }}
            />
          ))}

          <div className="w-7 h-px bg-white/10 my-1" />

          {/* Widths */}
          {WIDTHS.map((w) => (
            <button
              key={w} onClick={() => setStrokeW(w)} title={`Nét ${w}px`}
              className={cn("flex items-center justify-center w-9 h-7 rounded transition-colors", strokeW === w ? "bg-white/15" : "hover:bg-white/10 opacity-50")}
            >
              <div className="w-5 rounded-full bg-slate-300" style={{ height: `${w + 1}px` }} />
            </button>
          ))}
        </div>

        {/* ── Canvas area ───────────────────────────────────────────────── */}
        {/*
          Layout trick for "center when small, scroll in all directions when large":
          - outer div: overflow-auto (the real scroll box)
          - middle div: flex + min-width/height 100% BUT no justify-center (that breaks left scroll)
          - inner div: margin:auto  ← this centers the canvas without breaking overflow
        */}
        <div ref={containerRef} className="flex-1 overflow-auto bg-[#1E293B]" style={{ userSelect: "none" }}>
          <div style={{ display: "flex", minHeight: "100%", minWidth: "max-content", boxSizing: "border-box" }}>
            <div style={{ margin: "auto", padding: 32 }}>
              {isLoading && (
                <div className="flex items-center gap-3 text-slate-400">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm">Đang tải PDF...</span>
                </div>
              )}
              {loadError && (
                <div className="flex flex-col items-center gap-3 text-slate-400 text-center">
                  <AlertCircle className="w-10 h-10 text-red-400" />
                  <p className="text-sm text-red-400">Không tải được PDF</p>
                  <p className="text-xs">{loadError}</p>
                </div>
              )}
              {!fileUrl && !isLoading && (
                <div className="flex flex-col items-center gap-3 text-slate-500 text-center">
                  <AlertCircle className="w-12 h-12" />
                  <p className="text-base font-medium">Chưa có file PDF</p>
                  <p className="text-sm">Upload revision để xem bản vẽ.</p>
                </div>
              )}
              {!isLoading && !loadError && fileUrl && (
                <div className="relative shadow-2xl" style={{ lineHeight: 0, flexShrink: 0 }}>
                  <canvas ref={pdfCanvasRef} />
                  <canvas
                    ref={mkCanvasRef}
                    className="absolute inset-0"
                    style={{ cursor }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onDoubleClick={onDblClick}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Annotation panel ─────────────────────────────────────────── */}
        {showAnnPanel && (
          <AnnotationPanel
            annotations={annotations.filter((a) => a.pageNumber === curPage)}
            issues={drawing.issues}
            onClose={() => setShowAnnPanel(false)}
          />
        )}
      </div>

      {/* ── Hidden photo file input ──────────────────────────────────────── */}
      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handlePhotoFileChange}
      />

      {/* ── Photo lightbox modal ─────────────────────────────────────────── */}
      {photoModal && (
        <PhotoModal annotation={photoModal} onClose={() => setPhotoModal(null)} />
      )}

      {/* ── Export modal ──────────────────────────────────────────────────── */}
      {showExport && (
        <ExportModal
          open={showExport}
          onClose={() => setShowExport(false)}
          drawing={drawing}
          pdfDoc={pdfDoc}
          annotations={annotations}
          pdfCanvasRef={pdfCanvasRef}
          mkCanvasRef={mkCanvasRef}
          fitScale={fitScale}
          curPage={curPage}
          totalPages={totalPages}
          drawAnnotation={drawAnnotation}
        />
      )}

      {/* ── Inline text editor ───────────────────────────────────────────── */}
      {textInput && (
        <>
          {/* Backdrop — click outside commits the text */}
          <div className="fixed inset-0 z-40" onMouseDown={commitTextInput} />

          {/* Editor popup */}
          <div
            className="fixed z-50 flex flex-col"
            style={{ left: textInput.vx, top: textInput.vy, minWidth: 210, maxWidth: 380 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Font controls */}
            <div
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-t-lg border border-b-0 bg-[#1E293B]"
              style={{ borderColor: color }}
            >
              <button
                onMouseDown={(e) => { e.preventDefault(); setFontBold((b) => !b); }}
                className={cn("w-6 h-6 rounded text-sm font-bold leading-none transition-colors",
                  fontBold ? "bg-sky-500/40 text-sky-300" : "text-slate-400 hover:bg-white/10")}
              >B</button>
              <button
                onMouseDown={(e) => { e.preventDefault(); setFontItalic((v) => !v); }}
                className={cn("w-6 h-6 rounded text-sm italic font-semibold leading-none transition-colors",
                  fontItalic ? "bg-sky-500/40 text-sky-300" : "text-slate-400 hover:bg-white/10")}
              >I</button>
              <div className="w-px h-4 bg-white/15 mx-0.5" />
              <select
                value={String(fontSize)}
                onChange={(e) => { setFontSize(Number(e.target.value)); setTimeout(() => textAreaRef2.current?.focus(), 0); }}
                className="h-6 bg-[#0F172A] border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[58px] outline-none"
              >
                {[8,10,11,12,14,16,18,20,24,28,32,36,48].map((s) => (
                  <option key={s} value={s}>{s}pt</option>
                ))}
              </select>
              <select
                value={fontFamily}
                onChange={(e) => { setFontFamily(e.target.value); setTimeout(() => textAreaRef2.current?.focus(), 0); }}
                className="h-6 bg-[#0F172A] border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[72px] outline-none"
              >
                <option value="sans-serif">Sans</option>
                <option value="serif">Serif</option>
                <option value="monospace">Mono</option>
              </select>
              <span className="ml-auto text-[9px] text-slate-500 pl-1 whitespace-nowrap">
                {textInput.editIndex !== undefined ? "Sửa" : "Mới"}
              </span>
            </div>

            {/* Textarea */}
            <textarea
              ref={textAreaRef2}
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); commitTextInput(); }
                if (e.key === "Escape") {
                  editingIndexRef.current = undefined;
                  setTextInput(null); setTextValue(""); textValueRef.current = "";
                  redrawMarkup(scaleRef.current);
                }
                if ((e.ctrlKey || e.metaKey) && e.key === "b") { e.preventDefault(); setFontBold((b) => !b); }
                if ((e.ctrlKey || e.metaKey) && e.key === "i") { e.preventDefault(); setFontItalic((v) => !v); }
              }}
              rows={3}
              placeholder="Nhập chú thích…"
              className="outline-none resize w-full px-3 py-2 rounded-b-lg leading-snug"
              style={{
                fontSize: `${fontSize}px`,
                fontFamily,
                fontWeight: fontBold   ? "bold"   : "normal",
                fontStyle:  fontItalic ? "italic" : "normal",
                color: "#111827",
                background: "#ffffff",
                border: `2px solid ${color}`,
                boxShadow: `0 6px 24px rgba(0,0,0,0.45)`,
              }}
            />
            <div className="flex items-center gap-1 px-1 pt-0.5">
              <span className="text-[9px] text-slate-500">Enter xác nhận</span>
              <span className="text-[9px] text-slate-600">•</span>
              <span className="text-[9px] text-slate-500">Shift+Enter xuống dòng</span>
              <span className="text-[9px] text-slate-600">•</span>
              <span className="text-[9px] text-slate-500">Ctrl+B/I</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Draw annotation (coords normalized to scale=1, multiply by sc) ──────────
function drawAnnotation(ctx: CanvasRenderingContext2D, ann: AnnotationData, sc: number) {
  ctx.save();
  const S  = (v: number) => v * sc;
  const Sp = (p: { x: number; y: number }) => ({ x: S(p.x), y: S(p.y) });

  ctx.strokeStyle = ann.color;
  ctx.fillStyle   = ann.color;
  ctx.lineWidth   = ann.strokeWidth;
  ctx.lineCap     = "round";
  ctx.lineJoin    = "round";

  if (ann.type === "pen" && ann.points?.length) {
    const pts = ann.points.map(Sp);
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.stroke();
  } else if (ann.type === "highlight" && ann.points?.length) {
    const pts = ann.points.map(Sp);
    ctx.globalAlpha = 0.35; ctx.lineWidth = 20;
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.stroke(); ctx.globalAlpha = 1;
  } else if (ann.type === "line" && ann.points?.length === 2) {
    const [s, e] = ann.points.map(Sp);
    // Endpoint dots
    ctx.fillStyle = ann.color;
    ctx.beginPath(); ctx.arc(s.x, s.y, ann.strokeWidth, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(e.x, e.y, ann.strokeWidth, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(e.x, e.y); ctx.stroke();
  } else if (ann.type === "arrow" && ann.points?.length === 2) {
    const [s, e] = ann.points.map(Sp);
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(e.x, e.y); ctx.stroke();
    const angle = Math.atan2(e.y - s.y, e.x - s.x);
    const len = Math.max(10, ann.strokeWidth * 4 + 8);
    ctx.beginPath();
    ctx.moveTo(e.x, e.y);
    ctx.lineTo(e.x - len * Math.cos(angle - 0.4), e.y - len * Math.sin(angle - 0.4));
    ctx.lineTo(e.x - len * Math.cos(angle + 0.4), e.y - len * Math.sin(angle + 0.4));
    ctx.closePath(); ctx.fill();
  } else if (ann.type === "rect" && ann.x != null) {
    const [rx, ry, rw, rh] = [S(ann.x), S(ann.y!), S(ann.width!), S(ann.height!)];
    const rsp = (ann.hatchSpacing ?? 8) * sc;
    if (ann.hatch === "solid" || (ann.filled && (!ann.hatch || ann.hatch === "none"))) {
      ctx.globalAlpha = ann.fillOpacity ?? 0.4; ctx.fillRect(rx, ry, rw, rh); ctx.globalAlpha = 1;
    }
    if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
      ctx.save(); ctx.beginPath(); ctx.rect(rx, ry, rw, rh); ctx.clip();
      drawHatchLines(ctx, ann.hatch, ann.color, rsp, rx, ry, rw, rh);
      ctx.restore();
    }
    ctx.strokeRect(rx, ry, rw, rh);
  } else if (ann.type === "circle" && ann.x != null) {
    const [ecx, ecy, erx, ery] = [S(ann.x), S(ann.y!), S(ann.width!) / 2, S(ann.height!) / 2];
    const csp = (ann.hatchSpacing ?? 8) * sc;
    ctx.beginPath(); ctx.ellipse(ecx, ecy, erx, ery, 0, 0, Math.PI * 2);
    if (ann.hatch === "solid" || (ann.filled && (!ann.hatch || ann.hatch === "none"))) {
      ctx.globalAlpha = ann.fillOpacity ?? 0.4; ctx.fill(); ctx.globalAlpha = 1;
    }
    if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
      ctx.save(); ctx.beginPath(); ctx.ellipse(ecx, ecy, erx, ery, 0, 0, Math.PI * 2); ctx.clip();
      drawHatchLines(ctx, ann.hatch, ann.color, csp, ecx - erx, ecy - ery, erx * 2, ery * 2);
      ctx.restore();
    }
    ctx.stroke();
  } else if (ann.type === "cloud" && ann.x != null) {
    drawCloud(ctx, S(ann.x), S(ann.y!), S(ann.width!), S(ann.height!), ann.color, ann.strokeWidth, ann.filled ? (ann.fillOpacity ?? 0.4) : undefined);
  } else if (ann.type === "polygon" && ann.points && ann.points.length >= 3) {
    const pts = ann.points.map(Sp);
    const psp = (ann.hatchSpacing ?? 8) * sc;
    ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    if (ann.hatch === "solid" || (ann.filled && (!ann.hatch || ann.hatch === "none"))) {
      ctx.globalAlpha = ann.fillOpacity ?? 0.4; ctx.fill(); ctx.globalAlpha = 1;
    }
    if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
      const minX = Math.min(...pts.map((p) => p.x)), maxX = Math.max(...pts.map((p) => p.x));
      const minY = Math.min(...pts.map((p) => p.y)), maxY = Math.max(...pts.map((p) => p.y));
      ctx.save(); ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.closePath(); ctx.clip();
      drawHatchLines(ctx, ann.hatch, ann.color, psp, minX, minY, maxX - minX, maxY - minY);
      ctx.restore();
    }
    ctx.stroke();
  } else if (ann.type === "callout" && ann.points?.length === 2 && ann.text) {
    const [tip, anchor] = ann.points.map(Sp);
    // Leader line
    ctx.beginPath(); ctx.moveTo(tip.x, tip.y); ctx.lineTo(anchor.x, anchor.y); ctx.stroke();
    // Arrow tip
    const angle = Math.atan2(tip.y - anchor.y, tip.x - anchor.x);
    const aLen  = Math.max(10, ann.strokeWidth * 4 + 8);
    ctx.beginPath();
    ctx.moveTo(tip.x, tip.y);
    ctx.lineTo(tip.x - aLen * Math.cos(angle - 0.4), tip.y - aLen * Math.sin(angle - 0.4));
    ctx.lineTo(tip.x - aLen * Math.cos(angle + 0.4), tip.y - aLen * Math.sin(angle + 0.4));
    ctx.closePath(); ctx.fill();
    // Text box at anchor
    const cfs    = (ann.fontSize ?? Math.max(12, ann.strokeWidth * 4 + 10)) * sc;
    const cw     = ann.fontStyle?.includes("bold")   ? "bold"   : "normal";
    const cst    = ann.fontStyle?.includes("italic") ? "italic" : "normal";
    ctx.font  = `${cst} ${cw} ${cfs}px ${ann.fontFamily ?? "sans-serif"}`;
    const fs  = cfs; // alias for box calculations
    const pad = 6, tw = ctx.measureText(ann.text).width;
    const bw  = tw + pad * 2, bh = fs + pad * 2;
    ctx.fillStyle = "#ffffff"; ctx.globalAlpha = 0.95;
    ctx.beginPath(); ctx.roundRect(anchor.x, anchor.y - bh / 2, bw, bh, 4); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = ann.color; ctx.fillStyle = ann.color;
    ctx.lineWidth   = ann.strokeWidth;
    ctx.beginPath(); ctx.roundRect(anchor.x, anchor.y - bh / 2, bw, bh, 4); ctx.stroke();
    ctx.fillStyle = "#1e293b"; ctx.textBaseline = "middle";
    ctx.fillText(ann.text, anchor.x + pad, anchor.y);
    ctx.textBaseline = "alphabetic";
  } else if (ann.type === "text" && ann.text && ann.x != null) {
    const tfs    = (ann.fontSize ?? Math.max(12, ann.strokeWidth * 5 + 10)) * sc;
    const weight = ann.fontStyle?.includes("bold")   ? "bold"   : "normal";
    const fstyle = ann.fontStyle?.includes("italic") ? "italic" : "normal";
    ctx.font = `${fstyle} ${weight} ${tfs}px ${ann.fontFamily ?? "sans-serif"}`;
    const lines = ann.text.split("\n");
    const lineH = tfs * 1.35;
    lines.forEach((ln, i) => ctx.fillText(ln, S(ann.x!), S(ann.y!) + i * lineH));
  } else if (ann.type === "stamp" && ann.x != null) {
    const label = ann.stampType === "approved" ? "APPROVED" : ann.stampType === "rejected" ? "REJECTED" : "FOR REVIEW";
    const col   = ann.stampType === "approved" ? "#22C55E" : ann.stampType === "rejected" ? "#EF4444" : "#F59E0B";
    const [sx, sy, sw, sh] = [S(ann.x), S(ann.y!), S(ann.width!), S(ann.height!)];
    ctx.strokeStyle = col; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(sx, sy, sw, sh, 4); ctx.stroke();
    ctx.fillStyle = col; ctx.globalAlpha = 0.12; ctx.fill(); ctx.globalAlpha = 1;
    ctx.fillStyle = col;
    ctx.font = `bold ${Math.max(9, sh * 0.42)}px monospace`;
    ctx.textAlign = "center";
    ctx.fillText(label, sx + sw / 2, sy + sh * 0.65);
    ctx.textAlign = "left";
  } else if (ann.type === "measurement" && ann.points?.length === 2) {
    drawMeasurementAnnotation(ctx, ann.points[0].x * sc, ann.points[0].y * sc, ann.points[1].x * sc, ann.points[1].y * sc, ann.text ?? "", ann.color, ann.strokeWidth);
  } else if (ann.type === "photo" && ann.x != null) {
    drawPhotoPin(ctx, S(ann.x), S(ann.y!), ann.color);
  }

  ctx.restore();
}

// ─── Measurement annotation rendering ────────────────────────────────────────
function drawMeasurementAnnotation(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number, x2: number, y2: number,
  label: string, color: string, lw: number
) {
  ctx.save();
  // Dashed measurement line
  ctx.strokeStyle = color;
  ctx.lineWidth   = Math.max(1, lw);
  ctx.setLineDash([6, 3]);
  ctx.lineCap = "round";
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  ctx.setLineDash([]);

  // Endpoint dots
  ctx.fillStyle = color;
  for (const [ex, ey] of [[x1, y1], [x2, y2]]) {
    ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fill();
  }

  // Tick marks perpendicular to line
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const perp  = angle + Math.PI / 2;
  const tickLen = 8;
  for (const [tx, ty] of [[x1, y1], [x2, y2]]) {
    ctx.beginPath();
    ctx.moveTo(tx + Math.cos(perp) * tickLen, ty + Math.sin(perp) * tickLen);
    ctx.lineTo(tx - Math.cos(perp) * tickLen, ty - Math.sin(perp) * tickLen);
    ctx.stroke();
  }

  // Distance badge at midpoint
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const fs  = 11;
  ctx.font  = `bold ${fs}px monospace`;
  const tw  = ctx.measureText(label).width;
  const pad = 5;
  const bw  = tw + pad * 2, bh = fs + pad * 2;

  ctx.fillStyle = color;
  ctx.globalAlpha = 0.9;
  ctx.beginPath(); ctx.roundRect(mx - bw / 2, my - bh / 2, bw, bh, 4); ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle  = "#fff";
  ctx.textAlign  = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, mx, my);
  ctx.textAlign    = "left";
  ctx.textBaseline = "alphabetic";
  ctx.restore();
}

// ─── Measurement live preview — AutoCAD-style with ortho + real units ──────────
function drawMeasurementPreview(
  ctx: CanvasRenderingContext2D,
  x1: number, y1: number,   // start in canvas coords
  x2: number, y2: number,   // cursor/end in canvas coords
  color: string,
  realLabel: string,         // pre-computed real-world distance label
  isOrtho: boolean
) {
  const dx = x2 - x1, dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 2) return;

  const angle  = Math.atan2(dy, dx);
  const perp   = angle + Math.PI / 2;
  const lineColor = isOrtho ? "#38BDF8" : color;

  ctx.save();

  // ── Main dashed measurement line ──
  ctx.strokeStyle = lineColor;
  ctx.lineWidth   = isOrtho ? 1.5 : 1.2;
  ctx.lineCap     = "round";
  ctx.globalAlpha = 0.9;
  ctx.setLineDash([6, 3]);
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  ctx.setLineDash([]);

  // ── Tick marks (perpendicular) at both endpoints — AutoCAD witness lines ──
  ctx.strokeStyle = "#94A3B8";
  ctx.lineWidth   = 1;
  ctx.globalAlpha = 0.7;
  const tickLen = 8;
  for (const [tx, ty] of [[x1, y1], [x2, y2]] as [number, number][]) {
    ctx.beginPath();
    ctx.moveTo(tx + Math.cos(perp) * tickLen, ty + Math.sin(perp) * tickLen);
    ctx.lineTo(tx - Math.cos(perp) * tickLen, ty - Math.sin(perp) * tickLen);
    ctx.stroke();
  }

  // ── Start point: filled circle with ring ──
  ctx.strokeStyle = lineColor;
  ctx.fillStyle   = lineColor;
  ctx.lineWidth   = 1.5;
  ctx.globalAlpha = 1;
  ctx.beginPath(); ctx.arc(x1, y1, 4, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 0.3;
  ctx.beginPath(); ctx.arc(x1, y1, 8, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 1;

  // ── Cursor crosshair at endpoint — precision indicator ──
  const cLen = 10;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.moveTo(x2 - cLen, y2); ctx.lineTo(x2 + cLen, y2);
  ctx.moveTo(x2, y2 - cLen); ctx.lineTo(x2, y2 + cLen);
  ctx.stroke();
  // Crosshair circle
  ctx.strokeStyle = lineColor;
  ctx.globalAlpha = 0.6;
  ctx.beginPath(); ctx.arc(x2, y2, 5, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 1;

  // ── Angle arc near start ──
  if (dist > 50) {
    const arcR   = 22;
    const angDeg = (angle * 180 / Math.PI + 360) % 360;
    ctx.strokeStyle = "#94A3B8";
    ctx.lineWidth   = 0.8;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(x1, y1, arcR, 0, angle, angle < 0);
    ctx.stroke();
    // Angle label
    const midAng  = angle / 2;
    const labelR  = arcR + 12;
    const snap45  = Math.round(angDeg / 45) * 45;
    const snapDiff = Math.abs(angDeg - snap45);
    const angleText = isOrtho && snapDiff < 3
      ? `${snap45}°`
      : `${angDeg.toFixed(1)}°`;
    ctx.font = "bold 9px monospace";
    ctx.fillStyle    = isOrtho ? "#38BDF8" : "#94A3B8";
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.globalAlpha  = 1;
    ctx.fillText(angleText, x1 + Math.cos(midAng) * labelR, y1 + Math.sin(midAng) * labelR);
  }

  // ── Distance badge floating above midpoint ──
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  // Offset badge perpendicular to line (away from line)
  const offMag = 16;
  const bx = mx - Math.sin(angle) * offMag;
  const by = my + Math.cos(angle) * offMag;

  ctx.font          = "bold 11px monospace";
  ctx.textAlign     = "center";
  ctx.textBaseline  = "middle";
  const tw  = ctx.measureText(realLabel).width;
  const pad = 5, bh = 18, bw = tw + pad * 2;

  ctx.fillStyle   = isOrtho ? "#0C4A6E" : "#1E293B";
  ctx.globalAlpha = 0.93;
  ctx.strokeStyle = isOrtho ? "#38BDF8" : "#475569";
  ctx.lineWidth   = isOrtho ? 1.5 : 0.8;
  ctx.beginPath(); ctx.roundRect(bx - bw / 2, by - bh / 2, bw, bh, 3);
  ctx.fill(); ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle   = isOrtho ? "#E0F2FE" : "#F1F5F9";
  ctx.fillText(realLabel, bx, by);

  // ── Mode label near cursor ──
  ctx.font    = "bold 9px monospace";
  ctx.textAlign = "left";
  ctx.globalAlpha = 0.9;
  if (isOrtho) {
    ctx.fillStyle = "#38BDF8";
    ctx.fillText("ORTHO", x2 + 12, y2 - 10);
  } else {
    ctx.fillStyle = "#FB923C";
    ctx.fillText("FREE", x2 + 12, y2 - 10);
  }
  ctx.globalAlpha = 1;

  ctx.textAlign    = "left";
  ctx.textBaseline = "alphabetic";
  ctx.restore();
}

// ─── Photo pin rendering ──────────────────────────────────────────────────────
function drawPhotoPin(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  ctx.save();
  const r = 14; // pin circle radius

  // Drop shadow
  ctx.shadowColor   = "rgba(0,0,0,0.5)";
  ctx.shadowBlur    = 6;
  ctx.shadowOffsetY = 2;

  // Pin background circle
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y - r, r, 0, Math.PI * 2);
  ctx.fill();

  // Pin triangle (pointer at bottom)
  ctx.beginPath();
  ctx.moveTo(x - 5, y - r * 0.7);
  ctx.lineTo(x + 5, y - r * 0.7);
  ctx.lineTo(x, y + 4);
  ctx.closePath();
  ctx.fill();

  ctx.shadowColor = "transparent";

  // White border
  ctx.strokeStyle = "#fff";
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.arc(x, y - r, r, 0, Math.PI * 2);
  ctx.stroke();

  // Camera icon inside pin (simplified)
  ctx.fillStyle = "#fff";
  const cx = x, cy = y - r;

  // Camera body
  ctx.beginPath();
  ctx.roundRect(cx - 7, cy - 5, 14, 10, 2);
  ctx.fill();

  // Camera lens (dark)
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // Camera flash (white dot)
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(cx + 4.5, cy - 3.5, 1.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

// ─── HandleInfo — describes a single resize/vertex handle ────────────────────
interface HandleInfo {
  idx:       number;       // 0-7 for box handles; vertex index for point handles
  cx:        number;       // canvas x of handle centre
  cy:        number;       // canvas y of handle centre
  cursor:    string;       // CSS cursor string
  isVertex:  boolean;      // true → move one point; false → resize bounding box
  vertexIdx?: number;      // which point in ann.points[] to move (if isVertex)
}

// ─── Selection / drag helpers ─────────────────────────────────────────────────

function distToSegment(p: {x:number,y:number}, a: {x:number,y:number}, b: {x:number,y:number}): number {
  const dx = b.x - a.x, dy = b.y - a.y;
  const lenSq = dx*dx + dy*dy;
  if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);
  const t = Math.max(0, Math.min(1, ((p.x-a.x)*dx + (p.y-a.y)*dy) / lenSq));
  return Math.hypot(p.x - (a.x + t*dx), p.y - (a.y + t*dy));
}

function isPointInPolygon(p: {x:number,y:number}, pts: {x:number,y:number}[]): boolean {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i].x, yi = pts[i].y, xj = pts[j].x, yj = pts[j].y;
    if (((yi > p.y) !== (yj > p.y)) && (p.x < (xj-xi)*(p.y-yi)/(yj-yi)+xi)) inside = !inside;
  }
  return inside;
}

function moveAnnotation(ann: AnnotationData, dx: number, dy: number): AnnotationData {
  if (ann.points) return { ...ann, points: ann.points.map((p) => ({ x: p.x + dx, y: p.y + dy })) };
  if (ann.x != null) return { ...ann, x: ann.x + dx, y: (ann.y ?? 0) + dy };
  return ann;
}

function getAnnotationBBox(ann: AnnotationData, sc: number): { x: number; y: number; w: number; h: number } | null {
  const S = (v: number) => v * sc;
  if (ann.points?.length) {
    const xs = ann.points.map((p) => p.x * sc);
    const ys = ann.points.map((p) => p.y * sc);
    const minX = Math.min(...xs), minY = Math.min(...ys);
    const extra = ann.type === "callout" && ann.points.length === 2 ? (ann.text?.length ?? 0) * (ann.fontSize ?? 14) * sc * 0.6 + 12 : 0;
    return { x: minX, y: minY, w: Math.max(...xs) - minX + extra, h: Math.max(...ys) - minY };
  }
  if (ann.type === "circle" && ann.x != null) {
    const rx = S(ann.width!)/2, ry = S(ann.height!)/2;
    return { x: S(ann.x)-rx, y: S(ann.y!)-ry, w: rx*2, h: ry*2 };
  }
  if (ann.type === "text" && ann.x != null) {
    const fs = (ann.fontSize ?? 14) * sc;
    const lines = (ann.text ?? "").split("\n");
    return { x: S(ann.x), y: S(ann.y!)-fs, w: Math.max(40, (ann.text?.length ?? 0)*fs*0.58), h: fs*lines.length*1.35 };
  }
  if (ann.type === "photo" && ann.x != null) {
    const r = 14;
    return { x: S(ann.x)-r, y: S(ann.y!)-r*2-4, w: r*2, h: r*2+4 };
  }
  if (ann.x != null) {
    return { x: S(ann.x), y: S(ann.y!), w: S(ann.width ?? 20), h: S(ann.height ?? 20) };
  }
  return null;
}


function hitTestAnnotation(pos: {x:number,y:number}, ann: AnnotationData, sc: number): boolean {
  const S = (v: number) => v * sc;
  const tol = Math.max(7, ann.strokeWidth + 5);

  if (ann.type === "pen" || ann.type === "highlight") {
    const pts = ann.points;
    if (!pts?.length) return false;
    const extra = ann.type === "highlight" ? 12 : 0;
    for (let i = 0; i < pts.length - 1; i++) {
      if (distToSegment(pos, {x:pts[i].x*sc,y:pts[i].y*sc}, {x:pts[i+1].x*sc,y:pts[i+1].y*sc}) < tol+extra) return true;
    }
    return false;
  }
  if (ann.type === "line" || ann.type === "arrow" || ann.type === "measurement") {
    if (!ann.points || ann.points.length < 2) return false;
    return distToSegment(pos, {x:ann.points[0].x*sc,y:ann.points[0].y*sc}, {x:ann.points[1].x*sc,y:ann.points[1].y*sc}) < tol;
  }
  if (ann.type === "rect" || ann.type === "cloud" || ann.type === "stamp") {
    if (ann.x == null) return false;
    const [x,y,w,h] = [S(ann.x),S(ann.y!),S(ann.width!),S(ann.height!)];
    if (ann.filled || ann.type === "stamp") return pos.x>=x-tol&&pos.x<=x+w+tol&&pos.y>=y-tol&&pos.y<=y+h+tol;
    return (Math.abs(pos.x-x)<tol||Math.abs(pos.x-x-w)<tol)&&pos.y>=y-tol&&pos.y<=y+h+tol
        || (Math.abs(pos.y-y)<tol||Math.abs(pos.y-y-h)<tol)&&pos.x>=x-tol&&pos.x<=x+w+tol;
  }
  if (ann.type === "circle") {
    if (ann.x == null) return false;
    const cx=S(ann.x),cy=S(ann.y!),rx=S(ann.width!)/2,ry=S(ann.height!)/2;
    const nx=(pos.x-cx)/rx, ny=(pos.y-cy)/ry;
    const d = Math.sqrt(nx*nx+ny*ny);
    return ann.filled ? d <= 1 + tol/Math.min(rx,ry) : Math.abs(d-1) < tol/Math.min(rx,ry);
  }
  if (ann.type === "text") {
    if (ann.x == null) return false;
    const fs=(ann.fontSize??14)*sc, tx=S(ann.x), ty=S(ann.y!);
    const approxW = Math.max(40,(ann.text?.length??0)*fs*0.58);
    return pos.x>=tx-tol&&pos.x<=tx+approxW+tol&&pos.y>=ty-fs-tol&&pos.y<=ty+tol;
  }
  if (ann.type === "photo") {
    if (ann.x == null) return false;
    const r=14, cx=S(ann.x), cy=S(ann.y!)-r;
    return Math.hypot(pos.x-cx,pos.y-cy)<r+8;
  }
  if (ann.type === "callout") {
    if (!ann.points||ann.points.length<2) return false;
    const tip={x:ann.points[0].x*sc,y:ann.points[0].y*sc};
    const anc={x:ann.points[1].x*sc,y:ann.points[1].y*sc};
    if (distToSegment(pos,tip,anc)<tol) return true;
    const fs=(ann.fontSize??14)*sc, tw=(ann.text?.length??0)*fs*0.58+12;
    const bh=fs+12;
    return pos.x>=anc.x-tol&&pos.x<=anc.x+tw+tol&&pos.y>=anc.y-bh/2-tol&&pos.y<=anc.y+bh/2+tol;
  }
  if (ann.type === "polygon") {
    if (!ann.points?.length) return false;
    const pts = ann.points.map((p) => ({x:p.x*sc,y:p.y*sc}));
    for (let i=0;i<pts.length;i++) {
      if (distToSegment(pos,pts[i],pts[(i+1)%pts.length])<tol) return true;
    }
    return ann.filled ? isPointInPolygon(pos,pts) : false;
  }
  return false;
}

// ─── Handle geometry ──────────────────────────────────────────────────────────
const BOX_CURSORS = [
  "nwse-resize","ns-resize","nesw-resize",
  "ew-resize",              "ew-resize",
  "nesw-resize","ns-resize","nwse-resize",
] as const;

function getAnnotationHandles(ann: AnnotationData, sc: number): HandleInfo[] {
  const PAD = 7; // extra padding around bbox for box handles

  // 2-point shapes (line, arrow, measurement, callout): endpoint handles only
  if (["line","arrow","measurement","callout"].includes(ann.type) && ann.points?.length === 2) {
    return ann.points.map((p, vi) => ({
      idx: vi, cx: p.x * sc, cy: p.y * sc,
      cursor: "crosshair", isVertex: true, vertexIdx: vi,
    }));
  }
  // Polygon: vertex handles at each point
  if (ann.type === "polygon" && ann.points?.length) {
    return ann.points.map((p, vi) => ({
      idx: vi, cx: p.x * sc, cy: p.y * sc,
      cursor: "crosshair", isVertex: true, vertexIdx: vi,
    }));
  }
  // All other shapes: 8 box handles around bounding box
  const bbox = getAnnotationBBox(ann, sc);
  if (!bbox) return [];
  const { x, y, w, h } = { x: bbox.x - PAD, y: bbox.y - PAD, w: bbox.w + PAD*2, h: bbox.h + PAD*2 };
  return [
    { idx:0, cx:x,     cy:y,     cursor:BOX_CURSORS[0], isVertex:false },
    { idx:1, cx:x+w/2, cy:y,     cursor:BOX_CURSORS[1], isVertex:false },
    { idx:2, cx:x+w,   cy:y,     cursor:BOX_CURSORS[2], isVertex:false },
    { idx:3, cx:x,     cy:y+h/2, cursor:BOX_CURSORS[3], isVertex:false },
    { idx:4, cx:x+w,   cy:y+h/2, cursor:BOX_CURSORS[4], isVertex:false },
    { idx:5, cx:x,     cy:y+h,   cursor:BOX_CURSORS[5], isVertex:false },
    { idx:6, cx:x+w/2, cy:y+h,   cursor:BOX_CURSORS[6], isVertex:false },
    { idx:7, cx:x+w,   cy:y+h,   cursor:BOX_CURSORS[7], isVertex:false },
  ];
}

function hitTestHandle(pos: { x: number; y: number }, handles: HandleInfo[]): HandleInfo | null {
  const HIT = 9; // hit radius px
  let best: HandleInfo | null = null, bestD = Infinity;
  for (const h of handles) {
    const d = Math.hypot(pos.x - h.cx, pos.y - h.cy);
    if (d < HIT && d < bestD) { bestD = d; best = h; }
  }
  return best;
}

// Normalized bounding box (annotation coords, NOT canvas coords)
function getNormBBox(ann: AnnotationData): { x:number;y:number;w:number;h:number } | null {
  if (ann.points?.length) {
    const xs = ann.points.map((p) => p.x), ys = ann.points.map((p) => p.y);
    const mx = Math.min(...xs), my = Math.min(...ys);
    return { x: mx, y: my, w: Math.max(...xs)-mx, h: Math.max(...ys)-my };
  }
  if (ann.type === "circle" && ann.x != null) {
    const hw = (ann.width ?? 0)/2, hh = (ann.height ?? 0)/2;
    return { x: ann.x-hw, y: ann.y!-hh, w: ann.width ?? 0, h: ann.height ?? 0 };
  }
  if (ann.x != null) return { x: ann.x, y: ann.y!, w: ann.width ?? 0, h: ann.height ?? 0 };
  return null;
}

// Apply a box-handle drag delta to a normalized bbox
function applyBoxHandle(
  bbox: {x:number;y:number;w:number;h:number},
  idx: number, dx: number, dy: number
): {x:number;y:number;w:number;h:number} {
  let { x, y, w, h } = bbox;
  const LEFT=[0,3,5].includes(idx), RIGHT=[2,4,7].includes(idx);
  const TOP=[0,1,2].includes(idx), BOT=[5,6,7].includes(idx);
  if (LEFT)  { x+=dx; w-=dx; } if (RIGHT) w+=dx;
  if (TOP)   { y+=dy; h-=dy; } if (BOT)   h+=dy;
  const MIN = 0.001;
  if (w<MIN) { if(LEFT) x-=(MIN-w); w=MIN; }
  if (h<MIN) { if(TOP)  y-=(MIN-h); h=MIN; }
  return { x, y, w, h };
}

// Rescale an annotation from oldBBox to newBBox (both normalized)
function rescaleAnn(ann: AnnotationData, ob: {x:number;y:number;w:number;h:number}, nb: {x:number;y:number;w:number;h:number}): AnnotationData {
  const mapX = (v: number) => ob.w < 1e-6 ? nb.x : nb.x + (v-ob.x)/ob.w*nb.w;
  const mapY = (v: number) => ob.h < 1e-6 ? nb.y : nb.y + (v-ob.y)/ob.h*nb.h;
  if (ann.points) return { ...ann, points: ann.points.map((p) => ({ x: mapX(p.x), y: mapY(p.y) })) };
  if (ann.type === "circle") return { ...ann, x: nb.x+nb.w/2, y: nb.y+nb.h/2, width: nb.w, height: nb.h };
  if (ann.x != null)         return { ...ann, x: nb.x, y: nb.y, width: nb.w, height: nb.h };
  return ann;
}

// Compute the final annotation after a handle drag
function applyHandleDrag(snap: AnnotationData, handle: HandleInfo, dx: number, dy: number): AnnotationData {
  if (handle.isVertex && handle.vertexIdx !== undefined && snap.points) {
    const pts = snap.points.map((p, i) =>
      i === handle.vertexIdx ? { x: p.x+dx, y: p.y+dy } : p
    );
    return { ...snap, points: pts };
  }
  const ob = getNormBBox(snap);
  if (!ob) return snap;
  const nb = applyBoxHandle(ob, handle.idx, dx, dy);
  return rescaleAnn(snap, ob, nb);
}

function drawSelectionBox(ctx: CanvasRenderingContext2D, ann: AnnotationData, sc: number) {
  ctx.save();
  const handles = getAnnotationHandles(ann, sc);

  // ── Bounding box outline ──────────────────────────────────────────────────
  const bbox = getAnnotationBBox(ann, sc);
  if (bbox) {
    const PAD = 7;
    const { x, y, w, h } = { x: bbox.x-PAD, y: bbox.y-PAD, w: Math.max(bbox.w,4)+PAD*2, h: Math.max(bbox.h,4)+PAD*2 };
    ctx.strokeStyle = "#3B82F6";
    ctx.lineWidth   = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.globalAlpha = 0.8;
    ctx.strokeRect(x, y, w, h);
    ctx.setLineDash([]);
  }

  // ── Handles ───────────────────────────────────────────────────────────────
  ctx.fillStyle   = "#ffffff";
  ctx.strokeStyle = "#3B82F6";
  ctx.lineWidth   = 1.5;
  ctx.globalAlpha = 1;
  const HS = 7; // half-size for square handles
  const VR = 6; // radius for vertex circle handles

  for (const h of handles) {
    if (h.isVertex) {
      // Vertex: filled circle (blue fill for emphasis)
      ctx.fillStyle = "#3B82F6";
      ctx.beginPath(); ctx.arc(h.cx, h.cy, VR, 0, Math.PI*2); ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(h.cx, h.cy, VR-2, 0, Math.PI*2); ctx.fill();
    } else {
      // Box handle: white filled square with blue border
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(h.cx-HS, h.cy-HS, HS*2, HS*2);
      ctx.strokeRect(h.cx-HS, h.cy-HS, HS*2, HS*2);
    }
  }
  ctx.restore();
}

// ─── Hatch fill lines (called after clipping to shape path) ──────────────────
// spacing: canvas pixels between lines; bx,by,bw,bh: bounding box in canvas px
function drawHatchLines(
  ctx: CanvasRenderingContext2D,
  hatch: string,
  color: string,
  spacing: number,
  bx: number, by: number, bw: number, bh: number
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth   = Math.max(0.6, spacing / 14);
  ctx.globalAlpha = 0.75;
  ctx.lineCap     = "butt";

  const cx   = bx + bw / 2;
  const cy   = by + bh / 2;
  const diag = Math.sqrt(bw * bw + bh * bh) / 2 + spacing;

  const drawAtAngle = (deg: number) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(deg * (Math.PI / 180));
    for (let d = -diag; d <= diag; d += spacing) {
      ctx.beginPath(); ctx.moveTo(d, -diag); ctx.lineTo(d, diag); ctx.stroke();
    }
    ctx.restore();
  };

  if (hatch === "h")      drawAtAngle(90);
  if (hatch === "v")      drawAtAngle(0);
  if (hatch === "d45")    drawAtAngle(45);
  if (hatch === "cross")  { drawAtAngle(90); drawAtAngle(0); }
  if (hatch === "xcross") { drawAtAngle(45); drawAtAngle(-45); }

  ctx.globalAlpha = 1;
  ctx.restore();
}

// ─── Cloud annotation ─────────────────────────────────────────────────────────
function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, color: string, lw: number, fillOpacity?: number) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth   = lw;
  const alpha = fillOpacity != null ? fillOpacity : 0.09;
  ctx.fillStyle   = color;

  const topN   = Math.max(2, Math.round(w / 24));
  const rightN = Math.max(2, Math.round(h / 24));
  const tw     = w / topN;
  const rh     = h / rightN;

  ctx.beginPath();
  for (let i = 0; i < topN; i++)   ctx.arc(x + tw * i + tw / 2, y,     tw / 2, Math.PI,      0,           false);
  for (let i = 0; i < rightN; i++) ctx.arc(x + w,                y + rh * i + rh / 2, rh / 2, -Math.PI/2, Math.PI/2,   false);
  for (let i = topN - 1; i >= 0; i--)   ctx.arc(x + tw * i + tw / 2, y + h, tw / 2, 0,       Math.PI,     false);
  for (let i = rightN - 1; i >= 0; i--) ctx.arc(x,                y + rh * i + rh / 2, rh / 2, Math.PI/2, -Math.PI/2, false);
  ctx.closePath();
  ctx.globalAlpha = alpha;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.stroke();
  ctx.restore();
}

// ─── Preview shape while dragging ─────────────────────────────────────────────
function previewShape(
  ctx: CanvasRenderingContext2D, tool: ToolType,
  color: string, lw: number,
  s: { x: number; y: number }, e: { x: number; y: number },
  filled = false, fillOpacity = 0.4, hatch = "none"
) {
  ctx.save();
  ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = lw; ctx.lineCap = "round";
  const x = Math.min(s.x, e.x), y = Math.min(s.y, e.y);
  const w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
  if (tool === "line") {
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(e.x, e.y); ctx.stroke();
  } else if (tool === "rect") {
    const showSolid = hatch === "solid" || (filled && hatch === "none");
    if (showSolid) { ctx.globalAlpha = fillOpacity; ctx.fillRect(x, y, w, h); ctx.globalAlpha = 1; }
    if (hatch !== "none" && hatch !== "solid") {
      ctx.save(); ctx.beginPath(); ctx.rect(x, y, w, h); ctx.clip();
      drawHatchLines(ctx, hatch, color, 14, x, y, w, h);
      ctx.restore();
    }
    ctx.strokeRect(x, y, w, h);
  } else if (tool === "circle") {
    ctx.beginPath();
    ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
    const showSolidC = hatch === "solid" || (filled && hatch === "none");
    if (showSolidC) { ctx.globalAlpha = fillOpacity; ctx.fill(); ctx.globalAlpha = 1; }
    if (hatch !== "none" && hatch !== "solid") {
      ctx.save(); ctx.beginPath();
      ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
      ctx.clip(); drawHatchLines(ctx, hatch, color, 14, x, y, w, h); ctx.restore();
    }
    ctx.stroke();
  } else if (tool === "cloud") { drawCloud(ctx, x, y, w, h, color, lw, filled ? fillOpacity : undefined); }
  else if (tool === "arrow") {
    ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(e.x, e.y); ctx.stroke();
    const angle = Math.atan2(e.y - s.y, e.x - s.x); const len = 14;
    ctx.beginPath();
    ctx.moveTo(e.x, e.y);
    ctx.lineTo(e.x - len * Math.cos(angle - 0.4), e.y - len * Math.sin(angle - 0.4));
    ctx.lineTo(e.x - len * Math.cos(angle + 0.4), e.y - len * Math.sin(angle + 0.4));
    ctx.closePath(); ctx.fill();
  } else if (tool.startsWith("stamp-")) {
    const col = tool === "stamp-approved" ? "#22C55E" : tool === "stamp-rejected" ? "#EF4444" : "#F59E0B";
    ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.strokeRect(s.x, s.y, 100, 32);
  }
  ctx.restore();
}

// ─── Photo lightbox modal ─────────────────────────────────────────────────────
function PhotoModal({ annotation, onClose }: { annotation: AnnotationData; onClose: () => void }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full mx-4 rounded-xl overflow-hidden shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#0F172A] px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <Camera className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span className="text-sm font-semibold text-slate-200 truncate">
              {annotation.text || "Ảnh hiện trường"}
            </span>
            <span className="text-xs text-slate-500 flex-shrink-0">
              Trang {annotation.pageNumber}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            {annotation.imageUrl && !imgError && (
              <a
                href={annotation.imageUrl}
                download={annotation.text || "photo"}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-3.5 h-3.5" /> Tải xuống
              </a>
            )}
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div className="bg-[#0F172A] flex items-center justify-center" style={{ minHeight: 200, maxHeight: "80vh" }}>
          {!annotation.imageUrl || imgError ? (
            <div className="flex flex-col items-center gap-3 py-16 text-slate-500">
              <Camera className="w-12 h-12 opacity-30" />
              <p className="text-sm">{imgError ? "Không tải được ảnh" : "Không có ảnh"}</p>
            </div>
          ) : (
            <div className="relative w-full flex items-center justify-center">
              {!imgLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-slate-500" />
                </div>
              )}
              <img
                src={annotation.imageUrl}
                alt={annotation.text ?? "Ảnh hiện trường"}
                className="max-w-full object-contain"
                style={{ maxHeight: "80vh", display: imgLoaded ? "block" : "none" }}
                onLoad={() => setImgLoaded(true)}
                onError={() => { setImgError(true); setImgLoaded(true); }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Shape Picker Button ──────────────────────────────────────────────────────
// Replaces 5 individual shape buttons with one compact flyout picker.
function ShapePickerBtn({ tool, setTool }: { tool: ToolType; setTool: (t: ToolType) => void }) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const SHAPES: { id: ShapeToolType; icon: React.ElementType; label: string; shortcut?: string }[] = [
    { id: "line",    icon: Minus,        label: "Đường thẳng",   shortcut: "L" },
    { id: "arrow",   icon: ArrowUpRight, label: "Mũi tên",       shortcut: "A" },
    { id: "rect",    icon: Square,       label: "Hình chữ nhật" },
    { id: "circle",  icon: Circle,       label: "Elip / Tròn" },
    { id: "cloud",   icon: Cloud,        label: "Cloud" },
    { id: "callout", icon: MessageSquare, label: "Callout / Leader" },
    { id: "polygon", icon: Hexagon,      label: "Đa giác (dbl-click đóng)" },
  ];

  const activeShape = SHAPES.find((s) => s.id === tool);
  const BtnIcon = activeShape?.icon ?? Shapes;
  const isActive = !!activeShape;

  const openPicker = () => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPos({ top: rect.top, left: rect.right + 6 });
    setOpen(true);
  };

  const select = (id: ShapeToolType) => { setTool(id); setOpen(false); };

  return (
    <>
      <button
        ref={btnRef}
        onClick={openPicker}
        title={isActive ? activeShape.label : "Hình vẽ (line, arrow, rect, circle, cloud)"}
        className={cn(
          "relative w-9 h-9 rounded-lg flex items-center justify-center transition-all",
          isActive
            ? "bg-sky-500/20 text-sky-400 border border-sky-500/40"
            : "text-slate-500 hover:bg-white/10 hover:text-slate-300"
        )}
      >
        <BtnIcon className="w-4 h-4" />
        {/* Small expand triangle in bottom-right corner */}
        <span
          className="absolute bottom-[3px] right-[3px] border-r border-b border-current opacity-50"
          style={{ width: 5, height: 5, transform: "rotate(-45deg)" }}
        />
      </button>

      {/* Flyout picker */}
      {open && (
        <>
          <div className="fixed inset-0 z-[100]" onClick={() => setOpen(false)} />
          <div
            className="fixed z-[101] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl overflow-hidden"
            style={{ top: pos.top, left: pos.left, minWidth: 160 }}
          >
            {/* Header */}
            <div className="px-3 pt-2.5 pb-1.5 border-b border-white/10">
              <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Hình vẽ</span>
            </div>
            {/* Shape list */}
            <div className="p-1.5 space-y-0.5">
              {SHAPES.map((s) => {
                const Icon = s.icon;
                const isSelected = tool === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => select(s.id)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] transition-colors",
                      isSelected
                        ? "bg-sky-500/20 text-sky-300"
                        : "text-slate-400 hover:bg-white/8 hover:text-slate-200"
                    )}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="flex-1 text-left">{s.label}</span>
                    {s.shortcut && (
                      <kbd className="text-[9px] text-slate-600 font-mono bg-white/5 px-1 rounded">
                        {s.shortcut}
                      </kbd>
                    )}
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

// ─── Hatch swatch — tiny canvas preview of hatch pattern ─────────────────────
function HatchSwatch({ hatch, color, opacity = 0.4 }: { hatch: string; color: string; opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, 20, 20);
    ctx.fillStyle = "#1E293B";
    ctx.fillRect(0, 0, 20, 20);
    if (hatch === "solid") {
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 20, 20);
      ctx.globalAlpha = 1;
    } else {
      ctx.save();
      ctx.beginPath(); ctx.rect(0, 0, 20, 20); ctx.clip();
      drawHatchLines(ctx, hatch, color, 5, 0, 0, 20, 20);
      ctx.restore();
    }
    ctx.strokeStyle = color + "60";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, 20, 20);
  }, [hatch, color, opacity]);
  return <canvas ref={canvasRef} width={20} height={20} className="rounded border border-white/15 flex-shrink-0" />;
}

// ─── Tool button ──────────────────────────────────────────────────────────────
function ToolBtn({ icon: Icon, active, onClick, label, badge, badgeColor }: {
  icon: React.ElementType; active: boolean; onClick: () => void; label: string;
  badge?: number; badgeColor?: string;
}) {
  return (
    <button
      onClick={onClick} title={label}
      className={cn(
        "relative w-9 h-9 rounded-lg flex items-center justify-center transition-all",
        active ? "bg-sky-500/20 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10 hover:text-slate-300"
      )}
    >
      <Icon className="w-4 h-4" />
      {badge !== undefined && badge > 0 && (
        <span className={cn("absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-sky-500 text-white text-[8px] font-bold flex items-center justify-center leading-none", badgeColor && "bg-transparent " + badgeColor)}>
          {badge}
        </span>
      )}
    </button>
  );
}

// ─── Stamp button ─────────────────────────────────────────────────────────────
function StampBtn({ active, onClick, type }: { active: boolean; onClick: () => void; type: "approved" | "rejected" | "review" }) {
  const S = {
    approved: { label: "✓", title: "APPROVED",   active: "bg-green-500/20 text-green-400 border border-green-500/40",   idle: "text-green-500/60 hover:bg-white/10" },
    rejected: { label: "✗", title: "REJECTED",   active: "bg-red-500/20 text-red-400 border border-red-500/40",         idle: "text-red-500/60 hover:bg-white/10" },
    review:   { label: "REV", title: "FOR REVIEW", active: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40", idle: "text-yellow-500/60 hover:bg-white/10" },
  };
  const s = S[type];
  return (
    <button onClick={onClick} title={s.title}
      className={cn("w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-bold transition-colors", active ? s.active : s.idle)}>
      {s.label}
    </button>
  );
}
