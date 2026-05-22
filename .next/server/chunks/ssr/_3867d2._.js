module.exports = {

"[project]/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
"use client";
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Group;
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Value;
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 26,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger.displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ScrollUpButton, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 37,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ScrollUpButton.displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ScrollDownButton, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 47,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 46,
        columnNumber: 3
    }, this));
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ScrollDownButton.displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Viewport, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 68,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 71,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 57,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 56,
        columnNumber: 3
    }, this));
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Label, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 81,
        columnNumber: 3
    }, this));
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Label.displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Item, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 98,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 97,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 102,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, this));
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Item.displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Separator, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, this));
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Separator.displayName;
;
}}),
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
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Dialog": (()=>Dialog),
    "DialogClose": (()=>DialogClose),
    "DialogContent": (()=>DialogContent),
    "DialogDescription": (()=>DialogDescription),
    "DialogFooter": (()=>DialogFooter),
    "DialogHeader": (()=>DialogHeader),
    "DialogOverlay": (()=>DialogOverlay),
    "DialogPortal": (()=>DialogPortal),
    "DialogTitle": (()=>DialogTitle),
    "DialogTrigger": (()=>DialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger;
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Portal;
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Close;
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Overlay, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Overlay.displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Close, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 44,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 45,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, this);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Title.displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 78,
        columnNumber: 3
    }, this));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Description.displayName;
