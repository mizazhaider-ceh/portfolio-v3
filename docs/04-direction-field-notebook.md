# Direction B: Field Notebook

Phase 4 creative direction, Portfolio V3 rebuild, Muhammad Izaz Haider.
Date: 9 November 2026. Status: direction spec, for coordinator review.
Sources read in full before designing: `docs/03-brand-strategy.md`,
`docs/02-competitive-research.md`, `docs/02-ux-video-research.md`,
`docs/02-component-research.md`, `docs/01-profile-audit.md` (sections 1, 2, 5, 13),
`docs/01-repo-audit.md` (section 6), `docs/svgl-logos.md`, plus the skills
`design-taste-frontend`, `hallmark`, and `frontend-design` (all read in full).
No file outside the two Direction B deliverables was edited. No code in `src/`
was touched. No build, no commit, no deploy.

Hard rules observed throughout: no Arsenal theme in any form, no hacker
cliches, no green terminal text, no neon, no Matrix rain, no hexagons, no
glowing borders, no skull imagery, no gradient text, no purple to blue
gradients, no glassmorphism, no decoration without a purpose, no em dashes,
no bounty program names, report titles, IDs, endpoints, or reward amounts,
no test pass counts, no GPA figure in bios, no invented experience, grades,
skills, statistics, testimonials, or achievements, no fake screenshots,
every number carries its proof beside it or does not appear, no institution,
course code, lecturer, or professor mention in proposed public copy, no
desperate internship messaging.

## 1. One sentence concept

A portfolio that behaves like a field notebook kept by a penetration tester:
a near black frame holding warm white pages, where each project is a chapter
opened by its outcome in large type, and the evidence is the decoration.

## 2. Character

Three words: exact, quiet, deliberate.

Exact: every claim carries its artifact, every number carries its source,
every label says what it is and nothing more. Quiet: one idea per screen,
one accent, one signature moment, and calm structure everywhere else.
Deliberate: hard rules, sharp corners, and motion that answers an action
rather than performing for its own sake.

## 3. World

The world is a lab journal, not a stage. The visitor is a reviewer opening
a notebook that is already in use: ruled pages, chapter numbers, figure
numbers, margin notes in monospace, and entries written in the order the
work happened. The frame is near black ink. The pages are warm white. The
only colour inside a chapter is one muted flat field that belongs to that
project alone, used once at the chapter opening and then put away. Nothing
glows, nothing floats, nothing pretends to be a film set. The notebook
metaphor is carried by structure (chapters, indexes, figures, rules) and by
typography, never by fake paper texture, fake handwriting, fake coffee
stains, or scanned notebook imagery. Those would be decoration without a
purpose, and they are banned here.

## 4. Moments

There are two moments, and only two.

Moment one, the hero: the visitor reads the name, the role, and the first
proof in under ten seconds, with a quiet still frame beside the headline
that can become motion only on desktop, only after the poster has painted,
and only when the visitor has not asked for reduced motion. The hero does
not ask the visitor to play, solve, or wait.

Moment two, the case study opening: each project opens with its outcome
set larger than anything else on the page, followed by a sticky in page
index, so a hiring manager finds the verdict in seconds and a peer can
jump straight to decisions or evidence. Everything else on the site is
calm structure that protects these two moments.

## 5. Signature detail

Outcome led case study typography with a sticky in page index. Every case
study chapter opens in the same fixed order, so the visitor learns the
pattern once and trusts it everywhere:

1. Mono chapter label: chapter number, project name, and status (live,
   repo, or course project).
2. The outcome, set at 56 to 64px in the display face, in two or three
   lines broken by hand. It states what happened, not what was attempted.
3. A mono metadata block: role, dates, stack, and links, each on its own
   line, separated by hairline rules.
4. A flat muted colour field behind the chapter opening only, in that
   project's colour (see section 7).
5. A sticky in page index on the left rail: Problem, My role, Decisions,
   How it was built, Evidence, What I would improve, Links. The active
   item is marked with a 2px ink rule, never with a pill or a dot.
6. The body in the order of the index, with figure numbers (Fig. 01,
   Fig. 02) and mono captions that state what is shown and what happened.

The signature is typographic, not animated. No decrypt effect, no glitch
effect, no typewriter effect, no split text hero. The words are the effect.

## 6. Typography

Two families only, both from the IBM Plex family, both open licensed
(SIL Open Font License), both self hosted as WOFF2 variable files with
`font-display: swap` and no external font request. The pairing is one
family with two voices, which is exactly what a notebook needs: one voice
that speaks, one voice that records.

### Display and body: IBM Plex Sans

