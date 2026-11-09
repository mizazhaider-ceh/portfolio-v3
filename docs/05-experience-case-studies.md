# Experience Specification: Case Study Template and Five Featured Case Studies

**Portfolio V3 rebuild, Phase 5. Date: 9 November 2026. Status: specification for Phase 7 build. No code is changed by this file.**

**Authority:** `docs/DESIGN_SYSTEM.md` (Monograph) is authoritative. Where this file and any other doc disagree on look, type, colour, spacing, or motion, the design system wins. Where this file and `docs/03-project-selection.md` disagree on content, the project selection doc wins on facts, and this file wins on how those facts are presented on the page, because presentation is this file's job.

**Sources read in full before writing:** `docs/DESIGN_SYSTEM.md`, `docs/03-brand-strategy.md`, `docs/03-project-selection.md`, `docs/03-information-architecture.md`, `docs/01-profile-audit.md`, `docs/01-repo-audit.md`, and the v2 code `src/routes/projects/PentrixVulnLab.tsx`, `src/routes/projects/PowershellAcademy.tsx`, `src/routes/projects/BugHuntArsenal.tsx`, `src/routes/projects/ApkPipeline.tsx`, `src/routes/projects/AgentArsenal.tsx`, `src/routes/projects/AiTerminalX.tsx`, `src/components/DiagramFigure.tsx`, `src/components/CodeStrip.tsx`, `src/components/PageHero.tsx`, `src/data.ts`.

**Scope:** this file specifies the one case study template for every project detail page, the full content outline for the five featured case studies, the shared components the template needs, responsive behaviour, motion and accessibility, and the Phase 7 verification checklist for these pages. It does not specify Home, Projects index, About, Expertise, Research, or Contact, except where a case study links to them. The two archive detail pages kept from v2, AgentArsenal and Ai-Terminal-X, use the same template, and are covered in section 1 and section 6, with their content notes in section 2.8.

**How to read the counts in this file:** every count that appears on a case study page must sit beside its source on that page. A count in this spec is a specification of what to show, not a substitute for the source line on the page. If Phase 7 finds a count has changed, or its source cannot be shown, the count is omitted from the page until it is re-verified. No count is ever carried into copy from memory alone.

## Hard rules for every case study page

These rules are binding. They repeat the master hard rules, in the form Phase 7 must check against.

1. No em dashes anywhere in copy, code comments, figure notes, or metadata in the build that follows this spec. Use commas, colons, or parentheses instead.
2. Use only Monograph tokens, type, and layouts from `docs/DESIGN_SYSTEM.md`. Do not reuse any token, class, colour, or layout from the rejected v2 system. The word Arsenal in this file appears only inside the project name BugHunt Arsenal. It is never a design system name, a token name, or a colour name here.
3. No bounty program names, report titles, IDs, endpoints, or reward amounts in any proposed public copy. Describe bounty work by category only, and only where a case study needs it. No case study in section 2 needs a bounty program name.
4. Never use any test pass count figure. Never use a GPA figure in a bio line. Never invent experience, grades, skills, benchmarks, users, downloads, vulnerabilities, or business outcomes.
5. Never disclose PenTrix flag storage beyond the one approved sentence, given verbatim in section 2.1. No flag literal is ever shown. No flag value, path, file, or mechanism beyond that sentence is ever written.
6. Email only `mizazhaiderceh@gmail.com` where an email appears. No other email address appears in case study copy.
7. No institution, university, course code, lecturer, or professor mention in any proposed public copy. Education is not a case study section. A project that is a course project is labelled only as "Course project", with no course name, code, or institution.
8. No "looking for an internship" banner, no "give me a chance", no "I am a beginner looking for an opportunity". Availability is not stated on case study pages at all. It lives in About and Contact only.
9. No skill percentages, no skill bars, no testimonial claims, no invented statistics. No star count is hardcoded. A star count is fetched live or omitted, with the fetch date shown beside it if it is shown at all.
10. All fonts and colours come from `docs/DESIGN_SYSTEM.md` exactly. Display: Archivo, expanded width for hero and handoff lines only, weights 600, 700, 800. Text: Instrument Sans, weights 400, 500, 600. Code and metadata: JetBrains Mono, weights 400, 500, 600. Light theme: paper `#F7F3EA`, surface `#FFFEFA`, ink `#1C1A17`, body `#2A2723`, muted `#6E6A61`, line `#DCD5C6`, line strong `#B9B0A0`, accent oxblood `#7A2E25`, accent text `#6E231C`, code ground `#1E1C19`, code body `#E8E2D5`. Dark theme: paper `#191817`, surface `#221F1C`, ink `#F3EFE5`, body `#D5CFC2`, muted `#9C968B`, line `#37332C`, line strong `#57503F`, accent `#D18A74`, accent text `#E0A58F`, code ground `#121110`, code body `#E8E2D5`. Code token colours, light and dark: comment `#8A8378`, keyword `#D8A24A`, string `#A8B89A`, function `#9DBEB0`, number `#D08A5A`, variable `#E8E2D5`. Focus ring: 2px accent outline, offset 2px, in both themes (`#7A2E25` light, `#D18A74` dark). Radii: 2px everywhere. Shadows: none by default. Hairline rules: 1px in the line colour.

## Accent budget for case study pages

The accent oxblood is used in exactly three static places on a case study page, and nowhere else as a static treatment. This is the Monograph rule, applied to this template.

1. The scroll progress rule at the very top of the page, 2px, accent. See section 3.5.
2. The active item in the sticky in page index, marked by a 2px accent underline, and no background wash. See section 1.4.
3. The rule above a chapter handoff line, 1px line strong with the accent used only as the short rule segment defined by the design system for handoffs. On a case study page the handoff is the page title block, so in practice this is the rule above the title block.

No other static accent use is allowed on a case study page. Links are ink with an underline on hover, not accent. Buttons are solid ink or 1px ink border, not accent. Figure notes, catalogue numbers, tags, and meta lines are ink or muted, not accent. Code strips use only the code token colours above. The focus ring is accent, but it is transient, it appears only while an element has keyboard focus, and it does not count as a fourth static use. The challenge panel solved state is also accent in the design system, but the interactive challenge panel is not embedded in a case study body, see section 1.6, so it does not add a use on these pages. Phase 7 must audit the accent count per page, see section 6.

## 1. The case study template

One template, applied to all detail pages: the five featured case studies in section 2, plus the two archive detail pages AgentArsenal and Ai-Terminal-X. Same section order, same index, same header pattern, same plate and figure note pattern, same Links foot. The archive pages may be shorter in copy, see section 2.8, but they must not invent a different order, a different index, or a different foot.

### 1.1 First screen: outcome led

The first screen leads with the outcome, set largest. This is the borrowed outcome led rule from the design system. The visitor must be able to answer, without scrolling, what the project does, what it delivered, and whether there is a live demo or a repo to open.

First screen order, top to bottom:

1. Catalogue line, JetBrains Mono 500, 0.8125rem, muted. Format: catalogue number, project name in the index order, and the page type. Example pattern: `01, PenTrix-VulnLab, Case study`. The catalogue numbers are fixed by the audit order in section 1.2, and are never reordered for visual variety.
2. Title, Archivo 700, Display handoff size `clamp(2.25rem, 4.5vw, 3.5rem)`, line height 1.02, tracking -0.02em, sentence case except proper names. The title is the project name exactly as in the repo or live site. No coloured word, no italic word, no marker span, no pill beside it.
3. Outcome line, Instrument Sans 400, Body large 1.125rem, line height 1.65, ink. One line on desktop, at most two short lines on a phone. This is the one line outcome from the template header, not a paragraph. It must contain the delivered result, not only the topic. Example shape: what it is, who it is for, and what it delivered, in one sentence.
4. Three facts, JetBrains Mono 500, 0.8125rem, muted, separated by 1px vertical rules or commas, never pills, never coloured badges. The three facts are always, in this order: role, stack, status. Status is one of: Live, Repo, or Course project. Where a live demo exists, the status fact reads `Live`, and the first link in Links is the live demo. Where no live demo exists, the status fact reads `Repo`, and the first link is the repo. Where there is no public repo, the status fact reads `Course project`, and Links contains no repo link and no invented repo link. The three facts sit on one ruled line under the outcome, with a hairline above and below.
5. The sticky index begins beside the content from this point on desktop, see section 1.4. On phones the compact jump list sits above the content, see section 4.

What must not be on the first screen: a mission statement, a skill list, a stat strip, a testimonial, a second headline, a hero image that pushes the outcome below the fold, or any availability or hiring line. The first screen is title, outcome, facts, and the start of the Problem section. The hero video, particle field, and challenge panel belong to Home only, and are not repeated on a case study page.

### 1.2 Routes, catalogue numbers, and the next project sequence

| Catalogue | Project | Route | Status fact | Next project link at the foot |
|---|---|---|---|---|
| 01 | PenTrix-VulnLab | `/projects/pentrix-vulnlab` | Repo | 02, PowerShell Academy |
| 02 | PowerShell Academy | `/projects/powershell-academy` | Live | 03, BugHunt Arsenal |
| 03 | BugHunt Arsenal | `/projects/bughunt-arsenal` | Live | 04, APK Security Pipeline |
| 04 | APK Security Pipeline | `/projects/apk-security-pipeline` | Repo | 05, Security-Books |
| 05 | Security-Books | `/projects/security-books` | Repo | 06, AgentArsenal |
| 06 | AgentArsenal | `/projects/agentarsenal` | Repo | 07, Ai-Terminal-X |
| 07 | Ai-Terminal-X | `/projects/ai-terminal-x` | Repo | Back to all projects, `/projects` |

The sequence is a single chain, 01 to 07, then back to `/projects`. There is no dead end. The last page, Ai-Terminal-X, does not link to a non existent next project. Its foot link reads `Back to all projects`, and it goes to `/projects`, where the list starts again at 01. The Projects index and Home must link to the same routes, with the same catalogue numbers, so the sequence reads the same from every entry point. A "Back to projects" link at the top of the page, above the title, is allowed as a secondary return, in mono, with a left arrow in ink, but it is not a substitute for the next project link at the foot. The foot link is the sequence link, and it must be present on every detail page.

Each detail page sets its own per page metadata through the existing `usePageMeta` mechanism: title, description, canonical URL for its own route, and Open Graph title and description for its own route. The description is the one line outcome, not a generic site description. The 404 fix from the repo audit (canonical and Open Graph pointing at Home on a 404) is out of scope for this file, but a case study page must never inherit Home metadata.

### 1.3 Page skeleton, in order

Every detail page follows this skeleton, in this order, with no section added, removed, or reordered without a new decision recorded against this spec.

1. Site navigation, shared, as specified by the design system. Five items maximum, Contact as a solid ink button, theme switch as a text button reading Dark or Light.
2. First screen header: catalogue line, title, one line outcome, three facts. See section 1.1.
3. Compact jump list on phones, or sticky index on desktop. See section 1.4 and section 4.
4. Problem.
5. My role.
6. Decisions.
7. How it was built.
8. Evidence.
9. What I would improve.
10. Links, including the next project link at the foot.
11. Site footer as colophon, shared, as specified by the design system.

Section headings are `h2`, Archivo 600, Title small 1.375rem, line height 1.2, sentence case, left aligned. The page has one `h1`, the project title. No section heading is set in the display hero size. A section opens with its heading, then its content. A handoff line is used only for the page title block, not before every section.

Body copy: Instrument Sans 400, Body 1.0625rem, line height 1.65, body colour, measure capped at 68ch. Lead paragraphs inside a section may use Body large 1.125rem. Lists are short, with bold leads where a lead helps, and are broken into points, never one long unformatted paragraph. The copy rule from the standing method applies: bold English lead per step where a step is given, each command in its own code block with a copy button on a separate line, then a when to run note, never inline.

### 1.4 Sticky in page index, desktop

On desktop, a sticky in page index sits in the left rail, beside the reading column. It is the same index on every detail page, in this order, in JetBrains Mono 500, 0.8125rem, muted, left aligned:

Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links.

