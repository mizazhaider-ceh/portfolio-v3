# Project Selection and Case Study Architecture: Portfolio V3 Rebuild

Phase 3. Date: 9 November 2026.
Sources: docs/01-profile-audit.md (project tiers, 26 gaps),
docs/01-repo-audit.md (existing 6 project detail pages),
docs/02-ux-video-research.md (9-part case-study template, evidence order).
Hard rules applied: no em dashes, no bounty program names, report titles,
IDs, endpoints, or reward amounts, no test-pass counts, no invented
experience, grades, skills, benchmarks, users, downloads, vulnerabilities,
production deployments, or business outcomes, personal contributions
distinguished from team contributions, unfinished projects labelled
accurately, no PenTrix flag storage disclosure, no fake screenshots.

## 1. Ranking

Ranked by technical complexity, originality, actual implementation,
practical usefulness, engineering quality, documentation, visual
demonstration potential, and relevance to his identity. Evidence is from
the profile audit and public sources read in this pass. Where evidence
was thin, that is stated.

| Rank | Project | Why it ranks here | Evidence |
|---|---|---|---|
| 1 | PenTrix-VulnLab | Flagship. A deliberately vulnerable learning lab he founded, 201 challenges across 29 modules, the clearest proof of offensive security thinking and teaching. | Public repo, architecture diagram, module list. Supported by project documentation. |
| 2 | PowerShell Academy | A complete free learning platform, live, 18 chapters, 61 lessons, 48 glossary terms, command reference, search, quizzes. The clearest proof of building at scale and teaching. | Live site, repo. Supported by project documentation. |
| 3 | BugHunt Arsenal | A live browser-based security research platform with a payload browser. Strong concept and live product, but numbers need correction before presentation (see section 4). | Live site. Supported by project documentation, with contradictions flagged. |
| 4 | APK Security Pipeline | A working Python CLI with its own binary parser, deep mode, Frida scripts, HTML and JSON reports, scoring, and tests. The clearest proof of deep technical engineering. | Public repo, test report. Supported by project documentation. |
| 5 | Security-Books | A curated security book collection, 139 stars at audit date, the most starred repo. Proof of curation and community value, but thinner engineering than the top four. | Public repo, live star count. Supported by project documentation. |
| 6 | Ai-Terminal-X | Turns plain language into terminal commands with AI. 38 stars, his most starred tool at the time it was recorded. Strong AI-security positioning. | Public repo. Supported by project documentation. |
| 7 | AgentArsenal | 353 top skills plus 290 sub-skills, 29 domains, 36 agents, MCP server. Large and ambitious, but breadth makes it harder to prove depth in one case study. | Public repo. Supported by project documentation. |
| 8 | VulnNotes | Group course project, 70 percent of the module. He leads the build, Muhammad Muzammil Khan owns the Flask API including IDOR and the Frida scripts. No public repo, so evidence is thinner. | Course project records. Experimental or in progress. |
| 9 | 90DaysOfCyberSecurity | 90 daily tasks in 10 phases plus a career track, PenTrix integrated. Useful as an archive entry, not a featured case study. | Public repo. Supported by project documentation. |
| 10 | AI-CMD-X, Icarus-X, Intel-Scan, X-Recon, Active Automation, Passive Automation, Scapy-based tools, LINA, Prime-PenTrix | Investigation candidates with thinner evidence in the audit sources. Archive entries unless a later phase verifies a stronger claim for one of them. | Repo listings. Self-reported or Unverified, per project. |

## 2. Selection and cuts

Detailed case studies (5): PenTrix-VulnLab, PowerShell Academy,
BugHunt Arsenal, APK Security Pipeline, Security-Books. Five is the
right count: three to five polished case studies outperform ten shallow
ones, each takes 5 to 10 minutes to review, and the first project
carries the verdict.

Compact archive entries (the rest): Ai-Terminal-X, AgentArsenal,
VulnNotes, 90DaysOfCyberSecurity, and the remaining candidates, each as
a compact card with a one-line problem, stack tags, and a repo link.
No featured-weight cards for thin repos. No star counts hardcoded:
fetch live or omit.

Cuts and their reasons:
- Ai-Terminal-X and AgentArsenal are cut from detailed case studies,
  not from the site. Ai-Terminal-X is strong but overlaps with
  AgentArsenal and the AI-security dimension is thinner than the
  offensive-security dimension, so it supports rather than leads.
  AgentArsenal is broad and impressive in count, but a case study
  cannot prove depth across 643 skills in one page. Both stay visible
  in the archive and in the Expertise section.
