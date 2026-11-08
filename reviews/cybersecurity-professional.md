# Cybersecurity Professional Review — Portfolio v2

**Reviewer role:** offensive security / penetration tester / AppSec engineer (independent; no coordination with other reviewers)
**Subject:** Muhammad Izaz Haider (izaz), BSc Cybersecurity student, Howest, Belgium
**Site reviewed:** http://localhost:4173/ (preview server already running; responded 200 on first curl, no restart needed)
**Source reviewed:** `~/workspace/portfolio-v2/` (React 19 + TS + Vite + Tailwind + react-router)
**Date:** 2026-11-08
**Grounding docs read first:** `plan/DESIGN-PLAN.md` (skimmed for intent), `research/CONTENT-MODEL.md` (read in full, including Parts 1–4 and the open-question decisions), `portfolio-v2-brief.md`, `VERIFICATION.md` (read; claims re-checked, not taken on trust)

## Verdict: FIX FIRST

The site itself is strong and I would otherwise ship it. It is blocked by **one critical defect**: the downloadable Europass CV served from the portfolio (`/files/Muhammad_Izaz_Haider_Europass_CV.pdf`, linked from Contact) contains **every disclosure the site was carefully sanitized to remove** — the CWE-434 mechanism detail, both bounty amounts, and the 269/269 figure — plus his full home street address and phone number. A visitor who clicks "Download my CV" gets all of it. Fix that one file (sanitized CV or remove the link until a clean CV exists) and this becomes a ship.

Two further fixes should land in the same pass: the hero "challenge 07" demo is a fabricated challenge presented as real, and two certification names borrow vendor titles for third-party course certificates. Everything else below is minor.

## How I reviewed

- Rendered all 17 routes in real Chromium via Playwright (Python, chromium-1248, `--no-sandbox`): `/`, `/about`, `/projects`, `/experience`, `/skills`, `/certifications`, `/proof`, `/contact`, `/privacy`, `/terms`, the 6 project-detail pages (`pentrix-vulnlab`, `powershell-academy`, `bughunt-arsenal`, `ai-terminal-x`, `apk-security-pipeline`, `agentarsenal`), and a bogus route for the 404. Desktop 1440 light for all routes, desktop 1440 dark for Home / PenTrix / Skills / Proof, mobile 390 for Home / Projects / PenTrix / Skills / Proof / Certifications / APK / AgentArsenal. Viewed the screenshots myself.
- **Console errors: 0** on every desktop route (light). **Page errors: 0** on mobile. Dark theme toggles and persists across navigation.
- Re-verified the headline numbers against primary sources, not against the content model alone: PenTrix-VulnLab README + module directories in `~/workspace/pentrix-vulnlab/`; AgentArsenal `arsenal-manifest.json` (counted skills, sub-skills, agents, brains, playbooks, workflows, and distinct domains myself); APK Security Pipeline README in `~/workspace/apk-security-pipeline/`; live BugHunt Arsenal and PowerShell Academy homepages via curl (2026-11-08).
- Grepped `src/`, `index.html`, and the built `dist/` JS for all forbidden strings. Extracted the served CV with `pdftotext` and read the full work-experience section.
- Read the three Archify diagrams standalone (`/diagrams/*.html`) and in their embedded iframes.

## Hard-rule checklist