Specification:

1. Placement: left rail, columns 1 to 2 on the 12 column grid, while the reading column sits on columns 2 to 11. The index is sticky below the fixed navigation, with a top offset equal to the navigation height plus 32px, so it never sits under the nav bar. It scrolls with the page until its sticky position, then stays while the reader moves through the sections.
2. Behaviour: the index item for the section currently in view gains a 2px accent underline and ink text. All other items stay muted. This is one of the three accent uses on the page, see the accent budget above. The active state is set by scroll position, with the section whose heading has passed the top offset as the active one. No item gains a background wash, a pill, or a coloured dot.
3. Interaction: each item is a real anchor link to its section id. Section ids are fixed: `#problem`, `#my-role`, `#decisions`, `#how-it-was-built`, `#evidence`, `#what-i-would-improve`, `#links`. Clicking an item moves focus to the section heading, and scrolls to it with the heading clear of the fixed nav. Keyboard users can Tab through the index in order. Tap and click targets are at least 44px tall on touch, even on desktop widths where a pointer is present, because the same component is used at the tablet breakpoint before it collapses, see section 4.
4. Content: the index lists section names only, no counts, no numbers beside them, no progress percentage. It does not show a reading progress percentage. The scroll progress rule at the top of the page is the only progress indicator, see section 3.5.
5. What it is not: it is not a second navigation bar, it does not list other projects, it does not collapse into a dropdown on desktop, and it does not follow the reader as a fixed sidebar on phones. On phones it becomes the compact jump list in section 4.

### 1.5 Section by section specification

#### Problem

Length: 2 to 4 short lines. No more. Each line is a short sentence or a short point, not a paragraph. The section answers: what was broken, scattered, or missing, and for whom, before this project existed.

Must say: the gap in plain words, the person affected (a learner, a researcher, a tester, a reader), and why the existing options did not solve it. Must not say: a market size, a user count, a business outcome, or a claim about what competitors do, unless that claim is sourced in the project repo or live site and is shown beside its source.

Visual: the problem frame plate. This is the first of the three required visuals, see section 1.7. It shows the before state, or the scattered state the project replaces. It is a real screenshot, a real diagram, or a real photo of the working context, never a stock image, never a lecture slide image, never a mockup presented as a real product.

#### My role

Length: 3 to 6 short lines, plus a named ownership line where a collaborator exists.

Must say: named ownership, in plain words. Sole builder where that is verified against the repo. Founder, lead developer, challenge designer, and documentation author where those roles are verified, as for PenTrix-VulnLab. Curator and maintainer where that is the role, as for Security-Books. Where a collaborator exists, name the collaborator and name what they own, in the same section, in the same words the project records use. The one named collaboration in this spec is VulnNotes, which is an archive entry, not a featured case study: Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts. That split is the model for how any future collaboration is written: first name, what they own, no vague "we built" without a split.

Must not say: "we" without naming who did what, a team size that is not sourced, a role that is not evidenced by the repo or the live site, or a leadership claim beyond the work shown. If the repo does not confirm sole builder status, the section must say "Role to confirm against the repo before publishing", and Phase 7 must not publish the page until that check is done. This applies to PowerShell Academy, BugHunt Arsenal, and APK Security Pipeline, where the selection doc records "verify against the repo before publishing" for sole builder status.

#### Decisions

Length: 2 to 3 decisions. Each decision is a short block with three parts, in this order: the decision, the alternatives considered, and the trade off accepted. No decision block is longer than 4 short lines. This is the section hiring managers read longest, so it is not shortened to make room for features.

Must say, per decision: what was chosen, what was deliberately not chosen, and what was given up by choosing it. A decision without an alternative and a trade off is not a decision block, it is a feature list, and it must be rewritten. Decisions must be real choices visible in the repo, the live site, or the project documentation, not preferences invented for the page.

Must not say: that a choice was "best", "perfect", or "obvious", or that an alternative was never considered. Must not present a constraint as a decision. "Never deployed publicly" for PenTrix-VulnLab is a constraint from the repo, not a decision, and it belongs in Evidence and Links as a link rule, not in Decisions as if a deployment option was weighed and rejected for taste.

#### How it was built

Length: the longest section after Evidence, but still inside the total word budget in section 1.7. It covers architecture, key modules, and sample output. It never contains a full code dump.

Must say: architecture in plain words first, then key modules or files by name, then one sample output that shows the result. Architecture is shown as a diagram plate where one exists (PenTrix-VulnLab, APK Security Pipeline), or as a short ruled list of stages where no diagram exists (PowerShell Academy stages, BugHunt Arsenal categories). Key modules are named, with one line each on what each module does. Sample output is a short CodeStrip, see section 3.3, or a screenshot of real output, with a figure note. Sample output is real output from the project, never invented output, never a placeholder.

Must not say: a full file listing, a full source file, a step by step install guide (that belongs in the repo README, linked from Links), or a claim about a tool or library that is not in the repo. Where a tool is used only in deep mode, say so, and say what the default mode uses instead. For APK Security Pipeline this matters: the default is pure stdlib Python, deep mode adds apktool, jadx, and androguard.

#### Evidence

Length: as long as its artifacts need, inside the total word budget. This section carries the proof. Every claim in the earlier sections that needs proof is proved here, with the artifact beside it.

Must show, in this order where the project has them:

1. Live demo link where one exists, as a real link, with the live site name and URL shown in the Links section and referenced here by name. No live demo is ever faked with a screenshot of a local run presented as a live site.
2. Repo link, as a real link, with the repo name shown. PenTrix-VulnLab links to the repo only, never a live deployment, see section 2.1.
3. Screenshots of real output, each as a plate with a figure note, see section 1.7. Screenshots are his own only, compressed, with explicit width and height, WebP or AVIF with PNG fallback, and readable text at phone width without pinching.
4. Diagrams, each as a DiagramFigure plate with a text equivalent beside it, see section 3.4.
5. Verified counts beside their source, in a ruled list or a small table, never a stat strip, never a coloured badge. Format per count: count, what it counts, source. Example shape: `201 challenges across 29 modules, source: PenTrix-VulnLab repo README and module list`. A count without a source line does not appear.

Must not show: a screenshot that is not real output, a diagram that has not been rethemed to Monograph tokens, a count whose source is not named, a star count that is hardcoded, a testimonial, a scoreboard image without a caption stating what is shown and what happened, or any image taken from lecture slides.

#### What I would improve

Length: 2 to 3 items, honest and specific, each 1 to 2 short lines. Each item names a real limitation visible in the v2 page, the audit, or the repo, and names what would change, in plain words.

Must say: what is limited, why it matters to the next reader or user, and what the next change would be. Phrasing is as next work, not as done work. Example shape: "The module browser has no search, so finding one challenge among 201 takes scrolling. Next would be a filter by vulnerability class." That shape is a model only, the real items per project are in section 2, and each must be confirmed by Izaz before publishing if it goes beyond a limitation already recorded in the audit or selection doc.

Must not say: a vague improvement ("make it better", "add more features"), an improvement that claims a future user or business result, or an improvement that contradicts a constraint (for example, proposing a public PenTrix deployment as an improvement, when the repo states it must not be deployed publicly).

#### Links

Length: a short ruled list, then the next project link at the foot.

Must list, in this order:

1. Live demo, where one exists, as a primary solid ink button. Label: `Visit the live site`. The URL is the live site URL from `src/data.ts` or the audit, checked live in Phase 7.
2. Repo, where one exists, as a secondary 1px ink border button. Label: `View on GitHub` or `View the repo`. The URL is the repo URL from `src/data.ts` or the audit, checked live in Phase 7. Where there is no public repo, no repo button appears, and the text states `Course project, no public repo` in mono, muted, with no invented link.
3. Next project, at the foot, as a full width ruled block, not a small inline link. Format: catalogue number and name of the next project in mono, then the project title in Archivo 600, Title small, then its one line outcome in Instrument Sans, Body small. The whole block is one link to the next route. On the last page the block reads `Back to all projects` and links to `/projects`. See section 1.2.

Must not list: a live demo for PenTrix-VulnLab, a repo for a project with no public repo, a link that was not checked in Phase 7, a social link (those live in the footer and Contact), or an email link (Contact is the route for email).

### 1.6 What the v2 pages keep, change, or drop

This subsection tells Phase 7 what to do with each v2 pattern on a detail page. It is the bridge from the code read for this spec to the build.

Keep the mechanism, restyle to Monograph: the route table and shared shell (BrowserRouter, ScrollToTop, Nav plus main plus Footer), the per page `usePageMeta` mechanism, the `DiagramFigure` embed pattern (`?embed=1`, theme query param, MutationObserver sync, fallback link), the `useCopy` 2 second Copied state, the Formspree contact wiring (not on a case study page, but kept site wide), and the single typed content source idea from `src/data.ts` (content stays centralised, facts are re-verified before reuse, never retyped from memory).

Change to the new template: every v2 detail page is rewritten into the section order in section 1.3. The v2 `PageHero` pattern (coloured rule, pill label, highlighted topic span with underline, one sentence) is dropped entirely and replaced by the first screen header in section 1.1. The v2 meta grid (four cells, Stack, Status, Challenges, Link) is replaced by the three facts line in section 1.1. The v2 tab browsers (PowerShell stages, BugHunt payload categories, Ai-Terminal-X prompts) are replaced by the one shared Tabs component in section 3.1. The v2 lightbox in `Proof.tsx` (Escape and arrow keys handled, focus not returned) is replaced by the shared Proof lightbox in section 3.2. The v2 `CodeStrip` token colours are remapped to the Monograph code tokens in section 3.3. The v2 diagram files are rethemed, not redrawn, see section 3.4.

Drop from detail pages: the interactive ChallengePanel is not embedded in a case study body. The panel is a Home hero moment. On the PenTrix case study, the challenge is shown as a static numbered plate with three steps (Read the request, Spot the flaw, Prove it) plus a fourth step showing the fix, using real request and response text in a CodeStrip, with a link reading `Try it on the home page` that goes to `/` and anchors to the panel. This keeps the accent budget at three, keeps the case study readable without interaction, and keeps the proof on the page as real output, not as a widget that must be played with to understand the project. The v2 "Back to projects" button at the foot of every detail page is replaced by the next project block in section 1.5, Links. The v2 checklist of features ("What this project proves" as a checklist) is replaced by the Evidence section, where each item sits beside its artifact.

### 1.7 Reading target, word count, and visuals

Reading target for a featured case study: 5 to 10 minutes, 600 to 900 words. Word count counts body copy in Problem, My role, Decisions, How it was built, Evidence, and What I would improve, plus figure notes and captions. It does not count the header facts, the index labels, the Links list, code samples, or table cell text, because those are reference, not reading. If a draft exceeds 900 words, cut copy, not evidence. Shorten a paragraph, do not drop a plate. If a draft is under 600 words for a featured case study, it is thin, and Phase 7 must add a decision trade off, a module line, or a figure note, not filler.

Security-Books is compact, see section 2.5. Its target is 400 to 600 words, 5 to 7 minutes, same template, same index, same foot. The archive detail pages AgentArsenal and Ai-Terminal-X use the same template, with a target of 400 to 700 words, see section 2.8.

At least three supporting visuals per case study, in this order, one per role:

1. A problem frame: the before state, or the scattered state the project replaces.
2. A process or iteration shot: the work in progress, a stage browser, a payload browser, a pipeline stage, or a draft that shows how the result was reached.
3. The final delivered design: the live site, the lab running, the report, or the curated list as the reader will find it.

Every visual is a plate. A plate is a surface ground block, 1px line border, 2px radius, no shadow, with the image or diagram inside, and a figure note stating what is shown and what happened. The figure note is JetBrains Mono 500, 0.8125rem, line height 1.5, muted, sentence case. Wording pattern for every figure note, in two labelled parts: `What is shown: ... What happened: ...` Each part is 1 to 2 short lines. The labels are bold in the rendered note, the key terms are dark bold, and the note is never one long paragraph. On desktop the figure note sits beside the plate. On phones it sits above the plate. See section 4 for the exact breakpoint.

