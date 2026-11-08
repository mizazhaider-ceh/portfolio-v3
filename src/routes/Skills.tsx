import { Crosshair, Robot, ShieldCheck } from "@phosphor-icons/react";
import { SKILL_GROUPS, SOFT_SKILLS } from "../data";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";
import DiagramFigure from "../components/DiagramFigure";

const GROUP_ICONS: Record<string, typeof Crosshair> = {
  "Offensive security": Crosshair,
  "Defensive security": ShieldCheck,
  "AI security and automation": Robot,
};

export default function Skills() {
  usePageMeta(
    "Skills | Muhammad Izaz Haider",
    "Offensive security, defensive security, and AI security and automation. No percentages. Each skill carries the evidence for it.",
    "/skills",
  );
  return (
    <>
      <PageHero
        kicker="Skills"
        title="Security skills"
        marker="skills"
        sentence="No percentages. Each skill carries the evidence for it."
      />
      <section aria-label="Skills and career tree" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <h2 className="heading-2">One person, three branches</h2>
          <p className="body-2 mt-4 max-w-[680px] text-[var(--muted)]">
            Every leaf in the tree is tied to a project, a finding, or a rank. Click a node in the diagram to focus it.
          </p>
          <DiagramFigure
            src="/diagrams/skills-tree.html"
            title="Skills and career tree of Muhammad Izaz Haider"
            caption="Technical identity, skills and career tree: offensive security, defensive security, and AI security and automation, each leaf tied to evidence."
            tall
          />
        </div>
      </section>
      <section aria-label="Skill groups" style={{ "--h": 2 } as React.CSSProperties}>
        <div className="wrap">
          <div className="grid gap-4 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => {
              const Icon = GROUP_ICONS[group.name] ?? ShieldCheck;
              return (
                <div key={group.name} className="card h-full">
                  <div className="flex items-center gap-3">
                    <Icon size={24} weight="regular" className="shrink-0 text-[var(--periwinkle-deep)]" aria-hidden="true" />
                    <h3 className="title-1">{group.name}</h3>
                  </div>
                  <table className="mt-5 w-full border-collapse text-[0.95rem]">
                    <thead>
                      <tr>
                        <th className="border border-[var(--line)] bg-[var(--ink)] px-3 py-2 text-left text-[0.9rem] text-[var(--bg)]">Skill</th>
                        <th className="border border-[var(--line)] bg-[var(--ink)] px-3 py-2 text-left text-[0.9rem] text-[var(--bg)]">Used in</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item) => (
                        <tr key={item.name}>
                          <td className="border border-[var(--line)] px-3 py-2 font-medium">{item.name}</td>
                          <td className="border border-[var(--line)] px-3 py-2 text-[var(--muted)]">{item.evidence}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
          <p className="body-6 mt-10 text-[var(--muted)]">
            How I work: {SOFT_SKILLS.join(", ")}.
          </p>
        </div>
      </section>
    </>
  );
}
