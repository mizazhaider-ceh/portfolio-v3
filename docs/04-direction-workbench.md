# Direction C: Workbench

Phase 4 creative direction, Portfolio V3 rebuild. Date: 9 November 2026.
Author: Phase 4 Direction C specialist. Status: direction spec only, no code built, no file outside the two deliverables touched.

Sources read in full before designing: `docs/03-brand-strategy.md`, `docs/02-competitive-research.md`, `docs/02-ux-video-research.md`, `docs/02-component-research.md`, `docs/01-profile-audit.md`, `docs/01-repo-audit.md`, `docs/svgl-logos.md`. Skills read in full before designing: `design-taste-frontend`, `hallmark`, `frontend-design`.

Hard rules applied throughout: no Arsenal theme in any form, no hacker cliches, no green terminal text, no excessive neon, no Matrix rain, no hexagons, no glowing borders, no skull imagery, no gradient text, no purple to blue gradients, no glassmorphism, no decorative element without a purpose, no em dashes, no bounty program names, report titles, IDs, endpoints, or reward amounts, no 269/269 figure or test pass counts, no 16.40/20 GPA in bios, no invented experience, grades, skills, statistics, testimonials, or achievements, no fake screenshots, every number carries its proof beside it or does not appear, no institution, course code, lecturer, or professor mention in any proposed public copy.

## 1. One sentence concept

A portfolio that behaves like a workbench the visitor steps up to: the work is laid out on the bench in plain sight, the tools are real and within reach, and the visitor can pick up one piece, try it, and see how it was made.

## 2. Character

Three concrete words: practical, precise, hands on.

Practical means every surface earns its place by helping a recruiter decide. Precise means measurements, labels, and evidence are exact, never approximate decoration. Hands on means the visitor does something small and real early, instead of reading a claim about doing it.

## 3. World

The world is a working bench, not a showroom and not a stage set. Mixed surfaces carry the idea: a pale paper ground for reading, a warm grey bench surface for the work itself, and a dark graphite surface for code and for the closing contact chapter. The bench is tidy, not styled to look messy. Tools are arranged in a row, each labelled, each in its place. Nothing is scattered for effect, and nothing is hidden in a drawer the visitor must open first.

The visual language comes from the bench itself: ruled lines like a measurement edge, numbered stations like steps in a method, small mono labels like stamps on a part, and one warm signal colour like the mark on a tool handle. The site never pretends to be a physical bench with fake wood grain, fake screws, or fake shadows. It borrows the bench's order, not its props.

## 4. Moments

Moments are the few places where the site moves or responds, and they are deliberately scarce so each one is noticed.

1. Hero arrival: the poster frame is already readable, then the video fades in behind it and the particle field wakes gently around the pointer. The headline does not type, slide, or assemble itself. It is there, in full, from the first paint.
2. Cursor as instrument: moving the pointer across the hero stirs the particle field. Particles near the pointer drift and connect with fine lines, then settle when the pointer leaves. The effect is quiet, like dust in a beam of light over a bench, never a firework.
3. The first station: directly below the hero, the real PenTrix challenge panel sits on the bench as the first piece of work. The visitor can try the forced browsing challenge in three steps, or skip it with one tap to the project list. Trying it is proof. Skipping it costs nothing.
4. Scroll as narrative: in the PenTrix case study, scrolling walks through the five method steps (Reconnaissance, Enumeration, Validation, Impact Analysis, Reporting), one station at a time, with the visitor controlling the pace. Each station shows what was done, what was found, and what changed because of it.
5. Magnetic primary action: the single primary button in the hero pulls gently toward the pointer on fine pointer devices, and settles back when the pointer leaves. It is the only magnetic element on the site.
6. Closing chapter: the contact chapter is a dark bench surface, full width, with the email address as a large, copyable line and the CV download beside it. It feels final, like the bench being cleared at the end of the day, not like a footer that happened.

## 5. Signature detail

The signature detail is the bench rule: a single horizontal ruled line, 2px solid ink, that runs the full content width at the top of every major section, with a small mono station label sitting on the line at the left edge (for example, `01 / Work`, `02 / Method`, `03 / Proof`). The line is a measurement edge and a section marker in one. It replaces decorative dividers, gradient rules, and any coloured bar. It is the one repeated visual device in the whole system, and it is used identically in light and dark themes, with the line colour following the theme ink.

## 6. Typography

### Choices

| Role | Face | Weights | Source |
|---|---|---|---|
| Display, headlines, section titles | Space Grotesk | 500, 700 | Self hosted WOFF2 via Fontsource, `font-display: swap` |
| Body, UI, navigation, labels | IBM Plex Sans | 400, 500, 600 | Self hosted WOFF2 via Fontsource, `font-display: swap` |
| Code, metadata, station labels, mono data | JetBrains Mono | 400, 500, 700 | Self hosted WOFF2, already the project mono face, `font-display: swap` |

### Why these faces

Space Grotesk is the display choice because it reads as engineered, not decorative: open apertures, a slightly technical cut, and strong presence at large sizes without shouting. It is distinct from the v2 Sora pairing, which matters, because this rebuild must not look like v2 wearing a new coat. It carries the workshop character in the headline alone, so the layout does not need props to say the same thing.

IBM Plex Sans is the body choice because it is neutral, humanist, and built for long reading, which is what the case studies demand. It pairs with Space Grotesk without competing, because its character is quieter and its x-height is generous at small sizes. It is chosen over Inter deliberately: the `landing-page-design` skill bans Inter, and Plex Sans gives the same legibility with a more distinctive, less default voice.

