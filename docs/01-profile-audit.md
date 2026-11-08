# Profile Audit: Muhammad Izaz Haider

**Phase 1 discovery, portfolio v3 rebuild. Audit date: 9 November 2026.**
**Scope:** verified personal knowledge base only. This file is internal. It is not public copy.
**Rule for this file:** no em dashes anywhere. No bounty program names, report titles, IDs, endpoints, or reward amounts. No test-pass counts. No PenTrix flag storage disclosure. Email is always mizazhaiderceh@gmail.com.

## How to read this audit

Every factual claim carries one status tag. The tag is part of the claim, not decoration.

- **[Verified]:** checked against a primary source in this pass or in the cited prior pass, and the source agrees.
- **[Supported by project documentation]:** the claim comes from the project's own README, manifest, guides, or live site, and the project exists, but no independent third party confirms the number or the feature working end to end. A repo description alone never proves every claimed feature works.
- **[Self-reported]:** his own count, wording, or claim, with no independent source found. Usable only as his stated position, never as third-party verified fact.
- **[Experimental or in progress]:** real work that is unfinished, a course in progress, or an exam not yet taken. Never present as held or completed.
- **[Unverified]:** no source found, or the source contradicts the claim. Never use in public copy.

## Sources used in this pass (9 November 2026)

1. Sanitized CV, `~/workspace/portfolio-v2/public/files/Muhammad_Izaz_Haider_CV.pdf` [Verified: 2 pages, A4, 8,011 bytes, read in full by text extraction]. This is the v2 sanitized CV, not the raw Europass file. It is clean on the forbidden-content check run in this pass: no test-pass count figure, no reward amounts, no street address, no phone number, no leaked mechanism detail.
2. Content model, `~/workspace/portfolio-v3-rebuild/src/data.ts` (v2 content model, read in full).
3. Prior research, `~/workspace/portfolio-rebuild-brief.md` (v1 brief, 2026-11-08) and `~/workspace/portfolio-v3-rebuild/research/CONTENT-MODEL.md` (v2 content model, 2026-11-08).
4. Prior verification log, `~/workspace/portfolio-v2/VERIFICATION.md` (2026-11-08, including the recovery note of 2026-11-08 12:31 UTC).
5. Transcript, `~/workspace/user/files/Muhammad_Izaz_Haider_2025-26.pdf` (published 29 June 2026, 2 pages, re-read in full in this pass).
6. GitHub API, live in this pass: user `mizazhaider-ceh` and the full repo list (`per_page=100`, sorted by update).
7. Live sites, text fetch only in this pass (no login, no browser, no clicks): `https://www.mizazhaider-ceh.dev/`, `https://github.com/mizazhaider-ceh`, `https://powershell-academy-seven.vercel.app/`, `https://bughunt-arsenal.vercel.app/`.

## Sources NOT accessed in this pass

- **LinkedIn:** not re-verified in this pass. Prior checks (2026-10-31 live check by the parent agent; 2026-11-08 fetch blocked, HTTP 999) are the only basis for LinkedIn facts below. LinkedIn facts are therefore marked with their 2026-10-31 date and must not be presented as freshly verified.
- **YesWeHack account or dashboard:** not accessed. No login was attempted anywhere.
- **CSCB scoreboard (live):** not re-fetched. The claim rests on the CV plus the five scoreboard screenshots held locally in the v2/v3 image folders.
- **Project codebases beyond their public repo metadata:** not re-read end to end in this pass, except where a prior pass recorded a README or manifest check. Counts taken from a README or a live site are tagged [Supported by project documentation], not [Verified].
- **VulnNotes guides:** not re-read in this pass. Facts about VulnNotes below rest on the prior research pass (2026-11-08) and are tagged accordingly.

## 1. Professional identity

**Proposed public identity (v3 rule applied):** the public copy below names no institution, no university, no course code, no lecturer, and no professor. Education is represented accurately but must not dominate his identity. In the verification tables in this audit the institution is named factually where verification needs it, and each such mention is marked INTERNAL ONLY. No institution name may appear on the public site unless the user explicitly approves a specific mention.

- **Name:** Muhammad Izaz Haider [Verified: CV, GitHub API `name`, live portfolio].
- **Handles:** `mizazhaider-ceh` / `@mizazhaider-ceh` on GitHub [Verified: GitHub API `login`]. YesWeHack handle MIHX01 [Verified: live portfolio proof section; also in v2 data.ts. Not confirmed from a YesWeHack source in this pass].
- **Public positioning, proposed (v3, institution-free):** "Penetration Tester, AI x Offensive Security. Second-year BSc Cybersecurity student in Belgium who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had." [Supported by project documentation: the sentence shape is the v2 data.ts hero sentence with the institution name removed per the v3 rule. The underlying facts are Verified, see sections 2, 6, and 7].
- **LinkedIn headline (2026-10-31 live check, NOT re-verified in this pass):** "AI x Offensive Security | Penetration Tester | Bug Hunter | BSc Cybersecurity @Howest Belgium" [Self-reported via LinkedIn, last checked 2026-10-31. Do not present as freshly verified. The headline itself contains an institution name, so it must not be copied verbatim into v3 public copy under the v3 rule].
- **GitHub bio (live API, this pass):** "Penetration Tester | Web, Network, System | AI x Offensive Security | Founder @ The PenTrix | BSc Cybersecurity @ Howest" [Verified: GitHub API, 9 November 2026. Note: the bio contains an institution name; it is his GitHub bio, not proposed v3 portfolio copy].
- **GitHub profile tagline (live profile page, text fetch, this pass):** "I break things for a living. Mostly web apps." [Verified as his own published wording on GitHub. This is voice, not a verified fact about skill].
- **Founder:** The PenTrix, self-founded initiative for tutorials, tools, write-ups, and roadmaps [Verified: CV, GitHub README, live portfolio].
- **Location (public):** Sijsele-Damme, Belgium [Verified: sanitized CV lists city and country only]. Full street address, phone number, student number, and full date of birth are deliberately NOT recorded in this audit. They exist in application documents only and must not appear on the public site.
- **Birth year correction:** the live portfolio JSON-LD lists birth year 2006 [Unverified and wrong]. The correct year is 2007 [Verified: prior research record, consistent with the CV and transcript identity block. Full date of birth is not reproduced here].
- **Contact (public):** mizazhaiderceh@gmail.com [Verified: sanitized CV, GitHub README, v2 data.ts]. Never use any other email address for documents or contact copy.
- **Availability (his own approved wording, already used on application forms):** available for internships and junior roles, Feb to Apr 2027 and Jul to Sep 2027, including exam periods, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium [Self-reported, his own wording. See the overlap flag in section 12].
- **Work sought:** offensive security internships, junior pentesting roles, and research placements [Verified: CV "About" section and GitHub README "Open to" section agree on the categories].