| Rule | Result |
|---|---|
| No bug bounty program names, report titles, IDs, endpoints, or reward amounts (site HTML/JS) | **PASS.** Categories only, everywhere. No program names beyond YesWeHack (the platform, allowed), no amounts, no IDs, no endpoints. |
| No 269/269 figure (site HTML/JS) | **PASS.** |
| No 16.40/20 GPA in bios | **PASS.** No GPA anywhere on the site. "60/60 credits, first attempt" is the only grade claim, and it is verified. |
| No invented experience / grades / skills | **PASS on the site**, with one exception (Finding 2, the hero demo). |
| No PenTrix flag-storage disclosure | **PASS on the site.** Only the approved safe sentence is used, on the PenTrix page and in the architecture diagram: "Flags are randomly generated per install at first boot on the student's machine. No flag literal exists in any tracked file. Only genuine exploits earn flags." No flag literal anywhere in `src/` or `dist/`. |
| No "53+ certifications" (named certs only) | **PASS.** 10 named certs, no count anywhere. |
| birthDate 2007-01-28 | **PASS.** `index.html` JSON-LD: `"birthDate": "2007-01-28"`. |
| No CWE-434 mechanism detail ("leaked JS token") | **PASS on the site. FAIL in the downloadable CV (Finding 1).** |
| eJPT / eWPT shown as in progress, not held | **PASS.** Certifications page has a separate amber "In progress" box below the held list: "eJPT and eWPT through INE Security. Courses studied, exams coming. Not held yet." |
| Certifications named correctly with the right issuers | **PASS with a caveat (Finding 3).** Issuers are shown under every cert. Two cert *names* borrow vendor titles. |

## Findings (priority order)

### 1. CRITICAL — The downloadable CV leaks every forbidden disclosure the site removed
**Where:** Contact page, "Download my CV (Europass PDF, 328 KB)" → `/files/Muhammad_Izaz_Haider_Europass_CV.pdf` (HTTP 200, 335,544 bytes, served from `public/files/`). The same file is the one linked from the footer.
**What is in it** (verbatim, from `pdftotext` of the served file):
- "Unrestricted file upload (CWE-434) found through a leaked token in client-side JavaScript, earning +12 reputation" — the exact CWE-434 mechanism detail the hard rules forbid.
- "Information disclosure findings (CWE-200) rewarded with EUR 500 and USD 80 bounties, valid reports March 2026" — both reward amounts, plus a date.
- "Built GitLab CI/CD security pipelines (269 of 269 tests green)" — the forbidden 269/269 figure.
- Full home street address ("Gentse Steenweg 132, 8340, Sijsile, Damme, Belgium") and mobile number (+32 466298641) — the content model says city and country only, no phone, on the public portfolio.
- The About Me also says he is "looking for a research fellowship" (application-specific wording the content model said not to use on the portfolio) and that he "earned recognition and bounties for an unrestricted file upload and information disclosure findings."
**Why it matters:** the site's own pages are disciplined about disclosure, but the CV is one click away from every page and it hands a reader the bounty amounts, the upload mechanism, and his home address. Any program or employer who downloads it sees exactly what the standing rules exist to keep private. The content model warned about this twice (Part 1.9: "the build agent must use the sanitized bullets in this model, never quote the CV bullets verbatim"; Part 3.3: "the CV's own work-experience bullets contain the forbidden details") and the build shipped the raw file anyway. The build agent's own `VERIFICATION.md` forbidden-content grep covered `src + index.html + dist` but evidently not the PDF's text, so the check passed while the leak shipped.
**Fix:** replace the file with a sanitized Europass CV whose YesWeHack and Damno bullets match the site's Experience page word for word (categories only, no amounts, no mechanism, no 269/269), with the street address and phone removed. Until a clean CV exists, remove the download link. Do not just delete the PDF from `public/files/` and leave a dead link — the Contact page must be checked after the fix.

