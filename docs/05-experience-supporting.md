# Experience Specification: Supporting Pages, Navigation, Search, and Cross-Cutting Behaviour

**Portfolio V3 rebuild, Phase 5. Date: 9 November 2026. Status: specification for the Phase 7 build. This file specifies behaviour only. It edits no code.**

**Scope:** the supporting pages (About, Expertise, Research, Contact, Privacy, Terms, 404), the navigation and footer, site search, and the cross-cutting behaviour that applies to every page (theme, performance, motion, accessibility). Project pages (Home, Projects index, project detail pages) are specified in the companion experience document. Where this file and `docs/DESIGN_SYSTEM.md` disagree, `docs/DESIGN_SYSTEM.md` wins.

**Sources read in full before writing:** `docs/DESIGN_SYSTEM.md`, `docs/03-brand-strategy.md`, `docs/03-project-selection.md`, `docs/03-information-architecture.md`, `docs/01-profile-audit.md`, `docs/01-repo-audit.md`, `docs/02-component-research.md`, and the v2 code being specified against: `src/routes/About.tsx`, `src/routes/Skills.tsx`, `src/routes/Contact.tsx`, `src/routes/Experience.tsx`, `src/routes/Certifications.tsx`, `src/routes/Proof.tsx`, `src/routes/Privacy.tsx`, `src/routes/Terms.tsx`, `src/routes/NotFound.tsx`, `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/components/ContactForm.tsx`, `src/App.tsx`, `src/data.ts`, `src/hooks.tsx`, `index.html`.

**Naming note, read first:** the words that follow appear in this file only as parts of existing project names and route slugs, never as design tokens, colours, fonts, or layouts. The project called BugHunt Arsenal and the project called AgentArsenal keep their names, because those are the names of his work and of the existing routes (`/projects/bughunt-arsenal`, `/projects/agentarsenal`). No design token, class, colour, font, or layout from the v2 design system is used anywhere in this specification. Every font and colour in this file comes from `docs/DESIGN_SYSTEM.md` exactly.

**Tokens used in this file (all from `docs/DESIGN_SYSTEM.md`):** paper `#F7F3EA` (light ground) and `#191817` (dark ground), surface `#FFFEFA` (light) and `#221F1C` (dark), ink `#1C1A17` (light) and `#F3EFE5` (dark), body `#2A2723` (light) and `#D5CFC2` (dark), muted `#6E6A61` (light) and `#9C968B` (dark), line `#DCD5C6` (light) and `#37332C` (dark), line-strong `#B9B0A0` (light) and `#57503F` (dark), accent oxblood `#7A2E25` (light) and `#D18A74` (dark), accent-text `#6E231C` (light) and `#E0A58F` (dark), accent-soft `#F1E3DE` (light) and `#3A211B` (dark), code-ground `#1E1C19` (light) and `#121110` (dark), focus `#7A2E25` (light) and `#D18A74` (dark). Type: Archivo (display, 600, 700, 800, expanded width for hero and handoff lines only), Instrument Sans (text, 400, 500, 600), JetBrains Mono (code and metadata, 400, 500, 600). Radii: 2px everywhere. Shadows: none by default. Hairlines: 1px, line colour.

**Conventions used below:** "must" means the Phase 7 build is wrong without it. "Keep from v2" means the behaviour is carried over and only restyled in the Monograph tokens. "Change from v2" means the v2 behaviour is replaced for a stated reason. Copy in quotation marks is proposed public copy, taken from `docs/01-profile-audit.md` section 16 or from `src/data.ts`, with the institution name removed where the v3 rule requires it. No line of proposed copy in this file names an institution, a course code, a lecturer, or a professor.

**Route table for Phase 7 (the whole site, so the supporting pages sit in context):**

| Route | Page | Decision vs v2 |
|---|---|---|
| `/` | Home | Rewrite (companion spec) |
| `/projects` | Projects index | Rewrite (companion spec) |
| `/projects/pentrix-vulnlab`, `/projects/powershell-academy`, `/projects/bughunt-arsenal`, `/projects/apk-security-pipeline`, `/projects/security-books` | Featured case studies | Rewrite (companion spec; Security-Books is new as a featured slot) |
| `/projects/agentarsenal`, `/projects/ai-terminal-x` | Archive detail pages | Keep, demote to archive (companion spec) |
| `/about` | About | Rewrite (section 2 below) |
| `/expertise` | Expertise | Rewrite from v2 `/skills` (section 3 below) |
| `/research` | Research | New (section 4 below) |
| `/contact` | Contact | Rewrite (section 5 below) |
| `/privacy` | Privacy | Keep, updated (section 6 below) |
| `/terms` | Terms | Keep, updated (section 6 below) |
| `*` | 404 | Keep, metadata fixed (section 6 below) |
| `/experience`, `/skills`, `/certifications` | Removed | Redirect (see section 1.6) |
| `/proof` | Removed, redistributed | No redirect; links updated to the page that now holds each piece of evidence (see section 1.6) |

**Sitemap:** the sitemap lists the 15 live routes above (home, projects, 7 project detail pages, about, expertise, research, contact, privacy, terms). The catch-all is not listed. The 4 removed routes are not listed. `lastmod` is set from the build date.

---

## 1. Navigation

### 1.1 Top bar, desktop and phone

1. The bar is fixed to the top of the viewport on every page, 64px tall, paper ground in the light theme (`#F7F3EA`) and dark ground in the dark theme (`#191817`). It has a 1px hairline bottom edge in the line colour at all times, never only after scrolling. Change from v2: v2 showed the border only after scrolling past 8px and used a translucent ground with backdrop blur. Both go. There is no blur anywhere on the site, and the hairline is always present, so the bar reads as a ruled page edge, not a floating panel.
2. Layout, left to right: the name link, the five nav items, the search button, the theme switch, the Contact button. On phones the search button moves into the mobile menu (see section 1.5); everything else keeps its place.
3. The bar sits inside the 1240px container with the same gutters as the page (64px desktop, 32px tablet, 20px phone). Content never touches the viewport edge.
4. The bar must never wrap to two lines at any width from 375px up. If the name plus controls do not fit at 375px, the name truncates with an ellipsis only as a last resort, and the Phase 7 verification must record the exact width at which truncation starts. The preferred outcome is no truncation at 375px.
5. The bar contains no social links, no CV link, and no logo mark. GitHub and LinkedIn live in the footer and in Contact only. Change from v2: v2 put GitHub and LinkedIn icon links in the bar. They are removed, which is what makes room for the search button without crowding the bar.

### 1.2 Name link (home link)

1. Left side of the bar: the text "Muhammad Izaz Haider" in Archivo 600, 17px, ink colour, linking to `/`. This is the home link. Home is not a nav item.
2. Change from v2: v2 showed an "IH" mark in a coloured square, a "Penetration Tester" subtitle below the name (hidden below 1280px), and the shortened name "Izaz Haider" on phones. All three go. There is no mark, no subtitle, and no shortened name. The full name is the link at every width.
3. The link has `aria-label="Muhammad Izaz Haider, home"`. Its tap target is at least 44px tall. Hover (fine pointer only): the text gains an accent underline. Focus: the standard 2px accent outline, offset 2px (see section 9.3).

### 1.3 The five items, in order

1. Exactly five items, in exactly this order: Projects (`/projects`), About (`/about`), Expertise (`/expertise`), Research (`/research`), Contact (`/contact`).
2. The first four are text links in Instrument Sans 500, 15px, Label style, sentence case, body colour at rest, ink colour on hover. The fifth, Contact, is a solid ink button: ink ground, paper text, same 15px Instrument Sans 500, padding 14px 28px, radius 2px, no shadow. It is the last item and the most visible, per the serial position effect. Change from v2: v2 had eight nav links (Home, About, Projects, Experience, Skills, Certifications, Proof, Contact) plus a separate "Get in touch" button. The eight become five, and the Contact item itself is the button. There is no second "Get in touch" control.
3. Active page: a 2px accent underline under the active link, in the accent colour (`#7A2E25` light, `#D18A74` dark). No pill, no background wash, no coloured text. The underline sits directly under the link text, not under the whole tap target. The active link also carries `aria-current="page"`. This is one of the exactly three places the accent is used on the site (the other two are the solved state of the challenge panel and the rule above a chapter handoff line).
4. A project detail page (`/projects/<slug>`) counts as the Projects page for the active state, so Projects carries the accent underline on every detail page. About, Expertise, Research, and Contact carry it only on their own page. Privacy, Terms, and the 404 page carry no active underline, because none of the five items is that page.
5. Every nav link and the Contact button have a tap target of at least 44px tall and 44px wide. Links are spaced so their tap targets never overlap.
6. No multi level dropdowns anywhere, on desktop or on phones. No hover menu, no mega menu, no grouped links. The five items are the whole navigation.

### 1.4 Theme switch and search button (desktop bar)

1. Theme switch: one text button, never an icon alone. Its visible label is the theme it switches to: it reads "Dark" while the site is in the light theme, and "Light" while the site is in the dark theme. Its accessible label names the action: `aria-label="Switch to dark theme"` or `aria-label="Switch to light theme"`. Change from v2: v2 used a two button group (Light and Dark side by side, with `aria-pressed`). That group is replaced by the single toggle button, which is the form `docs/DESIGN_SYSTEM.md` specifies.
2. The theme switch sits beside the Contact button, on the side away from the nav links. Order in the bar: nav links, search button, theme switch, Contact button.
3. Search button: a text button reading "Search" with a Phosphor MagnifyingGlass icon (20px, regular weight, ink colour) before the text, never an icon alone. On desktop it also shows a mono hint, "Ctrl K", in JetBrains Mono 500, 13px, muted colour, after the text. It opens the search palette (see section 8). Its accessible label is "Search, Ctrl K". Keyboard: Ctrl+K (Windows and Linux) and Cmd+K (macOS) open the palette from anywhere on the site.
4. Both buttons are real `<button>` elements, Instrument Sans 500, 15px, with tap targets of at least 44px. Both show the standard 2px accent focus outline, offset 2px.

