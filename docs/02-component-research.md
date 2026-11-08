# Phase 2: Component and Design System Research

**Project:** portfolio v3 rebuild (`~/workspace/portfolio-v3-rebuild/`)
**Date:** 9 November 2026
**Scope:** design systems and component resources for the rebuild only. No code was installed, no package was added, no file outside this report was edited, nothing was pushed or deployed, no account was signed in to.
**Stack context (from `docs/01-repo-audit.md`):** React 19.1.0, TypeScript 5.8.0 strict, Vite 6.3.0, Tailwind CSS 4.1.0 (CSS-first config, `@theme inline`, no `tailwind.config` file), react-router 7.18.5, `@phosphor-icons/react` 2.1.10 as the only icon dependency, self-hosted Sora and Inter WOFF2 fonts, 17 routes, single static `src/data.ts` content file, current JS bundle 440.88 KB (126.53 KB gzip), CSS 34.97 KB (8.10 KB gzip). The v2 plan explicitly dropped a three.js particle background, a typewriter headline, and skill percentage bars; those drops are treated here as standing lessons, not as ideas to reintroduce without a reason.
**Method:** fetched the homepage text of each source below with the text fetcher on 2026-11-08/09, ran targeted web searches for component lists, bundle sizes, and licence status, and searched the workspace and connector docs for any 21st.dev or Superdesign integration. A fetched homepage is not a live browser session: interactive demos, pricing pages behind clicks, and install flows were not exercised, and anything marked "not verified here" was not verified here.

## 1. Integration check: 21st.dev MCP and CLI in this environment

**Result: no 21st.dev MCP server, CLI, connector doc, or skill reference exists in this environment.**

Evidence:

1. `grep -ri "21st"` across `~/workspace/portfolio-v3-rebuild/`, `/opt/hatch/connectors/`, `~/workspace/custom-connectors/`, and `~/workspace/custom-skills/` returned hits only inside `docs/01-skills-integrations.md` itself, which already records the same finding from Phase 1.
2. `grep -ri "superdesign"` across the same four locations returned hits only inside `docs/01-skills-integrations.md`.
3. The Phase 1 skills audit (`docs/01-skills-integrations.md`, section 4) independently found no connector for either service.

What exists publicly, but was NOT verified in this environment: a third-party review (Design Atlas, reviewed 2026-09-25) lists a 21st.dev MCP server at `https://21st.dev/api/mcp` with tools named `search`, `get_component`, `get_inspiration`, `search_logo`, and `generate`, and notes that search is free while pulling component source may require a paid plan. That endpoint was not called, no MCP client here is configured for it, and no install was attempted. **Do not claim the 21st.dev MCP works for this rebuild until a later phase configures it through the custom connector flow with izaz approval and confirms a live call.** The same applies to Superdesign: no connector, no CLI, no skill.

Consequence for this phase: all 21st.dev and Superdesign findings below come from fetched public page text and secondary sources, used as a catalogue and direction reference. Components from either source would enter the project only as copied source adapted to the new design system, never as an installed dependency or a live integration, unless a later phase verifies the integration first.

## 2. Per-source findings

### 2.1 21st.dev (https://21st.dev/)

**What I read:** the homepage, fetched 2026-11-08 23:42 UTC (129 lines), plus a search for categories and pricing.

**What it is:** a community registry and marketplace of React and Tailwind components, blocks, templates, themes, live shaders, and icons. The homepage states "12,000+ Crafted UI" and "Used by 4,627,491 builders". Components are published in the shadcn registry format, as React and TypeScript source with Tailwind classes, and install by copy-paste prompt into Claude Code, Cursor, Codex, or Lovable, or by a shadcn CLI command. The homepage shows an "Animated Hero" component landing as `components/ui/animated-hero.tsx` (+148 lines, adapted to the project theme) and a "Shimmer Button" (`shimmer-button.tsx`) as worked examples.

**Genuinely useful for this rebuild:**

- **Hero sections:** multiple distinct hero variants side by side (the catalogue is organised so many patterns have several solutions to compare, for example ten different heroes). Useful as a comparison set for the home hero direction in Phase 4, not as a hero to paste in unchanged.
- **Navigation and sidebars:** navbar and header blocks, sidebar layouts, and a "Dashboard Shell" component (found via the public MCP mirror at `mcp.21st.dev`, a responsive layout pairing a global navigation sidebar with breadcrumbs, key metrics, and content panels). The shell pattern itself is relevant to the Projects index and the case study pages, which need a consistent secondary navigation, even though the dashboard content is not.
- **Cards, search, code presentation, tabs, tables, progress indicators:** the catalogue covers these by category (heroes, pricing, testimonials, buttons, inputs, dialogs, dashboards, data visualisation). Concrete names seen: `Number Ticker` (animated count-up, relevant to the Proof stat cards), `Shimmer Button`, `Animated Hero`. The search result for the Dashboard Shell confirms metric cards, breadcrumb trails, and panel layouts exist as copyable source.
- **Icons and SVG logos:** the Builder plan includes icon search across 29,000 icons and a `search_logo` MCP tool for SVG logos. This overlaps the SVGL skill already audited in Phase 1 (`docs/01-skills-integrations.md`, section 1), which is free, needs no account, and is the preferred logo source. 21st.dev logos are a fallback only.
- **Themes:** complete design-system themes are published on the registry. These are reference only: the rebuild needs an original design system, and adopting a 21st.dev theme wholesale would repeat the v2 mistake of wearing someone else's look.
- **Free tier:** browse and search the whole library, open any component live, copy two prompts or install commands a day, five Design Bug Bot reviews, no card needed (homepage FAQ). Paid Builder is stated on the homepage as "From $6 a month billed yearly" and a secondary pricing review puts Builder at $6/month billed yearly ($8/month billed quarterly) with unlimited copies and installs. Do not pay for anything in this phase; the free tier is enough for comparison browsing, and only a handful of components would ever be copied.

