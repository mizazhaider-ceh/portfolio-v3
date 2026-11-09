# Archive Review: Per-Repo Audit (Gate 13) and VulnNotes Re-read (Gate 15)

**Portfolio V3 rebuild, Phase 8. Date: 9 November 2026. Status: complete.**

**Scope:** `MORE_PROJECTS` entries 10 to 18 in `src/data.ts` (the nine archive candidates), the VulnNotes entry 08 (gate 15), and link-only checks for the four confirmed archive entries 06, 07, 08, 09. Only `src/data.ts` was edited, plus this file as the audit record. No commit, no push, no deploy.

**Method:** for each candidate, the repo was checked with the GitHub API (`api.github.com/repos/mizazhaider-ceh/<name>`, HTTP 200 means it exists), the repo description, language, default branch, and creation date were recorded, and the README was read from `raw.githubusercontent.com` on the `main` branch. Licenses were checked with the API license field, plus a raw fetch of the `LICENSE` file where the API answer was unclear. For names with no repo, GitHub repository search under the user was run and the full public repo list (82 repos) was listed. Nothing was invented: every outcome line below is a restatement of what the README or the API record says.

**Filter bar used:** a filter is assigned only when the README or a manifest directly supports it. Cybersecurity: the tool does security work (pentesting, recon, OSINT, learning security). AI Security: it integrates an LLM or AI provider for security work. Software Engineering: it is a built software product (CLI, app, platform). Automation: its core purpose is automating a workflow. Open Source: a license file is present in the repo. Research: it is a learning or study platform. No filter was assigned on a guess.

## 10. Ai-CMD-X

- **Repo URL:** https://github.com/mizazhaider-ceh/Ai-CMD-X (API 200, created 27 April 2025, language Python, default branch `main`, about 60 KB)
- **README evidence (in my own words):** a Windows command-line assistant that turns plain English into real CMD commands using Google Gemini AI. It has a Quick Mode for one-shot commands and an Interactive Mode where the user reviews, edits, and chooses to run, copy, or cancel the command before anything executes. It also explains commands in simple words, supports short aliases, and stores the Gemini API key in a local `.env` file. It is a real working CLI tool, small in size, with a clear purpose.
- **Outcome line written:** "Plain English to real Windows commands, with safe review before anything runs."
- **Filters assigned:** AI Security (Gemini-powered command generation for terminal work, with a safe review step), Software Engineering (a built Python CLI product).
- **Why no other filters:** no LICENSE file exists in the repo (raw fetch 404), so no Open Source filter. It is a general terminal helper, not a pentesting or recon tool, so no Cybersecurity filter.
- **Could not verify:** whether the tool still runs end to end against the current Gemini API (no live run was done); the README mentions voice commands and Linux support as coming soon, which are not claimed anywhere.

## 11. Icarus-X

- **Repo URL:** https://github.com/mizazhaider-ceh/Icarus-X (API 200, created 3 February 2026, language Python, default branch `main`, about 569 KB)
- **README evidence (in my own words):** a modular penetration testing framework that combines 13+ security tools into one unified CLI. It is built on Python async, with async port scanning, subdomain enumeration, technology fingerprinting, Nuclei CVE scanning, payload generation (reverse shells, XSS, SQLi), and HTML, Markdown, and JSON reporting. Cerebras AI is integrated for attack suggestions, CVE explanations, and bypass techniques. Screenshots of real scans are in the repo. It is a real working framework, the largest of the nine candidates by scope.
- **Outcome line written:** "Modular AI-powered penetration testing framework: 13+ tools for recon, exploitation, and post-exploitation in one CLI."
- **Filters assigned:** Cybersecurity (pentesting framework), AI Security (Cerebras AI analysis), Software Engineering (a substantial async Python codebase), Open Source (MIT LICENSE file confirmed by raw fetch; the file opens "MIT License", copyright 2024-2026 ICARUS-X).
- **Why these filters:** each one is directly supported by the README or the LICENSE file.
- **Could not verify:** whether all 13+ integrated tools run end to end (no live run was done); the GitHub API license field reads NOASSERTION even though the LICENSE file is MIT text, so the raw fetch is the evidence recorded here, not the API field.

## 12. Intel-Scan

