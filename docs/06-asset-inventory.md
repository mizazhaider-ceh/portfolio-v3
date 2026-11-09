# Asset Inventory: Images and Diagrams

**Portfolio V3 rebuild, Phase 6 (assets). Date: 9 November 2026. Status: inventory and optimisation complete, gaps recorded for Phase 7.**

**Scope:** every file in `public/images/`, `public/diagrams/`, and `public/files/`, checked against `docs/DESIGN_SYSTEM.md` (Monograph direction), `docs/05-experience-home-projects.md`, `docs/05-experience-case-studies.md`, `docs/05-experience-supporting.md`, and `docs/01-profile-audit.md`. No original file was deleted. No source file was overwritten. No code was edited. Only optimised copies were added, in `public/images/optimised/`, plus this document.

**Method:** each image was opened and viewed, its dimensions and byte size recorded, and its content matched to the plate the specs require. Each diagram file was opened and its internal styling read (theme blocks, preset definitions, node stroke variables, gradients, shadows, fonts, SVG text labels, viewBox). Originals were checksummed before optimisation and re-verified after; every checksum still matches. The Open Graph image was viewed, not assumed.

**Hard rules applied:** no em dashes in this file. No lecture slide image is used as a site visual (none was found in these folders). No fact was invented for any caption or for the Open Graph composition. Flag storage is described only with the approved sentence. No bounty program name, report title, ID, endpoint, or reward amount appears. No test-pass count appears. No institution, course code, lecturer, or professor name appears. No rejected v2 token, colour, or layout is used in this file.

## 1. Full inventory

Decision key: keep (use as is), optimise (optimised copies produced in `public/images/optimised/`), restyle (diagram only, retheme to Monograph tokens in Phase 7, file itself untouched here), drop (file stays on disk, not deleted, but must not appear on any v3 page).

### 1.1 Images in `public/images/`

| File | Size (bytes) | Dimensions | Shows what | Decision and reason |
|---|---|---|---|---|
| `profile.png` | 824,463 | 800 by 800 | Portrait of Muhammad Izaz Haider, seated in a suit in an office setting with monitors behind him | Optimise. About portrait plate, eager loaded, 800 by 800, WebP primary with PNG fallback. See section 2. |
| `cscb-web-first.png` | 178,040 | 1240 by 641 | Scoreboard Web category table, Junior column, Muhammad Izaz Haider in 1st place with 1669 points, tied on points with 2nd and 3rd | Optimise. CSCB story photo 1 of 3 on About (`#cscb`). See section 2. |
| `cscb-26th-place.png` | 193,887 | 1280 by 799 | Player page headed Muhammad Izaz Haider, 26th place, 6701 points, with a Solves table listing challenge names, categories, values, and times | Optimise. CSCB story photo 2 of 3 on About (`#cscb`). The "of 806" part of the figure note comes from the audit, it is not visible in this image. See section 2. |
| `cscb-solves-breakdown.png` | 350,603 | 1280 by 772 | Solves table (Forensics and Intro rows visible), solves versus fails bar, category breakdown, and a Score over Time chart rising to 6701 | Optimise. CSCB story photo 3 of 3 on About (`#cscb`). See section 2. |
| `cscb-junior-top3.png` | 144,167 | 585 by 674 | Junior Division table cropped to the top 10, Muhammad Izaz Haider in 3rd place with 6576 points and 26 solves | Drop from site use. Duplicate content: it is the same Junior table already shown in full in `cscb-rankings.png`, and it is not one of the three photos in the CSCB story. File kept on disk. |
| `cscb-rankings.png` | 468,078 | 1280 by 899 | Full ECSC Rankings page, Junior and Senior division tables side by side, Muhammad Izaz Haider 3rd in Junior with 6576 points and 26 solves | Drop from site use. This is a v2 proof gallery image. The supporting spec states the four image scoreboard gallery is not republished; About proves CSCB with the three photo story only. File kept on disk. |
| `yeswehack-swag.png` | 1,527,571 | 1280 by 912 | Flat lay photograph of recognition swag on a wooden desk: black T-shirt, poster, laptop with stickers, keyring, small flag, prayer beads | Optimise. The one recognition plate in the About Experience section. This was the 1.5 MB unoptimised PNG named in the case study spec. See section 2. |
| `yeswehack-email.png` | 335,370 | 480 by 1070 | Phone screenshot of a recognition email: "We'd like to recognize and celebrate your performance in the last quarter", "you qualified for exclusive achievement swag", "Retrieve your gift" button | Drop from site use. The supporting spec states the recognition email screenshot is not published: it duplicates the same fact as the swag photo and its text is hard to read on a phone. File kept on disk. |
| `apk-report-preview.png` | 133,704 | 1280 by 900 | HTML report for the vulnerable sample: package com.example.vulnapp, Score 0 out of 100, grade F, counts (critical 1, high 8, medium 7, low 8), stage table (Intake, Manifest parse, Manifest rules, Strings and code patterns, Dynamic Frida) | Optimise. APK Security Pipeline case study plate, final delivered design. The figure note must state the vulnerable sample (0 out of 100, grade F) and must not mix it with the synthetic demo run (26 out of 100, grade F, 12 findings). See section 2. |
| `og-image.jpg` | 99,992 | 1200 by 630 | Stock style photograph of a man at a laptop with headphones, overlaid text cropped at the right edge ("Cybersecurity x AI | Pentesting |" and "RESEARCH • BUILD • SECURE • INN..."), blue accent, dark photographic ground | Drop from site use. It is not a composed plate: it is a photograph, its text is truncated, it uses a blue accent, and it is not built from Monograph tokens. The composed plate does not exist yet. See section 4 and gap G1. File kept on disk. |

### 1.2 Diagrams in `public/diagrams/`

All three files are standalone Archify viewer HTML files (one SVG diagram plus the viewer runtime, toolbar, presets, and export menus). All three share the same viewer build: default `data-theme="dark"`, default `data-preset="classic"`, four presets (`classic`, `signal-flow`, `blueprint`, `editorial`), embed mode through `?embed=1&theme=light|dark` with live theme sync. None of the three is currently in Monograph tokens. All three are restyle, not redraw: node text and structure stay, styling changes. See section 3 for the per-diagram checklist.