### 1.5 Mobile menu

1. Below the desktop breakpoint (below 1024px), the five nav links are replaced by one menu button in the top bar. The button reads "Menu" as visible text with a Phosphor List icon (20px, regular weight) before it, never an icon alone. Its state is announced: `aria-expanded="true"` or `"false"`, and `aria-label="Open menu"` or `"Close menu"`. The icon changes to an X when the menu is open. The button is at least 44px by 44px.
2. Opening the menu shows a full screen paper menu: paper ground in the light theme, dark ground in the dark theme, covering the viewport below the 64px top bar, with its own 1px hairline at its top edge. The top bar stays visible above it, with the menu button now showing the close state.
3. The menu contains, in order: the search button (full width, same "Search" text button, first control in the menu, because the bar search button is hidden on phones), then the same five items in the same order as desktop (Projects, About, Expertise, Research, Contact). Contact is a full width solid ink button at the bottom of the menu, in the thumb zone, with safe area padding (`padding-bottom` includes `env(safe-area-inset-bottom)`) so it is never hidden behind a phone home indicator. The five items are set in Archivo 600, 22px, one per row, each row at least 44px tall, separated by 1px hairlines in the line colour. The active page carries the same 2px accent underline as desktop.
4. The menu contains no social links, no CV link, and no theme switch duplicate. The theme switch stays in the top bar on phones. Change from v2: v2 put GitHub and LinkedIn buttons at the bottom of its mobile menu. They are removed.
5. Focus management (fixes the v2 audit gap, where the menu had no focus management at all):
   - On open, focus moves into the menu, to the first nav link (Projects), and the menu is announced as a dialog: `role="dialog"`, `aria-modal="true"`, `aria-label="Menu"`.
   - While the menu is open, the page behind it is inert (`inert` attribute on `<main>` and `<footer>`) and body scroll is locked, as v2 already did. Tab cycles within the menu. This is a focus loop with a visible exit, not a trap: Escape always closes it, the close button always closes it, and selecting any link closes it.
   - On close, for any reason, focus returns to the menu button that opened it.
   - Escape closes the menu. Selecting a link closes the menu and navigates. The menu also closes on route change.
   - Change from v2: v2 staggered the menu links in with a 60ms per item delay capped at 400ms. That stagger is removed. Menu items appear with a single 160ms to 220ms transform and opacity transition, or appear at once under reduced motion.
6. The menu must work with scripting off only in the sense that it degrades safely: without scripting there is no menu button behaviour, so the top bar on phones must still show the five items as plain links. The build must confirm this fallback renders (see section 9.5). In practice this means the menu button is rendered by the app shell and the links exist in the markup before the menu opens; the menu is a presentation of links that already exist, not the only place the links live.

### 1.6 Skip link, removed routes, and redirects

1. Skip link: the first element in tab order on every page, before the top bar. Text: "Skip to content". It links to `#main`. It is visually hidden until focused, then visible on the paper surface with the standard 2px accent focus outline. Activating it moves focus to `<main id="main">`, which carries `tabindex="-1"` so focus can land there. Keep from v2, which already had this link; restyle it in the Monograph tokens and confirm it is first in tab order on every route, including the 404 page.
2. Removed routes and redirects (client side, via the route table in `src/App.tsx`, plus matching entries in `vercel.json` and `public/_redirects` so a hard refresh also lands correctly):
   - `/experience` redirects to `/about#experience`. The Experience content now lives as a section of About (see section 2.5).
   - `/skills` redirects to `/expertise`.
   - `/certifications` redirects to `/expertise#certifications`.
   - `/proof` has no redirect, because no single page replaces it. Every link that pointed at `/proof` in v2 must be updated to the page that now holds that evidence: CSCB evidence links go to `/about#cscb`, the YesWeHack recognition links go to `/about#experience`, and the PenTrix evidence links go to `/projects/pentrix-vulnlab`. A visitor who still lands on `/proof` gets the branded 404 page (see section 6.3), never a silent redirect to home.
3. The old v2 `NAV_LINKS` list (eight items) is replaced by the five item list in section 1.3. The `DETAIL_ROUTES` map in `src/data.ts` is kept and extended with the Security-Books detail route, so cards and search resolve detail links from the same map.

### 1.7 Page header pattern for supporting pages

1. Every supporting page opens with the same chapter header: a mono catalogue line in JetBrains Mono 500, 13px, muted colour, then the page title in Archivo 700 at the handoff size (clamp(2.25rem, 4.5vw, 3.5rem), line height 1.02), then one lead sentence in Body large (Instrument Sans 400, 18px, line height 1.65). A 1px accent rule sits above the handoff line. This accent rule is one of the exactly three accent uses on the site.
2. Catalogue numbers follow the site order in `docs/DESIGN_SYSTEM.md` section "Layout rules": Home 01, Projects 02, About 03, Expertise 04, Research 05, Contact 06. The mono line reads, for example, "03, About". Privacy and Terms use the mono line "Legal" with no number, and the 404 page uses "404" with no number, because they sit outside the chapter sequence.
3. Change from v2: the v2 shared page hero (a coloured rule, a pill kicker, a title with the topic highlighted in a marker span, one sentence) is not reused in any form. The Monograph header above replaces it on every supporting page.
4. One `h1` per page, which is the page title in the header. Sections below it use `h2`, subsections `h3`, in order, with no skipped levels.

---

## 2. About page (`/about`)

### 2.1 Purpose and block order

Purpose: answer who he is, where he is, and what he is looking for, in short, verifiable lines. Blocks appear in exactly this order:

1. Name and portrait plate (section 2.2).
2. Location, study status, work sought, availability, CV download (section 2.3).
3. Work authorisation placeholder (section 2.4).
4. Timeline, each item linking to its evidence (section 2.5, first table).
5. Experience section, the three roles merged from v2 `/experience` (section 2.5, second table).
6. The PenTrix section (section 2.6).
7. CSCB evidence plate, the three photograph story (section 2.7).

Change from v2: the v2 About page had an Education section (three entries naming institutions), a Now section (three cards, including an Amsterdam card and a research applications card carrying a decision date), and three paragraphs that named an institution. The Education section is removed as a section; study status is now one plain words block (section 2.3). The Now section is removed entirely; its Amsterdam content lives only on `/research`, and its research applications content becomes the generic line on `/research` (see section 4). No paragraph on this page names an institution.

### 2.2 Name and portrait plate

1. The page title is his name, "Muhammad Izaz Haider", as the `h1`. The lead sentence under it is the proposed public copy from the audit: "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had."
2. The profile portrait is set as a plate on About, in the left column of a two column layout on desktop (portrait column, text column), stacking above the text on phones. Plate treatment, per `docs/DESIGN_SYSTEM.md`: 1px line frame, 2px radius, no shadow, surface ground behind it.
3. Explicit dimensions: intrinsic size 800 by 800, square, `width="800"` and `height="800"` in the markup, `aspect-ratio: 1 / 1`, `object-fit: cover`. Loading is eager (`loading="eager"`, `fetchpriority="high"`), because the portrait sits above the fold on this page. Change from v2: v2 loaded the same image lazily on About, which delayed the largest paint. That is fixed here.
4. Format: WebP or AVIF as the primary source with the PNG as fallback, via `<picture>`. The source file is the v2 `public/images/profile.png` (800 by 800, 806 KB unoptimised). The build must compress it below the v2 size and must verify the converted file renders before handover; the PNG stays as the fallback, not as the only source. Alt text: "Portrait of Muhammad Izaz Haider".
5. Figure note: a short mono line beside the plate on desktop and above it on phones, stating what is shown and what happened, in the Monograph figure note style: "Portrait of Muhammad Izaz Haider. His own photograph, used on About only."

### 2.3 Location, study status, work sought, availability, CV download

1. Location: one line, city and country only: "Sijsele-Damme, Belgium". No street address, no postal code, no origin address. The transcript origin address must never appear on this page or anywhere on the site.
2. Study status, in plain words, without letting education dominate: two short paragraphs, using the proposed public copy from the audit, with the institution name removed:
   - "My first year closed at 60 out of 60 credits on the first attempt, and I placed first in Web at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write-ups."
   - "Now I am going deep on the defensive side too: digital forensics, reverse engineering, and malware analysis. The goal is the same on both sides: understand the system, find the weakness, and make it stronger."
   - A grades line follows, in his own public wording, as v2 already carried it: "18/20 in Programming, Computer Architecture and OS, and Web Backend. 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers, and Networks." This line is a grades line, not a bio line. No GPA figure appears on this page. If a GPA is ever shown in a structured field elsewhere, it uses only 16.74/20 (weighted) or 16.58/20 (unweighted), and never in a bio line.
   - The study status block states the expected graduation plainly: "Second-year BSc Cybersecurity student in Belgium, expected graduation June 2028." It does not list earlier schooling by institution, and it does not carry an education card grid.
3. Work sought, one line: "Offensive security internships, junior pentesting roles, and research placements."
4. Availability, as approved, in his own wording: "Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium." This wording is published exactly as written. The overlap between Jul to Sep 2027 and his spoken-for summer is flagged in the audit and is not "fixed" by editing the wording; only he may change it.
5. CV download: a secondary button (1px ink border, transparent ground, ink text, same padding and radius as the primary button) reading "Download my CV (PDF, 8 KB)", linking to `/files/Muhammad_Izaz_Haider_CV.pdf` with the `download` attribute. The CV is the sanitized v2 PDF, 8,011 bytes, 2 pages. No other CV file is linked anywhere on the site.

### 2.4 Work authorisation placeholder

1. Directly under the availability line, the page carries a clearly marked placeholder block for work authorisation wording. The block is visible in the build, so Phase 7 cannot ship the page without noticing it, and it is styled as a placeholder, not as final copy: a surface card with a 1px line border, a mono label reading "Placeholder, wording to be approved", and body text reading "Work authorisation: exact wording to be approved by Muhammad Izaz Haider before this line is published."
2. No line about work authorisation is invented, implied, or paraphrased anywhere else on the page. The placeholder is the only place the topic appears, and it must still read as a placeholder at handover. The Phase 7 checklist (section 10) treats an unapproved placeholder as a blocking item, not as a cosmetic note.