**What to avoid:**

- Copying a whole template or theme. The brief requires an original design system, and a 21st.dev template would make the portfolio look like every other site built from the same registry.
- Installing many components. Each one lands as source that must be maintained, and several authors means several conflicting style habits. Copy at most one or two patterns, and restyle them fully in the new tokens.
- Treating the MCP as available. It is not configured here (see section 1).

**Licence and weight:** components land as source in the repo, so there is no runtime dependency weight beyond what the copied code itself pulls in (usually `motion` or `gsap` for animated pieces, plus Radix primitives for interactive ones). Licence per component varies by author and was not verified per component; check the licence on any individual component before copying it. The registry format itself is shadcn-compatible, which fits the stack (see section 2.3).

### 2.2 Superdesign (https://superdesign.dev/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (104 lines). The page is a prompt library gallery, not documentation.

**What it is:** an AI product design agent. The homepage tagline is "Vibe it. Design it. Explore freely, iterate fast. Your design, AI-powered." It offers three stated capabilities: "Design with AI" (describe what you want and AI creates designs), "Iterate Quickly" (refine with natural language feedback), and "Export Code" (production-ready code for designs). The visible gallery is a prompt library of named styles with remix and view counts, for example "Animated Landing Page: Portal Hero That Parts to Uncover a Full Bleed Image" (4.9k remixes, 160k views), "High Contrast Landing Page" (6.5k remixes, 277k views), "Red Noir Style", "Brutalist E-commerce Page", "Ascii hero", "Animated Aurora Background Hero: Dark Developer-Tool Landing Page", "Neural Noir Interface Style", "Kinetic Orange Style", "Glassmorphism Style", "Mosaic Grid Architecture Style".

**Genuinely useful for this rebuild, adapted to portfolio screens:**

- **Visual direction reference only.** The gallery is a fast way to compare whole-page moods before Phase 4 commits to a direction. Moods worth carrying into the creative-direction shortlist: High Contrast (strong type, hard rules, fits a security portfolio), Red Noir (dark, restrained accent, close to the security subject without hacker cliches), Brutalist (raw structure, monospace, terminal-adjacent), Aurora Background Hero (dark developer-tool landing, a candidate for one hero moment), Mosaic Grid (a candidate layout for the Projects index).
- **Screen mapping, by analogy:** homepage maps to the portfolio home, course catalogue maps to the Projects index, course overview maps to a project case study page, chapter interface and lesson reader map to the long-form case study body, interactive lab maps to the ChallengePanel (the interactive PenTrix demo on the home hero), quiz interface maps to nothing on the portfolio and is not needed, search maps to project filtering, mobile navigation maps to the existing full-screen mobile menu.

**What to avoid, and what was not verified:**

- Do not treat Superdesign as a component source. It generates whole designs from prompts; its output would be a generated page, not a curated component, and it would need a full review pass before any of it could be used.
- Do not use it to generate the portfolio. The brief requires original work, and AI-generated whole-page designs are the fastest route to a generic look.
- Not verified here: pricing, whether export produces React and Tailwind code or plain HTML, whether an account is required, and whether the exported code is usable in a Vite project. None of that could be established from the homepage text, and no sign-in was attempted. Any Superdesign use needs a live-browser evaluation by a later phase, and only for direction reference.

### 2.3 shadcn/ui (https://ui.shadcn.com/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (101 lines), plus a search for the component catalogue.

**What it is:** "The Foundation for your Design System." Composable, accessible components with thoughtful defaults. The model is copy-paste, not a package: components are installed as source into the project (`npx shadcn@latest add <name>`) and owned thereafter. Built on Radix UI primitives and Tailwind CSS. The homepage shows dashboard, form, chat, and analytics blocks as examples, and mentions "Trace, Code Block and AI Elements" as newer additions.

**Genuinely useful for this rebuild (concrete component names, all confirmed in the catalogue search):**

- **Accordion** (FAQ on Contact, replacing the native `<details>` FAQ in v2 with a properly animated, keyboard-correct disclosure; also usable for case study subsections).
- **Tabs** (the single biggest structural win: v2 implements near-identical tab browsers three times, PowerShell Academy stages, BugHunt payload categories, Ai-Terminal-X prompts, with incomplete ARIA. One shared Tabs component fixes all three and the audit finding in `docs/01-repo-audit.md` section 7, item 9).
- **Dialog** (replaces the hand-rolled Proof lightbox, and fixes the audit finding that focus is not returned to the thumbnail on close; Radix Dialog handles focus trap and return natively).
- **Command** (the search pattern: a searchable command palette built on `cmdk`, usable as the project search overlay, see section 3).
- **Dropdown Menu** (mobile menu actions and any overflow menus; supports sub-menus and keyboard navigation).
- **Table and Data Table** (certification lists, payload tables, and any tabular proof data; Data Table adds sorting, filtering, and pagination via TanStack Table, which is more than this site needs, so prefer the plain Table).
- **Progress** (completion indicators, for example a scroll progress bar or a reading progress indicator on long case studies; not skill percentages, which the v2 plan explicitly dropped).
- **Tooltip** (short labels for icon-only controls, for example the theme switch and copy buttons).
- **Navigation Menu** (accessible navigation with dropdowns, a candidate for the desktop nav if Phase 4 wants grouped links; the current 8-link nav may not need it).
- **Badge, Button, Card, Separator, Skeleton, Input, Select, Switch** (the everyday primitives that replace the hand-rolled v2 classes being removed).
- **Code Block / AI Elements:** the homepage mentions a Code Block element. This is a candidate for the CodeStrip replacement (syntax-highlighted code presentation), but it was not inspected in detail; verify its token colouring against the new design system before adopting, since the v2 CodeStrip already works and only needs its colours remapped.