Plates may run columns 1 to 12, or columns 2 to 12, on desktop. The reading column sits on columns 2 to 11. A plate that runs 1 to 12 is a full width plate, used at most once per case study, for the final delivered design where the image needs the width to stay readable. All other plates sit inside the reading column or at 2 to 12. No plate bleeds on one side only. No plate is forced to a viewport height.

Every plate carries alt text that names what is shown, and explicit width and height so the page does not shift while the image loads. Every plate that opens larger uses the Proof lightbox in section 3.2. A plate that is a diagram uses DiagramFigure in section 3.4, with a text equivalent beside it, and the "Open the diagram in a new tab" fallback. A plate that is a screenshot uses a compressed image, WebP or AVIF with PNG fallback, never a 1.5 MB unoptimised PNG. The v2 image audit found `yeswehack-swag.png` at 1.5 MB and `profile.png` at 806 KB, both unoptimised. Case study plates must not repeat that. Phase 7 must record the compressed size beside each plate in its verification notes.

## 2. Per case study outlines

Each outline below gives, per template section, what the section must say, what evidence it must show, and what it must not claim. Copy lines in quotation marks are proposed public copy, in the voice of the template, and must be checked line by line against the audit before publishing. Counts are given with their source in parentheses after the count, and that source must also appear on the page beside the count.

### 2.1 PenTrix-VulnLab, flagship, catalogue 01

Route: `/projects/pentrix-vulnlab`. Status fact: Repo. Stack fact: Express, SQLite. Role fact: Founder and lead developer. Outcome line (proposed): "A deliberately vulnerable lab where students learn web penetration testing by exploiting real vulnerability classes in a safe, local environment."

Counts to use, each beside its source on the page: 201 challenges across 29 modules (source: PenTrix-VulnLab repo README and module list). 3 kill chain scenarios (source: repo README). 3 career paths with verifiable certificates (source: repo README). No other PenTrix count is used on the page. No user, download, deployment, or install count is claimed, because no verified source supports one.

Problem (2 to 4 short lines). Must say: learning labs either hand the learner the answer, or give a black box with no path from finding to fixing. The learner affected is a student learning web penetration testing. The gap is a path, not a single exploit. Must not say: that other labs are insecure, that this lab is a commercial product, or that it replaces a course.

My role. Must say: founder, lead developer, challenge designer, documentation author. Personal contributions named, no team claim. The lab is his initiative, The PenTrix, presented as an initiative he founded and developed, not as a course assignment and not as a commercial product. Must not say: that a team built it, or that an employer commissioned it.

Decisions (2 to 3, each with alternatives and trade off). Must cover these three, in this order:

1. Deliberately vulnerable by design, safe local install only. Alternative considered: a hosted demo anyone could open in a browser. Trade off accepted: reach is given up for safety and for a lab that can be run on the student's own machine without exposing a vulnerable app to the internet.
2. Challenges graded by vulnerability class, not by trick. Alternative considered: puzzle style challenges where the trick is the point. Trade off accepted: some surprise is given up for a clear path from finding to fixing, so a learner can repeat the method on the next class.
3. Flags generated per install at first boot. Alternative considered: fixed flags checked into the repo. Trade off accepted: a fixed answer key would be simple to check, but it would leak the answers, so per install generation is chosen even though it means no two installs share the same flag value.

How it was built. Must say: Express and SQLite application, browser to Express app to SQLite database, 29 challenge modules grouped by vulnerability class, 3 kill chain scenarios that string single flaws into a full attack path, 3 career paths with verifiable certificates. Key modules are the challenge modules by class, the kill chain scenarios, and the career paths. Sample output is the real request and response for the `/admin` forced browsing challenge, shown as a CodeStrip: `GET /admin` with the response status, and the three steps Read the request, Spot the flaw, Prove it, plus a fourth step showing the fix. The interactive ChallengePanel is not embedded here, see section 1.6. The static plate links to the panel on Home.

Evidence. Must show: repo link only, never a live deployment link. The page must state, in plain words in Evidence and again in Links: "PenTrix-VulnLab must not be deployed publicly. The repository is the only link." Architecture diagram, restyled to Monograph tokens, as a DiagramFigure plate from `public/diagrams/pentrix-architecture.html`, with a text equivalent beside it naming browser, Express app, SQLite database, 29 challenge modules, 3 kill chain scenarios, and 3 career paths. Module browser screenshot or list, as a plate with a figure note. Sample challenge walkthrough using only real screenshots, as a plate with a figure note. Flag wording, verbatim, in a ruled note, not a coloured callout: "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags." That sentence is the only flag storage wording on the page. No other sentence about where flags are stored, how they are generated beyond that sentence, or what a flag value looks like is allowed.

What I would improve (2 to 3, honest and specific, as next work, to confirm with Izaz before publishing). Proposed direction, not final copy: a filter or search in the module browser so finding one challenge among 201 does not take scrolling; clearer setup guidance for a first local install, naming the one step learners most often miss; deeper fix guidance after a challenge is solved, so the step from exploit to fix is as guided as the step from finding to exploit. Each item must name the limitation and the next change, and must not claim the change is already done.

Links. Repo only: `https://github.com/mizazhaider-ceh/PenTrix-VulnLab`. No live demo button. Next project: 02, PowerShell Academy, `/projects/powershell-academy`.

Must NOT claim: a live deployment, a user count, a download count, a deployment count, a flag value, a flag location, a team, a commercial product, a course assignment, or that the lab teaches a specific vulnerability class beyond what the module list shows.

Visuals (at least three, in the order in section 1.7): problem frame, a screenshot or diagram showing a lab with no path from finding to fixing, or the scattered notes a learner starts with; process shot, the module browser or the challenge steps plate; final delivered design, the architecture diagram restyled to Monograph tokens, or a screenshot of the lab running locally. The architecture diagram counts as one of the three, and its figure note must state what is shown (browser, Express app, SQLite, modules, scenarios, career paths) and what happened (the diagram was restyled to Monograph tokens, not redrawn).

### 2.2 PowerShell Academy, catalogue 02

Route: `/projects/powershell-academy`. Status fact: Live. Stack fact: TypeScript, Next.js, plain CSS. Role fact: Sole builder, to verify against the repo before publishing. Outcome line (proposed): "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages, from foundations to security projects."

Counts to use, each beside its source on the page: 18 chapters (source: live site, `https://powershell-academy-seven.vercel.app/`). 61 lessons (source: live site). 48 glossary terms (source: live site). 102 commands (source: live commands page, verified in the prior pass; the audit notes this figure did not appear on the homepage text fetched in the audit pass, so Phase 7 must re-verify it on the live commands page before handover, and if it cannot be re-verified there, the figure is dropped from the page and the outcome line is shortened to chapters, lessons, and glossary terms only). 6 stages (source: live site and `PS_STAGES` in `src/data.ts`). Stage breakdown to show in the Tabs panel, see section 3.1: Foundations, 1 chapter, 5 lessons; PowerShell Basics, 4 chapters, 18 lessons; Core Skills, 4 chapters, 7 lessons; Admin Power, 6 chapters, 19 lessons; Security Power, 2 chapters, 8 lessons; Projects, 1 chapter, 4 lessons. The stage numbers sum to 18 chapters and 61 lessons, and Phase 7 must check that sum on the page. Do not use the stale repo README counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms). Those are unverified and must not appear.

Problem (2 to 4 short lines). Must say: PowerShell learning material is scattered, and beginners need a single path from first command to real administration. The learner affected is a beginner who knows no PowerShell. The gap is a single sequenced path, not another reference page. Must not say: that other material is wrong, or that the Academy replaces formal study.

My role. Must say: sole builder, with the verification gate in the selection doc. If any contribution was shared, name it before publishing, and change the role fact to name the shared part. Credit line, verbatim where it appears: "Created by Muhammad Izaz Haider" only. No other credit line appears. Must not say: that a team built it, or that it is an official product.

Decisions (2 to 3, each with alternatives and trade off). Must cover these three, in this order:

1. Structured data plus one renderer, instead of a page per lesson. Alternative considered: one hand built page per lesson. Trade off accepted: a single renderer is less flexible per lesson, but 61 lessons stay consistent, and a fix in the renderer fixes every lesson at once.
2. Plain CSS instead of Tailwind. Alternative considered: a utility framework for speed. Trade off accepted: more hand written CSS, but reliability and bundle size are kept under control, and the reading flow does not depend on a framework build step for its core layout.
3. Single column lessons with no competing sidebar. Alternative considered: a sidebar with the full chapter tree always visible. Trade off accepted: navigation takes an extra tap, but the reading line stays clean at mobile widths, and the lesson is the only thing on the screen.

How it was built. Must say: Next.js App Router, React, TypeScript, structured content data, generic lesson renderer, client side search index. Key modules are the six stages, the lesson renderer, the command reference, the search index, and the quizzes. Sample output is a real lesson excerpt or a real command, shown as a CodeStrip, for example `Get-Command *-Process` with the note that the verb noun shape is read before the command is run. The sample must be a real command from the Academy, with its help text or its lesson context beside it, not an invented command.

Evidence. Must show: live site link `https://powershell-academy-seven.vercel.app/` as the primary button. Repo link `https://github.com/mizazhaider-ceh/my-powershell-academy` as the secondary button. Note the repo name is `my-powershell-academy`, not `powershell-academy`, which returns 404. Screenshots of the lesson reader and the command reference, each as a plate with a figure note. The six stages as the shared Tabs component, see section 3.1, with the stage name, chapter and lesson counts, and one line note per stage from `PS_STAGES`. Theme switching is mentioned only as a feature with a screenshot if one is shown, not as a claim without proof.

What I would improve (2 to 3, honest and specific, as next work, to confirm with Izaz before publishing). Proposed direction, not final copy: keeping 61 lessons consistent when a command changes, by naming the check that catches a stale lesson; a clearer path from the command reference back into the lesson that teaches it, so a reader who finds a command can find its lesson in one tap; a mobile reading check at 375px for the longest lesson, naming what breaks if it does. Each item must name the limitation and the next change, and must not claim a user count or a traffic count as the reason.

Links. Live site first, repo second, next project third: 03, BugHunt Arsenal, `/projects/bughunt-arsenal`.

Must NOT claim: no command execution in the browser is a security statement, and it must be stated plainly in How it was built or Evidence: "No command execution in the browser, no accounts, no data collection." Must not claim: a user count, a traffic count, a completion rate, that every command was verified (say instead that commands were verified against documentation, and name the check), or the stale README counts.

Visuals (at least three): problem frame, scattered PowerShell material or a beginner facing many disconnected pages; process shot, the stages Tabs panel or a lesson draft; final delivered design, the lesson reader on the live site, and the command reference. The lesson reader screenshot must show the single column flow, with no sidebar competing for the screen.

### 2.3 BugHunt Arsenal, catalogue 03

Route: `/projects/bughunt-arsenal`. Status fact: Live. Stack fact: to verify from the repo before publishing, see below. Role fact: Sole builder, to verify against the repo before publishing. Outcome line (proposed): "Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules. No install, no sign up."

Counts to use, headline figures only, each beside its source on the page: 800+ payloads (source: live site headline, `https://bughunt-arsenal.vercel.app/`). 60+ CTF tools (source: live site headline). 14+ modules (source: live site headline). Also allowed, because they are headline figures on the same live page: 150+ security tools, 21+ categories, 50+ free labs (source: live site headline). No other BugHunt count is used on the page.

Never use, on the page, in a figure note, in metadata, or in a caption: the stat strip figures 336+ payloads, 24+ CTF tools, 12+ modules. Never use "48% free". That phrase is meaningless beside the free claim, and it is removed, not replaced with another percentage. Never use the open source claim until a repo is confirmed. No repo was found in the 81 public repos at audit date. If Phase 7 confirms a repo, the repo link and the open source wording may be added then, with the repo URL shown as the source. Until then, Links contains the live site only, plus the next project link, and no repo button appears for BugHunt Arsenal. The page must not state that a repo exists, and must not link to a guessed repo URL.