### 2.5 Timeline and experience

**Timeline.** Four items, in this order, each with its date, one line of text, and a link to its evidence. The timeline is a ruled list (1px hairline between items, mono date on the left, text on the right), not a card grid.

| Item | Date | Evidence link |
|---|---|---|
| Bug bounty hunter, YesWeHack | Feb 2026 to present | `/expertise#bug-bounty` (the bug bounty group) and the recognition plate in the Experience section below |
| Junior DevSecOps and AI Security Engineer, Damno Solutions | Nov 2025 to Jun 2026 | `#experience` (the role on this page). Always past tense: the role ended. |
| Founder of The PenTrix | Self founded, ongoing | `/projects/pentrix-vulnlab` and `#pentrix` (the section below) |
| CSCB 2026 placement | 2026 | `#cscb` (the evidence plate on this page): first place in Web, Junior division; third overall Junior; 26th of 806 nationally; 26 flags solved |

**Experience section** (`id="experience"`). The three roles merged from v2 `/experience`, kept in the v2 order, each with period, location, and evidence bullets. The v2 `ROLES` data is the source; only the styling changes.

| Role | Period and location | Evidence bullets (v2 wording, kept) |
|---|---|---|
| Bug Bounty Hunter, YesWeHack | Feb 2026 to Present. Remote, part time. | Responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting. "35 reports submitted to date, 3 rewarded, by my own count, with quarterly recognition for performance." The count appears here once, with the "by my own count" qualifier, and nowhere else on the site. No programme name, no report title, no ID, no endpoint, no reward amount appears with it. |
| Founder and Offensive Security Researcher, The PenTrix | Self founded. Tutorials, tools, and roadmaps. | Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the PenTrix platform, and Security-Books. Every project ships with a write-up that explains the method, not just the result. |
| Junior DevSecOps and AI Security Engineer, Damno Solutions | Nov 2025 to Jun 2026. Remote, part time, 20 hours per week. Always past tense. | Delivered 13 vulnerabilities against a brief of 3 or more, and fixed 2 critical ones: remote code execution and SQL injection. Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote 1800+ lines of security documentation. No detail is added about the CBAM codebase beyond the CV bullets (its sector, size, and nature are unverified). |

Each role is a `<details>` style disclosure or a plain section with a heading, at the build's choice, but the three roles are all visible without interaction on desktop: the build must not hide evidence behind a collapsed control on the page whose job is to show experience. The v2 "What each role taught" closing block is kept, restyled, as three short lines: YesWeHack taught responsible disclosure on live programmes by category only; The PenTrix taught that teaching is the fastest way to learn a vulnerability properly; Damno Solutions taught security inside a real delivery pipeline, against a real brief. The section ends with the availability line and a primary button linking to `/contact`.

### 2.6 The PenTrix section (`id="pentrix"`)

1. Heading: "The PenTrix". Lead: "A self founded initiative with tutorials, tools, write-ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules."
2. Mission: "A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment."
3. Why it exists: "He wanted a lab that teaches the method, not just the exploit, with challenges, guidance, and a clear path from finding to fixing."
4. Technical focus, one line: "Web vulnerabilities, authentication and authorisation flaws, injection, and the surrounding tooling, built as an Express and SQLite application with 201 challenges across 29 modules."
5. His responsibilities, as a plain list: founder, lead developer, challenge designer, documentation author.
6. Flag wording, exactly this approved sentence, and nothing else about flag storage: "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags."
7. The section links to the repo only, never to a live deployment, and ends with a primary button: "Read the PenTrix-VulnLab story", linking to `/projects/pentrix-vulnlab`. It must not say the lab is deployed publicly, and it must not claim any user, download, or deployment count.

### 2.7 CSCB evidence plate (`id="cscb"`)

1. The CSCB placement is proved on this page with the three photograph story from v2 `Proof.tsx` (`CSCB_STORY`), using the preserved stepper pattern: one photograph shown at a time, Previous and Next buttons (real buttons, at least 44px, with visible text, not icon alone), a chapter list of the three titles, and a mono counter ("1 of 3"). The three photographs, with their v2 captions as figure notes, are:
   - "Web Junior 2026: first place. First in the Web category, Junior division. Web is where I started, and where I am strongest." (`cscb-web-first.png`, 1240 by 641)
   - "National board 2026: 26th of 806. 26th of 806 players nationally. 26 flags solved across the weekend." (`cscb-26th-place.png`, 1280 by 799)
   - "Solve breakdown 2026: 26 flags. Every flag earned the same way: read the app, find the flaw, prove it. No shortcuts, no guessing." (`cscb-solves-breakdown.png`, 1280 by 772)
2. The "only Pakistani at that rank" claim in the v2 caption for the second photograph is self-reported only. It is removed from the published figure note above. It may return only if he confirms it against the scoreboard.
3. The four image scoreboard gallery from v2 (`PROOF_GALLERY`) is not republished as a gallery on any supporting page. Its images stay in the repo as assets. The lightbox pattern itself is preserved as a component (Radix Dialog, see section 9) for use where a detail page needs it. This is a deliberate cut: About proves CSCB with the three photograph story, and a second gallery on the same page would repeat the same evidence.
4. The YesWeHack recognition is proved with one plate in the Experience section: the swag photograph (`yeswehack-swag.png`), compressed, with explicit dimensions, and the figure note "YesWeHack quarterly recognition swag, sent for bug bounty performance." The recognition email screenshot is not published on the page; it duplicates the same fact and its text is hard to read on a phone.
5. All proof images on this page are compressed (no 1.5 MB unoptimised PNG), served as WebP or AVIF with PNG fallback, given explicit width and height, and shown at a size where their text stays readable without pinching on a phone. Every plate carries a figure note beside it on desktop and above it on phones.

### 2.8 What must NOT appear on About

Full street address, phone number, date of birth, GPA in a bio line, skill percentages, the 12/20 Communication Skills figure (and no explanation of it, unless he approves that explanation), work authorisation wording beyond the placeholder in section 2.4, any institution name, any course code, any lecturer or professor name, any bounty programme name, report title, ID, endpoint, or reward amount, any testimonial or employer endorsement, any "looking for an internship" banner, any "give me a chance" line, any skill count, any hardcoded GitHub star or repo count.

### 2.9 About metadata

Title: "About | Muhammad Izaz Haider". Description: "Penetration tester and security tool builder in Sijsele-Damme, Belgium. Bug bounty hunter since February 2026, founder of The PenTrix, CSCB 2026 first place in Web, Junior division." Path: `/about`. Open Graph image: the one composed plate (1200 by 630, see section 6.4). No institution name appears in the title, description, or page copy.

---

## 3. Expertise page (`/expertise`, rewrites v2 `/skills`)

### 3.1 Purpose and structure

1. Purpose: show what he can do, grouped by evidence, each group linked to the project or role that proves it. Route: `/expertise`. The v2 route `/skills` redirects to it (see section 1.6). The v2 route `/certifications` is merged into this page as a section (see section 3.3).
2. Page header: catalogue line "04, Expertise", title "Expertise", lead sentence: "No percentages. Each group carries the evidence for it, and a link to the project or role that proves it."
3. Groups appear in audit evidence order, one per chapter, each as a section with an `h2` carrying the group name, an anchor id, two or three lines on what it covers, a "Tools used" line, and a "Proved by" link. No group appears without at least one linked proof. No group carries a percentage, a bar, a count, or a "45+ skills" style total.
4. Change from v2: v2 grouped 26 skills into three broad groups (Offensive security, Defensive security, AI security and automation) in tables with a "Skill" and "Used in" column, plus a skills tree diagram as the lead. The three broad groups are replaced by the nine evidence groups below. The table format is replaced by prose groups, because a table of skill names reads as inventory, while a group with two or three lines of coverage plus a proof link reads as a claim with its evidence.
5. The skills tree diagram (`/diagrams/skills-tree.html`) is kept only on one condition: it is rethemed to the Monograph tokens (paper ground, ink lines, oxblood used only for the single highlighted path) and given a text equivalent beside it, which is the nine group descriptions on this page. If the retheme is not done in Phase 7, the diagram is omitted and the groups stand alone. The diagram is never the lead element; the first group is. Its iframe keeps the v2 embed pattern (`?embed=1&theme=light|dark`, theme synced live), with an "Open the diagram in a new tab" fallback link and a text equivalent, and it loads lazily because it sits below the first groups.
6. Soft skills are one plain line at the foot of the page, in his own words, with no proof claimed: "How I work: problem solving, team leadership, communication, critical thinking, adaptability, time management." No emoji, no elaboration, no claim that any item is proved.

### 3.2 The nine groups, in audit evidence order

