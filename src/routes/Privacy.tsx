import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Privacy() {
  usePageMeta("Privacy | Muhammad Izaz Haider", "This site collects no data. Messages sent through the contact form are handled by Formspree.", "/privacy");
  return (
    <>
      <PageHero kicker="Legal" title="Privacy" marker="Privacy" sentence="This site collects no data." />
      <section aria-label="Privacy policy" style={{ "--h": 1 } as React.CSSProperties}>
        <div className="wrap max-w-[680px] ml-0">
          <p className="body-3 text-[var(--muted)]">This site sets no analytics cookies and stores nothing about its visitors. The theme choice (light or dark) is saved in your own browser only, so the site remembers it on your next visit.</p>
          <p className="body-3 mt-6 text-[var(--muted)]">Messages sent through the contact form are handled by Formspree and delivered to Muhammad Izaz Haider by email. Nothing else is sent anywhere.</p>
        </div>
      </section>
    </>
  );
}
