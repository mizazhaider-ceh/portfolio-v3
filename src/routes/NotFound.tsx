import { Link } from "react-router";
import { usePageMeta } from "../hooks";
import PageHero from "../components/PageHero";

export default function NotFound() {
  usePageMeta(
    "Page not found | Muhammad Izaz Haider",
    "This page does not exist. Back to the portfolio of Muhammad Izaz Haider, penetration tester and cybersecurity student.",
  );
  return (
    <PageHero
      kicker="404"
      title="This page does not exist"
      marker="does not exist"
      sentence="The link may be old, or the page may have moved. The portfolio is one click back."
    >
      <div className="flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">Back home</Link>
        <Link to="/projects" className="btn-secondary">See my work</Link>
      </div>
    </PageHero>
  );
}