Problem (2 to 4 short lines). Must say: security researchers keep payloads and tools scattered across notes, repos, and browser tabs. The researcher affected is a hunter who needs a payload or a tool during a test. The gap is one browser place for payloads, tools, and method, not another list of links. Must not say: that other payload libraries are wrong, or that this platform finds vulnerabilities by itself.

My role. Must say: sole builder, with the verification gate. Stack must be verified from the repo before publishing. If no repo is confirmed, the stack fact must not name a stack that is unverified. In that case the three facts read: role Sole builder (to verify), stack Browser app, status Live. The stack fact is then corrected in Phase 7 only when the repo or the live site source confirms it. Must not say: that a team built it, or that the platform is open source.

Decisions (2 to 3, each with alternatives and trade off). Must cover these, with the verification gate noted where a decision depends on an unverified stack:

1. Browser based, no install, no sign up. Alternative considered: a desktop tool or a hosted tool that needs an account. Trade off accepted: browser limits are accepted, but a researcher can open it and use it without installing anything or creating an account.
2. Payload browser organised by category, with copy per payload, and nothing executed. Alternative considered: a runner that executes a payload from the page. Trade off accepted: the page is less direct, but nothing here is executed, and the researcher copies a payload into their own testing workflow where they control the target and the scope. The framing "Nothing here is executed" must appear beside the payload browser, in plain words.
3. Payloads plus tools plus method in one place (payload browser, Chain Builder, Metadata Analyzer, Encoder and Decoder, HTTP Request Builder, OWASP Top 10 methodology). Alternative considered: payloads only. Trade off accepted: breadth makes the page harder to keep consistent, but a researcher does not have to leave the platform to encode, build, or check method.

How it was built. Must say: browser based platform, payload categories, CTF tools, and the named tools above, only where the live site shows them. Key modules are the payload categories (six categories from `BUGHUNT_CATEGORIES` in `src/data.ts`: Cross site scripting, SQL injection, Server side request forgery, Path traversal, Command injection, XML external entity), the Chain Builder, the Metadata Analyzer, the Encoder and Decoder, the HTTP Request Builder, and the OWASP Top 10 methodology section. Sample output is an example payload in a CodeStrip, with a Copy button, as in v2, and the note "Nothing here is executed" beside it. The payload browser uses the shared Tabs component, see section 3.1, one tab per category, with example payloads per tab. Do not show a payload that is not in the live site or in `BUGHUNT_CATEGORIES`.

Evidence. Must show: live site link `https://bughunt-arsenal.vercel.app/` as the primary button. Payload browser screenshots, each as a plate with a figure note, showing a category tab open and example payloads visible. A screenshot of a tool page (Chain Builder, Metadata Analyzer, Encoder and Decoder, or HTTP Request Builder) as a plate with a figure note, only if that tool is live on the site at Phase 7 check time. Verified counts beside their source, using the headline figures only, in a ruled list, never a stat strip. Must not show: the stat strip, a testimonial ("Loved by Hackers" quotes on the live site use unverified handles and are never reused), a user count, a download count, or an open source badge.

What I would improve (2 to 3, honest and specific, as next work, to confirm with Izaz before publishing). Proposed direction, not final copy: fix the live site stat contradiction, so the headline and the stat strip agree, naming the three figures that disagree today (payloads, CTF tools, modules) without repeating the wrong figures on the portfolio page; a clearer statement of what is free, in plain words, replacing any percentage with a verifiable sentence; a check that every payload in the browser matches the live site, so the portfolio sample and the live product do not drift. Each item must name the limitation and the next change, and must not claim the fix is already done.

Links. Live site first, no repo button until a repo is confirmed, next project third: 04, APK Security Pipeline, `/projects/apk-security-pipeline`.

Must NOT claim: the stat strip figures, "48% free", the open source claim, a user count, a download count, a testimonial, or a stack that has not been verified from the repo.

Visuals (at least three): problem frame, scattered payloads across notes, repos, and tabs; process shot, the payload browser with a category tab open; final delivered design, the live site home or a tool page, as a plate with a figure note stating what is shown and what happened when the screenshot was taken.

### 2.4 APK Security Pipeline, catalogue 04

Route: `/projects/apk-security-pipeline`. Status fact: Repo. Stack fact: Pure Python, v2.1.0. Role fact: Sole builder, to verify against the repo before publishing. Outcome line (proposed): "One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports."

Counts and technical facts to use, each beside its source on the page: pure stdlib Python CLI, Python 3.10+, zero dependencies (source: repo README). 64 tests passing at v2.1.0 (source: repo README; the audit notes this figure comes from the README in the prior pass and was not re-run in the audit pass, so Phase 7 must re-check the README at build time, and if the README has moved on, use the README figure at build time with its version, or omit the count). 4 Frida scripts (source: repo README and project documentation). Scoring: 100 minus critical 25, high 15, medium 7, low 3 (source: repo README and project documentation). Exit codes: 0 clean, 2 findings at or above the threshold, 1 clean error, never a traceback (source: repo README and project documentation). Demo run on a synthetic APK: score 26 out of 100, grade F, 12 findings (source: v2 build demo run, as recorded in the selection doc). That demo run is the primary demo on the page. Two further sample runs are recorded in the audit, and may be shown only as separate labelled samples, never as the same run: clean sample 100 out of 100, grade A, 0 findings; vulnerable sample 0 out of 100, grade F, 24 findings (source: prior pass sample runs, not re-run in the audit pass). Each sample must be labelled with its sample name and its source, so the reader does not mistake three runs for one run.

Problem (2 to 4 short lines). Must say: APK security tools are heavy, and a lightweight, explainable scanner that shows its reasoning is more useful for learning and for quick triage. The person affected is a tester or learner who needs to check an APK without a heavy setup. The gap is explainability, not only a score. Must not say: that other tools are wrong, or that this tool replaces a full mobile assessment.

My role. Must say: sole builder, with the verification gate. Must not say: that a team built it, or that it is a commercial scanner.

Decisions (2 to 3, each with alternatives and trade off). Must cover these three, in this order:

1. Own binary AXML parser and writer, instead of depending on a library. Alternative considered: a third party parser for the AndroidManifest. Trade off accepted: more code to maintain, but the tool stays explainable, stays pure stdlib in its default mode, and the reader can follow how a manifest is read and written.
2. A setup command that installs only missing tools. Alternative considered: bundling every deep mode tool, or requiring the user to install all of them by hand. Trade off accepted: setup takes a step, but the default install stays light, and deep mode adds apktool, jadx, and androguard only when they are needed.
3. Masked secrets in reports. Alternative considered: full output in the report, including any secret found. Trade off accepted: the report is less complete as a raw dump, but a secret is not copied into a shareable HTML or JSON file.

How it was built. Must say: pure stdlib Python CLI, own binary AXML parser and writer, deep mode using apktool, jadx, and androguard, 4 Frida scripts, scoring as above, HTML and JSON reports, baseline and CI modes. Key modules are the six stages from `APK_STAGES` in `src/data.ts`, shown as a ruled table, not a card grid: Static manifest rules (permissions, exported components, manifest settings; produces findings with severity), Strings and code rules (hardcoded secrets, unsafe crypto, risky API use; produces findings with severity), Frida dynamic traces (what the app actually does while it runs; produces runtime evidence), Scoring (every finding weighs into one score out of 100; produces a grade from A to F), Reports (the same result as HTML for people and JSON for tools; produces HTML and JSON reports), Baseline and CI (compare against a known good run, or fail the build on new findings; produces baseline diff, CI exit code). Sample output is a short CodeStrip showing a real command and a short explain log line, plus the demo run score line, never a full report dump. The pipeline diagram is a DiagramFigure plate from `public/diagrams/apk-pipeline.html`, restyled to Monograph tokens, with a text equivalent beside it.

Evidence. Must show: repo link `https://github.com/mizazhaider-ceh/apk-security-pipeline` as the primary button. Pipeline diagram plate, with a figure note. Sample report preview image `public/images/apk-report-preview.png` as a plate, with a figure note stating what is shown (the HTML report preview) and what happened (the vulnerable sample at 0 out of 100, grade F, with its finding count beside the source, only if that sample is the one shown; if the plate shows the synthetic demo run instead, the figure note must state 26 out of 100, grade F, 12 findings, and must not mix the two runs). The demo run on the synthetic APK (26 out of 100, grade F, 12 findings) as a ruled list or a small table, with the score, the grade, and the finding count each beside the source line "Demo run on a synthetic APK, as recorded in the v2 build". The attributeStart bug as debugging evidence, in a short block: what the bug was (attribute start is relative to the end of the node header), how it was found (on a real APK), how it was fixed, and how it was verified (checked against androguard on 3 real APKs). Present this as evidence of debugging, not as a flaw. The security statement must appear in plain words: "The tool analyses APKs, it does not execute them; findings are reported, not exploited."

What I would improve (2 to 3, honest and specific, as next work, to confirm with Izaz before publishing). Proposed direction, not final copy: a clearer explain log for the deep mode step, so a reader can tell which tool produced which finding; a smaller default report for a clean run, so a 100 out of 100 result does not read as an empty report; a re-run of the 64 tests at the current version before the next release, so the test count on the page matches the repo at handover. Each item must name the limitation and the next change, and must not claim a user count or a download count as the reason.

Links. Repo first, next project second: 05, Security-Books, `/projects/security-books`. No live demo button, because there is no live demo. The tool is a CLI, and the repo is the only link.

Must NOT claim: that the tool executes APKs, that a finding is an exploit, a user count, a download count, a test count beyond the versioned README figure, or that the demo run and the sample runs are the same run.

Visuals (at least three): problem frame, a heavy tool setup or a score with no reasoning shown; process shot, the pipeline diagram or a terminal explain log; final delivered design, the HTML report preview plate, with the demo run score beside it. The pipeline diagram counts as one of the three, and its figure note must state what is shown (static rules, strings and code rules, Frida traces, scoring, reports, baseline and CI) and what happened (the diagram was restyled to Monograph tokens, not redrawn).

### 2.5 Security-Books, compact case study, catalogue 05

Route: `/projects/security-books`. Status fact: Repo. Stack fact: Curated list repository. Role fact: Curator and maintainer. Outcome line (proposed): "The cybersecurity library: 160+ curated books, guides, and resources."

This is a compact case study. Same template, same section order, same index, same foot. Shorter copy: 400 to 600 words, 5 to 7 minutes. Same visual minimum: at least three plates, in the order in section 1.7, because a compact case study is still a case study, and its proof still needs a problem frame, a process shot, and a final delivered design. Compact means fewer words per section, not fewer sections and not fewer visuals.

Counts to use, each beside its source on the page: 160+ curated books, guides, and resources (source: repo README and `src/data.ts`, `Security-Books` entry). Most starred repo (source: GitHub API, live at audit date, with the star count fetched live or omitted, never hardcoded). Star count rule: the audit date figure was 139 stars, 43 forks, at 9 November 2026. That figure must not be hardcoded on the page. Phase 7 must fetch the live star count at build time, show it with its fetch date beside it, or omit the number entirely and state only "Most starred repo" with the source line "GitHub, live fetch". If the live fetch is not wired, omit the number. No other Security-Books count is used on the page.

Problem (2 to 4 short lines). Must say: good security reading is scattered and hard to choose between. The reader affected is a learner choosing what to read next. The gap is curation, not another list of titles. Must not say: that other lists are wrong, or that reading a book replaces practice.

My role. Must say: curator and maintainer. The work is choosing, organising, and keeping the list current, not writing the books. Must not say: that he authored the books, or that a team curates it.

Decisions (2 to 3, each with alternatives and trade off). Must cover these, in this order:

1. Curated by topic, instead of a chronological list. Alternative considered: adding every book in the order it was found. Trade off accepted: curation takes longer per entry, but a reader can find the topic they need without reading the whole list.
2. A repo as a list, instead of a separate site. Alternative considered: a full learning site for the books. Trade off accepted: a repo is simpler to maintain and to contribute to, but it does not offer search, quizzes, or progress tracking.
3. Star count fetched live or omitted, instead of hardcoded. Alternative considered: printing the star count from the audit date. Trade off accepted: the page needs a live fetch or an omission, but a hardcoded number would go stale, as the audit shows it already moved from 138 to 139 in one day.

