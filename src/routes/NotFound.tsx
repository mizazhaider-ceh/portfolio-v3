import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, MotionConfig } from "motion/react";
import { usePageMeta } from "../hooks";

/* Branded 404, centred (one of the only two centred elements on the
   site). Metadata is per URL: og:url and canonical reflect the attempted
   pathname, robots is noindex, and no canonical ever points home. */
export default function NotFound() {
  const { pathname } = useLocation();
  const [safe, setSafe] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setSafe(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);
  usePageMeta(
    "Page not found | Muhammad Izaz Haider",
    "This page does not exist. Back to the portfolio of Muhammad Izaz Haider, penetration tester and cybersecurity student.",
    pathname,
    undefined,
    "noindex",
  );
  return (
    <div className="pb-12 pt-[7.5rem] text-center max-[639px]:pb-8 max-[639px]:pt-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 xl:px-16">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={safe ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={safe ? { opacity: 1, transform: "none" } : undefined}
          >
            <div
              aria-hidden="true"
              style={{ width: 48, height: 2, background: "var(--accent, #7A2E25)", marginInline: "auto" }}
            />
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                fontWeight: 500,
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--muted, #6E6A61)",
              }}
            >
              404
            </p>
            <h1
              className="mt-6"
              style={{
                fontFamily: "var(--font-display, Archivo, system-ui, sans-serif)",
                fontWeight: 700,
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                fontStretch: "125%",
                color: "var(--ink, #1C1A17)",
              }}
            >
              This page does not exist
            </h1>
            <p
              className="mx-auto mt-6"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "var(--body, #2A2723)",
                maxWidth: "68ch",
              }}
            >
              The link may be old, or the page may have moved. The portfolio is one click back.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/" className="btn-primary">
                Back home
              </Link>
              <Link to="/projects" className="btn-secondary">
                See my work
              </Link>
            </div>
          </motion.div>
        </MotionConfig>
      </div>
    </div>
  );
}
