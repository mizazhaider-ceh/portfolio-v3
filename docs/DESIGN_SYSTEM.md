# Design System: Monograph (approved direction)

**Portfolio V3 rebuild, Phase 4. Date: 9 November 2026. Status: APPROVED, the build direction for Phases 5 to 11.**

**Decision:** Direction A, "Monograph", is selected. Direction B, "Field Notebook", and Direction C, "Workbench", are not selected as whole systems, but two ideas are borrowed from them and are part of this system (see "Borrowings" below). The three full direction specs remain in `docs/04-direction-monograph.md`, `docs/04-direction-field-notebook.md`, and `docs/04-direction-workbench.md`, with their boards in `docs/04-boards/`. This file is the authoritative design system for the build. Where this file and a direction spec disagree, this file wins.

## Why Monograph won

Scored against the 12 ranked principles in `docs/02-competitive-research.md` section 8, and against the master directive (immersive video hero, cursor reactive, confident, evidence led, work speaks first, no hacker cliches, no Arsenal):

1. **Proof in the first screen.** Monograph puts the real PenTrix `/admin` challenge panel inside the hero, beside the headline. It is the only direction where the visitor tries real security work before scrolling. Principles 2 (portfolio is the proof) and 5 (one signature moment) are strongest here.
2. **Most distinctive voice.** "Find the flaw. Prove it. Build the fix." in expanded Archivo on warm paper with one oxblood accent reads like a printed monograph, not a template. Field Notebook leads with his name as the headline, which is clean but forgettable. Workbench leads with "I break web apps to find what is weak, then I build the fix.", which is strong, but its hero shows atmosphere rather than proof, and its board puts an availability line in the hero, which the master directive bans.
3. **Typography led, decoration follows.** Principle 4 is Monograph's strongest fit by its own honest evaluation. Oversized type is used only for the hero and chapter handoffs, full bleed is rare, the page reads like a book.
4. **Cleanest rule set.** One accent, used in exactly three places. Hairline rules, catalogue numbers, 2px radii, no shadows by default. The restraint makes the accent mean "this is the live point".
5. **Weaknesses are manageable and named.** Hero density has a named fallback (panel moves to the top of the next screen if the build feels crowded at 1280x800). Light muted text at 4.87:1 has a named darker fallback (`#655F56`). Archivo expanded axis has a named fallback (normal width, never a horizontal scale transform). No video clip is selected yet, and the fallback is poster plus particle field alone.

**Why Field Notebook was not selected:** strongest on outcome led case studies and typography discipline, but weakest on principle 6 by its own evaluation. The hero is deliberately restrained and typographic first, so it trades the cinematic impact the master directive explicitly asks for (immersive video hero) for speed and legibility. Its metaphor is quiet and risks being missed if the frame and chapter labels are softened in build.

**Why Workbench was not selected:** strongest on directed motion (the scroll driven PenTrix sequence) and the most explicit performance budget, but the scroll sequence is the riskiest build item by its own evaluation and could easily become the "everything moving" failure it is meant to avoid. Its hero shows atmosphere rather than the challenge, and its board carries an availability line in the hero, which the brief forbids. Its mobile story is also desktop led: the scroll sequence and particle field only degrade gracefully on mobile, they do not shine there.

## Borrowings (adopted into this system)

1. **From Field Notebook, outcome led case studies.** The outcome is set largest on every project detail page, with the sticky in page index beside it (Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links). Figure notes stay beside plates on desktop and above them on phones, in mono, stating what is shown and what happened. Field Notebook's per project colour fields are NOT borrowed: they would break Monograph's one accent rule.
2. **From Workbench, the performance budget and the build order.** The performance budget in this file is explicit and measured (see "Performance budget"). Build order is plain stack first: challenge panel first, then hero, poster before video, test at 390px before 1440px. Workbench's scroll driven PenTrix sequence is NOT adopted in this phase: Monograph has no pinned scroll sequence by design, and the sequence is deferred, not smuggled in.

## One sentence concept

A portfolio that behaves like a printed monograph: the work is set out as a bound, edited volume, one chapter at a time, with the reader invited to try one real challenge on the cover before opening the book.

## Character

1. **Edited.** Nothing is on the page because it could be. Every section earns its place by proving something.
2. **Tactile.** Paper ground, hairline rules, ink type, a single muted accent used rarely enough that its appearance means something. The page feels handled, not rendered.
3. **Verifiable.** Every claim sits beside its artifact: a live link, a repo, a screenshot of real output, a diagram, or a scoreboard image with a caption that states what is shown and what happened. No claim stands alone.

## Typography

Two families plus mono. No Sora, no Inter: both are the v2 pairing, and v2's visual identity must not be reused in any form. All fonts self hosted as WOFF2, `font-display: swap`, latin subset, no external font request. Source: Fontsource variable packages, vendored into the project, same mechanism as v2's self hosted fonts.

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display | Archivo (variable, including expanded width axis) | 600, 700, 800 | Grotesk with an editorial edge. Expanded width for the hero and handoff lines only. Tight tracking, short lines. |
| Text | Instrument Sans | 400, 500, 600 | Neutral companion, open apertures, calm at long reading lengths. Body, UI labels, buttons, captions. |
| Code and metadata | JetBrains Mono | 400, 500, 600 | Code, catalogue numbers, figure notes, meta lines, status lines, the challenge panel request line. |

