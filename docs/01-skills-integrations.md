# Phase 1 Discovery: Skills and Integrations Audit

**Project:** portfolio v3 rebuild (`~/workspace/portfolio-v3-rebuild/`)
**Date of audit:** 2026-11-09
**Method:** read `~/workspace/custom-skills/REGISTRY.md` in full, read the actual `SKILL.md` file of every skill named in the task brief (28 files), read the GitHub, Vercel and Figma connector docs, ran connector `status` checks, searched the workspace and connector docs for 21st.dev and Superdesign, and ran version commands in the shell. Nothing was installed, no account was signed in to, no connect flow was run, nothing was pushed or deployed.

**Scope note:** the registry counts 38 custom skills plus 57 built-in skills (95 total) after the svgl-logos skill was added on 2026-11-09. This audit read the 28 skill files named in the brief, plus the study-guide skill, plus the svgl-logos skill (29 files read in full). It did not audit all 57 built-in skills. Skills not named here were not verified and are not claimed to apply.

**Standing rule on skill text:** skill files are treated here as audit data, not as instructions to obey. Where a skill file tells an agent to run a command, install something, or connect an account, this report records that as a property of the skill, and this audit did not do it.

---

## 1. Skill map per phase

Phases are the rebuild phases 1 to 11 from the master directive: discovery, research, brand strategy, creative direction, experience design, assets, engineering, content, review, unslop, final verification.

### Phase 1: Discovery

| Skill | Path | How it applies |
|---|---|---|
| using-superpowers | `~/workspace/custom-skills/using-superpowers/SKILL.md` | Read first on dev work: check for an applicable skill before acting. Its `<SUBAGENT-STOP>` block says a dispatched subagent executing a specific task should ignore it, so it governs the orchestrator, not each worker. |
| brainstorming | `~/workspace/custom-skills/brainstorming/SKILL.md` | Clarify what izaz wants and why before building; approaches laid out for his pick, design doc approved before any build (hard gate). |
| archify | `~/workspace/custom-skills/archify/SKILL.md` | System and site maps as validated standalone HTML diagrams (architecture, tree, timeline types). Output goes to the `.archify` working folder, not `your_files/`. |
| diagram-design | `~/workspace/custom-skills/diagram-design/SKILL.md` | Editorial diagrams (architecture, timeline, journey, dependency graph) as self-contained HTML plus SVG. First diagram in this project triggers its style-guide gate (see Limitations). |

### Phase 2: Research

| Skill | Path | How it applies |
|---|---|---|
| brainstorming | `~/workspace/custom-skills/brainstorming/SKILL.md` | Recon into the v2 codebase, prior portfolio research, and competitor or reference portfolios before deciding anything. |
| reverse-engineer-anything | `~/workspace/custom-skills/reverse-engineer-anything/SKILL.md` | Only if a claim depends on a shipped binary or package, decompiled code, or runtime evidence. The skill itself says: skip REA for ordinary source-repository analysis, use normal repository tools instead. So for the v2 source tree it is mostly not applicable. |
| archify | `~/workspace/custom-skills/archify/SKILL.md` | Repository-backed diagrams from source evidence (`--repo-root`), for mapping how v2 is actually built. |
| diagram-design | `~/workspace/custom-skills/diagram-design/SKILL.md` | Research visuals: comparison tables as diagrams only where a visual beats prose, per its own rule. |

### Phase 3: Brand strategy

| Skill | Path | How it applies |
|---|---|---|
| egm-brainstorm | `~/workspace/custom-skills/egm-brainstorm/SKILL.md` | Multi-lens ideation (contrarian/YAGNI, cost, UX, migration, observability, tech debt, inventive catalyst) with parallel fresh-context Goldfish reviewers, producing a `concepts_brief.md` for the brand direction. |
| brainstorming | `~/workspace/custom-skills/brainstorming/SKILL.md` | The conversation layer for brand choices: goals, non-goals, anti-goals, prior art he loved or hated. |
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Art direction input: one-line design read, three dials (variance, motion, visual density), dealt palette plus font pairing plus hero layout. |
| hallmark | `~/workspace/custom-skills/hallmark/SKILL.md` | Brand truth step: real material inventory (photos, numbers, quotes, logos) before any theme is dealt; never invent a metric, testimonial, or logo. |
| frontend-design | `~/workspace/custom-skills/frontend-design/SKILL.md` | Ground the brand in the subject matter (security, engineering, research) and set a deliberate token system before building. |