**What to avoid:**

- Adopting the default shadcn look. The default theme is instantly recognisable (neutral zinc, specific radii, specific button treatment) and would make the portfolio look like a shadcn starter. shadcn is a foundation to restyle, not a finished look: every component must be re-tokenised in the new design system.
- Installing the full set. Add only the components actually used (Accordion, Tabs, Dialog, Command, Dropdown Menu, Table, Progress, Tooltip, plus base primitives). Each one is source in the repo, so unused ones cost nothing, but installing all of them invites drift.
- The shadcn CLI setup assumes a `components.json` and CSS-variable tokens. This project has neither (Tailwind v4 CSS-first config, `@theme inline`). The install flow must be adapted to the v4 setup, and the token mapping must be done by hand in `src/index.css`, not by accepting CLI defaults. Verify the Tailwind v4 install path at implementation time; it was not verified in this phase.

**Licence and weight:** licence was not stated on the homepage text read; confirm it in the repository at install time (the project is published as open source, and the components are MIT-licensed in the upstream repo, but that was not verified from the pages read here). Weight is per-component source plus its Radix dependency (one small scoped package per primitive, for example `@radix-ui/react-tabs`, `@radix-ui/react-dialog`) and `cmdk` for Command only. No single runtime bundle cost, since code ships only for components actually added.

### 2.4 Motion, formerly Framer Motion (https://motion.dev/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (198 lines).

**What it is:** "The animation library loved by humans and agents alike. Layout, scroll, gestures, 3D, and hardware acceleration for React, Vue and JavaScript. Free and open source. Previously Framer Motion." The recommended import is now `motion/react`.

**Genuinely useful for this rebuild (concrete capabilities, all stated on the homepage):**

- **Layout animations:** animate changes to size, position, and order that CSS cannot, including shared-element transitions with `layoutId` (the homepage example animates a thumbnail into a detail view with `<motion.img layoutId={id}>` inside `<AnimatePresence>`). Directly applicable to the Proof lightbox (thumbnail to full image) and to project card to case study transitions.
- **AnimatePresence exit animations:** keeps a component mounted until its exit animation finishes. This is the mechanism for page transitions with react-router and for the mobile menu and dialog exits.
- **Scroll animations:** `useScroll` links any value to scroll progress, using the browser `ScrollTimeline` where possible for hardware-accelerated scroll effects. Applicable to the scroll progress indicator and to section reveals.
- **Spring animations:** physics springs with stiffness, damping, and mass that carry velocity and stay fluid when the target moves mid-flight. Applicable to the magnetic cursor effect and to card hover physics.
- **Gesture animations:** drag with momentum, `whileHover`, `whileTap`, `whileDrag`, with keyboard-aware press handling and touch-aware hover. Applicable to the Proof gallery stepper and to draggable elements, if any.
- **Small by default:** "Start at 3.2kb with the mini `animate` function, or load features as you need them with LazyMotion." A third-party comparison (hontran.dev, 2026) reports the full `motion` package at about 34 KB gzip and the `LazyMotion` plus `m` pattern at about 4.6 KB initial. Those figures are attributed, not measured here.
- **Motion UI:** a newer premium component layer ("Accessible, beautiful components that adopt to your existing design with CSS, AI or shadcn"). Not evaluated; the free library is sufficient, and Motion UI would add a second design voice.

**What to avoid:** using Motion for everything, including trivial fades that CSS transitions handle in a few lines. Motion is the primary animation library (see section 4), not a replacement for CSS. Also avoid the paid Motion+ vault and examples as a dependency; the free library covers the need.

**Licence and weight:** free and open source (homepage). Weight: see the comparison in section 4. React 19 compatible in its current release (the `motion/react` package is the current import path; confirm the exact version at install time).

### 2.5 GSAP (https://gsap.com/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (52 lines), plus a search on pricing and bundle size.

**What it is:** "A wildly robust JavaScript animation library built for professionals." Core plus plugins for Scroll, SVG, Text, and UI interactions. The homepage lists ScrollTrigger ("Turn scrolling into silky-smooth storytelling"), SVG plugins (move and morph), Text plugins (text effects), and UI interactions.

**Licence correction, important:** several older articles still say GSAP requires a paid Club membership for SplitText, ScrollSmoother, MorphSVG, and similar plugins. That is stale. Multiple sources dated 2025 to 2026 confirm that Webflow acquired GreenSock and that on 30 April 2025 GSAP became 100% free, including every former Club plugin (SplitText, MorphSVG, ScrollSmoother, Draggable, Inertia, DrawSVG), under the GSAP Standard licence, with all plugins shipped in the public `gsap` npm package. GSAP 3.13 (April 2025) also shipped a rewritten SplitText at about half the old size. Do not create a `.npmrc` with GreenSock auth tokens and do not point at the old `npm.greensock.com` private registry; that path is obsolete.

**Genuinely useful, in principle:**

- **ScrollTrigger:** pinning sections, scrubbing a timeline to scroll progress, snapping, precise start and end triggers. The most capable scroll engine available, and the only library in this review that does pinned, scrubbed scroll storytelling properly.
- **SplitText:** splits text into characters, words, or lines for staggered typography animation, with accessibility support. Relevant only if Phase 4 chooses a split-text hero.
- **Timelines:** choreographing multi-step sequences (the ChallengePanel demo steps, or a case study walkthrough) is GSAP's native strength.

