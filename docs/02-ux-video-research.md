# UX and Hero Video Research: Portfolio v3 Rebuild

**Phase 2 research. Date: 9 November 2026.**
**Subject:** Muhammad Izaz Haider, penetration tester and second-year BSc Cybersecurity student in Belgium, builder of PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, and Security-Books.
**Scope:** visitor behaviour and UX for a premium technical portfolio, plus hero video sourcing, footage direction, licensing, and performance.
**Method:** public articles, portfolio teardowns, hiring guidance, licence comparisons, and web performance guides actually read in this pass. Every timed claim below is attributed to its source, with its sample or context where the source gives one. Where sources disagree, the disagreement is stated, not smoothed over.
**Hard rules applied:** no em dashes anywhere in this file (commas, colons, and parentheses are used instead), no media downloaded, no footage presented as licensed until its licence is verified clip by clip, no bounty program names, report titles, IDs, endpoints, or reward amounts, no test-pass counts, no invented experience, grades, or skills, no invented statistics, no fake testimonials.

## How to use this document

Part A is the behaviour evidence and the page-by-page UX decisions that follow from it. Part B is the video sourcing and footage decision. The performance section at the end is a build checklist, not a wish list: a hero that misses those targets should ship as a still, not as a video.

Profile facts used here come from `docs/01-profile-audit.md` (9 November 2026). The strongest verified evidence in that audit is: first place in Web, Junior division, at CSCB 2026, plus third overall Junior and 26th of 806 nationally; a part-time bug bounty role since February 2026; a part-time Junior DevSecOps and AI Security Engineer role at Damno Solutions from November 2025 to June 2026, with 13 vulnerabilities delivered against a brief of 3 or more and 2 critical fixes (remote code execution and SQL injection); founder of The PenTrix; 81 public GitHub repositories; and flagship projects PenTrix-VulnLab (201 challenges across 29 modules), PowerShell Academy (18 chapters, 61 lessons, 48 glossary terms, live), BugHunt Arsenal (live), APK Security Pipeline, and Security-Books (139 stars at audit date). Those are the facts the hero and the project pages must make legible in seconds. Nothing else about his background is asserted in this report.

---

# Part A. Visitor behaviour and UX

## A1. Who visits, and what each visitor wants first

A premium technical portfolio has at least four distinct visitors, and they do not read the same page. Designing for one of them as if they were all of them is the most common failure in this research.

| Visitor | First question | Evidence they trust first | What loses them fastest |
|---|---|---|---|
| Recruiter, non-technical screener | Is this person the right level, specialism, location, and availability for this role? | Name, target role in plain words, current status, location, availability, a short list of named projects, and a CV download | A mission statement hero, no role title, projects hidden behind navigation, no contact route on the first screen |
| Hiring manager or engineering lead | Can this person think, decide under constraints, and finish real work? | One strong case study, opened first, with problem, decisions, trade-offs, and honest outcome; then code and README quality | Screenshots with no reasoning, a long list of shallow projects, claims with no artefact behind them |
| Engineer or security peer | Is the work real, and is the method sound? | Live demo or repo, README, architecture, code structure, sample output, and what the builder would improve | Dead links, a repo with no README, a live demo that does not load, vague tool lists with no proof |
| Security professional or community reader | What did this person actually find or build, and can I learn from it? | Write-ups that explain method, not just result; categories of findings, not confidential detail; tools they built and why | Hype copy, unverified claims, confidential detail presented as a trophy, a case study that is only a screenshot gallery |

Sources for this split: UX Companion distinguishes the recruiter review (about 30 seconds on the homepage, filtering for seniority, specialism, location, and right to work) from the hiring manager review (four to twelve minutes across the first screen, one case study opened, hero summary read, then decisions or outcomes) at https://uxcompanion.co.uk/ux-portfolio-examples. The DEV hiring checklist describes the same split in developer terms: skim the homepage, click one featured project, scan the code, check the GitHub profile, in about 60 seconds total, at https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p. UXfolio, drawing on 74 UX recruiters and design leaders, reports the consistent recruiter preference for clarity of thinking, self-reflection, and evidence of learning over polish or volume, at https://blog.uxfol.io/ux-portfolio-playbook/.

For this portfolio, the ordering follows from that split. The recruiter is the gatekeeper, so the homepage must pass the recruiter in the first screen. The hiring manager is the decision maker, so the first project must survive a deep read. The engineer is the verifier, so every claim must link to a live demo, a repo, or a screenshot of real output. No visitor type should have to trust copy alone.

## A2. How quickly visitors decide, and why the numbers differ

Do not quote a single decision time as a law. The sources read in this pass give different numbers because they measure different things, on different samples.

- **About 7 seconds, CV scan.** A DEV article on junior CVs states that recruiters give a CV about seven seconds before deciding whether to keep reading, and frames it as arithmetic for a posting with 200 to 800 applications: https://dev.to/lluc_verdaguermacias_a09/the-7-second-test-why-junior-developer-cvs-get-skipped-with-beforeafter-rewrites-18bf. A separate DEV piece cites 7.4 seconds for a resume scan and 90 seconds to form an impression, at https://dev.to/dev_tips/recruiters-arent-clicking-your-portfoliotheyre-looking-here-instead-2jah. Treat both as resume-scan figures, not portfolio figures.
- **About 30 seconds, homepage and GitHub.** Wellspring Talent proposes a 30-second test: in 30 seconds a visitor should be able to answer who you are, what role you target, what you can build, where the evidence is, and how to contact you, at https://www.wellspring-talent.com/blog/how-to-build-an-it-portfolio-that-gets-recruiters-attention. UX Companion puts the recruiter homepage review at about 30 seconds, and a cybersecurity GitHub checklist by a hiring manager puts the repo decision at about 30 seconds, at https://www.mpcybersecurity.co.uk/blog/issue-6-the-github-portfolio-checklist-what-hiring-managers-look-for-in-30-seconds.
- **About 55 seconds, resume plus portfolio together.** Presentum reports an average of about 55 seconds for a hiring manager to evaluate both resume and portfolio and decide on an interview, based on 16 hiring managers evaluating 243 applications, at https://presentum.io/design/hiring-explained/evaluating-portfolio-and-resume. That is a small, design-hiring sample, and it covers resume plus portfolio, not the portfolio alone.
- **About 60 seconds, four-step developer review.** The DEV hiring checklist describes a 60-second flow: skim the homepage (10 seconds), click one featured project (20 seconds), scan the code (20 seconds), check the GitHub profile (10 seconds), at https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p. This is a practitioner model, not a measured study, and it is useful as a design target, not as a fact about all reviewers.
- **Three to five minutes skimming, four to twelve minutes for a hiring manager.** UXfolio states that recruiters typically spend three to five minutes skimming a portfolio, and that the job is to make those minutes count, at https://blog.uxfol.io/ux-portfolio-playbook/. UX Companion puts the hiring manager review at four to twelve minutes per portfolio across the first screen, at https://uxcompanion.co.uk/ux-portfolio-examples. Those longer figures describe the reviewers who already passed the first screen, not the first screen itself.

**Design conclusion:** plan for two gates, not one. Gate 1 is the first screen, roughly 7 to 30 seconds, and it decides whether the visitor stays. Gate 2 is the first project, roughly 3 to 12 minutes for the visitors who stay, and it decides whether the visitor believes the work. A hero video, however good, must never delay Gate 1. A case study, however deep, must never hide its problem, role, and outcome behind a long scroll before Gate 2 begins.

