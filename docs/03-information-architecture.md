# Information Architecture and Content Specification: Portfolio V3 Rebuild

Phase 3. Date: 9 November 2026.
Sources: docs/01-profile-audit.md, docs/01-repo-audit.md,
docs/02-ux-video-research.md, docs/02-competitive-research.md,
docs/03-brand-strategy.md, docs/03-project-selection.md.
Hard rules applied: no em dashes, no bounty program names, report titles,
IDs, endpoints, or reward amounts, no test-pass counts, no 16.40/20 GPA in
bios, no invented experience, grades, or skills, no PenTrix flag storage
disclosure, document email mizazhaiderceh@gmail.com only, no institution,
course code, lecturer, or professor mention in proposed public copy.

## 1. Navigation

Top-level navbar, five items maximum, in this order:
1. Projects
2. About
3. Expertise
4. Research
5. Contact (as a button, not a plain link, so it is the last item and
   the most visible)

The logo or name at the top left links to Home. Home is not a navbar
item. That keeps the bar at five items including the Contact button,
inside the five to seven range from the UX research and at the tighter
four to five target.

What goes where, instead of in the navbar:
- Project detail pages: reached from project cards on Home and on
  Projects, and from a next-project link at the foot of each detail
  page. Not in the navbar.
- Archive of smaller tools: a section on the Projects page, with
  filters, not a navbar item.
- CV download: a button in the hero, in About, and in the footer. Not
  a navbar item.
- GitHub, LinkedIn, email: icon links in the hero, in Contact, and in
  the footer. Not navbar items.
- Research detail: a short section on the Research page, with no
  separate navbar entry for each application or project.
- Legal and secondary links: footer only.

Mobile navigation: a single menu button, a full-screen or sheet menu
with the same five items in the same order, large tap targets (44
pixels or more), and the Contact button at the bottom in the thumb
zone. The menu must close on selection and must not trap focus. No
multi-level dropdowns on mobile.

## 2. Site map

| Route | Decision vs v2 | Purpose |
|---|---|---|
| `/` Home | Rewrite | Pass Gate 1 in the first screen, then map the site. |
| `/projects` Work | Rewrite | Compare featured work, find the archive. |
| `/projects/pentrix-vulnlab` | Rewrite | Featured case study, flagship. |
| `/projects/powershell-academy` | Rewrite | Featured case study. |
| `/projects/bughunt-arsenal` | Rewrite, after corrections | Featured case study, only after the stat contradiction is fixed. |
| `/projects/apk-security-pipeline` | Rewrite | Featured case study. |
| `/projects/security-books` | New | Featured case study, compact. Replaces the v2 AgentArsenal detail page as a featured slot. |
| `/projects/agentarsenal` | Keep, demote | Archive entry with a detail page kept for depth, but no longer a featured card and no longer linked from the homepage. Note: in v2 no card linked to it; fix that by linking it from the archive. |
| `/projects/ai-terminal-x` | Keep, demote | Archive entry with a detail page kept, no longer featured. |
| `/experience` | Merge into About | Experience is a section of About, not a separate top-level page. The three roles stay, with periods and evidence bullets. |
| `/skills` | Rewrite as `/expertise` | Expertise, grouped by evidence, no skill bars. |
| `/certifications` | Merge into Expertise | Certifications are a named list inside Expertise, no total count. |
| `/proof` | Rewrite, redistribute | Proof is not a separate page. Its evidence (CSCB photographs, scoreboard gallery, YesWeHack recognition) moves into the relevant case studies, About, and Research. The lightbox and stepper patterns are preserved as components. |
| `/contact` | Rewrite | One-tap contact, email link first, form second. |
| `/privacy` | Keep | Short privacy policy, updated for the new site. |
| `/terms` | Keep | Short terms, updated for the new site. |
| `*` 404 | Keep | Branded 404 with Back home and See my work links, with correct per-page metadata. |
| `/research` | New | Research direction and ambition, honestly stated. |

## 3. Per-page content specifications

### Home (`/`)