### 2. HIGH — The hero "challenge 07" is a fabricated challenge presented as a real solved one
**Where:** Home hero (right-hand panel) and the PenTrix-VulnLab detail page, "The challenge, solved step by step" section. Component: `src/components/ChallengePanel.tsx`.
**What it shows:** "PenTrix-VulnLab, challenge 07 — Order 1042 belongs to another user. Change one value and read it." with steps "Read the request / Spot the flaw / Prove it" (`GET /api/orders/1042`, "-> 200 OK: order #1042 belongs to another user", "-> flag captured") and a green "Solved" badge. The Home hero shows the same panel.
**What I checked:** the lab repo at `~/workspace/pentrix-vulnlab/` has no `/api/orders` endpoint anywhere (grep for `api/orders` in `*.js` returns nothing; `app.js` contains no `orders` route). The real IDOR module (`modules/idor/challenges/`) has 7 challenges: `admin.js` (unprotected admin panel that lists all users and all orders — the closest real analogue), `function-browse.js`, `idor-download.js`, `idor-email-change.js`, `profile.js`, `idor-apikey-regen.js`, `idor-comment-delete.js`. None is a `GET /api/orders/<id>` endpoint, none is numbered "challenge 07", and none works by "change one value" in a URL. The vulnerability *class* is real and the orders table with `user_id` is real, so this is a composite illustration, not a whole-cloth invention — but it is presented as a specific numbered challenge with a "Solved" badge, which reads as a factual claim about the lab.
**Why it matters:** this is the single most prominent interactive element on the site (first screen, both Home and the flagship project page), and the portfolio's entire credibility rests on "verified, no invention." A visitor who clones the lab and looks for challenge 07 / `/api/orders/1042` will not find it. For a security audience, a demo that cannot be reproduced is worse than no demo.
**Fix (either):** (a) relabel it plainly as an illustrative example ("An IDOR, illustrated — simplified from the lab's real IDOR module"), or (b) rebuild the panel around the real challenge: the unprotected `/admin` panel (forced browsing, any logged-in user sees all orders), which is genuinely in the lab and teaches the same lesson. Option (b) is better; it keeps the interactivity and makes the claim true.

### 3. MEDIUM — Two certification names borrow vendor titles for third-party course certificates
**Where:** Certifications page, held list.
- "Certified Ethical Hacking v12 (CEH)" — issuer shown: **LearnKartS**. Real CEH is an EC-Council certification. A "CEH v12" certificate from LearnKartS is a course completion, not EC-Council CEH.
- "CompTIA PenTest+ Specialization" — issuer shown: **Packt**. Real PenTest+ is a CompTIA certification. A Packt "Specialization" is a course, not the CompTIA exam.
**Mitigation present:** the issuer is displayed directly under each name, so this is not a hidden misrepresentation, and the content model records both as verified-held from the CV. But a hiring manager, recruiter, or cert-holder reads the headline first; both names will be read as the vendor certifications by most readers. This is the first thing a security professional will probe, and it is the one place on the site where the wording invites a "did you actually pass CEH?" question he cannot answer yes to.
**Fix:** use the exact title printed on each certificate, or add a one-word qualifier, e.g. "Certified Ethical Hacking v12 (CEH) — course certificate, LearnKartS" and "CompTIA PenTest+ Specialization — course, Packt". Same treatment for the two site-only certs flagged in the content model as unconfirmed: "Google AI Essentials" (Google; appears only on the old live site, not in the CV) and "Advanced Python Scripting" (shown with **no issuer at all** — the only cert card without one). Either confirm both with izaz and add the issuer, or drop "Advanced Python Scripting" until its issuer is known. The strong, unambiguous certs on the page (CNSP with Merit from The SecOps Group, IBM AppSec, TCM Linux 101) should stay exactly as they are — they are the credible core of the list.

### 4. MEDIUM — Skills-tree diagram is clipped inside its frame on the Skills page
**Where:** `/skills`, "One person, three branches" section (embedded `DiagramFigure` iframe for `/diagrams/skills-tree.html`); same component is used on the AgentArsenal detail page.
**What I saw (desktop 1440, light):** the iframe shows only the Offensive security branch; the Defensive and AI security branches are cut off at the bottom edge of the frame, and the diagram's own zoom toolbar overlaps the content. Below the frame there is a large empty band before the skill tables begin. The standalone diagram page is complete and readable (see diagram assessment below), so the diagram is fine — the embed height is wrong for the tree's aspect ratio.
**Fix:** size the iframe to the tree's real height (or make the embed scroll internally with a clear affordance). The tables below already carry the same information, so nothing is lost, but a clipped diagram on the Skills page reads as broken to a visitor who does not open it in a new tab.