Role: display headlines, section headings, body copy, buttons, and
navigation. Weights used: 400 (body), 500 (subheads and buttons), 600
(headlines), 700 only for the hero name and the case study outcome.
Justification: Plex Sans is a humanist grotesk designed for technical
documentation, so it reads as engineered rather than decorative. It has
true small size legibility, a large x height, and clear numerals, which
matters for a page full of counts, dates, and code adjacent copy. It is
not Inter and not Sora, so it is a clean break from the v2 pairing and
from the Arsenal look, and it answers the landing page skill ban on Inter
by not using Inter at all. Its mono sibling shares its metrics and its
design logic, so the two faces feel like one system, not two fonts
bolted together. Self hosting keeps the page free of external requests
and keeps the fonts working offline.

### Metadata, labels, and code: IBM Plex Mono

Role: chapter labels, figure captions, metadata blocks, table heads,
navigation meta, status lines, and all code. Weights used: 400 (code
and captions), 500 (labels and metadata). Justification: mono is the
recording voice of the notebook. It marks a line as data rather than
prose, which lets a skimmer tell evidence from narrative at a glance.
Plex Mono has the same grotesk skeleton as Plex Sans, so labels sit
comfortably beside headlines instead of looking like a second design.
Code set in Plex Mono at 14px with generous line height is readable
without looking like a terminal theme, because the ground is ink, the
colours are muted, and there is no green.

### Type scale

All sizes are desktop first, with fluid reduction below 768px. Line
length for body copy is capped at 68 characters.

| Role | Face | Size / line height | Weight | Notes |
|---|---|---|---|---|
| Hero name | Plex Sans | clamp(44px, 6vw, 76px) / 0.98 | 700 | One line, ink, letter spacing -0.02em, broken by hand only if it wraps |
| Hero role line | Plex Sans | 20px / 1.4 | 500 | One line, body colour |
| Case study outcome | Plex Sans | clamp(40px, 4.5vw, 60px) / 1.02 | 700 | Two or three lines, broken by hand, ink |
| H1, page | Plex Sans | clamp(36px, 4vw, 52px) / 1.05 | 600 | Ink, letter spacing -0.015em |
| H2, section | Plex Sans | 32px / 1.15 | 600 | Ink, preceded by a 3px ink rule 48px wide |
| H3, subsection | Plex Sans | 22px / 1.3 | 600 | Ink |
| Body | Plex Sans | 17px / 1.65 | 400 | Body colour, max 68ch |
| Lead paragraph | Plex Sans | 20px / 1.55 | 400 | Body colour, used once per page at most |
| Mono label | Plex Mono | 12px / 1.5 | 500 | Muted colour, sentence case, untracked, never all caps |
| Mono metadata | Plex Mono | 13px / 1.7 | 400 | Body colour for values, muted for keys |
| Figure caption | Plex Mono | 12.5px / 1.6 | 400 | Muted, starts with Fig. number in ink |
| Code | Plex Mono | 14px / 1.6 | 400 | On ink ground, see section 7 |
| Button | Plex Sans | 15px / 1 | 500 | Sentence case, no letter spacing games |
| Navigation link | Plex Sans | 15px / 1 | 500 | Ink, underline on hover only |
| Small print | Plex Sans | 13px / 1.5 | 400 | Muted, footer and legal lines |

Headline rule, from the research: headlines are broken into lines by
hand, never by the browser at an arbitrary width, and no single word in a
headline is accented in a different colour, weight, or style. Labels are
never set in tracked capitals and never sit above a heading as an eyebrow
(see section 17, skill conflicts).

## 7. Colour tokens

Monochromatic base: ink, paper, and grey, plus one restrained signal
colour used sparingly for links, focus, and the active index item. No
violet, no lavender, no lime, no periwinkle, no gradient of any kind.
All colour goes through tokens declared at `:root` and in a
`[data-theme="dark"]` block. No literal colour past the token block.

### Light theme (default)

| Token | Hex | Role | Contrast on its ground |
|---|---|---|---|
| `--paper` | `#F8F6F1` | Page ground, warm white | Base |
| `--paper-2` | `#EFECE5` | Secondary surface, table header, archive rows | Ink on it 15.45:1 |
| `--ink` | `#171512` | Headings, frame, rules, primary button ground | On paper 16.87:1 |
| `--body` | `#262320` | Body text | On paper 14.47:1 |
| `--muted` | `#5F594F` | Mono labels, captions, secondary text | On paper 6.42:1, passes AA for normal text |
| `--line` | `#D8D2C7` | Hairline rules, card borders | Decorative only, never carries meaning alone |
| `--signal` | `#24425C` | Links, focus ring, active index item, primary hover | On paper 9.68:1; white text on it 10.45:1 |
| `--code-ground` | `#171512` | Code strip ground, same as ink | Paper text on it 15.17:1 |

Notes: `--muted` at 6.42:1 is used at 12px and above only, never for
body copy. `--line` at 1.39:1 against paper is a hairline divider, never
a text colour and never the sole indicator of state. The signal colour
is a deep desaturated ink blue, chosen because it reads as ink, not as
decoration; it is not periwinkle, not lavender, and not a gradient stop.

### Dark theme (a deliberate second design, not an inversion)

