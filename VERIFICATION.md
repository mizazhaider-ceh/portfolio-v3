# Portfolio v2 — verification log (2026-11-08)

Build: `npm run build` passes (`tsc -b && vite build`, postbuild stamp-css).
Preview: `npx vite preview --port 4173 --strictPort` (http://localhost:4173/).

## Playwright sweep (Python, Chromium 1248, --no-sandbox)
Script: `.verify/check.py`. Full results: `.verify/results.txt`.
Screenshots: `.verify/<slug>-<theme>-<width>.png`.

- 17 routes (15 required + /privacy + /terms) at 1440/1024/768/390 light and 1440/390 dark.
- Console errors: 0 on every route, both themes, all widths.
- Horizontal overflow: 0px on every route, both themes, all widths.
- Hero at 1280x800: h1 + sentence + primary action visible without scrolling on / and /projects/pentrix-vulnlab.
- Theme switch: click Dark on home, navigate to /projects, theme stays dark, localStorage `portfolio-v2-theme` = dark. Persists across pages.
- Iframes: all 3 Archify diagrams loaded (pentrix-architecture, skills-tree, apk-pipeline).

## Image FAILs in the sweep — all false positives (lazy-load timing)
The checker read `img.complete` right after page load; images below the fold with
`loading="lazy"` had not started yet. Re-checked by scrolling each page fully:
- /proof, /projects/apk-security-pipeline, / — 0 bad images after full scroll.
- All files exist in dist/images and return HTTP 200 (profile.png, apk-report-preview.png,
  cscb-rankings.png, cscb-junior-top3.png, yeswehack-swag.png, yeswehack-email.png).

## Fixes made because of the checks
1. Port 4173 was held by a stale v1 preview server (PID 2218, from ~/workspace/portfolio-rebuild,
   started 07:12). The first sweep ran against the OLD v1 site. Killed it, started the v2
   preview on 4173, re-ran the whole sweep against the correct build.
2. Nav "Get in touch" button wrapped to two lines at 1440. Fixed with `whitespace-nowrap`
   + `shrink-0` on the CTA. Verified: button height 40px, one line, at 1440 and 1024.
3. Nav subtitle "Penetration Tester, AI x Offensive Se..." truncated at 1440. Fixed by hiding
   the subtitle below 1500px (name only at 1440 and 1024). Verified in screenshot.

## Link check (curl, 2026-11-08)
- 23 GitHub repo links: all 200 (including my-powershell-academy, PenTrix-VulnLab, AgentArsenal,
  Ai-Terminal-X, apk-security-pipeline).
- Live sites: bughunt-arsenal.vercel.app 200, powershell-academy-seven.vercel.app 200,
  mizazhaider-ceh.dev 200.
- CV download: 200, 335,544 bytes. Favicon: 200.
- Formspree endpoint: 405 on GET (expected, POST-only form endpoint; form is wired to it).
- LinkedIn: 999 (LinkedIn's bot block on direct fetch, not a broken link).

## Taste gate (design-taste-frontend)
- GATE: ERROR, did not run. The gate scripts cannot start Chrome in this sandbox
  (Chrome exited early, no --no-sandbox support in the gate scripts; `check.mjs` exit 2).
  The first run's FAIL 18 output was stale v1 data from a copied `.taste-skill/` folder;
  that folder was removed and the gate re-run clean, where it errored as above.
- Waivers for the plan's standing decisions are recorded in `.taste-skill/waivers.json`
  (Arsenal lavender, Sora+Inter, flat hero heading, kicker, tagline reveal).

## Hallmark sloplint
- `node ~/workspace/custom-skills/hallmark/scripts/sloplint.mjs dist/index.html --render`:
  clean, 0 FAIL, 0 REFLEX, 0 WARN (static tier). Render tier not run: no puppeteer-core.

## Unslop checklist
- Direction written in plan/DESIGN-PLAN.md section 1 (product, character, world, moments,
  signature lime rule + mono status line). Nine passes self-checked: copy from content model
  only, no invented metrics, no skill percentages, no em dashes (grep clean), no gradients/
  glows/three.js (bundle has no three.js vendor chunk), reduced-motion fallback present
  (index.css:518), skip link present (Nav.tsx:41), focus-visible and aria labels present,
  fonts self-hosted woff2, images local.

## Forbidden-content grep (fixed strings, src + index.html + dist)
- No "500 euro", "$80", "269/269", "53+", "16.40/20", "bounty-eur", "bounty-usd",
  "leaked JS token", "53+ certifications". "whoami" appears only inside the standard
  command-injection example payload "| whoami" in the BugHunt payload browser (a payload
  example, not the whoami joke). "269" hits are SVG coordinates inside Archify diagram
  files; "53+" hit is base64 font data inside an Archify diagram file. No flag literals
  anywhere; flag wording is only the approved safe sentence.

## Archify diagrams (not visually reviewed by a human)
- All 3 finalize runs passed all gates (pentrix architecture, skills tree, APK workflow).
  Visual review status: "not-requested" (automated browser checks passed).
- Receipts beside the HTML in public/diagrams/ (.finalize.json, .finalize-summary.json,
  .browser-check.json, .delivery.json).

## Refine pass (2026-11-08, after all five FIX FIRST reviews)

### Environment blocker: this sandbox could not write files or launch a browser
From about 08:15 UTC on 2026-11-08, every process started from the shell
fails data writes with `EPERM: operation not permitted, write` (python,
node, npm, `echo > file`, `fsync`; files are created as 0 bytes). The
same failure hit the end-user reviewer earlier the same morning. Retried
at 08:16, 08:20, 08:21, 08:23, 08:24 UTC, still blocked. Chromium also
cannot launch: SIGTRAP (exit 133) on the full binary and the headless
shell, with and without `--no-sandbox`, `--single-process`, `--no-zygote`,
`--disable-seccomp-filter-sandbox`. Same failure all five reviewers hit.
Consequences, stated plainly:
- `npm run build` could NOT run, so `dist/` is STALE (the old build). The
  preview at http://localhost:4173/ still serves the old site, including
  the old Europass CV file. The fixes below live in `src/` and `public/`
  and take effect only after a rebuild on a healthy machine.
- No Playwright sweep could run: no browser verification of any route,
  width, theme, console errors, overflow, tagline reveal, theme
  persistence, form states, mobile menu, nav click-through, or diagram
  embeds. Nothing in this section claims a browser check.
- The APK diagram finalize, the favicon.ico generation, and the build
  are all blocked on the same write failure, not on the code.
- What DID work: file edits through the file tools, read-only checks
  (`tsc --noEmit`, greps, `pdfinfo`, PyMuPDF text/layout extraction,
  sloplint static tier, taste gate attempt).

### Recovery commands (run on a healthy machine, in this order)
1. `cd ~/workspace/portfolio-v2 && python3 scripts/build-cv.py`
   (optional: regenerates the CV with ReportLab, prettier than the
   hand-built PDF already in place; then re-run the forbidden grep below)
2. Favicon: render `public/favicon.svg` to 64x64 PNG, then
   `python3 -c "from PIL import Image; im=Image.open('favicon-64.png'); im.save('public/favicon.ico', sizes=[(16,16),(32,32),(48,48)])"`
3. APK diagram: `node ~/workspace/custom-skills/archify/bin/archify.mjs finalize workflow .archify/workflow-apk-20261108/candidate.json .archify/workflow-apk-20261108/review-2/apk-pipeline.html --quality showcase --json`
   then copy `review-2/apk-pipeline.html` to `public/diagrams/apk-pipeline.html`
4. `npm run build && npx vite preview --port 4173 --strictPort`
5. Re-run the Playwright sweep (`.verify/check.py`) at 1440/1024/768/390,
   light and dark, all 17 routes + 404, and confirm: 0 console errors
   (including no /favicon.ico 404), 0 overflow, hero visible at 1280x800,
   tagline full colour, skills-tree all three branches visible, embeds in
   dark theme, CV download serves the sanitized PDF, theme persists.

### Fixes made in this pass (per finding, 1 to 18)
1. CRITICAL, CV leak: raw Europass PDF deleted from `public/files/`.
   New sanitized CV `public/files/Muhammad_Izaz_Haider_CV.pdf` (2 pages,
   A4, 8,011 bytes, hand-built ASCII PDF because the sandbox blocked
   ReportLab writes; generator script saved at `scripts/build-cv.py`).
   Content uses only the content model's sanitized bullets: no amounts,
   no test count, no file-upload mechanism, no street address, no phone.
   Verified with PyMuPDF: opens, 2 pages, full text extracts, layout
   check shows no word past the margins. Forbidden grep on extracted
   text: 500: 0, 269: 0, leaked: 0, token: 0, Gentse: 0, Steenweg: 0,
   466298641: 0, EUR: 0, USD: 0, reputation: 0, europass: 0. The bare
   substring "80" matches only inside legitimate numbers (806
   participants, 1,800 lines, 180 ECTS, 800+ payloads). Download link
   updated in `src/data.ts` (CONTACT.cv) and `src/routes/Contact.tsx`
   ("Download my CV (PDF, 8 KB)"); FAQ Q5 reworded off Europass.
   HTTP 200 NOT yet verified (needs the rebuild).
2. Dead space: `src/index.css` base section rule no longer forces
   `min-height: calc(var(--h,1) * 100svh)`; sections size to content
   with 56px top/bottom padding (40px phone). `.page-hero` keeps its
   own padding, so the hero-to-content gap is now 48 + 56 = 104px.
   `src/routes/Home.tsx`: removed the extra `pt-[120px] pb-12` on the
   hero wrap (was 240px total top padding). Short-page footer pinning:
   `body` is now a flex column with `main { flex: 1 }`, so the footer
   sits at the viewport foot on 404/Privacy/Terms.
3. Tagline: `src/components/Tagline.tsx` now has a 2-second safety-net
   timeout forcing full colour, threshold 0.4 to 0.2, immediate full
   colour under `prefers-reduced-motion` and when IntersectionObserver
   is unavailable. (Reduced-motion full colour was already in CSS.)
4. Challenge panel: `src/components/ChallengePanel.tsx` rebuilt around
   the REAL `/admin` forced-browsing challenge from
   `~/workspace/pentrix-vulnlab/modules/idor/challenges/admin.js`
   (panel checks session only, never role; any signed-in user sees all
   users and all orders). No more `/api/orders/1042`, no "challenge 07".
   Badge is stateful ("Try it" on steps 1-2, "Solved" only on Prove it /
   Fix it). Module list is labelled "Also inside PenTrix-VulnLab" with
   neutral periwinkle dots, not green checks; "Cross-site scripting"
   hyphenated; the `truncate` class is gone so the label wraps.
   `src/data.ts` PenTrix code strip changed to `GET /admin HTTP/1.1`.
   Grep for `api/orders`, `1042`, `challenge 07` in `src/` + `index.html`: 0.
5. Skills tree: `src/components/DiagramFigure.tsx` now embeds with
   `?embed=1` (Archify's own gallery/embed mode, found in the viewer
   source: it hides the internal header, toolbar, cards, nav, and
   Export button) and `?theme=light|dark` synced live to the page theme
   via MutationObserver (the toolbar toggle is hidden in embed mode, so
   the diagram cannot be toggled from inside). The "Open the diagram"
   link still points at the plain file, so the standalone viewer keeps
   its chrome. Tall frame for the tree: `figure.diagram--tall iframe`
   is 2260px desktop / 1000px phone in `src/index.css` (tree viewBox is
   794 x 2244; the viewer height-fits the SVG to the frame, so a short
   frame shrinks or clips it). Applied on Skills and AgentArsenal.
   NOT browser-verified: the exact height still needs the render check.
6. APK diagram: candidate `.archify/workflow-apk-20261108/candidate.json`
   edited (Scoring sublabel "one score out of 100, grade A to F" to
   "Score 0 to 100, grade A to F"; edge e7 "diff feeds the report"
   removed, the compare edge e6 kept). Candidate is valid JSON.
   Finalize + copy to `public/diagrams/` BLOCKED on the write failure
   (finalize fails with `EPERM: operation not permitted, write`).
   The shipped `public/diagrams/apk-pipeline.html` is still the old one.
7. Cert names: `src/data.ts` CERTIFICATIONS reworded to
   "Certified Ethical Hacking v12 (CEH), course certificate" (LearnKartS)
   and "CompTIA PenTest+ Specialization, course" (Packt); "Advanced
   Python Scripting" now shows "Issuer unknown" instead of a blank
   issuer line. Same wording in `index.html` JSON-LD.
8. Favicon: `public/favicon.ico` NOT created (generation needs a file
   write; blocked). `index.html` now also declares
   `<link rel="icon" href="/favicon.ico" sizes="any">`. Console-error
   check and verification-log correction still open until the file
   exists and the sweep re-runs.
9. Nav subtitle: `src/components/Nav.tsx` shortened to "Penetration
   Tester" and shown from 1280px (`min-[1280px]:block`, was hidden
   below 1500px). Dead `aria-current={undefined}` removed.
10. Filter pill: `src/routes/Projects.tsx` now uses conditional classes
    for the active state (same pattern as ChallengePanel tabs), so the
    utilities layer no longer loses to the component-layer rule.
11. Footer: `src/components/Footer.tsx` "Back to top" is now a button
    calling `window.scrollTo({ top: 0, behavior: "smooth" })`.
12. SEO: `public/sitemap.xml` (16 URLs) and `public/robots.txt` added;
    `vercel.json` + `public/_redirects` added (see 18). `usePageMeta`
    in `src/hooks.tsx` now updates canonical, og:url, og:title,
    og:description, twitter:title, twitter:description per route, and
    manages a `#page-jsonld` script; all 16 routes pass their path
    (404 passes none). FAQ schema added on `/contact`
    (`src/routes/Contact.tsx`, FAQPage from FAQS). `index.html` JSON-LD
    `hasCredential` now lists all 10 held certifications.
13. About photo card: `src/routes/About.tsx` and `src/routes/Home.tsx`
    figures are now `self-start`, so the card ends at the photo instead
    of stretching to the text column height.
14. Mobile label: `truncate` removed from the challenge module rows
    (see 4); the label wraps instead of ellipsising.
15. Bounty counts: `src/data.ts` (Experience bullet and FAQ Q3) now
    reads "35 reports submitted to date, 3 rewarded, by my own count".
16. LinkedIn wrap: `src/routes/Contact.tsx` LinkedIn link has
    `min-w-0 break-all` on the anchor and its text span.
17. Work authorisation: left out of the site, as instructed. Open item
    for izaz (see below).
18. SPA fallback: `vercel.json` (`/(.*)` to `/index.html`) and
    `public/_redirects` (`/* /index.html 200`) added. NOT deployed.
    Also removed the Archify receipt JSONs from `public/diagrams/`
    (build artefacts that were shipping in `dist/`).

### Small extras (from the reviews, same pass)
- Ai-Terminal-X star count now carries its fetch date:
  "38, his most starred tool (GitHub, 8 Nov 2026)"
  (`src/routes/projects/AiTerminalX.tsx`).
- Privacy/Terms body left-aligned to the wrap edge (`ml-0` on the
  680px column, `src/routes/Privacy.tsx`, `src/routes/Terms.tsx`).

### Read-only verification done in this pass
- `tsc --noEmit -p tsconfig.app.json`: clean, exit 0.
- Forbidden greps over `src/` + `index.html`: no `269/269`, `16.40/20`,
  `53+ certifications`, `leaked token`, `api/orders`, `1042`,
  `challenge 07`, `Europass`. (The `269`/`53+` hits reviewers noted
  are SVG coordinates / base64 font data inside the Archify diagram
  HTML, not claims.)
- New CV PDF: PyMuPDF opens it (2 pages, A4), text extraction and
  forbidden grep as in (1) above, word-bounding-box layout check clean.
- `vercel.json`, APK candidate: valid JSON. `sitemap.xml`: valid XML.
- Hallmark sloplint static tier (`node .../sloplint.mjs src index.html`):
  21 FAIL, 2 REFLEX, 4 WARN. All 21 FAILs are pre-existing (syntax
  highlighting colour literals required by the standing highlighting
  rule; kicker/meta-grid/callout uppercase tracked labels covered by
  the recorded Arsenal waivers; "next generation" in About copy; a
  stamp-line complaint about `index.css` line 1). None references any
  line changed in this pass. The one REFLEX on ChallengePanel (`:disabled`
  styling) is the pre-existing button pattern, not a regression.
- Taste gate (`node .../design-taste-frontend/scripts/gate.mjs`):
  ERROR, same as before. Without CHROME_PATH: "No Chrome, Edge or
  Chromium found". With CHROME_PATH set to the Playwright Chromium:
  "Chrome exited early (null)" / "check: Chrome did not start"
  (the SIGTRAP). The gate itself says: "Do not rerun it: put the GATE
  line and what was not checked in your report, then finish." Copy and
  consistency were not checked.
- Unslop checklist (self-check, no new violations): no new colours,
  no gradients/glows/three.js, no em dashes in changed files, no new
  invented metrics, no skill percentages, reduced-motion fallback kept,
  skip link and focus ring untouched.

### NOT verified (needs the healthy-machine run in "Recovery commands")
- Build passes; preview serves the new code; CV download HTTP 200 and
  8 KB size on the Contact page; favicon.ico 200 and 0 console errors;
  every route at 1440/1024/768/390 light and dark; hero at 1280x800;
  tagline full colour in view; skills-tree all three branches visible
  in light and dark; APK diagram re-rendered; theme switch persists;
  mobile menu, form error/success states, nav click-through,
  /projects/ai-terminal-x in dark mode.
- The 2260px/1000px tree frame heights are reasoned from the viewer
  source (height-fit to the frame, viewBox 794 x 2244), not measured.

### Open items for izaz
- Work authorisation wording: still unstated anywhere (his first
  screening question for a non-EU student). Needs his approved line.
- "Advanced Python Scripting" issuer is still unknown ("Issuer unknown"
  shown); confirm the issuer or drop the cert.
- "Google AI Essentials" is still site-only (not in the CV or the
  LinkedIn-verified list); confirm it.
- The hand-built CV PDF has no embedded metadata (title/author); the
  ReportLab script at `scripts/build-cv.py` regenerates a fuller file
  once writes work. The 8 KB label on Contact matches the hand-built
  file; update it if the regenerated file differs.

## NOT done / open items
- Taste gate did not produce a PASS (Chrome cannot start under the gate scripts here).
  Needs a machine where the gate's Chrome launch works, or a --no-sandbox option added
  to the gate scripts by its owner.
- Sloplint render tier not run (no puppeteer-core in this sandbox).
- Archify diagrams passed automated checks but were not visually reviewed by a human.
- Optional 4th diagram (BugHunt workflow) not built, per plan (optional only).


## RECOVERY 2026-11-08 12:31 UTC (writes back, rebuild done by proactivity research)
- Shell writes recovered: /tmp and ~/workspace writes succeeded at 12:30 UTC (EPERM block from 08:15 UTC is gone; free RAM still ~138 MB).
- `npm run build` (tsc -b && vite build) succeeded in ~6s, exit 0. dist/ rebuilt from the FIXED source.
- Verified in the new dist/: sanitized CV public/files/Muhammad_Izaz_Haider_CV.pdf 8,011 bytes, valid PDF 1.4, 2 pages; all 10 images in dist/images (incl. profile.png, SHA256 matches fetch-assets.yml); all 3 diagrams in dist/diagrams (sizes match GitHub); both fonts in dist/fonts; JS bundle has 0 occurrences of "269/269" and 0 of "/api/orders/1042", 5 of "/admin"; CV link points at the sanitized file, no Europass_CV.
- favicon.ico generated from public/favicon.svg (cairosvg 64px + Pillow, sizes 48/32/16, valid ICO) and is now in dist/; the "favicon.ico not yet created" open item is closed.
- Still to do at delivery: re-host the artifact from this rebuilt dist/ (or redeploy Vercel), re-verify all routes light and dark, then show izaz the fixed version. The GitHub binaries route (fetch-assets workflow, staged links expire Tue 10 Nov 2026) is still a separate pending choice; the local files themselves are intact, so expiry loses only the staging links, not the files.
- Open items for izaz unchanged: work authorisation wording, "Advanced Python Scripting" issuer unknown, "Google AI Essentials" site-only confirmation.
