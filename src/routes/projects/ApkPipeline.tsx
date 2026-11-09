import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";
import DiagramFigure from "../../components/DiagramFigure";
import Lightbox, { type LightboxImage } from "../../components/Lightbox";
import ApkPipelineDiagram from "../../components/diagrams/ApkPipeline";
import {
  APK_STAGES,
  FEATURED_PROJECTS,
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

const REPORT_IMAGES: LightboxImage[] = [
  {
    src: "/images/optimised/apk-report-preview.png",
    alt: "HTML report for a vulnerable sample APK, score 0 out of 100, grade F, 24 findings",
    width: 1280,
    height: 900,
    note: "What is shown: the HTML report for the vulnerable sample, score 0 out of 100, grade F. What happened: the pipeline scanned the sample, found 24 findings, and reported them in HTML and JSON.",
    shown: "the HTML report for the vulnerable sample, score 0 out of 100, grade F.",
    happened: "the pipeline scanned the sample, found 24 findings, and reported them in HTML and JSON.",
    title: "APK Security Pipeline HTML report, vulnerable sample",
  },
];

const AUDIT_SAMPLES: ProjectCount[] = [
  {
    value: "Clean 100 out of 100, grade A, 0 findings; vulnerable 0 out of 100, grade F, 24 findings",
    what: "Audit sample runs",
    source: "Repo README and project documentation",
  },
];

export default function ApkPipeline() {
  usePageMeta(
    "APK Security Pipeline | Muhammad Izaz Haider",
    "One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports. Pure Python, v2.1.0.",
    "/projects/apk-security-pipeline",
  );
  const active = useActiveSection();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const project = FEATURED_PROJECTS.find((p) => p.name === "APK Security Pipeline")!;
  return (
    <>
      <ScrollProgress />
      <PageHero
        marker="04, Case study"
        title="APK Security Pipeline"
        sentence={project.outcome}
      >
        <HeroFacts
          facts={["Role: Sole builder", "Stack: Python, Frida", "Status: Repo"]}
        />
      </PageHero>
      <div className="wrap pb-24">
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <CaseIndex active={active} />
          <div className="min-w-0">
            <div className="space-y-12">
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Checking an Android app by hand means opening the manifest, reading strings, and
                  tracing behaviour, one file at a time.
                </p>
                <p className="body-copy">
                  Each step lives in a different tool, and the result is a set of notes, not a
                  report a team can act on.
                </p>
                <p className="body-copy">
                  A check that takes an afternoon gets skipped, and the app ships untested.
                </p>
                <p className="body-copy">
                  The manual check is slow, uneven, and hard to repeat, so two reviewers find
                  different flaws in the same app.
                </p>
                <Plate
                  shown="the manual check, set out as four lines, not a screenshot."
                  happened="the pipeline turns the four steps into one command."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">The manifest, read by hand.</li>
                    <li className="body-copy">The strings, searched one by one.</li>
                    <li className="body-copy">The behaviour, guessed from the code.</li>
                    <li className="body-copy">The result, a set of notes, not a report.</li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built the APK Security Pipeline alone, as the sole builder: the parser, the
                  rules, the Frida traces, the scoring, and the reports.
                </p>
                <p className="body-copy">
                  I wrote it in pure Python, with zero dependencies, so one command runs anywhere
                  Python runs.
                </p>
                <p className="body-copy">
                  There is no team claim here: the pipeline is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Pure stdlib Python, zero dependencies.</strong> The alternative was a
                    framework with ready-made APK parsing. The trade off is work: I wrote my own
                    binary AXML parser and writer, so the tool runs with nothing to install, and
                    the parser is mine to fix.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Deep mode with apktool, jadx, and androguard.</strong> The alternative
                    was static checks only. The trade off is setup: deep mode needs the extra tools
                    installed, so it stays optional, and the default run needs only Python.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>One score out of 100, grade A to F.</strong> The alternative was a
                    list of findings with no verdict. The trade off is nuance: one score hides
                    detail, so every finding keeps its severity, and the score is only the summary.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  The pipeline reads an APK, checks it statically, watches it run with Frida,
                  scores what it finds, and writes the result as HTML for people and JSON for
                  tools.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark light="/logos/python.svg" dark="/logos/python.svg" label="Python" />
                </p>
                <DiagramFigure
                  title="APK Security Pipeline workflow"
                  caption="What is shown: the pipeline workflow, static manifest rules, strings and code rules, Frida dynamic traces, scoring, report generation, and baseline and CI modes. What happened: the diagram was rebuilt as a hand-built inline SVG in Monograph tokens."
                >
                  <ApkPipelineDiagram />
                </DiagramFigure>
                <p className="body-small" style={{ color: "var(--muted)" }}>
                  Text equivalent, in order:
                </p>
                <ul className="body-small list-disc space-y-1 pl-5" style={{ color: "var(--muted)" }}>
                  <li>01 Input: one command, APK file in</li>
                  <li>02 Static analysis: static manifest rules, then strings and code rules</li>
                  <li>03 Dynamic analysis: Frida dynamic traces, what the app does live</li>
                  <li>04 Scoring: one score out of 100, grade A to F</li>
                  <li>
                    05 Reports and CI: HTML and JSON reports, baseline compare or fail the build,
                    diff feeds the report
                  </li>
                </ul>
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>What it checks</th>
                      <th>What it produces</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APK_STAGES.map((s) => (
                      <tr key={s.name}>
                        <td>
                          <strong>{s.name}</strong>
                        </td>
                        <td style={{ color: "var(--muted)" }}>{s.checks}</td>
                        <td style={{ color: "var(--muted)" }}>{s.produces}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="body-copy">
                  Scoring starts at 100 and subtracts: critical 25, high 15, medium 7, low 3.
                  Exit codes carry the verdict: 0 means clean, 2 means findings at or above the
                  threshold, 1 means a clean error.
                </p>
                <Plate
                  shown="the scoring rules as they run: 100 minus severity, exit code as the verdict."
                  happened="the rules turn findings into one score and one grade."
                >
                  <div className="p-5 md:p-6">
                    <CodeStrip
                      code={"# scoring: 100 minus severity\n# critical 25, high 15, medium 7, low 3\n# exit 0 clean, 2 findings, 1 error"}
                      label="Scoring and exit codes"
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  One real debugging story sits behind the parser: the attributeStart bug in the
                  binary AXML reader, found during development and fixed before v2.1.0.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The pipeline proves itself on samples. The demo run below is its own run on a
                  synthetic APK, distinct from the audit sample runs beside it.
                </p>
                <Plate
                  shown="the HTML report for the vulnerable sample, score 0 out of 100, grade F."
                  happened="the pipeline scanned the sample, found 24 findings, and reported them in HTML and JSON."
                >
                  <button
                    type="button"
                    onClick={() => {
                      setLightboxIndex(0);
                      setLightboxOpen(true);
                    }}
                    aria-label="Open the report screenshot in a larger view"
                    className="block w-full cursor-pointer"
                    style={{ background: "none", border: 0, padding: 0 }}
                  >
                    <picture>
                      <source
                        srcSet="/images/optimised/apk-report-preview.webp"
                        type="image/webp"
                      />
                      <img
                        src="/images/optimised/apk-report-preview.png"
                        alt="HTML report for a vulnerable sample APK, score 0 out of 100, grade F, 24 findings"
                        width={1280}
                        height={900}
                        loading="lazy"
                      />
                    </picture>
                  </button>
                </Plate>
                {project.counts && <CountList counts={[...project.counts, ...AUDIT_SAMPLES]} />}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A write-up of the attributeStart bug.</strong> Next would be a write-up
                  of the attributeStart bug, with the failing input and the fix, so the parser's
                  hardest edge is documented, not just fixed.
                </p>
                <p className="body-copy">
                  <strong>A second demo run.</strong> Next would be a second demo run on a
                  real-world style sample, so the 26 out of 100 on a synthetic APK has a second
                  point of comparison.
                </p>
                <p className="body-copy">
                  <strong>A short guide to deep mode setup.</strong> Next would be a short guide
                  to deep mode setup, so a first run with apktool, jadx, and androguard takes
                  minutes, not an afternoon.
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
            </div>
            <NextProject
              number="05"
              name="Security-Books"
              outcome={nextOutcome("Security-Books")}
              to="/projects/security-books"
            />
          </div>
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
        images={REPORT_IMAGES}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        label="APK report screenshot"
      />
    </>
  );
}
