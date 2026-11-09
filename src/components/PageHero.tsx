import { useEffect, useState, type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";

/**
 * Chapter handoff header for supporting pages and case study pages.
 * A 1px accent rule sits above the handoff line, then the mono chapter
 * marker line, the page title in Display handoff size, and one lead
 * sentence. No kicker pill, no highlighted word, no marker span.
 *
 * Props: marker is the mono catalogue line (for example "03, About"),
 * title is the plain page title, sentence is the one lead sentence.
 */
export default function PageHero({
  marker,
  title,
  sentence,
  children,
}: {
  marker: string;
  title: string;
  sentence: string;
  children?: ReactNode;
}) {
  const [safe, setSafe] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setSafe(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="pb-12 pt-[7.5rem] max-[639px]:pb-8 max-[639px]:pt-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-8 xl:px-16">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={safe ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={safe ? { opacity: 1, transform: "none" } : undefined}
          >
            <div aria-hidden="true" style={{ width: 48, height: 2, background: "var(--accent, #7A2E25)" }} />
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
              {marker}
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
              {title}
            </h1>
            <p
              className="mt-6"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "var(--body, #2A2723)",
                maxWidth: "68ch",
              }}
            >
              {sentence}
            </p>
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </MotionConfig>
      </div>
    </div>
  );
}
