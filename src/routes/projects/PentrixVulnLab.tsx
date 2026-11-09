import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";
import DiagramFigure from "../../components/DiagramFigure";
import PentrixArchitecture from "../../components/diagrams/PentrixArchitecture";
import {
  CHALLENGE_PANEL,
  FEATURED_PROJECTS,
  PENTRIX_FLAG_LINE,
  type ProjectCount,
} from "../../data";

const SECTIONS = [
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My role" },
  { id: "decisions", label: "Decisions" },
  { id: "how-it-was-built", label: "How it was built" },
  { id: "evidence", label: "Evidence" },
  { id: "what-i-would-improve", label: "What I would improve" },
  { id: "links", label: "Links" },
] as const;

function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return pct;
}

function ScrollProgress() {
  const pct = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-[2px]"
      style={{ width: `${pct}%`, background: "var(--accent)" }}
    />
  );
}

function useActiveSection() {
  const [active, setActive] = useState<string>("problem");
  useEffect(() => {
    const onScroll = () => {
      let current = "problem";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function CaseIndex({ active }: { active: string }) {
  const go = (id: string) => () => {
    const el = document.getElementById(id);
    if (el) el.focus({ preventScroll: true });
  };
  return (
    <>
      <nav aria-label="In this case study" className="hidden lg:block">
        <div className="sticky top-24">
          <p className="mono-meta" style={{ color: "var(--muted)" }}>
            In this case study
          </p>
          <ul className="mt-4 space-y-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={go(s.id)}
                  className="mono-meta inline-flex min-h-11 items-center"
                  style={{
                    color: active === s.id ? "var(--ink)" : "var(--muted)",
                    borderBottom:
                      active === s.id ? "2px solid var(--accent)" : "2px solid transparent",
                  }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav aria-label="In this case study" className="mb-10 lg:hidden">
        <p className="mono-meta" style={{ color: "var(--muted)" }}>
          In this case study
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={go(s.id)}
                className="mono-meta inline-flex min-h-11 items-center"
                style={{
                  color: active === s.id ? "var(--ink)" : "var(--muted)",
                  textDecoration: active === s.id ? "underline" : "none",
                  textUnderlineOffset: 4,
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-label={title} tabIndex={-1} className="scroll-mt-24 outline-none">
      <h2 className="title-small">{title}</h2>
      <div className="mt-4 space-y-5">{children}</div>
    </section>
  );
}

function Plate({
  shown,
  happened,
  children,
}: {
  shown: string;
  happened: string;
  children: ReactNode;
}) {
  return (
    <figure>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <p className="figure-note order-first lg:order-2 lg:w-60 lg:shrink-0 lg:pt-2">
          <strong style={{ color: "var(--ink)" }}>What is shown: </strong>
          {shown}{" "}
          <strong style={{ color: "var(--ink)" }}>What happened: </strong>
          {happened}
        </p>
        <div className="plate order-2 lg:order-1 lg:min-w-0 lg:flex-1">{children}</div>
      </div>
    </figure>
  );
}

function HeroFacts({ facts }: { facts: string[] }) {
  return (
    <>
      <p>
        <Link
          to="/projects"
          className="mono-meta inline-flex min-h-11 items-center gap-1"
          style={{ color: "var(--ink)" }}
        >
          <ArrowLeft size={16} weight="regular" aria-hidden="true" /> Back to projects
        </Link>
      </p>
      <p
        className="mono-meta mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-y py-3"
        style={{ borderColor: "var(--line)", color: "var(--muted)" }}
      >
        {facts.map((f, i) => (
          <span key={f} className="inline-flex items-center gap-3">
            {i > 0 && <span aria-hidden="true">|</span>}
            <span>{f}</span>
          </span>
        ))}
      </p>
    </>
  );
}

function CountList({ counts }: { counts: ProjectCount[] }) {
  return (
    <ul>
      {counts.map((c) => (
        <li
          key={c.value}
          className="border-t py-4 first:border-t-0 first:pt-0"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="label" style={{ color: "var(--ink)" }}>
            {c.value}
          </p>
          <p className="body-small mt-1" style={{ color: "var(--muted)" }}>
            {c.what}
          </p>
          <p className="mono-meta mt-1" style={{ color: "var(--muted)" }}>
            Source: {c.source}
          </p>
        </li>
      ))}
    </ul>
  );
}

function NextProject({
  number,
  name,
  outcome,
  to,
  back = false,
}: {
  number?: string;
  name: string;
  outcome: string;
  to: string;
  back?: boolean;
}) {
  return (
    <div className="mt-12 border-t pt-8" style={{ borderColor: "var(--line)" }}>
      <Link to={to} className="block min-h-[88px]" style={{ textDecoration: "none" }}>
        <p className="mono-meta" style={{ color: "var(--muted)" }}>
          {back ? "Back to all projects" : `${number}, Next project`}
        </p>
        <p className="title-small mt-2">{name}</p>
        <p className="body-small mt-1" style={{ color: "var(--muted)" }}>
          {outcome}
        </p>
      </Link>
    </div>
  );
}

function usePageTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function Mark({ light, dark, label }: { light: string; dark: string; label: string }) {
  const theme = usePageTheme();
  return (
    <span className="inline-flex items-center gap-2">
      <img
        src={theme === "dark" ? dark : light}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
      />
      <span>{label}</span>
    </span>
  );
}

function nextOutcome(name: string) {
  return FEATURED_PROJECTS.find((p) => p.name === name)?.outcome ?? "";
}

const CHALLENGE_STEPS = [
  ...CHALLENGE_PANEL.steps,
  {
    title: "Fix it.",
    detail: "Check the role on the server before serving the panel, not only that a session exists.",
  },
];

export default function PentrixVulnLab() {
  usePageMeta(
    "PenTrix-VulnLab | Muhammad Izaz Haider",
    "Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates.",
    "/projects/pentrix-vulnlab",
  );
  const active = useActiveSection();
  const project = FEATURED_PROJECTS.find((p) => p.name === "PenTrix-VulnLab")!;
  return (
    <>
      <ScrollProgress />
      <PageHero marker="01, Case study" title="PenTrix-VulnLab" sentence={project.outcome}>
        <HeroFacts
          facts={[
            "Role: Founder, lead developer",
            "Stack: Node.js, Express, SQLite",
            "Status: Repo",
          ]}
        />
      </PageHero>
      <div className="wrap pb-24">
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <CaseIndex active={active} />
          <div className="min-w-0">
            <div className="space-y-12">
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Most learning labs hand the learner the answer, or they give a black box with
                  no path from finding to fixing.
                </p>
                <p className="body-copy">
                  A student can finish a challenge without learning the method, and then cannot
                  repeat it on the next flaw.
                </p>
                <Plate
                  shown="the learner's position before the lab, set out as three lines, not a screenshot."
                  happened="the lab was built to close this gap, one challenge at a time."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A challenge with no path from finding to fixing.</li>
                    <li className="body-copy">A walkthrough that hands over the answer.</li>
                    <li className="body-copy">A black box that never shows the method.</li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I founded The PenTrix and built PenTrix-VulnLab as its flagship. I am the
                  founder, lead developer, challenge designer, and documentation author.
                </p>
                <p className="body-copy">
                  Every challenge, every kill chain scenario, and every career path was designed
                  and written by me, for students learning web penetration testing.
                </p>
                <p className="body-copy">
                  There is no team claim here: the lab is my initiative, built and maintained by
                  me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Deliberately vulnerable, local install only.</strong> The alternative
                    was a hosted demo anyone could open in a browser. The trade off is reach: the
                    lab runs only on the student's own machine, and a vulnerable app is never
                    exposed to the internet.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Challenges graded by vulnerability class, not by trick.</strong> The
                    alternative was puzzle style challenges where the trick is the point. The
                    trade off is surprise: the path from finding to fixing stays clear, so a
                    learner can repeat the method on the next class.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Flags generated per install at first boot.</strong> The alternative
                    was fixed flags checked into the repo. The trade off is a simple answer key:
                    fixed flags would leak the answers, so per install generation is chosen even
                    though no two installs share a flag value.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  PenTrix-VulnLab is an Express and SQLite application. A browser talks to the
                  Express app, the app serves challenges from its modules, and SQLite stores
                  challenges, progress, and certificates.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark light="/logos/nodejs.svg" dark="/logos/nodejs.svg" label="Node.js" />
                  <Mark
                    light="/logos/javascript.svg"
                    dark="/logos/javascript.svg"
                    label="JavaScript"
                  />
                </p>
                <Plate
                  shown="the module browser: the lab's structure, from the repo README, as a list."
                  happened="the structure is the map a learner follows, from one challenge to a full career path."
                >
                  <ul className="p-5 md:p-6">
                    <li
                      className="body-copy border-t py-3 first:border-t-0 first:pt-0"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <strong>29 modules</strong>, grouped by vulnerability class, 201 challenges
                      in total.
                    </li>
                    <li
                      className="body-copy border-t py-3 last:pb-0"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <strong>3 kill chain scenarios</strong>, single flaws strung into full attack
                      paths.
                    </li>
                    <li
                      className="body-copy border-t py-3 last:pb-0"
                      style={{ borderColor: "var(--line)" }}
                    >
                      <strong>3 career paths</strong>, each ending with a verifiable certificate.
                    </li>
                  </ul>
                </Plate>
                <p className="body-copy">
                  The forced browsing challenge is the clearest example. A signed-in user asks for
                  the admin panel, the panel checks only that a session exists, and the path
                  opens. The plate below shows the request, the four steps, and the fix.
                </p>
                <Plate
                  shown="the forced browsing challenge, request plus four steps, as a static plate."
                  happened="the challenge runs in the lab, and the interactive version lives on the home page."
                >
                  <div className="p-5 md:p-6">
                    <CodeStrip code={CHALLENGE_PANEL.request} label="Request" />
                    <ol className="mt-5 space-y-3">
                      {CHALLENGE_STEPS.map((s, i) => (
                        <li key={s.title} className="flex gap-3">
                          <span
                            className="mono-meta shrink-0"
                            style={{ color: "var(--accent-text)" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="body-copy">
                            <strong>{s.title}</strong> {s.detail}
                          </p>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-5">
                      <Link
                        to="/"
                        className="label inline-flex min-h-11 items-center gap-1 underline underline-offset-4"
                        style={{ color: "var(--ink)" }}
                      >
                        Try it on the home page
                        <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                      </Link>
                    </p>
                  </div>
                </Plate>
                <DiagramFigure
                  title="PenTrix-VulnLab architecture"
                  caption="What is shown: the architecture, browser to Express app to SQLite, 29 challenge modules, 3 kill chain scenarios, 3 career paths. What happened: the diagram was rebuilt as a hand-built inline SVG in Monograph tokens."
                >
                  <PentrixArchitecture />
                </DiagramFigure>
                <p className="body-small" style={{ color: "var(--muted)" }}>
                  Text equivalent, in order:
                </p>
                <ul className="body-small list-disc space-y-1 pl-5" style={{ color: "var(--muted)" }}>
                  <li>Student browser sends an HTTP request to the PenTrix-VulnLab app</li>
                  <li>
                    The Express app serves a challenge from 29 challenge modules, grouped by
                    vulnerability class
                  </li>
                  <li>Modules chain into 3 kill chain scenarios, full attack paths</li>
                  <li>
                    The app records challenges, progress, and certificates in SQLite, and
                    completed paths issue progress and certificates across 3 career paths
                  </li>
                </ul>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The repository is the only link. The lab must not be deployed publicly, so there
                  is no live demo. The architecture diagram, the challenge plate, and the module
                  counts below are the proof.
                </p>
                <div
                  className="border p-5 md:p-6"
                  style={{ borderColor: "var(--line)", borderRadius: 2, background: "var(--surface)" }}
                >
                  <p className="label" style={{ color: "var(--ink)" }}>
                    How flags work
                  </p>
                  <p className="body-copy mt-2">{PENTRIX_FLAG_LINE}</p>
                </div>
                {project.counts && <CountList counts={project.counts} />}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>Filter by vulnerability class.</strong> Next would be a filter by
                  vulnerability class, so a learner finds the next challenge among 201 without
                  scrolling.
                </p>
                <p className="body-copy">
                  <strong>A setup page with the exact expected output.</strong> Next would be a
                  setup page that shows the exact command to start the lab and the exact output to
                  expect, so a learner knows within a minute whether the install worked.
                </p>
                <p className="body-copy">
                  <strong>A single map page.</strong> Next would be a single map page: each
                  vulnerability class, its modules, and the kill chain it feeds, so a learner sees
                  the whole path before starting the first challenge.
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
                <p className="body-small" style={{ color: "var(--muted)" }}>
                  PenTrix-VulnLab must not be deployed publicly. The repository is the only link.
                </p>
              </Section>
            </div>
            <NextProject
              number="02"
              name="PowerShell Academy"
              outcome={nextOutcome("PowerShell Academy")}
              to="/projects/powershell-academy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
