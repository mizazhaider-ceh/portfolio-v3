import { useEffect, useState } from "react";

/** Archify diagram embedded in a captioned figure, with a fallback link.
    The embed uses the viewer's own gallery/embed mode (?embed=1), which
    hides the diagram's internal header, toolbar, and cards, so the page
    h2 and caption are the only headings. The theme query param keeps the
    diagram in the same theme as the page; it is synced live, because the
    toolbar toggle is hidden in embed mode. The "Open the diagram" link
    points at the plain file, so the standalone viewer keeps its chrome. */
export default function DiagramFigure({
  src,
  caption,
  title,
  tall = false,
}: {
  src: string;
  caption: string;
  title: string;
  tall?: boolean;
}) {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light",
  );
  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const mo = new MutationObserver(read);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);
  const embedSrc = `${src}?embed=1&theme=${theme}`;
  return (
    <figure className={`diagram${tall ? " diagram--tall" : ""}`}>
      <iframe src={embedSrc} title={title} loading="lazy" />
      <figcaption>
        {caption}{" "}
        <a href={src} target="_blank" rel="noreferrer" className="text-[var(--periwinkle-deep)]">
          Open the diagram in a new tab
        </a>
      </figcaption>
    </figure>
  );
}
