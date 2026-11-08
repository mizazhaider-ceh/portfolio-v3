import { Link } from "react-router";
import { ArrowDown, ArrowRight, ChartBar, SealCheck, Trophy } from "@phosphor-icons/react";
import { ABOUT_FACTS, ABOUT_PARAGRAPHS, FEATURED_PROJECTS, HERO, PROOF_STATS } from "../data";
import { usePageMeta } from "../hooks";
import ChallengePanel from "../components/ChallengePanel";
import Tagline from "../components/Tagline";
import { ProjectCard } from "../components/ProjectCard";

const STAT_ICONS = [Trophy, ChartBar, SealCheck];

export default function Home() {
  usePageMeta(
    "Muhammad Izaz Haider, Penetration Tester, AI x Offensive Security",
    "Second year BSc Cybersecurity student at Howest, Belgium. Bug bounty hunter on YesWeHack, CSCB 2026 #1 Web Junior, founder of The PenTrix, building AI powered security tools.",
    "/",
  );
  return (
    <>
      <section aria-label="Introduction" style={{ "--h": 1, "--ht": 2, "--hm": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6 lg:items-center">
            <div className="min-w-0 lg:col-span-5">
              <div className="lime-rule enter" aria-hidden="true" />
              <p className="enter enter-1 mt-6">
                <span className="kicker">BSc Cybersecurity, Howest, Belgium</span>
              </p>
              <h1 className="heading-1 enter enter-1 mt-6">
                Muhammad <span className="marker">Izaz Haider</span>
              </h1>
              <p className="body-2 enter enter-2 mt-6 max-w-[680px] text-[var(--muted)]">{HERO.sentence}</p>
              <p className="enter enter-3 mt-6 flex flex-wrap items-center gap-2">
                <span className="flex max-w-full flex-wrap items-center gap-2 rounded-lg bg-[var(--lilac)] px-3 py-2 title-4 text-[var(--periwinkle-deep)]">
                  <span className="mono">{HERO.fact}</span>
                </span>
              </p>
              <div className="enter enter-3 mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get in touch
                  <ArrowRight size={18} weight="regular" aria-hidden="true" />
                </Link>
                <Link to="/projects" className="btn-secondary">
                  See my work
                  <ArrowDown size={18} weight="regular" aria-hidden="true" />
                </Link>
              </div>
              <p className="body-5 enter enter-4 mt-8 text-[var(--muted)]">{HERO.availability}</p>
              <p className="mono enter enter-4 mt-3 caption-2 text-[var(--faint)]">{HERO.statusLine}</p>
            </div>
            <div className="enter enter-2 min-w-0 lg:col-span-6 lg:col-start-7" aria-label="A PenTrix-VulnLab challenge, solved">
              <ChallengePanel />
            </div>
          </div>
        </div>
      </section>

      <Tagline />

      <section aria-label="About preview" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">About</h2>
          <p className="body-2 mt-4 text-[var(--muted)]">I break things for a living, and I build the tools that find the break.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <figure className="self-start overflow-hidden rounded-2xl border border-[var(--line-soft)]">
              <img src="/images/profile.png" alt="Portrait of Muhammad Izaz Haider" width={800} height={800} loading="lazy" className="aspect-square w-full object-cover" />
            </figure>
            <div>
              <div className="space-y-6">
                {ABOUT_PARAGRAPHS.slice(0, 2).map((p) => (
                  <p key={p.slice(0, 24)} className="body-3 text-[var(--muted)]">{p}</p>
                ))}
              </div>
              <dl className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ABOUT_FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="caption-4 text-[var(--faint)]">{f.label}</dt>
                    <dd className="body-5 mt-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8">
                <Link to="/about" className="inline-flex min-h-11 items-center gap-1 title-3 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
                  More about me
                  <ArrowRight size={18} weight="regular" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Featured projects" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Featured projects</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">The work that shows the skill. Flagship first.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROJECTS.slice(0, 3).map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
          <p className="mt-8">
            <Link to="/projects" className="inline-flex min-h-11 items-center gap-1 title-3 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
              All projects
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="Proof preview" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Talk is cheap. Here is the proof.</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Real scoreboards and real recognition, not claims.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROOF_STATS.map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <Link key={s.figure} to="/proof" className="card card-hover block h-full">
                  <Icon size={24} weight="regular" className="text-[var(--periwinkle-deep)]" aria-hidden="true" />
                  <p className="heading-3 mt-3 text-[var(--periwinkle-deep)]">{s.figure}</p>
                  <p className="title-3 mt-3">{s.label}</p>
                  <p className="body-6 mt-2 text-[var(--muted)]">{s.detail}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label="Get in touch" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Get in touch</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">
            Hiring for an offensive security internship, a junior role, or a research place? I would like to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Get in touch
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
            <Link to="/projects" className="btn-secondary">
              See my work
            </Link>
          </div>
          <p className="body-5 mt-8 text-[var(--muted)]">{HERO.availability}</p>
        </div>
      </section>
    </>
  );
}