- Purpose: pass Gate 1 in the first screen. Answer who, what role,
  what can you build, where is the evidence, how to contact you.
- Blocks in order: hero (name, one-line role "Penetration Tester, AI
  x Offensive Security", one line on what he is looking for with
  availability as he has approved it, two buttons: View projects,
  Contact or Download CV, social links, hybrid video background with
  poster frame underneath); first featured project (PenTrix-VulnLab,
  problem, outcome, links) directly below the hero without a second
  scroll on desktop; remaining featured projects; short About strip;
  compact Expertise strip (groups with project links, no percentages);
  short Research strip (generic hiring line, assigned project with
  dates); Contact strip. Each strip links to its full page.
- Primary action: View projects.
- Must NOT appear: a mission statement as the hero, a skill cloud with
  no links, a testimonial section (none exists), a full repo list, a
  "looking for an internship" banner.

### Projects (`/projects`)

- Purpose: let a visitor compare the featured work and find the archive.
- Blocks in order: page header (one line, what the work proves);
  filters (All, Cybersecurity, AI Security, Software Engineering,
  DevSecOps, Automation, Open Source, Research, only where verified);
  featured case studies (five, in audit order, each as a card with a
  real screenshot or diagram, a one-line problem, a one-line outcome,
  stack tags, and two links: live demo where it exists, repo);
  archive (compact grid for the remaining repos, filterable, repo link
  each, no featured-weight cards for thin repos, no star counts
  hardcoded).
- Primary action: open the first case study.
- Must NOT appear: repo-name card grids with no problem statement,
  star counts hardcoded, thin repos at featured weight.

### Project detail (`/projects/<slug>`)

- Purpose: pass Gate 2. Use the 9-part template from
  docs/03-project-selection.md, with a sticky in-page index (Problem,
  My role, Decisions, How it was built, Evidence, What I would improve,
  Links).
- Lead with problem, role, and outcome. Put Decisions and Evidence
  where a jumping reader can find them in one tap.
- Include real artefacts: architecture diagram, sample output,
  screenshots of the working product. Own visuals only, never lecture
  slide images.
- End with "What I would improve" and a next-project link. Never end
  on a dead end.
- Primary action: live demo where it exists, else repo.

### About (`/about`)

- Purpose: answer who he is, where he is, and what he is looking for,
  in short, verifiable lines.
- Blocks in order: name, location (city and country only,
  Sijsele-Damme, Belgium), current study status in plain words without
  letting education dominate his identity, work sought, availability as
  he has approved it, CV download; timeline (bug bounty role since
  February 2026, Damno Solutions role November 2025 to June 2026 in
  past tense, founder of The PenTrix, CSCB 2026 placement), each item
  linking to its evidence; experience section (the three roles, merged
  from v2 `/experience`, with periods, locations, evidence bullets);
  The PenTrix section (mission, why it exists, his responsibilities,
  from docs/03-brand-strategy.md).
- Primary action: Download CV.
- Must NOT appear: full street address, phone number, date of birth,
  GPA in a bio line, skill percentages, the 12/20 Communication Skills
  figure, work authorisation wording (leave a clearly marked
  placeholder for his approved wording, do not invent a line).

### Expertise (`/expertise`, rewrites v2 `/skills`)

- Purpose: show what he can do, grouped by evidence, each group
  linked to a project.
- Groups, in audit evidence order: web application penetration
  testing; bug bounty hunting and responsible disclosure (categories
  only); vulnerability assessment and secure code review; DevSecOps
  and CI/CD security; mobile security; digital forensics (coursework
  in progress, labelled as such); Linux and server security; AI
  security and LLM integration; network security and recon.
- Each group: two or three lines on what it covers, the tools used,
  and a link to the project or role that proves it. No percentages,
  no "45+ skills" count, no skill without evidence behind it.
