import { ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import CaseStudy, { CountList, Mark, Plate, Section } from "../../components/CaseStudy";
import { usePageMeta } from "../../hooks";
import CodeStrip from "../../components/CodeStrip";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "../../data";

/* Repo topics, as they appear on the repo, verified live 9 November 2026. */
const TOPICS = [
  "application-security",
  "blue-team",
  "book",
  "bug-bounty",
  "cybersecurity",
  "cybersecurity-books",
  "cybersecurity-education",
  "defensive-security",
  "hacking-book",
  "network-security",
  "pentest",
  "programming",
  "resources",
  "security-resources",
  "web-security",
];


function useLiveStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [starsDate, setStarsDate] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    let alive = true;
    const controller = new AbortController();
    fetch("https://api.github.com/repos/mizazhaider-ceh/Security-Books", {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: unknown) => {
        if (!alive || !d || typeof d !== "object") return;
        const count = (d as { stargazers_count?: unknown }).stargazers_count;
        if (typeof count === "number") {
          setStars(count);
          setStarsDate(new Date().toISOString().slice(0, 10));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (alive) setChecked(true);
      });
    return () => {
      alive = false;
      controller.abort();
    };
  }, []);
  return { stars, starsDate, checked };
}

export default function SecurityBooks() {
  usePageMeta(
    "Security-Books | Muhammad Izaz Haider",
    "A curated collection of security books, guides, and resources: 160+ books, guides, and resources, his most starred repository.",
    "/projects/security-books",
  );
  const { stars, starsDate, checked } = useLiveStars();
  const project = FEATURED_PROJECTS.find((p) => p.name === "Security-Books")!;
  const next = MORE_PROJECTS.find((p) => p.name === "AgentArsenal");
  return (
    <CaseStudy
        marker="05, Case study"
        title="Security-Books"
        outcome={project.outcome}
        facts={[
            "Role: Curator, maintainer",
            "Format: Books, guides, and resources",
            "Status: Repo",
          ]}
        next={{number: "06", name: "AgentArsenal", outcome: next?.outcome ?? "", to: "/projects/agentarsenal"}}
      >
              <Section id="problem" title="Problem">
                <p className="body-copy">
                  Good security books are scattered across publishers, repos, and reading lists,
                  and a beginner cannot tell which one to read first.
                </p>
                <p className="body-copy">
                  A list without curation is noise: a hundred titles with no order and no reason
                  to trust any of them.
                </p>
                <p className="body-copy">
                  A reader who downloads the wrong book first wastes a week on the wrong level,
                  then stops reading.
                </p>
                <Plate
                  shown="the reader's position before the library, set out as three lines, not a screenshot."
                  happened="the collection orders the books by topic, so the first book is the right one."
                >
                  <ul className="space-y-2 p-5 md:p-6">
                    <li className="body-copy">A hundred titles, no order.</li>
                    <li className="body-copy">
                      A reading list with no reason to trust it.
                    </li>
                    <li className="body-copy">
                      A beginner who cannot tell which book to read first.
                    </li>
                  </ul>
                </Plate>
              </Section>

              <Section id="my-role" title="My role">
                <p className="body-copy">
                  I curate and maintain Security-Books: I choose the books, guides, and resources,
                  and I keep the collection current.
                </p>
                <p className="body-copy">
                  Curation is the whole job here. I read, I compare, and I keep only what earns
                  its place.
                </p>
                <p className="body-copy">
                  I add new titles only when they fill a gap, and I remove titles that no longer
                  earn their place.
                </p>
                <p className="body-copy">
                  There is no team claim here: the library is my initiative, built and maintained
                  by me.
                </p>
              </Section>

              <Section id="decisions" title="Decisions">
                <div>
                  <p className="body-copy">
                    <strong>Curated, not collected.</strong> The alternative was every book I
                    could find. The trade off is size: the library stays at 160+ titles, and every
                    title earns its place.
                  </p>
                </div>
                <div>
                  <p className="body-copy">
                    <strong>One library, tagged by topic.</strong> The alternative was folders per
                    topic. The trade off is browsing: files sit at the repo root, and the repo
                    topics tag every title, so a reader finds a book by its field.
                  </p>
                </div>
              </Section>

              <Section id="how-it-was-built" title="How it was built">
                <p className="body-copy">
                  Security-Books is a curated library on GitHub. The books, guides, and resources
                  are PDF and EPUB files at the repo root, tagged by the repo topics, and the
                  README is the catalogue.
                </p>
                <p className="body-copy">
                  The collection covers ethical hacking, penetration testing, bug bounty, red and
                  blue team, OSINT, malware analysis, and the certification paths CEH, OSCP, CISSP,
                  and CHFI.
                </p>
                <Plate
                  shown="the repo topics, as they appear on the repo, fifteen tags across the library."
                  happened="the topics are the catalogue: a reader finds a book by its field."
                >
                  <p className="mono-meta p-5 md:p-6" style={{ color: "var(--muted)" }}>
                    {TOPICS.join(", ")}
                  </p>
                </Plate>
                <p className="body-copy">
                  The library line is the whole pitch: 160+ books, guides, and resources, one
                  library.
                </p>
                <Plate
                  shown="the library line from the repo, 160+ books, guides, and resources."
                  happened="the collection is curated by topic, and it is the most starred repository on the account."
                >
                  <div className="p-5 md:p-6">
                    <CodeStrip code={project.strip} label={`Code from ${project.name}`} />
                  </div>
                </Plate>
              </Section>

              <Section id="evidence" title="Evidence">
                <p className="body-copy">
                  The collection is the most starred repository on the account. The star count
                  below is fetched live, or omitted when the fetch returns nothing.
                </p>
                {checked && (
                  <p className="mono-meta" style={{ color: "var(--muted)" }}>
                    {stars !== null
                      ? `Stars: ${stars}, fetched live from the GitHub API on ${starsDate}.`
                      : "Star count omitted: the live fetch did not return a number."}
                  </p>
                )}
                {project.counts && <CountList counts={project.counts} />}
              </Section>

              <Section id="what-i-would-improve" title="What I would improve">
                <p className="body-copy">
                  <strong>A one-line note per topic.</strong> Next would be a one-line note per
                  topic, saying who the books are for, so a beginner picks a field before picking
                  a title.
                </p>
                <p className="body-copy">
                  <strong>A regular check for dead links.</strong> Next would be a regular check
                  for dead links, so a link a reader follows still opens.
                </p>
                <p className="body-copy">
                  <strong>A short note on how a book earns its place.</strong> Next would be a
                  short note on how a book earns its place, so the curation rule is visible to
                  the reader.
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
