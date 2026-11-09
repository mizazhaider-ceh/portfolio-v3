# Content Model: src/data.ts (v3, Monograph copy)

**Portfolio V3 rebuild, Phase 6 content. Date: 9 November 2026. Status: content model rewritten, typecheck passing.**

**Scope:** this file documents `src/data.ts` only. It is internal documentation. It may name audit sources factually where verification needs it, marked INTERNAL ONLY. No line of this file is public copy. Public copy lives in `src/data.ts`, and no public copy field there names an institution, a course code, a lecturer, or a professor.

**Sources:** `docs/01-profile-audit.md` (the verified personal knowledge base), `docs/DESIGN_SYSTEM.md` (Monograph direction, authoritative), `docs/03-brand-strategy.md`, `docs/03-project-selection.md`, `docs/03-information-architecture.md`, `docs/05-experience-home-projects.md`, `docs/05-experience-case-studies.md`, `docs/05-experience-supporting.md`, `docs/06-brand-marks.md` (provenance warnings).

## How to read the verification tags

Tags are from the profile audit, section "How to read this audit":

- **Verified:** checked against a primary source in the audit pass, and the source agrees.
- **Supported by project documentation:** the claim comes from the project's own README, manifest, guides, or live site, and the project exists, but no independent third party confirms the number or the feature working end to end.
- **Self-reported:** his own count, wording, or claim, with no independent source found. Usable only as his stated position, never as third-party verified fact.
- **Experimental or in progress:** real work that is unfinished, a course in progress, or an exam not yet taken. Never present as held or completed.
- **Unverified:** no source found, or the source contradicts the claim. Never use in public copy.

## Counts (v3 model)

- Featured projects: 5 (PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books)
- Archive entries: 13 (4 confirmed, 9 compact candidates)
- Expertise groups: 9
- Certifications held: 8 named, no total count
- Certifications pending: 2, in a clearly marked pending block, not featured
- In progress, not held: 1 block (eJPT and eWPT through INE Security)
- FAQs: 6
- Project filters: 7 (All plus 6 verified categories)
- Search categories: 6 (Project, Project section, Command, Concept, Page, Resource)

## Section by section

### NAV_LINKS

Five items, in order: Projects (`/projects`), About (`/about`), Expertise (`/expertise`), Research (`/research`), Contact (`/contact`). Source: information architecture section 1, supporting spec section 1.3. Status: **Verified** (route table). The v2 eight-item list is cut, see "Cut from v2".

### DETAIL_ROUTES

Detail route per project name. Seven entries: the five featured case studies plus AgentArsenal and Ai-Terminal-X. Security-Books (`/projects/security-books`) is new. Source: case study spec section 1.2, information architecture section 2. Status: **Verified** (route table).

### PROJECT_FILTERS

All, Cybersecurity, AI Security, Software Engineering, Automation, Open Source, Research. Source: home and projects spec section 3.2, project selection section 6. Status: **Verified** (filter assignments in the specs). DevSecOps is withheld: no featured or archive project carries a verified DevSecOps assignment, and filters with no verified project behind them must not appear.

### HERO

- Name: Muhammad Izaz Haider. Source: audit section 1. Status: **Verified**.
- Catalogue line: "Portfolio, 2026". Source: design system hero section. Status: **Verified** (house copy).
- Headline: "Find the flaw. Prove it. Build the fix." Source: design system hero section, home and projects spec section 2.6. Status: **Verified** (approved direction).
- Role line: "Penetration Tester, AI x Offensive Security". Source: design system hero section, home and projects spec section 2.6. Status: **Verified** (approved direction).
- Sentence: "I break web apps, then teach others to break them safely." (11 words.) Source: coordinator-approved sentence, home and projects spec section 2.6 and Appendix B item 1. Status: **Verified** (approved wording).
- Primary action: "View projects" to `/projects`. Secondary text link: "Contact" to `/contact`. Source: home and projects spec section 2.6. Status: **Verified** (approved direction).
- No availability line, no mission statement, no social icons in the hero. Source: task brief and design system hero section. Status: **Verified** (rule).
- Compatibility fields `fact`, `availability`, `statusLine` are retained as empty strings only so the v2 Home component still typechecks until Phase 7 rewrites it. They carry no copy and must stay empty in v3. See "Compatibility retentions".

### TAGLINE

Retained as an empty array. The v2 tagline strip is removed and does not return in any form. Source: home and projects spec section 1. Status: **Verified** (removal). See "Compatibility retentions".

### PENTRIX_FLAG_LINE

The approved sentence, exactly: "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags." Source: audit section 16, brand strategy section 6, case study spec section 2.1. Status: **Verified** (approved wording, only flag storage wording allowed anywhere).

### CHALLENGE_PANEL

Title, request line, three numbered steps with supporting lines, input label and placeholder, Check label, idle and wrong-path state lines, Solved badge, flag line, case study link, Reset label. Source: home and projects spec section 2.7. Status: **Verified** (spec copy). The panel checks session only, never role, exactly as v2 did. No flag literal is ever shown.

### Project type