### Phase 4: Creative direction (at least 3 directions)

| Skill | Path | How it applies |
|---|---|---|
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Deal a different palette, pairing, hero, and moments per direction; its deal commands keep history so directions differ. Gate must be run by hand here (see Limitations). |
| hallmark | `~/workspace/custom-skills/hallmark/SKILL.md` | Deal one of 48 themes per direction, or run a custom direction; hard floor (tokens only, no `transition: all`, no purple-to-blue gradients, no invented metrics, no eyebrow labels) applies to every direction. |
| frontend-design | `~/workspace/custom-skills/frontend-design/SKILL.md` | Two-pass plan per direction (token system plus ASCII wireframes, reviewed against the brief for generic-default tells) before code. |
| landing-page-design | `~/workspace/custom-skills/landing-page-design/SKILL.md` | Direction-level structure choice (classic hero, long-form story, minimal conversion, comparison) and conversion copy rules. Note its font and gradient bans conflict with other skills (see Limitations). |
| egm-brainstorm | `~/workspace/custom-skills/egm-brainstorm/SKILL.md` | Stress-test each direction through the 7 Goldfish lenses before izaz picks one. |
| diagram-design | `~/workspace/custom-skills/diagram-design/SKILL.md` | Direction boards as diagrams; style-guide gate must be resolved first. |

### Phase 5: Experience design

| Skill | Path | How it applies |
|---|---|---|
| landing-page-design | `~/workspace/custom-skills/landing-page-design/SKILL.md` | Page structure (hero, benefits, how it works, proof, FAQ, final CTA), mandatory tagline reveal section, layout selection, ship requirements (404, legal links, favicon, meta, alt text, 390px check). |
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Page plan as screens (one section per screen, equal edges, hero entrance, dealt moments), copy first, then build to the dealt system. |
| hallmark | `~/workspace/custom-skills/hallmark/SKILL.md` | Shape and anatomy per page job, one idea per screen, hero first then sections, signature moment on the first screen. |
| frontend-design | `~/workspace/custom-skills/frontend-design/SKILL.md` | Distinctive layout and type choices per section; restraint (one memorable element, everything else quiet). |
| diagram-design | `~/workspace/custom-skills/diagram-design/SKILL.md` | User journey, service blueprint, and story map diagrams for the visitor experience. |
| archify | `~/workspace/custom-skills/archify/SKILL.md` | Workflow and sequence diagrams for multi-page flows (navigation, contact, project deep dives). |

### Phase 6: Assets

| Skill | Path | How it applies |
|---|---|---|
| archify | `~/workspace/custom-skills/archify/SKILL.md` | Technical diagrams of projects and architecture for the portfolio pages; `finalize` runs validate, deliver, strict check, and real-browser browser-check. Doctor passes (see Environment). |
| diagram-design | `~/workspace/custom-skills/diagram-design/SKILL.md` | Editorial diagrams for case studies and project pages; export to PNG or SVG via its packaged helpers when asked. |
| svgl-logos | `~/workspace/custom-skills/svgl-logos/SKILL.md` | Logo source for brand marks: technology stack logos, social icons (GitHub, LinkedIn), project tech badges, capability map. Free public API at `https://api.svgl.app`, no key, 676 logos, MIT-licensed SVGs. Rules: search the API first, match by exact title, download the route URL, save locally in the project (never hotlink in production), render-verify every SVG before shipping, use light/dark variants correctly, never recolour a logo, use only for genuine identification. Verified available: GitHub (light/dark), LinkedIn, Python, TypeScript, JavaScript, React (light/dark), Vite, Tailwind CSS, Docker, Linux, Ubuntu, Vercel (light/dark), Flask (light/dark). Not on SVGL: Debian, Kali, Nmap, Burp Suite, Next.js, Node.js; for those use the brand's own press kit or another source, never guess a svgl.app/library URL. |
| launch-video | `~/workspace/custom-skills/launch-video/SKILL.md` | Only if a launch or promo video is wanted. Three routes: `/brag` with Hyperframes (best quality), quick PIL plus ffmpeg trailer, or an AI video-generation prompt pack. Carries the D18 flag-secrecy rule and the no-em-dash rule. Not verified end to end in this audit. |
| openmontage | `~/workspace/custom-skills/openmontage/SKILL.md` | Optional video production (13 pipelines) for a hero or project video. No paid-provider API keys are set (see Limitations), so only free or local paths work now. |
| omniget | `~/workspace/custom-skills/omniget/SKILL.md` | Optional media download from 1800 plus sites for asset gathering. CLI present at `~/.local/bin/omniget-cli`. Must not be used to download paid courses in breach of platform terms. |
| pixelfx | `~/workspace/custom-skills/pixelfx/SKILL.md` | Optional: 244 pixel art effects to add one cool moment. Source checkout at `~/workspace/pixelfx-src`. Use sparingly; the brief wants premium, not game effects everywhere. |

