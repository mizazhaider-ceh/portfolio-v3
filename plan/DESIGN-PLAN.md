# Portfolio v2, Design and Architecture Plan

**Note, 9 November 2026 (izaz's decision, applied the same day): the section 5 Archify diagram plan in this file is superseded. Archify is not used for the three diagrams in the rebuild. The PenTrix architecture, APK pipeline, and skills tree diagrams are hand-built inline SVGs in Monograph tokens, as React components in `src/components/diagrams/`, rendered inside `DiagramFigure` plates with no iframe and no external diagram file. The Archify standalone HTML files and the `.archify/` working folder were removed from the rebuild copy. This plan is a v2 carryover and is otherwise left as written.**

**Owner:** Muhammad Izaz Haider (izaz), 19, BSc Cybersecurity student at Howest, Belgium
**Date:** 2026-11-08
**Status:** Design and architecture only. Nothing built, nothing published, nothing deployed.
**Authority:** `~/workspace/portfolio-v2-brief.md` (his correction brief), `~/workspace/portfolio-rebuild-brief.md` (v1 research brief, verified fact sheet, MUST FIX items), `~/workspace/user/files/arsenal-theme-spec.md` (Arsenal tokens, universal prompt form)
**Build folder (later):** `~/workspace/portfolio-v2/` (do not reuse `~/workspace/portfolio-rebuild/` as the ship target; v1 was rejected as a single page)
**Site kind (taste-skill):** service (a person being hired). Page type: service. One offer, one audience, one primary action: the offer is him, an offensive security student who ships; the audience is a recruiter or a research lead; the action is "Get in touch".

---

## 1. Unslop five line direction

Every decision in this plan derives from these five lines. If a component, colour, word, or animation cannot be traced back to one of them, it does not ship.

- **Product:** A personal portfolio that gets a second year cybersecurity student hired for an offensive security internship, a junior role, or a research place.
- **Character:** Exact, direct, a little warm. (Not clean, modern, premium, or any other word that fits every template.)
- **World:** The lab bench and the terminal: dark ink, paper white ground, one periwinkle accent, monospace for figures and code, real screenshots as the material.
- **Moments (two only):**
  1. The Home hero shows a real PenTrix-VulnLab challenge being solved, built in code (an interactive terminal style panel, already prototyped in v1 `src/components/Hero.tsx`, to be promoted to a full interactive challenge on the Home hero and the PenTrix project detail page).
  2. The Proof page shows the real CSCB scoreboard screenshots (cscb-web-first, cscb-rankings, cscb-junior-top3, cscb-26th-place, cscb-solves-breakdown, plus the YesWeHack recognition email and swag photo).
- **Signature:** A thin lime rule above the name (the Arsenal lime bar, 48px wide, 4px tall, `#B8F34A`), and a small mono status line under the hero (`status: available for internships, feb apr 2027, jul sep 2027`). The lime rule appears on every page hero, nowhere else as decoration.

### What v1 got right, and what v2 keeps

Keep from v1 (verified data in `src/data.ts`, Arsenal tokens in `src/index.css`, components in `src/components/`, self hosted fonts plus proof images plus CV in `public/`):

- All verified copy and facts in `src/data.ts` (hero sentence, about paragraphs, proof stats, featured and more projects, roles, skill groups with evidence, education, certifications, FAQs, contact). No fact is retyped from memory; v2 imports this file as `src/data.ts` and edits it only to split it across pages.
- The Arsenal token layer in `src/index.css` (`:root` light tokens, `[data-theme="dark"]` tokens, named text styles heading-1 to caption-5, `.btn-primary` / `.btn-secondary`, `.card`, `.code-strip`, `.lime-rule`, `.enter` hero entrance, `.tagline-word` reveal, reduced motion fallback).
- The self hosted fonts (`public/fonts/sora-latin.woff2`, `inter-latin.woff2`), the proof images (`public/images/cscb-*.png`, `yeswehack-*.png`, `profile.png`, `og-image.jpg`), the Europass CV (`public/files/Muhammad_Izaz_Haider_Europass_CV.pdf`), the Formspree contact form (`https://formspree.io/f/xldjdnlr`), the favicon, and the `scripts/stamp-css.mjs` build stamp.
- The PenTrix challenge panel in v1 `Hero.tsx` (lines 51 to 85) as the seed of Moment 1, and the `CscbStory` photo chapters moment as the seed of Moment 2.

Drop from v1 (it was rejected, and the v1 brief proves why):

- The single page structure itself. v1 stacked 13 sections into one ~10,847px page. v2 splits them across real routes (Section 2).
- The three.js particle background and the 872KB three.js vendor chunk. Decorative filler goes; the hero gets a real visual instead.
- The typewriter headline (it reads as a half typed word at any moment), the skull hero card, all emoji icons, tracked capital eyebrow labels, numbered nav, skill percentage bars, and every MUST FIX violation (bounty amounts and the two bounty amount images, the 269/269 figure, "53+ certifications", the JSON-LD birthDate "2006", the CWE-434 leaked token mechanism detail). See Section 7 and the v1 brief Part 3 for the full list.

---

## 2. Page map (routes, purpose, sections, content)

Routing is real multi page routing with `react-router` (see Section 6). Every route is a full page with its own hero, its own meta title and description, and its own scroll position on navigation. The nav is shared; the footer is shared. No route is a fragment of another route.

Base content order follows the v1 brief Part 4 section order, split across pages in that same order, so nothing is lost and nothing is reordered without a reason stated here.

| Route | Page | Purpose (one sentence) | Sections on the page | Content (from the v1 brief fact sheet) |
|---|---|---|---|---|
| `/` | Home | The hire decision in one screen, then the proof that backs it. | Hero (Moment 1) · Tagline reveal · About preview · Featured projects preview (3) · Proof preview (3 stats) · Final CTA | Hero copy from Section 8. Tagline: "Understand it. Break it. Build it. Secure it." About preview: first two About paragraphs plus the 6 fact chips. Featured preview: PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal. Proof preview: the three proof stat cards. Final CTA: "Get in touch" plus the availability line. |
| `/about` | About | Who he is, in his voice, facts only. | About (full) · Education · Now (current focus) · The PenTrix | All three About paragraphs. About facts grid (degree, year, location, first year 60/60, bug bounty since Feb 2026, founder of The PenTrix). Education: BSc Cybersecurity Howest Sep 2025 to Jun 2028, 180 ECTS, 60/60 first year first attempt; ICS Dawn Science College 2022 to 2024 Grade A+; Matriculation Govt. High School for Boys Hazara Mughlan 2020 to 2022. Now: Year 2 defence arc (Digital Forensics, Mobile Security, Linux and Windows Server Security), Amsterdam BIP 28 Jun to 2 Jul 2027, research applications CISPA, EPFL, ETH (decisions by end Feb 2027, named generically, no application numbers on the public page). The PenTrix: mission, what it ships, impact. |
| `/projects` | Projects | Flagship work first, every project with a real artefact, not a claim. | Featured projects (6) · More work (8) · How a project is presented (template note) | Featured, in this order: PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, Ai-Terminal-X, APK Security Pipeline, AgentArsenal. Each card: name that fits (no truncation), one line outcome, tech tags, link (live site or GitHub), and a real code strip (a command, payload, or verified feature list from `src/data.ts`). More work: VulnNotes (course project, no repo link, labelled as such), Security-Books, Intel-Scan, X-Recon, Prime-PenTrix, Sub-Hunter, PortBlitz, Sentinel-Copilot-S2. Filter pills by category (All, Offensive security, AI security, DevSecOps, Education, Tools). "View all projects on GitHub" link to `https://github.com/mizazhaider-ceh`. |
| `/projects/pentrix-vulnlab` | Project detail: PenTrix-VulnLab | The flagship, told as a discovery story. | Overview · The challenge (Moment 1, full interactive version) · Architecture diagram (Archify, Section 5) · Modules and scenarios · Certificates and career paths · Links | 201 challenges across 29 modules, 3 kill chain scenarios, 3 career paths with verifiable certificates. Built with Express and SQLite. Flag rule (D18, hard): say only that flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags. Never disclose where flags are stored. Link: `https://github.com/mizazhaider-ceh/PenTrix-VulnLab`. |
| `/projects/powershell-academy` | Project detail: PowerShell Academy | A teaching product, shown as a learning path. | Overview · The 6 stages · A sample lesson flow · Links | 18 chapters, 61 lessons, 48 glossary terms, 6 stages (Foundations, PowerShell Basics, Core Skills, Admin Power, Security Power, Projects). Live site `https://powershell-academy-seven.vercel.app/`. Credit line "Created by Muhammad Izaz Haider" only. Repo link only after the repo name is confirmed (`my-powershell-academy` vs `powershell-academy` is an open question for izaz; do not link a repo until confirmed). |
| `/projects/bughunt-arsenal` | Project detail: BugHunt Arsenal | A tool a hunter actually opens every day. | Overview · Payload categories · Tools and Chain Builder · Links | 800+ payloads across 21 categories, 60+ tools, Chain Builder, Metadata Analyzer, Encoder/Decoder, HTTP Request Builder, OWASP Top 10 methodology, 14+ modules. No install, no sign up, no paywalls. Live site `https://bughunt-arsenal.vercel.app/`. |
| `/projects/apk-security-pipeline` | Project detail: APK Security Pipeline | One command, explained end to end. | Overview · Pipeline diagram (Archify, Section 5) · What each stage checks · Reports · Links | Pure Python, v2.1.0. One command security checks an Android app and explains every step: static manifest, strings and code rules, Frida dynamic traces, scoring, HTML and JSON reports, baseline and CI modes. Link: `https://github.com/mizazhaider-ceh/apk-security-pipeline`. |
| `/projects/agentarsenal` | Project detail: AgentArsenal | A skills system, shown as a system. | Overview · Skills tree diagram (Archify, Section 5, shared with Skills page) · Versioning, testing, scoring · Links | 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, one command installer. Link: `https://github.com/mizazhaider-ceh/AgentArsenal`. |
| `/projects/ai-terminal-x` | Project detail: Ai-Terminal-X | Plain language in, a safe command out. | Overview · How safe execution works · Example prompts · Links | AI powered Linux terminal assistant: natural language to executable commands via Google Gemini AI, with safe execution checks. His most starred tool (38 stars). Link: `https://github.com/mizazhaider-ceh/Ai-Terminal-X`. |
| `/experience` | Experience | Three roles, past tense where ended, evidence in every bullet. | Roles timeline (3) · What each role taught · Availability | Bug Bounty Hunter, YesWeHack, Feb 2026 to Present, remote part time: responsible disclosure on live programmes, categories only (authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, rate limiting); 35 reports submitted, 3 rewarded, quarterly recognition. Founder and Offensive Security Researcher, The PenTrix, self founded: what it is and what it ships. Junior DevSecOps and AI Security Engineer, Damno Solutions, Nov 2025 to Jun 2026, remote part time 20h/week (role ended, always past tense): delivered 13 vulnerabilities against a brief of 3+, fixed 2 critical (RCE and SQLi), built GitLab CI/CD security pipelines, reviewed the CBAM codebase, wrote 1800+ lines of security documentation. No 269/269 anywhere. |
| `/skills` | Skills | Evidence, not percentages. | Skill groups (3) · Skills and career tree diagram (Archify, Section 5) · Soft skills (plain words) | Offensive security, Defensive security, AI security and automation. Each skill is a quiet line with where he used it (for example "Burp Suite, daily in bug bounty hunting and in PenTrix-VulnLab", "Frida, dynamic analysis in APK Security Pipeline and Mobile Security labs", "Python, Ai-Terminal-X, X-Recon, APK Security Pipeline"). No percentage bars, no invented levels. Soft skills as plain words with one Phosphor icon each (Problem solving, Team leadership, Communication, Critical thinking, Adaptability, Time management). No emoji. |
| `/certifications` | Certifications | Named only, nothing counted. | Held certifications (10) · In progress (separate, clearly marked) | CNSP with Merit (The SecOps Group); Certified Ethical Hacking v12, CEH (LearnKartS); CompTIA PenTest+ Specialization (Packt); AI Agents and Agentic AI (Vanderbilt University); Application Security for Developers and DevOps Professionals (IBM); Web Application Security Testing with OWASP ZAP (Coursera); Linux 101 (TCM Security); Web App Security Testing with Google Hacking (CodeRed); Google AI Essentials; Advanced Python Scripting. Separate line: "In progress: eJPT, eWPT (INE Security)". No "53+" anywhere, no count in any heading or button. |
| `/proof` | Proof | Talk is cheap. Here is the proof. (Keep this heading, it is his.) | Proof stats (3) · CSCB story, photo chapters (Moment 2) · Scoreboard gallery · YesWeHack recognition | Stats: #1 in Web (CSCB 2026 Junior); #3 Junior, #26/806 (CSCB 2026 National CTF, 26 flags); Recognized Hunter (YesWeHack MIHX01, quarterly recognition). CSCB story in three photographs with captions (Web Junior first place; national board #26 of 806, only Pakistani at that rank; solve breakdown, 26 flags). Gallery: cscb-rankings, cscb-junior-top3, cscb-26th-place, cscb-solves-breakdown, yeswehack-swag, yeswehack-email. The two bounty amount images (bounty-eur500.png, bounty-usd80.png) are deleted from the build and never shown. Point totals (1669, 6576, 6701) appear only beside the screenshot that shows them, never as standalone claims. |
| `/contact` | Contact | One action, three ways to reach him, plus the CV. | Contact form · Direct contact · CV download · FAQ (6) | Formspree form (name, email, message; client side validation for email format and required fields; calm specific confirmation only after a real send; inline specific errors under each field). Email `mizazhaiderceh@gmail.com`, GitHub, LinkedIn. CV download link to the Europass PDF (pending his confirmation that the CV may be linked; if he says no, the link is removed and the FAQ answer changes to "ask me by email"). FAQ: what kind of work, when available, bug bounty, what is The PenTrix, can I see your CV, how do I reach you. |
| `*` (catch all) | 404 | A branded dead end that sends the visitor back. | 404 message · Links home and to Projects · Search is not needed | Custom branded 404 page (landing page design B10 ship requirement): "This page does not exist." in his voice, one primary action "Back home", one secondary "See my work". Same nav, same footer, same theme. No dead links anywhere on the site. |

### Shared chrome (every page)

- **Nav (fixed, one line on desktop):** shield mark plus "Muhammad Izaz Haider" and the one line subtitle "Penetration Tester, AI x Offensive Security" (must not wrap to two lines on desktop). Links: Home, About, Projects, Experience, Skills, Certifications, Proof, Contact. GitHub and LinkedIn icon links. Theme switch (light/dark, Section 3). One CTA: "Get in touch". No numbers on nav links. The current page is indicated in the nav. On mobile the links collapse into one full screen menu button; menu links arrive one after another, each moving up 24px while fading in, stepped 60ms apart, total sequence capped at 400ms (landing page design B7).
- **Footer:** "Copyright 2026 Muhammad Izaz Haider", "Created by Muhammad Izaz Haider", nav links, GitHub and LinkedIn, privacy policy and terms links (B10), photo credits in one line (the CSCB and YesWeHack images are his own screenshots; no stock credits needed). No Howest mention in any store or product context (the degree section on About is fine).
- **Page hero pattern (every page, not just Home):** the lime rule, then the page h1 in Sora with the topic in a lavender marker span plus a lime underline bar (Arsenal spec Section 4), then one sentence, then the page meta line (for example, on a project page: stack, status, link). Every page hero fits its headline, one sentence, and primary action inside the first screen at 1280x800 (Hallmark Floor 12) and on mobile.
- **Back link:** every project detail page has a "Back to projects" link at the top and the bottom. Every page has a way back (B10).
- **One section per screen (taste-skill):** the hero alone on the first screen; every section exactly one or two screens tall at 1440x900; no second section heading peeking in. Content is split across pages so this holds; a page that would need three screens for one section is split or shortened, never stretched.
- **Word budget (Hallmark):** about 80 words per screen, 450 visible words at most per page, one idea per screen. The Projects page is the exception by necessity (14 projects), and it stays readable by keeping each card to one outcome line plus tags plus a code strip.

---

## 3. Arsenal design system implementation

Arsenal is implemented once in the theming layer and reused via shared components, per the universal Arsenal spec (2026-11-04 correction). Tokens live in `:root` and in a `[data-theme="dark"]` block in `src/index.css`. No literal colour or font family past the token block (Hallmark Floor 1). No `px` in CSS where `rem` is possible, except for embedded font data (Arsenal spec Section 8).

### 3.1 Tokens, light theme (default)

Light is the default. The page must never load themeless: a synchronous pre paint script in `<head>` validates the stored value and sets `data-theme` on `<html>` before first render (see Section 3.4). Base tokens, copied from the Arsenal spec and from v1 `src/index.css`:

```css
:root {
  --bg: #FAF9F5;
  --bg-pattern: radial-gradient(38rem 22rem at 12% -4%, #EEE8FF 0, transparent 60%),
                radial-gradient(34rem 20rem at 96% 6%, #DDE8D1 0, transparent 55%);
  --surface: #FDFCFF;
  --card: rgba(255, 255, 255, .85);
  --ink: #17191C;
  --muted: #5C6068;
  --faint: #696D74;
  --line: rgba(150, 128, 235, .38);
  --line-soft: rgba(23, 25, 28, .10);
  --blue: #5A45D6;
  --blue-deep: #4633B8;
  --blue-soft: #EEE8FF;
  --marker: #C7B8F5;
  --lilac: #EEE8FF;
  --lime: #B8F34A;
  --lime-deep: #6D8A12;
  --sage: #DDE8D1;
  --green: #4E7A12;
  --green-soft: #DDE8D1;
  --red: #E5484D;
  --red-soft: #FDECEC;
  --teal: #0D9488;
  --teal-soft: #E3F5F2;
  --amber: #B45309;
  --amber-soft: #FDF3E3;
  --btn-bg: #4633B8;
  --btn-bg-hover: #3A2A9E;
  --btn-text: #FDFCFF;
  --nav-bg: rgba(250, 249, 245, .92);
  --font-display: "Sora", "Inter", system-ui, sans-serif;
  --font-text: "Inter", system-ui, sans-serif;
  --font-mono: ui-monospace, "SF Mono", "Cascadia Code", Menlo, Consolas, monospace;
}
```

Notes: `--bg-pattern` is the two radial glows from the spec (lavender top left, sage top right). They are flat radial fields on the page background only, never a hue gradient on a surface, never gradient text, never a glow behind a card. `--muted` is `#5C6068` from the spec (v1 used `#4D5157`; v2 restores the spec value for body muted text and checks contrast at 4.5 to 1 for text use). `--blue` `#5A45D6` is the accent; `--blue-deep` `#4633B8` is the button ground so white button text reaches 4.5 to 1 contrast.

### 3.2 Tokens, dark theme

Dark is the same token names, darkened. It is a full theme, not a filter. Every component reads tokens, so no component needs a dark variant of its own.

```css
[data-theme="dark"] {
  --bg: #121316;
  --bg-pattern: radial-gradient(38rem 22rem at 12% -4%, rgba(90, 69, 214, .22) 0, transparent 60%),
                radial-gradient(34rem 20rem at 96% 6%, rgba(78, 122, 18, .20) 0, transparent 55%);
  --surface: #1A1C20;
  --card: rgba(26, 28, 32, .90);
  --ink: #F2F3F5;
  --muted: #A7ABB3;
  --faint: #7C818A;
  --line: rgba(150, 128, 235, .45);
  --line-soft: rgba(255, 255, 255, .10);
  --blue: #8B7BF0;
  --blue-deep: #A99BF5;
  --blue-soft: #221E3D;
  --marker: #3D3670;
  --lilac: #221E3D;
  --lime: #B8F34A;
  --lime-deep: #A8D94A;
  --sage: #2A3324;
  --green: #9CCB5A;
  --green-soft: #2A3324;
  --red: #F2B8B5;
  --red-soft: #3A1E1E;
  --teal: #5EEAD4;
  --teal-soft: #123B38;
  --amber: #FBBF24;
  --amber-soft: #3A2A12;
  --btn-bg: #6A5AE0;
  --btn-bg-hover: #5A45D6;
  --btn-text: #FDFCFF;
  --nav-bg: rgba(18, 19, 22, .92);
}
```

Dark rules: the marker span keeps dark ink text on the lavender marker in light mode; in dark mode the marker ground darkens to `#3D3670` and the text becomes the light ink, so the marker still reads as a highlight and never as a white block. The lime stays `#B8F34A` in both themes (it is the signature; it must be identical light and dark). The code strips and terminal panel use `--surface` as their ground in both themes, with syntax colours from Section 3.3, so code never inverts to a light block on a dark page.

### 3.3 Typography scale

Sora 800 for headings and the kicker, Inter for body, mono only for code, figures, and the status line. Self hosted woff2 only, no Google Fonts request (Arsenal spec Section 3). Named text styles are defined once in `src/index.css` and applied by name, never by loose size and weight utilities (landing page design B1). The scale snaps to Tailwind steps; the display sizes below are the Arsenal spec values, which land on or between Tailwind steps and are kept because the spec fixes them.

| Style | Font | Size / line height | Weight | Use |
|---|---|---|---|---|
| Heading 1 | Sora | 2.7rem / 1.12 (mobile 1.7rem) | 800 | Page h1 only. Letter spacing -0.03em. |
| Heading 2 | Sora | 3rem / 1 (mobile 2rem) | 800 | Section h2. Letter spacing -0.02em. |
| Heading 3 | Sora | 2.25rem / 2.5rem | 800 | Subsection h3. |
| Heading 4 | Sora | 1.875rem / 2.25rem | 600 | Card group headings. |
| Title 1 | Inter | 1.25rem / 1.75rem | 500 | Card titles. |
| Title 2 | Inter | 1.125rem / 1.75rem | 500 | List item titles. |
| Title 3 | Inter | 1rem / 1.5rem | 500 | Labels that lead a block, nav items. |
| Body 1/2/3 | Inter | 1.0625rem / 1.78 (mobile 1rem) | 600 / 500 / 400 | Running text. Body 3 is the default paragraph. |
| Body 4/5/6 | Inter | 0.875rem / 1.25rem | 600 / 500 / 400 | Secondary text. |
| Button-md | Inter | 1rem / 1.5rem | 600 | Main buttons. |
| Button-sm | Inter | 0.875rem / 1.25rem | 600 | Small header buttons. |
| Caption 1/2 | Inter | 0.875rem / 1.25rem | 500 / 400 | Metadata, helper text. |
| Caption 3/4/5 | Inter | 0.75rem / 1rem | 600 / 500 / 400 | Badges, timestamps, fine print. |
| Mono | ui-monospace stack | 0.875rem / 1.5rem | 400 | Code strips, figures, status line. Tabular numbers. |

Rules: sentence case for headings and buttons. No italic anywhere. No uppercase tracked labels, no eyebrow (Hallmark Floor 9). `text-wrap: balance` on headings, `text-wrap: pretty` on body. Display heads carry `overflow-wrap: break-word; min-width: 0` (Hallmark Floor 5). Small text never gets negative letter spacing; tight tracking is only for large display text (unslop pass 5).

**Syntax highlighting (standing rule, 2026-10-31):** every code example in every guide and on every page uses multicoloured syntax highlighting on a dark background, never all code in one colour. Colours: keywords and SQL purple or pink, functions blue, strings green, numbers orange, variables and column names cyan, comments grey, operators and symbols white or neutral. This applies to the PenTrix challenge panel, every project code strip, and the terminal style status line. It does not change the page theme, only code blocks. In dark theme the code ground is `--surface`; in light theme the code block keeps a dark ground (`#17191C` ink ground with light code text) so the highlighting reads identically in both themes.

### 3.4 Components

One style per component, reused everywhere. No card inside a card (Hallmark Floor 11). Borders go all the way around a card or not at all (landing page design B4). Nested radius follows the formula: inner radius equals outer radius minus the gap, never below 4 (B3, unslop pass 7).

| Component | Spec |
|---|---|
| Card | Background `var(--card)`, border 0.14rem solid `var(--line)`, radius 14px large / 10px small (spec) or 16px outer with 8px inner in the React layer (v1 value, kept where it already exists; the build agent picks one and applies it everywhere, never both on one page). Padding 1rem 1.25rem (spec) or 24px (v1). Shadow in light Arsenal only: `0 30px 70px -30px rgba(121, 102, 246, .28), 0 6px 20px -10px rgba(23, 25, 28, .08)`; in dark, depth comes from surface steps and hairlines, not shadows. |
| Callout | Background `var(--card)`, border 0.14rem solid `var(--line)`, left border 0.45rem, radius 10px, padding 0.85rem 1.1rem. Blue: left border `var(--blue)`, background `var(--blue-soft)`. Green, amber, red use their soft pairs. Label inside is a small uppercase strong with class `t` (spec wording kept for callouts only; page labels elsewhere are sentence case). |
| Pill | Inline block, 0.78rem, weight 800, padding 0.15rem 0.65rem, radius 2rem, border 0.1rem solid, colours from the soft and main pairs. Used for category tags and the availability pill. Counts and meta become quiet mono text instead of glowing pills where they are figures, not categories. |
| Primary button | Background `var(--btn-bg)`, colour `var(--btn-text)`, border `var(--btn-bg)`, radius 10px, padding 12px 20px, Button-md text. Hover: `var(--btn-bg-hover)`. Active: `scale(0.98)`. No glow, no coloured shadow. |
| Secondary button | Transparent background, ink text, 1px solid `var(--line-soft)` border, radius 10px, padding 12px 20px. Hover: `var(--lilac)` ground, `var(--line)` border. Active: `scale(0.98)`. |
| Nav | Sticky top, `var(--nav-bg)`, backdrop blur 6px, bottom border 0.1rem solid `var(--line)`, height 64px. Theme switch is a segmented control (Light / Dark) with the active side in lime in light mode and in periwinkle in dark mode, so the switch itself shows the state without words. |
| Kicker | Lilac pill: background `#EEE8FF` (light) / `var(--lilac)` (dark), border 0.1rem solid `#C7B8F5`, colour `#5A45D6` (light) / `var(--blue-deep)` (dark), uppercase, letter spacing 0.06em, 0.85rem, weight 800, radius 999px, padding 0.25rem 0.75rem. This is the one uppercase element on a page, and it is the Arsenal spec kicker, not an eyebrow label. |
| Marker h1 | Topic wrapped in a marker span: background `#C7B8F5`, radius 0.32em, padding 0 0.28em, colour `#17191C`, plus a lime underline bar after it (absolute, left 0.12em, right 0.12em, bottom -0.16em, height 0.15em, background `#B8F34A`, radius 999px). On mobile the marker may wrap, white space normal. |
| Meta grid | 4 cells, auto fit, min 9.375rem, gap 0.5rem. Each cell: background `var(--bg)`, border 0.1rem solid `var(--line)`, radius 0.5rem, padding 0.5rem 0.75rem, 0.9rem, with a small uppercase label on top. Used on project detail pages (stack, status, role, link). |
| Table | Width 100 percent, border collapse, 0.95rem, cells border 0.1rem solid `var(--line)`, padding 0.55rem 0.75rem, header row background `var(--ink)`, colour `var(--bg)`, 0.9rem. Used on Skills and Certifications pages. |
| Details collapsible | Background `var(--card)`, border 0.14rem solid `var(--line)`, radius 10px, summary padding 0.875rem 1.125rem, weight 700, plus sign before, minus when open, body padding 0.25rem 1.125rem 1.125rem with a top border. Used for the FAQ. |
| Checklist | List style none, each item background `var(--card)`, border 0.14rem solid `var(--line)`, radius 0.5rem, padding 0.625rem 0.875rem, margin 0.5rem 0, with a checkbox character before it in `var(--blue)`. Used on project detail pages for "what this project proves". |
| Figure | Margin 1.2rem 0, border 0.14rem solid `var(--line)`, radius 10px, background `var(--card)`, figcaption padding 0.5rem 0.9rem, 0.82rem, colour `var(--muted)`, top border. Used for every proof screenshot and every Archify iframe (the iframe sits inside the figure, the caption names what the diagram shows). |
| Code strip | Dark ground (`#17191C` in both themes), mono 0.8125rem / 1.8rem, radius 8px, padding 12px 16px, syntax highlighted per Section 3.3, `white-space: pre-wrap`, `overflow-wrap: break-word`. One real command, payload, or verified feature list per project card. |
| Form fields | One style: `var(--surface)` ground, 1px solid `var(--line-soft)` border, radius 10px, padding 12px 16px, Body 3 text. Focus: 2px solid `var(--blue)` outline, offset 2px. Error text under the field in `var(--red)`, Caption 2, never `window.alert()`. |
| 404 | Same nav, footer, and theme. One h1, one sentence, two actions. No illustration. |

### 3.5 Spacing, radius, container

- Spacing scale (landing page design B2, 4px grid from unslop): 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96. Every margin, padding, and gap is a step on this scale. No one off values.
- Container: `width: min(100% - 2 * var(--gut), 1280px)`, centred, equal left and right edges on every page (taste-skill rule 4). Gutter `--gut`: 80px desktop, 48px tablet (640 to 1023px), 20px phone (under 640px). At 1920px the gutters grow and the measure and grids do not (Hallmark Floor 14).
- Radius scale: controls 8 to 10px, cards 12 to 16px, panels 14 to 20px. Nested radius follows the B3 formula. Not everything is a pill; only buttons, pills, and the theme switch are fully rounded.
- Section rhythm: sections are 120px from the top at desktop (96px on phone), 72px bottom padding (48px on phone). One section per screen (Section 2). Space inside a group is smaller than space between groups.

### 3.6 Motion curve and behaviour

One base curve everywhere (landing page design B7): `cubic-bezier(0.22, 1, 0.36, 1)`. Durations: 300ms for colour and opacity hovers (never shorter than 200ms), 500ms for layout and position changes, 600 to 800ms for scroll reveals. Animate only `transform` and `opacity`. Never `transition: all`, never animate width, height, top, left, margins, or large blurs (Hallmark Floor 2, unslop pass 9).

- Hero entrance, once on load: main content fades and rises 16px over 600ms on the base curve, staggered 60ms, 140ms, 220ms, 300ms for the four hero blocks (kicker, headline, sentence, actions). One entrance only; no card flies in from a different side.
- Hover: linked cards lift 2px (transform only), photos zoom 1.02 to 1.03 inside their frame, buttons step on hover and press on click (`scale(0.98)`), underlines draw. No tilt, no `hover:scale` on cards beyond the 2px lift, no carousels, no timed tabs.
- Scroll reveals: sections entering the viewport rise 32px and fade from 0 to full opacity over 600 to 800ms on the base curve, via `IntersectionObserver`, once, never replayed on scroll back up. Never an unthrottled scroll listener. No card or row fades in on scroll except through this one reveal (taste-skill Never list); the reveal is the only scroll motion on the site.
- Tagline reveal (B11, mandatory, on Home): words start at 25 to 35 percent opacity of the theme text colour and activate one at a time in reading order as they cross a trigger line, each on the base curve. Under reduced motion, full colour at once.
- Loops: card loops cycle in 2.5 to 4 seconds, repeat and restart on hover. Nothing loops for no reason: no `animate-pulse`, no `animate-ping` on things that are not live, no shimmer on headings, no breathing glows, no floating elements, no parallax.
- Reduced motion: under `prefers-reduced-motion: reduce`, everything rests and nothing stays hidden. The hero entrance, the tagline reveal, and all scroll reveals render in their final state immediately. Content is visible with scripting off (Hallmark Floor 7).

### 3.7 Theme switch behaviour and persistence

- Default: light (Arsenal ivory). The theme switch offers Light and Dark only. There is no Whiteboard, Graph, or Lavender theme on the portfolio; the four theme set belongs to the study guides, not to this site, and adding it here would break the portfolio's single brand. (The study guide theme bar is not copied onto the portfolio.)
- Persistence: `localStorage` key `portfolio-v2-theme`, value `light` or `dark`. A synchronous pre paint script in `<head>`, before first render, validates the stored value against exactly `light` and `dark`; if missing or invalid it sets `light` explicitly and saves `light`; it sets `data-theme` on `<html>`. The `<html>` tag starts as `<html lang="en" data-theme="light">`. The switch syncs its pressed state to the active theme on every page load and on every route change (the theme is site wide, not per page).
- Seamless switching: the switch changes `data-theme` on `<html>` and every token updates at once through CSS variables, so there is no flash and no per component re-render. Colour transitions on theme change use the 300ms base curve on colour properties only, so the switch feels deliberate rather than instant or sluggish.
- The switch respects `prefers-color-scheme` only as a first visit hint when no stored value exists: if the OS prefers dark and nothing is stored, the pre paint script may set dark, then saves it, so the next visit is stable. Once the user has chosen, their choice wins over the OS forever.
- `theme-color` meta updates with the theme (`#FAF9F5` light, `#121316` dark). The favicon is a flat shield mark in periwinkle on ivory; it does not change with the theme.

---

## 4. Interactive components and animations per page

Purposeful only. Every item below names what it does and why a visitor needs it. Anything not on this list is static.

### Home `/`

- **PenTrix challenge panel (Moment 1, hero):** the signature interactive component. A terminal style panel, built in code, showing a real PenTrix-VulnLab challenge being solved step by step. The visitor picks one of three steps (read the request, spot the flaw, prove it) and the panel shows the real request, the highlighted flaw, and the flag captured line, each with syntax highlighting. The challenge is the IDOR style order lookup from v1 `data.ts` (`GET /api/orders/1042`, host `lab.pentrix.local`), shown as a request, not as a live exploit against a real server. No flag literal is shown; the panel ends with the line `flag captured` and a note that flags are generated per install. Animation: the panel enters once with the hero; step changes fade and rise 8px over 300ms on the base curve. On mobile the panel stacks below the actions, in reading order, and the headline stays above the fold.
- **Tagline reveal (B11):** "Understand it. Break it. Build it. Secure it." Words activate one at a time on scroll, per Section 3.6. Full colour under reduced motion.
- **Proof preview cards:** three stat cards, hover lifts 2px, no other motion. Each card links to `/proof`.
- **Featured preview cards:** three project cards, hover lifts 2px and the border steps to `var(--line)`. Each card links to its detail page.
- **Theme switch:** in the nav, per Section 3.7.

### About `/about`

- **Fact chips:** six quiet facts, no motion beyond the section reveal.
- **Education timeline:** a vertical line in `var(--line)` with lime dots at each entry (the only place the lime dot is used; Hallmark Floor 10 forbids decorative status dots elsewhere, and this timeline is a real sequence, not decoration).
- **Now section:** three cards (Year 2 defence arc, Amsterdam BIP, research applications), each with a date in mono. No motion beyond the reveal.

### Projects `/projects`

- **Filter pills:** All, Offensive security, AI security, DevSecOps, Education, Tools. Clicking a pill filters the grid with a 300ms opacity fade on the base curve; the grid does not reflow with animation (no animated width or height). The active pill is periwinkle ground with white text in light mode, lime ground with ink text in dark mode, so the state is visible in both themes.
- **Project cards:** hover lifts 2px, border steps. Each card has a code strip (static, syntax highlighted) and one link. Card titles never truncate; the grid is two columns at desktop for featured cards so long names fit.
- **Live star counts:** not shown as static numbers. If star counts are shown at all, they are fetched live from the GitHub API at build time and labelled with the fetch date; a stale count is worse than no count. Default: no star counts on cards, stars named only in prose where the brief verifies them (Ai-Terminal-X 38 stars, Security-Books 138 stars).

### Project detail pages `/projects/*`

- **PenTrix detail:** the full interactive challenge (Moment 1, extended): the same three step panel as Home, plus a fourth step showing the fix (what the patched code looks like). The fix step is what makes this page a teaching page, not a walkthrough of an exploit.
- **PowerShell Academy detail:** a stage stepper (6 stages). Clicking a stage shows its chapters and lesson count; the stepper is a row of six buttons, the active one in periwinkle. No auto advance, no timed tabs.
- **BugHunt Arsenal detail:** a payload category browser. 21 categories as pills; selecting one shows three example payloads from that category, syntax highlighted, with a copy button per payload. Copy uses the clipboard API and shows "Copied" for 2 seconds, then reverts. No payload is executed.
- **APK Security Pipeline detail:** the Archify pipeline diagram (Section 5), embedded in a figure with a caption, plus a static stage list that mirrors the diagram.
- **AgentArsenal detail:** the Archify skills tree (Section 5), embedded in a figure, plus a search box that filters the 29 domain names as the visitor types (a plain text filter over a static list, no network call).
- **Ai-Terminal-X detail:** a prompt demo. The visitor picks one of three plain language prompts ("list the largest files", and two more from the repo README, verified at build time) and the panel shows the command it produces, with the safe execution check note beside it. Nothing is executed.

### Experience `/experience`

- **Roles timeline:** three roles in a vertical timeline, same pattern as About. Each role expands with a details element (plus sign before, minus when open, per the spec) to show its bullets. No motion beyond the reveal and the details open.

### Skills `/skills`

- **Skill groups:** three groups, each a table (skill, where he used it). Rows highlight on hover with a surface step and a hairline, not a gradient.
- **Skills tree diagram:** Archify tree (Section 5), embedded in a figure. Clicking a node in the diagram focuses it (the Archify viewer handles this; the page does not add its own zoom).

### Certifications `/certifications`

- **Certification list:** ten named certifications as a clean list with issuer in muted text. The "In progress" line is visually separate, in a callout with an amber left border, so it can never be read as a held certification. No motion beyond the reveal.

### Proof `/proof`

- **CSCB story, photo chapters (Moment 2):** the three photographs in sequence (Web Junior first place; national board #26 of 806; solve breakdown, 26 flags), each with a caption in his voice. The visitor steps through them with previous and next controls; the image changes with a 300ms opacity fade on the base curve. The images are shown whole (`object-fit: contain` on a surface ground), never cropped or stretched, because they are evidence.
- **Scoreboard gallery:** the remaining screenshots in a grid; clicking one opens it in a lightbox (a full screen overlay with the image whole, a close button, and previous/next controls, Escape closes it, focus returns to the thumbnail). The lightbox is the only overlay on the site.
- **Stat cards:** three cards, same as Home preview, no extra motion.

### Contact `/contact`

- **Formspree form:** name, email, message. Client side validation for email format and required fields; inline specific errors under each field ("Enter an email address" / "Write a message first"). Loading state is a skeleton shaped like the form, not a spinner. Success is a calm specific confirmation ("Message sent. I reply within two days." only if that reply time is verified; otherwise "Message sent. Thank you."). Error is inline and specific ("Sending failed. Check your connection and try again."). No `window.alert()`.
- **CV download:** a secondary button linking to the Europass PDF, with the file size shown beside it (verified at build time).
- **FAQ:** six questions as details elements (plus/minus, per the spec), with FAQ schema in the page head for search.

### 404 `*`

- No animation beyond the hero entrance. Two actions: "Back home" (primary) and "See my work" (secondary).

---

## 5. Archify diagram plan

Diagrams are standalone Archify HTML, built with `node ~/workspace/custom-skills/archify/bin/archify.mjs finalize <type> <candidate.json> <output.html> --quality showcase --json`, delivered to the `.archify` working folder first and then copied by hand into the portfolio (Archify output goes to the `.archify` working folder, not to `your_files`, per the standing Archify note; the finished HTML is copied into the portfolio `public/diagrams/` folder by hand). Each diagram embeds on its page inside a `<figure>` with a caption, via an `<iframe>` with a title, a fixed aspect ratio, and a fallback link ("Open the diagram in a new tab") for browsers that block iframes. The iframe background is transparent so the page theme shows through; the diagram itself ships its own light and dark themes and follows the page theme via the Archify viewer toggle, not via the page CSS. No diagram discloses PenTrix flag storage.

| # | Diagram | Type | Content (verified facts only) | Embeds on | Notes |
|---|---|---|---|---|---|
| 1 | PenTrix-VulnLab architecture | `architecture` | Student browser, Express app, SQLite database, 201 challenges across 29 modules, 3 kill chain scenarios, 3 career paths with verifiable certificates, flag generation per install at first boot (no flag literals, no storage location shown). Boundaries: the student's machine (trusted, first boot generation), the lab app (deliberately vulnerable by design), the challenge modules (29, grouped by vulnerability class). Relationships labelled with what flows (HTTP request, SQL query, flag check, certificate issue). | `/projects/pentrix-vulnlab` (main diagram) and a smaller copy on `/projects` beside the PenTrix card | The flagship diagram. Quality profile `showcase`. Source evidence: the PenTrix-VulnLab repo (`mizazhaider-ceh/PenTrix-VulnLab`), read before authoring the candidate. |
| 2 | Technical identity, skills and career tree | `tree` | Root: Muhammad Izaz Haider, BSc Cybersecurity, Howest. Branches: Offensive security (penetration testing, web application security, Burp Suite, OWASP ZAP, vulnerability assessment, API security, mobile security, digital forensics), Defensive security (Linux, Windows Server security, secure code review, CI/CD security, malware analysis, network security, cryptography), AI security and automation (Python, LLM integration and RAG, prompt engineering, Bash scripting, JavaScript, SQL, Git and GitHub). Each leaf carries its evidence in one short line (the same evidence strings as `src/data.ts` SKILL_GROUPS). | `/skills` (main diagram) and `/projects/agentarsenal` (shared, same file, embedded twice) | One file, two embeds. The tree is the visual answer to "unified professional identity": three branches, one person, every leaf tied to a project, a finding, or a rank. No percentages, no levels. |
| 3 | APK Security Pipeline workflow | `workflow` | One command in, HTML and JSON reports out. Stages in order: static manifest rules, strings and code rules, Frida dynamic traces, scoring, report generation (HTML and JSON), baseline and CI modes as a branch after scoring. Each stage names what it checks and what it produces. No invented stage names; the stage list comes from the repo README and the v1 brief. | `/projects/apk-security-pipeline` (main diagram) | Optional in the sense that the page works without it, but it is the clearest way to show "one command, explained end to end", so it is planned as a full diagram, not a sketch. Quality profile `showcase`. |
| 4 (optional) | BugHunt Arsenal, payload to finding flow | `workflow` | Only if time remains after diagrams 1 to 3 pass their gates. Stages: pick a category (21), pick a payload (800+), send it through the HTTP Request Builder, read the response in the Chain Builder, record the finding against the OWASP Top 10 methodology. | `/projects/bughunt-arsenal` | Marked optional in the plan so the build agent does not block the handover on it. If it is built, it follows the same finalize and browser check gates as the others. |

### Archify build rules for this portfolio

- Every candidate is authored from repository evidence (the repo is read first, per the Archify repository authoring reference), never from the brief alone.
- `meta.quality_profile` is `"showcase"` for all three main diagrams.
- Every `finalize` run must pass its gates (validate, deliver, strict check, real browser check) before the diagram is embedded. A passing receipt proves the gates passed; visual review is requested separately and the result is stated honestly ("Automated checks passed; not visually reviewed" unless a perceptual review was done).
- The diagram HTML files live in `public/diagrams/` in the built site (`pentrix-architecture.html`, `skills-tree.html`, `apk-pipeline.html`, and `bughunt-workflow.html` if built). They are not in `src/`, because they are standalone HTML, not React components.
- Diagram colours follow the Arsenal tokens where the Archify renderer allows a custom palette (periwinkle `#5A45D6`, lime `#B8F34A`, ink `#17191C`, lilac `#EEE8FF` on ivory `#FAF9F5`); where the renderer fixes its own palette, the diagram keeps the renderer palette and the page caption says so, rather than forcing a colour that breaks legibility.

---

## 6. Tech stack, each technology and its role

Keep the stack close to what he owns. The v1 stack is kept, `react-router` is added for real multi page routing, and Archify plus a small Node build script cover the diagrams and the build stamp. Nothing is added that he does not already own or that the brief asks for.

| Technology | Version / source | Where it is used | Why this choice |
|---|---|---|---|
| React 19 | `react` 19.1.0, `react-dom` 19.1.0 (already in v1 `package.json`) | The whole app: every page, every shared component (Nav, Footer, cards, forms). | He owns it, the v1 components are already React, and the deploy pipeline is React. |
| TypeScript | `typescript` 5.8.0 (already in v1) | Every component and the data layer. `src/data.ts` is typed (`Project`, `Role`, `SkillGroup`); new page components are typed the same way. `tsc -b` runs in the build. | Type safety catches a renamed route or a missing field before the build ships. The v1 `tsconfig` files are reused unchanged. |
| Vite 6 | `vite` 6.3.0, `@vitejs/plugin-react` 4.4.0 (already in v1) | Dev server and production build. `vite build` outputs `dist/`. | Already owned and already deploying to Vercel. |
| Tailwind CSS v4 | `tailwindcss` 4.1.0, `@tailwindcss/vite` 4.1.0 (already in v1) | Utility classes in components, plus the `@theme inline` block in `src/index.css` that maps Tailwind colour and font names onto the Arsenal CSS variables. | v1 already wires Tailwind v4 through `@import "tailwindcss"` and `@theme inline`; v2 keeps that wiring and adds no second styling system. |
| CSS (design system) | Plain CSS in `src/index.css`, tokens at `:root` and `[data-theme="dark"]` | The Arsenal theming layer: tokens, named text styles, buttons, cards, code strips, motion, reduced motion. Implemented once, reused via shared components (universal Arsenal spec). | One source of truth for the brand. No inline styles per section. |
| react-router | Latest stable 7.x (new dependency, to be added at build time) | Real multi page routing: the route table in Section 2, `BrowserRouter` in `src/main.tsx`, `NavLink` for the nav with the active page indicated, `ScrollRestoration` (scroll to top on route change), a catch all `*` route for the 404. | This is the change that makes v2 multi page. `react-router` is the standard router for a React and Vite app; no framework change is needed. |
| Phosphor icons | `@phosphor-icons/react` 2.1.10 (already in v1) | Every icon on the site, one set, one size (16 or 18px), one stroke (1.5). No emoji as icons, anywhere. | Already owned, already in v1, and landing page design B6 allows Phosphor. |
| Sora + Inter, self hosted woff2 | `public/fonts/sora-latin.woff2`, `inter-latin.woff2` (already in v1) | Headings (Sora 800) and body (Inter), loaded via `@font-face` in `src/index.css`. No Google Fonts request, so the site works offline and the type is pixel exact in screenshots. | Arsenal spec Section 3 requires embedded woff2, not web fonts. |
| Formspree | `https://formspree.io/f/xldjdnlr` (already in v1) | The contact form on `/contact`. POST, client side validation first, calm confirmation only after a real send. | Already owned and already working on v1. No new form backend is built. |
| Archify | `~/workspace/custom-skills/archify/bin/archify.mjs`, v3.2.0 (installed skill) | The three diagrams in Section 5, built as standalone HTML and embedded via iframe. | The brief asks for professional technical diagrams using Archify where available. Archify gives validated, explorable diagrams with browser checks, which hand drawn SVG cannot. |
| Node (build script) | `scripts/stamp-css.mjs` (already in v1, runs as `postbuild`) | Stamps the built CSS with the Hallmark stamp line (theme, genre, job) after `vite build`. Kept unchanged. | Small, already owned, and it keeps the build provenance visible in the output. |
| Vercel | Deploy target (already in v1, repo `mizazhaider-ceh/Prime-PortFolio`) | Hosting and automatic deploys from the repo. **Do not deploy until izaz says he likes it** (v1 brief verification rule). | He owns the repo and the deploy pipeline. The build agent hands him a preview first. |
| Playwright (verification only) | Installed per `~/TOOLS.md` (`pip install --user --break-system-packages playwright`) | Verification before handover: render at 1440, 1024, 768, 390; 0 console errors, 0 horizontal overflow, hero headline plus sentence plus primary action visible at 1280x800 and on mobile, every visual renders. | Verification is a build step, not a runtime dependency. It never ships to the site. |

### File layout (build target `~/workspace/portfolio-v2/`)

```
portfolio-v2/
  plan/
    DESIGN-PLAN.md            (this file)
  src/
    main.tsx                  (BrowserRouter, ScrollRestoration, theme pre paint hook)
    App.tsx                   (route table, shared Nav and Footer, catch all 404)
    data.ts                   (verified content, carried over from v1, split by page at build time)
    index.css                 (Arsenal tokens light and dark, named text styles, components, motion)
    routes/
      Home.tsx  About.tsx  Projects.tsx  Experience.tsx  Skills.tsx
      Certifications.tsx  Proof.tsx  Contact.tsx  NotFound.tsx
      projects/
        PentrixVulnLab.tsx  PowershellAcademy.tsx  BugHuntArsenal.tsx
        ApkPipeline.tsx  AgentArsenal.tsx  AiTerminalX.tsx
    components/
      Nav.tsx  Footer.tsx  Hero.tsx  Tagline.tsx  ProjectCard.tsx
      ProofCard.tsx  ChallengePanel.tsx  Faq.tsx  ThemeSwitch.tsx
      DiagramFigure.tsx       (iframe embed with caption and fallback link)
    hooks.tsx                 (useTheme, useReveal, useCopy)
  public/
    fonts/  images/  files/   (carried over from v1, minus the two bounty amount images)
    diagrams/                 (Archify HTML: pentrix-architecture.html, skills-tree.html,
                               apk-pipeline.html, bughunt-workflow.html if built)
    favicon.svg  404.html     (static fallback for the host, plus the React 404 route)
  scripts/
    stamp-css.mjs             (carried over from v1)
  index.html                  (pre paint theme script, meta, OG, JSON-LD with birthDate 2007-01-28)
  package.json  vite.config.ts  tsconfig*.json   (carried over from v1, plus react-router)
```

### What is deliberately not used

- **No three.js.** The 872KB particle background is removed. The hero visual is a real product panel, not a starfield.
- **No new CSS framework, no component library.** Tailwind plus the Arsenal token layer is the whole system. A component library would fight the tokens.
- **No CMS, no database, no server.** The site is static content plus a Formspree form. There is nothing to log into and nothing to keep running.
- **No analytics that phones home without his say so.** If analytics are wanted later, that is a separate decision for izaz, not a silent default.

---

## 7. Skill conflict decisions, with reasons

Each conflict is decided once here. The build agent follows these decisions and states them in the handover; it does not re-litigate them silently, and it does not silently pick a side the other way.

### Decision 1: Colour, Arsenal lavender wins over the taste-skill violet ban

- **Conflict:** taste-skill forbids violet and lavender in the page's own design (accent, ground, gradient, effect colour, or tint). Arsenal's brand is lavender, lilac, and periwinkle (`#C7B8F5` marker, `#EEE8FF` lilac field, `#5A45D6` periwinkle) on ivory `#FAF9F5` with lime `#B8F34A`.
- **Decision:** Keep Arsenal. This is his standing brand system, his explicit choice in the v2 brief ("FULL MAX BEST Arsenal theme, NOT Rational Theme"), and landing page design says the user's explicit choice wins over a rule. The taste-skill rule is waived for the Arsenal brand colours only.
- **What is kept from the taste-skill rule:** drop the purple to blue and cyan gradients and glows (all five skills agree on that). Use flat periwinkle and flat lime on ivory. No hue gradient on any surface, no gradient text, no coloured glow, no coloured shadow, no radial colour wash behind content except the two flat radial fields on the page background that the Arsenal spec itself defines. The waiver is for flat lavender, lilac, and periwinkle as brand colours, not for gradients or glows in those hues.

### Decision 2: Type, Sora plus Inter wins over the landing page design font ban

- **Conflict:** landing page design allows only Geist, Manrope, Geist Mono, and Poppins, and forbids Inter. Arsenal uses Sora for headings and Inter for body.
- **Decision:** Keep Sora for display and Inter for body (Arsenal brand). The landing page design font rule is waived with this reason stated in the handover. The B1 named text styles, the type scale snapping, the sentence case rule, the no hyphen and no orphan rules, and the no italic rule are all kept; only the allowed font list is waived.
- **What is not used:** Orbitron (the current display font on the live site; it is a gamer cliche and it is not Arsenal) and Fira Code for body text (mono only for code, figures, and the status line, per the brief and per B1).

### Decision 3: Hero heading, flat periwinkle wins over the landing page design gradient text

- **Conflict:** landing page design B5 wants a gradient on hero heading text (white to grey in dark, black to grey in light). Arsenal forbids gradient text.
- **Decision:** Arsenal wins. The hero heading is flat ink with the topic in a flat lavender marker span plus a flat lime underline bar (Arsenal spec Section 4). No gradient text anywhere on the site, in either theme.

### Decision 4: Hallmark Floor, applied in full, with two named adaptations

- **Applied as written:** tokens at `:root`, never `transition: all`, never animate width, height, top, or left, `overflow-x: clip` on `html` and `body`, `minmax(0, 1fr)` on image bearing grid tracks, `:focus-visible` on every interactive element appearing instantly, reduced motion fallback with content visible with scripting off, no invented metric, testimonial, logo wall, or case study count, no eyebrow, no tracked capitals, no purple to blue gradient, no card inside a card, no emoji as an icon, hero headline plus sentence plus primary action visible at 1280x800, about 80 words per screen, container capped and centred.
- **Adaptation A (kicker):** the Arsenal lilac pill kicker is uppercase with 0.06em letter spacing. Hallmark Floor 9 forbids tracked capitals for labels. The kicker is kept because it is the Arsenal spec's own component (Section 4, step 3), not a section eyebrow, and it appears once per page as the page label, never as a section label. Section labels on the page are sentence case Title 3, untracked.
- **Adaptation B (meta strings):** Hallmark Floor 10 forbids middle dot joined meta strings. The hero fact line in v1 uses middle dots (`#1 Web Junior, #3 overall Junior, #26 of 806` in v2 wording, commas only). Where v1 used dots as separators, v2 uses commas. The status line uses commas too. No arrows glued to link text; links that need an arrow use a Phosphor arrow icon with a gap, not a character glued to the word.

### Decision 5: Unslop, the direction is the authority, and its nine passes run in order at build time

- Unslop is the redline pass, not a second design system. At build time the agent runs its nine passes in order (spacing, colour, icons, copy, type, layout, details, visuals, motion) across every page, against the five line direction in Section 1, and ends with the unslop checklist. The v1 brief Part 3 already lists the audit findings for the live site; the build agent re runs the audit on the v2 build and reports what is still open.
- Where unslop and Arsenal disagree, Arsenal wins on colour and type (Decisions 1 to 3), and unslop wins on everything else (spacing rhythm, one accent, one icon set, plain copy, no decoration, quiet chrome, rich moments).

### Decision 6: Taste-skill gate and Hallmark sloplint, run at build time, waivers on the record

- At build time the agent runs the taste-skill gate (`gate.mjs`, with kind `service`, category "cybersecurity student portfolio", primary "Get in touch") and Hallmark `sloplint.mjs --render` until clean, and reports the `GATE:` line first in the handover.
- The waivers in Decisions 1 to 4 are recorded in `.taste-skill/waivers.json` with their reasons (the brief is the reason), never by gaming a check. A FAIL judged false is waived on the record the same way. If the gate cannot run in this environment, the handover says so plainly and names what was not checked.

### Decision 7: Landing page design structure, adapted from one page to many pages

- Landing page design Part A assumes one landing page. This portfolio is nine pages plus six detail pages, so Part A is applied per page, not per site: each page has one offer (its own subject), one audience (the same recruiter or research lead), and one primary action ("Get in touch", repeated identically on every page, at most twice per screen). The Home page carries the full Part A structure (hero, problem to solution in About, benefits in Projects, how it works in the PenTrix challenge, proof on Proof, FAQ on Contact, final CTA on Contact). The tagline reveal (B11) sits on Home, after the hero, as its own moment, not stacked directly under the hero.

### Standing rules that are not conflicts, and are kept without exception

- **No em dashes** in any file or reply. Use commas, colons, or parentheses.
- **No invented facts.** Every claim must be checkable from the v1 brief Part 1. A missing fact uses a clearly marked placeholder (`{{...}}`), never an invented value.
- **No bounty amounts, no 269/269, no "53+", no 16.40/20 in bios, no skill percentages, no PenTrix flag storage disclosure, no bug bounty program names, report titles, IDs, endpoints, or reward amounts, no CWE-434 mechanism detail.** The full MUST FIX list is in the v1 brief Part 3.
- **JSON-LD birthDate is "2007-01-28"**, not "2006". The live site bug is fixed in v2.
- **Only his screenshots, as real files in `public/images/`, never lecture slide images, never stock passed off as his work.** Own visuals only (inline SVG where a diagram is drawn by hand, Archify where a diagram is built, real screenshots where proof is shown).
- **Cache busting:** handovers use a new versioned filename when a file is updated, so the panel cache never shows him a stale copy.

---

## 8. Exact copy, Home hero and tagline reveal

This is the exact copy the build agent uses for the Home hero. Do not paraphrase it, do not add a hype word, do not add an exclamation mark, do not add a hyphen inside a sentence. Sentence case for headings and buttons.

### Home hero

- **Kicker (lilac pill):** `BSc Cybersecurity, Howest, Belgium`
- **Headline (h1, Heading 1, Sora 800):** `Muhammad Izaz Haider`
  - The name is the headline. The topic marker span wraps `Izaz Haider` (the name he is known by), with the lavender marker background and the lime underline bar from Section 3.4. The full name stays in the DOM and in the page title; the marker is a visual highlight, not a different name.
- **One sentence (Body 1, Inter, max width 680px):** `Second year BSc Cybersecurity student at Howest who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had.`
  - This is the v1 `HERO.sentence`, kept verbatim. It names the outcome (breaks web apps, hunts bounties, builds tools) and the audience (a recruiter reading for an offensive security hire) in one sentence.
- **One hard fact (mono, Caption 1, under the sentence):** `CSCB 2026: #1 Web Junior, #3 overall Junior, #26 of 806`
  - This is the v1 `HERO.fact`, kept verbatim. It is the one checkable fact on the first screen, and it sits beside the claim it supports.
- **Two actions only:**
  1. Primary: `Get in touch` (links to `/contact`, Button-md, periwinkle ground)
  2. Secondary: `See my work` (links to `/projects`, Button-md, secondary style)
  - No third action on the hero. GitHub and LinkedIn live in the nav, not in the hero.
- **Availability line (Caption 2, muted, under the actions):** `Available for internships and junior roles, Feb to Apr 2027 and Jul to Sep 2027`
  - This is the v1 `HERO.availability`, kept verbatim. It is the hiring line a recruiter scans for. It stays generic about roles and does not name any live application.
- **Status line (mono, Caption 2, under the hero, part of the signature):** `status: available for internships, feb apr 2027, jul sep 2027`
  - The `izaz@howest:~$ whoami` joke from the v1 brief is not used unless izaz approves it. The plain availability status line is the default. (Open question 4 in the v1 brief, still open.)
- **Hero visual (Moment 1, right side of the split on desktop, below the actions on mobile):** the PenTrix challenge panel from Section 4. It is a real challenge built in code, not a skull, not a stock image, not a particle field. The headline, one sentence, and primary action are all visible at 1280x800 without scrolling, and the same holds on mobile (Hallmark Floor 12). The panel is at least half the hero width on desktop (unslop asymmetric split), and the text block is centred vertically against it.

### Tagline reveal (B11, Home, after the hero)

- **Copy (Heading 2, Sora 800, two lines, max width capped like the hero):**
  - Line 1: `Understand it. Break it.`
  - Line 2: `Build it. Secure it.`
  - This is his own loop, shortened from the v1 `TAGLINE` array (`["Understand it.", "Break it.", "Build it.", "Secure it."]`). It is a benefit statement in his voice, not a generic section heading.
- **Animation:** words start at 30 percent opacity of the theme text colour and activate one at a time in reading order as they cross a trigger line, each on the base curve from Section 3.6. The word `Secure it.` activates in periwinkle (`var(--blue-deep)` in light, `var(--blue-deep)` in dark) while the other words activate in ink, so the last word lands as the point. Under reduced motion, the full text shows at full colour at once, with no word by word animation.
- **Placement:** its own section, after the hero and before the About preview. Not stacked directly under the hero; the hero ends, the page breathes, then the tagline arrives as its own moment.

### SEO and head (Home, carried over from v1 with the fixes)

- Title: `Muhammad Izaz Haider, Penetration Tester, AI x Offensive Security`
- Meta description: `Second year BSc Cybersecurity student at Howest, Belgium. Bug bounty hunter on YesWeHack, CSCB 2026 #1 Web Junior, founder of The PenTrix, building AI powered security tools.`
- Canonical: `https://www.mizazhaider-ceh.dev/`
- OG image: `public/images/og-image.jpg` (carried over from v1)
- JSON-LD Person, with `birthDate: "2007-01-28"` (fixed), credentials listed as the named certifications only, no "53+", no invented counts.
- Every other page gets its own title and description in the same pattern (page subject, then his name), and every page links back to Home and to Projects.

---

## Open questions for izaz (ask before or during the build, not after)

These are the six open questions from the v1 brief Part 4, still open, restated here so the build agent does not guess them:

1. Arsenal light (ivory) as the default, or keep the dark theme? (Recommendation in this plan: Arsenal light as the default, with a full dark theme and a persisted switch. The brief already asks for light by default plus a full dark theme, so this is settled unless he says otherwise.)
2. Is the "Available Feb to Apr 2027 and Jul to Sep 2027" line OK to publish, or should availability stay generic?
3. May the portfolio link the Europass CV for download?
4. Is the `izaz@howest:~$ whoami` status line joke OK, or plain text? (This plan uses plain text by default.)
5. Confirm the PowerShell Academy repo name (`my-powershell-academy` vs `powershell-academy`).
6. Should VulnNotes be shown (course project, no public repo) or kept off the portfolio? (This plan shows it, labelled "Course project, no public repo", as in v1.)

## Verification before handover (the build agent must do this)

- Render in a real browser (Playwright) at 1440, 1024, 768, 390: 0 console errors, 0 horizontal overflow, every visual renders, hero headline plus sentence plus primary action visible without scrolling at 1280x800 and on mobile.
- Run the taste-skill gate until `GATE: PASS` (or report the open FAILs), Hallmark `sloplint --render` until clean, and the unslop checklist.
- Check every link lands (GitHub repos, live sites, LinkedIn, email). Confirm the PowerShell Academy repo name before linking it.
- Confirm no forbidden content survived: no bounty amounts, no 269/269, no "53+", no 16.40/20 in bios, no skill percentages, no PenTrix flag storage disclosure, no program names, no bounty amount images.
- Check the theme switch: light default, dark works on every page, choice persists across pages and reloads, no flash of the wrong theme, `theme-color` updates.
- Check the Archify diagrams: each `finalize` receipt passed, each iframe renders, each caption is correct, each fallback link works.
- Hand the rebuilt site to izaz first (a preview link or a local render). Do NOT push to GitHub or deploy until he says he likes it.

## Sources

- `~/workspace/portfolio-v2-brief.md` (authority, his correction brief)
- `~/workspace/portfolio-rebuild-brief.md` (verified fact sheet, reverse engineered live site, MUST FIX items, rebuild plan)
- `~/workspace/user/files/arsenal-theme-spec.md` (Arsenal tokens, universal prompt form)
- `~/workspace/custom-skills/unslop/SKILL.md`
- `~/workspace/custom-skills/design-taste-frontend/SKILL.md`
- `~/workspace/custom-skills/hallmark/SKILL.md`
- `~/workspace/custom-skills/landing-page-design/SKILL.md`
- `~/workspace/custom-skills/archify/SKILL.md`
- `~/workspace/portfolio-rebuild/` (v1 single page source: `src/data.ts`, `src/index.css`, `src/components/`, `public/fonts`, `public/images`, `public/files`, `scripts/stamp-css.mjs`, `package.json`)
