import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChartBar, SealCheck, Trophy, X } from "@phosphor-icons/react";
import { CSCB_STORY, PROOF_GALLERY, PROOF_STATS } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

const STAT_ICONS = [Trophy, ChartBar, SealCheck];

export default function Proof() {
  usePageMeta(
    "Proof | Muhammad Izaz Haider",
    "Talk is cheap. Here is the proof. CSCB 2026 #1 Web Junior, #3 overall Junior, #26 of 806, and YesWeHack quarterly recognition.",
    "/proof",
  );
  const [chapter, setChapter] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const story = CSCB_STORY[chapter];
  const prev = useCallback(() => setChapter((c) => (c + CSCB_STORY.length - 1) % CSCB_STORY.length), []);
  const next = useCallback(() => setChapter((c) => (c + 1) % CSCB_STORY.length), []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % PROOF_GALLERY.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i + PROOF_GALLERY.length - 1) % PROOF_GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <PageHero
        kicker="Proof"
        title="Talk is cheap. Here is the proof."
        marker="the proof"
        sentence="Real scoreboards and real recognition, not claims."
      />
      <section aria-label="Proof statistics" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-3">
            {PROOF_STATS.map((s, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={s.figure} className="card card-hover h-full">
                  <Icon size={24} weight="regular" className="text-[var(--periwinkle-deep)]" aria-hidden="true" />
                  <p className="heading-3 mt-3 text-[var(--periwinkle-deep)]">{s.figure}</p>
                  <p className="title-3 mt-3">{s.label}</p>
                  <p className="body-6 mt-2 text-[var(--muted)]">{s.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label="CSCB 2026 story" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">CSCB 2026: the story in three pictures</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">
            A national CTF weekend, from the Web category to the national board.
          </p>
          <figure className="shot mt-8">
            <div className="flex min-h-[320px] items-center justify-center bg-[var(--surface)]">
              <img key={story.src} src={story.src} alt={story.alt} width={story.width} height={story.height} className="max-h-[520px] w-full object-contain" />
            </div>
            <figcaption>
              <strong className="text-[var(--ink)]">{story.title}.</strong> {story.text}
            </figcaption>
          </figure>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button type="button" onClick={prev} className="btn-secondary" aria-label="Previous picture">
              <ArrowLeft size={18} weight="regular" aria-hidden="true" /> Previous
            </button>
            <button type="button" onClick={next} className="btn-primary" aria-label="Next picture">
              Next <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </button>
            <p className="mono caption-2 text-[var(--muted)]">
              {chapter + 1} of {CSCB_STORY.length}
            </p>
          </div>
          <ol className="mt-8 space-y-3">
            {CSCB_STORY.map((c, i) => (
              <li key={c.src}>
                <button type="button" onClick={() => setChapter(i)} aria-current={i === chapter} className={`w-full rounded-xl border px-4 py-3 text-left title-4 fade ${i === chapter ? "border-[var(--line)] bg-[var(--lilac)] text-[var(--periwinkle-deep)]" : "border-[var(--line-soft)] text-[var(--muted)]"}`}>
                  {c.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Scoreboard gallery" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Scoreboard gallery</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">Click a screenshot to see it whole.</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {PROOF_GALLERY.map((img, i) => (
              <figure key={img.src} className="shot">
                <button type="button" onClick={() => setLightbox(i)} className="block w-full" aria-label={`Open ${img.label} full size`}>
                  <span className="flex h-[320px] items-center justify-center overflow-hidden bg-[var(--surface)]">
                    <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </span>
                </button>
                <figcaption>{img.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label={PROOF_GALLERY[lightbox].label} onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
            <X size={20} weight="regular" />
          </button>
          <button type="button" aria-label="Previous screenshot" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + PROOF_GALLERY.length - 1) % PROOF_GALLERY.length); }} className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
            <ArrowLeft size={20} weight="regular" />
          </button>
          <img src={PROOF_GALLERY[lightbox].src} alt={PROOF_GALLERY[lightbox].alt} className="max-h-[85vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button type="button" aria-label="Next screenshot" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % PROOF_GALLERY.length); }} className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
            <ArrowRight size={20} weight="regular" />
          </button>
        </div>
      )}
    </>
  );
}