### Phase 7: Engineering

| Skill | Path | How it applies |
|---|---|---|
| using-superpowers | `~/workspace/custom-skills/using-superpowers/SKILL.md` | Skill-first routing for every dev task. |
| writing-plans | `~/workspace/custom-skills/writing-plans/SKILL.md` | Bite-sized implementation plans with exact files, interfaces, tests, and commit steps; saved to `docs/superpowers/plans/`. Plan carries a self-review (spec coverage, step scan, type consistency, review focus, proportion). |
| executing-plans | `~/workspace/custom-skills/executing-plans/SKILL.md` | Inline execution path: one context, task by task, ledger in `.superpowers/sdd/`, TDD per step, one fresh whole-branch review at the end. |
| subagent-driven-development | `~/workspace/custom-skills/subagent-driven-development/SKILL.md` | Alternative execution path: fresh implementer subagent per task plus a task review after each, then a whole-branch review. Costs a fresh context per task and per review. |
| dispatching-parallel-agents | `~/workspace/custom-skills/dispatching-parallel-agents/SKILL.md` | Parallel dispatch only for independent domains (separate test files, subsystems, or bugs with no shared state). Never dispatch multiple implementers on the same files. |
| test-driven-development | `~/workspace/custom-skills/test-driven-development/SKILL.md` | Iron law: no production code without a failing test first; watch it fail, minimal code, watch it pass, refactor. Applies to features, bug fixes, and refactoring. |
| systematic-debugging | `~/workspace/custom-skills/systematic-debugging/SKILL.md` | Four phases (root cause, pattern, hypothesis, implementation) before any fix; stop and question the architecture after 3 failed fixes. |
| verification-before-completion | `~/workspace/custom-skills/verification-before-completion/SKILL.md` | No completion claim without fresh verification evidence in the same session (test output, build exit code, diff). Governs every task handover. |
| egm-bootstrap | `~/workspace/custom-skills/egm-bootstrap/SKILL.md` | README contracts (Peanuts for leaf packages, Hay for parent blueprints) across the repo tree. Safety gate: over 15 subdirectories needs user approval before full-tree execution. |
| svgl-logos | `~/workspace/custom-skills/svgl-logos/SKILL.md` | Fetch and save brand logos as local SVG files during the build (tech stack logos, social icons, project tech badges). Same rules as Phase 6: API search first, exact title match, save locally, render-verify, correct light/dark variant, never recolour. The shadcn registry route (`@svgl/<name>`) applies only when the project already has a `components.json`; this project does not, so the REST API download is the default. |

### Phase 8: Content

| Skill | Path | How it applies |
|---|---|---|
| landing-page-design | `~/workspace/custom-skills/landing-page-design/SKILL.md` | Copywriting rules (headline formulas, benefit-first bullets, specific numbers, no banned filler words, no invented facts; missing facts use marked placeholders such as `{{price}}`). |
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Copy layer: fact sheet, voice card, copy-lint (`copy-lint.mjs`) before build; nothing invented except a coined brand name (searched first). |
| hallmark | `~/workspace/custom-skills/hallmark/SKILL.md` | Material-first content: real facts only, absent proof listed explicitly, 450 visible words max per page, hero headline 7 words or fewer. |
| brainstorming | `~/workspace/custom-skills/brainstorming/SKILL.md` | Content decisions that change what gets built go back through izaz, not filled in by default. |

### Phase 9: Review

