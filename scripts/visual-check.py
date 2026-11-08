"""Final visual check: 4 widths, hero visible without scrolling, 0 console
errors, 0 overflow, full-page screenshots + phone diagram close-ups."""
import os

from playwright.sync_api import sync_playwright

URL = "http://localhost:4173/"
OUT = "/tmp/portfolio-visual"
os.makedirs(OUT, exist_ok=True)

WIDTHS = [(1440, 900), (1024, 768), (768, 1024), (390, 844)]


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox"])
        for vw, vh in WIDTHS:
            page = browser.new_page(viewport={"width": vw, "height": vh})
            errors = []
            page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: errors.append(str(e)))
            page.goto(URL, wait_until="networkidle")
            page.wait_for_timeout(2500)
            hero = page.evaluate(
                """() => {
                  const r = (sel) => {
                    const el = document.querySelector(sel);
                    if (!el) return null;
                    const b = el.getBoundingClientRect();
                    return { top: Math.round(b.top), bottom: Math.round(b.bottom), visible: b.bottom <= innerHeight && b.top >= 0 };
                  };
                  return {
                    h1: r('#top h1'),
                    sentence: r('#top p.body-2'),
                    cta: r('#top a.btn-primary'),
                    overflow: document.documentElement.scrollWidth - innerWidth,
                  };
                }"""
            )
            print(f"{vw}x{vh}: console errors={len(errors)} overflow={hero['overflow']}px "
                  f"h1={hero['h1']} sentence_visible={hero['sentence']['visible']} cta_visible={hero['cta']['visible']}")
            for e in errors[:3]:
                print(f"  ERR: {e[:160]}")
            # scroll through for lazy images, then full-page shot
            page.evaluate(
                """async () => {
                  const max = document.documentElement.scrollHeight;
                  for (let y = 0; y <= max; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); }
                  window.scrollTo(0, 0);
                }"""
            )
            page.wait_for_timeout(1200)
            page.screenshot(path=f"{OUT}/full-{vw}.png", full_page=True)
            page.close()
        # phone close-ups of the four vertical diagrams
        page = browser.new_page(viewport={"width": 390, "height": 844})
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(1500)
        for sec in ["projects", "skills", "education", "certifications"]:
            el = page.locator(f"#{sec} svg.sm\\:hidden")
            el.scroll_into_view_if_needed()
            page.wait_for_timeout(600)
            el.screenshot(path=f"{OUT}/phone-{sec}-diagram.png")
            print(f"phone diagram shot: {sec}")
        browser.close()


if __name__ == "__main__":
    main()