How it was built. Must say: a curated list repository, organised by topic. Verify the structure from the repo before publishing, and name the topics as they appear in the repo at Phase 7 check time, not from memory. Key modules are the topic sections, with one line each on what each topic covers. Sample output is a short excerpt of the list, as a CodeStrip or a ruled list, showing topic headings and a few entries, never the full list. The full list lives in the repo, linked from Links.

Evidence. Must show: repo link `https://github.com/mizazhaider-ceh/Security-Books` as the primary button. Screenshots of the repo list view, organised by topic, as plates with figure notes. The most starred claim beside its source, with the live star count or an omission, per the rule above. No download count, no user count, no reading completion claim.

What I would improve (2 to 3, honest and specific, as next work, to confirm with Izaz before publishing). Proposed direction, not final copy: a one line note per topic on who that topic is for, so a beginner does not start with an advanced book; a regular check for dead links, naming how often the check would run; a short note on how a book earns its place, so the curation rule is visible to the reader. Each item must name the limitation and the next change, and must not claim the change is already done.

Links. Repo first, next project second: 06, AgentArsenal, `/projects/agentarsenal`. No live demo button, because there is no live demo. The repo is the only link.

Must NOT claim: a hardcoded star count, a download count, a user count, authorship of the books, or a future direction beyond what the repo records. Future direction, if stated, is as recorded in the repo, not invented.

Visuals (at least three): problem frame, scattered reading lists or many disconnected recommendations; process shot, the topic organisation or a curation draft; final delivered design, the repo list view as the reader will find it. Each plate needs a figure note in the pattern in section 1.7.

### 2.6 What the five outlines share, and what they do not share

Shared: the same template, the same index, the same header facts pattern, the same plate and figure note pattern, the same Links foot with a next project link, the same word count method, and the same rule that every count sits beside its source. No featured case study gets a different section order, a different index, or a per project colour field. Per project colour fields are not used, because they would break the one accent rule.

Not shared: the outcome line, the stack fact, the status fact, the decisions, the evidence artifacts, and the improvements are per project, as in sections 2.1 to 2.5. A decision, a count, or a screenshot from one project must never be copied to another project to fill a gap. If a project has no live demo, it has no live demo button. If a project has no repo, it has no repo button. If a count cannot be sourced, it is omitted.

### 2.7 VulnNotes note, for the archive, not a featured case study

VulnNotes is not a featured case study. It stays in the archive, with its status labelled accurately, and the team split named. This note is included here because the template section 1.5 uses VulnNotes as the model for naming collaborators, and Phase 7 must not promote it to a featured slot by mistake.

Archive entry must say: deliberately vulnerable notes app, course project, no public repo. Role split, verbatim model: Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts. Demo is individual. No repo link appears, no private repo is linked, no graded lab file is published. If a future phase gives VulnNotes a public repo and a full evidence set, it may be reconsidered for a detail page then, using the same template, and this spec must be updated to say so. Until then, it is an archive entry only.

### 2.8 AgentArsenal and Ai-Terminal-X, archive detail pages using the same template

Routes: AgentArsenal `/projects/agentarsenal`, Ai-Terminal-X `/projects/ai-terminal-x`. Catalogue numbers 06 and 07, see section 1.2. Both keep a detail page, demoted from featured, linked from the archive, not from Home. Both use the same template in section 1, same section order, same index, same plate and figure note pattern, same Links foot with a next project link. Target: 400 to 700 words, 5 to 7 minutes. At least three visuals per page, in the order in section 1.7, or, where a page has only two real visuals, the third visual is a real screenshot of the repo or the tool running, never a mockup, and the gap is recorded in the Phase 7 notes.

AgentArsenal. Must say: unified skills repository, per skill versioning, automated testing, quality scoring, one command installer. Counts, each beside its source: 353 skills across 29 domains, 290 sub-skills, 36 agents (source: workspace manifest, generated 27 October 2026, prior pass, not GitHub API verified, so the source line on the page must state that the counts come from the project manifest, not from the GitHub API). Also inside, as recorded in v2: 25 brains, 14 check CI harness, 0 to 100 scorer (source: v2 page and manifest, to re-verify from the workspace copy before handover, per the audit). Skills tree diagram from `public/diagrams/skills-tree.html` as a DiagramFigure plate, restyled to Monograph tokens, with a text equivalent beside it. Domain browser with a filter input, using the shared Tabs or filter pattern only if it meets the accessibility rules in section 5, otherwise as a simple filter list with a label and a no match message. Must not say: that the counts are API verified, that breadth proves depth in every domain, or a user count.

Ai-Terminal-X. Must say: AI powered Linux terminal assistant, plain language to executable commands, with safe execution checks, built for Linux. Example prompts from `AI_TERMINAL_EXAMPLES` in `src/data.ts`, using the shared Tabs component, one tab per prompt, with the prompt, the command in a CodeStrip, and the note beside it. The safe execution note must appear beside the prompts, in plain words: before running any command, a multi layer risk check runs, then confirmation is asked when needed, and nothing runs without permission. Must not say: "most starred tool" without a date and a source, because the audit shows Security-Books is the most starred repo, and the Ai-Terminal-X star figure in v2 (38 stars, GitHub, 8 November 2026) will go stale. Star count, if shown, is fetched live or omitted, never hardcoded. The three example prompts in v2 are: "Show my public IP address" to `curl ifconfig.me`, "List all files in the current directory" to `ls`, "Check disk usage" to `df -h`. Those are the only prompts the page may show without a repo check. Must not say: that a command is executed on the page. The framing "Nothing here is executed" must appear beside the prompts.

Both pages end with the next project link in section 1.2, so the sequence stays complete. AgentArsenal links to Ai-Terminal-X. Ai-Terminal-X links back to `/projects`.

## 3. Shared components the template needs

One component each, shared across all detail pages. No detail page implements its own copy of Tabs, lightbox, CodeStrip, or DiagramFigure. If a page needs a variation, the shared component gains a prop, and the variation is documented here, not copied into the page.

### 3.1 Tabs, one accessible component

Use: PowerShell Academy stages (6 tabs), BugHunt Arsenal payload categories (6 tabs), Ai-Terminal-X example prompts (3 tabs), and any similar tabbed browser on a detail page. The v2 pages implemented tab browsers separately, with near identical structure, a `role="tablist"` row, a state index, and a content panel, but without real tab semantics. The v2 buttons carried `role="tab"` and `aria-selected` in two pages, but arrow key navigation was not implemented, and `aria-controls` was missing. The shared component fixes all three gaps.

Specification:

1. Semantics: a real tab pattern. The tab list has `role="tablist"` and an `aria-label` naming what the tabs choose (for example "Academy stages", "Payload categories", "Example prompts"). Each tab is a real `button` with `role="tab"`, `id`, `aria-selected` (true for the active tab, false for the rest), `aria-controls` pointing at its panel id, and `tabindex` 0 for the active tab, -1 for inactive tabs (roving tabindex). Each panel has `role="tabpanel"`, `id`, `aria-labelledby` pointing at its tab id, and `tabindex` 0 so keyboard users can move into it. Only the active panel is rendered visible. Inactive panels are hidden with the `hidden` attribute, not only visually, so a screen reader does not read hidden panels.
2. Keyboard: Left Arrow moves to the previous tab, Right Arrow moves to the next tab, Home moves to the first tab, End moves to the last tab, with wrapping at the ends. Activation is automatic on arrow key focus (the panel changes as focus moves), because these tabs are a simple browser, not a form. Tab key moves from the active tab into the panel, and Shift plus Tab moves back. Enter and Space activate a focused tab where activation is manual, but the component uses automatic activation, so Enter and Space are not needed to change the panel. Focus is visible, 2px accent outline, offset 2px, on every tab.
3. Visual: Monograph tokens only. Tab list is a row of text buttons, Instrument Sans 500, 0.9375rem, ink text, with a 1px line border, 2px radius, padding 14px 20px, surface ground, no pill radius, no coloured background. Active tab: ink text with a 2px ink underline, and a 1px line strong border. Inactive tab: muted text, 1px line border. Do not use accent for the active tab, because the accent budget on a case study page is already spent on the scroll progress rule, the index active item, and the handoff rule. Hover (fine pointer only): the tab lifts 0px, the border darkens to line strong, no shadow. Focus: accent outline, as above. The panel below is a surface card, 1px line border, 2px radius, padding 32px, no shadow, no card inside a card.
4. Layout: tabs wrap to a second row on narrow widths, with 8px gap, and each tab is at least 44px tall. On phones the tab list is a vertical stack or a wrapping row, never a horizontal scroll that hides tabs. No tab is hidden behind a scroll. No timed tabs, no auto rotating tabs. The tab content never changes on a timer.
5. Content: each tab panel contains a heading (Title small), a mono meta line (for example chapter and lesson counts), and Body copy. A panel may contain a CodeStrip, a ruled list, or a plate, but not another Tabs component inside it. No nested tabs.
6. Scripting off: with scripting off, the Tabs component must degrade to all panels shown in order, each with its heading visible, so the content is readable without JavaScript. The component must not hide content behind a tab that cannot be opened without scripting. The build must render the first panel in HTML, and the no script fallback must show every panel, in order, with headings, so the page is complete without interaction.
7. Props (for Phase 7, as a contract, not as code): an id prefix, a label for the tab list, an array of tabs (each with id, label, and panel content), and an optional default active index (0 unless the page links to a specific tab). No prop may carry a colour, a font, or a radius. Those come from tokens only.

### 3.2 Proof lightbox, as a Radix Dialog

Use: every plate that opens larger, on every detail page, plus the Proof gallery where it is redistributed into case studies, About, and Research. The v2 lightbox in `Proof.tsx` handled Escape and arrow keys, set `role="dialog"` and `aria-modal`, but focus was not returned to the thumbnail on close, and focus was not moved into the dialog on open or trapped inside it. The shared component fixes the focus gaps, using Radix Dialog, which provides the focus management.

Specification:

1. Component: Radix Dialog. The dialog is a paper surface block, 1px line border, 2px radius, no shadow, with a hairline above the caption area. The image sits inside the dialog, with its figure note beside the image on desktop, and above the image on phones, in the same mono figure note style as on the page, see section 1.7. The caption is a figure note, never a decorative caption under the image. The dialog does not use a coloured background, a gradient, or a blur.
2. Open: focus is moved into the dialog on open, to the close button or to the dialog itself, as Radix provides. The thumbnail that opened the dialog is recorded. The dialog traps focus while open, so Tab stays inside the dialog. The background page is inert while the dialog is open, and body scroll is locked while open, as Radix provides.
3. Close: focus is returned to the thumbnail that opened the dialog, on close, in every case (close button, Escape, backdrop click where allowed, or arrow navigation that reaches the end). This is the v2 gap, and Phase 7 must test it explicitly, see section 6. Escape closes the dialog. A visible close button, text "Close", at least 44px by 44px, sits in the dialog, with a visible focus outline. The close button is a real button, never an icon alone.
4. Keyboard: Left Arrow shows the previous image in the gallery set, Right Arrow shows the next image, with wrapping at the ends, and the figure note updates with the image. Home and End are not required. Tab moves between the close button, the previous button, the next button, and the dialog content, in order, and never leaves the dialog while it is open. The previous and next buttons are real buttons, text "Previous" and "Next" with an arrow in ink, at least 44px by 44px, with a visible focus outline. They are not icon alone.
5. Content: the image inside the dialog is the same compressed image as the thumbnail plate, at a larger size where the file supports it, with explicit width and height, and alt text that names what is shown. The figure note beside it states what is shown and what happened, in the same two part wording as on the page. No image is shown in the dialog without its figure note. No image is shown at a size where its text is unreadable without pinching on a phone. The dialog is at most 90 percent of the viewport width and height on phones, with the image scaling inside it, and no horizontal overflow.
6. Motion: the dialog opens with a fade and an 8px rise, under 300ms, ease out, as in the design system page transitions. Under reduced motion, the dialog opens with no animation, instantly. No scale animation, no blur animation.
7. Scripting off: with scripting off, the thumbnail plate is a plain link to the image file, or to the figure note page, so the image is still reachable. The lightbox is an enhancement, not the only way to see the image. The plate on the page is visible and readable without the dialog.