The dark theme is not the light theme with its colours flipped. It is
rebuilt as a dark notebook: the page becomes a warm dark ground, the
frame becomes near black, the paper fields become dark fields, and the
signal colour lightens so it keeps its contrast without becoming neon.

| Token | Hex | Role | Contrast on its ground |
|---|---|---|---|
| `--paper` | `#1B1A17` | Page ground, warm dark | Base |
| `--paper-2` | `#26241F` | Secondary surface | Ink text on it, see below |
| `--ink` | `#EDEAE3` | Headings, primary text | On page 14.48:1 |
| `--body` | `#D6D1C7` | Body text | On page 11.44:1 |
| `--muted` | `#A8A198` | Labels, captions, secondary text | On page 6.81:1, passes AA |
| `--line` | `#3A372F` | Hairline rules, card borders | Decorative only |
| `--signal` | `#9BB9CC` | Links, focus ring, active index item | On page 8.46:1 |
| `--code-ground` | `#12110F` | Code strip ground, darker than the page | Body text on it 12.40:1 |
| `--frame` | `#0E0D0B` | Outer frame and footer band | Decorative, text on it uses `--ink` |

In dark, the primary button is paper text on a paper ground with a 1px
ink border (inverted from light, but with its own border and hover
treatment, not a mechanical invert). The code ground is darker than the
page so code blocks read as inset entries, not as glowing panels.

### Per project muted colour fields

One flat muted field per featured project, used only behind that
project's chapter opening and on its index card's top edge, never as a
site wide tint, never as a gradient, never on text smaller than 17px
without an ink label beside it. Each field is a desaturated tone that
sits close to paper, so the page stays monochromatic and the field reads
as a chapter tab, not as a brand colour.

| Project | Field, light | Ink on field | Field, dark |
|---|---|---|---|
| PenTrix-VulnLab | `#D8DFD2` sage | 13.37:1 | `#2A2D2B` |
| PowerShell Academy | `#D6DEE6` slate | 13.41:1 | `#252B31` |
| BugHunt Arsenal | `#E5DCD0` stone | 13.43:1 | `#2E2A24` |
| APK Security Pipeline | `#D2DAD8` eucalyptus | 12.81:1 | `#26302C` |
| AgentArsenal | `#DAD6CB` warm grey | 12.55:1 | `#2B2925` |

Dark fields are dark desaturated versions of the same hue family, each
holding ink text at 10.95:1 or better (checked for the sage dark field
at 11.59:1; the others share its luminance band and are verified at
build). Archive projects get no field at all: no field means not
featured, which is itself the signal.

### Code syntax colours (on `--code-ground`, both themes)

Muted only, no neon, no purple, no pink. Keywords `#8FB0C7` steel
blue, functions `#D8C9A3` muted ochre, strings `#A8C3A0` muted sage,
numbers `#D8B48F` muted clay, variables and paths `#EDEAE3` paper,
comments `#8A8478` grey, operators and punctuation `#C9C2B4` warm
grey. These colours are quiet on ink and stay readable at 14px. The v2
purple and pink keyword treatment is dropped with the rest of Arsenal.

## 8. Spacing and grid

Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section
padding: 96px top and bottom on desktop, 64px on mobile. Gap between
a section heading and its first block: 32px. Gap between paragraphs:
16px. Gap between a figure and its caption: 12px.

Grid: 12 columns, max content width 1280px, centred. Desktop outer
margins 64px, tablet 40px, phone 20px (the 40 to 64px desktop edge
margin from the competitive research, section 7). Column gap 32px
desktop, 20px phone. Case study body column: 8 columns (about 720px,
68ch cap) with a 3 column sticky index rail on the left and 1 column
of breathing room. Hero: headline across 7 columns, poster panel across
4 columns, 1 column gap. Project index: rows, not a card grid (see
section 12). At 390px everything is one column, in the same order as
desktop, with no horizontal overflow and no element wider than the
viewport.

## 9. Layout rules

1. Left aligned throughout. No centred heading groups, no centred body
   copy. The footer is the only left aligned block that spans the full
   width, and it is left aligned too.
2. One idea per screen. A section is sized by its content, never forced
   to a viewport height, and never cut so a neighbour's heading peeks in.
3. Rules carry hierarchy. A 3px ink rule opens a section (48px wide,
   above the H2). A 1px hairline separates entries inside a section.
   A 2px rule marks the active index item. Rule weight, not colour,
   says what matters.
4. Sharp corners everywhere. Radius 0 on cards, buttons, images,
   diagrams, and inputs. The notebook is ruled and cut, not rounded.
5. No shadows except one: a project row gains a 4px solid ink offset
   shadow on hover only, on desktop only. No soft grey shadow anywhere.
6. No card inside a card. A figure sits on the page with a 1px ink
   border, not inside a padded card. A code strip sits on the page with
   its ink ground, not inside a card.