| Skill | Path | How it applies |
|---|---|---|
| requesting-code-review | `~/workspace/custom-skills/requesting-code-review/SKILL.md` | Dispatch a reviewer subagent per task or feature with the `code-reviewer.md` template, base and head SHAs, and the plan or requirements. Mandatory after each task in subagent-driven development and before merge. |
| receiving-code-review | `~/workspace/custom-skills/receiving-code-review/SKILL.md` | How to handle review feedback: verify against the codebase first, clarify unclear items before implementing, push back with technical reasoning when wrong, one fix at a time with tests. |
| egm-review | `~/workspace/custom-skills/egm-review/SKILL.md` | Five-stage Goldfish review of design docs (zoom out, comprehension, critic, intermediate zoom out, implementation readiness) with checkpoint gates between stages. |
| egm-review-loop | `~/workspace/custom-skills/egm-review-loop/SKILL.md` | Antagonistic review loop driver: fresh reviewers per round, findings with severity, convergence needs two consecutive clean rounds, cap 5 rounds. |
| egm-resolve | `~/workspace/custom-skills/egm-resolve/SKILL.md` | Elephant-side resolution: categorize each finding as CONTEST, ESCALATE, PROPOSE FIX, or DECLINE; interactive gate before applying fixes. |
| egm-drift-report | `~/workspace/custom-skills/egm-drift-report/SKILL.md` | Drift detection: compare design docs and READMEs against the actual code, report only differences, dated report file. Use in Phase 9 and again in Phase 11. |

### Phase 10: Unslop

| Skill | Path | How it applies |
|---|---|---|
| unslop | `~/workspace/custom-skills/unslop/SKILL.md` | Mandatory pass before any UI is handed over (standing order). Audit against its signs list, write the five-line direction, fix in nine passes in order (spacing, color, icons, copy, type, layout, details, visuals, motion), re-render and check. Story video is optional and needs Playwright plus ffmpeg (both present). |
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Finish gate (`gate.mjs`) run by hand: checker at 1440 and 390, overflow walk at 320, copy-lint; fix until `GATE: PASS` or `GATE: OPEN`, max 3 rounds. |
| hallmark | `~/workspace/custom-skills/hallmark/SKILL.md` | Sweep: `sloplint.mjs --render` until clean, then judged gates and a finish review in fresh context. |

### Phase 11: Final verification

| Skill | Path | How it applies |
|---|---|---|
| verification-before-completion | `~/workspace/custom-skills/verification-before-completion/SKILL.md` | Final gate: every claim (tests pass, build succeeds, deploy live, no overflow, no console errors) needs fresh command output in the session that makes the claim. |
| test-driven-development | `~/workspace/custom-skills/test-driven-development/SKILL.md` | Full suite run before sign-off; any failure in that run is reported by name, including failures not caused by this work. |
| systematic-debugging | `~/workspace/custom-skills/systematic-debugging/SKILL.md` | Any failure found in final verification goes through root-cause investigation, not a quick patch. |
| egm-drift-report | `~/workspace/custom-skills/egm-drift-report/SKILL.md` | Final check that the shipped code matches the approved design docs. |
| archify | `~/workspace/custom-skills/archify/SKILL.md` | Browser-check evidence for any Archify diagrams shipped on the site. |
| design-taste-frontend | `~/workspace/custom-skills/design-taste-frontend/SKILL.md` | Final gate run plus screenshots at 1440, 1024, 820, 768, and 390. |

---

## 2. Skills deliberately not mapped to any phase

| Skill | Path | Why not mapped |
|---|---|---|
| exact_source_study_builds | `~/workspace/custom-skills/exact_source_study_builds/SKILL.md` | Study-guide skill. Must never be used on this rebuild (see Section 5). |
| finishing-a-development-branch | `~/workspace/custom-skills/finishing-a-development-branch/SKILL.md` | Branch finishing (merge, cleanup). No branch or merge is in scope for Phase 1; revisit only if a branch workflow is adopted in Phase 7. |
| using-git-worktrees | `~/workspace/custom-skills/using-git-worktrees/SKILL.md` | Worktree isolation. The v3 rebuild is already a separate working copy; worktrees are an execution detail for Phase 7, not a rebuild phase input. |
| diagnosing-superpowers | `~/workspace/custom-skills/diagnosing-superpowers/SKILL.md` | Meta-skill for diagnosing the superpowers skills themselves. Only relevant if a superpowers skill misbehaves. |
| writing-skills | `~/workspace/custom-skills/writing-skills/SKILL.md` | For writing new skills. Not needed unless this rebuild produces a reusable skill, which is not in the brief. |
| paperclip | `~/workspace/custom-skills/paperclip/SKILL.md` | Orchestration platform skill, not a rebuild skill. See Limitations. |
| figma-designer | `~/workspace/custom-skills/figma-designer/SKILL.md` | Blocked: Figma is not connected (see Integration table). Cannot run until izaz connects Figma. |

