module.exports = [
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionLink",
    ()=>TransitionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$contexts$2f$TransitionContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/contexts/TransitionContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function TransitionLink({ children, href, className, onClick, ...props }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { startTransition } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$contexts$2f$TransitionContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Header() {
    const [isHidden, setIsHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [hoveredTab, setHoveredTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const normalizePath = (p)=>p.replace(/\/$/, '') || '/';
    // Smart Header Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", (latest)=>{
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setIsHidden(true); // Scrolling down -> hide header
        } else {
            setIsHidden(false); // Scrolling up -> show header
        }
    });
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                href: "/",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex space-x-12",
                            onMouseLeave: ()=>setHoveredTab(null),
                            children: navLinks.map((link)=>{
                                const isActive = normalizePath(pathname) === normalizePath(link.path);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative py-2",
                                    onMouseEnter: ()=>setHoveredTab(link.path),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                            href: link.path,
                                            className: `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-gray-900 hover:text-primary'}`,
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this),
                                        hoveredTab === link.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                        isActive && hoveredTab !== link.path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                className: "text-gray-900 hover:text-primary focus:outline-none p-2",
                                "aria-label": "Toggle mobile menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 pt-4 pb-6 space-y-6 shadow-inner",
                        children: navLinks.map((link)=>{
                            const isActive = normalizePath(pathname) === normalizePath(link.path);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "block",
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
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
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/TransitionLink.tsx [app-ssr] (ecmascript)");
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative text-white pt-16 pb-8 bg-repeat bg-center",
        style: {
            backgroundImage: "url('/images/sky_blue_girih_star_background.png')",
            backgroundSize: "688px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-primary/60"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4",
                                        children: "Building the next generation of confident Arabic speakers, one smiling face at a time."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://facebook.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-white hover:text-primary-light",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-6 h-6",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold mb-6",
                                        children: "Have Questions?"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center text-xl font-bold mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "📞"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-primary-light opacity-50 mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "✉️"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-semibold mb-6",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 font-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                href: "/",
                                                className: "hover:text-primary-light transition-colors",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                href: "/programs",
                                                className: "hover:text-primary-light transition-colors",
                                                children: "Programs"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransitionLink"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/20 mt-12 pt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const AnimatedProgramCard = ({ service, idx })=>{
    const isEven = idx % 2 === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-2 bg-[#1abc9c] rounded-full shadow-[0_0_8px_rgba(26,188,156,0.6)]"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full md:w-1/3 h-64 bg-primary-light rounded-xl flex items-center justify-center text-4xl text-primary font-bold text-center overflow-hidden",
                        children: service.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: service.image,
                            alt: service.title,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 33vw",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:w-2/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold font-heading mb-4",
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg mb-6",
                                children: service.desc
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-32 bg-cover bg-center bg-no-repeat text-center flex items-center justify-center min-h-[50vh]",
                        style: {
                            backgroundImage: "url('/images/programs-hero-bg.jpg')"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-6xl font-bold font-heading mb-6 text-gray-900 drop-shadow-md",
                                    children: "Our Programs"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-20 bg-repeat bg-center overflow-x-hidden",
                        style: {
                            backgroundImage: "url('/images/screen.png')",
                            backgroundSize: "688px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedProgramCard, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$Business__and__Finance$2f$Businesses$2f$New__folder$2f$avenirsouriantwebsite$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documents/Business and Finance/Businesses/New folder/avenirsouriantwebsite/src/app/programs/page.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=04rc_Business%20and%20Finance_Businesses_New%20folder_avenirsouriantwebsite_src_0i.mv2v._.js.map