- VulnNotes is cut from detailed case studies because it has no public
  repo and is a course project in progress. It stays in the archive
  with its status labelled accurately, and the team split is named.
- The remaining candidates (AI-CMD-X, Icarus-X, Intel-Scan, X-Recon,
  Active Automation, Passive Automation, Scapy-based tools, LINA,
  Prime-PenTrix) are archive entries only, unless a later phase
  verifies a stronger claim for one of them. No claim about them may
  outrun its evidence.

## 3. Case study template (all project detail pages)

1. Title, one-line outcome, and three facts (role, stack, status: live,
   repo, or course project).
2. Sticky index: Problem, My role, Decisions, How it was built,
   Evidence, What I would improve, Links.
3. Problem (2 to 4 short lines).
4. My role (named ownership, named collaborators where they exist).
5. Decisions (2 to 3 decisions, each with alternatives and trade-off).
6. How it was built (architecture, key files or modules, sample output,
   not a full code dump).
7. Evidence (live demo, repo, screenshots of real output, verified
   counts beside their source).
8. What I would improve (honest, specific, 2 to 3 items).
9. Links (live demo where it exists, repo, and a next-project link).

Reading time target: 5 to 10 minutes for a featured case study. If a
draft takes longer, cut copy, not evidence.

## 4. Case study outlines (featured five)

### PenTrix-VulnLab (rank 1, flagship)

- Summary: a deliberately vulnerable learning lab he founded and
  developed, where students learn offensive security by exploiting real
  vulnerability classes in a safe, local environment.
- Problem: learning labs either hand you the answer or give you a
  black box with no path from finding to fixing.
- Why it matters: it teaches the method, not just the exploit, and it
  is the work that best shows how he thinks as an attacker and as a
  teacher.
- Role: founder, lead developer, challenge designer, documentation
  author. Personal contributions named; no team claim.
- Architecture: Express and SQLite application, 201 challenges across
  29 modules, per-install flag generation. Architecture diagram
  (existing Archify diagram, restyled, not redrawn from scratch
  unless Phase 4 requires it).
- Technologies: Node.js, Express, SQLite, JavaScript, HTML, CSS.
- Decisions: deliberately vulnerable by design, with a safe local
  install; challenges graded by class, not by trick; flags generated
  per install so no flag literal exists in any tracked file.
- Key features: 201 challenges, 29 modules, guided progression,
  documentation.
- Challenges: keeping a vulnerable app safe to run locally, designing
  challenges that teach rather than frustrate, documenting the method.
- Security considerations: the lab must never be deployed publicly
  (repo states this). The case study links to the repo only, never a
  live deployment. Flag storage is described only with the approved
  sentence.
- Demonstrations: architecture diagram, module browser, sample
  challenge walkthrough using only real screenshots.
- Results and limitations: honest. It is a learning lab, not a
  commercial product. No user, download, or deployment counts claimed.
- Future direction: as recorded in the project repo, not invented.

### PowerShell Academy (rank 2)

- Summary: a free learning platform that teaches PowerShell from zero
  to confident use, 18 chapters, 61 lessons, 48 glossary terms, with a
  searchable command reference, quizzes, and a single-column reading
  flow.
- Problem: PowerShell learning material is scattered, and beginners
  need a single path from first command to real administration.
- Why it matters: it is a complete product, live, maintained, and used,
  built from an original curriculum with verified commands.
- Role: sole builder (verify against the repo before publishing; if
  any contribution was shared, name it).
- Architecture: Next.js App Router, React, TypeScript, structured
  content data, generic lesson renderer, client-side search index.
- Technologies: Next.js, React, TypeScript, plain CSS.
- Decisions: structured data plus one renderer instead of a page per
  lesson; plain CSS instead of Tailwind for reliability and bundle
  size; single-column lessons with no competing sidebar.
- Key features: 18 chapters, 61 lessons, 102 commands, 48 glossary
  terms, quizzes, search, theme switching, responsive layouts.
- Challenges: keeping 61 lessons consistent, verifying every command
  against documentation, keeping the reading flow clean at mobile
  widths.
- Security considerations: no command execution in the browser, no
  accounts, no data collection.
- Demonstrations: live site link, screenshots of the lesson reader and
  the command reference.
- Results and limitations: live and maintained. No user or traffic
  counts claimed.

### BugHunt Arsenal (rank 3, corrections required before presentation)

- Summary: a live browser-based security research platform with a
  payload browser and CTF tooling.
- Problem: security researchers keep payloads and tools scattered
  across notes, repos, and browser tabs.