Kept from v2 (`name`, `outcome`, `tags`, `link`, `linkLabel`, `featured`, `note`, `strip`) and extended where the Phase 5 specs require it: `catalogue` (audit order number), `role`, `year`, `status` (Live, Repo, or Course project), `filters` (verified filter assignments), `verification` (short status note per project), `counts` (verified counts, each with value, what it counts, and source), `collaboration` (named team split where one exists). Source: case study spec sections 1.1 and 1.2, home and projects spec sections 3.3 and 3.4. Status: **Verified** (shape required by the specs).

### FEATURED_PROJECTS (5, audit order)

| No. | Project | Outcome source | Status | Counts and source |
|---|---|---|---|---|
| 01 | PenTrix-VulnLab | Home and projects spec sections 1.2 and 3.4 | **Supported by project documentation**, flagship | 201 challenges across 29 modules, 3 kill chain scenarios, 3 career paths with verifiable certificates, each sourced to the repo README and module list |
| 02 | PowerShell Academy | Home and projects spec section 3.4 | **Verified** as a live product | 18 chapters, 61 lessons, 48 glossary terms, 6 stages, live site; 102 commands, live commands page, prior pass, re-verify in Phase 7 |
| 03 | BugHunt Arsenal | Home and projects spec section 3.4 | **Verified** as a live product | Headline figures only, live site headline; no repo link until a repo is confirmed |
| 04 | APK Security Pipeline | Home and projects spec section 3.4 | **Supported by project documentation** | 64 tests passing at v2.1.0, repo README, prior pass, re-check at build time; 4 Frida scripts; scoring 100 minus critical 25, high 15, medium 7, low 3; demo run on a synthetic APK, score 26 out of 100, grade F, 12 findings, v2 build demo run |
| 05 | Security-Books | Home and projects spec section 3.4 | **Verified** as a repo; curation **Supported by project documentation** | 160+ curated books, guides, and resources, repo README; most starred repo, GitHub API live at audit date, star count fetched live or omitted, never hardcoded |

Notes:

- PenTrix-VulnLab links to the repo only, never a live deployment. The repo states it must not be deployed publicly. Source: audit section 5 item 1, project selection section 4, case study spec section 2.1. Status: **Verified**.
- PowerShell Academy outcome omits the 102 commands figure from the index outcome line, per home and projects spec section 3.4. The figure stays in `counts` with its re-verification gate, per case study spec section 2.2. The stale repo README counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) are not used anywhere. Source: audit section 13 item 15. Status: **Unverified**, must not be used.
- BugHunt Arsenal outcome uses only the three headline figures the task names (800+ payloads, 60+ CTF tools, 14+ modules). The `counts` array also records the other three headline figures from the same live page (150+ security tools, 21+ categories, 50+ free labs), which case study spec section 2.3 expressly allows as headline figures. The stat strip figures, the "48% free" claim, and the open-source claim are not used anywhere. Source: audit section 13 items 3 and 4, project selection section 4. Status: stat strip **Unverified** (contradicted by the headline), open-source claim **Unverified**.
- BugHunt Arsenal stack is not named: the stack fact is "Browser app" in tags, and the verification note records that the stack must be verified from the repo before publishing. Source: case study spec section 2.3, home and projects spec Appendix C item 3. Status: **Unverified**.
- Sole builder is the role value for PowerShell Academy, BugHunt Arsenal, and APK Security Pipeline, with a verification gate in each `verification` field. It must be verified against the repo before publishing; any shared contribution must be named. Source: project selection section 4, case study spec section 1.5. Status: **Unverified** until that check is done.
- Year is 2026 for all five, the year of verified public activity from the audit. Phase 7 must confirm each build year from the repo record and correct it if it differs, never guess. Source: home and projects spec Appendix C item 2. Status: **Supported by project documentation**.
- PenTrix-VulnLab outcome wording follows the home and projects spec (sections 1.2 and 3.4). The case study spec section 2.1 outcome line differs by a few words ("A deliberately vulnerable lab where students learn web penetration testing..."). The two specs disagree slightly; this model uses the home and projects wording for the single shared outcome field, and Phase 7 picks one wording for both surfaces. Recorded as a variance, not a silent choice.

### MORE_PROJECTS (13 archive entries)

Confirmed entries, in home and projects spec section 3.9 order:

| No. | Project | Outcome source | Status | Filters |
|---|---|---|---|---|
| 06 | Ai-Terminal-X | Home and projects spec section 3.9 | **Supported by project documentation** | AI Security, Software Engineering |
| 07 | AgentArsenal | Home and projects spec section 3.9 | **Supported by project documentation** | AI Security, Software Engineering, Open Source |
| 08 | VulnNotes | Home and projects spec section 3.9 | **Supported by project documentation**, prior pass; course project, no public repo | Software Engineering, Cybersecurity |
| 09 | 90DaysOfCyberSecurity | Home and projects spec section 3.9 | **Supported by project documentation** | Cybersecurity, Research, Open Source |

Compact candidates, per the task brief, each as a compact entry only:

| No. | Project | Outcome source | Status | Filters |
|---|---|---|---|---|
| 10 | Ai-CMD-X | Audit section 5 item 16 | **Supported by project documentation** | None verified yet, shows under All only |
| 11 | Icarus-X | Audit section 5 item 21 | **Supported by project documentation** | None verified yet, shows under All only |
| 12 | Intel-Scan | Audit section 5 item 10 | **Supported by project documentation** | None verified yet, shows under All only |
| 13 | X-Recon | Audit section 5 item 11 | **Supported by project documentation** | None verified yet, shows under All only |
| 14 | Active Automation | Audit section 5 item 20 | **Supported by project documentation** | None verified yet, shows under All only |
| 15 | Passive Automation | Audit section 5 item 20 | **Supported by project documentation** | None verified yet, shows under All only |
| 16 | Prime-PenTrix | Audit section 5 item 12 | **Supported by project documentation** | None verified yet, shows under All only |
| 17 | Scapy-based tools | Project selection section 1 rank 10 (name only) | **Unverified**, per-repo review required | None |
| 18 | LINA | Project selection section 1 rank 10 (name only) | **Unverified**, per-repo review required | None |

Notes:

- VulnNotes `collaboration` names the team split exactly: "Izaz leads the build. Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts. Demo is individual." Source: audit sections 5 item 8 and 9, case study spec section 2.7. Status: **Supported by project documentation**. No repo link, no private repo link, no graded lab file. The 70 percent module weight from the v2 outcome is not carried in public copy; it is a course weight, not a project outcome.
- AgentArsenal counts (353 skills across 29 domains; 290 sub-skills, 36 agents) are sourced to the workspace manifest, generated 27 October 2026, prior pass, not GitHub API verified. The source line must stay with the numbers on any page that shows them. Source: audit section 13 item 17, case study spec section 2.8. Status: **Supported by project documentation**.
- Icarus-X uses the live API casing (`Icarus-X`), not the v2 `icarus-x`. Link is `https://github.com/mizazhaider-ceh/Icarus-X`. Source: audit section 13 item 25. Status: **Verified** (live API).
- Active Automation and Passive Automation use the display names from the task brief. Repo names are `active-automation` and `passive-automation`. Links use the repo names.
- Prime-PenTrix tags use TypeScript, RAG, and Learning. The v2 tags named FastAPI, which the audit does not confirm. TypeScript is the verified repo language (live API); hybrid retrieval is supported by project documentation. Source: audit section 5 item 12.
- Scapy-based tools and LINA have no verified one-line problem and no verified repo link. Their outcomes and strips say so plainly, their links are empty, and their `verification` fields mark them **Unverified**. Their strips are placeholder notes, not code samples, and must not be rendered as code samples. Phase 7 must run the per-repo review before either entry is presented as more than a name. Source: project selection section 1 rank 10, home and projects spec section 3.9. Status: **Unverified**.
- Filter assignments for the nine candidates are empty because project selection section 6 gives no assignment for them. The task rule is filters only where verified, so they show under All only until a later phase verifies an assignment.

### ABOUT_PARAGRAPHS

Three paragraphs, verbatim from audit section 16 (proposed public copy). No institution name. Source: audit section 16. Status: **Verified** (approved copy). Paragraph 3 names digital forensics, reverse engineering, and malware analysis as current study direction ("going deep on"), which the supporting spec section 2.3 also uses; the audit marks reverse engineering and malware analysis **Experimental or in progress**, so this paragraph must never be read as completed expertise.

### ABOUT_FACTS

Degree (BSc Cybersecurity, no institution), Year (Second year, graduating Jun 2028), Location (Sijsele-Damme, Belgium), First year (60/60 credits, first attempt), Bug bounty (YesWeHack, since Feb 2026), Founder (The PenTrix). Source: audit sections 1 and 4. Status: **Verified**.

### EDUCATION

One entry only: BSc Cybersecurity, Belgium, Sep 2025 to Jun 2028, 180 ECTS, first year 60/60 credits, first attempt, no retakes. The two earlier school entries are cut: naming them would name institutions, per supporting spec Appendix item 5. Retained only so the v2 About component typechecks until Phase 7 removes its Education section. Source: audit section 4 (INTERNAL ONLY: the institution is named there for verification only, and is not reproduced here or in `src/data.ts`). Status: **Verified** (facts), with the institution name removed from public copy.

### LOCATION, STUDY_STATUS, WORK_SOUGHT, AVAILABILITY

- Location: "Sijsele-Damme, Belgium", city and country only. Source: audit section 1. Status: **Verified**.
- Study status: "Second-year BSc Cybersecurity student in Belgium, expected graduation June 2028." Source: audit section 4, supporting spec section 2.3. Status: **Verified**.
- Work sought: "Offensive security internships, junior pentesting roles, and research placements." Source: audit section 1, supporting spec section 2.3. Status: **Verified**.
- Availability: approved wording, exactly as written, including exam periods and the four on-site cities plus remote from Belgium. Source: audit section 1, supporting spec section 2.3. Status: **Self-reported** (his own wording). The overlap between Jul to Sep 2027 and his spoken-for summer is flagged in audit section 13 item 19 and is not "fixed" by editing the wording; only he may change it.

### WORK_AUTHORISATION_PLACEHOLDER

Label "Placeholder, wording to be approved" and text "Work authorisation: exact wording to be approved by Muhammad Izaz Haider before this line is published." Source: design system open issue 7, supporting spec section 2.4. Status: **Unverified** (unanswered, audit section 14 item 1). Nothing is invented for it. Phase 8 must get his exact wording before this line is published.