| File | Size (bytes) | Diagram | Shows what | Decision and reason |
|---|---|---|---|---|
| `pentrix-architecture.html` | 839,637 | Architecture, viewBox 1150 by 352 | Student browser on own machine, PenTrix-VulnLab app (Express, deliberately vulnerable), 29 challenge modules grouped by vulnerability class, 3 kill chain scenarios, SQLite database (challenges, progress, certificates), 3 career paths with verifiable certificates; flow labels: HTTP request, serves challenge, chain into, SQL query, completes path, issues progress and certificate; footer note: flags generated per install at first boot | Restyle. Home flagship large plate (01) and PenTrix case study Evidence plate. Flag wording inside the file matches the approved sentence; no flag literal, path, or value was found in any diagram file. |
| `apk-pipeline.html` | 838,899 | Workflow, viewBox 1013 by 776 | Five stages: 01 Input (Intake, one command, APK file in), 02 Static analysis (Static manifest rules, Strings and code rules), 03 Dynamic analysis (Frida dynamic traces), 04 Scoring (one score out of 100, grade A to F), 05 Reports and CI (Reports in HTML and JSON, Baseline and CI, compare or fail the build) | Restyle. APK case study Evidence plate. |
| `skills-tree.html` | 872,240 | Tree, viewBox 794 by 2244 | Root node with name and degree line, three branches (Offensive security: "Find the flaw", Defensive security: "Fix the flaw", AI security and automation: "Scale the work"), 65 labelled nodes covering tools, roles, and evidence (including CSCB first place Web Junior, 13 findings at Damno, 64 APK tests) | Restyle, with content fixes first. Expertise page diagram, only if rethemed and given a text equivalent. Content fixes required before it can ship: root subtitle carries an institution name (remove it, keep only the degree line), one node states a stale repo count (80, the audit records 81), one leaf presents malware analysis as a skill (the supporting spec says it must not appear as an Expertise group; Phase 7 must remove the leaf or keep it visibly labelled as coursework in progress, and record the choice). |

### 1.3 Files in `public/files/`

| File | Size (bytes) | Shows what | Decision and reason |
|---|---|---|---|
| `Muhammad_Izaz_Haider_CV.pdf` | 8,011 | Sanitized CV, 2 pages, linked from About and Contact as "Download my CV (PDF, 8 KB)" | Keep as is. Verified size matches the audit (8,011 bytes). No optimisation applies to a PDF in this task. |

### 1.4 Files noted while auditing, outside the three folders

These were found because they affect the same plates. No file here was changed.

| File | Size (bytes) | Shows what | Decision and reason |
|---|---|---|---|
| `public/favicon.svg` | 338 | Purple square (`#5A45D6`), lime bar (`#B8F34A`), "IH" text in Arial | Drop from site use. It is the rejected v2 identity in miniature. Phase 7 must replace it with a Monograph mark (paper ground, ink type, 2px radius, no purple, no lime). See gap G13. |
| `public/favicon.ico` | 3,495 | Icon container, 16 by 16 and 32 by 32 entries (pixel content not visually inspected in this task) | Drop from site use, same reason as `favicon.svg`; regenerate beside the new SVG in Phase 7. See gap G13. |

## 2. Optimisation results

Method: Pillow 10.2.0. WebP quality 82 (80 for the swag photograph), method 6, native dimensions kept, no resize, no crop. PNG fallback: lossless RGB PNG with optimisation for the two photographs; adaptive 256 colour palette PNG with Floyd-Steinberg dithering for the four flat colour screenshots (text and charts verified visually after conversion: the palette version of `cscb-solves-breakdown.png` was viewed and reads identically at plate size, small table text and chart labels intact). All optimised files were re-opened and their dimensions verified. All originals were checksummed before and after; every checksum still matches.

| Original file | Original size (bytes) | Dimensions | WebP (bytes) | PNG fallback (bytes) | WebP saving |
|---|---|---|---|---|---|
| `profile.png` | 824,463 | 800 by 800 | `optimised/profile.webp`, 47,728 | `optimised/profile.png`, 824,463 | 776,735 (94.2%) |
| `cscb-web-first.png` | 178,040 | 1240 by 641 | `optimised/cscb-web-first.webp`, 20,228 | `optimised/cscb-web-first.png`, 62,613 | 157,812 (88.6%) |
| `cscb-26th-place.png` | 193,887 | 1280 by 799 | `optimised/cscb-26th-place.webp`, 26,108 | `optimised/cscb-26th-place.png`, 74,987 | 167,779 (86.5%) |
| `cscb-solves-breakdown.png` | 350,603 | 1280 by 772 | `optimised/cscb-solves-breakdown.webp`, 38,400 | `optimised/cscb-solves-breakdown.png`, 107,044 | 312,203 (89.0%) |
| `yeswehack-swag.png` | 1,527,571 | 1280 by 912 | `optimised/yeswehack-swag.webp`, 82,660 | `optimised/yeswehack-swag.png`, 1,203,817 | 1,444,911 (94.6%) |
| `apk-report-preview.png` | 133,704 | 1280 by 900 | `optimised/apk-report-preview.webp`, 75,240 | `optimised/apk-report-preview.png`, 55,434 | 58,464 (43.7%) |
| **Totals, six files** | **3,208,268** | | **290,364** | **2,328,358** | **2,917,904 (90.9%)** |

Notes on the results:

1. Every WebP is under the 300 KB cap. The largest is the swag photograph at 82,660 bytes.
2. The PNG fallback total saves 879,910 bytes against the originals, because the four screenshots compress well as palette PNGs.
3. Two PNG fallbacks are still over the 300 KB cap: `optimised/profile.png` at 824,463 bytes (identical to the original; the original PNG was already optimally compressed, Pillow optimisation saved nothing) and `optimised/yeswehack-swag.png` at 1,203,817 bytes. A photographic PNG cannot compress below the cap losslessly at full dimensions. Phase 7 decision required (gap G9): keep the fallback for browsers without WebP support, or serve WebP only for these two plates. The WebP is the served file in both cases, so the cap holds on the normal path.
4. The `apk-report-preview.webp` saving is the smallest (43.7%) because the report image is mostly white ground with fine text; WebP at quality 82 keeps the text readable. Do not lower the quality to chase a bigger saving: the figure note rule requires the text to stay readable without pinching on a phone.
5. No AVIF copies were produced: no AVIF encoder is available in this environment (Pillow has no AVIF support here, no `avifenc` binary). WebP is the optimised format delivered, which the specs accept ("WebP or AVIF with PNG fallback").

## 3. Per-diagram retheme checklist (Phase 7 to apply, not applied here)

### 3.1 What is true of all three diagrams

Current state, read from the files (all three share one viewer build, so the same changes apply to each):

1. Default theme is dark (`data-theme="dark"` on the `<html>` tag) with the `classic` preset. Embed mode (`?embed=1&theme=light|dark`) and the MutationObserver theme sync already work; keep that mechanism, change only the token values it switches between.
2. Light `classic` ground is `#f4f5f7` with text `#111827` and white panels. Dark `classic` ground is `#020617` with white text. Both must become Monograph grounds (light paper `#F7F3EA`, dark paper `#191817`).
3. Node colours are per category, and must all go. Current stroke variables in the viewer: frontend `#22d3ee` (cyan), backend `#34d399` (green), database `#a78bfa` (violet), cloud `#fbbf24` (amber), security `#fb7185` (rose), plus messagebus and external. The arrow emphasis is green (`#059669` light, `#34d399` dark). Monograph rule: every node uses ink lines on paper or surface ground; oxblood is used only for the single highlighted path per diagram, nowhere else.
4. Gradients and shadows are present and must all go. Found in the viewer CSS: radial gradient body glows (cyan and violet), linear gradient container and card backgrounds, drop shadows on nodes, and a large container shadow. Monograph rule: flat fills only, 1px hairline borders, 2px radius, no shadow.
5. The `editorial` preset is the closest existing preset (paper ground `#f2eee5` light and `#181611` dark, vermilion accent, ruled structure), but it is not Monograph: it still uses per-category node colours, gradients, and shadows. Phase 7 may use it as a starting point, but must still apply every item in the checklists below and verify by rendering, not by preset name.
6. Fonts found in the viewer stacks: system sans, Georgia serif, and JetBrains Mono for mono. Archivo and Instrument Sans were not found in the font stacks inspected. The six `@font-face` rules inside the files were not individually identified in this task. Phase 7 must confirm which faces are embedded, vendor Archivo (diagram titles) and Instrument Sans (diagram labels) with JetBrains Mono kept for catalogue numbers and meta, and record the choice.
7. Retheme is styling only. Node text, node order, relationship labels, and counts must not change during the retheme, except for the content fixes listed per diagram below.

### 3.2 Monograph tokens to apply (both themes)

| Token | Light | Dark | Use in diagrams |
|---|---|---|---|
| Paper ground | `#F7F3EA` | `#191817` | Diagram canvas ground |
| Surface ground | `#FFFEFA` | `#221F1C` | Node and card fills |
| Ink | `#1C1A17` | `#F3EFE5` | Node borders, arrows, titles, labels |
| Body | `#2A2723` | `#D5CFC2` | Secondary label text |
| Muted | `#6E6A61` | `#9C968B` | Meta lines, catalogue numbers, legend |
| Line | `#DCD5C6` | `#37332C` | Hairlines, lane rules, panel borders |
| Line strong | `#B9B0A0` | `#57503F` | Emphasised rules only |
| Accent (oxblood) | `#7A2E25` | `#D18A74` | Single highlighted path only, per diagram |
| Accent text | `#6E231C` | `#E0A58F` | Highlighted path label only |
| Accent soft | `#F1E3DE` | `#3A211B` | Highlighted path wash only, if a wash is used at all |

### 3.3 PenTrix architecture (`public/diagrams/pentrix-architecture.html`)

Nodes and flow (from the SVG text): Student (Browser, own machine), PenTrix-VulnLab app (Express, deliberately vulnerable), 29 challenge modules (grouped by vulnerability class), 3 kill chain scenarios (full attack paths), SQLite database (challenges, progress, certificates), 3 career paths (verifiable certificates). Flow labels: HTTP request, serves challenge, chain into, SQL query, completes path, issues progress and certificate. Legend: Backend, Database, Security, External. ViewBox 1150 by 352 (wide and short; measure the rendered iframe height at 1440px and 390px in Phase 7, do not guess it).

Checklist:

1. Ground: light `#F7F3EA`, dark `#191817`. Remove the radial glows and the gradient container background.
2. Nodes: surface fill (light `#FFFEFA`, dark `#221F1C`), 1px ink border, 2px radius, ink title text, muted subtitle text. Remove all per-category fills and strokes (backend, database, security, external).
3. Arrows and flow labels: ink, 1px, with labels in Instrument Sans, muted for secondary labels.
4. Highlighted path (one only, oxblood): Student Browser to PenTrix-VulnLab app to SQLite database (the request path: HTTP request, serves challenge, SQL query). Every other arrow stays ink.
5. Legend: rewrite the four category entries as plain mono labels in muted text (no colour swatches), or remove the legend if the rethemed nodes no longer need it. Record the choice.
6. Flag note node: keep the text as it stands (it matches the approved sentence). Do not expand it, do not add a flag value, path, or mechanism.
7. Text equivalent beside the plate (Phase 7 copy, from the spec): browser, Express app, SQLite database, 29 challenge modules, 3 kill chain scenarios, 3 career paths.
8. Verify in both themes at 1440px and 390px, with the "Open the diagram in a new tab" fallback link working.

### 3.4 APK pipeline (`public/diagrams/apk-pipeline.html`)