| # | Group (anchor) | What it covers (two or three lines) | Tools used | Proved by (link) |
|---|---|---|---|---|
| 1 | Web application penetration testing (`#web-pentesting`) | Finding flaws in web applications by reading the app, testing its inputs, and proving each finding with a working exploit, then explaining the fix. Strongest evidence on the site: a national first place in the Web category and a teaching lab built around the same flaw classes. | Burp Suite, OWASP ZAP | `/projects/pentrix-vulnlab`, `/about#cscb` |
| 2 | Bug bounty hunting and responsible disclosure (`#bug-bounty`) | Responsible disclosure on live programmes since February 2026, reported by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting. Categories only, never a programme name, report title, ID, endpoint, or reward amount. | Burp Suite, OWASP ZAP | `/about#experience` (YesWeHack role) |
| 3 | Vulnerability assessment and secure code review (`#vulnerability-assessment`) | Assessing a real codebase and a real delivery pipeline against a brief, reporting each vulnerability with its impact, and fixing the critical ones. | GitLab CI/CD, manual code review | `/about#experience` (Damno Solutions role) |
| 4 | DevSecOps and CI/CD security (`#devsecops`) | Building security into the delivery pipeline: CI/CD security pipelines and the documentation that lets a team run them. | GitLab CI/CD | `/about#experience` (Damno Solutions role) |
| 5 | Mobile security (`#mobile-security`) | Static analysis of Android apps and dynamic analysis with Frida, plus reverse engineering of app behaviour. Presented as demonstrated tooling plus coursework, not as a completed professional mobile role. | APK Security Pipeline (own tooling), Frida, apktool, jadx, androguard | `/projects/apk-security-pipeline`, `/projects/ai-terminal-x` (archive, for the VulnNotes team split, see note below) |
| 6 | Digital forensics (`#digital-forensics`) | Filesystem recovery and forensic analysis, labelled clearly as coursework in progress, not as completed forensic expertise. Course labs complete for Labs 03 and 04, Lab 05 in progress at the last record, Lab 06 study guide built; ext filesystem recovery work recorded. | Sleuth Kit tooling (fls, istat) as used in the labs | `/about` (study status block). No project detail page proves this group yet, so the link goes to the study status that states the position honestly. |
| 7 | Linux and server security (`#linux-server-security`) | Linux as a daily driver, server security labs, and Windows Server security labs including Active Directory work. Presented as labs plus tooling, not as production administration experience. | Linux, PowerShell, Windows Server | `/projects/powershell-academy` |
| 8 | AI security and LLM integration (`#ai-security`) | LLM integration and retrieval augmented generation in security tooling, and prompt engineering for terminal and security tasks. Thinner than the offensive security dimension, so it supports rather than leads, and no AI security claim outruns the evidence. | Python, Gemini, retrieval tooling | `/projects/ai-terminal-x`, `/projects/agentarsenal` (archive) |
| 9 | Network security and recon (`#network-security`) | Reconnaissance and network assessment: subdomain enumeration, port scanning with CVE correlation, and Nmap automation for active and passive recon. | Nmap, Sub-Hunter, X-Recon, Intel-Scan | `/projects` (archive entries for the recon tools) |

Notes on the table:

- Group 5, VulnNotes: VulnNotes has no public repo and no detail page, so it is not the "Proved by" link for mobile security. The APK Security Pipeline is the proof. VulnNotes is named in the group text only as coursework: "Mobile Security coursework (VulnNotes, group project; Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts)." The team split is named, as the audit requires.
- Group 6 is the only group whose proof link goes to a page rather than a project. That is deliberate and must be visible: the group carries the label "Coursework in progress" in its heading line, in mono, so no visitor reads it as completed expertise.
- Reverse engineering and malware analysis is not a tenth group. The audit marks it experimental or in progress. It appears only as a plain words line on About ("going deep on the defensive side"), never as an Expertise group and never as a claimed capability. The v2 Skills table listed "Malware analysis: course work in progress" as a skill row; that row is removed, not carried over.
- Tools lists name only tools evidenced by a repo, a role, a certificate, or a transcript grade. No tool is listed because it appears on a CV alone without such evidence. Git and GitHub appear as tools inside groups where the work used them (for example group 1 and group 8), with no repo count attached: the count is fetched live or omitted, never hardcoded.
- Every group link is a real link to a page that exists in the route table. If a linked project is cut in a later phase, its group link must be updated in the same change, so no group ever points at a missing page.

### 3.3 Certifications (`id="certifications"`)

1. Certifications are a named list inside Expertise, not a separate page. Heading: "Certifications". Lead: "Named certifications only. Nothing counted, nothing estimated."
2. The featured list shows eight certifications, each as one ruled row: name in Instrument Sans 500, issuer in muted mono below it. No cards, no icons, no total count, no count button, no "View all" control.

| Certification | Issuer |
|---|---|
| Certified Network Security Practitioner (CNSP), with Merit | The SecOps Group |
| Application Security for Developers and DevOps Professionals | IBM |
| Web Application Security Testing with OWASP ZAP | Coursera |
| Linux 101 | TCM Security |
| Web App Security Testing with Google Hacking | CodeRed |
| Certified Ethical Hacking v12 (CEH), course certificate | LearnKartS |
| CompTIA PenTest+ Specialization, course | Packt |
| AI Agents and Agentic AI | Vanderbilt University |

3. Wording rule, carried from the v2 refine pass: the two vendor named entries read as course certificates ("course certificate", "course"), with the issuer shown, so they do not read as the vendor exams. The build must not shorten them back to the bare vendor titles.
4. The two open items are not in the featured list. They appear only in a separate, clearly marked block at the foot of the certifications section, in muted mono, not as rows, not counted, and not featured prominently:
   - "Confirmation pending: Google AI Essentials (Google). Listed in the sanitized CV; no certificate found yet. Not featured above until confirmed with evidence."
   - "Confirmation pending: Advanced Python Scripting (issuer unknown). No issuer found in any source checked. Not featured above until the issuer is confirmed with evidence."
5. In progress, clearly separated from held certifications, in its own block headed "In progress, not held": "eJPT and eWPT through INE Security. Courses studied, exams not taken. Not held yet." This block is visually distinct from the held list (a hairline above it and a mono label), and it is never merged into the held list, never counted with it, and never shown in a search result as a held certification.
6. The home page JSON-LD `hasCredential` list in `index.html` must match this section exactly: the eight held certifications, plus the two pending items only if he confirms them, and never a count. The v2 JSON-LD listed ten credentials including both pending items as held; that is fixed here.

### 3.4 What must NOT appear on Expertise

Skill percentages, skill bars, any "45+ skills" count, any skill without evidence, any total count of certifications, any count button, any featured placement for Google AI Essentials or Advanced Python Scripting, eJPT or eWPT listed as held, malware analysis or reverse engineering presented as completed expertise, any hardcoded star or repo count, any testimonial, any institution name, any course code.

### 3.5 Expertise metadata

Title: "Expertise | Muhammad Izaz Haider". Description: "What he can do, grouped by evidence: web application penetration testing, bug bounty hunting, DevSecOps, mobile security, digital forensics, Linux and server security, AI security, and network security. No percentages, each group linked to its proof." Path: `/expertise`. Open Graph image: the one composed plate.

---

## 4. Research page (`/research`, new route)

### 4.1 Purpose and block order

Purpose: show direction and ambition honestly, without overstating output. Blocks appear in exactly this order:

1. Research interests (section 4.2).
2. Assigned international project (section 4.3).
3. Research internship applications, generic line (section 4.4).
4. Writing note (section 4.5).

Page header: catalogue line "05, Research", title "Research", lead sentence: "Direction and ambition, honestly stated. No published output is claimed, because none exists yet."

### 4.2 Research interests

One short statement, two or three lines: "My research interests are offensive security, AI security, and learning tools: finding flaws in web applications, understanding how AI systems can be attacked and defended, and building the labs and tools that teach others to do the same." The statement names interests, not output. It must not claim a research area he has no work in, and it must not present coursework as research output.

### 4.3 Assigned international project

1. Heading: "International project, Amsterdam". The block states, in plain lines with a mono meta line for the facts:
   - "Security Summer Camp, Amsterdam, 28 June to 2 July 2027, 10 ECTS, group of six."
   - "Planned role: security specialist (reverse engineering and forensics tasks) and documentation lead."
   - "Status: assigned, planned, not performed." The words "planned, not performed" appear in the block itself, in the same size as the role line, not as a footnote.
2. The block names no institution, no course code, and no other group member by name. Only his planned role is named, because the other members have no recorded consent to appear on his public portfolio, and the brief for this page asks for the group size, not the roster.
3. Finality: the project was assigned on 5 November 2026 and the change window closed on 11 November 2026. Phase 7 must confirm the final status before publishing this block. If it is confirmed final, the status line reads "Status: assigned and confirmed." If it is still unconfirmed at build time, the status line stays "Status: assigned, planned, not performed." The build must not publish "confirmed" without that confirmation, and must not publish a change of project without his word.
4. The block links to `/about#pentrix` for the PenTrix background that supports the security specialist role, and to `/contact` for anyone who wants to discuss the project. It does not link to any programme page, because no programme is named.

### 4.4 Research internship applications, generic line

One line, exactly this shape: "Research internship applications for summer 2027 have been submitted." No programme is named, no submission number is given, no deadline is stated, no decision date is stated, and no outcome is claimed. The line sits in its own short block, not inside the Amsterdam block, so the two facts cannot be read as one.

### 4.5 Writing note

Heading: "Writing lives in the projects". Text, two lines: "I have no standalone publications. My write-ups live inside the project documentation: the PenTrix-VulnLab docs, the PowerShell Academy lessons, and the Security-Books curation." Links: "PenTrix-VulnLab docs" to `/projects/pentrix-vulnlab`, "PowerShell Academy lessons" to `/projects/powershell-academy`, "Security-Books curation" to `/projects/security-books`. No Writing page is created. If a real article is published later, this note is the place that gains a link to it; the build does not invent one now.

### 4.6 What must NOT appear on Research

Any published paper, talk, or journal article claim; any application submission number, deadline, or decision date presented as a portfolio fact; any programme name; any institution name; any claim that the Amsterdam project has been performed; any other group member named; any testimonial; any count of applications.

### 4.7 Research metadata

Title: "Research | Muhammad Izaz Haider". Description: "Research interests in offensive security, AI security, and learning tools, plus the assigned international project in Amsterdam, 28 June to 2 July 2027." Path: `/research`. Open Graph image: the one composed plate.

---

## 5. Contact page (`/contact`)

### 5.1 Purpose and block order

Purpose: make contact take one tap, and make it work if JavaScript or a form fails. Blocks appear in exactly this order:

1. Email address as a visible, copyable link (section 5.2).
2. GitHub and LinkedIn links (section 5.2).
3. CV download (section 5.2).
4. Location and availability (section 5.2).
5. Contact form, with the email link beside it (section 5.3).
6. FAQ accordion (section 5.4).