### GRADES_LINE

"18/20 in Programming, Computer Architecture and OS, and Web Backend. 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers, and Networks." Source: audit section 4, supporting spec section 2.3. Status: **Verified** (transcript). This is a grades line, not a bio line.

### GPA

Structured field only: weighted 16.74/20, unweighted 16.58/20. Never render in a bio line. Source: audit section 4 and section 15. Status: **Verified** (recomputed from the transcript). The semester average figure is deliberately not printed anywhere in this model, per the audit GPA rule.

### PENTRIX

Mission, why it exists, technical focus, responsibilities (founder, lead developer, challenge designer, documentation author), flag line, repo link, and the repo-only note ("PenTrix-VulnLab must not be deployed publicly. The repository is the only link."). Source: brand strategy section 6, supporting spec section 2.6. Status: **Verified** (initiative, CV and GitHub README) for the responsibilities; mission and technical focus **Supported by project documentation**. No user, download, or deployment count is claimed.

### TIMELINE

Four items, in supporting spec section 2.5 order: Bug bounty hunter, YesWeHack, Feb 2026 to present; Junior DevSecOps and AI Security Engineer, Damno Solutions, Nov 2025 to Jun 2026; Founder of The PenTrix, self founded, ongoing; CSCB 2026 placement, 2026. Each item links to its evidence. Source: supporting spec section 2.5. Status: **Verified** (roles and placement), Damno role always past tense.

### ROLES

Three roles, kept in v2 order. Source: audit section 6, supporting spec section 2.5. Status: **Verified** (sanitized CV).

- Bug Bounty Hunter, YesWeHack, Feb 2026 to Present, remote, part time. Bullets: responsible disclosure by category only (categories named, no programme name, report title, ID, endpoint, or reward amount); "35 reports submitted to date, 3 rewarded, by my own count, with quarterly recognition for performance." The counts appear here once, with the "by my own count" qualifier, and nowhere else on the site. Source: audit section 6 item 1 and section 13 item 9. Status: role and categories **Verified**; report counts **Self-reported**.
- Founder and Offensive Security Researcher, The PenTrix, self founded. Bullets kept from v2. Source: audit section 6 item 3. Status: **Verified**. The second bullet ("Every project ships with a write-up that explains the method, not just the result") is **Self-reported** (his own description of his practice).
- Junior DevSecOps and AI Security Engineer, Damno Solutions, Nov 2025 to Jun 2026, remote, part time, 20 hours per week, always past tense. Bullets: 13 vulnerabilities delivered against a brief of 3 or more, 2 critical fixed (remote code execution and SQL injection); GitLab CI/CD security pipelines built, CBAM codebase reviewed, 1,800+ lines of security documentation written. No detail is added about the CBAM codebase beyond the CV bullets. Source: audit section 6 item 2 and section 13 item 12. Status: **Verified** (activity); CBAM codebase details **Unverified**.

### ACHIEVEMENTS

Five entries: CSCB 2026 first place Web Junior; third overall Junior; 26th of 806 nationally with 26 flags solved; YesWeHack quarterly recognition; first year 60 out of 60 credits, first attempt. Source: audit section 10. Status: **Verified**. No point totals as standalone claims (only beside the screenshot). The "only Pakistani at that rank" claim is **Self-reported** and is not used. No other competition result, award, or ranking is claimed.

### EXPERTISE_GROUPS (9, audit order)

Source: audit sections 2 and 3, information architecture section 3 (Expertise), supporting spec section 3.2. Each group carries coverage lines, tools used, a proved-by link, and capabilities with evidence. No percentages, no counts, no skill without evidence.

| # | Group | Proved by | Status |
|---|---|---|---|
| 1 | Web application penetration testing | PenTrix-VulnLab case study, CSCB evidence | **Verified** |
| 2 | Bug bounty hunting and responsible disclosure | YesWeHack role, About experience | **Verified** as an activity; counts **Self-reported** |
| 3 | Vulnerability assessment and secure code review | Damno Solutions role, About experience | **Verified** (activity); CBAM details **Unverified** |
| 4 | DevSecOps and CI/CD security | Damno Solutions role, About experience | **Verified** |
| 5 | Mobile security | APK Security Pipeline case study | **Supported by project documentation**; presented as demonstrated tooling plus coursework, not a completed professional mobile role |
| 6 | Digital forensics | About, study status | **Supported by project documentation**, coursework in progress, labelled as such |
| 7 | Linux and server security | PowerShell Academy case study | **Verified** as study plus tooling; presented as labs plus tooling, not production administration |
| 8 | AI security and LLM integration | Ai-Terminal-X and AgentArsenal, archive | **Supported by project documentation**; thinner than offensive security, supports rather than leads |
| 9 | Network security and recon | Projects, archive entries for the recon tools | **Supported by project documentation** |

Notes:

- Reverse engineering and malware analysis is not a tenth group. The audit marks it **Experimental or in progress**. It appears only as a plain-words line on About ("going deep on the defensive side"), never as an Expertise group. Source: audit section 2 item 7, supporting spec section 3.2.
- Digital forensics is the only group whose proof link goes to a page rather than a project. That is deliberate and must stay visible: the group carries the label "Coursework in progress".
- Git and GitHub appear as capabilities inside groups 1 and 8 with the evidence "Public repos on GitHub, no count shown". No repo count is attached: the v2 "80 public repos" figure is stale (81 live at audit date) and counts must be fetched live or omitted, so it is omitted. Source: audit section 13 item 1, supporting spec section 3.2.
- C and C++ (KeyGen-X, transcript 18/20) and the "45+ skills" style count have no group home in this model. C and C++ is evidenced but KeyGen-X is not in the v3 archive, so it is not presented as an expertise claim here. Recorded as a gap, not a silent cut.

### SKILL_GROUPS (compatibility view)

Derived from `EXPERTISE_GROUPS` by mapping each group to the v2 shape (`name`, `items` of `name` and `evidence`). Single source of truth is `EXPERTISE_GROUPS`; this export is never edited by hand. Retained only so the v2 Skills route still typechecks until Phase 7 rewrites it as `/expertise`. The v2 three broad groups are replaced by the nine evidence groups above. The v2 "Malware analysis: course work in progress" skill row is removed, per supporting spec section 3.2. The v2 "Git and GitHub: 80 public repos" evidence line is removed with the stale count.

### SOFT_SKILLS

Six items in his own words: problem solving, team leadership, communication, critical thinking, adaptability, time management. Source: audit section 3. Status: **Self-reported**. Plain words only, no proof claimed.

### CERTIFICATIONS (8 held, named only, no total count)

Source: audit section 11, supporting spec section 3.3. Status: **Verified** (sanitized CV; LinkedIn check 2026-10-31 for five of them). Order follows the task brief: CNSP with Merit (The SecOps Group); Application Security for Developers and DevOps Professionals (IBM); Web Application Security Testing with OWASP ZAP (Coursera); Linux 101 (TCM Security); Web App Security Testing with Google Hacking (CodeRed); Certified Ethical Hacking v12 (CEH), course certificate (LearnKartS); CompTIA PenTest+ Specialization, course (Packt); AI Agents and Agentic AI (Vanderbilt University). The two vendor-named entries read as course certificates, so they do not read as the vendor exams. No total count, no count button.

### PENDING_CERTIFICATIONS (2, not featured)

Google AI Essentials (Google) and Advanced Python Scripting (issuer unknown), each with a note stating what is missing. Source: audit section 11 note and section 14 items 2 and 3, supporting spec section 3.3 item 4. Status: **Unverified as held certifications**. They appear only in this clearly marked pending block, not as rows, not counted, not featured prominently. Phase 8 must confirm both with evidence before either moves up.

### IN_PROGRESS_STUDY

"eJPT and eWPT through INE Security. Courses studied, exams not taken. Not held yet." Clearly separated from held certifications, never listed as held. Source: audit section 7, supporting spec section 3.3 item 5. Status: **Experimental or in progress**.

### RESEARCH

- Interests statement (offensive security, AI security, learning tools). Source: supporting spec section 4.2. Status: **Verified** (interests, not output).
- Amsterdam block: Security Summer Camp, Amsterdam, 28 June to 2 July 2027, 10 ECTS, group of six, planned role security specialist (reverse engineering and forensics tasks) and documentation lead, status "Assigned, planned, not performed". No other group member is named. Source: audit section 7, supporting spec section 4.3. Status: assigned **Verified** (5 November 2026); finality pending after 11 November 2026; planned role **Self-reported**. The `finalityNote` records that "confirmed" must not be published until Phase 8 confirms the final status. The audit calls the project 13 BIP Amsterdam; the public copy fields use "International project, Amsterdam" and "Security Summer Camp" per the supporting spec, and do not carry the programme label.
- Applications line: "Research internship applications for summer 2027 have been submitted." No programme named, no submission number, no deadline, no decision date. Source: audit section 7, supporting spec section 4.4. Status: **Verified** as submitted (prior record); programmes never named on the portfolio.
- Writing note: "Writing lives in the projects", with links to the three project docs. No standalone publication is claimed. Source: information architecture section 5, supporting spec section 4.5. Status: **Verified** (no published paper, talk, or journal article was found).

### PROOF_STATS

Three entries: first place Web Junior; third overall Junior, 26th of 806, 26 flags solved; YesWeHack quarterly recognition. The v2 detail "representing Howest" is cut with the institution name. Source: audit section 10, supporting spec section 2.7. Status: **Verified**. Point totals appear only beside the screenshot, never as standalone claims.

### PROOF_GALLERY

Four image entries, unchanged from v2 (CSCB rankings, CSCB top 3 Junior, YesWeHack swag, YesWeHack recognition email). Retained as asset data for the lightbox component. The gallery is not republished as a gallery on any supporting page, per supporting spec section 2.7 item 3; About proves CSCB with the three-photograph story only. The recognition email screenshot is not published on a page, per supporting spec section 2.7 item 4. Source: audit section 10, supporting spec section 2.7. Status: **Verified** (images are his own screenshots).

### CSCB_STORY

