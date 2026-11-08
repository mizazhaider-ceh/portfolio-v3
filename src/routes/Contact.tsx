import { DownloadSimple, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { CONTACT, FAQS } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";

/* FAQ schema for search. Built once at module level so the object identity
   is stable and usePageMeta does not re-run on every render. */
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Contact() {
  usePageMeta(
    "Contact | Muhammad Izaz Haider",
    "Get in touch about offensive security internships, junior roles, or research placements. Email mizazhaiderceh@gmail.com, or use the contact form.",
    "/contact",
    FAQ_JSONLD,
  );
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Get in touch"
        marker="in touch"
        sentence="Hiring for an offensive security internship, a junior role, or a research place? I would like to hear from you."
      />
      <section aria-label="Contact details and form" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="space-y-6">
              <a href={`mailto:${CONTACT.email}`} className="flex min-h-11 items-center gap-3 title-3 fade hover:text-[var(--periwinkle-deep)]">
                <EnvelopeSimple size={20} weight="regular" aria-hidden="true" className="shrink-0 text-[var(--periwinkle-deep)]" />
                {CONTACT.email}
              </a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-3 title-3 fade hover:text-[var(--periwinkle-deep)]">
                <GithubLogo size={20} weight="regular" aria-hidden="true" className="shrink-0 text-[var(--periwinkle-deep)]" />
                github.com/mizazhaider-ceh
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="flex min-h-11 min-w-0 items-center gap-3 title-3 break-all fade hover:text-[var(--periwinkle-deep)]">
                <LinkedinLogo size={20} weight="regular" aria-hidden="true" className="shrink-0 text-[var(--periwinkle-deep)]" />
                <span className="min-w-0 break-all">linkedin.com/in/muhammad-izaz-haider-091639314</span>
              </a>
              <p className="body-6 text-[var(--muted)]">Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027. On site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium.</p>
              <p>
                <a href={CONTACT.cv} download="Muhammad_Izaz_Haider_CV.pdf" className="btn-secondary">
                  <DownloadSimple size={18} weight="regular" aria-hidden="true" />
                  Download my CV (PDF, 8 KB)
                </a>
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Questions" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Questions</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">The things recruiters and collaborators ask first.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <details key={f.q} className="faq">
                <summary>
                  <span className="title-2">{f.q}</span>
                </summary>
                <p className="faq-body body-3 text-[var(--muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
