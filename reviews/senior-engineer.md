# Senior Engineer Review — Portfolio v2 (Muhammad Izaz Haider)

**Reviewer:** independent senior engineer (frontend + full-stack lens)
**Date:** 2026-11-08
**Build reviewed:** `~/workspace/portfolio-v2/`, React 19 + TypeScript + Vite 6 + Tailwind v4 + react-router 7
**Verdict: FIX FIRST** — the site is fundamentally sound and close to shippable, but it has one deployment-blocking gap (no SPA fallback config for the stated Vercel target) and three small user-facing defects. All fixes are small; this is not a rework.

## 0. How this review was done, and its one honest limitation

I read the grounding docs (`plan/DESIGN-PLAN.md`, `research/CONTENT-MODEL.md`, `portfolio-v2-brief.md`, `VERIFICATION.md`), read all of `src/` (routes, components, `data.ts`, `hooks.tsx`, `index.css`, `App.tsx`, `main.tsx`, `index.html`, `vite.config.ts`, `tsconfig.app.json`), rebuilt from clean (`npm run build` — passes, see §2), ran forbidden-content greps over `src/`, `index.html` and `dist/`, curl-checked every local asset and every external link, and viewed real browser renders of the site.

**Limitation I will not hide:** I could not run my own live Playwright sweep. Chromium 1248 in this sandbox now dies with SIGTRAP (signal 5, CFI trap) on every launch — 12/12 retries, headless shell and full binary, headless and headed under Xvfb, with `--no-sandbox`, `--disable-seccomp-filter-sandbox`, `--no-zygote`, and a fresh `TMPDIR`. Installing Firefox as a substitute is blocked too (`playwright install firefox` fails with EPERM). This is an environment failure, not a site failure: the build agent's own sweep ran in real Chromium on this same machine at 07:52–07:59 today and produced 71 screenshots in `.verify/`.

What I did instead, and why it is still evidence:

- I **viewed 11 of those screenshots myself** (home, projects, proof, pentrix, bughunt, skills, about, contact, 404 at 1440 light; home dark 1440; home and proof at 390 light; plus the post-fix nav screenshots). They are real Chromium renders of this exact build: my rebuild at 08:01 produced byte-identical hashed assets (`index-CDLEKYwx.js`, `index-DE7TaKnM.css` — same names before and after), and the source has not changed since.
- I **cross-checked the agent's `results.txt` claims against source and curl** rather than trusting them. Where the log and the evidence disagree, I say so below (notably: the nav-fix screenshots are post-fix and correct; the main sweep screenshots are pre-fix and stale — see §6).
- Items I could **not** independently verify live, and therefore do **not** vouch for: console-error counts, overflow measurements, theme persistence across navigation, form submission behaviour, lightbox keyboard handling, filter interaction, and mobile-menu behaviour. For each of those I reviewed the code and the agent's log, and I label the result "code-reviewed, not live-verified".

## 1. Verdict rationale

Ship-blockers (all small, all fixable in under an hour):

1. No SPA fallback for deployment — no `vercel.json` rewrites anywhere in the folder, so deep links and refreshes on any of the 15 routes will 404 on Vercel, the stated deploy target (§5).
2. Every interior page wastes ~20–25% of the first viewport on empty space (§6).
3. The active project-filter pill has no visible active state (§6).
4. Footer "Back to top" navigates to home instead of scrolling up (§6).

Everything else I checked is good or only a nit. No hard-rule violations. No invented content found. No console errors or overflow in the agent's sweep (see limitation above).

## 2. Build and code quality — PASS, with small notes

**Build:** `npm run build` (`tsc -b && vite build`, plus postbuild CSS stamp) passes cleanly from my run. Output: `dist/index.html` 4.94 kB, one JS bundle `index-CDLEKYwx.js` 438.70 kB (125.79 kB gzip), one CSS bundle 33.06 kB (7.81 kB gzip). `tsconfig.app.json` is genuinely strict (`"strict": true`, `noUnusedLocals`, `noUnusedParameters`), and the build passing under those flags is meaningful. No `three.js` in the bundle — the two `three` matches in the JS are the English word "three" in copy strings. No `console.log`/`TODO`/`FIXME`/`debugger` anywhere in `src/`. No `dangerouslySetInnerHTML` anywhere, so the BugHunt payload strings (`<script>alert(1)</script>`, `' OR '1'='1`, SSRF to `169.254.169.254`) render as inert text through React, which is the safe way to show them.

