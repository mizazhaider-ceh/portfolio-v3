import {
  AI_TERMINAL_EXAMPLES,
  APK_STAGES,
  BUGHUNT_CATEGORIES,
  CERTIFICATIONS,
  CONTACT,
  DETAIL_ROUTES,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  NAV_LINKS,
  PS_STAGES,
  SKILL_GROUPS,
  type Project,
} from "./data";
import * as importedData from "./data";

/**
 * Search index, built from the same structured content data as the pages
 * (src/data.ts), never from a separate hardcoded list. If a project, group,
 * certification, or command is added to src/data.ts, it appears in search
 * with no second edit. If it is removed, it disappears with no second edit.
 *
 * Two small exceptions are marked below: the Page snippets (lead sentences
 * taken from the experience specs) and the optional PROJECT_SECTIONS and
 * GLOSSARY shapes, which the data.ts rewrite may provide. See the notes
 * on buildSearchIndex.
 */

export type SearchCategory =
  | "Project"
  | "Project section"
  | "Command"
  | "Concept"
  | "Page"
  | "Resource";

export const SEARCH_CATEGORIES: SearchCategory[] = [
  "Project",
  "Project section",
  "Command",
  "Concept",
  "Page",
  "Resource",
];

export const SEARCH_GUIDANCE = "Try PenTrix, PowerShell, or a command name";

export type SearchResult = {
  id: string;
  category: SearchCategory;
  title: string;
  snippet: string;
  destination: string;
  external?: boolean;
  keywords?: string;
};

const MAX_SNIPPET = 160;

function snippet(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > MAX_SNIPPET ? `${clean.slice(0, MAX_SNIPPET - 1).trim()}...` : clean;
}

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function detailRoute(name: string): string | undefined {
  const routes = (DETAIL_ROUTES ?? {}) as Record<string, string>;
  return routes[name];
}

function projectDestination(project: Project): { destination: string; external: boolean } {
  const route = detailRoute(project.name);
  if (route) return { destination: route, external: false };
  if (project.link && /^https?:\/\//.test(project.link)) {
    return { destination: project.link, external: true };
  }
  return { destination: "/projects", external: false };
}

function firstCommandLine(strip: string): string | undefined {
  for (const line of strip.split("\n")) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("#")) continue;
    return trimmed;
  }
  return undefined;
}

/** A certification counts as held only when the data does not mark it pending or in progress. */
function isHeldCertification(item: unknown): boolean {
  if (typeof item !== "object" || item === null) return false;
  const record = item as Record<string, unknown>;
  if (record.pending === true || record.held === false) return false;
  const status = asString(record.status).toLowerCase();
  if (status === "pending" || status === "in-progress" || status === "in progress") return false;
  return true;
}

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}

/**
 * Project detail sections. The template sections live on the detail pages;
 * this index reads them from structured data, never from a separate list.
 * The data.ts rewrite may provide PROJECT_SECTIONS as either a record keyed
 * by project name or an array of { project, id, title, text } entries. Until
 * it does, sections are derived only where structured data genuinely exists:
 * the "How it was built" section of the four projects whose build stages,
 * categories, or examples are already structured data.
 */