Three photographs with figure notes, per supporting spec section 2.7: Web Junior first place; national board 26th of 806; solve breakdown 26 flags. The v2 second caption carried the **Self-reported** "only Pakistani at that rank" claim; it is removed and may return only if he confirms it against the scoreboard. The v2 first caption carried "representing Howest"; it is cut with the institution name. Source: audit section 10 and section 13 item 10, supporting spec section 2.7. Status: **Verified** (placements and flags).

### FAQS (6)

Questions kept verbatim from v2. Answers reviewed per supporting spec section 5.4:

| # | Question | Answer | Status |
|---|---|---|---|
| 1 | What kind of work are you looking for? | Kept as v2, approved availability wording | **Verified** |
| 2 | When are you available? | Kept as v2 | **Verified** (graduation June 2028) |
| 3 | Do you do bug bounty? | Changed: role, start date, categories only; handle and report counts removed | **Verified** (role and categories); counts stay only on About with the "by my own count" qualifier |
| 4 | What is The PenTrix? | Kept as v2 | **Verified** |
| 5 | Can I see your CV? | Changed: "from the contact details on this page" (the v2 "below" was wrong on the new layout) | **Verified** |
| 6 | How do I reach you? | Changed: "linked on this page and in the footer" (the v2 "in the navigation" is false in v3, the nav carries no social links) | **Verified** |

### CONTACT

Email mizazhaiderceh@gmail.com only; GitHub `https://github.com/mizazhaider-ceh`; LinkedIn `https://www.linkedin.com/in/muhammad-izaz-haider-091639314` (URL from the audit, contents not re-verified in the audit pass, prior check 2026-10-31); Formspree endpoint `https://formspree.io/f/xldjdnlr`; CV `/files/Muhammad_Izaz_Haider_CV.pdf` (sanitized v2 PDF, 8,011 bytes, 2 pages). Source: audit sections 1 and 12. Status: **Verified**.

### PS_STAGES, PS_REPO, PS_LIVE

Six stages summing to 18 chapters and 61 lessons (Foundations 1 and 5; PowerShell Basics 4 and 18; Core Skills 4 and 7; Admin Power 6 and 19; Security Power 2 and 8; Projects 1 and 4). Repo is `my-powershell-academy`, not `powershell-academy`, which returns 404. Live site is the Vercel URL. Source: audit section 5 item 2, case study spec section 2.2. Status: **Verified** as a live product (stage counts from the live site). Credit line "Created by Muhammad Izaz Haider" only.

### AGENT_DOMAINS

29 domain slugs, unchanged from v2, used by the AgentArsenal detail page filter. Source: v2 content model, workspace manifest. Status: **Supported by project documentation**.

### AI_TERMINAL_EXAMPLES

Three example prompts with commands and notes, unchanged from v2. Source: case study spec section 2.8. Status: **Supported by project documentation**. The safe execution note must appear beside the prompts on the page: before running any command, a multi-layer risk check runs, then confirmation is asked when needed, and nothing runs without permission.

### APK_STAGES

Six pipeline stages with checks and outputs, unchanged from v2. Source: case study spec section 2.4. Status: **Supported by project documentation**. Default mode is pure stdlib Python; deep mode adds apktool, jadx, and androguard.

### BUGHUNT_CATEGORIES

Six payload categories with example payloads, unchanged from v2. Source: case study spec section 2.3. Status: **Supported by project documentation**. Payloads are real payloads from the live site. The framing "Nothing here is executed" must appear beside the payload browser on the page.

### Search index (buildSearchIndex)

Type `SearchIndexEntry` carries exactly the fields the search component needs: `title`, `snippet`, `destination`, `category`. Categories: Project, Project section, Command, Concept, Page, Resource. Source: information architecture section 6, supporting spec section 8.

- The index is built by `buildSearchIndex()` from the same structured data the pages render from, never from a separate hardcoded list that can drift. Adding a project, group, or certification to `src/data.ts` makes it appear in search with no second edit.
- Projects: featured and archive, snippet is the one-line outcome, destination is the detail route where one exists, else the repo link, else `/projects` for entries with no public repo (VulnNotes). External repo destinations are marked "External link" by the search component.
- Commands: PowerShell stage entries plus the first line of each featured project strip, with the project or stage as the snippet.
- Concepts: expertise group names and held certification names, linking to `/expertise` plus the group anchor or `#certifications`.
- Pages: Home plus the five nav pages, with lead sentences from the page specs.
- Resources: CV, GitHub, LinkedIn, email, from `CONTACT`.
- Project-section entries (Problem, My role, Decisions, How it was built, Evidence, What I would improve, Links) come from the detail page content data in Phase 7, not from this file, because that content does not live in `src/data.ts`.
- Pending certifications and in-progress study are never indexed as held. No bounty programme name, report title, ID, endpoint, or reward amount appears in any snippet. No hardcoded star or repo count appears in any snippet.

## Compatibility retentions (kept only for the v2 typecheck)

These exports exist so the untouched v2 routes and components still compile while the other Phase 6 and 7 agents rewrite them. Each one is marked in `src/data.ts` with a comment. Phase 7 removes each export together with the v2 component that reads it. None of them carries v3 public copy.

