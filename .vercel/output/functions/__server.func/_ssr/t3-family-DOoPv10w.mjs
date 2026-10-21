import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SPEC_APPENDIX, n as useChrome, o as SPEC_TABS, s as SPEC_TITLE } from "./router-COTB8C6d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/t3-family-DOoPv10w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SpecSection() {
	const [tab, setTab] = (0, import_react.useState)(0);
	const current = SPEC_TABS[tab];
	const panelId = `spec-panel-${current.id}`;
	const move = (dir) => setTab((n) => (n + dir + SPEC_TABS.length) % SPEC_TABS.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "tech",
		id: "specs",
		"aria-labelledby": "spec-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "spec-title",
					children: SPEC_TITLE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tech-lead",
					children: "T3 为无打印主机，T3 80MM 内置 80mm 高速热敏打印机。参数随型号切换。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tech-tabs",
					role: "tablist",
					"aria-label": "型号",
					onKeyDown: (e) => {
						if (e.key === "ArrowRight") {
							e.preventDefault();
							move(1);
						}
						if (e.key === "ArrowLeft") {
							e.preventDefault();
							move(-1);
						}
					},
					children: SPEC_TABS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						id: `spec-tab-${item.id}`,
						"aria-selected": i === tab,
						"aria-controls": panelId,
						tabIndex: i === tab ? 0 : -1,
						className: i === tab ? "is-on" : "",
						onClick: () => setTab(i),
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "tech-grid",
					role: "tabpanel",
					id: panelId,
					"aria-labelledby": `spec-tab-${current.id}`,
					children: current.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: row.span > 1 ? "span2" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: row.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: row.desc })]
					}, row.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "tech-sub",
					children: SPEC_APPENDIX
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "tech-files",
					children: current.downloads.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: file.href,
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: file.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: file.desc })]
					}) }, file.title))
				})
			]
		})
	});
}
var CDN = "https://file.cdn.sunmi.com/newebsite";
var img = (path) => `${CDN}/${path}`;
var SCENES = [
	{
		title: "精品店",
		desc: "主屏翻转，切换店员操作与顾客确认双视角。屏下NFC感应区支持会员卡识别、会员信息、积分与专属权益，实现会员识别与交易预览同步完成。",
		shots: [
			"p3-1-1.jpg",
			"p3-1-2.jpg",
			"p3-1-3.jpg"
		]
	},
	{
		title: "酒水吧台",
		desc: "三屏异显功能专为酒水吧台场景设计，主屏用于店员操作点单，副屏实时向顾客展示消费明细与金额，外接第三屏可灵活布设于吧台展示广告内容。三屏协同运作，收银、对账与品牌推广同步完成。",
		shots: [
			"p3-2-1.jpg",
			"p3-2-2.jpg",
			"p3-2-3.jpg"
		]
	},
	{
		title: "咖啡厅",
		desc: "搭配金融副屏，支持芯片卡、磁条卡、非接触支付多种支付方式，交易金额与状态实时同步双屏显示，确保支付高效透明。",
		shots: [
			"p3-3-1.jpg",
			"p3-3-2.jpg",
			"p3-3-3.jpg"
		]
	}
];
var ACCESSORIES = [
	{
		title: "MSR 读卡器",
		status: "已上市",
		file: "p9-1.jpg"
	},
	{
		title: "打印机挡板",
		status: "已上市",
		file: "p9-2.jpg"
	},
	{
		title: "整机加高脚垫",
		status: "已上市",
		file: "p9-3.jpg"
	},
	{
		title: "钱箱转接板",
		status: "已上市",
		file: "p9-4.jpg"
	}
];
function Tile({ src, video, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `tile ${className ?? ""}`,
		style: src && !video ? { backgroundImage: `url(${src})` } : void 0,
		children: [video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			src: video,
			poster: src,
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tile-body",
			children
		})]
	});
}
function Sequence() {
	const ref = (0, import_react.useRef)(null);
	const [frame, setFrame] = (0, import_react.useState)(0);
	const [reduce, setReduce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduce(media.matches);
		if (media.matches) return;
		const onScroll = () => {
			const el = ref.current;
			if (!el) return;
			const total = el.offsetHeight - window.innerHeight;
			const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
			setFrame(Math.round(scrolled / Math.max(total, 1) * 80));
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [reduce]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "seq",
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "seq-sticky",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img(`products/t3-family/lg/main${reduce ? 24 : frame}.png`),
				alt: "模块化打印机拆装演示"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "seq-copy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
					"模块化设计，",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"轻松维护。"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"打印机拆装简单快捷，方便维护与更换，",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"大幅提高设备的维修效率。"
				] })]
			})]
		})
	});
}
function T3Page() {
	const chrome = useChrome();
	const [scene, setScene] = (0, import_react.useState)(0);
	const [acc, setAcc] = (0, import_react.useState)(0);
	const [video, setVideo] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape") setVideo(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	const current = SCENES[scene];
	const visibleAcc = [
		0,
		1,
		2
	].map((i) => ACCESSORIES[(acc + i) % ACCESSORIES.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "crumb wrap",
			"aria-label": "面包屑",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "首页"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/products",
					children: "硬件产品"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SUNMI T3 家族" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "hero",
			id: "top",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p1-bg.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "智能台式终端"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "SUNMI T3 家族" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead",
						children: "澎湃之芯，优雅之形，高端门店理想之选。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "ghost",
							href: "#specs",
							children: "技术规格"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "ghost",
							href: "#scenes",
							children: "场景应用"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "badge-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img("products/t3-family/icon/os.png"),
							alt: "SUNMI OS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img("products/t3-family/icon/dmp.png"),
							alt: "SUNMI DMP"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band",
			id: "design",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "wrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mosaic",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "m1",
							src: img("products/t3-family/lg/p2-1.jpg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"优雅设计，",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"始终如一。"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "m2 end",
							src: img("products/t3-family/lg/p2-2.jpg"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sub",
									children: "高通芯片"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
									"20%",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"性能提升。"
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tip",
									children: "*数据来源于商米实验室"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "m3 end-right sm",
							src: img("products/t3-family/lg/p2-3.jpg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "扩展接口设计。" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "m4 end sm",
							src: img("products/t3-family/lg/p2-4.jpg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"三屏异显，",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"多屏使用。"
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "m5 end sm",
							src: img("products/t3-family/lg/p2-5.jpg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"主屏自由翻转，",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"适应多种角度。"
							] })
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "tvc",
			style: { backgroundImage: `url(${img("products/t3-family/lg/tvc-poster.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "play",
				type: "button",
				"aria-label": "播放产品视频",
				onClick: () => setVideo(true),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					width: "28",
					height: "28",
					viewBox: "0 0 24 24",
					fill: "#111",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l12-7z" })
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "band",
			id: "scenes",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scene-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "big",
							src: img(`products/t3-family/lg/${current.shots[0]}`)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { src: img(`products/t3-family/lg/${current.shots[1]}`) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { src: img(`products/t3-family/lg/${current.shots[2]}`) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scene-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: current.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: current.desc })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scene-nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "arrow",
							type: "button",
							"aria-label": "上一场景",
							onClick: () => setScene((s) => (s + 2) % 3),
							children: "‹"
						}),
						SCENES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `dot ${i === scene ? "on" : ""}`,
							type: "button",
							"aria-label": s.title,
							onClick: () => setScene(i)
						}, s.title)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "arrow",
							type: "button",
							"aria-label": "下一场景",
							onClick: () => setScene((s) => (s + 1) % 3),
							children: "›"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "chapter tall",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p4-1.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						"优雅 Z 线条，",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"卓越设计始终如一。"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "独特的 Z 字形外观设计，无论从哪个角度都显得简洁大方。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "金属压铸工艺，纤薄机身，完美融合美观与坚固。" })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "chapter low",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p4-2.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "简洁藏线，告别琐碎。" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "提升工作空间的整洁感。" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sequence, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "seq-mobile",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p4-3.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "block-title",
					style: {
						color: "#14171d",
						fontSize: 28
					},
					children: "模块化设计，轻松维护。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "muted",
					style: { color: "#666" },
					children: "打印机拆装简单快捷，方便维护与更换，大幅提高设备的维修效率。"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "specs",
			id: "platform",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p5-bg.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "新平台，更强劲。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "spec-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "8核" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CPU" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2.4GHz" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "最高主频" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "6nm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "工艺制程" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "4GB RAM + 64GB ROM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "内存" })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "boost",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "k",
								children: "提升"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "n",
								children: "20%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "d",
								children: "性能提速，体验更流畅。"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fine",
						children: "*数据来源于商米实验室"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band",
			id: "expand",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "更拓展" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "灵活配置，适用于多种场景。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "span2",
							src: img("products/t3-family/lg/p6-1.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "三屏异显，多屏使用"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "bullets",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· 主屏：收银操作。" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· 副屏1：菜单展示、交易信息。" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· 副屏2：广告促销、动态视窗。" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p6-2.jpg"),
							video: img("products/t3-family/video/p6-2.mp4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "card-title",
								children: [
									"兼容80mm 和 58mm",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"两种规格打印纸"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "插入挡板，轻松切换 80mm 与 58mm\n打印宽度。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p6-3.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "搭配 CPad PAY 金融副屏"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "提供全面的 SaaS+支付解决方案，\n优化交易效率与用户体验。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "span2",
							src: img("products/t3-family/lg/p6-4.jpg"),
							video: img("products/t3-family/video/p6-4.mp4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "专用转接板，稳固连接钱箱"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "保障设备安全与工作台整洁。"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "更务实" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "贴心设计，细节关怀。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "span2",
							src: img("products/t3-family/lg/p7-1.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "双侧 NFC 设计"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "主屏下两侧NFC设计，会员管理更便捷。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p7-2.jpg"),
							video: img("products/t3-family/video/p7-2.mp4"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "脚垫设计"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "加高脚垫，出线摆放方向更灵活。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p7-3.jpg"),
							video: img("products/t3-family/video/p7-3.mp4"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "stat-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "125°" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "翻转角度" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100,000+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "翻转次数" })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "card-title",
									children: "主屏翻转"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "card-desc",
									children: "用户可调节至更合适的视线高度。"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "更丰富" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "功能更丰富，满足多元场景需求。" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "span2",
							src: img("products/t3-family/lg/p8-1.jpg"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								style: {
									textAlign: "center",
									width: "100%"
								},
								children: "主屏前置 500W 像素摄像头"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "tall",
							src: img("products/t3-family/lg/p8-2.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "开机按键支持指纹识别"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "一键解锁设备并登陆应用账号，\n高效又安全。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p8-3.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "副屏锁"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "滑动开关锁定副屏，\n稳固安全。"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							src: img("products/t3-family/lg/p8-4.jpg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "card-title",
								children: "扩展接口设计"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-desc",
								children: "丰富配件，\n实现更多可能。"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "brand-screen",
			style: { backgroundImage: `url(${img("products/t3-family/lg/p3d-bg.jpg")})` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "你的品牌 ，由你定义。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "品牌装饰件设计，打造专属品牌形象。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "fine",
						children: "*如需了解更多信息，请联系您的销售代表。"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band ink",
			id: "accessories",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "section-head",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"可选配件，",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"工作更高效。"
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "acc-track",
						children: visibleAcc.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "acc",
							src: img(`products/t3-family/lg/${item.file}`),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.status })]
						}, item.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "acc-nav",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "arrow",
							type: "button",
							"aria-label": "上一组配件",
							onClick: () => setAcc((n) => (n + 3) % 4),
							children: "‹"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "arrow",
							type: "button",
							"aria-label": "下一组配件",
							onClick: () => setAcc((n) => (n + 1) % 4),
							children: "›"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band ink",
			id: "os",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "os-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img("sunmi-os-4.0-screen/icon/p17-1.png"),
							alt: "",
							style: { height: 36 }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"全新 SUNMI OS 4.0，",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"带来更好的产品交互体验。"
						] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img("sunmi-os-4.0-screen/icon/p17-2.png"),
							alt: "",
							style: { height: 64 }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "os-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-1.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "安全" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "更主动、更智能的\n安全防御。" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-2.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SDK接口" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "一套兼容" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-3.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "感知排障" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "从被动响应到主动守护，\n故障、异常无处遁形。" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								className: "r24",
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-4.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Hyper Engine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "调度有方，流畅无界。" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-5-n.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "专属OS" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "预装环境、一键部署、\n稳定可靠、集中管理。" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-6-2.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "UI焕新，" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "带来全新视觉感受" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-7.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "商用组件" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "接管设备管理琐事，\n为商用场景量身定制。" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "chip-row",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: img("sunmi-os-4.0-screen/icon/p17-7-1.png"),
													alt: ""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: img("sunmi-os-4.0-screen/icon/p17-7-2.png"),
													alt: ""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: img("sunmi-os-4.0-screen/icon/p17-7-3.png"),
													alt: ""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: img("sunmi-os-4.0-screen/icon/p17-7-4.png"),
													alt: ""
												})
											]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
								style: { backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-8.jpg")})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pad",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SUNMI AI" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "赋能开发者，\n为商家增效。" })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost more",
						type: "button",
						onClick: () => chrome.openInfo("SUNMI OS 4.0"),
						children: "了解更多"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band ink",
			id: "dmp",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dmp-head",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img("sunmi-dmp-screen/icon/p18.png"),
								alt: "",
								style: { height: 36 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "SUNMI DMP，" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "专业、高效、安全的一体化商业设备管理平台。" })
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dmp-grid",
						children: [
							[
								"1 / 1 / 2 / 3",
								"p18-1.jpg",
								"远程协助",
								"远程管理设备。",
								"p18-1-n.png"
							],
							[
								"2 / 1 / 3 / 2",
								"p18-2.jpg",
								"设备配置",
								"一键快速适配设备。",
								""
							],
							[
								"2 / 2 / 3 / 3",
								"p18-3.jpg",
								"设备感知",
								"快速了解设备情况。",
								""
							],
							[
								"1 / 3 / 3 / 4",
								"p18-4.jpg",
								"应用市场",
								"全球最大的ToB\n应用市场。",
								"p18-4.png"
							],
							[
								"1 / 4 / 2 / 5",
								"p18-5.jpg",
								"数据统计",
								"全方位设备相关数据。",
								""
							],
							[
								"2 / 4 / 3 / 5",
								"p18-6.jpg",
								"私有化部署",
								"提供本地部署能力。",
								""
							]
						].map(([area, file, title, desc, icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							style: {
								backgroundImage: `url(${img(`sunmi-dmp-screen/lg/${file}`)})`,
								gridArea: area
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pad",
								children: [
									icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img(`sunmi-dmp-screen/icon/${icon}`),
										alt: "",
										style: {
											height: 28,
											marginBottom: 12
										}
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: desc })
								]
							})
						}, title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "ghost more",
						type: "button",
						onClick: () => chrome.openInfo("SUNMI DMP"),
						children: "了解更多"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band ink",
			id: "care",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "section-head",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "服务与支持" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "care-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
						className: "care-card",
						src: img("products/d3-family/lg/p19-1-n.jpg"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SUNMI 开发者中心" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"在这里，查阅文档（API、SDK）、参与活动、交流技术，",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"共建开放生态。"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "linkish",
								type: "button",
								onClick: () => chrome.openInfo("SUNMI 开发者中心"),
								children: "了解更多 →"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
						className: "care-card",
						src: img("products/d3-family/lg/p19-2.jpg"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img("products/d3-family/icon/p19-2-title.png"),
								alt: "SUNMI Care",
								style: { height: 28 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "秉承利他心，提供全方位服务支持，护航您的商业成功。" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "badge-row",
								style: { justifyContent: "center" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img("products/d3-family/icon/p19-2-1.png"),
									alt: "",
									style: { height: 32 }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img("products/d3-family/icon/p19-2-2.png"),
									alt: "",
									style: { height: 32 }
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "linkish",
								type: "button",
								onClick: () => chrome.openInfo("SUNMI Care"),
								children: "了解更多 →"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "band paper",
			id: "home",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-head",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: { color: "#14171d" },
							children: "商米之家"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: { color: "#666" },
							children: "商米之家将带给你三代新品的场景化沉浸式体验，全国已陆续开放，快去预约体验吧。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "ghost",
							style: {
								marginTop: 28,
								color: "#222",
								borderColor: "#222"
							},
							type: "button",
							onClick: () => chrome.openLead("预约商米之家体验"),
							children: "前往预约 →"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "home-shot",
					style: { backgroundImage: `url(${img("cms/sunmi-home/images/sunmi-home-1-n.jpg")})` }
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "disclaimer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1. 以上所有数据，如未特别说明，均来自商米实验室，若实际使用数据与以上数据存在差异，以实际使用数据为准。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2. GMS 目前仅支持Android版本设备，暂不支持双系统设备。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3. 本产品介绍内容依照产品上市时现有信息制作，由于产品版本升级或其他原因，其内容有可能变更。商米保留在没有任何通知或者提示的情况下对商米官网的产品及内容进行修改的权利。" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"4. 商米非常重视保护每一位用户个人信息和隐私。保护每一款设备的运营数据的安全，也是商米产品设计的重中之重。更多信息，请访问",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => chrome.openLegal("privacy"),
							children: "SUNMI 隐私声明和服务条款"
						}),
						"。"
					] })
				]
			})
		}),
		video ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mask",
			onClick: () => setVideo(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "video-dialog",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "x",
					type: "button",
					style: { color: "#fff" },
					onClick: () => setVideo(false),
					"aria-label": "关闭视频",
					children: "×"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: img("products/t3-family/video/tvc.mp4"),
					controls: true,
					autoPlay: true,
					poster: img("products/t3-family/lg/tvc-poster.jpg")
				})]
			})
		}) : null
	] });
}
var SplitComponent = T3Page;
//#endregion
export { SplitComponent as component };