### 5. LOW — APK pipeline diagram: "Scoring" node text overflows its box
**Where:** `/diagrams/apk-pipeline.html` (standalone and embedded on the APK detail page).
**What I saw:** the Scoring node's subtitle is clipped at the left edge of its box and reads "ne score out of 100, grade A to F" (the "o" of "one" is cut off). The rest of the diagram is clean. Smaller nit on the same diagram: the dashed arrow labelled "diff feeds the report" from Baseline and CI to Reports is misleading — a baseline diff is a comparison output, it does not feed report generation; the report comes from scoring. Reword the label or drop the arrow.
**Fix:** regenerate the diagram with the Scoring subtitle shortened (e.g. "Score out of 100, grade A to F") and the baseline arrow relabelled.

### 6. LOW — "35 reports submitted, 3 rewarded" is stated as flat fact; it is his own unverified count
**Where:** Experience page, YesWeHack role ("35 reports submitted, 3 rewarded, with quarterly recognition for performance.") and Home FAQ ("35 reports submitted, 3 rewarded.").
**What I checked:** the content model marks this "NOT INDEPENDENTLY VERIFIED — his own count, from his screenshots, recorded in parent memory" and says to use it "as his stated count only." The site presents it without attribution. It is plausible and partly corroborated (the YesWeHack recognition email and swag on the Proof page prove rewarded reports exist), so I am not calling it false. But it is the one headline number on the site with no independent source, and it appears twice as fact.
**Fix:** keep the number (it is his count and he can defend it), but it is the weakest number on the site; if any number is ever challenged, this is the one. No change strictly required — noted so the parent agent can decide whether to soften it to "35 reports submitted to date."

## Smaller observations (no action strictly required)

