import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { PS_LIVE, PS_REPO, PS_STAGES } from "../../data";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";

export default function PowershellAcademy() {
  usePageMeta(
    "PowerShell Academy | Muhammad Izaz Haider",
    "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages.",
    "/projects/powershell-academy",
  );
  const [stage, setStage] = useState(0);
  const current = PS_STAGES[stage];
  return (
    <>
      <PageHero
        kicker="Project, teaching"
        title="PowerShell Academy"
        marker="PowerShell Academy"
        sentence="Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages, from foundations to security projects."
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
            <div><dt>Stack</dt><dd>TypeScript, Next.js, Vercel</dd></div>
            <div><dt>Status</dt><dd>Live, free, no account</dd></div>
            <div><dt>Content</dt><dd>18 chapters, 61 lessons, 102 commands</dd></div>
            <div><dt>Link</dt><dd><a href={PS_LIVE} target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">Live site</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            PowerShell Academy teaches PowerShell the way it is actually learned: one verb-noun command at a time, with the help read before the command is run. Created by Muhammad Izaz Haider.
          </p>
        </div>
      </section>
      <section aria-label="The six stages" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">The six stages</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Pick a stage to see its chapters and lessons.</p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Academy stages">
            {PS_STAGES.map((s, i) => (
              <button
                key={s.name}
                type="button"
                role="tab"
                aria-selected={stage === i}
                onClick={() => setStage(i)}
                className={`filter-pill rounded-full border border-[var(--line-soft)] px-4 py-2 caption-3 fade ${stage === i ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)]" : "bg-[var(--surface)] text-[var(--muted)]"}`}
              >
                {s.name}
              </button>
            ))}
          </div>
          <div className="card mt-6 max-w-[680px]" role="tabpanel">
            <p className="heading-3">{current.name}</p>
            <p className="mono caption-1 mt-2 text-[var(--muted)]">{current.chapters} chapter{current.chapters === 1 ? "" : "s"}, {current.lessons} lessons</p>
            <p className="body-3 mt-4 text-[var(--muted)]">{current.note}</p>
          </div>
        </div>
      </section>
      <section aria-label="Links" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Links</h2>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href={PS_LIVE} target="_blank" rel="noreferrer" className="btn-primary">
              Visit the live site <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <a href={PS_REPO} target="_blank" rel="noreferrer" className="btn-secondary">
              View the repo <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
        </div>
      </section>
    </>
  );
}