- **Repo URL:** https://github.com/mizazhaider-ceh/Intel-Scan (API 200, created 24 July 2025, language Python, default branch `main`, about 6 MB)
- **README evidence (in my own words):** an OSINT framework that unifies DNS lookups (A, AAAA, MX, TXT, NS, SOA, CNAME), WHOIS reports, and multithreaded subdomain scanning in one tool, with two interfaces: a fast scriptable CLI with a rich terminal menu, and a Gradio web GUI for visual analysis and multi-format reporting (TXT, JSON, Markdown). Screenshots of both interfaces are in the repo. It is a real working tool with a documented dual-interface design.
- **Outcome line written:** unchanged, "OSINT framework with a CLI and a web GUI: DNS, WHOIS, and subdomain enumeration." The existing line already matched the README exactly.
- **Filters assigned:** Cybersecurity (OSINT and recon tooling), Software Engineering (a built Python product with CLI and GUI).
- **Why no other filters:** no LICENSE file exists in the repo (raw fetch 404), so no Open Source filter. The README names no AI provider or AI feature, so no AI Security filter.
- **Could not verify:** whether the GUI and CLI still run end to end (no live run was done).

## 13. X-Recon

- **Repo URL:** https://github.com/mizazhaider-ceh/X-Recon (API 200, created 3 February 2026, language Python, default branch `main`, about 1 MB)
- **README evidence (in my own words):** an all-in-one reconnaissance toolkit for penetration testers and bug bounty hunters, at v3.0. It combines async port and subdomain scanning with an AI assistant (Cerebras Llama) for security analysis and a web dashboard with a real-time WebSocket terminal. The README traces the evolution: v1.0 CLI only, v2.0 CLI plus AI, v3.0 CLI plus AI plus web dashboard. It is a real working toolkit with a FastAPI backend.
- **Outcome line written:** "AI-powered reconnaissance toolkit with a web dashboard and a real-time terminal." (Only hyphenation and casing changed from the earlier line; the facts were already right.)
- **Filters assigned:** Cybersecurity (recon toolkit), AI Security (Cerebras Llama analysis), Software Engineering (Python and FastAPI product with CLI and dashboard).
- **Why no other filters:** no LICENSE file exists in the repo (raw fetch 404), so no Open Source filter.
- **Could not verify:** whether the dashboard and AI analysis still run end to end (no live run was done).

## 14. Active Automation

- **Repo URL:** https://github.com/mizazhaider-ceh/active-automation (API 200, created 18 February 2025, language Shell, default branch `main`, about 5 MB)
- **README evidence (in my own words):** a Bash tool that automates active information gathering with Nmap, at v3.1, with 1400+ lines of code and 32+ features. It offers a menu of scripts from basic to advanced: comprehensive scans, individual scans, advanced and specialised scans (including aggressive, full-port, firewall evasion, and NSE vulnerability scans), and a fast Speedy-X scan. It is a real working automation tool with a clear active-recon purpose.
- **Outcome line written:** "Bash scripts automating active recon with Nmap, from basic to advanced scans."
- **Filters assigned:** Cybersecurity (active recon), Automation (its core purpose is automating Nmap workflows), Open Source (MIT license confirmed by the GitHub API).
- **Could not verify:** whether the scripts still run end to end against a current Nmap (no live run was done); the 32+ feature and 1400+ line figures are the README's own claims and are not independently counted here.

## 15. Passive Automation

- **Repo URL:** https://github.com/mizazhaider-ceh/passive-automation (API 200, created 9 February 2025, language Shell, default branch `main`, about 1.6 MB)
- **README evidence (in my own words):** a Bash script, at v3.1, that automates passive reconnaissance: it gathers target information without actively engaging the target and without alerting it. It checks for and uses passive OSINT tools only: host, whatweb, dnsrecon, dig, nslookup, whois, theHarvester, wafw00f, sublist3r, and amass. It is described in the README and the repo description as his first Bash scripting project. It is a real working script with screenshots of it running.
- **Outcome line written:** "Bash script automating passive recon with OSINT tools, gathering target information without alerting the target. His first Bash scripting project."
- **Filters assigned:** Cybersecurity (passive recon), Automation (its core purpose is automating passive gathering), Open Source (MIT license confirmed by the GitHub API).
- **Factual correction made (this review):** the earlier outcome and tags named Nmap ("Bash-powered Nmap automation for passive recon"). That was wrong: the README lists only passive OSINT tools and says nothing about Nmap, and Nmap is an active scanner, which contradicts passive recon by definition. The outcome, the tags (Nmap replaced with OSINT), and the code strip (now "Bash-powered passive recon, OSINT tools, no active scanning") were all corrected.
- **Could not verify:** whether the script still runs end to end (no live run was done).