Nodes and flow (from the SVG text): 01 Input (Intake, one command, APK file in), 02 Static analysis (Static manifest rules: permissions, components; Strings and code rules: secrets, unsafe crypto), 03 Dynamic analysis (Frida dynamic traces: what the app does live), 04 Scoring (one score out of 100, grade A to F), 05 Reports and CI (Reports: HTML and JSON; Baseline and CI: compare, or fail the build; diff feeds the report). Legend: User UI, Agent logic, Context and trace, External system. ViewBox 1013 by 776.

Checklist:

1. Ground: light `#F7F3EA`, dark `#191817`. Remove the radial glows and the gradient container background.
2. Nodes: surface fill, 1px ink border, 2px radius, ink titles, muted subtitles. Remove all per-category fills and strokes.
3. Stage numbers (01 to 05): JetBrains Mono, muted, kept as the stage markers. Stage flow arrows: ink, 1px.
4. Highlighted path (one only, oxblood): the main left to right flow, Intake to Static checks to Frida traces to Scoring to Reports. The Baseline and CI return arrow ("diff feeds the report") stays ink.
5. Legend: rewrite the four entries as plain mono labels in muted text (no colour swatches), or remove the legend if the rethemed nodes no longer need it. Record the choice.
6. Text equivalent beside the plate (Phase 7 copy, from the spec): static manifest rules, strings and code rules, Frida dynamic traces, scoring, reports, baseline and CI.
7. Verify in both themes at 1440px and 390px, with the fallback link working.

### 3.5 Skills tree (`public/diagrams/skills-tree.html`)

Nodes and flow (from the SVG text): root node with name and degree line; three branches, Offensive security ("Find the flaw"), Defensive security ("Fix the flaw"), AI security and automation ("Scale the work"); 65 labelled nodes, including Penetration testing, Web application security, Burp Suite, OWASP ZAP, Vulnerability assessment, API security, Mobile security, Digital forensics, Linux, Windows Server security, Secure code review, CI/CD security, Network security, Cryptography, Python, LLM integration and RAG, Prompt engineering, Bash scripting, JavaScript, SQL, Git and GitHub, PowerShell, Frida, C and C++, Testing and QA. ViewBox 794 by 2244 (very tall; the v2 frame heights of 2260px desktop and 1000px phone were reasoned, not measured, and must be measured in Phase 7 before reuse).

Checklist:

1. Content fixes first, before or with the retheme (Phase 7 decision, recorded here): remove the institution name from the root subtitle and keep only the degree line; correct the stale repo count node (it states 80, the audit records 81, so either update it to the live count with a fetch date or remove the count); remove the malware analysis leaf, or keep it visibly labelled as coursework in progress, and record the choice (the supporting spec forbids presenting it as an Expertise group).
2. Ground: light `#F7F3EA`, dark `#191817`. Remove the radial glows and the gradient container background.
3. Nodes: surface fill, 1px ink border, 2px radius, ink titles, muted evidence lines. Remove all per-category fills and strokes. Branch labels ("Find the flaw", "Fix the flaw", "Scale the work") stay as ink text, not coloured.
4. Highlighted path (one only, oxblood; Phase 7 to confirm): the offensive security spine, root to Offensive security to Penetration testing to Web application security. This is the strongest evidence branch and the one the Expertise page leads with. Every other branch stays ink.
5. Text equivalent beside the plate: the nine Expertise group descriptions on the page serve as the text equivalent (per the supporting spec). The diagram is never the lead element; the first group is.
6. Verify in both themes at 1440px and 390px, with the fallback link working. Check the tall frame height by measurement at both widths.

## 4. Open Graph image

**Status: gap. No compliant file exists.**

The file currently referenced by `index.html` (`og:image` and `twitter:image` point at `https://mizazhaider-ceh.dev/images/og-image.jpg`) is `public/images/og-image.jpg`, 1200 by 630, 99,992 bytes. Viewed in this task, it is a stock style photograph of a man at a laptop with headphones, with overlaid text cropped at the right edge, a blue accent, and a dark photographic ground. It fails every requirement in the supporting spec section 6.4: it is not a composed plate, it has no paper ground, no ink type, no accent rule, and its text is truncated. It must not ship as the Open Graph image. It is marked drop in section 1.1 and kept on disk only.

**Exact composition for Phase 7 to generate (from the Monograph tokens, no fact invented):**

1. Canvas: 1200 by 630, paper ground `#F7F3EA`, flat, no gradient, no photograph, no shadow.
2. Layout: left aligned, generous margins, one accent rule. A single 2px oxblood rule (`#7A2E25`) sits above the name (the accent rule of the plate). No other colour appears.
3. Line 1, name (Archivo 700, ink `#1C1A17`): Muhammad Izaz Haider
4. Line 2, role line (Instrument Sans 500, ink `#1C1A17`): Penetration Tester, AI x Offensive Security
5. Line 3, one verified fact (JetBrains Mono 500, muted `#6E6A61` or body `#2A2723` for legibility at small sizes): First place in Web, Junior division, CSCB 2026
6. No other text, no logo mark, no photo, no institution name, no contact detail, no count beyond the one verified fact above.
7. File: replace `public/images/og-image.jpg` at the same path (so the existing `og:image` and `twitter:image` references in `index.html` keep working), or write a new file and update both meta tags in the same change. Record which option was taken. Export as JPG quality 82 or WebP, under 300 KB, and verify the render at 1200 by 630 and at small preview sizes (where the fact line must stay legible).

## 5. Gaps list (missing files and Phase 7 decisions)

