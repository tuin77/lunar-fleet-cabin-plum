import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useChrome, r as SiteLink } from "./router-COTB8C6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-fiWiIa0-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CDN = "https://file.cdn.sunmi.com/newebsite";
var SLIDES = [
	{
		kicker: "智能商业平板",
		title: "SUNMI CPad",
		desc: "新拍档，一 PAD 即合。",
		image: `${CDN}/products/index/lg/cpad.jpg`,
		imageSm: `${CDN}/products/index/xs/cpad.jpg`,
		href: "/products#cpad",
		cta: "了解详情"
	},
	{
		kicker: "智能台式终端",
		title: "SUNMI T3 家族",
		desc: "澎湃之芯，优雅之形，高端门店理想之选。",
		image: `${CDN}/products/t3-family/lg/p1-bg.jpg`,
		imageSm: `${CDN}/products/t3-family/xs/p1-bg.jpg`,
		href: "/t3-family",
		cta: "查看 T3 家族"
	},
	{
		kicker: "智能台式终端",
		title: "SUNMI T3 PRO 家族",
		desc: "性能赢家，实力造就旗舰。",
		image: `${CDN}/products/index/lg/t3-pro-family.jpg`,
		imageSm: `${CDN}/products/index/xs/t3-pro-family.jpg`,
		href: "/products#desktop",
		cta: "浏览台式产品"
	},
	{
		kicker: "智能移动终端",
		title: "SUNMI L3",
		desc: "商业场景全链提效专家。",
		image: `${CDN}/products/index/lg/l3.jpg`,
		imageSm: `${CDN}/products/index/xs/l3.jpg`,
		href: "/products#mobile",
		cta: "浏览移动产品"
	}
];
var STATS = [
	{
		n: "200+",
		l: "国家和地区"
	},
	{
		n: "37,000",
		l: "商业应用"
	},
	{
		n: "73,000+",
		l: "合作伙伴"
	},
	{
		n: "2.6亿+",
		l: "下载次数"
	}
];
function HomePage() {
	const chrome = useChrome();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (paused) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setIndex((n) => (n + 1) % SLIDES.length), 6500);
		return () => window.clearInterval(id);
	}, [paused]);
	const slide = SLIDES[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "home-hero",
			style: { backgroundImage: `url(${slide.image})` },
			onMouseEnter: () => setPaused(true),
			onMouseLeave: () => setPaused(false),
			"aria-roledescription": "carousel",
			"aria-label": "首页焦点",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "home-scrim" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap home-hero-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: slide.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: slide.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead",
							children: slide.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "home-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLink, {
								className: "ghost",
								href: slide.href,
								children: slide.cta
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ghost",
								type: "button",
								onClick: () => chrome.openLead(slide.title.includes("T3 家族") ? "采购 SUNMI T3" : "采购咨询"),
								children: "采购咨询"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "home-dots",
					children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: i === index ? "on" : "",
						"aria-label": s.title,
						onClick: () => setIndex(i)
					}, s.title))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap home-split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `${CDN}/products/index/lg/sunmi-os-4.0.jpg`,
					alt: "SUNMI OS 4.0 界面"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow dark",
						children: "SUNMI OS 4.0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "属于商户的专业商用操作系统。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "安全防御、感知排障、Hyper Engine 与商用组件，让门店设备更稳、更好管。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost ink",
						type: "button",
						onClick: () => chrome.openInfo("SUNMI OS"),
						children: "了解详情"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-band alt",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap home-split flip",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `${CDN}/products/index/lg/p2-5.jpg`,
					alt: "远程协助设备管理"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow dark",
						children: "SUNMI DMP"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "远程协助，简化设备管理所需要的一切。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "远程协助、一键配置、设备感知、应用市场与数据统计，也可以私有化部署。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost ink",
						type: "button",
						onClick: () => chrome.openInfo("SUNMI DMP"),
						children: "了解详情"
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "解决方案" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "从门店屏幕到行业生态，把硬件和软件放进真实经营场景。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "home-cards",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						style: { backgroundImage: `url(${CDN}/products/index/lg/p3-2.jpg)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "屏幕管理解决方案" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "把普通电视机变成专业投播平台，灵活分区、分时管理门店内容。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => chrome.openInfo("屏幕管理解决方案"),
								children: "了解详情"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						style: { backgroundImage: `url(${CDN}/products/index/lg/p3-5.jpg)` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "生态行业解决方案" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "为商户提供数字店铺方案，帮助店铺智慧经营。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => chrome.openInfo("生态行业解决方案"),
								children: "了解详情"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-band alt",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap home-duo",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `${CDN}/products/index/lg/p4-1-n.jpg`,
					alt: "商米之家门店"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "商米之家" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "数字化门店场景体验空间，全国陆续开放。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost ink",
						type: "button",
						onClick: () => chrome.openLead("预约商米之家体验"),
						children: "了解详情"
					})
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `${CDN}/products/index/lg/p4-2.jpg`,
					alt: "SUNMI Care 服务"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "橙心伴随" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "SUNMI Care 提升交付、保修与现场体验。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost ink",
						type: "button",
						onClick: () => chrome.openInfo("SUNMI Care"),
						children: "了解详情"
					})
				] })] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "home-band dark",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "商米服务全球商户" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "联合合作伙伴，为各地生意提供数字化经营和增长方案。" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "stats",
						children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: s.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: s.l })] }, s.l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fine center",
						children: "*以上数据截止时间为：2026年6月30日"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "portal-row",
						children: [
							[
								"商米渠道中心",
								"和商米共创，打造共赢生态。",
								`${CDN}/products/index/icon/reseller.png`
							],
							[
								"商米开发者",
								"汇聚核心开发能力，助力构建数字化场景。",
								`${CDN}/products/index/icon/developer.png`
							],
							[
								"商米数字店铺",
								"携手生态伙伴，打造一站式门店平台。",
								`${CDN}/products/index/icon/store.png`
							]
						].map(([title, desc, icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "portal",
							onClick: () => chrome.openInfo(title),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: icon,
									alt: ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: desc })
							]
						}, title))
					})
				]
			})
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
