import { useState } from "react";
import { SPEC_APPENDIX, SPEC_TABS, SPEC_TITLE } from "@/data/catalog";

export function SpecSection() {
  const [tab, setTab] = useState(0);
  const current = SPEC_TABS[tab];
  const panelId = `spec-panel-${current.id}`;

  const move = (dir: number) => setTab((n) => (n + dir + SPEC_TABS.length) % SPEC_TABS.length);

  return (
    <section className="tech" id="specs" aria-labelledby="spec-title">
      <div className="wrap">
        <h2 id="spec-title">{SPEC_TITLE}</h2>
        <p className="tech-lead">T3 为无打印主机，T3 80MM 内置 80mm 高速热敏打印机。参数随型号切换。</p>
        <div
          className="tech-tabs"
          role="tablist"
          aria-label="型号"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              move(1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          {SPEC_TABS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`spec-tab-${item.id}`}
              aria-selected={i === tab}
              aria-controls={panelId}
              tabIndex={i === tab ? 0 : -1}
              className={i === tab ? "is-on" : ""}
              onClick={() => setTab(i)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <dl className="tech-grid" role="tabpanel" id={panelId} aria-labelledby={`spec-tab-${current.id}`}>
          {current.rows.map((row) => (
            <div key={row.title} className={row.span > 1 ? "span2" : undefined}>
              <dt>{row.title}</dt>
              <dd>{row.desc}</dd>
            </div>
          ))}
        </dl>
        <h3 className="tech-sub">{SPEC_APPENDIX}</h3>
        <ul className="tech-files">
          {current.downloads.map((file) => (
            <li key={file.title}>
              <a href={file.href} target="_blank" rel="noreferrer">
                <strong>{file.title}</strong>
                <span>{file.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