Primary action: email him. The email link is the first and largest contact route on the page; the form is second.

### 5.2 Contact details

1. Email: a visible link reading exactly "mizazhaiderceh@gmail.com", linking to `mailto:mizazhaiderceh@gmail.com`, in Title small (Archivo 600, 22px) with a Phosphor EnvelopeSimple icon (20px, regular weight, ink colour) before it. Beside it, a text button "Copy" using the existing `useCopy` behaviour: on tap it copies the address and reads "Copied" for 2 seconds, then returns to "Copy". The button is never an icon alone. The address is never shown as an image, never obfuscated, and never replaced by a "click to reveal" control.
2. GitHub: a link reading "github.com/mizazhaider-ceh", linking to `https://github.com/mizazhaider-ceh`, with the SVGL GitHub mark saved locally (never hotlinked, never recoloured, light or dark variant as the theme needs) or a Phosphor GithubLogo icon in ink, at the build's choice, recorded in the build notes. Target `_blank`, `rel="noreferrer"`.
3. LinkedIn: a link reading "linkedin.com/in/muhammad-izaz-haider-091639314", linking to `https://www.linkedin.com/in/muhammad-izaz-haider-091639314`, same mark rule as GitHub, target `_blank`, `rel="noreferrer"`. The link text wraps cleanly at 375px (break-all on the text span only, as v2 already did) and never overflows the container.
4. CV download: the same secondary button as About, "Download my CV (PDF, 8 KB)", linking to `/files/Muhammad_Izaz_Haider_CV.pdf` with the `download` attribute.
5. Location: one line, city and country only: "Sijsele-Damme, Belgium".
6. Availability, as approved, in his own wording: "Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium."
7. Layout: two columns on desktop (details on the left, form on the right), one column on phones with the details first. The email link is the first item in the details column at every width.

### 5.3 Contact form (keeps the v2 behaviour)

1. Keep from v2, restyled only: the `ContactForm` component, its fields, its validation, its four states, and its Formspree wiring. Fields, in order: Name (text, `autoComplete="name"`), Email (email, `autoComplete="email"`), Message (textarea, 3 rows). Labels are visible above each field, in Instrument Sans 500. Placeholders are hints only, never a substitute for the label.
2. Client side validation, exactly as v2: Name required ("Enter your name."), Email required and format checked ("Enter an email address." / "That email address does not look right. Check it and try again."), Message required ("Write a message first."). Inline error text appears under the field in accent text colour, with `aria-invalid="true"` and `aria-describedby` pointing at the error element, which carries `role="alert"`. The form uses `noValidate` so the browser does not show its own messages instead.
3. States, exactly as v2:
   - Idle: the form as described, submit button reading "Send message" (primary, solid ink button).
   - Sending: the button is disabled and reads "Sending". No other change. No skeleton, no spinner animation.
   - Sent: the form is replaced by a status block with `role="status"`: a check mark in ink (Phosphor Check, never a coloured wash), the heading "Message sent. Thank you.", and the line "I will reply soon." The form is reset.
   - Error: an error paragraph with `role="alert"` reading "Sending failed. Check your connection and try again, or email me directly." Change from v2: the error paragraph must include a real mailto link on the words "email me directly", linking to `mailto:mizazhaiderceh@gmail.com`. In v2 the error text named email but carried no link, so a visitor whose send failed had to scroll back up to find the address. The email link beside the form (section 5.2) is the second route; the link inside the error state is the third, and it is the one that matters in the moment of failure.
4. Submission: POST to the Formspree endpoint stored in `CONTACT.formspree` in `src/data.ts` (`https://formspree.io/f/xldjdnlr`), with the `Accept: application/json` header and the form data as the body. A response with `res.ok` true is Sent; any other response, or any network error, is Error. The endpoint value lives in `src/data.ts` only, never hardcoded in the component.
5. Styling, Monograph: inputs are paper surface, 1px line border, radius 2px, Instrument Sans 400, 16px, 14px padding. Focus: 2px accent outline, offset 2px. Error state: the message text is in accent text colour and the field carries a 1px accent border, never a red wash and never a red background. The form sits in a surface card (1px line border, radius 2px, no shadow, padding 32px), as v2 already did.
6. The form is never the only route. The email link in section 5.2 is visible on the same screen as the form at desktop width, and directly above it on phones. A visitor with scripting off sees the email link, the GitHub and LinkedIn links, and the CV download, and the form itself is absent rather than broken: the form is rendered by the app, so without scripting there is no dead form on the page.

### 5.4 FAQ accordion (6 questions from v2, reviewed for accuracy)

1. Component: the shadcn Accordion primitive (Radix Accordion underneath), restyled in the Monograph tokens, replacing the native `<details>` elements v2 used. One shared Accordion component, not a per page copy. Behaviour: one item open at a time, keyboard correct (Tab to the trigger, Enter or Space to toggle, ArrowUp and ArrowDown to move between triggers), `aria-expanded` on each trigger, focus visible with the standard 2px accent outline. The accordion sits in a two column grid on desktop (as v2 did) and one column on phones.
2. The six questions are kept verbatim from v2 `FAQS`. The answers are reviewed as follows. Where an answer is changed, the reason is stated.

| # | Question (kept verbatim) | Answer (reviewed) |
|---|---|---|
| 1 | What kind of work are you looking for? | Kept as v2: "Offensive security internships, junior pentesting roles, and research placements. I am available Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium." Accurate against the audit. |
| 2 | When are you available? | Kept as v2: "For a 3 month internship: Feb to Apr 2027 and Jul to Sep 2027. I am open to junior roles and research from 2028, when I graduate." Graduation June 2028 is verified. |
| 3 | Do you do bug bounty? | Changed. New answer: "Yes, on YesWeHack since Feb 2026. I do responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting." Removed from the v2 answer: the handle (an identifier) and the report counts. The counts appear once on About, with the "by my own count" qualifier; the FAQ is the short answer and carries the role, the start date, and the categories only. |
| 4 | What is The PenTrix? | Kept as v2: "A self founded initiative with tutorials, tools, write-ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules." Accurate against the audit. |
| 5 | Can I see your CV? | Changed. New answer: "Yes. Download my CV from the contact details on this page, or ask me for it by email." The v2 answer said "from the contact section below", which is wrong on this layout: the CV link sits in the details column beside the form, above the FAQ, not below it. |
| 6 | How do I reach you? | Changed. New answer: "Email mizazhaiderceh@gmail.com, or use the contact form on this page. My GitHub and LinkedIn are linked on this page and in the footer." The v2 answer said "linked in the navigation", which is false in v3: the nav carries no social links. |

3. The FAQPage JSON-LD schema is kept, built from the same `FAQS` data the accordion renders (module level stable object, as v2 did, so `usePageMeta` does not re-run on every render), and it must carry the reviewed answers above, not the v2 answers. If an answer changes again, the JSON-LD and the visible answer change in the same edit, because both read the same data.

### 5.5 What must NOT appear on Contact

Phone number, street address, a form that submits without confirmation (the Sent state is the confirmation), a form as the only route, any social link in the top bar, any "looking for an internship" banner, any availability wording other than the approved line.

### 5.6 Contact metadata

Title: "Contact | Muhammad Izaz Haider". Description: "Get in touch about offensive security internships, junior roles, or research placements. Email mizazhaiderceh@gmail.com, or use the contact form." Path: `/contact`. FAQPage JSON-LD as in section 5.4. Open Graph image: the one composed plate.

---

## 6. Privacy, Terms, 404

### 6.1 Privacy (`/privacy`)

1. Short privacy policy, two paragraphs, in a centred reading column (measure capped at 68ch, columns 2 to 11 on desktop, as the reading pages use). Mono catalogue line "Legal", title "Privacy", lead: "This site collects no data."
2. Paragraph 1: "This site sets no analytics cookies and stores nothing about its visitors. The theme choice (light or dark) is saved in your own browser only, so the site remembers it on your next visit."
3. Paragraph 2: "Messages sent through the contact form are handled by Formspree and delivered to Muhammad Izaz Haider by email. Nothing else is sent anywhere."
4. Keep from v2, with the lead sentence unchanged. The policy must not gain a cookie banner, a consent control, or a tracking disclosure, because there is nothing to consent to. If analytics is ever added, this page is updated in the same change.
5. Metadata: title "Privacy | Muhammad Izaz Haider", description "This site collects no data. Messages sent through the contact form are handled by Formspree.", path `/privacy`.

### 6.2 Terms (`/terms`)

1. Short terms, two paragraphs, same reading column as Privacy. Mono catalogue line "Legal", title "Terms", lead: "The content of this portfolio is the work of Muhammad Izaz Haider."
2. Paragraph 1: "All projects, screenshots, and writing on this site are the work of Muhammad Izaz Haider, unless a page says otherwise. The CSCB and YesWeHack screenshots are his own."
3. Paragraph 2: "PenTrix-VulnLab is a deliberately vulnerable lab for learning. It is linked as a repository only and must not be deployed publicly."
4. Keep from v2, with both paragraphs unchanged. No terms of use for the lab itself are added here; the lab's own repo carries its terms.
5. Metadata: title "Terms | Muhammad Izaz Haider", description "The content of this portfolio is the work of Muhammad Izaz Haider. Screenshots are his own.", path `/terms`.

### 6.3 404 (`*`, catch-all)