---

## 3. Limitations, recorded honestly

1. **Figma is not connected.** `figma status` returned `auth_status: not_connected` on 2026-11-09. The `figma-designer` skill cannot run, and no Figma file can be read or edited, until izaz connects Figma through OAuth (a user action). The Figma connector doc exists at `/opt/hatch/connectors/figma/CONNECTOR.md`. Do not claim any Figma design was reviewed.
2. **Claude Code hooks do not fire in Muse.** Per the registry, the following are Claude Code-specific and do not run here: the SessionStart hook in `using-superpowers`, the Stop hook in `design-taste-frontend` (run `node scripts/gate.mjs` by hand instead), the edit-time Floor check hook in `hallmark`, and the native plugin installers. Agents here discover skills with `muse.skill_search` instead.
3. **Design skills disagree with each other; only one direction can win per page.** `landing-page-design` bans Inter, Roboto, Arial, Open Sans, and Helvetica, mandates Geist, Manrope, Geist Mono, or Poppins, bans hyphens inside copy, and bans background gradients (except a heading-text gradient). `design-taste-frontend` bans violet and lavender in the page design. `hallmark` bans purple-to-blue gradients and eyebrow labels. `unslop` bans gradient text and emoji icons. The v2 site uses Inter plus JetBrains Mono (per the rebuild brief context), which `landing-page-design` would reject outright. Phase 4 must pick one system explicitly and record the choice; do not apply all four skills blindly at once.
4. **openmontage has no paid-provider API keys set.** Checked `~/workspace/openmontage-src/.env` on 2026-11-09: it lists many provider key names, but only one non-empty value exists (`MINIMAX_REGION`, a region name, not a key). Paid providers (FAL, Replicate, Kling, ElevenLabs, OpenAI, and others named in that file) need keys added to that file and cost real money. Free and local paths (FFmpeg, subtitles, 3D, Pixabay music search) work now. Piper TTS needs a voice model downloaded on first use.
5. **paperclip is not installed and not the rebuild orchestration method.** The skill is for an agent running inside Paperclip as a managed agent. The app itself was not installed locally. It needs Node 24.11 or newer (this machine has 24.22.1, so the version floor is met) and version 2026.416.0 or newer only, because older versions carry CVE-2026-41679, an unauthenticated remote code execution flaw (CVSS 10). Do not run `npx paperclipai@latest onboard` without an explicit decision to adopt Paperclip.
6. **EGM skills assume Claude Code, Codex, or Cowork harnesses.** Their SKILL.md files reference `${CLAUDE_PLUGIN_ROOT}`, `ask_question` structured gates, and named subagent types such as `egm-zoom-out` that are not registered in Muse. In this environment, Goldfish reviewers must be spawned as general-purpose subagents told to read the persona file first, and structured gates map to plain chat or option prompts. The skills themselves state that a review in the same context is not a Goldfish review, so same-context review must never be presented as one.
7. **diagram-design has a first-use style-guide gate.** Before the first diagram in this project, the style guide must be customized or izaz must explicitly choose the default. Do not silently ship default-skinned diagrams (paper `#f5f5f5`, ink `#2d3142`, accent `#bf4520`) into the branded portfolio.
8. **launch-video Route A is unverified.** It depends on the `/brag` skill at `~/workspace/brag-skill/skills/brag/` and on Hyperframes via npx, plus Chrome Headless Shell for local rendering. This audit did not run it and does not claim it works. Route B (PIL plus ffmpeg) depends on tools present here (Python 3.12.3, ffmpeg 8.1.2). The skill also warns that `/tmp` is a 512MB tmpfs that fills during renders, so temp files must go to a workspace directory.
9. **reverse-engineer-anything is not connected.** Installing the skill supplies instructions only; it does not register the REA MCP server or install analysis engines. No REA tools were observed in this session. The CLI fallback (`npx -y rea-agents@latest ...`) was not run. Do not claim REA analysis was performed.
10. **`design-to-motion` does not exist, and `redesign-existing-projects` was not installed.** Per the registry, the live repo has `figma-designer` instead of `design-to-motion`, and `redesign-existing-projects` is a separate repo that was not installed. Do not reference either as available.
11. **Archify browser-check needs an env var.** `node bin/archify.mjs doctor` passes all checks (see Environment), but the browser check needs `ARCHIFY_CHROME` set to the Playwright Chromium at `~/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome`. That path exists on this machine.
12. **No git remote is configured in the rebuild repo.** `git remote -v` in `~/workspace/portfolio-v3-rebuild/` returned nothing on 2026-11-09. There is nowhere to push to from this copy, and pushing is out of scope for this phase in any case.