**Router — correct.** `src/App.tsx:25–41` declares all 15 required routes plus `/privacy`, `/terms`, and a catch-all `*` → `NotFound`. All six project detail routes exist and match the links in `data.ts` (`DETAIL_ROUTES`). `ScrollToTop` resets scroll on route change. `main.tsx` is minimal and correct (`BrowserRouter`, `StrictMode`). SPA fallback works on the preview server (curl: `/about` 200, `/does-not-exist` 200 serving the app shell).

**Structure — clean.** One typed content source (`src/data.ts`, 510 lines, `Project`/`Role`/`SkillGroup` types), shared `PageHero` (renders the single `h1` per page), `ProjectCard`, `ChallengePanel`, `CodeStrip` (a real tokenizer with keyword/string/number/comment colour classes, not a single-colour block), `ContactForm`, `DiagramFigure`, `Nav`, `Footer`, `Tagline`. `usePageMeta` is called by all 17 route components, so every page gets its own title and description. No duplication of content across pages that I found; the one intentional duplication (skills-tree diagram embedded on both `/skills` and `/projects/agentarsenal`) reuses the same file, which is correct.

**Dead code (small):**

- `src/hooks.tsx:7` — `Reveal` is exported but used nowhere. It is a pass-through that renders children unchanged, which means the plan's scroll-reveal system (IntersectionObserver, §3.6 of the design plan) was dropped entirely. Sections render at rest, which is safe and arguably better than a broken reveal, but the export is dead and the plan deviation is undocumented.
- `src/hooks.tsx:21,39` — `useTheme()` returns a `toggle` that nothing calls (the nav uses `setTheme` directly). Dead export.
- `src/components/Nav.tsx:61` — `aria-current={undefined}` on `NavLink` is noise; React omits `undefined` props, so `NavLink`'s own `aria-current="page"` still applies, but the line should just be deleted.

**Inconsistency nit:** `src/index.css` contains 88 `px` values (gutters, paddings, radii) despite the plan's "no px where rem is possible" rule. Cosmetic only; the values are consistent.

## 3. Correctness — mostly verified, two claims downgraded to "code-reviewed"

**Verified by me:**

