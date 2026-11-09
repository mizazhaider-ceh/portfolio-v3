# Brand Marks: SVGL Inventory and Render Verification

**Portfolio V3 rebuild, Phase 6 asset production. Date: 9 November 2026. Status: inventory complete, render verified, no code changed.**

**Authority:** `docs/DESIGN_SYSTEM.md` (Monograph, iconography section) is authoritative. Phosphor is the single UI icon set. SVGL marks are only for genuine identification. This file records what was fetched, where each mark may be used, and what passed or failed on each theme. It edits no code and it adds no mark to any page. Phase 7 must read the "Used where" column and the provenance notes before placing any mark.

**Method, in short:** search the SVGL API first (`https://api.svgl.app?search=<name>`), match by exact normalized title, download the `route` URL (light and dark variants where they exist), save locally in `public/logos/`, never hotlink, render every file with cairosvg to PNG and view it on the light paper ground (`#F7F3EA`) and the dark ground (`#191817`), then re-render all files in Playwright Chromium on both grounds as a second check. All 21 files parse as valid XML. No file was recoloured, edited, or renamed from its brand form, except for the local filename.

**Counts:** 15 marks downloaded, 21 files saved. 5 marks have a light and dark variant pair (GitHub, React, Vercel, Flask, Next.js wordmark), 10 files in those pairs. 1 extra Next.js icon file. 10 marks have a single variant used in both themes.

**Naming rule for variant files:** in SVGL, `route.light` is the mark for a light background and `route.dark` is the mark for a dark background. In this inventory, the "Light file" column is the file to use on the light theme, and the "Dark file" column is the file to use on the dark theme. For a single variant mark, both columns name the same file, and the mark is used unchanged in both themes.

## 1. Inventory

| Mark | Used where | Light file | Dark file | SVGL title matched | SVGL id | Source URL (route) |
|---|---|---|---|---|---|---|
| GitHub | Footer, Contact, repo links on case studies | `public/logos/github-light.svg` | `public/logos/github-dark.svg` | GitHub | 579 | Light: `https://svgl.app/library/github_light.svg`, Dark: `https://svgl.app/library/github_dark.svg` |
| LinkedIn | Footer, Contact | `public/logos/linkedin.svg` | `public/logos/linkedin.svg` (same file, one variant) | LinkedIn | 95 | `https://svgl.app/library/linkedin.svg` |
| Python | APK Security Pipeline case study (pure stdlib Python CLI), Ai-Terminal-X, archive tooling, AI security group on Expertise | `public/logos/python.svg` | `public/logos/python.svg` (same file, one variant) | Python | 216 | `https://svgl.app/library/python.svg` |
| TypeScript | PowerShell Academy case study (TypeScript, Next.js), site build | `public/logos/typescript.svg` | `public/logos/typescript.svg` (same file, one variant) | TypeScript | 116 | `https://svgl.app/library/typescript.svg` |
| JavaScript | PenTrix-VulnLab case study (repo language JavaScript, Express, SQLite), payload platform case study, PowerShell Academy (through TypeScript) | `public/logos/javascript.svg` | `public/logos/javascript.svg` (same file, one variant) | JavaScript | 113 | `https://svgl.app/library/javascript.svg` |
| React | PowerShell Academy case study (React, Next.js App Router), site build | `public/logos/react-light.svg` | `public/logos/react-dark.svg` | React | 45 | Light: `https://svgl.app/library/react_light.svg`, Dark: `https://svgl.app/library/react_dark.svg` |
| Vite | Site build tool only (Vite 6.3 in the rebuild package file), capability map only, never on a featured case study as a project stack | `public/logos/vite.svg` | `public/logos/vite.svg` (same file, one variant) | Vite | 628 | `https://svgl.app/library/vite.svg` |
| Tailwind CSS | Site build stack in the previous build (Tailwind 4.1), capability map only, never on the PowerShell Academy case study, which uses plain CSS instead of Tailwind by an explicit decision in the case study spec | `public/logos/tailwind-css.svg` | `public/logos/tailwind-css.svg` (same file, one variant) | Tailwind CSS | 81 | `https://svgl.app/library/tailwindcss.svg` |
| Docker | Capability map only, no featured case study in the specs names Docker as its stack, do not place on a case study without repo evidence | `public/logos/docker.svg` | `public/logos/docker.svg` (same file, one variant) | Docker | 141 | `https://svgl.app/library/docker.svg` |
| Linux | Ai-Terminal-X (built for Linux), Linux and server security group on Expertise | `public/logos/linux.svg` | `public/logos/linux.svg` (same file, one variant) | Linux | 355 | `https://svgl.app/library/linux.svg` |
| Ubuntu | Capability map only, no featured case study in the specs names Ubuntu as its stack, do not place on a case study without evidence | `public/logos/ubuntu.svg` | `public/logos/ubuntu.svg` (same file, one variant) | Ubuntu | 361 | `https://svgl.app/library/ubuntu.svg` |
| Vercel | Hosting for the PowerShell Academy live site and the payload platform live site (both on vercel.app) | `public/logos/vercel-light.svg` | `public/logos/vercel-dark.svg` | Vercel | 559 | Light: `https://svgl.app/library/vercel.svg`, Dark: `https://svgl.app/library/vercel_dark.svg` |
| Flask | Archive entry VulnNotes only (Flask API), no featured case study, no public repo, use only in the archive row, never as a featured stack | `public/logos/flask-light.svg` | `public/logos/flask-dark.svg` | Flask | 405 | Light: `https://svgl.app/library/flask-light.svg`, Dark: `https://svgl.app/library/flask-dark.svg` |
| Next.js | PowerShell Academy case study (Next.js App Router) | `public/logos/nextjs-light.svg` (wordmark, use this on light) | `public/logos/nextjs-dark.svg` (wordmark, use this on dark) | Next.js | 443 | Wordmark light: `https://svgl.app/library/nextjs_logo_light.svg`, Wordmark dark: `https://svgl.app/library/nextjs_logo_dark.svg`, Icon: `https://svgl.app/library/nextjs_icon_dark.svg` (saved as `public/logos/nextjs.svg`, light theme only, see section 2) |
| Node.js | PenTrix-VulnLab case study (Node.js, Express, SQLite) | `public/logos/nodejs.svg` | `public/logos/nodejs.svg` (same file, one variant) | Node.js | 446 | `https://svgl.app/library/nodejs.svg` |

