import { useEffect, useRef, useState } from "react";

/**
 * Owned procedural canvas 2D particle field for the hero. Plain canvas, not
 * Three.js. Slow drifting particles in warm paper white at low opacity,
 * thin lines connecting particles within 140px, particles within 120px of a
 * fine pointer drift gently toward it and ease back, never snap.
 *
 * Lazy init only when the hero is in view, paused off screen, device pixel
 * ratio capped at 2, frozen to a still under reduced motion, does not exist
 * on touch devices, nothing is lost without it.
 */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  ox: number;
  oy: number;
};

const LINK_DISTANCE = 140;
const POINTER_DISTANCE = 120;

export default function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    return !coarse && !noHover;
  });

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let inView = false;
    const pointer = { x: -9999, y: -9999, active: false };

    const seed = () => {
      const count = Math.max(24, Math.min(90, Math.floor((width * height) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1 + Math.random() * 1.2,
        alpha: 0.25 + Math.random() * 0.35,
        ox: 0,
        oy: 0,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x + a.ox - (b.x + b.ox);
          const dy = a.y + a.oy - (b.y + b.oy);
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const strength = (1 - dist / LINK_DISTANCE) * 0.18;
            ctx.strokeStyle = `rgba(247, 243, 234, ${strength.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + a.ox, a.y + a.oy);
            ctx.lineTo(b.x + b.ox, b.y + b.oy);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.fillStyle = `rgba(247, 243, 234, ${p.alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(p.x + p.ox, p.y + p.oy, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x += width;
        if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        if (p.y > height) p.y -= height;
        let targetX = 0;
        let targetY = 0;
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_DISTANCE && dist > 0.5) {
            const pull = (1 - dist / POINTER_DISTANCE) * 18;
            targetX = (dx / dist) * pull;
            targetY = (dy / dist) * pull;
          }
        }
        p.ox += (targetX - p.ox) * 0.02;
        p.oy += (targetY - p.oy) * 0.02;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const io = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        if (inView) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    parent.addEventListener("pointermove", onPointerMove);
    parent.addEventListener("pointerleave", onPointerLeave);
    resize();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
