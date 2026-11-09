import { ArrowUpRight } from "@phosphor-icons/react";
import CaseStudy, { CountList, Mark, Plate, Section, nextOutcome } from "../../components/CaseStudy";
import { usePageMeta } from "../../hooks";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import {
  FEATURED_PROJECTS,
  PS_LIVE,
  PS_REPO,
  PS_STAGES,
} from "../../data";

export default function PowershellAcademy() {
  usePageMeta(
    "PowerShell Academy | Muhammad Izaz Haider",
    "Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages.",
    "/projects/powershell-academy",
  );
  const project = FEATURED_PROJECTS.find((p) => p.name === "PowerShell Academy")!;
  /* The 102 commands figure was re-verified on the live commands page
     during this build (9 November 2026, "Showing 102 of 102 commands"),
     so its source line carries the re-verification date here. The
     content model still carries the older "re-verify in Phase 7" note. */
  const counts = (project.counts ?? []).map((c) =>
    c.value === "102 commands"
      ? { ...c, source: "Live commands page, re-verified 9 November 2026" }
      : c,
  );
  return (
    <CaseStudy
        marker="02, Case study"
        title="PowerShell Academy"
        outcome={project.outcome}
        facts={[
            "Role: Sole builder",
            "Stack: TypeScript, Next.js, React, plain CSS",
            "Status: Live",
          ]}
        next={{number: "03", name: "BugHunt Arsenal", outcome: nextOutcome("BugHunt Arsenal"), to: "/projects/bughunt-arsenal"}}
      >
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  PowerShell is learned by running commands, but most guides show the command
                  without the why, and the learner copies it without reading it.
                </p>
                <p className="body-copy">
                  A beginner opens a terminal, types a command from a page, and has no way to know
                  what it does, or what to try next.
                </p>
                <p className="body-copy">
                  The result is a learner who can type, but cannot read, and who stops at the
                  first error.
                </p>
                <Plate
                  shown="the learner's position before the Academy, set out as three lines, not a screenshot."
                  happened="the Academy was built to give every command its why, and every lesson its next step."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A command copied, never read.</li>
                    <li className="body-copy">A lesson that ends at the first example.</li>
                    <li className="body-copy">
                      No path from the first command to the next.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built PowerShell Academy alone, as the sole builder: the content, the
                  structure, and the site.
                </p>
                <p className="body-copy">
                  I wrote all 18 chapters and 61 lessons in easy mentor words, from the
                  PowerShell material and outside research, rewritten, never copied.
                </p>
                <p className="body-copy">
                  I keep the content current: new lessons and commands go into the same structured
                  data, so the site grows without a rewrite.
                </p>
                <p className="body-copy">
                  There is no team claim here: the Academy is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Structured data plus one renderer.</strong> The alternative was a page
                    per lesson, hand written. The trade off is a rigid shape: every lesson follows
                    the same data shape, so adding a lesson means adding data, never a new page.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Plain CSS instead of Tailwind.</strong> The alternative was the
                    utility classes the rest of the web uses. The trade off is speed of writing:
                    plain CSS is slower to write, but the site stays small, and the design stays
                    in one place.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Single-column lessons, no command execution in the browser.</strong>{" "}
                    The alternative was an embedded terminal that runs commands. The trade off is
                    hands-on feel: the Academy teaches the command, and the learner runs it on
                    their own machine, where a mistake is theirs to fix.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  The Academy is a Next.js site with its content as structured data and one
                  renderer. The data holds the chapters, lessons, commands, and glossary, and the
                  renderer turns that data into pages.
                </p>
                <p className="body-copy">
                  The renderer is one component: the same page shape serves every lesson, so the
                  design never drifts between chapters.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark
                    light="/logos/typescript.svg"
                    dark="/logos/typescript.svg"
                    label="TypeScript"
                  />
                  <Mark
                    light="/logos/nextjs-light.svg"
                    dark="/logos/nextjs-dark.svg"
                    label="Next.js"
                  />
                  <Mark light="/logos/react-light.svg" dark="/logos/react-dark.svg" label="React" />
                </p>
                <Plate
                  shown="the six stages, from Foundations to Projects, with chapters and lessons per stage."
                  happened="the stages carry the learner from zero to confident use, in order."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="ps-stages"
                      label="Academy stages"
                      tabs={PS_STAGES.map((s) => ({
                        id: s.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: s.name,
                        panel: (
                          <div>
                            <p className="title-small">{s.name}</p>
                            <p className="mono-meta mt-2" style={{ color: "var(--muted)" }}>
                              {s.chapters} chapter{s.chapters === 1 ? "" : "s"}, {s.lessons}{" "}
                              lessons
                            </p>
                            <p className="body-copy mt-3">{s.note}</p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  The verb-noun pattern is the first thing a lesson teaches. Find the cmdlet, then
                  read its help, then run it. The plate below shows the pattern as it appears in
                  the Academy.
                </p>
                <Plate
                  shown="the verb-noun pattern from the Academy, Get-Command to find the cmdlet, then read its help."
                  happened="the same pattern opens the Foundations stage, and every lesson builds on it."
                >
                  <div className="p-5 md:p-6">
                    <CodeStrip code={project.strip} label={`Code from ${project.name}`} />
                  </div>
                </Plate>
                <p className="body-copy">
                  The command reference holds 102 commands, each with its syntax and its
                  plain-language description, grouped by chapter. The glossary holds 48 terms, so
                  a beginner never meets a word without its meaning.
                </p>
                <p className="body-copy">
                  Nothing on the site runs a command. The Academy teaches the command, and the
                  learner runs it on their own machine.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The site is live and free, with no account and no sign up. The counts below are
                  the proof, each beside its source.
                </p>
                <p className="body-copy">
                  The commands page lists all 102 commands, grouped by chapter, with a search by
                  verb and chapter.
                </p>
                <CountList counts={counts} />
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A check that catches a stale lesson.</strong> Next would be a check
                  that catches a stale lesson when a command changes, so all 61 lessons stay
                  consistent.
                </p>
                <p className="body-copy">
                  <strong>A path from a command back to its lesson.</strong> Next would be a
                  clearer path from the command reference back into the lesson that teaches it, so
                  a reader who finds a command finds its lesson in one tap.
                </p>
                <p className="body-copy">
                  <strong>A mobile reading check for the longest lesson.</strong> Next would be
                  a mobile reading check at 375px for the longest lesson, so a lesson that breaks
                  on a phone is caught before a reader meets it.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a href={PS_LIVE} target="_blank" rel="noreferrer" className="btn-primary">
                    Visit the live site
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                  <a href={PS_REPO} target="_blank" rel="noreferrer" className="btn-secondary">
                    <Mark
                      light="/logos/github-light.svg"
                      dark="/logos/github-dark.svg"
                      label="View the repo"
                    />
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
              </Section>
    </CaseStudy>
  );
}