## 2. Render verification, per mark, both themes

**Method:** every file was converted with cairosvg to a 200 by 200 PNG, composited onto the light paper ground (`#F7F3EA`) and the dark ground (`#191817`), and viewed as two contact sheets. Every file was then rendered again in Playwright Chromium at 120px on both grounds and viewed as two browser sheets. A mark passes a theme when the full mark is legible and correct on that ground at the rendered size, with no part lost to the background. A wrong variant failing on the opposite theme is expected, and is recorded as a variant rule, not as a file defect. Correct variant use is mandatory.

| Mark | Light theme (`#F7F3EA`) | Dark theme (`#191817`) | Verdict and fix |
|---|---|---|---|
| GitHub | Light file (dark ink, `#1b1f23`): pass, clear. Dark file (white): fail, invisible on light, as expected. | Dark file (white): pass, clear. Light file (dark ink): fail, barely visible on dark, as expected. | Pass with the matching variant per theme. Swap the file on theme change, never use one file in both themes. |
| LinkedIn | Pass, blue square with white "in", clear. | Pass, same file, clear. | Pass in both themes, one file. |
| Python | Pass, blue and yellow snakes, clear. | Pass, same file, clear. | Pass in both themes, one file. |
| TypeScript | Pass, blue square with white "TS", clear. | Pass, same file, clear. | Pass in both themes, one file. |
| JavaScript | Pass, yellow square with dark "JS", clear. | Pass, same file, clear. | Pass in both themes, one file. |
| React | Light file (darker blue, `#087EA4`): pass, clear. Dark file (lighter blue, `#58C4DC`): visible on light but pale, do not use it there. | Dark file (lighter blue, `#58C4DC`): pass, clear. Light file (darker blue): visible on dark but lower contrast, do not use it there. | Pass with the matching variant per theme. |
| Vite | Pass in a real browser, purple and blue gradient bolt, clear. See the cairosvg note below. | Pass in a real browser, same gradient bolt, clear. See the cairosvg note below. | Pass in both themes, one file, in a real browser. Cairosvg rendered this file as a solid black bolt on both grounds. That is a cairosvg limitation with the file's display-p3 fills and blur filters, not a file defect: the file's base fill is `#863bff`, and Chromium renders the gradient correctly. Do not "fix" this file by recolouring it. Phase 7 must verify Vite in a browser, not only in cairosvg. |
| Tailwind CSS | Pass, sky blue wave mark, clear. | Pass, same file, clear. | Pass in both themes, one file. |
| Docker | Pass, blue whale, clear. | Pass, same file, clear. | Pass in both themes, one file. |
| Linux | Pass, Tux penguin, clear. | Pass, same file, clear. | Pass in both themes, one file. |
| Ubuntu | Pass, orange circle of friends, clear. | Pass, same file, clear. | Pass in both themes, one file. |
| Vercel | Light file (black triangle): pass, clear. Dark file (white triangle): fail, invisible on light, as expected. | Dark file (white triangle): pass, clear. Light file (black triangle): fail, invisible on dark, as expected. | Pass with the matching variant per theme. |
| Flask | Light file (black flask): pass, clear. Dark file (white flask): fail, invisible on light, as expected. | Dark file (white flask): pass, clear. Light file (black flask): fail, invisible on dark, as expected. | Pass with the matching variant per theme. |
| Next.js | Wordmark light file (black "NEXT.js"): pass, clear. Icon file (`nextjs.svg`, black disc with white "N"): pass, clear. Wordmark dark file (white): fail, invisible on light, as expected. | Wordmark dark file (white "NEXT.js"): pass, clear. Wordmark light file (black): fail, invisible on dark, as expected. Icon file: borderline fail, see below. | Pass with the wordmark pair per theme. Icon file: use it on the light theme only. On the dark theme the black disc (`#000000`) against the dark ground (`#191817`) loses its edge, the white "N" stays readable at 120px but the disc reads as a floating letter, and at a small stack size (20 to 24px) it will be weaker still. Fix: on dark, use `nextjs-dark.svg` (wordmark), never the icon alone. |
| Node.js | Pass, green hexagon, clear. | Pass, same file, clear. | Pass in both themes, one file. |

