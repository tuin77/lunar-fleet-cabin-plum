import { createFileRoute } from "@tanstack/react-router";
import { T3Page } from "@/components/t3-page";
import { jsonLdScript } from "@/lib/seo";

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SUNMI T3 家族",
  category: "智能台式终端",
  brand: { "@type": "Brand", name: "SUNMI" },
  description: "澎湃之芯，优雅之形。SUNMI T3 家族智能台式终端，支持三屏异显、主屏翻转、SUNMI OS 4.0。",
  url: "/t3-family",
  additionalProperty: [
    { "@type": "PropertyValue", name: "处理器", value: "八核，最高至 2.4GHz" },
    { "@type": "PropertyValue", name: "操作系统", value: "SUNMI OS 4.0（基于 Android 13）" },
    { "@type": "PropertyValue", name: "内存", value: "4GB RAM + 64GB ROM" },
    { "@type": "PropertyValue", name: "触摸屏", value: "15.6 英寸 FHD 1920×1080" },
  ],
};

export const Route = createFileRoute("/t3-family")({
  head: () => ({
    meta: [
      { title: "SUNMI T3 家族 - 智能台式终端 | 商米科技" },
      {
        name: "description",
        content: "SUNMI T3 家族：澎湃之芯，优雅之形，高端门店理想之选。了解三屏异显、主屏翻转、配件，以及 T3 与 T3 80MM 技术规格。",
      },
      { name: "keywords", content: "SUNMI T3,T3家族,智能台式终端,技术规格,三屏异显,商米收银" },
    ],
    links: [{ rel: "canonical", href: "/t3-family" }],
    scripts: [
      jsonLdScript(productLd),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首页", item: "/" },
          { "@type": "ListItem", position: 2, name: "硬件产品", item: "/products" },
          { "@type": "ListItem", position: 3, name: "SUNMI T3 家族", item: "/t3-family" },
        ],
      }),
    ],
  }),
  component: T3Page,
});
