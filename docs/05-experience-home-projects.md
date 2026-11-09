# Experience Specification: Home and Projects Index

**Portfolio V3 rebuild, Phase 5. Date: 9 November 2026. Status: specification for the Phase 7 build.**

**Scope:** this file specifies the Home page (`/`) and the Projects index page (`/projects`) only. It specifies experience, copy direction, layout, responsive behaviour, motion, accessibility, and what Phase 7 must verify. It does not specify project detail pages, About, Expertise, Research, or Contact beyond the strips on Home that link to them. It does not edit any code.

**Sources read in full before writing:** `docs/DESIGN_SYSTEM.md`, `docs/03-brand-strategy.md`, `docs/03-project-selection.md`, `docs/03-information-architecture.md`, `docs/01-profile-audit.md`, `docs/02-ux-video-research.md`, and the current v2 code: `src/routes/Home.tsx`, `src/routes/Projects.tsx`, `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/components/ProjectCard.tsx`, `src/components/ChallengePanel.tsx`, `src/components/CodeStrip.tsx`, `src/App.tsx`, `src/data.ts`.

**Authority:** `docs/DESIGN_SYSTEM.md` (Monograph direction) wins where any other doc disagrees with it. Where this spec and the design system disagree, the design system wins and this spec must be corrected, except where this spec records an explicit decision in Appendix B. Copy lines marked "proposed copy" are copy direction for the build, not final approved text. Copy lines marked "approved wording" must be used verbatim.

**Hard rules carried into every section below:** no em dashes anywhere in this file or in any proposed copy (commas, colons, parentheses instead). No v2 visual identity in any form (no v2 palette, no v2 kicker pill, no v2 marker span, no v2 gradient ground, no v2 card radius, no v2 icon chips). No bounty program names, report titles, IDs, endpoints, or reward amounts. No test-pass counts of any kind. No GPA figure in any bio line. Never invent experience, grades, skills, benchmarks, users, downloads, vulnerabilities, or business outcomes. Never disclose PenTrix flag storage beyond the approved sentence in section 2.7. Email only `mizazhaiderceh@gmail.com`. No institution, university, course code, lecturer, or professor mention in any proposed public copy. No "looking for an internship" banner, no "give me a chance", no "I am a beginner looking for an opportunity". No skill percentages, no testimonial claims, no fake statistics. BugHunt Arsenal: headline figures only (800+ payloads, 60+ CTF tools, 14+ modules), never the stat strip figures, never the stat strip percentage claim, never the open-source claim until a repo is confirmed. Security-Books star count: fetch live or omit, never hardcode. Work authorisation wording: leave a placeholder, do not invent it.

**Tokens used in this spec:** every font and colour comes from `docs/DESIGN_SYSTEM.md` exactly. Display: Archivo (variable, expanded width axis for hero and handoff lines only), weights 600, 700, 800. Text: Instrument Sans, 400, 500, 600. Code and metadata: JetBrains Mono, 400, 500, 600. Light theme (default): paper `#F7F3EA`, surface `#FFFEFA`, ink `#1C1A17`, body `#2A2723`, muted `#6E6A61` (fallback `#655F56` if the render check finds it thin), line `#DCD5C6`, line-strong `#B9B0A0`, accent oxblood `#7A2E25`, accent-text `#6E231C`, accent-soft `#F1E3DE`, code-ground `#1E1C19`, code-body `#E8E2D5`. Dark theme: paper `#191817`, surface `#221F1C`, ink `#F3EFE5`, body `#D5CFC2`, muted `#9C968B`, line `#37332C`, line-strong `#57503F`, accent `#D18A74`, accent-text `#E0A58F`, accent-soft `#3A211B`, code-ground `#121110`. Radii: 2px everywhere. Shadows: none by default. Hairline rules: 1px in the line colour. Accent oxblood is used in exactly three persistent places (active nav underline, solved state of the challenge panel, rule above a chapter handoff line), plus two transient or marker uses required by this spec and recorded in Appendix B (title accent underline on hover, Flagship marker rule). All sizes in rem, base 16px. Container max width 1240px, centred. Gutters: 64px desktop, 32px tablet, 20px phone. Column gap 24px desktop, 16px phone. Section to section: 120px desktop, 80px phone. Handoff to first block: 48px. Block to block: 32px. Body measure capped at 68ch.

---

## 1. Home page block order and purpose of each block

Home answers Gate 1 in the first screen (who, what role, what can he build, where is the evidence, how to contact him), then maps the site. The homepage is a map, not the whole territory. Blocks appear in this order, and in no other order:

1. Hero (section 2).
2. First featured project: PenTrix-VulnLab.
3. Remaining featured projects: PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books.
4. About strip.
5. Expertise strip.
6. Research strip.
7. Contact strip.

The work chapter (blocks 2 and 3) opens with one handoff line, then the five project rows in audit order. The first featured project follows the hero directly below it, without a second scroll on desktop: at 1440 by 900, the top of the work chapter (its handoff line and the start of the PenTrix plate) is visible at the bottom edge of the first screen, so one scroll brings it fully into view. There is never a full empty screen between the hero and project 01.

What v2 Home had that is removed in v3: the tagline strip ("Understand it. Break it. Build it. Secure it."), the Proof preview section with its three stat cards (proof is redistributed into the case studies, About, and Research, per the information architecture), the About section placed before the featured projects, the three-card featured grid, the availability line and status line in the hero, the second hero button, the social icons in the hero, and the duplicate "Get in touch" block that repeated the hero actions. None of these returns in any form.

### 1.1 Block 1, Hero

Purpose: pass Gate 1. Identity, role, proof, and the way in. Specified in full in section 2.

### 1.2 Block 2, First featured project: PenTrix-VulnLab

Purpose: the first proof, and the project that carries the verdict for a hiring manager. A visitor who opens only one case study opens this one.

Content: catalogue number 01, title "PenTrix-VulnLab" in Archivo 700 at 32 to 40px, one-line outcome (proposed copy): "A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment." Mono meta line (role, year, stack, status): "Founder, lead developer, 2026, Node.js, Express, SQLite, Repo". The year is the year of verified public activity from the audit (repo updated 2026-10-20); Phase 7 must confirm the build year from the repo record and correct it if it differs, never guess. A large plate on the left, text on the right: the PenTrix architecture diagram (hand-built inline SVG, Monograph tokens, with a text equivalent beside it), or a screenshot of the lab running if the diagram is not ready. A figure note beside the plate in mono, stating what is shown and what happened. Two links: "Read the case study" (to `/projects/pentrix-vulnlab`, the primary link) and "View on GitHub" (to the repo, opening in a new tab). PenTrix-VulnLab links to the repo only, never a live deployment. The "Flagship" marker sits beside the title as small mono text preceded by the accent rule, not as a pill.

Copy direction: outcome first, method second, no superlatives. The block says what the lab teaches and how, and it does not claim users, downloads, deployments, or any count beyond 201 challenges across 29 modules, which is supported by project documentation.

