import type { ReactNode } from "react";

/** Every page hero: lime rule, kicker, h1 with the topic in a marker span,
    one sentence, then optional meta or actions. */
export default function PageHero({
  kicker,
  title,
  marker,
  sentence,
  children,
}: {
  kicker: string;
  title: string;
  marker: string;
  sentence: string;
  children?: ReactNode;
}) {
  const before = title.slice(0, title.indexOf(marker));
  const after = title.slice(title.indexOf(marker) + marker.length);
  return (
    <div className="page-hero">
      <div className="wrap">
        <div className="lime-rule enter" aria-hidden="true" />
        <p className="enter enter-1 mt-6">
          <span className="kicker">{kicker}</span>
        </p>
        <h1 className="enter enter-2 mt-6">
          {before}
          <span className="marker">{marker}</span>
          {after}
        </h1>
        <p className="body-2 enter enter-3 mt-6 max-w-[680px] text-[var(--muted)]">{sentence}</p>
        {children && <div className="enter enter-4 mt-8">{children}</div>}
      </div>
    </div>
  );
}
