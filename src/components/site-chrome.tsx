import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FOOTER, HARDWARE, NAV, type ProductCard } from "@/data/catalog";
import { SiteLink } from "@/lib/site-link";

const CDN = "https://file.cdn.sunmi.com/newebsite";
const img = (path: string) => `${CDN}/${path}`;

const LOGO_PATH =
  "M5240.470588 0v1024h-240.941176V0h240.941176zM1400.470588 0v703.969882c0 70.716235 57.344 128 128 128h256a128 128 0 0 0 128-128V0H2168.470588v768.060235A256 256 0 0 1 1912.470588 1024h-512A256 256 0 0 1 1144.470588 768V0h256z m1716.705883 0A256 256 0 0 1 3373.176471 256V1024h-256V320.030118a128 128 0 0 0-128-128h-256a128 128 0 0 0-128 128V1024H2349.176471V256A256 256 0 0 1 2605.176471 0zM4312.847059 384V1024h-252.988235V384h252.988235zM4565.835294 0C4705.581176 0 4818.823529 114.627765 4818.823529 256V1024h-252.988235V320.030118c0-70.716235-56.621176-128-126.494118-128h-505.97647c-69.872941 0-126.494118 57.283765-126.494118 128V1024H3553.882353V256C3553.882353 114.627765 3667.124706 0 3806.870588 0zM988.702118 8.071529v190.464l-560.248471-0.180705-63.367529 0.180705a111.134118 111.134118 0 0 0 0 222.268236h396.890353a254.012235 254.012235 0 0 1 253.952 253.952v95.232A254.012235 254.012235 0 0 1 761.976471 1024H27.226353v-190.464l560.248471 0.180706 63.367529-0.240941a111.134118 111.134118 0 1 0 0-222.208H254.012235A254.012235 254.012235 0 0 1 0 357.255529v-95.171764A254.012235 254.012235 0 0 1 254.012235 8.011294h734.689883z";

type ChromeApi = {
  openLead: (need?: string) => void;
  openInfo: (label: string) => void;
  openLegal: (kind: "law" | "privacy") => void;
  openChat: () => void;
};

const ChromeContext = createContext<ChromeApi | null>(null);

export function useChrome() {
  const value = useContext(ChromeContext);
  if (!value) throw new Error("Site chrome is missing");
  return value;
}

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 5240 1024" aria-hidden="true">
      <path d={LOGO_PATH} fill="currentColor" />
    </svg>
  );
}

function replyFor(text: string) {
  if (/价|多少|报价/.test(text)) return "配置按门店场景报价。留下联系方式后，顾问会在工作时间内回复。";
  if (/t3|台式|规格/.test(text)) return "T3 家族是智能台式终端，支持三屏异显、主屏翻转与 SUNMI OS 4.0。完整参数在产品页「技术规格」。";
  if (/配件|钱箱|读卡|脚垫/.test(text)) return "可选配件包括 MSR 读卡器、打印机挡板、整机加高脚垫和钱箱转接板。";
  if (/预约|商米之家|体验/.test(text)) return "商米之家提供三代新品的场景体验，可在页面发起预约。";
  return "已收到。你可以继续问配置、配件，或直接发起采购咨询。";
}

