# Fonts: vendored families and verification

**Portfolio V3 rebuild, Phase 6 asset production. Date: 9 November 2026. Status: vendored and verified, ready for the Phase 7 CSS swap.**

**Scope:** this file records the three self hosted font families for the Monograph direction, the exact files vendored into `public/fonts/`, the expanded width axis verification for Archivo, the render test result, and the copy ready `@font-face` block Phase 7 must add. It does not edit any CSS. Phase 7 owns the `src/index.css` swap and the removal of the v2 fonts.

## 1. Source packages

Installed from npm on 9 November 2026 into a scratch directory (`/tmp/font-vendor`, not into the project, so `package.json` was not changed by this task). All three packages are version 5.3.0.

| Family | Package | Version | Role |
|---|---|---|---|
| Archivo, variable | `@fontsource-variable/archivo` | 5.3.0 | Display |
| Instrument Sans | `@fontsource/instrument-sans` | 5.3.0 | Text |
| JetBrains Mono | `@fontsource/jetbrains-mono` | 5.3.0 | Code and metadata |

Source file used for Archivo is the Fontsource `standard` latin file (`archivo-latin-standard-normal.woff2`), which is the full variable file with both axes. The `wght` only file was not used, because it has no width axis. The `wdth` file was inspected and also carries both axes, but `standard` is the canonical full variable file, so it is the one vendored.

## 2. Vendored files

All files are WOFF2, latin subset, normal style, in `public/fonts/`. Every vendored file was checksummed against its Fontsource source file after copying, and every checksum matched. Total for the seven new files: 206,420 bytes.

| File | Bytes | MD5 | Glyphs | Notes |
|---|---|---|---|---|
| `archivo-variable-latin.woff2` | 90,104 | `de2f1fe81758075f50ed6ce1e8e238ed` | 302 | Variable, wght 100 to 900, wdth 62 to 125 |
| `instrument-sans-latin-400-normal.woff2` | 16,860 | `c178fc5e2d410bc57c83447afe77592b` | 244 | Weight 400 |
| `instrument-sans-latin-500-normal.woff2` | 17,232 | `552cbb998bb60e067fe36a16b60271d1` | 244 | Weight 500 |
| `instrument-sans-latin-600-normal.woff2` | 17,408 | `36a59be5465943b0e54b6f24bed0e174` | 244 | Weight 600 |
| `jetbrains-mono-latin-400-normal.woff2` | 21,168 | `caf0dfde4e448468f09b7bed230206a4` | 394 | Weight 400 |
| `jetbrains-mono-latin-500-normal.woff2` | 21,832 | `a21e038a03f709cf60aa1e2944048aef` | 394 | Weight 500 |
| `jetbrains-mono-latin-600-normal.woff2` | 21,860 | `075ec35bc15ba900f57dc181425eb889` | 394 | Weight 600 |

Weights required are covered: Archivo 600, 700, 800 sit inside the variable range 100 to 900. Instrument Sans 400, 500, 600 and JetBrains Mono 400, 500, 600 are each a separate static file. No italic files were vendored, because no italic is used in the design.

## 3. Existing v2 fonts, untouched

The v2 pairing files were left in place for now, and their checksums were verified unchanged after this task:

| File | Bytes | MD5 |
|---|---|---|
| `sora-latin.woff2` | 25,284 | `fc575ebf6f7c3646d13d9386cf8a86e0` |
| `inter-latin.woff2` | 48,256 | `260c81a4759baf163c025001c4f27872` |

Phase 7 removes these two files when `src/index.css` is replaced. They must not be referenced by any new CSS.

## 4. Axis verification, exact fontTools output

Checked with fontTools 4.67.0 (`TTFont`, `fvar` table) on the vendored file `public/fonts/archivo-variable-latin.woff2`:

```
archivo-variable-latin.woff2 | flavor: woff2 | family: Archivo SemiBold | subfamily: Regular | glyphs: 302
  fvar: wght min 100.0 default 600.0 max 900.0
  fvar: wdth min 62.0 default 100.0 max 125.0
  OS/2 weight class: 600
```

Result: the expanded width axis is present. The `wdth` axis runs from 62 (condensed) through a default of 100 (normal) to 125 (expanded). The `wght` axis runs from 100 through a default of 600 to 900, which covers the required 600, 700, and 800.