| Gap | What is missing or undecided | Phase 7 action |
|---|---|---|
| G1 | Open Graph composed plate (1200 by 630) does not exist; current file is a cropped stock style photo | Generate from the composition in section 4, replace the file or update the meta tags, verify the render |
| G2 | Hero poster and video clip: no clip selected, no poster frame, no licence record; the design system records this as an open issue, fallback is flat hero ground plus particle field | Clip search plus licence checklist before any video file enters the build; poster 1600 to 1920px wide, 80 to 150 KB, only from the graded clip |
| G3 | PowerShell Academy lesson reader screenshot (Home plate 02, case study problem, process, and final plates) | Capture from the live site, compress, add to `public/images/optimised/` with a figure note; must show the single column flow with no sidebar competing |
| G4 | BugHunt Arsenal payload browser screenshot (Home plate 03, case study plates) | Capture from the live site with a category tab open and example payloads visible, compress, add with a figure note; the "Nothing here is executed" note sits beside it |
| G5 | Security-Books repo list screenshot (Home plate 05, case study plates) | Capture the repo list view organised by topic, compress, add with a figure note |
| G6 | PenTrix-VulnLab lab running screenshot (alternative large plate 01, case study process and final plates) | Capture a local run, compress, add with a figure note; the architecture diagram is the existing alternative, not a substitute for a running screenshot if Phase 7 wants both |
| G7 | Problem frame plates for all five featured case studies (the before state, or the scattered state the project replaces) | No before-state image exists for any project; Phase 7 must capture, design, or explicitly record a text-led problem frame per case study, never a stock image and never a lecture slide image |
| G8 | AgentArsenal and Ai-Terminal-X visuals (archive detail pages need at least three plates each, or two real visuals plus a recorded gap) | Capture repo or tool running screenshots, compress, add with figure notes |
| G9 | PNG fallbacks over the 300 KB cap: `optimised/profile.png` (824,463 bytes) and `optimised/yeswehack-swag.png` (1,203,817 bytes) | Phase 7 decision: keep the fallback for browsers without WebP support, or serve WebP only for these two plates; record the decision |
| G10 | Skills tree content fixes (institution name in the root subtitle, stale repo count, malware analysis leaf) | Apply before the diagram ships; see section 3.5 item 1 |
| G11 | `src/components/DiagramFigure.tsx` fallback link uses a v2 token (`var(--periwinkle-deep)`) for its link colour | Phase 7 code fix: restyle the fallback link to Monograph ink with underline on hover; noted here because it affects the diagram plates |
| G12 | No brand marks saved locally yet (GitHub and LinkedIn for footer and Contact, technology marks for case studies and the capability map) | Save from SVGL or official press kits, locally, never hotlinked, never recoloured, render verified; brands not on SVGL need an official source |
| G13 | `public/favicon.svg` and `public/favicon.ico` carry the rejected v2 identity (purple square, lime bar, "IH" mark) | Replace both with a Monograph mark in Phase 7; favicon.ico pixel content was not visually inspected in this task |
| G14 | Hero video licence record: no file, no record exists beside any video file | Save the licence record (source, licence name, clip URL, download date) beside the clip file before it enters the build; see G2 |

## 6. Figure-note requirement reminder

Every plate on every page carries a figure note. This is a standing rule from the design system and the case study spec, repeated here so Phase 7 applies it to every asset in this inventory.

1. Wording pattern, two labelled parts, each 1 to 2 short lines, labels bold in the render, key terms dark bold, never one long paragraph: `What is shown: ... What happened: ...`
2. Style: JetBrains Mono 500, 0.8125rem, line height 1.5, muted. Beside the plate on desktop, above the plate on phones.
3. Content: the note states what is shown and what happened. For proof screenshots, the note states the result the screenshot proves and the source it came from. For diagrams, the note states what the diagram shows and that it was restyled to Monograph tokens, not redrawn. For the portrait, the note states it is his own photograph, used on About only.
4. No plate ships without a figure note: not the portrait, not the CSCB photos, not the swag photo, not the report preview, not any diagram, and not any screenshot added under gaps G3 to G8.
5. Alt text and figure note are not duplicates: alt text names the image for a screen reader, the figure note is the evidence line for every reader.

## 7. Decisions summary and verification notes

**Counts (14 files inventoried across the three folders):** keep as is, 1 (the CV PDF). Optimised, 6 images (12 files produced: 6 WebP, 6 PNG fallbacks). Restyle, 3 diagrams. Drop from site use, 4 images (files kept on disk, not deleted). Total: 1 plus 6 plus 3 plus 4 equals 14.

**Optimisation totals:** originals 3,208,268 bytes; WebP total 290,364 bytes; saving 2,917,904 bytes (90.9%). PNG fallback total 2,328,358 bytes; saving 879,910 bytes. Every WebP is under 300 KB. The 1.5 MB unoptimised PNG named in the case study spec (`yeswehack-swag.png`) is now 82,660 bytes as WebP.

**What was verified in this task:** every image opened and viewed; every diagram file read for internal styling (theme blocks, presets, node strokes, gradients, shadows, fonts, SVG labels, viewBox); every original checksummed before and after optimisation with all checksums matching; every optimised file re-opened with dimensions verified; the Open Graph image viewed; the flag wording inside the PenTrix diagram checked (approved sentence present, no flag literal, path, or value found in any diagram file); the missing screenshots confirmed absent by listing `public/images/` and by searching the source for image references.

**What could not be verified, and why:**

1. Whether the profile portrait is his own photograph: the audit and the supporting spec state the v2 file is the source for the About portrait, and this task used that as the basis. Identity was not independently verified from the image itself.
2. CSCB point totals beyond the screenshots: "26th of 806" comes from the audit, not from the 26th-place image (which shows 26th place and 6701 points only). The Web first place image shows a tie on 1669 points; the figure note should state first place, not an outright points lead.
3. Diagram rendering: the retheme checklist comes from source inspection only. No diagram was rendered in a browser in this task, so the checklist must be verified by rendering in both themes at 1440px and 390px in Phase 7.
4. The six `@font-face` rules inside the diagram files were not individually identified; the font mapping in section 3.1 item 6 needs Phase 7 confirmation.
5. `favicon.ico` pixel content was not rendered; only its container format was checked.
6. No AVIF encoder is available in this environment, so no AVIF copies were produced; WebP is the delivered optimised format, which the specs accept.

## 8. Logo audit (independent verification, 9 November 2026)

**Scope of this section:** every file in `public/logos/`, verified independently of `docs/06-brand-marks.md` (which was read after this check and agrees with it on every point below, except where this section says otherwise). The brief for this audit stated 19 SVG files; the actual count is 21 files, 15 marks. Nothing was removed and nothing was replaced. No file was recoloured, edited, or renamed.