7. Every section has a mono index line at its top (for example,
   `02, Projects` in mono muted), set in sentence case, as a running
   head, not as an eyebrow label above the heading. It is a page number
   in a notebook, not a marketing kicker.
8. Full bleed moments are rare and purposeful: only the hero poster
   panel and the contact chapter may touch the frame edge. Everything
   else stays inside the grid.

## 10. Navigation

Five top level items maximum, in visitor need order (from the UX
research, section A8): Projects, About, Expertise, Research, Contact.
Contact is a button, not a plain link, and sits last. Home is not a
nav item; the wordmark at the top left links home. The wordmark is the
name in Plex Sans 600 at 15px, followed in mono muted by `Portfolio,
2026`. No logo mark, no initials in a coloured square, no icon.

Desktop bar: 64px tall, paper ground, 1px ink bottom rule, sticky at
the top inside the frame, with the active page marked by a 2px ink
underline, never by a pill or a colour fill. Theme switch is a small
mono text button (`Light` / `Dark`) with `aria-pressed`, beside the
Contact button. GitHub and LinkedIn are icon links in the footer and in
Contact, not in the nav bar, so the bar stays at five items.

Mobile: one menu button, labelled `Menu` with its open state announced,
opening a full screen paper menu with the same five items in the same
order at 44px or taller tap targets, Contact at the bottom in the thumb
zone. Focus moves into the menu on open and returns to the button on
close. The menu closes on selection. No multi level dropdowns.

Footer: a solid ink band, paper text, four columns on desktop (nav,
projects, contact, colophon), one column on mobile. It carries the
email link, GitHub and LinkedIn, the CV download, the location in city
and country only, and the single credit line `Created by Muhammad Izaz
Haider`. No institution, no course, no lecturer anywhere in it.

## 11. Hero composition

Grid: 7 columns of type on the left, 4 columns of poster panel on the
right, 1 column gap, inside the frame, on paper. Above the fold at
1280 by 800: name, role line, one sentence, two buttons, and the poster
panel, all visible without scrolling.

Left column, top to bottom:

1. Mono running line: `Field notes, 2026` in muted mono, 12px.
2. Name: `Muhammad Izaz Haider` at hero size, ink, one line on desktop.
3. Role line: `Penetration Tester, AI x Offensive Security` at 20px,
   500 weight.
4. One sentence, from the approved profile copy: `Second-year BSc
   Cybersecurity student in Belgium who breaks web apps, hunts bounties,
   and builds the tools he wishes he had.` No mission statement, no
   philosophy, no adjectives without evidence.
5. Proof line in mono, with its source beside it: `CSCB 2026, first
   place in Web, Junior division, third overall Junior, 26th of 806
   nationally.` The proof is a line, not a badge wall.
6. Two buttons: primary `View projects`, secondary `Download CV`.
   One primary action, one quiet secondary, nothing else.
7. Mono contact line: email, GitHub, LinkedIn, as text links with
   their real labels, not icon only buttons.

Right column: the poster panel. A 4 by 3 still frame taken from the
graded hero clip, with a 1px ink border and a mono caption beneath it:
`Fig. 00, Poster frame. The hero still. Motion plays on desktop only.`
The panel is labelled as a poster frame in the board and in the build,
and it carries the hero alone: if the video never loads, if the visitor
is on mobile, or if reduced motion is set, the hero is complete with
this still. The video itself follows the hybrid recommendation from the
UX research (Part B): one short licensed stock clip, 8 to 15 seconds,
abstract technical visualisation or close up engineering detail, graded
to the palette, muted, looped, under 3 MB and under 2 MB preferred,
720p, WebM plus MP4 or MP4 alone, with a visible pause control, and
never autoplaying on mobile or under reduced motion. No clip has been
selected or licensed yet; that is an open item (see section 16). The
cursor reactive layer is a separate owned canvas field of slow particles
and lines over the poster, pointer fine only, frozen under reduced
motion, and it never carries information.

What the hero is not: no hoodie, no green terminal, no Matrix rain, no
hexagons, no glowing borders, no skull, no typewriter headline, no
decrypt or glitch effect, no stock hero photo, no generic abstract 3D
shape unrelated to the work.

Mobile hero: one column, name, role, sentence, proof line, buttons full
width, poster panel below the buttons at 16 by 10, still only by
default, with a `Play motion` button that loads the video only on tap.

## 12. Project presentation

### Index

The Projects page is an index, not a grid of equal cards. Each featured
project is a full width row: chapter number in mono, title in Plex Sans
600 at 28px, one line problem, one line outcome, stack in mono, year,
and two links (live demo where one exists, repo). PenTrix-VulnLab links
to the repo only, never to a live deployment. Rows are separated by 1px
hairlines, in audit order (PenTrix-VulnLab, PowerShell Academy, BugHunt
Arsenal, APK Security Pipeline, Security-Books), never reordered for
visual variety. On desktop, hovering a row shows a small still preview
beside the cursor (160px, 1px ink border) and a 4px solid ink offset
shadow on the row; the same title, outcome, and links are visible
without hover, so touch visitors lose nothing. Archive projects are a
compact mono list below the featured rows, with a repo link each and a
filter by category (All, Web, Mobile, Learning, Tools). No star counts
are hardcoded: fetch live or omit.

