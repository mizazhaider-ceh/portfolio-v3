import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, DownloadSimple } from "@phosphor-icons/react";
import {
  ABOUT_PARAGRAPHS,
  AVAILABILITY,
  CONTACT,
  CSCB_STORY,
  GRADES_LINE,
  LOCATION,
  PENTRIX,
  ROLES,
  STUDY_STATUS,
  TIMELINE,
  WORK_AUTHORISATION_PLACEHOLDER,
  WORK_SOUGHT,
} from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

/** The Damno timeline line in src/data.ts carries a build note
    ("always past tense"), not public copy, so that one line is written
    here from the role record, in the past tense. Every other timeline
    line is rendered from src/data.ts as written. */
function timelineText(title: string, text: string): string {
  if (title.startsWith("Junior DevSecOps")) {
    return "Part time, remote, 20 hours per week. The role ended in June 2026.";
  }
  return text;
}

/** CSCB 2026, told in three photographs: one shown at a time, with
    Previous and Next buttons, a chapter list, and a mono counter. */
function CscbStory() {
  const [index, setIndex] = useState(0);
  const count = CSCB_STORY.length;
  const photo = CSCB_STORY[index] ?? CSCB_STORY[0];
  if (!photo) return null;
  const png = photo.src.replace("/images/", "/images/optimised/");
  const webp = png.replace(/\.png$/, ".webp");
  const go = (delta: number) => setIndex((i) => ((i + delta) % count + count) % count);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="mono-meta">
          {index + 1} of {count}
        </p>
        <div className="flex gap-2">
          <button type="button" onClick={() => go(-1)} className="btn-secondary" aria-label="Previous photograph">
            Previous
          </button>
          <button type="button" onClick={() => go(1)} className="btn-secondary" aria-label="Next photograph">
            Next
          </button>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {CSCB_STORY.map((entry, i) => (
          <li key={entry.title}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index ? "true" : undefined}
              className="label min-h-11 text-left"
              style={{
                color: i === index ? "var(--ink, #1C1A17)" : "var(--muted, #6E6A61)",
                borderBottom: i === index ? "2px solid var(--accent, #7A2E25)" : "2px solid transparent",
                paddingBottom: 2,
                cursor: "pointer",
              }}
            >
              {entry.title}
            </button>
          </li>
        ))}
      </ul>
      <figure className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
        <p className="figure-note order-first md:order-1 md:w-[280px] md:shrink-0">
          <strong style={{ color: "var(--ink, #1C1A17)" }}>{photo.title}. </strong>
          {photo.text}
        </p>
        <div className="plate order-2 md:min-w-0 md:flex-1">
          <picture>
            <source srcSet={webp} type="image/webp" />
            <img
              src={png}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </picture>
        </div>
      </figure>
    </div>
  );
}