### 1.3 Block 3, Remaining featured projects

Purpose: show range after the flagship, in audit order, without letting any of them compete with it.

Content: catalogue numbers 02 to 05, one row each, smaller plates on alternating sides (02 plate right, 03 plate left, 04 plate right, 05 plate left), never the same composition twice in a row. Each row: catalogue number in mono, title in Archivo 700 at 32 to 40px, one-line outcome, mono meta line (role, year, stack, status), plate with a figure note, two links (case study first, live demo where one exists, repo second). Per-entry copy is specified in section 3.4.

Copy direction: one line per project, outcome led, every number beside its proof. No row carries a star count, a user count, or a download count.

### 1.4 Block 4, About strip

Purpose: answer who he is, where he is, and what he is looking for, in short verifiable lines, and send the visitor to the full About page.

Content: handoff line "About" with the accent rule above it. Two short paragraphs, body large, measure capped at 68ch. No portrait on Home (the profile portrait is a plate on the About page). A short fact line in mono: location, city and country only (Sijsele-Damme, Belgium). One link: "More about me" to `/about`.

Copy direction (proposed copy): paragraph 1, "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting, and building the tools I wish I had." Paragraph 2, "I am a second-year BSc Cybersecurity student in Belgium. My first year closed at 60 out of 60 credits on the first attempt, and I placed first in Web, Junior division, at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write-ups." Availability line, using approved wording from the audit only: "Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027." Work authorisation: a clearly marked placeholder only, exact wording to be supplied by Izaz, never invented. No GPA figure, no grade list, no institution name.

### 1.5 Block 5, Expertise strip

Purpose: show what he can do, grouped by evidence, each group linking to the project that proves it, and send the visitor to the full Expertise page.

Content: handoff line "Expertise" with the accent rule above it. A compact ruled list of the strongest groups in audit evidence order, each one line plus a link to its proving project: web application penetration testing (PenTrix-VulnLab), bug bounty hunting and responsible disclosure, categories only (About, experience), vulnerability assessment and secure code review (Damno Solutions role, as stated on About), DevSecOps and CI/CD security (About, experience), mobile security (APK Security Pipeline), AI security and LLM integration (Ai-Terminal-X, in the archive). No percentages, no counts of skills, no skill without evidence behind it. One link: "All expertise" to `/expertise`.

Copy direction: each group names what it covers in plain words and points at its proof. The strip never claims a capability the linked project does not show. Digital forensics and reverse engineering are labelled as coursework in progress on the Expertise page, and are not listed as completed expertise on Home.

### 1.6 Block 6, Research strip

Purpose: show direction and ambition honestly, without overstating output, and send the visitor to the full Research page.

Content: handoff line "Research" with the accent rule above it. Three short lines, body text, measure capped at 68ch: research interests (offensive security, AI security, learning tools); the assigned international project with dates (28 June to 2 July 2027, Amsterdam, Security Summer Camp, group of six, his planned role as security specialist and documentation lead, labelled as planned, not performed); a generic line that research internship applications for summer 2027 have been submitted, without naming any programme. One link: "More on research" to `/research`.

Copy direction: planned is planned, submitted is submitted, published is never claimed. No published paper, talk, or journal article is claimed, because none was found. No application submission number, deadline, or decision date appears as a portfolio fact. The Amsterdam project is presented as assigned with dates until finality is confirmed after 11 November 2026.

### 1.7 Block 7, Contact strip

Purpose: make contact take one tap, and close the page like a colophon.

Content: handoff line "Contact" with the accent rule above it, left aligned. One short line (proposed copy): "Hiring for an offensive security internship, a junior role, or a research place? I would like to hear from you." The email address as a visible, copyable link: `mizazhaiderceh@gmail.com`. One primary action: a solid ink button "Get in touch" to `/contact`. GitHub and LinkedIn links as text links beside the email. The closing line of the page is centred (the only centred element on the site, because it is the colophon): "Created by Muhammad Izaz Haider" in mono, small, above the footer hairline.

Copy direction: plain invitation, no desperation, no availability banner, no second pitch. The contact form lives on the Contact page, not on Home, and the email link beside it means contact works if the form fails.

---

## 2. Hero composition

The cover of the monograph. Full viewport width, minimum 100svh on desktop, content vertically centred, video plate behind everything. The hero alone is on the first screen: at 1280 by 800 the headline, the role line, the one sentence, and the primary action are all visible without scrolling.

### 2.1 Layers, bottom to top

1. Poster frame (section 2.2).
2. Video loop (section 2.3).
3. Flat scrim (section 2.4).
4. Owned particle and line field (section 2.5).
5. Copy block, columns 1 to 7 on desktop (section 2.6).
6. Challenge panel, columns 8 to 12 on desktop (section 2.7).

The video element and the canvas are `aria-hidden` true and `pointer-events: none`. Pointer tracking listens on the hero element, not on the canvas, so the canvas never blocks a tap or a click. The headline beside the video carries the meaning, so the video is decorative and is never the only carrier of information.

### 2.2 Poster frame

A still frame taken from the graded clip, exported as WebP or AVIF at 1600 to 1920px wide, 80 to 150 KB, preloaded with high fetch priority. This is the largest contentful paint element and the hero when video never loads. It carries the hero alone. Explicit width and height, or an aspect ratio in CSS, so nothing shifts when the poster arrives. The poster is a frame of the chosen clip, never a separate stock still.

No clip has been selected yet. The poster therefore does not exist yet either. Until a clip passes the licence checklist (section 2.3), the hero ships without a photographic layer: the hero ground is ink (`#1C1A17` in light theme, `#121110` in dark theme) with the particle field on top, and the headline becomes the largest contentful paint element. This is recorded as a decision in Appendix B. The poster budget in section 7 applies in full the moment a clip is selected.

### 2.3 Video loop

One short licensed stock clip, 8 to 15 seconds, in the abstract technical visualisation or close-up engineering detail direction (slow particle field, network lines, macro circuit or cable detail, shallow depth of field), graded to the palette, silent, no audio track, 720p, under 3 MB (under 2 MB preferred), WebM plus MP4 where the pipeline allows, otherwise MP4 alone, never WebM alone. Sourced from Coverr first, then Pexels, then Pixabay, then Mixkit (Free License only). Licence verified clip by clip with the checklist in `docs/02-ux-video-research.md` section B3, and the record (source, licence name, clip URL, download date) saved beside the file before the file enters the build. No face, no hoodie, no dark room, no skull, no mask, no lock icon, no readable code, no visible brand. Encode: H.264 CRF 28 to 30 with the slow preset, 24 or 30 frames per second, no audio track stripped in the file itself, faststart. If the clip will not compress inside the budget, pick a different clip, never raise the budget.

