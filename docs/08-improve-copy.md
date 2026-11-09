# "What I would improve" copy audit

**Portfolio V3 rebuild, Phase 8 copy. Date: 9 November 2026. Status: finalised copy on the pages, stronger wording held for izaz approval.**

**Rule applied (content model gate 14, case study spec section "What this spec could not specify" item 7):** the improvements in the case study spec are proposed direction tied to recorded limitations. Final wording must stay within the recorded limitations for that project. Where a published line went beyond a recorded limitation, it was rewritten to stay within the recorded limitation, and the stronger wording is listed below with the exact line quoted, needing izaz approval before it can be published. Nothing was invented: no new improvement, no new limitation, no result without a source.

**Method:** each page's section was read against the case study spec section 2 proposed direction for that project and against the content model. The v2 baseline (commit `9e2be36`) has no "What I would improve" section on any of these pages, so all published improve copy was fresh Phase 7 copy, not carried from v2. No v2 line supports any removed wording.

**Reachability:** no page was missing the section. All seven pages render `<Section id="what-i-would-improve" title="What I would improve">`, and the shared shell (`src/components/CaseStudy.tsx`, `SECTIONS`) lists "What I would improve" with the same id, so the section is reachable from the sticky in-page index on desktop and from the compact jump list below 1024px on every page. Nothing had to be fixed for reachability.

## 01 PenTrix-VulnLab (`src/routes/projects/PentrixVulnLab.tsx`)

### Final copy as it now stands

1. **Filter by vulnerability class.** Next would be a filter by vulnerability class, so a learner finds the next challenge among 201 without scrolling.
2. **Clearer setup guidance for a first install.** Next would be clearer setup guidance for a first local install, naming the one step learners most often miss, so a learner knows whether the install worked.
3. **Deeper fix guidance after a solve.** Next would be deeper fix guidance after a challenge is solved, so the step from exploit to fix is as guided as the step from finding to exploit.

### Recorded limitation each item rests on

1. Spec section 2.1, proposed direction 1: finding one challenge among 201 takes scrolling without a filter or search in the module browser.
2. Spec section 2.1, proposed direction 2: setup guidance for a first local install is unclear, and the step learners most often miss is not named.
3. Spec section 2.1, proposed direction 3: fix guidance after a solve is thinner than the guidance from finding to exploit.

### Stronger wording needing izaz approval before publishing

Item 2 was softened. The published line went beyond the recorded limitation by naming a specific form (a setup page with exact expected output) and an unverified timing claim ("within a minute"):

> "Next would be a setup page that shows the exact command to start the lab and the exact output to expect, so a learner knows within a minute whether the install worked."

Item 3 was replaced. The published line was an invented improvement with no recorded limitation behind it (no spec direction, no audit note, names a map page the spec never proposes):

> "Next would be a single map page: each vulnerability class, its modules, and the kill chain it feeds, so a learner sees the whole path before starting the first challenge."

## 02 PowerShell Academy (`src/routes/projects/PowershellAcademy.tsx`)

### Final copy as it now stands

1. **A check that catches a stale lesson.** Next would be a check that catches a stale lesson when a command changes, so all 61 lessons stay consistent.
2. **A path from a command back to its lesson.** Next would be a clearer path from the command reference back into the lesson that teaches it, so a reader who finds a command finds its lesson in one tap.
3. **A mobile reading check for the longest lesson.** Next would be a mobile reading check at 375px for the longest lesson, so a lesson that breaks on a phone is caught before a reader meets it.

### Recorded limitation each item rests on

1. Spec section 2.2, proposed direction 1: keeping 61 lessons consistent when a command changes needs a check that catches a stale lesson.
2. Spec section 2.2, proposed direction 2: a reader who finds a command in the reference has no clear path back to the lesson that teaches it.
3. Spec section 2.2, proposed direction 3: the longest lesson has no recorded mobile reading check at 375px.

### Stronger wording needing izaz approval before publishing

All three published items were replaced. None matched a recorded limitation:

1. A page gap, not a product improvement. The lesson reader screenshot belongs in Evidence (spec section 2.2 visuals), not in this section:

> "Next would be a lesson reader screenshot on this page, so a visitor sees a real lesson before opening the site."

2. Contradicts the page itself. The Evidence section states the commands page already has "a search by verb and chapter", so a search feature is not a missing improvement:

