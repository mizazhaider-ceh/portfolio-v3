# SVGL Logos: brand and technology logos for the V3 rebuild

Added 2026-11-09 by izaz. No phase was restarted for it. This note is the
record for Phase 6 (asset production) and Phase 7 (engineering).

## What it is

SVGL (https://svgl.app/) is a library of 676 brand, product, and technology
logos as clean SVG files, with a free public REST API, no key, no auth.
Source repo: pheralb/svgl. The SVG files are MIT-licensed; the marks
themselves are still trademarks, so use a logo only for genuine
identification of that brand, product, or technology, never as decoration
for something else, and never recolour a logo.

Skill: ~/workspace/custom-skills/svgl-logos/SKILL.md (read it before using
SVGL). Listed in ~/workspace/custom-skills/REGISTRY.md. Discoverable via
skill_search. API base: https://api.svgl.app

## How to use

1. Search first, never guess a filename: `curl -s "https://api.svgl.app?search=<name>"`.
2. Match by exact title. The search is fuzzy, so a loose match can silently
   return the wrong brand. Check the returned `title` equals the brand you
   want before downloading.
3. Take the `route` URL (or `route.light` / `route.dark` for the theme you
   need) and download it: `curl -o <name>.svg "<route-url>"`.
4. Verify: the file is valid SVG, render it (cairosvg) and view it, check it
   looks right on the project's light and dark backgrounds, and use the
   dark variant on dark backgrounds where one exists.
5. Save it in the project (for example `public/logos/<name>.svg`) and
   reference the local file. Do not hotlink svgl.app in production.

## Where it is used in this rebuild

- Technology stack logos on project case studies and the About / Expertise
  pages.
- Social icons (GitHub, LinkedIn) in navigation, footer, and Contact.
- Project tech badges.
- Capability map (Phase 7 interactive feature).

## Verified available (checked 2026-11-09 via the search API)

GitHub (light/dark), LinkedIn, Python, TypeScript, JavaScript, React
(light/dark), Vite, Vitest, Tailwind CSS, Docker, Linux, Ubuntu, Vercel
(light/dark), Flask (light/dark), GitHub Copilot, React Query, Preact.

## NOT on SVGL (checked 2026-11-09, do not assume)

Debian, Kali Linux, Nmap, Burp Suite, Next.js, Node.js returned no usable
match from the search API. For those, use the brand's own press kit or
official site, or another source such as Simple Icons or Devicon, and
verify the file the same way. Do not construct a svgl.app/library URL by
hand for a brand you have not seen in the search results.

## Current state of icons in this codebase

The rebuild copy has NO shared icon registry and NO icon library
(no lucide, no react-icons, no heroicons in package.json or src/).
Social links and any inline marks live in components and data.ts. SVGL is
the logo source for brand marks. Generic UI icons must come from one
consistent icon set, chosen in Phase 4 (creative direction), not from
multiple sets. If a shared icon registry is created in Phase 7, reuse it
rather than creating a parallel logo source, and only reach for SVGL when
the needed mark is missing from it.

## Rules

- Search the API first, match by exact title, download the route URL.
- Save locally, never hotlink in production.
- Render-verify every SVG before shipping (standing SVG rule).
- Use light/dark variants correctly.
- Never recolour a logo.
- Use a logo only for genuine identification, never as decoration.