JetBrains Mono is kept because the task fixes it for code and metadata, and because it is already self hosted in the project. It is used only where mono is the material (code, file paths, station labels, measurements, dates in tables), never as a general label face, per the hallmark rule that labels are not mono unless mono is the material.

### Type scale

All sizes are in px with rem equivalents at a 16px root. Line heights are unitless. Display sizes use `clamp()` in the build so the hero scales cleanly from 390px to 1440px.

| Token | Face | Size | Line height | Weight | Use |
|---|---|---|---|---|---|
| Display | Space Grotesk | 72 (clamp 44 to 72) | 1.02 | 700 | Hero headline only |
| H1 | Space Grotesk | 56 (clamp 36 to 56) | 1.05 | 700 | Page titles |
| H2 | Space Grotesk | 40 (clamp 30 to 40) | 1.10 | 700 | Section titles |
| H3 | Space Grotesk | 28 | 1.15 | 500 | Project titles, card titles |
| H4 | Space Grotesk | 20 | 1.25 | 500 | Subsections, station titles |
| Body large | IBM Plex Sans | 18 | 1.60 | 400 | Intro paragraphs, case study leads |
| Body | IBM Plex Sans | 16 | 1.65 | 400 | All body copy |
| Body small | IBM Plex Sans | 14 | 1.55 | 400 | Captions, secondary text |
| Label | IBM Plex Sans | 13 | 1.45 | 600 | Navigation, buttons, form labels, sentence case, never tracked capitals |
| Mono | JetBrains Mono | 14 | 1.60 | 400 | Code, paths, station labels |
| Mono small | JetBrains Mono | 12 | 1.55 | 400 | Metadata, measurements, table data |

Rules: headlines are sentence case, never all caps. One headline accent only, and it is structural, not coloured: the hero headline breaks into lines by hand, with the second line indented one step to read as a bench note. No word is coloured, italicised, or highlighted inside a headline. Body line length is capped at 68 characters. No paragraph runs longer than four lines without a break, a list, or a visual.

## 7. Colour tokens

### Principles

Light is the default. Dark is a deliberate second design, built from its own tokens, not an inversion of the light values. Both themes use the same single accent family, a burnt workshop orange, at two strengths: a deep burnt orange for text and actions on light grounds, and a brighter orange for text and actions on dark grounds. There is one accent, one ink family, one muted family, and one line family per theme. No second accent, no gradient, no tinted wash behind sections.

### Light theme (default)

| Token | Hex | Role | Contrast note |
|---|---|---|---|
| `--paper` | `#FFFFFF` | Page ground, reading surface | Base |
| `--bench` | `#ECEAE3` | Bench surface, project index ground, card ground | Base |
| `--ink` | `#1B1D20` | Headings, body text, rules | 16.89 to 1 on paper, 14.03 to 1 on bench, passes AAA |
| `--ink-soft` | `#33363B` | Secondary headings, strong body | 12.13 to 1 on paper, passes AAA |
| `--muted` | `#5B6066` | Muted text, captions, metadata | 6.34 to 1 on paper, 5.27 to 1 on bench, passes AA for normal text |
| `--line` | `#D9D7CE` | Hairline borders, card edges | Decorative only, never carries meaning alone |
| `--rule` | `#1B1D20` | Bench rule, section marker line | Same as ink |
| `--accent` | `#C2410C` | Accent text, links, primary button ground | 5.18 to 1 on paper, passes AA for normal text; white text on accent is also 5.18 to 1 |
| `--accent-deep` | `#9A3412` | Accent text on bench surface, accent hover | 7.31 to 1 on paper, 6.07 to 1 on bench, passes AAA |
| `--accent-soft` | `#FDEEDC` | Accent tint, highlight ground for a selected station | Ink on it is 14.83 to 1, passes AAA; accent on it is 4.55 to 1, passes AA |
| `--code-ground` | `#17181C` | Code strips, code blocks, dark panel inside light pages | White code text on it is 17.74 to 1 |
| `--code-text` | `#E8E6DF` | Code body text | 14.20 to 1 on code ground |

Contrast ratios above were computed from the hex values in this spec. Accent `#C2410C` is 4.30 to 1 on bench, which fails AA for normal text, so accent text on a bench surface must use `--accent-deep` instead. That rule is part of the token spec, not a suggestion.

### Dark theme (deliberate second design)

| Token | Hex | Role | Contrast note |
|---|---|---|---|
| `--paper` | `#16181B` | Page ground, graphite | Base |
| `--bench` | `#1E2126` | Bench surface, card ground | Base |
| `--bench-deep` | `#23262B` | Raised bench surface, code panel edge | Base |
| `--ink` | `#F2F1ED` | Headings, body text, rules | 15.74 to 1 on paper, 14.28 to 1 on bench, passes AAA |
| `--ink-soft` | `#D8D7D2` | Secondary text | Passes AAA on both dark grounds (verify in build, target above 7 to 1) |
| `--muted` | `#A8ABB0` | Muted text, captions, metadata | 7.72 to 1 on paper, 6.59 to 1 on bench deep, passes AA and AAA respectively |
| `--line` | `#33363C` | Hairline borders, card edges | Decorative only |
| `--rule` | `#F2F1ED` | Bench rule, section marker line | Same as ink |
| `--accent` | `#FF8A3D` | Accent text, links, primary button ground text | 7.58 to 1 on paper, 6.88 to 1 on bench, passes AAA |
| `--accent-deep` | `#FFB27A` | Accent hover, large accent text | Use for large text and hover states only, verify per use |
| `--accent-soft` | `#3A2417` | Accent tint, selected station ground | Ink on it passes AAA, verify in build |
| `--code-ground` | `#0F1013` | Code strips, code blocks | White code text on it is above 17 to 1 |

