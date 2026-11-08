// Put the Hallmark stamp on line 1 of each built CSS file, in the plain
// `/* Hallmark ... */` form the Hallmark Floor (gate 20) requires.
// Tailwind emits its own licence banner first, and the source stamp uses
// `/*! ... */` so it survives minification; the build re-orders and
// de-bangs it here. Run automatically as the postbuild step.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../dist/assets", import.meta.url).pathname;
const STAMP = /\/\*!\s*(Hallmark[^*]*)\*\//;

for (const f of readdirSync(dir).filter((x) => x.endsWith(".css"))) {
  const p = join(dir, f);
  const css = readFileSync(p, "utf8");
  const m = css.match(STAMP);
  if (!m) {
    console.log(`stamp-css: no Hallmark stamp in ${f}`);
    continue;
  }
  const plain = `/* ${m[1].trim()} */`;
  if (css.startsWith(plain)) {
    console.log(`stamp-css: ${f} already stamped first`);
    continue;
  }
  writeFileSync(p, plain + css.replace(m[0], ""));
  console.log(`stamp-css: stamped line 1 of ${f}`);
}