1. Branded 404 page, centred (the 404 page is one of the only two centred elements on the site, the other being the final Contact chapter closing line). Mono catalogue line "404", title "This page does not exist", lead: "The link may be old, or the page may have moved. The portfolio is one click back."
2. Two links, as v2 had them: "Back home" (primary, solid ink button, to `/`) and "See my work" (secondary, 1px ink border button, to `/projects`). Both are at least 44px tall. No search box is embedded on the 404 page; the search button in the top bar is the search route from here.
3. Metadata fix (the v2 bug): v2 called `usePageMeta` with title and description only, so canonical and Open Graph stayed on the home values on a 404. In v3 the 404 page must call `usePageMeta` with its own title, its own description, and the attempted pathname as the path, so `og:url` reflects the requested URL, and it must set `robots` to `noindex`. It must not set the canonical to the home URL. If the implementation cannot produce a per-URL canonical, it omits the canonical tag on the 404 page rather than pointing it home. `og:title` and `og:description` carry the 404 values, not the home values. `og:image` is the one composed plate, not the home hero image.
4. The static host fallback `public/404.html` is kept and restyled in the Monograph tokens (paper ground, ink type, accent rule, same two links, same title and lead). It carries no home canonical and no home Open Graph values. It is a plain HTML file with no scripting dependency, so it renders even if the app bundle fails.
5. Metadata: title "Page not found | Muhammad Izaz Haider", description "This page does not exist. Back to the portfolio of Muhammad Izaz Haider, penetration tester and cybersecurity student.", path: the attempted pathname (see item 3).

### 6.4 Shared metadata rule for supporting pages

1. Every supporting page calls `usePageMeta(title, description, path)` with its own path, so title, description, canonical, `og:url`, `og:title`, `og:description`, `twitter:title`, and `twitter:description` are all per page. `og:type` stays `website` on every page. `og:image` and `twitter:image` are the one composed plate on every page: name, role line, one verified fact, paper ground, ink type, accent rule, 1200 by 630, generated from the Monograph tokens, not a screenshot of the hero. Change from v2: v2 kept `og:image` and `twitter:image` on the home image on every route; that is fixed here.
2. The home Person JSON-LD in `index.html` must match the Expertise certifications section (see section 3.3, item 6) and must not carry a GPA, a birth year other than 2007, or any institution name in public copy beyond what he explicitly approves. The v2 JSON-LD birth year is already correct (2007); the build must not reintroduce the wrong year from the v1 site.

---

## 7. Footer as colophon

### 7.1 Content, in order

1. The footer is a colophon, not a second navigation. It sits on every page, below `<main>`, with a 1px hairline above it in the line colour. Its content, in order:
   - Navigation: the five items (Projects, About, Expertise, Research, Contact) plus Privacy and Terms, as text links in Instrument Sans 500, 15px, muted colour at rest, ink on hover, each with a tap target of at least 44px tall.
   - Location: one line, city and country only: "Sijsele-Damme, Belgium".
   - Social links: GitHub (`https://github.com/mizazhaider-ceh`) and LinkedIn (`https://www.linkedin.com/in/muhammad-izaz-haider-091639314`), with SVGL marks saved locally, never hotlinked, never recoloured, light or dark variant as the theme needs. Each link has a visible text label beside its mark ("GitHub", "LinkedIn"), never an icon alone. Target `_blank`, `rel="noreferrer"`.
   - Email: the visible link "mizazhaiderceh@gmail.com" (`mailto:mizazhaiderceh@gmail.com`).
   - A short colophon note in muted Body small: "CSCB and YesWeHack images are my own screenshots. This site collects no data. Messages sent through the contact form are handled by Formspree."
   - "Created by Muhammad Izaz Haider" line, set small in JetBrains Mono 500, 13px, muted colour, with the copyright year beside it: "Copyright 2026 Muhammad Izaz Haider. Created by Muhammad Izaz Haider."
2. Layout: one column on phones (navigation first, then location, social links, email, note, created-by line), two columns on desktop (colophon text on the left, navigation on the right), inside the 1240px container with the page gutters. The created-by line sits at the foot of the left column, never centred, except that the footer as a whole follows the left aligned rule of the site.
3. A "Back to top" button is kept from v2: a real button reading "Back to top" with a Phosphor ArrowUp icon (14px, regular weight), at least 44px tall, placed at the end of the navigation list. It scrolls to the top of the page. Under reduced motion it jumps at once; otherwise it scrolls smoothly.
4. The footer carries `aria-label="Footer"`. Its navigation carries `aria-label="Footer"`.

### 7.2 What the footer must NOT contain

No newsletter band, no newsletter form, no testimonial band, no logo wall, no "trusted by" row, no social links in the top bar repeated as a second set of icons without labels, no CV download button (the CV lives in About and Contact), no availability line, no skill cloud, no second copy of the five item navigation as a duplicate menu with different labels.

---

## 8. Search (Ctrl+K, shadcn Command primitive)

### 8.1 Trigger and surface

1. Trigger: Ctrl+K (Windows and Linux) or Cmd+K (macOS) from anywhere on the site, plus the search button in the navigation (top bar on desktop, top of the mobile menu on phones, see sections 1.4 and 1.5). The palette is a modal dialog: shadcn Command (built on `cmdk`) inside a Radix Dialog, paper surface, 1px line border, radius 2px, no shadow. On desktop it is a centred palette, roughly 640px wide, near the top of the viewport. On phones it is full screen, with the same content and behaviour.
2. Focus management: on open, focus moves into the search input. On close, for any reason, focus returns to the control that opened it (the search button, or the previously focused element for a keyboard open). Escape closes the palette. Selecting a result navigates and closes the palette.
3. The palette is a JavaScript enhancement. With scripting off, the search button is absent and the navigation links remain the way to move around the site. The palette must never be the only way to reach a page.
4. Code splitting: the Command palette code (`cmdk` and the palette component) loads lazily on first open, via a dynamic import, so no page pays for it on first paint. The search index itself is built in memory on first open (see section 8.3), not fetched from the network.

### 8.2 What search covers

Results are categorised by type. The categories, in display order, are: Project, Project section, Command, Concept, Page, Resource. Each result carries a short snippet (one line, drawn from the source field, maximum 160 characters) and its destination (route, plus anchor where relevant). No result is shown without a destination.

| Category | Source data (the same data the pages render from) | What a result looks like |
|---|---|---|
| Project | `FEATURED_PROJECTS` and `MORE_PROJECTS` in `src/data.ts` (featured and archive), name, outcome, tags, strip | Title: project name. Snippet: the one line outcome. Destination: the detail route from `DETAIL_ROUTES` where one exists, else the repo link for archive entries with a repo, else `/projects` for entries with no public repo (VulnNotes). A result whose destination is an external repo is marked "External link" in mono beside it. |
| Project section | The nine template sections of each project detail page (Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links), taken from the detail page content data, not from a separate list | Title: "PenTrix-VulnLab, Decisions" (project name, then section name). Snippet: the first line of that section. Destination: the detail route plus the section anchor. |
| Command | PowerShell command strips and stage names from `src/data.ts` (`PS_STAGES`, project strips). The full 102 command set is included only if it is imported into this repo as structured data from the PowerShell Academy content model; until then the category shows only what `src/data.ts` holds, and the build must not invent a command list to fill it. Never from university material. | Title: the command text in JetBrains Mono. Snippet: the stage or project it belongs to, plus its one line note. Destination: `/projects/powershell-academy` plus the stage anchor, or the project detail page the strip belongs to. |
| Concept | Glossary terms from the structured content data, and the Expertise group names and certification names, all read from the same data the Expertise page renders from. A glossary term is included only if it exists as structured data in this repo; no term is typed into the search code by hand. | Title: the term. Snippet: its one line definition or its evidence note. Destination: `/expertise` plus the group anchor, or the glossary location if one exists as data. |
| Page | The five nav pages plus Home, read from the route table in `src/App.tsx` (the same source as the navigation) | Title: the page name. Snippet: its lead sentence. Destination: the page route. |
| Resource | `CONTACT` in `src/data.ts`: CV, GitHub, LinkedIn, email | Title: "CV (PDF)", "GitHub", "LinkedIn", "Email". Snippet: one line stating what it is ("Download the sanitized CV, PDF, 8 KB", "github.com/mizazhaider-ceh", and so on). Destination: the file or the external link (marked "External link" where it leaves the site). |

### 8.3 Index, matching, and highlighting

1. Index: built from the same structured content data as the pages (`src/data.ts` and the project content files), never from a separate hardcoded list that can drift. The build adds one module, `src/search.ts`, with a single function that reads the typed exports listed in section 8.2 and returns the index. If a project, group, certification, or command is added to `src/data.ts`, it appears in search with no second edit. If it is removed from `src/data.ts`, it disappears from search with no second edit. A hardcoded suggestion list is a defect, not a shortcut.
2. Matching: case insensitive, substring plus word start matching, over title, snippet, and tags. Typing filters as you type; there is no separate submit step. Results update on each keystroke. The index is small (tens of entries, not thousands), so filtering runs in memory with no debounce delay and no loading state.
3. Keyboard navigation: ArrowDown and ArrowUp move the active result, wrapping at the ends; Enter opens the active result; Home and End move to the first and last result in the list; Escape closes the palette. The active result is visible (accent outline, 2px, offset 2px, plus a surface background change) and is announced to assistive technology via `aria-activedescendant` on the input and `role="option"` on each result, inside a `role="listbox"`. The palette announces the result count in a polite live region: "N results".
4. Highlighting: the matching term inside each result title and snippet is wrapped in a `<mark>` element, styled with the accent-soft wash behind ink text, never by colour alone. The highlight must remain readable in both themes.
5. Result limits: at most 5 results per category are shown, with a mono count line under the category heading when there are more ("8 results in Projects, showing 5"). There is no "show more" control in Phase 7; the count line is enough, because the visitor can narrow the query.
6. Empty state: when the query is empty, the palette shows the guidance text and the five page links as browse links, with the heading "Search the portfolio". When a query has no matches, it shows "No results for [query]." followed by the guidance sentence, exactly: "Try PenTrix, PowerShell, or a command name". The guidance sentence is the same in both states. No "did you mean" suggestion is offered, because there is no data behind it.

### 8.4 What search must NOT do

No separate hardcoded suggestion list, no search over the removed `/proof` page, no result for a page that does not exist, no bounty programme name, report title, ID, endpoint, or reward amount in any snippet, no certification shown as held when it is in progress or pending, no hardcoded star or repo count in any snippet, no analytics event sent on search (the site collects no data), no search history stored.