function projectSectionEntries(): SearchResult[] {
  const entries: SearchResult[] = [];
  const provided = (importedData as Record<string, unknown>).PROJECT_SECTIONS;

  if (Array.isArray(provided)) {
    for (const item of provided as Record<string, unknown>[]) {
      const project = asString(item.project);
      const route = detailRoute(project);
      if (!project || !route) continue;
      entries.push({
        id: `section:${slug(project)}:${slug(asString(item.id) || asString(item.title))}`,
        category: "Project section",
        title: `${project}, ${asString(item.title)}`,
        snippet: snippet(asString(item.text)),
        destination: `${route}#${asString(item.id) || slug(asString(item.title))}`,
      });
    }
    return entries;
  }
  if (provided && typeof provided === "object") {
    for (const [project, sections] of Object.entries(provided as Record<string, unknown>)) {
      const route = detailRoute(project);
      if (!route) continue;
      for (const item of asArray<Record<string, unknown>>(sections)) {
        entries.push({
          id: `section:${slug(project)}:${slug(asString(item.id) || asString(item.title))}`,
          category: "Project section",
          title: `${project}, ${asString(item.title)}`,
          snippet: snippet(asString(item.text)),
          destination: `${route}#${asString(item.id) || slug(asString(item.title))}`,
        });
      }
    }
    return entries;
  }

  const derived: { project: string; text: string }[] = [];
  if (PS_STAGES.length > 0) {
    derived.push({
      project: "PowerShell Academy",
      text: `Six stages: ${PS_STAGES.map((s) => s.name).join(", ")}.`,
    });
  }
  if (BUGHUNT_CATEGORIES.length > 0) {
    derived.push({
      project: "BugHunt Arsenal",
      text: `Payload categories: ${BUGHUNT_CATEGORIES.map((c) => c.name).join(", ")}.`,
    });
  }
  if (APK_STAGES.length > 0) {
    derived.push({
      project: "APK Security Pipeline",
      text: `Pipeline stages: ${APK_STAGES.map((s) => s.name).join(", ")}.`,
    });
  }
  if (AI_TERMINAL_EXAMPLES.length > 0) {
    derived.push({
      project: "Ai-Terminal-X",
      text: `Example prompts: ${AI_TERMINAL_EXAMPLES.map((e) => e.prompt).join("; ")}.`,
    });
  }
  for (const item of derived) {
    const route = detailRoute(item.project);
    if (!route) continue;
    entries.push({
      id: `section:${slug(item.project)}:how-it-was-built`,
      category: "Project section",
      title: `${item.project}, How it was built`,
      snippet: snippet(item.text),
      destination: `${route}#how-it-was-built`,
    });
  }
  return entries;
}

/** Page lead sentences, taken from the experience specs for each page. */
const PAGE_SNIPPETS: Record<string, string> = {
  "/": "Find the flaw. Prove it. Build the fix.",
  "/projects": "The work, in order.",
  "/about": "Penetration tester and security tool builder in Sijsele-Damme, Belgium.",
  "/expertise": "No percentages. Each group carries the evidence for it.",
  "/research": "Direction and ambition, honestly stated.",
  "/contact": "Get in touch about offensive security internships, junior roles, or research placements.",
};

