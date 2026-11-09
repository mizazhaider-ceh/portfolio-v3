# Verification record: Phase 8 content gates (9 November 2026)

**Scope:** gates 1, 2, 3, 8, 9, 10, 11, 12 from `docs/07-content-model.md`, plus the two known data issues (PenTrix-VulnLab outcome wording variance, stale PowerShell repo README counts). All checks run 9 November 2026. No fact was invented. Where a gate could not be verified, the field was left as it was and the gate is marked Unverified below.

**Method notes:** GitHub API calls used a token from `git credential fill` (protocol=https, host=github.com), held in a shell variable and never printed. The contributors endpoint was paginated at `per_page=100`. Live site reads are text fetches (browser.open) with the crawl time noted per check.

## Gate 1: sole-builder claims

| Project | Repo | Contributors endpoint result | Verdict |
|---|---|---|---|
| PowerShell Academy | `mizazhaider-ceh/my-powershell-academy` | Exactly one contributor: `mizazhaider-ceh`, 8 contributions | **Verified.** `src/data.ts` verification field updated to record this. Role stays "Sole builder". |
| APK Security Pipeline | `mizazhaider-ceh/apk-security-pipeline` | Exactly one contributor: `mizazhaider-ceh`, 6 contributions | **Verified.** `src/data.ts` verification field updated to record this. Role stays "Sole builder". |
| BugHunt Arsenal | No repo exists (see Gate 9) | No contributors endpoint to call | **Unverified.** No repo means sole builder cannot be checked. Role left as "Sole builder" in `src/data.ts`, verification field now states the claim is unverified and why. |

## Gate 2: PowerShell Academy 102 commands

**Verified, figure kept.** Live commands page `https://powershell-academy-seven.vercel.app/commands`, crawled 9 November 2026 01:36 UTC, line 8 reads "Showing 102 of 102 commands." The `102 commands` count in `src/data.ts` already carried the 9 November 2026 re-verification note, so no edit was needed. No figure was dropped.

## Gate 3: Security-Books star count

**Verified intact, nothing hardcoded.** The live-fetch path in `src/routes/projects/SecurityBooks.tsx` (lines 292-323) is intact: it fetches `https://api.github.com/repos/mizazhaider-ceh/Security-Books`, reads `stargazers_count`, shows it with its fetch date, and omits the number when the fetch returns nothing. A grep of `src/` found no hardcoded star count. Spot-check only, recorded here and never in `src/`: the GitHub API returned **139 stars** for `mizazhaider-ceh/Security-Books` on 9 November 2026.

## Gate 8 and 9: BugHunt Arsenal stack and repo existence

**No repo exists. Both gates stay open (Unverified).**

- Full public repo list for `mizazhaider-ceh` fetched from `GET /users/mizazhaider-ceh/repos?per_page=100` (page 1 returned 82 repos, page 2 returned 0). No repo named BugHunt or similar exists. The only names containing "hunt" are `Auth-Hunter`, `Recon-Hunter`, `Sub-Hunter`, and `XSS-Hunter`, none of which is BugHunt Arsenal. Related arsenal repos exist (`pentrix-arsenal`, `SE-Arsenal`, `AgentArsenal`) but none is BugHunt Arsenal.
- The live site `https://bughunt-arsenal.vercel.app/` (crawled 9 November 2026 01:37 UTC) links no GitHub repo anywhere in its crawled text. Its own copy calls the product "open-source" (hero line and "The #1 open-source bug bounty arsenal"), but with no repo to point at, the open-source claim stays out of portfolio copy, per the content model rule.
- Consequence recorded in `src/data.ts`: BugHunt verification field now states no repo exists, sole builder and stack cannot be verified, no repo link, no open-source claim. Tags stay "Browser app" (a platform description, not a stack claim). The detail page `src/routes/projects/BugHuntArsenal.tsx` line 20 still hardcodes the facts line "Role: Sole builder, Stack: Browser app, Status: Live" outside `src/data.ts`; this file was out of scope for this task (data.ts only), so the coordinator should decide before publishing whether that line needs softening.
- Note: the live site's own stat strip contradicts its headline (strip: 364+ payloads, 26+ CTF tools, 52% free; headline: 800+ payloads, 60+ CTF tools). The portfolio keeps headline figures only, as the model already requires.

## Gate 10: APK Security Pipeline 64 tests

**Verified, figure kept at v2.1.0.** Live README at `https://raw.githubusercontent.com/mizazhaider-ceh/apk-security-pipeline/main/README.md`, crawled 9 November 2026 01:37 UTC: badge line reads version `v2.1.0` and tests `64 passing`; the body states "64 tests, all passing" (line 322 in the local workspace copy at `~/workspace/apk-security-pipeline/README.md`, which matches the live README). `src/data.ts` count source updated to record the 9 November 2026 re-check.

## Gate 11: AgentArsenal counts