Attributes: autoplay, muted, loop, playsinline, preload metadata, poster, width, height, `aria-hidden` true. The play promise is handled: if the browser rejects playback (low power mode on iOS, a browser setting, data saver), the poster stays, no error is shown to the visitor, and no unhandled rejection reaches the console. The video source is attached only after the poster has painted and the reduced motion check has passed. Only one autoplaying video exists on the page.

No clip has been selected yet, and no clip is presented as licensed in this spec. If no clip passes art direction and the licence check, ship the poster plus the particle field alone, or the flat hero ground plus the particle field (section 2.2), and add the video later. Never ship an ungraded, unlayered stock clip, and never ship a video that misses the performance budget.

### 2.4 Flat scrim

One uniform overlay, `rgba(23, 22, 20, 0.62)` over the whole hero, no gradient, no blur. Text contrast is tested on the poster frame alone, on the brightest frame of the loop, and at 390px width. If any of those fails, the scrim darkens or the clip is rejected. Never fix readability by hoping the footage stays dark. The scrim sits above the video and below the particle field and the copy.

### 2.5 Owned particle and line field

A custom procedural canvas 2D field (plain canvas, not Three.js, so the hero adds no 147 KB 3D runtime), drawn on top of the video: slow drifting particles in warm paper white at low opacity, thin lines connecting particles within 140px, the field reacting to a fine pointer (particles within 120px drift gently toward the pointer and ease back, never snap). This is the layer that makes the hero cursor reactive, because a video alone cannot be. Lazy initialisation only when the hero is in view, paused off screen, device pixel ratio capped at 2.

Behaviour: it freezes to a still under reduced motion. It does not exist on touch devices, and nothing is lost without it. One magnetic pull only: the primary call to action in the hero pulls up to 6px toward the pointer and eases back on leave. No cursor trail, no blob cursor, no splash cursor, no custom cursor glyph anywhere. The system pointer is never replaced and never hidden.

### 2.6 Copy block, columns 1 to 7 on desktop

Left aligned, always. Elements in order, no other element:

1. Catalogue line in JetBrains Mono 500, 13px: "Portfolio, 2026".
2. Headline in Archivo 700, expanded width, broken into lines by hand, three lines maximum, nine words maximum (proposed copy, approved direction): "Find the flaw. Prove it. Build the fix." Line breaks: "Find the flaw." / "Prove it." / "Build the fix." Token: Display hero, clamp(3.5rem, 8vw, 6rem), line height 0.98, tracking -0.03em. No single word coloured or italicised for accent. The headline sets statically, broken by hand. No typewriter, decrypt, or glitch effect.
3. Role line in Instrument Sans 500: "Penetration Tester, AI x Offensive Security".
4. One sentence, twelve words or fewer (proposed copy): "I break web apps, then teach others to break them safely." Eleven words. This adapts the design system sentence to the twelve-word limit; the change is recorded in Appendix B.
5. One primary action only: a solid ink button, "View projects", linking to `/projects`. Padding 14px 28px, radius 2px, Instrument Sans 500, 15px, no shadow. Hover (fine pointer): translateY(-1px) and ground darkens one step. Active (press): translateY(0).
6. One secondary text link beside it, "Contact", linking to `/contact`, set as an underlined text link, not a second button.

No second button, no social icons, no availability line, no mission statement above the fold, no CV download in the hero (the CV download lives in About and in the footer). Availability and contact routes live in About and Contact. The name does not appear as a heading in the hero; the name is the home link in the nav.

### 2.7 Challenge panel, columns 8 to 12 on desktop

A paper surface card, 2px radius, 1px line border, ink text on paper in both themes (the panel is a page from the book laid on the dark cover). It is the signature moment: the visitor tries real security work before scrolling. Elements in order:

1. Title in Archivo 600: "Try it: PenTrix-VulnLab".
2. Mono request line with a code strip showing the request and the response status. Code strip content:
   `GET /admin HTTP/1.1`
   `Host: lab.pentrix.local`
   The code strip uses the Monograph code tokens (dark code ground in both themes, muted ochre keywords, muted sage strings, muted teal functions, muted clay numbers, grey comments, 14px JetBrains Mono, line height 1.7, radius 2px). No purple or pink keywords, no neon green strings.
3. Three steps, numbered because they are a true sequence, as an ordered list in mono numbers:
   1. Read the request. (Supporting line, proposed copy: "An ordinary signed-in user asks for the admin panel.")
   2. Spot the flaw. (Supporting line, proposed copy: "The panel checks that a session exists, never the role.")
   3. Prove it. (Supporting line, proposed copy: "Type the path, then check it.")
4. Input: visible label "Try a path", placeholder `/admin`, JetBrains Mono, 16px Instrument Sans text, 14px padding, paper surface, 1px line border, radius 2px, minimum height 44px, autocomplete off, spellcheck off. The label is a real `<label>` wired to the input, never placeholder only.
5. Button: "Check", primary solid ink button, minimum height 44px. The input and button sit in a `<form>` so Enter submits.
6. State line: a live region (`aria-live` polite) under the form, wired to the input with `aria-describedby`. Idle text (proposed copy): "Type a path, then press Check."
7. Solved state: an accent wash (`--accent-soft`) behind a "Solved" badge, badge text in `--accent-text`, plus the approved flag sentence, verbatim: "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags." No flag literal is ever shown, in any state.
8. Link: "Read the PenTrix-VulnLab case study" to `/projects/pentrix-vulnlab`, a text link in `--accent-text`, underlined on hover. It appears in the solved state and is the doorway from the panel to the case study.
9. Reset: a small text button "Reset" that clears the input and returns the panel to the idle state. It appears in the solved state only.

Check behaviour: on Check, the trimmed input is compared to `/admin` (accept `/admin` and `/admin/` exactly, case sensitive). A correct path shows the solved state. A wrong path shows the state line "No admin panel at that path. Try again.", sets `aria-invalid` true on the input, gives the input a 1px accent border, announces the result through the live region, and keeps focus in the input. The panel checks session only, never role, exactly as v2 did: the check runs entirely in the browser, no request leaves the browser, no role is checked. The panel is a mirror of the real flaw, not a live exploit.

What v2 ChallengePanel had that is removed: the tabbed step switcher (Read, Spot, Prove as tabs), the "Also inside PenTrix-VulnLab" challenge list, and the counts line at the foot. The three steps are now a fixed numbered sequence, the input and Check button are new, and the counts belong on the case study page.

### 2.8 Hero on mobile at 390px

Poster still, headline at 40px, role line, sentence, primary action full width, challenge panel below, pause control hidden, full function on touch.

Layout: the hero is content height on phones (no minimum viewport height below 768px). The poster plate with the flat scrim wraps the copy block only. The copy block stacks: catalogue line, headline at 40px (2.5rem, line height 1.02, tracking -0.03em), role line, sentence, primary action full width, secondary text link "Contact" below it on its own line, left aligned, minimum height 44px. The challenge panel follows below the poster plate on the paper page ground, full container width, keeping full function: input, Check button, state line, solved state, and case study link all work on touch, with tap targets of 44px minimum. The pause control is hidden (no video to pause). The particle field does not exist on touch. The video source is never attached on phones in this phase (poster by default; see Appendix B for the deferred opt-in). Headline lines are broken by hand and never wrap mid-phrase; Phase 7 checks at 375px that no line overflows, and drops the headline to 36px at 375px only if the 40px render overflows.

