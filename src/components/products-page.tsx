import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HARDWARE, type ProductCard } from "@/data/catalog";
import { useChrome } from "@/components/site-chrome";

const CDN = "https://file.cdn.sunmi.com/newebsite";

const BANNERS: Record<string, string> = {
  cpad: `${CDN}/products/index/lg/cpad.jpg`,
  interactive: `${CDN}/products/new-list/lg/kiosks.jpg`,
  mobile: `${CDN}/products/new-list/lg/mobile.jpg`,
  payment: `${CDN}/products/new-list/lg/payment.jpg`,
  desktop: `${CDN}/products/new-list/lg/desktop.jpg`,
  kiosks: `${CDN}/products/new-list/lg/kiosks.jpg`,
  network: `${CDN}/products/new-list/lg/network.jpg`,
  accessories: `${CDN}/products/new-list/lg/accessories.jpg`,
};

const BLURBS: Record<string, string> = {
  cpad: "智能商业平板，一台即可覆盖点单、会员与展示。",
  interactive: "模块化交互屏，适配门店与后厨。",
  mobile: "打印、扫码、支付与采集，装进店员手里。",
  payment: "金融终端，覆盖多种支付方式。",
  desktop: "智能台式终端，从旗舰 T 系列到初创 D 系列。",
  kiosks: "自助终端，让顾客自己完成下单与核销。",
  network: "小票、价签与门店网络，把后场连起来。",
  accessories: "扫码、钱箱、键盘与云打印配件。",
};

function Card({ product }: { product: ProductCard }) {
  const chrome = useChrome();
  const [lit, setLit] = useState(false);
  const inner = (
    <>
      <span className="pcard-shot">
        <img src={lit ? product.hoverIcon : product.icon} alt="" />
      </span>
      <span className="pcard-name">
        {product.name}
        {product.isNew ? <em>NEW</em> : null}
      </span>
      <span className="pcard-slogan">{product.slogan || product.name}</span>
    </>
  );
  const hover = {
    onMouseEnter: () => setLit(true),
    onMouseLeave: () => setLit(false),
    onFocus: () => setLit(true),
    onBlur: () => setLit(false),
  };
  if (product.href) {
    return (
      <Link to={product.href} className="pcard is-live" {...hover}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className="pcard" {...hover} onClick={() => chrome.openInfo(product.name)}>
      {inner}
    </button>
  );
}

export function ProductsPage() {
  return (
    <main className="products-page">
      <header className="products-hero">
        <div className="wrap">
          <p className="eyebrow">硬件产品</p>
          <h1>产品</h1>
          <p className="lead">覆盖商业平板、移动、金融、台式、自助与配件。带页面的产品可直接进入，例如 T3 家族。</p>
        </div>
      </header>
      <nav className="product-jump wrap" aria-label="产品分类">
        {HARDWARE.map((c) => (
          <a key={c.id} href={`#${c.id}`}>
            {c.label}
          </a>
        ))}
      </nav>
      {HARDWARE.map((c) => (
        <section key={c.id} id={c.id} className="catalog-block">
          <div className="catalog-banner" style={{ backgroundImage: `url(${BANNERS[c.id]})` }}>
            <div className="wrap">
              <h2>{c.label}</h2>
              <p>{BLURBS[c.id]}</p>
            </div>
          </div>
          <div className="wrap">
            {c.groups.map((g) => (
              <div key={g.label || c.id} className="series">
                {g.label ? <h3>{g.label}</h3> : null}
                <div className="pcard-grid">
                  {g.items.map((p) => (
                    <Card key={p.id} product={p} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