### Case study

Every featured case study follows the signature order in section 5 and
the template from the UX research (section A7): title, one line outcome,
three facts (role, stack, status), sticky index, Problem (2 to 4 short
lines), My role (named ownership, named collaborators where they exist,
for example VulnNotes: Izaz leads the build, Muhammad Muzammil Khan
owns the Flask API including IDOR and the Frida scripts), Decisions
(2 to 3 decisions, each with alternatives and the trade off accepted),
How it was built (architecture, key modules, sample output, not a full
code dump), Evidence (live demo, repo, screenshots of real output,
verified counts beside their source), What I would improve (2 to 3
honest items), Links, and a next project link. Reading time target is
5 to 10 minutes. The sticky index is a left rail on desktop (sticky
from 96px below the nav) and a horizontal scrollable mono strip under
the outcome on mobile. The outcome stays visible as the visitor jumps:
the index, not the scroll position, is the wayfinding.

### Proof

Proof is evidence with captions, not a gallery. Competition screenshots,
recognition artifacts, and live tools are shown as figures with 1px ink
borders, figure numbers, and mono captions stating what is shown and
what happened. Point totals appear only beside their screenshot, never
as standalone claims. The lightbox, where used, returns focus to its
thumbnail on close and traps focus while open (fixing the v2 audit gap).

## 13. Buttons and components

One primary button style, one secondary, one link style, one card style,
one radius (0), one focus treatment.

Primary button: solid ink ground, paper text, 15px Plex Sans 500,
padding 14px 24px, min height 48px, square corners, no shadow. Hover:
ground becomes signal blue. Press: translateY(1px). Focus visible:
2px signal outline, 2px offset, appearing instantly. Disabled: muted
text on paper 2, no hover.

Secondary button: transparent ground, 1px ink border, ink text, same
padding and height. Hover: paper 2 ground. Press: translateY(1px).
Same focus treatment.

Text link: ink, underline on hover only, with a Phosphor arrow icon
only where the link leaves the page, spaced 4px from the text, never
glued to it. Links in body copy are signal blue with a permanent
underline, so they are identifiable without hover.

Project row: paper ground, 1px hairline top and bottom, padding 32px
0, title 28px, outcome line 17px, mono metadata 13px. Hover (desktop
only): 4px solid ink offset shadow and a still preview beside the
cursor. No lift animation beyond the shadow appearing in 160ms.

Code strip: ink ground, 1px ink border, Plex Mono 14px, padding 20px
24px, syntax colours from section 7, copy button in mono muted at the
top right with a `Copied` state that clears after 2 seconds. Never a
terminal window chrome, never traffic light dots, never a fake prompt
that implies a live shell.

Table: 1px hairline row rules, mono head in sentence case, body 15px,
no zebra striping, no coloured header row. Tab browsers (PowerShell
stages, BugHunt payloads, Ai-Terminal-X prompts) use one shared Tabs
component with real tab semantics (`role="tab"`, `aria-selected`,
`aria-controls`, arrow key navigation), fixing the v2 audit gap, or a
simpler disclosure pattern if tabs do not fit the content.

Form (Contact): inputs with 1px ink borders, paper ground, 15px Plex
Sans, visible labels above each field, inline per field errors, idle,
sending, sent, and error states, and the email address printed beside
the form so contact works if the form fails. The form posts to the
existing Formspree endpoint; no new backend.

Progress: a 2px ink reading progress rule at the top of case study
pages only, showing scroll position within the chapter. No skill
percentages, no skill bars, no counts of skills anywhere.

## 14. Motion language

Motion (`motion/react`) is the one animation library. CSS handles
micro interactions only (button hover and press, link underlines, card
shadow, focus rings). No GSAP alongside it, no second runtime, no
Three.js on more than one screen, and only as a code split optional
hero layer if the direction is approved with a reason (see section 16).

Durations, from the competitive research (section 7): 160 to 220ms for
control feedback (button press, hover, tab switch, menu open), 500 to
760ms for section entrances, stagger 45 to 70ms where a list enters,
parallax below 5 percent and only on the hero poster panel, never on
text. Page transitions: a short fade and rise under 300ms through
`AnimatePresence`, disabled under reduced motion. Easing: a single
ease out curve for entrances, a single spring (stiffness 300, damping
30) for the magnetic primary button only.

Rules that are not negotiable:

1. Content is visible by default. Motion adds the entrance; it never
   gates the content. If JavaScript fails, if Motion fails to load, or
   if an animation is interrupted, the content is already there.
2. A 2 second safety net force reveals everything, matching the v2
   tagline pattern that already works.