**Verified, figures unchanged.** Workspace manifest `~/workspace/agent-arsenal/arsenal-manifest.json`, `generated_at` 2026-10-27T15:29:52Z, counted directly: **353 skills, 290 sub-skills, 36 agents, 29 domains**. All four match `src/data.ts` exactly, so no number changed. The count sources in `src/data.ts` were updated from "prior pass" to "re-checked 9 November 2026". The source line stays beside the numbers on the detail page: `src/routes/projects/AgentArsenal.tsx` lines 174-175 state the counts come from the workspace manifest, generated 27 October 2026, not from the GitHub API.

## Gate 12: build year per featured project

Repo `created_at` from the GitHub API, 9 November 2026. All five years in `src/data.ts` were already 2026 and all five are correct, so no year changed.

| Project | Repo | `created_at` | Year in `src/data.ts` | Verdict |
|---|---|---|---|---|
| PenTrix-VulnLab | `mizazhaider-ceh/PenTrix-VulnLab` | 2026-02-19T14:38:25Z | 2026 | Correct |
| PowerShell Academy | `mizazhaider-ceh/my-powershell-academy` | 2026-11-04T00:48:32Z | 2026 | Correct |
| BugHunt Arsenal | No repo confirmed | Not applicable | 2026 | **Unverified by repo record.** Kept as the year of verified public activity (live site verified 9 November 2026). |
| APK Security Pipeline | `mizazhaider-ceh/apk-security-pipeline` | 2026-10-28T09:18:38Z | 2026 | Correct |
| Security-Books | `mizazhaider-ceh/Security-Books` | 2026-02-23T22:01:08Z | 2026 | Correct |

## Known data issue 1: PenTrix-VulnLab outcome wording variance

**Already resolved in `src/data.ts`, no edit needed.** The single shared outcome field (line 138, and the PENTRIX section line 625) already uses the home-and-projects wording: "A deliberately vulnerable learning lab where students learn offensive security by exploiting real vulnerability classes in a safe, local environment." The case-study spec wording ("A deliberately vulnerable lab where students learn web penetration testing by exploiting real vulnerability classes in a safe, local environment.") appears nowhere in `src/`. Choice recorded: home-and-projects wording wins for the shared field, per the task instruction.

## Known data issue 2: stale PowerShell repo README counts

**Confirmed absent.** Grep of `src/` for the stale counts (16 modules, 35 lessons, 97 cmdlets, 117 glossary terms) returned zero matches. No removal was needed.

## Gates summary

- Closed: Gate 1 (PowerShell Academy, APK Security Pipeline), Gate 2, Gate 3, Gate 10, Gate 11, Gate 12 (four of five repos; BugHunt has no repo record).
- Open (Unverified): Gate 1 for BugHunt Arsenal (no repo to check), Gate 8 (BugHunt stack, no repo to verify from), Gate 9 (BugHunt repo existence, confirmed absent), Gate 12 for BugHunt year (no repo record; year kept as live-activity year only).

## Files changed

- `src/data.ts` (5 edits, all in verification or count-source strings, no copy or number changed):
  1. PowerShell Academy `verification`: sole builder now recorded as verified (one contributor, 8 contributions, 9 November 2026).
  2. BugHunt Arsenal `verification`: records that no repo exists (82 public repos checked), sole builder and stack unverified, no repo link, no open-source claim.
  3. APK Security Pipeline `verification`: sole builder now recorded as verified (one contributor, 6 contributions, 9 November 2026).
  4. APK `64 tests passing at v2.1.0` count source: now records the 9 November 2026 live README re-check.
  5. AgentArsenal both count sources: "prior pass" changed to "re-checked 9 November 2026".
- `docs/08-verification.md` (this file): audit record, created by this task.

## Verification runs (9 November 2026)

- `npx tsc --noEmit -p tsconfig.app.json`: passed, zero errors, exit 0.
- `npm run build`: passed, built in 8.15s, exit 0 (postbuild `stamp-css` ran clean).
- Forbidden-string sweeps of `src/`, all zero: em dashes 0; Arsenal tokens (`#5A45D6`, `#B8F34A`, `#EEE8FF`, `#C7B8F5`, `#FAF9F5`) 0; `269/269` 0; `16.40/20` 0; institution names (Howest and others) 0; stale PowerShell README counts 0; hardcoded star count 0. The word "Arsenal" appears 49 times, all inside the project names BugHunt Arsenal and AgentArsenal (including the component name `BugHuntArsenal` and "the Arsenal" as shorthand for BugHunt Arsenal in its own case-study page copy). No em dash in `src/data.ts` or in this file.
- Note: the working tree also holds edits by other Phase 7 agents in progress (`src/routes/projects/*.tsx`, `src/routes/Expertise.tsx`, `src/components/diagrams/SkillsTree.tsx`, new `src/components/CaseStudy.tsx`). Those are not mine and were not touched by this task. Only `src/data.ts` and this file are mine.