- **Ai-Terminal-X "38 stars, his most starred tool"** (`AiTerminalX.tsx`, meta grid and meta description): the count is from the 2026-11-08 GitHub API check and will go stale; the content model said to fetch stars live or omit them. The "tool" qualifier is what makes it defensible (Security-Books has 138 stars but is a curated library, not a tool). Prefer omitting the hardcoded number or fetching it live.
- **"Cryptography — Certified; applied in findings"** (Skills page, Defensive security): the thinnest evidence line on the page. Which certification covers it (CNSP, per the content model) is not stated, and "applied in findings" is unverifiable by design. A reviewer will probe this in interview; consider naming the cert ("CNSP; applied in findings") or dropping the line.
- **"API security — JWT work; VulnNotes IDOR"** (Skills page): thin but not false — the VulnNotes IDOR is real and documented. Fine as is; do not expand it without evidence.
- **BugHunt Arsenal payload browser** (one-click Copy on payloads including SSRF cloud-metadata URLs and command injection): standard for a payload library (same class of content as PayloadAllTheThings), and the page states "Nothing here is executed." No finding. The copy button is a feature, not a disclosure risk.
- **PowerShell Academy "102 commands"**: I confirmed 18 chapters and 61 lessons live via curl (2026-11-08); the 102-commands figure comes from the content model's live browser check the same day (the live site is JS-rendered, so curl could not re-confirm it). Treat as previously verified, not re-verified by me.
- **VulnNotes has no detail page** (it is a card in "More projects" only). The content model recommended one; the task specified 6 detail pages and the build has exactly 6, so this matches the brief. Given VulnNotes is a 70%-of-module course project, a detail page would still be a good addition later — not a defect.
- **Proof page vertical rhythm:** the full-page screenshot shows large empty bands between the stat cards, the CSCB story, and the gallery. Viewport screenshots look fine; this may be intentional section spacing. Worth a glance, not a finding.
- **No hype found.** I grepped for "most advanced", "rivals", "world-class", "cutting-edge", "ultimate", "unmatched", "revolutionary", "state-of-the-art" across `src/` and `index.html`: zero hits. Copy is restrained throughout. No skill percentages, no invented metrics, no testimonials (the BugHunt site's unverified testimonials were correctly left out).

## Technical accuracy — verified correct

Every headline number I checked against its primary source matched:

| Claim on the site | Source I checked | Result |
|---|---|---|
| PenTrix-VulnLab: 201 challenges, 29 modules, 3 kill chains, 3 career paths | `pentrix-vulnlab/README.md` badge + text ("201 challenges. 29 modules. 3 kill chains. 3 career paths. Zero fake flags."); counted 29 module directories under `modules/`; README confirms kill-chain scenarios (`/scenarios`) and career paths (`/paths`) with verifiable certificates | **Match.** Also confirms "Burp Suite first" methodology, which the site echoes correctly. |
| AgentArsenal: 353 skills, 29 domains, 290 sub-skills, 36 agents, 25 brains, 15 playbooks, 9 workflows | `agent-arsenal/arsenal-manifest.json`, counted directly (skills 353, sub-skills 290, agents 36, brains 25, playbooks 15, workflows 9; 29 distinct domains, and the domain list matches `data.ts` exactly) | **Match, exactly.** |
| APK Security Pipeline: v2.1.0, Python 3.10+, zero dependencies, 64 tests, clean 100/100 grade A 0 findings, vulnerable 0/100 grade F 24 findings | `apk-security-pipeline/README.md` (version badge, "64 tests, all passing", sample-score discussion) | **Match.** |
| BugHunt Arsenal: 800+ payloads, 150+ tools, 60+ CTF tools, 50+ labs, 14+ modules, 21+ categories | Live homepage `bughunt-arsenal.vercel.app` via curl just now ("800+ Payloads", "150+ tools") | **Match.** (The site's own smaller stat strip conflicts with its headlines; the portfolio correctly uses the headline figures, per the content model.) |
| PowerShell Academy: 18 chapters, 61 lessons, 102 commands, 48 glossary terms, 6 stages | Live homepage via curl: "18 chapters", "61 lessons". Stage breakdown sums correctly in `data.ts` (chapters 1+4+4+6+2+1 = 18; lessons 5+18+7+19+8+4 = 61). 102 commands / 48 terms per content-model live check, not re-verified by me (see observations). | **Match** (102/48 previously verified). |
| CSCB 2026: #1 Web Junior, #3 overall Junior, #26/806, 26 flags | Proof-page screenshots themselves (scoreboard images show the ranks and 26 flags) | **Match.** Point totals (1669 Web) appear only inside the screenshots, never as standalone claims — correct handling. |
| Damno: 13 vulnerabilities vs a brief of 3+, 2 critical fixed (RCE, SQLi), GitLab CI/CD pipelines, 1800+ lines of docs | CV bullets (the sanitized form matches; the forbidden test-count is the only part dropped) | **Match.** |
| "Malware analysis — Course work in progress" | Year 2 course list (Practical Reverse Engineering & Malware Analysis, in progress) | **Honest.** The one skill explicitly marked incomplete. |
| eJPT / eWPT in progress | Memory record (courses studied via INE, exams not taken) | **Correctly separated from held certs.** |

## Credibility — does he sound like a real practitioner?

**Yes.** The terminology is correct and specific throughout, not buzzword salad: IDOR framed as a missing ownership check with the fix shown (authorization before returning the object); Burp-first workflow named as the method for the lab; Frida described as dynamic tracing ("what the app actually does while it runs"), not as a magic word; static analysis split into manifest rules vs strings/code rules; scoring, baseline diff, and CI exit codes described as a pipeline, not a scanner; RAG described as hybrid retrieval with multi-provider streaming; kill chains described as "single flaws strung into a full attack path." The PenTrix page teaches the fix alongside the exploit, which is what a practitioner does. The Skills page ties every skill to a project, a finding, or a rank — no bare skill lists, no percentages, no levels. The About page is plain about what is in progress (forensics, reverse engineering, malware analysis) rather than claiming mastery. The one place the practitioner voice breaks is Finding 2 (the invented challenge), and the one place the evidence thins is the Cryptography line (see observations).

## Archify diagrams — technical assessment

- **PenTrix architecture** (`pentrix-architecture.html`): technically sound and readable. Student browser → Express app → 29 challenge modules → 3 kill-chain scenarios → 3 career paths; SQLite holding challenges/progress/certificates via a SQL query; the "flags generated per install at first boot" boundary is labelled correctly. Real architecture, not generic boxes. One soft spot: the arrow from "3 kill chain scenarios" down to "3 career paths" ("completes path, issues") muddles the relationship — kill chains and career paths are parallel groupings of challenges, not a sequence. Minor.
- **Skills tree** (`skills-tree.html`): complete and accurate standalone — 1 root, 3 branches, 26 leaves, every leaf carrying its evidence line, matching the Skills page tables exactly. Readable at full size. The defect is only the clipped embed on the Skills page (Finding 4).
- **APK pipeline workflow** (`apk-pipeline.html`): the stage order is correct (input → static manifest → strings/code → Frida dynamic → scoring → reports, with baseline/CI alongside) and matches the README's pipeline. Real workflow, not generic boxes. Defects: the Scoring node text overflow (Finding 5) and the misleading baseline arrow. The phase header strip ("Intake / Static checks / Dynamic traces / Score and report") sits oddly above the swimlanes but is legible.

## Would I trust him to test my application? Would I hire him for a junior pentest role?

**Trust to test my application: yes, for web.** The evidence is concrete and checkable: a #1 Web Junior finish at a national CTF, live bounty hunting with quarterly recognition on YesWeHack, a 201-challenge lab he built himself that teaches correct methodology (intercept, tamper, prove, fix), and tooling that shows he understands both static and dynamic analysis. I would scope him to web/API work first and pair him with a senior on anything involving auth design or cloud, which is normal for a junior.

**Hire for a junior pentest role: yes — he is a strong junior candidate, unusually strong for a second-year student.** The portfolio shows the three things I look for in a junior: real reps (CTF + bounties + a lab he built, not just course completions), correct methodology (prove it, then fix it), and honest scoping (in-progress work labelled in progress, eJPT/eWPT not claimed as held, no inflated titles). Before an offer I would probe two things in interview: the two vendor-named certs (Finding 3 — I would ask what exam, if any, was actually passed) and depth on API security and cryptography beyond the one-line evidence. Neither is disqualifying; both are normal junior-interview topics. The CV leak (Finding 1) would not change the hiring decision, but it would change my advice to him: fix the CV before it reaches any employer, because a hiring manager who downloads it will see bounty amounts and a mechanism detail that the portfolio itself was built to keep private.

## What I liked most

1. **The evidence-first Skills page.** Every skill carries a "used in" line tied to a project, a finding, or a rank, with no percentages and no self-assessed levels. That is exactly how a senior engineer wants to see a junior's skills, and it is rare.
2. **The PenTrix page teaches the fix, not just the exploit.** The fourth step of the challenge panel is the ownership check that returns 403. A portfolio that shows the remediation alongside the finding signals a tester who will be useful to a blue team, not just a breaker.
3. **The disclosure discipline on the site pages themselves.** Categories only for bounty work, no amounts, no program names, no flag literals, the safe flag sentence used verbatim, eJPT/eWPT fenced off as in progress, and the BugHunt site's unverified testimonials deliberately left out. The discipline is real — which is precisely why the CV file slipping through (Finding 1) is so unfortunate: the one unguarded surface undoes it.

## Fix list for the parent agent (in order)

1. **Replace or remove the CV download** — sanitized CV matching the site's Experience bullets; no amounts, no CWE-434 mechanism, no 269/269, no street address, no phone. Re-grep the PDF text before shipping.
2. **Fix the hero challenge** — relabel as illustrative, or rebuild around the real `/admin` forced-browsing IDOR challenge.
3. **Clarify the two vendor-named certs** and add/confirm an issuer for "Advanced Python Scripting" (or drop it).
4. **Fix the skills-tree embed height** on Skills (and AgentArsenal) so all three branches are visible without opening a new tab.
5. **Regenerate the APK diagram** with the Scoring subtitle shortened and the baseline arrow relabelled.
6. Optional: drop the hardcoded "38 stars" on Ai-Terminal-X in favour of a live fetch or no number.