3. `prefers-reduced-motion: reduce` disables all decorative motion,
   freezes the hero video and particle field to the poster, and shows
   every section in its final state. The site is fully usable with
   motion off.
4. Transform and opacity only. Never animate width, height, top, left,
   or box shadow on scroll.
5. One signature moment (the case study outcome entrance, a single
   600ms rise with a 45ms stagger across its lines) and calm structure
   everywhere else. Nothing moves because the page scrolled except a
   dealt moment inside its own section.
6. Offscreen media pauses. The hero video and particle field pause
   when offscreen, and below fold videos are lazy loaded with
   `IntersectionObserver` and paused when they leave.

## 15. Cursor behaviour

The default pointer everywhere. No custom cursor, no cursor that
replaces the system pointer, no trail, no blob, no splash. One quiet
instrument only: a magnetic nudge on the primary button, maximum 4px
toward the pointer, spring eased, desktop and pointer fine only,
disabled on touch and under reduced motion. On the project index, a
still preview follows the cursor over a row on desktop only, as
described in section 12. On touch devices the cursor layer simply does
not exist, and nothing is lost: every outcome, link, and preview image
is reachable by tap. This follows the competitive research principle 7
(the cursor is a quiet instrument, not a toy) and the UX research mobile
rule (the cursor layer degrades to nothing on touch).

## 16. Image and diagram treatment

Only his own screenshots, his own diagrams, and the licensed graded
hero still. No lecture slide images, no stock photos presented as his
work, no generic abstract 3D shape. Every image carries alt text,
explicit width and height, and a mono caption with a figure number.
Screenshots are shown at true size inside a 1px ink border, never
cropped to fit a card, never placed inside a card, never given a soft
shadow. PNG screenshots are compressed and served as WebP or AVIF with
a PNG fallback before launch (fixing the v2 audit finding of a 6.7 MB
public folder with unoptimised PNGs). Diagrams are monochrome line
diagrams in ink on paper, drawn with the same tokens, with mono labels,
and with a text equivalent beside them for screen readers. Architecture
diagrams keep the existing embed pattern (captioned figure, open in a
new tab fallback) and are rechecked against the new tokens before reuse.
The profile photo, where used, is a plain 1px bordered rectangle, no
circle crop, no filter, no frame effect.

## 17. Iconography

One UI icon set: Phosphor Icons (`@phosphor-icons/react`, already
installed in v2), regular weight, 20px for navigation and buttons, 16px
inline, ink colour, never recoloured to an accent except for the active
state where signal blue is allowed. No lucide, no react-icons, no emoji
as icons, no drawn lookalike of a real logo.

Brand marks: SVGL only, for genuine identification only, never
recoloured, never used as decoration, saved locally, never hotlinked.
Verified available for this rebuild: GitHub (light and dark variants),
LinkedIn, Python, TypeScript, JavaScript, React, Vite, Tailwind CSS,
Docker, Linux, Ubuntu, Vercel, Flask. Not on SVGL, so not assumed:
Debian, Kali Linux, Nmap, Burp Suite, Next.js, Node.js; those use the
brand's own press kit or another verified source, or no mark at all.
Every SVGL file is render verified before shipping, and the light and
dark variants are used on the matching theme.

## 18. Skill conflicts, recorded explicitly

Each skill was read in full. Where a skill conflicts with the brief, the
research, or another skill, the choice made here is recorded with its
reason. The brief and the verified research outrank a skill's generic
default wherever they pin a direction down.

1. `design-taste-frontend` bans violet and lavender in the page's own
   design. Adopted fully. The palette has no violet, no lavender, no
   periwinkle, and no per project field in that family.
2. `design-taste-frontend` rule 1 bans any caption under any image.
   Not adopted. The profile audit, the competitive research (Behance
   lesson: pair every visual with commentary), and the UX research all
   require mono captions stating what is shown and what happened on
   evidence figures. A caption here is an evidence label, not a
   decorative caption, and the proof page cannot work without it.
3. `design-taste-frontend` requires one section per screen and equal
   edges. Adopted in part. Equal edges are adopted (12 column grid,
   fixed gutters). One section per screen is not adopted literally:
   case study chapters are sized by their content and run longer than
   one screen, because the case study template (5 to 10 minute read,
   sticky index, decisions and evidence) outranks a screen height rule.
   No neighbour's heading peeks into a section, which keeps the intent
   of the rule.
4. `design-taste-frontend` wants real full colour icons and small
   diagram visuals in cards. Adopted in part. Brand marks keep their
   own colours (SVGL, genuine identification only). UI icons stay
   Phosphor in ink, per the component research (one icon set only),
   because a security portfolio's UI icons are functional, not product
   logos.
5. `hallmark` Floor 9 bans eyebrows and labels in tracked capitals.
   Adopted fully. There is no eyebrow above any heading and no pill
   label. Mono labels are sentence case, untracked, 12px, and the
   section running head (`02, Projects`) is a page number, not an
   eyebrow.
