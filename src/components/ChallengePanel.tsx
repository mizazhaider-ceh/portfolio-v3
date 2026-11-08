import { useState } from "react";
import CodeStrip from "./CodeStrip";

/* The real IDOR challenge from PenTrix-VulnLab (modules/idor/challenges/admin.js):
   the admin panel at GET /admin only checks that a session exists, never the
   role, so any signed-in user can open it and see all users and all orders.
   No flag literal is ever shown. */

type Step = { id: string; label: string; code: string; note: string };

const STEPS: Step[] = [
  {
    id: "read",
    label: "Read the request",
    code: "GET /admin HTTP/1.1\nHost: lab.pentrix.local",
    note: "An ordinary signed-in user asks for the admin panel. No link ever pointed them there.",
  },
  {
    id: "spot",
    label: "Spot the flaw",
    code: "GET /admin HTTP/1.1\nHost: lab.pentrix.local\n# the panel checks that a session exists, never the role",
    note: "The panel asks 'are you signed in', never 'are you an admin'. Any logged-in user can open it.",
  },
  {
    id: "prove",
    label: "Prove it",
    code: "GET /admin HTTP/1.1\nHost: lab.pentrix.local\n\n-> 200 OK: all users and all orders listed\n-> flag captured",
    note: "The panel lists every user and every order, including orders that belong to other users. Flags are generated per install at first boot.",
  },
];

const FIX_STEP: Step = {
  id: "fix",
  label: "Fix it",
  code: "# check the role before serving the panel\nif (current_user.role !== \"admin\") {\n  return 403\n}\n# the same request now returns 403 Forbidden",
  note: "The fix is one check: the requester is an admin, or the server says no.",
};

/** Moment 1: a real PenTrix-VulnLab challenge, solved step by step in code.
    No flag literal is ever shown. */
export default function ChallengePanel({ withFix = false }: { withFix?: boolean }) {
  const steps = withFix ? [...STEPS, FIX_STEP] : STEPS;
  const [active, setActive] = useState(steps[0].id);
  const step = steps.find((s) => s.id === active) ?? steps[0];
  const solved = active === "prove" || active === "fix";
  return (
    <div className="card !p-0 overflow-hidden" data-product="pentrix-vulnlab">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line-soft)] px-6 py-4">
        <div>
          <p className="title-3">PenTrix-VulnLab, IDOR: unprotected admin panel</p>
          <p className="caption-2 mt-1 text-[var(--muted)]">Any signed-in user can open the admin panel. No role check, all orders listed.</p>
        </div>
        {solved ? (
          <span className="inline-flex items-center gap-2 rounded-lg bg-[var(--sage)] px-3 py-2 caption-3 text-[var(--green)]">
            Solved
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-soft)] bg-[var(--surface)] px-3 py-2 caption-3 text-[var(--muted)]">
            Try it
          </span>
        )}
      </div>
      <div className="px-6 py-5">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Challenge steps">
          {steps.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={active === s.id}
              onClick={() => setActive(s.id)}
              className={`filter-pill rounded-full border border-[var(--line-soft)] px-3 py-2 caption-3 fade ${active === s.id ? "bg-[var(--btn-bg)] text-[var(--btn-text)] border-[var(--btn-bg)]" : "bg-[var(--surface)] text-[var(--muted)]"}`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <div className="mt-4" role="tabpanel">
          <CodeStrip code={step.code} label={`Challenge step: ${step.label}`} />
          <p className="body-6 mt-4 text-[var(--muted)]">{step.note}</p>
        </div>
        <p className="title-4 mt-6 text-[var(--muted)]">Also inside PenTrix-VulnLab</p>
        <ul className="mt-3 space-y-3">
          {[
            { name: "SQL injection", module: "Injection" },
            { name: "Cross-site scripting", module: "Injection" },
            { name: "Insecure direct object reference", module: "Access control" },
          ].map((c) => (
            <li key={c.name} className="flex items-center justify-between gap-3">
              <span className="flex min-w-0 items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--periwinkle)]" aria-hidden="true" />
                <span className="body-5 min-w-0">{c.name}</span>
              </span>
              <span className="shrink-0 caption-4 text-[var(--faint)]">{c.module}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-[var(--line-soft)] pt-4 caption-2 text-[var(--muted)]">
          201 challenges, 29 modules, 3 kill chain scenarios
        </p>
      </div>
    </div>
  );
}