- All 17 local asset URLs return HTTP 200 from the preview server: all 9 images, both fonts, the CV PDF (335,544 bytes), the favicon, and all 3 Archify diagram HTML files.
- All 22 external links I checked return 200: 20 GitHub repos/profile (including `my-powershell-academy`, `PenTrix-VulnLab`, `AgentArsenal`, `Ai-Terminal-X`, `apk-security-pipeline`), `bughunt-arsenal.vercel.app`, `powershell-academy-seven.vercel.app`, `mizazhaider-ceh.dev`. LinkedIn returns 999 (LinkedIn's bot block on direct fetch, not a broken link). Formspree GET returns 405, which is expected for a POST-only endpoint.
- The agent's `results.txt` reports 0 console errors and 0px overflow on every route at 1440/1024/768/390, light and dark, and iframe `loaded: True` for all 3 diagrams. I could not re-run this (see §0), but the claims are internally consistent, and the screenshots I viewed show the iframes rendering (skills-tree diagram visible with nodes on `/skills`; architecture diagram present in results).
- The agent's image FAILs (`/`, `/proof`, `/projects/apk-security-pipeline`) are credible false positives: every flagged image is `loading="lazy"` and below the fold (`Proof.tsx:103`, `ApkPipeline.tsx:77`, `Home.tsx:63`), the checker read `img.complete` without scrolling, and all the files exist and return 200. Not a site bug, but the verification log should have re-run the check with scrolling rather than asserting it in prose.
- Form logic (code-reviewed, not live-verified): `ContactForm.tsx` validates name/email/message client-side, shows inline per-field errors with `role="alert"` and `aria-describedby`, disables the button while sending, and shows distinct sent/error states. No `window.alert()`. The email regex is a reasonable `^[^\s@]+@[^\s@]+\.[^\s@]+$`. One gap vs the plan: the plan asked for a skeleton loading state shaped like the form; the build shows a "Sending" button label instead. Acceptable, but a deviation. I did not submit the real Formspree form (that would send a live message); a live submit test is still open.
- Theme switch (code-reviewed + agent log): pre-paint script in `index.html` validates `localStorage` against exactly `light`/`dark`, falls back to the OS hint on first visit, sets `data-theme` before first render, and syncs `theme-color`. `useTheme` in `hooks.tsx:21` persists on change. The agent's log records `THEME-SWITCH: after click=dark, after nav to /projects=dark, stored=dark`. Dark-theme screenshots I viewed are clean and legible.

**Not verified live (stated plainly):** console errors, overflow, theme persistence, form submit, lightbox Escape/focus-return (the Escape handler exists in `Proof.tsx:20–28`, but focus is not returned to the thumbnail on close — a small a11y gap), filter clicks, challenge-panel tab clicks, mobile-menu open/close. A re-run of the sweep on a machine where Chromium launches is still needed before deploy.

## 4. Performance — GOOD, with three nits

- Single JS bundle 439 kB / 126 kB gzip for the whole 17-route app is reasonable, and there is no three.js, no chart library, no animation library. Fonts are self-hosted woff2 (Sora 25 kB, Inter 48 kB), no Google Fonts request.
- **No route-level code splitting.** `App.tsx` statically imports all 17 route components, so the home page downloads the code for every page (including the payload browser, the stage stepper, and the lightbox). `React.lazy` + `Suspense` per route would cut the first-load bundle noticeably for a site whose whole point is the first impression. Small, worth doing.
- **Images are PNG/JPG only, no WebP/AVIF.** `public/images/yeswehack-swag.png` is 1,527,571 bytes unoptimized. The CSCB screenshots are 144–468 kB each. All are `loading="lazy"` below the fold except the CSCB story images, and all carry explicit `width`/`height`, so CLS is controlled — but a 1.5 MB PNG on the proof page is the single largest avoidable payload.
- The 3 Archify diagram files are ~840 kB each (2.5 MB total in `dist/diagrams/`), plus their `.finalize.json`/`.browser-check.json` receipts are shipped in `dist/` too. The iframes are `loading="lazy"`, so they do not block first paint, but the receipts are build artefacts that should not deploy. `dist/` is 7.7 MB total, mostly diagrams + images.

## 5. Deployment correctness — ONE REAL GAP (top finding)

**No SPA fallback config.** There is no `vercel.json` (and no `public/_redirects`) in `~/workspace/portfolio-v2/`. The deploy target per the plan is Vercel, repo `mizazhaider-ceh/Prime-PortFolio`. Without a rewrite rule (`{ "source": "/(.*)", "destination": "/index.html" }`), a direct visit or refresh on any route other than `/` (e.g. `/projects`, `/proof`, `/contact`) returns Vercel's 404, and the app's own branded 404 route never loads. The `public/404.html` static fallback covers some hosts, not Vercel's routing. **Fix before deploy:** add `vercel.json` with the rewrite, or confirm the deploy repo already carries one and record that fact. This is the single most important fix in this review because it is invisible in local preview (vite preview serves the SPA fallback) and only breaks in production.

## 6. Responsive and visual — GOOD, with three defects

**What renders well (viewed by me):** Home hero at 1440 light and dark is clean and on-brief: lime rule, kicker, marker h1, sentence, CSCB fact pill, two CTAs, availability + status lines, challenge panel with syntax-highlighted code. Mobile 390 home and proof stack cleanly with no visible overflow or truncation. The 404 page is branded with two working actions. The Skills page Archify iframe renders its tree. The Contact form renders with labels, placeholders, and the CV download showing "(Europass PDF, 328 KB)". Dark theme is a genuine token-mapped theme, not an inversion: code strips stay dark-on-dark, markers stay readable, the theme switch shows the active side (lime in light, periwinkle in dark).

**About the nav screenshots — read this before acting on them:** the main sweep screenshots (`home-light-1440.png` 07:52, `projects-light-1440.png` 07:52, `proof-light-1440.png` 07:53) show the nav "Get in touch" button wrapping to two lines and the subtitle truncating to "Penetration Tester, AI x Offensive Sec…". Those screenshots are **stale**: `Nav.tsx` was modified 07:59:23 with the fix (`whitespace-nowrap` + `shrink-0` on the CTA, subtitle hidden below 1500px), and the post-fix screenshots `navfix2-home-1440.png` (07:59:41) show the button on one line and the subtitle hidden. The fix is real in the current source. Do not re-open that issue.

**Defect 1 — dead band on every interior page (medium).** `src/index.css:187` forces every `main > section` to `min-height: calc(var(--h, 1) * 100svh)` with 120px top padding, and `.page-hero` adds its own 120px top padding. The hero is not a section, so the two paddings stack: on Projects, Proof, Skills, About, BugHunt, Pentrix and Contact the first content starts 170–220px below the hero sentence, leaving a conspicuous empty band across the full first viewport. Visible in every interior screenshot I viewed (e.g. `proof-light-1440.png`: sentence ends ~290px, stat cards start ~470px; `pentrix-light-1440.png`: "Back to projects" ~380px, meta grid ~600px). The plan's "one section per screen" rule is being applied literally where it hurts: the hero already occupies the first screen, so the following section should not also demand a full viewport. Fix: drop the `min-height` on the first section after a page hero, or reduce the section top padding when it directly follows `.page-hero`.

**Defect 2 — active filter pill has no visible state (small-medium).** `src/index.css:513–514` defines `.filter-pill[aria-pressed="true"]` inside `@layer components` (opened at line 233). The filter buttons in `src/routes/Projects.tsx` also carry the Tailwind utility `bg-[var(--surface)]`, and Tailwind v4's `utilities` layer comes after `components` in the cascade, so the utility wins over the component-layer rule regardless of specificity. Result, visible in `projects-light-1440.png`: the "All" pill looks identical to the other five. `aria-pressed` is set correctly, so assistive tech gets the state, but sighted users get no feedback. Fix: apply the active state with conditional Tailwind classes (the pattern `ChallengePanel.tsx` already uses for its tabs) or move the rule out of the layer.

**Defect 3 — footer "Back to top" goes home (small).** `src/components/Footer.tsx:46`: `<Link to="/">Back to top</Link>`. On any page other than `/` this navigates away instead of scrolling up. Fix: a button that calls `window.scrollTo({ top: 0, behavior: "smooth" })`.

**Not a defect:** the `overflow-x: clip` on `html, body` (`index.css:151` and the inline `<style>` in `index.html`) masks horizontal overflow rather than preventing it. The agent's sweep measured `scrollWidth - innerWidth = 0` on every route, which is the right measurement and passed — but if a future component overflows, `clip` will hide the evidence instead of the scrollbar. Worth knowing, not worth changing now.

## 7. Accessibility — GOOD, with two nits

- Skip link present (`Nav.tsx:41`, `sr-only focus:not-sr-only`), global `:focus-visible` ring (`index.css:166`), all images have meaningful `alt` text, all form fields have `<label>` + `aria-invalid`/`aria-describedby`, lightbox has `role="dialog"`/`aria-modal` and Escape handling, tabs use `role="tablist"`/`aria-selected`, filters use `aria-pressed`, theme switch uses `aria-pressed` + `role="group"`. Reduced-motion fallback is present and correct (`index.css:518–525`: `.enter` renders at full opacity, tagline words render at full colour). No duplicate `id` attributes found.
- **Nit 1 — heading order on `/experience`.** `src/routes/Experience.tsx` has no `h2` at all; the role titles are `<span className="title-1">` inside `<summary>` (line 25–31), and the only `h3` is "What each role taught" (line 45). Screen-reader heading navigation skips from the `h1` to an `h3`, and the three roles are not headings. Fix: make each role title an `h2` and "What each role taught" an `h2` as well (or demote it).
- **Nit 2 — lightbox focus.** `Proof.tsx` closes on Escape and on backdrop click but does not return focus to the thumbnail that opened it. One-line fix with a ref.
- Also note: all three Experience `<details>` ship with `open` (`Experience.tsx:25`), so the expand/collapse affordance the plan asked for exists but defaults to expanded. Fine, but the `+`/`−` affordance then reads as decorative on first paint.

## 8. SEO — GOOD on home, thin everywhere else

- Home is solid: title, meta description, keywords, author, robots `index, follow`, canonical `https://mizazhaider-ceh.dev/`, OG + Twitter `summary_large_image` with a 1200×630 `og-image.jpg`, `theme-color`, favicon, and JSON-LD `Person` with **`"birthDate": "2007-01-28"` — correct** (`index.html:56`).
- **No `sitemap.xml`, no `robots.txt`** in `public/` or `dist/`. For a 17-route site this is the cheapest SEO win available.
- **Per-page SEO is title/description only.** `usePageMeta` updates `document.title` and the description meta, but OG tags, Twitter tags, canonical, and JSON-LD stay home-specific on every route. A recruiter sharing `/projects/pentrix-vulnlab` gets the home card. Either add per-page OG/canonical updates to `usePageMeta` or prerender.
- **No FAQ schema.** The plan asked for FAQ JSON-LD on `/contact`; `Contact.tsx:54–60` renders the FAQ as `<details>` but no schema is emitted anywhere in `src/`.
- **JSON-LD `hasCredential` lists only 3 of the 10 certifications** (CNSP, CEH, Google AI Essentials). Not wrong, but inconsistent with the Certifications page; either list all 10 or drop the array.

## 9. Hard rules — ALL PASS

Greps over `src/`, `index.html`, and `dist/` (including the built JS) found **zero** violations:

| Rule | Result |
|---|---|
| No bounty program names, report titles, IDs, endpoints, reward amounts | Pass. No amounts anywhere; "YesWeHack" and handle `MIHX01` are named, which the content model allows. |
| No `269/269` | Pass. No occurrence. |
| No `16.40/20` GPA in bios | Pass. No GPA anywhere on the site; first year is stated only as "60/60 credits, first attempt". |
| No invented experience/grades/skills | Pass. Every fact I spot-checked traces to the content model (CSCB ranks, 201 challenges/29 modules, 18 chapters/61 lessons/102 commands, 353 skills/29 domains, 150+ BugHunt tools, Damno 13 vulns / 2 critical). Stage counts sum correctly (18 chapters, 61 lessons). |
| No PenTrix flag-storage disclosure | Pass. The only flag wording is the approved sentence (`PentrixVulnLab.tsx:40`, `ChallengePanel.tsx:24`); the panel shows "flag captured" with no literal. |
| No "53+ certifications" | Pass. Ten named certs, no count in any heading or button; "In progress: eJPT, eWPT" is visually separate in an amber callout. |
| `birthDate` is `2007-01-28` | Pass (`index.html:56`). |
| No CWE-434 mechanism detail | Pass. "File upload" appears only as a bounty category name (`data.ts:321,450`); CWE-434 is never named. |
| No em dashes | Pass. Zero `—` in `src/` or `index.html`. |
| No "started at age 14" claim | Pass. Not present. |

Two judgement calls the build got right and I want on record: the `| whoami` string in `data.ts:508` is a standard command-injection payload example inside the BugHunt payload browser, not the forbidden whoami joke, and it renders as inert text; and the "35 reports submitted, 3 rewarded" figure is presented as his stated count, matching the content model's caveat.

## 10. Content accuracy spot-checks

- PowerShell Academy: 18 chapters / 61 lessons / 102 commands / 48 glossary terms, 6 stages; stage table in `data.ts` sums to 18 chapters and 61 lessons. Repo link is `my-powershell-academy` (correct per research; `powershell-academy` 404s).
- BugHunt Arsenal: 800+ payloads, 21 categories, 150+ tools (corrected from v1's 60+), live site link returns 200.
- PenTrix-VulnLab: 201 challenges, 29 modules, 3 kill chains, 3 career paths; repo-only link, no live deployment link (correct — `package.json` says do not deploy publicly).
- AgentArsenal: 353 skills, 29 domains; domain filter list in `data.ts` has 29 entries.
- APK Pipeline: v2.1.0, 64 tests, sample results 100/100 grade A and 0/100 grade F; report preview image renders with correct alt text.
- Ai-Terminal-X: 38 stars is stated only in prose where verified; no hardcoded star counts on cards (correct per plan — stars go stale).
- "Advanced Python Scripting" renders with no issuer line (`Certifications.tsx`, `c.org &&` guard). The content model flagged it site-only; acceptable as rendered, but worth confirming the issuer with izaz when he reviews.

## 11. What I liked most

1. **The content layer is disciplined.** One typed `data.ts` carries every fact, the forbidden-content grep is clean across source and build, and the flag wording, birthDate, and cert handling are all exactly right. This is the hardest thing to get right on a portfolio for a real person, and it is right.
2. **The theme system is properly engineered, not a toggle bolted on.** Pre-paint validation against exactly `light`/`dark`, OS hint only on first visit, `theme-color` synced, and a full token-mapped dark theme that I verified visually (dark hero, cards, and code strips are all legible, and the active theme button reads correctly in both themes).
3. **The interactive moments are real components, not decoration.** The challenge panel with its fix step, the payload browser with copy feedback, the stage stepper, the domain filter, and the lightbox are all wired with correct ARIA and state. The code-strip tokenizer delivering multicolour highlighting per the standing rule is a nice touch that most portfolios fake with a single colour.

## 12. Fix list (priority order)

1. **Add `vercel.json` with the SPA rewrite** (or confirm the deploy repo already has one). Without it, deep links 404 in production. (§5)
2. **Remove the dead band on interior pages** — drop `min-height: 100svh` on the first section after `.page-hero`, or cut section top padding there. (§6, defect 1)
3. **Make the active filter pill visible** — move the `aria-pressed` rule out of `@layer components` or use conditional classes like `ChallengePanel`. (§6, defect 2)
4. **Fix footer "Back to top"** to scroll instead of linking to `/`. (§6, defect 3)
5. **Add `public/sitemap.xml` + `public/robots.txt`**, per-page OG/canonical in `usePageMeta`, and FAQ JSON-LD on `/contact`. (§8)
6. **Route-level code splitting** (`React.lazy` per route) and **optimise `yeswehack-swag.png`** (1.5 MB → WebP or resized PNG); keep Archify receipts out of `dist/`. (§4)
7. **Delete dead code** (`Reveal`, `toggle`, `aria-current={undefined}`); fix `/experience` heading order (`h1` → `h3` skip; role titles should be headings); return focus on lightbox close. (§2, §7)
8. **Re-run the Playwright sweep on a machine where Chromium launches** (console errors, overflow, theme persistence, form submit, lightbox, filters, mobile menu) before deploy, and re-check the nav at 1440/1024 after the fix — the post-fix screenshots already confirm it, but the sweep is the standing gate. (§0, §3)

## Appendix — evidence index

- Build: `npm run build` passes (`tsc -b && vite build`); JS 438.70 kB (125.79 kB gzip), CSS 33.06 kB (7.81 kB gzip), no three.js.
- Routes: `src/App.tsx:25–41` (15 + privacy + terms + `*`).
- Screenshots viewed: `.verify/home-light-1440.png`, `home-dark-1440.png`, `home-light-390.png`, `projects-light-1440.png`, `proof-light-1440.png`, `proof-light-390.png`, `pentrix-light-1440.png`, `bughunt-light-1440.png`, `skills-light-1440.png`, `about-light-1440.png`, `contact-light-1440.png`, `404-light-1440.png`, `navfix2-home-1440.png` (post-fix nav confirmation).
- Sweep log cross-checked: `.verify/results.txt` (0 console errors, 0 overflow claimed on all routes; image FAILs are lazy-load artefacts — all flagged files return HTTP 200).
- Links: 22/22 external URLs return 200 (20 GitHub, 2 Vercel live sites, portfolio domain); LinkedIn 999 (bot block); Formspree GET 405 (expected).
- Browser limitation: Chromium 1248 SIGTRAP on launch in this sandbox (12/12 attempts, headless + headed under Xvfb); Firefox install blocked (EPERM). My own sweep could not run; see §0.