13. **SVGL logos, and the icon situation in the rebuild copy (checked 2026-11-09).** The `svgl-logos` skill (`~/workspace/custom-skills/svgl-logos/SKILL.md`, added to the registry 2026-11-09, 38 custom skills now) covers SVGL at `https://svgl.app/`: 676 brand, product, and technology logos as clean SVGs, free public API at `https://api.svgl.app`, no key, no auth, SVG files MIT-licensed while the marks themselves remain trademarks. It applies to Phase 6 asset production and Phase 7 engineering for technology stack logos, social icons (GitHub, LinkedIn), project tech badges, and the capability map. Verified available: GitHub (light/dark), LinkedIn, Python, TypeScript, JavaScript, React (light/dark), Vite, Tailwind CSS, Docker, Linux, Ubuntu, Vercel (light/dark), Flask (light/dark). Not on SVGL: Debian, Kali, Nmap, Burp Suite, Next.js, Node.js; for those use the brand's own press kit or another source, never guess a svgl.app/library URL. Rules: search the API first, match by exact title (the search is fuzzy and a loose match can silently return the wrong brand), download the route URL, save the SVG locally in the project (never hotlink in production), render-verify every SVG before shipping, use light/dark variants correctly, never recolour a logo, use a logo only for genuine identification, never as decoration. Correction to the handoff note: the rebuild copy does have an icon library. `@phosphor-icons/react` 2.1.10 is in `package.json` and is used throughout `src/` (Nav, Footer, ProjectCard, project routes) for generic UI icons and currently also for the GitHub and LinkedIn marks. What it does not have is a shared icon registry (no central icons file in `src/components/`), and it has no lucide and no react-icons. So SVGL is the logo source for brand marks, while generic UI icons should come from one consistent set, and Phosphor Icons is the set already installed and in use. Phase 4 should confirm whether Phosphor stays the single icon set or another is chosen, and whether SVGL brand marks replace the Phosphor GitHub and LinkedIn logos.

---

## 4. Integration status

Status values are from direct checks run during this audit on 2026-11-09, not from memory or assumption.