## 16. Prime-PenTrix

- **Repo URL:** https://github.com/mizazhaider-ceh/Prime-PenTrix (API 200, created 6 February 2026, language TypeScript, default branch `main`, about 1 MB)
- **README evidence (in my own words):** an AI-powered cybersecurity learning platform, v3.2.0, built with Next.js 16, React 19, TypeScript, FastAPI, PostgreSQL 16 with pgvector, and Docker. It has multi-provider LLM chat with streaming (Cerebras, Gemini, OpenAI), a hybrid RAG engine (pgvector plus BM25) over uploaded PDFs, AI-generated quizzes with spaced repetition, 24+ security toolkits, 8 subjects, and Clerk OAuth authentication. The README calls it the third major version of the Sentinel Copilot project, rewritten from vanilla JavaScript into TypeScript. It is a real, substantial full-stack platform. The existing `counts` value "24+ tools" is confirmed by the README.
- **Outcome line written:** unchanged, "AI cybersecurity learning platform: hybrid retrieval, multi-provider LLM streaming, spaced repetition quizzes, and 24+ tools." The existing line already matched the README and the repo description exactly.
- **Filters assigned:** Cybersecurity (security learning platform), AI Security (LLM chat, RAG, AI quizzes), Software Engineering (full-stack TypeScript product), Research (a learning platform, like PowerShell Academy).
- **Why no Open Source filter:** the README carries an MIT badge, but no LICENSE file exists in the repo (raw fetch 404) and the GitHub API license field is empty. A badge alone does not verify an open-source license, so the filter was withheld. This is recorded here so a later phase can check it again rather than assume it.
- **Could not verify:** whether the platform still builds and runs end to end (no live run was done); the README metric claims (25,000+ lines, 55 tests, 0 build errors) are the README's own claims and are not independently verified here. The README also names a university affiliation for the project; that name is not reproduced in public copy, per the content model rule.

## 17. Scapy-based tools: Unverified, stays name-only

- **Repo URL:** none confirmed. Link left empty.
- **Evidence:** GitHub repository search for `scapy` under user `mizazhaider-ceh` returned 0 results, and the full public repo list (82 repos, fetched 9 November 2026) holds no repo with Scapy in its name. No repo, README, or manifest could be read.
- **Outcome line written:** "Investigation candidate. No matching repo found under this name in the 9 November 2026 review."
- **Filters assigned:** none. The entry shows under All only.
- **Strip and note:** both are placeholder notes, not code samples: "# no matching repo found under this name" and "# per-repo review, 9 November 2026". The note reads "No matching repo found in the 9 November 2026 review".
- **What could not be verified:** everything. Whether Scapy-based tools exist as a repo under a different name, what problem they solve, and what stack they use are all unknown. A differently named repo that uses Scapy (for example a packet sniffer project) was not treated as a match, because the audit only has the name and a match must be by name.
- **Caveat:** the `status` field still reads "Repo" only because the Project type allows Live, Repo, or Course project and there is no "Unverified" status value. The empty link and the Unverified verification field are what mark it as name-only.

## 18. LINA: Unverified, stays name-only

- **Repo URL:** none confirmed. Link left empty.
- **Evidence:** GitHub repository search for `LINA` under user `mizazhaider-ceh` returned 0 results, and the full public repo list (82 repos, fetched 9 November 2026) holds no repo named LINA. No repo, README, or manifest could be read.
- **Outcome line written:** "Investigation candidate. No matching repo found under this name in the 9 November 2026 review."
- **Filters assigned:** none. The entry shows under All only.
- **Strip and note:** both are placeholder notes, not code samples: "# no matching repo found under this name" and "# per-repo review, 9 November 2026". The note reads "No matching repo found in the 9 November 2026 review".
- **What could not be verified:** everything. What LINA stands for, what problem it solves, and whether it is a tool, a library, or something else are all unknown.
- **Caveat:** the `status` field still reads "Repo" for the same type reason as entry 17. The empty link and the Unverified verification field are what mark it as name-only.

## Gate 15: VulnNotes re-read (entry 08)

**Files re-read 9 November 2026:** `~/workspace/user/files/vulnnotes-build-guide.html` (465,712 bytes) and `~/workspace/user/files/vulnnotes-project-guide.html` (120,269 bytes). The paths named in the task (`~/workspace/your_files/vulnnotes-*.html`) do not exist; the guides were found by searching `~/workspace` and live in `~/workspace/user/files/` and in `~/workspace/goals/mobile-security-lab-sprint/files/`.