export default function About() {
  usePageMeta(
    "About | Muhammad Izaz Haider",
    "Penetration tester and security tool builder in Sijsele-Damme, Belgium. Bug bounty hunter since February 2026, founder of The PenTrix, CSCB 2026 first place in Web, Junior division.",
    "/about",
  );
  return (
    <>
      <PageHero
        marker="03, About"
        title="Muhammad Izaz Haider"
        sentence="I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had."
      />

      <section aria-label="Portrait and introduction">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <figure className="self-start">
              <div className="plate">
                <picture>
                  <source srcSet="/images/optimised/profile.webp" type="image/webp" />
                  <img
                    src="/images/optimised/profile.png"
                    alt="Portrait of Muhammad Izaz Haider"
                    width={800}
                    height={800}
                    loading="eager"
                    fetchPriority="high"
                    className="aspect-square w-full object-cover"
                  />
                </picture>
              </div>
              <figcaption className="figure-note mt-3">
                Portrait of Muhammad Izaz Haider. His own photograph, used on About only.
              </figcaption>
            </figure>
            <div>
              <div className="space-y-4">
                {ABOUT_PARAGRAPHS.slice(1).map((p) => (
                  <p key={p.slice(0, 24)} className="body-large">
                    {p}
                  </p>
                ))}
              </div>
              <p className="body-copy mt-6">{STUDY_STATUS}</p>
              <p className="body-copy mt-4">
                <strong>Grades, in his own public wording:</strong> {GRADES_LINE}
              </p>
              <dl className="mt-8 space-y-4">
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
              <p className="mt-8">
                <a href={CONTACT.cv} download="Muhammad_Izaz_Haider_CV.pdf" className="btn-secondary">
                  <DownloadSimple size={18} weight="regular" aria-hidden="true" />
                  Download my CV (PDF, 8 KB)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Work authorisation">
        <div className="wrap">
          <div className="card">
            <p className="mono-meta">{WORK_AUTHORISATION_PLACEHOLDER.label}</p>
            <p className="body-copy mt-3">{WORK_AUTHORISATION_PLACEHOLDER.text}</p>
          </div>
        </div>
      </section>

      <section aria-label="Timeline">
        <div className="wrap">
          <h2 className="title-large">Timeline</h2>
          <ul className="mt-8">
            {TIMELINE.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 border-t py-6 sm:grid-cols-[180px_1fr]"
                style={{ borderColor: "var(--line, #DCD5C6)" }}
              >
                <p className="mono-meta">{item.date}</p>
                <div>
                  <h3 className="title-small">{item.title}</h3>
                  <p className="body-copy mt-2">{timelineText(item.title, item.text)}</p>
                  <p className="mt-2">
                    <Link to={item.evidenceTo}>See the evidence</Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Experience" id="experience">
        <div className="wrap">
          <h2 className="title-large">Experience</h2>
          {ROLES.map((role) => (
            <article
              key={role.title}
              className="mt-8 border-t pt-8"
              style={{ borderColor: "var(--line, #DCD5C6)" }}
            >
              <h3 className="title-small">
                {role.title}, {role.org}
              </h3>
              <p className="mono-meta mt-2">
                {role.period}, {role.location}
              </p>
              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="body-copy">
                    {bullet}
                  </li>
                ))}
              </ul>
              {role.org === "YesWeHack" && (
                <figure className="mt-6 flex max-w-[680px] flex-col gap-6 md:flex-row md:items-start">
                  <p className="figure-note order-first md:order-1 md:w-[280px] md:shrink-0">
                    YesWeHack quarterly recognition swag, sent for bug bounty performance.
                  </p>
                  <div className="plate order-2 md:min-w-0 md:flex-1">
                    <picture>
                      <source srcSet="/images/optimised/yeswehack-swag.webp" type="image/webp" />
                      <img
                        src="/images/optimised/yeswehack-swag.png"
                        alt="YesWeHack quarterly recognition swag sent for bug bounty performance"
                        width={1280}
                        height={912}
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "auto" }}
                      />
                    </picture>
                  </div>
                </figure>
              )}
            </article>
          ))}
          <div className="card mt-10">
            <h3 className="title-small">What each role taught</h3>
            <ul className="mt-4 space-y-2">
              <li className="body-copy">YesWeHack taught responsible disclosure on live programmes by category only.</li>
              <li className="body-copy">The PenTrix taught that teaching is the fastest way to learn a vulnerability properly.</li>
              <li className="body-copy">Damno Solutions taught security inside a real delivery pipeline, against a real brief.</li>
            </ul>
          </div>
          <p className="body-copy mt-8">{AVAILABILITY}</p>
          <p className="mt-6">
            <Link to="/contact" className="btn-primary">
              Contact me
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="The PenTrix" id="pentrix">
        <div className="wrap">
          <h2 className="title-large">The PenTrix</h2>
          <p className="body-large mt-4">
            A self founded initiative with tutorials, tools, write-ups, and roadmaps for the next generation of
            security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201
            challenges across 29 modules.
          </p>
          <h3 className="title-small mt-8">Mission</h3>
          <p className="body-copy mt-2">{PENTRIX.mission}</p>
          <h3 className="title-small mt-8">Why it exists</h3>
          <p className="body-copy mt-2">{PENTRIX.whyItExists}</p>
          <h3 className="title-small mt-8">Technical focus</h3>
          <p className="body-copy mt-2">{PENTRIX.technicalFocus}</p>
          <h3 className="title-small mt-8">His responsibilities</h3>
          <ul className="mt-2 space-y-2">
            {PENTRIX.responsibilities.map((item) => (
              <li key={item} className="body-copy">
                {item}
              </li>
            ))}
          </ul>
          <p className="body-copy mt-6">{PENTRIX.flagLine}</p>
          <p className="body-small mt-2" style={{ color: "var(--muted, #6E6A61)" }}>
            {PENTRIX.repoNote}{" "}
            <a href={PENTRIX.repoLink} target="_blank" rel="noreferrer">
              PenTrix-VulnLab repository
            </a>
          </p>
          <p className="mt-8">
            <Link to="/projects/pentrix-vulnlab" className="btn-primary">
              Read the PenTrix-VulnLab story
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="CSCB 2026 evidence" id="cscb">
        <div className="wrap">
          <h2 className="title-large">CSCB 2026</h2>
          <p className="body-large mt-4">
            First place in Web, Junior division. Third overall Junior. 26th of 806 nationally. 26 flags solved.
          </p>
          <div className="mt-8">
            <CscbStory />
          </div>
        </div>
      </section>
    </>
  );
}
