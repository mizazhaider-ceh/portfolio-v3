import { useRef, useState, type KeyboardEvent } from "react";
import { DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react";
import { AVAILABILITY, CONTACT, FAQS, LOCATION, WORK_SOUGHT } from "../data";
import { useCopy, usePageMeta, useTheme } from "../hooks";
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

/* Accessible accordion, one item open at a time. Radix Accordion is not
   installed in this repo and no install is allowed in this task, so the
   same semantics are built with real buttons: aria-expanded, aria-controls,
   a region per panel, and ArrowUp and ArrowDown moving between triggers. */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = e.key === "ArrowDown" ? (i + 1) % FAQS.length : (i - 1 + FAQS.length) % FAQS.length;
    triggers.current[next]?.focus();
  };
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className="card"
            style={{ padding: "1.5rem" }}
          >
            <h3>
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="title-small flex min-h-11 w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                {faq.q}
                <span aria-hidden="true" className="mono-meta shrink-0">
                  {isOpen ? "Close" : "Open"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <p
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="body-copy mt-3"
                style={{ color: "var(--muted, #6E6A61)" }}
              >
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Contact() {
  const { copied, copy } = useCopy();
  usePageMeta(
    "Contact | Muhammad Izaz Haider",
    "Get in touch about offensive security internships, junior roles, or research placements. Email mizazhaiderceh@gmail.com, or use the contact form.",
    "/contact",
    FAQ_JSONLD,
  );
  return (
    <>
      <PageHero
        marker="06, Contact"
        title="Contact"
        sentence="Get in touch about offensive security internships, junior roles, or research placements."
      />
      <section aria-label="Contact details and form">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="space-y-6">
              <p className="flex min-h-11 flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="title-small inline-flex min-h-11 items-center gap-3"
                >
                  <EnvelopeSimple size={20} weight="regular" aria-hidden="true" className="shrink-0" />
                  {CONTACT.email}
                </a>
                <button
                  type="button"
                  onClick={() => copy("contact-email", CONTACT.email)}
                  className="btn-secondary"
                  style={{ padding: "8px 16px" }}
                >
                  {copied === "contact-email" ? "Copied" : "Copy"}
                </button>
              </p>
              <p>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noreferrer"
                  className="title-small inline-flex min-h-11 items-center gap-3"
                >
                  <GithubMark />
                  github.com/mizazhaider-ceh
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="title-small inline-flex min-h-11 min-w-0 items-center gap-3"
                >
                  <img src="/logos/linkedin.svg" alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />
                  <span className="min-w-0 break-all">linkedin.com/in/muhammad-izaz-haider-091639314</span>
                </a>
              </p>
              <p>
                <a href={CONTACT.cv} download="Muhammad_Izaz_Haider_CV.pdf" className="btn-secondary">
                  <DownloadSimple size={18} weight="regular" aria-hidden="true" />
                  Download my CV (PDF, 8 KB)
                </a>
              </p>
              <dl className="space-y-4">
                <div>
                  <dt className="mono-meta">Location</dt>
                  <dd className="body-copy mt-1">{LOCATION}</dd>
                </div>
                <div>
                  <dt className="mono-meta">Work sought</dt>
                  <dd className="body-copy mt-1">{WORK_SOUGHT}</dd>
                </div>
                <div>
                  <dt className="mono-meta">Availability</dt>
                  <dd className="body-copy mt-1">{AVAILABILITY}</dd>
                </div>
              </dl>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Questions">
        <div className="wrap">
          <h2 className="title-large">Questions</h2>
          <p className="body-large mt-4">The things recruiters and collaborators ask first.</p>
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}

/** GitHub mark, theme swapped like the footer: the light file on the
    light theme, the dark file on the dark theme, never recoloured. */
function GithubMark() {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/logos/github-dark.svg" : "/logos/github-light.svg";
  return <img src={src} alt="" aria-hidden="true" width={20} height={20} className="shrink-0" />;
}
