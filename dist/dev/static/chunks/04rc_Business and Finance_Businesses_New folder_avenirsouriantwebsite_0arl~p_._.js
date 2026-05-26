(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionLink",
    ()=>TransitionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$contexts$2f$TransitionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/contexts/TransitionContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TransitionLink({ children, href, className, onClick, ...props }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { startTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$contexts$2f$TransitionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const handleTransition = async (e)=>{
        if (onClick) {
            onClick(e);
        }
        if (pathname === href) {
            // If we are already on this page, do not trigger a transition
            return;
        }
        e.preventDefault();
        // Trigger transition overlay
        await startTransition();
        // Navigate
        router.push(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        href: href,
        onClick: handleTransition,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(TransitionLink, "DTLCla5gMGdYX4ZaxMEeEPKi8No=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$contexts$2f$TransitionContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = TransitionLink;
var _c;
__turbopack_context__.k.register(_c, "TransitionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Header() {
    _s();
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [hoveredTab, setHoveredTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const normalizePath = (p)=>p.replace(/\/$/, '') || '/';
    // Smart Header Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Header.useMotionValueEvent": (latest)=>{
            const previous = scrollY.getPrevious() || 0;
            if (latest > previous && latest > 150) {
                setIsHidden(true); // Scrolling down -> hide header
            } else {
                setIsHidden(false); // Scrolling up -> show header
            }
        }
    }["Header.useMotionValueEvent"]);
    const navLinks = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Programs',
            path: '/programs'
        },
        {
            name: 'Register',
            path: '/register'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        variants: {
            visible: {
                y: 0
            },
            hidden: {
                y: "-100%"
            }
        },
        animate: isHidden ? "hidden" : "visible",
        transition: {
            duration: 0.35,
            ease: "easeInOut"
        },
        className: "sticky top-0 z-50 bg-white shadow-sm w-full font-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                href: "/",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo.png",
                                    alt: "Avenir Souriant Logo",
                                    width: 100,
                                    height: 28,
                                    className: "w-20 md:w-28 object-contain",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex space-x-12",
                            onMouseLeave: ()=>setHoveredTab(null),
                            children: navLinks.map((link)=>{
                                const isActive = normalizePath(pathname) === normalizePath(link.path);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative py-2",
                                    onMouseEnter: ()=>setHoveredTab(link.path),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                            href: link.path,
                                            className: `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'}`,
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        hoveredTab === link.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "nav-hover",
                                            className: "absolute left-0 right-0 -bottom-1 h-0.5 bg-primary",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                            lineNumber: 76,
                                            columnNumber: 21
                                        }, this),
                                        isActive && hoveredTab !== link.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 right-0 -bottom-1 h-0.5 bg-primary opacity-50"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                            lineNumber: 87,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, link.path, true, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "text-gray-900 hover:text-primary focus:outline-none p-2",
                                "aria-label": "Toggle mobile menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-white border-t border-gray-100 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pt-4 pb-6 space-y-6 shadow-inner",
                        children: navLinks.map((link)=>{
                            const isActive = normalizePath(pathname) === normalizePath(link.path);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                    href: link.path,
                                    className: `block text-2xl font-medium py-2 transition-colors ${isActive ? 'text-primary font-bold' : 'text-gray-900 hover:text-primary'}`,
                                    children: link.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                    lineNumber: 127,
                                    columnNumber: 21
                                }, this)
                            }, link.path, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                lineNumber: 126,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Header, "LThl1ANJGl6viqDdLnlGBgp+WJY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-client] (ecmascript)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative text-white pt-16 pb-8 bg-repeat bg-center",
        style: {
            backgroundImage: "url('/images/sky_blue_girih_star_background.png')",
            backgroundSize: "688px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-primary/60"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/logo.png",
                                            alt: "Avenir Souriant Logo",
                                            width: 200,
                                            height: 50,
                                            className: "brightness-0 invert object-contain mb-6"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: "Building the next generation of confident Arabic speakers, one smiling face at a time."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "📍"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 15
                                            }, this),
                                            " 1325 Rue Cartier, Saint-Laurent, QC H4L 2N6"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://maps.google.com/?q=1325+Rue+Cartier,+Saint-Laurent,+QC+H4L+2N6",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-primary-light hover:text-white underline text-sm mb-6 inline-block",
                                        children: "show on map"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 82
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 82
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            width: "20",
                                                            height: "20",
                                                            x: "2",
                                                            y: "2",
                                                            rx: "5",
                                                            ry: "5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 157
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                            lineNumber: 46,
                                                            columnNumber: 219
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold mb-6",
                                        children: "Have Questions?"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center text-xl font-bold mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "📞"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+15145154492",
                                                className: "hover:text-primary-light",
                                                children: "(514) 515-4492"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-primary-light opacity-50 mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "✉️"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:administration@avenirsouriant.com",
                                                className: "hover:text-primary-light",
                                                children: "administration@avenirsouriant.com"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold mb-6",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 font-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                href: "/",
                                                className: "hover:text-primary-light transition-colors",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                href: "/programs",
                                                className: "hover:text-primary-light transition-colors",
                                                children: "Programs"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                href: "/register",
                                                className: "hover:text-primary-light transition-colors",
                                                children: "Register"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/20 mt-12 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm opacity-75",
                            children: [
                                "Avenir Souriant © ",
                                new Date().getFullYear(),
                                " All rights reserved. Terms of use and Privacy Policy"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const AnimatedProgramCard = ({ service, idx })=>{
    const isEven = idx % 2 === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    gap: "2px",
                    opacity: 0,
                    scaleX: 0
                },
                whileInView: {
                    gap: [
                        "2px",
                        "24px",
                        "4px"
                    ],
                    opacity: [
                        0,
                        1,
                        0
                    ],
                    scaleX: [
                        0.2,
                        1,
                        0.2
                    ]
                },
                transition: {
                    duration: 0.9,
                    times: [
                        0,
                        0.5,
                        1
                    ],
                    ease: "easeInOut"
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                style: {
                    originX: isEven ? 1 : 0
                },
                className: `absolute top-1/2 -translate-y-1/2 flex items-center z-0 hidden md:flex ${isEven ? 'right-[95%] flex-row' : 'left-[95%] flex-row-reverse'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    x: isEven ? -200 : 200
                },
                whileInView: {
                    x: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 50,
                    damping: 12,
                    mass: 1
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                className: "relative z-10 flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-1/3 h-64 bg-primary-light rounded-xl flex items-center justify-center text-4xl text-primary font-bold text-center overflow-hidden",
                        children: service.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: service.image,
                            alt: service.title,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 33vw",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "p-4",
                            children: service.title.split(' ')[0]
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold font-heading mb-4",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg mb-6",
                                children: service.desc
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "px-6 py-2 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors cursor-pointer",
                                        children: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AnimatedProgramCard;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[50vh]",
                        style: {
                            backgroundImage: "url('/images/programs-hero-bg.jpg')"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md",
                                    children: "Our Programs"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow-sm",
                                    children: "Discover a world of engaging educational and extracurricular activities designed to build confidence, creativity, and language mastery."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-repeat bg-center overflow-x-hidden",
                        style: {
                            backgroundImage: "url('/images/screen.png')",
                            backgroundSize: "688px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-16",
                                children: [
                                    {
                                        title: "Arabic for Native Speakers",
                                        desc: "An advanced curriculum designed to help native speakers master reading, writing, and speaking in a fun and interactive environment.",
                                        price: "Learn More",
                                        image: "/images/native_arabic_speakers.jpg"
                                    },
                                    {
                                        title: "Arabic for Non-Speakers",
                                        desc: "A welcoming, immersive introductory class that makes learning Arabic accessible and exciting for completely new speakers.",
                                        price: "Learn More",
                                        image: "/images/Gemini_Generated_Image_vwzmmxvwzmmxvwzm.png"
                                    },
                                    {
                                        title: "STEM & Robotics",
                                        desc: "Hands-on building, coding, and problem-solving to prepare kids for the future while having a blast.",
                                        price: "Learn More",
                                        image: "/images/096d4575-d688-4721-ab44-ff480a7199d5.jpg"
                                    },
                                    {
                                        title: "Sports & Extracurriculars",
                                        desc: "Keep kids active and creative with our diverse offerings including soccer, stitching, arts, and crafts.",
                                        price: "Learn More",
                                        image: "/images/835a7955-18e1-459e-a20f-bc61263f3705.jpg"
                                    },
                                    {
                                        title: "Other Activities",
                                        desc: "We offer a variety of other engaging activities tailored to your child's interests and developmental needs. Contact us to learn more!",
                                        price: "Learn More",
                                        image: "/images/other_activities.jpg"
                                    }
                                ].map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedProgramCard, {
                                        service: service,
                                        idx: idx
                                    }, idx, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = Services;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedProgramCard");
__turbopack_context__.k.register(_c1, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "observeTimeline",
    ()=>observeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = ()=>{
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(onFrame, true);
    return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(onFrame);
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseNativeTimeline",
    ()=>canUseNativeTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
;
function canUseNativeTimeline(target) {
    if (typeof window === "undefined") return false;
    return target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsViewTimeline"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])();
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScrollInfo",
    ()=>createScrollInfo,
    "updateScrollInfo",
    ()=>updateScrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/progress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-client] (ecmascript)");
;
/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */ const maxElapsed = 50;
const createAxisInfo = ()=>({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    });
const createScrollInfo = ()=>({
        time: 0,
        x: createAxisInfo(),
        y: createAxisInfo()
    });
const keys = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = Math.abs(element[`scroll${position}`]);
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$progress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["progress"])(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity = elapsed > maxElapsed ? 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$velocity$2d$per$2d$second$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["velocityPerSecond"])(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calcInset",
    ()=>calcInset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
;
function calcInset(element, container) {
    const inset = {
        x: 0,
        y: 0
    };
    let current = element;
    while(current && current !== container){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        } else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */ const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        } else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while(!svg){
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        } else {
            break;
        }
    }
    return inset;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namedEdges",
    ()=>namedEdges,
    "resolveEdge",
    ()=>resolveEdge
]);
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */ if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */ if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        } else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        } else if (edge.endsWith("vw")) {
            delta = asNumber / 100 * document.documentElement.clientWidth;
        } else if (edge.endsWith("vh")) {
            delta = asNumber / 100 * document.documentElement.clientHeight;
        } else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */ if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffset",
    ()=>resolveOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs [app-client] (ecmascript)");
;
const defaultOffset = [
    0,
    0
];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */ offsetDefinition = [
            offset,
            offset
        ];
    } else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        } else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */ offsetDefinition = [
                offset,
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namedEdges"][offset] ? offset : `0`
            ];
        }
    }
    targetPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[0], targetLength, targetInset);
    containerPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$edge$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEdge"])(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollOffset",
    ()=>ScrollOffset
]);
const ScrollOffset = {
    Enter: [
        [
            0,
            1
        ],
        [
            1,
            1
        ]
    ],
    Exit: [
        [
            0,
            0
        ],
        [
            1,
            0
        ]
    ],
    Any: [
        [
            1,
            0
        ],
        [
            0,
            1
        ]
    ],
    All: [
        [
            0,
            0
        ],
        [
            1,
            1
        ]
    ]
};
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveOffsets",
    ()=>resolveOffsets
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/utils/interpolate.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/clamp.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
;
;
;
;
const point = {
    x: 0,
    y: 0
};
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
        width: target.clientWidth,
        height: target.clientHeight
    };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$inset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcInset"])(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */ const targetSize = target === container ? {
        width: container.scrollWidth,
        height: container.scrollHeight
    } : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */ info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */ let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for(let i = 0; i < numOffsets; i++){
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$offset$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffset"])(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */ if (hasChanged) {
        info[axis].interpolate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$interpolate$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(info[axis].offset, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$animation$2f$keyframes$2f$offsets$2f$default$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOffset"])(offsetDefinition), {
            clamp: false
        });
        info[axis].interpolatorOffsets = [
            ...info[axis].offset
        ];
    }
    info[axis].progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$clamp$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(0, 1, info[axis].interpolate(info[axis].current));
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOnScrollHandler",
    ()=>createOnScrollHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/warn-once.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs [app-client] (ecmascript)");
;
;
;
function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */ info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while(node && node !== container){
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions. The document scrolling element
     * is exempt: offsetParent measurements naturally resolve relative to the document.
     */ if ("TURBOPACK compile-time truthy", 1) {
        if (container && target && target !== container && container !== document.documentElement && container !== document.scrollingElement && container !== document.body) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$warn$2d$once$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOnce"])(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
        }
    }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: (time)=>{
            measure(element, options.target, info);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateScrollInfo"])(element, info, time);
            if (options.offset || options.target) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveOffsets"])(element, info, options);
            }
        },
        notify: ()=>onScroll(info)
    };
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrollInfo",
    ()=>scrollInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/resize/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs [app-client] (ecmascript)");
;
;
;
;
const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const scrollSize = new WeakMap();
const dimensionCheckProcesses = new WeakMap();
const getEventTarget = (element)=>element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */ if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */ const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScrollInfo"])();
    const containerHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$on$2d$scroll$2d$handler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOnScrollHandler"])(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */ if (!scrollListeners.has(container)) {
        const measureAll = ()=>{
            for (const handler of containerHandlers){
                handler.measure(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].timestamp);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].preUpdate(notifyAll);
        };
        const notifyAll = ()=>{
            for (const handler of containerHandlers){
                handler.notify();
            }
        };
        const listener = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener);
        if (container !== document.documentElement) {
            resizeListeners.set(container, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$resize$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resize"])(container, listener));
        }
        target.addEventListener("scroll", listener);
        listener();
    }
    /**
     * Enable content size tracking if requested and not already enabled.
     */ if (trackContentSize && !dimensionCheckProcesses.has(container)) {
        const listener = scrollListeners.get(container);
        // Store initial scroll dimensions (object is reused to avoid allocation)
        const size = {
            width: container.scrollWidth,
            height: container.scrollHeight
        };
        scrollSize.set(container, size);
        // Add frame-based scroll dimension checking to detect content changes
        const checkScrollDimensions = ()=>{
            const newWidth = container.scrollWidth;
            const newHeight = container.scrollHeight;
            if (size.width !== newWidth || size.height !== newHeight) {
                listener();
                size.width = newWidth;
                size.height = newHeight;
            }
        };
        // Schedule with keepAlive=true to run every frame
        const dimensionCheckProcess = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(checkScrollDimensions, true);
        dimensionCheckProcesses.set(container, dimensionCheckProcess);
    }
    const listener = scrollListeners.get(container);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].read(listener, false, true);
    return ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(listener);
        /**
         * Check if we even have any handlers for this container.
         */ const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers) return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size) return;
        /**
         * If no more handlers, remove the scroll listener too.
         */ const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            resizeListeners.get(container)?.();
            window.removeEventListener("resize", scrollListener);
        }
        // Clean up scroll dimension checking
        const dimensionCheckProcess = dimensionCheckProcesses.get(container);
        if (dimensionCheckProcess) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelFrame"])(dimensionCheckProcess);
            dimensionCheckProcesses.delete(container);
        }
        scrollSize.delete(container);
    };
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "offsetToViewTimelineRange",
    ()=>offsetToViewTimelineRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs [app-client] (ecmascript)");
;
/**
 * Maps from ProgressIntersection pairs used by Motion's preset offsets to
 * ViewTimeline named ranges. Returns undefined for unrecognised patterns,
 * which signals the caller to fall back to JS-based scroll tracking.
 */ const presets = [
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Enter,
        "entry"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Exit,
        "exit"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].Any,
        "cover"
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$offsets$2f$presets$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollOffset"].All,
        "contain"
    ]
];
const stringToProgress = {
    start: 0,
    end: 1
};
function parseStringOffset(s) {
    const parts = s.trim().split(/\s+/);
    if (parts.length !== 2) return undefined;
    const a = stringToProgress[parts[0]];
    const b = stringToProgress[parts[1]];
    if (a === undefined || b === undefined) return undefined;
    return [
        a,
        b
    ];
}
function normaliseOffset(offset) {
    if (offset.length !== 2) return undefined;
    const result = [];
    for (const item of offset){
        if (Array.isArray(item)) {
            result.push(item);
        } else if (typeof item === "string") {
            const parsed = parseStringOffset(item);
            if (!parsed) return undefined;
            result.push(parsed);
        } else {
            return undefined;
        }
    }
    return result;
}
function matchesPreset(offset, preset) {
    const normalised = normaliseOffset(offset);
    if (!normalised) return false;
    for(let i = 0; i < 2; i++){
        const o = normalised[i];
        const p = preset[i];
        if (o[0] !== p[0] || o[1] !== p[1]) return false;
    }
    return true;
}
function offsetToViewTimelineRange(offset) {
    if (!offset) {
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    }
    for (const [preset, name] of presets){
        if (matchesPreset(offset, preset)) {
            return {
                rangeStart: `${name} 0%`,
                rangeEnd: `${name} 100%`
            };
        }
    }
    return undefined;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimeline",
    ()=>getTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
;
;
;
const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = {
        value: 0
    };
    const cancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return {
        currentTime,
        cancel
    };
}
function getTimeline({ source, container, ...options }) {
    const { axis } = options;
    if (source) container = source;
    let containerCache = timelineCache.get(container);
    if (!containerCache) {
        containerCache = new Map();
        timelineCache.set(container, containerCache);
    }
    const targetKey = options.target ?? "self";
    let targetCache = containerCache.get(targetKey);
    if (!targetCache) {
        targetCache = {};
        containerCache.set(targetKey, targetCache);
    }
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
        if (options.target && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])(options.target)) {
            const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(options.offset);
            if (range) {
                targetCache[axisKey] = new ViewTimeline({
                    subject: options.target,
                    axis
                });
            } else {
                targetCache[axisKey] = scrollTimelineFallback({
                    container,
                    ...options
                });
            }
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])()) {
            targetCache[axisKey] = new ScrollTimeline({
                source: container,
                axis
            });
        } else {
            targetCache[axisKey] = scrollTimelineFallback({
                container,
                ...options
            });
        }
    }
    return targetCache[axisKey];
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToAnimation",
    ()=>attachToAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
;
;
;
;
function attachToAnimation(animation, options) {
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options);
    const range = options.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(options.offset) : undefined;
    /**
     * Use native timeline when:
     * - No target: ScrollTimeline (existing behaviour)
     * - Target with mappable offset: ViewTimeline with named range
     * - Target with unmappable offset: fall back to JS observe
     */ const useNative = options.target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])(options.target) && !!range : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$can$2d$use$2d$native$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseNativeTimeline"])();
    return animation.attachTimeline({
        timeline: useNative ? timeline : undefined,
        ...range && useNative && {
            rangeStart: range.rangeStart,
            rangeEnd: range.rangeEnd
        },
        observe: (valueAnimation)=>{
            valueAnimation.pause();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])((progress)=>{
                valueAnimation.time = valueAnimation.iterationDuration * progress;
            }, timeline);
        }
    });
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/is-element-tracking.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isElementTracking",
    ()=>isElementTracking
]);
/**
 * Currently, we only support element tracking with `scrollInfo`, though in
 * the future we can also offer ViewTimeline support.
 */ function isElementTracking(options) {
    return options && (options.target || options.offset);
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attachToFunction",
    ()=>attachToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/scroll/observe.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$is$2d$element$2d$tracking$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/is-element-tracking.mjs [app-client] (ecmascript)");
;
;
;
;
/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */ function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$is$2d$element$2d$tracking$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isElementTracking"])(options)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$track$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrollInfo"])((info)=>{
            onScroll(info[options.axis].progress, info);
        }, options);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$scroll$2f$observe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeTimeline"])(onScroll, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$get$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeline"])(options));
    }
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scroll",
    ()=>scroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/noop.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs [app-client] (ecmascript)");
;
;
;
function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
    if (!container) return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"];
    const optionsWithDefaults = {
        axis,
        container,
        ...options
    };
    return typeof onScroll === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$function$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToFunction"])(onScroll, optionsWithDefaults) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$attach$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attachToAnimation"])(onScroll, optionsWithDefaults);
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/frameloop/microtask.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/motion-utils/dist/es/errors.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const createScrollMotionValues = ()=>({
        scrollX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollXProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0),
        scrollYProgress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(0)
    });
const isRefPending = (ref)=>{
    if (!ref) return false;
    return !ref.current;
};
function makeAccelerateConfig(axis, options, container, target) {
    return {
        // Refs attach child-first; defer so target.current is populated
        // before scroll() reads it.
        factory: (animation)=>{
            let cleanup;
            const start = ()=>{
                // A provided ref may be hydrated by an effect declared after
                // useScroll (or in a parent). Don't attach to the window
                // scroll in the meantime — that result gets cached and would
                // permanently mistrack. Wait until the ref resolves.
                if (isRefPending(container) || isRefPending(target)) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].read(start);
                    return;
                }
                cleanup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])(animation, {
                    ...options,
                    axis,
                    container: container?.current || undefined,
                    target: target?.current || undefined
                });
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].read(start);
            return ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"])(start);
                cleanup?.();
            };
        },
        times: [
            0,
            1
        ],
        keyframes: [
            0,
            1
        ],
        ease: (v)=>v,
        duration: 1
    };
}
function canAccelerateScroll(target, offset) {
    if (typeof window === "undefined") return false;
    return target ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsViewTimeline"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$utils$2f$offset$2d$to$2d$range$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offsetToViewTimelineRange"])(offset) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$supports$2f$scroll$2d$timeline$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supportsScrollTimeline"])();
}
function useScroll({ container, target, ...options } = {}) {
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(createScrollMotionValues);
    if (canAccelerateScroll(target, options.offset)) {
        values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
        values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
    }
    const scrollAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const needsStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScroll.useCallback[start]": ()=>{
            scrollAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$scroll$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scroll"])({
                "useScroll.useCallback[start]": (_progress, { x, y })=>{
                    values.scrollX.set(x.current);
                    values.scrollXProgress.set(x.progress);
                    values.scrollY.set(y.current);
                    values.scrollYProgress.set(y.progress);
                }
            }["useScroll.useCallback[start]"], {
                ...options,
                container: container?.current || undefined,
                target: target?.current || undefined
            });
            return ({
                "useScroll.useCallback[start]": ()=>{
                    scrollAnimation.current?.();
                }
            })["useScroll.useCallback[start]"];
        }
    }["useScroll.useCallback[start]"], [
        container,
        target,
        JSON.stringify(options.offset)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useScroll.useIsomorphicLayoutEffect": ()=>{
            needsStart.current = false;
            if (isRefPending(container) || isRefPending(target)) {
                needsStart.current = true;
                return;
            } else {
                return start();
            }
        }
    }["useScroll.useIsomorphicLayoutEffect"], [
        start
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScroll.useEffect": ()=>{
            if (!needsStart.current) return;
            // Defer to a microtask so any sibling/parent effect that hydrates the
            // ref has a chance to run first.
            let cleanup;
            const tryStart = {
                "useScroll.useEffect.tryStart": ()=>{
                    const containerPending = isRefPending(container);
                    const targetPending = isRefPending(target);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!containerPending, "Container ref is defined but not hydrated", "use-scroll-ref");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invariant"])(!targetPending, "Target ref is defined but not hydrated", "use-scroll-ref");
                    if (!containerPending && !targetPending) cleanup = start();
                }
            }["useScroll.useEffect.tryStart"];
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microtask"].read(tryStart);
            return ({
                "useScroll.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$frameloop$2f$microtask$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cancelMicrotask"])(tryStart);
                    cleanup?.();
                }
            })["useScroll.useEffect"];
        }
    }["useScroll.useEffect"], [
        start
    ]);
    return values;
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMotionValueEvent",
    ()=>useMotionValueEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
function useMotionValueEvent(value, event, callback) {
    /**
     * useInsertionEffect will create subscriptions before any other
     * effects will run. Effects run upwards through the tree so it
     * can be that binding a useLayoutEffect higher up the tree can
     * miss changes from lower down the tree.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useMotionValueEvent.useInsertionEffect": ()=>value.on(event, callback)
    }["useMotionValueEvent.useInsertionEffect"], [
        value,
        event,
        callback
    ]);
}
;
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
]);

//# sourceMappingURL=04rc_Business%20and%20Finance_Businesses_New%20folder_avenirsouriantwebsite_0arl~p_._.js.map