---

## 9. Cross-cutting behaviour

### 9.1 Theme mechanism (kept exactly from v2)

1. Pre-paint script in `index.html`, `data-theme` attribute on `<html>`, one localStorage key, `meta theme-color` sync. The mechanism is kept exactly; only the token values change.
2. LocalStorage key: `portfolio-v2-theme`, values `light` or `dark` only. The key is not renamed. Renaming it would log every returning visitor out of their saved theme, and the audit forbids that without a deliberate decision. The pre-paint script validates the stored value against light and dark only; a missing or invalid value falls back to the OS `prefers-color-scheme` hint on first visit, then saves it, so later visits stay stable.
3. `meta theme-color` sync: `#F7F3EA` in the light theme, `#191817` in the dark theme. Change from v2: v2 used `#FAF9F5` and `#121316`. Both values change, in the pre-paint script in `index.html` and in the `useTheme` hook in `src/hooks.tsx`, in the same change. A mismatch between the two is a defect.
4. Dark theme is a night edition, not an inversion: ground `#191817`, surface `#221F1C`, ink `#F3EFE5`, body `#D5CFC2`, muted `#9C968B`, line `#37332C`, line-strong `#57503F`, accent `#D18A74`, accent-text `#E0A58F`, accent-soft `#3A211B`, code-ground `#121110`, focus `#D18A74`. Same grid, same type, same accent role (rare signal only). Every plate, diagram, code strip, and SVGL mark needs a dark variant check at 1440px and 390px (see section 10).
5. The theme switch is the single text button in section 1.4. The theme persists across pages via localStorage, as v2 already did. The `useTheme` hook in `src/hooks.tsx` is kept, with the theme-color values updated per item 3. The `DiagramFigure` iframe theme sync (a `MutationObserver` on the `data-theme` attribute, passing `?embed=1&theme=light|dark`) is kept, with the diagram files themselves rethemed to the Monograph tokens.

### 9.2 Performance budget

1. Largest contentful paint under 2.5 seconds, measured with PageSpeed Insights (mobile tab) after the first build. The budget is a target, not a measurement, until the first build proves it. Measured results replace these targets in the build notes after the first measurement.
2. Route level code splitting: every route loads via `React.lazy` (or the react-router `lazy` route form) with a `Suspense` fallback that renders nothing visible except the nav and footer, so no page ships the whole app. Change from v2: v2 shipped one 440.88 KB JavaScript bundle (126.53 KB gzip) with no code splitting, including the ChallengePanel, the lightbox, and all three tab browsers on every route. That is fixed here. The search palette code loads lazily on first open (see section 8.1, item 4).
3. Eager hero media: the About portrait is eager (see section 2.2, item 3). Every other image on supporting pages is lazy with explicit width and height. No image on a supporting page is the largest paint except the About portrait, and it is eager.
4. Lazy particle field init only when the hero is in view: the particle field exists only on Home. Supporting pages ship no particle field, no video, and no Three.js. Nothing on a supporting page initialises a canvas, a video, or a 3D runtime.
5. Device pixel ratio capped at 2, wherever a canvas or an image density choice is made. No image is served at more than 2x its displayed size.
6. Image weight: proof screenshots are compressed, WebP or AVIF with PNG fallback, explicit dimensions, and shown at a size where their text stays readable on a phone. The v2 `public/` folder was 6.7 MB with unoptimised PNGs; the rebuild must not carry that weight forward. No new image is added without explicit dimensions and a compressed format.
7. No analytics script, no tracking pixel, no external font request. All fonts are self hosted as WOFF2, `font-display: swap`, latin subset, vendored into the project: Archivo (variable, including the expanded width axis), Instrument Sans, and JetBrains Mono. The expanded axis must be verified in the vendored files at build time; if it is not there, the hero and handoff lines fall back to Archivo 700 at normal width with tighter tracking, and `docs/DESIGN_SYSTEM.md` must be updated to say so. Never fake expanded type with a horizontal scale transform.

### 9.3 Motion rules

1. Motion (`motion/react`) is the one animation library. CSS handles micro interactions only (button hover and press, link underlines, card lift, focus). No GSAP alongside it, no second runtime, no Three.js in the main bundle.
2. Animate transform and opacity only, never width, top, left, or box shadow on scroll. Durations, from `docs/DESIGN_SYSTEM.md`: control feedback (button, link, card lift, copy state) 160ms to 220ms, ease out; section entrances (handoff line, first block) 500ms to 760ms, ease out, stagger 45ms to 70ms, once, on entry; page transitions under 300ms, ease out, `AnimatePresence`, fade and 8px rise, content never delayed.
3. No fade in on scroll for every section. Only the handoff line and the first block of a chapter animate in; body copy and plates are visible by default. No scroll jacking, no pinned sections, no parallax on text, no random blinking, no tilt, no carousels, no timed tabs.
4. Reduced motion safety net: `MotionConfig reducedMotion="user"` plus the existing CSS reduced motion block, plus a 2 second safety net timeout that force reveals everything, so content can never stay hidden if an animation fails. Under `prefers-reduced-motion: reduce`, the video source is never attached on Home, the particle field is frozen, the magnetic pull is off, and every entrance renders at rest. The safety net timeout is the same mechanism v2 used for its tagline reveal; it is kept and extended to every animated entrance.
5. The mobile menu open and close, the accordion open and close, and the search palette open and close all use transform and opacity only, 160ms to 220ms, ease out. The FAQ accordion animation is the Radix Accordion height animation restyled in the Monograph tokens, or a transform and opacity transition if the height animation cannot be kept inside the transform and opacity rule; the build must not animate height with a second mechanism that fights the rule.

### 9.4 Accessibility floor

1. Visible focus on every interactive element: 2px accent outline, offset 2px, appearing instantly. Focus colour is `#7A2E25` in the light theme and `#D18A74` in the dark theme. No interactive element removes its focus outline. The v2 focus-visible ring is kept and re-tokenised; the mechanism does not change.
2. Contrast recheck: every text token is rechecked against the real rendered type in both themes, especially the muted text and the dark accent. Light muted `#6E6A61` is 4.87:1 on paper (AA, never below 13px, never for body copy); the darker fallback `#655F56` (above 5.5:1) is used if the render check finds the muted text thin. Dark muted `#9C968B` is 6.04:1 on the dark ground. Accent as text uses the accent-text tokens (`#6E231C` light, 9.88:1; `#E0A58F` dark, 8.40:1), never the raw accent token for text.
3. Real buttons and real tabs: every control that acts is a `<button>`, every tab set uses the shared accessible Tabs component with real tab semantics and arrow key navigation (this fixes the v2 audit gap where the three tab browsers used `role="tablist"` without `role="tab"`, `aria-selected`, `aria-controls`, or arrow key support). The FAQ accordion uses the shared Accordion component (see section 5.4). The lightbox uses Radix Dialog (see section 2.7 and `docs/DESIGN_SYSTEM.md`): focus moved in on open, returned to the thumbnail on close, Escape and arrow keys handled, caption as a figure note beside the image.
4. Alt text on every image, including the portrait (section 2.2), every proof plate (section 2.7), and every diagram fallback. Decorative marks (Phosphor icons, SVGL brand marks used as identification beside a text label) carry `aria-hidden="true"` and are never the only label.
5. Tap targets 44px minimum on every interactive element, on every page, at every width. No exceptions for icon buttons, pagination, or footer links.
6. No information by hover alone: every hover state (card lift, plate scale, title underline) has the same information available without hover, and on touch devices nothing is lost, because no hover state carries information.
7. Content visible with scripting off: entrances are an enhancement on visible content, never a gate. With scripting off, the pages render as plain paper pages with working links, the email link, and the CV download. The form, the search palette, and the mobile menu are absent rather than broken (see sections 1.5, 5.3, and 8.1).

### 9.5 No scripting fallback, stated plainly

1. The build must confirm, by disabling scripting in the verification browser, that every supporting page still shows its heading, its body copy, its links, and its footer, with no blank page and no hidden content. The mobile menu fallback is specified in section 1.5, item 6. The form fallback is specified in section 5.3, item 6. The search fallback is specified in section 8.1, item 3.
2. The `html.js` gating pattern is not used: no CSS rule hides content until a script adds a class. The pre-paint theme script in `index.html` sets only the `data-theme` attribute and the theme-color meta value; it never hides content.

---

## 10. What the Phase 7 build must verify for these pages (checklist)

Every item below is a pass or fail check, run after the first rebuild build, in both themes, before handover. The v2 verification log (`.verify/`) is the model; the sweep is re-run with the widths and checks below.

### 10.1 Routes and rendering

- [ ] Every route renders at 375px, 430px, 390px, 768px, and 1440px, in both themes: `/`, `/projects`, the 7 project detail pages, `/about`, `/expertise`, `/research`, `/contact`, `/privacy`, `/terms`, and the 404 page (by visiting an unknown path).
- [ ] No horizontal overflow at any of those widths, in either theme. The check is 0px of horizontal overflow, measured in the browser, not by eye.
- [ ] No console errors on any route, in either theme, including on route change, on theme switch, and on opening and closing the mobile menu and the search palette.
- [ ] No failed network request for a local asset (image, diagram, font, CV) on any route. A missing diagram file, a missing portrait conversion, or a missing CV must fail this check, not render as an empty frame.
- [ ] The old routes behave as specified: `/experience` lands on `/about#experience`, `/skills` lands on `/expertise`, `/certifications` lands on `/expertise#certifications`, and `/proof` shows the branded 404 page.
- [ ] The sitemap lists the 15 live routes and no removed route. The `robots.txt` sitemap reference is correct.

### 10.2 Navigation and footer

