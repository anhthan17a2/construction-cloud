module.exports = {

"[project]/components/viewer/annotation-panel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AnnotationPanel": (()=>AnnotationPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
"use client";
;
;
;
const TYPE_LABEL = {
    pen: "Pen",
    highlight: "Highlight",
    arrow: "Arrow",
    rect: "Rectangle",
    circle: "Circle",
    text: "Text",
    stamp: "Stamp"
};
function AnnotationPanel({ annotations, issues, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-56 flex-shrink-0 flex flex-col bg-[#0F172A] border-l border-white/10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3 py-2.5 border-b border-white/10 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold text-slate-300",
                        children: "Annotations"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/annotation-panel.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-6 w-6 text-slate-500 hover:text-white",
                        onClick: onClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/annotation-panel.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/annotation-panel.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2 space-y-1",
                children: [
                    annotations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-slate-500 text-center py-8",
                        children: "No annotations on this page"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/annotation-panel.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this) : annotations.map((ann, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full mt-0.5 flex-shrink-0",
                                    style: {
                                        background: ann.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[11px] font-medium text-slate-300",
                                            children: TYPE_LABEL[ann.type] || ann.type
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        ann.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[10px] text-slate-500 truncate",
                                            children: ann.text
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this),
                                        ann.stampType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[9px] font-bold uppercase text-slate-400",
                                            children: ann.stampType
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)),
                    issues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 pb-1 px-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-semibold text-slate-500 uppercase tracking-wider",
                                    children: "Issues on this sheet"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/annotation-panel.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            issues.map((issue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 p-2 rounded-lg hover:bg-white/5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-slate-300 leading-tight",
                                                    children: issue.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[9px] text-slate-500",
                                                    children: [
                                                        "#",
                                                        issue.number,
                                                        " · ",
                                                        issue.assignee?.name ?? "Unassigned"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/annotation-panel.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, issue.id, true, {
                                    fileName: "[project]/components/viewer/annotation-panel.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/annotation-panel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/viewer/annotation-panel.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/viewer/pdf-viewer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PDFViewer": (()=>PDFViewer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$annotation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/viewer/annotation-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-ssr] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-ssr] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-ssr] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [app-ssr] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-ssr] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const COLORS = [
    "#EF4444",
    "#F59E0B",
    "#22C55E",
    "#3B82F6",
    "#8B5CF6",
    "#F1F5F9"
];
const WIDTHS = [
    1,
    2,
    4
];
const ZOOM_MIN = 0.2;
const ZOOM_MAX = 6;
const ZOOM_FACTOR = 1.15;
const METRIC_SCALES = [
    {
        key: "1:1",
        label: "1:1",
        ratio: 1,
        system: "metric"
    },
    {
        key: "1:2",
        label: "1:2",
        ratio: 2,
        system: "metric"
    },
    {
        key: "1:5",
        label: "1:5",
        ratio: 5,
        system: "metric"
    },
    {
        key: "1:10",
        label: "1:10",
        ratio: 10,
        system: "metric"
    },
    {
        key: "1:20",
        label: "1:20",
        ratio: 20,
        system: "metric"
    },
    {
        key: "1:25",
        label: "1:25",
        ratio: 25,
        system: "metric"
    },
    {
        key: "1:50",
        label: "1:50",
        ratio: 50,
        system: "metric"
    },
    {
        key: "1:100",
        label: "1:100",
        ratio: 100,
        system: "metric"
    },
    {
        key: "1:200",
        label: "1:200",
        ratio: 200,
        system: "metric"
    },
    {
        key: "1:250",
        label: "1:250",
        ratio: 250,
        system: "metric"
    },
    {
        key: "1:500",
        label: "1:500",
        ratio: 500,
        system: "metric"
    },
    {
        key: "1:1000",
        label: "1:1000",
        ratio: 1000,
        system: "metric"
    }
];
// US Architectural: ratio = inch_reality / inch_paper
// e.g., 1/4" = 1'-0"  → 1 paper inch = 48 reality inches
const US_ARCH_SCALES = [
    {
        key: 'us-1/32',
        label: '1/32" = 1\'-0"',
        ratio: 384,
        system: "imperial"
    },
    {
        key: 'us-1/16',
        label: '1/16" = 1\'-0"',
        ratio: 192,
        system: "imperial"
    },
    {
        key: 'us-3/32',
        label: '3/32" = 1\'-0"',
        ratio: 128,
        system: "imperial"
    },
    {
        key: 'us-1/8',
        label: '1/8" = 1\'-0"',
        ratio: 96,
        system: "imperial"
    },
    {
        key: 'us-3/16',
        label: '3/16" = 1\'-0"',
        ratio: 64,
        system: "imperial"
    },
    {
        key: 'us-1/4',
        label: '1/4" = 1\'-0"',
        ratio: 48,
        system: "imperial"
    },
    {
        key: 'us-3/8',
        label: '3/8" = 1\'-0"',
        ratio: 32,
        system: "imperial"
    },
    {
        key: 'us-1/2',
        label: '1/2" = 1\'-0"',
        ratio: 24,
        system: "imperial"
    },
    {
        key: 'us-3/4',
        label: '3/4" = 1\'-0"',
        ratio: 16,
        system: "imperial"
    },
    {
        key: 'us-1',
        label: '1" = 1\'-0"',
        ratio: 12,
        system: "imperial"
    }
];
// US Engineering: 1" = N feet
const US_ENG_SCALES = [
    {
        key: 'us-e10',
        label: "1\" = 10'",
        ratio: 120,
        system: "imperial"
    },
    {
        key: 'us-e20',
        label: "1\" = 20'",
        ratio: 240,
        system: "imperial"
    },
    {
        key: 'us-e30',
        label: "1\" = 30'",
        ratio: 360,
        system: "imperial"
    },
    {
        key: 'us-e40',
        label: "1\" = 40'",
        ratio: 480,
        system: "imperial"
    },
    {
        key: 'us-e50',
        label: "1\" = 50'",
        ratio: 600,
        system: "imperial"
    },
    {
        key: 'us-e60',
        label: "1\" = 60'",
        ratio: 720,
        system: "imperial"
    },
    {
        key: 'us-e100',
        label: "1\" = 100'",
        ratio: 1200,
        system: "imperial"
    }
];
const ALL_PRESETS = [
    ...METRIC_SCALES,
    ...US_ARCH_SCALES,
    ...US_ENG_SCALES
];
// Convert normalized PDF distance to real-world label
// normDist: distance in PDF points at scale=1 (1 point = 1/72 inch on paper)
function calcRealDistance(normDist, preset) {
    const paperInches = normDist / 72; // inches on the physical drawing paper
    if (preset.system === "metric") {
        const realMm = paperInches * 25.4 * preset.ratio;
        if (realMm >= 1000) return `${trimZeros((realMm / 1000).toFixed(3))} m`;
        if (realMm >= 100) return `${trimZeros((realMm / 10).toFixed(2))} cm`;
        if (realMm >= 10) return `${trimZeros(realMm.toFixed(1))} cm`;
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
function trimZeros(s) {
    return s.replace(/\.?0+$/, "");
}
// Format inches as nearest 1/16" fraction for readability
function toArchFraction(inches) {
    const wholeIn = Math.floor(inches);
    const frac = inches - wholeIn;
    // Round to nearest 1/16
    const sixteenths = Math.round(frac * 16);
    if (sixteenths === 0) return `${wholeIn}`;
    if (sixteenths === 16) return `${wholeIn + 1}`;
    const gcd = (a, b)=>b === 0 ? a : gcd(b, a % b);
    const g = gcd(sixteenths, 16);
    return wholeIn > 0 ? `${wholeIn} ${sixteenths / g}/${16 / g}` : `${sixteenths / g}/${16 / g}`;
}
function PDFViewer({ drawing, fileUrl, projectId, currentUserId }) {
    const pdfCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mkCanvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderTaskRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const photoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const photoPinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pdfDoc, setPdfDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [curPage, setCurPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.0);
    const [fitScale, setFitScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1.0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tool, setTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pointer");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#EF4444");
    const [strokeW, setStrokeW] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    // Measurement scale — default 1:100 (common MEP drawing scale)
    const [presetKey, setPresetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1:100");
    const [isCustom, setIsCustom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customScale, setCustomScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [customUnit, setCustomUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("m");
    const activePreset = ALL_PRESETS.find((p)=>p.key === presetKey) ?? METRIC_SCALES[7];
    const [measureStart, setMeasureStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [measurePreview, setMeasurePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoModal, setPhotoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoUploading, setPhotoUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [annotations, setAnnotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(drawing.annotations.map((a)=>{
        try {
            return JSON.parse(a.data);
        } catch  {
            return null;
        }
    }).filter(Boolean));
    const [undoStack, setUndoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showAnnPanel, setShowAnnPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mutable refs for event-listener closures
    const scaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(scale);
    const annRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(annotations);
    const curPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(curPage);
    const toolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(tool);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scaleRef.current = scale;
    }, [
        scale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        annRef.current = annotations;
    }, [
        annotations
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        curPageRef.current = curPage;
    }, [
        curPage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        toolRef.current = tool;
    }, [
        tool
    ]);
    // Drawing state
    const isDrawingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const drawStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const penPtsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Pan state
    const isPanningRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const panStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        mx: 0,
        my: 0,
        sl: 0,
        st: 0
    });
    // ─── Load PDF ──────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fileUrl) return;
        renderTaskRef.current?.cancel();
        renderTaskRef.current = null;
        setIsLoading(true);
        setLoadError(null);
        setPdfDoc(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdfjs$2d$dist$2f$build$2f$pdf$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getDocument({
            url: fileUrl,
            cMapUrl: "https://cdn.jsdelivr.net/npm/pdfjs-dist@latest/cmaps/",
            cMapPacked: true
        }).promise.then((doc)=>{
            setPdfDoc(doc);
            setTotalPages(doc.numPages);
            setIsLoading(false);
        }).catch((e)=>{
            setLoadError(e.message);
            setIsLoading(false);
        });
    }, [
        fileUrl
    ]);
    // ─── Auto-fit ──────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pdfDoc || !containerRef.current) return;
        pdfDoc.getPage(curPage).then((pg)=>{
            const vp = pg.getViewport({
                scale: 1
            });
            const el = containerRef.current;
            const fs = Math.min((el.clientWidth - 80) / vp.width, (el.clientHeight - 80) / vp.height) * 0.95;
            setFitScale(fs);
            setScale(fs);
        });
    }, [
        pdfDoc
    ]);
    // ─── Render page ───────────────────────────────────────────────────────────
    const renderPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (pageNum, sc)=>{
        if (!pdfDoc || !pdfCanvasRef.current || !mkCanvasRef.current) return;
        renderTaskRef.current?.cancel();
        renderTaskRef.current = null;
        const page = await pdfDoc.getPage(pageNum);
        const vp = page.getViewport({
            scale: sc
        });
        const pdfC = pdfCanvasRef.current, mkC = mkCanvasRef.current;
        pdfC.width = mkC.width = Math.round(vp.width);
        pdfC.height = mkC.height = Math.round(vp.height);
        pdfC.style.width = mkC.style.width = `${vp.width}px`;
        pdfC.style.height = mkC.style.height = `${vp.height}px`;
        const ctx = pdfC.getContext("2d");
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, pdfC.width, pdfC.height);
        try {
            const task = page.render({
                canvasContext: ctx,
                viewport: vp
            });
            renderTaskRef.current = task;
            await task.promise;
            renderTaskRef.current = null;
            redrawMarkup(sc);
        } catch (e) {
            if (e?.name === "RenderingCancelledException") return;
            console.error("PDF render error:", e);
        }
    }, [
        pdfDoc
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        renderPage(curPage, scale);
    }, [
        curPage,
        scale,
        pdfDoc
    ]);
    // ─── Redraw markup ─────────────────────────────────────────────────────────
    const redrawMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sc)=>{
        const mkC = mkCanvasRef.current;
        if (!mkC) return;
        const ctx = mkC.getContext("2d");
        ctx.clearRect(0, 0, mkC.width, mkC.height);
        for (const ann of annRef.current){
            if (ann.pageNumber === curPageRef.current) drawAnnotation(ctx, ann, sc);
        }
        // Draw measurement preview
        const ms = measureStartRef.current;
        const mp = measurePreviewRef.current;
        if (ms && mp && toolRef.current === "measurement") {
            drawMeasurementPreview(ctx, ms.x * sc, ms.y * sc, mp.x, mp.y, measureColorRef.current);
        }
    }, []);
    // Keep measurement refs in sync with state/tool
    const measureStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const measurePreviewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const measureColorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(color);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        measureStartRef.current = measureStart;
    }, [
        measureStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        measureColorRef.current = color;
    }, [
        color
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        redrawMarkup(scale);
    }, [
        annotations,
        curPage,
        scale
    ]);
    // Redraw when preview changes (measurement live line)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        measurePreviewRef.current = measurePreview;
        redrawMarkup(scale);
    }, [
        measurePreview,
        scale
    ]);
    // ─── Mouse wheel zoom ──────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        const handler = (e)=>{
            e.preventDefault();
            const oldSc = scaleRef.current;
            const newSc = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, e.deltaY < 0 ? oldSc * ZOOM_FACTOR : oldSc / ZOOM_FACTOR));
            if (Math.abs(newSc - oldSc) < 0.001) return;
            const rect = el.getBoundingClientRect();
            const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
            const px = el.scrollLeft + cx, py = el.scrollTop + cy;
            setScale(newSc);
            requestAnimationFrame(()=>{
                if (!containerRef.current) return;
                containerRef.current.scrollLeft = px * (newSc / oldSc) - cx;
                containerRef.current.scrollTop = py * (newSc / oldSc) - cy;
            });
        };
        el.addEventListener("wheel", handler, {
            passive: false
        });
        return ()=>el.removeEventListener("wheel", handler);
    }, []);
    // ─── Canvas helpers ────────────────────────────────────────────────────────
    const getPos = (e)=>{
        const rect = mkCanvasRef.current.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };
    const N = (v)=>v / scale;
    const Np = (p)=>({
            x: N(p.x),
            y: N(p.y)
        });
    // ─── Pan ───────────────────────────────────────────────────────────────────
    const startPan = (e)=>{
        isPanningRef.current = true;
        panStartRef.current = {
            mx: e.clientX,
            my: e.clientY,
            sl: containerRef.current?.scrollLeft ?? 0,
            st: containerRef.current?.scrollTop ?? 0
        };
    };
    const movePan = (e)=>{
        if (!isPanningRef.current || !containerRef.current) return;
        containerRef.current.scrollLeft = panStartRef.current.sl - (e.clientX - panStartRef.current.mx);
        containerRef.current.scrollTop = panStartRef.current.st - (e.clientY - panStartRef.current.my);
    };
    const endPan = ()=>{
        isPanningRef.current = false;
    };
    // ─── Pointer mode: check photo pin click ───────────────────────────────────
    const checkPhotoPinClick = (pos)=>{
        for (const ann of annotations){
            if (ann.type === "photo" && ann.x != null && ann.pageNumber === curPage) {
                const px = ann.x * scale, py = ann.y * scale;
                if (Math.sqrt((pos.x - px) ** 2 + (pos.y - py) ** 2) < 22) {
                    setPhotoModal(ann);
                    return true;
                }
            }
        }
        return false;
    };
    // ─── Mouse events ──────────────────────────────────────────────────────────
    const onMouseDown = (e)=>{
        if (tool === "pointer") {
            checkPhotoPinClick(getPos(e));
            return;
        }
        if (tool === "pan") {
            startPan(e);
            return;
        }
        if (tool === "photo") {
            handlePhotoPin(getPos(e));
            return;
        }
        if (tool === "measurement") {
            handleMeasureClick(getPos(e));
            return;
        }
        e.preventDefault();
        isDrawingRef.current = true;
        const pos = getPos(e);
        drawStartRef.current = pos;
        if (tool === "pen" || tool === "highlight") penPtsRef.current = [
            pos
        ];
    };
    const onMouseMove = (e)=>{
        if (tool === "pan") {
            movePan(e);
            return;
        }
        // Measurement live preview
        if (tool === "measurement" && measureStart) {
            setMeasurePreview(getPos(e));
            return;
        }
        if (!isDrawingRef.current || tool === "pointer" || tool === "photo" || tool === "measurement") return;
        const pos = getPos(e);
        const s = drawStartRef.current;
        const mkC = mkCanvasRef.current;
        const ctx = mkC.getContext("2d");
        ctx.clearRect(0, 0, mkC.width, mkC.height);
        for (const ann of annotations){
            if (ann.pageNumber === curPage) drawAnnotation(ctx, ann, scale);
        }
        if (tool === "pen") {
            penPtsRef.current.push(pos);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = strokeW;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            const pts = penPtsRef.current;
            ctx.moveTo(pts[0].x, pts[0].y);
            for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
            ctx.stroke();
        } else if (tool === "highlight") {
            penPtsRef.current.push(pos);
            ctx.globalAlpha = 0.35;
            ctx.strokeStyle = color;
            ctx.lineWidth = 20;
            ctx.lineCap = "round";
            ctx.beginPath();
            const pts = penPtsRef.current;
            ctx.moveTo(pts[0].x, pts[0].y);
            for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
        } else {
            previewShape(ctx, tool, color, strokeW, s, pos);
        }
    };
    const onMouseUp = (e)=>{
        if (tool === "pan") {
            endPan();
            return;
        }
        if (!isDrawingRef.current || tool === "pointer" || tool === "photo" || tool === "measurement") return;
        isDrawingRef.current = false;
        const pos = getPos(e);
        const s = drawStartRef.current;
        const base = {
            pageNumber: curPage,
            color,
            strokeWidth: strokeW
        };
        let ann = null;
        if (tool === "pen") {
            const pts = [
                ...penPtsRef.current,
                pos
            ];
            if (pts.length < 2) return;
            ann = {
                ...base,
                type: "pen",
                points: pts.map(Np)
            };
        } else if (tool === "highlight") {
            const pts = [
                ...penPtsRef.current,
                pos
            ];
            if (pts.length < 2) return;
            ann = {
                ...base,
                type: "highlight",
                points: pts.map(Np)
            };
        } else if (tool === "arrow") {
            ann = {
                ...base,
                type: "arrow",
                points: [
                    Np(s),
                    Np(pos)
                ]
            };
        } else if (tool === "rect") {
            const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
            if (w < 4 || h < 4) return;
            ann = {
                ...base,
                type: "rect",
                x: N(Math.min(s.x, pos.x)),
                y: N(Math.min(s.y, pos.y)),
                width: N(w),
                height: N(h)
            };
        } else if (tool === "circle") {
            const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
            if (w < 4 || h < 4) return;
            ann = {
                ...base,
                type: "circle",
                x: N((s.x + pos.x) / 2),
                y: N((s.y + pos.y) / 2),
                width: N(w),
                height: N(h)
            };
        } else if (tool === "cloud") {
            const w = Math.abs(pos.x - s.x), h = Math.abs(pos.y - s.y);
            if (w < 8 || h < 8) return;
            ann = {
                ...base,
                type: "cloud",
                x: N(Math.min(s.x, pos.x)),
                y: N(Math.min(s.y, pos.y)),
                width: N(w),
                height: N(h)
            };
        } else if (tool.startsWith("stamp-")) {
            const stampType = tool.replace("stamp-", "");
            ann = {
                ...base,
                type: "stamp",
                stampType,
                x: N(s.x),
                y: N(s.y),
                width: N(100),
                height: N(32)
            };
        }
        if (ann) {
            setUndoStack((p)=>[
                    ...p,
                    annotations
                ]);
            setAnnotations((p)=>[
                    ...p,
                    ann
                ]);
        }
    };
    const onMouseLeave = (e)=>{
        if (tool === "pan") {
            endPan();
            return;
        }
        if (isDrawingRef.current) onMouseUp(e);
        if (tool === "measurement") setMeasurePreview(null);
    };
    const onDblClick = (e)=>{
        if (tool !== "text") return;
        const pos = getPos(e);
        const text = prompt("Nhập nội dung ghi chú:");
        if (!text?.trim()) return;
        const ann = {
            pageNumber: curPage,
            color,
            strokeWidth: strokeW,
            type: "text",
            x: N(pos.x),
            y: N(pos.y),
            text
        };
        setUndoStack((p)=>[
                ...p,
                annotations
            ]);
        setAnnotations((p)=>[
                ...p,
                ann
            ]);
    };
    // ─── Measurement 2-click flow ──────────────────────────────────────────────
    const handleMeasureClick = (pos)=>{
        if (!measureStart) {
            // First click: set start point (normalized)
            setMeasureStart(Np(pos));
        } else {
            // Second click: complete measurement annotation
            const start = measureStart;
            const end = Np(pos);
            const dx = end.x - start.x, dy = end.y - start.y;
            const distUnits = Math.sqrt(dx * dx + dy * dy);
            const label = isCustom ? `${trimZeros((distUnits * customScale).toFixed(3))} ${customUnit}` : calcRealDistance(distUnits, activePreset);
            const ann = {
                type: "measurement",
                pageNumber: curPage,
                color,
                strokeWidth: strokeW,
                points: [
                    start,
                    end
                ],
                text: label
            };
            setUndoStack((p)=>[
                    ...p,
                    annotations
                ]);
            setAnnotations((p)=>[
                    ...p,
                    ann
                ]);
            setMeasureStart(null);
            setMeasurePreview(null);
        }
    };
    // ─── Photo pin flow ────────────────────────────────────────────────────────
    const handlePhotoPin = (pos)=>{
        photoPinRef.current = Np(pos);
        photoInputRef.current?.click();
    };
    const handlePhotoFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file || !photoPinRef.current) return;
        e.target.value = ""; // reset for re-selection
        setPhotoUploading(true);
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("folder", `field-photos`);
            const res = await fetch("/api/upload/local", {
                method: "POST",
                body: form
            });
            const data = await res.json();
            const pin = photoPinRef.current;
            const ann = {
                type: "photo",
                pageNumber: curPage,
                color,
                strokeWidth: strokeW,
                x: pin.x,
                y: pin.y,
                imageUrl: data.fileUrl,
                text: file.name
            };
            setUndoStack((p)=>[
                    ...p,
                    annotations
                ]);
            setAnnotations((p)=>[
                    ...p,
                    ann
                ]);
        } catch (err) {
            console.error("Photo upload failed:", err);
        } finally{
            setPhotoUploading(false);
        }
    };
    // ─── Annotation actions ────────────────────────────────────────────────────
    const undo = ()=>{
        if (!undoStack.length) return;
        setAnnotations(undoStack[undoStack.length - 1]);
        setUndoStack((s)=>s.slice(0, -1));
    };
    const clearPage = ()=>{
        setUndoStack((p)=>[
                ...p,
                annotations
            ]);
        setAnnotations((p)=>p.filter((a)=>a.pageNumber !== curPage));
    };
    const saveAnnotations = async ()=>{
        setIsSaving(true);
        await fetch(`/api/drawings/${drawing.id}/annotations`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                annotations,
                userId: currentUserId
            })
        });
        setIsSaving(false);
    };
    const zoomBy = (d)=>setScale((s)=>Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s + d)));
    // ─── Keyboard shortcuts ────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKey = (e)=>{
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            if (e.key === "Escape") {
                setMeasureStart(null);
                setMeasurePreview(null);
            }
            if (e.key === "v" || e.key === "V") setTool("pointer");
            if (e.key === "h" || e.key === "H") setTool("pan");
            if (e.key === "p" || e.key === "P") setTool("pen");
            if (e.key === "r" || e.key === "R") setTool("measurement");
            if (e.key === "a" || e.key === "A") setTool("arrow");
            if (e.key === "t" || e.key === "T") setTool("text");
            if (e.key === "z" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                undo();
            }
            if (e.key === "+" || e.key === "=") zoomBy(0.2);
            if (e.key === "-") zoomBy(-0.2);
            if (e.key === "0") setScale(fitScale);
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        fitScale,
        undoStack
    ]);
    // ─── Cursor ────────────────────────────────────────────────────────────────
    const cursor = tool === "pointer" ? "default" : tool === "pan" ? isPanningRef.current ? "grabbing" : "grab" : tool === "measurement" ? "crosshair" : tool === "photo" ? "cell" : "crosshair";
    const photoCount = annotations.filter((a)=>a.pageNumber === curPage && a.type === "photo").length;
    const measCount = annotations.filter((a)=>a.pageNumber === curPage && a.type === "measurement").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full overflow-hidden bg-[#1a1a2e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-3 h-12 bg-[#0F172A] border-b border-white/10 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8 text-slate-400 hover:text-white",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${projectId}/drawings`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 589,
                                columnNumber: 58
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-sky-400 font-mono font-bold",
                                children: drawing.sheetNumber
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 593,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] font-medium text-slate-200 truncate max-w-[200px]",
                                children: drawing.title
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 594,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400",
                        disabled: curPage <= 1,
                        onClick: ()=>setCurPage((p)=>p - 1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 599,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 text-xs text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                className: "h-7 w-10 text-center bg-white/10 border-white/15 text-slate-200 text-xs p-0",
                                value: curPage,
                                onChange: (e)=>{
                                    const v = parseInt(e.target.value);
                                    if (v >= 1 && v <= totalPages) setCurPage(v);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 603,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap",
                                children: [
                                    "/ ",
                                    totalPages || "—"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 608,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400",
                        disabled: curPage >= totalPages,
                        onClick: ()=>setCurPage((p)=>p + 1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 611,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 610,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400",
                        onClick: ()=>zoomBy(-0.2),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__["ZoomOut"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 616,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400 w-10 text-center tabular-nums",
                        children: [
                            Math.round(scale * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400",
                        onClick: ()=>zoomBy(+0.2),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 618,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 618,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400",
                        title: "Fit page (0)",
                        onClick: ()=>setScale(fitScale),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 619,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400 hover:text-white",
                        onClick: undo,
                        title: "Undo (Ctrl+Z)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 623,
                            columnNumber: 134
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-red-400 hover:text-red-300",
                        onClick: clearPage,
                        title: "Xóa trang",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 624,
                            columnNumber: 135
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7", isSaving ? "text-yellow-400" : "text-green-400 hover:text-green-300"),
                        onClick: saveAnnotations,
                        title: "Lưu markup",
                        children: isSaving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-3.5 h-3.5 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 630,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 630,
                            columnNumber: 74
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7 text-slate-400", showAnnPanel && "bg-white/10 text-white"),
                        onClick: ()=>setShowAnnPanel(!showAnnPanel),
                        title: "Danh sách markup",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 632,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 587,
                columnNumber: 7
            }, this),
            tool === "measurement" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 font-medium whitespace-nowrap",
                                children: measureStart ? "Nhấp điểm cuối để hoàn thành  •  Esc để hủy" : "Nhấp điểm đầu để bắt đầu đo khoảng cách"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 whitespace-nowrap",
                                children: "Tỷ lệ bản vẽ:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: isCustom ? "custom" : presetKey,
                                onChange: (e)=>{
                                    if (e.target.value === "custom") {
                                        setIsCustom(true);
                                    } else {
                                        setIsCustom(false);
                                        setPresetKey(e.target.value);
                                    }
                                },
                                className: "h-6 bg-white/10 border border-white/15 rounded px-1.5 text-slate-200 text-xs min-w-[130px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "── Hệ mét (Việt Nam / ISO) ──",
                                        children: METRIC_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.key,
                                                children: p.label
                                            }, p.key, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 673,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 671,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "── Kiến trúc Mỹ (Architectural) ──",
                                        children: US_ARCH_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.key,
                                                children: p.label
                                            }, p.key, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "── Kỹ thuật Mỹ (Engineering) ──",
                                        children: US_ENG_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.key,
                                                children: p.label
                                            }, p.key, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 683,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 681,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                        label: "──────────────────────",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "custom",
                                            children: "Tùy chỉnh..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 687,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            isCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "1 đơn vị ="
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 694,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0.0001",
                                        step: "0.1",
                                        value: customScale,
                                        onChange: (e)=>setCustomScale(parseFloat(e.target.value) || 1),
                                        className: "w-16 h-6 bg-white/10 border border-white/15 rounded px-2 text-slate-200 text-xs text-right"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 695,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: customUnit,
                                        onChange: (e)=>setCustomUnit(e.target.value),
                                        className: "h-6 bg-white/10 border border-white/15 rounded px-1.5 text-slate-200 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "mm",
                                                children: "mm"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 708,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "cm",
                                                children: "cm"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 709,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "m",
                                                children: "m"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ft",
                                                children: "ft"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 711,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "in",
                                                children: "in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 703,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            !isCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 font-mono text-[10px] whitespace-nowrap",
                                children: activePreset.label
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 719,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 655,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, this),
            tool === "photo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                        className: "w-3.5 h-3.5 text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 730,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sky-400 font-medium",
                        children: photoUploading ? "Đang upload ảnh hiện trường..." : `Nhấp vào vị trí trên bản vẽ để ghim ảnh  •  ${photoCount} ảnh trên trang này`
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 731,
                        columnNumber: 11
                    }, this),
                    photoUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-3.5 h-3.5 animate-spin text-sky-400 ml-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 736,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 729,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 flex-shrink-0 bg-[#0F172A] border-r border-white/10 flex flex-col items-center gap-1 py-3 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"],
                                active: tool === "pointer",
                                onClick: ()=>setTool("pointer"),
                                label: "Chọn (V)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 743,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"],
                                active: tool === "pan",
                                onClick: ()=>setTool("pan"),
                                label: "Di chuyển (H)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 744,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 746,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                                active: tool === "pen",
                                onClick: ()=>setTool("pen"),
                                label: "Vẽ tự do (P)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"],
                                active: tool === "highlight",
                                onClick: ()=>setTool("highlight"),
                                label: "Highlight"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                                active: tool === "arrow",
                                onClick: ()=>setTool("arrow"),
                                label: "Mũi tên (A)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 750,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
                                active: tool === "rect",
                                onClick: ()=>setTool("rect"),
                                label: "Hình chữ nhật"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
                                active: tool === "circle",
                                onClick: ()=>setTool("circle"),
                                label: "Hình tròn"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 752,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
                                active: tool === "cloud",
                                onClick: ()=>setTool("cloud"),
                                label: "Cloud"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 753,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
                                active: tool === "text",
                                onClick: ()=>setTool("text"),
                                label: "Văn bản (T)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"],
                                active: tool === "measurement",
                                onClick: ()=>{
                                    setTool("measurement");
                                    setMeasureStart(null);
                                },
                                label: "Đo khoảng cách (R)",
                                badge: measCount > 0 ? measCount : undefined
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
                                active: tool === "photo",
                                onClick: ()=>setTool("photo"),
                                label: "Ghim ảnh hiện trường",
                                badge: photoCount > 0 ? photoCount : undefined,
                                badgeColor: "text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 768,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 777,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-approved",
                                onClick: ()=>setTool("stamp-approved"),
                                type: "approved"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 780,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-rejected",
                                onClick: ()=>setTool("stamp-rejected"),
                                type: "rejected"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 781,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-review",
                                onClick: ()=>setTool("stamp-review"),
                                type: "review"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this),
                            COLORS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setColor(c),
                                    title: c,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 rounded-full transition-all", color === c ? "scale-125 ring-2 ring-white/50 ring-offset-1 ring-offset-[#0F172A]" : "hover:scale-110"),
                                    style: {
                                        background: c
                                    }
                                }, c, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 788,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 795,
                                columnNumber: 11
                            }, this),
                            WIDTHS.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStrokeW(w),
                                    title: `Nét ${w}px`,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center w-9 h-7 rounded transition-colors", strokeW === w ? "bg-white/15" : "hover:bg-white/10 opacity-50"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 rounded-full bg-slate-300",
                                        style: {
                                            height: `${w + 1}px`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this)
                                }, w, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 799,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 742,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "flex-1 overflow-auto bg-[#1E293B]",
                        style: {
                            userSelect: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-full min-w-full flex items-center justify-center p-8",
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-5 h-5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: "Đang tải PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 812,
                                    columnNumber: 15
                                }, this),
                                loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3 text-slate-400 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-10 h-10 text-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-400",
                                            children: "Không tải được PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs",
                                            children: loadError
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 821,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 818,
                                    columnNumber: 15
                                }, this),
                                !fileUrl && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center gap-3 text-slate-500 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            className: "w-12 h-12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 826,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-medium",
                                            children: "Chưa có file PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 827,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: "Upload revision để xem bản vẽ."
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 825,
                                    columnNumber: 15
                                }, this),
                                !isLoading && !loadError && fileUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative shadow-2xl flex-shrink-0",
                                    style: {
                                        lineHeight: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: pdfCanvasRef
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 833,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                            ref: mkCanvasRef,
                                            className: "absolute inset-0",
                                            style: {
                                                cursor
                                            },
                                            onMouseDown: onMouseDown,
                                            onMouseMove: onMouseMove,
                                            onMouseUp: onMouseUp,
                                            onMouseLeave: onMouseLeave,
                                            onDoubleClick: onDblClick
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 834,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 810,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this),
                    showAnnPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$annotation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnnotationPanel"], {
                        annotations: annotations.filter((a)=>a.pageNumber === curPage),
                        issues: drawing.issues,
                        onClose: ()=>setShowAnnPanel(false)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 851,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 740,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: photoInputRef,
                type: "file",
                accept: "image/*",
                capture: "environment",
                className: "hidden",
                onChange: handlePhotoFileChange
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, this),
            photoModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoModal, {
                annotation: photoModal,
                onClose: ()=>setPhotoModal(null)
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 871,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 585,
        columnNumber: 5
    }, this);
}
// ─── Draw annotation (coords normalized to scale=1, multiply by sc) ──────────
function drawAnnotation(ctx, ann, sc) {
    ctx.save();
    const S = (v)=>v * sc;
    const Sp = (p)=>({
            x: S(p.x),
            y: S(p.y)
        });
    ctx.strokeStyle = ann.color;
    ctx.fillStyle = ann.color;
    ctx.lineWidth = ann.strokeWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (ann.type === "pen" && ann.points?.length) {
        const pts = ann.points.map(Sp);
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
    } else if (ann.type === "highlight" && ann.points?.length) {
        const pts = ann.points.map(Sp);
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
        ctx.globalAlpha = 1;
    } else if (ann.type === "arrow" && ann.points?.length === 2) {
        const [s, e] = ann.points.map(Sp);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        const angle = Math.atan2(e.y - s.y, e.x - s.x);
        const len = Math.max(10, ann.strokeWidth * 4 + 8);
        ctx.beginPath();
        ctx.moveTo(e.x, e.y);
        ctx.lineTo(e.x - len * Math.cos(angle - 0.4), e.y - len * Math.sin(angle - 0.4));
        ctx.lineTo(e.x - len * Math.cos(angle + 0.4), e.y - len * Math.sin(angle + 0.4));
        ctx.closePath();
        ctx.fill();
    } else if (ann.type === "rect" && ann.x != null) {
        ctx.strokeRect(S(ann.x), S(ann.y), S(ann.width), S(ann.height));
    } else if (ann.type === "circle" && ann.x != null) {
        ctx.beginPath();
        ctx.ellipse(S(ann.x), S(ann.y), S(ann.width) / 2, S(ann.height) / 2, 0, 0, Math.PI * 2);
        ctx.stroke();
    } else if (ann.type === "cloud" && ann.x != null) {
        drawCloud(ctx, S(ann.x), S(ann.y), S(ann.width), S(ann.height), ann.color, ann.strokeWidth);
    } else if (ann.type === "text" && ann.text && ann.x != null) {
        ctx.font = `${Math.max(12, ann.strokeWidth * 5 + 10)}px sans-serif`;
        ctx.fillText(ann.text, S(ann.x), S(ann.y));
    } else if (ann.type === "stamp" && ann.x != null) {
        const label = ann.stampType === "approved" ? "APPROVED" : ann.stampType === "rejected" ? "REJECTED" : "FOR REVIEW";
        const col = ann.stampType === "approved" ? "#22C55E" : ann.stampType === "rejected" ? "#EF4444" : "#F59E0B";
        const [sx, sy, sw, sh] = [
            S(ann.x),
            S(ann.y),
            S(ann.width),
            S(ann.height)
        ];
        ctx.strokeStyle = col;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(sx, sy, sw, sh, 4);
        ctx.stroke();
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.12;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = col;
        ctx.font = `bold ${Math.max(9, sh * 0.42)}px monospace`;
        ctx.textAlign = "center";
        ctx.fillText(label, sx + sw / 2, sy + sh * 0.65);
        ctx.textAlign = "left";
    } else if (ann.type === "measurement" && ann.points?.length === 2) {
        drawMeasurementAnnotation(ctx, ann.points[0].x * sc, ann.points[0].y * sc, ann.points[1].x * sc, ann.points[1].y * sc, ann.text ?? "", ann.color, ann.strokeWidth);
    } else if (ann.type === "photo" && ann.x != null) {
        drawPhotoPin(ctx, S(ann.x), S(ann.y), ann.color);
    }
    ctx.restore();
}
// ─── Measurement annotation rendering ────────────────────────────────────────
function drawMeasurementAnnotation(ctx, x1, y1, x2, y2, label, color, lw) {
    ctx.save();
    // Dashed measurement line
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(1, lw);
    ctx.setLineDash([
        6,
        3
    ]);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Endpoint dots
    ctx.fillStyle = color;
    for (const [ex, ey] of [
        [
            x1,
            y1
        ],
        [
            x2,
            y2
        ]
    ]){
        ctx.beginPath();
        ctx.arc(ex, ey, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    // Tick marks perpendicular to line
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const perp = angle + Math.PI / 2;
    const tickLen = 8;
    for (const [tx, ty] of [
        [
            x1,
            y1
        ],
        [
            x2,
            y2
        ]
    ]){
        ctx.beginPath();
        ctx.moveTo(tx + Math.cos(perp) * tickLen, ty + Math.sin(perp) * tickLen);
        ctx.lineTo(tx - Math.cos(perp) * tickLen, ty - Math.sin(perp) * tickLen);
        ctx.stroke();
    }
    // Distance badge at midpoint
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const fs = 11;
    ctx.font = `bold ${fs}px monospace`;
    const tw = ctx.measureText(label).width;
    const pad = 5;
    const bw = tw + pad * 2, bh = fs + pad * 2;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.roundRect(mx - bw / 2, my - bh / 2, bw, bh, 4);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, mx, my);
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
    ctx.restore();
}
// ─── Measurement live preview (canvas coords, not normalized) ─────────────────
function drawMeasurementPreview(ctx, x1, y1, x2, y2, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.8;
    ctx.setLineDash([
        5,
        3
    ]);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Start dot
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x1, y1, 4, 0, Math.PI * 2);
    ctx.fill();
    // Live distance preview
    const dx = x2 - x1, dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy).toFixed(1);
    ctx.font = "bold 10px monospace";
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.9;
    const label = `${dist} px`;
    const tw = ctx.measureText(label).width;
    ctx.fillText(label, (x1 + x2) / 2 - tw / 2, (y1 + y2) / 2 - 6);
    ctx.restore();
}
// ─── Photo pin rendering ──────────────────────────────────────────────────────
function drawPhotoPin(ctx, x, y, color) {
    ctx.save();
    const r = 14; // pin circle radius
    // Drop shadow
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 6;
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
    ctx.lineWidth = 2;
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
// ─── Cloud annotation ─────────────────────────────────────────────────────────
function drawCloud(ctx, x, y, w, h, color, lw) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.fillStyle = color + "18";
    const topN = Math.max(2, Math.round(w / 24));
    const rightN = Math.max(2, Math.round(h / 24));
    const tw = w / topN;
    const rh = h / rightN;
    ctx.beginPath();
    for(let i = 0; i < topN; i++)ctx.arc(x + tw * i + tw / 2, y, tw / 2, Math.PI, 0, false);
    for(let i = 0; i < rightN; i++)ctx.arc(x + w, y + rh * i + rh / 2, rh / 2, -Math.PI / 2, Math.PI / 2, false);
    for(let i = topN - 1; i >= 0; i--)ctx.arc(x + tw * i + tw / 2, y + h, tw / 2, 0, Math.PI, false);
    for(let i = rightN - 1; i >= 0; i--)ctx.arc(x, y + rh * i + rh / 2, rh / 2, Math.PI / 2, -Math.PI / 2, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
// ─── Preview shape while dragging ─────────────────────────────────────────────
function previewShape(ctx, tool, color, lw, s, e) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    const x = Math.min(s.x, e.x), y = Math.min(s.y, e.y);
    const w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
    if (tool === "rect") {
        ctx.strokeRect(x, y, w, h);
    } else if (tool === "circle") {
        ctx.beginPath();
        ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
        ctx.stroke();
    } else if (tool === "cloud") {
        drawCloud(ctx, x, y, w, h, color, lw);
    } else if (tool === "arrow") {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        const angle = Math.atan2(e.y - s.y, e.x - s.x);
        const len = 14;
        ctx.beginPath();
        ctx.moveTo(e.x, e.y);
        ctx.lineTo(e.x - len * Math.cos(angle - 0.4), e.y - len * Math.sin(angle - 0.4));
        ctx.lineTo(e.x - len * Math.cos(angle + 0.4), e.y - len * Math.sin(angle + 0.4));
        ctx.closePath();
        ctx.fill();
    } else if (tool.startsWith("stamp-")) {
        const col = tool === "stamp-approved" ? "#22C55E" : tool === "stamp-rejected" ? "#EF4444" : "#F59E0B";
        ctx.strokeStyle = col;
        ctx.lineWidth = 2;
        ctx.strokeRect(s.x, s.y, 100, 32);
    }
    ctx.restore();
}
// ─── Photo lightbox modal ─────────────────────────────────────────────────────
function PhotoModal({ annotation, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-3xl max-h-[90vh] w-full mx-4",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-[#0F172A] rounded-t-xl px-4 py-3 border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4 text-sky-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-slate-200",
                                    children: "Ảnh hiện trường"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 13
                                }, this),
                                annotation.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400 font-mono",
                                    children: annotation.text
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1150,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                annotation.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: annotation.imageUrl,
                                    download: annotation.text,
                                    className: "flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1161,
                                            columnNumber: 17
                                        }, this),
                                        " Tải ảnh"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-slate-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1165,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                    lineNumber: 1145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#1E293B] rounded-b-xl overflow-hidden flex items-center justify-center min-h-[200px] max-h-[80vh]",
                    children: annotation.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: annotation.imageUrl,
                        alt: annotation.text ?? "Ảnh hiện trường",
                        className: "max-w-full max-h-[80vh] object-contain",
                        loading: "lazy"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1173,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-500 text-sm py-12",
                        children: "Không có ảnh"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1180,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                    lineNumber: 1171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/viewer/pdf-viewer.tsx",
            lineNumber: 1143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 1142,
        columnNumber: 5
    }, this);
}
// ─── Tool button ──────────────────────────────────────────────────────────────
function ToolBtn({ icon: Icon, active, onClick, label, badge, badgeColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: label,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-9 h-9 rounded-lg flex items-center justify-center transition-all", active ? "bg-sky-500/20 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10 hover:text-slate-300"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1201,
                columnNumber: 7
            }, this),
            badge !== undefined && badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-sky-500 text-white text-[8px] font-bold flex items-center justify-center leading-none", badgeColor && "bg-transparent " + badgeColor),
                children: badge
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1203,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 1194,
        columnNumber: 5
    }, this);
}
// ─── Stamp button ─────────────────────────────────────────────────────────────
function StampBtn({ active, onClick, type }) {
    const S = {
        approved: {
            label: "✓",
            title: "APPROVED",
            active: "bg-green-500/20 text-green-400 border border-green-500/40",
            idle: "text-green-500/60 hover:bg-white/10"
        },
        rejected: {
            label: "✗",
            title: "REJECTED",
            active: "bg-red-500/20 text-red-400 border border-red-500/40",
            idle: "text-red-500/60 hover:bg-white/10"
        },
        review: {
            label: "REV",
            title: "FOR REVIEW",
            active: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40",
            idle: "text-yellow-500/60 hover:bg-white/10"
        }
    };
    const s = S[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        title: s.title,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-bold transition-colors", active ? s.active : s.idle),
        children: s.label
    }, void 0, false, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 1220,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(dashboard)/projects/[id]/drawings/[drawingId]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_08b399._.js.map