### Identity gaps and cautions

- The v2 hero sentence names the institution. Under the v3 rule it must be rewritten without it (done in the proposed line above) unless he explicitly approves a specific mention.
- "Started breaking things at age 14" appears in live site copy [Self-reported, Unverified by any independent source. Keep only as his voice if he confirms it, never as a verified fact].
- No testimonial, no client quote, and no employer endorsement was found in any source. None may be invented.

## 2. Core specialties

Ranked by evidence strength, strongest first. Each specialty is paired with its evidence, not with a percentage. No skill percentages exist in any source and none may be used.

1. **Web application penetration testing** [Verified]. Evidence: CSCB 2026 first place in Web, Junior division (see section 9); YesWeHack bounty hunting since Feb 2026 (see section 6); PenTrix-VulnLab as the teaching vehicle (see section 5); transcript grade 17/20 in Web Pentesting Fundamentals [Verified: transcript, re-read this pass].
2. **Bug bounty hunting and responsible disclosure** [Verified as an activity; counts are Self-reported]. Evidence: YesWeHack role since Feb 2026; quarterly recognition (email plus swag photo held locally); categories only, see section 6.
3. **Vulnerability assessment and secure code review** [Verified]. Evidence: Damno Solutions role, 13 vulnerabilities delivered against a brief of 3 or more, 2 critical fixed (remote code execution and SQL injection); CBAM codebase review [Verified: sanitized CV. The nature of the CBAM codebase itself is Unverified, see section 12].
4. **DevSecOps and CI/CD security** [Verified]. Evidence: GitLab CI/CD security pipelines built at Damno; 1,800+ lines of security documentation written there [Verified: sanitized CV].
5. **Mobile security (static analysis, Frida dynamic analysis, reverse engineering)** [Supported by project documentation]. Evidence: APK Security Pipeline (static rules plus Frida traces); VulnNotes course project (Frida scripts); Mobile Security labs in progress. This is demonstrated tooling plus coursework, not a completed professional mobile role.
6. **Digital forensics** [Supported by project documentation, in progress]. Evidence: course labs complete for Labs 03 and 04, Lab 05 in progress at the last record, Lab 06 study guide built; ext filesystem recovery work recorded in prior passes. Present as coursework in progress, not as completed forensic expertise.
7. **Reverse engineering and malware analysis** [Experimental or in progress]. Evidence: Year 2 course "Practical Reverse Engineering and Malware Analysis" is in progress, not graded. Never present as completed expertise.
8. **AI security and LLM integration (including RAG)** [Supported by project documentation]. Evidence: Prime-PenTrix (hybrid retrieval, multi-provider LLM streaming), Sentinel-Copilot-S2 (hybrid retrieval), Ai-Terminal-X (Gemini), AgentArsenal. These are built projects; their claimed capabilities are documented in repos, not independently audited in this pass.
9. **Linux and server security** [Verified as study plus tooling]. Evidence: transcript grade 17/20 in Linux for Ethical Hackers [Verified: transcript]; Linux Server Security labs; Windows Server Security Lab 2 done on Server 2025 (prior record, 2026-11-07). Present the server work as labs plus tooling, not as production administration experience.
10. **Network security and recon** [Supported by project documentation]. Evidence: Nmap automation tools (active-automation, passive-automation), recon tools (X-Recon, Sub-Hunter, Intel-Scan); transcript grade 17/20 in Computer Networks [Verified: transcript].

### Skills that must NOT be claimed

- No skill percentages (the live site shows invented percentages; they have no source) [Unverified, must be removed].
- No "45+ skills" count from the live site [Unverified, must be removed. Count skills with evidence only].
- "Malware analysis" as a completed skill [Experimental or in progress, see item 7 above].
- Any language or tool not evidenced by a repo, a role, a cert, or a transcript grade [Unverified if claimed without such evidence].

## 3. Technical capabilities (evidence-mapped)

| Capability | Evidence | Status |
|---|---|---|
| Penetration testing | CSCB first place Web Junior; PenTrix-VulnLab | Verified |
| Web application security | YesWeHack hunting since Feb 2026 | Verified |
| Burp Suite | Daily use in bounty hunting and PenTrix-VulnLab, per v2 data.ts and PenTrix README (prior pass) | Supported by project documentation |
| OWASP ZAP | Coursera certificate held; used in web testing | Verified (certificate), Supported by project documentation (usage) |
| Vulnerability assessment | 13 vulnerabilities delivered at Damno | Verified |
| API security | JWT work (pentrix-jwt); VulnNotes IDOR | Supported by project documentation |
| Mobile security | APK Security Pipeline; VulnNotes; Mobile Security labs | Supported by project documentation |
| Digital forensics | Course labs; ext filesystem recovery | Supported by project documentation |
| Linux | Daily driver; server security labs; transcript 17/20 | Verified |
| Windows Server security | Active Directory labs on Server 2025; WSS Lab 2 done | Supported by project documentation |
| Secure code review | CBAM codebase review at Damno | Verified (activity), Unverified (codebase details) |
| CI/CD security | GitLab pipelines at Damno | Verified |
| Cryptography | CNSP covers it; applied in findings by category only | Verified (certificate), Self-reported (application) |
| Python | Ai-Terminal-X, X-Recon, APK Security Pipeline | Verified (repo languages, live API) |
| Bash scripting | active-automation, passive-automation (Shell) | Verified (repo languages, live API) |
| JavaScript / TypeScript | BugHunt Arsenal, Prime-PenTrix, PowerShell Academy, PenTrix-VulnLab | Verified (repo languages and live sites) |
| SQL | SQLite in PenTrix-VulnLab; transcript 16/20 Databases Fundamentals | Verified |
| Git and GitHub | 81 public repos (live API, this pass; v2 data.ts says 80, now stale, see section 12) | Verified |
| LLM integration and RAG | Prime-PenTrix, Sentinel-Copilot-S2 | Supported by project documentation |
| Prompt engineering | Ai-Terminal-X; AgentArsenal | Supported by project documentation |
| Frida | APK Security Pipeline dynamic traces; Mobile Security labs | Supported by project documentation |
| PowerShell | PowerShell Academy; WSS Lab 2 | Verified (live site), Supported by project documentation (lab use) |
| C / C++ | KeyGen-X (C++); transcript 18/20 Computer Architectures and Operating Systems | Verified |
| Testing and QA | APK Security Pipeline, 64 tests passing (README); AgentArsenal CI harness | Supported by project documentation |
| DevSecOps | Damno role, CI/CD security pipelines, 20 hours per week | Verified |