6. `hallmark` Floor 11 bans purple to blue gradients, cards inside
   cards, and emoji icons. Adopted fully. There are no gradients at
   all, no card inside a card, and no emoji icons.
7. `hallmark` Floor 10 bans middle dot joined meta strings and arrows
   glued to link text. Adopted fully. Metadata is listed line by line
   or separated by hairline rules, and external link arrows are
   Phosphor icons spaced 4px from the text.
8. `hallmark` asks for a headline of seven words or fewer, about 80
   words per screen, and 450 visible words at most. Adopted for the
   hero only (name, role line, one sentence, two buttons). Not adopted
   for case study pages: the evidence led case study (600 to 900 words
   plus three visuals, per the competitive research) cannot fit a 450
   word cap, and cutting evidence to meet a word cap would weaken the
   hiring argument. The hero obeys the cap, the chapters do not.
9. `frontend-design` warns that a warm cream ground with a serif
   display and a terracotta accent, hairline rules with zero radius,
   and mono small labels are AI generated defaults. Noted and
   differentiated, not avoided by abandoning the brief. The brief
   (competitive research, section 7) pins the look: near black frame,
   warm white, grotesk display face, 12 column grid. Per
   `frontend-design`'s own rule, where the brief pins a direction down,
   the brief wins. The differentiation is concrete: the display face is
   a grotesk (Plex Sans), not a serif; there is no terracotta and no
   acid green or vermilion accent; the signal is a deep ink blue; mono
   labels are functional metadata, not decoration; and rule weight, not
   colour, carries hierarchy.
10. `frontend-design` warns against accenting a single word in a
    headline and against all caps labels. Adopted fully. No word in any
    headline is accented, and no label is set in all caps.
11. `landing-page-design` bans Inter. Adopted fully. Inter is not used
    anywhere; Plex Sans is the body and display face. This is a clean
    break from v2, which used Inter, and it is recorded as a new
    decision, not a carry over.
12. `unslop` bans gradient text and emoji icons. Adopted fully. There
    is no gradient text and no emoji icon anywhere in this direction.
13. `design-taste-frontend` allows shader effects and scenes on tech
    pages. Not used beyond the minimum. The hero has one quiet particle
    field as the owned cursor layer, not a shader scene, because a
    shader hero would fight the notebook calm and would cost more
    performance than the evidence led argument earns back. If a later
    phase wants a WebGL scene, it needs an explicit approval with a
    reason, and it stays code split on the home route only.

## 19. What this direction rejects and why

- Arsenal in any form: periwinkle plus lilac plus lime palette, marker
  span with lime underline, pill label, lime rule, Arsenal layouts and
  component classes. Reason: the rebuild rejects the v2 visual identity
  entirely, and carrying any of it forward would make the rebuild read
  as a reskin.
- Hacker cliches: green terminal text, neon, Matrix rain, hexagons,
  glowing borders, skull imagery, cyberpunk templates. Reason: they
  signal a genre, not a person, and they are the most copied visual
  language in security portfolios.
- Typewriter, decrypt, and glitch headlines. Reason: they delay the
  message, they were dropped in v2 for the same reason, and one decrypt
  moment would still be a theme park tell if it appeared on every
  headline.
- Gradient text, purple to blue gradients, glassmorphism, soft grey
  shadows, rounded cards. Reason: each is a template tell, and each
  fights the ruled, cut, monochromatic notebook.
- Skill percentage bars and skill counts. Reason: no source supports
  the numbers, and a percentage of a skill is meaningless.
- A card grid of repo names. Reason: it presents work as inventory and
  buries the flagship projects among small tools.
- Testimonial carousels and invented social proof. Reason: none exists
  in any source, and fake praise destroys trust the moment it is checked.
- Long loaders and intro sequences. Reason: a six second loader is a
  usability penalty, not art direction, and a recruiter who waits leaves.
- Everything moving at once. Reason: animation without hierarchy means
  nothing matters, and it hurts performance and accessibility.
- The copied trend of the year (horizontal scroll galleries, bento
  grids, oversized marquees as a default). Reason: derivative concepts
  are penalised for creativity, and a trend copied wholesale dates the
  portfolio. A bento grid is fine only if the content genuinely needs
  one; this direction does not need one.
- Dark only design with low contrast. Reason: it fails contrast checks
  and tires the eye over a long case study. This direction is light
  first, with a deliberate dark second design.
- Hiding the evidence behind interaction. Reason: a recruiter on a
  phone, in two minutes, cannot find the work if it sits behind a game
  or a puzzle. Every interactive moment here has a plain, fast path to
  the same content beside it.
- Fake paper texture, fake handwriting, fake coffee stains, scanned
  notebook imagery. Reason: the notebook is carried by structure and
  typography, and fake texture would be decoration without a purpose.

## 20. Risks and open questions

