import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as HARDWARE, n as useChrome } from "./router-COTB8C6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C8p2ogos.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CDN = "https://file.cdn.sunmi.com/newebsite";
var BANNERS = {
	cpad: `${CDN}/products/index/lg/cpad.jpg`,
	interactive: `${CDN}/products/new-list/lg/kiosks.jpg`,
	mobile: `${CDN}/products/new-list/lg/mobile.jpg`,
	payment: `${CDN}/products/new-list/lg/payment.jpg`,
	desktop: `${CDN}/products/new-list/lg/desktop.jpg`,
	kiosks: `${CDN}/products/new-list/lg/kiosks.jpg`,
	network: `${CDN}/products/new-list/lg/network.jpg`,
	accessories: `${CDN}/products/new-list/lg/accessories.jpg`
};
var BLURBS = {
	cpad: "智能商业平板，一台即可覆盖点单、会员与展示。",
	interactive: "模块化交互屏，适配门店与后厨。",
	mobile: "打印、扫码、支付与采集，装进店员手里。",
	payment: "金融终端，覆盖多种支付方式。",
	desktop: "智能台式终端，从旗舰 T 系列到初创 D 系列。",
	kiosks: "自助终端，让顾客自己完成下单与核销。",
	network: "小票、价签与门店网络，把后场连起来。",
	accessories: "扫码、钱箱、键盘与云打印配件。"
};
function Card({ product }) {
	const chrome = useChrome();
	const [lit, setLit] = (0, import_react.useState)(false);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pcard-shot",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: lit ? product.hoverIcon : product.icon,
				alt: ""
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "pcard-name",
			children: [product.name, product.isNew ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "NEW" }) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pcard-slogan",
			children: product.slogan || product.name
		})
	] });
	const hover = {
		onMouseEnter: () => setLit(true),
		onMouseLeave: () => setLit(false),
		onFocus: () => setLit(true),
		onBlur: () => setLit(false)
	};
	if (product.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: product.href,
		className: "pcard is-live",
		...hover,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "pcard",
		...hover,
		onClick: () => chrome.openInfo(product.name),
		children: inner
	});
}
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "products-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "products-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "硬件产品"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "产品" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead",
							children: "覆盖商业平板、移动、金融、台式、自助与配件。带页面的产品可直接进入，例如 T3 家族。"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "product-jump",
				"aria-label": "产品分类",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap jump-row",
					children: HARDWARE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${c.id}`,
						children: c.label
					}, c.id))
				})
			}),
			HARDWARE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: c.id,
				className: "catalog-block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "catalog-banner",
					style: { backgroundImage: `url(${BANNERS[c.id]})` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: BLURBS[c.id] })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap",
					children: c.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "series",
						children: [g.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: g.label }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pcard-grid",
							children: g.items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { product: p }, p.id))
						})]
					}, g.label || c.id))
				})]
			}, c.id))
		]
	});
}
var SplitComponent = ProductsPage;
//#endregion
export { SplitComponent as component };
