import { createFileRoute } from "@tanstack/react-router";
import { T3Page } from "@/components/t3-page";
import { SPEC_TABS } from "@/data/catalog";
import { jsonLdScript } from "@/lib/seo";

const productLd = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  name: "SUNMI T3 家族",
  category: "智能台式终端",
  brand: { "@type": "Brand", name: "SUNMI" },
  description: "澎湃之芯，优雅之形。SUNMI T3 家族智能台式终端，支持三屏异显、主屏翻转、SUNMI OS 4.0。",
  url: "/t3-family",
  hasVariant: SPEC_TABS.map((tab) => ({
    "@type": "Product",
    name: `SUNMI ${tab.label}`,
    sku: tab.id,
    additionalProperty: tab.rows.map((row) => ({
      "@type": "PropertyValue",
      name: row.title,
      value: row.desc.replaceAll("\n", "；"),
    })),
  })),
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