### 3.3 CodeStrip, dark code ground in both themes

Use: every code sample on a detail page, including the PenTrix `/admin` request, the PowerShell command sample, the BugHunt payload samples, the Ai-Terminal-X command samples, and the APK command and explain log samples. The v2 `CodeStrip` tokenised code into keywords, functions, strings, numbers, variables and paths, comments, and operators, on a dark ground in both themes, with a small highlighter. The mechanism is kept. The token colours are remapped to Monograph, and the copy button is specified here.

Specification:

1. Ground and type: dark code ground in both themes. Light theme code ground `#1E1C19`, dark theme code ground `#121110`, so code reads as a dark plate inside a light book, and as an inset plate in the dark theme. Code body `#E8E2D5`, JetBrains Mono 400, 0.875rem, line height 1.7. Radius 2px, 1px line border, no shadow. Padding 16px. Horizontal scroll inside the strip where a line is long, never page overflow. Line numbers are not shown, unless a sample needs them to explain a line, in which case they are muted mono, and the sample is short.
2. Syntax highlighting: multicoloured, on the dark ground, in every code example, per the standing rule. Token colours, from the design system, exactly: keywords `#D8A24A` (muted ochre), strings `#A8B89A` (muted sage), functions `#9DBEB0` (muted teal), numbers `#D08A5A` (muted clay), variables and paths `#E8E2D5`, comments `#8A8378` (mono 14px minimum, AA on the code ground). Operators and symbols are code body colour. No purple or pink keywords, no neon green strings, no glowing text. The highlighter must tokenise keywords, functions, strings, numbers, variables and paths, and comments, as v2 did, with the colour map above. A code sample that is all one colour is a failure, and Phase 7 must check it.
3. Copy button: a text button, not an icon alone, reading "Copy", then "Copied" for 2 seconds after a successful copy, then back to "Copy". The button sits on a separate line above or below the strip, or at the top right of the strip, but never inline inside a code line. It is at least 44px tall, Instrument Sans 500, 0.9375rem, ink text on surface ground with a 1px line border, 2px radius, or paper text on ink ground where the design system button pair requires it. Focus is visible, 2px accent outline, offset 2px. The copy uses the existing `useCopy` hook mechanism, with a per key Copied state that clears after 2 seconds. If copy fails, the button reads "Copy" again, and no error is shown as a coloured wash. The button has an accessible name naming what is copied, for example "Copy payload" or "Copy command".
4. Accessible name: the strip has a `role="img"` with an `aria-label` naming the code, as v2 did, or, where the code is also shown as text for copy, a `label` prop that names it, for example "Example payload" or "Command for: Show my public IP address". The label is visible beside the strip where it helps the reader, in mono, muted, and is never the only heading for the section.
5. Length: a CodeStrip shows a sample, never a full code dump. Maximum 12 lines per strip on a detail page, unless a sample needs more to be readable, in which case the maximum is 20 lines and the extra lines are justified in the Phase 7 notes. A longer file is linked from Links to the repo, not pasted into the page. A payload, a command, or a request line is 1 to 3 lines. A sample report excerpt is at most 8 lines.
6. Content: code is real code from the project, never invented code, never a placeholder. A payload is a real payload from the live site or `BUGHUNT_CATEGORIES`. A command is a real command from the Academy or the repo. A request is the real `/admin` request from the PenTrix challenge. Comments in code are real comments, in the comment colour, never a marketing line.

### 3.4 DiagramFigure, Archify diagrams rethemed to Monograph tokens

Use: PenTrix-VulnLab architecture diagram, APK Security Pipeline workflow diagram, and AgentArsenal skills tree diagram. The v2 `DiagramFigure` embedded an Archify viewer HTML file in an iframe, with `?embed=1&theme=light|dark`, theme synced live by a MutationObserver on the `data-theme` attribute, a captioned figure, and an "Open the diagram in a new tab" fallback link. The mechanism is kept. The styling is rethemed.

Specification:

1. Retheme: Archify diagrams are rethemed to Monograph tokens before they are embedded. Paper ground (`#F7F3EA` light, `#191817` dark), surface ground for diagram cards (`#FFFEFA` light, `#221F1C` dark), ink lines and ink text (`#1C1A17` light, `#F3EFE5` dark), muted secondary text (`#6E6A61` light, `#9C968B` dark), hairline rules in the line colour (`#DCD5C6` light, `#37332C` dark). Accent oxblood is used only for the single highlighted path per diagram (`#7A2E25` light, `#D18A74` dark), and nowhere else in the diagram. No other colour, no gradient, no shadow, no pill, no per project colour field. Fonts inside the diagram are Archivo for diagram titles, Instrument Sans for diagram labels, and JetBrains Mono for diagram catalogue numbers and meta, matching the page type scale, or the closest Archify font that matches those roles, with the choice recorded in the Phase 7 notes. Diagram files are content and can be reused; their internal styling must be checked against Monograph, never assumed. Phase 7 must render each diagram in both themes at 1440px and 390px and check the tokens by eye, not only by file inspection.
2. Embed: iframe with `src` set to the diagram file plus `?embed=1&theme=light|dark`, theme synced live by a MutationObserver on the `data-theme` attribute, as v2 did. The iframe has a `title` naming the diagram, `loading="lazy"` except where the diagram is the first visual on the page, in which case it is eager, and explicit width and height so the page does not shift. Height is set from the diagram viewBox, not guessed, and Phase 7 must measure the rendered height at 1440px and 390px. The v2 tall frame heights (2260px desktop, 1000px phone for the skills tree) were reasoned from the viewer source, not measured, and must be measured in Phase 7 before they are used. If a diagram file is renamed, moved, or fails to load, the page must show a fallback, not an empty frame: an `onError` state with a text link reading "Open the diagram in a new tab" and a short text equivalent, so the content is not lost.
3. Text equivalent: beside every diagram, in the reading column or beside the plate on desktop, a short text equivalent in Instrument Sans, Body small, naming the nodes and the flow in order. For PenTrix: browser, Express app, SQLite database, 29 challenge modules, 3 kill chain scenarios, 3 career paths. For APK: static manifest rules, strings and code rules, Frida dynamic traces, scoring, reports, baseline and CI. For AgentArsenal: the three branches and what each branch holds. The text equivalent is not a copy of the caption. The caption is a figure note stating what is shown and what happened. The text equivalent is the diagram content in words, for a reader who cannot see the diagram.
4. Fallback link: the text "Open the diagram in a new tab" appears as a real link beside the figure note, pointing at the plain diagram file (without `?embed=1`), so the standalone viewer keeps its chrome. The link is ink text with an underline on hover, at least 44px tall, with a visible focus outline. It opens in a new tab with `rel="noreferrer"`, as v2 did.
5. Figure note: the diagram plate carries a figure note in the pattern in section 1.7, beside the plate on desktop, above it on phones, stating what is shown and what happened, including the note that the diagram was restyled to Monograph tokens, not redrawn, where that is true. The figure note is not inside the iframe. It is HTML on the page, so it is readable without the iframe loading.

### 3.5 Scroll progress rule, case study pages only

A thin scroll progress rule, 2px, accent, sits at the very top of case study pages only. It is not a skill percentage bar, it is not a stat, and it does not show a percentage number.

Specification: fixed position, top 0, left 0, height 2px, width set by the scroll progress of the article (0 percent at the top of the article, 100 percent at the foot of the Links section), accent colour (`#7A2E25` light, `#D18A74` dark), no background track, no number, no label. It sits above the fixed navigation, or directly under it where the navigation already occupies the top, but the build must choose one position and use it on every case study page, so the rule does not jump between pages. Recommended position, as a gap decision: at the very top of the viewport, above the navigation bar, so it is visible even when the nav is present, and it does not cover nav text. It appears only on the seven detail routes in section 1.2. It does not appear on Home, Projects, About, Expertise, Research, Contact, Privacy, Terms, or 404. It is hidden with scripting off, because progress needs scripting, but the page is complete without it. Under reduced motion, the rule still tracks scroll, because it is not an animation, it is a position indicator, but its width changes without a transition, so no motion is added. Phase 7 must check that the rule reaches 100 percent at the foot of the page, and that it does not cause horizontal overflow at any width.

## 4. Responsive behaviour

Test order is binding: test at 390px before 1440px, in both themes, for the hero, the index, and the case study template. Then test at 375px, 430px, 768px, and 1440px, in both themes, before handover. The widths below are the five widths Phase 7 must check, with the behaviour specified per width.

### 4.1 Breakpoints and grid

| Width | Grid and gutters | Reading column | Plates | Index |
|---|---|---|---|---|
| 375px, phone | Single column, gutters 20px, column gap 16px | Full width, 1 column | Full width, 1 column, figure note above | Compact jump list above content |
| 430px, phone | Single column, gutters 20px, column gap 16px | Full width, 1 column | Full width, 1 column, figure note above | Compact jump list above content |
| 390px, phone | Single column, gutters 20px, column gap 16px | Full width, 1 column | Full width, 1 column, figure note above | Compact jump list above content |
| 768px, tablet | 12 columns, gutters 32px, column gap 24px | Columns 1 to 12, or 2 to 11 where the design allows, measure capped at 68ch | Columns 1 to 12, figure note above | Compact jump list above content |
| 1440px, desktop | 12 columns, gutters 64px, column gap 24px, container max width 1240px, centred | Columns 2 to 11 | Columns 1 to 12 or 2 to 12, figure note beside | Sticky index, left rail, columns 1 to 2 |

Container: max width 1240px, centred, equal edges. Nothing bleeds on one side only. No section is forced to a viewport height except the hero, which is not on a case study page. Case studies are as long as their evidence needs, and the page scrolls like a book.

Type at phones: base 16px, Display handoff clamp handles the title size, Body 1.0625rem at 16px base, Mono meta 0.8125rem, minimum 13px for muted text, never below 13px. At 375px the title must not overflow, the three facts must wrap to two lines without clipping, and the outcome line must wrap without a horizontal scroll.

### 4.2 Sticky index becomes a compact jump list on mobile

On phones and tablets, below 1024px, the sticky index does not appear as a fixed sidebar. It collapses to a compact in-page jump list above the content, never a fixed sidebar, never a floating button, never a dropdown that hides the list behind a tap.

Specification for the jump list, below 1024px:

1. Placement: directly under the three facts line, above the Problem section, inside the reading column, full width. It is the first thing after the header, so a jumping reader finds it without scrolling.
2. Content: the same seven items, in the same order, in JetBrains Mono 500, 0.8125rem, muted, left aligned: Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links. Each item is a real anchor link to its section id, see section 1.4. The list is shown as a wrapping row or a short vertical list, with 8px gap, each item at least 44px tall, with a 1px line border and 2px radius where it is shown as a chip-like row, or as plain text links separated by commas where it is shown as a list. The build must choose one presentation and use it on every detail page. Recommended presentation, as a gap decision: a wrapping row of text links, separated by 1px vertical rules, no pill background, no coloured badge, because pills are rejected by the design system. The active item in the jump list gains a 2px ink underline, not accent, because the accent budget is spent on the scroll progress rule and the handoff rule on phones, where the sticky index is not present. This keeps the accent count at three on desktop and at two on phones, which is allowed, because the rule is a maximum of three, not a requirement to use all three at every width.
3. Behaviour: tapping an item moves focus to the section heading and scrolls to it with the heading clear of the fixed nav. The jump list does not stick, does not follow the reader, and does not reappear at the foot. The next project link at the foot is the only foot navigation. The jump list is visible with scripting off, because it is plain anchor links in HTML.
4. At 1024px and above, the jump list is hidden, and the sticky index in the left rail is shown. The breakpoint is 1024px, as a gap decision, because 768px is too narrow for a left rail beside a 68ch reading column, and 1440px is the only desktop width in the test set, so the rail must appear before 1440px to be tested there. Phase 7 must check the switch at 1023px and 1024px, in both themes.

