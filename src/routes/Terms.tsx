import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Terms() {
  usePageMeta("Terms | Muhammad Izaz Haider", "The content of this portfolio is the work of Muhammad Izaz Haider. Screenshots are his own.", "/terms");
  return (
    <>
      <PageHero marker="Legal" title="Terms" sentence="The content of this portfolio is the work of Muhammad Izaz Haider." />
      <section aria-label="Terms">
        <div className="wrap">
          <div style={{ maxWidth: "68ch", marginInline: "auto" }}>
            <p className="body-copy">All projects, screenshots, and writing on this site are the work of Muhammad Izaz Haider, unless a page says otherwise. The CSCB and YesWeHack screenshots are his own.</p>
            <p className="body-copy mt-6">PenTrix-VulnLab is a deliberately vulnerable lab for learning. It is linked as a repository only and must not be deployed publicly.</p>
          </div>
        </div>
      </section>
    </>
  );
}
