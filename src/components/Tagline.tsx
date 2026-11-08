import { useEffect, useRef, useState } from "react";
import { TAGLINE } from "../data";

const WORDS = TAGLINE.join(" ").split(" ");

/** Tagline reveal (B11): its own section, words activate one at a time on scroll. */
export default function Tagline() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Safety net: the words must reach full colour even if the observer
    // never fires (for example in a screenshot run). 2 seconds, then on.
    const safety = window.setTimeout(() => setOn(true), 2000);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return () => window.clearTimeout(safety);
    }
    if (typeof IntersectionObserver === "undefined") return () => window.clearTimeout(safety);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setOn(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return (
    <section aria-label="Tagline" style={{ "--h": 1 } as React.CSSProperties}>
      <div className="wrap">
        <div ref={ref} className="max-w-[900px]">
          <p className="heading-2">
            {WORDS.map((word, i) => {
              const accent = word.startsWith("Secure");
              return (
                <span
                  key={`${word}-${i}`}
                  className={`tagline-word ${accent ? "accent" : ""} ${on ? "on" : ""}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {word}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