| Export | Why it is retained | v3 content |
|---|---|---|
| `HERO.fact`, `HERO.availability`, `HERO.statusLine` | v2 Home reads all three | Empty strings, must stay empty |
| `TAGLINE` | v2 Tagline component joins it | Empty array |
| `EDUCATION` | v2 About renders it as a section | One institution-free entry only |
| `SKILL_GROUPS` | v2 Skills route renders it as tables | Derived from `EXPERTISE_GROUPS`, never edited by hand |
| `PROOF_STATS`, `PROOF_GALLERY`, `CSCB_STORY` | v2 Home and Proof routes read them | Kept with corrected copy, see sections above |

## Cut from v2, and why

| Cut | Why |
|---|---|
| Institution name in every public copy field (hero sentence, About paragraphs and facts, Education orgs, proof details, page metadata in About) | v3 public-copy rule, audit section 1. The institution is named in the audit only for verification (INTERNAL ONLY) and is not reproduced here or in `src/data.ts`. |
| The 269/269 figure and every test-pass count | Forbidden in every source. No test-pass count figure appears in `src/data.ts`. |
| Bounty amounts, program names, report titles, IDs, endpoints | Forbidden. Bounty work is described by category only. |
| YesWeHack handle MIHX01 | Identifier removed from public copy. The FAQ answer and proof stats carry the role, start date, and categories only. |
| 16.40/20 GPA in bios | Forbidden in bio lines. GPA appears only as the structured `GPA` field (16.74/20 weighted, 16.58/20 unweighted). |
| Skill percentages and the "45+ skills" count | No source supports them. Audit section 13 item 24. Expertise groups carry evidence, never percentages or counts. |
| "80 public repos" figure | Stale (81 live at audit date) and counts must be fetched live or omitted, so it is omitted. Audit section 13 item 1. |
| Certifications count, including any "53-plus" style figure | Only ten certifications are named anywhere; any count in the fifties has no source and contradicts the named list. Audit section 13 item 8. |
| Testimonials and the "Loved by Hackers" quotes | None exist in any source; the BugHunt quotes use unverified handles. Audit section 13 item 14. |
| Typewriter headline and skull hero copy | Rejected by the Monograph direction. The headline sets statically, broken by hand. |
| Tagline strip ("Understand it. Break it. Build it. Secure it.") | Removed from Home in the Phase 5 spec. |
| Proof preview stat cards on Home | Proof is redistributed into the case studies, About, and Research. |
| Ai-Terminal-X and AgentArsenal as featured projects | Demoted to archive entries with detail pages kept. Security-Books is promoted to featured entry 05. |
| "Only Pakistani at that rank" (CSCB caption) | Self-reported, not independently verified. Removed until he confirms it against the scoreboard. |
| "Started breaking things at age 14" | Self-reported and unverified. Not used. |
| 12/20 Communication Skills figure | On the transcript, but must not be published in portfolio copy or presented as his communication level. |
| BugHunt stat strip figures (336+ payloads, 24+ CTF tools, 12+ modules), "48% free", open-source claim | Contradicted by the live headline, meaningless beside the free claim, and unverified (no repo found). Headline figures only. |
| PowerShell Academy stale repo README counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) | Contradicted by the live site. Live site counts only. |
| VulnNotes 70 percent module weight in the outcome line | A course weight, not a project outcome. The course-project label and team split carry the facts. |
| Sub-Hunter, PortBlitz, Sentinel-Copilot-S2, The PenTrix 30 Days, pentrix-platform, KeyGen-X from the archive | Not in the task brief archive scope. Each needs a per-repo review before it appears in the archive, per home and projects spec section 3.9. Their repos are verified to exist; their presentation as archive entries is not yet reviewed. |
| C and C++ as an expertise claim | Evidenced (KeyGen-X, transcript 18/20) but KeyGen-X is not in the v3 archive, so it has no group home in this model. Recorded here rather than silently dropped. |
| Education section entries for earlier schooling | Naming them would name institutions. Supporting spec Appendix item 5. |
| "Representing Howest" in proof copy | Cut with the institution name. |
| Google AI Essentials and Advanced Python Scripting from the held list | Unverified as held. They sit only in `PENDING_CERTIFICATIONS`. |
| eJPT and eWPT from the held list | In progress, exams not taken. They sit only in `IN_PROGRESS_STUDY`. |

## Decisions and variances recorded

1. Hero compatibility fields are empty strings, not deleted, so `npx tsc --noEmit -p tsconfig.app.json` passes against the untouched v2 Home component. Phase 7 deletes them with the v2 Home rewrite.
2. `SKILL_GROUPS` is a derived view of `EXPERTISE_GROUPS`, not a second copy, so the two cannot drift.
3. BugHunt `counts` records all six live headline figures; the index outcome line uses only the three the task names. The other three are allowed by case study spec section 2.3 as headline figures.
4. PowerShell outcome omits 102 commands from the index line; `counts` carries it with the re-verification gate.
5. PenTrix-VulnLab outcome wording follows the home and projects spec; the case study spec wording differs by a few words. Phase 7 picks one wording for both surfaces.
6. Archive candidate filters are empty until verified, per the task rule (filters only where verified).
7. Scapy-based tools and LINA are stub entries with placeholder strips. They must not be rendered as code samples.
8. The search index is a derived builder function in `src/data.ts`, not a hardcoded list and not a new file. The supporting spec calls for a `src/search.ts` module in the build; that module should import `buildSearchIndex` and the `SearchIndexEntry` type from here rather than rebuilding the list.
9. Years are 2026 for every project, the year of verified public activity. Phase 7 confirms each build year from the repo record.
10. "Active Automation" and "Passive Automation" are display names from the task brief; repo names are `active-automation` and `passive-automation`.

