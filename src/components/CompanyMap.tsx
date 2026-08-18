import { useState, useEffect } from "react";
import { MapPin, Navigation, ExternalLink, Building2, Compass } from "lucide-react";
import { SITE } from "@/lib/site";

// Exact geographical coordinates for Carrera 15 # 19B - 15 SUR (Piso 2), Pitalito, Huila
// Right across Carrera 15 from C.C. Gran Plaza San Antonio & Éxito Pitalito
const LAT = 1.8499;
const LNG = -76.0658;
const ADDRESS_STREET = "Carrera 15 # 19B - 15 SUR";
const ADDRESS_FULL = "Carrera 15 # 19B - 15 SUR, Piso 2, Pitalito, Huila, Colombia";

const MAP_SEARCH_QUERY = encodeURIComponent("Carrera 15 # 19B - 15 SUR, Pitalito, Huila, Colombia");
const GOOGLE_MAPS_SEARCH = `https://www.google.com/maps/search/?api=1&query=${MAP_SEARCH_QUERY}`;
const GOOGLE_MAPS_DIR = `https://www.google.com/maps/dir/?api=1&destination=${MAP_SEARCH_QUERY}`;
const EMBED_URL = `https://maps.google.com/maps?q=${LAT},${LNG}&z=18&hl=es&output=embed`;

export function CompanyMap() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden border border-border/80 bg-card p-2 shadow-sm transition-colors">
      {/* Top bar info banner */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-3 bg-muted/50 px-4 py-2.5 font-mono text-xs">
        <div className="flex items-center gap-2 text-foreground">
          <Building2 size={15} className="text-primary" />
          <span className="font-semibold">Nubex</span>
          <span className="hidden text-muted-foreground sm:inline">— {ADDRESS_STREET}</span>
        </div>
        <a
          href={GOOGLE_MAPS_SEARCH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary transition-colors hover:underline"
        >
          <span>Abrir marcador en Google Maps</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Map Container */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-xs sm:h-[390px]">
        <iframe
          title="Ubicación de Nubex en Pitalito"
          src={EMBED_URL}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: isDark
              ? "invert(90%) hue-rotate(180deg) contrast(110%) brightness(85%)"
              : "contrast(95%) brightness(102%)",
          }}
          loading="lazy"
          allowFullScreen
          className="h-full w-full border-0 transition-all duration-500"
        />

        {/* Top-Right Reference Point Badge (Compact Reference Point) */}
        <div className="pointer-events-none absolute top-3 right-3">
          <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/80 bg-background/90 px-3 py-1 font-mono text-[11px] font-medium text-foreground shadow-sm backdrop-blur-md dark:bg-card/90">
            <Compass size={13} className="text-primary shrink-0" />
            <span>Ref: frente al C.C. Gran Plaza San Antonio</span>
          </div>
        </div>

        {/* Bottom-Left Main Company Location Badge */}
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto sm:max-w-xs">
          <div className="pointer-events-auto border border-border/80 bg-background/95 p-3.5 shadow-lg backdrop-blur-md dark:bg-card/95">
            <div className="flex items-start gap-3">
              <div className="clipped-square flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground font-bold shadow-xs">
                <MapPin size={18} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs tracking-tight text-foreground uppercase">
                    Nubex
                  </h4>
                  <span className="rounded bg-primary/10 px-1.5 py-0.2 font-mono text-[9px] font-semibold text-primary">
                    Piso 2
                  </span>
                </div>
                <p className="font-mono text-xs text-foreground font-medium">{ADDRESS_STREET}</p>
                <p className="text-[11px] text-muted-foreground">Pitalito, Huila, Colombia</p>
                <div className="pt-1">
                  <a
                    href={GOOGLE_MAPS_DIR}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-primary hover:underline"
                  >
                    <Navigation size={12} />
                    <span>Cómo llegar (Ruta)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
