"""Measure portfolio sections the way the taste-skill noVisual check does.

Ground truth (consistency.mjs noVisual):
  - VIS = img, video, canvas, iframe, picture, object, embed, svg,
    [data-ui], .ui[class*=ui-], [role="img"], [data-fx], [data-fx-mounted],
    plus non-inline elements with a background-image URL
  - a visual counts only when >= 120x80 and shown
  - grid: cell = max(8, round(min(sectionWidth, H)/50));
    cols = ceil(sectionWidth/cell), rows = ceil(H/cell),
    where sectionWidth is the SECTION rect width (full bleed) and
    H is the content-extent height (min top / max bottom of visible
    descendants, clipped to the section rect)
  - cover = filled cells / total cells
  - judged sections: cover < 15% = FAIL, 15-25% = WARN, >= 25% = pass
  - quiet sections (name matches EXEMPT, >= 3 <details>, blockquote, or
    the last main section under 0.9 screens): text-only FAIL only when
    cover < 0.05 AND no icon >= 24x24 AND no closing slab >= 600x64
  - moment sections (data-moment mounted) are not judged at all

Also reports section heights (1440: exactly 900 or 1800, +/-2px),
console errors, horizontal overflow, and key element widths.

Usage: python3 scripts/measure-sections.py [url]
Default url: http://localhost:4173/
"""
import json
import sys

from playwright.sync_api import sync_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:4173/"
VIEWPORTS = [(1440, 900), (768, 1024), (390, 844)]

MEASURE_JS = r"""
() => {
  const VIS_SEL = 'img, video, canvas, iframe, picture, object, embed, svg, [data-ui], .ui[class*=ui-], [data-fx], [data-fx-mounted], [role="img"]';
  const EXEMPT = /quote|testimon|review|pricing|price|\bplans?\b|\border\b|\bbuy\b|checkout|faq|question|footer|contact|\bclos(e|ing)\b|cta|sign-?up|subscribe|newsletter|legal|credits?\b|\d[\d,.]*\s?(€|\$|£)|(€|\$|£)\s?\d/i;
  const sy = window.scrollY, vw = innerWidth, vh = innerHeight;
  const secs = [...document.querySelectorAll('main > section, footer.closing')];
  const lastMain = secs.filter(s => s.tagName !== 'FOOTER').slice(-1)[0];
  const out = [];
  secs.forEach(sec => {
    const r = sec.getBoundingClientRect();
    const sectionH = Math.round(r.height);
    const secW = r.width;
    let top = Infinity, bottom = -Infinity;
    sec.querySelectorAll('*').forEach(el => {
      const b = el.getBoundingClientRect();
      if (b.width < 2 || b.height < 2) return;
      const cs = getComputedStyle(el);
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      if (!el.checkVisibility || !el.checkVisibility()) return;
      top = Math.min(top, b.top + sy);
      bottom = Math.max(bottom, b.bottom + sy);
    });
    if (!isFinite(top)) { out.push({ id: sec.id || sec.className, sectionH, contentC: 0, cover: 0, judge: false }); return; }
    const secTop = r.top + sy, secBottom = r.bottom + sy;
    top = Math.max(secTop, top); bottom = Math.min(secBottom, bottom);
    const H = bottom - top;
    const contentC = Math.round(H);
    // judge / quiet (the real checker skips FOOTER entirely for no-visual)
    const h = sec.querySelector('h1, h2, h3');
    const name = ((h && h.innerText) || sec.id || '').trim();
    let judge = r.height >= vh * 0.35, quiet = false;
    if (sec.tagName === 'FOOTER') { judge = false; quiet = false; }
    if (EXEMPT.test(name) || sec.querySelectorAll('details').length >= 3 || sec.querySelector('blockquote')) { judge = false; quiet = true; }
    if (sec === lastMain && r.height < vh * 0.9) { judge = false; quiet = true; }
    const ownBg = getComputedStyle(sec).backgroundImage;
    if (ownBg && ownBg !== 'none') { judge = false; quiet = false; }
    if (sec.matches('[data-moment][data-moment-mounted], [data-scroll-moment]') || sec.querySelector('[data-moment][data-moment-mounted], [data-scroll-moment]')) { judge = false; quiet = false; }
    // grid + visuals
    const cell = Math.max(8, Math.round(Math.min(secW, H) / 50));
    const cols = Math.ceil(secW / cell), rows = Math.ceil(H / cell);
    const grid = new Uint8Array(cols * rows);
    const take = (q) => {
      const l = Math.max(r.left, q.left), rr = Math.min(r.right, q.right);
      const t = Math.max(top, q.top), b = Math.min(bottom, q.bottom);
      if (rr <= l || b <= t) return;
      for (let y = Math.floor((t - top) / cell); y < Math.min(rows, Math.ceil((b - top) / cell)); y++)
        for (let x = Math.floor((l - r.left) / cell); x < Math.min(cols, Math.ceil((rr - r.left) / cell)); x++)
          grid[y * cols + x] = 1;
    };
    let visuals = 0, icons = 0;
    sec.querySelectorAll('*').forEach(el => {
      const cs = getComputedStyle(el);
      const isVis = el.matches(VIS_SEL) || (cs.backgroundImage && cs.backgroundImage !== 'none' && cs.display !== 'inline');
      if (!isVis) return;
      const b = el.getBoundingClientRect();
      if (b.width < 1 || b.height < 1) return;
      if (cs.display === 'none' || cs.visibility === 'hidden') return;
      if (!el.checkVisibility || !el.checkVisibility()) return;
      if (b.width >= 24 && b.height >= 24) icons++;
      if (b.width < 120 || b.height < 80) return;
      visuals++;
      take({ left: b.left, right: b.right, top: b.top + sy, bottom: b.bottom + sy });
    });
    let n = 0; for (const v of grid) n += v;
    const cover = Math.round((n / grid.length) * 100) / 100;
    let verdict = '';
    if (sec.tagName === 'FOOTER') verdict = 'not judged (footer)';
    else if (judge) verdict = cover < 0.15 ? 'FAIL' : cover < 0.25 ? 'WARN' : 'pass';
    else if (quiet) {
      const slab = sec === lastMain && [...sec.querySelectorAll('a[href], button')].some(e => {
        const q = e.getBoundingClientRect();
        if (q.width < 600 || q.height < 64) return false;
        const c = getComputedStyle(e);
        return (c.backgroundColor && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && c.backgroundColor !== 'transparent') || (c.backgroundImage && c.backgroundImage !== 'none');
      });
      verdict = (cover < 0.05 && !icons && !slab) ? 'FAIL text-only' : 'pass quiet';
    } else verdict = 'not judged';
    out.push({ id: sec.id || sec.className || sec.tagName, sectionH, contentC, cover, judge, quiet, visuals, verdict });
  });
  return out;
}
"""