**Method:** each file parsed as XML (all 21 parse cleanly); each file rendered with cairosvg to PNG and viewed on the light paper ground (`#F7F3EA`) and the dark ground (`#191817`) as two contact sheets; the Vite file re-rendered in Playwright Chromium because cairosvg cannot render its display-p3 fills and blur filters; each brand re-checked against the live SVGL search API (`https://api.svgl.app?search=<name>`) with exact title match; each local file compared path by path against the current SVGL API SVG endpoint (`https://api.svgl.app/svg/<filename>`). The live comparison shows path data identical for all 21 files; the only differences are wrapper attributes (the local files carry `xmlns`, explicit `width` and `height`, and an explicit fill where the API endpoint leaves the fill implicit, for example Vercel light carries `fill="#000"` locally and no fill attribute from the API, which renders the same black triangle). The direct `svgl.app/library/` fetch returns 403 for a plain script request, so the API endpoint was used for the comparison instead.

**SVGL search results, re-run 9 November 2026:** GitHub id 579, LinkedIn id 95, Python id 216, TypeScript id 116, JavaScript id 113, React id 45, Vite id 628, Tailwind CSS id 81, Docker id 141, Linux id 355, Ubuntu id 361, Vercel id 559, Flask id 405, Next.js id 443 (search with the dot, `next.js`), Node.js id 446 (search with the dot, `node.js`). Searching `nextjs` or `nodejs` without the dot returns a 404, which caused the earlier "not on SVGL" note; the dotted search is the correct check. Debian, Kali, Nmap, and Burp Suite each return the SVGL 404 error, so they remain not on SVGL and no file was fetched for any of them. Licence basis: the SVGL SVG files are MIT licensed, and the marks themselves remain trademarks, so each mark is used only for genuine identification of that brand or technology, never as decoration, never recoloured. No licence is claimed for any brand with no file fetched.

**Render rule used:** a mark passes a theme when the full mark is legible and correct on that ground at the rendered size. A light variant file is invisible on the dark ground and a dark variant file is invisible on the light ground; that is the expected behaviour of a pair, not a defect, and it is fixed by swapping the file with the theme, never by recolouring.

### 8.1 Logo inventory, one row per file

| File | Mark (SVGL title, id) | Size (bytes) | Source route | Used where (per Phase 5 specs) | Render verification |
|---|---|---|---|---|---|
| `public/logos/github-light.svg` | GitHub, 579 | 997 | `https://svgl.app/library/github_light.svg` | Footer, Contact, repo links on case studies, light theme | Pass on light (dark ink mark, clear). Invisible on dark, as expected for the light variant. |
| `public/logos/github-dark.svg` | GitHub, 579 | 939 | `https://svgl.app/library/github_dark.svg` | Footer, Contact, repo links on case studies, dark theme | Pass on dark (white mark, clear). Invisible on light, as expected for the dark variant. |
| `public/logos/linkedin.svg` | LinkedIn, 95 | 768 | `https://svgl.app/library/linkedin.svg` | Footer, Contact, both themes, one file | Pass in both themes. Blue square, the "in" is a cutout showing the ground colour, which is the genuine mark shape. |
| `public/logos/python.svg` | Python, 216 | 1,126 | `https://svgl.app/library/python.svg` | APK Security Pipeline case study, Ai-Terminal-X, AI security group on Expertise, both themes | Pass in both themes, blue and yellow snakes, clear. |
| `public/logos/typescript.svg` | TypeScript, 116 | 1,744 | `https://svgl.app/library/typescript.svg` | PowerShell Academy case study, site build, both themes | Pass in both themes, blue square with white "TS", clear. |
| `public/logos/javascript.svg` | JavaScript, 113 | 1,068 | `https://svgl.app/library/javascript.svg` | PenTrix-VulnLab case study, payload platform case study, both themes | Pass in both themes, yellow square with dark "JS", clear. |
| `public/logos/react-light.svg` | React, 45 | 6,534 | `https://svgl.app/library/react_light.svg` | PowerShell Academy case study, site build, light theme | Pass on light (darker blue atom, clear). Pale on dark, do not use it there. |
| `public/logos/react-dark.svg` | React, 45 | 6,641 | `https://svgl.app/library/react_dark.svg` | PowerShell Academy case study, site build, dark theme | Pass on dark (lighter blue atom, clear). Lower contrast on light, do not use it there. |
| `public/logos/vite.svg` | Vite, 628 | 10,132 | `https://svgl.app/library/vite.svg` | Site build tool only, capability map only, never a featured case study stack, both themes | Pass in Chromium (purple and blue gradient bolt, clear, verified in a real browser render on 9 November 2026). Cairosvg renders it as a solid black bolt, which is a cairosvg limitation with the file display-p3 fills and blur filters, not a file defect. Do not recolour it. |
| `public/logos/tailwind-css.svg` | Tailwind CSS, 81 | 747 | `https://svgl.app/library/tailwindcss.svg` | Capability map only, never on the PowerShell Academy case study (plain CSS by explicit decision), both themes | Pass in both themes, sky blue wave mark, clear. |
| `public/logos/docker.svg` | Docker, 141 | 1,488 | `https://svgl.app/library/docker.svg` | Capability map only, no featured case study names Docker as its stack, both themes | Pass in both themes, blue whale, clear. |
| `public/logos/linux.svg` | Linux, 355 | 11,498 | `https://svgl.app/library/linux.svg` | Ai-Terminal-X, Linux and server security group on Expertise, both themes | Pass in both themes, Tux penguin, clear. |
| `public/logos/ubuntu.svg` | Ubuntu, 361 | 507 | `https://svgl.app/library/ubuntu.svg` | Capability map only, no featured case study names Ubuntu as its stack, both themes | Pass in both themes, orange circle of friends, clear. |
| `public/logos/vercel-light.svg` | Vercel, 559 | 169 | `https://svgl.app/library/vercel.svg` | Hosting for the two live sites on vercel.app, light theme | Pass on light (black triangle, clear). Invisible on dark, as expected for the light variant. |
| `public/logos/vercel-dark.svg` | Vercel, 559 | 169 | `https://svgl.app/library/vercel_dark.svg` | Hosting for the two live sites on vercel.app, dark theme | Pass on dark (white triangle, clear). Invisible on light, as expected for the dark variant. |
| `public/logos/flask-light.svg` | Flask, 405 | 12,348 | `https://svgl.app/library/flask-light.svg` | VulnNotes archive row only, never a featured stack, light theme | Pass on light (black flask, clear). Invisible on dark, as expected for the light variant. |
| `public/logos/flask-dark.svg` | Flask, 405 | 12,212 | `https://svgl.app/library/flask-dark.svg` | VulnNotes archive row only, never a featured stack, dark theme | Pass on dark (white flask, clear). Invisible on light, as expected for the dark variant. |
| `public/logos/nextjs-light.svg` | Next.js, 443 | 3,607 | `https://svgl.app/library/nextjs_logo_light.svg` | PowerShell Academy case study, wordmark, light theme | Pass on light (black "NEXT.js" wordmark, clear). Invisible on dark, as expected for the light variant. |
| `public/logos/nextjs-dark.svg` | Next.js, 443 | 3,607 | `https://svgl.app/library/nextjs_logo_dark.svg` | PowerShell Academy case study, wordmark, dark theme | Pass on dark (white "NEXT.js" wordmark, clear). Invisible on light, as expected for the dark variant. |
| `public/logos/nextjs.svg` | Next.js, 443 | 1,091 | `https://svgl.app/library/nextjs_icon_dark.svg` | PowerShell Academy case study, icon, light theme only | Pass on light (black disc with white "N", clear). On dark the black disc loses its edge against the dark ground and the white "N" reads as a floating letter, weaker still at a small stack size, so use the dark wordmark there, never this icon alone. |
| `public/logos/nodejs.svg` | Node.js, 446 | 2,491 | `https://svgl.app/library/nodejs.svg` | PenTrix-VulnLab case study, both themes, one file | Pass in both themes, green hexagon, clear. |