Dark theme notes: the dark ground is graphite `#16181B`, not pure black, so long case study reading does not tire the eye. The dark bench `#1E2126` is only one step lighter than the ground, so the mixed surface idea survives without a harsh panel edge. The accent is brighter in dark (`#FF8A3D`) because the same burnt orange would sink on graphite; this is a deliberate rebalancing, not an inversion. Theme switching keeps the existing mechanism (pre paint script, `data-theme` attribute, one localStorage key), only the token values change.

### What is not in the palette

No periwinkle, no lilac, no lime, no violet, no lavender, no purple to blue gradient, no green terminal colour, no neon. The orange is burnt and restrained: it appears on the primary action, on links, on the active station marker, and on one small measurement mark per section, nowhere else. If orange appears more than twice on any one screen, it is overused and must be cut.

## 8. Spacing and grid

Base unit 8px. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

Container: max width 1240px, centred. Gutters: 64px desktop, 32px tablet, 20px phone. At 1920px the gutters grow and the measure and grids do not, per the hallmark container rule.

Grid: 12 columns, 24px gap on desktop, 16px gap on mobile. Hero headline spans columns 1 to 9. Body copy spans columns 1 to 8. Project index uses a 2 column grid on desktop (one flagship card full width, then pairs), 1 column on mobile. Case study body uses an 8 column text measure with a 3 column sticky index rail on desktop, stacked on mobile.

Section padding: 96px top and bottom on desktop, 64px on mobile. A section is never forced to a screen height. The hero alone fills the first screen. Every other section is as tall as its content, plus its padding.

Vertical rhythm: 24px between a section title and its first block, 16px between paragraphs, 32px between a block and its next heading, 48px between major subsections. Card internal padding is 24px, compact cards 16px.

## 9. Layout rules

1. Left aligned, always. Headings, body, and actions start at the left content edge. Centred text appears nowhere except the 404 page.
2. One idea per screen. A section holds one idea, stated in its title, and everything in it serves that idea. A section that needs two titles is two sections.
3. Equal edges. Every block sits on the container lines or the grid columns. Nothing bleeds to one side, nothing hangs past the right edge, no horizontal overflow at any width.
4. Full bleed is rare and purposeful. Only the hero video panel and the dark contact chapter are full width. Everything else lives inside the container.
5. Hierarchy is carried by size, weight, and position, not by colour or decoration. The largest type on a page is the page title. The second largest is the section title. Nothing else competes with them.
6. The bench rule (section 5) is the only repeated divider. Cards have a 1px hairline border and square corners at the top level, with a 4px radius only on small inner elements (chips, code strips, buttons). No card inside a card.
7. Every visual has a job stated in its caption or its surrounding copy. A diagram shows architecture. A screenshot shows a tool running. A photograph shows the person or the proof. No visual is there to fill space.
8. The page reads with motion removed. Every entrance, reveal, and scroll effect has a static state that is complete and legible on its own. Content is visible by default and animation adds to it, never gates it.

## 10. Navigation

Top level items, five maximum, in this order: Projects, About, Expertise, Research, Contact (as a button, not a plain link, last and most visible). Home is not a nav item; the wordmark at the top left links home. The wordmark is the name set in Space Grotesk 700, `Muhammad Izaz Haider`, with no monogram, no icon mark, and no tagline beside it.

Desktop nav: fixed, 64px tall, paper ground with a 1px hairline bottom border, no blur, no shadow. Active state is a 2px accent underline under the link text, not a pill and not a background fill. Theme switch is a single labelled control, `Light` or `Dark` in plain text with a small Phosphor Sun or Moon icon, never an icon alone.

Mobile nav: one menu button, full screen sheet, same five items in the same order, 48px minimum tap targets, Contact button at the bottom in the thumb zone. Focus moves into the menu on open and returns to the menu button on close. The menu closes on selection. No multi level dropdowns.

Footer: dark bench surface, name, navigation links, email, GitHub and LinkedIn links (SVGL marks, genuine identification only), CV download, location as city and country only, and the copyright line. The footer is a quiet end, not a second nav.

Case study navigation: a sticky in page index inside the case study (Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links), plus previous and next project links at the foot of every case study, so the work reads as a sequence. A skip link to main content is first in tab order on every page.

## 11. Hero composition

### Structure

Full width video panel, 100svh maximum and 640px minimum on desktop, with the content column inside the container at the left. The panel holds, in layers from back to front: poster image, video loop, dark overlay, cursor reactive particle canvas, then content. Content: name in mono small caps style (sentence case mono, 12px, letterspaced only by 0.04em, never tracked capitals as a label), headline in three hand broken lines, one sentence role line, one primary action, and a small mono availability line beneath the action. Nothing else above the fold. No social icon row in the hero, no second button, no scroll hint arrow, no stats strip.

### Copy (approved, verified)

Headline, broken by hand into three lines:

Line 1: `I break web apps`
Line 2: `to find what is weak,`
Line 3: `then I build the fix.`

Role line, one sentence: `Penetration Tester, AI x Offensive Security.`

Availability line, mono: `Available for internships and junior roles, Feb to Apr 2027 and Jul to Sep 2027.`

Primary action, one button: `View projects`. It links to the featured project list directly below the hero. The CV download lives in About, Contact, and the footer, not in the hero, so the hero asks for exactly one thing.

### Video