### 4.3 Figure notes move above plates on phones

On desktop, at 1024px and above, a figure note sits beside its plate, in the same row, with the plate on one side and the note on the other, in mono, muted, as in section 1.7. On phones and tablets, below 1024px, the figure note sits above its plate, full width, in the same mono style, with the plate below it. The note is never below the plate on phones, because the reader must know what is shown before they see the image, and the note must not be missed after scrolling past a large image. At 768px the note is above the plate, even though the width is tablet, because a beside layout at 768px would squeeze the plate and the note into columns too narrow to read. The note text is the same at every width, only its position changes.

Plates on phones: full width, 1px line border, 2px radius, no shadow, image scales inside the frame, no horizontal overflow, explicit width and height, text in the image stays readable without pinching. A diagram iframe on a phone scales to the full width, with its height set from the viewBox, and no horizontal scroll inside the iframe. A table on a phone scrolls horizontally inside its own container, with a hairline border, and does not cause page overflow. A CodeStrip on a phone scrolls horizontally inside the strip, and does not cause page overflow.

### 4.4 Tap targets, touch, and hover

Tap targets are 44px minimum, on every width, for every interactive element on a case study page: index links, jump list links, tab buttons, copy buttons, lightbox close, previous, and next buttons, diagram fallback links, live demo and repo buttons, next project block, and nav links. The next project block is a full width link, at least 88px tall, so its title and outcome are tappable as one target. No hover state carries information. A plate image scales 1.02 inside its frame on hover for a fine pointer only, as in the design system, but the same information is available without hover. No drag interaction is required. No cursor layer exists on touch devices, and nothing is lost without it.

## 5. Motion and accessibility for case study pages

### 5.1 Motion

Motion uses the `motion/react` package as the one animation library, as in the design system. CSS handles micro interactions only (button hover and press, link underlines, card lift, focus). No second animation runtime, no scroll driven pinned sequence, no parallax on text, no scroll jacking, no carousels, no timed tabs.

Entrance: only the handoff line and the first block animate in. On a case study page the handoff is the title block (catalogue line, title, outcome line, three facts), and the first block is the Problem section heading and its first lines. Duration 500 to 760ms, ease out, stagger 45 to 70ms, once, on entry, transform and opacity only. Body copy and plates are visible by default, and do not animate in on scroll. No fade in on scroll for every section. That is the generic default, and it is rejected here. A reader who jumps to Evidence via the index must see Evidence immediately, without waiting for an entrance animation.

Control feedback: button, link, card lift, and copy state, 160 to 220ms, ease out, CSS transitions, transform and opacity only. Page transitions: under 300ms, ease out, fade and 8px rise, content never delayed. Challenge panel state change is not on a case study page, see section 1.6, so no panel motion is specified here. Particle field drift, parallax, and cursor reactive motion are hero only, and do not appear on a case study page.

Reduced motion safety net: `MotionConfig reducedMotion="user"` plus the existing CSS reduced motion block, plus a 2 second safety net timeout that force reveals everything, so content can never stay hidden if an animation fails. Under `prefers-reduced-motion: reduce`, the entrance animation is off, the handoff line and first block are visible instantly, the lightbox opens with no animation, the scroll progress rule changes width without a transition, and no motion is added by scrolling. The safety net timeout is a setTimeout that force reveals everything after 2 seconds, as in the design system, and Phase 7 must test it by blocking the animation and checking that content is visible after 2 seconds.

Content visible with scripting off: the entrance is an enhancement on visible content, never a gate. With scripting off, the title, outcome, facts, index jump list, all sections, all plates, all figure notes, and all links are visible in HTML, in order, without JavaScript. Tabs degrade to all panels shown in order, see section 3.1. The lightbox degrades to a plain link to the image, see section 3.2. The scroll progress rule is hidden with scripting off, because it needs scripting, but the page is complete without it. The theme switch degrades to the default light theme with scripting off, as in the v2 pre paint script mechanism, and the page remains readable.

### 5.2 Accessibility

The accessibility floor from the design system applies in full to case study pages, and Phase 7 must check each item in section 6.

1. Focus visible: 2px accent outline, offset 2px, appearing instantly, on every interactive element. Focus is never removed, never hidden, never replaced by a colour change alone.
2. Keyboard navigation: Tab moves through the page in order (skip link, nav, header links, jump list or index, section content, Tabs, CodeStrip copy buttons, plates, Links, next project block, footer). Arrow keys navigate Tabs, see section 3.1, and the lightbox, see section 3.2. Escape closes the lightbox and the mobile menu. Home and End move within Tabs. No keyboard trap exists on a case study page. The skip link is first in tab order, reading "Skip to content", visible on focus, and moves focus to the main content.
3. Contrast: every text token is checked against its real ground, in both themes, at 1440px and 390px. Ink on paper, body on paper, muted on paper, accent text on paper, code body on code ground, and code comment on code ground must meet the contrast figures in the design system. Muted text is never below 13px, never for body copy, with the darker fallback `#655F56` in light theme if the render check finds the muted text thin. The dark accent `#D18A74` must be checked in the render pass, not assumed.
4. Alt text and figure notes: every image has alt text naming what is shown, and a figure note stating what is shown and what happened. Alt text and figure note are not duplicates: alt text names the image for a screen reader, figure note is the evidence line for every reader. Diagrams have a text equivalent beside them, see section 3.4, and a figure note. No image is decorative without an empty alt where it is truly decorative, and no case study plate is decorative.
5. Headings and landmarks: one `h1` per page, `h2` for sections, no skipped heading level, sections have `aria-label` where the heading alone does not name the landmark, and the main landmark is `main` with id `main`. The index is a `nav` with an `aria-label` reading "In this case study" or "On this page", as a gap decision, so a screen reader names it correctly.
6. Tables: hairline row rules only, no zebra striping, mono numbers right aligned, Instrument Sans labels left aligned, table head in Instrument Sans 500, sentence case, never tracked capitals. Tables have a caption or an `aria-label` naming what the table shows, and a scope on header cells.
7. Forms: no form appears on a case study page. The contact form lives on Contact only. If a future case study adds a form, it must follow the design system input rules (paper surface, 1px line border, 2px radius, accent outline on focus, inline error text in accent, `aria-invalid` and `aria-describedby` wired), and this spec must be updated.
8. Touch and pointer: tap targets 44px minimum, see section 4.4. No information is carried by hover alone. No drag is required. The page is usable with a keyboard only, with a screen reader, with touch only, and with scripting off.

## 6. What the Phase 7 build must verify for these pages

Phase 7 must verify every item below, and must record the result per page, per width, per theme, before handover. A check that is not recorded is not a pass. The verification must be done in a real browser, with Playwright screenshots at desktop and mobile widths, plus computed style assertions and a console error check, as in the standing verification method. A WeasyPrint render or a source inspection alone is not a verification for these pages, because it cannot check JavaScript gated states, focus return, or tab keyboard navigation.

### 6.1 Routes render

| Check | Method | Pass criterion |
|---|---|---|
| All five featured routes render | Open each route in a real browser, light and dark | `/projects/pentrix-vulnlab`, `/projects/powershell-academy`, `/projects/bughunt-arsenal`, `/projects/apk-security-pipeline`, `/projects/security-books` each render with title, outcome, three facts, index, all seven sections, Links, and next project block, with no missing section |
| AgentArsenal detail page renders | Open `/projects/agentarsenal`, light and dark | Title, outcome, three facts, index, all seven sections, Links, next project block to Ai-Terminal-X, skills tree diagram loads or shows its fallback, domain filter works |
| Ai-Terminal-X detail page renders | Open `/projects/ai-terminal-x`, light and dark | Title, outcome, three facts, index, all seven sections, Links, next project block to `/projects`, example prompts Tabs work, safe execution note present |
| No route is a dead end | Follow the next project link from each page, in order | 01 to 02 to 03 to 04 to 05 to 06 to 07 to `/projects`, with no 404, no link to a non existent route, and the last page linking back to `/projects` |
| Per page metadata is correct | Inspect document title, description, canonical, Open Graph title and description per route | Each route sets its own title and description, with the one line outcome as the description, and its own canonical URL, never Home values |

### 6.2 Content and counts

| Check | Method | Pass criterion |
|---|---|---|
| Word count per featured case study | Count body copy per the method in section 1.7 | 600 to 900 words for PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline; 400 to 600 words for Security-Books; 400 to 700 words for AgentArsenal and Ai-Terminal-X |
| Reading time | Read the page aloud at a normal pace, or time a skim read | 5 to 10 minutes for featured, 5 to 7 minutes for compact and archive pages, with no page taking longer because of filler |
| Every count beside its source | Read each count on each page, and check the source line beside it | No count appears without a source line naming the repo README, the live site, the live commands page, the manifest, or the GitHub live fetch, as specified per project in section 2 |
| PenTrix flag sentence exact | Search the PenTrix page text for the flag sentence | The verbatim sentence in section 2.1 appears once, in a ruled note, with no other flag storage wording, no flag literal, and no live deployment link anywhere on the page |
| BugHunt forbidden figures absent | Search the BugHunt page text, metadata, figure notes, and captions for the forbidden figures | No 336+ payloads, no 24+ CTF tools, no 12+ modules, no "48% free", no open source claim, no open source badge, unless a repo was confirmed in Phase 7 and the confirmation is recorded |
| PowerShell 102 commands re-verified | Open the live commands page before handover | 102 commands is confirmed on the live commands page, or the figure is dropped from the page and the outcome line is shortened, per section 2.2 |
| Security-Books star count not hardcoded | Inspect the page source and the rendered page | No hardcoded star number appears; the count is fetched live with a fetch date beside it, or omitted entirely |
| APK demo run labelled | Read the APK Evidence section | The synthetic demo run (26 out of 100, grade F, 12 findings) is labelled as a demo run on a synthetic APK, with its source, and is not mixed with the clean sample (100 out of 100, grade A, 0 findings) or the vulnerable sample (0 out of 100, grade F, 24 findings) where those are shown |
| No forbidden copy | Search all seven pages for the hard rules in the header of this file | No test pass count, no GPA figure in a bio line, no bounty program name, no report title, ID, endpoint, or reward amount, no institution, course code, lecturer, or professor mention in public copy, no "looking for an internship" banner, no "give me a chance", no skill percentage, no testimonial |

### 6.3 Visuals, plates, and figure notes

| Check | Method | Pass criterion |
|---|---|---|
| At least three visuals per case study | Count plates per page | Each of the seven pages has at least three plates, in the order problem frame, process shot, final delivered design, each with a figure note |
| Every figure note present | Read each plate, in both themes, at 1440px and 390px | Every plate has a figure note in the pattern `What is shown: ... What happened: ...`, in JetBrains Mono 500, 0.8125rem, muted, beside the plate on desktop, above it on phones |
| Every plate is real | Check each image and diagram source | No stock image passed off as his work, no lecture slide image, no mockup presented as a real product, no invented output |
| Diagrams rethemed | Render each diagram in both themes at 1440px and 390px | PenTrix architecture, APK pipeline, and skills tree diagrams use Monograph tokens only, accent only for the single highlighted path, with a text equivalent beside each, and the "Open the diagram in a new tab" fallback link works |
| Images compressed and sized | Check file sizes and rendered sizes | No plate uses a 1.5 MB unoptimised PNG, images are WebP or AVIF with PNG fallback, explicit width and height are set, text stays readable at 390px without pinching |
| Code strips highlighted | Render each CodeStrip in both themes | Multicoloured syntax highlighting on the dark ground, with the token colours in section 3.3, never all one colour, copy button reads "Copy" then "Copied" for 2 seconds |

### 6.4 Components