- Certifications: named list only (CNSP with Merit, IBM Application
  Security for Developers and DevOps, Coursera Web App Security
  Testing with OWASP ZAP, TCM Linux 101, CodeRed Web App Security
  Testing with Google Hacking, plus others as verified in the audit),
  no total count, no count button. The two open items (Google AI
  Essentials confirmation, Advanced Python Scripting issuer) must not
  be featured prominently until he confirms them with evidence.
  In-progress study (eJPT and eWPT through INE Security, exams not
  taken) is clearly separated from held certifications and never
  listed as held.
- Primary action: open the project that proves a group.

### Research (`/research`, new)

- Purpose: show direction and ambition honestly, without overstating
  output.
- Blocks in order: short statement of research interests (offensive
  security, AI security, learning tools); the assigned international
  project with dates (28 June to 2 July 2027, Amsterdam, Security
  Summer Camp, 10 ECTS, group of six, his planned role as security
  specialist and documentation lead, labelled as planned, not
  performed); a generic line that research internship applications
  for summer 2027 have been submitted, without naming any programme.
- Must NOT appear: a published paper, talk, or journal article claim
  (none was found), any application submission number, deadline, or
  decision date presented as a portfolio fact.

### Contact (`/contact`)

- Purpose: make contact take one tap, and make it work if JavaScript
  or a form fails.
- Blocks in order: email address as a visible, copyable link
  (mizazhaiderceh@gmail.com), GitHub and LinkedIn links, CV download,
  location (city and country only), availability as he has approved it,
  contact form (Formspree wiring preserved from v2) with a clear
  success state and a clear failure state with the email address
  beside it, FAQ accordion (6 questions from v2, reviewed for
  accuracy).
- Primary action: email him.
- Must NOT appear: a phone number, a street address, a form that
  submits without confirmation, a form as the only route.

### Privacy, Terms, 404

- Keep, updated for the new site. Privacy states no data is collected
  and the form is handled by Formspree. 404 is branded with Back home
  and See my work links, with correct per-page metadata (v2 set
  canonical and Open Graph to home values on 404; fix that).

## 4. Expertise groups and evidence (summary)

Each group links to the project or role that proves it. Full group
definitions are in section 3 under Expertise. No group may appear
without at least one linked proof. No percentages, no counts.

## 5. Research and Writing inclusion criteria

- Research: include only what is verified. Research interests, the
  assigned Amsterdam project (planned, labelled as such), and the
  generic submitted-applications line. Exclude any published output
  claim, any programme name, any submission number or decision date.
- Writing and Insights: include only real publications, articles,
  documentation, or write-ups that exist and can be linked. At the
  time of this specification, no standalone Writing page is justified:
  his write-ups live inside project documentation (PenTrix-VulnLab
  docs, PowerShell Academy lessons, Security-Books curation). Do not
  create a Writing page with fake publications. If a real article is
  published later, add the section then. The Research page carries a
  short "Writing lives in the projects" note linking to the project
  documentation instead.

## 6. Search specification

- Trigger: Ctrl+K (and a search button in the navigation), using the
  shadcn Command primitive as recommended in
  docs/02-component-research.md.
- Covers: projects (featured and archive), project detail sections,
  commands (from the PowerShell Academy content model where relevant,
  not from university material), concepts (glossary terms from the
  existing content model), and resources (CV, GitHub, LinkedIn).
- Results are categorised by type, with a short snippet and the
  destination page. Keyboard navigation, highlighted matching terms,
  empty state with useful guidance ("Try PenTrix, PowerShell, or a
  command name").
- Search index is built from the same structured content data as the
  pages (src/data.ts and the project content files), never from a
  separate hardcoded list that can drift.

## 7. Content rules (all pages)

- Confident, evidence-led, work speaks first. No desperate internship
  messaging, no generic copy, no "always learning, always growing".
- Education is accurate but does not dominate identity.
- No institution, course code, lecturer, or professor mention in
  public copy.
- Every number carries its proof beside it, or it does not appear.
- Every claim carries its verification status from the profile audit.
  Unverified claims stay off the public site.
- The three open items (work authorisation wording, Advanced Python
  Scripting issuer, Google AI Essentials confirmation) stay as clearly
  marked placeholders until he answers. Nothing is invented for them.