**Logo counts:** 21 files verified, 15 marks. Replaced, 0. Removed, 0. Every file is a genuine SVGL mark for the named brand, confirmed by exact title match and identical path data against the live API.

### 8.2 Brands not on SVGL, re-checked 9 November 2026

| Brand | SVGL result | Needed where | Finding | Fallback |
|---|---|---|---|---|
| Debian | 404, no match | Not named as a stack for any featured case study, not needed now | No file fetched, no licence claimed | Plain text name in JetBrains Mono until a future phase fetches the official file from the brand own logos page and verifies it the same way |
| Kali Linux | 404, no match | Not named as a stack for any featured case study, not needed now | No file fetched, no licence claimed | Plain text name in JetBrains Mono, do not download a mark from a third party site |
| Nmap | 404, no match | Tool in the network security and recon group on Expertise, not a case study stack | No file fetched, no licence claimed | Plain text name in JetBrains Mono, do not use a site lockup as a stack mark |
| Burp Suite | 404, no match | Tool in the web pentesting and responsible disclosure groups on Expertise, not a case study stack | No file fetched, no official press kit found, no licence claimed | Plain text name in JetBrains Mono, do not download a mark from a third party site |

## 9. Image audit (independent re-verification, 9 November 2026)

**Scope:** every file in `public/images/optimised/` re-checked against the Phase 5 specs, plus a filename sweep of all three Phase 5 spec files for any published image name. The sweep finds exactly six published image names (profile portrait, three CSCB story photographs, recognition swag photograph, APK report preview), and all six already have a WebP plus PNG fallback pair. No published original lacks a pair, so no new optimisation was needed in this audit. The four unpublished originals (`cscb-junior-top3.png`, `cscb-rankings.png`, `yeswehack-email.png`, `og-image.jpg`) correctly have no optimised pair, because the specs do not publish them.

**Method:** dimensions and byte sizes re-read with Pillow for every original and every optimised file (all WebP dimensions match their originals exactly); all six WebP files viewed as a contact sheet at plate size (text in the scoreboard and report screenshots stays readable, the portrait and swag photograph render cleanly, no visible compression artefacts at plate size); PNG fallback presence confirmed for all six.

| Original | Original size (bytes) | Dimensions | WebP (bytes) | PNG fallback (bytes) | Published where (Phase 5) | Render verification |
|---|---|---|---|---|---|---|
| `public/images/profile.png` | 824,463 | 800 by 800 | `optimised/profile.webp`, 47,728 | `optimised/profile.png`, 824,463 | About portrait plate, eager loaded | Pass, portrait renders cleanly, WebP quality good. Fallback is byte identical to the original; a Pillow re-save at maximum compression returns the same 824,463 bytes, so the fallback is already at its optimum and cannot go below the 300 KB cap losslessly at full size. Gap G9 stands. |
| `public/images/cscb-web-first.png` | 178,040 | 1240 by 641 | `optimised/cscb-web-first.webp`, 20,228 | `optimised/cscb-web-first.png`, 62,613 | About CSCB story photo 1 of 3 | Pass, scoreboard table readable, first place row clear. |
| `public/images/cscb-26th-place.png` | 193,887 | 1280 by 799 | `optimised/cscb-26th-place.webp`, 26,108 | `optimised/cscb-26th-place.png`, 74,987 | About CSCB story photo 2 of 3 | Pass, 26th place and 6701 points readable, solves table readable. |
| `public/images/cscb-solves-breakdown.png` | 350,603 | 1280 by 772 | `optimised/cscb-solves-breakdown.webp`, 38,400 | `optimised/cscb-solves-breakdown.png`, 107,044 | About CSCB story photo 3 of 3 | Pass, solves table, category breakdown, and score over time chart readable. |
| `public/images/yeswehack-swag.png` | 1,527,571 | 1280 by 912 | `optimised/yeswehack-swag.webp`, 82,660 | `optimised/yeswehack-swag.png`, 1,203,817 | About Experience section, the one recognition plate | Pass, flat lay photograph renders cleanly. Fallback is 1,203,817 bytes; a Pillow re-save at maximum compression returns the same size, so the fallback is already at its optimum and cannot go below the 300 KB cap losslessly at full size. Gap G9 stands. |
| `public/images/apk-report-preview.png` | 133,704 | 1280 by 900 | `optimised/apk-report-preview.webp`, 75,240 | `optimised/apk-report-preview.png`, 55,434 | APK Security Pipeline case study plate, final delivered design | Pass, report text readable (Score 0 out of 100, grade F, stage table), WebP quality good. |

