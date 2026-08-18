import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
  showGlow?: boolean;
}

export function Logo({ className = "h-13", showGlow = true }: LogoProps) {
  return (
    <div
      className={`group relative inline-flex ${className} items-center justify-center select-none`}
    >
      {/* Halo de iluminación perimetral para resaltar el logo */}
      {showGlow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -m-1.5 rounded-2xl bg-gradient-to-r from-sky-400/35 via-blue-500/30 to-cyan-300/35 blur-lg opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl dark:from-sky-400/40 dark:via-blue-500/35 dark:to-indigo-400/40"
        />
      )}

      {/* Imagen directa del Logo alojada en Cloudinary */}
      <img
        src={SITE.logoUrl}
        alt="Nubex — desarrollo de software y tecnología"
        className="relative z-10 h-full w-auto max-h-full object-contain rounded-md drop-shadow-[0_0_12px_rgba(56,189,248,0.28)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.55)]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
}