### Type scale

Base size 17px on desktop, 16px on phones. Line length under 80 characters for body text (measure capped at 68ch). All sizes in rem, base 16px.

| Token | Face, weight | Size, line height | Tracking | Use |
|---|---|---|---|---|
| Display hero | Archivo 700, expanded | clamp(3.5rem, 8vw, 6rem), 0.98 | -0.03em | Hero headline, three lines broken by hand. Maximum 9 words. |
| Display handoff | Archivo 700 | clamp(2.25rem, 4.5vw, 3.5rem), 1.02 | -0.02em | Section handoff lines, project titles on detail pages. |
| Title large | Archivo 700 | 2rem, 1.05 | -0.02em | Project titles in the index, case study titles. |
| Title small | Archivo 600 | 1.375rem, 1.2 | -0.01em | Card titles, subsection titles. |
| Body large | Instrument Sans 400 | 1.125rem, 1.65 | 0 | Case study lead paragraphs, About. |
| Body | Instrument Sans 400 | 1.0625rem, 1.65 | 0 | Body copy, lists. |
| Body small | Instrument Sans 400 | 0.9375rem, 1.6 | 0 | Secondary copy, footer. |
| Label | Instrument Sans 500 | 0.9375rem, 1.5 | 0 | UI labels, button text, nav links. Sentence case, never tracked capitals. |
| Mono meta | JetBrains Mono 500 | 0.8125rem, 1.5 | 0 | Catalogue numbers, meta lines, figure notes, status lines. |
| Mono code | JetBrains Mono 400 | 0.875rem, 1.7 | 0 | Code strips, the challenge request line. |
| Caption | Instrument Sans 400 | 0.875rem, 1.55 | 0 | Figure notes in prose form (used beside plates). |

Rules: no italic inside a roman heading, no single word coloured or italicised for accent in a headline, no tracked capitals anywhere, no heading above 6rem, one display line per screen outside the hero, headings in sentence case except proper names.

## Colour tokens