**Soft skills (his own words, no proof claimed):** problem solving, team leadership, communication, critical thinking, adaptability, time management [Self-reported. Present as plain words only, no emoji, no claims of proof].

## 4. Education

**Public-copy rule:** in v3 public copy, education is represented accurately but must not dominate his identity, and no institution name appears unless he explicitly approves a specific mention. The table below names the institution factually for verification only (INTERNAL ONLY).

| Item | Detail | Status |
|---|---|---|
| BSc Cybersecurity (INTERNAL ONLY: Howest University of Applied Sciences, Bruges, Belgium) | Started Sep 2025, expected graduation Jun 2028, 180 ECTS | Verified (CV plus transcript) |
| First year | 60/60 credits, first attempt, no retakes | Verified (CV plus transcript, re-read this pass: all 13 units passed at first exam opportunity; Data Privacy and IT Law deliberated, passed without a credit certificate) |
| GPA, weighted | 16.74/20 | Verified (recomputed from the transcript in the prior pass and re-checked against the transcript grades in this pass: 954 / 57 graded credits) |
| GPA, unweighted | 16.58/20 | Verified (recomputed: 199 / 12 graded units) |
| Top grades | 18/20 in Programming Fundamentals, Computer Architectures and Operating Systems, Web Backend; 17/20 in Cyber Security Essentials, Computer Networks, Web Pentesting Fundamentals, Linux for Ethical Hackers, Capture the Flag, Scripting and Code Analysis | Verified (transcript, re-read this pass) |
| Other grades | 16/20 Databases Fundamentals; 15/20 Web Frontend; 12/20 Communication Skills; Data Privacy and IT Law: D, deliberated, passed | Verified (transcript, re-read this pass) |
| Year 2, in progress | Practical Reverse Engineering and Malware Analysis (3 SP), Digital Forensics Analysis (6 SP), Network and System Pentesting (6 SP), Web Security and Honeypot (6 SP), Linux Server Security (6 SP), Windows Server Security (6 SP) | Supported by project documentation (live portfolio course list; enrolment in progress, not graded yet) |
| ICS, Intermediate in Computer Science | Dawn Science College, Barnala, Pakistan, 2022 to 2024, Grade A+ | Verified (sanitized CV) |
| Matriculation, Computer Science | Govt. High School for Boys, Hazara Mughlan, Pakistan, 2020 to 2022 | Supported by project documentation (live portfolio; not in the sanitized CV, keep only as stated on his own site) |

**GPA rule (hard):** in bios or education descriptions, never use the semester average figure. GPA fields use only 16.74/20 (weighted) or 16.58/20 (unweighted). The semester average is verified against the transcript in this audit but its figure is deliberately not printed here, to keep this file safe to quote from. The sanitized CV itself prints no GPA at all, which is the correct public posture.

**Note on the 12/20 Communication Skills grade:** it is on the transcript [Verified]. It must not be presented as his communication level. Prior record (2026-11-05): he said the 12 came from the group, he did almost all the work, and the grade measured the team, not him. That explanation is [Self-reported]. Do not publish the 12/20 figure in portfolio copy, and do not publish the explanation unless he approves it.

## 5. Projects, ranked by evidence strength

Ranking rule: a project ranks higher when it has a live site or a real repo, plus documentation, plus independent evidence (a competition result, a recognition, a verifiable sample run). A repo description alone never proves every claimed feature works.

### Tier 1, strongest evidence (live and documented)

1. **PenTrix-VulnLab** [Supported by project documentation, flagship]. Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, 3 career paths with verifiable certificates. Express plus SQLite. Repo: `https://github.com/mizazhaider-ceh/PenTrix-VulnLab` (1 star, 1 fork, JavaScript, updated 2026-10-20, live API this pass). Counts confirmed in the local repo README and by drift tests in the prior pass. Link the repo only, never a live deployment: the repo states it must not be deployed publicly. Flag wording, only this approved sentence: "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags." The v2 ChallengePanel uses the real `/admin` forced-browsing challenge (the panel checks session only, never role) [Supported by project documentation, prior pass].
2. **PowerShell Academy** [Verified as a live product]. Free PowerShell learning, no account. Live site `https://powershell-academy-seven.vercel.app/` (text fetch, this pass): 18 chapters, 61 lessons, 48 glossary terms, 6 stages (Foundations 1 chapter, 5 lessons; PowerShell Basics 4 chapters, 18 lessons; Core Skills 4 chapters, 7 lessons; Admin Power 6 chapters, 19 lessons; Security Power 2 chapters, 8 lessons; Projects 1 chapter, 4 lessons). Repo `my-powershell-academy` (TypeScript, updated 2026-11-04, live API this pass; the name `powershell-academy` returns 404). The "102 commands" figure in the CV and v2 data.ts did not appear on the homepage text fetched in this pass; it was verified via the live `/commands` page in the prior pass, so it stays [Supported by project documentation, not re-verified on the homepage today]. The repo README counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) are stale [Unverified, must not be used]. Credit line: "Created by Muhammad Izaz Haider" only.
3. **BugHunt Arsenal** [Verified as a live product; counts are Supported by project documentation]. Free browser-based web pentesting and security research platform. Live site `https://bughunt-arsenal.vercel.app/` (text fetch, this pass): headline figures 800+ payloads, 60+ CTF tools, 150+ security tools, 21+ categories, 50+ free labs, 14+ modules, Chain Builder, Metadata Analyzer, Encoder/Decoder, HTTP Request Builder, OWASP Top 10 methodology. No install, no sign-up. Contradiction flagged (see section 12): the same page shows a stat strip reading 336+ payloads, 21+ categories, 24+ CTF tools, 48% free, and a "How it works" section saying 12+ modules. Use the headline figures only. The site calls itself "all open-source", but no BugHunt Arsenal repo appears in the 81-repo live list [Unverified, do not repeat the open-source claim until a repo is confirmed]. The "Loved by Hackers" testimonials on the site use unverified handles [Unverified, never reuse on the portfolio].
4. **APK Security Pipeline** [Supported by project documentation]. One command security-checks an Android app and explains every step: static manifest, strings and code rules, Frida dynamic traces, scoring, HTML and JSON reports, baseline and CI modes. Pure Python, v2.1.0, Python 3.10+, zero dependencies, 64 tests passing. Repo `apk-security-pipeline` (Python, 0 stars, updated 2026-10-28, live API this pass). Sample runs recorded in the prior pass: clean sample 100/100 grade A, 0 findings; vulnerable sample 0/100 grade F, 24 findings [Supported by project documentation, not re-run in this pass].
5. **Security-Books** [Verified as a repo; curation claim is Supported by project documentation]. The cybersecurity library: 160+ curated books, guides, and resources. Repo `Security-Books` (139 stars, 43 forks, updated 2026-11-08, live API this pass). Most starred repo. Note: 139 stars today, up from 138 on 2026-11-08. Star counts go stale; fetch live or omit.
6. **Ai-Terminal-X** [Supported by project documentation]. AI-powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks. Repo `Ai-Terminal-X` (38 stars, 10 forks, Python, updated 2026-10-02, live API this pass). Most starred tool.

