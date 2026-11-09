import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "@phosphor-icons/react";
import {
  CONTACT,
  DETAIL_ROUTES,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  PROJECT_FILTERS,
  type Project,
} from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";

function usePageTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function Mark({ light, dark, label }: { light: string; dark: string; label: string }) {
  const theme = usePageTheme();
  return (
    <span className="inline-flex items-center gap-2">
      <img
        src={theme === "dark" ? dark : light}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
      />
      <span>{label}</span>
    </span>
  );
}

function ArchiveRow({ project }: { project: Project }) {
  const number = String(project.catalogue).padStart(2, "0");
  const detail = DETAIL_ROUTES[project.name];
  /* Scapy-based tools and LINA are investigation candidates only: the
     content model says to present them as no more than a name until a
     per-repo review confirms a one-line problem and a working repo link,
     so the row carries the name and nothing else. */
  const unverified = !project.link && !detail;
  return (
    <li className="border-t py-5 first:border-t-0" style={{ borderColor: "var(--line)" }}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="mono-meta" style={{ color: "var(--muted)" }}>
          {number}
        </span>
        {detail ? (
          <Link
            to={detail}
            className="label inline-flex min-h-11 items-center"
            style={{ color: "var(--ink)" }}
          >
            {project.name}
          </Link>
        ) : project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="label inline-flex min-h-11 items-center"
            style={{ color: "var(--ink)" }}
          >
            {project.name}
          </a>
        ) : (
          <span className="label inline-flex min-h-11 items-center" style={{ color: "var(--ink)" }}>
            {project.name}
          </span>
        )}
        {!unverified && (
          <span className="mono-meta" style={{ color: "var(--muted)" }}>
            {project.role}, {project.year}, {project.status}
          </span>
        )}
      </div>
      {!unverified && (
        <p className="body-small mt-1" style={{ color: "var(--muted)" }}>
          {project.outcome}
        </p>
      )}
      {!unverified && (
        <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1">
          {detail && (
            <Link
              to={detail}
              className="mono-meta inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ color: "var(--ink)" }}
            >
              Read the case study
            </Link>
          )}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mono-meta inline-flex min-h-11 items-center gap-1 underline underline-offset-4"
              style={{ color: "var(--ink)" }}
            >
              {project.linkLabel}
              <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
            </a>
          ) : (
            <span
              className="mono-meta inline-flex min-h-11 items-center gap-2"
              style={{ color: "var(--muted)" }}
            >
              {project.name === "VulnNotes" && (
                <Mark light="/logos/flask-light.svg" dark="/logos/flask-dark.svg" label="Flask" />
              )}
              {project.note ?? "No public repo"}
            </span>
          )}
        </p>
      )}
    </li>
  );
}

export default function Projects() {
  usePageMeta(
    "Projects | Muhammad Izaz Haider",
    "PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books, and the archive. Every project ships with a real artefact, not a claim.",
    "/projects",
  );
  const [filter, setFilter] = useState<string>("All");
  const matches = (p: Project) => filter === "All" || p.filters.includes(filter);
  const featured = FEATURED_PROJECTS.filter(matches);
  const archive = MORE_PROJECTS.filter(matches);
  return (
    <>
      <PageHero
        marker="Projects"
        title="The work, in order."
        sentence="Five case studies, then the archive. Every project ships with a real artefact."
      >
        <p className="mono-meta" style={{ color: "var(--muted)" }}>
          {FEATURED_PROJECTS.length} case studies, {MORE_PROJECTS.length} archive entries.
        </p>
      </PageHero>
      <section aria-label="Projects">
        <div className="wrap">
          <div className="flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Filter projects by category">
            {PROJECT_FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className="mono-meta inline-flex min-h-11 items-center"
                  style={{
                    color: active ? "var(--ink)" : "var(--muted)",
                    borderBottom: active ? "2px solid var(--ink)" : "2px solid transparent",
                    paddingBottom: 2,
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {featured.length > 0 && (
            <>
              <h2 className="title-small mt-12">Featured</h2>
              <div>
                {featured.map((p, i) => (
                  <ProjectCard
                    key={p.name}
                    project={p}
                    plateSide={i % 2 === 0 ? "left" : "right"}
                  />
                ))}
              </div>
            </>
          )}

          {archive.length > 0 && (
            <>
              <h2 className="title-small mt-12">Archive</h2>
              <ul className="mt-6">
                {archive.map((p) => (
                  <ArchiveRow key={p.name} project={p} />
                ))}
              </ul>
            </>
          )}

          {featured.length === 0 && archive.length === 0 && (
            <p className="body-copy mt-12" style={{ color: "var(--muted)" }}>
              No projects in this category yet.
            </p>
          )}

          <p className="mt-12">
            <a
              href={`${CONTACT.github}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="label inline-flex min-h-11 items-center gap-1"
              style={{ color: "var(--ink)" }}
            >
              View all repositories on GitHub
              <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
