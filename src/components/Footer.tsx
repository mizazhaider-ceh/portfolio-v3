import { Link } from "react-router";
import { ArrowUp, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { CONTACT, NAV_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line-soft)]" aria-label="Footer">
      <div className="wrap py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="title-3">Copyright 2026 Muhammad Izaz Haider</p>
            <p className="caption-2 mt-2 text-[var(--muted)]">Created by Muhammad Izaz Haider</p>
            <p className="caption-2 mt-2 text-[var(--faint)]">
              CSCB and YesWeHack images are my own screenshots. This site collects no data. Messages sent through the contact form are handled by Formspree.
            </p>
            <p className="mt-4 flex gap-4">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-[var(--muted)] fade hover:text-[var(--ink)]">
                <GithubLogo size={20} weight="regular" />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[var(--muted)] fade hover:text-[var(--ink)]">
                <LinkedinLogo size={20} weight="regular" />
              </a>
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <Link to={l.to} className="caption-1 inline-flex min-h-11 items-center text-[var(--muted)] fade hover:text-[var(--ink)]">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="caption-1 inline-flex min-h-11 items-center text-[var(--muted)] fade hover:text-[var(--ink)]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="caption-1 inline-flex min-h-11 items-center text-[var(--muted)] fade hover:text-[var(--ink)]">
                  Terms
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="caption-1 inline-flex min-h-11 items-center gap-1 text-[var(--muted)] fade hover:text-[var(--ink)]"
                >
                  Back to top
                  <ArrowUp size={14} weight="regular" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
