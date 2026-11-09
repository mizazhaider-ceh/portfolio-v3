import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import { BUGHUNT_CATEGORIES, FEATURED_PROJECTS, type ProjectCount } from "../../data";

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

export default function BugHuntArsenal() {
  usePageMeta(
    "BugHunt Arsenal | Muhammad Izaz Haider",
    "Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules.",
    "/projects/bughunt-arsenal",
  );
  const active = useActiveSection();
  const project = FEATURED_PROJECTS.find((p) => p.name === "BugHunt Arsenal")!;
  return (
    <>
      <ScrollProgress />
      <PageHero marker="03, Case study" title="BugHunt Arsenal" sentence={project.outcome}>
        <HeroFacts facts={["Role: Sole builder", "Stack: Browser app", "Status: Live"]} />
      </PageHero>
      <div className="wrap pb-24">
        <div className="lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12">
          <CaseIndex active={active} />
          <div className="min-w-0">
            <div className="space-y-12">
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Security researchers lose hours to fragmented tooling. The same payloads are
                  re-discovered on every engagement, and critical knowledge sits scattered across
                  20+ bookmarks, notes, and repos.
                </p>
                <p className="body-copy">
                  Hours go to configuring environments instead of finding vulnerabilities, and no
                  single platform bridges recon, testing, and reporting.
                </p>
                <p className="body-copy">
                  A hunter who opens five tools to test one idea loses the idea before the test.
                </p>
                <Plate
                  shown="the problem the Arsenal answers, set out as three lines from the live site, not a screenshot."
                  happened="the Arsenal gathers the scattered tools into one browser platform."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">
                      Redundant research: the same payloads, re-discovered on every engagement.
                    </li>
                    <li className="body-copy">
                      Tool sprawl: knowledge scattered across 20+ bookmarks, notes, and repos.
                    </li>
                    <li className="body-copy">
                      Setup overhead: hours configuring environments instead of finding
                      vulnerabilities.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built BugHunt Arsenal alone, as the sole builder: the payload browser, the CTF
                  center, the chain builder, and the methodology pages.
                </p>
                <p className="body-copy">
                  I curate the payloads and tools from my own hunting and CTF work, and I keep the
                  platform free, with no install and no sign up.
                </p>
                <p className="body-copy">
                  I also write the methodology pages, so the payloads come with the thinking behind
                  them, not only the text.
                </p>
                <p className="body-copy">
                  There is no team claim here: the Arsenal is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Browser app, no install.</strong> The alternative was a desktop tool
                    or a set of scripts. The trade off is power: a browser app cannot run the heavy
                    tools a desktop can, so the Arsenal gathers, links, and explains, and the heavy
                    work stays on the hunter's own machine.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Payloads as text to copy, never to run.</strong> The alternative was
                    live payload testing in the browser. The trade off is safety: a copied payload
                    is the hunter's choice on their own target, and nothing on the site executes
                    against anyone.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>One platform, many modules.</strong> The alternative was one small
                    tool per job. The trade off is focus: one platform means one place to learn,
                    and a hunter who opens the Arsenal once opens it every day.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  BugHunt Arsenal is a browser app. It holds a payload browser, a CTF command
                  center, a chain builder, a metadata analyzer, an encoder and decoder, and the
                  OWASP Top 10 methodology, in one place.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark
                    light="/logos/javascript.svg"
                    dark="/logos/javascript.svg"
                    label="JavaScript"
                  />
                </p>
                <Plate
                  shown="one payload category at a time, three example payloads per category, as text to copy."
                  happened="the payloads are shown as text only, nothing here is executed."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="bughunt-categories"
                      label="Payload categories"
                      tabs={BUGHUNT_CATEGORIES.map((c) => ({
                        id: c.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: c.name,
                        panel: (
                          <div className="space-y-4">
                            {c.payloads.map((p) => (
                              <CodeStrip key={p} code={p} label={`Example payload: ${p}`} />
                            ))}
                            <p className="body-small" style={{ color: "var(--muted)" }}>
                              Nothing here is executed. Copy a payload, then test it on your own
                              target.
                            </p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  The chain builder is the clearest example of the method. A hunter links single
                  flaws into a multi-step exploit chain before testing, so the test follows a plan,
                  not a guess.
                </p>
                <p className="body-copy">
                  The modules cover the whole hunt: payloads to test, CTF tools to practice with, a
                  chain builder to link flaws into a path, a metadata analyzer to read what files
                  hide, and the OWASP Top 10 to keep the method straight.
                </p>
                <p className="body-copy">
                  The live site states its figures in its headline: 800+ payloads, 60+ CTF tools,
                  14+ modules, 150+ security tools, 21+ categories, 50+ free labs. This page uses
                  those figures only.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The site is live, free, and open in a browser, with no install and no sign up.
                  The counts below are the proof, each beside its source, and they use the live
                  site headline figures only.
                </p>
                <p className="body-copy">
                  The payload of the day and the popular payloads on the live site show the same
                  browser: the newest payloads first, the most used close behind.
                </p>
                {project.counts && <CountList counts={project.counts} />}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>One set of figures across the whole site.</strong> Next would be one set
                  of figures across the whole site. The headline and the on-page strip disagree on
                  payloads, CTF tools, and modules today, so the strip should read from the same
                  counts as the headline.
                </p>
                <p className="body-copy">
                  <strong>A repo link for the open-source wording.</strong> Next would be a repo
                  link for the open-source wording on the live site, so the claim is backed by the
                  code it points to.
                </p>
                <p className="body-copy">
                  <strong>Payload search by target and impact.</strong> Next would be a payload
                  search that filters by target and impact, so a hunter finds the right probe
                  without opening every category.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">
                    Visit the live site
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
                <p className="mono-meta" style={{ color: "var(--muted)" }}>
                  No repo link: no repo is confirmed for BugHunt Arsenal.
                </p>
              </Section>
            </div>
            <NextProject
              number="04"
              name="APK Security Pipeline"
              outcome={nextOutcome("APK Security Pipeline")}
              to="/projects/apk-security-pipeline"
            />
          </div>
        </div>
      </div>
    </>
  );
}