;
}}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tabs": (()=>Tabs),
    "TabsContent": (()=>TabsContent),
    "TabsList": (()=>TabsList),
    "TabsTrigger": (()=>TabsTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tabs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Root;
const TabsList = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.List, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
TabsList.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.List.displayName;
const TabsTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
TabsTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Trigger.displayName;
const TabsContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this));
TabsContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.Content.displayName;
;
}}),
"[project]/components/viewer/export-share-modal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ExportShareModal": (()=>ExportShareModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-ssr] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-ssr] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/qr-code.js [app-ssr] (ecmascript) <export default as QrCode>");
"use client";
;
;
;
;
;
;
// ── Helpers ──────────────────────────────────────────────────────────────────
function compositeCanvases(pdfC, mkC) {
    const out = document.createElement("canvas");
    out.width = pdfC.width;
    out.height = pdfC.height;
    const ctx = out.getContext("2d");
    ctx.drawImage(pdfC, 0, 0);
    ctx.drawImage(mkC, 0, 0);
    return out;
}
function downloadCanvas(canvas, filename) {
    canvas.toBlob((blob)=>{
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }, "image/png");
}
function openPrintWindow(pages, title) {
    const win = window.open("", "_blank", "width=1100,height=850");
    if (!win) {
        alert("Trình duyệt đã chặn cửa sổ mới. Vui lòng cho phép pop-up.");
        return;
    }
    const html = pages.map(({ src, w, h })=>`<div class="page" style="width:${w}px;height:${h}px"><img src="${src}" width="${w}" height="${h}"/></div>`).join("\n");
    win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  @page{margin:0;size:auto}
  body{background:#fff}
  .page{display:block;page-break-after:always}
  .page:last-child{page-break-after:avoid}
  img{display:block;max-width:100%}
</style>
</head>
<body>
${html}
<script>window.onload=function(){setTimeout(function(){window.print()},600)}</script>
</body>
</html>`);
    win.document.close();
}
function ExportShareModal({ open, onClose, drawing, projectId, pdfDoc, annotations, pdfCanvasRef, mkCanvasRef, fitScale, curPage, totalPages, drawAnnotation }) {
    const [exportProgress, setExportProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exportStatus, setExportStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [shareStatus, setShareStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [qrVisible, setQrVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Current page helpers ────────────────────────────────────────────────
    const getComposite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const pdfC = pdfCanvasRef.current;
        const mkC = mkCanvasRef.current;
        if (!pdfC || !mkC) return null;
        return compositeCanvases(pdfC, mkC);
    }, [
        pdfCanvasRef,
        mkCanvasRef
    ]);
    const downloadCurrentPng = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const c = getComposite();
        if (!c) return;
        downloadCanvas(c, `${drawing.sheetNumber}_trang${curPage}_markup.png`);
    }, [
        getComposite,
        drawing.sheetNumber,
        curPage
    ]);
    const printCurrent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const c = getComposite();
        if (!c) return;
        openPrintWindow([
            {
                src: c.toDataURL("image/png"),
                w: c.width,
                h: c.height
            }
        ], `${drawing.sheetNumber} - ${drawing.title}`);
    }, [
        getComposite,
        drawing
    ]);
    // ── All pages export ────────────────────────────────────────────────────
    const printAllPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!pdfDoc) return;
        setExportProgress(0);
        setExportStatus("Đang render trang 1...");
        const renderSc = Math.max(fitScale, 1.2); // reasonable quality
        const pages = [];
        for(let pn = 1; pn <= totalPages; pn++){
            setExportStatus(`Đang render trang ${pn} / ${totalPages}…`);
            setExportProgress(pn / totalPages);
            const page = await pdfDoc.getPage(pn);
            const vp = page.getViewport({
                scale: renderSc
            });
            const w = Math.round(vp.width);
            const h = Math.round(vp.height);
            // Render PDF to temp canvas
            const pdfC = document.createElement("canvas");
            pdfC.width = w;
            pdfC.height = h;
            const pdfCtx = pdfC.getContext("2d");
            pdfCtx.fillStyle = "#fff";
            pdfCtx.fillRect(0, 0, w, h);
            await page.render({
                canvasContext: pdfCtx,
                viewport: vp
            }).promise;
            // Draw annotations for this page on top
            const pageAnns = annotations.filter((a)=>a.pageNumber === pn);
            for (const ann of pageAnns){
                drawAnnotation(pdfCtx, ann, renderSc);
            }
            pages.push({
                src: pdfC.toDataURL("image/png"),
                w,
                h
            });
        }
        setExportProgress(null);
        setExportStatus("");
        openPrintWindow(pages, `${drawing.sheetNumber} - ${drawing.title}`);
    }, [
        pdfDoc,
        annotations,
        fitScale,
        totalPages,
        drawing,
        drawAnnotation
    ]);
    // ── Share helpers ────────────────────────────────────────────────────────
    const copyLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
            setShareStatus("copied");
            setTimeout(()=>setShareStatus("idle"), 2500);
        } catch  {
            prompt("Copy link này:", url);
        }
    }, []);
    const nativeShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${drawing.sheetNumber} — ${drawing.title}`,
                    text: `Xem bản vẽ ${drawing.sheetNumber} trên ConstructionCloud`,
                    url
                });
                setShareStatus("shared");
                setTimeout(()=>setShareStatus("idle"), 2500);
            } catch  {}
        } else {
            copyLink();
        }
    }, [
        drawing,
        copyLink
    ]);
    const shareUrl = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "";
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-md bg-[#0F172A] border-white/15 text-slate-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        className: "text-slate-200 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "w-4 h-4 text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/export-share-modal.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            "Xuất & Chia sẻ"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                exportProgress !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3 py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-8 h-8 animate-spin text-sky-400"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-300",
                            children: exportStatus
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-white/10 rounded-full h-2 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-sky-500 transition-all duration-300 rounded-full",
                                style: {
                                    width: `${Math.round(exportProgress * 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/export-share-modal.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: [
                                Math.round(exportProgress * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                    lineNumber: 220,
                    columnNumber: 11
                }, this),
                exportProgress === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                    defaultValue: "export",
                    className: "mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                            className: "w-full bg-white/5 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "export",
                                    className: "flex-1 data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-300 text-slate-400 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-3.5 h-3.5 mr-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        " Xuất PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                    value: "share",
                                    className: "flex-1 data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-300 text-slate-400 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "w-3.5 h-3.5 mr-1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        " Chia sẻ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "export",
                            className: "mt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 mb-2",
                                    children: [
                                        "Trang hiện tại: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-300 font-mono",
                                            children: [
                                                drawing.sheetNumber,
                                                " — trang ",
                                                curPage,
                                                "/",
                                                totalPages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500 uppercase tracking-wider font-semibold",
                                            children: "Trang hiện tại"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: downloadCurrentPng,
                                            className: "w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 transition-all text-left group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-lg bg-sky-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/25",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                        className: "w-4 h-4 text-sky-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-slate-200",
                                                            children: "Tải xuống PNG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-slate-500",
                                                            children: "Hình ảnh chất lượng cao kèm markup"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: printCurrent,
                                            className: "w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 transition-all text-left group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-lg bg-green-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                        className: "w-4 h-4 text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-slate-200",
                                                            children: "In / Xuất PDF trang này"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-slate-500",
                                                            children: "Mở hộp thoại in → Lưu dưới dạng PDF"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 266,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-slate-500 uppercase tracking-wider font-semibold",
                                            children: "Tất cả trang"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: printAllPages,
                                            className: "w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all text-left group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-500/25",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-4 h-4 text-violet-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-slate-200",
                                                            children: [
                                                                "Xuất toàn bộ ",
                                                                totalPages,
                                                                " trang"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] text-slate-500",
                                                            children: "Render từng trang + markup → in PDF đa trang"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-slate-600 italic pt-1",
                                    children: '* Để lưu PDF: trong hộp thoại in, chọn "Save as PDF" hoặc "Microsoft Print to PDF"'
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: "share",
                            className: "mt-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 mb-2",
                                    children: "Chia sẻ link trực tiếp đến bản vẽ này"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "w-3.5 h-3.5 text-slate-500 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-slate-400 truncate flex-1 font-mono",
                                            children: shareUrl
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: copyLink,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all", shareStatus === "copied" ? "bg-green-500/20 border-green-500/40 text-green-400" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-sky-500/40 hover:text-sky-300"),
                                            children: shareStatus === "copied" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Đã copy!"
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 25
                                                    }, this),
                                                    " Copy link"
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 318,
                                            columnNumber: 17
                                        }, this),
                                        typeof navigator !== "undefined" && "share" in navigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: nativeShare,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-medium transition-all", shareStatus === "shared" ? "bg-sky-500/20 border-sky-500/40 text-sky-400" : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-sky-500/40 hover:text-sky-300"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this),
                                                shareStatus === "shared" ? "Đã chia sẻ" : "Chia sẻ"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 333,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10 pt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setQrVisible((v)=>!v),
                                            className: "flex items-center gap-2 text-[11px] text-slate-500 hover:text-slate-300 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$qr$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__QrCode$3e$__["QrCode"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this),
                                                qrVisible ? "Ẩn QR Code" : "Hiện QR Code"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, this),
                                        qrVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: qrApiUrl,
                                                    alt: "QR Code",
                                                    width: 160,
                                                    height: 160,
                                                    className: "rounded-lg bg-white p-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-600",
                                                    children: "Quét QR để mở trên điện thoại"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/export-share-modal.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/viewer/export-share-modal.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/viewer/export-share-modal.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/viewer/export-share-modal.tsx",
        lineNumber: 209,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$annotation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/viewer/annotation-panel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$export$2d$share$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/viewer/export-share-modal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomOut$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zoom-out.js [app-ssr] (ecmascript) <export default as ZoomOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-ssr] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-ssr] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-ssr] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.js [app-ssr] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-ssr] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-ssr] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hexagon.js [app-ssr] (ecmascript) <export default as Hexagon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-ssr] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-ssr] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [app-ssr] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/highlighter.js [app-ssr] (ecmascript) <export default as Highlighter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-ssr] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shapes.js [app-ssr] (ecmascript) <export default as Shapes>");
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
;
;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
}
const SHAPE_TOOLS = [
    "line",
    "arrow",
    "rect",
    "circle",
    "cloud",
    "callout",
    "polygon"
];
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
const DISPLAY_UNIT_LABELS = {
    auto: "Auto",
    mm: "mm",
    cm: "cm",
    m: "m",
    km: "km",
    in: "in",
    ft: "ft",
    "ft-in": "ft' in\"",
    yd: "yd"
};
// Format measurement with an explicit unit (overrides auto-select logic)
function formatDist(normDist, preset, unit, custom) {
    if (custom) return `${trimZeros((normDist * custom.scale).toFixed(3))} ${custom.unit}`;
    const paperInches = normDist / 72;
    const realInches = paperInches * preset.ratio;
    switch(unit){
        case "auto":
            return calcRealDistance(normDist, preset);
        case "mm":
            return `${trimZeros((realInches * 25.4).toFixed(2))} mm`;
        case "cm":
            return `${trimZeros((realInches * 2.54).toFixed(3))} cm`;
        case "m":
            return `${trimZeros((realInches * 0.0254).toFixed(4))} m`;
        case "km":
            return `${trimZeros((realInches * 0.0000254).toFixed(6))} km`;
        case "in":
            return `${trimZeros(realInches.toFixed(3))}"`;
        case "ft":
            return `${trimZeros((realInches / 12).toFixed(4))}'`;
        case "ft-in":
            {
                const ft = Math.floor(realInches / 12);
                const inch = realInches - ft * 12;
                const frac = toArchFraction(inch);
                if (ft === 0) return `${frac}"`;
                if (inch < 0.02) return `${ft}'-0"`;
                return `${ft}'-${frac}"`;
            }
        case "yd":
            return `${trimZeros((realInches / 36).toFixed(4))} yd`;
    }
}
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
// Snap cursor to nearest N-degree angle from start (AutoCAD ortho/polar)
function constrainOrtho(start, cursor, step = 45) {
    const dx = cursor.x - start.x;
    const dy = cursor.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 1) return cursor;
    const deg = Math.atan2(dy, dx) * (180 / Math.PI);
    const snapped = Math.round(deg / step) * step;
    const rad = snapped * (Math.PI / 180);
    return {
        x: start.x + dist * Math.cos(rad),
        y: start.y + dist * Math.sin(rad)
    };
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
    // Ortho mode (Shift key) + live measurement display
    const [isShiftDown, setIsShiftDown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveMeasure, setLiveMeasure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isShiftDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Explicit display unit (overrides auto-unit in calcRealDistance)
    const [displayUnit, setDisplayUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("auto");
    // Refs for scale state (used in useCallback redrawMarkup to avoid stale closure)
    const isCustomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isCustom);
    const activePresetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activePreset);
    const customScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(customScale);
    const customUnitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(customUnit);
    const displayUnitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("auto");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isCustomRef.current = isCustom;
    }, [
        isCustom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        activePresetRef.current = activePreset;
    }, [
        activePreset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        customScaleRef.current = customScale;
    }, [
        customScale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        displayUnitRef.current = displayUnit;
    }, [
        displayUnit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        customUnitRef.current = customUnit;
    }, [
        customUnit
    ]);
    const [measureStart, setMeasureStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [measurePreview, setMeasurePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoModal, setPhotoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [photoUploading, setPhotoUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Bluebeam-style: fill, hatch, callout, polygon, inline text input
    const [isFilled, setIsFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shapeOpacity, setShapeOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0.4); // fill opacity 0–1
    const [hatch, setHatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("none");
    const [calloutStart, setCalloutStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [polygonPts, setPolygonPts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // normalized
    const [polyPreview, setPolyPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // canvas px
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [textValue, setTextValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Text formatting
    const [fontSize, setFontSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(14);
    const [fontBold, setFontBold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fontItalic, setFontItalic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fontFamily, setFontFamily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("sans-serif");
    // ── Selection / drag state ────────────────────────────────────────────────
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pointerCursor, setPointerCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("default");
    const [annotations, setAnnotations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(drawing.annotations.map((a)=>{
        try {
            return JSON.parse(a.data);
        } catch  {
            return null;
        }
    }).filter(Boolean));
    const [undoStack, setUndoStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showAnnPanel, setShowAnnPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExportShare, setShowExportShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-save status: idle → pending (debounce) → saving → saved → idle
    const [saveStatus, setSaveStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const autoSaveTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isSavingRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false); // prevent concurrent saves
    const isInitialLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true); // skip first render
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
    // Refs for new Bluebeam features (used in callbacks/redrawMarkup)
    const colorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(color);
    const strokeWRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(strokeW);
    const isFilledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isFilled);
    const shapeOpacityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(shapeOpacity);
    const hatchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(hatch);
    const calloutStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const polygonPtsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]); // mutable, updated synchronously
    const polyPreviewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textAreaRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editingIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    // Drag/select refs (all mutable — no React re-renders during drag)
    const selectedIdxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDragging2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const dragStartRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // canvas px
    const dragDeltaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        dx: 0,
        dy: 0
    }); // normalized
    const dragSnapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasDraggedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const dragHandleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // null = move, set = resize/vertex
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        colorRef.current = color;
    }, [
        color
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        strokeWRef.current = strokeW;
    }, [
        strokeW
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isFilledRef.current = isFilled;
    }, [
        isFilled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        shapeOpacityRef.current = shapeOpacity;
    }, [
        shapeOpacity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        hatchRef.current = hatch;
    }, [
        hatch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        calloutStartRef.current = calloutStart;
    }, [
        calloutStart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        polyPreviewRef.current = polyPreview;
    }, [
        polyPreview
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
        const selIdx = selectedIdxRef.current;
        const delta = dragDeltaRef.current;
        const dragging = isDragging2Ref.current && hasDraggedRef.current;
        for(let _i = 0; _i < annRef.current.length; _i++){
            const ann = annRef.current[_i];
            if (ann.pageNumber !== curPageRef.current) continue;
            if (editingIndexRef.current === _i) continue; // hide while being edited
            // If this annotation is being dragged, draw it at its live position
            const displayAnn = dragging && selIdx === _i && dragSnapshotRef.current ? dragHandleRef.current ? applyHandleDrag(dragSnapshotRef.current, dragHandleRef.current, delta.dx, delta.dy) : moveAnnotation(dragSnapshotRef.current, delta.dx, delta.dy) : ann;
            if (displayAnn.type === "measurement" && displayAnn.points?.length === 2) {
                if (displayAnn.labelLocked) {
                    // User manually set label — draw as-is, no recompute
                    drawAnnotation(ctx, displayAnn, sc);
                } else {
                    const [p1, p2] = displayAnn.points;
                    const normDist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
                    // Per-measurement unit takes priority; fall back to global
                    const unit = displayAnn.measureUnit ?? displayUnitRef.current;
                    const label = isCustomRef.current ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}` : formatDist(normDist, activePresetRef.current, unit);
                    drawAnnotation(ctx, {
                        ...displayAnn,
                        text: label
                    }, sc);
                }
            } else {
                drawAnnotation(ctx, displayAnn, sc);
            }
        }
        // Draw selection box over the selected annotation
        if (selIdx !== null && selIdx < annRef.current.length && annRef.current[selIdx].pageNumber === curPageRef.current) {
            const selAnn = dragging && dragSnapshotRef.current ? dragHandleRef.current ? applyHandleDrag(dragSnapshotRef.current, dragHandleRef.current, delta.dx, delta.dy) : moveAnnotation(dragSnapshotRef.current, delta.dx, delta.dy) : annRef.current[selIdx];
            drawSelectionBox(ctx, selAnn, sc);
        }
        // Draw first-click indicator (before cursor moves)
        const ms = measureStartRef.current;
        const mp = measurePreviewRef.current;
        if (ms && !mp && toolRef.current === "measurement") {
            ctx.save();
            ctx.fillStyle = measureColorRef.current;
            ctx.strokeStyle = measureColorRef.current;
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(ms.x * sc, ms.y * sc, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 0.35;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.beginPath();
            ctx.arc(ms.x * sc, ms.y * sc, 13, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();
        }
        // Draw measurement preview (with real-world label + ortho indicator)
        if (ms && mp && toolRef.current === "measurement") {
            const sx = ms.x * sc, sy = ms.y * sc;
            const ex = mp.x, ey = mp.y;
            const normDist = Math.sqrt((ex / sc - ms.x) ** 2 + (ey / sc - ms.y) ** 2);
            const realLabel = isCustomRef.current ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}` : formatDist(normDist, activePresetRef.current, displayUnitRef.current);
            // isOrtho = !shift (ortho is now DEFAULT; shift = free)
            drawMeasurementPreview(ctx, sx, sy, ex, ey, measureColorRef.current, realLabel, !isShiftDownRef.current);
        }
        // Draw polygon-in-progress preview
        const ppPts = polygonPtsRef.current;
        const ppCur = polyPreviewRef.current;
        if (ppPts.length > 0 && ppCur && toolRef.current === "polygon") {
            const col = colorRef.current;
            const lw = strokeWRef.current;
            ctx.save();
            ctx.strokeStyle = col;
            ctx.fillStyle = col;
            ctx.lineWidth = lw;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            const cPts = ppPts.map((p)=>({
                    x: p.x * sc,
                    y: p.y * sc
                }));
            // Solid lines between placed points
            ctx.setLineDash([]);
            ctx.globalAlpha = 0.85;
            ctx.beginPath();
            ctx.moveTo(cPts[0].x, cPts[0].y);
            for(let i = 1; i < cPts.length; i++)ctx.lineTo(cPts[i].x, cPts[i].y);
            ctx.lineTo(ppCur.x, ppCur.y);
            ctx.stroke();
            // Faint closing preview line
            if (cPts.length >= 2) {
                ctx.setLineDash([
                    5,
                    8
                ]);
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.moveTo(ppCur.x, ppCur.y);
                ctx.lineTo(cPts[0].x, cPts[0].y);
                ctx.stroke();
                ctx.setLineDash([]);
            }
            // Dots at placed points
            ctx.globalAlpha = 1;
            for (const pt of cPts){
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, Math.max(3, lw + 1), 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
        // Draw callout-in-progress preview (leader line from tip to cursor)
        const cs = calloutStartRef.current;
        const cCur = polyPreviewRef.current;
        if (cs && cCur && toolRef.current === "callout") {
            ctx.save();
            ctx.strokeStyle = colorRef.current;
            ctx.fillStyle = colorRef.current;
            ctx.lineWidth = strokeWRef.current;
            ctx.setLineDash([
                4,
                4
            ]);
            ctx.globalAlpha = 0.75;
            ctx.beginPath();
            ctx.moveTo(cs.x * sc, cs.y * sc);
            ctx.lineTo(cCur.x, cCur.y);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(cs.x * sc, cs.y * sc, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
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
    // Redraw when preview changes (measurement live line, polygon preview, callout preview)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        measurePreviewRef.current = measurePreview;
        redrawMarkup(scale);
    }, [
        measurePreview,
        scale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        polyPreviewRef.current = polyPreview;
        redrawMarkup(scale);
    }, [
        polyPreview,
        scale
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        redrawMarkup(scale);
    }, [
        polygonPts,
        scale
    ]);
    // Focus inline text input when it appears
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (textInput) setTimeout(()=>textAreaRef2.current?.focus(), 0);
    }, [
        textInput
    ]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        // Single reusable temp canvas — allocated once, reused across wheel ticks.
        const tmpCanvas = document.createElement("canvas");
        let debounceTimer = null;
        const handler = (e)=>{
            e.preventDefault();
            const oldSc = scaleRef.current;
            const newSc = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, e.deltaY < 0 ? oldSc * ZOOM_FACTOR : oldSc / ZOOM_FACTOR));
            if (Math.abs(newSc - oldSc) < 0.001) return;
            const ratio = newSc / oldSc;
            const rect = el.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;
            const px = el.scrollLeft + cx;
            const py = el.scrollTop + cy;
            const pdfC = pdfCanvasRef.current;
            const mkC = mkCanvasRef.current;
            if (pdfC && mkC && pdfC.width > 0 && pdfC.height > 0) {
                const newW = Math.round(pdfC.width * ratio);
                const newH = Math.round(pdfC.height * ratio);
                // ── Fast-scale the PDF canvas using a temp canvas ──────────────────
                // Resize temp canvas to current PDF canvas size (only when needed)
                if (tmpCanvas.width !== pdfC.width || tmpCanvas.height !== pdfC.height) {
                    tmpCanvas.width = pdfC.width;
                    tmpCanvas.height = pdfC.height;
                }
                const tmpCtx = tmpCanvas.getContext("2d");
                tmpCtx.drawImage(pdfC, 0, 0); // copy current pixels
                pdfC.width = newW;
                pdfC.height = newH; // resize (clears canvas)
                pdfC.style.width = `${newW}px`;
                pdfC.style.height = `${newH}px`;
                const pdfCtx = pdfC.getContext("2d");
                pdfCtx.imageSmoothingEnabled = true;
                pdfCtx.imageSmoothingQuality = "high";
                pdfCtx.drawImage(tmpCanvas, 0, 0, newW, newH); // draw scaled back
                // ── Resize markup canvas + immediately redraw annotations sharply ──
                mkC.width = newW;
                mkC.height = newH;
                mkC.style.width = `${newW}px`;
                mkC.style.height = `${newH}px`;
            }
            // Update scale ref (no React re-render yet)
            scaleRef.current = newSc;
            // Annotations are redrawn at new scale (Canvas 2D, very fast)
            redrawMarkup(newSc);
            // Correct scroll so the point under the cursor stays fixed
            el.scrollLeft = px * ratio - cx;
            el.scrollTop = py * ratio - cy;
            // ── Debounce: trigger full PDF re-render 250 ms after last wheel tick ──
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(()=>{
                debounceTimer = null;
                setScale(scaleRef.current); // → useEffect → renderPage → crisp PDF
            }, 250);
        };
        el.addEventListener("wheel", handler, {
            passive: false
        });
        return ()=>{
            el.removeEventListener("wheel", handler);
            if (debounceTimer) clearTimeout(debounceTimer);
        };
    }, []); // deps empty — handler reads only refs + stable callbacks
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
    // The pin is drawn with tip at (x, y) and camera-circle at (x, y - PIN_R).
    // We test against the circle center so clicks on the icon always register.
    const checkPhotoPinClick = (pos)=>{
        const PIN_R = 14; // must match drawPhotoPin
        for (const ann of annotations){
            if (ann.type === "photo" && ann.x != null && ann.pageNumber === curPage) {
                const cx = ann.x * scale;
                const cy = ann.y * scale - PIN_R; // circle centre
                if (Math.sqrt((pos.x - cx) ** 2 + (pos.y - cy) ** 2) < PIN_R + 8) {
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
            const pos = getPos(e);
            // 1. Check handles of currently selected annotation (highest priority)
            if (selectedIdxRef.current !== null) {
                const selAnn = annotations[selectedIdxRef.current];
                if (selAnn?.pageNumber === curPage) {
                    const handles = getAnnotationHandles(selAnn, scale);
                    const hitHandle = hitTestHandle(pos, handles);
                    if (hitHandle) {
                        // Start handle drag (resize / vertex move)
                        isDragging2Ref.current = true;
                        dragHandleRef.current = hitHandle;
                        dragStartRef2.current = pos;
                        dragDeltaRef.current = {
                            dx: 0,
                            dy: 0
                        };
                        dragSnapshotRef.current = {
                            ...selAnn
                        };
                        hasDraggedRef.current = false;
                        setPointerCursor(hitHandle.cursor);
                        return;
                    }
                }
            }
            // 2. Photo pins
            if (checkPhotoPinClick(pos)) return;
            // 3. Hit-test annotations back-to-front
            let hitIdx = null;
            for(let i = annotations.length - 1; i >= 0; i--){
                const ann = annotations[i];
                if (ann.pageNumber !== curPage) continue;
                if (ann.type === "photo") continue;
                if (hitTestAnnotation(pos, ann, scale)) {
                    hitIdx = i;
                    break;
                }
            }
            if (hitIdx !== null) {
                selectedIdxRef.current = hitIdx;
                setSelectedIndex(hitIdx);
                isDragging2Ref.current = true;
                dragHandleRef.current = null; // move, not resize
                dragStartRef2.current = pos;
                dragDeltaRef.current = {
                    dx: 0,
                    dy: 0
                };
                dragSnapshotRef.current = {
                    ...annotations[hitIdx]
                };
                hasDraggedRef.current = false;
                setPointerCursor("move");
            } else {
                if (selectedIdxRef.current !== null) {
                    selectedIdxRef.current = null;
                    setSelectedIndex(null);
                    redrawMarkup(scale);
                }
                isDragging2Ref.current = false;
                dragHandleRef.current = null;
            }
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
        if (tool === "callout") {
            handleCalloutClick(getPos(e));
            return;
        }
        if (tool === "polygon") {
            handlePolygonClick(getPos(e));
            return;
        }
        if (tool === "text") {
            handleTextClick(getPos(e));
            return;
        } // single-click
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
        if (tool === "pointer") {
            const pos = getPos(e);
            // ── Drag: move selected annotation in real time (no React re-renders) ──
            if (isDragging2Ref.current && dragStartRef2.current !== null) {
                const dx = (pos.x - dragStartRef2.current.x) / scaleRef.current;
                const dy = (pos.y - dragStartRef2.current.y) / scaleRef.current;
                dragDeltaRef.current = {
                    dx,
                    dy
                };
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
                    if (hh) {
                        setPointerCursor(hh.cursor);
                        setNearPhotoPin(false);
                        return;
                    }
                }
            }
            // 2. Photo pins / annotations
            const PIN_R = 14;
            let nearPhoto = false, nearAnn = false;
            for (const ann of annotations){
                if (ann.pageNumber !== curPage) continue;
                if (ann.type === "photo" && ann.x != null) {
                    const cx = ann.x * scale, cy = ann.y * scale - PIN_R;
                    if (Math.hypot(pos.x - cx, pos.y - cy) < PIN_R + 8) {
                        nearPhoto = true;
                        break;
                    }
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
                const startCanvas = {
                    x: ms.x * scale,
                    y: ms.y * scale
                };
                const constrained = isShiftDownRef.current ? rawPos // Shift = tự do góc
                 : constrainOrtho(startCanvas, rawPos, 90); // mặc định = ngang/dọc
                setMeasurePreview(constrained);
                // Live measurement display in toolbar
                const normDist = Math.sqrt((constrained.x / scale - ms.x) ** 2 + (constrained.y / scale - ms.y) ** 2);
                const realLabel = isCustomRef.current ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}` : formatDist(normDist, activePresetRef.current, displayUnitRef.current);
                const angleDeg = Math.atan2(constrained.y - startCanvas.y, constrained.x - startCanvas.x) * 180 / Math.PI;
                setLiveMeasure({
                    label: realLabel,
                    angle: +((angleDeg + 360) % 360).toFixed(1)
                });
            }
            return;
        }
        if (!isDrawingRef.current || tool === "photo") return;
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
            previewShape(ctx, tool, color, strokeW, s, pos, isFilled, shapeOpacity, hatch);
        }
    };
    const onMouseUp = (e)=>{
        if (tool === "pan") {
            endPan();
            return;
        }
        // ── Pointer mode: commit drag ──────────────────────────────────────────
        if (tool === "pointer") {
            if (isDragging2Ref.current) {
                const { dx, dy } = dragDeltaRef.current;
                if (hasDraggedRef.current && selectedIdxRef.current !== null && (dx !== 0 || dy !== 0)) {
                    const idx = selectedIdxRef.current;
                    const snap = dragSnapshotRef.current;
                    const handle = dragHandleRef.current;
                    const newAnn = handle ? applyHandleDrag(snap, handle, dx, dy) : moveAnnotation(snap, dx, dy);
                    setUndoStack((p)=>[
                            ...p,
                            annotations
                        ]);
                    setAnnotations((prev)=>prev.map((a, i)=>i === idx ? newAnn : a));
                }
                isDragging2Ref.current = false;
                dragStartRef2.current = null;
                dragSnapshotRef.current = null;
                dragHandleRef.current = null;
                dragDeltaRef.current = {
                    dx: 0,
                    dy: 0
                };
                hasDraggedRef.current = false;
                setPointerCursor("default");
            }
            return;
        }
        if (!isDrawingRef.current || tool === "photo") return;
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
        } else if (tool === "line") {
            ann = {
                ...base,
                type: "line",
                points: [
                    Np(s),
                    Np(pos)
                ]
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
                height: N(h),
                filled: isFilled,
                fillOpacity: shapeOpacity,
                hatch: hatch !== "none" ? hatch : undefined
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
                height: N(h),
                filled: isFilled,
                fillOpacity: shapeOpacity,
                hatch: hatch !== "none" ? hatch : undefined
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
                height: N(h),
                filled: isFilled,
                fillOpacity: shapeOpacity
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
        if (tool === "pointer") {
            if (isDragging2Ref.current) onMouseUp(e); // commit any drag in progress
            setPointerCursor("default");
            return;
        }
        if (isDrawingRef.current) onMouseUp(e);
        if (tool === "measurement") setMeasurePreview(null);
        if (tool === "polygon" || tool === "callout") setPolyPreview(null);
    };
    const onDblClick = (e)=>{
        const pos = getPos(e);
        // Close polygon (remove extra point added by the double-click's first mousedown)
        if (tool === "polygon") {
            const pts = polygonPtsRef.current;
            if (pts.length >= 3) {
                const finalPts = pts.slice(0, -1); // remove last (duplicate from dbl-click mousedown)
                const toUse = finalPts.length >= 3 ? finalPts : pts;
                const ann = {
                    type: "polygon",
                    pageNumber: curPage,
                    color,
                    strokeWidth: strokeW,
                    points: toUse,
                    filled: isFilled,
                    fillOpacity: shapeOpacity,
                    hatch: hatch !== "none" ? hatch : undefined
                };
                setUndoStack((p)=>[
                        ...p,
                        annotations
                    ]);
                setAnnotations((p)=>[
                        ...p,
                        ann
                    ]);
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
                const rect = mkCanvasRef.current.getBoundingClientRect();
                const vx = Math.min(rect.left + ann.x * scale + 4, window.innerWidth - 220);
                const vy = Math.min(rect.top + ann.y * scale + 4, window.innerHeight - 140);
                openTextEditor(vx, vy, ann.x, ann.y, ann.pageNumber, {
                    editIndex: textIdx,
                    prefill: ann.text ?? "",
                    ann
                });
                return;
            }
            // Measurement annotation — manually edit the label
            for(let i = annotations.length - 1; i >= 0; i--){
                const ann = annotations[i];
                if (ann.type !== "measurement" || ann.pageNumber !== curPage || !ann.points) continue;
                if (hitTestAnnotation(pos, ann, scale)) {
                    selectedIdxRef.current = i;
                    setSelectedIndex(i);
                    const mx = (ann.points[0].x + ann.points[1].x) / 2 * scale;
                    const my = (ann.points[0].y + ann.points[1].y) / 2 * scale;
                    const rect = mkCanvasRef.current.getBoundingClientRect();
                    const vx = Math.min(rect.left + mx + 4, window.innerWidth - 240);
                    const vy = Math.min(rect.top + my - 40, window.innerHeight - 140);
                    openTextEditor(vx, vy, (ann.points[0].x + ann.points[1].x) / 2, my / scale, ann.pageNumber, {
                        editIndex: i,
                        prefill: ann.text ?? "",
                        ann
                    });
                    return;
                }
            }
            // Callout annotation — re-edit the label text
            for(let i = annotations.length - 1; i >= 0; i--){
                const ann = annotations[i];
                if (ann.type !== "callout" || ann.pageNumber !== curPage || !ann.points) continue;
                const anchor = ann.points[1];
                const fs = (ann.fontSize ?? 14) * scale;
                const tw = (ann.text?.length ?? 0) * fs * 0.58 + 12;
                const ax = anchor.x * scale, ay = anchor.y * scale;
                if (pos.x >= ax - 6 && pos.x <= ax + tw + 6 && pos.y >= ay - fs - 6 && pos.y <= ay + fs + 6) {
                    const rect = mkCanvasRef.current.getBoundingClientRect();
                    const vx = Math.min(rect.left + ax + 4, window.innerWidth - 220);
                    const vy = Math.min(rect.top + ay - fs - 4, window.innerHeight - 140);
                    openTextEditor(vx, vy, anchor.x, anchor.y, ann.pageNumber, {
                        editIndex: i,
                        prefill: ann.text ?? "",
                        ann: {
                            ...ann,
                            calloutTip: undefined
                        }
                    });
                    return;
                }
            }
            return;
        }
    };
    // ─── Measurement 2-click flow ──────────────────────────────────────────────
    const handleMeasureClick = (pos)=>{
        if (!measureStart) {
            // First click: set start point (normalized)
            setMeasureStart(Np(pos));
            setLiveMeasure(null);
        } else {
            // Second click: apply ortho constraint if Shift held, then commit
            const start = measureStart;
            const startCanvas = {
                x: start.x * scale,
                y: start.y * scale
            };
            const finalCanvas = isShiftDownRef.current ? pos // Shift = tự do góc
             : constrainOrtho(startCanvas, pos, 90); // mặc định = ngang/dọc
            const end = Np(finalCanvas);
            const dx = end.x - start.x, dy = end.y - start.y;
            const distUnits = Math.sqrt(dx * dx + dy * dy);
            const label = isCustom ? `${trimZeros((distUnits * customScale).toFixed(3))} ${customUnit}` : formatDist(distUnits, activePreset, displayUnit);
            const ann = {
                type: "measurement",
                pageNumber: curPage,
                color,
                strokeWidth: strokeW,
                points: [
                    start,
                    end
                ],
                text: label,
                // Store the unit used so this measurement stays in its unit even if global changes
                measureUnit: isCustom ? undefined : displayUnit !== "auto" ? displayUnit : undefined
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
            setLiveMeasure(null);
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
        e.target.value = "";
        setPhotoUploading(true);
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("folder", "field-photos");
            const res = await fetch("/api/upload/local", {
                method: "POST",
                body: form
            });
            if (!res.ok) throw new Error("Upload failed");
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
            // Update local state
            const newAnnotations = [
                ...annRef.current,
                ann
            ];
            setUndoStack((p)=>[
                    ...p,
                    annRef.current
                ]);
            setAnnotations(newAnnotations);
            // Auto-save immediately so the photo appears in the Photos module
            // without requiring the user to click "Save"
            await fetch(`/api/drawings/${drawing.id}/annotations`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    annotations: newAnnotations,
                    userId: currentUserId
                })
            });
        } catch (err) {
            console.error("Photo upload failed:", err);
        } finally{
            setPhotoUploading(false);
        }
    };
    // ─── Find text annotation at canvas position (for double-click edit) ────────
    const findTextAnn = (pos)=>{
        for(let i = annotations.length - 1; i >= 0; i--){
            const ann = annotations[i];
            if (ann.pageNumber !== curPage) continue;
            if (ann.type === "text" && ann.x != null) {
                const fs = (ann.fontSize ?? 14) * scale;
                const tx = ann.x * scale;
                const ty = ann.y * scale;
                const approxW = Math.max(60, (ann.text?.length ?? 4) * fs * 0.58);
                if (pos.x >= tx - 4 && pos.x <= tx + approxW + 8 && pos.y >= ty - fs - 4 && pos.y <= ty + fs * 0.35 + 4) return i;
            }
        }
        return null;
    };
    // ─── Open text editor (new or edit) ─────────────────────────────────────────
    const openTextEditor = (vx, vy, nx, ny, pageNumber, opts)=>{
        if (opts?.ann) {
            // Pre-load formatting from the annotation being edited
            setFontSize(opts.ann.fontSize ?? 14);
            setFontBold(opts.ann.fontStyle === "bold" || opts.ann.fontStyle === "bold-italic");
            setFontItalic(opts.ann.fontStyle === "italic" || opts.ann.fontStyle === "bold-italic");
            setFontFamily(opts.ann.fontFamily ?? "sans-serif");
        }
        editingIndexRef.current = opts?.editIndex;
        setTextInput({
            vx,
            vy,
            nx,
            ny,
            pageNumber,
            editIndex: opts?.editIndex,
            calloutTip: opts?.calloutTip
        });
        setTextValue(opts?.prefill ?? "");
        redrawMarkup(scaleRef.current); // hide the annotation being edited
    };
    // ─── Text single-click flow ───────────────────────────────────────────────
    const handleTextClick = (pos)=>{
        const rect = mkCanvasRef.current.getBoundingClientRect();
        const vx = Math.min(rect.left + pos.x + 4, window.innerWidth - 220);
        const vy = Math.min(rect.top + pos.y + 4, window.innerHeight - 110);
        openTextEditor(vx, vy, N(pos.x), N(pos.y), curPage);
    };
    // ─── Callout 2-click flow ─────────────────────────────────────────────────
    const handleCalloutClick = (pos)=>{
        if (!calloutStart) {
            const tip = Np(pos);
            calloutStartRef.current = tip;
            setCalloutStart(tip);
        } else {
            // Second click: show inline text input at this position
            const rect = mkCanvasRef.current.getBoundingClientRect();
            setTextInput({
                vx: rect.left + pos.x,
                vy: rect.top + pos.y,
                nx: N(pos.x),
                ny: N(pos.y),
                pageNumber: curPage,
                calloutTip: calloutStart
            });
            setTextValue("");
            calloutStartRef.current = null;
            setCalloutStart(null);
            setPolyPreview(null);
        }
    };
    // ─── Polygon click ────────────────────────────────────────────────────────
    const handlePolygonClick = (pos)=>{
        const newPt = Np(pos);
        const pts = polygonPtsRef.current;
        // Skip near-duplicate points (prevents double-click from adding 2 identical points)
        if (pts.length > 0) {
            const last = pts[pts.length - 1];
            if (Math.abs(last.x - newPt.x) < 4 / scaleRef.current && Math.abs(last.y - newPt.y) < 4 / scaleRef.current) return;
        }
        polygonPtsRef.current = [
            ...pts,
            newPt
        ];
        setPolygonPts([
            ...polygonPtsRef.current
        ]);
        redrawMarkup(scaleRef.current);
    };
    // Keep a ref for the latest textValue so onBlur always reads the newest text
    const textValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        textValueRef.current = textValue;
    }, [
        textValue
    ]);
    // ─── Commit inline text input ─────────────────────────────────────────────
    const commitTextInput = ()=>{
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
        const resolvedStyle = fontBold && fontItalic ? "bold-italic" : fontBold ? "bold" : fontItalic ? "italic" : "normal";
        if (snap.editIndex !== undefined) {
            // ── Update existing annotation ──
            setUndoStack((p)=>[
                    ...p,
                    annotations
                ]);
            setAnnotations((prev)=>prev.map((a, i)=>{
                    if (i !== snap.editIndex) return a;
                    // Measurement: only update text + lock it (don't touch font settings)
                    if (a.type === "measurement") return {
                        ...a,
                        text: trimmed,
                        labelLocked: true
                    };
                    // Text/callout: update text + font
                    return {
                        ...a,
                        text: trimmed,
                        fontSize,
                        fontStyle: resolvedStyle,
                        fontFamily
                    };
                }));
        } else if (snap.calloutTip) {
            // ── New callout ──
            const ann = {
                type: "callout",
                pageNumber: snap.pageNumber,
                color,
                strokeWidth: strokeW,
                points: [
                    snap.calloutTip,
                    {
                        x: snap.nx,
                        y: snap.ny
                    }
                ],
                text: trimmed,
                fontSize,
                fontStyle: resolvedStyle,
                fontFamily
            };
            setUndoStack((p)=>[
                    ...p,
                    annotations
                ]);
            setAnnotations((p)=>[
                    ...p,
                    ann
                ]);
        } else {
            // ── New text ──
            const ann = {
                type: "text",
                pageNumber: snap.pageNumber,
                color,
                strokeWidth: strokeW,
                x: snap.nx,
                y: snap.ny,
                text: trimmed,
                fontSize,
                fontStyle: resolvedStyle,
                fontFamily
            };
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
    // ─── Annotation actions ────────────────────────────────────────────────────
    const undo = ()=>{
        if (!undoStack.length) return;
        setAnnotations(undoStack[undoStack.length - 1]);
        setUndoStack((s)=>s.slice(0, -1));
    };
    // ── Delete selected annotation ───────────────────────────────────────────
    const deleteSelected = ()=>{
        if (selectedIdxRef.current === null) return;
        const idx = selectedIdxRef.current;
        setUndoStack((p)=>[
                ...p,
                annotations
            ]);
        setAnnotations((p)=>p.filter((_, i)=>i !== idx));
        selectedIdxRef.current = null;
        setSelectedIndex(null);
    };
    // ── Core save (uses refs for latest data) ─────────────────────────────────
    const performSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isSavingRef2.current) return;
        isSavingRef2.current = true;
        setIsSaving(true);
        setSaveStatus("saving");
        const toSave = annRef.current.map((ann)=>{
            if (ann.type === "measurement" && ann.points?.length === 2 && !ann.labelLocked) {
                const [p1, p2] = ann.points;
                const normDist = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
                const unit = ann.measureUnit ?? displayUnitRef.current;
                const label = isCustomRef.current ? `${trimZeros((normDist * customScaleRef.current).toFixed(3))} ${customUnitRef.current}` : formatDist(normDist, activePresetRef.current, unit);
                return {
                    ...ann,
                    text: label
                };
            }
            return ann;
        });
        try {
            await fetch(`/api/drawings/${drawing.id}/annotations`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    annotations: toSave,
                    userId: currentUserId
                })
            });
            setSaveStatus("saved");
            setTimeout(()=>setSaveStatus("idle"), 2500);
        } catch  {
            setSaveStatus("idle");
        } finally{
            isSavingRef2.current = false;
            setIsSaving(false);
        }
    }, []);
    // ── Auto-save: debounce 2 s after every annotation change ─────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialLoad.current) {
            isInitialLoad.current = false;
            return;
        }
        setSaveStatus("pending");
        if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
        autoSaveTimer.current = setTimeout(performSave, 2000);
        return ()=>{
            if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
        };
    }, [
        annotations
    ]);
    // ── Manual force-save ─────────────────────────────────────────────────────
    const saveAnnotations = async ()=>{
        if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
        await performSave();
    };
    const zoomBy = (d)=>setScale((s)=>Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, s + d)));
    // ─── Keyboard shortcuts + Shift tracking ─────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKeyDown = (e)=>{
            // Track Shift for ortho (no input-field guard — need it globally)
            if (e.key === "Shift") {
                isShiftDownRef.current = true;
                setIsShiftDown(true);
            }
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            if (e.key === "Escape") {
                setMeasureStart(null);
                setMeasurePreview(null);
                setLiveMeasure(null);
                calloutStartRef.current = null;
                setCalloutStart(null);
                polygonPtsRef.current = [];
                setPolygonPts([]);
                setPolyPreview(null);
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
            if (e.key === "z" && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                undo();
            }
            if (e.key === "+" || e.key === "=") zoomBy(0.2);
            if (e.key === "-") zoomBy(-0.2);
            if (e.key === "0") setScale(fitScale);
        };
        const onKeyUp = (e)=>{
            if (e.key === "Shift") {
                isShiftDownRef.current = false;
                setIsShiftDown(false);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, [
        fitScale,
        undoStack
    ]);
    // ─── Cursor ────────────────────────────────────────────────────────────────
    const [nearPhotoPin, setNearPhotoPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cursor = tool === "pointer" ? pointerCursor : tool === "pan" ? isPanningRef.current ? "grabbing" : "grab" : tool === "measurement" ? "crosshair" : tool === "photo" ? "cell" : "crosshair";
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
                                lineNumber: 1388,
                                columnNumber: 58
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1388,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1390,
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
                                lineNumber: 1392,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] font-medium text-slate-200 truncate max-w-[200px]",
                                children: drawing.title
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1393,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1395,
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
                            lineNumber: 1399,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1398,
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
                                lineNumber: 1402,
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
                                lineNumber: 1407,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1401,
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
                            lineNumber: 1410,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1409,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1412,
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
                            lineNumber: 1415,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1415,
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
                        lineNumber: 1416,
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
                            lineNumber: 1417,
                            columnNumber: 109
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1417,
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
                            lineNumber: 1418,
                            columnNumber: 136
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 px-2 h-7 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors",
                        title: "Tỷ lệ bản vẽ và đơn vị hiển thị",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                className: "w-3 h-3 text-yellow-400/80 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: isCustom ? "custom" : presetKey,
                                onValueChange: (val)=>{
                                    if (val === "custom") setIsCustom(true);
                                    else {
                                        setIsCustom(false);
                                        setPresetKey(val);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-5 w-[76px] border-0 bg-transparent p-0 text-[10px] text-slate-300 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1433,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl max-h-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Hệ mét — VN / ISO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 17
                                                    }, this),
                                                    METRIC_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1439,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1442,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Kiến trúc Mỹ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1444,
                                                        columnNumber: 17
                                                    }, this),
                                                    US_ARCH_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1446,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1443,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1449,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Kỹ thuật Mỹ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 17
                                                    }, this),
                                                    US_ENG_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1453,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1456,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "custom",
                                                    className: "text-xs text-yellow-400 focus:bg-yellow-500/20 focus:text-yellow-300 pl-3",
                                                    children: "Tùy chỉnh..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                    lineNumber: 1458,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1425,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-4 bg-white/15"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: displayUnit,
                                onValueChange: (v)=>setDisplayUnit(v),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-5 w-[52px] border-0 bg-transparent p-0 text-[10px] text-sky-300 focus:ring-0 focus:ring-offset-0 [&>svg]:hidden font-mono",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1472,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                    className: "text-[10px] text-slate-400 uppercase tracking-wider px-2 py-1.5",
                                                    children: "Đơn vị mặc định"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                    lineNumber: 1476,
                                                    columnNumber: 17
                                                }, this),
                                                Object.entries(DISPLAY_UNIT_LABELS).map(([val, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: val,
                                                        className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300",
                                                        children: lbl
                                                    }, val, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1478,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1475,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1486,
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
                            lineNumber: 1489,
                            columnNumber: 134
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1489,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        title: selectedIndex !== null ? "Xóa annotation đã chọn (Delete)" : "Chọn một annotation để xóa",
                        onClick: deleteSelected,
                        disabled: selectedIndex === null,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 w-7 transition-colors", selectedIndex !== null ? "text-red-400 hover:text-red-300 hover:bg-red-500/10" : "text-slate-600 cursor-not-allowed opacity-40"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1502,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveAnnotations,
                        title: "Lưu ngay (auto-save mỗi 2 giây)",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-7 px-2 rounded text-[10px] font-medium flex items-center gap-1.5 transition-colors", saveStatus === "saving" && "text-yellow-400", saveStatus === "pending" && "text-slate-400 hover:text-slate-200", saveStatus === "saved" && "text-green-400", saveStatus === "idle" && "text-slate-500 hover:text-slate-300"),
                        children: [
                            saveStatus === "saving" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3 h-3 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1517,
                                        columnNumber: 42
                                    }, this),
                                    " Lưu..."
                                ]
                            }, void 0, true),
                            saveStatus === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1518,
                                        columnNumber: 42
                                    }, this),
                                    " Chờ lưu"
                                ]
                            }, void 0, true),
                            saveStatus === "saved" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 42
                                    }, this),
                                    " Đã lưu"
                                ]
                            }, void 0, true),
                            saveStatus === "idle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 42
                                    }, this),
                                    " Lưu"
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1522,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400 hover:text-sky-300",
                        onClick: ()=>setShowExportShare(true),
                        title: "Xuất PDF / Chia sẻ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1531,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1525,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-7 w-7 text-slate-400 hover:text-sky-300",
                        onClick: ()=>setShowExportShare(true),
                        title: "Chia sẻ bản vẽ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 1539,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1533,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-white/10 mx-1"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1542,
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
                            lineNumber: 1548,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1543,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1386,
                columnNumber: 7
            }, this),
            [
                "rect",
                "circle",
                "cloud",
                "polygon"
            ].includes(tool) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 shrink-0",
                                children: "Fill:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (hatch !== "none") {
                                        setHatch("none");
                                        setIsFilled(false);
                                    } else {
                                        setHatch("solid");
                                        setIsFilled(true);
                                    }
                                },
                                title: hatch !== "none" ? "Tắt fill" : "Bật fill",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 rounded border-2 transition-all flex-shrink-0", hatch !== "none" ? "border-white/50 shadow-sm" : "border-white/20 opacity-30"),
                                style: {
                                    background: color
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1558,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1556,
                        columnNumber: 11
                    }, this),
                    hatch !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: String(Math.round(shapeOpacity * 100)),
                        onValueChange: (v)=>setShapeOpacity(Number(v) / 100),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "h-6 w-[68px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1579,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1578,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl min-w-[4.5rem]",
                                children: [
                                    10,
                                    20,
                                    30,
                                    40,
                                    50,
                                    60,
                                    70,
                                    80,
                                    100
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: String(p),
                                        className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300",
                                        children: [
                                            p,
                                            "%"
                                        ]
                                    }, p, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1583,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1581,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1574,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1589,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 shrink-0",
                                children: "Hatch:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1593,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: hatch,
                                onValueChange: (v)=>{
                                    const val = v;
                                    setHatch(val);
                                    setIsFilled(val !== "none");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-6 w-[110px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 font-mono",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1603,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1602,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "none",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "— None"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1606,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "solid",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "■ Solid"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "h",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "═ Ngang"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "v",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "║ Dọc"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1609,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "d45",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "╱╱ Chéo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1610,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "cross",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "╬ Lưới +"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1611,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "xcross",
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20",
                                                children: "╳ Lưới ×"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1605,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1594,
                                columnNumber: 13
                            }, this),
                            hatch !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HatchSwatch, {
                                hatch: hatch,
                                color: color,
                                opacity: shapeOpacity
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1617,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1592,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1554,
                columnNumber: 9
            }, this),
            tool === "measurement" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 min-w-0 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1627,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-yellow-400 font-medium whitespace-nowrap",
                                children: measureStart ? "➋ Nhấp điểm cuối  •  Esc hủy" : "➊ Nhấp điểm đầu  →  di chuyển chuột  →  nhấp điểm cuối"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1628,
                                columnNumber: 13
                            }, this),
                            !isShiftDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded bg-sky-500/25 text-sky-300 font-mono text-[10px] font-bold tracking-wider border border-sky-500/30",
                                children: "ORTHO"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1636,
                                columnNumber: 15
                            }, this),
                            isShiftDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded bg-orange-500/25 text-orange-300 font-mono text-[10px] font-bold tracking-wider border border-orange-500/30",
                                children: "FREE"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1641,
                                columnNumber: 15
                            }, this),
                            !isShiftDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 text-[10px]",
                                children: "Giữ Shift = góc tự do"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1646,
                                columnNumber: 15
                            }, this),
                            isShiftDown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-orange-400/70 text-[10px]",
                                children: "Thả Shift = về ngang/dọc"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1649,
                                columnNumber: 15
                            }, this),
                            liveMeasure && measureStart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-4 bg-white/10 mx-1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1655,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[11px] text-white font-semibold tabular-nums",
                                        children: liveMeasure.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1656,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400 text-[10px] tabular-nums",
                                        children: [
                                            liveMeasure.angle,
                                            "°"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1659,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1626,
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
                                lineNumber: 1668,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: isCustom ? "custom" : presetKey,
                                onValueChange: (val)=>{
                                    if (val === "custom") {
                                        setIsCustom(true);
                                    } else {
                                        setIsCustom(false);
                                        setPresetKey(val);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-7 w-44 text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0 hover:bg-white/15 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1679,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1678,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl max-h-80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Hệ mét — Việt Nam / ISO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1683,
                                                        columnNumber: 19
                                                    }, this),
                                                    METRIC_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1687,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1682,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1695,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Kiến trúc Mỹ — Architectural"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1697,
                                                        columnNumber: 19
                                                    }, this),
                                                    US_ARCH_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1701,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1696,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1709,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                                        className: "text-[10px] text-slate-400 font-semibold tracking-wider uppercase px-2 py-1.5",
                                                        children: "Kỹ thuật Mỹ — Engineering"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1711,
                                                        columnNumber: 19
                                                    }, this),
                                                    US_ENG_SCALES.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: p.key,
                                                            className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono pl-3",
                                                            children: p.label
                                                        }, p.key, false, {
                                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                            lineNumber: 1715,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1710,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                                className: "bg-white/10 my-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1723,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectGroup"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "custom",
                                                    className: "text-xs text-yellow-400 focus:bg-yellow-500/20 focus:text-yellow-300 pl-3",
                                                    children: "Tùy chỉnh..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                    lineNumber: 1725,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1724,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1681,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1671,
                                columnNumber: 13
                            }, this),
                            isCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500",
                                        children: "1 đơn vị ="
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1738,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: "0.0001",
                                        step: "0.1",
                                        value: customScale,
                                        onChange: (e)=>setCustomScale(parseFloat(e.target.value) || 1),
                                        className: "w-16 h-7 bg-white/10 border border-white/15 rounded px-2 text-slate-200 text-xs text-right focus:outline-none focus:border-sky-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1739,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        value: customUnit,
                                        onValueChange: setCustomUnit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                className: "h-7 w-16 text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                    lineNumber: 1749,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1748,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl min-w-[4rem]",
                                                children: [
                                                    "mm",
                                                    "cm",
                                                    "m",
                                                    "ft",
                                                    "in"
                                                ].map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: u,
                                                        className: "text-xs text-slate-200 focus:bg-sky-500/20 focus:text-sky-300 font-mono",
                                                        children: u
                                                    }, u, false, {
                                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                        lineNumber: 1753,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1751,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1747,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true),
                            !isCustom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 font-mono text-[10px] whitespace-nowrap",
                                children: activePreset.label
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1764,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-4 bg-white/10 mx-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1770,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500 whitespace-nowrap",
                                children: "Đơn vị:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1771,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                value: displayUnit,
                                onValueChange: (v)=>setDisplayUnit(v),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        className: "h-7 w-[90px] text-xs bg-white/10 border-white/20 text-slate-200 focus:ring-0 focus:ring-offset-0 font-mono hover:bg-white/15",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1777,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1776,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl",
                                        children: Object.entries(DISPLAY_UNIT_LABELS).map(([val, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: val,
                                                className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300",
                                                children: lbl
                                            }, val, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 1781,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1779,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1772,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1667,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1624,
                columnNumber: 9
            }, this),
            tool === "pointer" && selectedIndex !== null && annotations[selectedIndex]?.type === "measurement" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                        className: "w-3.5 h-3.5 text-yellow-400 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1795,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500 shrink-0",
                        children: "Đơn vị:"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1798,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        value: annotations[selectedIndex].measureUnit ?? "global",
                        onValueChange: (v)=>{
                            const newUnit = v === "global" ? undefined : v;
                            setUndoStack((p)=>[
                                    ...p,
                                    annotations
                                ]);
                            setAnnotations((prev)=>prev.map((a, i)=>i === selectedIndex ? {
                                        ...a,
                                        measureUnit: newUnit,
                                        labelLocked: false
                                    } : a));
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "h-6 w-[106px] text-xs bg-white/10 border-white/20 text-sky-300 focus:ring-0 focus:ring-offset-0 font-mono",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 1812,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1811,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                className: "bg-[#1A2540] border border-white/15 text-slate-200 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: "global",
                                        className: "text-xs font-mono text-slate-400 focus:bg-sky-500/20",
                                        children: [
                                            "↳ Global (",
                                            DISPLAY_UNIT_LABELS[displayUnit],
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1815,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectSeparator"], {
                                        className: "bg-white/10 my-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1818,
                                        columnNumber: 15
                                    }, this),
                                    Object.entries(DISPLAY_UNIT_LABELS).filter(([v])=>v !== "auto").map(([val, lbl])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                            value: val,
                                            className: "text-xs font-mono text-slate-200 focus:bg-sky-500/20 focus:text-sky-300",
                                            children: lbl
                                        }, val, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 1822,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1814,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1799,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 bg-white/10 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1829,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-500 shrink-0",
                        children: "Nhãn:"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1832,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "font-mono text-yellow-300 bg-yellow-500/10 px-2 py-0.5 rounded max-w-[130px] truncate",
                        children: annotations[selectedIndex].text || "—"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1833,
                        columnNumber: 11
                    }, this),
                    annotations[selectedIndex].labelLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] text-orange-400 border border-orange-400/40 px-1.5 py-0.5 rounded-full shrink-0",
                        children: "manual"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1837,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            const ann = annotations[selectedIndex];
                            if (!ann.points) return;
                            const rect = mkCanvasRef.current.getBoundingClientRect();
                            const mx = (ann.points[0].x + ann.points[1].x) / 2 * scale;
                            const my = (ann.points[0].y + ann.points[1].y) / 2 * scale;
                            const vx = Math.min(rect.left + mx + 4, window.innerWidth - 240);
                            const vy = Math.min(rect.top + my - 40, window.innerHeight - 140);
                            openTextEditor(vx, vy, (ann.points[0].x + ann.points[1].x) / 2, my / scale, ann.pageNumber, {
                                editIndex: selectedIndex,
                                prefill: ann.text ?? "",
                                ann
                            });
                        },
                        className: "flex items-center gap-1 px-2 py-1 rounded hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1858,
                                columnNumber: 13
                            }, this),
                            " Sửa nhãn"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1843,
                        columnNumber: 11
                    }, this),
                    annotations[selectedIndex].labelLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setUndoStack((p)=>[
                                    ...p,
                                    annotations
                                ]);
                            setAnnotations((prev)=>prev.map((a, i)=>i === selectedIndex ? {
                                        ...a,
                                        labelLocked: false
                                    } : a));
                        },
                        className: "flex items-center gap-1 px-2 py-1 rounded hover:bg-yellow-500/20 text-yellow-500/70 hover:text-yellow-400 transition-colors shrink-0",
                        children: "↺ Auto"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1863,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-600 text-[10px] ml-auto hidden lg:block shrink-0",
                        children: "Dbl-click để sửa nhanh"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1876,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1794,
                columnNumber: 9
            }, this),
            tool === "photo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                        className: "w-3.5 h-3.5 text-sky-400"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1885,
                        columnNumber: 11
                    }, this),
                    photoUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-3.5 h-3.5 animate-spin text-sky-400"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1888,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sky-400 font-medium",
                                children: "Đang upload và lưu ảnh..."
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1889,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sky-400 font-medium",
                        children: [
                            "Nhấp vào vị trí bản vẽ để ghim ảnh",
                            photoCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-slate-400",
                                children: [
                                    "• Chuyển sang ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "bg-white/10 px-1 rounded text-[10px]",
                                        children: "V"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1894,
                                        columnNumber: 86
                                    }, this),
                                    " rồi click pin để xem ảnh • ",
                                    photoCount,
                                    " ảnh trang này"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1894,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1892,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1884,
                columnNumber: 9
            }, this),
            tool === "callout" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        className: "w-3.5 h-3.5 text-violet-400"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1903,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-violet-400 font-medium",
                        children: calloutStart ? "Nhấp điểm neo text  •  Esc hủy" : "Nhấp điểm mũi tên (tip) trước"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1904,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1902,
                columnNumber: 9
            }, this),
            tool === "polygon" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-1.5 bg-[#0F172A] border-b border-white/10 flex-shrink-0 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__["Hexagon"], {
                        className: "w-3.5 h-3.5 text-emerald-400"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1915,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-emerald-400 font-medium",
                        children: polygonPts.length === 0 ? "Nhấp để thêm điểm đầu tiên" : polygonPts.length < 3 ? `${polygonPts.length} điểm — cần ít nhất 3 điểm rồi double-click để đóng` : `${polygonPts.length} điểm — Double-click để đóng  •  Esc hủy`
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1916,
                        columnNumber: 11
                    }, this),
                    isFilled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 px-2 py-0.5 rounded bg-yellow-500/15 text-yellow-400 font-mono text-[10px]",
                        children: "Fill ON"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1924,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1914,
                columnNumber: 9
            }, this),
            tool === "text" && !textInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 px-4 py-1.5 bg-[#0A1628] border-b border-white/10 flex-shrink-0 text-xs flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                        className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1932,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFontBold((b)=>!b),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded text-sm font-bold leading-none transition-colors", fontBold ? "bg-sky-500/30 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10"),
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1934,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFontItalic((v)=>!v),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded text-sm italic font-semibold leading-none transition-colors", fontItalic ? "bg-sky-500/30 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10"),
                        children: "I"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1940,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 bg-white/10"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1945,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "Size:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1948,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: String(fontSize),
                                onChange: (e)=>setFontSize(Number(e.target.value)),
                                className: "h-6 bg-white/10 border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[58px] outline-none",
                                children: [
                                    8,
                                    10,
                                    11,
                                    12,
                                    14,
                                    16,
                                    18,
                                    20,
                                    24,
                                    28,
                                    32,
                                    36,
                                    48
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: s,
                                        children: [
                                            s,
                                            "pt"
                                        ]
                                    }, s, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1955,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1949,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1947,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "Font:"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1961,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: fontFamily,
                                onChange: (e)=>setFontFamily(e.target.value),
                                className: "h-6 bg-white/10 border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[72px] outline-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "sans-serif",
                                        children: "Sans"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1967,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "serif",
                                        children: "Serif"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1968,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "monospace",
                                        children: "Mono"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 1969,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1962,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1960,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-400/70 text-[10px] ml-1",
                        children: "Nhấp vào bản vẽ để thêm • Double-click text có sẵn để sửa"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1972,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1931,
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
                                lineNumber: 1981,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"],
                                active: tool === "pan",
                                onClick: ()=>setTool("pan"),
                                label: "Di chuyển (H)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1982,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1984,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"],
                                active: tool === "pen",
                                onClick: ()=>setTool("pen"),
                                label: "Vẽ tự do (P)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1986,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$highlighter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Highlighter$3e$__["Highlighter"],
                                active: tool === "highlight",
                                onClick: ()=>setTool("highlight"),
                                label: "Highlight"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1987,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShapePickerBtn, {
                                tool: tool,
                                setTool: setTool
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1989,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolBtn, {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"],
                                active: tool === "text",
                                onClick: ()=>setTool("text"),
                                label: "Văn bản (T)"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1990,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 1992,
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
                                lineNumber: 1995,
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
                                lineNumber: 2004,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2013,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-approved",
                                onClick: ()=>setTool("stamp-approved"),
                                type: "approved"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2016,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-rejected",
                                onClick: ()=>setTool("stamp-rejected"),
                                type: "rejected"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2017,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBtn, {
                                active: tool === "stamp-review",
                                onClick: ()=>setTool("stamp-review"),
                                type: "review"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2018,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2020,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (hatch !== "none") {
                                        setHatch("none");
                                        setIsFilled(false);
                                    } else {
                                        setHatch("solid");
                                        setIsFilled(true);
                                    }
                                },
                                title: hatch !== "none" ? "Tắt tô màu" : "Bật tô màu (Fill)",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-9 h-9 rounded-lg flex items-center justify-center transition-all", hatch !== "none" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40" : "text-slate-500 hover:bg-white/10 hover:text-slate-300"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 2036,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2023,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2039,
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
                                    lineNumber: 2043,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-7 h-px bg-white/10 my-1"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2050,
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
                                        lineNumber: 2058,
                                        columnNumber: 15
                                    }, this)
                                }, w, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 2054,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 1980,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "flex-1 overflow-auto bg-[#1E293B]",
                        style: {
                            userSelect: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                minHeight: "100%",
                                minWidth: "max-content",
                                boxSizing: "border-box"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    margin: "auto",
                                    padding: 32
                                },
                                children: [
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-slate-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-5 h-5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2075,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: "Đang tải PDF..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2076,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2074,
                                        columnNumber: 17
                                    }, this),
                                    loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-3 text-slate-400 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-10 h-10 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2081,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-400",
                                                children: "Không tải được PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2082,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                children: loadError
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2083,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2080,
                                        columnNumber: 17
                                    }, this),
                                    !fileUrl && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-3 text-slate-500 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-12 h-12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2088,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-medium",
                                                children: "Chưa có file PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2089,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Upload revision để xem bản vẽ."
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2090,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2087,
                                        columnNumber: 17
                                    }, this),
                                    !isLoading && !loadError && fileUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative shadow-2xl",
                                        style: {
                                            lineHeight: 0,
                                            flexShrink: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                ref: pdfCanvasRef
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2095,
                                                columnNumber: 19
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
                                                lineNumber: 2096,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2094,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2072,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 2071,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 2070,
                        columnNumber: 9
                    }, this),
                    showAnnPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$annotation$2d$panel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnnotationPanel"], {
                        annotations: annotations.filter((a)=>a.pageNumber === curPage),
                        issues: drawing.issues,
                        onClose: ()=>setShowAnnPanel(false)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 2114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 1978,
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
                lineNumber: 2123,
                columnNumber: 7
            }, this),
            photoModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoModal, {
                annotation: photoModal,
                onClose: ()=>setPhotoModal(null)
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 2134,
                columnNumber: 9
            }, this),
            showExportShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$viewer$2f$export$2d$share$2d$modal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportShareModal"], {
                open: showExportShare,
                onClose: ()=>setShowExportShare(false),
                drawing: drawing,
                projectId: projectId,
                pdfDoc: pdfDoc,
                annotations: annotations,
                pdfCanvasRef: pdfCanvasRef,
                mkCanvasRef: mkCanvasRef,
                fitScale: fitScale,
                curPage: curPage,
                totalPages: totalPages,
                drawAnnotation: drawAnnotation
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 2139,
                columnNumber: 9
            }, this),
            textInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-40",
                        onMouseDown: commitTextInput
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 2159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed z-50 flex flex-col",
                        style: {
                            left: textInput.vx,
                            top: textInput.vy,
                            minWidth: 210,
                            maxWidth: 380
                        },
                        onMouseDown: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 px-2 py-1.5 rounded-t-lg border border-b-0 bg-[#1E293B]",
                                style: {
                                    borderColor: color
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onMouseDown: (e)=>{
                                            e.preventDefault();
                                            setFontBold((b)=>!b);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded text-sm font-bold leading-none transition-colors", fontBold ? "bg-sky-500/40 text-sky-300" : "text-slate-400 hover:bg-white/10"),
                                        children: "B"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onMouseDown: (e)=>{
                                            e.preventDefault();
                                            setFontItalic((v)=>!v);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6 rounded text-sm italic font-semibold leading-none transition-colors", fontItalic ? "bg-sky-500/40 text-sky-300" : "text-slate-400 hover:bg-white/10"),
                                        children: "I"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-4 bg-white/15 mx-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: String(fontSize),
                                        onChange: (e)=>{
                                            setFontSize(Number(e.target.value));
                                            setTimeout(()=>textAreaRef2.current?.focus(), 0);
                                        },
                                        className: "h-6 bg-[#0F172A] border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[58px] outline-none",
                                        children: [
                                            8,
                                            10,
                                            11,
                                            12,
                                            14,
                                            16,
                                            18,
                                            20,
                                            24,
                                            28,
                                            32,
                                            36,
                                            48
                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: [
                                                    s,
                                                    "pt"
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2189,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: fontFamily,
                                        onChange: (e)=>{
                                            setFontFamily(e.target.value);
                                            setTimeout(()=>textAreaRef2.current?.focus(), 0);
                                        },
                                        className: "h-6 bg-[#0F172A] border border-white/20 rounded px-1 text-[11px] text-slate-200 w-[72px] outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "sans-serif",
                                                children: "Sans"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "serif",
                                                children: "Serif"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "monospace",
                                                children: "Mono"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 2199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto text-[9px] text-slate-500 pl-1 whitespace-nowrap",
                                        children: textInput.editIndex !== undefined ? "Sửa" : "Mới"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: textAreaRef2,
                                value: textValue,
                                onChange: (e)=>setTextValue(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        commitTextInput();
                                    }
                                    if (e.key === "Escape") {
                                        editingIndexRef.current = undefined;
                                        setTextInput(null);
                                        setTextValue("");
                                        textValueRef.current = "";
                                        redrawMarkup(scaleRef.current);
                                    }
                                    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
                                        e.preventDefault();
                                        setFontBold((b)=>!b);
                                    }
                                    if ((e.ctrlKey || e.metaKey) && e.key === "i") {
                                        e.preventDefault();
                                        setFontItalic((v)=>!v);
                                    }
                                },
                                rows: 3,
                                placeholder: "Nhập chú thích…",
                                className: "outline-none resize w-full px-3 py-2 rounded-b-lg leading-snug",
                                style: {
                                    fontSize: `${fontSize}px`,
                                    fontFamily,
                                    fontWeight: fontBold ? "bold" : "normal",
                                    fontStyle: fontItalic ? "italic" : "normal",
                                    color: "#111827",
                                    background: "#ffffff",
                                    border: `2px solid ${color}`,
                                    boxShadow: `0 6px 24px rgba(0,0,0,0.45)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 px-1 pt-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: "Enter xác nhận"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2236,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-600",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2237,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: "Shift+Enter xuống dòng"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-600",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2239,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-slate-500",
                                        children: "Ctrl+B/I"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 2240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 2235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 2162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 1384,
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
    } else if (ann.type === "line" && ann.points?.length === 2) {
        const [s, e] = ann.points.map(Sp);
        // Endpoint dots
        ctx.fillStyle = ann.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, ann.strokeWidth, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(e.x, e.y, ann.strokeWidth, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
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
        const [rx, ry, rw, rh] = [
            S(ann.x),
            S(ann.y),
            S(ann.width),
            S(ann.height)
        ];
        const rsp = (ann.hatchSpacing ?? 8) * sc;
        if (ann.hatch === "solid" || ann.filled && (!ann.hatch || ann.hatch === "none")) {
            ctx.globalAlpha = ann.fillOpacity ?? 0.4;
            ctx.fillRect(rx, ry, rw, rh);
            ctx.globalAlpha = 1;
        }
        if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
            ctx.save();
            ctx.beginPath();
            ctx.rect(rx, ry, rw, rh);
            ctx.clip();
            drawHatchLines(ctx, ann.hatch, ann.color, rsp, rx, ry, rw, rh);
            ctx.restore();
        }
        ctx.strokeRect(rx, ry, rw, rh);
    } else if (ann.type === "circle" && ann.x != null) {
        const [ecx, ecy, erx, ery] = [
            S(ann.x),
            S(ann.y),
            S(ann.width) / 2,
            S(ann.height) / 2
        ];
        const csp = (ann.hatchSpacing ?? 8) * sc;
        ctx.beginPath();
        ctx.ellipse(ecx, ecy, erx, ery, 0, 0, Math.PI * 2);
        if (ann.hatch === "solid" || ann.filled && (!ann.hatch || ann.hatch === "none")) {
            ctx.globalAlpha = ann.fillOpacity ?? 0.4;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(ecx, ecy, erx, ery, 0, 0, Math.PI * 2);
            ctx.clip();
            drawHatchLines(ctx, ann.hatch, ann.color, csp, ecx - erx, ecy - ery, erx * 2, ery * 2);
            ctx.restore();
        }
        ctx.stroke();
    } else if (ann.type === "cloud" && ann.x != null) {
        drawCloud(ctx, S(ann.x), S(ann.y), S(ann.width), S(ann.height), ann.color, ann.strokeWidth, ann.filled ? ann.fillOpacity ?? 0.4 : undefined);
    } else if (ann.type === "polygon" && ann.points && ann.points.length >= 3) {
        const pts = ann.points.map(Sp);
        const psp = (ann.hatchSpacing ?? 8) * sc;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
        ctx.closePath();
        if (ann.hatch === "solid" || ann.filled && (!ann.hatch || ann.hatch === "none")) {
            ctx.globalAlpha = ann.fillOpacity ?? 0.4;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        if (ann.hatch && ann.hatch !== "none" && ann.hatch !== "solid") {
            const minX = Math.min(...pts.map((p)=>p.x)), maxX = Math.max(...pts.map((p)=>p.x));
            const minY = Math.min(...pts.map((p)=>p.y)), maxY = Math.max(...pts.map((p)=>p.y));
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for(let i = 1; i < pts.length; i++)ctx.lineTo(pts[i].x, pts[i].y);
            ctx.closePath();
            ctx.clip();
            drawHatchLines(ctx, ann.hatch, ann.color, psp, minX, minY, maxX - minX, maxY - minY);
            ctx.restore();
        }
        ctx.stroke();
    } else if (ann.type === "callout" && ann.points?.length === 2 && ann.text) {
        const [tip, anchor] = ann.points.map(Sp);
        // Leader line
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(anchor.x, anchor.y);
        ctx.stroke();
        // Arrow tip
        const angle = Math.atan2(tip.y - anchor.y, tip.x - anchor.x);
        const aLen = Math.max(10, ann.strokeWidth * 4 + 8);
        ctx.beginPath();
        ctx.moveTo(tip.x, tip.y);
        ctx.lineTo(tip.x - aLen * Math.cos(angle - 0.4), tip.y - aLen * Math.sin(angle - 0.4));
        ctx.lineTo(tip.x - aLen * Math.cos(angle + 0.4), tip.y - aLen * Math.sin(angle + 0.4));
        ctx.closePath();
        ctx.fill();
        // Text box at anchor
        const cfs = (ann.fontSize ?? Math.max(12, ann.strokeWidth * 4 + 10)) * sc;
        const cw = ann.fontStyle?.includes("bold") ? "bold" : "normal";
        const cst = ann.fontStyle?.includes("italic") ? "italic" : "normal";
        ctx.font = `${cst} ${cw} ${cfs}px ${ann.fontFamily ?? "sans-serif"}`;
        const fs = cfs; // alias for box calculations
        const pad = 6, tw = ctx.measureText(ann.text).width;
        const bw = tw + pad * 2, bh = fs + pad * 2;
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = 0.95;
        ctx.beginPath();
        ctx.roundRect(anchor.x, anchor.y - bh / 2, bw, bh, 4);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = ann.color;
        ctx.fillStyle = ann.color;
        ctx.lineWidth = ann.strokeWidth;
        ctx.beginPath();
        ctx.roundRect(anchor.x, anchor.y - bh / 2, bw, bh, 4);
        ctx.stroke();
        ctx.fillStyle = "#1e293b";
        ctx.textBaseline = "middle";
        ctx.fillText(ann.text, anchor.x + pad, anchor.y);
        ctx.textBaseline = "alphabetic";
    } else if (ann.type === "text" && ann.text && ann.x != null) {
        const tfs = (ann.fontSize ?? Math.max(12, ann.strokeWidth * 5 + 10)) * sc;
        const weight = ann.fontStyle?.includes("bold") ? "bold" : "normal";
        const fstyle = ann.fontStyle?.includes("italic") ? "italic" : "normal";
        ctx.font = `${fstyle} ${weight} ${tfs}px ${ann.fontFamily ?? "sans-serif"}`;
        const lines = ann.text.split("\n");
        const lineH = tfs * 1.35;
        lines.forEach((ln, i)=>ctx.fillText(ln, S(ann.x), S(ann.y) + i * lineH));
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
// ─── Measurement live preview — AutoCAD-style with ortho + real units ──────────
function drawMeasurementPreview(ctx, x1, y1, x2, y2, color, realLabel, isOrtho) {
    const dx = x2 - x1, dy = y2 - y1;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 2) return;
    const angle = Math.atan2(dy, dx);
    const perp = angle + Math.PI / 2;
    const lineColor = isOrtho ? "#38BDF8" : color;
    ctx.save();
    // ── Main dashed measurement line ──
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = isOrtho ? 1.5 : 1.2;
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.9;
    ctx.setLineDash([
        6,
        3
    ]);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
    // ── Tick marks (perpendicular) at both endpoints — AutoCAD witness lines ──
    ctx.strokeStyle = "#94A3B8";
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.7;
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
    // ── Start point: filled circle with ring ──
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = lineColor;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(x1, y1, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(x1, y1, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    // ── Cursor crosshair at endpoint — precision indicator ──
    const cLen = 10;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x2 - cLen, y2);
    ctx.lineTo(x2 + cLen, y2);
    ctx.moveTo(x2, y2 - cLen);
    ctx.lineTo(x2, y2 + cLen);
    ctx.stroke();
    // Crosshair circle
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(x2, y2, 5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
    // ── Angle arc near start ──
    if (dist > 50) {
        const arcR = 22;
        const angDeg = (angle * 180 / Math.PI + 360) % 360;
        ctx.strokeStyle = "#94A3B8";
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(x1, y1, arcR, 0, angle, angle < 0);
        ctx.stroke();
        // Angle label
        const midAng = angle / 2;
        const labelR = arcR + 12;
        const snap45 = Math.round(angDeg / 45) * 45;
        const snapDiff = Math.abs(angDeg - snap45);
        const angleText = isOrtho && snapDiff < 3 ? `${snap45}°` : `${angDeg.toFixed(1)}°`;
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = isOrtho ? "#38BDF8" : "#94A3B8";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = 1;
        ctx.fillText(angleText, x1 + Math.cos(midAng) * labelR, y1 + Math.sin(midAng) * labelR);
    }
    // ── Distance badge floating above midpoint ──
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    // Offset badge perpendicular to line (away from line)
    const offMag = 16;
    const bx = mx - Math.sin(angle) * offMag;
    const by = my + Math.cos(angle) * offMag;
    ctx.font = "bold 11px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const tw = ctx.measureText(realLabel).width;
    const pad = 5, bh = 18, bw = tw + pad * 2;
    ctx.fillStyle = isOrtho ? "#0C4A6E" : "#1E293B";
    ctx.globalAlpha = 0.93;
    ctx.strokeStyle = isOrtho ? "#38BDF8" : "#475569";
    ctx.lineWidth = isOrtho ? 1.5 : 0.8;
    ctx.beginPath();
    ctx.roundRect(bx - bw / 2, by - bh / 2, bw, bh, 3);
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = isOrtho ? "#E0F2FE" : "#F1F5F9";
    ctx.fillText(realLabel, bx, by);
    // ── Mode label near cursor ──
    ctx.font = "bold 9px monospace";
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
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";
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
// ─── Selection / drag helpers ─────────────────────────────────────────────────
function distToSegment(p, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const lenSq = dx * dx + dy * dy;
    if (lenSq === 0) return Math.hypot(p.x - a.x, p.y - a.y);
    const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq));
    return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
}
function isPointInPolygon(p, pts) {
    let inside = false;
    for(let i = 0, j = pts.length - 1; i < pts.length; j = i++){
        const xi = pts[i].x, yi = pts[i].y, xj = pts[j].x, yj = pts[j].y;
        if (yi > p.y !== yj > p.y && p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
}
function moveAnnotation(ann, dx, dy) {
    if (ann.points) return {
        ...ann,
        points: ann.points.map((p)=>({
                x: p.x + dx,
                y: p.y + dy
            }))
    };
    if (ann.x != null) return {
        ...ann,
        x: ann.x + dx,
        y: (ann.y ?? 0) + dy
    };
    return ann;
}
function getAnnotationBBox(ann, sc) {
    const S = (v)=>v * sc;
    if (ann.points?.length) {
        const xs = ann.points.map((p)=>p.x * sc);
        const ys = ann.points.map((p)=>p.y * sc);
        const minX = Math.min(...xs), minY = Math.min(...ys);
        const extra = ann.type === "callout" && ann.points.length === 2 ? (ann.text?.length ?? 0) * (ann.fontSize ?? 14) * sc * 0.6 + 12 : 0;
        return {
            x: minX,
            y: minY,
            w: Math.max(...xs) - minX + extra,
            h: Math.max(...ys) - minY
        };
    }
    if (ann.type === "circle" && ann.x != null) {
        const rx = S(ann.width) / 2, ry = S(ann.height) / 2;
        return {
            x: S(ann.x) - rx,
            y: S(ann.y) - ry,
            w: rx * 2,
            h: ry * 2
        };
    }
    if (ann.type === "text" && ann.x != null) {
        const fs = (ann.fontSize ?? 14) * sc;
        const lines = (ann.text ?? "").split("\n");
        return {
            x: S(ann.x),
            y: S(ann.y) - fs,
            w: Math.max(40, (ann.text?.length ?? 0) * fs * 0.58),
            h: fs * lines.length * 1.35
        };
    }
    if (ann.type === "photo" && ann.x != null) {
        const r = 14;
        return {
            x: S(ann.x) - r,
            y: S(ann.y) - r * 2 - 4,
            w: r * 2,
            h: r * 2 + 4
        };
    }
    if (ann.x != null) {
        return {
            x: S(ann.x),
            y: S(ann.y),
            w: S(ann.width ?? 20),
            h: S(ann.height ?? 20)
        };
    }
    return null;
}
function hitTestAnnotation(pos, ann, sc) {
    const S = (v)=>v * sc;
    const tol = Math.max(7, ann.strokeWidth + 5);
    if (ann.type === "pen" || ann.type === "highlight") {
        const pts = ann.points;
        if (!pts?.length) return false;
        const extra = ann.type === "highlight" ? 12 : 0;
        for(let i = 0; i < pts.length - 1; i++){
            if (distToSegment(pos, {
                x: pts[i].x * sc,
                y: pts[i].y * sc
            }, {
                x: pts[i + 1].x * sc,
                y: pts[i + 1].y * sc
            }) < tol + extra) return true;
        }
        return false;
    }
    if (ann.type === "line" || ann.type === "arrow" || ann.type === "measurement") {
        if (!ann.points || ann.points.length < 2) return false;
        return distToSegment(pos, {
            x: ann.points[0].x * sc,
            y: ann.points[0].y * sc
        }, {
            x: ann.points[1].x * sc,
            y: ann.points[1].y * sc
        }) < tol;
    }
    if (ann.type === "rect" || ann.type === "cloud" || ann.type === "stamp") {
        if (ann.x == null) return false;
        const [x, y, w, h] = [
            S(ann.x),
            S(ann.y),
            S(ann.width),
            S(ann.height)
        ];
        if (ann.filled || ann.type === "stamp") return pos.x >= x - tol && pos.x <= x + w + tol && pos.y >= y - tol && pos.y <= y + h + tol;
        return (Math.abs(pos.x - x) < tol || Math.abs(pos.x - x - w) < tol) && pos.y >= y - tol && pos.y <= y + h + tol || (Math.abs(pos.y - y) < tol || Math.abs(pos.y - y - h) < tol) && pos.x >= x - tol && pos.x <= x + w + tol;
    }
    if (ann.type === "circle") {
        if (ann.x == null) return false;
        const cx = S(ann.x), cy = S(ann.y), rx = S(ann.width) / 2, ry = S(ann.height) / 2;
        const nx = (pos.x - cx) / rx, ny = (pos.y - cy) / ry;
        const d = Math.sqrt(nx * nx + ny * ny);
        return ann.filled ? d <= 1 + tol / Math.min(rx, ry) : Math.abs(d - 1) < tol / Math.min(rx, ry);
    }
    if (ann.type === "text") {
        if (ann.x == null) return false;
        const fs = (ann.fontSize ?? 14) * sc, tx = S(ann.x), ty = S(ann.y);
        const approxW = Math.max(40, (ann.text?.length ?? 0) * fs * 0.58);
        return pos.x >= tx - tol && pos.x <= tx + approxW + tol && pos.y >= ty - fs - tol && pos.y <= ty + tol;
    }
    if (ann.type === "photo") {
        if (ann.x == null) return false;
        const r = 14, cx = S(ann.x), cy = S(ann.y) - r;
        return Math.hypot(pos.x - cx, pos.y - cy) < r + 8;
    }
    if (ann.type === "callout") {
        if (!ann.points || ann.points.length < 2) return false;
        const tip = {
            x: ann.points[0].x * sc,
            y: ann.points[0].y * sc
        };
        const anc = {
            x: ann.points[1].x * sc,
            y: ann.points[1].y * sc
        };
        if (distToSegment(pos, tip, anc) < tol) return true;
        const fs = (ann.fontSize ?? 14) * sc, tw = (ann.text?.length ?? 0) * fs * 0.58 + 12;
        const bh = fs + 12;
        return pos.x >= anc.x - tol && pos.x <= anc.x + tw + tol && pos.y >= anc.y - bh / 2 - tol && pos.y <= anc.y + bh / 2 + tol;
    }
    if (ann.type === "polygon") {
        if (!ann.points?.length) return false;
        const pts = ann.points.map((p)=>({
                x: p.x * sc,
                y: p.y * sc
            }));
        for(let i = 0; i < pts.length; i++){
            if (distToSegment(pos, pts[i], pts[(i + 1) % pts.length]) < tol) return true;
        }
        return ann.filled ? isPointInPolygon(pos, pts) : false;
    }
    return false;
}
// ─── Handle geometry ──────────────────────────────────────────────────────────
const BOX_CURSORS = [
    "nwse-resize",
    "ns-resize",
    "nesw-resize",
    "ew-resize",
    "ew-resize",
    "nesw-resize",
    "ns-resize",
    "nwse-resize"
];
function getAnnotationHandles(ann, sc) {
    const PAD = 7; // extra padding around bbox for box handles
    // 2-point shapes (line, arrow, measurement, callout): endpoint handles only
    if ([
        "line",
        "arrow",
        "measurement",
        "callout"
    ].includes(ann.type) && ann.points?.length === 2) {
        return ann.points.map((p, vi)=>({
                idx: vi,
                cx: p.x * sc,
                cy: p.y * sc,
                cursor: "crosshair",
                isVertex: true,
                vertexIdx: vi
            }));
    }
    // Polygon: vertex handles at each point
    if (ann.type === "polygon" && ann.points?.length) {
        return ann.points.map((p, vi)=>({
                idx: vi,
                cx: p.x * sc,
                cy: p.y * sc,
                cursor: "crosshair",
                isVertex: true,
                vertexIdx: vi
            }));
    }
    // All other shapes: 8 box handles around bounding box
    const bbox = getAnnotationBBox(ann, sc);
    if (!bbox) return [];
    const { x, y, w, h } = {
        x: bbox.x - PAD,
        y: bbox.y - PAD,
        w: bbox.w + PAD * 2,
        h: bbox.h + PAD * 2
    };
    return [
        {
            idx: 0,
            cx: x,
            cy: y,
            cursor: BOX_CURSORS[0],
            isVertex: false
        },
        {
            idx: 1,
            cx: x + w / 2,
            cy: y,
            cursor: BOX_CURSORS[1],
            isVertex: false
        },
        {
            idx: 2,
            cx: x + w,
            cy: y,
            cursor: BOX_CURSORS[2],
            isVertex: false
        },
        {
            idx: 3,
            cx: x,
            cy: y + h / 2,
            cursor: BOX_CURSORS[3],
            isVertex: false
        },
        {
            idx: 4,
            cx: x + w,
            cy: y + h / 2,
            cursor: BOX_CURSORS[4],
            isVertex: false
        },
        {
            idx: 5,
            cx: x,
            cy: y + h,
            cursor: BOX_CURSORS[5],
            isVertex: false
        },
        {
            idx: 6,
            cx: x + w / 2,
            cy: y + h,
            cursor: BOX_CURSORS[6],
            isVertex: false
        },
        {
            idx: 7,
            cx: x + w,
            cy: y + h,
            cursor: BOX_CURSORS[7],
            isVertex: false
        }
    ];
}
function hitTestHandle(pos, handles) {
    const HIT = 9; // hit radius px
    let best = null, bestD = Infinity;
    for (const h of handles){
        const d = Math.hypot(pos.x - h.cx, pos.y - h.cy);
        if (d < HIT && d < bestD) {
            bestD = d;
            best = h;
        }
    }
    return best;
}
// Normalized bounding box (annotation coords, NOT canvas coords)
function getNormBBox(ann) {
    if (ann.points?.length) {
        const xs = ann.points.map((p)=>p.x), ys = ann.points.map((p)=>p.y);
        const mx = Math.min(...xs), my = Math.min(...ys);
        return {
            x: mx,
            y: my,
            w: Math.max(...xs) - mx,
            h: Math.max(...ys) - my
        };
    }
    if (ann.type === "circle" && ann.x != null) {
        const hw = (ann.width ?? 0) / 2, hh = (ann.height ?? 0) / 2;
        return {
            x: ann.x - hw,
            y: ann.y - hh,
            w: ann.width ?? 0,
            h: ann.height ?? 0
        };
    }
    if (ann.x != null) return {
        x: ann.x,
        y: ann.y,
        w: ann.width ?? 0,
        h: ann.height ?? 0
    };
    return null;
}
// Apply a box-handle drag delta to a normalized bbox
function applyBoxHandle(bbox, idx, dx, dy) {
    let { x, y, w, h } = bbox;
    const LEFT = [
        0,
        3,
        5
    ].includes(idx), RIGHT = [
        2,
        4,
        7
    ].includes(idx);
    const TOP = [
        0,
        1,
        2
    ].includes(idx), BOT = [
        5,
        6,
        7
    ].includes(idx);
    if (LEFT) {
        x += dx;
        w -= dx;
    }
    if (RIGHT) w += dx;
    if (TOP) {
        y += dy;
        h -= dy;
    }
    if (BOT) h += dy;
    const MIN = 0.001;
    if (w < MIN) {
        if (LEFT) x -= MIN - w;
        w = MIN;
    }
    if (h < MIN) {
        if (TOP) y -= MIN - h;
        h = MIN;
    }
    return {
        x,
        y,
        w,
        h
    };
}
// Rescale an annotation from oldBBox to newBBox (both normalized)
function rescaleAnn(ann, ob, nb) {
    const mapX = (v)=>ob.w < 1e-6 ? nb.x : nb.x + (v - ob.x) / ob.w * nb.w;
    const mapY = (v)=>ob.h < 1e-6 ? nb.y : nb.y + (v - ob.y) / ob.h * nb.h;
    if (ann.points) return {
        ...ann,
        points: ann.points.map((p)=>({
                x: mapX(p.x),
                y: mapY(p.y)
            }))
    };
    if (ann.type === "circle") return {
        ...ann,
        x: nb.x + nb.w / 2,
        y: nb.y + nb.h / 2,
        width: nb.w,
        height: nb.h
    };
    if (ann.x != null) return {
        ...ann,
        x: nb.x,
        y: nb.y,
        width: nb.w,
        height: nb.h
    };
    return ann;
}
// Compute the final annotation after a handle drag
function applyHandleDrag(snap, handle, dx, dy) {
    if (handle.isVertex && handle.vertexIdx !== undefined && snap.points) {
        const pts = snap.points.map((p, i)=>i === handle.vertexIdx ? {
                x: p.x + dx,
                y: p.y + dy
            } : p);
        return {
            ...snap,
            points: pts
        };
    }
    const ob = getNormBBox(snap);
    if (!ob) return snap;
    const nb = applyBoxHandle(ob, handle.idx, dx, dy);
    return rescaleAnn(snap, ob, nb);
}
function drawSelectionBox(ctx, ann, sc) {
    ctx.save();
    const handles = getAnnotationHandles(ann, sc);
    // ── Bounding box outline ──────────────────────────────────────────────────
    const bbox = getAnnotationBBox(ann, sc);
    if (bbox) {
        const PAD = 7;
        const { x, y, w, h } = {
            x: bbox.x - PAD,
            y: bbox.y - PAD,
            w: Math.max(bbox.w, 4) + PAD * 2,
            h: Math.max(bbox.h, 4) + PAD * 2
        };
        ctx.strokeStyle = "#3B82F6";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([
            5,
            4
        ]);
        ctx.globalAlpha = 0.8;
        ctx.strokeRect(x, y, w, h);
        ctx.setLineDash([]);
    }
    // ── Handles ───────────────────────────────────────────────────────────────
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#3B82F6";
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 1;
    const HS = 7; // half-size for square handles
    const VR = 6; // radius for vertex circle handles
    for (const h of handles){
        if (h.isVertex) {
            // Vertex: filled circle (blue fill for emphasis)
            ctx.fillStyle = "#3B82F6";
            ctx.beginPath();
            ctx.arc(h.cx, h.cy, VR, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(h.cx, h.cy, VR - 2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Box handle: white filled square with blue border
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(h.cx - HS, h.cy - HS, HS * 2, HS * 2);
            ctx.strokeRect(h.cx - HS, h.cy - HS, HS * 2, HS * 2);
        }
    }
    ctx.restore();
}
// ─── Hatch fill lines (called after clipping to shape path) ──────────────────
// spacing: canvas pixels between lines; bx,by,bw,bh: bounding box in canvas px
function drawHatchLines(ctx, hatch, color, spacing, bx, by, bw, bh) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(0.6, spacing / 14);
    ctx.globalAlpha = 0.75;
    ctx.lineCap = "butt";
    const cx = bx + bw / 2;
    const cy = by + bh / 2;
    const diag = Math.sqrt(bw * bw + bh * bh) / 2 + spacing;
    const drawAtAngle = (deg)=>{
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(deg * (Math.PI / 180));
        for(let d = -diag; d <= diag; d += spacing){
            ctx.beginPath();
            ctx.moveTo(d, -diag);
            ctx.lineTo(d, diag);
            ctx.stroke();
        }
        ctx.restore();
    };
    if (hatch === "h") drawAtAngle(90);
    if (hatch === "v") drawAtAngle(0);
    if (hatch === "d45") drawAtAngle(45);
    if (hatch === "cross") {
        drawAtAngle(90);
        drawAtAngle(0);
    }
    if (hatch === "xcross") {
        drawAtAngle(45);
        drawAtAngle(-45);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
}
// ─── Cloud annotation ─────────────────────────────────────────────────────────
function drawCloud(ctx, x, y, w, h, color, lw, fillOpacity) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    const alpha = fillOpacity != null ? fillOpacity : 0.09;
    ctx.fillStyle = color;
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
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.stroke();
    ctx.restore();
}
// ─── Preview shape while dragging ─────────────────────────────────────────────
function previewShape(ctx, tool, color, lw, s, e, filled = false, fillOpacity = 0.4, hatch = "none") {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lw;
    ctx.lineCap = "round";
    const x = Math.min(s.x, e.x), y = Math.min(s.y, e.y);
    const w = Math.abs(e.x - s.x), h = Math.abs(e.y - s.y);
    if (tool === "line") {
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
    } else if (tool === "rect") {
        const showSolid = hatch === "solid" || filled && hatch === "none";
        if (showSolid) {
            ctx.globalAlpha = fillOpacity;
            ctx.fillRect(x, y, w, h);
            ctx.globalAlpha = 1;
        }
        if (hatch !== "none" && hatch !== "solid") {
            ctx.save();
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            ctx.clip();
            drawHatchLines(ctx, hatch, color, 14, x, y, w, h);
            ctx.restore();
        }
        ctx.strokeRect(x, y, w, h);
    } else if (tool === "circle") {
        ctx.beginPath();
        ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
        const showSolidC = hatch === "solid" || filled && hatch === "none";
        if (showSolidC) {
            ctx.globalAlpha = fillOpacity;
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        if (hatch !== "none" && hatch !== "solid") {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse((s.x + e.x) / 2, (s.y + e.y) / 2, w / 2, h / 2, 0, 0, Math.PI * 2);
            ctx.clip();
            drawHatchLines(ctx, hatch, color, 14, x, y, w, h);
            ctx.restore();
        }
        ctx.stroke();
    } else if (tool === "cloud") {
        drawCloud(ctx, x, y, w, h, color, lw, filled ? fillOpacity : undefined);
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
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imgLoaded, setImgLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-3xl w-full mx-4 rounded-xl overflow-hidden shadow-2xl",
            style: {
                maxHeight: "90vh"
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-[#0F172A] px-4 py-3 border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-4 h-4 text-sky-400 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3040,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-slate-200 truncate",
                                    children: annotation.text || "Ảnh hiện trường"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3041,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 flex-shrink-0",
                                    children: [
                                        "Trang ",
                                        annotation.pageNumber
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3044,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 3039,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 flex-shrink-0 ml-4",
                            children: [
                                annotation.imageUrl && !imgError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: annotation.imageUrl,
                                    download: annotation.text || "photo",
                                    className: "flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors",
                                    onClick: (e)=>e.stopPropagation(),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                            lineNumber: 3056,
                                            columnNumber: 17
                                        }, this),
                                        " Tải xuống"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3050,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "text-slate-400 hover:text-white transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 3060,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3059,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/viewer/pdf-viewer.tsx",
                            lineNumber: 3048,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                    lineNumber: 3038,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#0F172A] flex items-center justify-center",
                    style: {
                        minHeight: 200,
                        maxHeight: "80vh"
                    },
                    children: !annotation.imageUrl || imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-3 py-16 text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                className: "w-12 h-12 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3069,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: imgError ? "Không tải được ảnh" : "Không có ảnh"
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3070,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3068,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full flex items-center justify-center",
                        children: [
                            !imgLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-8 h-8 animate-spin text-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3076,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3075,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: annotation.imageUrl,
                                alt: annotation.text ?? "Ảnh hiện trường",
                                className: "max-w-full object-contain",
                                style: {
                                    maxHeight: "80vh",
                                    display: imgLoaded ? "block" : "none"
                                },
                                onLoad: ()=>setImgLoaded(true),
                                onError: ()=>{
                                    setImgError(true);
                                    setImgLoaded(true);
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3079,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3073,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                    lineNumber: 3066,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/viewer/pdf-viewer.tsx",
            lineNumber: 3032,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 3028,
        columnNumber: 5
    }, this);
}
// ─── Shape Picker Button ──────────────────────────────────────────────────────
// Replaces 5 individual shape buttons with one compact flyout picker.
function ShapePickerBtn({ tool, setTool }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const SHAPES = [
        {
            id: "line",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"],
            label: "Đường thẳng",
            shortcut: "L"
        },
        {
            id: "arrow",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
            label: "Mũi tên",
            shortcut: "A"
        },
        {
            id: "rect",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"],
            label: "Hình chữ nhật"
        },
        {
            id: "circle",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"],
            label: "Elip / Tròn"
        },
        {
            id: "cloud",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
            label: "Cloud"
        },
        {
            id: "callout",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
            label: "Callout / Leader"
        },
        {
            id: "polygon",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hexagon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hexagon$3e$__["Hexagon"],
            label: "Đa giác (dbl-click đóng)"
        }
    ];
    const activeShape = SHAPES.find((s)=>s.id === tool);
    const BtnIcon = activeShape?.icon ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shapes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shapes$3e$__["Shapes"];
    const isActive = !!activeShape;
    const openPicker = ()=>{
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        setPos({
            top: rect.top,
            left: rect.right + 6
        });
        setOpen(true);
    };
    const select = (id)=>{
        setTool(id);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: btnRef,
                onClick: openPicker,
                title: isActive ? activeShape.label : "Hình vẽ (line, arrow, rect, circle, cloud)",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative w-9 h-9 rounded-lg flex items-center justify-center transition-all", isActive ? "bg-sky-500/20 text-sky-400 border border-sky-500/40" : "text-slate-500 hover:bg-white/10 hover:text-slate-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BtnIcon, {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-[3px] right-[3px] border-r border-b border-current opacity-50",
                        style: {
                            width: 5,
                            height: 5,
                            transform: "rotate(-45deg)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 3127,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[100]",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed z-[101] bg-[#0F172A] border border-white/15 rounded-xl shadow-2xl overflow-hidden",
                        style: {
                            top: pos.top,
                            left: pos.left,
                            minWidth: 160
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 pt-2.5 pb-1.5 border-b border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-semibold text-slate-500 uppercase tracking-wider",
                                    children: "Hình vẽ"
                                }, void 0, false, {
                                    fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                    lineNumber: 3156,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 space-y-0.5",
                                children: SHAPES.map((s)=>{
                                    const Icon = s.icon;
                                    const isSelected = tool === s.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>select(s.id),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[12px] transition-colors", isSelected ? "bg-sky-500/20 text-sky-300" : "text-slate-400 hover:bg-white/8 hover:text-slate-200"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-4 h-4 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 3174,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-left",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 3175,
                                                columnNumber: 21
                                            }, this),
                                            s.shortcut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "text-[9px] text-slate-600 font-mono bg-white/5 px-1 rounded",
                                                children: s.shortcut
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 3177,
                                                columnNumber: 23
                                            }, this),
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                                lineNumber: 3182,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                        lineNumber: 3164,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                                lineNumber: 3159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/viewer/pdf-viewer.tsx",
                        lineNumber: 3150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
// ─── Hatch swatch — tiny canvas preview of hatch pattern ─────────────────────
function HatchSwatch({ hatch, color, opacity = 0.4 }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const c = canvasRef.current;
        if (!c) return;
        const ctx = c.getContext("2d");
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
            ctx.beginPath();
            ctx.rect(0, 0, 20, 20);
            ctx.clip();
            drawHatchLines(ctx, hatch, color, 5, 0, 0, 20, 20);
            ctx.restore();
        }
        ctx.strokeStyle = color + "60";
        ctx.lineWidth = 1;
        ctx.strokeRect(0, 0, 20, 20);
    }, [
        hatch,
        color,
        opacity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        width: 20,
        height: 20,
        className: "rounded border border-white/15 flex-shrink-0"
    }, void 0, false, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 3220,
        columnNumber: 10
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
                lineNumber: 3236,
                columnNumber: 7
            }, this),
            badge !== undefined && badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-sky-500 text-white text-[8px] font-bold flex items-center justify-center leading-none", badgeColor && "bg-transparent " + badgeColor),
                children: badge
            }, void 0, false, {
                fileName: "[project]/components/viewer/pdf-viewer.tsx",
                lineNumber: 3238,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/viewer/pdf-viewer.tsx",
        lineNumber: 3229,
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
        lineNumber: 3255,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/(dashboard)/projects/[id]/drawings/[drawingId]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_3867d2._.js.map