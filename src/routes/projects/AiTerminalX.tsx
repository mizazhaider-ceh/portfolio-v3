import { ArrowUpRight } from "@phosphor-icons/react";
import CaseStudy, { Mark, Plate, Section } from "../../components/CaseStudy";
import { usePageMeta } from "../../hooks";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import { AI_TERMINAL_EXAMPLES, MORE_PROJECTS } from "../../data";

export default function AiTerminalX() {
  usePageMeta(
    "Ai-Terminal-X | Muhammad Izaz Haider",
    "AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks.",
    "/projects/ai-terminal-x",
  );
  const project = MORE_PROJECTS.find((p) => p.name === "Ai-Terminal-X")!;
  return (
    <CaseStudy
        marker="07, Case study"
        title="Ai-Terminal-X"
        outcome={project.outcome}
        facts={["Role: Builder", "Stack: Python, Gemini, CLI", "Status: Repo"]}
        next={{name: "All projects", outcome: "Five case studies, then the archive.", to: "/projects", back: true}}
      >
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  The terminal is powerful and unforgiving. A plain sentence has no way in, and a
                  new user must learn the command before they can use it.
                </p>
                <p className="body-copy">
                  A wrong command runs before its author understands it, and the fix takes longer
                  than the task.
                </p>
                <p className="body-copy">
                  A user who must memorise flags before doing the work never starts the work.
                </p>
                <Plate
                  shown="the position before Ai-Terminal-X, set out as three lines, not a screenshot."
                  happened="the assistant turns the sentence into a command, explains it, and asks first."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A sentence with no way into the terminal.</li>
                    <li className="body-copy">
                      A command learned before it is understood.
                    </li>
                    <li className="body-copy">
                      A mistake that runs before it is caught.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built Ai-Terminal-X as the builder: the plain-language prompts, the command
                  mapping, and the safe execution checks.
                </p>
                <p className="body-copy">
                  There is no team claim here: the tool is my initiative, built and maintained by
                  me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Plain language in, a command out.</strong> The alternative was a
                    cheat sheet of commands to memorise. The trade off is precision: a sentence is
                    vaguer than a command, so the tool shows the command it chose, and the user
                    checks it before it runs.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Safe execution checks before anything runs.</strong> The alternative
                    was running the command straight away. The trade off is speed: a check and a
                    confirmation take a moment, and they are what keep a guessed command from doing
                    damage.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  Ai-Terminal-X turns a sentence into a real Linux command, explains it, and asks
                  before it runs anything.
                </p>
                <p className="body-copy">
                  The tool is built for Linux, especially Kali, where the terminal is the daily
                  workplace.
                </p>
                <p
                  className="mono-meta flex flex-wrap items-center gap-x-4 gap-y-2"
                  style={{ color: "var(--muted)" }}
                >
                  <span style={{ color: "var(--ink)" }}>Stack:</span>
                  <Mark light="/logos/python.svg" dark="/logos/python.svg" label="Python" />
                  <Mark light="/logos/linux.svg" dark="/logos/linux.svg" label="Linux" />
                </p>
                <Plate
                  shown="three plain-language prompts, each with the command it returns."
                  happened="the prompts come from the project README, and nothing here is executed."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="ai-terminal-examples"
                      label="Example prompts"
                      tabs={AI_TERMINAL_EXAMPLES.map((e) => ({
                        id: e.prompt.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: e.prompt,
                        panel: (
                          <div>
                            <p className="label">You ask</p>
                            <p className="body-copy mt-2">&ldquo;{e.prompt}&rdquo;</p>
                            <p className="label mt-5">It answers</p>
                            <div className="mt-2">
                              <CodeStrip code={e.command} label={`Command for: ${e.prompt}`} />
                            </div>
                            <p className="body-small mt-4" style={{ color: "var(--muted)" }}>
                              {e.note}
                            </p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  Before running any command, Ai-Terminal-X runs a multi-layer risk check, then
                  prompts for confirmation when needed. Nothing runs without permission.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The proof is the mapping itself: three prompts from the project README, each with
                  the command it returns, shown in the tabs above. The repo is the only link.
                </p>
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  No next change is recorded for this tool yet, so this section stays open until
                  a real limitation is confirmed.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <Mark
                      light="/logos/github-light.svg"
                      dark="/logos/github-dark.svg"
                      label="View on GitHub"
                    />
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
              </Section>
    </CaseStudy>
  );
}
