import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { APK_STAGES } from "../../data";
import { usePageMeta } from "../../hooks";
import PageHero from "../../components/PageHero";
import DiagramFigure from "../../components/DiagramFigure";
import ApkPipelineDiagram from "../../components/diagrams/ApkPipeline";

export default function ApkPipeline() {
  usePageMeta(
    "APK Security Pipeline | Muhammad Izaz Haider",
    "One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports. Pure Python, v2.1.0.",
    "/projects/apk-security-pipeline",
  );
  return (
    <>
      <PageHero
        kicker="Project, DevSecOps"
        title="APK Security Pipeline"
        marker="APK Security Pipeline"
        sentence="One command security checks an Android app and explains every step: static manifest and code rules, Frida dynamic traces, scoring, HTML and JSON reports."
      >
        <p className="mt-2">
          <Link to="/projects" className="inline-flex min-h-11 items-center gap-1 title-4 text-[var(--periwinkle-deep)] fade hover:text-[var(--ink)]">
            <ArrowLeft size={16} weight="regular" aria-hidden="true" /> Back to projects
          </Link>
        </p>
      </PageHero>
      <section aria-label="Overview" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <dl className="meta-grid">
            <div><dt>Stack</dt><dd>Pure Python, v2.1.0</dd></div>
            <div><dt>Python</dt><dd>3.10+, zero dependencies</dd></div>
            <div><dt>Tests</dt><dd>64 passing</dd></div>
            <div><dt>Link</dt><dd><a href="https://github.com/mizazhaider-ceh/apk-security-pipeline" target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">GitHub</a></dd></div>
          </dl>
          <p className="body-3 mt-8 max-w-[680px] text-[var(--muted)]">
            One command, explained end to end. The pipeline reads an Android app, checks it statically, watches it run with Frida, scores what it finds, and writes the result as HTML for people and JSON for tools.
          </p>
        </div>
      </section>
      <section aria-label="Pipeline" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">The pipeline</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">One command in, HTML and JSON reports out.</p>
          <DiagramFigure
            title="APK Security Pipeline workflow"
            caption="APK Security Pipeline workflow: static manifest rules, strings and code rules, Frida dynamic traces, scoring, report generation, and baseline and CI modes."
          >
            <ApkPipelineDiagram />
          </DiagramFigure>
          <p className="body-6 mt-4 text-[var(--muted)]">Text equivalent, in order:</p>
          <ul className="body-6 mt-2 max-w-[680px] list-disc pl-5 text-[var(--muted)]">
            <li>One command takes an APK file in</li>
            <li>Static analysis checks the manifest rules, then strings and code rules</li>
            <li>Frida dynamic traces show what the app does live</li>
            <li>Scoring gives one score out of 100 and a grade from A to F</li>
            <li>Reports are generated as HTML and JSON, with baseline and CI modes</li>
          </ul>
          <table className="mt-8 w-full border-collapse text-[0.95rem]">
            <thead>
              <tr>
                <th className="border border-[var(--line)] bg-[var(--ink)] px-3 py-2 text-left text-[0.9rem] text-[var(--bg)]">Stage</th>
                <th className="border border-[var(--line)] bg-[var(--ink)] px-3 py-2 text-left text-[0.9rem] text-[var(--bg)]">What it checks</th>
                <th className="border border-[var(--line)] bg-[var(--ink)] px-3 py-2 text-left text-[0.9rem] text-[var(--bg)]">What it produces</th>
              </tr>
            </thead>
            <tbody>
              {APK_STAGES.map((s) => (
                <tr key={s.name}>
                  <td className="border border-[var(--line)] px-3 py-2 font-medium">{s.name}</td>
                  <td className="border border-[var(--line)] px-3 py-2 text-[var(--muted)]">{s.checks}</td>
                  <td className="border border-[var(--line)] px-3 py-2 text-[var(--muted)]">{s.produces}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section aria-label="Sample results" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">Sample results</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">
            The same pipeline, two samples. A clean sample scores 100 out of 100, grade A, with 0 findings. A vulnerable sample scores 0 out of 100, grade F, with 24 findings.
          </p>
          <figure className="shot mt-8 max-w-[820px]">
            <div className="flex items-center justify-center bg-[var(--surface)]">
              <img src="/images/apk-report-preview.png" alt="APK Security Pipeline HTML report preview showing the vulnerable sample at 0 out of 100, grade F" loading="lazy" className="max-h-[520px] w-full object-contain" />
            </div>
            <figcaption>Real report preview: the vulnerable sample, 0 out of 100, grade F.</figcaption>
          </figure>
          <p className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/mizazhaider-ceh/apk-security-pipeline" target="_blank" rel="noreferrer" className="btn-primary">
              View on GitHub <ArrowUpRight size={18} weight="regular" aria-hidden="true" />
            </a>
            <Link to="/projects" className="btn-secondary">Back to projects</Link>
          </p>
        </div>
      </section>
    </>
  );
}