### 2.9 Hero density fallback

If the first build feels crowded at 1280 by 800, the panel moves to the top of the next screen and the hero keeps only the headline block. The trigger is concrete: if at 1280 by 800 the primary action or the panel bottom falls below the fold, or the copy block and the panel crowd the nav, the fallback applies. In fallback, the hero is the copy block alone (minimum 100svh, vertically centred, poster and scrim behind it), and the panel becomes the first block of the next screen, inside the container, spanning columns 3 to 10 on desktop (centred, maximum 640px wide), on paper ground, followed by the first featured project. That decision belongs to the build review, and the review records which layout shipped.

### 2.10 Hero failure order

Poster with headline and action (always works), then the static particle field, then the video loop on desktop only after the poster has painted and the reduced motion check has passed, then cursor reactive motion only with a fine pointer. If the video fails to load, if the codec is unsupported, or if autoplay is rejected, the poster stays, no error is shown, and no unhandled rejection reaches the console. Under `prefers-reduced-motion: reduce`, the video source is never attached and the particle field is frozen. With scripting off, the poster, headline, role line, sentence, and primary action are all visible, and the panel degrades to a static card showing the title, the request line, the three steps, and the case study link (the input and Check need scripting; the link does not).

### 2.11 Pause control

A visible pause control sits at the hero's lower edge for visitors who have not set reduced motion. It is a text button reading "Pause motion" when motion is playing and "Play motion" when paused, with `aria-pressed`, minimum height 44px, paper text on the dark hero, 2px accent outline on focus. It pauses the video and freezes the particle field together, and resumes both together. It is hidden under reduced motion (nothing is moving to pause) and hidden on phones (no video to pause).

---

## 3. Projects index

An editorial list, not a card grid. The project index is the full argument: featured case studies in audit order, then a compact archive. No card grid of repo names, no uniform grid of twenty cards, no bento grid, no horizontal scroll gallery.

### 3.1 Page header

Mono line: "Projects". Handoff line in Archivo 700, clamp(2.25rem, 4.5vw, 3.5rem): "The work, in order." One line (proposed copy): "Five case studies, then the archive. Every project ships with a real artefact." The header sits on columns 2 to 11 on desktop (a centred reading column inside the 12), while plates may run columns 1 to 12 or 2 to 12.

### 3.2 Filters

Filter list, in this order: All, Cybersecurity, AI Security, Software Engineering, Automation, Open Source, Research. DevSecOps is withheld from the shipped list: no featured or archive project carries a verified DevSecOps assignment in `docs/03-project-selection.md` section 6, and filters with no verified project behind them must not appear. It may be added later if a project is verified for it. BugHunt Arsenal carries AI Security only if the AI dimension is verified from the repo; until then it is Cybersecurity only, and the filter counts follow that.

Filter assignments (from `docs/03-project-selection.md` section 6):

- PenTrix-VulnLab: Cybersecurity, Open Source, Research.
- PowerShell Academy: Software Engineering, Research, Open Source.
- BugHunt Arsenal: Cybersecurity, and AI Security only if verified.
- APK Security Pipeline: Cybersecurity, Software Engineering, Automation.
- Security-Books: Cybersecurity, Research, Open Source.
- Ai-Terminal-X: AI Security, Software Engineering.
- AgentArsenal: AI Security, Software Engineering, Open Source.
- VulnNotes: Software Engineering, Cybersecurity (course project, labelled as such).
- 90DaysOfCyberSecurity: Cybersecurity, Research, Open Source.

Filter behaviour: real `<button>` elements with `aria-pressed`, text only in JetBrains Mono 500, 13px, separated by a 1px vertical rule, never a pill background, never a coloured badge. The active filter is ink text with a 2px ink underline (not the accent; the accent is reserved for its three persistent places). Inactive filters are muted text. Filters wrap to multiple lines with 8px gaps, never horizontal scroll. Filtering applies to the featured list and the archive together, in both. Featured order never changes under a filter. When a list empties, its heading and its hairline are hidden; the other list remains. When both lists empty, the empty state line shows: "No projects in this category yet." The filter state does not change the URL in this phase; a filter reset is the All button.

Note on the design system: `docs/DESIGN_SYSTEM.md` names a different parenthetical filter list (All, Web, Mobile, Learning, Tools) in its index section. This spec uses the verified assignments above instead, because those labels have no verified project behind them in the project selection doc. The conflict is recorded in Appendix B.

### 3.3 Featured rows

Each featured entry is a full width row separated by a 1px hairline in the line colour. The project index and case study bodies sit on columns 2 to 11 on desktop. Each row: catalogue number in mono (01, 02, 03, 04, 05), title in Archivo 700 at 32 to 40px, one-line outcome, one mono meta line (role, year, stack, status), a plate with a figure note, and two links (case study first, live demo where one exists, repo second). The whole row is not a single link; the title and the case study link are the links, so keyboard and screen reader users get one clear target each.

### 3.4 Per-entry specification

| No. | Title | One-line outcome (proposed copy) | Mono meta line (role, year, stack, status) | Plate | Links |
|---|---|---|---|---|---|
| 01 | PenTrix-VulnLab | A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment. | Founder, lead developer, 2026, Node.js, Express, SQLite, Repo | Architecture diagram (hand-built inline SVG), large plate, left, text right | Read the case study (`/projects/pentrix-vulnlab`), View on GitHub (repo only, never a live deployment) |
| 02 | PowerShell Academy | A free learning platform that teaches PowerShell from zero to confident use: 18 chapters, 61 lessons, 48 glossary terms. | Sole builder, 2026, Next.js, React, TypeScript, Live | Screenshot of the lesson reader, smaller plate, right | Read the case study (`/projects/powershell-academy`), Visit live site |
| 03 | BugHunt Arsenal | A live browser-based security research platform: 800+ payloads, 60+ CTF tools, 14+ modules. | Sole builder, 2026, stack to verify from repo in Phase 7, Live | Screenshot of the payload browser, smaller plate, left | Read the case study (`/projects/bughunt-arsenal`), Visit live site |
| 04 | APK Security Pipeline | A Python CLI that scans Android APKs for security issues, explains every step, and reports in HTML and JSON. | Sole builder, 2026, Python, Frida, Repo | Sample HTML report screenshot, or pipeline diagram, smaller plate, right | Read the case study (`/projects/apk-security-pipeline`), View on GitHub |
| 05 | Security-Books | A curated collection of security books, guides, and resources, his most starred repository. | Curator, maintainer, 2026, Curated list, Repo | Screenshot of the curated list, smaller plate, left | Read the case study (`/projects/security-books`), View on GitHub |