One muted accent, used rarely. No violet, no lavender, no lilac, no lime, no periwinkle, no gradient of any kind. The accent is oxblood, a muted brick red that reads as print (red pencil, editor's mark, plate number), not as alarm and not as neon. All contrast figures were computed from the hex values (WCAG relative luminance, 9 November 2026).

### Light theme (default)

| Token | Hex | Use | Contrast on its ground |
|---|---|---|---|
| `--paper` | `#F7F3EA` | Page ground | (ground) |
| `--surface` | `#FFFEFA` | Cards, the challenge panel, plates | (ground) |
| `--ink` | `#1C1A17` | Headings, display type | 15.68:1 on paper, AAA |
| `--body` | `#2A2723` | Body text | 13.42:1 on paper, AAA |
| `--muted` | `#6E6A61` | Secondary text, figure notes, meta | 4.87:1 on paper, AA (never below 13px, never for body copy; fallback `#655F56`, above 5.5:1, if the render check finds it thin) |
| `--line` | `#DCD5C6` | Hairlines, card borders, table rules | (decorative, not text) |
| `--line-strong` | `#B9B0A0` | The rule above a handoff, the active nav underline base | (decorative) |
| `--accent` | `#7A2E25` | The rare signal: active nav underline, solved state, handoff rule | 8.45:1 on paper, AAA |
| `--accent-text` | `#6E231C` | Accent used as text (solved label, small links that must be accent) | 9.88:1 on paper, AAA |
| `--accent-soft` | `#F1E3DE` | Solved state wash behind the challenge badge only | (ground for ink text) |
| `--code-ground` | `#1E1C19` | Code strips in both themes | (ground) |
| `--code-body` | `#E8E2D5` | Code body text | 13.17:1 on code ground, AAA |
| `--code-comment` | `#8A8378` | Code comments | 4.53:1 on code ground, AA (mono 14px minimum) |
| `--code-keyword` | `#D8A24A` | Keywords (muted ochre) | 7.44:1 on code ground |
| `--code-string` | `#A8B89A` | Strings (muted sage) | 8.09:1 on code ground |
| `--code-function` | `#9DBEB0` | Functions (muted teal) | 8.44:1 on code ground |
| `--code-number` | `#D08A5A` | Numbers (muted clay) | 6.04:1 on code ground |
| `--code-variable` | `#E8E2D5` | Variables, paths | 13.17:1 on code ground |
| `--focus` | `#7A2E25` | Focus ring (2px outline, accent) | visible on paper and on surface |

Syntax colours are deliberately muted and warm, matched to the paper palette. No purple or pink keywords, no neon green strings, no glowing text. Code is a dark plate inside a light book, the same in both themes.

### Dark theme (a second design, not an inversion)

The dark theme is the night edition of the same book. It is not the light tokens inverted: the ground is a warm near black rather than a flipped paper, the accent lightens so it keeps its weight against dark, the muted text lightens further than a simple inversion would give, and hairlines go softer so the page does not look striped. Same grid, same type, same accent role (rare signal only).

| Token | Hex | Use | Contrast on its ground |
|---|---|---|---|
| `--paper` | `#191817` | Page ground | (ground) |
| `--surface` | `#221F1C` | Cards, the challenge panel, plates | (ground) |
| `--ink` | `#F3EFE5` | Headings, display type | 15.44:1 on ground, AAA |
| `--body` | `#D5CFC2` | Body text | 11.43:1 on ground, AAA |
| `--muted` | `#9C968B` | Secondary text, figure notes, meta | 6.04:1 on ground, AA |
| `--line` | `#37332C` | Hairlines, card borders | (decorative) |
| `--line-strong` | `#57503F` | Handoff rule, active nav underline base | (decorative) |
| `--accent` | `#D18A74` | The rare signal | 6.42:1 on ground, AA |
| `--accent-text` | `#E0A58F` | Accent used as text | 8.40:1 on ground, AAA |
| `--accent-soft` | `#3A211B` | Solved state wash behind the challenge badge only | (ground for paper text) |
| `--code-ground` | `#121110` | Code strips (a touch darker than the page ground, so code reads as inset) | (ground) |
| `--code-body` | `#E8E2D5` | Code body text | 13.17:1 on code ground (same as light) |
| `--focus` | `#D18A74` | Focus ring | visible on dark ground |

Theme mechanics (kept from v2, token values only change): pre paint script in `index.html`, `data-theme` attribute, one localStorage key, `meta theme-color` sync (`#F7F3EA` light, `#191817` dark). The theme switch is a text button reading "Dark" or "Light" in the nav, never an icon alone.

### What the palette refuses

No periwinkle, lilac, lime, or radial gradient page background (all Arsenal, all removed). No violet or lavender in any role. No purple to blue gradient. No gradient text. No green terminal text. No neon accent. No glassmorphism (no translucent panels, no backdrop blur anywhere; the hero overlay is a flat uniform scrim, not a gradient and not a blur).

## Spacing and grid

12 column grid, one container, equal edges. Container max width 1240px, centred. Gutters: 64px desktop, 32px tablet, 20px phone. Column gap 24px desktop, 16px phone. Vertical rhythm: section to section 120px desktop, 80px phone; inside a section, handoff to first block 48px; block to block 32px; paragraph to paragraph 16px (1em). Body measure capped at 68ch. The project index and case study bodies sit on columns 2 to 11 on desktop (a centred reading column inside the 12), while plates may run columns 1 to 12 or 2 to 12. The hero is full width (full bleed video plate). Nothing bleeds on one side only. No section is forced to a viewport height except the hero; case studies are as long as their evidence needs, and the page scrolls like a book, not like a slide deck.

Spacing scale (rem): 0.25, 0.5, 1, 1.5, 2, 3, 4, 5, 7.5. Radii: 2px everywhere (cards, panels, buttons, inputs, plates). No pill radii, no 16px card radius (both are v2/Arsenal tells). Shadows: none by default. A linked card lifts 2px on hover (transform only) with a 1px line that darkens to `--line-strong`; no soft grey shadow under every card.

## Layout rules

1. **Hero alone on the first screen.** At 1280x800 the headline, the role line, the one sentence, and the primary action are all visible without scrolling. The challenge panel is the second half of the hero on desktop (right column) and the next screen on phones; it never pushes the headline out of the first screen.
2. **One idea per screen below the hero, set big.** Each chapter opens with its handoff line, then its content. A chapter is as tall as its content needs, never padded to fill a screen and never cut short.
3. **Chapters, not sections.** Page order follows the brand strategy: Home (cover, first project, About strip, Expertise strip, Research strip, Contact), Projects (featured case studies in audit order, then a compact archive), project detail (one template, see below), About, Expertise, Research, Contact.
4. **Evidence beside every claim.** A number without its artifact does not appear. A skill without its evidence note does not appear. A project without a live link, a repo link, or a real screenshot does not get a featured plate.
5. **Left aligned, always.** Headings, body, labels, and nav are left aligned. The only centred element on the site is the final Contact chapter's closing line, which is centred because it is the colophon, and the 404 page.
6. **Full bleed is rare and purposeful.** Only the hero video plate and at most one plate per case study go full bleed. Everything else sits inside the container.
7. **No card grid of repo names.** The project index is an editorial list, not a uniform grid of twenty cards. The archive is a compact ruled list, clearly secondary.
8. **Footer as colophon.** Navigation, location (city and country only), social links, email, and the "Created by Muhammad Izaz Haider" line, set small in mono, with a hairline above. No newsletter band, no testimonial band, no logo wall.

## Signature detail

**The plate number and the hairline rule.** Every project, plate, and chapter carries a small mono catalogue number (01, 02, 03) set in JetBrains Mono 13px, and sections are separated by a single 1px hairline rule in the line colour, never by a coloured band, a gradient, or a decorative divider. The accent appears exactly three ways and nowhere else: the active nav underline, the solved state of the challenge panel, and the rule above a chapter handoff line. Because the accent is rare, the reader learns to read it as "this is the live point".

## Navigation

Fixed top bar, paper ground in light theme (dark ground in dark theme), 1px hairline at its bottom edge, 64px tall. Left: the name "Muhammad Izaz Haider" in Archivo 600, 17px, linking home. Centre or right: five items maximum, in audit and UX order: Projects, About, Expertise, Research, and Contact as a solid ink button (the last item, most visible, per the serial position effect). Home is not a nav item; the name is the home link. Active page: a 2px accent underline under the link, no pill, no background wash. Theme switch: a text button ("Dark" / "Light") beside the Contact button, with a visible label, never an icon alone. GitHub and LinkedIn links live in the footer and in Contact, not in the nav bar, so the bar stays at five items plus the switch. Mobile: one menu button with its state announced ("Menu", expanded or collapsed), a full screen paper menu with the same five items in the same order at 44px minimum tap targets, Contact at the bottom in the thumb zone, focus moved into the menu on open and returned to the button on close, Escape closes it. Skip link first in tab order ("Skip to content"), visible on focus. No multi level dropdowns anywhere.

## Hero composition

The cover of the monograph. Full viewport width, minimum 100svh on desktop, content vertically centred, video plate behind everything.

**Layers, bottom to top:**

1. **Poster frame.** A still frame taken from the graded clip, exported as WebP or AVIF at 1600 to 1920px wide, 80 to 150 KB, preloaded with high fetch priority. This is the largest contentful paint element and the hero when video never loads. It carries the hero alone.
2. **Video loop.** One short licensed stock clip, 8 to 15 seconds, in the abstract technical visualisation or close up engineering detail direction (slow particle field, network lines, macro circuit or cable detail, shallow depth of field), graded to the palette, silent, no audio track, 720p, under 3 MB (under 2 MB preferred), WebM plus MP4 where the pipeline allows, otherwise MP4 alone. Sourced from Coverr first, then Pexels, then Pixabay, then Mixkit (Free License only), licence verified clip by clip with the checklist in `docs/02-ux-video-research.md` section B3 and the record saved beside the file. No face, no hoodie, no dark room, no skull, no mask, no lock icon, no readable code, no visible brand. Autoplay muted loop playsinline, preload metadata, `aria-hidden` true (the headline beside it carries the meaning). A visible pause control sits at the hero's lower edge for visitors who have not set reduced motion.
3. **Flat scrim.** One uniform overlay, `rgba(23, 22, 20, 0.62)` over the whole hero, no gradient, no blur. Text contrast is tested on the poster frame alone, on the brightest frame of the loop, and at 390px width. If any of those fails, the scrim darkens or the clip is rejected. Never fix readability by hoping the footage stays dark.
4. **Owned particle and line field.** A custom procedural canvas 2D field (plain canvas, not Three.js, so the hero adds no 147 KB 3D runtime) drawn on top of the video: slow drifting particles in warm paper white at low opacity, thin lines connecting particles within 140px, the field reacting to a fine pointer (particles within 120px drift gently toward the pointer and ease back, never snap). This is the layer that makes the hero cursor reactive, because a video alone cannot be. It freezes to a still under reduced motion, it does not exist on touch devices, and nothing is lost without it.
5. **Copy block (left, columns 1 to 7 on desktop).** Catalogue line in mono: "Portfolio, 2026". Headline in Archivo 700 expanded, broken into lines by hand, three lines maximum, nine words maximum: "Find the flaw. Prove it. Build the fix." Role line in Instrument Sans 500: "Penetration Tester, AI x Offensive Security". One sentence, twelve words or fewer: "I break web apps, then build the tools that teach others to break them safely." One primary action only: a solid ink button, "View projects". One secondary text link beside it, "Contact", set as an underlined text link, not a second button. No second button, no social icons, no availability line, no mission statement above the fold. Availability and contact routes live in About and Contact, and the CV download lives in About and in the footer.
6. **Challenge panel (right, columns 8 to 12 on desktop).** A paper surface card, 2px radius, 1px line border, ink text on paper in both themes (the panel is a page from the book laid on the dark cover). Title in Archivo 600: "Try it: PenTrix-VulnLab". Mono line: the real request, `GET /admin`, with a code strip showing the request and the response status. Three steps, numbered because they are a true sequence: 1. Read the request. 2. Spot the flaw. 3. Prove it. One input ("Try a path", placeholder `/admin`), one button ("Check"), one state line. Solved state: an accent wash behind a "Solved" badge and the line "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags." The panel checks session only, never role, exactly as v2 did. No flag literal is ever shown. On phones the panel stacks below the copy block, the video becomes the poster still by default, and the panel keeps full function.

**Hero on mobile (390px):** poster still, headline at 40px, role line, sentence, primary action full width, challenge panel below, pause control hidden (no video to pause). The hero is legible and tappable with no cursor layer and no video. Mobile is tested first, at 375px and 430px, for the hero, the index, and the case study template, because Monograph's weakest honest point is that its hero was designed desktop first.

**Hero failure order:** poster with headline and action (always works), then the static particle field, then the video loop on desktop only after the poster has painted and the reduced motion check has passed, then cursor reactive motion only with a fine pointer. If the video fails to load, if the codec is unsupported, or if autoplay is rejected, the poster stays, no error is shown, and no unhandled rejection reaches the console. Under `prefers-reduced-motion: reduce`, the video source is never attached and the particle field is frozen.

**Hero density rule:** if the first build feels crowded at 1280x800, the panel moves to the top of the next screen and the hero keeps only the headline block. That decision belongs to the build review, not to this file.

## Project presentation

### Index

An editorial list, not a card grid. Order follows the profile audit section 5, never reordered for visual variety: PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books, then the archive. Each featured entry is a full width row separated by a hairline: catalogue number in mono (01, 02, 03), title in Archivo 700 at 32 to 40px, one line outcome, one meta line in mono (role, year, stack, status: live, repo, or course project). The flagship, PenTrix-VulnLab, gets a large plate: its architecture diagram or a screenshot of the lab running, set wide on the left, text on the right, with the challenge panel linked beside it. Every other featured entry gets a smaller plate on alternating sides, never the same composition twice in a row. Hover (fine pointer only): the plate image scales 1.02 inside its frame and the title gains its accent underline; the row lifts 2px. The archive below is a compact ruled list: name, one line, repo link, filter by category (All, Web, Mobile, Learning, Tools). No star counts hardcoded (fetch live or omit), no featured weight for thin repos, no card that answers nothing about what was decided and what happened.

### Case study (one template for all detail pages)

Lead with the outcome on the first screen (borrowed from Field Notebook: the outcome is set largest), then the template in this order, each with a sticky in page index on desktop (left rail, mono, Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links):

1. Title, one line outcome, three facts (role, stack, status).
2. Problem (2 to 4 short lines).
3. My role (named ownership; named collaborators where they exist, for example VulnNotes: Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts).
4. Decisions (2 to 3 decisions, each with the alternatives considered and the trade off accepted; this is the section most portfolios skip and the one hiring managers read longest).
5. How it was built (architecture, key modules, sample output, never a full code dump).
6. Evidence (live demo where one exists, repo, screenshots of real output, diagrams, verified counts beside their source; PenTrix-VulnLab links to the repo only, never a live deployment).
7. What I would improve (honest, specific, 2 to 3 items).
8. Links (live demo where it exists, repo, and a next project link at the foot, so the work reads as a sequence).

Reading target 5 to 10 minutes, 600 to 900 words, at least three supporting visuals (a problem frame, a process or iteration shot, and the final delivered design). Every visual is a plate with a figure note stating what is shown and what happened. Diagrams are hand-built inline SVGs, drawn in Monograph tokens (paper ground, ink lines, oxblood used only for the single highlighted path per diagram), rendered as React components in `src/components/diagrams/`, with a text equivalent beside them. Tabs, where the page needs them (the PowerShell stages, the BugHunt payload categories, the Ai-Terminal-X prompts), are one shared accessible Tabs component with real tab semantics and arrow key navigation, not three copies.

## Buttons and components

**One button pair, one card style, one radius.** Primary: solid ink ground, paper text, Instrument Sans 500, 15px, padding 14px 28px, radius 2px, no shadow. Hover (fine pointer): translateY(-1px) and ground darkens one step; active (press): translateY(0). Secondary: 1px ink border, transparent ground, ink text (paper text on the dark hero), same padding and radius, same hover and press. Danger and destructive actions do not exist on a portfolio; the contact form's error state uses the accent for the message text and a 1px accent border on the field, never a red wash. Focus: 2px accent outline, offset 2px, appearing instantly, on every interactive element.

**Cards:** surface ground, 1px line border, radius 2px, no shadow, padding 32px. A linked card lifts 2px on hover and its border darkens to `--line-strong`. No card inside a card, no tinted card with a second card nested in it.

**Inputs:** paper surface, 1px line border, radius 2px, 16px Instrument Sans, 14px padding, accent 2px outline on focus, inline error text under the field in accent, `aria-invalid` and `aria-describedby` wired. The contact form keeps the v2 behaviour (idle, sending, sent, error) and the email link beside it, so contact works if the form fails.

**Chips and tags:** text only, mono 13px, separated by a 1px vertical rule or a comma, never a pill background, never a coloured badge. The single exception is the "Flagship" marker on PenTrix-VulnLab, set as small mono text preceded by the accent rule, not as a pill.

**Tables:** hairline row rules only, no zebra striping, mono numbers right aligned, Instrument Sans labels left aligned, table head in Instrument Sans 500 sentence case, never tracked capitals.

**Code strips:** dark code ground in both themes, token colours from the colour section, radius 2px, mono 14px, line height 1.7, copy button as a text button ("Copy", then "Copied" for 2 seconds), never an icon alone. Syntax highlighting is multicoloured on the dark ground in every code example, per the standing rule.

**Dialogs and lightbox:** the Proof lightbox is a Radix Dialog (focus moved in on open, returned to the thumbnail on close, Escape and arrow keys handled), paper surface, hairline border, caption as a figure note beside the image, never under it as a decorative caption.

**Progress:** a thin scroll progress rule (2px, accent) at the very top of case study pages only, never a skill percentage bar (skill percentages are banned outright).

## Motion language

Motion (the `motion/react` package) is the ONE animation library. CSS handles micro interactions only (button hover and press, link underlines, card lift, focus). No GSAP alongside it, no second runtime. Three.js is not adopted: the hero particle field is plain canvas 2D, which is lighter, pauses cleanly, and needs no 147 KB 3D runtime for a decorative field.

| Motion | Duration | Easing | Notes |
|---|---|---|---|
| Control feedback (button, link, card lift, copy state) | 160 to 220ms | ease out | CSS transitions, transform and opacity only |
| Hero headline lines | 500 to 760ms | ease out | Motion, stagger 45 to 70ms, transform and opacity only |
| Section entrances (handoff line, first block) | 500 to 760ms | ease out | Motion, stagger 45 to 70ms, once, on entry |
| Page transitions | under 300ms | ease out | `AnimatePresence`, fade and 8px rise, content never delayed |
| Challenge panel state change | 160 to 220ms | ease out | Badge and state line only |
| Particle field drift | continuous, slow | linear drift, eased pointer response | Canvas, pointer response eases, never snaps |
| Parallax | below 5 percent | n/a | Hero video plate only, disabled on touch and reduced motion |

Rules: animate transform and opacity only, never width, top, left, or box shadow on scroll. No fade in on scroll for every section (that is the generic default): only the handoff line and the first block of a chapter animate in; body copy and plates are visible by default. No scroll jacking, no pinned sections, no parallax on text, no random blinking, no tilt, no carousels, no timed tabs. Lazy init the particle field only when the hero is in view, pause it off screen, cap device pixel ratio at 2. Reduced motion: `MotionConfig reducedMotion="user"` plus the existing CSS reduced motion block, plus a 2 second safety net timeout that force reveals everything, so content can never stay hidden if an animation fails. Content is visible with scripting off: the entrance is an enhancement on visible content, never a gate.

## Cursor behaviour

The cursor is a quiet instrument, not a toy. The system pointer is never replaced and never hidden. One cursor idea only, in the hero: the particle field responds to a fine pointer (particles within 120px drift gently toward it, lines connect within 140px, motion eases rather than snaps). One magnetic pull only: the primary call to action in the hero pulls up to 6px toward the pointer and eases back on leave. Project plates get a hover preview that follows the cursor on desktop (a larger plate image beside the row), with the same information available without hover. On touch devices the cursor layer simply does not exist and nothing is lost: no hover state carries information, no drag interaction is required, tap targets are 44px minimum. On reduced motion, the particle field is frozen and the magnetic pull is off. No cursor trail, no blob cursor, no splash cursor, no custom cursor glyph anywhere.

## Image and diagram treatment

**Photographs and screenshots:** his own only, never lecture slide images, never stock passed off as his work. The profile portrait is set as a plate on About, eager loaded, explicit width and height, WebP or AVIF with the PNG as fallback. Proof screenshots (CSCB scoreboard, recognition) are compressed (no 1.5 MB unoptimised PNGs), given explicit dimensions, and shown at a size where their text stays readable without pinching on a phone. Every plate carries a figure note: a short mono line stating what is shown and what happened, placed beside the plate on desktop and above it on phones. Plates have a 1px line frame, 2px radius, no shadow. Hover on a linked plate: the image scales 1.02 inside its frame.

**Diagrams:** hand-built inline SVG diagrams (PenTrix architecture, APK pipeline, skills tree) in Monograph tokens (paper ground, ink lines, oxblood used only for the single highlighted path per diagram), rendered as React components in `src/components/diagrams/` and placed inside a `DiagramFigure` plate, with a text equivalent beside them and no iframe, no external diagram file, and no "Open the diagram in a new tab" fallback. Diagram components are content and can be reused; their styling must be checked against Monograph, never assumed. No diagram is generated with a second visual system.

**Video poster:** see the hero section. The poster is a frame of the chosen clip, never a separate stock still.

**Open Graph image:** one composed plate (name, role line, one verified fact, paper ground, ink type, accent rule), 1200 by 630, generated from the Monograph tokens, not a screenshot of the hero.

## Iconography

**Phosphor Icons is the single UI icon set** (`@phosphor-icons/react`, already installed). Regular weight, 20px for nav and buttons, 16px for inline use, ink colour always, never coloured to match the accent except the solved check in the challenge panel (accent) and the focus state (accent outline). No emoji as icons, no drawn lookalikes of real logos, no second icon set (no lucide, no react-icons, no heroicons) alongside Phosphor.

**SVGL brand marks only for genuine identification.** GitHub and LinkedIn marks in the footer and Contact, technology marks (Python, TypeScript, JavaScript, React, Vite, Tailwind CSS, Docker, Linux, Ubuntu, Vercel, Flask) on project case studies and the capability map, only where the technology is genuinely used by that project. Marks are saved locally in the project (never hotlinked), render verified before shipping, used in their light or dark variant as the theme needs, and never recoloured. Brands not on SVGL (Debian, Kali Linux, Nmap, Burp Suite, Next.js, Node.js) use the brand's own press kit or an official source, verified the same way, never a guessed SVGL URL. A brand mark is never decoration for something else and never a substitute for a UI icon.

## Accessibility floor

Reduced motion safety net (2 second force reveal), visible focus on every interactive element (2px accent outline, offset 2px), contrast computed for every text token (recheck against the real video frames and the real rendered type, especially the muted text and the dark accent), real buttons and real tabs with arrow key navigation, alt text on every image, skip link first in tab order, mobile menu focus moved in on open and returned on close with Escape support, lightbox focus returned to the thumbnail, tap targets 44px minimum, no information carried by hover alone, content visible with scripting off.

## Performance budget (borrowed from Workbench, binding for the build)

Largest contentful paint under 2.5 seconds. Hero video under 3 MB (under 2 MB preferred), poster 80 to 150 KB, route level code splitting, eager hero media, lazy particle field init only when the hero is in view, device pixel ratio capped at 2, no Three.js in the main bundle (147 to 150 KB gzip, more than the entire current JS bundle). Measure with PageSpeed Insights (mobile tab) after the first build and replace these targets with measured results. This budget is a target, not a measurement, until the first build proves it.

## What this system rejects and why

| Rejected | Why |
|---|---|
| Arsenal in any form (periwinkle, lilac, lime, marker span with lime underline, kicker pill, lime rule, radial gradient ground) | It is the v2 identity the rebuild explicitly rejects. Reusing any of it would make v3 read as a reskin, not a rethink. |
| Hacker cliches (green terminal, neon, Matrix rain, hexagons, glowing borders, skull, hoodie in a dark room) | They signal a genre, not a person, and they are the most copied visual language in security portfolios. |
| Typewriter headline, decrypt or glitch headline effects | The typewriter was dropped in v2 for delaying the message and reading as a template default. The headline sets statically, broken by hand. |
| Gradient text, purple to blue gradients, glassmorphism | Banned by the hallmark and unslop rules and read as template decoration. Glassmorphism is translucency without a job. |
| Skill percentage bars, skill counts, testimonial carousels, invented social proof | No source supports the numbers, a percentage of a skill is meaningless, and no testimonial exists in any source. |
| Card grid of repo names | It presents work as inventory and buries the flagship among coursework. Six deep case studies plus a compact archive replace it. |
| Long loaders, curtain intros, scroll jacking, everything moving at once | A six second loader is a usability penalty, and animation without hierarchy means nothing matters. One signature moment, calm structure everywhere else. |
| Dark only design with low contrast | It tires the eye over a long case study and is the signature of the cyberpunk template the brief rejects. Light is the default; dark is a deliberate second design. |
| Bento grids, horizontal scroll galleries, oversized marquees | Derivative concepts are penalised for creativity, and a trend copied wholesale dates the portfolio to the year it was built. |
| Hiding the evidence behind interaction | A game or puzzle that must be solved before the visitor sees any project punishes the two minute skim. The challenge panel sits beside the headline and the first project follows immediately. |
| Eyebrow labels in tracked capitals, kicker pills, middle dot meta strings, arrows glued to link text | Labels are sentence case and untracked, meta is separated by rules and commas, links are plain text with an underline on hover. |
| Stock hero photo, generic abstract 3D shape, services section, pricing or process section from an agency template | Each tells the visitor the site was assembled rather than designed. |
| Three.js hero scene | It would more than double the shipped JavaScript for a decorative field that plain canvas 2D does better and lighter. Revisit only with a deliberate decision and a measured budget. |
| Scroll driven pinned PenTrix sequence (Workbench) | Deferred, not adopted in this phase. Monograph has no pinned scroll sequence by design; the trade is readability over scroll theatre. |
| Per project colour fields (Field Notebook) | Would break the one accent rule that makes the accent mean "this is the live point". |

## Skill conflicts, recorded

1. **Design taste bans violet and lavender; the brief bans Arsenal.** No conflict in outcome: Monograph uses no violet, lavender, lilac, or periwinkle in any role. Adopted fully.
2. **Landing page design bans Inter; v2 uses Inter.** Monograph drops Inter entirely and uses Instrument Sans as the text face. Adopted.
3. **Hallmark bans purple to blue gradients and eyebrow labels; the brief bans gradient text.** No conflict: Monograph has no gradients of any kind and no eyebrow label. Section openers use a plain sentence case mono line as a chapter marker, untracked, no pill, no capitals.
4. **Unslop bans gradient text and emoji icons.** Adopted fully: no gradient text anywhere, no emoji as icons, Phosphor only for UI icons.
5. **Design taste rule 1: no caption or description under any image. The brand strategy, the Behance case study discipline, and the standing caption rule require figure notes on every proof screenshot. CONFLICT, resolved in favour of the evidence rule.** A portfolio whose proof is screenshots without notes is a gallery, not a case study. Monograph keeps figure notes, but places them beside the plate on desktop (not under it as a decorative caption) and styles them as mono evidence lines, so the design taste concern does not arise: the note is evidence, not decoration.
6. **Design taste: one section per screen, every section one or two screens tall. The case study template needs 5 to 10 minute reads with a sticky in page index. CONFLICT, resolved in favour of the case study.** Monograph keeps "hero alone on the first screen" and "one idea per screen, set big" for the opening of each chapter, but case study chapters are as long as their evidence needs.
7. **Design taste: real full colour icons, small diagram visuals in cards. Hallmark and the component research: one icon set, Phosphor, ink only; SVGL marks never recoloured. CONFLICT, resolved in favour of one icon set.** Full colour icons per card would give every project a different coloured mark and break the monograph's restraint.
8. **Frontend design warns that a warm cream ground near `#F4F1EA` with a high contrast serif display and a terracotta accent is a default tell. CONFLICT OF APPEARANCE, resolved by changing the other two members of the trio.** The ground is `#F7F3EA` (a touch deeper than the cited tell), the display face is a grotesk (Archivo, not a serif), and the accent is oxblood (`#7A2E25`, not terracotta). No member of the tell's trio appears together.
9. **Frontend design warns against accenting a single word in a headline, all caps labels, middle dot meta strings, and arrows glued to link text. Adopted fully.**
10. **Hallmark floor: about 80 words on any one screen, hero text as headline plus one sentence plus actions. The hero carries the challenge panel as well. DEVIATION, recorded.** The panel's words are interactive labels (steps, button, state line), not prose, and the panel is the signature moment the competitive research requires. The headline block itself stays inside the limit.
11. **Hallmark floor: the first non empty line of CSS is the Hallmark stamp. Not adopted as a stamp; this direction is a React build, not a Hallmark run.** The build keeps the v2 mechanism of tokens declared at `:root`, which satisfies the substance of the floor rule (every colour and font through a token).
12. **Design taste wants shader effects and scenes only on tech pages, and allows one effect. Monograph allows one effect (the canvas particle field) and no shader, no WebGL scene.** Adopted in the stricter form: the particle field is plain canvas 2D, not a shader.

## Build order (binding for Phase 7)

1. Tokens and type scale first, then navigation and hero poster, then the project index and one case study with the challenge panel built before the hero around it.
2. Poster before video: the poster alone must carry the hero before any video layer is added.
3. Test at 390px before 1440px, in both themes, including lightbox focus return, tab keyboard navigation, mobile menu focus management, and reduced motion behaviour.
4. The clip search and licence record come before any video file enters the build. If no clip passes, ship the poster plus the particle field and add the video later.
5. Vendor Archivo (variable, with the expanded width axis), Instrument Sans, and JetBrains Mono as WOFF2, and verify the expanded axis renders before the hero is built. If the expanded axis is not in the vendored package, the hero falls back to Archivo 700 at normal width with tighter tracking, and this file must be updated to say so. Never fake expanded type with a horizontal scale transform.
6. Do not reuse any Arsenal token, class, or layout from `src/index.css`, `index.html`, or `public/404.html`. The tokens in this file are the only palette.
7. Start from `src/data.ts` and the content model for content; rewrite copy only where this direction changes it, and check each line against `docs/01-profile-audit.md`.

## Open issues carried into the build

1. **No video clip selected.** No footage has been chosen, downloaded, or licensed. Next step is a clip search plus the licence checklist before any video file enters the build. Fallback if no free clip passes: paid Artgrid clip (cost decision for Izaz) or poster plus particle field alone.
2. **Hero density risk.** If the first build feels crowded at 1280x800, the panel moves to the top of the next screen.
3. **Light muted text is 4.87:1**, passing AA but with little margin. Never below 13px, never for body copy, with `#655F56` named as the darker fallback.
4. **Archivo expanded width axis must be verified in the vendored Fontsource files at build time.**
5. **Mobile is the weakest point.** Hero designed desktop first, mobile is a graceful reduction. The build must test 375px and 430px first for the hero, the index, and the case study template, and the panel must keep full function on touch.
6. **Principle 6 (cinematic hero performance) is unmeasured until the first build.** The performance budget above is a target until measured.
7. **Work authorisation wording is still unanswered.** Do not state it on the portfolio until Izaz approves the exact wording. Leave a clearly marked placeholder on the About page.
8. **Two certifications are unverified as held** (Google AI Essentials, Advanced Python Scripting with unknown issuer). Do not feature them prominently until he confirms them with evidence. List named certifications only, never a count.
9. **BugHunt Arsenal numbers.** Use the headline figures only; the live site's stat strip contradicts them. Do not copy the strip. The "open source" claim for BugHunt stays out until a repo is confirmed.
10. **Dark theme doubles the QA surface.** Every plate, diagram, code strip, and SVGL mark needs a dark variant check in both themes at 1440px and 390px.
11. **Oxblood accent on dark** (`#D18A74`, 6.42:1) is lighter and warmer than the light accent, so the two themes will feel slightly different in accent weight. Acceptable by design, but it must be checked in the render pass, not assumed.
12. **The panel competes with the first project.** A visitor who plays with the challenge may never scroll to the PenTrix case study. Mitigation: the panel ends with a text link, "Read the PenTrix-VulnLab case study", and the first project card follows the hero without a second scroll on desktop. The panel is a doorway, not a destination.

## Sources

- `docs/04-direction-monograph.md` (selected direction, full spec, 22 sections)
- `docs/04-direction-field-notebook.md` (outcome led case studies, figure note discipline)
- `docs/04-direction-workbench.md` (performance budget, plain stack first build order)
- `docs/03-brand-strategy.md`, `docs/03-project-selection.md`, `docs/03-information-architecture.md`
- `docs/02-competitive-research.md` (12 ranked principles), `docs/02-ux-video-research.md` (hero video research and licence checklist), `docs/02-component-research.md` (Motion, shadcn, Three.js decisions)
- `docs/01-profile-audit.md` (verified facts, open items), `docs/01-repo-audit.md` (what to preserve, what must go)