**What to avoid for this project:** adopting GSAP alongside Motion. The two overlap heavily, and running both would add two animation runtimes, two mental models, and two sets of reduced-motion handling for one portfolio. GSAP is also imperative (target selectors, build timelines in effects) while the codebase is declarative React; the `@gsap/react` package bridges this, but it is still a second paradigm. See the recommendation in section 4.

**Weight (attributed, not measured here):** a third-party comparison (hontran.dev, 2026) reports GSAP core at about 23 KB gzip, ScrollTrigger at about 10 KB extra, and about 33 KB or more once ScrollTrigger is included. An older source reports the minified core under 40 KB with zero dependencies. Verify against bundlephobia for the exact version at install time.

### 2.6 Three.js (https://threejs.org/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (112 lines). The page is a showcase gallery (280+ linked projects) with links to docs, examples, the TSL guide, devtools, and the editor. Current release shown: r187.

**What it is:** a JavaScript 3D library: renderer, scene graph, materials, and shaders, with a WebGPURenderer and WebGL2 fallback, plus an add-ons folder (`three/examples/jsm/*`) imported a la carte.

**Genuinely useful, narrowly:** one optional hero moment, and only one. A lightweight, abstract WebGL scene (for example a subtle particle or network field that reacts to the pointer on the home hero) is the only place 3D earns its weight on a portfolio whose job is to get a recruiter to the projects and the proof. It must be lazy-loaded on the home route only (React.lazy, so no other route pays for it), disabled under `prefers-reduced-motion`, paused when off-screen, and given a static fallback for no-WebGL environments.

**Where it would NOT be justified:** everywhere else. Not on the Projects index, not on case study pages, not on About, Experience, Skills, Certifications, Proof, or Contact. Not as a background on every page. Not for a 3D model viewer, a rotating logo, or a particle field behind text (the v2 plan explicitly dropped the three.js particle background; that decision stands unless Phase 4 makes a deliberate, evidenced case for one scene). Not via `@react-three/fiber` unless the scene actually needs a React scene graph; plain `three` with a small hand-written render loop is less weight and fewer abstractions for a single decorative scene, and Motion can already animate Three.js meshes if the two are ever combined (Motion homepage, 3D section).

**Weight (attributed, not measured here):** the three.js forum and Bundlephobia figures cited in search results put the `three` entry point at about 600 KB minified, about 147 to 150 KB gzip, with limited tree-shaking (the library historically imports largely in full). That is larger than the entire current JS bundle gzip (126.53 KB). This is the decisive number: Three.js more than doubles the shipped JavaScript if it is in the main bundle, so it must be code-split behind a dynamic import and treated as an optional enhancement, never a baseline requirement.

**Licence:** MIT (standard for the project; confirm at install time). No runtime dependency beyond `three` itself.

### 2.7 React Bits (https://reactbits.dev/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (22 lines), plus a search for the component catalogue. Note: the text-animations subpage (`https://reactbits.dev/text-animations`) returned 404 to the fetcher, so the catalogue below comes from the search results, not from a direct page read.

**What it is:** "Free Animated React Components. React components for creative developers. Animated components and backgrounds that install as source you own." Five categories on the homepage: Text Animations, Animations, Components, Backgrounds, Micro Interactions. Each component ships in four source variants (JS-CSS, JS-TW, TS-CSS, TS-TW) and can be copied or installed with the CLI, including via the shadcn registry (`npx shadcn@latest add @react-bits/<Name>-TS-TW`).

**Catalogue size, with an honest caveat:** sources disagree because the library keeps growing. A catalogue sync dated 2026-04-16 lists 130 components; newer sources list 217 to 218 components in version 2.0 (33 text animations, 38 animations, 48 components, 63 backgrounds, 35 micro interactions in one count). Use the site itself as the authority at selection time, not any single count here.

**Genuinely useful for this rebuild (concrete component names, from the catalogue search):**

- **Text animations:** `SplitText` (character-by-character headline stagger, the library signature), `BlurText` (blur-to-focus reveal), `DecryptedText` (decrypting text effect, thematically apt for a security portfolio and a strong candidate for one hero or section headline), `GlitchText` (use once, sparingly, or not at all), `ShinyText`, `RotatingText`, `TextType` (typewriter, but the v2 plan dropped the typewriter headline, so only if Phase 4 deliberately reinstates it), `CountUp` (animated numbers for the Proof stat cards), `ScrollReveal` (scroll-linked text reveal).
- **Animations:** `Magnet` (magnetic hover for the primary CTA), `ClickSpark`, `GlareHover`, `ElectricBorder`, `StarBorder`, `SpotlightCard`, `TargetCursor`, `BlobCursor`, `SplashCursor`, `ImageTrail`.
- **Components:** `SpotlightCard` (project cards with a cursor-following radial highlight), `TiltedCard`, `MagicBento` (bento grid, a candidate for the Projects index or the capability map), `ChromaGrid`, `Masonry`, `CircularGallery` (a candidate for the Proof gallery), `Stepper` (a candidate for the CSCB story stepper and the case study timeline), `Dock`, `PillNav`, `GooeyNav`, `StaggeredMenu`, `ScrollStack` (stacked cards on scroll, a candidate for the case study layout), `AnimatedList`, `Counter`.
- **Backgrounds:** `Aurora`, `Particles`, `Galaxy`, `LiquidChrome`, `Beams`, `Hyperspeed`, `Silk`, `Prism`. One at most, on the home hero only, and only if it beats a CSS or canvas 2D alternative. Most of these are WebGL shader backgrounds and carry the same weight caution as Three.js.

**What to avoid:**