## Open items Phase 8 must still verify

Numbered so the coordinator can track each one. Nothing here is filled by invention.

1. **Sole-builder claims for PowerShell Academy, BugHunt Arsenal, and APK Security Pipeline.** Verify each against its repo before publishing. If any contribution was shared, name it and change the role fact. Source: project selection section 4, case study spec section 1.5.
2. **PowerShell Academy 102 commands figure.** Re-verify on the live commands page before handover. If it cannot be re-verified there, drop the figure from the page and shorten the outcome line to chapters, lessons, and glossary terms only. Source: audit section 13 item 5, case study spec section 2.2.
3. **Security-Books star count.** Fetch live at build time, show it with its fetch date beside it, or omit the number entirely and state only "Most starred repo". Never hardcode. Source: audit section 13 item 2, case study spec section 2.5.
4. **Amsterdam finality.** Assigned 5 November 2026; the change window closed 11 November 2026. Confirm the final status before publishing "confirmed". Until then the status line stays "Assigned, planned, not performed". Source: audit section 13 item 20, supporting spec section 4.3 item 3.
5. **Work authorisation wording.** Unanswered. He must approve the exact wording first. This is his first screening question for a non-EU student, and the most important gap for recruiters. Source: audit section 14 item 1, design system open issue 7.
6. **Google AI Essentials confirmation.** Listed in the sanitized CV; no certificate found yet. He must confirm it with evidence before it is featured prominently. Source: audit section 14 item 3.
7. **Advanced Python Scripting issuer.** Unknown. He must confirm the issuer or drop the certification from the list. Source: audit section 14 item 2.
8. **BugHunt Arsenal stack and AI Security filter.** Verify the stack from the repo before publishing; the AI Security filter applies only if the AI dimension is verified from the repo. Until then BugHunt is Cybersecurity only. Source: case study spec section 2.3, home and projects spec Appendix C items 3 and 4.
9. **BugHunt Arsenal repo.** Confirm whether a repo exists. Until then there is no repo button and no open-source claim. Source: audit section 13 item 4, project selection section 4.
10. **APK Security Pipeline 64 tests figure.** Re-check the README at build time and use the versioned figure at build time, or omit the count. Source: audit section 13 item 17, case study spec section 2.4.
11. **AgentArsenal counts.** Re-check the 353 skills, 29 domains, 290 sub-skills, and 36 agents figures from the workspace copy before handover if the numbers appear on the detail page. They come from the manifest, not the GitHub API. Source: audit section 13 item 17, case study spec section 2.8.
12. **Build year per featured project.** Confirm each build year from the repo record and correct the 2026 year if it differs. Source: home and projects spec Appendix C item 2.
13. **Archive candidates per-repo review.** AI-CMD-X, Icarus-X, Intel-Scan, X-Recon, Active Automation, Passive Automation, Scapy-based tools, LINA, and Prime-PenTrix each need a per-repo review confirming a one-line problem and a working repo link before they are presented as more than compact entries. Scapy-based tools and LINA need that review before they are presented as more than names. Source: home and projects spec section 3.9 and Appendix C item 10.
14. **"What I would improve" final copy per project.** The improvements in the case study spec are proposed direction tied to recorded limitations. Final wording must be confirmed by him before publishing where it goes beyond a recorded limitation. Source: case study spec section "What this spec could not specify" item 7.
15. **VulnNotes guides re-read.** The VulnNotes evidence rests on the prior pass. Re-read the guides before writing the archive detail, and keep the "course project, no public repo" label. Source: audit section 13 item 16.

## Verification performed for this model

- `npx tsc --noEmit -p tsconfig.app.json` passed with no errors at the first check, when the other agents had not yet landed their edits. A later check, run while the other two agents were mid-rewrite, shows errors only in their in-flight files (the PageHero `kicker` prop removed by the components rewrite, the deleted Tagline component still imported by v2 Home, and a `withFix` prop on the PenTrix page). No error names `src/data.ts` or this file. Fixing those errors belongs to the agents that own those files; the coordinator runs the full build after all three agents land.
- `src/search.ts`, created by another agent during this task, imports AI_TERMINAL_EXAMPLES, APK_STAGES, BUGHUNT_CATEGORIES, CERTIFICATIONS, CONTACT, DETAIL_ROUTES, FEATURED_PROJECTS, MORE_PROJECTS, NAV_LINKS, PS_STAGES, SKILL_GROUPS, and the Project type from `./data`. All of those exports are present in this model with compatible shapes.
- Forbidden-string sweep of `src/data.ts` alone: no em dash, no institution name, no test-pass count figure, no bounty amount or program name or report title or ID or endpoint, no GPA figure in a bio line, no skill percentage, no testimonial, no hardcoded star or repo count. The word "Arsenal" appears only inside the project names BugHunt Arsenal and AgentArsenal.
- This file names forbidden values only in the "Cut from v2" table, to document their removal. No such value appears in `src/data.ts`.