/** Routes removed in the rebuild, never offered as search results. */
const REMOVED_ROUTES = new Set(["/experience", "/skills", "/certifications", "/proof"]);

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];
  const seen = new Set<string>();
  const push = (result: SearchResult) => {
    if (!result.title.trim() || !result.destination.trim()) return;
    if (seen.has(result.id)) return;
    seen.add(result.id);
    results.push(result);
  };

  const projects = [...asArray<Project>(FEATURED_PROJECTS), ...asArray<Project>(MORE_PROJECTS)];
  for (const project of projects) {
    const { destination, external } = projectDestination(project);
    push({
      id: `project:${slug(project.name)}`,
      category: "Project",
      title: project.name,
      snippet: snippet(project.outcome || ""),
      destination,
      external,
      keywords: asArray<string>(project.tags).join(" "),
    });
  }

  for (const entry of projectSectionEntries()) push(entry);

  for (const project of projects) {
    const command = firstCommandLine(project.strip || "");
    if (!command) continue;
    const { destination } = projectDestination(project);
    push({
      id: `command:${slug(project.name)}`,
      category: "Command",
      title: command,
      snippet: snippet(`${project.name}, ${project.outcome || ""}`),
      destination,
    });
  }
  for (const stage of asArray<{ name: string; chapters: number; lessons: number; note: string }>(PS_STAGES)) {
    push({
      id: `command:ps-stage:${slug(stage.name)}`,
      category: "Command",
      title: stage.name,
      snippet: snippet(`${stage.chapters} chapters, ${stage.lessons} lessons. ${stage.note || ""}`),
      destination: "/projects/powershell-academy#how-it-was-built",
      keywords: "PowerShell Academy",
    });
  }
  for (const category of asArray<{ name: string; payloads: string[] }>(BUGHUNT_CATEGORIES)) {
    for (const payload of asArray<string>(category.payloads)) {
      push({
        id: `command:bughunt:${slug(category.name)}:${slug(payload)}`,
        category: "Command",
        title: payload,
        snippet: snippet(`${category.name} payload, BugHunt Arsenal. Nothing here is executed.`),
        destination: "/projects/bughunt-arsenal#how-it-was-built",
        keywords: "BugHunt Arsenal payload",
      });
    }
  }
  for (const example of asArray<{ prompt: string; command: string; note: string }>(AI_TERMINAL_EXAMPLES)) {
    push({
      id: `command:ai-terminal:${slug(example.command)}`,
      category: "Command",
      title: example.command,
      snippet: snippet(`"${example.prompt}", ${example.note || ""}`),
      destination: "/projects/ai-terminal-x#how-it-was-built",
      keywords: "Ai-Terminal-X plain language terminal",
    });
  }

  for (const group of asArray<{ name: string; items: { name: string; evidence: string }[] }>(SKILL_GROUPS)) {
    const anchor = slug(group.name);
    push({
      id: `concept:group:${anchor}`,
      category: "Concept",
      title: group.name,
      snippet: snippet(asArray<{ name: string }>(group.items).map((i) => i.name).join(", ")),
      destination: `/expertise#${anchor}`,
    });
    for (const item of asArray<{ name: string; evidence: string }>(group.items)) {
      push({
        id: `concept:skill:${anchor}:${slug(item.name)}`,
        category: "Concept",
        title: item.name,
        snippet: snippet(item.evidence || group.name),
        destination: `/expertise#${anchor}`,
      });
    }
  }
  for (const cert of asArray<unknown>(CERTIFICATIONS)) {
    if (!isHeldCertification(cert)) continue;
    const record = cert as { name?: string; org?: string };
    push({
      id: `concept:cert:${slug(asString(record.name))}`,
      category: "Concept",
      title: asString(record.name),
      snippet: snippet(asString(record.org)),
      destination: "/expertise#certifications",
    });
  }
  const glossary = (importedData as Record<string, unknown>).GLOSSARY;
  if (Array.isArray(glossary)) {
    for (const term of glossary as Record<string, unknown>[]) {
      push({
        id: `concept:glossary:${slug(asString(term.term))}`,
        category: "Concept",
        title: asString(term.term),
        snippet: snippet(asString(term.definition)),
        destination: asString(term.destination) || "/expertise",
      });
    }
  }

  push({
    id: "page:home",
    category: "Page",
    title: "Home",
    snippet: PAGE_SNIPPETS["/"],
    destination: "/",
  });
  for (const link of asArray<{ id: string; label: string; to: string }>(NAV_LINKS)) {
    if (REMOVED_ROUTES.has(link.to)) continue;
    push({
      id: `page:${slug(link.to)}`,
      category: "Page",
      title: link.label,
      snippet: PAGE_SNIPPETS[link.to] || `Open the ${link.label} page.`,
      destination: link.to,
    });
  }

  const contact = CONTACT as { email: string; github: string; linkedin: string; cv: string };
  push({
    id: "resource:cv",
    category: "Resource",
    title: "CV (PDF)",
    snippet: "Download the sanitized CV, PDF, 8 KB",
    destination: contact.cv || "/files/Muhammad_Izaz_Haider_CV.pdf",
  });
  push({
    id: "resource:github",
    category: "Resource",
    title: "GitHub",
    snippet: stripProtocol(contact.github || ""),
    destination: contact.github || "",
    external: true,
  });
  push({
    id: "resource:linkedin",
    category: "Resource",
    title: "LinkedIn",
    snippet: stripProtocol(contact.linkedin || ""),
    destination: contact.linkedin || "",
    external: true,
  });
  push({
    id: "resource:email",
    category: "Resource",
    title: "Email",
    snippet: contact.email || "",
    destination: contact.email ? `mailto:${contact.email}` : "",
  });

  return results;
}

/** Case insensitive substring plus word start matching over title, snippet, and tags. */
export function searchIndex(index: SearchResult[], query: string): SearchResult[] {
  const tokens = query.toLowerCase().split(/\s+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return [];
  const order = new Map(SEARCH_CATEGORIES.map((c, i) => [c, i]));
  return index
    .filter((result) => {
      const haystack = `${result.title} ${result.snippet} ${result.keywords ?? ""}`.toLowerCase();
      const words = haystack.split(/[^a-z0-9]+/);
      return tokens.every((token) => haystack.includes(token) || words.some((w) => w.startsWith(token)));
    })
    .sort((a, b) => {
      const byCategory = (order.get(a.category) ?? 99) - (order.get(b.category) ?? 99);
      if (byCategory !== 0) return byCategory;
      return a.title.localeCompare(b.title);
    });
}
