import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Experience from "./routes/Experience";
import Skills from "./routes/Skills";
import Certifications from "./routes/Certifications";
import Proof from "./routes/Proof";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Privacy from "./routes/Privacy";
import Terms from "./routes/Terms";
import PentrixVulnLab from "./routes/projects/PentrixVulnLab";
import PowershellAcademy from "./routes/projects/PowershellAcademy";
import BugHuntArsenal from "./routes/projects/BugHuntArsenal";
import ApkPipeline from "./routes/projects/ApkPipeline";
import AgentArsenal from "./routes/projects/AgentArsenal";
import AiTerminalX from "./routes/projects/AiTerminalX";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/pentrix-vulnlab" element={<PentrixVulnLab />} />
          <Route path="/projects/powershell-academy" element={<PowershellAcademy />} />
          <Route path="/projects/bughunt-arsenal" element={<BugHuntArsenal />} />
          <Route path="/projects/apk-security-pipeline" element={<ApkPipeline />} />
          <Route path="/projects/agentarsenal" element={<AgentArsenal />} />
          <Route path="/projects/ai-terminal-x" element={<AiTerminalX />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/proof" element={<Proof />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