> "Next would be a search across all 102 commands, so a learner finds a cmdlet by what it does, not only by its chapter."

3. An invented feature. No recorded limitation mentions progress tracking:

> "Next would be a progress marker that remembers the last lesson read, stored only in the browser, so a learner returns to where they stopped."

## 03 BugHunt Arsenal (`src/routes/projects/BugHuntArsenal.tsx`)

### Final copy as it now stands

1. **One set of figures across the whole site.** Next would be one set of figures across the whole site. The headline and the on-page strip disagree on payloads, CTF tools, and modules today, so the strip should read from the same counts as the headline.
2. **A clearer statement of what is free.** Next would be a clearer statement of what is free, in plain words, replacing any percentage with a verifiable sentence.
3. **A check that every payload matches the live site.** Next would be a check that every payload in the browser matches the live site, so the portfolio sample and the live product do not drift.

### Recorded limitation each item rests on

1. Spec section 2.3, proposed direction 1: the live site headline and stat strip disagree on payloads, CTF tools, and modules. Item 1 names the three figures that disagree without repeating the wrong figures on the portfolio page, as the spec requires.
2. Spec section 2.3, proposed direction 2: what is free is stated with a percentage ("48% free" is forbidden, meaningless beside the free claim), and needs a plain-words verifiable sentence instead.
3. Spec section 2.3, proposed direction 3: the portfolio sample and the live product can drift unless every payload is checked against the live site.

### Stronger wording needing izaz approval before publishing

Item 2 was replaced. The published line proposes linking a repo that is not confirmed to exist, and it contradicts the Links section on the same page ("No repo link: no repo is confirmed for BugHunt Arsenal"). Content model open item 9 (confirm whether a repo exists) must be resolved first:

> "Next would be a repo link for the open-source wording on the live site, so the claim is backed by the code it points to."

Item 3 was replaced. The published line was an invented feature with no recorded limitation behind it:

> "Next would be a payload search that filters by target and impact, so a hunter finds the right probe without opening every category."

## 04 APK Security Pipeline (`src/routes/projects/ApkPipeline.tsx`)

### Final copy as it now stands

1. **A clearer explain log for the deep mode step.** Next would be a clearer explain log for the deep mode step, so a reader can tell which tool produced which finding.
2. **A smaller default report for a clean run.** Next would be a smaller default report for a clean run, so a 100 out of 100 result does not read as an empty report.
3. **A re-run of the 64 tests at the current version.** Next would be a re-run of the 64 tests at the current version before the next release, so the test count on the page matches the repo at handover.

### Recorded limitation each item rests on

1. Spec section 2.4, proposed direction 1: the deep mode explain log does not say which tool produced which finding.
2. Spec section 2.4, proposed direction 2: a clean run at 100 out of 100 reads as an empty report.
3. Spec section 2.4, proposed direction 3: the 64 tests figure comes from the README in a prior pass and was not re-run, so it must be re-run at the current version before the next release.

### Stronger wording needing izaz approval before publishing

All three published items were replaced. None matched a recorded limitation:

1. The attributeStart bug is recorded as debugging evidence in the Evidence section, but no recorded limitation says it lacks a write-up:

> "Next would be a write-up of the attributeStart bug, with the failing input and the fix, so the parser's hardest edge is documented, not just fixed."

2. No recorded limitation says the synthetic demo run needs a second point of comparison:

> "Next would be a second demo run on a real-world style sample, so the 26 out of 100 on a synthetic APK has a second point of comparison."

3. The recorded deep mode limitation is explainability (which tool produced which finding), not setup time, and "minutes, not an afternoon" is an unverified timing claim. The word "afternoon" here also echoes the Problem section, where it describes manual checks, not deep mode setup:

> "Next would be a short guide to deep mode setup, so a first run with apktool, jadx, and androguard takes minutes, not an afternoon."

## 05 Security-Books (`src/routes/projects/SecurityBooks.tsx`)

### Final copy as it now stands

1. **A one-line note per topic.** Next would be a one-line note per topic, saying who the books are for, so a beginner picks a field before picking a title.
2. **A regular check for dead links.** Next would be a regular check for dead links, so a link a reader follows still opens.
3. **A short note on how a book earns its place.** Next would be a short note on how a book earns its place, so the curation rule is visible to the reader.

### Recorded limitation each item rests on

