import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const CELL = 56;
const RADIUS = 160;

type Blink = { cx: number; cy: number; phase: number; speed: number };

export function HeroGrid() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let blinks: Blink[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(w / CELL);
      const rows = Math.ceil(h / CELL);
      const count = Math.min(32, Math.round((cols * rows) / 10));
      blinks = Array.from({ length: count }, () => ({
        cx: Math.floor(Math.random() * cols),
        cy: Math.floor(Math.random() * rows),
        phase: Math.random() * Math.PI * 2,
        speed: 0.18 + Math.random() * 0.42,
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = (t: number) => {
      const time = t / 1000;
      ctx.clearRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      // Saturated vivid colors for light mode so grid cells pop crisp and clear!
      const ACCENT_RGB = isDark ? "56, 189, 248" : "37, 99, 235";
      const GRID_LINE_ALPHA = isDark ? 0.05 : 0.08;
      const SCANLINE_ALPHA = isDark ? 0.08 : 0.12;

      const cols = Math.ceil(w / CELL);
      const rows = Math.ceil(h / CELL);

      // Draw subtle grid lines on canvas
      ctx.strokeStyle = isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(c * CELL + 0.5, 0);
        ctx.lineTo(c * CELL + 0.5, h);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, r * CELL + 0.5);
        ctx.lineTo(w, r * CELL + 0.5);
      }
      ctx.stroke();

      // blinking cells
      for (const b of blinks) {
        const a = (Math.sin(time * b.speed + b.phase) + 1) / 2;
        const alpha = Math.pow(a, 2.5) * (isDark ? 0.32 : 0.28);
        if (alpha < 0.01) continue;
        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${alpha})`;
        ctx.fillRect(b.cx * CELL + 1, b.cy * CELL + 1, CELL - 2, CELL - 2);

        // subtle inner border glow
        ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${alpha * 1.5})`;
        ctx.strokeRect(b.cx * CELL + 0.5, b.cy * CELL + 0.5, CELL - 1, CELL - 1);
      }

      // spotlight cells near cursor
      if (mouse.x > -1000) {
        const c0 = Math.max(0, Math.floor((mouse.x - RADIUS) / CELL));
        const c1 = Math.ceil((mouse.x + RADIUS) / CELL);
        const r0 = Math.max(0, Math.floor((mouse.y - RADIUS) / CELL));
        const r1 = Math.ceil((mouse.y + RADIUS) / CELL);
        for (let c = c0; c <= c1; c++) {
          for (let r = r0; r <= r1; r++) {
            const px = c * CELL + CELL / 2;
            const py = r * CELL + CELL / 2;
            const d = Math.hypot(px - mouse.x, py - mouse.y);
            if (d > RADIUS) continue;
            const alpha = (1 - d / RADIUS) * (isDark ? 0.28 : 0.24);
            ctx.fillStyle = `rgba(${ACCENT_RGB}, ${alpha})`;
            ctx.fillRect(c * CELL + 1, r * CELL + 1, CELL - 2, CELL - 2);
          }
        }
      }

      // vertical scanlines
      for (let i = 0; i < 2; i++) {
        const y = ((time * (22 + i * 14) + i * h * 0.5) % (h + 200)) - 100;
        const g = ctx.createLinearGradient(0, y - 50, 0, y + 50);
        g.addColorStop(0, `rgba(${ACCENT_RGB}, 0)`);
        g.addColorStop(0.5, `rgba(${ACCENT_RGB}, ${SCANLINE_ALPHA})`);
        g.addColorStop(1, `rgba(${ACCENT_RGB}, 0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, y - 50, w, 100);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return (
    <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
  );
}
