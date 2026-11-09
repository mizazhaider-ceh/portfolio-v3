import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router";
import { Check } from "@phosphor-icons/react";
import CodeStrip from "./CodeStrip";

/**
 * The PenTrix-VulnLab challenge in the hero: the admin panel at GET /admin
 * only checks that a session exists, never the role, so any signed-in user
 * can open it. The check runs entirely in the browser, no request leaves
 * the browser, no role is checked. No flag literal is ever shown.
 *
 * The panel is a page from the book laid on the dark cover, so it keeps
 * ink text on paper in both themes (light paper tokens, hardcoded here).
 */
const PANEL = {
  surface: "#FFFEFA",
  ink: "#1C1A17",
  body: "#2A2723",
  muted: "#6E6A61",
  line: "#DCD5C6",
  accent: "#7A2E25",
  accentText: "#6E231C",
  accentSoft: "#F1E3DE",
} as const;

const FLAG_SENTENCE =
  "Flags are randomly generated per install at first boot on the student's machine, no flag literal exists in any tracked file, only genuine exploits earn flags.";

const STEPS = [
  { n: 1, title: "Read the request.", note: "An ordinary signed-in user asks for the admin panel." },
  { n: 2, title: "Spot the flaw.", note: "The panel checks that a session exists, never the role." },
  { n: 3, title: "Prove it.", note: "Type the path, then check it." },
];

const IDLE_TEXT = "Type a path, then press Check.";
const ERROR_TEXT = "No admin panel at that path. Try again.";

export default function ChallengePanel() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "solved">("idle");
  const inputRef = useRef<HTMLInputElement>(null);

  const onCheck = (e: FormEvent) => {
    e.preventDefault();
    const path = value.trim();
    if (path === "/admin" || path === "/admin/") {
      setStatus("solved");
    } else {
      setStatus("error");
      inputRef.current?.focus();
    }
  };

  const onReset = () => {
    setValue("");
    setStatus("idle");
    inputRef.current?.focus();
  };

  const solved = status === "solved";
  return (
    <div
      data-product="pentrix-vulnlab"
      style={{
        background: PANEL.surface,
        border: `1px solid ${PANEL.line}`,
        borderRadius: 2,
        color: PANEL.ink,
        padding: 32,
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display, Archivo, system-ui, sans-serif)",
          fontWeight: 600,
          fontSize: "1.375rem",
          lineHeight: 1.2,
          color: PANEL.ink,
        }}
      >
        Try it: PenTrix-VulnLab
      </h2>

      <div className="mt-6">
        <CodeStrip code={"GET /admin HTTP/1.1\nHost: lab.pentrix.local"} label="Request: GET /admin" />
      </div>

      <ol className="mt-6 space-y-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {STEPS.map((step) => (
          <li key={step.n} className="flex gap-3">
            <span
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
                fontWeight: 500,
                fontSize: 13,
                lineHeight: 1.5,
                color: PANEL.muted,
                flexShrink: 0,
              }}
            >
              {step.n}.
            </span>
            <span>
              <span
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  lineHeight: 1.65,
                  color: PANEL.ink,
                }}
              >
                {step.title}
              </span>{" "}
              <span
                style={{
                  fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.65,
                  color: PANEL.body,
                }}
              >
                {step.note}
              </span>
            </span>
          </li>
        ))}
      </ol>

      <form onSubmit={onCheck} className="mt-6">
        <label
          htmlFor="challenge-path"
          style={{
            display: "block",
            fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
            fontWeight: 500,
            fontSize: "0.9375rem",
            lineHeight: 1.5,
            color: PANEL.ink,
            marginBottom: 8,
          }}
        >
          Try a path
        </label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            ref={inputRef}
            id="challenge-path"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="/admin"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={status === "error"}
            aria-describedby="challenge-state"
            disabled={solved}
            style={{
              flex: 1,
              minWidth: 0,
              fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
              fontSize: 16,
              color: PANEL.ink,
              background: PANEL.surface,
              border: `1px solid ${status === "error" ? PANEL.accent : PANEL.line}`,
              borderRadius: 2,
              padding: 14,
              minHeight: 44,
            }}
          />
          <button
            type="submit"
            disabled={solved}
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: 15,
              color: "#F7F3EA",
              background: PANEL.ink,
              border: `1px solid ${PANEL.ink}`,
              borderRadius: 2,
              padding: "14px 28px",
              minHeight: 44,
              cursor: solved ? "default" : "pointer",
              opacity: solved ? 0.6 : 1,
            }}
          >
            Check
          </button>
        </div>
        <p
          id="challenge-state"
          aria-live="polite"
          className="mt-3"
          style={{
            fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: status === "error" ? PANEL.accentText : PANEL.muted,
            transition: "opacity 200ms ease-out",
          }}
        >
          {status === "idle" && IDLE_TEXT}
          {status === "error" && ERROR_TEXT}
          {solved && "Solved. That path opens the admin panel."}
        </p>
      </form>

      {solved && (
        <div
          className="mt-4"
          style={{
            background: PANEL.accentSoft,
            borderRadius: 2,
            padding: 16,
            transition: "opacity 200ms ease-out",
          }}
        >
          <p>
            <span
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontWeight: 600,
                fontSize: "0.9375rem",
                color: PANEL.accentText,
              }}
            >
              <Check size={16} weight="regular" aria-hidden="true" style={{ color: PANEL.accent }} />
              Solved
            </span>
          </p>
          <p
            className="mt-2"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: PANEL.body,
            }}
          >
            {FLAG_SENTENCE}
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to="/projects/pentrix-vulnlab"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: PANEL.accentText,
              }}
            >
              Read the PenTrix-VulnLab case study
            </Link>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex min-h-11 items-center"
              style={{
                fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: PANEL.body,
                background: "transparent",
                border: 0,
                padding: 0,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
