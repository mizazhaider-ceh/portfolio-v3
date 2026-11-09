# Asset Audit: Open Graph Plate, Favicons, PNG Fallbacks

**Portfolio V3 rebuild, Phase 8. Date: 9 November 2026. Scope: gaps G1, G13, G9 from docs/06-asset-inventory.md sections 1.4, 4, and 5.**

**Method note:** the Open Graph plate was generated with Pillow from the vendored fonts in `public/fonts/` (Archivo variable instantiated at weight 700, Instrument Sans 500, JetBrains Mono 500; the woff2 files were converted to TTF in `/tmp/og-fonts/` only, no font file was added to the repo). The favicon SVG was rendered with cairosvg and the ICO built with Pillow. No file was committed, pushed, or deployed. All edits are in the working tree.

## 1. Gap G1: Open Graph plate

### What was wrong before

`public/images/og-image.jpg` was 99,992 bytes, 1200 by 630, a stock style photograph of a man at a laptop with headphones, overlaid text cropped at the right edge, a blue accent, and a dark photographic ground. It failed every requirement in the inventory section 4 and must not ship.

### What was built

Same path replacement, no file rename. `public/images/og-image.jpg` was replaced at the same path.

Composition, exactly per inventory section 4:

1. Canvas 1200 by 630, paper ground `#F7F3EA`, flat, no gradient, no photograph, no shadow.
2. Layout left aligned, 96px margins on the left and right, content block centred vertically.
3. One 2px oxblood rule (`#7A2E25`), 120px wide, above the name. No other colour appears.
4. Line 1, name, Archivo 700 at 92px, ink `#1C1A17`: Muhammad Izaz Haider
5. Line 2, role line, Instrument Sans 500 at 38px, ink `#1C1A17`: Penetration Tester, AI x Offensive Security
6. Line 3, one verified fact, JetBrains Mono 500 at 28px, body `#2A2723` (the body value, chosen from the two options in the spec for legibility at small sizes): First place in Web, Junior division, CSCB 2026
7. No other text, no logo mark, no photo, no institution name, no contact detail, no count beyond that one verified fact.

Export: JPG quality 82. Final size 40,336 bytes, under the 300 KB cap.

### Render check

Viewed at 1200 by 630: name, role line, and fact line all read cleanly, the oxblood rule sits above the name, generous paper margins on all sides, no clipping. Viewed at 600 by 315 and at 480 by 252: all three lines stay legible, including the fact line in mono (28px at full size scales to about 11px at 480 wide, still readable). Pass.

### Meta tag correction found while doing this work

The task brief stated that `index.html` already references the OG path for `og:image` and `twitter:image`. It did not. A grep of `index.html` found `og:title`, `og:description`, `og:url`, and `og:site_name`, plus `twitter:card`, `twitter:title`, and `twitter:description`, but no `og:image` and no `twitter:image` tag at all. Without those tags, link previews would have no image even after the plate was replaced.

Fix applied in `index.html`, same change, no other edit to the file:

- `og:image` set to `https://mizazhaider-ceh.dev/images/og-image.jpg` (the same domain as the existing `og:url` and canonical link, and the URL the inventory section 4 records).
- `og:image:width` 1200, `og:image:height` 630.
- `og:image:alt`: Muhammad Izaz Haider, Penetration Tester, AI x Offensive Security. First place in Web, Junior division, CSCB 2026.
- `twitter:image` set to the same URL.

Option recorded: same path replacement, plus the missing meta tags added. No meta tag was changed, only added.

## 2. Gap G13: favicons

### What was wrong before

- `public/favicon.svg`, 338 bytes: purple square `#5A45D6`, lime bar `#B8F34A`, "IH" text in Arial. The rejected v2 identity in miniature.
- `public/favicon.ico`, 3,495 bytes: icon container with 16 by 16 and 32 by 32 entries, same v2 identity (pixel content confirmed by the SVG it was built from).

### What was built

Both files replaced at the same paths, no rename, so the existing links in `index.html` (`/favicon.svg` and `/favicon.ico`) keep working with no meta change.

New mark, Monograph only:

- Paper ground `#F7F3EA`, 2px radius (`rx="2"`).
- Ink `#1C1A17` letter "M" drawn as a stroked path (no font dependency, so it renders identically everywhere; no Arial, no "IH").
- One 2px oxblood rule (`#7A2E25`) under the M, echoing the rule on the Open Graph plate.
- No purple, no lime, no gradient, no shadow.

`public/favicon.svg`, 321 bytes. `public/favicon.ico`, 1,955 bytes, a proper icon container with 16 by 16 and 32 by 32 entries, built with Pillow from a cairosvg render of the new SVG at 64px.

### Render check

Rendered and viewed as a contact sheet at 64px, 32px, and 16px, plus a 160px nearest neighbour enlargement. The M reads clearly at all three sizes, including 16px, and the oxblood rule is visible at 64px and 32px and a faint hint at 16px. Pass. The ICO was re-opened with Pillow and confirmed to contain the 16 by 16 and 32 by 32 entries.

## 3. Gap G9: PNG fallbacks over the 300 KB cap

### The files

