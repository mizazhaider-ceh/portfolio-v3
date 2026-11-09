import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function Privacy() {
  usePageMeta("Privacy | Muhammad Izaz Haider", "This site collects no data. Messages sent through the contact form are handled by Formspree.", "/privacy");
  return (
    <>
      <PageHero marker="Legal" title="Privacy" sentence="This site collects no data." />
      <section aria-label="Privacy policy">
        <div className="wrap">
          <div style={{ maxWidth: "68ch", marginInline: "auto" }}>
            <p className="body-copy">This site sets no analytics cookies and stores nothing about its visitors. The theme choice (light or dark) is saved in your own browser only, so the site remembers it on your next visit.</p>
            <p className="body-copy mt-6">Messages sent through the contact form are handled by Formspree and delivered to Muhammad Izaz Haider by email. Nothing else is sent anywhere.</p>
          </div>
        </div>
      </section>
    </>
  );
}