## A3. What evidence visitors look for first

Across the sources read, the same evidence order repeats, with small wording differences.

1. **Identity and target role, in plain words.** Name, one-line role, and what kind of work is sought. UX Companion lists the recruiter failure pattern plainly: homepages that lead with a mission statement or design philosophy, seniority unclear because no title is shown, and named work buried inside case studies, at https://uxcompanion.co.uk/ux-portfolio-examples. Wellspring Talent makes the same point with its five-question 30-second test, at https://www.wellspring-talent.com/blog/how-to-build-an-it-portfolio-that-gets-recruiters-attention.
2. **The strongest project, visible without scrolling twice.** UX Companion warns against homepages that hide case studies behind navigation and against animated intros that delay content, and against anything that requires the recruiter to scroll twice before seeing case study names, at https://uxcompanion.co.uk/ux-portfolio-examples. For this portfolio, that means PenTrix-VulnLab first (flagship, 201 challenges, live repo, teaching vehicle), then PowerShell Academy (live product, 18 chapters, 61 lessons), then BugHunt Arsenal (live product), then APK Security Pipeline, then Security-Books. That order follows the audit ranking in `docs/01-profile-audit.md`, section 5, and it must not be reordered for visual variety.
3. **A live demo or a repo that loads, with a README.** The DEV checklist makes the live demo and the readable code the second and third steps of the 60-second review, at https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p. The cybersecurity GitHub checklist makes the same demand at repo level: a README that exists and loads without broken images, an architecture diagram near the top, and a section on what the author would improve, at https://www.mpcybersecurity.co.uk/blog/issue-6-the-github-portfolio-checklist-what-hiring-managers-look-for-in-30-seconds. For PenTrix-VulnLab, link the repo only, never a live deployment, per the audit: the repo states it must not be deployed publicly.
4. **Problem, decision, trade-off, outcome, in that order.** UXfolio reports recruiters asking for the process behind a project that had unexpected turns, and for honesty about lessons and what the author would improve, at https://blog.uxfol.io/ux-portfolio-playbook/. UX Companion states that the decisions section is where hiring managers spend the most time: the two or three significant decisions, the alternatives considered, the evidence informing each call, and the trade-off accepted, at https://uxcompanion.co.uk/ux-portfolio-examples. A case study template is given in section A7 below.
5. **Verified numbers only, beside their proof.** UXfolio recommends anchoring a case study with concrete signals (interviews, tests, iterations, time invested, sign-ups, downloads, conversions), at https://blog.uxfol.io/ux-portfolio-playbook/. For this portfolio, that means counts that come from the audit with a source (challenge counts, lesson counts, star counts fetched live or omitted, competition placement), and nothing else. No skill percentages, no invented counts, no testimonials. The audit records that no testimonial, client quote, or employer endorsement was found in any source, and none may be invented.

## A4. Information discovery: how visitors actually move

Visitors do not read a portfolio like a book. The sources describe a consistent pattern: scan the homepage, open the first project, jump to decisions or outcomes, and only then decide whether to read the rest or go back.

- **Scanning, not reading.** UXfolio advises descriptive subtitles for each phase, highlighted key parts, captions on visuals, and removing everything that does not support the core narrative, because every extra sentence competes for attention, at https://blog.uxfol.io/ux-portfolio-playbook/. The same advice appears in the UX case study guidance: a strong case study answers three questions within a few seconds (what was the problem, what did you do, what was the result), at https://www.uxf.cz/en/blog/topic/ux-portfolio.
- **Jumping, not scrolling linearly.** UXfolio explicitly recommends a process section with anchor links inside a case study, and a sticky process section while scrolling, so reviewers can jump between stages without losing context, at https://blog.uxfol.io/ux-portfolio-playbook/. That is a direct design requirement for the project detail pages: a sticky in-page index (Problem, Role, Decisions, Build, Evidence, What I would improve, Links).
- **First project carries the verdict.** UX Companion states that the hiring manager usually opens the case study positioned first, reads the hero summary, skips to decisions or outcomes, and forms a judgement, at https://uxcompanion.co.uk/ux-portfolio-examples. Skillshift states the same quality rule in plainer terms: three to five polished case studies outperform ten shallow ones, and each should take 5 to 10 minutes to review, at https://skillshift.ai/blog/ux-designer-portfolio-tips. For this portfolio, that means 3 to 5 featured projects in depth, with the rest in a compact archive grid, not 81 repos on the homepage. The audit lists 81 public repos; the homepage must curate, not enumerate.
- **Backtracking is a signal, not a failure.** A visitor who opens a project, returns to the homepage, and opens a second project is engaged. A visitor who opens a project and leaves the site has usually found one of three things: no clear problem statement, no live evidence, or a wall of text with no way to jump to the outcome. The case study template in section A7 is designed to remove all three.

## A5. Cognitive friction: what makes visitors bounce

Cognitive friction here means every extra decision, every ambiguous label, and every delay between intent and evidence.

- **Too many choices in the navbar.** Multiple navigation guides converge on five to seven top-level items, and four to six as the tighter target. WebWizard states five to seven, with Hick's Law as the reasoning (each additional item adds decision time, and longer to decide usually means clicking away), at https://webwizard.ie/blog/website-navigation-design-how-to-structure-your-menu-for-more-conversions/. BuildMyWebsite states four to five core destinations and cites Hick's Law for choice paralysis, at https://www.buildmywebsite.design/articles/simple-web-navigation.html. Tenet states five to seven, with non-essential links moved to the footer, at https://www.wearetenet.com/blog/website-navigation-best-practices. Ronins adds the serial position effect (first and last items are remembered best) and Fitts's Law (targets should be large and easy to reach), at https://www.ronins.co.uk/hub/psychology-of-website-navigation/. The navigation structure in section A8 follows this: five top-level items maximum, with everything else in-page, in a dropdown, or in the footer.
- **Unclear labels.** Labels must match the visitor's mental model. "Work", "Projects", "About", "Contact" are familiar. Invented labels ("Arsenal", "Lab", "Missions") force the visitor to guess, and guessing is friction. Keep invented words inside project names and content, not in navigation.
- **Animated intros that delay content.** UX Companion lists animated intros that delay content as a pattern to avoid, alongside homepages that hide case studies behind navigation, at https://uxcompanion.co.uk/ux-portfolio-examples. The hero video must therefore never be a gate: the headline, role line, and first project must paint with the poster frame, before the video starts, and must remain readable if the video never loads.
- **Weakest work sets the grade.** UXfolio states that everything included presents quality, because the visitor judges the author by the weakest work, at https://blog.uxfol.io/ux-portfolio-playbook/. That is the rule for the archive: a small tool with a thin README belongs in a compact list with a repo link, not as a featured card with the same visual weight as PenTrix-VulnLab.
- **Confidential detail as decoration.** For security work, the friction is also a trust issue. A case study that hints at confidential findings without explaining the method reads as either careless or empty. The audit hard rule applies: findings by category only, never program names, report titles, IDs, endpoints, or reward amounts. The case study must show method (how the category was tested, what the fix pattern was) without showing confidential material.

## A6. Mobile behaviour

Mobile is not a smaller desktop. It is a different context: one thumb, interrupted attention, metered data, and faster, less deliberate scrolling.