### Tier 2, real repos with documentation, lower independent evidence

7. **AgentArsenal** [Supported by project documentation]. Unified skills repository: 353 skills across 29 domains, per-skill versioning, automated testing, quality scoring, one-command installer. Repo `AgentArsenal` (Python, 0 stars, updated 2026-10-28, live API this pass). The 353/29 counts come from the workspace manifest (generated 2026-10-27, prior pass), not from the GitHub API, which carries no such counts. Do not present the counts as API-verified.
8. **VulnNotes** [Supported by project documentation, course project, no public repo]. Deliberately vulnerable notes app, Mobile Security course project worth 70% of the module. Group23 with Muhammad Muzammil Khan. Izaz leads the build; Muzammil owns the Flask API (including IDOR) and Frida scripts. Demo is individual. No public repo: the name does not appear in the 81-repo live list in this pass, confirming the prior API 404. Describe as a course project, no repo link, credit Muzammil by name. Do not link any private repo and do not publish graded lab files.
9. **The PenTrix 30 Days of Practical Pentesting** [Supported by project documentation]. Comprehensive initiative teaching practical pentesting, day by day. Repo `The-PenTrix-30-Days-of-Practical-Pentesting` (10 stars, updated 2026-10-23, live API this pass).
10. **Intel-Scan** [Supported by project documentation]. OSINT framework with CLI and web GUI: DNS, WHOIS, subdomain enumeration. Repo `Intel-Scan` (7 stars, Python, updated 2026-10-02, live API this pass).
11. **X-Recon** [Supported by project documentation]. AI-powered reconnaissance toolkit with web dashboard and real-time terminal. Repo `X-Recon` (4 stars, 2 forks, Python, updated 2026-10-02, live API this pass).
12. **Prime-PenTrix** [Supported by project documentation]. AI cybersecurity learning platform: hybrid retrieval, multi-provider LLM streaming, spaced repetition quizzes, 24+ tools. Repo `Prime-PenTrix` (TypeScript, 0 stars, updated 2026-10-02, live API this pass).
13. **Sentinel-Copilot-S2** [Supported by project documentation]. AI SecOps copilot built from scratch: hybrid retrieval, 46 modular files, 24+ tools. Repo `Sentinel-Copilot-S2` (JavaScript, 0 stars, 1 fork, updated 2026-10-02, live API this pass). The "11,707 lines" figure comes from the prior pass; not re-counted in this pass.
14. **Sub-Hunter** [Supported by project documentation]. Subdomain enumeration: takeover detection, VHost discovery, JS parsing, cloud detection. Repo `Sub-Hunter` (HTML, 0 stars, updated 2026-10-02, live API this pass).
15. **PortBlitz** [Supported by project documentation]. Async port scanner with CVE correlation and interactive terminal UI, 500+ concurrent connections. Repo `PortBlitz` (Python, 1 star, updated 2026-10-02, live API this pass).
16. **Ai-CMD-X** [Supported by project documentation]. Plain English to real Windows commands. Repo `Ai-CMD-X` (6 stars, 1 fork, Python, updated 2026-10-02, live API this pass).
17. **90DaysOfCyberSecurity** [Supported by project documentation]. 90-day hands-on cybersecurity study plan: from zero to job-ready fundamentals, 1 to 2 hours a day, every tool free. Repo `90DaysOfCyberSecurity` (0 stars, updated 2026-10-23, live API this pass). Interactive site exists per prior pass.
18. **pentrix-platform** [Supported by project documentation]. The PenTrix learning platform (v1): 192 verified cybersecurity resources, sequenced roadmaps. Repo `pentrix-platform` (TypeScript, 0 stars, updated 2026-10-23, live API this pass).
19. **KeyGen-X** [Supported by project documentation]. Secure key generation and validation, cross-platform (C++ plus Python). Repo `KeyGen-X` (2 stars, C++, updated 2026-10-23, live API this pass).
20. **active-automation / passive-automation** [Supported by project documentation]. Bash-powered Nmap automation for active and passive recon. Repos `active-automation` (3 stars, Shell, updated 2026-10-23) and `passive-automation` (5 stars, Shell, updated 2026-10-02, v3.1, his first Bash scripting project), live API this pass.
21. **icarus-x** [Supported by project documentation]. Modular AI-powered penetration testing framework: recon, exploitation, post-exploitation in one interface. Repo `Icarus-X` (1 star, Python, updated 2026-10-10, live API this pass). Note the live API returns the name as `Icarus-X`; v2 data.ts writes `icarus-x`.

### Tier 3, smaller tools, coursework, and collections (do not feature without review)

