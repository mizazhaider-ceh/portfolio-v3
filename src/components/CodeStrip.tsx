import { useMemo, type ReactNode } from "react";
import { useCopy } from "../hooks";

/**
 * Code strip on a dark code ground in both themes, with multicoloured
 * syntax highlighting in the Monograph code palette. The tokenizer is
 * dependency free and regex based, kept from v2 and extended to the
 * Monograph palette and to PowerShell verb-noun cmdlets and $variables.
 *
 * Token colours: keyword #D8A24A, string #A8B89A, function #9DBEB0,
 * number #D08A5A, comment #8A8378, variable and path #E8E2D5.
 */
const TOKEN = {
  kw: "#D8A24A",
  str: "#A8B89A",
  fn: "#9DBEB0",
  num: "#D08A5A",
  com: "#8A8378",
  variable: "#E8E2D5",
  body: "#E8E2D5",
} as const;

const KEYWORDS = new Set([
  "GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "HTTP", "SELECT", "FROM", "WHERE",
  "INSERT", "INTO", "UPDATE", "CREATE", "TABLE", "sudo", "python3", "python", "pip",
  "git", "nmap", "curl", "ls", "ps", "df", "cd", "nano", "chmod", "npm", "node",
  "func", "return", "import", "from", "const", "let", "var", "if", "else", "for",
  "function", "param", "begin", "process", "end", "try", "catch", "finally", "throw",
  "foreach", "in", "while", "do", "switch", "class", "extends", "async", "await",
  "export", "default", "new", "typeof", "null", "true", "false", "echo", "cat",
  "grep", "awk", "sed", "find", "which", "man", "mkdir", "rm", "cp", "mv", "touch",
  "head", "tail", "sort", "uniq", "wc", "ssh", "scp", "apt", "docker",
]);

/** PowerShell verb-noun cmdlets (Get-Command, Write-Host) read as functions. */
const VERB_NOUN = /^[A-Z][a-z]+-[A-Z][A-Za-z]+$/;

function tokenize(line: string, lineNo: number): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;
  const push = (text: string, color?: string) => {
    out.push(
      <span key={`${lineNo}-${k++}`} style={color ? { color } : undefined}>
        {text}
      </span>,
    );
  };
  while (i < line.length) {
    const rest = line.slice(i);
    if (rest.startsWith("#") || rest.startsWith("//")) {
      push(rest, TOKEN.com);
      break;
    }
    const str = rest.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
    if (str) {
      push(str[0], TOKEN.str);
      i += str[0].length;
      continue;
    }
    const variable = rest.match(/^\$[A-Za-z_][A-Za-z0-9_]*/);
    if (variable) {
      push(variable[0], TOKEN.variable);
      i += variable[0].length;
      continue;
    }
    const num = rest.match(/^\d+(?:\.\d+)?/);
    if (num) {
      push(num[0], TOKEN.num);
      i += num[0].length;
      continue;
    }
    const word = rest.match(/^[A-Za-z_][A-Za-z0-9_\-.]*/);
    if (word) {
      const w = word[0];
      if (KEYWORDS.has(w)) push(w, TOKEN.kw);
      else if (VERB_NOUN.test(w)) push(w, TOKEN.fn);
      else if (line[i + w.length] === "(") push(w, TOKEN.fn);
      else if (w.startsWith("/") || w.includes("/")) push(w, TOKEN.variable);
      else push(w);
      i += w.length;
      continue;
    }
    const path = rest.match(/^\/[^\s"']*/);
    if (path) {
      push(path[0], TOKEN.variable);
      i += path[0].length;
      continue;
    }
    push(rest[0]);
    i += 1;
  }
  return out;
}

export default function CodeStrip({ code, label }: { code: string; label?: string }) {
  const lines = useMemo(() => code.split("\n"), [code]);
  const { copied, copy } = useCopy();
  const copyKey = "code-strip";
  const copyName = label ?? "code";
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {label ? (
          <span
            style={{
              fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
              fontWeight: 500,
              fontSize: 13,
              lineHeight: 1.5,
              color: "var(--muted, #6E6A61)",
            }}
          >
            {label}
          </span>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={() => copy(copyKey, code)}
          aria-label={`Copy ${copyName}`}
          style={{
            fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
            fontWeight: 500,
            fontSize: "0.9375rem",
            color: "var(--ink, #1C1A17)",
            background: "var(--surface, #FFFEFA)",
            border: "1px solid var(--line, #DCD5C6)",
            borderRadius: 2,
            minHeight: 44,
            padding: "8px 16px",
            cursor: "pointer",
          }}
        >
          {copied === copyKey ? "Copied" : "Copy"}
        </button>
      </div>
      <div
        className="mt-2"
        role="img"
        aria-label={label ?? code}
        style={{
          background: "var(--code-ground, #1E1C19)",
          color: TOKEN.body,
          border: "1px solid var(--line, #DCD5C6)",
          borderRadius: 2,
          fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
          fontSize: 14,
          lineHeight: 1.7,
          padding: 16,
          overflowX: "auto",
          whiteSpace: "pre",
        }}
      >
        {lines.map((line, i) => (
          <div key={i}>{line === "" ? "\u00a0" : tokenize(line, i)}</div>
        ))}
      </div>
    </div>
  );
}