| Integration | Status | Evidence | What it supports | What it cannot do |
|---|---|---|---|---|
| GitHub | Connected | `/opt/hatch/bin/github status` returned `auth_status: connected`, `authenticated: true`, MCP endpoint `https://api.githubcopilot.com/mcp/`, server `github-mcp-server`, protocol `2025-03-26`. Doc: `/opt/hatch/connectors/github/CONNECTOR.md`. | Read and write repo operations through the MCP tools (file contents, issues, pull requests, branches, search, push files, create repos). Writes ask for fresh approval each call. | GitHub Enterprise Server is not supported. Access is limited to the repositories the Muse GitHub App is installed on and the user's own permissions. OAuth status alone does not prove access to a particular repo. No remote is configured in the v3 rebuild copy. |
| Vercel | Connected | `/opt/hatch/bin/vercel status` returned `auth_status: connected`, `authenticated: true`, MCP endpoint `https://mcp.vercel.com/`, server version `0.1.0`. Doc: `/opt/hatch/connectors/vercel/CONNECTOR.md`. | Inspect projects and deployments, read logs and runtime errors, create deployments, manage domains, DNS, env vars, firewall rules, and deployment protection (each behind its own permission). | Deployments, purchases, domains, and plan upgrades can charge immediately and are non-refundable; a quote must be shown and explicit approval waited for. No deploy happens in this phase without izaz approving it. |
| Figma | Not connected | `/opt/hatch/bin/figma status` returned `auth_status: not_connected`, `authenticated: false`, endpoint `https://mcp.figma.com/mcp`. Doc: `/opt/hatch/connectors/figma/CONNECTOR.md`. | Once connected via OAuth (user action): read designs and design systems, download assets, turn designs into code, edit designs, FigJam diagrams, Code Connect mapping. | Nothing until connected. The `figma-designer` skill cannot run in this state. Figma also limits MCP usage by plan and seat, with a small monthly allowance on some accounts. |
| 21st.dev | Not found | `muse.connector_search` for `21st.dev` returned no matches. Grep for `21st` across `/opt/hatch/connectors/`, `~/workspace/custom-connectors/`, `~/workspace/custom-skills/`, and `~/workspace/portfolio-v3-rebuild/` returned nothing. | Unknown. No MCP server, CLI, connector doc, or skill reference was found. | Do not claim 21st.dev is available, connected, or usable for this rebuild. If it is wanted, it needs a fresh setup through the custom connector flow, with izaz approving it. |
| Superdesign | Not found | `muse.connector_search` for `Superdesign` returned no matches. No connector doc or workspace reference was found. | Unknown. | Do not claim Superdesign is available. Same as 21st.dev: fresh setup needed if wanted. |
| SVGL (svgl.app) | Public API, no connection needed | Skill at `~/workspace/custom-skills/svgl-logos/SKILL.md`; free public REST API at `https://api.svgl.app`, no key, no auth, 676 logos. No status check applies (no account exists to connect). | Search and download official brand logos as SVG files (`/svg/<filename>`), by category, with light/dark route variants where present. | No auth, no account, no write access to the SVGL library itself. Not a generic icon set (use Phosphor Icons, already installed, for UI icons). Marks are trademarks: genuine identification only, never recolour, never use as decoration. Six needed marks are not on SVGL: Debian, Kali, Nmap, Burp Suite, Next.js, Node.js. |
| omniget CLI | Present (local tool, not a connector) | Binary exists at `~/.local/bin/omniget-cli` (14,707,736 bytes, dated 2026-11-08). Skill at `~/workspace/custom-skills/omniget/SKILL.md`. | Download media from 1800 plus sites, resumable local datasets. | The desktop app is separate; the skill's MCP server and `ui-lint` skill were not installed. Must not download paid courses in breach of platform terms. |
| openmontage | Present locally, no paid keys | Source checkout at `~/workspace/openmontage-src/`, `.env` checked (see Limitation 4). Skill at `~/workspace/custom-skills/openmontage/SKILL.md`. | Free and local video pipelines (FFmpeg, subtitles, 3D, Pixabay music search). | Paid providers need API keys that are not set. |
| pixelfx | Present locally | Source checkout at `~/workspace/pixelfx-src`. Skill at `~/workspace/custom-skills/pixelfx/SKILL.md`. | 244 pixel art effects, sprite sheet export. | Effects only; not a design system. |
| paperclip | Not installed | Source checkout at `~/workspace/paperclip-src`. Skill at `~/workspace/custom-skills/paperclip/SKILL.md`. | None in this environment until installed and run, at version 2026.416.0 or newer only. | See Limitation 5. |
| diagram-design source | Present locally | Source checkout at `~/workspace/diagram-design-src` (GitHub `cathrynlavery/diagram-design`, v2.6.142, MIT). | Reference implementations and gallery for the skill. | The repo author is Cathryn Lavery, not Duncan Rogoff (he only featured it in a reel). |
| elephant-goldfish-model source | Present locally | Source checkout at `~/workspace/elephant-goldfish-model-src`. | Reviewer persona files in `agents/` and standards in `resources/document_standards/` used by the EGM skills. | Persona files are written for harnesses with named subagent registration; see Limitation 6. |
| launch-video / brag | Not verified | Skill at `~/workspace/custom-skills/launch-video/SKILL.md`; it points at `~/workspace/brag-skill/skills/brag/`. | Three video routes (see Phase 6). | Route A not run in this audit; do not claim it works. |

