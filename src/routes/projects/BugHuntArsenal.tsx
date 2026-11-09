import { ArrowUpRight } from "@phosphor-icons/react";
import CaseStudy, { CountList, Plate, Section, nextOutcome } from "../../components/CaseStudy";
import { usePageMeta } from "../../hooks";
import CodeStrip from "../../components/CodeStrip";
import Tabs from "../../components/Tabs";
import { BUGHUNT_CATEGORIES, FEATURED_PROJECTS } from "../../data";

export default function BugHuntArsenal() {
  usePageMeta(
    "BugHunt Arsenal | Muhammad Izaz Haider",
    "Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules.",
    "/projects/bughunt-arsenal",
  );
  const project = FEATURED_PROJECTS.find((p) => p.name === "BugHunt Arsenal")!;
  return (
    <CaseStudy
        marker="03, Case study"
        title="BugHunt Arsenal"
        outcome={project.outcome}
        facts={["Status: Live"]}
        next={{number: "04", name: "APK Security Pipeline", outcome: nextOutcome("APK Security Pipeline"), to: "/projects/apk-security-pipeline"}}
      >
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Security researchers lose hours to fragmented tooling. The same payloads are
                  re-discovered on every engagement, and critical knowledge sits scattered across
                  20+ bookmarks, notes, and repos.
                </p>
                <p className="body-copy">
                  Hours go to configuring environments instead of finding vulnerabilities, and no
                  single platform bridges recon, testing, and reporting.
                </p>
                <p className="body-copy">
                  A hunter who opens five tools to test one idea loses the idea before the test.
                </p>
                <Plate
                  shown="the problem the Arsenal answers, set out as three lines from the live site, not a screenshot."
                  happened="the Arsenal gathers the scattered tools into one browser platform."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">
                      Redundant research: the same payloads, re-discovered on every engagement.
                    </li>
                    <li className="body-copy">
                      Tool sprawl: knowledge scattered across 20+ bookmarks, notes, and repos.
                    </li>
                    <li className="body-copy">
                      Setup overhead: hours configuring environments instead of finding
                      vulnerabilities.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I built BugHunt Arsenal alone, as the sole builder: the payload browser, the CTF
                  center, the chain builder, and the methodology pages.
                </p>
                <p className="body-copy">
                  I curate the payloads and tools from my own hunting and CTF work, and I keep the
                  platform free, with no install and no sign up.
                </p>
                <p className="body-copy">
                  I also write the methodology pages, so the payloads come with the thinking behind
                  them, not only the text.
                </p>
                <p className="body-copy">
                  There is no team claim here: the Arsenal is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Browser app, no install.</strong> The alternative was a desktop tool
                    or a set of scripts. The trade off is power: a browser app cannot run the heavy
                    tools a desktop can, so the Arsenal gathers, links, and explains, and the heavy
                    work stays on the hunter's own machine.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>Payloads as text to copy, never to run.</strong> The alternative was
                    live payload testing in the browser. The trade off is safety: a copied payload
                    is the hunter's choice on their own target, and nothing on the site executes
                    against anyone.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>One platform, many modules.</strong> The alternative was one small
                    tool per job. The trade off is focus: one platform means one place to learn,
                    and a hunter who opens the Arsenal once opens it every day.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  BugHunt Arsenal is a browser app. It holds a payload browser, a CTF command
                  center, a chain builder, a metadata analyzer, an encoder and decoder, and the
                  OWASP Top 10 methodology, in one place.
                </p>
                <Plate
                  shown="one payload category at a time, three example payloads per category, as text to copy."
                  happened="the payloads are shown as text only, nothing here is executed."
                >
                  <div className="p-5 md:p-6">
                    <Tabs
                      id="bughunt-categories"
                      label="Payload categories"
                      tabs={BUGHUNT_CATEGORIES.map((c) => ({
                        id: c.name.toLowerCase().replace(/[^a-z]+/g, "-"),
                        label: c.name,
                        panel: (
                          <div className="space-y-4">
                            {c.payloads.map((p) => (
                              <CodeStrip key={p} code={p} label={`Example payload: ${p}`} />
                            ))}
                            <p className="body-small" style={{ color: "var(--muted)" }}>
                              Nothing here is executed. Copy a payload, then test it on your own
                              target.
                            </p>
                          </div>
                        ),
                      }))}
                    />
                  </div>
                </Plate>
                <p className="body-copy">
                  The chain builder is the clearest example of the method. A hunter links single
                  flaws into a multi-step exploit chain before testing, so the test follows a plan,
                  not a guess.
                </p>
                <p className="body-copy">
                  The modules cover the whole hunt: payloads to test, CTF tools to practice with, a
                  chain builder to link flaws into a path, a metadata analyzer to read what files
                  hide, and the OWASP Top 10 to keep the method straight.
                </p>
                <p className="body-copy">
                  The live site states its figures in its headline: 800+ payloads, 60+ CTF tools,
                  14+ modules, 150+ security tools, 21+ categories, 50+ free labs. This page uses
                  those figures only.
                </p>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The site is live, free, and open in a browser, with no install and no sign up.
                  The counts below are the proof, each beside its source, and they use the live
                  site headline figures only.
                </p>
                <p className="body-copy">
                  The payload of the day and the popular payloads on the live site show the same
                  browser: the newest payloads first, the most used close behind.
                </p>
                {project.counts && <CountList counts={project.counts} />}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>One set of figures across the whole site.</strong> Next would be one set
                  of figures across the whole site. The headline and the on-page strip disagree on
                  payloads, CTF tools, and modules today, so the strip should read from the same
                  counts as the headline.
                </p>
                <p className="body-copy">
                  <strong>A clearer statement of what is free.</strong> Next would be a clearer
                  statement of what is free, in plain words, replacing any percentage with a
                  verifiable sentence.
                </p>
                <p className="body-copy">
                  <strong>A check that every payload matches the live site.</strong> Next would
                  be a check that every payload in the browser matches the live site, so the
                  portfolio sample and the live product do not drift.
                </p>
              </Section>

              <Section id="links" title="Links">
                <p className="flex flex-wrap gap-3">
                  <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">
                    Visit the live site
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                </p>
                <p className="mono-meta" style={{ color: "var(--muted)" }}>
                  No repo link: no repo is confirmed for BugHunt Arsenal.
                </p>
              </Section>
    </CaseStudy>
  );
}
