import { Fragment } from "react";
import { Link } from "react-router";
import {
  CERTIFICATIONS,
  EXPERTISE_GROUPS,
  IN_PROGRESS_STUDY,
  PENDING_CERTIFICATIONS,
  SOFT_SKILLS,
} from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";
import DiagramFigure from "../components/DiagramFigure";
import SkillsTree from "../components/diagrams/SkillsTree";

export default function Expertise() {
  usePageMeta(
    "Expertise | Muhammad Izaz Haider",
    "What he can do, grouped by evidence: web application penetration testing, bug bounty hunting, DevSecOps, mobile security, digital forensics, Linux and server security, AI security, and network security. No percentages, each group linked to its proof.",
    "/expertise",
  );
  return (
    <>
      <PageHero
        marker="04, Expertise"
        title="Expertise"
        sentence="No percentages. Each group carries the evidence for it, and a link to the project or role that proves it."
      />

      {EXPERTISE_GROUPS.map((group, i) => (
        <Fragment key={group.id}>
          <section aria-label={group.name} id={group.id}>
            <div className="wrap">
              <h2 className="title-large">{group.name}</h2>
              {group.status && <p className="mono-meta mt-3">{group.status}</p>}
              <p className="body-large mt-4">{group.coverage}</p>
              <p className="mono-meta mt-6">Tools used: {group.tools.join(", ")}</p>
              <p className="body-copy mt-4">
                Proved by{" "}
                {group.provedBy.map((proof, j) => (
                  <span key={proof.to}>
                    {j > 0 && ", "}
                    <Link to={proof.to}>{proof.label}</Link>
                  </span>
                ))}
              </p>
            </div>
          </section>
          {i === 0 && (
            <section aria-label="Skills tree diagram">
              <div className="wrap">
                <DiagramFigure
                  title="Skills and career tree"
                  caption="What is shown: the skills and career tree, root to three branches, offensive security, defensive security, and AI security and automation, 29 leaves in total. What happened: the tree was rebuilt as a hand-built inline SVG in Monograph tokens, with the content fixes recorded in the diagram source."
                >
                  <SkillsTree />
                </DiagramFigure>
                <p className="body-small mt-4" style={{ color: "var(--muted)" }}>
                  Text equivalent: the nine Expertise group descriptions on this page list
                  every branch and leaf of the tree with its evidence, starting with web
                  application penetration testing above.
                </p>
              </div>
            </section>
          )}
        </Fragment>
      ))}

      <section aria-label="Certifications" id="certifications">
        <div className="wrap">
          <h2 className="title-large">Certifications</h2>
          <p className="body-large mt-4">Named certifications only. Nothing counted, nothing estimated.</p>
          <ul className="mt-8">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.name}
                className="border-t py-4"
                style={{ borderColor: "var(--line, #DCD5C6)" }}
              >
                <p className="label">{cert.name}</p>
                <p className="mono-meta mt-1">{cert.org}</p>
              </li>
            ))}
          </ul>
          <div className="card mt-8">
            <p className="mono-meta">Confirmation pending</p>
            {PENDING_CERTIFICATIONS.map((cert) => (
              <p key={cert.name} className="body-small mt-4" style={{ color: "var(--muted, #6E6A61)" }}>
                {cert.name} ({cert.org}). {cert.note}
              </p>
            ))}
          </div>
          <div className="mt-10 border-t pt-8" style={{ borderColor: "var(--line, #DCD5C6)" }}>
            <p className="mono-meta">{IN_PROGRESS_STUDY.heading}</p>
            <p className="body-copy mt-3">{IN_PROGRESS_STUDY.text}</p>
          </div>
        </div>
      </section>

      <section aria-label="How I work">
        <div className="wrap">
          <p className="body-copy">How I work: {SOFT_SKILLS.join(", ")}.</p>
        </div>
      </section>
    </>
  );
}
