# Recruiter review — Portfolio v2, Muhammad Izaz Haider

**Reviewer lens:** recruiter who hires offensive-security interns and junior pentesters.
**Date:** 2026-11-08. **Build reviewed:** `~/workspace/portfolio-v2/`, preview at `http://localhost:4173/`
(preview server was already running and responding 200; no rebuild was needed).
**Verdict: FIX FIRST** — ship after the two small fixes below (Findings 1 and 2, about 30 minutes
of work). Nothing structural is wrong. No finding here would make me pass on the candidate,
but Finding 1 sits on the home hero, the most-viewed element on the site, and Finding 2
contradicts the build's own verification log, so both should land before this goes live.

## How this review was done

- Read first: `plan/DESIGN-PLAN.md`, `research/CONTENT-MODEL.md`, `portfolio-v2-brief.md`,
  `VERIFICATION.md`, and `src/data.ts` (all facts cross-checked against the content model).
- Rendered all 17 routes (`/`, `/about`, `/projects`, 6 project detail pages, `/experience`,
  `/skills`, `/certifications`, `/proof`, `/contact`, `/privacy`, `/terms`, one bad URL for the 404)
  in Playwright Chromium at 1440x900 and 390x844, light theme, with full-page screenshots,
  console-error capture, horizontal-overflow measurement, and broken-image checks.
  Evidence: `reviews/shots/` (screenshots + per-page text dumps).
- Dark theme: I could not re-render it myself. Chromium in this environment started dying on
  launch (SIGTRAP, exit 133, even for `about:blank`) partway through this review, after the
  light sweep had completed; a seccomp filter is active on this machine (`Seccomp: 2` in
  `/proc/self/status`) and the browser reinstall also failed with EPERM. Dark-theme evidence
  below therefore comes from the build agent's own `.verify/` screenshots plus source
  inspection — see "Dark theme" and "Limitations".
- External links: every GitHub repo link (20), both live sites, and the GitHub profile were
  checked with curl. All returned HTTP 200. LinkedIn returns 999 to curl (LinkedIn's bot
  block, not a broken link); the URL itself matches the verified profile URL.
- The mobile menu was not interactively tested (same Chromium breakage). The 390px renders
  show the hamburger, the shortened name, and the theme switch; the menu code was read in
  `src/components/Nav.tsx` and is straightforward.

## The 10-second test (Home, 1440 and 390)

**Pass. I would shortlist him.** In the first screen I get: his name, "Second year BSc
Cybersecurity student at Howest who breaks web apps, hunts bounties on YesWeHack, and builds
the tools he wishes he had", the CSCB fact pill ("#1 Web Junior, #3 overall Junior, #26 of
806"), availability ("Feb–Apr 2027 and Jul–Sep 2027"), and two clear actions ("Get in touch",
"See my work"). The PenTrix challenge panel on the right shows a real IDOR-style request
being worked, not a stock photo. On a phone (390px) the same five facts survive: name,
sentence, CSCB pill, both CTAs, availability, all above the fold, with the challenge panel
stacked below. The one thing the first screen does not say is the word "internship" in the
headline itself — it says it in the availability line and the final CTA ("Hiring for an
offensive security internship, a junior role, or a research place?"). Good enough.

## Hiring story: complete, with two small gaps

| Recruiter need | Where it is | Status |
|---|---|---|
| Roles wanted (internship, junior pentesting, research) | Home final CTA, Contact intro, FAQ Q1 | Present |
| Availability Feb–Apr 2027 and Jul–Sep 2027 | Home hero + footer CTA, Experience sidebar, Contact, FAQ Q1/Q2 | Present, consistent everywhere |
| Location: Belgium, on-site cities (Kortrijk, Ghent, Brussels, Diegem) or remote | Contact, FAQ Q1 | Present |
| Graduation Jun 2028 | About fact grid, FAQ Q2 | Present |
| CV download | Contact ("Download my CV (Europass PDF, 328 KB)") | Present, file verified 200, 335,544 bytes |
| Contact: email, form, GitHub, LinkedIn | Contact page, nav, footer | Present |
| What he actually does / proof | Home hero, Proof page, Projects | Present |

**Gaps:**
- The CV is only linked from `/contact`. A recruiter landing on Home has to click "Get in
  touch" first. One click is not a barrier, but the nav already has a "Get in touch" CTA;
  adding the CV to the footer (or a small "Download CV" link next to the hero actions)
  would remove the only extra step in the whole hiring flow.
- **Work authorisation / right to work is not stated anywhere.** For a non-EU student in
  Belgium this is the first screening question a recruiter asks. The content model
  deliberately omits it as unverified, and I agree nothing should be invented — but it
  needs a decision and, if he can state it, one approved line on Contact (e.g. what his
  permit allows). Until then, expect the question by email. This is a question for izaz,
  not a defect in the build.

## Proof and credibility: the strongest part of the site

- **CSCB 2026 claims are screenshot-backed and the screenshots are legible.** On `/proof`
  the story carousel shows the Web Junior board with "Muhammad Izaz Haider" at #1 (1669
  points) and the gallery shows the Junior top 3 and the national rankings. The captions
  state the numbers next to the image that shows them, never as standalone claims. The
  "only Pakistani at that rank" line appears once, as his own framing in the story text.
  This is exactly how a second-year student should prove a CTF result, and it is the
  single most persuasive thing on the site.