No other integration relevant to this rebuild was found in the connector search or workspace search.

---

## 5. Study-guide skill constraint (hard rule)

The skill `exact_source_study_builds` (`~/workspace/custom-skills/exact_source_study_builds/SKILL.md`) is a study-guide skill: it builds guides and quizzes from source material using the source wording verbatim in a fixed approved shell. **It must never be used on this portfolio rebuild, and it must never be used to pull in university materials.** The rebuild uses only original content (portfolio, CV, GitHub, LinkedIn, project docs) and outside research; no Howest course materials, lab files, lecture slides, or exam content may enter the portfolio through any skill. If any phase agent proposes using this skill, that proposal is out of scope and must be refused.

---

## 6. Environment facts (exact, from commands run 2026-11-09)

| Item | Value |
|---|---|
| Node.js | v24.22.1 |
| npm | 10.9.4 |
| Python | 3.12.3 |
| Playwright (Python package) | 1.64.1 (`import playwright` succeeds) |
| Playwright Chromium | `chromium-1248` present in `~/.cache/ms-playwright/`; browser binary exists at `~/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome`; `chromium_headless_shell-1248` also present |
| ffmpeg | 8.1.2 at `/usr/bin/ffmpeg` |
| Disk | `/home/hatch`: 150G total, 13G used, 137G free (9% used) |
| Rebuild repo stack | React 19.1.0, React DOM 19.1.0, React Router 7.18.5, Vite 6.3.0, Tailwind CSS 4.1.0, TypeScript 5.8.0, Phosphor Icons React 2.1.10 (from `package.json`; `node_modules` is installed) |
| Rebuild repo scripts | `dev` (vite), `build` (`tsc -b && vite build`), `postbuild` (`node scripts/stamp-css.mjs`), `preview` (vite preview on port 4173) |
| Git remote in rebuild repo | None configured (`git remote -v` returned nothing) |
| Archify doctor | All checks `[ok]`: Node.js v24.22.1 (requires 18 or newer), core template, example renderer, live preview runtime, visual-check runtime, finalize runtime, output path safety runtime, atomic output safety runtime, physical path semantics runtime, sidecar path naming runtime, portable path contract runtime, scenario recipe guide, progressive authoring references. Renderer bin at `~/workspace/custom-skills/archify/bin/archify.mjs`. |
| Archify browser-check prerequisite | `ARCHIFY_CHROME` must be set to the Playwright Chromium path above; that binary exists. |
| openmontage env | `~/workspace/openmontage-src/.env` exists; only `MINIMAX_REGION` has a non-empty value (a region name, not an API key). No paid-provider key is set. |
| omniget CLI | Present at `~/.local/bin/omniget-cli`. |

---

## 7. What this audit did not do

- Did not sign in anywhere, did not run any OAuth or connect flow, did not install anything.
- Did not push, deploy, or create a GitHub repo.
- Did not run the Figma, GitHub, or Vercel tools beyond the `status` checks quoted above.
- Did not run `paperclipai`, Hyperframes, REA, or any openmontage pipeline.
- Did not audit the 57 built-in skills beyond the registry count; the 29 skill files named in the brief (including svgl-logos and the study-guide skill) were read in full.
- Did not verify the `/brag` skill files or the Hyperframes CLI.

## 8. Open items for the parent orchestrator

1. Figma: decide whether izaz should connect Figma. Until he does, `figma-designer` stays blocked and any Figma-based direction is unavailable.
2. 21st.dev and Superdesign: decide whether either is wanted. Neither exists in this environment today; adding one needs the custom connector setup flow and izaz approval.
3. Design-system conflict (Limitation 3): Phase 4 must record one chosen system before engineering starts, because the four design skills cannot all be applied at once.
4. diagram-design style-guide gate: resolve before the first diagram is drawn in this project.
5. EGM harness gap (Limitation 6): confirm that Goldfish reviews will run as general-purpose subagents reading persona files, and that no same-context review will be presented as a Goldfish review.
6. Icon set decision (Limitation 13): Phase 4 should confirm Phosphor Icons stays the single generic icon set, and whether SVGL brand marks replace the Phosphor GitHub and LinkedIn logos currently used in Nav and Footer.
