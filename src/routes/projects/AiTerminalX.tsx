import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { AI_TERMINAL_EXAMPLES } from "../../data";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";

export default function AiTerminalX() {
  usePageMeta(
    "Ai-Terminal-X | Muhammad Izaz Haider",
    "AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks. His most starred tool, 38 stars (GitHub, 8 Nov 2026).",
    "/projects/ai-terminal-x",
  );
  const [example, setExample] = useState(0);
  const current = AI_TERMINAL_EXAMPLES[example];
  return (
    <>
      <PageHero
        kicker="Project, AI security"
        title="Ai-Terminal-X"
        marker="Ai-Terminal-X"
        sentence="AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks. His most starred tool."
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
            <div><dt>Stack</dt><dd>Python, Gemini AI, CLI</dd></div>
            <div><dt>Built for</dt><dd>Linux, especially Kali</dd></div>
            <div><dt>Stars</dt><dd>38, his most starred tool (GitHub, 8 Nov 2026)</dd></div>
            <div><dt>Link</dt><dd><a href="https://github.com/mizazhaider-ceh/Ai-Terminal-X" target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">GitHub</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            Plain language in, a safe command out. Ai-Terminal-X turns a sentence into a real Linux command, explains it, and asks before it runs anything.
          </p>
        </div>
      </section>
      <section aria-label="Try a prompt" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Try a prompt</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Pick a plain language prompt from the project README. Nothing here is executed.</p>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Example prompts">
            {AI_TERMINAL_EXAMPLES.map((e, i) => (
              <button
                key={e.prompt}
                type="button"
                role="tab"
                aria-selected={example === i}
                onClick={() => setExample(i)}
                className={`filter-pill rounded-full border border-[var(--line-soft)] px-4 py-2 caption-3 fade ${example === i ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)]" : "bg-[var(--surface)] text-[var(--muted)]"}`}
              >
                {e.prompt}
              </button>
            ))}
          </div>
          <div className="mt-6 max-w-[680px]" role="tabpanel">
            <p className="title-3">You ask</p>
            <p className="body-2 mt-2">&ldquo;{current.prompt}&rdquo;</p>
            <p className="title-3 mt-6">It answers</p>
            <div className="mt-2">
              <CodeStrip code={current.command} label={`Command for: ${current.prompt}`} />
            </div>
            <p className="body-6 mt-4 text-[var(--muted)]">{current.note}</p>
          </div>
          <div className="callout mt-8 max-w-[680px]">
            <p><span className="t">Safe execution</span></p>
            <p className="body-3 mt-2">Before running any command, Ai-Terminal-X runs a multi-layer risk check, then prompts for confirmation when needed. Nothing runs without permission.</p>
          </div>
        </div>
      </section>
      <section aria-label="Links" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Links</h2>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/mizazhaider-ceh/Ai-Terminal-X" target="_blank" rel="noreferrer" className="btn-primary">
              View on GitHub <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
        </div>
      </section>
    </>
  );
}
