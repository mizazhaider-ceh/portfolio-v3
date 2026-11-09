import { Link } from "react-router";
import { RESEARCH } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Research() {
  usePageMeta(
    "Research | Muhammad Izaz Haider",
    "Research interests in offensive security, AI security, and learning tools, plus the assigned international project in Amsterdam, 28 June to 2 July 2027.",
    "/research",
  );
  const project = RESEARCH.amsterdam;
  return (
    <>
      <PageHero
        marker="05, Research"
        title="Research"
        sentence="Direction and ambition, honestly stated. No published output is claimed, because none exists yet."
      />

      <section aria-label="Research interests">
        <div className="wrap">
          <h2 className="title-large">Research interests</h2>
          <p className="body-large mt-4">{RESEARCH.interests}</p>
        </div>
      </section>

      <section aria-label="International project, Amsterdam">
        <div className="wrap">
          <h2 className="title-large">{project.heading}</h2>
          <p className="mono-meta mt-4">
            {project.event}, {project.place}, {project.dates}, {project.credits}, {project.groupSize}.
          </p>
          <p className="body-copy mt-4">Planned role: {project.plannedRole}.</p>
          <p className="body-copy mt-2">Status: {project.status}.</p>
          <p className="body-copy mt-6">
            <Link to="/about#pentrix">The PenTrix background behind this role</Link>
            {" and "}
            <Link to="/contact">contact me to discuss the project</Link>.
          </p>
        </div>
      </section>

      <section aria-label="Research internship applications">
        <div className="wrap">
          <p className="body-large">{RESEARCH.applicationsLine}</p>
        </div>
      </section>

      <section aria-label="Writing lives in the projects">
        <div className="wrap">
          <h2 className="title-large">{RESEARCH.writingNote.heading}</h2>
          <p className="body-large mt-4">{RESEARCH.writingNote.text}</p>
          <ul className="mt-6 space-y-2">
            {RESEARCH.writingNote.links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="body-copy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