**Summary of failures:** no mark is unusable. Two marks need a variant rule, not a replacement. Next.js icon fails on dark (use the dark wordmark there). Vite fails only in cairosvg (passes in Chromium, see the note above). Every other failure in the table is a wrong variant used on the wrong theme, which is the expected behaviour of a light and dark pair, and is fixed by swapping the file with the theme.

## 3. Correction: Next.js and Node.js are on SVGL

The earlier SVGL note said Next.js and Node.js returned no usable match. That was a search term artefact, checked again on 9 November 2026. Searching without the dot (`nextjs`, `nodejs`) returns a SVGL 404 with the error "SVG not found". Searching with the dot (`next.js`, `node.js`) returns an exact title match for both: Next.js (id 443, route `https://svgl.app/library/nextjs_icon_dark.svg`, wordmarks light and dark) and Node.js (id 446, route `https://svgl.app/library/nodejs.svg`). Both were downloaded from those route URLs, matched by exact title, and render verified as in section 2. Both are genuinely used, so both belong in the inventory: Node.js on the PenTrix-VulnLab case study, Next.js on the PowerShell Academy case study. The earlier "not on SVGL" line for these two is superseded by this check, and the skill note should be corrected to say: search with the dot.

## 4. Not on SVGL, findings and fallback

Checked again on 9 November 2026, with the SVGL search API. A 404 with the error "SVG not found" means no usable match. No file was downloaded from a third party logo site for any brand below, and no guessed svgl.app/library URL was constructed.

| Brand | SVGL result | Needed where, per the specs | Official source checked | Finding | Fallback |
|---|---|---|---|---|---|
| Debian | 404, no match for `debian` | Not named as a stack for any featured case study in the specs, so not needed now | Official logos page `http://www.debian.org/logos/` (from search results) | The official Open Use Logo is freely licensed (LGPLv3 or CC BY-SA 3.0, and without the wordmark under the Expat licence per the sources found), so an official SVG exists at the Debian logos page if a future phase genuinely needs it | Plain text name in JetBrains Mono, which is the Monograph default, until a future phase decides to fetch the official file and verify it the same way |
| Kali Linux | 404, no match for `kali` or `kali linux` | Not named as a stack for any featured case study in the specs, so not needed now | Trademark policy `https://www.kali.org/docs/policy/trademark/` (from search results) | Kali Linux is a trademark of OffSec, use is only to identify OffSec products, any other use outside the policy scope needs express written permission, and no official SVG press kit was found | Plain text name in JetBrains Mono, which is the Monograph default, do not download a Kali mark from a third party site |
| Nmap | 404, no match for `nmap` | Tool in the network security and recon group on Expertise, not a case study stack, so not needed on a case study | Official images listing `https://nmap.org/images/` (from search results) | The official site lists site logos (for example `sitelogo-nmap.svg`), but those are site lockups, not a clean brand mark, and no clear free licence for a brand mark was found in the check | Plain text name in JetBrains Mono, which is the Monograph default, do not download the site logo as a stack mark |
| Burp Suite | 404, no match for `burp` or `burp suite` | Tool in the web pentesting and responsible disclosure groups on Expertise, not a case study stack, so not needed on a case study | Search for an official PortSwigger press kit returned no official kit | No official press kit was found, and no licence was established, so no file was downloaded | Plain text name in JetBrains Mono, which is the Monograph default, do not download a Burp Suite mark from a third party site |