Notes on the table:

- Years are the year of verified public activity from the audit; Phase 7 must confirm each build year from the repo record and correct it if it differs, never guess. See Appendix C.
- "Sole builder" for 02, 03, and 04 must be verified against the repo before publishing; if any contribution was shared, name it on the case study page.
- BugHunt Arsenal uses the headline figures only (800+ payloads, 60+ CTF tools, 14+ modules). Never the stat strip figures, never the stat strip percentage claim, never the open-source claim until a repo is confirmed. Its stack is unverified until Phase 7 reads the repo; the meta line carries the placeholder until then, and the case study page must not invent a stack.
- PowerShell Academy omits the 102 commands figure from the index outcome line: the audit records it as not re-verified on the homepage text, so it stays off the index until Phase 7 re-verifies it on the live commands page.
- Security-Books carries no star count on the index. Star count is fetched live or omitted, never hardcoded.
- Every plate carries a figure note: a short mono line stating what is shown and what happened, placed beside the plate on desktop and above it on phones. Plates have a 1px line frame, 2px radius, no shadow. All images are his own screenshots or diagrams, never lecture slide images, never stock passed off as his work. Every image has alt text and explicit width and height.

### 3.5 Flagship large plate treatment

PenTrix-VulnLab, catalogue 01, gets the large plate: its architecture diagram or a screenshot of the lab running, set wide on the left, text on the right, with the challenge panel linked beside it through the case study link and the hero panel above. The "Flagship" marker sits beside the title as small mono text preceded by the accent rule, not as a pill. No other entry gets the large plate or the Flagship marker.

### 3.6 Alternating smaller plates

Every other featured entry gets a smaller plate on alternating sides (02 right, 03 left, 04 right, 05 left), never the same composition twice in a row. Plate width on desktop is roughly half the row; text takes the other half. On phones and tablets the plate stacks above the text. The alternation is visual only: it never changes the order, and it never changes the reading order (title, outcome, meta, plate note, links).

### 3.7 Hover behaviour (fine pointer only)

On a row hover: the plate image scales 1.02 inside its frame, the title gains its accent underline, and the row lifts 2px (transform only, no shadow). The hover preview from the design system also applies: a larger plate image beside the row follows the cursor on desktop, with the same information available without hover. No hover state carries information: the outcome, the meta line, and the links are all visible without hovering, and on touch devices the rows show everything with no hover at all. Hover feedback uses CSS transitions of 160 to 220ms, ease out, transform and opacity only.

### 3.8 Archive

Below the featured rows, separated by a hairline and a handoff line "Archive". A compact ruled list, clearly secondary: name, one line, repo link, no plate, no featured weight for thin repos. Each row: catalogue number continuing from the featured list (06, 07, 08, 09), name in Archivo 600 at 1.375rem, one line in body text, one mono meta line (stack, status), and a text link "View on GitHub" (or "No public repo" as plain muted text where there is none). Rows are separated by 1px hairlines. Hover (fine pointer only) underlines the name; no lift, no plate scale, because there is no plate. A link at the foot of the archive, "View all repositories on GitHub", opens the GitHub repositories tab in a new tab.

### 3.9 Archive entries

Confirmed entries, in this order:

- 06 Ai-Terminal-X. One line (proposed copy): "Plain language to terminal commands, with safe execution checks." Meta: "Python, Gemini, Repo". Filters: AI Security, Software Engineering. Link: repo.
- 07 AgentArsenal. One line (proposed copy): "A unified skills repository across 29 domains, with versioning, testing, and a one-command installer." Meta: "Python, Repo". Filters: AI Security, Software Engineering, Open Source. Link: repo. Detail page kept (`/projects/agentarsenal`), linked from the archive row.
- 08 VulnNotes. One line (proposed copy): "Deliberately vulnerable notes app, built with Muhammad Muzammil Khan. Course project, no public repo." Meta: "Flask, Frida, Course project". Filters: Software Engineering, Cybersecurity. No repo link; the row states "Course project, no public repo" in muted text. The team split is named: Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts.
- 09 90DaysOfCyberSecurity. One line (proposed copy): "A 90-day, hands-on cybersecurity study plan, 1 to 2 hours a day, every tool free." Meta: "Study plan, Repo". Filters: Cybersecurity, Research, Open Source. Link: repo.

Candidates, not confirmed entries: AI-CMD-X, Icarus-X, Intel-Scan, X-Recon, Active Automation, Passive Automation, Scapy-based tools, LINA, Prime-PenTrix, and the remaining v2 archive repos (Sub-Hunter, PortBlitz, Sentinel-Copilot-S2, The PenTrix 30 Days, pentrix-platform, KeyGen-X). Each appears only after a per-repo review in Phase 7 confirms a one-line problem and a working repo link. Repo existence alone is not enough to add one. No claim about any candidate may outrun its evidence.

### 3.10 What v2 Projects had that is removed

The card grid (uniform cards with an icon, a code strip, tag pills, and two links), the filter pills (replaced by the text-only filter list in section 3.2), the v2 filter set (Offensive security, AI security, DevSecOps, Education, Tools), the "Featured" and "More work" two-column grids, the compact card variant, the PageHero kicker and marker span, and the v2 meta description that listed Ai-Terminal-X and AgentArsenal as featured. Ai-Terminal-X and AgentArsenal are demoted to archive entries; Security-Books is promoted to featured entry 05. The v2 route `/projects/agentarsenal` and `/projects/ai-terminal-x` are kept as archive detail pages and linked from the archive, not from Home.

---

## 4. Responsive behaviour

Tested mobile first: 390px before 1440px, in both themes, at every width below. No horizontal overflow at any width, in either theme. The grid, gutters, and spacing tokens come from the design system (container 1240px max, gutters 64px desktop, 32px tablet, 20px phone, column gap 24px desktop, 16px phone, section to section 120px desktop, 80px phone).

### 4.1 At 390px (test first)

- Hero: poster still with the flat scrim behind the copy block only. Headline 40px, three hand-broken lines, role line, sentence, primary action full width, secondary text link "Contact" on its own line below, left aligned. Challenge panel below the poster plate on paper ground, full container width, full function on touch (input, Check, state line, solved state, case study link, Reset). Pause control hidden. Particle field absent. No video source attached. Nav: name plus menu button only; full-screen paper menu on open, five items in order, Contact at the bottom in the thumb zone, 44px minimum tap targets. Footer: stacked, mono colophon lines, social links and email as 44px targets.
- First featured project: plate above text, full width, figure note above the plate, title 32px, outcome, meta line wrapping in mono (never truncated, never overflowing), links stacked with 44px targets.
- Remaining featured: same stacking, plates above text, alternating sides do not apply below tablet.
- About strip: single column, paragraphs at body large, fact line in mono, link "More about me" 44px.
- Expertise strip: ruled list, one column, each group one line plus its link, 44px targets.
- Research strip: single column, three short lines, link 44px.
- Contact strip: left aligned handoff and line, email link wrapping cleanly (breaks after the @ if needed, never overflows), primary button full width, closing line centred.
- Projects index header: mono line, handoff at 40px, one line, all on columns 1 to 12.
- Filters: wrap to multiple lines, 44px minimum height per filter, 8px gaps, no horizontal scroll.
- Featured rows: plate above text, figure note above the plate, title 32px, meta line wrapping, links stacked.
- Archive: rows stack (name, one line, meta line, repo link on its own line), hairlines between rows, 44px targets.

