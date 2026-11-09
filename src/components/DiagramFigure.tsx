import type { ReactNode } from "react";

/** Hand-built inline SVG diagram in a captioned Monograph plate.
    The diagram is rendered as a child SVG component (no iframe, no
    external file), so it follows the page theme through the Monograph
    CSS variables and needs no theme sync, no fallback link, and no
    separate viewer. The figure note sits beside the plate on desktop
    and above it on phones, in mono, matching every other plate on the
    case study pages. The caption carries the note text, in the
    "What is shown: ... What happened: ..." form. */
export default function DiagramFigure({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure aria-label={title}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <p className="figure-note order-first lg:order-2 lg:w-60 lg:shrink-0 lg:pt-2">
          {caption}
        </p>
        <div className="plate order-2 lg:order-1 lg:min-w-0 lg:flex-1">{children}</div>
      </div>
    </figure>
  );
}
