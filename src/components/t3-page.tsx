import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useChrome } from "@/components/site-chrome";
import { SpecSection } from "@/components/spec-section";

const CDN = "https://file.cdn.sunmi.com/newebsite";
const img = (path: string) => `${CDN}/${path}`;

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
  const chrome = useChrome();
  const [scene, setScene] = useState(0);
  const [acc, setAcc] = useState(0);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideo(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = SCENES[scene];
  const visibleAcc = [0, 1, 2].map((i) => ACCESSORIES[(acc + i) % ACCESSORIES.length]);

  return (
    <main>
      <nav className="crumb wrap" aria-label="面包屑">
        <Link to="/">首页</Link>
        <span>/</span>
        <Link to="/products">硬件产品</Link>
        <span>/</span>
        <span>SUNMI T3 家族</span>
      </nav>
      <section className="hero" id="top" style={{ backgroundImage: `url(${img("products/t3-family/lg/p1-bg.jpg")})` }}>
        <div className="wrap hero-copy">
          <span className="eyebrow">智能台式终端</span>
          <h1>SUNMI T3 家族</h1>
          <p className="lead">澎湃之芯，优雅之形，高端门店理想之选。</p>
          <div className="hero-actions">
            <a className="ghost" href="#specs">
              技术规格
            </a>
            <a className="ghost" href="#scenes">
              场景应用
            </a>
          </div>
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
          <button className="ghost more" type="button" onClick={() => chrome.openInfo("SUNMI OS 4.0")}>
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
          <button className="ghost more" type="button" onClick={() => chrome.openInfo("SUNMI DMP")}>
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
              <button className="linkish" type="button" onClick={() => chrome.openInfo("SUNMI 开发者中心")}>
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
              <button className="linkish" type="button" onClick={() => chrome.openInfo("SUNMI Care")}>
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
              onClick={() => chrome.openLead("预约商米之家体验")}
            >
              前往预约 →
            </button>
          </div>
          <div className="home-shot" style={{ backgroundImage: `url(${img("cms/sunmi-home/images/sunmi-home-1-n.jpg")})` }} />
        </div>
      </section>

      <SpecSection />

      <section className="disclaimer">
        <div className="wrap">
          <p>1. 以上所有数据，如未特别说明，均来自商米实验室，若实际使用数据与以上数据存在差异，以实际使用数据为准。</p>
          <p>2. GMS 目前仅支持Android版本设备，暂不支持双系统设备。</p>
          <p>3. 本产品介绍内容依照产品上市时现有信息制作，由于产品版本升级或其他原因，其内容有可能变更。商米保留在没有任何通知或者提示的情况下对商米官网的产品及内容进行修改的权利。</p>
          <p>
            4. 商米非常重视保护每一位用户个人信息和隐私。保护每一款设备的运营数据的安全，也是商米产品设计的重中之重。更多信息，请访问{" "}
            <button type="button" onClick={() => chrome.openLegal("privacy")}>
              SUNMI 隐私声明和服务条款
            </button>
            。
          </p>
        </div>
      </section>

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
    </main>
  );
}