| Check | Method | Pass criterion |
|---|---|---|
| Tabs keyboard navigation | Keyboard only, in a real browser, on PowerShell Academy, BugHunt Arsenal, and Ai-Terminal-X | Left and Right Arrow move between tabs with wrapping, Home moves to first, End moves to last, Tab moves into the panel, `aria-selected`, `aria-controls`, and `aria-labelledby` are correct, only the active panel is visible, inactive panels are hidden |
| Tabs with scripting off | Disable JavaScript, load each tabbed page | All panels are shown in order, each with its heading, so the content is readable without scripting |
| Lightbox focus return | Open a plate, close it by Escape, by close button, and by backdrop where allowed, in a real browser | Focus is moved into the dialog on open, trapped while open, and returned to the thumbnail that opened it on close, in every close path |
| Lightbox keyboard | Keyboard only, in a real browser | Escape closes, Left and Right Arrow move between images with wrapping, figure note updates with the image, Tab stays inside the dialog while open |
| CodeStrip copy | Click each copy button, in a real browser | Button reads "Copy", then "Copied" for 2 seconds, then back to "Copy", clipboard contains the code, button is at least 44px tall, focus is visible |
| DiagramFigure theme sync | Switch theme while a diagram page is open | Diagram theme follows the page theme live, via the MutationObserver, with no reload, in both directions |
| Scroll progress rule | Scroll each case study page, in both themes, at 1440px and 390px | A 2px accent rule at the very top tracks scroll progress, reaches 100 percent at the foot, appears only on the seven detail routes, and does not appear on Home, Projects, About, Expertise, Research, or Contact |
| Accent audit | Inspect computed styles per page, in both themes | Exactly three static accent uses per case study page (scroll progress rule, index active item, handoff rule), plus transient focus ring only, no other static accent use in links, buttons, figure notes, tags, or code |

### 6.5 Responsive, motion, and accessibility

| Check | Method | Pass criterion |
|---|---|---|
| No horizontal overflow | Playwright screenshots at 375px, 430px, 390px, 768px, 1440px, light and dark, per page | 0px horizontal overflow at every width, on every page, in both themes; code strips, tables, and diagrams scroll internally, never the page |
| No console errors | Playwright console check per route, per width, per theme | 0 console errors, 0 unhandled rejections, on every route, including tab changes, lightbox open and close, theme switch, and copy button clicks |
| Sticky index to jump list switch | Resize from 1440px to 390px, in a real browser, per page | Sticky index in the left rail at 1024px and above, compact jump list above the content below 1024px, never a fixed sidebar on phones, switch checked at 1023px and 1024px |
| Figure note position | Screenshots at 1440px, 768px, and 390px, per page | Figure note beside the plate at 1024px and above, above the plate below 1024px, same text at every width |
| Tap targets | Measure every interactive element at 390px and 1440px | Every tap target is at least 44px tall and 44px wide, including index links, jump list links, tabs, copy buttons, lightbox buttons, diagram links, and next project block |
| Entrance only for handoff and first block | Load each page, scroll through it, in a real browser | Only the title block and the first block animate in, 500 to 760ms, once, body copy and plates are visible by default, no fade in on scroll for every section |
| Reduced motion | Enable `prefers-reduced-motion: reduce`, load each page, in a real browser | Entrance is off, content is visible instantly, lightbox opens with no animation, scroll progress rule changes without a transition, 2 second safety net force reveals everything if an animation fails |
| Content visible with scripting off | Disable JavaScript, load each page | Title, outcome, facts, jump list, all sections, all plates, all figure notes, and all links are visible in HTML, in order, with no content hidden behind a script gate |
| Focus visible and keyboard only | Keyboard only, in a real browser, per page | Every interactive element is reachable by Tab, focus is visible with a 2px accent outline, offset 2px, no keyboard trap, skip link is first and works, Tabs and lightbox keyboard behaviour passes per section 6.4 |
| Fonts and colours exact | Inspect computed styles per page, in both themes | Only Archivo, Instrument Sans, and JetBrains Mono are used, only Monograph tokens from the header of this file are used, no token, colour, or layout from the rejected v2 system appears, radii are 2px, shadows are none by default, hairlines are 1px |

### 6.6 Links and sequence

| Check | Method | Pass criterion |
|---|---|---|
| Live demo links resolve | Open each live link in Phase 7 | PowerShell Academy live site and BugHunt Arsenal live site return 200, and show the counts used on the page |
| Repo links resolve | Open each repo link in Phase 7 | PenTrix-VulnLab, PowerShell Academy repo (`my-powershell-academy`, not `powershell-academy`), APK Security Pipeline, Security-Books, AgentArsenal, Ai-Terminal-X repos each return 200, and BugHunt Arsenal has no repo link until a repo is confirmed |
| Next project sequence complete | Follow the chain in section 1.2, in a real browser | Complete chain with no dead end, no 404, and the last page linking back to `/projects` |
| Diagram fallback links work | Click each "Open the diagram in a new tab" link | Each link opens the plain diagram file in a new tab, with the standalone viewer chrome, and the link is not broken |

## Decisions made where the source docs left a gap

These are the decisions this spec makes where the sources did not settle the point. Each is marked as a decision, so Phase 7 or Izaz can change it with a recorded update to this file, rather than by silent drift in code.

1. Next project sequence includes the archive pages. The selection doc and the IA doc say the next project link makes the work read as a sequence, and that AgentArsenal and Ai-Terminal-X keep detail pages, but neither doc says what Security-Books links to next, or what Ai-Terminal-X links to next. This spec sets the chain as 01 PenTrix to 02 PowerShell Academy to 03 BugHunt Arsenal to 04 APK Security Pipeline to 05 Security-Books to 06 AgentArsenal to 07 Ai-Terminal-X to `/projects`. That gives a complete sequence with no dead end, and keeps the archive pages in the sequence instead of orphaning them.
2. Sticky index breakpoint is 1024px. The design system says sticky on desktop and a compact jump list on mobile, but does not name the breakpoint. This spec sets the switch at 1024px, because 768px is too narrow for a left rail beside a 68ch reading column, and the rail must appear before 1440px to be tested there. Below 1024px the jump list is a wrapping row of text links separated by 1px vertical rules, with the active item marked by a 2px ink underline, not accent, to keep the accent count at three on desktop and at two on phones.
3. Interactive ChallengePanel is not embedded in the PenTrix case study. The v2 PenTrix page embedded the panel with a fix step, and the design system keeps the panel as a Home hero moment, but neither doc says whether the panel belongs in the case study body. This spec keeps the panel on Home only, and shows the challenge on the case study as a static numbered plate with three steps plus a fix step, using real request and response text in a CodeStrip, with a link reading "Try it on the home page". This keeps the accent budget at three, keeps the case study readable without interaction, and keeps the proof as real output.
4. Accent budget on case study pages is scroll progress rule, index active item, and handoff rule. The design system names three accent uses as active nav underline, solved state, and handoff rule, and separately requires a 2px accent scroll progress rule on case study pages only. Those two lists cannot both fit in three uses on a case study page. This spec resolves the overlap by naming the three case study uses as scroll progress rule, index active item, and handoff rule, and by noting that the nav active underline is a site wide nav state, not a case study page static use, and that the solved state does not appear on a case study page because the panel is not embedded there. The focus ring is transient and does not count.
5. Jump list active state uses ink, not accent. For the same accent budget reason, the compact jump list on phones marks its active item with a 2px ink underline, not accent, because the scroll progress rule and the handoff rule already use accent on phones.
6. Tabs active state uses ink, not accent. The shared Tabs component marks its active tab with a 2px ink underline and a line strong border, not accent, for the same accent budget reason. Focus remains accent, as the transient focus ring.
7. APK demo run and sample runs are three distinct runs. The selection doc records a demo run on a synthetic APK (26 out of 100, grade F, 12 findings) as recorded in the v2 build, and the audit records two sample runs (clean 100 out of 100, grade A, 0 findings; vulnerable 0 out of 100, grade F, 24 findings) from the prior pass. Neither doc says whether those are the same run. This spec treats them as three distinct runs, labels each with its sample name and source, and makes the synthetic demo run the primary demo on the page.
8. Security-Books and archive pages keep three visuals. The selection doc calls Security-Books compact, but does not say whether compact means fewer visuals. This spec keeps the three visual minimum for every detail page, including the compact and archive pages, because a compact case study is still a case study, and its proof still needs a problem frame, a process shot, and a final delivered design. Compact means fewer words, not fewer sections and not fewer visuals.
9. Index landmark label is "In this case study" or "On this page". The design system does not name the `aria-label` for the index nav. This spec gives the two allowed wordings, and Phase 7 must pick one and use it on every detail page.
10. Scroll progress rule sits at the very top of the viewport, above the navigation bar. The design system says the rule sits at the very top of case study pages only, but does not say whether it sits above or below the fixed nav. This spec places it above the nav, so it is visible even when the nav is present, and it does not cover nav text. The build must use the same position on every case study page.

## What this spec could not specify, and why

1. BugHunt Arsenal stack and sole builder status. No repo was found in the audit, so the stack cannot be named from a verified source, and sole builder status cannot be confirmed from a repo. This spec leaves the stack fact as "Browser app" until Phase 7 verifies it, and leaves the role fact with a verification gate. Phase 7 must verify against the repo or the live site source before publishing, and must not invent a stack.
2. PowerShell Academy sole builder status, APK Security Pipeline sole builder status, and BugHunt Arsenal sole builder status. The selection doc records "verify against the repo before publishing" for each. This spec carries that gate forward, and does not assert sole builder status as fact. Phase 7 must check the repo before publishing, and must name any shared contribution if one is found.
3. PowerShell Academy 102 commands figure. The audit notes the figure was verified via the live commands page in the prior pass, but did not appear on the homepage text fetched in the audit pass. This spec keeps the figure with a re-verification gate, and says to drop it if it cannot be re-verified on the live commands page before handover. Phase 7 must do that check, and must not carry the figure from memory alone.
4. Security-Books star count at handover. The audit date figure was 139 stars, but star counts move, and this spec forbids hardcoding. The live count at handover cannot be known now. Phase 7 must fetch it live at build time, show it with its fetch date, or omit it.
5. AgentArsenal counts at handover. The 353 skills, 29 domains, 290 sub-skills, and 36 agents figures come from a workspace manifest, not from the GitHub API, and the audit notes they were not re-counted in the audit pass. This spec requires the source line to state that, and requires a re-check from the workspace copy before handover if the numbers appear on the detail page. The current numbers cannot be asserted as API verified.
6. APK Security Pipeline 64 tests figure at handover. The figure comes from the README in the prior pass, and was not re-run in the audit pass. This spec requires a re-check of the README at build time, and the versioned figure at build time, or omission. The current figure cannot be asserted as freshly run.
7. "What I would improve" final copy per project. The improvements in section 2 are proposed direction, tied to limitations recorded in the audit or selection doc, but final wording must be confirmed by Izaz before publishing where it goes beyond a recorded limitation. This spec does not present the proposed improvements as his words, and Phase 7 must not publish them as his words without that confirmation.
8. Diagram internal font matching. Archify diagrams use their own internal fonts, and the exact match to Archivo, Instrument Sans, and JetBrains Mono inside the diagram files cannot be specified without opening the diagram files in the build. This spec requires the retheme check in both themes at 1440px and 390px, and requires the choice to be recorded in the Phase 7 notes, but it does not name the internal font mapping, because that mapping must be verified against the files at build time.
9. Compressed image sizes for case study plates. The v2 audit records unoptimised PNG sizes, but the compressed WebP or AVIF sizes for the new plates cannot be known until Phase 7 compresses the real screenshots. This spec requires the compressed size to be recorded beside each plate in the verification notes, but it does not set a size per plate, because the size depends on the real image.
10. Video on case study pages. No video is specified for case study pages, because no clip is selected in the design system, and no case study needs a video to prove its outcome. If a future phase adds a video to a case study, this spec must be updated with the clip, the licence record, the poster, and the reduced motion behaviour, before the video enters the build.