- `public/images/optimised/profile.png`: 824,463 bytes (byte identical to the original; already losslessly optimal).
- `public/images/optimised/yeswehack-swag.png`: 1,203,817 bytes.
- WebP versions: `optimised/profile.webp` 47,728 bytes, `optimised/yeswehack-swag.webp` 82,660 bytes. Both under the cap.

### How the plates are referenced

Checked in `src/routes/About.tsx` before deciding. Both plates use a `<picture>` element with the WebP as the first `<source>` and the PNG as the `<img>` fallback:

- Portrait, About.tsx lines 120 to 122: `<source srcSet="/images/optimised/profile.webp" type="image/webp" />` with `<img src="/images/optimised/profile.png" ...>` (800 by 800, eager, high fetch priority).
- Swag, About.tsx lines 235 to 237: `<source srcSet="/images/optimised/yeswehack-swag.webp" type="image/webp" />` with `<img src="/images/optimised/yeswehack-swag.png" ...>` (1280 by 912, lazy).

No other live plate references these two PNGs. The `/images/yeswehack-swag.png` path in `src/data.ts` line 1088 sits in `PROOF_GALLERY`, which is exported but imported nowhere in `src/`; it is retained data for a gallery the specs say is not republished, not a served plate.

### Decision: keep the PNG fallback for both plates

Reasoning, in order:

1. The design system prescribes this exact shape for the portrait: WebP or AVIF with the PNG as fallback (`docs/DESIGN_SYSTEM.md`, image treatment). Removing the fallback would contradict the approved system.
2. The cap holds on the normal path. A browser that supports WebP downloads only the WebP (47,728 and 82,660 bytes). The PNG downloads only in browsers without WebP support, which is a small legacy set (Safari before 14, very old browsers). The over-cap bytes are not served to normal visitors.
3. Removing the fallback would break the plates outright for those legacy browsers: a broken image where the About portrait (eager, the lead plate of the page) and the recognition plate should be. A degraded but working image is better than no image.
4. WebP-only in code would not even reduce shipped bytes. The task keeps the fallback files on disk either way, and Vite copies everything in `public/` to `dist`, so the two PNGs would still ship as unused static files (about 2.03 MB) while serving no visitor. Keeping them as a real fallback is the better use of the same bytes.
5. The cost of keeping them is deploy size only, about 2.03 MB of rarely downloaded static files. Accepted.

### Implementation in code

No code edit was needed. The `<picture>` elements in `src/routes/About.tsx` already implement the keep-fallback decision correctly: WebP first, PNG fallback second, correct dimensions and loading attributes on both. The decision is implemented by the existing markup, verified by reading it, not by changing it.

### Files kept on disk

Neither fallback file was deleted, moved, or re-encoded, per the task. Both stay at their current paths.

## 4. File sizes before and after

| File | Before (bytes) | After (bytes) | Change |
|---|---|---|---|
| `public/images/og-image.jpg` | 99,992 | 40,336 | Replaced, composed Monograph plate, JPG quality 82 |
| `public/favicon.svg` | 338 | 321 | Replaced, Monograph M mark |
| `public/favicon.ico` | 3,495 | 1,955 | Replaced, 16 by 16 and 32 by 32 entries |
| `public/images/optimised/profile.png` | 824,463 | 824,463 | Unchanged, kept as fallback |
| `public/images/optimised/yeswehack-swag.png` | 1,203,817 | 1,203,817 | Unchanged, kept as fallback |
| `public/images/optimised/profile.webp` | 47,728 | 47,728 | Unchanged, served file |
| `public/images/optimised/yeswehack-swag.webp` | 82,660 | 82,660 | Unchanged, served file |
| `index.html` | (no og:image tags) | (og:image, og:image:width, og:image:height, og:image:alt, twitter:image added) | 6 meta lines added |
| `docs/08-assets.md` | (did not exist) | (this file) | Created |

## 5. Verification

- `npx tsc --noEmit -p tsconfig.app.json`: pass, zero errors, exit 0.
- `npm run build`: pass, built in 13.41s, exit 0. The new `og-image.jpg` (40,336 bytes) and favicons are present in `dist/`.
- Em dash grep over `src/` and `public/*.svg`: zero. Arsenal token grep (`#5A45D6`, `#B8F34A`, `#EEE8FF`, `#C7B8F5`, `#FAF9F5`) over `src/` and `public/*.svg`: zero after the favicon replacement. The word Arsenal appears only in the project names BugHunt Arsenal and AgentArsenal, which are allowed.
- OG plate render check: viewed at 1200 by 630, 600 by 315, and 480 by 252. Pass.
- Favicon render check: viewed at 64px, 32px, 16px, and 160px enlarged. Pass. ICO entries confirmed 16 by 16 and 32 by 32.

## 6. Open observation, out of scope for this task

`src/data.ts` `CSCB_STORY` (lines 1094 to 1118) points at the original PNGs (`/images/cscb-web-first.png`, `/images/cscb-26th-place.png`, `/images/cscb-solves-breakdown.png`) rather than the optimised WebP plus PNG pairs in `public/images/optimised/`. One of those originals, `cscb-solves-breakdown.png`, is 350,603 bytes, over the 300 KB cap. This is not gap G9 (profile and swag only) and was not changed here; it is recorded for the coordinator to route to whoever owns the CSCB story plate wiring.