- **pentrix-* small scanners** (pentrix-xss, pentrix-sqli, pentrix-recon, pentrix-portscan, pentrix-headers, pentrix-hashid, pentrix-jwt, pentrix-cve, pentrix-secrets, pentrix-phish, pentrix-arsenal, pentrix-atlas, pentrix-linux-quest): all exist as repos, 0 stars, updated 2026-10-23 [Verified as repos, live API this pass. Feature claims are Supported by project documentation only].
- **Internship and coursework repos found in the live list, not in the v2 model:** YoungDev-CyberIntern-Tasks (2 stars), Intern-Rhombix-Technologies (2 stars), InternIntelligence-Secure-Code-Review (1 star), PRODIGY_CS_01-EZCrypt, PRODIGY_CS_02-Lock_Check, PRODIGY_CS_03-KeyTrace, PRODIGY_CS_04-Sniff-X, s1-study-buddies, S2-SentinelCopilot, XSS-Hunter, Recon-Hunter, SE-Arsenal, Fast-Brute, Auth-Hunter, ClickJackCheck, DNSProbe, CyberMap, omnisec, Study-Copilot, Secure-First, Ultimate-Cybersecurity-Resources-Hub, Web-Security-Google-Dorking, Web-Pentesting-Guide, Pentest-Lab-Setup / pentesting-lab-setup, windows-registry-forensics-incident-response-lab, windows-events-forensics-incident-response-lab, web-network-security-lab, osint-blackbox-pentest, JavaScript-Programming-Essentials-IBM, Archetypes, Win-Proj, Top-Proj, and others [Verified as repos, live API this pass. Quality, maturity, and authorship of each are Unverified. Several are internship tasks or coursework, not flagship work. Do not promote any to the featured set without a per-repo review].
- **Prime-PortFolio** [Verified as a repo, live API this pass]. Current (v1) portfolio source: React plus TypeScript plus Vite, Tailwind, Vercel. The v3 rebuild replaces this site. Do not push or deploy until he approves.
- **portfolio-v2** [Verified as a repo, live API this pass]. New since the v2 research: 0 stars, HTML, updated 2026-11-08, empty description. This is the v2 build copy, not a portfolio project. Do not list it as a project.
- **mizazhaider-ceh** (profile repo, 1 star) and **My-Portfolio** (1 star, 1 fork) [Verified as repos. Not portfolio projects].

### The PenTrix (initiative, not one repo)

Tutorials, tools, write-ups, and roadmaps for the next generation of security researchers [Verified: GitHub README, live portfolio, CV]. Includes PenTrix-VulnLab, 30 Days of Practical Pentesting, pentrix-platform, Security-Books, 90DaysOfCyberSecurity, pentrix-atlas, and the small Python scanners listed above.

### Sudo The Power (brand)

His brand and store [Verified as a brand, prior pass]. Portfolio may name it as a brand only. No store link, no prices, no product details, no institution mention in product contexts. Research and build only, never publish, post, change prices, or spend without explicit per-action approval.

## 6. Work experience

1. **Bug Bounty Hunter, YesWeHack, part-time, Feb 2026 to present, remote** [Verified as a role: sanitized CV, live portfolio, GitHub README agree on org, start, and part-time remote shape].
   - Responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting [Verified: sanitized CV. Categories only, per his standing rule].
   - 35 reports submitted to date, 3 rewarded, by his own count, with quarterly recognition for performance [Self-reported: his own count from his screenshots, recorded in parent memory. Not independently verified. Present only as his stated count].
   - Quarterly recognition for bug bounty performance [Verified: sanitized CV honours section, plus the recognition email and swag photo held locally in the v3 image folders].
   - Hard rule: never reveal program names, report titles, IDs, endpoints, or reward amounts. The live site and the raw Europass CV both contain some of these details; the sanitized CV does not, and the portfolio must use the sanitized wording only.
2. **Junior DevSecOps and AI Security Engineer, Damno Solutions, part-time, Nov 2025 to Jun 2026, remote, 20 hours per week. ROLE ENDED, always past tense** [Verified: sanitized CV].
   - Delivered 13 vulnerabilities against a brief of 3 or more [Verified: sanitized CV].
   - Fixed 2 critical vulnerabilities: a remote code execution flaw and a SQL injection flaw [Verified: sanitized CV].
   - Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote more than 1,800 lines of security documentation [Verified: sanitized CV. The CBAM codebase itself (sector, size, nature) is Unverified, see section 12].
   - Worked 20 hours per week alongside full-time study [Verified: sanitized CV].
3. **Founder and Offensive Security Researcher, The PenTrix, self-founded** [Verified: sanitized CV, GitHub README, live portfolio].
   - Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the PenTrix platform, and Security-Books [Verified: sanitized CV].
   - Every project ships with a write-up that explains the method, not just the result [Self-reported, his own description of his practice].

## 7. Research

- **Research internship applications, submitted** [Verified as submitted, per parent memory, prior pass. Do NOT name any of these on the portfolio; the hiring line stays generic].
  - CISPA CSR, General call, start 1 June 2027, 3 months, submission number 152, marked ready, deadline to mark ready 30 Nov 2026, 22:59 UTC [Verified as submitted, prior record].
  - Summer@EPFL [Verified as submitted, prior record].
  - ETH Zurich SSRF [Verified as submitted, prior record].
  - Decisions by end Feb 2027 [Self-reported, per prior record].
- **eJPT and eWPT through INE Security** [Experimental or in progress]: courses studied, exams not taken, does not hold either certificate [Verified as not held, prior record 2026-11-08 and sanitized CV line "In progress, not held yet: eJPT and eWPT through INE Security. Courses studied, exams coming."]. Never list as held certifications. The wording "in progress" is honest only when clearly separated from the held list.
- **International Project: 13 BIP Amsterdam, Security Summer Camp, 28 Jun to 2 Jul 2027, Hogeschool van Amsterdam, 10 ECTS** [Verified as assigned 2026-11-05, prior record]. Group of 6: izaz, Muhammad Muzammil Khan, Ben Patrick, Hamza Shabbir, Kobe Vanderschueren, Yana Vercruysse [Verified, prior record]. Status at audit date (9 Nov 2026): assigned, NOT yet final; the change window closes 11 Nov 2026 [Verified, prior record]. Present as assigned with dates, confirm finality after 11 Nov. His role in the group, per prior record: security specialist (reverse engineering and forensics tasks) and documentation lead [Self-reported, prior record].
- **No published research paper, no conference talk, and no journal article** was found in any source [Unverified if claimed. Do not claim research output beyond the applications and coursework above].

## 8. Open-source work

- **GitHub account:** `mizazhaider-ceh`, created 2025-01-19 [Verified: GitHub API, this pass]. **81 public repos** [Verified: GitHub API, this pass, up from 80 on 2026-11-08. The new repo is `portfolio-v2`, the v2 build copy]. 54 followers, 5 following [Verified: GitHub API, this pass, unchanged]. Location Belgium, blog `https://www.mizazhaider-ceh.dev/` [Verified: GitHub API, this pass].
- **Most starred repo:** Security-Books, 139 stars, 43 forks [Verified: GitHub API, this pass].
- **Most starred tool:** Ai-Terminal-X, 38 stars, 10 forks [Verified: GitHub API, this pass].
- **Open-source posture:** the flagship learning tools (PenTrix-VulnLab, PowerShell Academy repo, APK Security Pipeline, AgentArsenal) are public repos [Verified]. BugHunt Arsenal is described on its own site as open-source, but no repo was found in the live list [Unverified, see section 12]. VulnNotes has no public repo by design (course project) [Verified by absence from the live list].
- **Contributions to other people's projects:** none found in the sources checked [Unverified. Do not claim upstream contributions].
- **Licences:** not checked per repo in this pass [Unverified. Do not claim a licence for any repo without checking it].

