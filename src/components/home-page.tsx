import { useEffect, useState } from "react";
import { useChrome } from "@/components/site-chrome";
import { SiteLink } from "@/lib/site-link";

const CDN = "https://file.cdn.sunmi.com/newebsite";

const SLIDES = [
  {
    kicker: "智能商业平板",
    title: "SUNMI CPad",
    desc: "新拍档，一 PAD 即合。",
    image: `${CDN}/products/index/lg/cpad.jpg`,
    imageSm: `${CDN}/products/index/xs/cpad.jpg`,
    href: "/products#cpad",
    cta: "了解详情",
  },
  {
    kicker: "智能台式终端",
    title: "SUNMI T3 家族",
    desc: "澎湃之芯，优雅之形，高端门店理想之选。",
    image: `${CDN}/products/t3-family/lg/p1-bg.jpg`,
    imageSm: `${CDN}/products/t3-family/xs/p1-bg.jpg`,
    href: "/t3-family",
    cta: "查看 T3 家族",
  },
  {
    kicker: "智能台式终端",
    title: "SUNMI T3 PRO 家族",
    desc: "性能赢家，实力造就旗舰。",
    image: `${CDN}/products/index/lg/t3-pro-family.jpg`,
    imageSm: `${CDN}/products/index/xs/t3-pro-family.jpg`,
    href: "/products#desktop",
    cta: "浏览台式产品",
  },
  {
    kicker: "智能移动终端",
    title: "SUNMI L3",
    desc: "商业场景全链提效专家。",
    image: `${CDN}/products/index/lg/l3.jpg`,
    imageSm: `${CDN}/products/index/xs/l3.jpg`,
    href: "/products#mobile",
    cta: "浏览移动产品",
  },
];

const STATS = [
  { n: "200+", l: "国家和地区" },
  { n: "37,000", l: "商业应用" },
  { n: "73,000+", l: "合作伙伴" },
  { n: "2.6亿+", l: "下载次数" },
];

export function HomePage() {
  const chrome = useChrome();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setIndex((n) => (n + 1) % SLIDES.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const slide = SLIDES[index];

  return (
    <main>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${slide.image})` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="首页焦点"
      >
        <div className="home-scrim" />
        <div className="wrap home-hero-copy">
          <p className="eyebrow">{slide.kicker}</p>
          <h1>{slide.title}</h1>
          <p className="lead">{slide.desc}</p>
          <div className="home-actions">
            <SiteLink className="ghost" href={slide.href}>
              {slide.cta}
            </SiteLink>
            <button className="ghost" type="button" onClick={() => chrome.openLead(slide.title.includes("T3 家族") ? "采购 SUNMI T3" : "采购咨询")}>
              采购咨询
            </button>
          </div>
        </div>
        <div className="home-dots">
          {SLIDES.map((s, i) => (
            <button key={s.title} type="button" className={i === index ? "on" : ""} aria-label={s.title} onClick={() => setIndex(i)} />
          ))}
        </div>
      </section>

      <section className="home-band">
        <div className="wrap home-split">
          <img src={`${CDN}/products/index/lg/sunmi-os-4.0.jpg`} alt="SUNMI OS 4.0 界面" />
          <div>
            <p className="eyebrow dark">SUNMI OS 4.0</p>
            <h2>属于商户的专业商用操作系统。</h2>
            <p>安全防御、感知排障、Hyper Engine 与商用组件，让门店设备更稳、更好管。</p>
            <button className="ghost ink" type="button" onClick={() => chrome.openInfo("SUNMI OS")}>
              了解详情
            </button>
          </div>
        </div>
      </section>

      <section className="home-band alt">
        <div className="wrap home-split flip">
          <img src={`${CDN}/products/index/lg/p2-5.jpg`} alt="远程协助设备管理" />
          <div>
            <p className="eyebrow dark">SUNMI DMP</p>
            <h2>远程协助，简化设备管理所需要的一切。</h2>
            <p>远程协助、一键配置、设备感知、应用市场与数据统计，也可以私有化部署。</p>
            <button className="ghost ink" type="button" onClick={() => chrome.openInfo("SUNMI DMP")}>
              了解详情
            </button>
          </div>
        </div>
      </section>

      <section className="home-band">
        <div className="wrap">
          <div className="section-head left">
            <h2>解决方案</h2>
            <p>从门店屏幕到行业生态，把硬件和软件放进真实经营场景。</p>
          </div>
          <div className="home-cards">
            <article style={{ backgroundImage: `url(${CDN}/products/index/lg/p3-2.jpg)` }}>
              <h3>屏幕管理解决方案</h3>
              <p>把普通电视机变成专业投播平台，灵活分区、分时管理门店内容。</p>
              <button type="button" onClick={() => chrome.openInfo("屏幕管理解决方案")}>
                了解详情
              </button>
            </article>
            <article style={{ backgroundImage: `url(${CDN}/products/index/lg/p3-5.jpg)` }}>
              <h3>生态行业解决方案</h3>
              <p>为商户提供数字店铺方案，帮助店铺智慧经营。</p>
              <button type="button" onClick={() => chrome.openInfo("生态行业解决方案")}>
                了解详情
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="home-band alt">
        <div className="wrap home-duo">
          <article>
            <img src={`${CDN}/products/index/lg/p4-1-n.jpg`} alt="商米之家门店" />
            <div>
              <h2>商米之家</h2>
              <p>数字化门店场景体验空间，全国陆续开放。</p>
              <button className="ghost ink" type="button" onClick={() => chrome.openLead("预约商米之家体验")}>
                了解详情
              </button>
            </div>
          </article>
          <article>
            <img src={`${CDN}/products/index/lg/p4-2.jpg`} alt="SUNMI Care 服务" />
            <div>
              <h2>橙心伴随</h2>
              <p>SUNMI Care 提升交付、保修与现场体验。</p>
              <button className="ghost ink" type="button" onClick={() => chrome.openInfo("SUNMI Care")}>
                了解详情
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="home-band dark">
        <div className="wrap">
          <div className="section-head">
            <h2>商米服务全球商户</h2>
            <p>联合合作伙伴，为各地生意提供数字化经营和增长方案。</p>
          </div>
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.l}>
                <dt>{s.n}</dt>
                <dd>{s.l}</dd>
              </div>
            ))}
          </dl>
          <p className="fine center">*以上数据截止时间为：2026年6月30日</p>
          <div className="portal-row">
            {[
              ["商米渠道中心", "和商米共创，打造共赢生态。", `${CDN}/products/index/icon/reseller.png`],
              ["商米开发者", "汇聚核心开发能力，助力构建数字化场景。", `${CDN}/products/index/icon/developer.png`],
              ["商米数字店铺", "携手生态伙伴，打造一站式门店平台。", `${CDN}/products/index/icon/store.png`],
            ].map(([title, desc, icon]) => (
              <button key={title} type="button" className="portal" onClick={() => chrome.openInfo(title)}>
                <img src={icon} alt="" />
                <strong>{title}</strong>
                <span>{desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