Hybrid hero, per `docs/02-ux-video-research.md` Part B. Base layer: one short licensed stock clip, 8 to 15 seconds, in the abstract technical visualisation or close up engineering detail direction (slow particle field, flowing lines, depth of field, or a macro circuit board or cable close up with shallow depth of field and a slow drift). Source order: Coverr first, then Pexels, then Pixabay, then Mixkit (Free License only). Licence verified clip by clip with the checklist in the research doc, and the source, licence name, clip URL, and download date recorded beside the file before it ships. Graded to the palette: desaturated, warmed slightly toward the bench tone, darkened with a restrained overlay so the headline stays readable on the brightest frame, not just the average frame. No face, no hoodie, no dark room, no skull, no mask, no lock icon, no readable code, no visible brand or logo in any frame.

Encoding: 720p, 24 or 30 frames per second, no audio track (stripped, not just muted), H.264 CRF 28 to 30, faststart, plus WebM VP9 where the pipeline produces both reliably, otherwise MP4 alone, never WebM alone. Target under 2 MB, hard cap under 3 MB. Attributes: autoplay, muted, loop, playsinline, preload metadata, poster, explicit width and height, aria hidden true (the headline beside it carries the meaning). The play promise is handled; a rejected play leaves the poster visible with no unhandled console error and no error shown to the visitor.

Poster frame: a still taken from the graded clip itself, WebP or AVIF, 1600 to 1920px wide, 80 to 150 KB, preloaded with fetchpriority high, so the swap from still to motion is invisible. The poster is the largest contentful paint candidate. The hero must read and convert on the poster alone.

### Cursor reactive layer

Owned layer on top of the video: a plain canvas 2D particle and line field, built for this portfolio, about 90 particles maximum on desktop, fewer on smaller screens. Behaviour: particles drift slowly on their own; particles within roughly 120px of the pointer drift gently toward it and connect to it and to each other with fine 1px lines at low opacity; motion eases toward the pointer with a spring (stiffness low, damping high), never snaps. Colour: ink particles at 0.35 opacity on light video, paper particles at 0.35 opacity on the dark overlay, lines in accent at 0.25 opacity, only near the pointer. The layer is pointer fine only (mouse or trackpad). It pauses when the hero leaves the viewport, and it freezes to a static field under reduced motion.

### Touch alternative

On touch devices the particle layer simply does not exist: no canvas is created, no pointer listener is attached, nothing is lost, because the layer carries no information. The hero on touch is the poster, then the video only on explicit opt in or on a fast connection, with a visible `Play motion` button that loads the video on tap. The headline, role line, availability line, and primary action are identical on touch and desktop. The magnetic button is also absent on touch; the button is a plain, full width, 48px tall target instead.

### Reduced motion and slow connections

Reduced motion: poster only, no video source attached, particle field frozen to its static frame, no entrance animation. Slow connection (effective connection type 2G or slow 3G, or Save Data enabled): poster only, video on opt in. Mobile default: poster only, video on opt in or on a fast connection, 720p maximum, 480p rendition where the connection is slow. A visible pause control sits at the bottom right of the hero panel for visitors who have not set reduced motion.

## 12. Project presentation

### Project index

Order follows the audit ranking, never reordered for visual variety: PenTrix-VulnLab first, then PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books, then the compact archive. The flagship card is full width, with a real screenshot or architecture diagram on the left, and title, one line problem, one line outcome, stack tags, and two links on the right. Remaining featured projects are pairs in the two column grid, same content model, smaller image. Each card passes the 30 second test: a non technical reader can say back what the project does and why it matters.

Card behaviour: one hover effect only, a 2px lift and a hairline border that darkens to ink, 160 to 220ms. A cursor following highlight is not used here; the hover preview idea from the research is rejected for this direction because a preview that follows the cursor hides the card content on small screens and adds a second cursor system beside the hero field. The card title is the link, the whole card is not a link, and the link has a visible focus ring.

Archive: a compact list, not cards, with name, one line, category filter (All, Web, Mobile, Learning, Tools), and repo link each. No star counts hardcoded; fetch live or omit. No featured weight for thin repos.

### Case study template

Every featured case study follows the same template, in this order: title, one line outcome, three facts (role, stack, status: live, repo, or course project), sticky index, Problem (2 to 4 short lines), My role (named ownership, named collaborators where they exist), Decisions (2 to 3 decisions, each with alternatives and the trade off accepted), How it was built (architecture, key modules, sample output, not a full code dump), Evidence (live demo, repo, screenshots of real output, verified counts beside their source), What I would improve (2 to 3 honest items), Links (live demo where it exists, repo, next project). Reading time target 5 to 10 minutes. PenTrix-VulnLab links to the repo only, never a live deployment, per the audit.

### Scroll driven sequence (PenTrix case study)

The signature scroll moment lives inside the PenTrix case study, in the Decisions and How it was built area, not on the homepage. It walks through the PenTrix method in five stations, one per screen step, with the visitor controlling the pace by scrolling:

1. Reconnaissance: map the surface, list what exists, note what is exposed.
2. Enumeration: probe each entry point, record what responds and how.
3. Validation: prove the finding with a real request, never trust a guess.
4. Impact Analysis: state what an attacker could actually do with it, in plain words.
5. Reporting: write the finding so the fix is obvious, with the exact step to reproduce and the exact fix pattern.

Each station is a panel with a station number, a title, two or three short lines of method, and one small artefact (a code strip, a request sample, or a diagram fragment). The panel on the left stays fixed while the station text changes on the right as the visitor scrolls, implemented with Motion `useScroll` and transform and opacity only, no scroll hijacking, no pinning longer than the five stations, and a plain stacked fallback that shows all five stations in order when Motion is unavailable, when JavaScript is off, or when reduced motion is set. On mobile the sequence is a simple vertical stack with the same content and no pinning. A jump list above the sequence (`1 Reconnaissance, 2 Enumeration, 3 Validation, 4 Impact Analysis, 5 Reporting`) lets a reviewer jump straight to any station without scrolling through the rest.

