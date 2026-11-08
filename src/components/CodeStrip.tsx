import { useMemo, type ReactNode } from "react";

/* Tiny syntax highlighter for code strips: keywords purple, functions blue,
   strings green, numbers orange, paths and variables cyan, comments grey. */
const KEYWORDS = new Set([
  "GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "HTTP", "SELECT", "FROM", "WHERE",
  "INSERT", "INTO", "UPDATE", "CREATE", "TABLE", "sudo", "python3", "python", "pip",
  "git", "nmap", "curl", "ls", "ps", "df", "cd", "nano", "chmod", "npm", "node",
  "func", "return", "import", "from", "const", "let", "var", "if", "else", "for",
]);

function tokenize(line: string, lineNo: number): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;
  const push = (text: string, cls?: string) => {
    out.push(cls ? <span key={`${lineNo}-${k++}`} className={cls}>{text}</span> : <span key={`${lineNo}-${k++}`}>{text}</span>);
  };
  while (i < line.length) {
    const rest = line.slice(i);
    if (rest.startsWith("#")) {
      push(rest, "tok-com");
      break;
    }
    const str = rest.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/);
    if (str) {
      push(str[0], "tok-str");
      i += str[0].length;
      continue;
    }
    const num = rest.match(/^\d+(?:\.\d+)?/);
    if (num) {
      push(num[0], "tok-num");
      i += num[0].length;
      continue;
    }
    const word = rest.match(/^[A-Za-z_][A-Za-z0-9_\-.]*/);
    if (word) {
      const w = word[0];
      if (KEYWORDS.has(w)) push(w, "tok-kw");
      else if (line[i + w.length] === "(") push(w, "tok-fn");
      else if (w.startsWith("/") || w.includes("/")) push(w, "tok-var");
      else push(w);
      i += w.length;
      continue;
    }
    const path = rest.match(/^\/[^\s"']*/);
    if (path) {
      push(path[0], "tok-var");
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
  return (
    <div className="code-strip p-3" role="img" aria-label={label ?? code}>
      {lines.map((line, i) => (
        <div key={i}>{line === "" ? "\u00a0" : tokenize(line, i)}</div>
      ))}
    </div>
  );
}