### 4.2 At 375px

Same as 390px, with one check: the headline at 40px must not overflow or wrap mid-phrase. If the 40px render overflows at 375px, the headline drops to 36px at this width only, and the drop is recorded in the Phase 7 notes. Gutters 20px. The primary action stays full width. The challenge panel input and Check button stay full width, stacked, not side by side.

### 4.3 At 430px

Same as 390px, with more room: the headline stays 40px, the panel input and Check button may sit side by side (input flexible, Check fixed) only if both keep 44px minimum height and the input keeps a usable width. The primary action stays full width. No other change.

### 4.4 At 768px

- Hero: stacks. Copy block spans columns 1 to 12, headline clamp gives 56px (3.5rem floor). Poster plate with scrim wraps the copy block. Challenge panel below the poster plate on paper ground, spanning columns 1 to 12, full container width. Pause control visible (video may play on tablet only if the connection is fast and reduced motion is off; otherwise the poster stays). Particle field appears only with a fine pointer; on touch tablets it is absent.
- First featured project: plate above text, figure note above the plate, title 32 to 40px.
- Remaining featured: same stacking; alternating sides do not apply below desktop.
- About strip: single column, paragraphs at body large.
- Expertise strip: ruled list in two columns if the groups fit without crowding, otherwise one column.
- Research strip: single column.
- Contact strip: left aligned handoff and line, primary button auto width (not full width), closing line centred.
- Projects index header: on columns 2 to 11.
- Filters: one or two wrapped lines.
- Featured rows: plate above text, figure note above the plate.
- Archive: rows may sit two across in a ruled list only if each row keeps a readable measure; otherwise one column. Default is one column at 768px.

### 4.5 At 1440px

- Hero: minimum 100svh, content vertically centred. Copy block columns 1 to 7, challenge panel columns 8 to 12. Headline clamp gives 96px (6rem cap) at this width, three lines, line height 0.98. Poster and video plate full bleed behind everything. Pause control at the hero's lower edge. Particle field live with a fine pointer. Magnetic pull on the primary action, up to 6px.
- First featured project: large plate left, text right, figure note beside the plate.
- Remaining featured: alternating smaller plates (02 right, 03 left, 04 right, 05 left), figure notes beside the plates.
- About strip: single column text block, measure capped at 68ch, fact line in mono.
- Expertise strip: ruled list in two columns.
- Research strip: single column text block, measure capped at 68ch.
- Contact strip: left aligned handoff and line, primary button auto width, closing line centred.
- Projects index header: on columns 2 to 11, handoff at 3.5rem cap.
- Filters: one line, separated by 1px vertical rules.
- Featured rows: plates and text side by side per section 3.6, hover preview follows the cursor on desktop.
- Archive: one column ruled list, full container width.

### 4.6 Both themes at every width

Every width above is checked in light and in dark. Dark theme is a second design, not an inversion: paper `#191817`, surface `#221F1C`, ink `#F3EFE5`, muted `#9C968B`, accent `#D18A74`, accent-text `#E0A58F`, accent-soft `#3A211B`, code-ground `#121110`. The challenge panel stays ink text on paper in both themes. Code strips keep the dark code ground in both themes. SVGL brand marks use their light or dark variant as the theme needs, never recoloured. The poster and the brightest video frame are contrast-checked in both themes (the scrim is the same in both).

---

## 5. Motion for these pages only

Motion (the `motion/react` package) is the one animation library. CSS handles micro interactions only (button hover and press, link underlines, card lift, focus). No GSAP alongside it, no second runtime, no Three.js.

| Motion | Duration | Easing | Notes |
|---|---|---|---|
| Control feedback (button, link, card lift, copy state) | 160 to 220ms | ease out | CSS transitions, transform and opacity only |
| Hero headline lines | 500 to 760ms | ease out | Motion, stagger 45 to 70ms, transform and opacity only, one line at a time, in order |
| Section entrances (handoff line, first block) | 500 to 760ms | ease out | Motion, stagger 45 to 70ms, once, on entry |
| Page transitions | under 300ms | ease out | `AnimatePresence`, fade and 8px rise, content never delayed |
| Challenge panel state change | 160 to 220ms | ease out | Badge and state line only, transform and opacity only |
| Particle field drift | continuous, slow | linear drift, eased pointer response | Canvas, pointer response eases, never snaps |
| Parallax | below 5 percent | not applicable | Hero video plate only, disabled on touch and reduced motion |

Rules: animate transform and opacity only, never width, top, left, or box shadow on scroll. No fade in on scroll for every section: only the handoff line and the first block of a chapter animate in; body copy and plates are visible by default. No scroll jacking, no pinned sections, no parallax on text, no random blinking, no tilt, no carousels, no timed tabs. Lazy initialise the particle field only when the hero is in view, pause it off screen, cap device pixel ratio at 2.

Reduced motion safety net: `MotionConfig reducedMotion="user"` plus the existing CSS reduced motion block, plus a 2 second safety net timeout that force reveals everything, so content can never stay hidden if an animation fails. Under `prefers-reduced-motion: reduce`, the video source is never attached, the particle field is frozen, the magnetic pull is off, and the headline sets statically with no stagger. Content is visible with scripting off: the entrance is an enhancement on visible content, never a gate. The v2 CSS `.enter` animations are replaced by Motion on these pages; no element starts hidden in CSS.

---

## 6. Accessibility for these pages