- **YesWeHack recognition is also evidenced, not just claimed:** the swag photo (YesWeHack
  shirt and stickers) and the recognition email screenshot are both on the page. What they
  prove is recognition; they do not prove the counts (see Finding 4).
- **No claim I checked looks inflated.** The big numbers (201 challenges / 29 modules,
  18 chapters / 61 lessons / 102 commands, 353 skills / 29 domains, 800+ payloads) all
  match the content model's verified figures. Star counts are wisely not shown as static
  numbers on cards.
- **Honesty that builds trust:** Skills has no percentages and every skill carries its
  evidence ("Burp Suite — Daily in bounty hunting and PenTrix-VulnLab"); "Malware analysis"
  is labelled "Course work in progress"; Certifications separates "In progress: eJPT and
  eWPT through INE Security. Courses studied, exams coming. Not held yet." in its own box.
  A recruiter notices this kind of restraint, and it makes the strong claims more
  believable.

## Project pages: convincing, outcome first

- Every featured card leads with the outcome ("Deliberately vulnerable web app for learning
  web penetration testing: 201 challenges across 29 modules..."), then tech tags, then a
  real code strip, then two links ("Read the story" to the detail page, "View on GitHub" /
  "Visit live site"). The detail pages keep the same pattern with a meta grid (stack,
  status, content, link) and a back link top and bottom. VulnNotes is correctly labelled
  "Course project, no public repo" with no dead link.
- PenTrix detail uses the exact approved flag sentence ("Flags are randomly generated per
  install at first boot on the student's machine. No flag literal exists in any tracked
  file. Only genuine exploits earn flags.") and links the repo only, never a live
  deployment. Correct and careful.
- The three Archify diagrams render (PenTrix architecture, skills tree with evidence on
  every leaf, APK pipeline). The skills-tree iframe rendered in my light sweep with
  readable nodes. I did not audit the diagrams' internal accuracy node by node; they are
  consistent with `data.ts`.

## Experience: clear, correct tenses, numbers that check out

- YesWeHack (Feb 2026 to Present): present tense, categories only, no programme names.
- Damno Solutions (Nov 2025 to Jun 2026): past tense throughout ("Delivered 13
  vulnerabilities against a brief of 3+, and fixed 2 critical ones: remote code execution
  and SQL injection. Built GitLab CI/CD security pipelines, reviewed the CBAM codebase,
  and wrote 1800+ lines of security documentation."). The ended role is never written in
  the present tense anywhere on the page.
- The PenTrix founder entry is honest about what it is (tutorials, tools, roadmaps) and
  does not dress a self-founded initiative up as employment.
- The "What each role taught" sidebar is a nice touch, though it repeats the bullets
  almost verbatim; it adds little and could be cut, but it harms nothing.

## Hard-rule checklist (all pass, verified in source and in the shipped bundle)

| Rule | Result |
|---|---|
| No bug bounty programme names, report titles, IDs, endpoints, reward amounts | Pass. Categories only on Experience and FAQ. No amounts anywhere. |
| No 269/269 figure | Pass. `grep` finds no "269/269" in `src/` or `dist/`. The "269" hits in the Archify diagram files are SVG coordinates (e.g. `M 420 269 L 420 359`), not the figure. |
| No 16.40/20 GPA in bios | Pass. No GPA anywhere. About shows only his own wording: "18/20 in Programming..." and "17/20 in Web Pentesting...". |
| No invented experience, grades, or skills | Pass against the content model. Nothing on the site exceeds the verified fact sheet. |
| No PenTrix flag-storage disclosure | Pass. Only the approved safe sentence, on the PenTrix detail page and in the challenge panel note. No flag literal anywhere. |
| No "53+ certifications" (named certs only) | Pass. 10 named certs, no count in any heading or button. The "53+" hits in `dist/diagrams/*.html` are base64 font data inside the Archify files, not a claim. |
| birthDate 2007-01-28 | Pass. `index.html` JSON-LD: `"birthDate": "2007-01-28"`. |
| No CWE-434 mechanism detail | Pass. "File upload" appears only as a category name in the bounty category list. |

## Findings, in priority order

### 1. Home hero challenge panel: green checkmarks imply SQLi and XSS were found in an IDOR challenge
**Page:** `/` (hero, `ChallengePanel`), same panel on `/projects/pentrix-vulnlab` with the fix step.
Under every step of the challenge, including step 1 ("Read the request"), a static list shows
"SQL injection — Injection", "Cross site scripting — Injection", and "Insecure direct object
reference — Access control", each with a green check in a green circle. The challenge itself
is IDOR (order 1042 belongs to another user). A technical reader — exactly the person this
panel is for — reads the checks as "these three flaws are present/solved here". SQLi and XSS
are not part of this challenge. The list is meant to show PenTrix modules, but nothing labels
it that way, and the check icon does the misleading work.
**Fix:** label the list ("Also inside PenTrix-VulnLab" or "Modules this draws on") and use
neutral bullets instead of checks, or drop the list from the hero panel and keep it only on
the PenTrix detail page. One-line change, high visibility.

### 2. A 404 resource error fires in the console on most desktop pages
**Pages:** 13 of 17 renders at 1440px light in my sweep (`/projects/powershell-academy`,
`/projects/bughunt-arsenal`, `/projects/apk-security-pipeline`, `/projects/agentarsenal`,
`/projects/ai-terminal-x`, `/experience`, `/skills`, `/certifications`, `/proof`, `/contact`,
`/privacy`, `/terms`, and the 404 page). The first four pages in the run (`/`, `/about`,
`/projects`, `/projects/pentrix-vulnlab`) were clean, and no 390px render showed it.
`VERIFICATION.md` claims "Console errors: 0 on every route" — that is not what I observed,
and it matters because the log is the evidence the build ships with. I could not capture
the failing URL (Chromium broke before I could run the network-level check), but every
asset the pages reference returns 200 by curl (all images, the CV PDF, all three diagrams,
`favicon.svg`), and the only local URL that returns 404 is `/favicon.ico` — the site
declares only an SVG favicon. The likely cause is Chrome requesting `/favicon.ico` as a
fallback. It is cosmetic (nothing visible breaks), but it is a real console error on most
pages and a one-line fix.
**Fix:** add a `favicon.ico` to `public/` (or confirm the culprit in the network tab and fix
that instead), then re-run the console-error check and correct the verification log.

### 3. First-screen density: on content pages the evidence starts below the fold
**Pages:** `/projects`, `/experience`, `/proof`, `/certifications`, project detail pages.
Every page hero leaves roughly 200–300px of empty space between the intro sentence and the
next block, so at 1440x900 the first screen of `/projects` shows only the heading, the
sentence, and the filter pills (the first project card starts just below the fold);
`/experience` shows the heading and the top of the first role card; `/proof` shows the
heading and the top of the stat cards. This is the design's deliberate "one section per
screen" rhythm, and it looks calm, but a recruiter scanning fast sees headings rather than
evidence on every page except Home. The content is all there one scroll down; nothing is
missing.
**Fix (polish, not blocking):** tighten the hero bottom padding on content pages, or pull
the first content block up so at least one card/role/stat is fully visible in the first
screen at 1440x900.

### 4. Bounty counts (35 reports, 3 rewarded) are self-reported with no on-page backing
**Page:** `/experience` (YesWeHack bullets), repeated in FAQ Q3 on `/contact`.
The content model itself flags these as "his own count, not independently verified". The
YesWeHack email and swag photos on `/proof` prove recognition, not the 35/3 counts. The
numbers match his CV, and self-reported counts are normal on a CV, so this is not an
inflation finding — but it is the one place where the site's evidence standard drops below
the CSCB standard set two pages earlier, and a sceptical recruiter will notice the gap.
**Fix (optional):** either leave as is (defensible, matches the CV) or soften to "dozens of
reports submitted, several rewarded" and let the recognition evidence carry the claim.

### 5. Mobile: LinkedIn URL wraps mid-identifier on Contact; nav CTA hides below md
**Page:** `/contact` at 390px. The LinkedIn line wraps as "linkedin.com/in/muhammad-izaz- /
haider-091639314", breaking the handle across two lines. Cosmetic; add `break-all` handling
or shorten the label to "LinkedIn" with the URL as the link. Separately, the nav "Get in
touch" button is hidden below the `md` breakpoint, so on a phone the only CTA is inside
the hamburger menu — but the hero and final-CTA buttons on every page cover that, and the
390px hero shows both CTAs above the fold with the CV button reachable on Contact without
opening the menu. Mobile as a whole works: 0px horizontal overflow on every route at
390px, hero readable, CV downloadable, contact details visible.

## Smaller notes (not findings)

- **Typos:** none found in the rendered copy I read (Home, About, Projects, Experience,
  Skills, Certifications, Proof, Contact, PenTrix/BugHunt/PowerShell detail pages, 404,
  Privacy, Terms). One style nit: "Cross site scripting" / "Server side request forgery"
  are written without hyphens in the BugHunt category list; the industry spelling is
  "Cross-site scripting". Trivial.
- **Dead ends:** none. Every nav link, project link, footer link, back link, and the 404
  page's two actions resolve. The 404 page is branded, same nav/footer, "Back home" and
  "See my work".
- **Dark theme:** the build agent's `.verify/` dark screenshots (home, proof, contact,
  project pages) show a readable dark theme — dark ink background, periwinkle accents,
  lime rule intact, code panel unchanged, contrast fine. Caveat: those screenshots predate
  the nav fix (taken 07:54; `Nav.tsx` fixed 07:59, rebuilt 08:01), so they show the old
  truncated subtitle ("Penetration Tester, AI x Offensive Sec...") and the two-line
  "Get in touch" button in dark mode. That is stale evidence, not a live bug: the fix
  (`hidden min-[1500px]:block` on the subtitle, `whitespace-nowrap shrink-0` on the CTA)
  is theme-independent CSS, and my own post-fix light 1440 render confirms both are fixed.
  Dark post-fix was not re-rendered by anyone; a 2-minute re-check is worth doing before
  handover, since a recruiter who prefers dark mode sees the nav first.
- **Verification-log discrepancies (for the build agent, not the candidate):** besides
  Finding 2, the log's "Hero at 1280x800" claim holds for Home (verified by me at
  1440x900 and 390x844), and the log is honest about the stale-v1 first sweep and the
  taste-gate failure. The log's "0 bad images" claim holds in my run after full scroll
  (their lazy-load explanation checks out).
- **One transient artifact in my own run, not a site bug:** the PowerShell Academy page
  rendered completely blank (empty title and body) in my single 1440px light render, but
  rendered correctly in my 390px render and in all six of the build agent's renders at
  three widths and both themes, and `curl` returns 200 for the route. I treat this as a
  one-off preview-server/browser flake during my sweep, not a defect. It is recorded here
  so nobody re-reports it without re-checking.
- **"Understand it. Break it. Build it. Secure it."** tagline renders at low opacity until
  scrolled into view (by design). In a full-page screenshot it looks washed out; in normal
  browsing it activates on scroll. Fine, but if a recruiter screenshots the page rather
  than scrolling it, the tagline reads as faded. Not a defect.

## What I liked most

1. **The Proof page is the best page on the site and the reason to shortlist him.** Real,
   legible scoreboard screenshots with his name at #1 Web Junior, a three-picture story
   that walks a recruiter through the result, and YesWeHack recognition shown rather than
   asserted. For a second-year student with no long employment history, this page does the
   work a CV cannot.
2. **Evidence-first skills and honest labelling.** No percentage bars, no invented levels;
   every skill names where it was used, in-progress work is labelled in progress, and
   unheld certs are labelled "Not held yet". That restraint makes the strong claims
   credible — it reads like a person who knows a recruiter will check.
3. **The hiring flow has no friction.** Availability, cities, graduation date, CV download
   with file size, email, form, GitHub, LinkedIn — everything a recruiter needs is on the
   Contact page and repeated where it matters, every project leads with outcome before
   tech, and all 23 external links I checked return 200. I found no dead end, no typo, and
   no hard-rule violation anywhere.

## Limitations of this review

- Dark theme post-nav-fix was not re-rendered by me (Chromium broke mid-review; see
  method). The build agent's dark screenshots predate the fix.
- Mobile menu was not interactively opened (same cause). Menu code was read, not exercised.
- The failing 404 URL was not captured at network level; `/favicon.ico` is the inferred
  cause from elimination (only local 404 among all referenced assets).
- Interactive components were exercised by reading their code and rendered states, not by
  clicking every control (challenge step tabs, payload copy buttons, CSCB carousel
  previous/next, project filter pills, lightbox). Their rendered default states all looked
  correct.
- I did not re-verify the Archify diagrams node by node, and I did not test the Formspree
  submit (sending a real message was out of scope for a review).