The sequence shows method, not exploits: no payload that harms a live system, no flag literal, no confidential detail. The PenTrix flag line appears once, in the exact approved wording: `Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags.`

## 13. Buttons and components

One primary button style, one secondary style, one link style, one card style, one radius scale. No second button family anywhere.

Primary button: accent ground `#C2410C` in light, `#FF8A3D` text on dark ground in dark (see tokens), white text in light, ink text in dark, 48px tall, 24px horizontal padding, 4px radius, label in IBM Plex Sans 600 15px, sentence case. Hover: background darkens to `#9A3412` in light, 160 to 220ms, transform translateY minus 1px only. Press: translateY 0. Focus visible: 2px solid ink outline offset 2px, appearing instantly. Magnetic behaviour (hero primary only, desktop fine pointer only): the button translates up to 6px toward the pointer with a spring, and returns on leave.

Secondary button: transparent ground, 1px solid ink border, ink text, same size and radius. Hover: bench ground fill, 160 to 220ms. No ghost button without a border, no text only button as a primary action.

Links in body copy: ink text with a 1px solid accent underline, offset 2px. Hover: underline thickens to 2px. No arrow glued to link text.

Cards: paper or bench ground, 1px hairline border, 4px radius, 24px padding. Card title in Space Grotesk 500 20px. Card meta in mono 12px. No card inside a card, no shadow except a single 0 2px 0 rgba(0,0,0,0.04) lift on hover for linked cards.

Code strips: dark ground `#17181C` in both themes, multicolour syntax highlighting per the standing rule (keywords purple or pink, functions blue, strings green, numbers orange, variables and paths cyan, comments grey, operators neutral), JetBrains Mono 14px, 16px padding, 4px radius, copy button at the top right with a 2 second Copied state. The code strip is the one place where a dark panel sits inside a light page, and it is justified because code is read on dark in this system.

Tables: full width, 1px hairline row dividers, header in IBM Plex Sans 600 13px sentence case, body in 15px, mono for data values. No zebra striping.

Chips and tags: 1px hairline border, bench ground, 12px mono, 4px radius, 6px vertical and 10px horizontal padding. Never a coloured pill, never a lime or lilac chip.

Form inputs: paper ground, 1px solid line border, 48px tall, 4px radius, focus is a 2px solid accent outline. Errors sit under their own field in accent deep text. The contact form is never the only route: the email address sits beside it as a visible link.

Dialog and lightbox: Radix Dialog via shadcn, focus trapped on open and returned to the thumbnail on close, Escape closes, arrow keys step the gallery. Tabs: real tab semantics (role tab, aria selected, aria controls, arrow key navigation) or a simpler disclosure pattern, never a tablist without tab roles.

## 14. Motion language

Motion (`motion/react`) is the one animation library. CSS handles micro interactions (button hovers, link underlines, focus rings, card lifts). No GSAP, no second runtime, no library for a 150ms fade.

Durations: 160 to 220ms for control feedback (buttons, links, card lift, chip state), 500 to 760ms for section entrances, stagger 45 to 70ms where a group enters together, parallax below 5 percent and only on the hero video layer, never on text. Easing: a single ease out cubic for entrances, a spring (stiffness 300, damping 30) only for the magnetic button and the particle field, never for text.

Rules: animate transform and opacity only, never width, top, left, or box shadow on scroll. One reveal per page at most beyond the hero, and it is a simple fade and rise of 16px, not a cascade. Nothing fades in on scroll as a default; sections are visible and the reveal is an enhancement. The hero enters once on load: video opacity 0 to 1 over 600ms, content already visible, no staggered headline.

Reduced motion: `MotionConfig reducedMotion="user"` plus a CSS reduced motion block that rests every animation. Content is visible by default in every state. Safety net: a 2 second timeout forces full visibility of any element still hidden by an animation, mirroring the v2 tagline safety net. If an animation fails for any reason, content must never stay hidden.

Page transitions: a short fade and rise under 300ms via Motion `AnimatePresence` on route change, disabled under reduced motion, never delaying content.

## 15. Cursor behaviour

One cursor system, on the hero only, and it never replaces the system pointer. The pointer stays visible and native everywhere. The particle field reacts to it, the primary button pulls gently toward it, and that is the whole system.

Rules: pointer fine only, never on touch, never on coarse pointers. No custom cursor graphic, no trailing blob, no cursor that hides information. No cursor effect on project cards, on the case study, or in the footer. If the pointer leaves the hero, the field settles and the button returns. If the device has no fine pointer, no cursor code runs at all.

## 16. Image and diagram treatment

Images are his own screenshots, his own portrait, or the graded hero clip, nothing else. No stock photograph presented as his work, no lecture slide image embedded anywhere, no invented screenshot. Every image carries alt text, explicit width and height, and a caption that states what is shown and what happened, in the standing caption shape (`Step N. What is shown: ... What happened: ...` for lab and proof images).

Treatment: images sit in a hairline frame on paper, square corners, no shadow, no rounded mask, no filter, no duotone. The hero poster is the one full bleed image. Proof screenshots are shown at their real aspect ratio, never stretched, never cropped to fit a grid. PNG screenshots are compressed before shipping, with WebP or AVIF where the pipeline supports it, and explicit dimensions so nothing shifts on load.

