// Monograph postbuild step.
//
// The v2 build stamped a Hallmark comment on line 1 of each built CSS
// file. Monograph is a React build, not a Hallmark run, and it carries
// no stamp: the design system records that the stamp rule is not
// adopted here, and the source CSS carries no stamp to preserve.
//
// This script therefore applies no stamp. It only reads the built CSS
// files and warns (never fails the build) if a v2 token string is still
// present, so a leftover is noticed in the build log instead of
// shipping silently. Run automatically as the postbuild step.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../dist/assets", import.meta.url).pathname;
const FORBIDDEN = ["periwinkle", "lilac", "lime", "sora", "arsenal"];

if (!existsSync(dir)) {
  console.log("stamp-css: dist/assets not present, nothing to check");
} else {
  for (const f of readdirSync(dir).filter((x) => x.endsWith(".css"))) {
    const css = readFileSync(join(dir, f), "utf8");
    const found = FORBIDDEN.filter((word) => css.toLowerCase().includes(word));
    if (found.length > 0) {
      console.log(`stamp-css: warning, v2 token strings in ${f}: ${found.join(", ")}`);
    } else {
      console.log(`stamp-css: ${f} clean, no stamp applied`);
    }
  }
}