- **Mobile is the majority of web traffic in general.** A 2026 mobile conversion guide cites Statcounter global figures placing mobile at roughly 60 to 63 percent of web traffic in recent years, with the share differing by country and industry, at https://watchthem.live/cro-mobile/. A job-application guide puts mobile at up to 40 percent of job site traffic, at https://www.hirezapp.com/blogs/mobile-optimization-for-job-applications-40-of-your-traffic-is-mobile. Neither figure is specific to this portfolio, and no portfolio-specific mobile share is claimed here. The point is directional: a portfolio that only works on desktop is broken for a large share of visitors, including recruiters checking a link on a phone between meetings.
- **Thumb reach decides what gets tapped.** Inspectlet's mobile heatmap guide, citing Steven Hoober's thumb research, states that the natural thumb zone covers roughly the bottom-center third of the screen, and the top-left corner is the hardest area to reach, at https://www.inspectlet.com/guides/mobile-heatmaps. The same guide notes that mobile users scroll faster and less deliberately than desktop users, so scroll depth alone does not equal attention. Practical consequence: the primary mobile action (View projects, or Contact) must sit in the thumb zone, not in a top-right corner, and tap targets must meet at least the WCAG 2.2 minimum of 24 by 24 CSS pixels, with 44 to 48 pixels preferred, as cited at https://watchthem.live/cro-mobile/.
- **Above the fold carries more weight on mobile.** Because mobile scrolling is faster and less deliberate, the first screen must answer the five questions from section A2 (who, what role, what can you build, where is the evidence, how to contact you) without a second scroll. On mobile, that means a short hero, a visible first project card, and a contact route, not a full-screen video with the content pushed below it.
- **Mobile is where video hurts most.** A hero video that is acceptable on desktop broadband can be a real cost on a phone: data, battery, heat, and dropped frames. The performance section therefore defaults mobile to a still poster, with video only on explicit opt-in or on a fast connection, and never autoplaying a large file on a metered connection. See Part B and the performance checklist.

## A7. What makes a visitor explore a case study versus bounce

A visitor explores when the first screen of the case study answers three questions and promises a fourth.

**Explore signals (build these in):**

1. A clear problem in one or two sentences, with who it was for and what was broken or missing.
2. A named role: what Izaz personally owned, what a teammate owned (for example, VulnNotes: Izaz leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts, per the audit), and what was already decided.
3. A visible outcome, with verified numbers beside their proof (screenshots, live links, repo counts fetched live or omitted).
4. A decisions section that names two or three real trade-offs, with alternatives considered and why the chosen path won. This is where hiring managers spend the most time, per UX Companion at https://uxcompanion.co.uk/ux-portfolio-examples.
5. A "What I would improve" section. The cybersecurity GitHub checklist states that the author has changed their opinion of a candidate specifically because of a well-written improvement section, at https://www.mpcybersecurity.co.uk/blog/issue-6-the-github-portfolio-checklist-what-hiring-managers-look-for-in-30-seconds. Honesty about limits is a seniority signal, not a weakness.
6. A sticky in-page index with anchor links, so a reviewer can jump to Decisions or Evidence without scrolling the whole page, per UXfolio at https://blog.uxfol.io/ux-portfolio-playbook/.
7. Working links that open in the expected way: live demo first where one exists, repo second, and a clear note where no live deployment exists (PenTrix-VulnLab: repo only, never a live deployment).

**Bounce signals (remove these):**

1. A hero that is only a screenshot gallery with no problem statement.
2. A long "About this project" paragraph with no headings, no decisions, and no outcome.
3. Ten shallow projects at the same visual weight as the flagship.
4. Broken images, dead demo links, or a README that does not load.
5. Claims with no artefact: a skill list with no repo, a result with no screenshot or link, a count with no source.
6. An animated intro or a video that delays the problem statement.

**Recommended case study template (all project detail pages):**

1. Title, one-line outcome, and three facts (role, stack, status: live, repo, or course project).
2. Sticky index: Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links.
3. Problem (2 to 4 short lines).
4. My role (named ownership, named collaborators where they exist).
5. Decisions (2 to 3 decisions, each with alternatives and trade-off).
6. How it was built (architecture, key files or modules, sample output, not a full code dump).
7. Evidence (live demo, repo, screenshots of real output, verified counts beside their source).
8. What I would improve (honest, specific, 2 to 3 items).
9. Links (live demo where it exists, repo, and a next-project link).

Reading time target: 5 to 10 minutes for a featured case study, per Skillshift at https://skillshift.ai/blog/ux-designer-portfolio-tips. If a draft takes longer, cut copy, not evidence.

## A8. Page order, weighting, and navigation

### Recommended order

Home, Projects, About, Expertise, Research, Contact. That is the order of visitor need, not the order of author pride. Research is real for this portfolio (submitted research internship applications and an assigned international project are recorded in the audit), but it is not yet published research output, so it must not outrank Projects or About. Expertise must not outrank Projects, because a skill list without a project behind it is a claim, not evidence.

Weighting (share of homepage attention, desktop first screen to footer):

- Home hero and first project: the largest weight. Hero answers identity and role; the first project card answers evidence.
- Projects: the largest section on the site. Three to five featured case studies in depth, then a compact archive grid for the rest.
- About: a short section on the homepage (who he is, where he is, what he is looking for), with a full page behind it. About must not be a CV dump; the CV is a download, not a page.
- Expertise: a compact section, grouped by evidence (web testing, mobile security, Linux and server security, AI security tooling, DevSecOps), with each group linking to the project that proves it. No percentages, no counts of skills, per the audit.
- Research: a short, honest section. Submitted applications are not named on the portfolio (per the audit: the hiring line stays generic), and the Amsterdam project is presented as assigned with dates until finality is confirmed after 11 November 2026. No published paper, conference talk, or journal article is claimed, because none was found in the audit.
- Contact: always visible, always one tap away. Email (mizazhaiderceh@gmail.com), GitHub, LinkedIn, and CV download. No contact form as the only route: a form that fails silently loses the visitor, and an email link always works.

### Navigation structure that does not overload the navbar

**Top-level navbar, five items maximum:**

