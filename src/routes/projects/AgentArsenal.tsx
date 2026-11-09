import { ArrowUpRight } from "@phosphor-icons/react";
import { useState } from "react";
import CaseStudy, { CountList, Mark, Plate, Section } from "../../components/CaseStudy";
import { usePageMeta } from "../../hooks";
import DiagramFigure from "../../components/DiagramFigure";
import SkillsTree from "../../components/diagrams/SkillsTree";
import {
  AGENT_DOMAINS,
  DETAIL_ROUTES,
  MORE_PROJECTS,
  type ProjectCount,
} from "../../data";

const EXTRA_COUNTS: ProjectCount[] = [
  {
    value: "25 brains",
    what: "Brains in the repository",
    source: "Workspace manifest, generated 27 October 2026",
  },
  {
    value: "14-check CI harness, 0 to 100 scorer",
    what: "Quality checks and scoring",
    source: "Workspace manifest, generated 27 October 2026",
  },
];

export default function AgentArsenal() {
  usePageMeta(
    "AgentArsenal | Muhammad Izaz Haider",
    "Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer.",
    "/projects/agentarsenal",
  );
  const [query, setQuery] = useState("");
  const domains = AGENT_DOMAINS.filter((d) =>
    d.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const project = MORE_PROJECTS.find((p) => p.name === "AgentArsenal")!;
  const next = MORE_PROJECTS.find((p) => p.name === "Ai-Terminal-X")!;
  return (
    <CaseStudy
        marker="06, Case study"
        title="AgentArsenal"
        outcome={project.outcome}
        facts={["Role: Builder", "Scope: 353 skills, 29 domains", "Status: Repo"]}
        next={{number: "07", name: "Ai-Terminal-X", outcome: next.outcome, to: DETAIL_ROUTES["Ai-Terminal-X"]}}
      >
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Agent skills live in separate repos, in separate formats, with no versioning, no
                  tests, and no single install.
                </p>
                <p className="body-copy">
                  An agent that needs a skill finds a file, not a system, and every install is a
                  manual job.
                </p>
                <Plate
                  shown="the position before AgentArsenal, set out as three lines, not a screenshot."
                  happened="the repository gathers the skills into one versioned, tested system."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A skill in one repo, another in the next.</li>
                    <li className="body-copy">No version, no test, no install step.</li>
                    <li className="body-copy">Every setup done by hand, every time.</li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built AgentArsenal as the builder: the skills repository, the versioning, the
                  testing harness, and the one-command installer.
                </p>
                <p className="body-copy">
                  There is no team claim here: the repository is my initiative, built and
                  maintained by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>One repository, 29 domains.</strong> The alternative was a repo per
                    domain. The trade off is size: one repo means one install, and the domains keep
                    the skills findable.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Every skill versioned and tested.</strong> The alternative was a loose
                    collection of files. The trade off is upkeep: versioning and tests cost effort
                    on every change, and they are what make the skills safe to reuse.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  AgentArsenal is a skills system, not a list: every skill is versioned, tested
                  automatically, and scored for quality, and the whole repository installs with one
                  command.
                </p>
                <p className="body-copy">
                  The one-command installer is the point of the system. A skill that takes an
                  afternoon to install never gets used, so the install is one command, and the
                  skills are ready.
                </p>
                <DiagramFigure
                  title="Skills and career tree of Muhammad Izaz Haider"
                  caption="What is shown: the skills tree, offensive security, defensive security, and AI security and automation, each leaf tied to evidence. What happened: the diagram was rebuilt as a hand-built inline SVG in Monograph tokens, with the institution name and the stale repo count removed."
                >
                  <SkillsTree />
                </DiagramFigure>
                <p className="body-small" style={{ color: "var(--muted)" }}>
                  Text equivalent, in order:
                </p>
                <ul className="body-small list-disc space-y-1 pl-5" style={{ color: "var(--muted)" }}>
                  <li>
                    Offensive security, 8 leaves: penetration testing, web application security,
                    Burp Suite, OWASP ZAP, vulnerability assessment, API security, mobile security,
                    digital forensics
                  </li>
                  <li>
                    Defensive security, 7 leaves: Linux, Windows Server security, secure code
                    review, CI/CD security, malware analysis (course work in progress), network
                    security, cryptography
                  </li>
                  <li>
                    AI security and automation, 11 leaves: Python, LLM integration and RAG, prompt
                    engineering, Bash scripting, JavaScript, SQL, Git and GitHub, PowerShell,
                    Frida, C and C++, testing and QA
                  </li>
                </ul>
                <p className="body-copy">
                  Quality is checked, not claimed: a 14-check CI harness runs on every change, and
                  a 0 to 100 scorer grades each skill.
                </p>
                <Plate
                  shown="the 29 domains, filterable by typing, from the workspace manifest."
                  happened="the list is the map of the repository: every skill sits in one domain."
                >
                  <div className="p-5 md:p-6">
                    <label htmlFor="domain-search" className="label mb-2 block">
                      Filter domains
                    </label>
                    <input
                      id="domain-search"
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Type a domain, for example web"
                      className="input"
                    />
                    <ul
                      className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
                      aria-label="AgentArsenal domains"
                    >
                      {domains.map((d) => (
                        <li key={d} className="mono-meta" style={{ color: "var(--muted)" }}>
                          {d}
                        </li>
                      ))}
                    </ul>
                    {domains.length === 0 && (
                      <p className="body-small mt-4" style={{ color: "var(--muted)" }}>
                        No domain matches that search.
                      </p>
                    )}
                  </div>
                </Plate>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The counts below come from the workspace manifest, generated 27 October 2026,
                  not from the GitHub API. They are the proof, each beside its source.
                </p>
                {project.counts && (
                  <CountList counts={[...project.counts, ...EXTRA_COUNTS]} />
                )}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A GitHub API check on the counts.</strong> Next would be a GitHub API
                  check on the counts, so the numbers on this page match the repo, not only the
                  manifest.
                </p>
                <p className="body-copy">
                  <strong>Deeper proof per domain.</strong> Next would be deeper proof per
                  domain, so the breadth of 29 domains is backed by evidence in each domain, not
                  only by the count.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Mark
                      light="/logos/github-light.svg"
                      dark="/logos/github-dark.svg"
                      label="View on GitHub"
                    />
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
              </Section>
    </CaseStudy>
  );
}