function ProductVisual({ product, lit }: { product: ProductCard; lit: boolean }) {
  return (
    <span className="hw-shot">
      <img src={lit ? product.hoverIcon : product.icon} alt="" />
    </span>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onProduct = pathname.includes("t3-family");
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState(HARDWARE[4].id);
  const [lit, setLit] = useState<string | null>(null);
  const [openSeries, setOpenSeries] = useState<string | null>(HARDWARE[0].id);
  const [lead, setLead] = useState(false);
  const [sent, setSent] = useState(false);
  const [chat, setChat] = useState(false);
  const [legal, setLegal] = useState<null | "law" | "privacy">(null);
  const [info, setInfo] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", company: "", need: "采购咨询" });
  const [error, setError] = useState("");
  const [msgs, setMsgs] = useState([{ from: "bot", text: "您好，我是商米在线客服。想了解硬件、T3 家族或门店体验，直接告诉我。" }]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
    setInfo(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLead(false);
        setChat(false);
        setMenu(false);
        setLegal(null);
        setInfo(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const api = useMemo<ChromeApi>(
    () => ({
      openLead: (need = "采购咨询") => {
        setForm((f) => ({ ...f, need }));
        setSent(false);
        setError("");
        setLead(true);
        setMenu(false);
      },
      openInfo: (label) => {
        setMenu(false);
        setInfo(label);
      },
      openLegal: (kind) => setLegal(kind),
      openChat: () => setChat(true),
    }),
    [],
  );

  const active = HARDWARE.find((c) => c.id === cat) ?? HARDWARE[0];

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^1\d{10}$/.test(form.phone) || !form.company.trim()) {
      setError("请填写姓名、11 位手机号和公司名称。");
      return;
    }
    const leads = JSON.parse(localStorage.getItem("sunmi-leads") || "[]");
    leads.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("sunmi-leads", JSON.stringify(leads));
    setError("");
    setSent(true);
  };

  const sendChat = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMsgs((m) => [...m, { from: "me", text }, { from: "bot", text: replyFor(text) }]);
    setDraft("");
  };

  const productNode = (product: ProductCard) => {
    const body = (
      <>
        <ProductVisual product={product} lit={lit === product.id} />
        <span className="hw-name">
          {product.name}
          {product.isNew ? <em>NEW</em> : null}
        </span>
      </>
    );
    const handlers = {
      onMouseEnter: () => setLit(product.id),
      onMouseLeave: () => setLit((id) => (id === product.id ? null : id)),
      onFocus: () => setLit(product.id),
      onBlur: () => setLit((id) => (id === product.id ? null : id)),
    };
    if (product.href) {
      return (
        <Link key={product.id} to={product.href} className="hw-card" {...handlers}>
          {body}
        </Link>
      );
    }
    return (
      <button key={product.id} type="button" className="hw-card" {...handlers} onClick={() => api.openInfo(product.name)}>
        {body}
      </button>
    );
  };

  return (
    <ChromeContext.Provider value={api}>
      <a className="skip" href="#content">
        跳到主要内容
      </a>
      <header className={`site-header ${solid ? "is-solid" : ""} ${onProduct ? "has-sub" : ""}`}>
        <div className="topbar">
          <div className="brand-row">
            <Link to="/" aria-label="商米首页">
              <Logo />
            </Link>
            <nav className="nav-row" aria-label="主导航">
              {NAV.map((group) =>
                group.kind === "hardware" ? (
                  <div className="nav-item" key={group.label} onMouseEnter={() => setCat((c) => c || "desktop")}>
                    <Link to="/products" className="nav-btn">
                      {group.label}
                    </Link>
                    <div className="mega hardware" role="region" aria-label="硬件产品">
                      <div className="hw">
                        <aside className="hw-cats">
                          {HARDWARE.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              className={c.id === active.id ? "is-on" : ""}
                              onMouseEnter={() => setCat(c.id)}
                              onFocus={() => setCat(c.id)}
                            >
                              {c.label}
                            </button>
                          ))}
                          <Link to="/products" className="hw-all">
                            查看全部产品
                          </Link>
                        </aside>
                        <div className="hw-main">
                          {active.groups.map((group) => (
                            <section key={group.label || active.id}>
                              {group.label ? <h3>{group.label}</h3> : null}
                              <div className="hw-grid">{group.items.map(productNode)}</div>
                            </section>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="nav-item" key={group.label}>
                    <button className="nav-btn" type="button">
                      {group.label}
                    </button>
                    <div className="mega">
                      {group.items.map((item) => (
                        <button key={item} type="button" onClick={() => api.openInfo(item)}>
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </nav>
          </div>
          <div className="top-right">
            <span className="divider" />
            <button className="icon-btn desktop-only" type="button" aria-label="更多站点" onClick={() => api.openInfo("更多站点")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="5" cy="5" r="2" />
                <circle cx="12" cy="5" r="2" />
                <circle cx="19" cy="5" r="2" />
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
                <circle cx="5" cy="19" r="2" />
                <circle cx="12" cy="19" r="2" />
                <circle cx="19" cy="19" r="2" />
              </svg>
            </button>
            <button className="menu-toggle" type="button" aria-label="打开菜单" onClick={() => setMenu(true)}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
        {onProduct ? (
          <div className="subbar">
            <div className="subbar-inner">
              <span className="sub-title">SUNMI T3 家族</span>
              <nav className="sub-links" aria-label="本页章节">
                <a href="#top">概览</a>
                <a href="#scenes">场景</a>
                <a href="#specs">技术规格</a>
              </nav>
              <button className="ghost" type="button" onClick={() => api.openLead("采购 SUNMI T3")}>
                采购咨询
              </button>
            </div>
          </div>
        ) : null}
      </header>

      {menu ? (
        <div className="sheet">
          <header>
            <Logo />
            <button type="button" onClick={() => setMenu(false)} aria-label="关闭">
              ×
            </button>
          </header>
          <nav>
            <Link to="/" onClick={() => setMenu(false)}>
              首页
            </Link>
            {HARDWARE.map((c) => (
              <div key={c.id}>
                <button type="button" onClick={() => setOpenSeries((s) => (s === c.id ? null : c.id))}>
                  {c.label}
                </button>
                {openSeries === c.id
                  ? c.groups.flatMap((g) =>
                      g.items.map((p) =>
                        p.href ? (
                          <Link key={p.id} className="sheet-sub" to={p.href} onClick={() => setMenu(false)}>
                            {p.name}
                          </Link>
                        ) : (
                          <button key={p.id} className="sheet-sub" type="button" onClick={() => api.openInfo(p.name)}>
                            {p.name}
                          </button>
                        ),
                      ),
                    )
                  : null}
              </div>
            ))}
            <Link to="/products" onClick={() => setMenu(false)}>
              全部产品
            </Link>
            <button type="button" onClick={() => api.openLead("采购咨询")}>
              采购咨询
            </button>
          </nav>
        </div>
      ) : null}

      <div id="content">{children}</div>

      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            {FOOTER.map((col) => (
              <div key={col.title}>
                <h2>{col.title}</h2>
                {col.links.map((link) =>
                  link.href ? (
                    <SiteLink key={link.label} href={link.href}>
                      {link.label}
                    </SiteLink>
                  ) : (
                    <button key={link.label} className="link" type="button" onClick={() => api.openInfo(link.label)}>
                      {link.label}
                    </button>
                  ),
                )}
              </div>
            ))}
            <div>
              <div className="phone">400-6666-509</div>
              <div className="hours">周一到周日 0:00-24:00</div>
              <button className="ghost" type="button" onClick={() => api.openLead("免费咨询")}>
                免费咨询
              </button>
            </div>
          </div>
          <div className="foot-bottom">
            <div className="foot-meta">
              <span>© 2026 上海商米科技集团股份有限公司 版权所有</span>
              <button className="link" type="button" onClick={() => setLegal("law")}>
                法律文件
              </button>
              <button className="link" type="button" onClick={() => setLegal("privacy")}>
                隐私与安全
              </button>
              <span>沪ICP备 16006543</span>
              <span className="beian">
                <img src={img("home/icon-beian.png")} alt="" />
                沪公安网备 31011002003742
              </span>
              <span>反诈劝阻电话：962110</span>
            </div>
            <div className="socials">
              <img src={img("chinashop-2024/lg/wechat.png")} alt="微信" />
              <img src={img("chinashop-2024/lg/tiktok.png")} alt="抖音" />
            </div>
          </div>
        </div>
      </footer>

      <div className="floaters">
        <button className="floater primary" type="button" onClick={() => api.openLead(onProduct ? "采购 SUNMI T3" : "采购咨询")}>
          采购咨询
        </button>
        <button className="floater" type="button" onClick={() => setChat(true)}>
          在线客服
        </button>
      </div>

      {lead ? (
        <div className="mask" onClick={() => setLead(false)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="lead-title">
            <button className="x" type="button" onClick={() => setLead(false)} aria-label="关闭">
              ×
            </button>
            {sent ? (
              <div className="ok">
                <strong>提交成功</strong>
                <p>顾问将尽快与您联系。您也可以拨打 400-6666-509。</p>
              </div>
            ) : (
              <form onSubmit={submitLead}>
                <h3 id="lead-title">采购咨询</h3>
                <p className="hint">留下信息，了解配置、报价或预约体验。</p>
                <label htmlFor="name">姓名</label>
                <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <label htmlFor="phone">手机号</label>
                <input id="phone" inputMode="numeric" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <label htmlFor="company">公司</label>
                <input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                <label htmlFor="need">需求</label>
                <select id="need" value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })}>
                  <option>采购咨询</option>
                  <option>采购 SUNMI T3</option>
                  <option>预约商米之家体验</option>
                  <option>了解配件与金融副屏</option>
                  <option>免费咨询</option>
                  <option>成为合作伙伴</option>
                </select>
                {error ? <p className="err">{error}</p> : null}
                <button className="submit" type="submit">
                  提交
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}

      {chat ? (
        <div className="mask" onClick={() => setChat(false)}>
          <div className="chat" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <header>
              <strong>在线客服</strong>
              <button type="button" onClick={() => setChat(false)} aria-label="关闭客服">
                ×
              </button>
            </header>
            <div className="msgs">
              {msgs.map((m, i) => (
                <div key={i} className={`bubble ${m.from === "me" ? "me" : "bot"}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <form onSubmit={sendChat}>
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="输入问题，例如 T3 规格、配件、预约" aria-label="客服消息" />
              <button type="submit">发送</button>
            </form>
          </div>
        </div>
      ) : null}

      {legal ? (
        <div className="mask" onClick={() => setLegal(null)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="x" type="button" onClick={() => setLegal(null)} aria-label="关闭">
              ×
            </button>
            <h3>{legal === "law" ? "法律文件" : "隐私与安全"}</h3>
            <p className="hint">
              {legal === "law"
                ? "本站产品介绍依照公开信息整理，配置可能随版本调整。演示站点中的咨询信息仅保存在您的浏览器本地。"
                : "我们重视个人信息与设备运营数据安全。本演示页的采购咨询仅写入本地浏览器，不会上传到服务器。反诈劝阻电话：962110。"}
            </p>
          </div>
        </div>
      ) : null}

      {info ? (
        <div className="mask" onClick={() => setInfo(null)}>
          <div className="dialog" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="x" type="button" onClick={() => setInfo(null)} aria-label="关闭">
              ×
            </button>
            <h3>{info}</h3>
            <p className="hint">
              {info === "T3 家族" || info.includes("T3")
                ? "SUNMI T3 家族已开放完整产品页，含场景、配件与技术规格。"
                : `${info} 栏目可继续浏览，或直接发起采购咨询。当前可进入的产品页是 T3 家族。`}
            </p>
            <div className="dialog-actions">
              {info.includes("T3") ? (
                <Link className="submit link-btn" to="/t3-family" onClick={() => setInfo(null)}>
                  查看 T3 家族
                </Link>
              ) : (
                <Link className="ghost ink" to="/products" onClick={() => setInfo(null)}>
                  浏览产品
                </Link>
              )}
              <button
                className="submit"
                type="button"
                onClick={() => {
                  setInfo(null);
                  api.openLead(info.includes("T3") ? "采购 SUNMI T3" : "采购咨询");
                }}
              >
                采购咨询
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </ChromeContext.Provider>
  );
}