1. Skip link first in tab order ("Skip to content"), visible on focus, jumping to `#main`.
2. Focus visible on every interactive element: 2px accent outline, offset 2px, appearing instantly. On the dark hero the focus ring uses the dark accent (`#D18A74`).
3. Tap targets 44px minimum on every interactive element: nav links, menu button, theme switch, primary action, secondary link, panel input, Check button, Reset, filter buttons, row links, archive links, footer links, pause control.
4. No information carried by hover alone: the outcome, meta line, and links on every row are visible without hovering; the hover preview duplicates information that is already on the row; the title underline on hover is also present on focus.
5. Alt text on every image: plates, screenshots, diagrams, and the profile portrait (on About, not on Home). Decorative layers (video, canvas particle field) are `aria-hidden` true. Diagrams carry a text equivalent beside them. Figure notes state what is shown and what happened.
6. Contrast recheck on real video frames and poster: paper text on the hero is checked on the poster frame alone, on the brightest frame of the loop, and at 390px width, in both themes, against 4.5:1 for body text and 3:1 for large display text. Muted text (`#6E6A61`, 4.87:1 on paper) is never below 13px and never used for body copy; the darker fallback `#655F56` (above 5.5:1) applies if the render check finds the muted text thin. The dark accent (`#D18A74`, 6.42:1) is checked in the render pass, not assumed.
7. Real buttons and real links: filters are `<button>` with `aria-pressed`; the panel is a `<form>` with a labelled input, a submit button, and a live region for the state line; the mobile menu button announces its state ("Menu", expanded or collapsed); the pause control announces its state with `aria-pressed`.
8. Mobile menu focus: focus moves into the menu on open and returns to the button on close; Escape closes it; the menu closes on selection; focus is never trapped.
9. Keyboard: every interactive element is reachable and operable by keyboard, in a logical order (skip link, nav, hero actions, panel form, project rows, strips, footer). No keyboard trap anywhere on these pages.
10. Reduced motion: honoured in full (section 5). The pause control gives visitors who have not set reduced motion a way to stop the hero motion.
11. No information is conveyed by colour alone: the solved state pairs the accent wash with the word "Solved" and the flag sentence; the active filter pairs its underline with `aria-pressed`; error state pairs the accent border with `aria-invalid` and a text message.

---

## 7. What the Phase 7 build must verify for these pages

Checklist, in the order the build runs it. Every item must pass before handover. Test at 390px before 1440px, in both themes.

1. Routes render: `/` and `/projects` render with no missing block, no missing plate, and no broken link. Every case study link from Home and from the index resolves to its route. The archive detail links (`/projects/agentarsenal`, `/projects/ai-terminal-x`) resolve.
2. No horizontal overflow at 375px, 390px, 430px, 768px, and 1440px, in light and in dark. Checked with real rendering, not by reading source.
3. No console errors at any width, in either theme, including no unhandled play promise rejection from the video, no failed font load, and no failed image request.
4. Build passes: TypeScript compiles, the production build succeeds, route-level code splitting holds, and no v2 token, class, or layout remains in the Home or Projects code paths.
5. Largest contentful paint under 2.5 seconds target, measured with PageSpeed Insights (mobile tab), after the first build. Replace the target with the measured result in the build notes.
6. Poster budget: WebP or AVIF, 1600 to 1920px wide, 80 to 150 KB, preloaded with high fetch priority, and the largest contentful paint element when a clip is selected. If no clip is selected, the poster item is recorded as not applicable and the headline is the largest contentful paint element.
7. Video budget: 8 to 15 seconds, 720p, under 3 MB (under 2 MB preferred), no audio track, faststart, muted, loop, playsinline, preload metadata, WebM plus MP4 where the pipeline allows, otherwise MP4 alone. Licence record saved beside the file (source, licence name, clip URL, download date). If no clip passes, the video item is recorded as deferred and the hero ships poster plus particle field, or flat ground plus particle field.
8. Hero at 1280 by 800: headline, role line, sentence, and primary action visible without scrolling. If crowded, the density fallback (section 2.9) applies and the review records which layout shipped.
9. Hero at 390px: poster still, headline 40px, panel below with full function on touch, pause control hidden, no video source attached. Headline overflow check at 375px, with the 36px fallback recorded if used.
10. Challenge panel: correct path (`/admin`, `/admin/`) shows the solved state with the accent wash, the "Solved" badge, and the approved flag sentence verbatim; a wrong path shows the unsolved state line, `aria-invalid`, and keeps focus in the input; Reset returns the panel to idle; the case study link resolves; no flag literal appears anywhere.
11. Filters: each filter shows only its assigned projects in both lists, in audit order; headings hide when their list empties; the empty state line shows when both lists empty; DevSecOps does not appear.
12. Archive: no hardcoded star counts, no featured weight for thin repos, every repo link resolves, VulnNotes shows "Course project, no public repo" with no repo link.
13. Contrast: rechecked on the poster frame alone, on the brightest video frame, and at 390px, in both themes, for body text (4.5:1) and large display text (3:1). Muted text checked at its rendered size, with the `#655F56` fallback applied if it reads thin.
14. Reduced motion: with `prefers-reduced-motion: reduce` on, the video source is never attached, the particle field is frozen, the headline sets statically, and the pause control is hidden. The 2 second force reveal is verified by disabling the animation path and confirming all content is visible.
15. Scripting off: with JavaScript disabled, the poster, headline, role line, sentence, primary action, project rows, strips, and footer are all visible, and the panel shows its title, request line, steps, and case study link.
16. Motion: hero headline lines run 500 to 760ms with 45 to 70ms stagger; section entrances run only for the handoff line and first block; page transitions stay under 300ms; control feedback stays 160 to 220ms; transform and opacity only.
17. Accessibility: skip link, focus outline (2px accent, offset 2px), 44px tap targets, mobile menu focus management, and keyboard order are all verified by hand at 390px and 1440px, in both themes.
18. Both themes: every block above is rendered and read at 390px and 1440px in light and in dark, including plates, code strips, and the challenge panel in both themes.

---

## Appendix A. What changes in each v2 file

| File | Change |
|---|---|
| `src/routes/Home.tsx` | Rewrite. Block order per section 1. Hero per section 2 (no second button, no social icons, no availability line, no status line, no CV button). First featured project directly below the hero. Remaining four featured rows. About, Expertise, Research, and Contact strips. Tagline and Proof preview removed. |
| `src/routes/Projects.tsx` | Rewrite. Editorial list per section 3. Text-only filters per section 3.2. Featured rows per sections 3.3 to 3.7. Compact ruled archive per sections 3.8 and 3.9. No card grid. |
| `src/components/Nav.tsx` | Rewrite to the Monograph nav: fixed top bar, paper ground in light theme and dark ground in dark theme (no translucent background, no blur), 1px hairline at the bottom, 64px tall, name "Muhammad Izaz Haider" in Archivo 600, 17px, linking home, five items maximum in order (Projects, About, Expertise, Research, Contact as a solid ink button), active page with a 2px accent underline, theme switch as a text button reading "Dark" or "Light" (never an icon alone), no GitHub or LinkedIn links in the bar, mobile menu per section 6 item 8. |
| `src/components/Footer.tsx` | Adjust to the colophon: navigation, location (city and country only, Sijsele-Damme, Belgium), social links, email link `mizazhaiderceh@gmail.com`, and the "Created by Muhammad Izaz Haider" line, set small in mono, with a hairline above. Keep the no-data-collected note and the Privacy, Terms, and Back to top links. No newsletter band, no testimonial band, no logo wall. |
| `src/components/ProjectCard.tsx` | Retire for these pages. Replaced by the editorial row specified in section 3. The card, its icon, its code strip, and its tag pills do not appear on Home or on the Projects index. |
| `src/components/ChallengePanel.tsx` | Rewrite per section 2.7: paper surface, title, request line code strip, three numbered steps, labelled input, Check button, live state line, solved state with the accent wash and the approved flag sentence, case study link, Reset. Tabbed steps, challenge list, and counts line removed. |
| `src/components/CodeStrip.tsx` | Keep the component, retheme to the Monograph code tokens (muted ochre keywords, muted sage strings, muted teal functions, muted clay numbers, grey comments, dark code ground in both themes). The v2 token colours do not carry over. Keep the text "Copy" button (then "Copied" for 2 seconds), never an icon alone. |
| `src/App.tsx` | Routes change per the information architecture: remove `/experience`, `/skills`, `/certifications`, `/proof`; add `/expertise`, `/research`, `/projects/security-books`; keep `/`, `/about`, `/projects`, the five featured detail routes, `/contact`, `/privacy`, `/terms`, and the 404. Home and Projects link targets depend on the new routes. |
| `src/data.ts` | Content model updates: featured order becomes PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books (Ai-Terminal-X and AgentArsenal move to the archive); filter categories become the set in section 3.2; hero sentence rewritten per section 2.6; availability and status lines removed from the hero; proof stats removed from Home; no star counts hardcoded anywhere (fetch live or omit); the 102 commands figure stays out of the index until re-verified. |