Diagrams: own inline SVG or the existing Archify diagrams, reused only after checking their internal styling against the new tokens. Diagram treatment: ink lines on paper, accent used only for one highlighted path or node per diagram, mono labels, no gradient fills, no glow. A diagram always has a text equivalent beside it (a short list of what the diagram shows), so the content survives without the image.

## 17. Iconography

Phosphor Icons (`@phosphor-icons/react`, already installed) is the single UI icon set. One weight only, Regular, at 20px for navigation and buttons and 16px for inline use. No second icon set, no lucide, no react icons, no drawn lookalike of a real logo.

SVGL brand marks are the only source for brand and technology logos, used only for genuine identification (GitHub and LinkedIn in navigation, footer, and Contact; Python, TypeScript, JavaScript, React, Flask, Docker, and similar on project case studies and Expertise where that technology is genuinely used). Rules from `docs/svgl-logos.md`: search the API first, match by exact title, download the route URL, save locally in `public/logos/`, never hotlink, render verify every SVG before shipping, use the light or dark variant correctly for the theme, never recolour a logo, never use a logo as decoration for something else. Brands not on SVGL (Debian, Kali Linux, Nmap, Burp Suite, Next.js, Node.js) use the brand's own press kit or official site, or another verified source, with the same verification, never a guessed URL.

Emoji are never icons. No emoji appears in the interface, in buttons, in headings, or in the board.

## 18. Performance budget

Targets, to be measured in the build, not assumed:

| Measure | Target |
|---|---|
| Largest contentful paint | Under 2.5 seconds at the 75th percentile, mobile tab in PageSpeed Insights |
| Hero poster | WebP or AVIF, 1600 to 1920px wide, 80 to 150 KB, preloaded, fetchpriority high |
| Hero video | 8 to 15 seconds, 720p, under 2 MB preferred, hard cap under 3 MB, no audio track |
| Hero video on mobile | Poster by default, video on opt in only |
| JavaScript, main bundle | No increase over the v2 gzip baseline of 126.53 KB except the Motion addition (full Motion about 34 KB gzip, LazyMotion plus `m` about 4.6 KB initial, attributed figures to verify at install); route level code splitting required |
| Three.js | 0 KB, not adopted (see section 19) |
| Particle field | Plain canvas 2D, 0 KB added dependency, 90 particles maximum desktop, capped device pixel ratio at 2, paused off screen |
| Images | Compressed PNG screenshots, WebP or AVIF where supported, explicit dimensions, no image above 300 KB without a stated reason |
| Frame rate | 60 frames per second on a mid range phone as the bar; transform and opacity only, no layout animating properties |
| Fonts | Self hosted WOFF2, latin subsets only, `font-display: swap`, no external font request |
| Accessibility | Contrast verified against the tokens in section 7, focus visible everywhere, reduced motion respected with the safety net in section 14 |

Build rules: eager hero media (poster preloaded, never lazy loaded above the fold), route level lazy loading for every route except home, diagrams loaded only when reached, below fold videos preload none with IntersectionObserver, one autoplaying video at a time, pause offscreen media. If the hero cannot meet the LCP target with video, it ships as the poster plus the particle field, not as a heavier video.

## 19. Three.js decision

Decision: Three.js is NOT adopted for this direction.

Reasons, in order:

1. Weight: Three.js is about 147 to 150 KB gzip (attributed forum and Bundlephobia figures in `docs/02-component-research.md`), more than the entire current JavaScript bundle gzip of 126.53 KB. Adopting it would more than double the shipped JavaScript for one hero moment, and it would break the performance budget in section 18.
2. The brief is already satisfied without it: the hybrid hero needs a video base plus a cursor reactive particle and line field, and a plain canvas 2D field does that at 0 KB of added dependency, with easier 60 frames per second on a mid range phone and no WebGL context to manage.
3. The v2 plan explicitly dropped a Three.js particle background, and nothing in this direction changes the reason for that drop. The particle field here is deliberately quieter than the one v2 rejected, which makes the case for a heavy 3D renderer weaker, not stronger.
4. Risk: a WebGL scene adds failure modes the 2D field does not have (no WebGL environment, context loss, driver differences, reduced motion handling in two places). The poster plus 2D field degrades gracefully to a still in every one of those cases.
5. The component research allows at most one optional hero scene, lazy loaded on the home route only, disabled on reduced motion, or nothing at all. This direction takes the nothing at all branch, deliberately, and spends the saved weight on the video encode and on route level code splitting instead.

If a later phase wants a 3D moment, it must make a new, evidenced case for one scene, code split behind a dynamic import on the home route only, and it must show the measured LCP and frame rate still meet section 18. This spec does not authorise it.

## 20. What this direction rejects and why

