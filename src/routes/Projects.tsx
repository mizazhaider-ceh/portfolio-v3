import { useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { CONTACT, FEATURED_PROJECTS, MORE_PROJECTS, type Project } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";

const FILTERS = ["All", "Offensive security", "AI security", "DevSecOps", "Education", "Tools"] as const;
type Filter = (typeof FILTERS)[number];

const CATEGORY: Record<string, Filter> = {
  "PenTrix-VulnLab": "Offensive security",
  "PowerShell Academy": "Education",
  "BugHunt Arsenal": "Offensive security",
  "Ai-Terminal-X": "AI security",
  "APK Security Pipeline": "DevSecOps",
  "AgentArsenal": "AI security",
  "VulnNotes": "Offensive security",
  "Security-Books": "Education",
  "Intel-Scan": "Tools",
  "X-Recon": "AI security",
  "Prime-PenTrix": "AI security",
  "Sub-Hunter": "Tools",
  "PortBlitz": "Tools",
  "Sentinel-Copilot-S2": "AI security",
  "90DaysOfCyberSecurity": "Education",
  "The PenTrix 30 Days": "Education",
  "pentrix-platform": "Education",
  "Ai-CMD-X": "AI security",
  "icarus-x": "AI security",
  "KeyGen-X": "Tools",
  "active-automation": "DevSecOps",
  "passive-automation": "DevSecOps",
};

export default function Projects() {
  usePageMeta(
    "Projects | Muhammad Izaz Haider",
    "PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, Ai-Terminal-X, APK Security Pipeline, AgentArsenal, and more. Every project with a real artefact, not a claim.",
    "/projects",
  );
  const [filter, setFilter] = useState<Filter>("All");
  const all: Project[] = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
  const shown = filter === "All" ? all : all.filter((p) => CATEGORY[p.name] === filter);
  const featured = shown.filter((p) => FEATURED_PROJECTS.includes(p));
  const more = shown.filter((p) => MORE_PROJECTS.includes(p));
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Security projects"
        marker="projects"
        sentence="The work that shows the skill. Flagship first, then the rest. Every project ships with a real artefact."
      />
      <section aria-label="Projects" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`filter-pill rounded-full border border-[var(--line-soft)] px-4 py-2 caption-3 fade ${filter === f ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)]" : "bg-[var(--surface)] text-[var(--muted)]"}`}
              >
                {f}
              </button>
            ))}
          </div>
          {featured.length > 0 && (
            <>
              <h2 className="heading-3 mt-12">Featured</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {featured.map((p) => (
                  <ProjectCard key={p.name} project={p} />
                ))}
              </div>
            </>
          )}
          {more.length > 0 && (
            <>
              <h2 className="heading-3 mt-12">More work</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {more.map((p) => (
                  <ProjectCard key={p.name} project={p} compact />
                ))}
              </div>
            </>
          )}
          {shown.length === 0 && (
            <p className="body-2 mt-12 text-[var(--muted)]">No projects in this category yet.</p>
          )}
          <p className="mt-12">
            <a href={`${CONTACT.github}?tab=repositories`} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 title-3 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
              View all projects on GitHub
              <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