- Stacking several React Bits pieces on one page. The library's own coverage warns that animation is seasoning, not the meal, and that six animated backgrounds plus a custom cursor hurts performance and annoys visitors. Pick at most two or three pieces across the whole site, and give each one a reason.
- The WebGL backgrounds as a default. They are the heaviest pieces in the catalogue and the easiest way to make the site feel like a demo reel instead of a portfolio.
- The glitch, scramble, and decrypt effects everywhere. One decrypt or glitch moment is a signature; five is a theme park.
- Repackaging. The licence is MIT plus Commons Clause (per the catalogue sources). The Commons Clause restricts commercial redistribution of the library itself, so treat these as source to copy and adapt for this one site, not as code to republish or resell. Verify the licence text in the repo at install time.

**Dependencies:** most pieces depend on `motion` (formerly Framer Motion) or `gsap` plus `@gsap/react` for scroll-based text effects, and some backgrounds depend on `three`. This is a real constraint: whichever animation library is chosen as primary (section 4) determines which React Bits pieces are cheap to adopt and which would drag in a second runtime. Prefer pieces built on the primary library only.

### 2.8 Radix UI (https://www.radix-ui.com/)

**What I read:** the homepage, fetched 2026-11-08 23:43 UTC (28 lines). The homepage is thin; the substance is in the Primitives documentation, which was not fetched in full.

**What it is:** "An open source component library optimized for fast development, easy maintenance, and accessibility. Just import and go, no configuration required." Two products share the name: **Radix Primitives** (unstyled, accessible primitives such as Dialog, Tabs, Accordion, Dropdown Menu, Tooltip, Progress) and **Radix Themes** (a styled component system with its own look, imported with `@radix-ui/themes/styles.css` and a `<Theme>` wrapper).

**Genuinely useful:** Primitives only, and only as the layer underneath shadcn/ui. The portfolio should not import Radix Primitives directly except where shadcn does not wrap the primitive needed; shadcn already wraps the ones this site uses (Tabs, Dialog, Accordion, Dropdown Menu, Tooltip, Progress), so direct Radix imports should be rare.

**What to avoid:** Radix Themes. It ships a complete styled system with its own tokens, radii, and colours, which would fight the original design system and duplicate what shadcn plus the new tokens already provide. Do not wrap the app in `<Theme>` and do not import `@radix-ui/themes/styles.css`.

**Licence and weight:** open source (MIT in the upstream repo; confirm at install time). Weight is per primitive, one small scoped package each, and only for primitives actually used.

## 3. Recommended shortlist

Each recommendation names the source, the concrete component or pattern, and the portfolio surface it serves. Nothing here is installed; this is a selection list for Phase 4 and Phase 7.

| Surface | Recommended component or pattern | Source | Notes |
|---|---|---|---|
| Hero | One signature text moment: `DecryptedText` or `BlurText` for the headline, plus a `CountUp` for the availability line if numbers are shown | React Bits (`DecryptedText`, `BlurText`, `CountUp`) | Pick one text effect, not two. Decrypt fits the security subject; Blur is quieter. The v2 typewriter headline stays dropped unless Phase 4 deliberately reinstates it. |
| Hero, optional | One lazy-loaded abstract WebGL scene (particle or network field) behind the hero, pointer-reactive, disabled on reduced motion | Three.js (plain `three`, hand-written loop) or a React Bits background such as `Aurora` | Only if Phase 4 approves it as the single 3D moment. Must be code-split, never in the main bundle. A CSS or canvas 2D gradient field is the default if 3D is not approved. |
| Navigation | Keep the existing fixed header structure (mark, 8 links, theme switch, CTA, full-screen mobile menu). Restyle fully. Add `Navigation Menu` only if Phase 4 groups links; add `Dropdown Menu` for overflow actions | shadcn/ui (`Navigation Menu`, `Dropdown Menu`) | The current nav works; do not replace it with a 21st.dev navbar wholesale. Fix the audit gaps instead: focus management in the mobile menu (focus in on open, return on close). |
| Project cards | `SpotlightCard` pattern (cursor-following radial highlight) applied to the existing `ProjectCard`, with `TiltedCard` rejected as too playful for a hiring surface | React Bits (`SpotlightCard`); shadcn/ui `Card` as the base | Keep the existing card content model (icon, name, outcome line, tags, link). The highlight is the only new behaviour. One hover effect, consistent across all cards. |
| Project case study layout | `ScrollStack` for stacked sections on scroll, or a plain sticky side rail with scroll progress; `Tabs` for the existing three tab browsers | React Bits (`ScrollStack`); shadcn/ui (`Tabs`) | `ScrollStack` is optional and must be tested for readability on long text. Tabs is mandatory: it unifies the PowerShell stages, BugHunt payloads, and Ai-Terminal-X prompts into one accessible component. |
| Timeline | `Stepper` pattern for the CSCB story and the Experience roles; a vertical rule with dated nodes for the education and career timeline | React Bits (`Stepper`); shadcn/ui `Separator` for the rule | The Proof stepper already exists locally; adopt the accessible stepper pattern rather than copying the component verbatim. |
| Capability map | `MagicBento` grid for the Skills page (skill groups as bento cells with evidence notes), with SVGL brand logos for genuine technology identification | React Bits (`MagicBento`); SVGL skill (already audited, `docs/01-skills-integrations.md`) | Keep the no-percentages rule: each skill shows a one-line evidence note, never a bar. Brand logos only for genuine identification, never recoloured, saved locally. |
| Command-line demonstration | Keep and extend the existing `ChallengePanel` and `CodeStrip` (both work, both are original). Restyle code colours in the new tokens. Add a `Command` palette only for site search, not for the demo itself | Existing code; shadcn/ui (`Command`, built on `cmdk`) for search | The ChallengePanel is the portfolio signature moment. Do not replace it with a generic terminal component from a registry. |
| Search | `Command` palette (Ctrl+K or Cmd+K), searching projects, pages, skills, and certifications from `src/data.ts`, with keyboard navigation | shadcn/ui (`Command`) | New capability, not a v2 feature. Keep it local and static: no backend, no index build step, filter the typed data file directly. |
| Theme switching | Keep the existing mechanism exactly: pre-paint script in `index.html`, `data-theme` attribute, one localStorage key (`portfolio-v2-theme`), `meta theme-color` sync, `useTheme` hook. Only the token values change | Existing code (`src/hooks.tsx`, `index.html`) | No library needed. The audit (section 6.1) says keep the mechanism and the key name. A theme switch component from any registry would add nothing. |
| Page transitions | `AnimatePresence` with a short fade and rise on route change, plus `ScrollToTop` (already exists) | Motion (`AnimatePresence`, `motion`) | Keep transitions fast (under 300 ms) and disable them under `prefers-reduced-motion`. Route-level code splitting (react-router `lazy`) pairs with this; the transition must not delay content. |
| Cursor interactions | One cursor effect only: `Magnet` on the primary CTA, or a `SpotlightCard` highlight on cards. Not both everywhere, and never a custom cursor that replaces the system pointer | React Bits (`Magnet`, `SpotlightCard`) | Custom cursors (`BlobCursor`, `SplashCursor`, `TargetCursor`) are the easiest way to annoy a recruiter and break touch devices. Desktop-only, pointer-fine only, disabled on touch and reduced motion. |

