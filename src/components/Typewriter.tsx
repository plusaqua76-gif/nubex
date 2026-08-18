import { useEffect, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Line = { text: string; className?: string };

export function Typewriter({
  lines,
  speed = 35,
  linePause = 300,
  startDelay = 150,
  onDone,
}: {
  lines: Line[];
  speed?: number;
  linePause?: number;
  startDelay?: number;
  onDone?: () => void;
}) {
  const reduced = useReducedMotion();
  const total = lines.reduce((n, l) => n + l.text.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduced) {
      setCount(total);
      setDone(true);
      onDone?.();
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const boundaries = new Set<number>();
    let acc = 0;
    for (const l of lines.slice(0, -1)) {
      acc += l.text.length;
      boundaries.add(acc);
    }

    const step = () => {
      i += 1;
      setCount(i);
      if (i >= total) {
        setDone(true);
        onDone?.();
        return;
      }
      timer = setTimeout(step, boundaries.has(i) ? linePause : speed);
    };

    timer = setTimeout(step, startDelay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, total]);

  let remaining = count;
  const rendered = lines.map((l) => {
    const shown = Math.max(0, Math.min(l.text.length, remaining));
    remaining -= l.text.length;
    return { ...l, shown };
  });

  return (
    <>
      <span className="sr-only">{lines.map((l) => l.text).join(" ")}</span>
      <span aria-hidden className="inline-block">
        {rendered.map((l, idx) => (
          <span key={idx}>
            {idx > 0 && <br />}
            <span className={l.className}>{l.text.slice(0, l.shown)}</span>
          </span>
        ))}
        <span
          className={`ml-1 inline-block font-mono text-accent-ink transition-opacity ${done ? "caret" : "opacity-100"}`}
        >
          _
        </span>
      </span>
    </>
  );
}
