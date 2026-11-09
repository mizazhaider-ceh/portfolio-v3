import { Link } from "react-router";
import { ArrowUpRight } from "@phosphor-icons/react";
import { DETAIL_ROUTES, type Project } from "../data";
import CodeStrip from "./CodeStrip";
import DiagramFigure from "./DiagramFigure";
import PentrixArchitecture from "./diagrams/PentrixArchitecture";

/**
 * Editorial list row for a featured project, not a card grid.
 * Full width row separated by a hairline: catalogue number in mono,
 * title in Archivo 700, one line outcome from data.ts, one meta line
 * in mono (role, year, stack, status). The flagship gets a large plate
 * (the PenTrix architecture diagram). Every other featured entry gets
 * a smaller plate on alternating sides. Plates: the APK report
 * screenshot from public/images/optimised/, the DiagramFigure for
 * PenTrix, and the real code strip from data.ts where no screenshot
 * exists yet (no stock image, no invented screenshot).
 * Hover (fine pointer only): plate image scales 1.02 inside its frame,
 * the title gains its accent underline, the row lifts 2px.
 */

const PLATE_NOTES: Record<string, string> = {
  "PenTrix-VulnLab":
    "What is shown: the architecture diagram, browser to Express app to SQLite, 29 challenge modules, 3 kill chain scenarios, 3 career paths. What happened: the diagram was rebuilt as a hand-built inline SVG in Monograph tokens.",
  "PowerShell Academy":
    "What is shown: the verb-noun pattern from the Academy, Get-Command to find the cmdlet, then read its help. What happened: the same pattern opens the Foundations stage, and every lesson builds on it.",
  "BugHunt Arsenal":
    "What is shown: one payload from the payload browser, a cross site scripting probe, from 800+ payloads in 21 categories. What happened: the payload is shown as text only, nothing here is executed.",
  "APK Security Pipeline":
    "What is shown: the HTML report for the vulnerable sample, score 0 out of 100, grade F. What happened: the pipeline scanned the sample, found 24 findings, and reported them in HTML and JSON.",
  "Security-Books":
    "What is shown: the library line from the repo, 160+ books, guides, and resources. What happened: the collection is curated by topic, and it is the most starred repository on the account.",
};

function Plate({ project }: { project: Project }) {
  if (project.name === "PenTrix-VulnLab") {
    return (
      <DiagramFigure
        title="PenTrix-VulnLab architecture diagram"
        caption={PLATE_NOTES[project.name]}
      >
        <PentrixArchitecture />
      </DiagramFigure>
    );
  }
  if (project.name === "APK Security Pipeline") {
    return (
      <figure className="plate-figure">
        <p className="figure-note plate-note">{PLATE_NOTES[project.name]}</p>
        <div className="plate">
          <picture>
            <source srcSet="/images/optimised/apk-report-preview.webp" type="image/webp" />
            <img
              className="project-plate-img"
              src="/images/optimised/apk-report-preview.png"
              alt="HTML report for a vulnerable sample APK, score 0 out of 100, grade F"
              width={1280}
              height={900}
              loading="lazy"
            />
          </picture>
        </div>
      </figure>
    );
  }
  return (
    <figure className="plate-figure">
      <p className="figure-note plate-note">{PLATE_NOTES[project.name]}</p>
      <div className="plate-code">
        <CodeStrip code={project.strip} label={`Code from ${project.name}`} />
      </div>
    </figure>
  );
}

export function ProjectCard({
  project,
  compact = false,
  plateSide,
}: {
  project: Project;
  compact?: boolean;
  plateSide?: "left" | "right";
}) {
  const detail = DETAIL_ROUTES[project.name];
  const flagship = project.name === "PenTrix-VulnLab";
  const side = plateSide ?? (project.catalogue % 2 === 1 ? "left" : "right");
  const number = String(project.catalogue).padStart(2, "0");
  const meta = `${project.role}, ${project.year}, ${project.tags.join(", ")}, ${project.status}`;
  void compact;
  return (
    <article className="project-row">
      <style>{`
        .project-row { border-top: 1px solid var(--line, #DCD5C6); padding: 3rem 0; transition: transform 200ms ease-out; }
        .project-plate-img { transition: transform 200ms ease-out; }
        .plate-figure { display: flex; flex-direction: column; gap: 0.75rem; }
        @media (min-width: 1024px) {
          .plate-figure { flex-direction: row; align-items: flex-start; gap: 1.5rem; }
          .plate-figure .plate-note { order: 2; width: 11rem; flex-shrink: 0; padding-top: 0.25rem; }
          .plate-figure .plate, .plate-figure .plate-code { order: 1; flex: 1; min-width: 0; }
        }
        @media (hover: hover) and (pointer: fine) {
          .project-row:hover { transform: translateY(-2px); }
          .project-row:hover .project-row-title { text-decoration: underline; text-decoration-color: var(--accent, #7A2E25); text-decoration-thickness: 2px; text-underline-offset: 4px; }
          .project-row:hover .project-plate-img { transform: scale(1.02); }
        }
        .project-row:focus-within .project-row-title { text-decoration: underline; text-decoration-color: var(--accent, #7A2E25); text-decoration-thickness: 2px; text-underline-offset: 4px; }
      `}</style>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
        <div
          className={`order-2 min-w-0 ${
            flagship
              ? side === "left"
                ? "lg:order-2 lg:col-span-5"
                : "lg:order-1 lg:col-span-5"
              : side === "left"
                ? "lg:order-2 lg:col-span-6"
                : "lg:order-1 lg:col-span-6"
          }`}
        >
          <p className="mono-meta flex flex-wrap items-center gap-3">
            <span>{number}</span>
            {flagship && (
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" style={{ width: 24, height: 2, background: "var(--accent, #7A2E25)" }} />
                Flagship
              </span>
            )}
          </p>
          <h3 className="mt-4" style={{ fontFamily: "var(--font-display, Archivo, system-ui, sans-serif)", fontWeight: 700, fontSize: "clamp(2rem, 3vw, 2.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "var(--ink, #1C1A17)" }}>
            {detail ? (
              <Link to={detail} className="project-row-title" style={{ textDecoration: "none", color: "inherit" }}>
                {project.name}
              </Link>
            ) : (
              <span className="project-row-title">{project.name}</span>
            )}
          </h3>
          <p className="body-copy mt-4" style={{ color: "var(--body, #2A2723)" }}>
            {project.outcome}
          </p>
          <p className="mono-meta mt-4" style={{ color: "var(--muted, #6E6A61)" }}>
            {meta}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {detail && (
              <Link
                to={detail}
                className="inline-flex min-h-11 items-center underline underline-offset-4"
                style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
              >
                Read the case study
              </Link>
            )}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 underline underline-offset-4"
                style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
              >
                {project.linkLabel}
                <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
              </a>
            ) : (
              <span className="mono-meta inline-flex min-h-11 items-center" style={{ color: "var(--muted, #6E6A61)" }}>
                {project.note ?? "No public repo"}
              </span>
            )}
          </p>
        </div>
        <div
          className={`order-1 min-w-0 ${
            flagship
              ? side === "left"
                ? "lg:order-1 lg:col-span-7"
                : "lg:order-2 lg:col-span-7"
              : side === "left"
                ? "lg:order-1 lg:col-span-6"
                : "lg:order-2 lg:col-span-6"
          }`}
        >
          <Plate project={project} />
        </div>
      </div>
    </article>
  );
}