**What the guides confirm:**

1. **Team split, confirmed.** The project guide states: "Group23: Muhammad Izaz Haider (lead, Android app) + Muhammad Muzammil Khan (Flask API, Frida scripts, demo prep)". It also states "izaz leads the build and makes architectural calls. Muzammil owns the backend and the attack tooling." A responsibility table gives Muzammil "Flask API (all endpoints incl. IDOR + signed search), Frida scripts, demo rehearsal, Burp setup". The build guide states "Muzammil's API is the ground truth for every DTO."
2. **Course-project label, confirmed.** The project guide describes VulnNotes as "the Mobile Security group project (70% of the module grade)" with the weight split "app 30, device 5, peer 5, demo 30". The 70 percent figure is a course weight, not a project outcome, and stays out of the public outcome line per the content model.
3. **No public repo, confirmed.** Neither guide links to any GitHub repo, and GitHub repository search for `vulnnotes` under user `mizazhaider-ceh` returned 0 results.
4. **Demo is individual, confirmed.** The project guide states "demo is individual."

**What changed in `src/data.ts`:** nothing except the `verification` field, which now records the re-read ("Re-read 9 November 2026, gate 15: build guide and project guide re-read, team split and course-project label confirmed, no public repo (GitHub search for vulnnotes returned 0 results). No correction needed."). The outcome ("Deliberately vulnerable notes app, built with Muhammad Muzammil Khan. Course project, no public repo."), the collaboration line, the tags, the role ("Build lead"), and the empty link were all already correct and were left untouched.

## Confirmed archive entries: link-only check (06, 07, 09)

| Entry | Link in `src/data.ts` | Check 9 November 2026 |
|---|---|---|
| 06 Ai-Terminal-X | https://github.com/mizazhaider-ceh/Ai-Terminal-X | API 200, resolves |
| 07 AgentArsenal | https://github.com/mizazhaider-ceh/AgentArsenal | API 200, resolves |
| 08 VulnNotes | (empty, no public repo) | No link to check; absence re-confirmed by GitHub search, 0 results |
| 09 90DaysOfCyberSecurity | https://github.com/mizazhaider-ceh/90DaysOfCyberSecurity | API 200, resolves |

No outcome line of a confirmed entry was rewritten: no factual error was found in any of them. Their verification fields were left as they were, except VulnNotes, whose verification now records the gate 15 re-read above.

## Summary

| Entry | Result | Filters now |
|---|---|---|
| 10 Ai-CMD-X | Verified, repo and README read | AI Security, Software Engineering |
| 11 Icarus-X | Verified, repo and README read | Cybersecurity, AI Security, Software Engineering, Open Source |
| 12 Intel-Scan | Verified, repo and README read | Cybersecurity, Software Engineering |
| 13 X-Recon | Verified, repo and README read | Cybersecurity, AI Security, Software Engineering |
| 14 Active Automation | Verified, repo and README read | Cybersecurity, Automation, Open Source |
| 15 Passive Automation | Verified, repo and README read, one factual correction (Nmap removed) | Cybersecurity, Automation, Open Source |
| 16 Prime-PenTrix | Verified, repo and README read | Cybersecurity, AI Security, Software Engineering, Research |
| 17 Scapy-based tools | Unverified, no matching repo found | None |
| 18 LINA | Unverified, no matching repo found | None |

## Open items for a later phase

1. **Live runs.** No repo in this review was executed. A later phase that wants to claim a tool works end to end must run it and record the run.
2. **Prime-PenTrix license.** The MIT badge without a LICENSE file should be re-checked; either the file is added to the repo or the open-source claim stays withheld.
3. **Icarus-X license field.** The GitHub API license field reads NOASSERTION while the LICENSE file is MIT text. If the API field matters to any later display, it should be re-checked after the repo metadata refreshes.
4. **Scapy-based tools and LINA.** Both need a source beyond the name before they can be presented as more than names: a repo URL, or a statement from Izaz of what they are and where they live.
5. **README metric claims.** Figures quoted from READMEs in this review (32+ features, 1400+ lines, 13+ tools, 24+ tools, 25,000+ lines, 55 tests) are the READMEs' own claims. Only "24+ tools" is carried into `src/data.ts` as a count, with source "Repo", as before.
