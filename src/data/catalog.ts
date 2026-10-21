export type ProductCard = {
  id: string;
  name: string;
  slogan: string;
  icon: string;
  hoverIcon: string;
  isNew: boolean;
  href: "/t3-family" | null;
};

export type ProductGroup = { label: string; items: ProductCard[] };

export type HardwareCategory = {
  id: string;
  label: string;
  groups: ProductGroup[];
};

export type SpecRow = { title: string; desc: string; span: number };
export type SpecDownload = { title: string; desc: string; href: string };
export type SpecTab = { id: string; label: string; rows: SpecRow[]; downloads: SpecDownload[] };

export const HARDWARE: HardwareCategory[] = [
  {
    "id": "cpad",
    "label": "CPad",
    "groups": [
      {
        "label": "",
        "items": [
          {
            "id": "cpad",
            "name": "CPad",
            "slogan": "新拍档，一 PAD 即合。",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/CPad/icon/CPad.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/CPad/icon/CPad-hover.png",
            "isNew": true,
            "href": null
          }
        ]
      }
    ]
  },
  {
    "id": "interactive",
    "label": "交互屏",
    "groups": [
      {
        "label": "",
        "items": [
          {
            "id": "flex-3",
            "name": "FLEX 3",
            "slogan": "灵活组合，FLEX 无限",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/flex-3/icon/flex-3-n.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/flex-3/icon/flex-3-hover-n.png",
            "isNew": true,
            "href": null
          },
          {
            "id": "flex-3-kds",
            "name": "FLEX 3 KDS",
            "slogan": "专为餐饮后厨打造",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/icon/flex-3-kds.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/flex-3-kds/icon/flex-3-kds-hover.png",
            "isNew": true,
            "href": null
          }
        ]
      }
    ]
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
        "items": [
          {
            "id": "m3",
            "name": "M3",
            "slogan": "全面升级，餐厅运营好帮手。",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/m3/icon/m3.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/m3/icon/m3-hover.png",
            "isNew": true,
            "href": null
          }
        ]
      }
    ]
  },
  {
    "id": "payment",
    "label": "金融",
    "groups": [
      {
        "label": "P系列",
        "items": [
          {
            "id": "p3",
            "name": "P3",
            "slogan": "数字支付先锋，大屏视野，强劲性能，领先登场。",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/p3/icon/p3.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/p3/icon/p3-hover.png",
            "isNew": true,
            "href": null
          },
          {
            "id": "p2-xpro",
            "name": "P2 Xpro",
            "slogan": "多种识别，为商业注入新想象。",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/2/p2Xpro.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/2/p2Xpro.png",
            "isNew": false,
            "href": null
          }
        ]
      },
      {
        "label": "蜻蜓",
        "items": [
          {
            "id": "dragonfly",
            "name": "蜻蜓银联版",
            "slogan": "轻接入 轻识别 轻支付",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/2/FLYDRAGON.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/2/FLYDRAGON.png",
            "isNew": false,
            "href": null
          }
        ]
      }
    ]
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
        "items": [
          {
            "id": "ft2",
            "name": "FT2",
            "slogan": "纤薄多能，交互无界",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/3/ft2.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/3/ft2.png",
            "isNew": false,
            "href": null
          }
        ]
      }
    ]
  },
  {
    "id": "kiosks",
    "label": "自助",
    "groups": [
      {
        "label": "",
        "items": [
          {
            "id": "k2",
            "name": "K2",
            "slogan": "多版本适配多场景，大有可为",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/4/K2.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/4/K2.png",
            "isNew": false,
            "href": null
          },
          {
            "id": "k2-mini",
            "name": "K2 MINI",
            "slogan": "全民自助 从小开始",
            "icon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons/4/K2MINI.png",
            "hoverIcon": "https://file.cdn.sunmi.com/newebsite/products/list/xl/icons-hover/4/K2MINI.png",
            "isNew": false,
            "href": null
          }
        ]
      }
    ]
  },
  {
    "id": "network",
    "label": "网络",
    "groups": [
      {
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
      }
    ]
  },
  {
    "id": "accessories",
    "label": "配件",
    "groups": [
      {
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
      }
    ]
  }
];

export const SPEC_TITLE = "SUNMI T3家族 技术规格";
export const SPEC_APPENDIX = "支持与下载";
export const SPEC_TABS: SpecTab[] = [
  {
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
  },
  {
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
  }
];

export const NAV = [
  { label: "硬件产品", kind: "hardware" as const },
  { label: "AI及软件服务", kind: "menu" as const, items: ["SUNMI OS", "SUNMI DMP", "应用市场", "SUNMI AI"] },
  { label: "解决方案", kind: "menu" as const, items: ["屏幕管理解决方案", "商捷智慧医疗解决方案", "大程序行业解决方案", "商米 SoftPOS 方案", "生态行业解决方案"] },
  { label: "客户案例", kind: "menu" as const, items: ["零售", "餐饮", "美业", "酒旅"] },
  { label: "商米之家", kind: "menu" as const, items: ["预约体验", "门店查询"] },
  { label: "开发者", kind: "menu" as const, items: ["开发者中心", "API / SDK", "应用市场"] },
  { label: "服务与支持", kind: "menu" as const, items: ["SUNMI Care", "保修政策", "保修查询", "服务网点"] },
  { label: "关于商米", kind: "menu" as const, items: ["关于我们", "联系我们", "人才招聘", "投资者关系", "可持续发展", "廉正与合规"] },
];

export const FOOTER = [
  { title: "硬件产品", links: HARDWARE.map((c) => ({ label: c.label, href: `/products#${c.id}` })) },
  { title: "服务与支持", links: ["SUNMI Care", "保修政策", "保修查询", "服务网点"].map((label) => ({ label, href: "" })) },
  { title: "解决方案", links: ["屏幕管理解决方案", "商捷智慧医疗解决方案", "大程序行业解决方案", "商米 SoftPOS 方案", "生态行业解决方案"].map((label) => ({ label, href: "" })) },
  { title: "关于商米", links: ["关于我们", "联系我们", "人才招聘", "投资者关系", "可持续发展", "廉正与合规"].map((label) => ({ label, href: "" })) },
  { title: "品牌中心", links: [
    { label: "商米之家", href: "" },
    { label: "新闻资讯", href: "" },
    { label: "客户案例", href: "" },
    { label: "品牌资料包", href: "" },
    { label: "T3 家族", href: "/t3-family" },
  ] },
];

export function flatProducts() {
  return HARDWARE.flatMap((c) => c.groups.flatMap((g) => g.items.map((item) => ({ ...item, categoryId: c.id, category: c.label, series: g.label }))));
}
