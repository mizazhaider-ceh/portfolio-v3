import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Terms() {
  usePageMeta("Terms | Muhammad Izaz Haider", "The content of this portfolio is the work of Muhammad Izaz Haider. Screenshots are his own.", "/terms");
  return (
    <>
      <PageHero kicker="Legal" title="Terms" marker="Terms" sentence="The content of this portfolio is the work of Muhammad Izaz Haider." />
      <section aria-label="Terms" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap max-w-[680px] ml-0">
          <p className="body-3 text-[var(--muted)]">All projects, screenshots, and writing on this site are the work of Muhammad Izaz Haider, unless a page says otherwise. The CSCB and YesWeHack screenshots are his own.</p>
          <p className="body-3 mt-6 text-[var(--muted)]">PenTrix-VulnLab is a deliberately vulnerable lab for learning. It is linked as a repository only and must not be deployed publicly.</p>
        </div>
      </section>
    </>
  );
}
