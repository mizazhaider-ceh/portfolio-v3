import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import {
  FEATURED_PROJECTS,
  PS_LIVE,
  PS_REPO,
  PS_STAGES,
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

export default function PowershellAcademy() {
  usePageMeta(
    "PowerShell Academy | Muhammad Izaz Haider",
    "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages.",
    "/projects/powershell-academy",
  );
  const active = useActiveSection();
  const project = FEATURED_PROJECTS.find((p) => p.name === "PowerShell Academy")!;
  /* The 102 commands figure was re-verified on the live commands page
     during this build (9 November 2026, "Showing 102 of 102 commands"),
     so its source line carries the re-verification date here. The
     content model still carries the older "re-verify in Phase 7" note. */
  const counts = (project.counts ?? []).map((c) =>
    c.value === "102 commands"
      ? { ...c, source: "Live commands page, re-verified 9 November 2026" }
      : c,
  );
  return (
    <>
      <ScrollProgress />
      <PageHero marker="02, Case study" title="PowerShell Academy" sentence={project.outcome}>
        <HeroFacts
          facts={[
            "Role: Sole builder",
            "Stack: TypeScript, Next.js, React, plain CSS",
            "Status: Live",
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
                  PowerShell is learned by running commands, but most guides show the command
                  without the why, and the learner copies it without reading it.
                </p>
                <p className="body-copy">
                  A beginner opens a terminal, types a command from a page, and has no way to know
                  what it does, or what to try next.
                </p>
                <p className="body-copy">
                  The result is a learner who can type, but cannot read, and who stops at the
                  first error.
                </p>
                <Plate
                  shown="the learner's position before the Academy, set out as three lines, not a screenshot."
                  happened="the Academy was built to give every command its why, and every lesson its next step."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A command copied, never read.</li>
                    <li className="body-copy">A lesson that ends at the first example.</li>
                    <li className="body-copy">
                      No path from the first command to the next.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built PowerShell Academy alone, as the sole builder: the content, the
                  structure, and the site.
                </p>
                <p className="body-copy">
                  I wrote all 18 chapters and 61 lessons in easy mentor words, from the
                  PowerShell material and outside research, rewritten, never copied.
                </p>
                <p className="body-copy">
                  I keep the content current: new lessons and commands go into the same structured
                  data, so the site grows without a rewrite.
                </p>
                <p className="body-copy">
                  There is no team claim here: the Academy is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Structured data plus one renderer.</strong> The alternative was a page
                    per lesson, hand written. The trade off is a rigid shape: every lesson follows
                    the same data shape, so adding a lesson means adding data, never a new page.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Plain CSS instead of Tailwind.</strong> The alternative was the
                    utility classes the rest of the web uses. The trade off is speed of writing:
                    plain CSS is slower to write, but the site stays small, and the design stays
                    in one place.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Single-column lessons, no command execution in the browser.</strong>{" "}
                    The alternative was an embedded terminal that runs commands. The trade off is
                    hands-on feel: the Academy teaches the command, and the learner runs it on
                    their own machine, where a mistake is theirs to fix.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  The Academy is a Next.js site with its content as structured data and one
                  renderer. The data holds the chapters, lessons, commands, and glossary, and the
                  renderer turns that data into pages.
                </p>
                <p className="body-copy">
                  The renderer is one component: the same page shape serves every lesson, so the
                  design never drifts between chapters.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark
                    light="/logos/typescript.svg"
                    dark="/logos/typescript.svg"
                    label="TypeScript"
                  />
                  <Mark
                    light="/logos/nextjs-light.svg"
                    dark="/logos/nextjs-dark.svg"
                    label="Next.js"
                  />
                  <Mark light="/logos/react-light.svg" dark="/logos/react-dark.svg" label="React" />
                </p>
                <Plate
                  shown="the six stages, from Foundations to Projects, with chapters and lessons per stage."
                  happened="the stages carry the learner from zero to confident use, in order."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="ps-stages"
                      label="Academy stages"
                      tabs={PS_STAGES.map((s) => ({
                        id: s.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: s.name,
                        panel: (
                          <div>
                            <p className="title-small">{s.name}</p>
                            <p className="mono-meta mt-2" style={{ color: "var(--muted)" }}>
                              {s.chapters} chapter{s.chapters === 1 ? "" : "s"}, {s.lessons}{" "}
                              lessons
                            </p>
                            <p className="body-copy mt-3">{s.note}</p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  The verb-noun pattern is the first thing a lesson teaches. Find the cmdlet, then
                  read its help, then run it. The plate below shows the pattern as it appears in
                  the Academy.
                </p>
                <Plate
                  shown="the verb-noun pattern from the Academy, Get-Command to find the cmdlet, then read its help."
                  happened="the same pattern opens the Foundations stage, and every lesson builds on it."
                >
                  <div className="p-5 md:p-6">
                    <CodeStrip code={project.strip} label={`Code from ${project.name}`} />
                  </div>
                </Plate>
                <p className="body-copy">
                  The command reference holds 102 commands, each with its syntax and its
                  plain-language description, grouped by chapter. The glossary holds 48 terms, so
                  a beginner never meets a word without its meaning.
                </p>
                <p className="body-copy">
                  Nothing on the site runs a command. The Academy teaches the command, and the
                  learner runs it on their own machine.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The site is live and free, with no account and no sign up. The counts below are
                  the proof, each beside its source.
                </p>
                <p className="body-copy">
                  The commands page lists all 102 commands, grouped by chapter, with a search by
                  verb and chapter.
                </p>
                <CountList counts={counts} />
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A lesson reader screenshot on this page.</strong> Next would be a lesson
                  reader screenshot on this page, so a visitor sees a real lesson before opening
                  the site.
                </p>
                <p className="body-copy">
                  <strong>Search across all 102 commands.</strong> Next would be a search across
                  all 102 commands, so a learner finds a cmdlet by what it does, not only by its
                  chapter.
                </p>
                <p className="body-copy">
                  <strong>A progress marker in the browser.</strong> Next would be a progress
                  marker that remembers the last lesson read, stored only in the browser, so a
                  learner returns to where they stopped.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a href={PS_LIVE} target="_blank" rel="noreferrer" className="btn-primary">
                    Visit the live site
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                  <a href={PS_REPO} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Mark
                      light="/logos/github-light.svg"
                      dark="/logos/github-dark.svg"
                      label="View the repo"
                    />
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
              </Section>
            </div>
            <NextProject
              number="03"
              name="BugHunt Arsenal"
              outcome={nextOutcome("BugHunt Arsenal")}
              to="/projects/bughunt-arsenal"
            />
          </div>
        </div>
      </div>
    </>
  );
}