### Patterns to borrow as ideas, not as components

- **21st.dev Dashboard Shell:** the sidebar plus breadcrumbs plus metrics plus panels structure, adapted to the Projects index as a filter sidebar with a results region. Borrow the layout idea; build it in the new tokens.
- **21st.dev Number Ticker:** the count-up stat pattern for the three Proof stat cards.
- **Superdesign High Contrast and Red Noir:** whole-page moods for the Phase 4 direction shortlist, not components.
- **Superdesign Mosaic Grid:** a grid layout idea for the Projects index.

## 4. Animation: GSAP vs Motion vs plain CSS

### Comparison

| Criterion | Motion (`motion/react`) | GSAP (`gsap` plus `@gsap/react`) | Plain CSS (transitions, keyframes, `IntersectionObserver`) |
|---|---|---|---|
| React fit | Native. Declarative components (`motion.div`, `AnimatePresence`, `layoutId`), hooks (`useScroll`, `useSpring`), works with React 19 and StrictMode | Imperative. Timelines and selectors built in effects, bridged by `@gsap/react` (`useGSAP`). Works, but it is a second paradigm inside a declarative codebase | Native. No library, no paradigm, just classes and observers. The v2 site already does this safely (`Tagline` reveal with a 2-second safety net, `.enter` hero animation) |
| Page transitions and exit animations | Best in class. `AnimatePresence` is built for this | Possible with timelines, but manual and fiddly for route exits | Not possible for exit animations; an unmounting element cannot transition out with CSS alone |
| Layout and shared-element transitions | Built in (`layout`, `layoutId`). No other option in this review does this declaratively | `Flip` plugin does this, but imperatively and with more setup | Not possible |
| Scroll-linked animation | `useScroll` plus `ScrollTimeline` where available, hardware-accelerated | ScrollTrigger is the most capable scroll engine here: pinning, scrubbing, snapping, precise start and end | `IntersectionObserver` plus CSS handles enter-on-scroll; it cannot scrub an animation to scroll progress |
| Springs and gestures | Built in: springs with stiffness, damping, mass; drag with momentum; `whileHover`, `whileTap`, `whileDrag` | Springs via physics plugins; drag via Draggable (now free). Capable, but more wiring | No springs, no drag, no momentum |
| Text splitting | Not built in; needs a small hand-rolled splitter or a React Bits piece | SplitText is built in, rewritten in 3.13 at about half the old size, now free | Hand-rolled splitter plus CSS stagger is a few lines and is enough for one headline |
| Bundle cost (attributed, verify at install) | Full `motion` about 34 KB gzip; `LazyMotion` plus `m` about 4.6 KB initial (hontran.dev, 2026). Homepage states 3.2 KB for the mini `animate` function | Core about 23 KB gzip, ScrollTrigger about 10 KB extra, about 33 KB or more with ScrollTrigger (hontran.dev, 2026) | Zero |
| Reduced-motion handling | Respects it through `useReducedMotion` and `MotionConfig reducedMotion="user"` | Manual: every timeline needs a reduced-motion guard | Manual but trivial: a media query that rests everything, which v2 already has |
| Learning and maintenance | One API, React-shaped, easy for a solo maintainer to hold | Powerful, but a large API surface and a timeline mental model that is easy to overuse | Zero new knowledge, but limited to what CSS can express |
| Licence | Free and open source | 100% free since 30 April 2025, including all former Club plugins, Standard licence | None |

### Recommendation: ONE primary approach, Motion

**Adopt Motion (`motion/react`) as the single animation library for the rebuild.**

Reasons, in order:

1. **It covers the transitions this site actually needs.** Page transitions with `AnimatePresence`, the Proof lightbox shared-element transition with `layoutId`, and section reveals with `useScroll` are the three animated moments the portfolio needs. CSS cannot do the first two, and GSAP does them with more code.
2. **It is React-shaped.** The codebase is declarative React 19. Motion components read like the rest of the code; GSAP timelines do not, and would be the only imperative island in the project.
3. **It is the smallest honest cost for the features used.** With `LazyMotion` and the `m` component, the initial cost is about 4.6 KB (attributed figure), and features load on demand. That beats shipping GSAP core plus ScrollTrigger for work that is mostly fades, rises, and one shared-element transition.
4. **It keeps React Bits cheap.** Most React Bits pieces are built on Motion, so the shortlist in section 3 (SpotlightCard, DecryptedText, Magnet, Stepper, MagicBento, CountUp) shares the one Motion dependency instead of dragging GSAP in as well.
5. **Reduced motion is handled in one place.** `MotionConfig reducedMotion="user"` plus the existing CSS reduced-motion block gives a single, testable behaviour instead of guards scattered across timelines.

