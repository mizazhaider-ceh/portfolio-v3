import { Link } from "react-router";
import { ArrowUp } from "@phosphor-icons/react";
import { CONTACT } from "../data";
import { useTheme } from "../hooks";
import { NAV_ITEMS } from "./Nav";

const INK = "var(--ink, #1C1A17)";
const MUTED = "var(--muted, #6E6A61)";
const LINE = "var(--line, #DCD5C6)";

function scrollToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export default function Footer() {
  const { theme } = useTheme();
  const githubSrc = theme === "dark" ? "/logos/github-dark.svg" : "/logos/github-light.svg";
  return (
    <footer aria-label="Footer" style={{ borderTop: `1px solid ${LINE}` }}>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 md:px-8 xl:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <nav aria-label="Footer" className="md:order-2">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_ITEMS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center"
                    style={{
                      fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                      fontWeight: 500,
                      fontSize: 15,
                      color: MUTED,
                      minHeight: 44,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="inline-flex items-center"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: MUTED,
                    minHeight: 44,
                  }}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="inline-flex items-center"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: MUTED,
                    minHeight: 44,
                  }}
                >
                  Terms
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1"
                  style={{
                    fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                    fontWeight: 500,
                    fontSize: 15,
                    color: MUTED,
                    minHeight: 44,
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Back to top
                  <ArrowUp size={14} weight="regular" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </nav>

          <div className="md:order-1 md:max-w-[560px]">
            <p
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                color: MUTED,
              }}
            >
              Sijsele-Damme, Belgium
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2"
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: INK,
                }}
              >
                <img src={githubSrc} alt="" aria-hidden="true" width={20} height={20} />
                GitHub
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2"
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: INK,
                }}
              >
                <img src="/logos/linkedin.svg" alt="" aria-hidden="true" width={20} height={20} />
                LinkedIn
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex min-h-11 items-center"
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: INK,
                  overflowWrap: "anywhere",
                }}
              >
                {CONTACT.email}
              </a>
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                color: MUTED,
              }}
            >
              CSCB and YesWeHack images are my own screenshots. This site collects no data.
              Messages sent through the contact form are handled by Formspree.
            </p>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                fontWeight: 500,
                fontSize: 13,
                lineHeight: 1.5,
                color: MUTED,
              }}
            >
              Copyright 2026 Muhammad Izaz Haider. Created by Muhammad Izaz Haider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