**Image counts:** 6 published originals, 6 WebP files, 6 PNG fallbacks, all verified. Optimised in this audit, 0 (all pairs already existed). Removed, 0. Every WebP is under 300 KB. The two PNG fallbacks over the cap are the two photographs, and both are already losslessly optimal, so the Phase 7 decision in gap G9 (keep the fallback or serve WebP only for these two plates) is unchanged.

## 10. Audit reconciliation and combined counts

1. Logos: 21 files, 15 marks, all verified genuine and render verified, 0 replaced, 0 removed. Correction to the brief: the brief stated 19 SVG files, the actual count is 21.
2. Images: 6 published originals, 12 optimised files, all re-verified, 0 new optimisations needed, 0 removed.
3. Diagrams, files, and gaps G1 to G14 in sections 1 to 7 above are unchanged by this audit; the image re-verification in section 9 confirms the optimisation totals in section 7.
4. Open issues carried to Phase 7: the composed Open Graph plate still does not exist (gap G1, the current `og-image.jpg` is a cropped photograph and must not ship); the PNG fallback decision for the two photographs (gap G9); the five missing case study screenshots and the problem frame plates (gaps G3 to G8, no files exist to optimise); the Next.js icon on dark must use the dark wordmark (section 8.1); Vite must be verified in a browser, not only in cairosvg (section 8.1, done here in Chromium, record kept for Phase 7).
5. Verification renders for this audit are in `/tmp/logo-audit/` (cairosvg contact sheets `sheet-light.png` and `sheet-dark.png`, Chromium render `browser-vite.png`, optimised image sheet `images-sheet.png`) and are not part of the site.

## 11. Hero clip: Pinterest search (9 November 2026)

**Full record:** `docs/06-hero-clip.md`. This section points to that file and records only what the inventory needs: the hero identity correction, the files downloaded in the Pinterest pass, and the effect on gaps G2 and G14.

**Hero identity correction:** the shipped, graded, licensed hero clip is Pexels 34992134, "Dynamic abstract molecular structure", by Nicola Narracci, not Pexels 35004655. Pexels 35004655 is the documented runner-up and fallback. The earlier version of `docs/06-hero-clip.md` recommended 35004655, and an entry in MEMORY.md and the parent brief both named 35004655 as shipped. Both are errors. File evidence in `docs/06-hero-clip.md` section 1: `public/video/LICENSE.md` names 34992134, `docs/06-clip-candidates/CLIP_SHORTLIST.md` ranks 34992134 first and 35004655 second, and ffprobe run in the Pinterest pass on `public/video/hero-loop.mp4` gives 1280 by 720, 30 fps, 10.000000 seconds, 798,832 bytes, SHA-256 `6faade6387b9427947d4a8374ad16a060136a5e5e8a4a5f1cb9644c10ed888a1`, matching the SHA-256 in the licence record exactly. The coordinator should correct MEMORY.md and any brief that names 35004655 as shipped.

**Pinterest pass, in brief:** 8 Pinterest finds were ranked in `docs/06-hero-clip.md` section 4 (abstract particle art, blue particles overlay, watching rain, aesthetic rain anime, ripples pixel art wave, Mario room lofi loop, retro pixel art ocean, modern workspace by window), across both moods izaz sent (pixel-art calm motion, bright calm focused work). The two example pins are described with warnings in section 2 of that file: Pin 1 (https://www.pinterest.com/pin/890657263776265386/, "Hacker", 16-second pixel-art hooded figure, neon pink/magenta and cyan) is banned imagery and must not be used as the hero video; Pin 2 (https://www.pinterest.com/pin/749145719296603872/, "Tech-Savvy Coder HD Desktop Wallpaper", still image, 2912 by 1632, Wallpaper Abyss, labelled "AI modified") must not be used without a clear rights check. Both pin pages returned HTTP 403 on direct fetch without login, so both pins are described from the parent brief, not from an independent fetch, and the candidates are recorded from search index snippets, not from full pin pages.

**Recommendation in that file:** keep Pexels 34992134. No Pinterest find is clearly better on calm motion and text contrast, every Pinterest find has unclear rights (0 of 8 with verified free rights), and none has a measured brightest frame, a confirmed duration inside 8 to 15 seconds, or a confirmed landscape format.

**Files actually downloaded in the Pinterest pass:** none. No Pinterest media was downloaded, no Pexels file was re-downloaded, no file was added to `public/`, `docs/06-clip-candidates/`, or any other project folder. The only file written in that pass is `docs/06-hero-clip.md` itself.

**Effect on gaps:** gaps G2 and G14 in section 5 above are now closed by the Phase 6 shipping, not by the Pinterest pass. G2 (no clip selected, no poster, no licence record) is closed because `public/video/hero-loop.mp4`, `public/video/hero-loop.webm`, and `public/images/hero-poster.webp` are shipped, with the licence record at `public/video/LICENSE.md` and the shortlist at `docs/06-clip-candidates/CLIP_SHORTLIST.md`. G14 (no licence record beside any video file) is closed by the same licence record. The gap table in section 5 is left as written for the audit trail; this section is the update. Open items carried forward: correct MEMORY.md and the parent brief (see above); a logged-in browser check is needed before any Pinterest candidate can be pursued, because pin pages returned 403 in this pass; the bright mood and the dark hero scrim are in tension, and that is a design decision for izaz, not a clip search problem.
