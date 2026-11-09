import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router";
import { motion, MotionConfig } from "motion/react";
import {
  ABOUT_PARAGRAPHS,
  AVAILABILITY,
  CONTACT,
  EXPERTISE_GROUPS,
  FEATURED_PROJECTS,
  HERO,
  LOCATION,
  RESEARCH,
  WORK_AUTHORISATION_PLACEHOLDER,
} from "../data";
import { usePageMeta } from "../hooks";
import ChallengePanel from "../components/ChallengePanel";
import ParticleField from "../components/ParticleField";
import { ProjectCard } from "../components/ProjectCard";

/**
 * Home, Monograph. Block order: hero, first featured project
 * (PenTrix-VulnLab, directly below the hero), remaining featured
 * projects in audit order, About strip, Expertise strip, Research
 * strip, Contact strip. Each strip links to its full page.
 *
 * Hero failure order: poster with headline and action (always works),
 * then the static particle field, then the video loop on desktop only
 * after the poster has painted and the reduced motion check has passed,
 * then cursor reactive motion only with a fine pointer.
 *
 * Hero density: the panel sits beside the headline on desktop
 * (columns 8 to 12) when the viewport is at least 1024px wide and at
 * least 760px tall. Below that, and on short desktop viewports, the
 * stacked fallback applies: the panel moves below the copy block,
 * centred, maximum 640px wide, as the top of the next screen.
 * At 1280x800 the side by side layout ships: the panel is about
 * 553px tall and the copy block about 530px, both inside the 736px
 * content area below the 64px nav, with room to spare.
 */

const POSTER = "/images/hero-poster.webp";
const VIDEO_MP4 = "/video/hero-loop.mp4";
const VIDEO_WEBM = "/video/hero-loop.webm";

const EXPERTISE_STRIP_IDS = [
  "web-pentesting",
  "bug-bounty",
  "vulnerability-assessment",
  "devsecops",
  "mobile-security",
  "ai-security",
];

function Handoff({ children }: { children: string }) {
  return (
    <div>
      <div aria-hidden="true" className="rule-accent" style={{ width: 48 }} />
      <h2 className="title-large mt-6">{children}</h2>
    </div>
  );
}