| Rejected | Why |
|---|---|
| Arsenal theme, tokens, layouts, and component classes | The rebuild rejects Arsenal entirely. Reusing any of it would make v3 look like v2 reskinned, and the task forbids it. |
| Hacker cliches (green terminal, Matrix rain, hexagons, glowing borders, skull, neon, cyberpunk template) | They signal a genre, not a person, and they are the most copied visual language in security portfolios. |
| Typewriter headline, decrypt or glitch headline | Delays the message by seconds, reads as a template default, and was already dropped in v2 for the same reason. The headline is static and hand broken. |
| Gradient text, purple to blue gradients, glassmorphism | Banned by the brief and by the skills. Gradient text fails contrast and reads as a template tell; glassmorphism hides content behind blur. |
| Skill percentage bars and skill counts | No source supports the numbers. A percentage of a skill is meaningless, and a recruiter reads it as filler. Skills carry one line evidence notes instead. |
| Card grid of repo names | Presents work as inventory and buries the flagship projects among small tools. Six deep case studies plus a compact archive instead. |
| Testimonial carousel, invented social proof | No testimonial exists in any source. Fake praise destroys trust the moment it is checked. |
| Long loader or intro sequence | A six second loader is a usability penalty, not art direction. The hero paints with the poster immediately. |
| Everything moving at once | Animation without hierarchy means nothing matters, and it hurts performance and accessibility. One signature moment, calm structure everywhere else. |
| Hiding the evidence behind interaction | A recruiter on a phone in two minutes must find the work. Every interactive moment has a plain, fast path to the same content beside it. |
| Dark only design with low contrast | Fails contrast checks and tires the eye over a long case study. Light is the default, dark is a deliberate second design. |
| Bento grid, horizontal scroll gallery, oversized marquee as the structure | Copied trends of the year, penalised for creativity, and a template tell. A grid is used only where the content genuinely needs it, in the project index pairs. |
| Custom cursor that replaces the pointer, cursor trail, blob cursor | Annoys a recruiter, breaks touch devices, and adds a second cursor system beside the hero field. The pointer stays native. |
| Three.js hero scene | Decided in section 19: weight, risk, and no need, since canvas 2D satisfies the brief. |
| Stock hero photograph presented as his work, hoodie in a dark room | The brief forbids it, and a generic clip says the author picked the first search result. The clip is graded, layered, and licensed clip by clip. |
| Kicker pill, marker span with lime underline, lime rule | Arsenal patterns, forbidden by the task. The bench rule and the station label replace them. |
| Eyebrow labels, tracked capitals, middle dot meta strings, arrows glued to link text | Banned by hallmark and frontend design. Labels are sentence case body face, one step smaller. Meta is written as short labelled lines, not joined strings. |

## 21. Risks and open questions

1. Orange as the single accent is a strong choice and a risk: if it reads as too warm or too close to a construction cliche, the direction tips from workshop into theme park. Mitigation: keep it to the uses listed in section 7, test the hero and one case study with a fresh reader, and be ready to deepen it toward `#9A3412` as the primary if the brighter value feels loud.
2. The video base layer is not selected yet. No clip has been chosen, downloaded, or licensed in this phase. The next step is a clip search using the terms in section 11, followed by the licence checklist, before any file is added to the build. If no free clip passes art direction and the release check, the fallback is a paid Artgrid clip, which is a cost decision for izaz, not a research decision.
3. The scroll driven PenTrix sequence is the most complex interaction in this direction. It must be built with Motion `useScroll` and tested on a real phone, because pinned scroll sequences are the easiest place to break mobile reading. The plain stacked fallback must be tested first, before the pinned version, so the content is never hostage to the effect.
4. The particle field must be measured on a mid range phone. 90 particles is a starting cap, not a guarantee. If frame rate drops below 60, the cap drops to 50, then to a static field, in that order.
5. Work authorisation wording is still unanswered. The About page must leave a clearly marked placeholder for his approved wording, and must not invent a line. This is the most important gap for recruiters, per the audit.
6. Two certifications remain open (Google AI Essentials confirmation, Advanced Python Scripting issuer). Neither is featured prominently until he confirms them with evidence.
7. BugHunt Arsenal numbers are internally contradictory on the live site. The direction uses the headline figures only, per the audit, and flags the BugHunt site itself for a consistency fix.
8. Star and repo counts move over time. The direction fetches them live or omits them, never hardcodes them. The 81 repo count and the Security-Books star count in the audit are already stale by the time this spec is read.
9. The dark theme accent `#FF8A3D` and the dark ink soft `#D8D7D2` need a build time contrast check against their exact grounds. The ratios in section 7 are computed for the main pairs; the secondary pairs are marked to verify in the build.
10. The magnetic button is a small effect with a real annoyance risk if the spring is too strong. Stiffness 300 and damping 30 are starting values; if testers notice the button before the label, the magnetism is cut to 3px of travel, then removed.

## 22. Skill conflicts, recorded

Read in full: `design-taste-frontend`, `hallmark`, `frontend-design`. Followed where they genuinely apply. Conflicts below are explicit, with the rule chosen.

