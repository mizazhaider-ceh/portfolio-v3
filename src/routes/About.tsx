import { Link } from "react-router";
import { ArrowRight } from "@phosphor-icons/react";
import { ABOUT_FACTS, ABOUT_PARAGRAPHS, EDUCATION } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

const NOW = [
  { title: "Year 2 defence arc", date: "2026 to 2027", text: "Digital Forensics, Mobile Security, Linux and Windows Server Security. Going deep on the defensive side too." },
  { title: "Amsterdam BIP", date: "28 Jun to 2 Jul 2027", text: "13 BIP Amsterdam, Security Summer Camp, Hogeschool van Amsterdam, 10 ECTS. Security specialist in a multidisciplinary international team." },
  { title: "Research applications", date: "Decisions by end Feb 2027", text: "Open to internships, junior roles, and research placements. Availability: Feb to Apr 2027 and Jul to Sep 2027." },
];

export default function About() {
  usePageMeta(
    "About | Muhammad Izaz Haider",
    "Second year BSc Cybersecurity student at Howest, Belgium. First year 60 out of 60 credits, CSCB 2026 #1 Web Junior, founder of The PenTrix.",
    "/about",
  );
  return (
    <>
      <PageHero
        kicker="About"
        title="I break things for a living"
        marker="break things"
        sentence="I break things for a living, and I build the tools that find the break."
      />
      <section aria-label="About, in full" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <figure className="self-start overflow-hidden rounded-2xl border border-[var(--line-soft)]">
              <img src="/images/profile.png" alt="Portrait of Muhammad Izaz Haider" width={800} height={800} loading="lazy" className="aspect-square w-full object-cover" />
            </figure>
            <div>
              <div className="space-y-6">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 24)} className="body-3 text-[var(--muted)]">{p}</p>
                ))}
                <p className="body-3">Understand it. Break it. Build it. Secure it. Improve it.</p>
              </div>
              <dl className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {ABOUT_FACTS.map((f) => (
                  <div key={f.label}>
                    <dt className="caption-4 text-[var(--faint)]">{f.label}</dt>
                    <dd className="body-5 mt-1">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="body-3 mt-10">
                <strong>Grades, in his own public wording:</strong> 18/20 in Programming, Computer Architecture and OS, and Web Backend. 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers, and Networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Education" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Education</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {EDUCATION.map((e) => (
              <article key={e.title} className="card h-full">
                <h3 className="title-1">{e.title}</h3>
                <p className="body-6 mt-2 text-[var(--muted)]">{e.org}</p>
                <p className="caption-2 mt-3 text-[var(--muted)]">{e.period}</p>
                {e.detail && <p className="body-6 mt-3">{e.detail}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Now" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Now</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">What I am working on, and where I am headed next.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {NOW.map((n) => (
              <article key={n.title} className="card h-full">
                <p className="mono caption-2 text-[var(--faint)]">{n.date}</p>
                <h3 className="title-1 mt-3">{n.title}</h3>
                <p className="body-6 mt-2 text-[var(--muted)]">{n.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="The PenTrix" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">The PenTrix</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">
            A self founded initiative with tutorials, tools, write ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules.
          </p>
          <p className="mt-8">
            <Link to="/projects/pentrix-vulnlab" className="btn-primary">
              Read the PenTrix-VulnLab story
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
