import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import ChallengePanel from "../../components/ChallengePanel";
import DiagramFigure from "../../components/DiagramFigure";

export default function PentrixVulnLab() {
  usePageMeta(
    "PenTrix-VulnLab | Muhammad Izaz Haider",
    "Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates.",
    "/projects/pentrix-vulnlab",
  );
  return (
    <>
      <PageHero
        kicker="Project, The PenTrix flagship"
        title="PenTrix-VulnLab"
        marker="PenTrix-VulnLab"
        sentence="Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates."
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
            <div><dt>Stack</dt><dd>Express, SQLite</dd></div>
            <div><dt>Status</dt><dd>Open source, repo only</dd></div>
            <div><dt>Challenges</dt><dd>201 across 29 modules</dd></div>
            <div><dt>Link</dt><dd><a href="https://github.com/mizazhaider-ceh/PenTrix-VulnLab" target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">GitHub</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            PenTrix-VulnLab is the flagship of The PenTrix: a lab where a student learns web penetration testing by breaking a real app, one challenge at a time. Each module groups challenges by vulnerability class, each kill chain scenario strings them into a full attack path, and each career path ends with a verifiable certificate.
          </p>
          <div className="callout mt-8 max-w-[680px]">
            <p><span className="t">How flags work</span></p>
            <p className="body-3 mt-2">Flags are randomly generated per install at first boot on the student&apos;s machine. No flag literal exists in any tracked file. Only genuine exploits earn flags.</p>
          </div>
        </div>
      </section>
      <section aria-label="The challenge" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">The challenge, solved step by step</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Pick a step. The fourth step shows the fix, which is what makes this a teaching page, not a walkthrough.</p>
          <div className="mt-8 max-w-[820px]">
            <ChallengePanel withFix />
          </div>
        </div>
      </section>
      <section aria-label="Architecture" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Architecture</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">The student&apos;s browser, the Express app, and the SQLite database. Deliberately vulnerable by design, and only on the student&apos;s own machine.</p>
          <DiagramFigure
            src="/diagrams/pentrix-architecture.html"
            title="PenTrix-VulnLab architecture"
            caption="PenTrix-VulnLab architecture: browser, Express app, SQLite database, 29 challenge modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates."
          />
        </div>
      </section>
      <section aria-label="What this project proves" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">What this project proves</h2>
          <ul className="checklist mt-8 max-w-[680px]">
            <li>201 challenges across 29 modules, grouped by vulnerability class</li>
            <li>3 kill chain scenarios that string single flaws into a full attack path</li>
            <li>3 career paths with verifiable certificates</li>
            <li>Built with Express and SQLite, and used to teach the method, not just the result</li>
          </ul>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/mizazhaider-ceh/PenTrix-VulnLab" target="_blank" rel="noreferrer" className="btn-primary">
              View on GitHub <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
          <p className="body-6 mt-6 text-[var(--muted)]">PenTrix-VulnLab must not be deployed publicly. The repository is the only link.</p>
        </div>
      </section>
    </>
  );
}
