import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { ORG_LD, jsonLdScript } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "商米科技 - BIoT 开启商业4.0" },
      {
        name: "description",
        content: "商米科技官网首页。智能商业平板 CPad、台式终端 T3 家族、移动终端与 SUNMI OS，服务全球商户的 BIoT 产品与方案。",
      },
      { name: "keywords", content: "商米科技,SUNMI,BIoT,CPad,T3家族,智能收银" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [jsonLdScript(ORG_LD)],
  }),
  component: HomePage,
});