1. `design-taste-frontend` bans violet and lavender in the page's own design. This direction has no violet or lavender anywhere. Chosen: the skill rule, fully.
2. `design-taste-frontend` bans caption or description under any image. This direction uses captions on proof and lab images, because the standing user rule requires captions in the shape `Step N. What is shown: ... What happened: ...` for his screenshots, and the competitive research requires every visual paired with commentary. Chosen: the user rule and the research, over the skill. Captions are short, structured, and sit beside the image, never as an apology for it.
3. `design-taste-frontend` requires one section per screen, with every section exactly one or two screens tall. This direction keeps the hero alone on the first screen, but lets other sections be as tall as their content (case studies run long by design, 5 to 10 minutes of reading). Chosen: the research and the case study template, over the skill's screen height rule, because a 5 minute case study cannot fit in two screens without hiding its evidence.
4. `design-taste-frontend` requires real photographs leading, and its tech rule wants the client's own UI as live HTML in an app frame. Followed in spirit: the hero uses a real graded clip, and the project pages show his real tools running. Not followed literally for the hero, because the brief fixes a video plus particle hero, not a product UI frame.
5. `hallmark` bans eyebrow labels and labels in tracked capitals or small caps. Followed: station labels are sentence case mono, 12px, untracked except for 0.04em letterspacing on the hero name line, which is a name, not a label. The bench rule replaces the eyebrow entirely.
6. `hallmark` bans purple to blue gradients, cards inside cards, emoji as icons, and hand drawn browser windows. Followed, all four.
7. `hallmark` requires the hero headline, one sentence, and primary action visible at 1280 by 800 without scrolling, and about 80 words on any one screen. Followed: the hero carries the headline, one role sentence, one action, and one mono availability line, and nothing else.
8. `hallmark` requires every colour and font through a token at `:root`. Followed in the spec: every colour in section 7 is a token, every font in section 6 is a token role.
9. `hallmark` requires content visible with scripting off. Followed: the poster, the headline, the action, the stacked scroll sequence, and every section are complete without JavaScript. The particle field and the video are enhancements only.
10. `frontend-design` warns against the warm cream background with a terracotta accent as an AI generated default tell. This direction is at risk here, because a warm bench plus a burnt orange accent sits near that pattern. Mitigation chosen: the ground is pure white paper, not cream; the bench is a cool warm grey, not cream; the accent is a deep burnt orange used sparingly, not a terracotta wash; and the display face is Space Grotesk, not a serif. The resemblance is noted honestly, and the build must check the finished hero against the tell before handover.
11. `frontend-design` warns against accented single words in headlines, all caps labels, and numbered markers where the content is not a sequence. Followed: no word in a headline is coloured or italicised, no all caps labels, and numbers appear only where the content is a real sequence (the five method stations, the project index order).
12. `frontend-design` warns against the SaaS card kit (identical rounded cards, one radius everywhere, soft grey shadow under each). Followed: one card style, hairline borders, square top level corners, 4px radius only on small inner elements, no soft shadow except the single 2px lift on linked card hover.
13. `landing-page-design` bans Inter (known conflict, recorded in the task and in `docs/02-component-research.md`). This direction does not use Inter. Chosen: IBM Plex Sans as the body face, which keeps the legibility without the banned face.
14. `unslop` bans gradient text and emoji icons (known conflict, recorded in the task). Followed: no gradient text anywhere, no emoji as icons anywhere, Phosphor only for UI icons.
15. `design-taste-frontend` house rule 7 wants real full colour icons, and its diagram guidance wants pulsing diagrams in cards. Not followed for icons: Phosphor is a single weight monochrome set, chosen because the component research fixes Phosphor as the single UI set and SVGL as the brand source, and mixing full colour product icons into a monochrome UI set would break the one system rule. Diagrams keep a restrained pulse only where a diagram shows flow, never as decoration.

## 23. Evaluation against the 12 ranked principles (docs/02-competitive-research.md section 8)

One line each, honest about weaknesses.

1. One idea, one sentence, before anything is built: strong, the workbench sentence governs the hero, the bench rule, and the cut list, and anything that does not serve it is listed in section 20.
2. The portfolio is the proof, not the brochure: strong, the real challenge panel sits directly below the hero and the case studies carry live demos and artefacts, but the hero itself shows atmosphere rather than the challenge, which is a step removed from the ideal.
3. Outcome first, then problem, role, decisions, and outcome with evidence: strong, the case study template leads with the outcome and the Decisions section names alternatives and trade offs, but the template is only as good as the copy written into it, which this spec does not write.
4. Editorial typography leads, decoration follows: strong, Space Grotesk plus Plex Sans with a strict scale and a hand broken headline carries the page, but the display face is a common choice and may read as familiar rather than distinctive.
5. Directed motion, scroll as narrative, one signature moment: strong, the scroll driven PenTrix sequence plus the cursor field is exactly one signature moment with a calm structure around it, but the sequence is the riskiest build item and could easily become the everything moving failure it is meant to avoid.
6. A cinematic hero with art-directed motion, built for performance: mixed, the hybrid video plus poster plus particle field matches the brief and the performance checklist, but no clip is selected yet, so the cinematic quality is unproven until the clip search lands.
7. The cursor is a quiet instrument, not a toy: strong, one field on the hero only, pointer fine only, nothing on touch, but the field is subtle enough that some visitors may never notice it, which is either restraint or a wasted moment.
8. Performance is part of the design, not a task at the end: strong, the budget in section 18 is explicit and the Three.js rejection saves more than the whole current bundle, but Motion and the video still need measured LCP and frame rate in the build to prove it.
9. Navigation that never loses the visitor: strong, five items, active states, sticky case study index, previous and next links, and a full screen mobile menu with focus management, but the five item cap leaves Research and Expertise competing for attention with Projects.
10. Evidence over lists, everywhere: strong, every claim carries an artefact and every number carries its proof beside it, but the direction inherits the audit gaps (BugHunt contradiction, stale counts, unverified certifications) and cannot fix them by design alone.
11. Mobile is a first-class citizen, not a responsive afterthought: mixed, the touch alternative is explicit and the hero is designed at 390px first, but the scroll sequence and the particle field are desktop led ideas that only degrade gracefully on mobile, they do not shine there.
12. An accessibility floor under everything: strong, reduced motion with a safety net, visible focus, real tabs and dialogs, contrast computed per token, but the dark secondary pairs still need a build time contrast check and the lightbox focus return must be tested, not assumed.

## 24. Handover notes for the build

Build order: tokens and type scale first, then navigation and hero poster, then the project index and one case study with the scroll sequence as a plain stack, then the particle field, then the video layer, then the dark theme, then the remaining pages. Test the plain stack before the pinned sequence, test the poster before the video, test at 390px before 1440px. Do not build the video layer until the clip licence record exists. Do not adopt Three.js without a new evidenced case and a measured budget. Do not reuse any Arsenal token, class, layout, or component, and do not copy v2 copy without checking each line against `docs/01-profile-audit.md`.
