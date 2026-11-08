import { Link } from "react-router";
import { ArrowRight } from "@phosphor-icons/react";
import { ROLES } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Experience() {
  usePageMeta(
    "Experience | Muhammad Izaz Haider",
    "Bug bounty hunter on YesWeHack since February 2026, founder of The PenTrix, and Junior DevSecOps and AI Security Engineer at Damno Solutions.",
    "/experience",
  );
  return (
    <>
      <PageHero
        kicker="Experience"
        title="Security experience"
        marker="experience"
        sentence="Professional journey in cybersecurity, DevSecOps, and AI driven security. Evidence in every bullet."
      />
      <section aria-label="Roles" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              {ROLES.map((role) => (
                <details key={role.title} className="faq card !p-0 overflow-hidden" open>
                  <summary className="px-6 py-5">
                    <span>
                      <span className="title-1 block">{role.title}</span>
                      <span className="title-4 mt-1 block text-[var(--periwinkle-deep)]">{role.org} · {role.location}</span>
                    </span>
                    <span className="caption-2 shrink-0 text-[var(--muted)]">{role.period}</span>
                  </summary>
                  <div className="faq-body">
                    <ul className="space-y-2 pt-4">
                      {role.bullets.map((b) => (
                        <li key={b.slice(0, 32)} className="body-6 text-[var(--muted)]">{b}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
            <div className="lg:col-span-4">
              <div className="card h-full">
                <h3 className="title-1">What each role taught</h3>
                <ul className="mt-4 space-y-4">
                  <li className="body-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">YesWeHack:</strong> responsible disclosure on live programmes, by category only.</li>
                  <li className="body-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">The PenTrix:</strong> teaching is the fastest way to learn a vulnerability properly.</li>
                  <li className="body-6 text-[var(--muted)]"><strong className="text-[var(--ink)]">Damno Solutions:</strong> security inside a real delivery pipeline, against a real brief.</li>
                </ul>
                <p className="body-6 mt-6 border-t border-[var(--line-soft)] pt-4 text-[var(--muted)]">
                  Available Feb to Apr 2027 and Jul to Sep 2027.
                </p>
                <p className="mt-6">
                  <Link to="/contact" className="btn-primary">
                    Get in touch
                    <ArrowRight size={18} weight="regular" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
