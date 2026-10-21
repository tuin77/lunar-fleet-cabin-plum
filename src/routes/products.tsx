import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/components/products-page";
import { jsonLdScript } from "@/lib/seo";
import { flatProducts } from "@/data/catalog";

const itemList = {
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
      url: p.href ?? "/products",
    })),
  },
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "硬件产品 - 商米科技" },
      {
        name: "description",
        content: "浏览商米硬件产品：CPad、交互屏、移动终端、金融终端、台式终端 T3 家族、自助终端、网络设备与配件。",
      },
      { name: "keywords", content: "商米产品,硬件产品,T3家族,台式终端,移动终端,SUNMI" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
    scripts: [
      jsonLdScript(itemList),
      jsonLdScript({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首页", item: "/" },
          { "@type": "ListItem", position: 2, name: "硬件产品", item: "/products" },
        ],
      }),
    ],
  }),
  component: ProductsPage,
});