- Role: sole builder (verify against the repo before publishing).
- Architecture: browser-based platform, payload categories, CTF tools.
  Verify the stack from the repo before publishing.
- CORRECTIONS REQUIRED BEFORE THIS CASE STUDY SHIPS:
  1. The headline counts (800+ payloads, 60+ CTF tools, 14+ modules)
     contradict the on-page stat strip (336+ payloads, 24+ CTF tools,
     12+ modules). One set must be verified against the actual
     product and the other removed. Do not publish both.
  2. "48% free" is meaningless. Remove it or replace it with a
     verifiable statement.
  3. The "open-source" claim is Unverified (no repo was found in his
     81 public repos). Either verify a repo exists or remove the claim.
- Demonstrations: live site link, payload browser screenshots.
- Results and limitations: honest. No user or download counts claimed.

### APK Security Pipeline (rank 4)

- Summary: a Python CLI that scans Android APKs for security issues,
  with its own binary AndroidManifest parser and writer, deep analysis
  mode, Frida scripts, and HTML and JSON reports.
- Problem: APK security tools are heavy, and a lightweight, explainable
  scanner that shows its reasoning is more useful for learning and
  for quick triage.
- Role: sole builder (verify against the repo before publishing).
- Architecture: pure-stdlib Python CLI, own binary AXML parser and
  writer, deep mode using apktool, jadx, and androguard, 4 Frida
  scripts, scoring 100 minus critical 25, high 15, medium 7, low 3,
  exit codes 0 clean, 2 findings at or above the threshold, 1 clean
  error, never a traceback.
- Technologies: Python, Frida, apktool, jadx, androguard.
- Decisions: own parser instead of depending on a library, so the
  tool stays explainable; a setup command that installs only missing
  tools; masked secrets in reports.
- Key features: scan of APK, directory, or manifest, deep mode,
  per-tool HTML sections, explain logging for every stage.
- Challenges: the attributeStart bug found on a real APK (attribute
  start is relative to the end of the node header), fixed and verified
  against androguard on 3 real APKs. Present this as evidence of
  debugging, not as a flaw.
- Security considerations: the tool analyses APKs, it does not
  execute them; findings are reported, not exploited.
- Demonstrations: sample report, demo run on a synthetic APK (score
  26 out of 100, grade F, 12 findings, as recorded in the v2 build).
- Results and limitations: 64 tests passing at v2.1.0. No user or
  download counts claimed.

### Security-Books (rank 5)

- Summary: a curated collection of security books, his most starred
  repository.
- Problem: good security reading is scattered and hard to choose
  between.
- Role: curator and maintainer.
- Architecture: a curated list repository, organised by topic.
  Verify the structure from the repo before publishing.
- Results and limitations: 139 stars at audit date. Star count must
  be fetched live or omitted, never hardcoded. No download or user
  counts claimed.
- Future direction: as recorded in the repo, not invented.

## 5. PenTrix deep treatment

The PenTrix is presented as an initiative he founded and developed, not
as a course assignment and not as a commercial product. The case study
and the About page together carry: mission (a deliberately vulnerable
learning lab where students learn offensive security by exploiting real
vulnerability classes in a safe, local environment), why it exists (he
wanted a lab that teaches the method, not just the exploit), technical
focus (web vulnerabilities, authentication and authorisation flaws,
injection, and surrounding tooling), educational activities (the lab,
its documentation, its use as a teaching vehicle), practical resources
(the repo, the challenge set, the documentation), community impact only
where verifiable (none claimed without evidence), and his
responsibilities (founder, lead developer, challenge designer,
documentation author).

## 6. Project filters for the Work page

Filters, only where they reflect verified work: All, Cybersecurity,
AI Security, Software Engineering, DevSecOps, Automation, Open Source,
Research. Assignments:
- PenTrix-VulnLab: Cybersecurity, Open Source, Research.
- PowerShell Academy: Software Engineering, Research, Open Source.
- BugHunt Arsenal: Cybersecurity, AI Security (only if the AI
  dimension is verified from the repo; otherwise Cybersecurity only).
- APK Security Pipeline: Cybersecurity, Software Engineering,
  Automation.
- Security-Books: Cybersecurity, Research, Open Source.
- Ai-Terminal-X: AI Security, Software Engineering.
- AgentArsenal: AI Security, Software Engineering, Open Source.
- VulnNotes: Software Engineering, Cybersecurity (course project,
  labelled as such).
- 90DaysOfCyberSecurity: Cybersecurity, Research, Open Source.
Filters with no verified project behind them must not appear. If a
later phase verifies a project for a filter, it may be added then.