**What Motion does not do, and the rule for those cases:**

- **Plain CSS stays for micro-interactions.** Button hovers, link underlines, focus rings, card lifts, and the tagline word reveal stay as CSS transitions plus `IntersectionObserver`, exactly as v2 already does. No library call is worth it for a 150 ms fade.
- **GSAP is not adopted.** If Phase 4 chooses a direction that genuinely needs pinned, scrubbed scroll storytelling (a full scroll-driven case study, not just reveals), that is a decision to revisit: GSAP plus ScrollTrigger would then be adopted for that sequence, and Motion would be dropped for scroll work in the same place, not run alongside it. No page ships both libraries. As the brief stands, no screen needs ScrollTrigger, so GSAP stays out.
- **Three.js is not an animation library.** It is a 3D renderer, and its use is governed by section 2.6, not by this choice. If the single approved 3D hero scene happens, Motion can animate its meshes (per the Motion homepage, 3D section) without adding GSAP.

## 5. Integration notes

| Recommendation | Dependency to add | Weight (attributed, verify at install) | Licence (confirm at install) | Conflicts with the existing stack |
|---|---|---|---|---|
| shadcn/ui Accordion, Tabs, Dialog, Command, Dropdown Menu, Table, Progress, Tooltip | Source files in `src/components/ui/`, plus `@radix-ui/react-accordion`, `@radix-ui/react-tabs`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-tooltip`, `@radix-ui/react-progress`, and `cmdk` (Command only) | Per primitive, small; no single bundle figure applies | Confirm per package at install; not stated on the homepage text read | No `components.json` in the project; Tailwind v4 CSS-first config means tokens must be mapped by hand in `src/index.css` via `@theme inline`, not via CLI defaults. Verify the v4 install path before running the CLI. |
| Motion | `motion` (import as `motion/react`) | Full about 34 KB gzip; `LazyMotion` plus `m` about 4.6 KB initial (attributed) | Free and open source | None known. React 19 compatible in its current release. Do not also install `framer-motion`; the old package name still works but `motion` is the current one. |
| React Bits pieces (SpotlightCard, DecryptedText or BlurText, Magnet, Stepper, MagicBento, CountUp) | Copied source files, no package install for the pieces themselves; they depend on `motion` (already the primary) | No additional runtime cost beyond Motion, except any WebGL background piece, which is excluded by the shortlist | MIT plus Commons Clause (per catalogue sources); verify in the repo at install, and do not republish the pieces | Pieces built on GSAP must be excluded or rewritten on Motion; do not install GSAP to support one piece. Pieces that need `three` are excluded unless the single 3D scene is approved. |
| Three.js, single hero scene only, if approved | `three` (plain, no `@react-three/fiber` unless the scene needs a React scene graph) | About 147 to 150 KB gzip (attributed forum and Bundlephobia figures), code-split behind a dynamic import | MIT (confirm at install) | Must not enter the main bundle: use `React.lazy` on the home route only, with a static fallback. Reverses the v2 decision to drop the particle background, so it needs an explicit Phase 4 approval, not a quiet adoption. |
| 21st.dev components (at most one or two patterns) | None if copied as source; whatever the copied code itself imports (usually Motion or Radix) | No runtime cost beyond the copied code's own imports | Varies by author; check the licence on each component before copying | Copying a component that assumes a `components.json` or a shadcn theme will need hand adaptation to the Tailwind v4 setup. No MCP integration exists here (section 1). |
| Superdesign | None; direction reference only | None | Not applicable | No integration exists here. Export format and pricing were not verified; a live-browser evaluation is needed before any use beyond direction reference. |
| Radix Primitives direct use | Only where shadcn does not wrap the primitive needed | Per primitive, small | MIT (confirm at install) | Do not use Radix Themes; it would impose a second styled system. |
| GSAP | Not adopted (see section 4) | About 23 KB core plus about 10 KB ScrollTrigger (attributed) | 100% free since 30 April 2025, Standard licence | Would duplicate Motion. Adopt only if Phase 4 requires pinned scroll storytelling, and then only for that sequence. |
| Icons and logos | No change: keep `@phosphor-icons/react` 2.1.10 (already installed) for UI icons; SVGL (free public API, no key, already audited) for brand logos | No new weight | Phosphor: MIT; SVGL SVGs: MIT, marks remain trademarks, genuine identification only, never recolour | 21st.dev icon search (29,000 icons) is not needed. Do not add lucide or react-icons alongside Phosphor; one icon set only. |

### Stack conflicts, stated plainly

- **Tailwind v4 vs shadcn defaults:** the shadcn install flow was designed around CSS variables and a `components.json`. This project uses Tailwind v4 CSS-first config with `@theme inline` and has no `components.json`. Every shadcn component must be re-tokenised by hand. Budget time for this; do not assume the CLI output works unmodified.
- **No code splitting yet:** the v2 bundle is one 440.88 KB JS file with no route-level lazy loading (audit section 7, item 14). Any heavy addition (Motion is small, Three.js is not) must be paired with react-router `lazy` routes, or the new weight lands on every page.
- **No test runner:** there is no test setup in the repo. Motion and shadcn components are well tested upstream, but the integration (theme tokens, reduced motion, focus return in the lightbox, tab keyboard navigation) needs the Playwright sweep in `.verify/` re-run after the first rebuild build, as the audit handover already requires.
- **Fonts:** the self-hosted Sora and Inter WOFF2 files stay unless Phase 4 chooses different typefaces. Note the Phase 1 audit records a skill conflict here: `landing-page-design` bans Inter, while the v2 site uses it. That conflict is a Phase 4 decision, not a component question, and no component in this report depends on the font choice.

## 6. What to avoid, consolidated

1. **A second animation library.** Motion only. No GSAP alongside it, no Anime.js, no React Spring, no Motion One as a parallel system.
2. **Three.js on more than one screen, or in the main bundle.** One optional hero scene, code-split, or nothing at all. The v2 plan dropped the particle background for a reason.
3. **A recognisable kit look.** No default shadcn theme, no 21st.dev template, no Radix Themes wrapper, no wholesale React Bits page. Every borrowed piece gets restyled in the new tokens until it is unrecognisable as its source.
4. **Stacking animated pieces.** At most two or three React Bits pieces across the whole site, one text effect, one cursor effect, one card effect. More than that is a demo reel, not a portfolio.
5. **Glitch and decrypt effects on every headline.** One signature moment at most.
6. **Dashboard and SaaS patterns copied literally.** Dashboard Shell, Data Table with pagination, and analytics blocks belong to apps, not to a portfolio. Borrow their layout ideas (sidebar plus results, metric cards, breadcrumb trails) and leave their content behind.
7. **A command palette that searches nothing real.** If `Command` is added, it must search the real typed content in `src/data.ts` (projects, pages, skills, certifications). A search box with hardcoded suggestions is worse than no search.
8. **Skill percentage bars, typewriter headlines, and particle backgrounds** unless Phase 4 deliberately reinstates one with a stated reason. All three were dropped in v2 for good cause.
9. **New icon sets.** Phosphor Icons stays the single UI icon set; SVGL stays the brand logo source. No lucide, no react-icons, no 21st.dev icon set alongside them.
10. **Anything that needs a login, a paid plan, or an unverified integration to evaluate.** 21st.dev MCP, Superdesign export, and Motion+ are all unevaluated beyond public page text in this phase. Nothing in the shortlist depends on them.

## 7. What was read, and what was not verified

**Pages fetched as text (all 2026-11-08, times UTC):**

- https://21st.dev/ (homepage, 23:42)
- https://superdesign.dev/ (homepage, 23:43)
- https://ui.shadcn.com/ (homepage, 23:43)
- https://motion.dev/ (homepage, 23:43)
- https://gsap.com/ (homepage, 23:43)
- https://threejs.org/ (homepage, 23:43)
- https://reactbits.dev/ (homepage, 23:43)
- https://www.radix-ui.com/ (homepage, 23:43)

**Searches run:**

- 21st.dev component categories, pricing, and MCP tools (Design Atlas review 2026-09-25, TechPilot pricing review October 2026, Lovable docs, mcp.21st.dev Dashboard Shell page)
- React Bits component catalogue (skillsdirectory catalogue sync 2026-04-16, Reflex PyPI listing for version 2.0 counts, Design Atlas review 2026-09-25)
- shadcn/ui component catalogue (multiple catalogue mirrors, all agreeing on Accordion, Tabs, Dialog, Command, Dropdown Menu, Table, Progress, Tooltip)
- GSAP vs Motion bundle sizes and GSAP free licence (hontran.dev comparison 2026, irurueta.com licence history checked 2026-10-28, GSAP skills field manual)
- Three.js bundle size (three.js forum threads, Bundlephobia figures via forum citations)

**Not verified in this phase, stated plainly:**

- The 21st.dev MCP endpoint (`https://21st.dev/api/mcp`) was not called and no MCP client here is configured for it. The tool list comes from a third-party review, not from a live call.
- No 21st.dev component was installed, and no individual component licence was checked.
- Superdesign pricing, account requirements, and export format were not established; the homepage text does not state them and no sign-in was attempted.
- No bundle size figure in this report was measured in this project. All size figures are attributed to the sources named beside them and must be re-checked with bundlephobia or a real build at install time.
- The shadcn Tailwind v4 install path was not exercised; the `components.json` and CSS-variable assumptions are inferred from the CLI model, not from a run.
- The React Bits text-animations subpage returned 404 to the fetcher; its catalogue entries come from search results instead.
- No licence was verified from a primary source in this phase except where the homepage itself states it (Motion: free and open source; GSAP: free since April 2025 per multiple dated sources). Every other licence in section 5 is marked to confirm at install time.

## 8. Handover for Phase 4 and Phase 7

1. Phase 4 picks the creative direction first. The shortlist in section 3 is direction-agnostic on purpose; the direction decides which of the optional items (the 3D hero scene, DecryptedText vs BlurText, MagicBento vs a plain grid, ScrollStack vs a sticky rail) actually get built.
2. Phase 7 installs in this order: Motion first, then the shadcn primitives actually used (Tabs, Dialog, Accordion, Command, Dropdown Menu, Table, Progress, Tooltip), then the chosen React Bits pieces as copied source on Motion only. Nothing else from this report gets installed without a stated reason.
3. Before any install, re-check the exact version, licence, and bundle size of each package, and confirm the shadcn Tailwind v4 install path against the current shadcn docs.
4. After the first rebuild build, re-run the Playwright sweep (`.verify/check.py`) including the lightbox focus return, the tab keyboard navigation, the mobile menu focus management, and the reduced-motion behaviour, as the audit handover already requires.
5. If izaz wants the 21st.dev MCP or a Superdesign evaluation, that is a separate decision needing his approval and the custom connector flow; it is not assumed by this report.
