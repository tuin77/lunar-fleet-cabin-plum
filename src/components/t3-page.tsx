import { useEffect, useRef, useState, type ReactNode } from "react";

const CDN = "https://file.cdn.sunmi.com/newebsite";
const img = (path: string) => `${CDN}/${path}`;

const LOGO_PATH =
  "M5240.470588 0v1024h-240.941176V0h240.941176zM1400.470588 0v703.969882c0 70.716235 57.344 128 128 128h256a128 128 0 0 0 128-128V0H2168.470588v768.060235A256 256 0 0 1 1912.470588 1024h-512A256 256 0 0 1 1144.470588 768V0h256z m1716.705883 0A256 256 0 0 1 3373.176471 256V1024h-256V320.030118a128 128 0 0 0-128-128h-256a128 128 0 0 0-128 128V1024H2349.176471V256A256 256 0 0 1 2605.176471 0zM4312.847059 384V1024h-252.988235V384h252.988235zM4565.835294 0C4705.581176 0 4818.823529 114.627765 4818.823529 256V1024h-252.988235V320.030118c0-70.716235-56.621176-128-126.494118-128h-505.97647c-69.872941 0-126.494118 57.283765-126.494118 128V1024H3553.882353V256C3553.882353 114.627765 3667.124706 0 3806.870588 0zM988.702118 8.071529v190.464l-560.248471-0.180705-63.367529 0.180705a111.134118 111.134118 0 0 0 0 222.268236h396.890353a254.012235 254.012235 0 0 1 253.952 253.952v95.232A254.012235 254.012235 0 0 1 761.976471 1024H27.226353v-190.464l560.248471 0.180706 63.367529-0.240941a111.134118 111.134118 0 1 0 0-222.208H254.012235A254.012235 254.012235 0 0 1 0 357.255529v-95.171764A254.012235 254.012235 0 0 1 254.012235 8.011294h734.689883z";

const NAV = [
  {
    label: "硬件产品",
    items: ["CPad", "交互屏", "移动", "金融", "台式", "自助", "网络", "配件"],
  },
  {
    label: "AI及软件服务",
    items: ["SUNMI OS", "SUNMI DMP", "应用市场", "SUNMI AI"],
  },
  {
    label: "解决方案",
    items: ["屏幕管理解决方案", "商捷智慧医疗解决方案", "大程序行业解决方案", "商米 SoftPOS 方案", "生态行业解决方案"],
  },
  { label: "客户案例", items: ["零售", "餐饮", "美业", "酒旅"] },
  { label: "商米之家", items: ["预约体验", "门店查询"] },
  { label: "开发者", items: ["开发者中心", "API / SDK", "应用市场"] },
  { label: "服务与支持", items: ["SUNMI Care", "保修政策", "保修查询", "服务网点"] },
  { label: "关于商米", items: ["关于我们", "联系我们", "人才招聘", "投资者关系", "可持续发展", "廉正与合规"] },
];

const SCENES = [
  {
    title: "精品店",
    desc: "主屏翻转，切换店员操作与顾客确认双视角。屏下NFC感应区支持会员卡识别、会员信息、积分与专属权益，实现会员识别与交易预览同步完成。",
    shots: ["p3-1-1.jpg", "p3-1-2.jpg", "p3-1-3.jpg"],
  },
  {
    title: "酒水吧台",
    desc: "三屏异显功能专为酒水吧台场景设计，主屏用于店员操作点单，副屏实时向顾客展示消费明细与金额，外接第三屏可灵活布设于吧台展示广告内容。三屏协同运作，收银、对账与品牌推广同步完成。",
    shots: ["p3-2-1.jpg", "p3-2-2.jpg", "p3-2-3.jpg"],
  },
  {
    title: "咖啡厅",
    desc: "搭配金融副屏，支持芯片卡、磁条卡、非接触支付多种支付方式，交易金额与状态实时同步双屏显示，确保支付高效透明。",
    shots: ["p3-3-1.jpg", "p3-3-2.jpg", "p3-3-3.jpg"],
  },
];

const ACCESSORIES = [
  { title: "MSR 读卡器", status: "已上市", file: "p9-1.jpg" },
  { title: "打印机挡板", status: "已上市", file: "p9-2.jpg" },
  { title: "整机加高脚垫", status: "已上市", file: "p9-3.jpg" },
  { title: "钱箱转接板", status: "已上市", file: "p9-4.jpg" },
];