1. The notebook metaphor can read as static or old fashioned if the
   hero poster and the particle layer are too quiet. Mitigation: the
   poster is a real graded frame with a visible pause control, and the
   outcome typography is set large enough to carry the first screen
   without motion. If user testing finds the hero flat, the fix is a
   stronger still, not more motion.
2. No hero clip has been selected, licensed, or graded yet. The clip
   search, the licence checklist (source, licence name, clip URL,
   download date saved beside the file), and the frame by frame check
   for faces, logos, and readable screens are all still to do, in the
   order Coverr, then Pexels, then Pixabay, then Mixkit (Free License
   only). If no free clip passes, the fallback is a paid Artgrid clip,
   which is a cost decision for izaz, not a design decision.
3. The 12px page frame plus a sticky nav needs a build check: the frame
   must never cover content, never create horizontal overflow at 390px,
   and never trap focus. If it fights the sticky nav, the frame drops
   to a top and bottom ink band only.
4. Per project colour fields can drift into decoration if a later phase
   starts using them for badges, tags, or backgrounds elsewhere. The
   rule is fixed: chapter opening and index card top edge only.
5. IBM Plex Sans is a strong choice, but it is a common technical face.
   Its distinctiveness here comes from the system around it (mono
   recording voice, hard rules, outcome typography), not from the face
   alone. If the coordinator wants a rarer grotesk, the alternative to
   evaluate is Archivo (expanded display cut with a neutral text cut),
   but that adds a second family and a second licence check, so Plex
   stays the recommendation.
6. Dark theme per project fields are specified by hue family and need
   per field contrast verification at build, with the same 4.5:1 floor
   for text.
7. The interactive challenge demo (the v2 ChallengePanel, built around
   the real `/admin` forced browsing challenge) must be kept and placed
   where it does not compete with the hero video. Its exact placement
   in this direction is directly below the hero, as the first proof
   block on the home page, labelled as a live demo with its own figure
   number. If it sits inside the hero, the hero carries two spectacles
   and fails Gate 1.
8. Open content items from the audit still apply and are not solved by
   design: work authorisation wording (leave a clearly marked
   placeholder, do not invent a line), the Advanced Python Scripting
   issuer (unknown), Google AI Essentials confirmation (unverified),
   BugHunt Arsenal numbers (use headline figures only, never the
   contradictory stat strip), star counts (fetch live or omit), and the
   Amsterdam project finality (present as assigned with dates until
   confirmed after 11 November 2026).
9. The v2 accessibility gaps (lightbox focus return, real tab
   semantics, mobile menu focus management) are fixed by the component
   choices in sections 12 and 13, but they need a fresh Playwright
   sweep after the first build, including reduced motion, 375px and
   430px widths, and the poster only hero.

## 21. Evaluation against the 12 ranked principles

From `docs/02-competitive-research.md`, section 8, one line each, honest
about weaknesses.

1. One idea, one sentence, before anything is built: strong, the
   notebook sentence governs every section, but the metaphor is quiet
   and risks being missed if the frame and the chapter labels are
   softened in build.
2. The portfolio is the proof, not the brochure: good, the challenge
   demo and live tools are kept as the first proof block, but the
   notebook calm means the demo must be placed deliberately or it reads
   as an appendix.
3. Outcome first, then problem, role, decisions, and outcome with
   evidence: strongest fit, the whole direction is built around this
   order, with the outcome set largest and the index beside it.
4. Editorial typography leads, decoration follows: strongest fit,
   typography and grid carry the page and decoration is cut to almost
   nothing.
5. Directed motion, scroll as narrative, one signature moment: adequate,
   the case study outcome entrance is the one moment, but there is no
   scroll driven sequence, so this direction scores lower on motion
   than a direction that builds one.
6. A cinematic hero with art directed motion, built for performance:
   weakest fit, the hero is deliberately restrained and typographic
   first, so it trades cinematic impact for speed and legibility, and
   it depends on a clip that has not been selected yet.
7. The cursor is a quiet instrument, not a toy: strong, the magnetic
   primary button and the index preview are the only cursor behaviours,
   and both degrade to nothing on touch.
8. Performance is part of the design: strong, light first, route level
   code splitting, compressed poster, video only on desktop opt in, but
   the direction adds no new performance win beyond discipline.
9. Navigation that never loses the visitor: strong, five items, sticky
   index in case studies, next project links, and a footer that resolves
   contact without competing with it.
10. Evidence over lists, everywhere: strong, figures with captions,
    counts beside their proof, and no skill without its artifact.
11. Mobile is a first class citizen: adequate, the hero stacks cleanly
    and the poster is still by default, but the sticky index becomes a
    horizontal strip on mobile and needs a real device check at 375px.
12. An accessibility floor under everything: strong, content visible by
    default, 2 second safety net, reduced motion respected, contrast
    checked per token, and the v2 focus gaps fixed by component choice,
    but the dark theme fields still need per field verification at build.