WIDTHS_JS = r"""
() => {
  const q = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const b = el.getBoundingClientRect();
    return { w: Math.round(b.width), h: Math.round(b.height), x: Math.round(b.left) };
  };
  return {
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    wrap: q('#about .wrap'),
    heroCard: q('#top [data-product]'),
    aboutFigure: q('#about figure'),
    heroH1: q('#top h1'),
  };
}
"""


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox"])
        for vw, vh in VIEWPORTS:
            page = browser.new_page(viewport={"width": vw, "height": vh})
            errors = []
            page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: errors.append(str(e)))
            page.goto(URL, wait_until="networkidle")
            # scroll through the page like the checker does, so lazy
            # images load and gain boxes before measuring
            page.evaluate(
                """async () => {
                  const max = document.documentElement.scrollHeight;
                  for (let y = 0; y <= max; y += 400) {
                    window.scrollTo(0, y);
                    await new Promise(r => setTimeout(r, 120));
                  }
                  window.scrollTo(0, 0);
                }"""
            )
            page.wait_for_timeout(2500)  # moments mount + tagline activation
            rows = page.evaluate(MEASURE_JS)
            widths = page.evaluate(WIDTHS_JS)
            print(f"\n=== {vw}x{vh} ===")
            print(f"overflow: scrollWidth={widths['scrollWidth']} innerWidth={widths['innerWidth']}")
            print(f"widths: {json.dumps(widths)}")
            print(f"console errors: {len(errors)}")
            for e in errors[:5]:
                print(f"  ERR: {e[:200]}")
            for r in rows:
                hflag = ""
                if vw == 1440 and r["sectionH"] not in (900, 1800, 2700):
                    hflag = "  <-- HEIGHT not 900/1800/2700"
                print(
                    f"  {r['id']:<16} sectionH={r['sectionH']:<5} contentC={r['contentC']:<5} "
                    f"cover={r['cover']:<5} visuals={r['visuals']} {r['verdict']}{hflag}"
                )
            page.close()
        browser.close()


if __name__ == "__main__":
    main()
