import { SealCheck } from "@phosphor-icons/react";
import { CERTIFICATIONS } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Certifications() {
  usePageMeta(
    "Certifications | Muhammad Izaz Haider",
    "Named certifications only, with issuers. CNSP with Merit, CEH v12, CompTIA PenTest+, and more. Nothing counted, nothing estimated.",
    "/certifications",
  );
  return (
    <>
      <PageHero
        kicker="Certifications"
        title="Security certifications"
        marker="certifications"
        sentence="Named certifications only. Nothing counted, nothing estimated."
      />
      <section aria-label="Certifications held" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="card !p-4 flex h-full items-start gap-3">
                <SealCheck size={24} weight="regular" className="mt-0.5 shrink-0 text-[var(--green)]" aria-hidden="true" />
                <div>
                  <p className="body-5">{c.name}</p>
                  {c.org && <p className="caption-2 mt-1 text-[var(--muted)]">{c.org}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="callout callout-amber mt-10">
            <p><span className="t">In progress</span></p>
            <p className="body-3 mt-2">eJPT and eWPT through INE Security. Courses studied, exams coming. Not held yet.</p>
          </div>
        </div>
      </section>
    </>
  );
}
