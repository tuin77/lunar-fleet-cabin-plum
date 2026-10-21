import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-COTB8C6d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var HARDWARE = [
	{
		"id": "cpad",
		"label": "CPad",
		"groups": [{
			"label": "",
			"items": [{
				"id": "cpad",
				"name": "CPad",
				"slogan": "新拍档，一 PAD 即合。",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/CPad/icon/CPad.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/CPad/icon/CPad-hover.png",
				"isNew": true,
				"href": null
			}]
		}]
	},
	{
		"id": "interactive",
		"label": "交互屏",
		"groups": [{
			"label": "",
			"items": [{
				"id": "flex-3",
				"name": "FLEX 3",
				"slogan": "灵活组合，FLEX 无限",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/flex-3/icon/flex-3-n.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/flex-3/icon/flex-3-hover-n.png",
				"isNew": true,
				"href": null
			}, {
				"id": "flex-3-kds",
				"name": "FLEX 3 KDS",
				"slogan": "专为餐饮后厨打造",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/icon/flex-3-kds.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/icon/flex-3-kds-hover.png",
				"isNew": true,
				"href": null
			}]
		}]
	},
	{
		"id": "mobile",
		"label": "移动",
		"groups": [
			{
				"label": "V系列",
				"items": [
					{
						"id": "v3-plus",
						"name": "V3 PLUS",
						"slogan": "PLUS 全面进化",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/v3-plus/icon/v3-plus.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/v3-plus/icon/v3-plus-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "v3e",
						"name": "V3e",
						"slogan": "快人一步",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/v3e/icon/v3e.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/v3e/icon/v3e-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "v3-family",
						"name": "V3 家族",
						"slogan": "超越经典，开启新一代数字化体验",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/v3-family/icon/v3-family.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/v3-family/icon/v3-family-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "v3-mix",
						"name": "V3 MIX",
						"slogan": "专业商用平板一体机，就从MIX开始。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/v3-mix/icon/v3-mix.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/v3-mix/icon/v3-mix-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "v2-pro",
						"name": "V2 PRO",
						"slogan": "敢于创新，开启商用全面屏、双打印时代",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/1/V2PRO.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/1/V2PRO.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "v2s-plus",
						"name": "V2s PLUS",
						"slogan": "突破再融合，更多实力跨界",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/1/V2sPLUS.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/1/V2sPLUS.png",
						"isNew": false,
						"href": null
					}
				]
			},
			{
				"label": "L系列",
				"items": [
					{
						"id": "l3",
						"name": "L3",
						"slogan": "商业场景全链提效专家",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/l3/icon/l3.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/l3/icon/l3-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "l2s-pro",
						"name": "L2s PRO",
						"slogan": "PRO一下，为业务前沿的员工赋能。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/l2s-pro/icon/l2s-pro.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/l2s-pro/icon/l2s-pro-hover.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "l2ks",
						"name": "L2Ks",
						"slogan": "匠心升级，定义场内应用新经典",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/l2ks/icon/l2ks.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/l2ks/icon/l2ks-hover.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "l2h",
						"name": "L2H",
						"slogan": "性能强劲PDA，更高、更强、更安全",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/l2h/icon/l2h.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/l2h/icon/l2h-hover.png",
						"isNew": false,
						"href": null
					}
				]
			},
			{
				"label": "M系列",
				"items": [{
					"id": "m3",
					"name": "M3",
					"slogan": "全面升级，餐厅运营好帮手。",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/m3/icon/m3.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/m3/icon/m3-hover.png",
					"isNew": true,
					"href": null
				}]
			}
		]
	},
	{
		"id": "payment",
		"label": "金融",
		"groups": [{
			"label": "P系列",
			"items": [{
				"id": "p3",
				"name": "P3",
				"slogan": "数字支付先锋，大屏视野，强劲性能，领先登场。",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/p3/icon/p3.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/p3/icon/p3-hover.png",
				"isNew": true,
				"href": null
			}, {
				"id": "p2-xpro",
				"name": "P2 Xpro",
				"slogan": "多种识别，为商业注入新想象。",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/2/p2Xpro.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/2/p2Xpro.png",
				"isNew": false,
				"href": null
			}]
		}, {
			"label": "蜻蜓",
			"items": [{
				"id": "dragonfly",
				"name": "蜻蜓银联版",
				"slogan": "轻接入 轻识别 轻支付",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/2/FLYDRAGON.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/2/FLYDRAGON.png",
				"isNew": false,
				"href": null
			}]
		}]
	},
	{
		"id": "desktop",
		"label": "台式",
		"groups": [
			{
				"label": "T系列",
				"items": [
					{
						"id": "t3-family",
						"name": "T3 家族",
						"slogan": "澎湃之芯，优雅之形，高端门店理想之选。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/t3-family/icon/t3-family.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/t3-family/icon/t3-family-hover.png",
						"isNew": true,
						"href": "/t3-family"
					},
					{
						"id": "t3-pro-series",
						"name": "T3 PRO 家族",
						"slogan": "性能赢家，实力造就旗舰。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/t3-pro/icon/t3-pro-series.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/t3-pro/icon/t3-pro-series-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "t2s",
						"name": "T2s",
						"slogan": "性能卓越，助力商户更好的经营成长",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/T2.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/T2.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "t2s-lite",
						"name": "T2s LITE",
						"slogan": "更灵活的组合，多场景适用",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/T2LITE.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/T2LITE.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "t2-mini",
						"name": "T2 MINI",
						"slogan": "小巧不占地，功能更齐全",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/T2MINI.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/T2MINI.png",
						"isNew": false,
						"href": null
					}
				]
			},
			{
				"label": "D系列",
				"items": [
					{
						"id": "d3-family",
						"name": "D3 家族",
						"slogan": "真八核，越级之选。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d3-family/icon/d3-family.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d3-family/icon/d3-family-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "d3-pro",
						"name": "D3 PRO",
						"slogan": "品质首选，实力加持门店运营。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d3-pro/icon/d3-pro.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d3-pro/icon/d3-pro-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "d3-mini",
						"name": "D3 MINI",
						"slogan": "小巧精悍，一台足矣。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d3-mini/icon/d3-mini.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d3-mini/icon/d3-mini-hover.png",
						"isNew": true,
						"href": null
					},
					{
						"id": "d2s-kds",
						"name": "D2s KDS",
						"slogan": "后厨提效能手，赋能餐厅厨房数字化升级。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d2s-kds/icon/product.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d2s-kds/icon/product-hover.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2s-plus-combo",
						"name": "D2s PLUS COMBO",
						"slogan": "门店零售，一台COMBO全搞定。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d2s-plus-combo/icon/product.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d2s-plus-combo/icon/product-hover.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2s-plus",
						"name": "D2s PLUS",
						"slogan": "打印功能加码，数字化零售新体验。",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/d2s-plus/icon/product.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/d2s-plus/icon/product-hover.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2s-combo",
						"name": "D2s COMBO",
						"slogan": "四合一体，一步到位",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/D2SCOMBO.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/D2SCOMBO.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2s",
						"name": "D2s",
						"slogan": "便利收银，小亦有可为",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/D2S.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/D2S.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2s-lite",
						"name": "D2s LITE",
						"slogan": "睿智酷黑极简机身，提升门店格调和品质",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/D2SLITE.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/D2SLITE.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2-mini",
						"name": "D2 MINI",
						"slogan": "专业领域使用，防护更全面",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/D2MINI.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/D2MINI.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "d2",
						"name": "D2",
						"slogan": "极简白色，让你更加出色",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/D2.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/D2.png",
						"isNew": false,
						"href": null
					}
				]
			},
			{
				"label": "S系列",
				"items": [
					{
						"id": "s2",
						"name": "S2",
						"slogan": "集票据打印、称重收银一体化",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/S2.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/S2.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "s2cc",
						"name": "S2 CC",
						"slogan": "“秤”年轻，打造门店称重新主场",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/S2CC.png",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/S2CC.png",
						"isNew": false,
						"href": null
					},
					{
						"id": "s2lcc",
						"name": "S2L CC",
						"slogan": "领异“标”新，商超称重新体验",
						"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/S2LCC.png?v=1",
						"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/S2LCC.png?v=1",
						"isNew": false,
						"href": null
					}
				]
			},
			{
				"label": "FT系列",
				"items": [{
					"id": "ft2",
					"name": "FT2",
					"slogan": "纤薄多能，交互无界",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/ft2.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/ft2.png",
					"isNew": false,
					"href": null
				}]
			}
		]
	},
	{
		"id": "kiosks",
		"label": "自助",
		"groups": [{
			"label": "",
			"items": [{
				"id": "k2",
				"name": "K2",
				"slogan": "多版本适配多场景，大有可为",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/4/K2.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/4/K2.png",
				"isNew": false,
				"href": null
			}, {
				"id": "k2-mini",
				"name": "K2 MINI",
				"slogan": "全民自助 从小开始",
				"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/4/K2MINI.png",
				"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/4/K2MINI.png",
				"isNew": false,
				"href": null
			}]
		}]
	},
	{
		"id": "network",
		"label": "网络",
		"groups": [{
			"label": "",
			"items": [
				{
					"id": "80-label-printer",
					"name": "80扫码打印机",
					"slogan": "扫打一体，新物种。",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/80-label-printer/icon/80-label-printer.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/80-label-printer/icon/80-label-printer-hover.png",
					"isNew": true,
					"href": null
				},
				{
					"id": "mini-ap",
					"name": "MINI AP",
					"slogan": "小身材，广覆盖，连接无处不在",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/mini-ap/icon/mini-ap.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/mini-ap/icon/mini-ap-hover.png",
					"isNew": true,
					"href": null
				},
				{
					"id": "w1s",
					"name": "4G Wi-Fi基站",
					"slogan": "让每家店，网络时刻在线",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/5/w1s.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/5/w1s.png",
					"isNew": false,
					"href": null
				},
				{
					"id": "80-kitchen-cloud-printer",
					"name": "80后厨云打印机",
					"slogan": "全能打印专家，引领打印“云”体验",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/80-kitchen-printer/icon/80-printer.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/80-kitchen-printer/icon/80-printer.png",
					"isNew": false,
					"href": null
				},
				{
					"id": "esl",
					"name": "智能电子价签",
					"slogan": "实时、准确显示商品最新价格信息",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/5/ESL.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/5/ESL.png",
					"isNew": false,
					"href": null
				}
			]
		}]
	},
	{
		"id": "accessories",
		"label": "配件",
		"groups": [{
			"label": "",
			"items": [
				{
					"id": "58-label-receipt-printer",
					"name": "58标签票据打印机",
					"slogan": "给力“小将”，轻巧登场。",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/58-label-ticket-printer/icon/58-label-ticket-printer.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/58-label-ticket-printer/icon/58-label-ticket-printer-hover.png",
					"isNew": true,
					"href": null
				},
				{
					"id": "blink2",
					"name": "小闪2 扫码盒",
					"slogan": "重新定义扫码效率美学。",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/blink2/icon/blink2.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/blink2/icon/blink2-hover.png",
					"isNew": true,
					"href": null
				},
				{
					"id": "sound-box",
					"name": "SUNMI Sound Box",
					"slogan": "",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/sound-box/icon/sound-box.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/sound-box/icon/sound-box-hover.png",
					"isNew": true,
					"href": null
				},
				{
					"id": "max-cash-drawer",
					"name": "MAX 钱箱",
					"slogan": "“大”容量，积蓄无限可能。",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/max-cash-drawer/icon/max-cash-drawer-v1.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/max-cash-drawer/icon/max-cash-drawer-v1.png",
					"isNew": false,
					"href": null
				},
				{
					"id": "blink",
					"name": "小闪扫码盒",
					"slogan": "即插即用，扫码支付",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/6/scanner.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/6/scanner.png",
					"isNew": false,
					"href": null
				},
				{
					"id": "2d-handheld-scanner",
					"name": "二维扫码枪",
					"slogan": "扫码快而准 收银效率高",
					"icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/6/scannergun.png",
					"hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/6/scannergun.png",
					"isNew": false,
					"href": null
				}
			]
		}]
	}
];
var SPEC_TITLE = "SUNMI T3家族 技术规格";
var SPEC_APPENDIX = "支持与下载";
var SPEC_TABS = [{
	"id": "t3",
	"label": "T3",
	"rows": [
		{
			"title": "处理器",
			"desc": "八核，最高至2.4GHz",
			"span": 1
		},
		{
			"title": "操作系统",
			"desc": "SUNMI OS 4.0（基于Android 13）",
			"span": 1
		},
		{
			"title": "内存",
			"desc": "4GB RAM + 64GB ROM\n扩展 Micro SD 卡槽，最高支持 2TB",
			"span": 1
		},
		{
			"title": "触摸屏",
			"desc": "15.6\" FHD，1920*1080 像素，IPS 多点触控电容触摸屏，防指纹涂层",
			"span": 1
		},
		{
			"title": "GMS",
			"desc": "支持（可选）",
			"span": 1
		},
		{
			"title": "按键",
			"desc": "1*电源键\n1*音量键（隐藏）",
			"span": 1
		},
		{
			"title": "卡槽",
			"desc": "1*Micro SIM (4G版）\n1*Micro SD",
			"span": 1
		},
		{
			"title": "接口",
			"desc": "3*USB 2.0 Type-A\n1*USB 3.0 Type-A\n1*USB Type-C\n2*Micro USB\n1*Micro USB 调试口\n1*RJ45\n1*RJ11\n1*RJ12\n1*DC",
			"span": 1
		},
		{
			"title": "网络",
			"desc": "4G/3G（可选）",
			"span": 1
		},
		{
			"title": "Wi-Fi",
			"desc": "5GHz/2.4GHz\nIEEE 802.11 a/b/g/n/ac",
			"span": 1
		},
		{
			"title": "蓝牙",
			"desc": "蓝牙5.0, 支持BLE",
			"span": 1
		},
		{
			"title": "定位",
			"desc": "GPS/Glonass/Beidou/Galileo (4G版）",
			"span": 1
		},
		{
			"title": "摄像头",
			"desc": "500万像素定焦前摄",
			"span": 1
		},
		{
			"title": "NFC",
			"desc": "屏上拍卡\n支持 ISO/IEC 14443 TypeA/B ，Mifare ， Felica，符合ISO 15693标准\n支持主机卡模拟（HCE）",
			"span": 1
		},
		{
			"title": "指纹",
			"desc": "支持",
			"span": 1
		},
		{
			"title": "音频",
			"desc": "2*2W 喇叭\n1*麦克风",
			"span": 1
		},
		{
			"title": "传感器",
			"desc": "重力传感器",
			"span": 1
		},
		{
			"title": "电源适配器",
			"desc": "输入：100~240V AC\n输出：24V/2.5A DC",
			"span": 1
		},
		{
			"title": "净重",
			"desc": "3kg",
			"span": 1
		},
		{
			"title": "毛重",
			"desc": "5.5kg",
			"span": 1
		},
		{
			"title": "工作环境",
			"desc": "运行温度： 0°C~40°C\n存储温度： -20°C～60°C\n运行湿度：5% to 95% 无凝结",
			"span": 1
		},
		{
			"title": "配件（选配）",
			"desc": "15.6\"副屏，FHD 1920*1080像素，电容多点式触摸\n10.1\"副屏，HD 1280*800像素，电容多点式触摸\nMSR读卡器\n钱箱转接板\n整机加高脚垫",
			"span": 2
		},
		{
			"title": "尺寸(L*W*H)",
			"desc": "373*176*314 mm",
			"span": 1
		},
		{
			"title": "认证",
			"desc": "GMS 、SOTI ",
			"span": 1
		}
	],
	"downloads": [
		{
			"title": "产品六视图",
			"desc": "ZIP(101.63MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/5b6ae4296e05469389e13a13bf0a58df.zip"
		},
		{
			"title": "产品单页",
			"desc": "PDF(2.73MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/9aa594efd1e74692b3ef91f342ffe81e.pdf"
		},
		{
			"title": "开箱视频",
			"desc": "MP4(58.25MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/1e7307ca1df946b5b3a059afce766bce.mp4"
		},
		{
			"title": "场景演示",
			"desc": "ZIP(13.94MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/1250be6aae274fcead0035e6a3502fc1.zip"
		},
		{
			"title": "配件单页",
			"desc": "PDF(1.94MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/5216cbf722464d7dad7ea4de3c14529d.pdf"
		}
	]
}, {
	"id": "t3-80mm",
	"label": "T3 80MM",
	"rows": [
		{
			"title": "处理器",
			"desc": "八核，最高至2.4GHz",
			"span": 1
		},
		{
			"title": "操作系统",
			"desc": "SUNMI OS 4.0（基于Android 13）",
			"span": 1
		},
		{
			"title": "内存",
			"desc": "4GB RAM + 64GB ROM\n扩展 Micro SD 卡槽，最高支持 2TB",
			"span": 1
		},
		{
			"title": "触摸屏",
			"desc": "15.6\" FHD，1920*1080 像素，IPS 多点触控电容触摸屏，防指纹涂层",
			"span": 1
		},
		{
			"title": "打印机",
			"desc": "高速热敏打印：250mm/s\n纸卷宽度/直径：80mm/80mm",
			"span": 1
		},
		{
			"title": "GMS",
			"desc": "支持（可选）",
			"span": 1
		},
		{
			"title": "按键",
			"desc": "1*电源键\n1*音量键（隐藏）",
			"span": 1
		},
		{
			"title": "卡槽",
			"desc": "1*Micro SIM (4G版）\n1*Micro SD",
			"span": 1
		},
		{
			"title": "接口",
			"desc": "3*USB 2.0 Type-A\n1*USB 3.0 Type-A\n1*USB Type-C\n2*Micro USB\n1*Micro USB 调试口\n1*RJ45\n1*RJ11\n1*RJ12\n1*DC",
			"span": 1
		},
		{
			"title": "网络",
			"desc": "4G/3G（可选）",
			"span": 1
		},
		{
			"title": "Wi-Fi",
			"desc": "5GHz/2.4GHz\nIEEE 802.11 a/b/g/n/ac",
			"span": 1
		},
		{
			"title": "蓝牙",
			"desc": "蓝牙5.0，支持BLE",
			"span": 1
		},
		{
			"title": "定位",
			"desc": "GPS/Glonass/Beidou/\nGalileo (4G版）",
			"span": 1
		},
		{
			"title": "摄像头",
			"desc": "500万像素定焦前摄",
			"span": 1
		},
		{
			"title": "NFC",
			"desc": "屏上拍卡\n支持 ISO/IEC 14443 TypeA/B ，Mifare ， Felica，符合ISO 15693标准\n支持主机卡模拟（HCE）",
			"span": 1
		},
		{
			"title": "指纹",
			"desc": "支持",
			"span": 1
		},
		{
			"title": "音频",
			"desc": "2*2W 喇叭\n1*麦克风",
			"span": 1
		},
		{
			"title": "传感器",
			"desc": "重力传感器",
			"span": 1
		},
		{
			"title": "电源适配器",
			"desc": "输入：100~240V AC\n输出：24V/2.5A DC",
			"span": 1
		},
		{
			"title": "净重",
			"desc": "3.6kg",
			"span": 1
		},
		{
			"title": "毛重",
			"desc": "6.5kg",
			"span": 1
		},
		{
			"title": "工作环境",
			"desc": "运行温度： 0°C~40°C\n存储温度： -20°C～60°C\n运行湿度：5% to 95% 无凝结",
			"span": 1
		},
		{
			"title": "配件（选配）",
			"desc": "15.6\"副屏，FHD 1920*1080像素，电容多点式触摸\n10.1\"副屏，HD 1280*800像素，电容多点式触摸\nMSR读卡器\n钱箱转接板\n58mm 打印机档板\n整机加高脚垫",
			"span": 2
		},
		{
			"title": "尺寸(L*W*H)",
			"desc": "373*200*373 mm",
			"span": 1
		},
		{
			"title": "认证",
			"desc": "GMS 、SOTI ",
			"span": 1
		}
	],
	"downloads": [
		{
			"title": "产品六视图",
			"desc": "ZIP(116.19MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/a36b39e7fb954f67b407e4f5499a6ecc.zip"
		},
		{
			"title": "产品单页",
			"desc": "PDF(2.48MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/c45c8bc6d1d24eb1a2843da61cdc85cb.pdf"
		},
		{
			"title": "开箱视频",
			"desc": "MP4(58.25MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/7f451beb71774b73a2d9aa5c3f830bd6.mp4"
		},
		{
			"title": "场景演示",
			"desc": "ZIP(13.94MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/c2fb68b38f1248f3bde6836474d99b0f.zip"
		},
		{
			"title": "配件单页",
			"desc": "PDF(1.94MB)",
			"href": "https://cdn.sunmi.com/public/generalfile/mgt_import/582593643d034b1e89ce3fd5e47c934c.pdf"
		}
	]
}];
var NAV = [
	{
		label: "硬件产品",
		kind: "hardware"
	},
	{
		label: "AI及软件服务",
		kind: "menu",
		items: [
			"SUNMI OS",
			"SUNMI DMP",
			"应用市场",
			"SUNMI AI"
		]
	},
	{
		label: "解决方案",
		kind: "menu",
		items: [
			"屏幕管理解决方案",
			"商捷智慧医疗解决方案",
			"大程序行业解决方案",
			"商米 SoftPOS 方案",
			"生态行业解决方案"
		]
	},
	{
		label: "客户案例",
		kind: "menu",
		items: [
			"零售",
			"餐饮",
			"美业",
			"酒旅"
		]
	},
	{
		label: "商米之家",
		kind: "menu",
		items: ["预约体验", "门店查询"]
	},
	{
		label: "开发者",
		kind: "menu",
		items: [
			"开发者中心",
			"API / SDK",
			"应用市场"
		]
	},
	{
		label: "服务与支持",
		kind: "menu",
		items: [
			"SUNMI Care",
			"保修政策",
			"保修查询",
			"服务网点"
		]
	},
	{
		label: "关于商米",
		kind: "menu",
		items: [
			"关于我们",
			"联系我们",
			"人才招聘",
			"投资者关系",
			"可持续发展",
			"廉正与合规"
		]
	}
];
var FOOTER = [
	{
		title: "硬件产品",
		links: HARDWARE.map((c) => ({
			label: c.label,
			href: `/products#${c.id}`
		}))
	},
	{
		title: "服务与支持",
		links: [
			"SUNMI Care",
			"保修政策",
			"保修查询",
			"服务网点"
		].map((label) => ({
			label,
			href: ""
		}))
	},
	{
		title: "解决方案",
		links: [
			"屏幕管理解决方案",
			"商捷智慧医疗解决方案",
			"大程序行业解决方案",
			"商米 SoftPOS 方案",
			"生态行业解决方案"
		].map((label) => ({
			label,
			href: ""
		}))
	},
	{
		title: "关于商米",
		links: [
			"关于我们",
			"联系我们",
			"人才招聘",
			"投资者关系",
			"可持续发展",
			"廉正与合规"
		].map((label) => ({
			label,
			href: ""
		}))
	},
	{
		title: "品牌中心",
		links: [
			{
				label: "商米之家",
				href: ""
			},
			{
				label: "新闻资讯",
				href: ""
			},
			{
				label: "客户案例",
				href: ""
			},
			{
				label: "品牌资料包",
				href: ""
			},
			{
				label: "T3 家族",
				href: "/t3-family"
			}
		]
	}
];
function flatProducts() {
	return HARDWARE.flatMap((c) => c.groups.flatMap((g) => g.items.map((item) => ({
		...item,
		categoryId: c.id,
		category: c.label,
		series: g.label
	}))));
}
/** In-app path, optional hash: `/`, `/products`, `/products#desktop`, `/t3-family`. */
function SiteLink({ href, className, children, onClick }) {
	const [path, hash] = href.split("#");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: path === "/t3-family" ? "/t3-family" : path === "/products" ? "/products" : "/",
		hash: hash || void 0,
		className,
		onClick,
		children
	});
}
var CDN = "https://file.cdn.sunmi.com/newebsite";
var img = (path) => `${CDN}/${path}`;
var LOGO_PATH = "M5240.470588 0v1024h-240.941176V0h240.941176zM1400.470588 0v703.969882c0 70.716235 57.344 128 128 128h256a128 128 0 0 0 128-128V0H2168.470588v768.060235A256 256 0 0 1 1912.470588 1024h-512A256 256 0 0 1 1144.470588 768V0h256z m1716.705883 0A256 256 0 0 1 3373.176471 256V1024h-256V320.030118a128 128 0 0 0-128-128h-256a128 128 0 0 0-128 128V1024H2349.176471V256A256 256 0 0 1 2605.176471 0zM4312.847059 384V1024h-252.988235V384h252.988235zM4565.835294 0C4705.581176 0 4818.823529 114.627765 4818.823529 256V1024h-252.988235V320.030118c0-70.716235-56.621176-128-126.494118-128h-505.97647c-69.872941 0-126.494118 57.283765-126.494118 128V1024H3553.882353V256C3553.882353 114.627765 3667.124706 0 3806.870588 0zM988.702118 8.071529v190.464l-560.248471-0.180705-63.367529 0.180705a111.134118 111.134118 0 0 0 0 222.268236h396.890353a254.012235 254.012235 0 0 1 253.952 253.952v95.232A254.012235 254.012235 0 0 1 761.976471 1024H27.226353v-190.464l560.248471 0.180706 63.367529-0.240941a111.134118 111.134118 0 1 0 0-222.208H254.012235A254.012235 254.012235 0 0 1 0 357.255529v-95.171764A254.012235 254.012235 0 0 1 254.012235 8.011294h734.689883z";
var ChromeContext = (0, import_react.createContext)(null);
function useChrome() {
	const value = (0, import_react.useContext)(ChromeContext);
	if (!value) throw new Error("Site chrome is missing");
	return value;
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "logo",
		viewBox: "0 0 5240 1024",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: LOGO_PATH,
			fill: "currentColor"
		})
	});
}
function replyFor(text) {
	if (/价|多少|报价/.test(text)) return "配置按门店场景报价。留下联系方式后，顾问会在工作时间内回复。";
	if (/t3|台式|规格/.test(text)) return "T3 家族是智能台式终端，支持三屏异显、主屏翻转与 SUNMI OS 4.0。完整参数在产品页「技术规格」。";
	if (/配件|钱箱|读卡|脚垫/.test(text)) return "可选配件包括 MSR 读卡器、打印机挡板、整机加高脚垫和钱箱转接板。";
	if (/预约|商米之家|体验/.test(text)) return "商米之家提供三代新品的场景体验，可在页面发起预约。";
	return "已收到。你可以继续问配置、配件，或直接发起采购咨询。";
}
function ProductVisual({ product, lit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "hw-shot",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: lit ? product.hoverIcon : product.icon,
			alt: ""
		})
	});
}
function SiteChrome({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const onProduct = pathname.includes("t3-family");
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [cat, setCat] = (0, import_react.useState)(HARDWARE[4].id);
	const [lit, setLit] = (0, import_react.useState)(null);
	const [openSeries, setOpenSeries] = (0, import_react.useState)(HARDWARE[0].id);
	const [lead, setLead] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [chat, setChat] = (0, import_react.useState)(false);
	const [legal, setLegal] = (0, import_react.useState)(null);
	const [info, setInfo] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		company: "",
		need: "采购咨询"
	});
	const [error, setError] = (0, import_react.useState)("");
	const [msgs, setMsgs] = (0, import_react.useState)([{
		from: "bot",
		text: "您好，我是商米在线客服。想了解硬件、T3 家族或门店体验，直接告诉我。"
	}]);
	const [draft, setDraft] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setMenu(false);
		setInfo(null);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				setLead(false);
				setChat(false);
				setMenu(false);
				setLegal(null);
				setInfo(null);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const api = (0, import_react.useMemo)(() => ({
		openLead: (need = "采购咨询") => {
			setForm((f) => ({
				...f,
				need
			}));
			setSent(false);
			setError("");
			setLead(true);
			setMenu(false);
		},
		openInfo: (label) => {
			setMenu(false);
			setInfo(label);
		},
		openLegal: (kind) => setLegal(kind),
		openChat: () => setChat(true)
	}), []);
	const active = HARDWARE.find((c) => c.id === cat) ?? HARDWARE[0];
	const submitLead = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !/^1\d{10}$/.test(form.phone) || !form.company.trim()) {
			setError("请填写姓名、11 位手机号和公司名称。");
			return;
		}
		const leads = JSON.parse(localStorage.getItem("sunmi-leads") || "[]");
		leads.push({
			...form,
			at: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem("sunmi-leads", JSON.stringify(leads));
		setError("");
		setSent(true);
	};
	const sendChat = (e) => {
		e.preventDefault();
		const text = draft.trim();
		if (!text) return;
		setMsgs((m) => [
			...m,
			{
				from: "me",
				text
			},
			{
				from: "bot",
				text: replyFor(text)
			}
		]);
		setDraft("");
	};
	const productNode = (product) => {
		const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductVisual, {
			product,
			lit: lit === product.id
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hw-name",
			children: [product.name, product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "NEW" }) : null]
		})] });
		const handlers = {
			onMouseEnter: () => setLit(product.id),
			onMouseLeave: () => setLit((id) => id === product.id ? null : id),
			onFocus: () => setLit(product.id),
			onBlur: () => setLit((id) => id === product.id ? null : id)
		};
		if (product.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: product.href,
			className: "hw-card",
			...handlers,
			children: body
		}, product.id);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "hw-card",
			...handlers,
			onClick: () => api.openInfo(product.name),
			children: body
		}, product.id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ChromeContext.Provider, {
		value: api,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "skip",
				href: "#content",
				children: "跳到主要内容"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: `site-header ${solid ? "is-solid" : ""} ${onProduct ? "has-sub" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "topbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "brand-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "商米首页",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "nav-row",
							"aria-label": "主导航",
							children: NAV.map((group) => group.kind === "hardware" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "nav-item",
								onMouseEnter: () => setCat((c) => c || "desktop"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "nav-btn",
									children: group.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mega hardware",
									role: "region",
									"aria-label": "硬件产品",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hw",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
											className: "hw-cats",
											children: [HARDWARE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: c.id === active.id ? "is-on" : "",
												onMouseEnter: () => setCat(c.id),
												onFocus: () => setCat(c.id),
												children: c.label
											}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/products",
												className: "hw-all",
												children: "查看全部产品"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "hw-main",
											children: active.groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [group.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: group.label }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "hw-grid",
												children: group.items.map(productNode)
											})] }, group.label || active.id))
										})]
									})
								})]
							}, group.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "nav-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "nav-btn",
									type: "button",
									children: group.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mega",
									children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => api.openInfo(item),
										children: item
									}, item))
								})]
							}, group.label))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "top-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "divider" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "icon-btn desktop-only",
								type: "button",
								"aria-label": "更多站点",
								onClick: () => api.openInfo("更多站点"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									"aria-hidden": "true",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "5",
											cy: "5",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "5",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "19",
											cy: "5",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "5",
											cy: "12",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "12",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "19",
											cy: "12",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "5",
											cy: "19",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "12",
											cy: "19",
											r: "2"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											cx: "19",
											cy: "19",
											r: "2"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "menu-toggle",
								type: "button",
								"aria-label": "打开菜单",
								onClick: () => setMenu(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "22",
									height: "22",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
								})
							})
						]
					})]
				}), onProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "subbar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "subbar-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sub-title",
								children: "SUNMI T3 家族"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "sub-links",
								"aria-label": "本页章节",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#top",
										children: "概览"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#scenes",
										children: "场景"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#specs",
										children: "技术规格"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ghost",
								type: "button",
								onClick: () => api.openLead("采购 SUNMI T3"),
								children: "采购咨询"
							})
						]
					})
				}) : null]
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sheet",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMenu(false),
					"aria-label": "关闭",
					children: "×"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => setMenu(false),
						children: "首页"
					}),
					HARDWARE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpenSeries((s) => s === c.id ? null : c.id),
						children: c.label
					}), openSeries === c.id ? c.groups.flatMap((g) => g.items.map((p) => p.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "sheet-sub",
						to: p.href,
						onClick: () => setMenu(false),
						children: p.name
					}, p.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "sheet-sub",
						type: "button",
						onClick: () => api.openInfo(p.name),
						children: p.name
					}, p.id))) : null] }, c.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products",
						onClick: () => setMenu(false),
						children: "全部产品"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => api.openLead("采购咨询"),
						children: "采购咨询"
					})
				] })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "foot-grid",
						children: [FOOTER.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: col.title }), col.links.map((link) => link.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLink, {
							href: link.href,
							children: link.label
						}, link.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "link",
							type: "button",
							onClick: () => api.openInfo(link.label),
							children: link.label
						}, link.label))] }, col.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "phone",
								children: "400-6666-509"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hours",
								children: "周一到周日 0:00-24:00"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ghost",
								type: "button",
								onClick: () => api.openLead("免费咨询"),
								children: "免费咨询"
							})
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "foot-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "foot-meta",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 上海商米科技集团股份有限公司 版权所有" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "link",
									type: "button",
									onClick: () => setLegal("law"),
									children: "法律文件"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "link",
									type: "button",
									onClick: () => setLegal("privacy"),
									children: "隐私与安全"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "沪ICP备 16006543" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "beian",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img("home/icon-beian.png"),
										alt: ""
									}), "沪公安网备 31011002003742"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "反诈劝阻电话：962110" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "socials",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img("chinashop-2024/lg/wechat.png"),
								alt: "微信"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img("chinashop-2024/lg/tiktok.png"),
								alt: "抖音"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "floaters",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "floater primary",
					type: "button",
					onClick: () => api.openLead(onProduct ? "采购 SUNMI T3" : "采购咨询"),
					children: "采购咨询"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "floater",
					type: "button",
					onClick: () => setChat(true),
					children: "在线客服"
				})]
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mask",
				onClick: () => setLead(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dialog",
					onClick: (e) => e.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "lead-title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "x",
						type: "button",
						onClick: () => setLead(false),
						"aria-label": "关闭",
						children: "×"
					}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ok",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "提交成功" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "顾问将尽快与您联系。您也可以拨打 400-6666-509。" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submitLead,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								id: "lead-title",
								children: "采购咨询"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hint",
								children: "留下信息，了解配置、报价或预约体验。"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								children: "姓名"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								value: form.name,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "phone",
								children: "手机号"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								inputMode: "numeric",
								value: form.phone,
								onChange: (e) => setForm({
									...form,
									phone: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "company",
								children: "公司"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "company",
								value: form.company,
								onChange: (e) => setForm({
									...form,
									company: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "need",
								children: "需求"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "need",
								value: form.need,
								onChange: (e) => setForm({
									...form,
									need: e.target.value
								}),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "采购咨询" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "采购 SUNMI T3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "预约商米之家体验" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "了解配件与金融副屏" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "免费咨询" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "成为合作伙伴" })
								]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "err",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "submit",
								type: "submit",
								children: "提交"
							})
						]
					})]
				})
			}) : null,
			chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mask",
				onClick: () => setChat(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "chat",
					onClick: (e) => e.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "在线客服" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setChat(false),
							"aria-label": "关闭客服",
							children: "×"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "msgs",
							children: msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `bubble ${m.from === "me" ? "me" : "bot"}`,
								children: m.text
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: sendChat,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								placeholder: "输入问题，例如 T3 规格、配件、预约",
								"aria-label": "客服消息"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								children: "发送"
							})]
						})
					]
				})
			}) : null,
			legal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mask",
				onClick: () => setLegal(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dialog",
					onClick: (e) => e.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "x",
							type: "button",
							onClick: () => setLegal(null),
							"aria-label": "关闭",
							children: "×"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: legal === "law" ? "法律文件" : "隐私与安全" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hint",
							children: legal === "law" ? "本站产品介绍依照公开信息整理，配置可能随版本调整。演示站点中的咨询信息仅保存在您的浏览器本地。" : "我们重视个人信息与设备运营数据安全。本演示页的采购咨询仅写入本地浏览器，不会上传到服务器。反诈劝阻电话：962110。"
						})
					]
				})
			}) : null,
			info ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mask",
				onClick: () => setInfo(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dialog",
					onClick: (e) => e.stopPropagation(),
					role: "dialog",
					"aria-modal": "true",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "x",
							type: "button",
							onClick: () => setInfo(null),
							"aria-label": "关闭",
							children: "×"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: info }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hint",
							children: info === "T3 家族" || info.includes("T3") ? "SUNMI T3 家族已开放完整产品页，含场景、配件与技术规格。" : `${info} 栏目可继续浏览，或直接发起采购咨询。当前可进入的产品页是 T3 家族。`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dialog-actions",
							children: [info.includes("T3") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "submit link-btn",
								to: "/t3-family",
								onClick: () => setInfo(null),
								children: "查看 T3 家族"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "ghost ink",
								to: "/products",
								onClick: () => setInfo(null),
								children: "浏览产品"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "submit",
								type: "button",
								onClick: () => {
									setInfo(null);
									api.openLead(info.includes("T3") ? "采购 SUNMI T3" : "采购咨询");
								},
								children: "采购咨询"
							})]
						})
					]
				})
			}) : null
		]
	});
}
var styles_default = "/assets/styles-B3tlUnIi.css";
var Route$3 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "商米科技 - BIoT 开启商业4.0" },
			{
				name: "description",
				content: "商米科技，BIoT 开启商业 4.0。智能台式、移动与金融终端，以及 SUNMI OS、DMP 与行业解决方案。"
			},
			{
				name: "keywords",
				content: "商米,SUNMI,智能收银,台式终端,T3家族,SUNMI OS,BIoT"
			},
			{
				name: "robots",
				content: "index,follow,max-image-preview:large"
			},
			{
				name: "theme-color",
				content: "#0c0d10"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "zh-CN",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
function jsonLdScript(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
var ORG_LD = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "商米科技",
	alternateName: "SUNMI",
	url: "/",
	telephone: "+86-400-6666-509"
};
var $$splitComponentImporter$2 = () => import("./routes-fiWiIa0-.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "商米科技 - BIoT 开启商业4.0" },
			{
				name: "description",
				content: "商米科技官网首页。智能商业平板 CPad、台式终端 T3 家族、移动终端与 SUNMI OS，服务全球商户的 BIoT 产品与方案。"
			},
			{
				name: "keywords",
				content: "商米科技,SUNMI,BIoT,CPad,T3家族,智能收银"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [jsonLdScript(ORG_LD)]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-C8p2ogos.mjs");
var itemList = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: "商米硬件产品",
	description: "商米硬件产品列表，覆盖商业平板、移动、金融、台式、自助、网络与配件。",
	mainEntity: {
		"@type": "ItemList",
		itemListElement: flatProducts().map((p, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: p.name,
			url: p.href ?? "/products"
		}))
	}
};
var Route$1 = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: "硬件产品 - 商米科技" },
			{
				name: "description",
				content: "浏览商米硬件产品：CPad、交互屏、移动终端、金融终端、台式终端 T3 家族、自助终端、网络设备与配件。"
			},
			{
				name: "keywords",
				content: "商米产品,硬件产品,T3家族,台式终端,移动终端,SUNMI"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}],
		scripts: [jsonLdScript(itemList), jsonLdScript({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "首页",
				item: "/"
			}, {
				"@type": "ListItem",
				position: 2,
				name: "硬件产品",
				item: "/products"
			}]
		})]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./t3-family-DOoPv10w.mjs");
var productLd = {
	"@context": "https://schema.org",
	"@type": "ProductGroup",
	name: "SUNMI T3 家族",
	category: "智能台式终端",
	brand: {
		"@type": "Brand",
		name: "SUNMI"
	},
	description: "澎湃之芯，优雅之形。SUNMI T3 家族智能台式终端，支持三屏异显、主屏翻转、SUNMI OS 4.0。",
	url: "/t3-family",
	hasVariant: SPEC_TABS.map((tab) => ({
		"@type": "Product",
		name: `SUNMI ${tab.label}`,
		sku: tab.id,
		additionalProperty: tab.rows.map((row) => ({
			"@type": "PropertyValue",
			name: row.title,
			value: row.desc.replaceAll("\n", "；")
		}))
	}))
};
var Route = createFileRoute("/t3-family")({
	head: () => ({
		meta: [
			{ title: "SUNMI T3 家族 - 智能台式终端 | 商米科技" },
			{
				name: "description",
				content: "SUNMI T3 家族：澎湃之芯，优雅之形，高端门店理想之选。了解三屏异显、主屏翻转、配件，以及 T3 与 T3 80MM 技术规格。"
			},
			{
				name: "keywords",
				content: "SUNMI T3,T3家族,智能台式终端,技术规格,三屏异显,商米收银"
			}
		],
		links: [{
			rel: "canonical",
			href: "/t3-family"
		}],
		scripts: [jsonLdScript(productLd), jsonLdScript({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "首页",
					item: "/"
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "硬件产品",
					item: "/products"
				},
				{
					"@type": "ListItem",
					position: 3,
					name: "SUNMI T3 家族",
					item: "/t3-family"
				}
			]
		})]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	ProductsRoute: Route$1.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$3
	}),
	T3FamilyRoute: Route.update({
		id: "/t3-family",
		path: "/t3-family",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SPEC_APPENDIX as a, HARDWARE as i, useChrome as n, SPEC_TABS as o, SiteLink as r, SPEC_TITLE as s, router_exports as t };
