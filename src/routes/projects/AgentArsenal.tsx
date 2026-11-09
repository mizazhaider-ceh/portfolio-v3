import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { AGENT_DOMAINS } from "../../data";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import DiagramFigure from "../../components/DiagramFigure";
import SkillsTree from "../../components/diagrams/SkillsTree";

export default function AgentArsenal() {
  usePageMeta(
    "AgentArsenal | Muhammad Izaz Haider",
    "Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer.",
    "/projects/agentarsenal",
  );
  const [query, setQuery] = useState("");
  const domains = AGENT_DOMAINS.filter((d) => d.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <>
      <PageHero
        kicker="Project, AI security"
        title="AgentArsenal"
        marker="AgentArsenal"
        sentence="Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer."
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
            <div><dt>Skills</dt><dd>353 across 29 domains</dd></div>
            <div><dt>Also inside</dt><dd>290 sub-skills, 36 agents, 25 brains</dd></div>
            <div><dt>Quality</dt><dd>14-check CI harness, 0 to 100 scorer</dd></div>
            <div><dt>Link</dt><dd><a href="https://github.com/mizazhaider-ceh/AgentArsenal" target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">GitHub</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            AgentArsenal is a skills system, not a list: every skill is versioned, tested automatically, and scored for quality, and the whole repository installs with one command.
          </p>
        </div>
      </section>
      <section aria-label="Skills tree" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">The skills tree</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">One person, three branches, every leaf tied to evidence. The same tree as the Skills page.</p>
          <DiagramFigure
            title="Skills and career tree of Muhammad Izaz Haider"
            caption="Technical identity, skills and career tree: offensive security, defensive security, and AI security and automation, each leaf tied to evidence."
          >
            <SkillsTree />
          </DiagramFigure>
          <p className="body-6 mt-4 text-[var(--muted)]">Text equivalent, in order:</p>
          <ul className="body-6 mt-2 max-w-[680px] list-disc pl-5 text-[var(--muted)]">
            <li>Offensive security, 8 leaves: penetration testing, web application security, Burp Suite, OWASP ZAP, vulnerability assessment, API security, mobile security, digital forensics</li>
            <li>Defensive security, 7 leaves: Linux, Windows Server security, secure code review, CI/CD security, malware analysis (course work in progress), network security, cryptography</li>
            <li>AI security and automation, 11 leaves: Python, LLM integration and RAG, prompt engineering, Bash scripting, JavaScript, SQL, Git and GitHub, PowerShell, Frida, C and C++, testing and QA</li>
          </ul>
        </div>
      </section>
      <section aria-label="Browse the domains" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Browse the 29 domains</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Type to filter the domain list. No network call, just the list.</p>
          <div className="mt-8 max-w-[680px]">
            <label htmlFor="domain-search" className="title-4 mb-2 block">Filter domains</label>
            <input
              id="domain-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a domain, for example web"
              className="w-full rounded-lg border border-[var(--line-soft)] bg-[var(--surface)] px-4 py-3 body-3 text-[var(--ink)] placeholder:text-[var(--faint)]"
            />
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="AgentArsenal domains">
              {domains.map((d) => (
                <li key={d} className="rounded-lg border border-[var(--line-soft)] px-3 py-2 caption-3 text-[var(--muted)]">{d}</li>
              ))}
            </ul>
            {domains.length === 0 && <p className="body-6 mt-6 text-[var(--muted)]">No domain matches that search.</p>}
          </div>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/mizazhaider-ceh/AgentArsenal" target="_blank" rel="noreferrer" className="btn-primary">
              View on GitHub <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
        </div>
      </section>
    </>
  );
}
