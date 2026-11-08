import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight, Check, Copy } from "@phosphor-icons/react";
import { BUGHUNT_CATEGORIES } from "../../data";
import { useCopy, usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";

export default function BugHuntArsenal() {
  usePageMeta(
    "BugHunt Arsenal | Muhammad Izaz Haider",
    "Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules.",
    "/projects/bughunt-arsenal",
  );
  const [category, setCategory] = useState(0);
  const { copied, copy } = useCopy();
  const current = BUGHUNT_CATEGORIES[category];
  return (
    <>
      <PageHero
        kicker="Project, tooling"
        title="BugHunt Arsenal"
        marker="BugHunt Arsenal"
        sentence="Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules. No install, no sign up."
      >
        <p className="mt-2">
          <Link to="/projects" className="inline-flex min-h-11 items-center gap-1 title-4 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
            <ArrowLeft size={16} weight="regular" aria-hidden="true" /> Back to projects
          </Link>
        </p>
      </PageHero>
      <section aria-label="Overview" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <dl className="meta-grid">
            <div><dt>Type</dt><dd>Browser app</dd></div>
            <div><dt>Status</dt><dd>Live, free, no paywalls</dd></div>
            <div><dt>Payloads</dt><dd>800+ across 21 categories</dd></div>
            <div><dt>Link</dt><dd><a href="https://bughunt-arsenal.vercel.app/" target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">Live site</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            BugHunt Arsenal is the tool a hunter opens every day: payloads, a Chain Builder, a Metadata Analyzer, an Encoder and Decoder, an HTTP Request Builder, and the OWASP Top 10 methodology, all in the browser.
          </p>
        </div>
      </section>
      <section aria-label="Payload browser" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Payload browser</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Pick a category to see example payloads. Nothing here is executed.</p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Payload categories">
            {BUGHUNT_CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                type="button"
                role="tab"
                aria-selected={category === i}
                onClick={() => setCategory(i)}
                className={`filter-pill rounded-full border border-[var(--line-soft)] px-4 py-2 caption-3 fade ${category === i ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)]" : "bg-[var(--surface)] text-[var(--muted)]"}`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="mt-6 max-w-[680px] space-y-4" role="tabpanel">
            {current.payloads.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <CodeStrip code={p} label={`Example payload: ${p}`} />
                </div>
                <button
                  type="button"
                  onClick={() => copy(p, p)}
                  className="btn-secondary !px-3 !py-2 shrink-0"
                  aria-label={`Copy payload ${p}`}
                >
                  {copied === p ? <Check size={16} weight="bold" aria-hidden="true" /> : <Copy size={16} weight="regular" aria-hidden="true" />}
                  {copied === p ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section aria-label="Links" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Links</h2>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href="https://bughunt-arsenal.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">
              Visit the live site <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
        </div>
      </section>
    </>
  );
}