**Rule for these four:** if a future phase genuinely needs one of them, fetch it only from the brand's own press kit or official site, check the licence first, save it locally, and render verify it on both themes exactly as in section 2. If the licence does not allow it, keep the mono text fallback. Never guess a SVGL URL, never use a random logo site.

## 5. Provenance warnings for Phase 7

Read this section before placing any mark. The design system authorises the 13 marks in section 1, but the case study and supporting specs do not name all of them as a featured project stack. Placing a mark where the project does not genuinely use the technology would be a false claim, so the placement must follow the "Used where" column, not the inventory list alone.

1. Tailwind CSS must never appear on the PowerShell Academy case study. That spec says plain CSS instead of Tailwind, by an explicit decision. Tailwind is a site build stack and a capability map entry only.
2. Vite must never appear on a featured case study as a project stack. It is the site build tool. Use it only where the build itself is the subject, or on the capability map with that scope stated.
3. Docker and Ubuntu must not appear on any case study. No featured case study names either as its stack. They are capability map entries only, and only if the capability map states the scope honestly.
4. Flask must appear only in the VulnNotes archive row. It is not a featured stack, and VulnNotes has no public repo.
5. Next.js and Node.js are the two genuinely used runtime marks that were missing from the earlier list, and both are now in the inventory. Use Next.js only on PowerShell Academy, and Node.js only on PenTrix-VulnLab, plus the capability map where the same scope holds.
6. GitHub and LinkedIn appear in the footer and in Contact only, never in the top bar, per the supporting spec. Each link carries a visible text label beside its mark, never a mark alone.

## 6. Exact usage rule

1. Use a brand mark only for genuine identification of that brand, product, or technology, beside a text label or in a stack list where the technology is genuinely used by that project. The "Used where" column in section 1 is the placement list. A mark with no row there is not placed anywhere.
2. Never recolour a logo. Never change its proportions, stretch it, add a background wash, a shadow, or an effect to it. Use the light file on the light theme and the dark file on the dark theme where a pair exists, and use the single file unchanged in both themes where only one variant exists.
3. Never hotlink svgl.app in production. Every mark on the site must be a local file under `public/logos/`, as listed in section 1. The source URLs in section 1 are provenance records, not links to use in code.
4. Never use a brand mark as decoration for something else. Never use it as a bullet, a background, a section illustration, or a stand in for a concept the mark does not name.
5. Never use a brand mark as a substitute for a UI icon. UI icons come from Phosphor only, in ink, at the sizes in the design system. A GitHub mark is not a "link" icon, a Python mark is not a "code" icon, and a Linux mark is not a "server" icon.
6. Marks beside a text label carry `aria-hidden="true"` and are never the only label, per the supporting spec. The text label is the accessible name.
7. If a mark fails on a theme, do not recolour it to fix the contrast. Use the correct variant for that theme, use the wordmark variant where the icon fails (Next.js on dark), or fall back to plain text in JetBrains Mono. A failed mark is a placement problem, never a reason to edit the logo.
8. No new mark is added without the same check as in section 2: SVGL search with exact title match, local save, render verification on both grounds in a real browser, and a row added to section 1 with its used where, files, title, id, and source URL.

## 7. Files saved

All files are under `public/logos/`, 21 files, 128 KB total at save time:

`docker.svg`, `flask-dark.svg`, `flask-light.svg`, `github-dark.svg`, `github-light.svg`, `javascript.svg`, `linkedin.svg`, `linux.svg`, `nextjs-dark.svg`, `nextjs-light.svg`, `nextjs.svg`, `nodejs.svg`, `python.svg`, `react-dark.svg`, `react-light.svg`, `tailwind-css.svg`, `typescript.svg`, `ubuntu.svg`, `vercel-dark.svg`, `vercel-light.svg`, `vite.svg`

No code was edited. No file was committed. Verification renders are in `/tmp/svgl-verify/` (cairosvg sheets `sheet-light.png` and `sheet-dark.png`, browser sheets `browser-sheet-light.png` and `browser-sheet-dark.png`), and are not part of the site.