The static files have no `fvar` table, as expected for static weights. Their OS/2 weight classes match their filenames: Instrument Sans 400, 500, 600 and JetBrains Mono 400, 500, 600.

## 5. Render test

Test page: `/tmp/font-vendor/render-test/index.html` (scratch copy of the seven vendored files, same `@font-face` declarations as section 7, paper ground `#F7F3EA`, ink `#1C1A17`). Rendered with Playwright Chromium (headless shell, viewport 1440 by 1000). Screenshot: `/tmp/font-vendor/render-test/render.png`. The test files live in `/tmp` and are not part of the repo, because they are verification scratch, not project assets.

The page shows the hero headline "Find the flaw. Prove it. Build the fix." in Archivo 700 at 96px with `font-stretch: 125%` and tracking `-0.03em`, broken into three lines by hand, plus a side by side comparison of the same line at 100% and 125%, plus an Instrument Sans 400 body sample and a JetBrains Mono 500 meta sample.

Measured results, same text ("Find the flaw. Prove it. Build the fix."), Archivo 700, 48px, tracking `-0.02em`, measured as inline span width:

| Width setting | Rendered width |
|---|---|
| `font-stretch: 62%` (condensed) | 504.5625px |
| `font-stretch: 100%` (normal) | 745.5625px |
| `font-stretch: 125%` (expanded) | 955.5625px |

Expanded over normal ratio: 1.2817. The expanded line is visibly wider in the screenshot, and the hero computed style reports `font-stretch: 125%`, family `"Archivo Variable"`, weight 700. The axis is not only present in the file, it changes the rendered glyphs. No horizontal scale transform was used anywhere in the test.

Load check: after explicitly loading each face with `document.fonts.load`, all nine family and weight combinations report loaded (`document.fonts.check` true for Archivo 600, 700, 800, Instrument Sans 400, 500, 600, JetBrains Mono 400, 500, 600). Note: before that explicit load, faces not used on the test page reported `unloaded` and `check` returned false for them. That is lazy loading of unused faces, not a defect. The render produced zero console errors and zero page errors.

## 6. Fallback status

Fallback not needed. The expanded axis is present in the vendored Archivo file and renders at 125% in Chromium. The named fallback is recorded here for Phase 7 in case a future file ever loses the axis: use Archivo 700 at normal width with tighter tracking, and never fake expanded type with a horizontal scale transform. That fallback was not used and is not in effect.

## 7. Copy ready `@font-face` block for Phase 7

Phase 7 must add these declarations (paths are site root relative, as served from `public/`). Every declaration uses `font-display: swap`. The latin unicode range is the Fontsource latin range, copied verbatim from the package CSS. No external font request is involved.

```css
/* Archivo Variable, display, latin, wght 100-900, wdth 62%-125% */
@font-face {
  font-family: 'Archivo Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  font-stretch: 62% 125%;
  src: url(/fonts/archivo-variable-latin.woff2) format('woff2-variations');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Instrument Sans, text */
@font-face {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(/fonts/instrument-sans-latin-400-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url(/fonts/instrument-sans-latin-500-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Instrument Sans';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url(/fonts/instrument-sans-latin-600-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* JetBrains Mono, code and metadata */
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(/fonts/jetbrains-mono-latin-400-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: url(/fonts/jetbrains-mono-latin-500-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url(/fonts/jetbrains-mono-latin-600-normal.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

Usage notes for Phase 7:

1. Hero and handoff lines: `font-family: 'Archivo Variable'; font-weight: 700; font-stretch: 125%;` with the tracking from the type scale.
2. Other Archivo uses (titles, card titles): same family, weights 600 or 700, `font-stretch` left at its default (100%), because expanded width is for the hero and handoff lines only.
3. No `src/index.css` file was edited in this task, and no font is referenced by any CSS yet. Until Phase 7 adds the block above, the new files are inert assets.
4. Only latin subsets were vendored. If a future page needs characters outside latin, that is a new vendoring task, not a silent switch to an external font request.

## 8. Open issues

None for the fonts themselves. One observation for the coordinator, not caused by this task: `package.json` and `package-lock.json` show as modified in the working tree, and `public/images/hero-poster.webp` and `public/video/` are untracked. Those changes came from parallel Phase 6 work, not from this font task, which installed its packages into `/tmp/font-vendor` only. This task did not commit anything, per the brief.