1. Spec section 2.5, proposed direction 1: a beginner cannot tell who a topic is for and can start with an advanced book.
2. Spec section 2.5, proposed direction 2: links in a curated list go dead unless they are checked regularly.
3. Spec section 2.5, proposed direction 3: the rule for how a book earns its place is not visible to the reader.

### Stronger wording needing izaz approval before publishing

Item 2 was replaced. The published line was an invented improvement, including an invented specific number ("five books"):

> "Next would be a short start-here list of five books, so a first-time reader has a path, not only a catalogue."

Open point on item 2: the spec direction says the dead-link check should name "how often the check would run", but no frequency is recorded anywhere, so no frequency was invented in the final copy. Izaz needs to name the frequency before that detail can be published.

## 06 AgentArsenal (`src/routes/projects/AgentArsenal.tsx`)

### Final copy as it now stands

1. **A GitHub API check on the counts.** Next would be a GitHub API check on the counts, so the numbers on this page match the repo, not only the manifest.
2. **Deeper proof per domain.** Next would be deeper proof per domain, so the breadth of 29 domains is backed by evidence in each domain, not only by the count.

### Recorded limitation each item rests on

1. Spec section 2.8 and content model open item 11: the 353 skills, 29 domains, 290 sub-skills, and 36 agents figures come from the workspace manifest (generated 27 October 2026), not from the GitHub API, and must not be presented as API verified.
2. Project selection section 1, rank 7, and spec section 2.8 ("Must not say: that breadth proves depth in every domain"): breadth makes it harder to prove depth in one case study. Note: the spec gives no proposed improve direction for the archive pages, so item 2 is drawn directly from this recorded limitation. Izaz should confirm it at handover.

### Stronger wording needing izaz approval before publishing

Item 2 was replaced. The published line was an invented improvement with no recorded limitation behind it:

> "Next would be a one-page map of the 29 domains, so a visitor sees the whole repository before installing it."

## 07 Ai-Terminal-X (`src/routes/projects/AiTerminalX.tsx`)

### Final copy as it now stands

No next change is recorded for this tool yet, so this section stays open until a real limitation is confirmed.

### Recorded limitation it rests on

None is recorded. The spec section 2.8 gives no proposed improve direction for Ai-Terminal-X, and no product limitation for this tool is recorded in the spec or the content model. The section heading and its index link are kept, with one honest line, rather than inventing improvements to fill it.

### Stronger wording needing izaz approval before publishing

Both published items were removed. Each was an invented feature with no recorded limitation behind it:

1. No record says a new user cannot see what a command does before trusting it. The tool already explains the command and asks before it runs, and no gap in that flow is recorded:

> "Next would be a dry-run mode that shows the command and its effect without running it, so a new user learns what a command does before trusting it."

2. No record says the tool refuses commands, or names any refused command. The recorded safe execution flow is a multi-layer risk check, then confirmation when needed, and nothing runs without permission. A refused list assumes a refusal behaviour that is not recorded:

> "Next would be a short list of the riskiest commands the tool refuses, so a user knows the boundary before they meet it."

## Changes by file

- `src/routes/projects/PentrixVulnLab.tsx`: items 2 and 3 rewritten to the spec direction.
- `src/routes/projects/PowershellAcademy.tsx`: all three items rewritten to the spec direction.
- `src/routes/projects/BugHuntArsenal.tsx`: items 2 and 3 rewritten to the spec direction, item 1 kept.
- `src/routes/projects/ApkPipeline.tsx`: all three items rewritten to the spec direction.
- `src/routes/projects/SecurityBooks.tsx`: item 1 kept, item 2 rewritten to the spec direction, item 3 added from the spec direction (the page had only two items, the spec allows three).
- `src/routes/projects/AgentArsenal.tsx`: item 1 kept, item 2 rewritten to the recorded breadth and depth limitation.
- `src/routes/projects/AiTerminalX.tsx`: both items removed, honest open line in their place.
- `src/components/CaseStudy.tsx`: unchanged. The shared index already lists the section on every page.

## Out of scope observations (not changed)

- BugHunt Arsenal shows only one header fact ("Status: Live"). The spec template calls for three facts (role, stack, status), with the stack left as "Browser app" until verified. That is a header facts gap, not improve copy, so it was left for the owning phase.
- PowerShell Academy, BugHunt Arsenal, and APK Security Pipeline still carry "Sole builder" role facts with the verification gate from content model open item 1. Nothing in the improve copy asserts sole builder status.
