import { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

/* Route level code splitting: every route loads via React.lazy, with a
   Suspense fallback that renders nothing visible, so no page ships the
   whole app and the nav and footer stay on screen while a chunk loads. */
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Projects = lazy(() => import("./routes/Projects"));
const Expertise = lazy(() => import("./routes/Expertise"));
const Research = lazy(() => import("./routes/Research"));
const Contact = lazy(() => import("./routes/Contact"));
const Privacy = lazy(() => import("./routes/Privacy"));
const Terms = lazy(() => import("./routes/Terms"));
const NotFound = lazy(() => import("./routes/NotFound"));
const PentrixVulnLab = lazy(() => import("./routes/projects/PentrixVulnLab"));
const PowershellAcademy = lazy(() => import("./routes/projects/PowershellAcademy"));
const BugHuntArsenal = lazy(() => import("./routes/projects/BugHuntArsenal"));
const ApkPipeline = lazy(() => import("./routes/projects/ApkPipeline"));
const SecurityBooks = lazy(() => import("./routes/projects/SecurityBooks"));
const AgentArsenal = lazy(() => import("./routes/projects/AgentArsenal"));
const AiTerminalX = lazy(() => import("./routes/projects/AiTerminalX"));

/* Scroll restoration on route change. A hash link scrolls to its anchor
   (retried briefly, because a lazy chunk may not have rendered yet);
   anything else goes to the top. The fixed 64px bar is cleared by the
   scroll-padding-top in the stylesheet. */
function ScrollRestoration() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          return;
        }
        attempts += 1;
        if (attempts < 10) window.setTimeout(tryScroll, 100);
      };
      window.setTimeout(tryScroll, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  /* 2 second safety net: if a page transition animation ever stalls,
     the page is force revealed at rest. The timer resets on every
     route change, so each page gets its own net. */
  const [safe, setSafe] = useState(false);
  useEffect(() => {
    setSafe(false);
    const timer = window.setTimeout(() => setSafe(true), 2000);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollRestoration />
      <Nav />
      <main id="main" tabIndex={-1}>
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={safe ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={safe ? { opacity: 1, transform: "none" } : undefined}
          >
            <Suspense fallback={null}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/pentrix-vulnlab" element={<PentrixVulnLab />} />
                <Route path="/projects/powershell-academy" element={<PowershellAcademy />} />
                <Route path="/projects/bughunt-arsenal" element={<BugHuntArsenal />} />
                <Route path="/projects/apk-security-pipeline" element={<ApkPipeline />} />
                <Route path="/projects/security-books" element={<SecurityBooks />} />
                <Route path="/projects/agentarsenal" element={<AgentArsenal />} />
                <Route path="/projects/ai-terminal-x" element={<AiTerminalX />} />
                <Route path="/about" element={<About />} />
                <Route path="/expertise" element={<Expertise />} />
                <Route path="/research" element={<Research />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/experience" element={<Navigate to="/about#experience" replace />} />
                <Route path="/skills" element={<Navigate to="/expertise" replace />} />
                <Route path="/certifications" element={<Navigate to="/expertise#certifications" replace />} />
                <Route path="/proof" element={<Navigate to="/about" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </MotionConfig>
  );
}