## 9. Leadership

- **Founder, The PenTrix** [Verified, see section 6]. Self-founded initiative; he leads the build direction and the teaching output.
- **VulnNotes build lead, Group23** [Supported by project documentation, prior pass]. Izaz leads the build; Muhammad Muzammil Khan owns the Flask API (including IDOR) and Frida scripts. Demo is individual.
- **Amsterdam BIP group, documentation lead (planned role)** [Self-reported, prior record]. Not yet performed; present as a planned role, not as completed leadership.
- **Team leadership as a soft skill** [Self-reported]. No independent evidence of managing a team beyond the two items above.
- **No formal employment leadership role** (no "led a team of N" claim) exists in any source [Unverified if claimed].

## 10. Achievements

- **CSCB 2026 (Cyber Security Challenge Belgium)** [Verified: sanitized CV honours section, live portfolio proof section, five scoreboard screenshots held locally].
  - First place in Web, Junior division [Verified].
  - Third overall, Junior division [Verified].
  - Third among his institution's participants (INTERNAL ONLY: Howestian ranking) [Verified, prior record. The institution reference here is a factual verification note, not public copy].
  - 26th of 806 participants nationally [Verified].
  - 26 flags solved [Verified].
  - Only Pakistani on the scoreboard at that rank [Self-reported: his claim, consistent with the screenshots, not independently verified].
  - Represented his institution (INTERNAL ONLY) [Verified, prior record].
  - Point totals (Web category points and overall Junior points) appear on the screenshots [Supported by project documentation. Use only beside the screenshot, never as standalone claims].
- **YesWeHack quarterly recognition for bug bounty performance** [Verified: sanitized CV honours, recognition email and swag photo held locally].
- **First year 60/60 credits, first attempt, no retakes** [Verified: CV plus transcript].
- **No other competition result, award, or ranking** was found in the sources checked [Unverified if claimed].

## 11. Certifications

Held, named only, no counts. The sanitized CV lists all ten below, which changes the status of the last two since the v2 research (see the note after the table).

| Certification | Issuer | Status |
|---|---|---|
| Certified Network Security Practitioner (CNSP), with Merit | The SecOps Group | Verified (CV; LinkedIn check 2026-10-31) |
| Certified Ethical Hacking v12 (CEH), course certificate | LearnKartS | Verified (sanitized CV) |
| CompTIA PenTest+ Specialization, course | Packt | Verified (sanitized CV) |
| AI Agents and Agentic AI | Vanderbilt University | Verified (sanitized CV) |
| Application Security for Developers and DevOps Professionals | IBM | Verified (CV; LinkedIn check 2026-10-31) |
| Web Application Security Testing with OWASP ZAP | Coursera | Verified (CV; LinkedIn check 2026-10-31) |
| Linux 101 | TCM Security | Verified (sanitized CV; LinkedIn check 2026-10-31) |
| Web App Security Testing with Google Hacking | CodeRed | Verified (sanitized CV; LinkedIn check 2026-10-31) |
| Google AI Essentials | Google | See note below, still open |
| Advanced Python Scripting | Issuer unknown | See note below, still open |

**Note on the last two (status change, still open):** in the v2 research (2026-11-08) both were site-only, appearing only on the live portfolio and not in the Europass CV or the LinkedIn-verified list. The sanitized CV built for v2 now lists both, so they are no longer site-only in the v2 file set. That does not verify them: no certificate, no LinkedIn entry, and no issuer (for Advanced Python Scripting) was found in any source checked. Treat both as **Unverified as held certifications** until he confirms them with evidence. Keep them in the list only with the issuer marked unknown for Advanced Python Scripting, and flag both as open items (section 13). Never count certifications: no total, no "53-plus" style figure, no "View all" count button.

**In progress, never list as held:** eJPT and eWPT through INE Security [Experimental or in progress, see section 7].

**Parent brief cross-check:** the parent brief for this task lists five certifications (CNSP with Merit, IBM Application Security, Coursera OWASP ZAP, TCM Linux 101, CodeRed Google Hacking). All five are confirmed in the sanitized CV and in the table above [Verified]. The other five in the table (CEH v12 LearnKartS, CompTIA PenTest+ Packt, AI Agents Vanderbilt, Google AI Essentials, Advanced Python Scripting) come from the sanitized CV and the prior research, not from the parent brief list. The first three of those five are accepted as Verified from the CV; the last two remain open as noted above.

## 12. External links

| Link | Purpose | Status in this pass |
|---|---|---|
| `https://www.mizazhaider-ceh.dev/` | Live portfolio (v1) | Text fetch returned only the page title and meta description (JavaScript app, crawler text is sparse). Meta description still carries the unverified certifications count claim. Full DOM not re-verified by text fetch; last full render was the prior Playwright pass, 2026-11-08. HTTP 200 per prior link check. Do not treat this text fetch as a full site verification. |
| `https://github.com/mizazhaider-ceh` | GitHub profile | Text fetch plus live API, this pass. Profile README confirms the bio, the 60/60 first-year claim, the grade wording, and the "Open to" list. Featured projects on the README omit the flagship work (see section 12, gap 6). |
| `https://www.linkedin.com/in/muhammad-izaz-haider-091639314` | LinkedIn profile | URL verified from prior records. Contents NOT re-verified in this pass (prior fetch blocked, HTTP 999). Do not claim a fresh LinkedIn check. |
| `https://powershell-academy-seven.vercel.app/` | PowerShell Academy, live | Text fetch, this pass. Counts confirmed except the 102 commands figure, which did not appear on the homepage text (see section 5, item 2). |
| `https://bughunt-arsenal.vercel.app/` | BugHunt Arsenal, live | Text fetch, this pass. Headline figures confirmed; internal stat-strip contradiction flagged (see section 12, gap 3). |
| `https://github.com/mizazhaider-ceh/my-powershell-academy` | PowerShell Academy repo | Verified to exist, TypeScript, updated 2026-11-04, live API this pass. |
| `https://github.com/mizazhaider-ceh/PenTrix-VulnLab` | PenTrix-VulnLab repo | Verified to exist, live API this pass. Link repo only, never a live deployment. |
| Formspree `https://formspree.io/f/xldjdnlr` | Contact form endpoint | Verified in prior pass (live site bundle; GET returns 405 as expected for a POST-only endpoint). Not re-tested in this pass. |
| CV download `/files/Muhammad_Izaz_Haider_CV.pdf` | Sanitized CV, 8,011 bytes, 2 pages | Verified in this pass (file read in full). The v2 build serves this file, not the raw Europass PDF. |

