import { useState } from "react";
import { SPEC_APPENDIX, SPEC_TABS, SPEC_TITLE } from "@/data/catalog";

export function SpecSection() {
  const [tab, setTab] = useState(0);
  const current = SPEC_TABS[tab];

  return (
    <section className="tech" id="specs" aria-labelledby="spec-title">
      <div className="wrap">
        <h2 id="spec-title">{SPEC_TITLE}</h2>
        <div className="tech-tabs" role="tablist" aria-label="型号">
          {SPEC_TABS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === tab}
              className={i === tab ? "is-on" : ""}
              onClick={() => setTab(i)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="tech-grid" role="tabpanel">
          {current.rows.map((row) => (
            <article key={row.title} className={row.span > 1 ? "span2" : ""}>
              <h3>{row.title}</h3>
              <p>{row.desc}</p>
            </article>
          ))}
        </div>
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