export default function Home() {
  usePageMeta(
    "Muhammad Izaz Haider, Penetration Tester, AI x Offensive Security",
    "I break web apps, then teach others to break them safely. PenTrix-VulnLab, PowerShell Academy, BugHunt Arsenal, APK Security Pipeline, Security-Books.",
    "/",
  );

  const [safe, setSafe] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [posterPainted, setPosterPainted] = useState(false);
  const [attachVideo, setAttachVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const posterRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setSafe(true), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (posterRef.current?.complete) setPosterPainted(true);
  }, []);

  useEffect(() => {
    if (!posterPainted || reducedMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 768) return;
    setAttachVideo(true);
  }, [posterPainted, reducedMotion]);

  useEffect(() => {
    if (!attachVideo || videoFailed || paused) return;
    const video = videoRef.current;
    if (!video) return;
    const promise = video.play();
    if (promise) {
      promise.catch(() => {
        /* Autoplay rejected (low power mode, a browser setting, data
           saver): the poster stays, no error is shown, no unhandled
           rejection reaches the console. */
      });
    }
  }, [attachVideo, videoFailed, paused]);

  useEffect(() => {
    if (paused) videoRef.current?.pause();
  }, [paused]);

  const onMagnetMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    setMagnet({
      x: Math.max(-6, Math.min(6, dx * 0.08)),
      y: Math.max(-6, Math.min(6, dy * 0.08)),
    });
  };
  const onMagnetLeave = () => setMagnet({ x: 0, y: 0 });

  const showVideo = attachVideo && !videoFailed;
  const showPause = showVideo && !reducedMotion;
  const expertiseStrip = EXPERTISE_GROUPS.filter((g) => EXPERTISE_STRIP_IDS.includes(g.id));

  return (
    <>
      <link rel="preload" as="image" href={POSTER} fetchPriority="high" />
      <style>{`
        @media (max-width: 639px) {
          .hero-headline { font-size: 2.5rem !important; line-height: 1.02; }
        }
        @media (max-width: 389px) {
          .hero-headline { font-size: 2.25rem !important; }
        }
        @media (min-width: 1024px) and (max-height: 759px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-panel { max-width: 640px; margin-inline: auto; }
        }
      `}</style>

      <section
        aria-label="Introduction"
        className="relative flex items-center overflow-hidden md:min-h-svh"
        style={{ background: "var(--paper, #F7F3EA)", paddingTop: "var(--nav, 64px)" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            ref={posterRef}
            src={POSTER}
            alt=""
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setPosterPainted(true)}
            onError={() => setPosterPainted(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          {showVideo && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="metadata"
              poster={POSTER}
              aria-hidden="true"
              tabIndex={-1}
              onError={() => setVideoFailed(true)}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={VIDEO_WEBM} type="video/webm" />
              <source src={VIDEO_MP4} type="video/mp4" />
            </video>
          )}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(23, 22, 20, 0.62)" }} />
          {!paused && !reducedMotion && <ParticleField />}
        </div>

        <div className="wrap relative" style={{ zIndex: 10, paddingTop: "3rem", paddingBottom: "3rem" }}>
          <MotionConfig reducedMotion="user">
            <div className="hero-grid grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-6">
              <div className="min-w-0 lg:col-span-7">
                <p
                  className="mono-meta"
                  style={{ color: "#D5CFC2" }}
                >
                  {HERO.catalogueLine}
                </p>
                <h1 className="display-hero hero-headline mt-6" style={{ color: "#F3EFE5" }}>
                  {HERO.headlineLines.map((line, i) => (
                    <motion.span
                      key={line}
                      className="force-reveal block"
                      initial={safe ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 + i * 0.06 }}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>
                <p
                  className="mt-6"
                  style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "1.125rem", lineHeight: 1.5, color: "#F3EFE5" }}
                >
                  {HERO.roleLine}
                </p>
                <p
                  className="mt-4"
                  style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontSize: "1.0625rem", lineHeight: 1.65, color: "#D5CFC2", maxWidth: "68ch" }}
                >
                  {HERO.sentence}
                </p>
                <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    to={HERO.primaryActionTo}
                    className="btn-primary w-full justify-center sm:w-auto"
                    onPointerMove={onMagnetMove}
                    onPointerLeave={onMagnetLeave}
                    style={{
                      transform: `translate(${magnet.x}px, ${magnet.y}px)`,
                      border: "1px solid rgba(247, 243, 234, 0.4)",
                    }}
                  >
                    {HERO.primaryAction}
                  </Link>
                  <Link
                    to={HERO.secondaryActionTo}
                    className="inline-flex min-h-11 items-center underline underline-offset-4"
                    style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "#F3EFE5" }}
                  >
                    {HERO.secondaryAction}
                  </Link>
                </p>
              </div>
              <div className="hero-panel min-w-0 lg:col-span-5">
                <ChallengePanel />
              </div>
            </div>
          </MotionConfig>
        </div>

        {showPause && (
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="absolute bottom-6 left-5 z-20 hidden min-h-11 items-center px-4 md:inline-flex lg:left-16"
            style={{
              fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)",
              fontWeight: 500,
              fontSize: "0.9375rem",
              color: "#F3EFE5",
              background: "transparent",
              border: "1px solid rgba(247, 243, 234, 0.4)",
              borderRadius: 2,
              cursor: "pointer",
            }}
          >
            {paused ? "Play motion" : "Pause motion"}
          </button>
        )}
      </section>

      <section aria-label="The work">
        <div className="wrap">
          <MotionConfig reducedMotion="user">
            <motion.div
              className="force-reveal"
              initial={safe ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div aria-hidden="true" className="rule-accent" style={{ width: 48 }} />
              <h2 className="display-handoff mt-6">The work, in order.</h2>
              <p className="body-copy mt-4" style={{ color: "var(--muted, #6E6A61)" }}>
                Five case studies, then the archive. Every project ships with a real artefact.
              </p>
            </motion.div>
          </MotionConfig>
          <div className="mt-12">
            {FEATURED_PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.name}
                project={project}
                plateSide={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
          <p className="mt-4">
            <Link
              to="/projects"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              All projects
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="About">
        <div className="wrap">
          <Handoff>About</Handoff>
          <div className="mt-8 space-y-4">
            {ABOUT_PARAGRAPHS.slice(0, 2).map((p) => (
              <p key={p.slice(0, 24)} className="body-large" style={{ color: "var(--body, #2A2723)" }}>
                {p}
              </p>
            ))}
          </div>
          <p className="mono-meta mt-8" style={{ color: "var(--muted, #6E6A61)" }}>
            {LOCATION}
          </p>
          <p className="body-small mt-4" style={{ color: "var(--body, #2A2723)" }}>
            {AVAILABILITY}
          </p>
          <p className="mono-meta mt-4" style={{ color: "var(--muted, #6E6A61)" }}>
            {WORK_AUTHORISATION_PLACEHOLDER.label}: {WORK_AUTHORISATION_PLACEHOLDER.text}
          </p>
          <p className="mt-8">
            <Link
              to="/about"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              More about me
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="Expertise">
        <div className="wrap">
          <Handoff>Expertise</Handoff>
          <ul className="mt-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {expertiseStrip.map((group) => (
              <li key={group.id} style={{ borderTop: "1px solid var(--line, #DCD5C6)", padding: "1rem 0" }}>
                <p className="body-copy" style={{ color: "var(--body, #2A2723)" }}>
                  <strong style={{ fontWeight: 600, color: "var(--ink, #1C1A17)" }}>{group.name}</strong>
                  {" "}
                  <span style={{ color: "var(--muted, #6E6A61)" }}>Proved by: </span>
                  {group.provedBy.map((proof, i) => (
                    <span key={proof.to}>
                      {i > 0 && ", "}
                      <Link to={proof.to} className="underline underline-offset-4">
                        {proof.label}
                      </Link>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              to="/expertise"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              All expertise
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="Research">
        <div className="wrap">
          <Handoff>Research</Handoff>
          <p className="body-large mt-8" style={{ color: "var(--body, #2A2723)" }}>
            {RESEARCH.interests}
          </p>
          <p className="body-copy mt-4" style={{ color: "var(--body, #2A2723)" }}>
            {RESEARCH.amsterdam.event}, {RESEARCH.amsterdam.place}, {RESEARCH.amsterdam.dates}.{" "}
            {RESEARCH.amsterdam.groupSize}. Planned role: {RESEARCH.amsterdam.plannedRole}.{" "}
            Status: {RESEARCH.amsterdam.status}.
          </p>
          <p className="body-copy mt-4" style={{ color: "var(--body, #2A2723)" }}>
            {RESEARCH.applicationsLine}
          </p>
          <p className="mt-8">
            <Link
              to="/research"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              More on research
            </Link>
          </p>
        </div>
      </section>

      <section aria-label="Contact">
        <div className="wrap">
          <Handoff>Contact</Handoff>
          <p className="body-large mt-8" style={{ color: "var(--body, #2A2723)" }}>
            Hiring for an offensive security internship, a junior role, or a research place? I would like to hear from you.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)", overflowWrap: "anywhere" }}
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline underline-offset-4"
              style={{ fontFamily: "var(--font-text, 'Instrument Sans', system-ui, sans-serif)", fontWeight: 500, fontSize: "0.9375rem", color: "var(--ink, #1C1A17)" }}
            >
              LinkedIn
            </a>
          </p>
          <p className="mt-8">
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
          </p>
          <p
            className="mono-meta mt-12 text-center"
            style={{ color: "var(--muted, #6E6A61)" }}
          >
            Created by Muhammad Izaz Haider
          </p>
        </div>
      </section>
    </>
  );
}