**Email:** mizazhaiderceh@gmail.com [Verified]. **Do not use any other email address.**

## 13. Gaps, contradictions, and unverified claims

Numbered so the parent agent can track each one. "Fix" means what the v3 build must do, not a claim about the underlying fact.

1. **Repo count stale in v2 data.ts.** Data.ts says "80 public repos" as evidence for Git and GitHub. Live API in this pass says 81. Fix: update to 81 or fetch live from the GitHub API at build time; never hardcode a stale count.
2. **Star counts moved.** Security-Books 138 stars on 2026-11-08, 139 stars in this pass (forks 42 to 43). Ai-Terminal-X still 38 stars. Fix: fetch star counts live or omit them; never hardcode stars.
3. **BugHunt Arsenal internal contradiction (fresh, this pass).** The live homepage headline says 800+ payloads, 60+ CTF tools, 150+ security tools, 21+ categories, 50+ free labs, 14+ modules. The same page shows a stat strip reading 336+ payloads, 21+ categories, 24+ CTF tools, 48% free, and a "How it works" section saying 12+ modules. The strip contradicts the headline on payloads (336+ versus 800+), CTF tools (24+ versus 60+), and modules (12+ versus 14+), and "48% free" is meaningless beside the "all free" claim. Fix: use the headline figures only in v3 copy, and flag the BugHunt site itself for a consistency fix. Do not copy the strip.
4. **BugHunt "open-source" claim unverified.** The live site calls the platform open-source, but no BugHunt Arsenal repo appears among the 81 live repos. Fix: do not call BugHunt open-source in v3 copy until a repo is confirmed.
5. **PowerShell Academy "102 commands" not on the homepage text.** The figure is in the CV and v2 data.ts and was verified via the live `/commands` page in the prior pass, but the homepage text fetched in this pass lists only 18 chapters, 61 lessons, and 48 glossary terms. Status stays [Supported by project documentation], not [Verified] from the homepage. Fix: re-verify the commands count on the live commands page before v3 handover, or drop the figure from the homepage card.
6. **GitHub README omits the flagship work.** The live profile README features Ai-Terminal-X, Intel-Scan, Ai-CMD-X, active-automation, KeyGen-X, and Pentest-Lab-Setup. It does not feature PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, AgentArsenal, or Security-Books. This is a presentation gap, not a factual contradiction, but a recruiter landing on GitHub first sees the small tools, not the flagship work. Fix: recommend he updates the README featured set; the portfolio itself must lead with the flagship order in section 5.
7. **Live portfolio (v1) still carries the must-fix items.** The text fetch in this pass returned only title plus meta description, so the full DOM was not re-verified by text fetch. The meta description still carries the unverified certifications count claim. Prior full render (2026-11-08) found, still live at that date: the unverified certifications count, bounty-amount cards, the forbidden test-pass count figure, the wrong JSON-LD birth year (2006), the typewriter headline, the skull hero, gradient text, and invented skill percentages. Fix: none of these may be carried into v3. The v3 build must not copy v1 copy or v1 components without checking each line against this audit.
8. **Certifications count claim is unverified and contradicted.** Only ten certifications are named anywhere (section 11). Any count in the fifties has no source and contradicts the named list. Fix: never use a certifications count; list named certifications only.
9. **YesWeHack counts are self-reported.** "35 reports submitted, 3 rewarded" is his own count from his screenshots, recorded in parent memory. No independent source confirms it. Fix: present only as "by my own count" wording, never as third-party verified.
10. **"Only Pakistani on the scoreboard at that rank" is self-reported.** Consistent with the screenshots, not independently verified. Fix: keep the wording as his claim, or drop it; never present it as independently verified.
11. **"Started breaking things at age 14" is self-reported and unverified.** Fix: keep only as his voice if he confirms it, never as a verified fact.
12. **Damno CBAM codebase details are unverified.** Only the CV bullets may be used (pipelines built, codebase reviewed, documentation written). Company size, sector, and the nature of the CBAM codebase are not in any source checked. Fix: do not add detail beyond the CV bullets.
13. **CSCB point totals are screenshot-only.** The Web category points and overall Junior points appear on the scoreboard screenshots. Fix: use them only beside the screenshot, never as standalone claims.
14. **BugHunt testimonials are unverified.** The "Loved by Hackers" quotes on the BugHunt site use unverified handles. Fix: never reuse them on the portfolio.
15. **PowerShell Academy repo README counts are stale.** The repo README says 16 modules, 35 lessons, 97 cmdlets, 117 glossary terms. The live site says 18 chapters, 61 lessons, 102 commands, 48 glossary terms. Fix: use the live site counts only.
16. **VulnNotes evidence rests on the prior pass.** The project guides were not re-read in this pass. The no-public-repo fact was re-confirmed by absence from the 81-repo live list in this pass. Fix: re-read the VulnNotes guides before writing the v3 detail page, and keep the "course project, no public repo" label.
17. **AgentArsenal and APK counts rest on project documentation.** The 353 skills and 29 domains come from the workspace manifest (prior pass); the 64 tests figure comes from the APK README (prior pass). Neither was re-counted or re-run in this pass. Fix: re-verify both from the workspace copies before v3 handover if the numbers appear on detail pages.
18. **Transcript address versus current residence.** The transcript lists a Pakistan postal address (his origin address). The sanitized CV lists Sijsele-Damme, Belgium as his current location. This is not a contradiction (origin address versus current residence), but the Pakistan address must never appear on the public site. Fix: public location is city and country only.
19. **Availability overlap (Jul to Sep 2027).** His approved availability wording includes Jul to Sep 2027, but that window overlaps his spoken-for summer: CISPA from 1 Jun 2027 if accepted, and the Amsterdam BIP 28 Jun to 2 Jul 2027. The wording is his own and already on application forms, so publish it as written. Fix: do not "fix" the overlap without asking him.
20. **Amsterdam BIP not yet final at audit date.** Assigned 2026-11-05; the change window closes 11 Nov 2026, two days after this audit. Fix: present as assigned with dates until finality is confirmed after 11 Nov.
21. **LinkedIn not freshly verified.** Headline and profile facts rest on the 2026-10-31 live check. Fix: do not claim a fresh LinkedIn verification in v3 handover notes; re-check LinkedIn only through a channel that can reach it, without logging in.
22. **Live portfolio text fetch is not a full verification.** The v1 site is a JavaScript app; the text fetch in this pass returned only title plus meta description. Fix: do not cite this pass as a full live-site re-verification. The last full render remains 2026-11-08.
23. **New repos since the v2 model are unreviewed.** About a dozen repos in the live list (internship tasks, coursework labs, small scanners, study helpers) were not in the v2 model. Their existence is verified; their quality and maturity are not. Fix: do not promote any to the featured set without a per-repo review.
24. **"45+ skills" (live site) is unverified.** Fix: drop the count; list skills with evidence only (section 3).
25. **Repo name case: `Icarus-X` versus `icarus-x`.** The live API returns `Icarus-X`; v2 data.ts writes `icarus-x`. Fix: use the live API casing in links, and confirm the link resolves.
26. **Sanitized CV omits individual course grades.** The 18/20 and 17/20 grades are verified from the transcript (section 4), not from the sanitized CV. Fix: if v3 copy uses the grades, cite the transcript wording from the GitHub README ("18/20 in Programming, Computer Architecture and OS and Web Backend; 17/20 in Web Pentesting, Capture the Flag, Linux for Ethical Hackers and Networks"), and never add a GPA to the same line.