1. Projects
2. About
3. Expertise
4. Research
5. Contact (as a button, not a plain link, so it is the last item and the most visible, per the serial position effect cited at https://www.ronins.co.uk/hub/psychology-of-website-navigation/)

The logo or name at the top left links to Home. Home is not a navbar item. That keeps the bar at five items including the Contact button, inside the five to seven range from section A5, and at the tighter four to five target.

**What goes where, instead of in the navbar:**

- Project detail pages: reached from project cards on Home and on Projects, and from a next-project link at the foot of each detail page. Not in the navbar.
- Archive of smaller tools: a section on the Projects page, with filters (All, Web, Mobile, Learning, Tools), not a navbar item.
- CV download: a button in the hero, in About, and in the footer. Not a navbar item.
- GitHub, LinkedIn, email: icon links in the hero, in Contact, and in the footer. Not navbar items.
- Research detail: a short section on the Research page, with no separate navbar entry for each application or project.
- Legal and secondary links: footer only.

**Mobile navigation:** a single menu button, a full-screen or sheet menu with the same five items in the same order, large tap targets (44 pixels or more), and the Contact button at the bottom in the thumb zone. The menu must close on selection and must not trap focus. No multi-level dropdowns on mobile.

### Per-page recommendations

**Home**

- Purpose: pass Gate 1 in the first screen. Answer who, what role, what can you build, where is the evidence, how to contact you.
- Hero: name, one-line role ("Penetration Tester, AI x Offensive Security"), one line on what he is looking for (internships and junior roles, with availability as he has approved it), two buttons (View projects, Contact or Download CV), and social links. The hero video is a background layer only: it must never delay or obscure this text, and the text must be readable on the poster frame alone.
- Directly below the hero, without a second scroll on desktop: the first featured project (PenTrix-VulnLab), with problem, outcome, and links. Then the remaining featured projects.
- Then a short About strip, a compact Expertise strip (groups with project links, no percentages), a short Research strip (generic hiring line, assigned project with dates), and Contact. Each strip links to its full page. The homepage is a map, not the whole territory.
- Do not put: a mission statement as the hero, a skill cloud with no links, a testimonial section (none exists), or a full repo list.

**Projects**

- Purpose: let a visitor compare the featured work and find the archive.
- Featured: three to five case studies, in audit order (PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books), each as a card with a real screenshot or diagram, a one-line problem, a one-line outcome, stack tags, and two links (live demo where it exists, repo). PenTrix-VulnLab links to the repo only.
- Archive: a compact grid for the remaining repos, with a filter by category and a repo link each. No featured-weight cards for thin repos. No star counts hardcoded: fetch live or omit, per the audit (Security-Books moved from 138 to 139 stars between checks).
- Each card must pass the 30-second test: a non-technical reader can say back what the project does and why it matters.

**Project detail**

- Purpose: pass Gate 2. Use the template in section A7, with a sticky in-page index.
- Lead with problem, role, and outcome. Put Decisions and Evidence where a jumping reader can find them in one tap.
- Include real artefacts: architecture diagram, sample output, screenshots of the working product. Own visuals only, never lecture slide images, per his standing rules.
- End with "What I would improve" and a next-project link. Never end on a dead end.

**About**

- Purpose: answer who he is, where he is, and what he is looking for, in short, verifiable lines.
- Include: name, location (city and country only, Sijsele-Damme, Belgium), current study status in plain words without letting education dominate his identity (per the audit v3 rule), work sought, availability as he has approved it, and the CV download.
- Include a short timeline: bug bounty role since February 2026, Damno Solutions role November 2025 to June 2026 (past tense, role ended), founder of The PenTrix, CSCB 2026 placement. Each item links to its evidence (project, competition proof, or CV).
- Do not include: a full street address, phone number, date of birth, GPA in a bio line, skill percentages, or the 12/20 Communication Skills figure (per the audit, it must not be presented as his communication level, and the figure must not be published in portfolio copy).
- Work authorisation: do not state it on the portfolio. The audit flags it as unanswered and the most important gap for recruiters, and states he must approve the exact wording first. The About page must therefore not invent a line here, and the build must leave a clearly marked placeholder for his approved wording rather than filling it by guesswork.

**Expertise**

- Purpose: show what he can do, grouped by evidence, each group linked to a project.
- Groups, in audit evidence order: web application penetration testing, bug bounty hunting and responsible disclosure (categories only), vulnerability assessment and secure code review, DevSecOps and CI/CD security, mobile security, digital forensics (coursework in progress, labelled as such), Linux and server security, AI security and LLM integration, network security and recon.
- Each group: two or three lines on what it covers, the tools used, and a link to the project or role that proves it. No percentages, no "45+ skills" count, no skill without evidence behind it.
- Certifications: named list only, no total count, no count button, per the audit. The two open items (Google AI Essentials confirmation, Advanced Python Scripting issuer) must not be featured prominently until he confirms them with evidence. In-progress study (eJPT and eWPT through INE Security, exams not taken) must be clearly separated from held certifications and never listed as held.

**Research**

- Purpose: show direction and ambition honestly, without overstating output.
- Include: a short statement of research interests (offensive security, AI security, learning tools), the assigned international project with dates (28 June to 2 July 2027, Amsterdam, Security Summer Camp, 10 ECTS, group of six, his planned role as security specialist and documentation lead, labelled as planned, not performed), and a generic line that research internship applications for summer 2027 have been submitted, without naming any programme, per the audit.
- Do not include: a published paper, talk, or journal article claim (none was found), or any application submission number, deadline, or decision date presented as a portfolio fact.

**Contact**

- Purpose: make contact take one tap, and make it work if JavaScript or a form fails.
- Include: email address as a visible, copyable link (mizazhaiderceh@gmail.com), GitHub and LinkedIn links, CV download, location (city and country only), and availability as he has approved it.
- A contact form may exist, but it must not be the only route. If a form is used, it must show a clear success state and a clear failure state with the email address beside it.
- Do not include: a phone number, a street address, or a form that submits without confirmation.

---

# Part B. Hero video

## B1. What the hero must do, and what it must not do

The brief for this rebuild is explicit: the hero must be immersive with a high-quality video background, cursor-reactive, art-directed, with no hoodie-in-a-dark-room stock footage, no cheesy hacker imagery, and no green terminal neon. That brief rules out most of what a stock library returns for a search like "hacker" or "cybersecurity".

The hero video has three jobs, in order:

1. **Atmosphere, not information.** The headline, role line, and buttons carry the information. The video carries mood: depth, slow movement, and a sense of a real technical environment.
2. **Proof of taste.** A recruiter or engineer judges the portfolio by the hero in seconds. A generic clip says the author picked the first search result. An art-directed clip says the author made a choice.
3. **Motion that invites the cursor.** The brief asks for cursor-reactive motion. A flat video cannot do that alone. The cursor layer must be a separate, owned layer (canvas or WebGL) that responds to the pointer, while the video stays ambient underneath.

What the hero must not do: delay the headline, obscure the text, autoplay with sound, burn mobile data, ignore reduced-motion preferences, or present borrowed footage as if it were the author's own work. The poster frame must carry the hero alone, because that is what a visitor sees first and what a visitor on a slow connection or with reduced motion may only ever see.

## B2. Footage directions, evaluated

Each direction below is judged against the brief, against licence risk, and against how it compresses (a fast, noisy clip will not fit the performance budget in the final section, however good it looks in a library preview).

| Direction | What it looks like when done well | Fit for this hero | Risks |
|---|---|---|---|
| Abstract technical visualisations | Slow particle fields, network graphs, flowing lines, depth of field, dark background with a single restrained accent | Strongest. No faces, no logos, no trademarks, no recognisable location. Compresses well because motion is slow and areas are flat. Cursor-reactive particles sit naturally on top. | Can feel generic if it is an ungraded stock loop. Needs grading, a restrained palette, and the custom cursor layer to feel owned. |
| Close-up engineering details | Macro shots of a keyboard, a circuit board, a cable, a server rail, hands typing (no face), shallow depth of field, slow push or drift | Strong. Real, tactile, and credible for an engineer. Compresses well when the camera moves slowly and the background is soft. | A recognisable logo, brand mark, or screen with readable text in shot creates trademark and privacy risk. Check every frame, not just the thumbnail. |
| Cinematic workstation environments | A composed desk or lab bench at dusk, warm practical light, a monitor glow that is soft, not neon, a person working seen from behind or out of focus, no face | Good, but only with strict art direction. This is the direction most likely to fall into the hoodie-in-a-dark-room cliche the brief forbids. | Highest cliche risk. Faces need a model release for promotional use. A hoodie, a dark room, and green text on a screen is the exact image to reject. |
| Realistic server environments | A server room aisle, rack lights, slow tracking shot, cool light, no people, no readable labels | Good for a short loop, but cold on its own. Works better as a brief cut inside a graded sequence than as the whole hero. | Rack labels, vendor logos, and facility branding are visible in most real server footage. Check for trademarks. Slow, steady camera work is rare in free libraries. |
| Carefully composed digital environments | A clean, designed space (studio, workshop, or abstract interior) with soft light and a single technical object, shot to loop | Good. Feels premium and intentional, and avoids the security cliches entirely. | Hard to find in free libraries without it looking like a real-estate video. Needs grading to match the site palette. |
| Custom-rendered technical scenes | A scene built and rendered for this portfolio (3D, motion graphics, or a procedural WebGL scene), with the site palette, the site typography in mind, and a loop designed from the start | Strongest for ownership and fit, weakest for time and cost. No licence risk, no faces, no logos, no familiarity risk, and the loop can be designed to compress well. | Needs a motion designer or a careful procedural build, and a render or code pass. A rushed render looks worse than a good stock clip. |

**Directions to reject outright:** any clip with a hooded figure in a dark room, any clip with green terminal text as the main visual, any clip with a skull, a mask, or a lock icon as the subject, any clip with readable code that is fake or nonsensical, any clip with a recognisable person facing the camera, and any clip with a visible brand logo or trademark on screen. Those are not art direction, they are the cliches the brief names.

**Footage search terms that work better than "hacker" or "cybersecurity":** abstract network, particle field, data flow, macro circuit, server aisle, workstation dusk, typing hands close-up, fibre optic, blueprint grid, slow push interior. Search for the visual, not the job title.

## B3. Sourcing options, compared

This table compares the options actually read in this pass. Licence summaries below are summaries of the licence pages as reported by the comparison sources read, not a substitute for reading the licence on the specific clip page before use. Licences change, and Mixkit in particular sets the licence per clip. No clip in this report is presented as licensed, because no clip has been selected yet.

| Option | Cost | Licence as read | Pros | Cons | Best for |
|---|---|---|---|---|---|
| Pexels (pexels.com) | Free, no account needed for download | Pexels Licence: free commercial and personal use, no attribution required, clips may be modified. Cannot sell an unaltered clip, cannot redistribute footage as-is (for example on another stock platform), cannot use a clip as part of a trademark or business name, cannot imply a person or brand endorses the product, cannot show identifiable people in an offensive or misleading way. All videos are published without audio. | Largest free library, no attribution, no watermark, commercial use allowed, no account friction, good search. | Most popular clips are widely reused, so the hero can look familiar. No model or property releases are passed to the user: if the use is commercial, consent may still be needed for recognisable people or property, and responsibility for checking rests with the user. | Base layer for the hero, if the clip is graded, cropped, slowed, and layered with custom motion so it does not read as stock. |
| Pixabay (pixabay.com) | Free, free account needed for full-resolution download | Pixabay Content License: free use, modification, and commercial use without attribution. Cannot sell or distribute content on a standalone basis, cannot use content in a misleading or deceptive way, cannot use a clip as part of a trademark, cannot use recognisable trademarks or logos commercially in relation to goods and services. AI-generated uploads must be labelled. Responsibility for checking third-party rights rests solely with the user. | Very large library (over 230,000 video clips as reported), HD and 4K, no attribution, commercial use allowed. | Full resolution needs a free account. AI-generated clips are mixed into results, so check the label if real camera footage is wanted. Same release gap as Pexels: no guarantee that consents were obtained. | Alternative base layer, especially for a niche subject where Pexels has no good clip. Check the AI label and the trademark rule on the specific clip. |
| Coverr (coverr.co) | Free tier, no account for free downloads; paid plans from 5 dollars a month as reported | Coverr Licence: free commercial and non-commercial use, no attribution required (attribution appreciated but not required, corrected August 2026). Cannot compile videos into a similar or competing service, cannot use them to train AI models or as a dataset. Coverr states it obtains model releases but does not pass them to users, and holds none for brands, trademarks, or landmarks. | Built for website background video: clips are chosen to sit behind text, calm, and loop without a visible seam. Human-shot and AI-generated footage are labelled. | Smaller, narrower library than Pexels or Pixabay. Some 4K and premium clips need a paid plan. Same release gap as above. | The strongest free option if a clean, loopable hero background is found, because the library is curated for this exact use. |
| Mixkit (mixkit.co, Envato) | Free, no account, no watermark | Two licences, set per clip. Free License clips: commercial use allowed (including ads, social media, and music videos), no attribution required. Restricted License clips: personal, non-commercial projects only, monetised content ruled out. The licence is a fact about each clip, not the whole site, and must be checked on the download page. | Curated, smaller library with a higher quality bar, good for website backgrounds, close-ups, and abstract footage. No sign-up. | The per-clip licence trap is the main risk: a clip that looks free can be Restricted. Do not use a Mixkit clip without reading its download-page licence label. | A curated abstract or close-up clip, only after the Free License label is confirmed and saved with the download. |
| Paid stock: Artgrid, Storyblocks (representative paid options) | Paid subscription. Artgrid Creator plan reported at 29.99 dollars a month billed annually; Storyblocks plans reported at higher monthly rates, with terms varying by tier. Prices change; confirm on the vendor pricing page before any decision. | Royalty-free licence under the subscription, with a universal licence on work actually used while subscribed that does not expire after cancellation, as reported for Artgrid. Storyblocks Individual and Small Business tiers do not cover new work after cancellation, and broadcast, television, and OTT use is excluded from the standard Storyblocks licence unless the plan says otherwise, as reported in the Framekit comparison. Paid libraries generally offer clearer model and property releases than free libraries. | Cinematic quality, less familiar footage, clearer releases, RAW and log files on higher tiers, a licence that is easier to defend for commercial use. | Cost, annual billing, and licence durability that depends on the tier. A subscription does not remove the need to read the tier terms. Overkill for a single hero loop if the free options already yield a good clip. | The right choice if no free clip passes art direction and the release check, or if the hero will also be used in paid promotion where a paid licence is the safer paper trail. |
| Custom-produced motion (shot or designed for this portfolio) | Cost of a shoot or a motion designer, plus time. No licence fee for the footage itself. | Owned outright (subject to the contract with the maker). No stock licence, no familiarity risk, no release gap if no recognisable person or trademark is in shot. | Fully art-directed to the site palette, the loop is designed to loop, the camera move is designed for text overlay, and the file can be shot or rendered to compress well. | Slowest and most expensive option. Needs a brief, a shoot or design pass, grading, and an encode pass. A rushed custom shoot can look worse than a good stock clip. | The ideal, if time and budget allow: a short, slow, abstract or close-up sequence shot or built for this hero alone. |
| Original rendered footage (procedural WebGL or canvas, or a rendered 3D scene) | Build time only, no media cost. No licence fee. | Owned outright. No licence, no releases, no familiarity risk. | The most ownable option, the smallest files, the most cursor-reactive (the scene can respond to the pointer in real time), and the easiest to make accessible (it can freeze to a still instantly). A GPU particle field can be 70 to 80 percent smaller than a video background, as reported in a Contra case study of a Three.js and GLSL particle wave hero, at https://contra.com/p/FlZFEOOs-gpu-powered-interactive-hero-background. That figure is that author's reported result for that project, not a general guarantee. | Not video in the photographic sense. It cannot show a real environment, a real hand, or a real server room. It needs a careful build to avoid looking like a screensaver, and it needs a performance budget (particle count, device pixel ratio cap, pause when offscreen or hidden). | The cursor-reactive layer, and the fallback if no video passes art direction. Strongest as part of a hybrid, not as a replacement for the video brief on its own. |
| Hybrid treatment (recommended, see B4) | Free or paid stock base, plus build time for the custom layer and grading. | Stock base under its clip licence (verified per clip), custom layer owned outright. | Combines a real photographic base with an owned, cursor-reactive layer and a graded palette, so the hero feels like one designed piece, not a stock clip with text on top. | Two assets to maintain, and the stock base still needs the licence, release, and familiarity checks. | The recommended option for this portfolio. See B4. |

Sources for the licence rows: FrameOS, "Free Stock Video Sites in 2026: What the Licences Actually Say", read in full at https://frameos.studio/blog/free-stock-video-sites, which re-read each site's own licence page as of October 2026 and states the Pexels, Pixabay, Mixkit, and Coverr terms quoted above, including the Mixkit per-clip trap and the release gap (a licence is not a model release). Barnimages, "5 Best Free Stock Video Sites for Commercial Use (2026)", licence details re-checked 17 October 2026, at https://barnimages.com/blog/resources/free-stock-video-sites/, which confirms the Mixkit two-licence split, the Coverr attribution correction of August 2026, the Pixabay full-resolution account requirement, and the AI labelling notes. Jupitrr, "12 Best Free B-Roll Websites", checked October 2026 against each site's licence page, at https://jupitrr.com/best/free-b-roll-footage-websites, which confirms the same four no-attribution licences and the Mixkit Restricted License exception. Framekit, "13 Best Stock Footage Sites to License From in 2026", at https://framekit.ai/blog/best-stock-footage-sites-to-license-2026, for the paid-tier licence durability notes (Artgrid universal licence, Storyblocks cancellation and broadcast limits) and the indemnity range. Magier, "Top 16 Royalty-Free Video Websites", at https://www.magier.com/blog/top-7-websites-for-royalty-free-videos, for the paid versus free split and the release advantage of paid libraries.

**Licence verification checklist (run for the chosen clip, before it ships):**

1. Open the licence page for the specific clip, not the site homepage, and save a screenshot or PDF of the licence text, the clip URL, and the date.
2. Confirm the licence allows commercial use, allows modification, and does not require attribution, or record the attribution if it does.
3. Confirm the clip is under the Free License, not a Restricted License (Mixkit), and is not AI-generated unless that is an accepted choice (Pixabay, Coverr).
4. Check every frame for a recognisable face, a readable logo or trademark, a readable screen, or a private location. If any is present, reject the clip or confirm the release in writing. A free licence does not clear those rights.
5. Record the source, the licence name, the clip URL, and the download date in the project folder, beside the file. That record is what wins a dispute, per FrameOS at https://frameos.studio/blog/free-stock-video-sites.
6. Do not hotlink the library URL. Download the file, store it in the project, and serve it from the site's own hosting.

## B4. Recommendation: hybrid, with a clear order of preference

**Single recommendation: a hybrid hero.**

- **Base layer:** one short, licensed stock clip, 8 to 15 seconds, in the abstract technical visualisation or close-up engineering detail direction (section B2), graded to the site palette, darkened with a restrained overlay so the headline stays readable, slowed if needed, and looped cleanly. Source it from Coverr first (curated for website backgrounds and looping), then Pexels, then Pixabay, then Mixkit (Free License only). Verify the clip licence with the checklist in section B3 before it ships.
- **Owned layer on top:** a custom, procedural canvas or WebGL particle and line field (Three.js or plain canvas), built for this portfolio, that reacts to the cursor (particles drift toward or away from the pointer, lines connect near the pointer, motion eases rather than snaps), and that is the part of the hero that feels alive and owned. This layer is what makes the hero cursor-reactive, because a video alone cannot be.
- **Poster underneath:** a still frame taken from the graded clip, exported as WebP or AVIF, that is the hero when the video does not load, when the visitor is on mobile, or when reduced motion is preferred.

**Why hybrid wins over each single option:**

- Over stock alone: the custom layer and the grading make the hero ownable, and the cursor reaction gives the visitor something to do, which a flat stock loop does not. Stock alone is also the most familiar option, and the most likely to be recognised from another site.
- Over custom-produced video alone: hybrid ships faster and cheaper, and a good stock base is already shot, graded, and loopable, while a custom shoot needs a brief, a location, and a grading pass that this rebuild may not have time for.
- Over rendered footage alone: hybrid keeps the photographic depth the brief asks for ("high-quality video background"), while the rendered layer alone would be a motion graphic, not a video background, and would not satisfy the brief as written.
- Over paid stock alone: paid stock improves the licence paper trail, but it does not solve familiarity or ownership on its own, and it adds cost for a single loop. If the free search yields no clip that passes art direction and the release check, upgrade the base layer to a paid Artgrid clip under its universal licence, and keep the hybrid structure unchanged.

**If the hybrid cannot be built in time:** ship the custom rendered layer with the poster as the hero, and add the stock base layer later. Do not ship an ungraded, unlayered stock clip as the hero, and do not ship a video that misses the performance budget in the next section. A disciplined still with a cursor-reactive particle field is a better hero than a heavy, familiar video.

**Art direction notes for the chosen clip:**

- Palette: dark, restrained, one accent at most, matching the site theme. No green terminal neon, no rainbow gradients, no high-saturation glow.
- Movement: slow, steady, and loopable. A slow push, a slow drift, or a slow particle flow. No fast cuts, no whip pans, no flashing.
- Subject: no face, no hoodie, no dark room, no skull, no mask, no lock icon, no readable code, no visible brand. Hands typing, a circuit macro, a server aisle, or an abstract field are all acceptable if they pass the frame check.
- Text safety: the clip must be dark and calm enough at every point in the loop that white headline text stays readable on top of it with the overlay, not just at the start frame. Check the brightest frame, not the average frame.
- Loop point: the end frame must match the start frame closely enough that the restart is invisible. If it does not loop cleanly, pick a different clip or crossfade the loop in the edit, and check the crossfade on a real device.

## B5. Performance notes

These targets come from the performance guides read in this pass, and they are stated as targets to test against, not as guarantees.

### Formats and encoding

- Ship two sources where the build allows it: WebM (VP9, or AV1 for modern browsers) first, then MP4 (H.264) as the universal fallback. VP9 typically cuts file size by 30 to 50 percent against H.264 at equal visual quality, and AV1 cuts roughly another 20 to 30 percent, as reported at https://blog.blazingcdn.com/en-us/mp4-vs-webm-best-video-format-for-web-playback. That source also states that H.264 in MP4 remains the only combination that every major browser and device decodes in hardware, and that WebM in Safari depends on OS version and hardware decode support, so MP4 is the mandatory fallback. A second source states the same split (MP4 as the safe default, WebM with VP9 or AV1 plus an MP4 fallback) at https://www.xconvert.com/blog/mp4-vs-webm-web-video. Narsaik, by contrast, ships H.264 MP4 alone for hero loops and states that at these file sizes the WebM savings are small and the second encode is one more thing to break, at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/. Either approach is defensible; the decision is to ship WebM plus MP4 if the build pipeline can produce both reliably, otherwise MP4 alone, and never WebM alone.
- Target size: under 3 MB, under 2 MB is better, for the hero loop, per Narsaik at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/. That guide also gives the encode targets: 8 to 15 seconds, 1280 by 720 (720p is visually indistinguishable from 1080p behind text and roughly half the bytes), H.264 CRF 28 to 30 with the slow preset, 24 or 30 frames per second (do not ship 60), no audio track (strip it, it is muted anyway and it costs bytes), and faststart (moves the index to the front so playback begins before the download finishes). Content matters as much as settings: a dark, slow-moving shot compresses well at CRF 30, while fast cuts, confetti, and water spray need a lower CRF and will blow the budget, so if the clip will not compress, pick a different clip.
- Do not ship the editor export. Re-encode for the web. A ProRes or uncompressed source can be gigabytes per hour, and a 20-second hero loop straight out of an editor can be larger than the entire rest of the site, as noted at https://wppoland.com/en/video-formats-wordpress-mov-mp4-webm/.

### Poster frame

- The poster is the Largest Contentful Paint (LCP) candidate, not the video. Browsers count the poster image (or the first decoded frame if there is no poster) as the LCP candidate, so the fastest hero is one where a well-compressed poster paints immediately and the video quietly takes over, per Narsaik at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/.
- Export the poster as a real image, WebP or AVIF, at the hero rendered width (usually 1600 to 1920 pixels), landing around 80 to 150 KB, per the same guide. Pick a frame from the clip itself so the swap from still to motion is invisible. Preload it in the head with fetchpriority high, so it is the first image request. Set explicit width and height on the video element, or an aspect ratio in CSS, so nothing shifts when the poster arrives.
- LCP good target is 2.5 seconds or less at the 75th percentile, per the Core Web Vitals summary at https://spurlockstudios.com/blog/hero-video-slowing-your-site. If the poster cannot meet that, fix the poster first, then earn the motion back.

### Autoplay, muted, and playsinline

- Autoplay with sound is blocked. Muted autoplay is the only reliable cross-browser path. MDN states that autoplay blocking is not applied to video elements when the source media has no audio track, or when the audio track is muted, and that media with an active audio track is considered audible and blocking applies, as summarised in the MDN autoplay guide (mirror read at https://mdn2.netlify.app, original MDN "Autoplay guide for media and Web Audio APIs"). The same guide gives the working pattern: video with autoplay, muted, playsinline, and controls where appropriate.
- The required attribute set for a background loop is: autoplay, muted, loop, playsinline, preload metadata, poster, width, height, and aria-hidden true for a decorative loop (the headline beside it carries the meaning). Narsaik gives that exact tag pattern and states that autoplay, muted, and playsinline is the only combination that mobile Safari and Chrome will autoplay without a tap, and that dropping muted means the video will not start, at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/. Spurlock Studios states the same rule (autoplay effectively requires muted and usually playsinline, sound-on autoplay is a non-starter) at https://spurlockstudios.com/blog/hero-video-slowing-your-site.
- Strip the audio track from the file itself, not just the muted attribute. That is more reliable than relying on the attribute, and it saves bytes, per the autoplay and performance guides at https://wppoland.com/en/video-backgrounds-performance-autoplay-guide/ and https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/.
- Handle the play promise. If the browser rejects playback (low power mode on iOS, a browser setting, or a data saver), keep the poster visible and do not throw an unhandled rejection into the console. iOS low power mode blocks all autoplay, even muted, as noted in the autoplay guides read in this pass.

### Reduced motion

- Honour prefers-reduced-motion: reduce. Show the poster and never start the video. Narsaik states the rule plainly (show the poster and never start the video, in CSS and in JavaScript, and skip attaching the source at all in JavaScript so the bytes are saved) at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/. Spurlock Studios states the same as a requirement (honour prefers-reduced-motion: reduce with a static hero, no debate, and no silent fetch of the MP4) at https://spurlockstudios.com/blog/hero-video-slowing-your-site.
- Implementation: check window.matchMedia('(prefers-reduced-motion: reduce)').matches before calling play, and do not attach the video source at all when it matches. In CSS, inside the reduced-motion media query, hide the video element and let the wrapper show the poster as a background. The custom canvas or WebGL layer must also freeze to a still under reduced motion: no particles drifting, no cursor animation, just the static poster and the static particle field.
- Add a visible pause control for the hero motion, even for visitors who have not set reduced motion. A decorative loop that cannot be paused is a friction point, and a pause button is cheap.

### Mobile and bandwidth

- Default mobile to a still. Spurlock Studios states the rule directly (default mobile to a still or click-to-play, autoplay background video is a desktop privilege you earn) at https://spurlockstudios.com/blog/hero-video-slowing-your-site. Narsaik states the same as a when-to-use-a-still case (audience on slow connections or metered data, where a 3 MB loop is a real cost) at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/.
- Practical mobile rule for this build: on viewports below the desktop breakpoint, on a slow connection (effective connection type 2G or slow 3G, or Save-Data enabled), or on a device with a small screen and a metered connection, do not attach the video source. Show the poster and the static particle field. Offer a "Play motion" button for visitors who want it, and only then load the video.
- If video is allowed on mobile, serve a smaller rendition (720p maximum, and a 480p or shorter loop if the connection is slow). Do not serve the desktop 1080p file to a phone.
- One autoplaying video at a time, in the initial viewport. Narsaik states that the most common performance failure is not one big file but five medium files autoplaying at once (a hero, three service cards, and a logo ticker, together 12 MB and four decoders on a phone), at https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/. Below-fold videos get preload none, a poster, and a data-src instead of src, attached by an IntersectionObserver when the element is close to the viewport, and paused when it leaves. Pause offscreen videos: a phone decoding four loops at once gets warm, drops frames, and scrolls badly.

### Graceful fallback

- The page must read and convert with the poster alone. Motion is a progressive enhancement that arrives after the critical path is clear, per the performance guide at https://wppoland.com/en/performance-video-backgrounds-autoplay-guide-en/.
- Fallback order: (1) poster image with headline, buttons, and first project, fully readable; (2) static particle field on top of the poster, frozen under reduced motion; (3) video loop, desktop only, after the poster has painted and the reduced-motion check has passed; (4) cursor-reactive particle motion, only when the video or the poster is in place and the pointer is a fine pointer (mouse or trackpad, not touch).
- If the video file fails to load, if the codec is unsupported, or if autoplay is rejected, the poster stays, no error is shown to the visitor, and no console error is left unhandled.
- Text contrast must be tested on the poster frame alone, on the brightest frame of the loop, and on the smallest mobile viewport, with the overlay in place. If any of those three fails, darken the overlay or pick a different clip.

### Pre-launch performance checklist

1. Poster is WebP or AVIF, 1600 to 1920 pixels wide, 80 to 150 KB, preloaded, and is the LCP element in PageSpeed Insights (mobile tab, not desktop).
2. Hero video is 8 to 15 seconds, 720p, under 3 MB (under 2 MB preferred), no audio track, faststart, muted, loop, playsinline, preload metadata.
3. WebM (VP9 or AV1) plus MP4 (H.264) are served where the pipeline allows, otherwise MP4 alone. Never WebM alone.
4. Reduced-motion visitors get the poster only, with no video fetch and a frozen particle field.
5. Mobile visitors get the poster by default, with video only on opt-in or on a fast connection.
6. Only one autoplaying video is in the initial viewport. Below-fold videos are lazy-loaded with IntersectionObserver and paused offscreen.
7. The play promise is handled, with no unhandled rejection in the console.
8. The hero is tested on a real phone, on a slow 4G connection, and with reduced motion enabled, not just on desktop broadband.
9. The licence record for the chosen clip (source, licence name, clip URL, download date) is saved in the project folder, beside the file.

---

# Sources read in this pass

All URLs below were returned by search or opened in this pass. Licence summaries in Part B are summaries of the licence pages as reported by the comparison sources, not a substitute for reading the licence on the chosen clip page.

**Visitor behaviour and UX**

- https://dev.to/_d7eb1c1703182e3ce1782/developer-portfolio-checklist-20-things-hiring-managers-look-for-388p (DEV, 60-second hiring checklist)
- https://presentum.io/design/hiring-explained/evaluating-portfolio-and-resume (Presentum, 55 seconds, 16 hiring managers, 243 applications)
- https://dev.to/dev_tips/recruiters-arent-clicking-your-portfoliotheyre-looking-here-instead-2jah (DEV, resume scan and recruiter signals)
- https://dev.to/lluc_verdaguermacias_a09/the-7-second-test-why-junior-developer-cvs-get-skipped-with-beforeafter-rewrites-18bf (DEV, 7-second CV test)
- https://www.wellspring-talent.com/blog/how-to-build-an-it-portfolio-that-gets-recruiters-attention (Wellspring Talent, 30-second test)
- https://resume.newcv.io/resume-template/mobile-developer-github-how-to-build-a-portfolio-recruiters-trust (Resume, GitHub evaluation signals)
- https://www.mpcybersecurity.co.uk/blog/issue-6-the-github-portfolio-checklist-what-hiring-managers-look-for-in-30-seconds (MP Cybersecurity, 30-second GitHub test)
- https://blog.uxfol.io/ux-portfolio-playbook/ (UXfolio, 74 recruiters and design leaders, read in full)
- https://www.uxf.cz/en/blog/topic/ux-portfolio (UXF, case study structure)
- https://uxcompanion.co.uk/ux-portfolio-examples (UX Companion, recruiter versus hiring manager review patterns)
- https://skillshift.ai/blog/ux-designer-portfolio-tips (Skillshift, 3 to 5 case studies, 5 to 10 minutes each)
- https://popshot.usertack.com/blog/ux-case-study-portfolio-mockups (Popshot, case study mockups)
- https://www.brillicaservices.com/blogs/ui-ux-designer-portfolio-tips-for-recruiters (Brillica, recruiter expectations)

**Navigation and cognitive load**

- https://webwizard.ie/blog/website-navigation-design-how-to-structure-your-menu-for-more-conversions/ (WebWizard, 5 to 7 items, Hick's Law)
- https://www.buildmywebsite.design/articles/simple-web-navigation.html (BuildMyWebsite, 4 to 5 items, choice paralysis)
- https://www.ronins.co.uk/hub/psychology-of-website-navigation/ (Ronins, Hick's Law, Fitts's Law, serial position effect)
- https://isitdownorjustme.net/web/menu-design-tips/ (Menu design, rule of seven)
- https://www.wearetenet.com/blog/website-navigation-best-practices (Tenet, 5 to 7 items, footer for non-essential links)

**Mobile behaviour**

- https://watchthem.live/cro-mobile/ (Mobile conversion, Statcounter 60 to 63 percent mobile traffic, WCAG target size)
- https://www.hirezapp.com/blogs/mobile-optimization-for-job-applications-40-of-your-traffic-is-mobile (HireZapp, up to 40 percent mobile job site traffic)
- https://www.inspectlet.com/guides/mobile-heatmaps (Inspectlet, thumb zones, Hoober research, faster mobile scrolling)

**Video licences**

- https://frameos.studio/blog/free-stock-video-sites (FrameOS, licence comparison read in full, October 2026)
- https://barnimages.com/blog/resources/free-stock-video-sites/ (Barnimages, licence details re-checked 17 October 2026)
- https://jupitrr.com/best/free-b-roll-footage-websites (Jupitrr, checked October 2026 against each licence page)
- https://socialrails.com/blog/best-free-stock-video-sites (SocialRails, free stock video comparison)
- https://www.moonb.io/blog/best-stock-video-sites (Moonb, free and paid comparison)
- https://www.lilachbullock.com/where-to-get-free-stock-video/ (Lilach Bullock, free stock video 2026)
- https://www.30secondproductions.com/news/explainer-videos/free-stock-video-sites-licence-guide (30 Second Productions, licence guide)
- https://agentgid.com/assets/coverr/commercial-use/ (AgentGid, Coverr commercial use, licence read 20 October 2026)
- https://www.freevisuals.net/post/the-best-websites-for-free-video-editing-assets-in-2026 (FreeVisuals, Mixkit and Coverr)
- https://framekit.ai/blog/best-stock-footage-sites-to-license-2026 (Framekit, paid licence durability, Artgrid and Storyblocks)
- https://filmora.wondershare.com/basic-video-editing/stock-video-websites.html (Filmora, Artgrid and Storyblocks licences)
- https://www.magier.com/blog/top-7-websites-for-royalty-free-videos (Magier, free versus paid, releases)
- https://www.freevisuals.net/post/artgrid-review (FreeVisuals, Artgrid review)

**Video performance, autoplay, and formats**

- https://www.narsaik.com/blog/website-video-above-the-fold-without-killing-page-speed/ (Narsaik, poster as LCP, encode targets, reduced motion, read in full)
- https://spurlockstudios.com/blog/hero-video-slowing-your-site (Spurlock Studios, poster first, mobile still, reduced motion)
- https://wppoland.com/en/video-backgrounds-performance-autoplay-guide/ (WPPoland, autoplay, poster, reduced motion)
- https://wppoland.com/en/performance-video-backgrounds-autoplay-guide-en/ (WPPoland, progressive enhancement)
- https://blog.blazingcdn.com/en-us/mp4-vs-webm-best-video-format-for-web-playback (BlazingCDN, MP4 versus WebM, VP9 and AV1 savings)
- https://www.xconvert.com/blog/mp4-vs-webm-web-video (XConvert, MP4 safe default, WebM plus MP4 fallback)
- https://www.xconvert.com/blog/convert-mov-mp4-to-webm (XConvert, WebM VP9, Safari support)
- https://wppoland.com/en/video-formats-wordpress-mov-mp4-webm/ (WPPoland, ProRes sizes, H.264 and VP9)
- https://mdn2.netlify.app (MDN autoplay guide mirror, "Autoplay guide for media and Web Audio APIs", muted exception and playsinline pattern)

**Custom rendered motion**

- https://contra.com/p/FlZFEOOs-gpu-powered-interactive-hero-background (Contra, Three.js and GLSL particle wave hero, reported size and frame rate figures are that author's project results, not general guarantees)

**Profile source**

- `docs/01-profile-audit.md` (9 November 2026, in this repo). All profile facts in this report come from that audit. No other profile source was used.

---

## Open items for the parent agent

1. **No clip selected.** No footage has been chosen, downloaded, or licensed in this pass. The next step is a clip search using the terms in section B2, followed by the licence checklist in section B3 for the chosen clip, before any file is added to the build.
2. **Work authorisation wording is still unanswered.** Per the audit, do not state it on the portfolio until Izaz approves the exact wording. Leave a marked placeholder on the About page.
3. **Paid versus free base layer is undecided.** The recommendation is hybrid with a free base layer first. If no free clip passes art direction and the release check, the fallback is a paid Artgrid clip. That is a cost decision for Izaz, not a research decision.
4. **Custom layer scope is undecided.** The cursor-reactive canvas or WebGL layer needs a build decision (plain canvas 2D versus Three.js, particle count, device pixel ratio cap, and pause behaviour) in the engineering phase. This report recommends the layer, it does not specify its implementation.
5. **No statistics in this report are portfolio-specific.** Mobile traffic shares, decision times, and codec savings are cited from their sources with their contexts. Do not present any of them as measurements of this portfolio. Measure the real hero with PageSpeed Insights (mobile tab) and field Core Web Vitals after launch, and replace these cited targets with measured results.