## Appendix B. Decisions made where the source docs left a genuine gap

1. One sentence, twelve words or fewer. The design system sentence ("I break web apps, then build the tools that teach others to break them safely.") is fifteen words, which breaks the twelve-word limit in the brief for this spec. The first draft of this spec used "I break web apps, then build the tools that teach the break." (twelve words), but the coordinator corrected it in the Phase 5 review pass because "teach the break" is not clean English. The approved sentence is "I break web apps, then teach others to break them safely." (eleven words), which keeps the design system meaning in clean English inside the limit.
2. Hero without a clip. No clip and no poster frame exist yet, and the design system says the poster is a frame of the chosen clip, never a separate stock still. Until a clip is selected, the hero ships on a flat ink ground (`#1C1A17` light, `#121110` dark) with the particle field, and the headline is the largest contentful paint element. The poster and video budgets apply in full the moment a clip exists.
3. Mobile motion opt-in deferred. The UX research offers a "Play motion" button for visitors on phones who want the video. This spec ships no motion control on phones in this phase (pause control hidden at 390px, no video source attached), because no clip is selected yet and the brief for this spec fixes the mobile hero as a poster still. The opt-in is a Phase 7 decision once a clip exists.
4. Stacked panel background on phones. On phones the poster plate with the scrim wraps the copy block only, and the challenge panel sits below it on the paper page ground. The panel keeps its paper surface in both themes, so it stays readable without the scrim.
5. Density fallback trigger and fallback width. The design system names the fallback but not its trigger or its width. This spec sets the trigger (primary action or panel bottom below the fold, or crowding against the nav, at 1280 by 800) and the fallback width (panel at the top of the next screen, columns 3 to 10 on desktop, maximum 640px).
6. Filters: design system list set aside. The design system index section names a filter list (All, Web, Mobile, Learning, Tools) that has no verified project behind several of those labels. This spec uses the verified assignments in `docs/03-project-selection.md` section 6 instead, and withholds DevSecOps because no featured or archive project carries a verified DevSecOps assignment there.
7. Accent uses beyond three. The design system says the accent appears in exactly three persistent places, and its index section also requires a title accent underline on hover, and its chips section sets the Flagship marker as mono text preceded by the accent rule. This spec keeps the three persistent places and adds the two required uses as transient or marker uses (hover underline, Flagship rule), and records the extension here rather than silently breaking the rule.
8. Active filter indication. The accent is reserved, so the active filter uses ink text with a 2px ink underline, not the accent. Inactive filters are muted text. This keeps the three-accent rule intact.
9. Archive row hover. The design system specifies hover for featured rows but not for archive rows. This spec gives archive rows a name underline on hover (fine pointer only) and no lift, because there is no plate to scale.
10. Chapter numbers stay with projects. The design system says every chapter carries a catalogue number. This spec keeps numeric catalogue numbers (01 to 09) for projects only, so the numbers stay unique, and gives the Home strips mono chapter labels (About, Expertise, Research, Contact) with the accent rule above the handoff but no competing number.
11. Panel extras removed. The v2 panel carried a challenge list and a counts line that the design system hero panel spec does not include. This spec drops both from the hero panel; the counts belong on the case study page.
12. "View projects" target. The primary action links to `/projects` (the full index), not to an anchor on Home, because the first featured project already follows the hero on the page and the button is the route to the full argument.
13. Tablet hero stacks. The design system fixes the panel as a right column on desktop and the next screen on phones, and leaves tablet open. This spec stacks the panel below the copy block at 768px, full container width, on paper ground.
14. Headline at 375px. The brief fixes the headline at 40px at 390px. This spec keeps 40px at 375px with a Phase 7 overflow check, dropping to 36px at that width only if the 40px render overflows or wraps mid-phrase.

## Appendix C. Open items this spec could not close

1. No video clip selected, no poster frame exists. Clip search, licence verification, grading, and encoding all sit with Phase 7. The hero ships without photographic layers until then (Appendix B, item 2).
2. Build year per featured project. The meta lines carry 2026 as the year of verified public activity. Phase 7 must confirm each build year from the repo record and correct it if it differs.
3. BugHunt Arsenal stack. Unverified until Phase 7 reads the repo. The meta line carries a placeholder until then, and the case study page must not invent a stack.
4. BugHunt Arsenal AI Security filter. It applies only if the AI dimension is verified from the repo. Until then BugHunt is Cybersecurity only.
5. PowerShell Academy 102 commands figure. Not re-verified on the homepage text. Phase 7 must re-verify it on the live commands page before it appears on the index or on Home.
6. Security-Books star count. Fetch live or omit, never hardcode. No value is specified here.
7. Sole builder claims for PowerShell Academy, BugHunt Arsenal, and APK Security Pipeline. Each must be verified against its repo before publishing; shared contributions must be named.
8. Work authorisation wording. Unanswered. The About strip carries a placeholder only. Nothing is invented for it.
9. Amsterdam project finality. Presented as assigned with dates until finality is confirmed after 11 November 2026.
10. Archive candidates. AI-CMD-X, Icarus-X, Intel-Scan, X-Recon, Active Automation, Passive Automation, Scapy-based tools, LINA, Prime-PenTrix, Sub-Hunter, PortBlitz, Sentinel-Copilot-S2, The PenTrix 30 Days, pentrix-platform, and KeyGen-X each need a per-repo review before they appear in the archive.
11. Archivo expanded width axis. Must be verified in the vendored Fontsource files at build time. If the expanded axis is not in the vendored package, the hero falls back to Archivo 700 at normal width with tighter tracking, never a horizontal scale transform, and this spec must be updated to say so.
12. Light muted text at 4.87:1. Passing AA with little margin. Never below 13px, never for body copy, with `#655F56` as the darker fallback if the render check finds it thin.
