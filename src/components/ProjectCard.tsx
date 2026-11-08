import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Bug, Crosshair, DeviceMobile, GraduationCap, Lightning, MagnifyingGlass, NotePencil, Robot, ShieldCheck, Stack, Target, Terminal, Globe } from "@phosphor-icons/react";
import { DETAIL_ROUTES, type Project } from "../data";
import CodeStrip from "./CodeStrip";

const PROJECT_ICONS: Record<string, typeof Bug> = {
  "PenTrix-VulnLab": Bug,
  "PowerShell Academy": Terminal,
  "BugHunt Arsenal": Crosshair,
  "Ai-Terminal-X": Robot,
  "APK Security Pipeline": DeviceMobile,
  "AgentArsenal": Stack,
  "VulnNotes": NotePencil,
  "Security-Books": BookOpen,
  "Intel-Scan": MagnifyingGlass,
  "X-Recon": Target,
  "Prime-PenTrix": GraduationCap,
  "Sub-Hunter": Globe,
  "PortBlitz": Lightning,
  "Sentinel-Copilot-S2": ShieldCheck,
};

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const Icon = PROJECT_ICONS[project.name] ?? Stack;
  const detail = DETAIL_ROUTES[project.name];
  return (
    <article className={`card card-hover flex h-full flex-col${compact ? " !p-5" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Icon size={24} weight="regular" className="shrink-0 text-[var(--periwinkle-deep)]" aria-hidden="true" />
          <h3 className="title-1">{project.name}</h3>
        </div>
        {project.name === "PenTrix-VulnLab" && (
          <span className="shrink-0 rounded-lg bg-[var(--lilac)] px-2 py-1 caption-3 text-[var(--periwinkle-deep)]">Flagship</span>
        )}
      </div>
      <div className="mt-4">
        <CodeStrip code={project.strip} label={`Code from ${project.name}`} />
      </div>
      <p className="body-6 mt-4 flex-1 text-[var(--muted)]">{project.outcome}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((t) => (
          <li key={t} className="rounded-lg border border-[var(--line-soft)] px-2 py-1 caption-4 text-[var(--muted)]">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        {detail && (
          <Link to={detail} className="inline-flex min-h-11 items-center gap-1 title-4 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
            Read the story
            <ArrowRight size={16} weight="regular" aria-hidden="true" />
          </Link>
        )}
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 title-4 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
            {project.linkLabel}
            <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
          </a>
        ) : (
          <p className="caption-2 flex min-h-11 items-center text-[var(--faint)]">{project.note}</p>
        )}
      </div>
    </article>
  );
}
