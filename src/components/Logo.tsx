import { useId } from "react";

interface LogoProps {
  className?: string;
  showGlow?: boolean;
  animated?: boolean;
  iconOnly?: boolean;
  subtitle?: string;
  id?: string;
}

export function Logo({
  className = "h-10 md:h-11",
  showGlow = true,
  animated = true,
  iconOnly = false,
  subtitle = "SOFTWARE & CLOUD",
  id: customId,
}: LogoProps) {
  const generatedId = useId().replace(/:/g, "");
  const uid = customId || generatedId;

  return (
    <div
      id={customId ? `logo-${customId}` : undefined}
      className={`group relative inline-flex ${className} items-center justify-center select-none ${
        animated ? "transition-transform duration-300 hover:scale-[1.03]" : ""
      }`}
    >
      {/* Halo de resplandor ambiental suave (100% transparente, sin recuadros ni fondo blanco) */}
      {showGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -m-2 rounded-full bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-cyan-400/20 blur-xl opacity-60 transition-all duration-500 group-hover:opacity-95 group-hover:blur-2xl dark:from-sky-400/30 dark:via-blue-600/30 dark:to-cyan-300/30"
        />
      )}

      {/* SVG del Logo Nubex con trazados vectoriales, animaciones fluidas y fondo 100% transparente */}
      <svg
        viewBox={iconOnly ? "15 15 240 185" : "15 15 500 185"}
        className="relative z-10 h-full w-auto max-h-full overflow-visible fill-none"
        aria-label="Nubex — Soluciones Tecnológicas y Fábrica de Software"
        role="img"
      >
        <defs>
          {/* Gradientes principales */}
          <linearGradient id={`grad-n-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" className="transition-colors duration-300 dark:stop-[#38bdf8]">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#0284c7; #38bdf8; #2563eb; #0284c7"
                  dur="6s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="50%" stopColor="#2563eb" className="transition-colors duration-300 dark:stop-[#60a5fa]">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#2563eb; #0284c7; #38bdf8; #2563eb"
                  dur="6s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor="#1d4ed8" className="transition-colors duration-300 dark:stop-[#818cf8]">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#1d4ed8; #6366f1; #0284c7; #1d4ed8"
                  dur="6s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>

          <linearGradient id={`grad-cloud-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" className="dark:stop-[#0ea5e9]" />
            <stop offset="50%" stopColor="#38bdf8" className="dark:stop-[#38bdf8]" />
            <stop offset="100%" stopColor="#06b6d4" className="dark:stop-[#22d3ee]" />
          </linearGradient>

          {/* Filtro de brillo sutil para nodos de circuitos */}
          <filter id={`glow-filter-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* GRUPO ISOTIPO (Nube + N + Circuitos + Tag de Código) */}
        <g className="origin-center">
          {/* Resplandor fantasma sutil del contorno de la nube */}
          <path
            d="M 60 140 C 40 140 25 125 25 105 C 25 87 37 72 55 70 C 60 45 82 25 110 25 C 135 25 156 41 164 63 C 171 60 179 58 187 58 C 212 58 232 78 232 103 C 232 125 216 140 195 140"
            fill="none"
            stroke={`url(#grad-cloud-${uid})`}
            strokeWidth="14"
            strokeLinecap="round"
            className="opacity-15 blur-sm transition-opacity duration-300 group-hover:opacity-35 dark:opacity-25 dark:group-hover:opacity-50"
          />

          {/* Contorno de Nube Animado (Efecto Cyber Dash Flow) */}
          <path
            d="M 60 140 C 40 140 25 125 25 105 C 25 87 37 72 55 70 C 60 45 82 25 110 25 C 135 25 156 41 164 63 C 171 60 179 58 187 58 C 212 58 232 78 232 103 C 232 125 216 140 195 140"
            fill="none"
            stroke={`url(#grad-cloud-${uid})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray="9 7"
            className={animated ? "nubex-cloud-dash" : "opacity-85"}
          />

          {/* Sombra de profundidad del glifo 'N' */}
          <path
            d="M 70 185 V 75 L 145 185 V 75"
            fill="none"
            stroke={`url(#grad-n-${uid})`}
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-20 blur-[3px] transition-all duration-300 group-hover:opacity-40 group-hover:blur-[5px]"
          />

          {/* Glifo estilizado 'N' moderno */}
          <path
            d="M 70 185 V 75 L 145 185 V 75"
            fill="none"
            stroke={`url(#grad-n-${uid})`}
            strokeWidth="23"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
          />

          {/* Pistas de circuitos superiores */}
          <path
            d="M 165 100 H 200 L 215 115 H 230"
            fill="none"
            stroke="#0284c7"
            strokeWidth="5"
            strokeLinecap="round"
            className="opacity-80 transition-colors duration-300 dark:stroke-[#38bdf8] dark:opacity-90"
          />
          {/* Pulso de datos viajando por el circuito superior */}
          {animated && (
            <path
              d="M 165 100 H 200 L 215 115 H 230"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeDasharray="12 60"
              className="nubex-circuit-stream dark:stroke-[#e0f2fe]"
            />
          )}

          {/* Nodo terminal superior */}
          <circle
            cx="232"
            cy="115"
            r="5"
            fill="#0284c7"
            className="transition-colors duration-300 dark:fill-[#38bdf8]"
          />
          {animated && (
            <circle
              cx="232"
              cy="115"
              r="8"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              className="nubex-node-ping origin-[232px_115px]"
            />
          )}

          {/* Pistas de circuitos inferiores */}
          <path
            d="M 170 155 H 205 L 217 142"
            fill="none"
            stroke="#2563eb"
            strokeWidth="5"
            strokeLinecap="round"
            className="opacity-80 transition-colors duration-300 dark:stroke-[#60a5fa] dark:opacity-90"
          />
          {/* Pulso de datos viajando por el circuito inferior */}
          {animated && (
            <path
              d="M 170 155 H 205 L 217 142"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeDasharray="10 50"
              className="nubex-circuit-stream-reverse dark:stroke-[#93c5fd]"
            />
          )}

          {/* Nodo terminal inferior */}
          <circle
            cx="219"
            cy="142"
            r="5"
            fill="#2563eb"
            className="transition-colors duration-300 dark:fill-[#60a5fa]"
          />
          {animated && (
            <circle
              cx="219"
              cy="142"
              r="8"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="1.5"
              className="nubex-node-ping-delayed origin-[219px_142px]"
            />
          )}

          {/* Símbolo de código </> */}
          <g className={animated ? "nubex-code-pulse" : ""}>
            <text
              x="195"
              y="188"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="21"
              fontWeight="900"
              fill="#0284c7"
              className="transition-all duration-300 dark:fill-[#38bdf8]"
            >
              &lt;/&gt;
            </text>
          </g>
        </g>

        {/* GRUPO TIPOGRAFÍA (NUBEX + SUBTÍTULO) - Solo visible si no es iconOnly */}
        {!iconOnly && (
          <g className="transition-all duration-300">
            {/* Texto principal NUBEX */}
            <text
              x="265"
              y="134"
              fontFamily="'Space Grotesk', system-ui, sans-serif"
              fontSize="68"
              fontWeight="900"
              letterSpacing="2"
              className="fill-slate-900 transition-colors duration-300 group-hover:fill-sky-600 dark:fill-slate-50 dark:group-hover:fill-sky-300"
            >
              NUBEX
            </text>

            {/* Subtítulo dinámico tech SOFTWARE & CLOUD */}
            <text
              x="268"
              y="164"
              fontFamily="'JetBrains Mono', ui-monospace, monospace"
              fontSize="13"
              fontWeight="700"
              letterSpacing="4"
              className="fill-slate-500 transition-colors duration-300 group-hover:fill-sky-500 dark:fill-sky-400/90 dark:group-hover:fill-sky-300"
            >
              {subtitle}
            </text>

            {/* Pequeño punto LED decorativo de estado online */}
            <circle
              cx="480"
              cy="98"
              r="4"
              className="fill-sky-500 transition-colors duration-300 group-hover:fill-emerald-400 dark:fill-cyan-400"
            />
            {animated && (
              <circle
                cx="480"
                cy="98"
                r="6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-sky-400 dark:text-cyan-300 nubex-node-ping origin-[480px_98px]"
              />
            )}
          </g>
        )}
      </svg>
    </div>
  );
}

