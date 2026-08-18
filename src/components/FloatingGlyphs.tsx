const GLYPHS = [
  { t: "{ }", left: "8%", top: "22%", delay: "0s", dur: "6s", size: "text-2xl" },
  { t: "< / >", left: "82%", top: "58%", delay: "1.2s", dur: "5.2s", size: "text-xl" },
  { t: "[ ]", left: "63%", top: "18%", delay: "2.1s", dur: "5.8s", size: "text-lg" },
  { t: "01", left: "18%", top: "72%", delay: "0.6s", dur: "4.6s", size: "text-base" },
  { t: "//", left: "45%", top: "85%", delay: "2.6s", dur: "6.4s", size: "text-lg" },
  { t: "01", left: "92%", top: "30%", delay: "1.8s", dur: "5.5s", size: "text-sm" },
];

export function FloatingGlyphs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {GLYPHS.map((g, i) => (
        <span
          key={i}
          className={`float-slow absolute select-none font-mono ${g.size} text-accent-ink/20`}
          style={{
            left: g.left,
            top: g.top,
            animationDelay: g.delay,
            animationDuration: g.dur,
          }}
        >
          {g.t}
        </span>
      ))}
    </div>
  );
}