- [ ] The top bar is 64px tall, paper ground, with a 1px hairline bottom edge at all times, in both themes, at 375px and 1440px.
- [ ] The five items appear in order (Projects, About, Expertise, Research, Contact), Contact is a solid ink button, and the active page carries the 2px accent underline and `aria-current="page"`. Project detail pages show Projects as active.
- [ ] The name link reads "Muhammad Izaz Haider" in full at every width and links home. No mark, no subtitle, no shortened name.
- [ ] The theme switch reads "Dark" in the light theme and "Light" in the dark theme, is a text button, and persists the choice across pages via the `portfolio-v2-theme` key. The `meta theme-color` value is `#F7F3EA` in light and `#191817` in dark, in both `index.html` and `useTheme`.
- [ ] GitHub and LinkedIn appear in the footer and in Contact only, never in the top bar.
- [ ] The skip link is first in tab order on every route, reads "Skip to content", is visible on focus, and moves focus to `<main>`.
- [ ] Mobile menu: opens and closes; focus moves into the menu on open and returns to the menu button on close; Escape closes it; selecting a link closes it and navigates; Contact sits at the bottom in the thumb zone; every tap target is at least 44px; the menu is full screen paper; no social links and no CV link appear in it.
- [ ] Footer: navigation, location (city and country only), social links with visible labels, email, the colophon note, and the "Created by Muhammad Izaz Haider" line in small mono, with a hairline above. No newsletter band, no testimonial band, no logo wall.

### 10.3 About, Expertise, Research

- [ ] About blocks appear in the order in section 2.1. The portrait is eager, 800 by 800, WebP or AVIF with PNG fallback, with a figure note. The work authorisation placeholder is visible and reads as a placeholder.
- [ ] About carries no forbidden item from section 2.8. In particular: no street address, no phone number, no date of birth, no GPA in a bio line, no skill percentages, no 12/20 figure, no institution name, no course code.
- [ ] The timeline has four items, each linking to its evidence. The Damno role is in the past tense. The CSCB plate shows the three photograph story with its figure notes, and the "only Pakistani at that rank" claim is absent.
- [ ] Expertise shows nine groups in audit evidence order, each with coverage lines, tools, and a working proof link. No percentages, no counts, no skill without evidence. The digital forensics group is labelled coursework in progress. Reverse engineering and malware analysis appear as no group.
- [ ] Certifications show the eight held names with issuers, the two pending items only in the muted pending block, and eJPT and eWPT only in the separate "In progress, not held" block. No total count, no count button. The home JSON-LD matches this section.
- [ ] Research shows the interests statement, the Amsterdam block with dates, group size, planned role, and the words "planned, not performed", the generic submitted line with no programme named, and the writing note with three working links. No paper, talk, or journal claim; no submission number, deadline, or decision date.

### 10.4 Contact, Privacy, Terms, 404

- [ ] Contact: the email link is visible, reads exactly "mizazhaiderceh@gmail.com", and has a working Copy button ("Copy", then "Copied" for 2 seconds). GitHub, LinkedIn, CV download, location, and availability are present and correct. No phone number, no street address.
- [ ] Form states: idle renders with visible labels; validation shows the three inline errors with `aria-invalid` and `aria-describedby`; sending disables the button and reads "Sending"; sent shows "Message sent. Thank you." with `role="status"`; error shows the alert text with a working mailto link on "email me directly". The form posts to the Formspree endpoint from `src/data.ts` only.
- [ ] FAQ: six questions, accordion keyboard correct (Tab, Enter or Space, ArrowUp and ArrowDown), one item open at a time, reviewed answers in place (Q3 without handle or counts, Q5 without "below", Q6 without "in the navigation"). The FAQPage JSON-LD matches the visible answers.
- [ ] Privacy and Terms render the short texts in sections 6.1 and 6.2, in the reading column, with their own metadata.
- [ ] 404: renders the branded page with "Back home" and "See my work" links, centred, at every width in both themes. Its canonical and Open Graph values are its own, not the home values: `og:url` reflects the requested URL, `robots` is `noindex`, and no canonical points at home. The static `public/404.html` renders the same two links in the Monograph tokens with no scripting dependency.

### 10.5 Search

- [ ] Ctrl+K and Cmd+K open the palette from every page; the search button opens it; Escape closes it and returns focus to the opener.
- [ ] Keyboard navigation works end to end: ArrowDown and ArrowUp move with wrap, Enter opens the active result, Home and End jump to the ends, the result count is announced, and matching terms are highlighted.
- [ ] Results are categorised by type with a short snippet and a destination, at most 5 per category with a count line. Every result navigates to a page that exists.
- [ ] The empty state and the no results state both show the guidance sentence "Try PenTrix, PowerShell, or a command name".
- [ ] The index is built from `src/data.ts` and the project content files. Adding a project to `src/data.ts` makes it appear in search with no second edit; removing it removes it. No hardcoded suggestion list exists in the search code.
- [ ] The palette code loads lazily on first open; no page pays for `cmdk` on first paint.

### 10.6 Cross-cutting

- [ ] Theme: pre-paint script, `data-theme`, the `portfolio-v2-theme` key, and the theme-color sync all agree, in both themes, across pages.
- [ ] Performance: largest contentful paint under 2.5 seconds on mobile (PageSpeed Insights, mobile tab) after the first build, or the measured figure is recorded and the target is revised with a reason. Route level code splitting is confirmed (no route ships the whole app). No supporting page loads a video, a particle field, or a 3D runtime. Device pixel ratio is capped at 2.
- [ ] Motion: only Motion is used as an animation library; only transform and opacity are animated; the 2 second reduced motion safety net force reveals everything; content is visible with scripting off on every supporting page (checked by disabling scripting in the verification browser).
- [ ] Accessibility: visible 2px accent focus outline, offset 2px, on every interactive element; contrast rechecked for muted text and dark accent against the real rendered type; tap targets at least 44px everywhere; alt text on every image; no information by hover alone; the lightbox returns focus to its thumbnail; tab keyboard navigation works in every tab set.
- [ ] Content sweep: a text search of the built site finds none of the forbidden strings: any bounty programme name, report title, ID, endpoint, or reward amount; any test-pass count; any GPA figure in a bio line; any skill percentage; any testimonial; any hardcoded star or repo count; any institution name in public copy; any token, colour, font, or class from the v2 design system. The sweep excludes the project names and route slugs named in the naming note at the top of this file, which are existing project names, not design tokens.

---

## Appendix: decisions made while writing this spec (gaps in the source docs)

These are the places where the source docs left a genuine gap and this spec chose one option. Each is recorded here so Phase 7 can challenge it without re-reading the whole file.

1. **Theme switch form.** The sources say "a text button reading Dark or Light" without stating whether it is one toggle or two buttons. This spec chooses one toggle button whose label is the theme it switches to, replacing the v2 two button group.
2. **Search button on phones.** The top bar cannot hold the name, search, theme, and menu controls at 375px without truncating the name. This spec puts the search button in the top bar on desktop and at the top of the full-screen mobile menu on phones. Ctrl+K works at every width either way.
3. **Mobile menu focus.** The IA says the menu "must not trap focus" while the design system requires focus moved in on open and returned on close. This spec reads "must not trap focus" as "must not strand focus with no exit": the menu is a dialog, Tab cycles within it, and Escape, the close button, and any link always exit it and return focus to the menu button.
4. **Removed routes.** The IA merges `/experience`, `/skills`, and `/certifications` and redistributes `/proof`, but sets no redirect behaviour. This spec redirects the first three to their new homes and gives `/proof` no redirect, with every old `/proof` link repointed to the page holding that evidence.
5. **Education on About.** The IA About block list has no education section, while v2 had one naming institutions. This spec removes the section: study status is one plain words block, and the two earlier school entries are omitted, because naming them would name institutions.
6. **CSCB gallery cut.** The IA redistributes Proof evidence but does not say where the four image scoreboard gallery goes. This spec proves CSCB on About with the three photograph story only, and does not republish the gallery. The lightbox pattern is preserved as a component.
7. **YesWeHack recognition email.** The IA does not say which recognition image goes where. This spec publishes the swag photograph on About and does not publish the email screenshot, which duplicates the fact and is hard to read on a phone.
8. **Certification pending items.** The task lists eight certifications as the named list and says the two open items must not be featured prominently. This spec shows the eight as the list and the two open items only in a muted "Confirmation pending" block at the foot, not as rows and not counted.
9. **FAQ Q3 counts and handle.** The audit permits the report counts only with the "by my own count" qualifier, and the hard rules for this spec forbid IDs in public copy. This spec keeps the counts once, on About, with the qualifier, and removes both the handle and the counts from the FAQ answer, which carries the role, start date, and categories only.
10. **404 canonical.** The task says to fix the v2 bug (canonical and Open Graph set to home values) without naming the correct canonical for a catch-all route. This spec sets `og:url` to the requested URL, sets `robots` to `noindex`, and omits the canonical rather than pointing it home if a per-URL canonical cannot be produced.
11. **Search pages category.** The task search list names projects, detail sections, commands, concepts, and resources, without naming top-level pages. This spec adds a Page category (the five nav pages plus Home, read from the route table), because a visitor typing "expertise" should find `/expertise`.
12. **Command and concept index scope.** No command dataset or glossary dataset exists in this repo today; the Academy content lives in its own repo. This spec includes commands and concepts only from data that is imported into this repo as structured data, and forbids inventing a list to fill either category.
13. **Chapter numbers.** The design system requires a mono catalogue number per chapter but does not number the chapters. This spec numbers them in site order: Home 01, Projects 02, About 03, Expertise 04, Research 05, Contact 06. Legal pages and the 404 page carry no number.
14. **Route fallback for lazy loading.** The sources require route level code splitting without naming the Suspense fallback. This spec renders nothing visible except the nav and footer while a chunk loads, so there is no loader animation and no layout shift.
15. **Amsterdam finality.** The audit records the project as assigned with the change window closing 11 November 2026. This spec makes Phase 7 confirm the final status before publishing "confirmed", and keeps "assigned, planned, not performed" until then.
16. **Other group members.** The audit names the six Amsterdam group members, but the brief for the Research page asks for the group size, not the roster. This spec names no other member, because no consent to publish their names on his portfolio is recorded.
