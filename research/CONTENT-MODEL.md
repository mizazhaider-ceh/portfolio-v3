# Portfolio v2 — Content Model (Complete Personal Data Discovery)

**Research date:** 2026-11-08. **Status:** research only. Nothing built, nothing published, nothing deployed.
**Subject:** Muhammad Izaz Haider (izaz), BSc Cybersecurity student at Howest, Belgium.
**Purpose:** the single source of truth for the v2 build agent. Every fact is marked VERIFIED (with its source) or UNVERIFIED. Never invent a fact to fill a gap.

## Sources checked fresh on 2026-11-08

| Source | How checked | Result |
|---|---|---|
| v1 research brief | Read in full | `~/workspace/portfolio-rebuild-brief.md` |
| v2 correction brief | Read in full | `~/workspace/portfolio-v2-brief.md` |
| Arsenal theme spec | Read in full | `~/workspace/user/files/arsenal-theme-spec.md` |
| Europass CV | `pdftotext` full extraction | `~/workspace/user/files/Muhammad_Izaz_Haider_-_Europass_-_CV.pdf` (2026-11-01 12:41, latest of 3 same-day versions) |
| Howest transcript 2025-26 | `pdftotext` full extraction | `~/workspace/user/files/Muhammad_Izaz_Haider_2025-26.pdf` (published 29 Jun 2026) |
| GitHub API (live) | `curl api.github.com`, user + 22 repos by name | All returned live data, see Part 1 |
| GitHub profile README | Raw fetch via API | Read in full |
| LinkedIn | `curl` to `linkedin.com/in/muhammad-izaz-haider-091639314` | **Still blocked, HTTP 999.** No fresh LinkedIn facts. Only the facts recorded in the v1 brief (from the parent agent's live check 2026-10-31) may be used. |
| Live portfolio | `curl -L https://mizazhaider-ceh.dev` + meta/bundle-hash check | HTTP 200, redirects to www. **Bundle hashes identical to v1 research** (`index-Dw0V7zJo.js`, `three-vendor-BtuZSLR8.js`, etc.). No changes since v1. Meta description still carries the unverified cert count. |
| PowerShell Academy live | `curl` home + `/commands`, plus `browser.open` read | HTTP 200. Counts confirmed, see Part 1 |
| BugHunt Arsenal live | `curl` + `browser.open` read (crawled 2026-11-08 07:36 UTC) | HTTP 200. Counts confirmed, with corrections to v1, see Part 1 |
| Workspace: `~/workspace/apk-security-pipeline/` | README + `__init__.py` | v2.1.0 confirmed |
| Workspace: `~/workspace/agent-arsenal/` | README + `arsenal-manifest.json` + `skills/` listing | 353 skills / 29 domains confirmed |
| Workspace: `~/workspace/90days-cyber/` | README | Plan + interactive site confirmed |
| Workspace: `~/workspace/pentrix-vulnlab/` | README + `package.json` | 201 challenges / 29 modules confirmed |
| Workspace: `~/workspace/powershell-academy/` | Folder listing | Local working copy exists; repo README counts are stale, live site is authoritative |
| v1 source data | Read in full | `~/workspace/portfolio-rebuild/src/data.ts` (392 lines) |
| Availability wording | Grep across `~/workspace/job-hunter/`, `~/workspace/career/` | Found his own approved wording on Barco forms, see Part 3 |

## Hard rules (never break, in this file and in the build)

- Never reveal bug bounty program names, report titles, IDs, endpoints, or reward amounts. Categories only (authentication, authorization/IDOR, injection, business logic, information disclosure, cryptography, unrestricted file upload, rate limiting).
- Never use the test-pass count figure that appears on the live site and in the CV's Damno bullet. Say only: "Fixed 2 critical vulnerabilities: remote code execution and SQL injection" and "Built GitLab CI/CD security pipelines".
- Never write the 16.40/20 semester GPA in bios or education descriptions. Where a form requires a GPA, use 16.74/20 (credit-weighted) or 16.58/20 (unweighted) only.
- Never use "53+ certifications" or any cert count. List named certifications only.
- Never disclose PenTrix flag storage. Say only: flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags.
- Never give a mechanism detail for the unrestricted file upload finding. Keep "Unrestricted File Upload (CWE-434)" and nothing more.
- birthDate is 2007-01-28. The live site's JSON-LD year 2006 is wrong.
- Never invent experience, grades, skills, metrics, or testimonials. No skill percentages. No invented metrics.
- No Howest/university mention in product or store contexts (Sudo The Power). The degree itself is fine on the portfolio.
- Do not name live applications (CISPA, EPFL, ETH, Barco, Odoo, Octa1ne, or any employer) on the portfolio. The hiring line stays generic.
- Do not publish his full home street address on the public portfolio. City and country only.

---

# PART 1 — VERIFIED FACT SHEET

## 1.1 Identity

| Fact | Status | Source |
|---|---|---|
| Name: Muhammad Izaz Haider. Handle: mizazhaider-ceh / @mizazhaider-ceh | VERIFIED | CV, GitHub API (`name`, `login`), live portfolio |
| Born 28 Jan 2007, Gujrat, Pakistan. Pakistani citizen. Age 19 (turns 20 Jan 2027) | VERIFIED | CV (address block lists Gujrat origin in transcript), transcript (Gujrat address), memory (birth date). Birth year 2007 confirmed against the live site's wrong JSON-LD year 2006 |
| Lives in Sijsele-Damme, Belgium (Gentse Steenweg 132, 8340) | VERIFIED (address); SPELLING CORRECTED | CV spells the town "Sijsile" (typo). Correct spelling is Sijsele. Portfolio shows city only, never the street address |
| Email: mizazhaiderceh@gmail.com | VERIFIED | CV, live portfolio, GitHub README |
| Phone: +32 466298641 | VERIFIED | CV |
| Howest email: Muhammad.Izaz.HAIDER@student.howest.be | VERIFIED | v1 brief (parent memory); do not publish on the public portfolio unless he asks; use the Gmail address |
| Portfolio: https://mizazhaider-ceh.dev (307-redirects to https://www.mizazhaider-ceh.dev/) | VERIFIED | Live fetch 2026-11-08, HTTP 200 |
| GitHub: https://github.com/mizazhaider-ceh | VERIFIED | GitHub API |
| LinkedIn: https://www.linkedin.com/in/muhammad-izaz-haider-091639314 | VERIFIED (URL only; profile contents NOT re-verified) | v1 brief; live fetch blocked HTTP 999 on 2026-11-08 |
| Tagline (his own, live site): "Pentester | AI & Security Engineer | DevSecOps" | VERIFIED | Live portfolio title/meta |
| LinkedIn headline: "AI x Offensive Security | Penetration Tester | Bug Hunter | BSc Cybersecurity @Howest Belgium" | VERIFIED 2026-10-31, NOT re-checked (LinkedIn blocked) | Parent agent live check 2026-10-31, recorded in v1 brief |
| YesWeHack handle: MIHX01 | VERIFIED | Live portfolio proof section; GitHub README does not state it, the site does |
| Languages: Urdu + Punjabi (mother tongues), English C1 (all skills), Dutch A1 (all skills). No French | VERIFIED | CV language table. Note: an older note said the CV still showed Dutch A2; the current CV file (2026-11-01) already says A1 throughout, so this is now consistent |

## 1.2 Education

| Fact | Status | Source |
|---|---|---|
| BSc Cybersecurity, Howest University of Applied Sciences, Bruges, Belgium. Started Sep 2025, expected graduation Jun 2028, 180 ECTS | VERIFIED | CV + transcript |
| First year: 60/60 credits, first attempt, no retakes | VERIFIED | CV + transcript (all 13 units passed EK1; Data Privacy and IT Law deliberated, passed without credit certificate) |
| Weighted average 16.74/20; unweighted 16.58/20 | VERIFIED (recomputed from transcript) | Transcript: graded credits sum 954 / 57 = 16.74; unweighted 199 / 12 = 16.58. S1 16.40/20 (492/30) and S2 17.11/20 (462/27) recomputed and confirmed |
| 18/20: Programming Fundamentals, Computer Architectures & Operating Systems, Web Backend | VERIFIED | Transcript |
| 17/20: Cyber Security Essentials, Computer Networks, Web Pentesting Fundamentals, Linux for Ethical Hackers, Capture the Flag, Scripting and Code Analysis | VERIFIED | Transcript |
| 16/20: Databases Fundamentals. 15/20: Web Frontend. 12/20: Communication Skills. Data Privacy and IT Law: D (deliberated, passed) | VERIFIED | Transcript |
| Year 2 (in progress): Practical Reverse Engineering & Malware Analysis (3 SP), Digital Forensics Analysis (6 SP), Network and System Pentesting (6 SP), Web Security and Honeypot (6 SP), Linux Server Security (6 SP), Windows Server Security (6 SP) | VERIFIED (course list as stated on live portfolio; enrolment in progress, not graded yet) | Live portfolio; DF Lab 06 and Mobile Security Lab 5/6 in progress per memory |
| ICS (Intermediate in Computer Science), Dawn Science College, Barnala, Pakistan, 2022-2024, Grade A+ | VERIFIED | CV (education section; the two earlier same-day CV drafts omitted this section, the current file includes it) |
| Matriculation (Computer Science), Govt. High School for Boys, Hazara Mughlan, Pakistan, 2020-2022 | VERIFIED | Live portfolio (Current Focus section). NOT in the Europass CV; keep only as stated on his own site |

## 1.3 Work

| Fact | Status | Source |
|---|---|---|
| Bug Bounty Hunter, YesWeHack, part-time, Feb 2026 - present, remote. Responsible disclosure on live programmes. Categories only: authentication, authorization/IDOR, injection, business logic, information disclosure, cryptography, unrestricted file upload, rate limiting. Quarterly recognition + swag for performance | VERIFIED | CV + live portfolio + proof images (yeswehack-email.png, yeswehack-swag.png) |
| 35 reports submitted total, 3 rewarded | NOT INDEPENDENTLY VERIFIED — his own count, from his screenshots, recorded in parent memory | v1 brief / memory. May be used as "his stated count" only; do not present as third-party verified |
| Junior DevSecOps & AI Security Engineer, Damno Solutions, part-time, Nov 2025 - Jun 2026, remote. ROLE ENDED, always past tense | VERIFIED | CV |
| Damno: delivered 13 vulnerabilities against a brief of 3 or more; fixed 2 critical (remote code execution and SQL injection); built GitLab CI/CD security pipelines; reviewed code of the CBAM codebase; wrote 1800+ lines of security documentation; worked 20h/week alongside full-time study | VERIFIED | CV (bullets as written, minus the forbidden test-pass count figure, which must not be carried over) |
| Founder, The PenTrix (self-founded initiative): tutorials, tools, write-ups, roadmaps for the next generation of security researchers | VERIFIED | GitHub README + live portfolio + repo The-PenTrix-30-Days-of-Practical-Pentesting |

## 1.4 Achievements

| Fact | Status | Source |
|---|---|---|
| CSCB 2026 (Cyber Security Challenge Belgium): #1 Web Junior, #3 overall Junior, #3 Howestian, #26/806 nationally, 26 flags solved. Represented Howest | VERIFIED | CV (Honours) + live portfolio + 5 scoreboard screenshots (see Part 4). Point totals (1669 Web, 6576/6701 overall) appear on the screenshots; use only beside the screenshot, never as standalone claims |
| Only Pakistani on the scoreboard at that rank | VERIFIED (his claim, consistent with the screenshots) | v1 brief / memory |
| YesWeHack quarterly recognition for bug bounty performance | VERIFIED | CV (Honours) + recognition email + swag photo |
| International Project: 13 BIP Amsterdam, Security Summer Camp, 28 Jun - 2 Jul 2027, Hogeschool van Amsterdam, 10 ECTS. Group of 6: izaz, Muhammad Muzammil Khan, Ben Patrick, Hamza Shabbir, Kobe Vanderschueren, Yana Vercruysse. Assigned 2026-11-05, final 11 Nov 2026 | VERIFIED | Parent memory (assignment record 2026-11-05). At research time (8 Nov) the change window was still open until 11 Nov; present as "assigned" with dates, not as already final |
| Research applications submitted: CISPA CSR (#152, marked ready), Summer@EPFL, ETH Zurich SSRF. Decisions by end Feb 2027 | VERIFIED (submitted) | Parent memory. DO NOT name these on the portfolio; the hiring line stays generic |

## 1.5 Certifications

Held (named only, no counts):

| Certification | Issuer | Status | Source |
|---|---|---|---|
| Certified Network Security Practitioner (CNSP), with Merit | The SecOps Group | VERIFIED held | CV + LinkedIn check 2026-10-31 |
| Certified Ethical Hacking v12 (CEH) | LearnKartS | VERIFIED held | CV |
| CompTIA PenTest+ Specialization | Packt | VERIFIED held | CV |
| AI Agents and Agentic AI | Vanderbilt University | VERIFIED held | CV |
| Application Security for Developers and DevOps Professionals | IBM | VERIFIED held | CV + LinkedIn check 2026-10-31 |
| Web Application Security Testing with OWASP ZAP | Coursera | VERIFIED held | Live portfolio + LinkedIn check 2026-10-31 |
| Linux 101 | TCM Security | VERIFIED held | Live portfolio + LinkedIn check 2026-10-31 |
| Web App Security Testing with Google Hacking | CodeRed | VERIFIED held | Live portfolio + LinkedIn check 2026-10-31 |
| Google AI Essentials | Google | SITE-ONLY (appears only on his live portfolio; not in CV or the LinkedIn-verified list) | Live portfolio. Keep, but flag to izaz to confirm |
| Advanced Python Scripting | (issuer not stated on site) | SITE-ONLY (appears only on his live portfolio; issuer unstated) | Live portfolio. Keep without an issuer, or drop if he cannot name one |

In progress (never list as held):

| Certification | Status | Source |
|---|---|---|
| eJPT (INE Security) | IN PROGRESS — course studied, exam not taken | Memory (2026-11-08: studied via INE, exams coming, does not hold either) |
| eWPT (INE Security) | IN PROGRESS — course studied, exam not taken | Same as above |

## 1.6 Projects (GitHub API, live 2026-11-08)

Account: `mizazhaider-ceh`, 80 public repos, 54 followers, 5 following, created 2025-01-19, bio "Penetration Tester | Web · Network · System | AI × Offensive Security | Founder @ The PenTrix | BSc Cybersecurity @ Howest", location Belgium, blog https://www.mizazhaider-ceh.dev/. All star counts below are live API values from 2026-11-08. Stars go stale; the build should fetch them live from the GitHub API or omit them.

### Flagship

| Project | Stars / forks | Updated | Language | Description (verified) | Link |
|---|---|---|---|---|---|
| PenTrix-VulnLab | 1 / 1 | 2026-10-20 | JavaScript | Deliberately vulnerable web app for learning web pentesting: 201 challenges across 29 modules, 3 kill-chain scenarios, 3 career paths with verifiable certificates. Express + SQLite. Counts confirmed in local repo README and by drift tests (`tests/drift.test.js` fails if the count drifts). `package.json` says "DO NOT deploy publicly", so link the repo only, never a live deployment. Flag rule: flags are randomly generated per install at first boot, no flag literal exists in any tracked file | https://github.com/mizazhaider-ceh/PenTrix-VulnLab |
| The PenTrix (initiative) | — (initiative, not one repo) | — | — | Tutorials, tools, write-ups, roadmaps. Includes PenTrix-VulnLab, 30 Days of Practical Pentesting, pentrix-platform, Security-Books, 90DaysOfCyberSecurity, pentrix-atlas, and small Python scanners | https://github.com/mizazhaider-ceh/The-PenTrix-30-Days-of-Practical-Pentesting |
| The-PenTrix-30-Days-of-Practical-Pentesting | 10 / 0 | 2026-10-23 | (none listed) | Comprehensive cybersecurity initiative teaching practical pentesting | Same link as above |
| Security-Books | 138 / 42 | 2026-11-07 | (none listed) | The ultimate cybersecurity library: 160+ curated books, guides, resources. His most-starred repo. Most recent activity of all his repos | https://github.com/mizazhaider-ceh/Security-Books |
| pentrix-platform | 0 / 0 | 2026-10-23 | TypeScript | The PenTrix learning platform (v1): 192 verified cybersecurity resources, sequenced roadmaps. Next.js | https://github.com/mizazhaider-ceh/pentrix-platform |
| 90DaysOfCyberSecurity | 0 / 0 | 2026-10-23 | (none listed) | A 90-day, hands-on cybersecurity study plan: from zero to job-ready fundamentals, 1-2 hours a day, every tool free. Interactive site: https://mizazhaider-ceh.github.io/90DaysOfCyberSecurity/ | https://github.com/mizazhaider-ceh/90DaysOfCyberSecurity |
| VulnNotes | NO PUBLIC REPO (API 404, confirmed 2026-11-08) | — | — | Deliberately vulnerable notes app, Mobile Security course project, 70% of the module. Group23 with Muhammad Muzammil Khan. Izaz leads the build; Muzammil owns Flask API (incl. IDOR) and Frida scripts. Demo is individual. Stack: Android (Compose, ViewModels, Room, Retrofit), Flask REST API, Frida (PIN bypass), unsafe crypto vs secure storage, contact exfiltrator, root detection + Magisk bypass. Describe as a course project, no repo link | No link |
| PowerShell Academy | 0 / 0 (repo `my-powershell-academy`) | 2026-11-04 | TypeScript | Free PowerShell learning, no account. LIVE SITE (authoritative): 18 chapters, 61 lessons, 102 commands, 48 glossary terms, 6 stages (Foundations, PowerShell Basics, Core Skills, Admin Power, Security Power, Projects). Credit line: "Created by Muhammad Izaz Haider" only. Repo README counts are STALE (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) — use the live site counts | Live: https://powershell-academy-seven.vercel.app/ · Repo: https://github.com/mizazhaider-ceh/my-powershell-academy |
| BugHunt Arsenal | (no repo; Vercel app) | — | — | Free browser-based web pentesting and security research platform. LIVE SITE (verified 2026-11-08 07:36 UTC): 800+ payloads, 21+ categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules. Chain Builder, Metadata Analyzer, Encoder/Decoder, HTTP Request Builder, OWASP Top 10 methodology. No install, no sign-up, no paywalls. CORRECTION to v1: v1 said "60+ tools"; the live site now says 150+ tools (60+ is the CTF-tools subset). The site's own stat strip shows conflicting smaller numbers (350+ payloads, 25+ CTF tools); use the headline figures. The site's "Loved by Hackers" testimonials use unverified handles — DO NOT reuse them | https://bughunt-arsenal.vercel.app/ |
| APK Security Pipeline | 0 / 0 | 2026-10-28 | Python | Pure Python, v2.1.0, Python 3.10+, zero dependencies, 64 tests passing. One command security-checks an Android app and explains every step: static manifest, strings and code rules, Frida dynamic traces, scoring, HTML + JSON reports, baseline and CI modes. Real runs: clean sample 100/100 grade A, 0 findings; vulnerable sample 0/100 grade F, 24 findings | https://github.com/mizazhaider-ceh/apk-security-pipeline |
| AgentArsenal | 0 / 0 | 2026-10-28 | Python | Unified skills repository: 353 skills across 29 domains, 290 sub-skills, 36 agents, 25 brains, 15 playbooks, 9 workflows (manifest generated 2026-10-27). Per-skill versioning, 14-check CI harness, 0-100 quality scorer, one-command installer. 29 domain folders confirmed in workspace copy | https://github.com/mizazhaider-ceh/AgentArsenal |

### Tools (all live API values 2026-11-08)

| Project | Stars / forks | Updated | Language | Description (verified) | Link |
|---|---|---|---|---|---|
| Ai-Terminal-X | 38 / 10 | 2026-10-02 | Python | AI-powered Linux terminal assistant: natural language to executable commands via Google Gemini AI, with safe-execution checks. His most-starred tool | https://github.com/mizazhaider-ceh/Ai-Terminal-X |
| Intel-Scan | 7 / 0 | 2026-10-02 | Python | OSINT framework: CLI + web GUI, DNS, WHOIS, subdomain enumeration | https://github.com/mizazhaider-ceh/Intel-Scan |
| Ai-CMD-X | 6 / 1 | 2026-10-02 | Python | Plain English to real Windows commands | https://github.com/mizazhaider-ceh/Ai-CMD-X |
| passive-automation | 5 / 0 | 2026-10-02 | Shell | Bash-powered Nmap automation for passive recon, v3.1. His first Bash scripting project | https://github.com/mizazhaider-ceh/passive-automation |
| X-Recon | 4 / 2 | 2026-10-02 | Python | AI-powered reconnaissance toolkit with web dashboard (Llama 3.3, real-time WebSocket terminal), v3.0 | https://github.com/mizazhaider-ceh/X-Recon |
| active-automation | 3 / 0 | 2026-10-23 | Shell | Bash-powered Nmap automation for active recon, customizable scans | https://github.com/mizazhaider-ceh/active-automation |
| KeyGen-X | 2 / 0 | 2026-10-23 | C++ | Secure key generation and validation, cross-platform (C++ + Python) | https://github.com/mizazhaider-ceh/KeyGen-X |
| PortBlitz | 1 / 0 | 2026-10-02 | Python | Async port scanner, CVE correlation, interactive TUI, 500+ concurrent connections | https://github.com/mizazhaider-ceh/PortBlitz |
| icarus-x | 1 / 0 | 2026-10-10 | Python | Advanced modular AI-powered penetration testing framework with unified tool integration: recon, exploitation, post-exploitation in one interface. Was on the v1 live site's project grid | https://github.com/mizazhaider-ceh/icarus-x |
| Prime-PenTrix | 0 / 0 | 2026-10-02 | TypeScript | AI cybersecurity learning platform: Hybrid RAG (pgvector + BM25), multi-provider LLM streaming (Cerebras/Gemini), spaced-repetition AI quizzes, 24+ tools. Next.js 16, TypeScript, FastAPI, Docker | https://github.com/mizazhaider-ceh/Prime-PenTrix |
| Sentinel-Copilot-S2 | 0 / 1 | 2026-10-02 | JavaScript | AI SecOps copilot, 11,707 lines from scratch, Hybrid RAG, 46 modular files, 24+ tools | https://github.com/mizazhaider-ceh/Sentinel-Copilot-S2 |
| Sub-Hunter | 0 / 0 | 2026-10-02 | HTML | Subdomain enumeration: takeover detection, VHost discovery, JS parsing, cloud detection, v5.0 | https://github.com/mizazhaider-ceh/Sub-Hunter |
| Prime-PortFolio | 0 / 0 | 2026-10-23 | TypeScript | Current portfolio source: React + TypeScript + Vite, Tailwind, Vercel. The v2 rebuild replaces this site; keep the repo, do not push or deploy until he approves | https://github.com/mizazhaider-ceh/Prime-PortFolio |

### Brand

| Item | Status | Source |
|---|---|---|
| Sudo The Power (his brand/store) | VERIFIED as a brand; product details NOT for the portfolio | `~/workspace/user/files/Sudo_The_Power.md` (15-product roadmap, working price noted there). Portfolio may name it as a brand only. No store link, no prices, no product details, no Howest mention |

## 1.7 Skills (with evidence per skill)

Evidence rule: every skill is paired with where he used it. No percentages, no self-assessed levels.

| Skill | Evidence | Status | Source |
|---|---|---|---|
| Penetration testing | CSCB #1 Web Junior; PenTrix-VulnLab | VERIFIED | CV, transcript (Web Pentesting Fundamentals 17/20) |
| Web application security | YesWeHack bounty hunting since Feb 2026 | VERIFIED | CV |
| Burp Suite | Daily in bounty hunting and PenTrix-VulnLab; lab README teaches Burp-first workflow | VERIFIED | CV, PenTrix README |
| OWASP ZAP | Certified (Coursera); used in web testing | VERIFIED | CV (skill list) + cert list |
| Vulnerability assessment | 13 vulnerabilities delivered at Damno | VERIFIED | CV |
| API security | JWT work (pentrix-jwt); VulnNotes IDOR | VERIFIED | CV (skill list), VulnNotes guide |
| Mobile security | Static analysis, dynamic analysis with Frida, reverse engineering (Mobile Security labs; APK Security Pipeline) | VERIFIED | CV (skill list), course work in progress |
| Digital forensics | Course labs; ext filesystem recovery (DF Labs 03-05 complete) | VERIFIED | CV (skill list), memory (Lab 03/04/05 complete) |
| Malware analysis / reverse engineering | Course work in progress (Year 2: Practical Reverse Engineering & Malware Analysis) | VERIFIED as in-progress study, not as completed expertise | Live portfolio Year 2 list |
| Linux | Daily driver; server security labs; Linux for Ethical Hackers 17/20 | VERIFIED | CV, transcript |
| Windows Server security | Active Directory labs on Server 2025 (WSS Lab 2 done) | VERIFIED | Memory (WSS Lab 2, 2026-11-07) |
| Network security | Nmap and recon tooling; Computer Networks 17/20 | VERIFIED | CV, transcript |
| Secure code review | CBAM codebase review at Damno | VERIFIED | CV |
| CI/CD security | GitLab pipelines at Damno | VERIFIED | CV |
| Cryptography | Certified (CNSP covers it); applied in findings (category only) | VERIFIED | CV (skill list) |
| Python | Ai-Terminal-X, X-Recon, APK Security Pipeline | VERIFIED | GitHub API (language fields) |
| Bash scripting | active-automation, passive-automation | VERIFIED | GitHub API (Shell) |
| JavaScript / TypeScript | BugHunt Arsenal, Prime-PenTrix, PowerShell Academy, PenTrix-VulnLab | VERIFIED | GitHub API (language fields) |
| SQL | SQLite in PenTrix-VulnLab; Databases Fundamentals 16/20 | VERIFIED | CV, transcript |
| Git and GitHub | 80 public repos | VERIFIED | GitHub API |
| LLM integration and RAG | Prime-PenTrix (Hybrid RAG), Sentinel-Copilot-S2 | VERIFIED | GitHub API descriptions |
| Prompt engineering | Ai-Terminal-X (Gemini); AgentArsenal | VERIFIED | GitHub API descriptions |
| Frida (dynamic analysis) | APK Security Pipeline dynamic traces; Mobile Security Lab 5/6 | VERIFIED | APK README, memory |
| PowerShell | PowerShell Academy (18 chapters, 61 lessons, 102 commands); WSS Lab 2 | VERIFIED | Live site, memory |
| C / C++ | KeyGen-X (C++); Computer Architectures & OS 18/20 | VERIFIED | GitHub API, transcript |
| Testing / QA | APK Security Pipeline (64 tests passing); AgentArsenal 14-check CI harness | VERIFIED | APK README, AgentArsenal README |
| DevSecOps | Damno role (CI/CD security pipelines, 20h/week) | VERIFIED | CV |

Soft skills (his own words on the live site; keep as plain words, no emoji, no claims of proof): problem solving, team leadership, communication, critical thinking, adaptability, time management. Status: VERIFIED as his stated strengths only, not independently evidenced.

## 1.8 Contact and availability

| Fact | Status | Source |
|---|---|---|
| Email mizazhaiderceh@gmail.com; GitHub and LinkedIn links (see 1.1) | VERIFIED | CV, live site |
| Contact form: Formspree `https://formspree.io/f/xldjdnlr` | VERIFIED (live site) | v1 brief; re-confirmed present in the live site's bundle set (form endpoint unchanged since v1) |
| Available for: offensive security internships, junior pentesting roles, research placements, bug bounty collabs | VERIFIED (his stated openness) | GitHub README "Open to" section; CV "looking for a research fellowship" (application-specific wording, do not copy verbatim to the portfolio) |
| Availability windows: Feb-Apr 2027 and Jul-Sep 2027, including exam periods; on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium | VERIFIED (his own wording, already used on applications) | `~/workspace/job-hunter/ACTION-SHEET-BLOCKED-APPLICATIONS.md` — his approved Barco form text. See Part 3 decision |
| Work authorisation | UNVERIFIED — not stated anywhere; do not state it unless he approves the wording | Gap, see Part 4 |
| Location for work: Belgium (Sijsele-Damme), remote from Belgium OK | VERIFIED | CV address, live site, application forms |

## 1.9 What changed since v1 research (2026-11-08, same day, hours later)

- **Nothing changed on the live portfolio.** Same bundle hashes, same meta description (still carries the unverified cert count), same title. All MUST FIX items from v1 are still live.
- **GitHub stars unchanged** for every repo re-checked (Security-Books 138, Ai-Terminal-X 38, 30-Days 10, Intel-Scan 7, Ai-CMD-X 6, X-Recon 4, PortBlitz 1, PenTrix-VulnLab 1, KeyGen-X 2). Newly recorded: active-automation 3 stars, passive-automation 5 stars, icarus-x 1 star (v1 did not record these).
- **BugHunt Arsenal counts corrected:** live site says 150+ tools (v1 said 60+ tools; 60+ is the CTF-tools subset), plus 50+ free labs and 21+ categories, 14+ modules. The v1 data.ts BugHunt line ("60+ tools") must be corrected to 150+ tools.
- **PowerShell Academy counts fully confirmed live:** 18 chapters, 61 lessons, 102 commands, 48 glossary terms, 6 stages. The v1 data.ts line is correct but should add "102 commands". The repo README counts are stale and must not be used.
- **PowerShell Academy repo name confirmed fresh:** `my-powershell-academy` exists (TypeScript, updated 2026-11-04); `powershell-academy` returns GitHub API 404. Decided, see Part 3.
- **VulnNotes confirmed to have no public repo** (API 404, fresh).
- **CV version settled:** three same-day PDFs exist; the Europass CV (2026-11-01 12:41) is the latest and most complete (the 12:16 draft lacks the About Me section, phone, and ICS entry; the 12:30 draft differs only in address formatting). Link only the Europass CV file.
- **Transcript grades recomputed and confirmed:** weighted 16.74, unweighted 16.58, S1 16.40, S2 17.11. The current CV already says Dutch A1 (an older note about A2 no longer applies).
- **New assets inventoried:** APK pipeline SVGs + report preview, AgentArsenal architecture SVGs, 90 Days roadmap SVG, profile photo (see Part 4).
- **New warnings:** PenTrix-VulnLab `package.json` says "DO NOT deploy publicly" (link repo only). BugHunt's on-site testimonials use unverified handles (do not reuse). The CV itself contains the forbidden reward-amount, test-count, and mechanism details in its work bullets — the build agent must use the sanitized bullets in this model, never quote the CV bullets verbatim.

---

# PART 2 — PER-PAGE CONTENT MODEL (multi-page portfolio)

Design system: Arsenal, full. Light (ivory #FAF9F5) default, fully functional dark theme, seamless switching. Tokens implemented once in the theming layer and reused via shared components (per the universal Arsenal spec in the v2 brief), NOT as inline styles per section. Sora 800 headings, Inter body. Periwinkle #5A45D6, lime #B8F34A, lavender marker #C7B8F5, lilac #EEE8FF. No purple-to-blue gradients, no glows, no emoji icons, no em dashes. Stack: multi-page, multi-technology (keep React + TypeScript + Vite + Tailwind on Vercel in repo `mizazhaider-ceh/Prime-PortFolio` unless the build agent justifies a change to izaz; the v1 brief recommends keeping it for the deploy pipeline). No three.js particle background. No typewriter headline. No skill percentages. No invented metrics.

Global elements (every page): nav (name + "Penetration Tester | AI x Offensive Security", links Home, About, Projects, Experience, Skills, Certifications, Proof, Contact; GitHub + LinkedIn icons; one CTA "Get in touch"), footer ("© 2026 Muhammad Izaz Haider", "Created by Muhammad Izaz Haider", nav links), CV download link, SEO meta + OG + JSON-LD (birthDate "2007-01-28"), skip-to-content link, visible focus rings, alt text on every image, no horizontal overflow at 390px.

Copy source: the copy blocks below are taken from the verified v1 data (`~/workspace/portfolio-rebuild/src/data.ts`, cross-checked against this research) with the two corrections noted in Part 1.9 (BugHunt 150+ tools; PowerShell Academy + 102 commands). Where a block says `{{...}}`, it is a placeholder the build agent must NOT fill by invention.

## 2.1 Home (`/`)

Purpose: one screen that gets a recruiter to contact him. One offer (him), one audience (recruiter or research lead), one primary action ("Get in touch").

- **H1 (fixed, no typewriter):** "Muhammad Izaz Haider"
- **One sentence:** "Second year BSc Cybersecurity student at Howest who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had."
- **Hard fact on the first screen:** "CSCB 2026: #1 Web Junior · #3 overall Junior · #26 of 806"
- **Availability line:** "Available for internships and junior roles: Feb-Apr 2027 and Jul-Sep 2027"
- **Status line (plain, default):** "status: available for internships · feb-apr 2027 · jul-sep 2027" (see Part 3 for the whoami decision)
- **Actions (two only):** "Get in touch" (primary, links to Contact) + "See my work" (secondary, links to Projects)
- **Hero visual:** a real PenTrix-VulnLab challenge built in code (the moment), NOT a skull, NOT a stock photo. Suggested code strip (verified, from data.ts): `GET /api/orders/1042 HTTP/1.1` / `Host: lab.pentrix.local`
- **Tagline reveal section (one large-type section, two lines, his loop):** "Understand it. Break it. Build it. Secure it."
- **Below the fold, in order:** Proof strip (3 proof stats, see 2.7), Featured projects (6 cards, see 2.3), Current focus (3 cards: Bug bounty @ YesWeHack; BSc Cybersecurity @ Howest, Year 2 in progress; Founder, The PenTrix), Final CTA ("Get in touch")
- **Links:** all project cards link to their detail pages (2.9) or live sites/repos; proof stats link to Proof page
- **Images:** none on the hero except the code-built challenge visual; profile photo optional in a small About teaser (use `profile.png`, see Part 4)

## 2.2 About (`/about`)

- **Heading:** "About" / "I break things for a living" (his voice, keep)
- **Paragraph 1:** "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had."
- **Paragraph 2:** "I study BSc Cybersecurity at Howest in Belgium. My first year closed at 60 out of 60 credits on the first attempt, and I placed #1 Web Junior at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write ups."
- **Paragraph 3:** "Now I am going deep on the defensive side too: digital forensics, reverse engineering, and malware analysis. The goal is the same on both sides: understand the system, find the weakness, and make it stronger."
- **Fact grid (6 cells):** Degree: BSc Cybersecurity, Howest · Year: Second year, graduating Jun 2028 · Location: Sijsele-Damme, Belgium · First year: 60/60 credits, first attempt · Bug bounty: YesWeHack, since Feb 2026 · Founder: The PenTrix
- **Grades (his public wording, from GitHub README + transcript):** "18/20 in Programming, Computer Architecture & OS and Web Backend · 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers and Networks." No GPA anywhere on this page.
- **Now / next:** Year 2 defence arc (Digital Forensics, Mobile Security, Linux & Windows Server Security); International Project: 13 BIP Amsterdam, Security Summer Camp, 28 Jun - 2 Jul 2027, Hogeschool van Amsterdam, 10 ECTS; open to internships, junior roles, and research placements.
- **Do NOT include:** "started breaking things at age 14" (his own site claim, not independently verified; keep only if he confirms, as his voice, never as a verified fact). No bounty amounts, no test-pass counts, no cert counts.
- **Images:** `profile.png` (800x800 portrait). Optional: `user-profile-reference.jpg` is only 150x150, too small for a page photo; use `profile.png`.

## 2.3 Projects (`/projects`)

Featured 6 (in this order, flagship first), then "More projects" grid, then "View all projects on GitHub" link (https://github.com/mizazhaider-ceh?tab=repositories). Each card: name (must fit, no truncation), one-line outcome, tech tags, link (live site or GitHub), and a code strip (a real command, payload, or verified feature list). Star counts: fetch live from the GitHub API or omit; never hardcode stale stars.

1. **PenTrix-VulnLab** — "Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates." Tags: Express, SQLite, Web pentesting. Link: https://github.com/mizazhaider-ceh/PenTrix-VulnLab (repo only, never a live deployment). Strip: `GET /api/orders/1042 HTTP/1.1` / `Host: lab.pentrix.local`. Flag line (only this wording): "Flags are randomly generated per install at first boot on the student's machine; no flag literal exists in any tracked file."
2. **PowerShell Academy** — "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages, from foundations to security projects." Tags: TypeScript, Next.js, Vercel. Link: https://powershell-academy-seven.vercel.app/ (live site primary; repo https://github.com/mizazhaider-ceh/my-powershell-academy secondary). Strip: `Get-Command *-Process` / `# verb-noun: find the cmdlet, then read its help`
3. **BugHunt Arsenal** — "Free browser based web pentesting and security research platform: 800+ payloads across 21+ categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules. No install, no sign up." Tags: Web pentesting, Payloads, Browser app. Link: https://bughunt-arsenal.vercel.app/. Strip: `<script>alert(1)</script>` / `# one of 800+ payloads, 21+ categories`
4. **Ai-Terminal-X** — "AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks." Tags: Python, Gemini AI, CLI. Link: https://github.com/mizazhaider-ceh/Ai-Terminal-X. Strip: `"list the largest files"` / `# plain language in, a command out`
5. **APK Security Pipeline** — "One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports." Tags: Python, Frida, Android. Link: https://github.com/mizazhaider-ceh/apk-security-pipeline. Strip: `# static rules, Frida traces` / `# HTML and JSON reports`. Detail: v2.1.0, Python 3.10+, zero dependencies, 64 tests passing.
6. **AgentArsenal** — "Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer." Tags: Skills, Automation, CLI. Link: https://github.com/mizazhaider-ceh/AgentArsenal. Strip: `# 353 skills, 29 domains` / `# one-command install`

More projects (same card format, smaller):
- **VulnNotes** — "Deliberately vulnerable notes app, built as a Mobile Security course project worth 70% of the module. Group project with Muhammad Muzammil Khan; Izaz leads the build." Tags: Flask, Frida, Course project. NO LINK. Note on card: "Course project, no public repo". Strip: `# Flask API, Frida scripts` / `# Mobile Security course project`
- **Security-Books** — "The cybersecurity library: 160+ curated books, guides, and resources. His most starred repo." Tags: Curated, Books, Resources. Link: https://github.com/mizazhaider-ceh/Security-Books
- **Intel-Scan** — "OSINT framework with a CLI and a web GUI: DNS, WHOIS, and subdomain enumeration." Link: https://github.com/mizazhaider-ceh/Intel-Scan
- **X-Recon** — "AI powered reconnaissance toolkit with a web dashboard and a real time terminal." Link: https://github.com/mizazhaider-ceh/X-Recon
- **Prime-PenTrix** — "AI cybersecurity learning platform: hybrid retrieval, multi provider LLM streaming, spaced repetition quizzes, and 24+ tools." Link: https://github.com/mizazhaider-ceh/Prime-PenTrix
- **Sub-Hunter** — "Subdomain enumeration: takeover detection, VHost discovery, JS parsing, and cloud detection." Link: https://github.com/mizazhaider-ceh/Sub-Hunter
- **PortBlitz** — "Async port scanner with CVE correlation and an interactive terminal UI, 500+ concurrent connections." Link: https://github.com/mizazhaider-ceh/PortBlitz
- **Sentinel-Copilot-S2** — "AI SecOps copilot built from scratch: hybrid retrieval, 46 modular files, and 24+ tools." Link: https://github.com/mizazhaider-ceh/Sentinel-Copilot-S2
- **90DaysOfCyberSecurity** — "A 90-day, hands-on cybersecurity study plan: from zero to job-ready fundamentals, 1-2 hours a day, every tool free." Link: https://github.com/mizazhaider-ceh/90DaysOfCyberSecurity (interactive site: https://mizazhaider-ceh.github.io/90DaysOfCyberSecurity/)
- **The PenTrix 30 Days of Practical Pentesting** — "A comprehensive cybersecurity initiative teaching practical pentesting." Link: https://github.com/mizazhaider-ceh/The-PenTrix-30-Days-of-Practical-Pentesting
- **pentrix-platform** — "The PenTrix learning platform (v1): 192 verified cybersecurity resources, sequenced roadmaps." Link: https://github.com/mizazhaider-ceh/pentrix-platform
- **active-automation / passive-automation** — "Bash-powered Nmap automation for active and passive recon." Links: https://github.com/mizazhaider-ceh/active-automation and https://github.com/mizazhaider-ceh/passive-automation
- **KeyGen-X** — "Secure key generation and validation, cross-platform (C++)." Link: https://github.com/mizazhaider-ceh/KeyGen-X
- **Ai-CMD-X** — "Plain English to real Windows commands." Link: https://github.com/mizazhaider-ceh/Ai-CMD-X
- **icarus-x** — "Modular AI-powered penetration testing framework: recon, exploitation, and post-exploitation in one interface." Link: https://github.com/mizazhaider-ceh/icarus-x

## 2.4 Experience (`/experience`)

Three roles, past tense where ended. No bounty amounts, no report details, no test-pass counts.

1. **Bug Bounty Hunter — YesWeHack, Feb 2026 to Present, Remote, part time**
   - "Responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting."
   - "35 reports submitted, 3 rewarded, with quarterly recognition for performance." (his stated count; see Part 1.3 caveat)
2. **Founder and Offensive Security Researcher — The PenTrix, self founded**
   - "Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the pentrix platform, and Security-Books."
   - "Every project ships with a write up that explains the method, not just the result."
3. **Junior DevSecOps and AI Security Engineer — Damno Solutions, Nov 2025 to Jun 2026, Remote, part time, 20h/week**
   - "Delivered 13 vulnerabilities against a brief of 3+, and fixed 2 critical ones: remote code execution and SQL injection."
   - "Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote 1800+ lines of security documentation."

## 2.5 Skills (`/skills`)

Grouped, evidence-first, no percentages, no bars. Each skill is one quiet line: name + "used in/for" evidence (see Part 1.7 for the full evidence table).

- **Offensive security:** Penetration testing (CSCB #1 Web Junior; PenTrix-VulnLab) · Web application security (YesWeHack bounty hunting since Feb 2026) · Burp Suite (daily in bounty hunting and PenTrix-VulnLab) · OWASP ZAP (certified; used in web testing) · Vulnerability assessment (13 vulnerabilities delivered at Damno) · API security (JWT work; VulnNotes IDOR) · Mobile security (static analysis, Frida dynamic analysis, reverse engineering) · Digital forensics (course labs; ext filesystem recovery)
- **Defensive security:** Linux (daily driver; server security labs) · Windows Server security (Active Directory labs on Server 2025) · Secure code review (CBAM codebase at Damno) · CI/CD security (GitLab pipelines at Damno) · Malware analysis (course work in progress) · Network security (Nmap and recon tooling) · Cryptography (certified; applied in findings)
- **AI security and automation:** Python (Ai-Terminal-X, X-Recon, APK Security Pipeline) · LLM integration and RAG (Prime-PenTrix, Sentinel-Copilot-S2) · Prompt engineering (Ai-Terminal-X) · Bash scripting (active and passive automation) · JavaScript (BugHunt Arsenal, Prime-PenTrix) · SQL (SQLite in PenTrix-VulnLab) · Git and GitHub (80 public repos) · PowerShell (PowerShell Academy; WSS Lab 2) · C/C++ (KeyGen-X) · Testing and QA (APK pipeline 64 tests; AgentArsenal CI harness) · Frida (APK pipeline dynamic traces; Mobile Security labs)
- **Soft skills (plain words, one line, no emoji, no icons-as-emoji):** Problem solving · Team leadership · Communication · Critical thinking · Adaptability · Time management

## 2.6 Certifications (`/certifications`)

Named certifications only, each with issuer (see Part 1.5). No counts, no "View all 53" button, no progress bars.

- CNSP with Merit — The SecOps Group
- Certified Ethical Hacking v12 (CEH) — LearnKartS
- CompTIA PenTest+ Specialization — Packt
- AI Agents and Agentic AI — Vanderbilt University
- Application Security for Developers and DevOps Professionals — IBM
- Web Application Security Testing with OWASP ZAP — Coursera
- Linux 101 — TCM Security
- Web App Security Testing with Google Hacking — CodeRed
- Google AI Essentials — Google (site-only; confirm with izaz, see Part 1.5)
- Advanced Python Scripting — issuer unstated (site-only; confirm with izaz, see Part 1.5)

Separate, clearly marked box: **"In progress: eJPT, eWPT (INE Security) — courses studied, exams coming."** Never inside the held list.

## 2.7 Proof (`/proof`)

Heading (keep his): "Talk is Cheap. Here's the Proof."

Three stat cards:
- "#1 in Web" — CSCB 2026 Junior — "First place in the Web category, representing Howest."
- "#3 Junior · #26/806" — CSCB 2026 National CTF — "Third overall Junior, 26 flags solved, nationally."
- "Recognized Hunter" — YesWeHack · MIHX01 — "Quarterly recognition for bug bounty performance."

CSCB story (three images, used only here, with captions):
- `cscb-web-first.png` — "Web Junior 2026: first place" — "First in the Web category, Junior division, representing Howest. Web is where I started, and where I am strongest."
- `cscb-26th-place.png` — "National board 2026: #26 of 806" — "26th of 806 players nationally, and the only Pakistani at that rank. 26 flags solved across the weekend."
- `cscb-solves-breakdown.png` — "Solve breakdown 2026: 26 flags" — "Every flag earned the same way: read the app, find the flaw, prove it. No shortcuts, no guessing."

Proof gallery (all four, with captions):
- `cscb-rankings.png` — "CSCB 2026: Junior rankings"
- `cscb-junior-top3.png` — "CSCB 2026: Top 3 Junior"
- `cscb-swag.png` (yeswehack-swag.png) — "YesWeHack: quarterly recognition swag"
- `yeswehack-email.png` — "YesWeHack: recognition email"

**Excluded:** the two bounty-amount card images (`bounty-eur500.png`, `bounty-usd80.png`) and every reward amount. Do not include them, do not link them.

## 2.8 Contact (`/contact`)

- **Heading:** "Get in touch" (same primary action as the hero)
- **Email:** mizazhaiderceh@gmail.com (mailto link)
- **Links:** GitHub https://github.com/mizazhaider-ceh · LinkedIn https://www.linkedin.com/in/muhammad-izaz-haider-091639314
- **Form:** Formspree `https://formspree.io/f/xldjdnlr` (name, email, message; "Send Message" / "Message Received!")
- **CV download:** Europass CV PDF, served from the portfolio repo (copy `~/workspace/user/files/Muhammad_Izaz_Haider_-_Europass_-_CV.pdf` into the repo as a static file; suggested path `/files/Muhammad_Izaz_Haider_Europass_CV.pdf`). Label: "Download my CV (Europass PDF)". Do NOT link the two earlier drafts.
- **Availability line (same as Home):** "Available for internships and junior roles: Feb-Apr 2027 and Jul-Sep 2027"
- **Do NOT publish:** phone number, home street address, Howest student email, work authorisation status.

## 2.9 Project detail pages (recommended)

One page per featured project, same Arsenal system, same nav/footer. Recommended pages:

- `/projects/pentrix-vulnlab` — overview; 201 challenges / 29 modules / 3 kill chains / 3 career paths; Express + SQLite; how flags work (safe sentence only); repo link; Archify diagram of the challenge/module structure (build from the real module list, never from invented structure). Never a live deployment link.
- `/projects/powershell-academy` — 18 chapters, 61 lessons, 102 commands, 48 glossary terms, 6 stages with per-stage chapter/lesson counts (Foundations 1 ch/5 lessons; PowerShell Basics 4 ch/18 lessons; Core Skills 4 ch/7 lessons; Admin Power 6 ch/19 lessons; Security Power 2 ch/8 lessons; Projects 1 ch/4 lessons); live site + repo links; "Created by Muhammad Izaz Haider" credit.
- `/projects/bughunt-arsenal` — 800+ payloads, 21+ categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules; Chain Builder, Metadata Analyzer, Encoder/Decoder, OWASP Top 10; live site link. No testimonials.
- `/projects/ai-terminal-x` — Gemini natural-language-to-command, safe-execution checks; repo link; 38 stars (live fetch).
- `/projects/apk-security-pipeline` — v2.1.0, Python 3.10+, zero dependencies, 64 tests; static + Frida dynamic; scoring; HTML/JSON reports; sample results (clean 100/100 grade A, 0 findings; vulnerable 0/100 grade F, 24 findings); reuse the pipeline diagram SVG and report preview PNG (see Part 4); repo link.
- `/projects/agentarsenal` — 353 skills, 29 domains, 290 sub-skills, 36 agents; per-skill versioning, CI harness, quality scorer, one-command installer; reuse the architecture SVG (see Part 4); repo link.
- `/projects/vulnnotes` — course project page, no repo link; Group23, Mobile Security, 70% of module; Flask API + IDOR, Frida PIN bypass, Room drafts, unsafe crypto vs secure storage, contact exfiltrator, root detection + Magisk bypass; note "Demo is individual; build led by Izaz, Flask API and Frida scripts by Muhammad Muzammil Khan."
- `/projects/security-books` — 160+ curated books/guides/resources; repo link; 138 stars (live fetch).

Each detail page ends with the same "Get in touch" CTA.

## 2.10 FAQ (on Home or Contact, 6 questions, plain words, facts only)

1. "What kind of work are you looking for?" — "Offensive security internships, junior pentesting roles, and research placements. I am available Feb-Apr 2027 and Jul-Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium."
2. "When are you available?" — "For a 3 month internship: Feb-Apr 2027 and Jul-Sep 2027. I am open to junior roles and research from 2028, when I graduate."
3. "Do you do bug bounty?" — "Yes, on YesWeHack since Feb 2026 under the handle MIHX01. I do responsible disclosure on live programmes: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting. 35 reports submitted, 3 rewarded."
4. "What is The PenTrix?" — "A self founded initiative with tutorials, tools, write ups, and roadmaps for the next generation of security researchers. Its flagship is PenTrix-VulnLab, a deliberately vulnerable web app with 201 challenges across 29 modules."
5. "Can I see your CV?" — "Yes. Download the Europass CV from the contact section, or ask me for it by email."
6. "How do I reach you?" — "Email mizazhaiderceh@gmail.com, or use the contact form. My GitHub and LinkedIn are linked in the navigation."

---

# PART 3 — OPEN-QUESTION DECISIONS (decided where the sources decide them)

## 3.1 PowerShell Academy repo name: DECIDED — `my-powershell-academy`

- **Decision:** link https://github.com/mizazhaider-ceh/my-powershell-academy as the repo, and https://powershell-academy-seven.vercel.app/ as the live site.
- **Source:** GitHub API, live 2026-11-08. `my-powershell-academy` exists (TypeScript, updated 2026-11-04, empty description, contents include README.md, package.json, src/, tests/). `powershell-academy` returns API 404. The v1 brief's uncertainty is resolved; do not link `powershell-academy`.
- **Related:** the repo README's counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) are stale. The live site is authoritative: 18 chapters, 61 lessons, 102 commands, 48 glossary terms, 6 stages. Use the live counts everywhere.

## 3.2 "Available Feb-Apr 2027 and Jul-Sep 2027" line: DECIDED — SAFE TO PUBLISH

- **Decision:** publish the availability line on Home and Contact, worded as in Part 2 ("Available for internships and junior roles: Feb-Apr 2027 and Jul-Sep 2027").
- **Source:** his own approved wording, already submitted on application forms: `~/workspace/job-hunter/ACTION-SHEET-BLOCKED-APPLICATIONS.md` — "3 months, February to April 2027, also available July to September 2027. I am able and wish to do an internship whenever available, including during exams." (155-character availability field) and the matching Short Introduction text ("I am available for three months from February to April 2027, and also from July to September 2027"). Publishing it is consistent with what employers already hold.
- **Caveat for the parent agent (not a blocker):** Jul-Sep 2027 overlaps his spoken-for summer (CISPA from 1 Jun 2027 if accepted, Amsterdam BIP 28 Jun - 2 Jul 2027). The wording is his own and already on forms, so publish it as written; do not "fix" the overlap without asking him. The FAQ answer ("open to junior roles and research from 2028, when I graduate") is the v1 data.ts wording and is consistent with the forms.

## 3.3 Europass CV download link: DECIDED — YES, LINK IT

- **Decision:** link the Europass CV for download from the Contact page (and footer), served as a static file in the portfolio repo.
- **Source:** the file `~/workspace/user/files/Muhammad_Izaz_Haider_-_Europass_-_CV.pdf` (2026-11-01 12:41) is the file he attaches to applications (CISPA, EPFL, ETH, Barco, Odoo all used this CV). It is the latest of three same-day versions and the most complete: the 12:16 draft lacks the About Me section, phone number, and ICS entry; the 12:30 draft differs only in address formatting. Copy only the 12:41 Europass file into the repo (suggested path `/files/Muhammad_Izaz_Haider_Europass_CV.pdf`); never link the two earlier drafts.
- **Warning for the build agent:** the CV's own work-experience bullets contain the forbidden details (reward amounts, a test-pass count, a mechanism detail for the file upload finding). The portfolio must use the sanitized bullets in Part 2.4, never quote the CV bullets verbatim, and never reproduce those details anywhere in the portfolio.
- **Also note:** the CV's About Me says he is "looking for a research fellowship" (application-specific wording for the research applications). The portfolio uses the generic hiring line from Part 2 instead.

## 3.4 VulnNotes on the portfolio: DECIDED — YES, SHOW IT

- **Decision:** show VulnNotes in the Projects "More projects" grid and give it a detail page (Part 2.9), described as a course project with no repo link.
- **Source:** GitHub API 404 for `mizazhaider-ceh/VulnNotes` (fresh, 2026-11-08) confirms there is no public repo to link. The project itself is real and documented: `~/workspace/user/files/vulnnotes-project-guide.html` and `vulnnotes-build-guide.html` (Mobile Security group project, Group23, 70% of the module; Flask API with IDOR; Frida PIN bypass; Room drafts; unsafe crypto vs secure storage; contact exfiltrator; root detection + Magisk bypass; demo is individual). Izaz leads the build; Muhammad Muzammil Khan owns the Flask API (incl. IDOR) and Frida scripts. Credit Muzammil by name on the detail page.
- **Boundary:** do not link any GitLab or private repo, do not publish graded lab files, and do not present it as an open-source project.

## 3.5 The whoami status-line joke: DECIDED — PLAIN LINE BY DEFAULT, JOKE ONLY WITH HIS YES

- **Decision:** use the plain status line from the v1 data (`status: available for internships · feb-apr 2027 · jul-sep 2027`) as the default. The `izaz@howest:~$ whoami` joke is NOT decided by any source: it does not appear on his live portfolio, CV, GitHub README, or any application form. His terminal-voice jokes ("nmap goes brrr", "I break things for a living") live on his GitHub README and in his own site copy, not in a professional hiring context.
- **Recommendation:** keep the joke out of the hero. If izaz wants it, it fits only as a tiny detail (for example a small mono line in the footer or on the About page), never as the hero status line, and only with his explicit yes. The build agent should ask him this one question, or ship the plain line.
- **Source note:** the v1 data.ts already implements the plain line, so shipping it requires no new decision.

## 3.6 Other decisions the sources settle (no need to ask)

- **Arsenal light (ivory) default + fully functional dark theme:** decided by the v2 brief (his words: "White/light theme by default. Fully functional dark theme. Seamless theme switching."). The v1 brief's open question 1 is answered by the v2 brief.
- **Multi-page, multi-technology (not a single HTML file):** decided by the v2 brief (his words: "not just build a single page like html, nope, use many languages, like do best"). The v1 single-page plan is superseded.
- **Full home street address:** do NOT publish on the public portfolio (city + country only). The address is on the CV for applications; a public site does not need the street number. This is a privacy call, not a source fact; flag it to him at handover.
- **Work authorisation:** do NOT state it on the portfolio. No source states it, and the v1 brief says not to state it unless he approves the wording.
- **Live applications (CISPA, EPFL, ETH, Barco, Odoo, Octa1ne, or any employer):** do NOT name any on the portfolio. Sources confirm they exist/submitted, but the v1 rule stands: the hiring line stays generic.

---

# PART 4 — ASSETS AVAILABLE FOR REUSE + GAPS

## 4.1 Images and assets available (paths)

### Proof images (local copies, from the v1 site download)

| File | Size | Use |
|---|---|---|
| `~/workspace/portfolio-rebuild/public/images/cscb-web-first.png` | 178 KB | Proof page, CSCB story (Web Junior 1st) |
| `~/workspace/portfolio-rebuild/public/images/cscb-rankings.png` | 468 KB | Proof gallery (Junior rankings) |
| `~/workspace/portfolio-rebuild/public/images/cscb-junior-top3.png` | 144 KB | Proof gallery (Top 3 Junior) |
| `~/workspace/portfolio-rebuild/public/images/cscb-26th-place.png` | 194 KB | Proof page, CSCB story (#26 of 806) |
| `~/workspace/portfolio-rebuild/public/images/cscb-solves-breakdown.png` | 351 KB | Proof page, CSCB story (26 flags) |
| `~/workspace/portfolio-rebuild/public/images/yeswehack-swag.png` | 1.5 MB | Proof gallery (recognition swag) |
| `~/workspace/portfolio-rebuild/public/images/yeswehack-email.png` | 335 KB | Proof gallery (recognition email) |
| `~/workspace/portfolio-rebuild/public/images/profile.png` | 824 KB, 800x800 PNG | About page portrait; Home teaser |
| `~/workspace/portfolio-rebuild/public/images/og-image.jpg` | 100 KB | OG/social image (check contents before reuse; it is the v1 site's OG image) |

### Live on the current site but NOT in the local copy (do not reuse without downloading; two are forbidden)

- `hacker.png` (hero skull illustration) — live, HTTP 200 in v1. Do NOT reuse (unslop: skull cliché, decorative filler).
- `bounty-eur500.png`, `bounty-usd80.png` — live, HTTP 200 in v1. **FORBIDDEN: bounty-amount cards. Never reuse, never link.**

### Profile photo

- `~/workspace/profile-images/user-profile-reference.jpg` — JPEG, 150x150, verified image bytes. Too small for a page photo; use only as an identity reference for generated images, not as the About portrait. Use `profile.png` (800x800) for the portrait.

### Project visuals (own work, reusable)

| File | Use |
|---|---|
| `~/workspace/apk-security-pipeline/assets/hero-banner.svg` | APK detail page hero |
| `~/workspace/apk-security-pipeline/assets/pipeline-diagram.svg` | APK detail page (how the pipeline works) |
| `~/workspace/apk-security-pipeline/assets/report-preview.png` | APK detail page (real report: vulnerable sample 0/100, grade F) |
| `~/workspace/apk-security-pipeline/assets/score-chart.svg` | APK detail page (sample scores) |
| `~/workspace/agent-arsenal/assets/architecture.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/agent-runtime-loop.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/how-it-works-strip.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/skill-lifecycle.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/ecosystem.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/learning-path.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/memory-flow.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/stats-strip.svg` | AgentArsenal detail page |
| `~/workspace/agent-arsenal/assets/banner.svg`, `banner-keeper.png` | AgentArsenal detail page (check banner-keeper.png contents before use; 2.1 MB) |
| `~/workspace/agent-arsenal/assets/comparison-strip.svg` | AgentArsenal detail page |
| `~/workspace/90days-cyber/assets/roadmap.svg` | 90 Days project card/detail page |
| `~/workspace/pentrix-vulnlab/docs/` (CLASSROOM.md, RECOMMENDED_TOOLS.md, TOOL_SETUP_GUIDE.md, assets/, audit/, curriculum/, demo-cheat-sheet.md, design/, qa/, research/) | Source material for the PenTrix-VulnLab detail page. Do NOT use `SOLUTIONS.md`, `solutions/`, or `tests/` contents (flag-adjacent; the D18 rule applies) |

### CV file (for the download link)

- `~/workspace/user/files/Muhammad_Izaz_Haider_-_Europass_-_CV.pdf` (2026-11-01 12:41, 335,544 bytes, latest and most complete). Copy into the portfolio repo; do not link the workspace path directly.

### Other workspace sources consulted (not for publication)

- `~/workspace/user/files/vulnnotes-build-guide.html`, `vulnnotes-project-guide.html` — VulnNotes facts (Part 1.6).
- `~/workspace/user/files/Sudo_The_Power.md` — brand only; no prices or product details on the portfolio.
- `~/workspace/portfolio-rebuild/src/data.ts` — v1 verified copy blocks (392 lines); valid except the two corrections in Part 1.9.
- `~/workspace/job-hunter/ACTION-SHEET-BLOCKED-APPLICATIONS.md` — availability wording (Part 3.2).

## 4.2 Facts NOT verified (gaps — never fill with invention)

1. **LinkedIn profile contents** (experience wording, recommendations, activity, connection count). Live fetch blocked HTTP 999 on 2026-11-08, same as v1. Only the URL, headline (from the 2026-10-31 live check), and the facts in the v1 brief may be used.
2. **"35 reports submitted, 3 rewarded" (YesWeHack).** His own count from his screenshots, recorded in parent memory. Not independently verified. Use only as his stated count.
3. **"Started breaking things at age 14."** His own site copy, not independently verified. Keep only as his voice if he confirms.
4. **Google AI Essentials and Advanced Python Scripting certifications.** Appear only on the live portfolio; not in the CV or the LinkedIn-verified list. Advanced Python Scripting has no issuer stated. Confirm with izaz before featuring them prominently.
5. **Work authorisation status.** Not stated anywhere. Do not state it on the portfolio.
6. **"45+ skills" (live site) and any skill count.** Unverified; do not use a count. List skills with evidence only.
7. **"53+ certifications" / "50+".** Unverified and contradicted by the named list (10). Never use.
8. **CSCB point totals (1669 Web, 6576/6701 overall).** Appear on the screenshots; use only beside the screenshot, never as standalone claims.
9. **Testimonials on the BugHunt Arsenal site** ("Loved by Hackers", handles @bugslayer, @ctf_wizard, @ethicalhax). Unverified, likely illustrative. Never reuse on the portfolio.
10. **BugHunt Arsenal's own stat strip** (350+ payloads, 25+ CTF tools) conflicts with the site's headline figures (800+ payloads, 60+ CTF tools). Use the headline figures; the strip is internally inconsistent.
11. **PowerShell Academy repo README counts** (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) are stale relative to the live site (18 chapters, 61 lessons, 102 commands, 48 glossary terms). Use the live counts.
12. **Damno Solutions details beyond the CV** (company size, sector, CBAM codebase nature). Only the CV bullets may be used.
13. **YesWeHack programme names, report titles, IDs, endpoints, reward amounts.** Deliberately excluded by his standing rule; the CV and live site contain some of these, and they must NOT be carried into the portfolio.
14. **Howest student email as a public contact.** Known but not for the public portfolio unless he asks.
15. **Amsterdam BIP final status.** Assigned 2026-11-05; change window open until 11 Nov 2026 at research time. Present as assigned with dates; confirm finality after 11 Nov.
16. **Sudo The Power store/pricing.** The roadmap file lists a working price and 15 products; none of this is for the portfolio (research and build only, never publish, per his standing rule).

## 4.3 Cross-check: v1 data.ts corrections required

The v1 data file (`~/workspace/portfolio-rebuild/src/data.ts`) is otherwise valid and reusable as the copy source. Two corrections:

1. BugHunt Arsenal outcome: change "60+ tools" to "150+ tools, 60+ CTF tools, 50+ free labs" (live site, 2026-11-08).
2. PowerShell Academy outcome: add "102 commands" (live site, 2026-11-08: "102 commands in the library").

Everything else in data.ts matches this research: hero, tagline, about paragraphs, facts, proof stats, gallery, CSCB story, featured/more projects, roles, skill groups, education, certifications, FAQs, contact (Formspree endpoint unchanged).

---

## Research notes for the build agent

- The live portfolio is unchanged since v1 research (identical bundle hashes). Every MUST FIX item from v1 is still live on the current site: the unverified cert count in the meta description, the bounty-amount cards, the test-pass count figure, the wrong JSON-LD birth year (2006), the typewriter headline, the skull hero, the gradient text, the skill percentages. The rebuild must fix all of them; do not copy any of them.
- The Arsenal theme spec in `~/workspace/user/files/arsenal-theme-spec.md` is written for single self-contained offline HTML files (embedded fonts, no external dependencies). The v2 brief supersedes that form: Arsenal as a prompt (task plus design system), universal for a multi-file, multi-language project, tokens implemented once in the theming layer and reused via shared components, default Arsenal, other themes only Whiteboard, Graph, Lavender. Follow the v2 brief's form, not the single-file form, for the portfolio build.
- Do not push to GitHub or deploy until izaz sees the rebuild and likes it.
- Verification before handover: render in a real browser at 1440, 1024, 768, 390; 0 console errors; 0 horizontal overflow; hero headline + sentence + primary action visible without scrolling at 1280x800 and on mobile; every link lands; no forbidden content survives (no bounty amounts, no test-pass counts, no cert counts, no GPA in bios, no skill percentages, no PenTrix flag-storage disclosure, no programme names, no testimonials).