const FOOTER = [
  { title: "硬件产品", links: ["CPad", "交互屏", "移动", "金融", "台式", "自助", "网络", "配件"] },
  { title: "服务与支持", links: ["SUNMI Care", "保修政策", "保修查询", "服务网点"] },
  { title: "解决方案", links: ["屏幕管理解决方案", "商捷智慧医疗解决方案", "大程序行业解决方案", "商米 SoftPOS 方案", "生态行业解决方案"] },
  { title: "关于商米", links: ["关于我们", "联系我们", "人才招聘", "投资者关系", "可持续发展", "廉正与合规"] },
  { title: "品牌中心", links: ["商米之家", "新闻资讯", "客户案例", "品牌资料包"] },
];

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 5240 1024" aria-label="SUNMI">
      <path d={LOGO_PATH} fill="currentColor" />
    </svg>
  );
}

function Tile({
  src,
  video,
  className,
  children,
}: {
  src?: string;
  video?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <article
      className={`tile ${className ?? ""}`}
      style={src && !video ? { backgroundImage: `url(${src})` } : undefined}
    >
      {video ? <video src={video} poster={src} autoPlay muted loop playsInline /> : null}
      <div className="tile-body">{children}</div>
    </article>
  );
}

function Sequence() {
  const ref = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    if (media.matches) return;
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
      setFrame(Math.round((scrolled / Math.max(total, 1)) * 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  return (
    <div className="seq" ref={ref}>
      <div className="seq-sticky">
        <img
          src={img(`products/t3-family/lg/main${reduce ? 24 : frame}.png`)}
          alt="模块化打印机拆装演示"
        />
        <div className="seq-copy">
          <h2>
            模块化设计，
            <br />
            轻松维护。
          </h2>
          <p>
            打印机拆装简单快捷，方便维护与更换，
            <br />
            大幅提高设备的维修效率。
          </p>
        </div>
      </div>
    </div>
  );
}

export function T3Page() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scene, setScene] = useState(0);
  const [acc, setAcc] = useState(0);
  const [lead, setLead] = useState(false);
  const [sent, setSent] = useState(false);
  const [video, setVideo] = useState(false);
  const [chat, setChat] = useState(false);
  const [legal, setLegal] = useState<null | "law" | "privacy">(null);
  const [info, setInfo] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", company: "", need: "采购 SUNMI T3" });
  const [error, setError] = useState("");
  const [msgs, setMsgs] = useState([{ from: "bot", text: "您好，我是商米在线客服。想了解 T3 家族配置、配件或门店体验，直接告诉我。" }]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLead(false);
        setVideo(false);
        setChat(false);
        setMenu(false);
        setLegal(null);
        setInfo(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openInfo = (label: string) => {
    setMenu(false);
    setInfo(label);
  };

  const submitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^1\d{10}$/.test(form.phone) || !form.company.trim()) {
      setError("请填写姓名、11 位手机号和公司名称。");
      return;
    }
    const leads = JSON.parse(localStorage.getItem("t3-leads") || "[]");
    leads.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("t3-leads", JSON.stringify(leads));
    setError("");
    setSent(true);
  };

  const sendChat = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const reply = /价|多少|报价/.test(text)
      ? "T3 家族按配置报价，留下联系方式后销售顾问会在工作时间内回复。"
      : /配件|钱箱|读卡|脚垫/.test(text)
        ? "可选配件包括 MSR 读卡器、打印机挡板、整机加高脚垫和钱箱转接板，均已上市。"
        : /预约|商米之家|体验/.test(text)
          ? "商米之家已陆续开放三代新品场景体验，可在页面点击「前往预约」。"
          : "已收到。T3 搭载高通 8 核、最高 2.4GHz，支持三屏异显、主屏翻转与 SUNMI OS 4.0。需要我帮您发起采购咨询吗？";
    setMsgs((m) => [...m, { from: "me", text }, { from: "bot", text: reply }]);
    setDraft("");
  };

  const current = SCENES[scene];
  const visibleAcc = [0, 1, 2].map((i) => ACCESSORIES[(acc + i) % ACCESSORIES.length]);

  return (
    <main>
      <header className={`site-header ${solid ? "is-solid" : ""}`}>
        <div className="topbar">
          <div className="brand-row">
            <a href="#top" aria-label="商米首页">
              <Logo />
            </a>
            <nav className="nav-row" aria-label="主导航">
              {NAV.map((group) => (
                <div className="nav-item" key={group.label}>
                  <button className="nav-btn" type="button">
                    {group.label}
                  </button>
                  <div className="mega">
                    {group.items.map((item) => (
                      <button key={item} type="button" onClick={() => openInfo(item)}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
          <div className="top-right">
            <span className="divider" />
            <button className="icon-btn desktop-only" type="button" aria-label="更多站点" onClick={() => openInfo("更多站点")}>
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
        <div className="subbar">
          <div className="subbar-inner">
            <span className="sub-title">SUNMI T3 家族</span>
            <button className="ghost" type="button" onClick={() => { setSent(false); setLead(true); }}>
              采购咨询
            </button>
          </div>
        </div>
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
            {NAV.map((g) => (
              <button key={g.label} type="button" onClick={() => openInfo(g.label)}>
                {g.label}
              </button>
            ))}
            <button type="button" onClick={() => { setMenu(false); setLead(true); }}>
              采购咨询
            </button>
          </nav>
        </div>
      ) : null}

      <section className="hero" id="top" style={{ backgroundImage: `url(${img("products/t3-family/lg/p1-bg.jpg")})` }}>
        <div className="wrap hero-copy">
          <span className="eyebrow">智能台式终端</span>
          <h1>SUNMI T3 家族</h1>
          <p className="lead">澎湃之芯，优雅之形，高端门店理想之选。</p>
          <div className="badge-row">
            <img src={img("products/t3-family/icon/os.png")} alt="SUNMI OS" />
            <img src={img("products/t3-family/icon/dmp.png")} alt="SUNMI DMP" />
          </div>
        </div>
      </section>

      <section className="band" id="design">
        <div className="wrap">
          <div className="mosaic">
            <Tile className="m1" src={img("products/t3-family/lg/p2-1.jpg")}>
              <h3>
                优雅设计，
                <br />
                始终如一。
              </h3>
            </Tile>
            <Tile className="m2 end" src={img("products/t3-family/lg/p2-2.jpg")}>
              <span className="sub">高通芯片</span>
              <h3>
                20%
                <br />
                性能提升。
              </h3>
              <span className="tip">*数据来源于商米实验室</span>
            </Tile>
            <Tile className="m3 end-right sm" src={img("products/t3-family/lg/p2-3.jpg")}>
              <h3>扩展接口设计。</h3>
            </Tile>
            <Tile className="m4 end sm" src={img("products/t3-family/lg/p2-4.jpg")}>
              <h3>
                三屏异显，
                <br />
                多屏使用。
              </h3>
            </Tile>
            <Tile className="m5 end sm" src={img("products/t3-family/lg/p2-5.jpg")}>
              <h3>
                主屏自由翻转，
                <br />
                适应多种角度。
              </h3>
            </Tile>
          </div>
        </div>
      </section>

      <section
        className="tvc"
        style={{ backgroundImage: `url(${img("products/t3-family/lg/tvc-poster.jpg")})` }}
      >
        <button className="play" type="button" aria-label="播放产品视频" onClick={() => setVideo(true)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
            <path d="M8 5v14l12-7z" />
          </svg>
        </button>
      </section>

      <section className="band" id="scenes">
        <div className="scene-grid">
          <Tile className="big" src={img(`products/t3-family/lg/${current.shots[0]}`)} />
          <Tile src={img(`products/t3-family/lg/${current.shots[1]}`)} />
          <Tile src={img(`products/t3-family/lg/${current.shots[2]}`)} />
        </div>
        <div className="scene-copy">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
        </div>
        <div className="scene-nav">
          <button className="arrow" type="button" aria-label="上一场景" onClick={() => setScene((s) => (s + 2) % 3)}>
            ‹
          </button>
          {SCENES.map((s, i) => (
            <button key={s.title} className={`dot ${i === scene ? "on" : ""}`} type="button" aria-label={s.title} onClick={() => setScene(i)} />
          ))}
          <button className="arrow" type="button" aria-label="下一场景" onClick={() => setScene((s) => (s + 1) % 3)}>
            ›
          </button>
        </div>
      </section>

      <section
        className="chapter tall"
        style={{ backgroundImage: `url(${img("products/t3-family/lg/p4-1.jpg")})` }}
      >
        <div className="wrap">
          <h2>
            优雅 Z 线条，
            <br />
            卓越设计始终如一。
          </h2>
          <p>独特的 Z 字形外观设计，无论从哪个角度都显得简洁大方。</p>
          <p>金属压铸工艺，纤薄机身，完美融合美观与坚固。</p>
        </div>
      </section>
      <section
        className="chapter low"
        style={{ backgroundImage: `url(${img("products/t3-family/lg/p4-2.jpg")})` }}
      >
        <div className="wrap">
          <h2>简洁藏线，告别琐碎。</h2>
          <p>提升工作空间的整洁感。</p>
        </div>
      </section>
      <Sequence />
      <section
        className="seq-mobile"
        style={{ backgroundImage: `url(${img("products/t3-family/lg/p4-3.jpg")})` }}
      >
        <div className="wrap">
          <h2 className="block-title" style={{ color: "#14171d", fontSize: 28 }}>
            模块化设计，轻松维护。
          </h2>
          <p className="muted" style={{ color: "#666" }}>
            打印机拆装简单快捷，方便维护与更换，大幅提高设备的维修效率。
          </p>
        </div>
      </section>

      <section className="specs" id="platform" style={{ backgroundImage: `url(${img("products/t3-family/lg/p5-bg.jpg")})` }}>
        <div className="wrap">
          <h2>新平台，更强劲。</h2>
          <div className="spec-grid">
            <div>
              <strong>8核</strong>
              <span>CPU</span>
            </div>
            <div>
              <strong>2.4GHz</strong>
              <span>最高主频</span>
            </div>
            <div>
              <strong>6nm</strong>
              <span>工艺制程</span>
            </div>
            <div>
              <strong>4GB RAM + 64GB ROM</strong>
              <span>内存</span>
            </div>
          </div>
          <div className="boost">
            <div className="k">提升</div>
            <div className="n">20%</div>
            <div className="d">性能提速，体验更流畅。</div>
          </div>
          <p className="fine">*数据来源于商米实验室</p>
        </div>
      </section>

      <section className="band" id="expand">
        <div className="wrap">
          <div className="section-head">
            <h2>更拓展</h2>
            <p>灵活配置，适用于多种场景。</p>
          </div>
          <div className="grid-6">
            <Tile className="span2" src={img("products/t3-family/lg/p6-1.jpg")}>
              <h3 className="card-title">三屏异显，多屏使用</h3>
              <ul className="bullets">
                <li>· 主屏：收银操作。</li>
                <li>· 副屏1：菜单展示、交易信息。</li>
                <li>· 副屏2：广告促销、动态视窗。</li>
              </ul>
            </Tile>
            <Tile
              src={img("products/t3-family/lg/p6-2.jpg")}
              video={img("products/t3-family/video/p6-2.mp4")}
            >
              <h3 className="card-title">
                兼容80mm 和 58mm
                <br />
                两种规格打印纸
              </h3>
              <p className="card-desc">{"插入挡板，轻松切换 80mm 与 58mm\n打印宽度。"}</p>
            </Tile>
            <Tile src={img("products/t3-family/lg/p6-3.jpg")}>
              <h3 className="card-title">搭配 CPad PAY 金融副屏</h3>
              <p className="card-desc">{"提供全面的 SaaS+支付解决方案，\n优化交易效率与用户体验。"}</p>
            </Tile>
            <Tile
              className="span2"
              src={img("products/t3-family/lg/p6-4.jpg")}
              video={img("products/t3-family/video/p6-4.mp4")}
            >
              <h3 className="card-title">专用转接板，稳固连接钱箱</h3>
              <p className="card-desc">保障设备安全与工作台整洁。</p>
            </Tile>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <h2>更务实</h2>
            <p>贴心设计，细节关怀。</p>
          </div>
          <div className="grid-7">
            <Tile className="span2" src={img("products/t3-family/lg/p7-1.jpg")}>
              <h3 className="card-title">双侧 NFC 设计</h3>
              <p className="card-desc">主屏下两侧NFC设计，会员管理更便捷。</p>
            </Tile>
            <Tile src={img("products/t3-family/lg/p7-2.jpg")} video={img("products/t3-family/video/p7-2.mp4")}>
              <h3 className="card-title">脚垫设计</h3>
              <p className="card-desc">加高脚垫，出线摆放方向更灵活。</p>
            </Tile>
            <Tile src={img("products/t3-family/lg/p7-3.jpg")} video={img("products/t3-family/video/p7-3.mp4")}>
              <div className="stat-row">
                <div>
                  <strong>125°</strong>
                  <span>翻转角度</span>
                </div>
                <div>
                  <strong>100,000+</strong>
                  <span>翻转次数</span>
                </div>
              </div>
              <h3 className="card-title">主屏翻转</h3>
              <p className="card-desc">用户可调节至更合适的视线高度。</p>
            </Tile>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <h2>更丰富</h2>
            <p>功能更丰富，满足多元场景需求。</p>
          </div>
          <div className="grid-8">
            <Tile className="span2" src={img("products/t3-family/lg/p8-1.jpg")}>
              <h3 className="card-title" style={{ textAlign: "center", width: "100%" }}>
                主屏前置 500W 像素摄像头
              </h3>
            </Tile>
            <Tile className="tall" src={img("products/t3-family/lg/p8-2.jpg")}>
              <h3 className="card-title">开机按键支持指纹识别</h3>
              <p className="card-desc">{"一键解锁设备并登陆应用账号，\n高效又安全。"}</p>
            </Tile>
            <Tile src={img("products/t3-family/lg/p8-3.jpg")}>
              <h3 className="card-title">副屏锁</h3>
              <p className="card-desc">{"滑动开关锁定副屏，\n稳固安全。"}</p>
            </Tile>
            <Tile src={img("products/t3-family/lg/p8-4.jpg")}>
              <h3 className="card-title">扩展接口设计</h3>
              <p className="card-desc">{"丰富配件，\n实现更多可能。"}</p>
            </Tile>
          </div>
        </div>
      </section>

      <section className="brand-screen" style={{ backgroundImage: `url(${img("products/t3-family/lg/p3d-bg.jpg")})` }}>
        <div className="wrap">
          <h2>你的品牌 ，由你定义。</h2>
          <p>品牌装饰件设计，打造专属品牌形象。</p>
          <p className="fine">*如需了解更多信息，请联系您的销售代表。</p>
        </div>
      </section>

      <section className="band ink" id="accessories">
        <div className="wrap">
          <div className="section-head">
            <h2>
              可选配件，
              <br />
              工作更高效。
            </h2>
          </div>
          <div className="acc-track">
            {visibleAcc.map((item) => (
              <Tile key={item.title} className="acc" src={img(`products/t3-family/lg/${item.file}`)}>
                <h3>{item.title}</h3>
                <p>{item.status}</p>
              </Tile>
            ))}
          </div>
          <div className="acc-nav">
            <button className="arrow" type="button" aria-label="上一组配件" onClick={() => setAcc((n) => (n + 3) % 4)}>
              ‹
            </button>
            <button className="arrow" type="button" aria-label="下一组配件" onClick={() => setAcc((n) => (n + 1) % 4)}>
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="band ink" id="os">
        <div className="wrap">
          <div className="os-head">
            <div>
              <img src={img("sunmi-os-4.0-screen/icon/p17-1.png")} alt="" style={{ height: 36 }} />
              <h2>
                全新 SUNMI OS 4.0，
                <br />
                带来更好的产品交互体验。
              </h2>
            </div>
            <img src={img("sunmi-os-4.0-screen/icon/p17-2.png")} alt="" style={{ height: 64 }} />
          </div>
          <div className="os-grid">
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-1.jpg")})` }}>
              <div className="pad">
                <h3>安全</h3>
                <p>{"更主动、更智能的\n安全防御。"}</p>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-2.jpg")})` }}>
              <div className="pad">
                <h3>SDK接口</h3>
                <p>一套兼容</p>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-3.jpg")})` }}>
              <div className="pad">
                <h3>感知排障</h3>
                <p>{"从被动响应到主动守护，\n故障、异常无处遁形。"}</p>
              </div>
            </article>
            <article className="r24" style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-4.jpg")})` }}>
              <div className="pad">
                <h3>Hyper Engine</h3>
                <p>调度有方，流畅无界。</p>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-5-n.jpg")})` }}>
              <div className="pad">
                <h3>专属OS</h3>
                <p>{"预装环境、一键部署、\n稳定可靠、集中管理。"}</p>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-6-2.jpg")})` }}>
              <div className="pad">
                <h3>UI焕新，</h3>
                <p>带来全新视觉感受</p>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-7.jpg")})` }}>
              <div className="pad">
                <h3>商用组件</h3>
                <p>{"接管设备管理琐事，\n为商用场景量身定制。"}</p>
                <div className="chip-row">
                  <img src={img("sunmi-os-4.0-screen/icon/p17-7-1.png")} alt="" />
                  <img src={img("sunmi-os-4.0-screen/icon/p17-7-2.png")} alt="" />
                  <img src={img("sunmi-os-4.0-screen/icon/p17-7-3.png")} alt="" />
                  <img src={img("sunmi-os-4.0-screen/icon/p17-7-4.png")} alt="" />
                </div>
              </div>
            </article>
            <article style={{ backgroundImage: `url(${img("sunmi-os-4.0-screen/lg/p17-8.jpg")})` }}>
              <div className="pad">
                <h3>SUNMI AI</h3>
                <p>{"赋能开发者，\n为商家增效。"}</p>
              </div>
            </article>
          </div>
          <button className="ghost more" type="button" onClick={() => openInfo("SUNMI OS 4.0")}>
            了解更多
          </button>
        </div>
      </section>

      <section className="band ink" id="dmp">
        <div className="wrap">
          <div className="dmp-head">
            <div>
              <img src={img("sunmi-dmp-screen/icon/p18.png")} alt="" style={{ height: 36 }} />
              <h2>SUNMI DMP，</h2>
              <p>专业、高效、安全的一体化商业设备管理平台。</p>
            </div>
          </div>
          <div className="dmp-grid">
            {[
              ["1 / 1 / 2 / 3", "p18-1.jpg", "远程协助", "远程管理设备。", "p18-1-n.png"],
              ["2 / 1 / 3 / 2", "p18-2.jpg", "设备配置", "一键快速适配设备。", ""],
              ["2 / 2 / 3 / 3", "p18-3.jpg", "设备感知", "快速了解设备情况。", ""],
              ["1 / 3 / 3 / 4", "p18-4.jpg", "应用市场", "全球最大的ToB\n应用市场。", "p18-4.png"],
              ["1 / 4 / 2 / 5", "p18-5.jpg", "数据统计", "全方位设备相关数据。", ""],
              ["2 / 4 / 3 / 5", "p18-6.jpg", "私有化部署", "提供本地部署能力。", ""],
            ].map(([area, file, title, desc, icon]) => (
              <article key={title} style={{ backgroundImage: `url(${img(`sunmi-dmp-screen/lg/${file}`)})`, gridArea: area }}>
                <div className="pad">
                  {icon ? <img src={img(`sunmi-dmp-screen/icon/${icon}`)} alt="" style={{ height: 28, marginBottom: 12 }} /> : null}
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <button className="ghost more" type="button" onClick={() => openInfo("SUNMI DMP")}>
            了解更多
          </button>
        </div>
      </section>

      <section className="band ink" id="care">
        <div className="wrap">
          <div className="section-head">
            <h2>服务与支持</h2>
          </div>
          <div className="care-grid">
            <Tile className="care-card" src={img("products/d3-family/lg/p19-1-n.jpg")}>
              <h3>SUNMI 开发者中心</h3>
              <p>
                在这里，查阅文档（API、SDK）、参与活动、交流技术，
                <br />
                共建开放生态。
              </p>
              <button className="linkish" type="button" onClick={() => openInfo("SUNMI 开发者中心")}>
                了解更多 →
              </button>
            </Tile>
            <Tile className="care-card" src={img("products/d3-family/lg/p19-2.jpg")}>
              <img src={img("products/d3-family/icon/p19-2-title.png")} alt="SUNMI Care" style={{ height: 28 }} />
              <p>秉承利他心，提供全方位服务支持，护航您的商业成功。</p>
              <div className="badge-row" style={{ justifyContent: "center" }}>
                <img src={img("products/d3-family/icon/p19-2-1.png")} alt="" style={{ height: 32 }} />
                <img src={img("products/d3-family/icon/p19-2-2.png")} alt="" style={{ height: 32 }} />
              </div>
              <button className="linkish" type="button" onClick={() => openInfo("SUNMI Care")}>
                了解更多 →
              </button>
            </Tile>
          </div>
        </div>
      </section>

      <section className="band paper" id="home">
        <div className="wrap">
          <div className="section-head">
            <h2 style={{ color: "#14171d" }}>商米之家</h2>
            <p style={{ color: "#666" }}>商米之家将带给你三代新品的场景化沉浸式体验，全国已陆续开放，快去预约体验吧。</p>
            <button
              className="ghost"
              style={{ marginTop: 28, color: "#222", borderColor: "#222" }}
              type="button"
              onClick={() => {
                setForm((f) => ({ ...f, need: "预约商米之家体验" }));
                setSent(false);
                setLead(true);
              }}
            >
              前往预约 →
            </button>
          </div>
          <div className="home-shot" style={{ backgroundImage: `url(${img("cms/sunmi-home/images/sunmi-home-1-n.jpg")})` }} />
        </div>
      </section>

      <section className="disclaimer">
        <div className="wrap">
          <p>1. 以上所有数据，如未特别说明，均来自商米实验室，若实际使用数据与以上数据存在差异，以实际使用数据为准。</p>
          <p>2. GMS 目前仅支持Android版本设备，暂不支持双系统设备。</p>
          <p>3. 本产品介绍内容依照产品上市时现有信息制作，由于产品版本升级或其他原因，其内容有可能变更。商米保留在没有任何通知或者提示的情况下对商米官网的产品及内容进行修改的权利。</p>
          <p>
            4. 商米非常重视保护每一位用户个人信息和隐私。保护每一款设备的运营数据的安全，也是商米产品设计的重中之重。更多信息，请访问{" "}
            <button type="button" onClick={() => setLegal("privacy")}>
              SUNMI 隐私声明和服务条款
            </button>
            。
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            {FOOTER.map((col) => (
              <div key={col.title}>
                <h4>{col.title}</h4>
                {col.links.map((link) => (
                  <button key={link} className="link" type="button" onClick={() => openInfo(link)}>
                    {link}
                  </button>
                ))}
              </div>
            ))}
            <div>
              <div className="phone">400-6666-509</div>
              <div className="hours">周一到周日 0:00-24:00</div>
              <button className="ghost" type="button" onClick={() => { setSent(false); setLead(true); }}>
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
              <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
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
        <button className="floater primary" type="button" onClick={() => { setSent(false); setLead(true); }}>
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
                <p>销售顾问将尽快与您联系。您也可以拨打 400-6666-509。</p>
              </div>
            ) : (
              <form onSubmit={submitLead}>
                <h3 id="lead-title">采购咨询</h3>
                <p className="hint">留下信息，了解 SUNMI T3 家族配置与报价。</p>
                <label htmlFor="name">姓名</label>
                <input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <label htmlFor="phone">手机号</label>
                <input id="phone" inputMode="numeric" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <label htmlFor="company">公司</label>
                <input id="company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                <label htmlFor="need">需求</label>
                <select id="need" value={form.need} onChange={(e) => setForm({ ...form, need: e.target.value })}>
                  <option>采购 SUNMI T3</option>
                  <option>预约商米之家体验</option>
                  <option>了解配件与金融副屏</option>
                  <option>成为合作伙伴</option>
                </select>
                {error ? <p className="hint" style={{ color: "#ff6000" }}>{error}</p> : null}
                <button className="submit" type="submit">
                  提交
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}

      {video ? (
        <div className="mask" onClick={() => setVideo(false)}>
          <div className="video-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="x" type="button" style={{ color: "#fff" }} onClick={() => setVideo(false)} aria-label="关闭视频">
              ×
            </button>
            <video src={img("products/t3-family/video/tvc.mp4")} controls autoPlay poster={img("products/t3-family/lg/tvc-poster.jpg")} />
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
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="输入问题，例如价格、配件、预约" aria-label="客服消息" />
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
                ? "本页面产品介绍依照上市时信息制作。商米保留在不另行通知的情况下修改产品与内容的权利。演示站点中的咨询信息仅保存在您的浏览器本地。"
                : "商米重视用户个人信息与设备运营数据安全。本演示页的采购咨询仅写入本地浏览器，不会上传到服务器。反诈劝阻电话：962110。"}
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
              {info} 是商米官网导航中的栏目。在这个 T3 家族产品页里，你可以继续浏览硬件细节，或直接发起采购咨询。
            </p>
            <button
              className="submit"
              type="button"
              onClick={() => {
                setInfo(null);
                setSent(false);
                setLead(true);
              }}
            >
              采购咨询
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