## 14. Open items, unanswered (flagged, not assumed)

These three items were open after the v2 verification log (2026-11-08) and remain unanswered in this pass. Nothing in the sources checked today answers any of them. Do not fill them by invention.

1. **Work authorisation wording: UNANSWERED.** No source states his work authorisation status. Do not state it on the portfolio. He must approve the exact wording first. This is his first screening question for a non-EU student, and it is the most important gap for recruiters.
2. **"Advanced Python Scripting" issuer: UNKNOWN, UNANSWERED.** The sanitized CV now lists the certification with "Issuer unknown", and v2 data.ts does the same. No issuer was found in any source checked (CV, GitHub, live portfolio, prior research). He must confirm the issuer or drop the certification from the list.
3. **"Google AI Essentials" confirmation: UNANSWERED.** The certification appears on the live portfolio and now also in the sanitized CV, but it is not in the LinkedIn-verified list from 2026-10-31 and no certificate was found in the sources checked. He must confirm it with evidence before it is featured prominently. (Status note: it is no longer site-only, because the sanitized CV lists it; the underlying verification gap is unchanged.)

## 15. Evidence and verification status summary

| Area | Status |
|---|---|
| Identity, contact email, GitHub account | Verified (CV, live GitHub API, this pass) |
| LinkedIn headline and profile contents | Last verified 2026-10-31, NOT re-verified in this pass |
| Education, first-year credits, grades, GPA fields | Verified (transcript re-read in this pass; GPA fields 16.74/20 weighted, 16.58/20 unweighted only) |
| Damno Solutions role and outputs | Verified (sanitized CV) |
| YesWeHack role and categories | Verified (sanitized CV); report counts Self-reported |
| CSCB 2026 results | Verified (CV plus scoreboard screenshots held locally) |
| Certifications, eight of ten | Verified (sanitized CV; LinkedIn check 2026-10-31 for five of them) |
| Certifications, Google AI Essentials and Advanced Python Scripting | Unverified as held; open items, section 14 |
| eJPT, eWPT | Experimental or in progress, not held |
| PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal | Verified as live products; feature counts Supported by project documentation |
| APK Security Pipeline, AgentArsenal | Supported by project documentation |
| VulnNotes | Supported by project documentation (prior pass); no public repo re-confirmed in this pass |
| Other repos (Tier 2 and Tier 3) | Verified as repos (live API); feature claims Supported by project documentation at best |
| Skills | Evidence-mapped in section 3; no percentages, no counts |
| Research applications (CISPA, EPFL, ETH) | Verified as submitted (prior record); never name on the portfolio |
| Amsterdam BIP | Verified as assigned; finality pending after 11 Nov 2026 |
| Work authorisation | Unanswered |
| Live portfolio v1, full DOM | Last full render 2026-11-08; text fetch in this pass is not a full re-verification |

## 16. Proposed public copy (v3, institution-free, safe to use)

These lines use only Verified or Supported claims, and they name no institution, no course code, and no lecturer. They are proposals for the v3 build, not a final decision. If he approves a specific institution mention, that approval must name the exact line.

- **Hero sentence:** "Second-year BSc Cybersecurity student in Belgium who breaks web apps, hunts bounties on YesWeHack, and builds the tools he wishes he had."
- **Hard fact:** "CSCB 2026: first place in Web, Junior division; third overall Junior; 26th of 806 nationally; 26 flags solved."
- **Availability:** "Available for internships and junior roles: Feb to Apr 2027 and Jul to Sep 2027."
- **About, paragraph 1:** "I started in security young, breaking things to learn how they work. That habit became a craft: web penetration testing, bug bounty hunting on YesWeHack, and building the tools I wish I had."
- **About, paragraph 2:** "My first year closed at 60 out of 60 credits on the first attempt, and I placed first in Web at CSCB 2026. I founded The PenTrix to teach what I learn, through tutorials, tools, and write-ups."
- **About, paragraph 3:** "Now I am going deep on the defensive side too: digital forensics, reverse engineering, and malware analysis. The goal is the same on both sides: understand the system, find the weakness, and make it stronger."
- **PenTrix flag line (only approved wording):** "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags."
- **Contact:** "Email mizazhaiderceh@gmail.com, or use the contact form. My GitHub and LinkedIn are linked in the navigation."

## 17. What the v3 build must do with this audit

1. Lead with the flagship order in section 5. Do not lead with small tools.
2. Use the proposed public copy in section 16, or copy approved by him. Do not copy v1 site copy without checking each line against this audit.
3. List named certifications only, with the two open items flagged, never as a count.
4. Show skills with evidence (section 3), never with percentages or counts.
5. Keep the YesWeHack counts in "by my own count" wording only.
6. Keep the PenTrix flag line exactly as written in section 16.
7. Update the stale counts (81 repos, 139 stars for Security-Books) or fetch them live.
8. Resolve the BugHunt stat-strip contradiction by using headline figures only.
9. Do not name any live application, employer, or research programme on the portfolio.
10. Do not publish the street address, phone number, student number, full date of birth, or work authorisation status.
11. Do not push, deploy, or publish anything until he sees it and likes it.

---
*Audit written 9 November 2026, in `~/workspace/portfolio-v3-rebuild/docs/01-profile-audit.md` only. No other file was edited. No login was attempted anywhere. No push, deploy, or repo creation was done.*
