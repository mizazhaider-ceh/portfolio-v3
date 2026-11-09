import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import { AI_TERMINAL_EXAMPLES, MORE_PROJECTS } from "../../data";

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

function NextProject({
  name,
  outcome,
  to,
  back = false,
}: {
  name: string;
  outcome: string;
  to: string;
  back?: boolean;
}) {
  return (
    <div className="mt-12 border-t pt-8" style={{ borderColor: "var(--line)" }}>
      <Link to={to} className="block min-h-[88px]" style={{ textDecoration: "none" }}>
        <p className="mono-meta" style={{ color: "var(--muted)" }}>
          {back ? "Back to all projects" : "Next project"}
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

export default function AiTerminalX() {
  usePageMeta(
    "Ai-Terminal-X | Muhammad Izaz Haider",
    "AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks.",
    "/projects/ai-terminal-x",
  );
  const active = useActiveSection();
  const project = MORE_PROJECTS.find((p) => p.name === "Ai-Terminal-X")!;
  return (
    <>
      <ScrollProgress />
      <PageHero marker="07, Case study" title="Ai-Terminal-X" sentence={project.outcome}>
        <HeroFacts
          facts={["Role: Builder", "Stack: Python, Gemini, CLI", "Status: Repo"]}
        />
      </PageHero>
      <div className="wrap pb-24">
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <CaseIndex active={active} />
          <div className="min-w-0">
            <div className="space-y-12">
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  The terminal is powerful and unforgiving. A plain sentence has no way in, and a
                  new user must learn the command before they can use it.
                </p>
                <p className="body-copy">
                  A wrong command runs before its author understands it, and the fix takes longer
                  than the task.
                </p>
                <p className="body-copy">
                  A user who must memorise flags before doing the work never starts the work.
                </p>
                <Plate
                  shown="the position before Ai-Terminal-X, set out as three lines, not a screenshot."
                  happened="the assistant turns the sentence into a command, explains it, and asks first."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A sentence with no way into the terminal.</li>
                    <li className="body-copy">
                      A command learned before it is understood.
                    </li>
                    <li className="body-copy">
                      A mistake that runs before it is caught.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built Ai-Terminal-X as the builder: the plain-language prompts, the command
                  mapping, and the safe execution checks.
                </p>
                <p className="body-copy">
                  There is no team claim here: the tool is my initiative, built and maintained by
                  me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Plain language in, a command out.</strong> The alternative was a
                    cheat sheet of commands to memorise. The trade off is precision: a sentence is
                    vaguer than a command, so the tool shows the command it chose, and the user
                    checks it before it runs.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Safe execution checks before anything runs.</strong> The alternative
                    was running the command straight away. The trade off is speed: a check and a
                    confirmation take a moment, and they are what keep a guessed command from doing
                    damage.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  Ai-Terminal-X turns a sentence into a real Linux command, explains it, and asks
                  before it runs anything.
                </p>
                <p className="body-copy">
                  The tool is built for Linux, especially Kali, where the terminal is the daily
                  workplace.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark light="/logos/python.svg" dark="/logos/python.svg" label="Python" />
                  <Mark light="/logos/linux.svg" dark="/logos/linux.svg" label="Linux" />
                </p>
                <Plate
                  shown="three plain-language prompts, each with the command it returns."
                  happened="the prompts come from the project README, and nothing here is executed."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="ai-terminal-examples"
                      label="Example prompts"
                      tabs={AI_TERMINAL_EXAMPLES.map((e) => ({
                        id: e.prompt.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: e.prompt,
                        panel: (
                          <div>
                            <p className="label">You ask</p>
                            <p className="body-copy mt-2">&ldquo;{e.prompt}&rdquo;</p>
                            <p className="label mt-5">It answers</p>
                            <div className="mt-2">
                              <CodeStrip code={e.command} label={`Command for: ${e.prompt}`} />
                            </div>
                            <p className="body-small mt-4" style={{ color: "var(--muted)" }}>
                              {e.note}
                            </p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  Before running any command, Ai-Terminal-X runs a multi-layer risk check, then
                  prompts for confirmation when needed. Nothing runs without permission.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The proof is the mapping itself: three prompts from the project README, each with
                  the command it returns, shown in the tabs above. The repo is the only link.
                </p>
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A dry-run mode.</strong> Next would be a dry-run mode that shows the
                  command and its effect without running it, so a new user learns what a command
                  does before trusting it.
                </p>
                <p className="body-copy">
                  <strong>A list of refused commands.</strong> Next would be a short list of the
                  riskiest commands the tool refuses, so a user knows the boundary before they meet
                  it.
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
              name="All projects"
              outcome="Five case studies, then the archive."
              to="/projects"
              back
            />
          </div>
        </div>
      </div>
    </>
  );
}
