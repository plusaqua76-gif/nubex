import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Facebook,
  GraduationCap,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

import { Logo } from "@/components/Logo";

function TikTokIcon({ size = 17, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.28 0 .54.04.79.1V9.41a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 1 0 6.34 6.34V8.7a8.21 8.21 0 0 0 4.82 1.56V6.8a4.85 4.85 0 0 1-1.05-.11z" />
    </svg>
  );
}
import { ThemeToggle } from "@/components/ThemeToggle";
import { Reveal } from "@/components/Reveal";
import { Typewriter } from "@/components/Typewriter";
import { HeroGrid } from "@/components/HeroGrid";
import { CompanyMap } from "@/components/CompanyMap";
import { FloatingGlyphs } from "@/components/FloatingGlyphs";
import { CustomCursor } from "@/components/CustomCursor";
import { CountUp } from "@/components/CountUp";
import { SectionDivider } from "@/components/SectionDivider";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Index,
});

interface NavItem {
  id: string;
  label: string;
  href?: string;
  external?: boolean;
  highlight?: boolean;
}

const NAV: NavItem[] = [
  { id: "nosotros", label: "Quiénes somos" },
  { id: "servicios", label: "Servicios" },
  {
    id: "capacitaciones",
    label: "Capacitaciones",
    href: SITE.formacionUrl,
    external: true,
    highlight: true,
  },
  { id: "porque", label: "Por qué Nubex" },
  { id: "contacto", label: "Contacto" },
];

const SERVICIOS = [
  {
    icon: Users,
    tag: "01",
    title: "Staff Augmentation",
    desc: "Ampliamos tu equipo con desarrolladores especializados según la duración y complejidad de cada proyecto.",
  },
  {
    icon: Target,
    tag: "02",
    title: "CRM a la medida",
    desc: "Prospectos, clientes, oportunidades comerciales, actividades, PQRs, proyectos y flujos de trabajo. Integración con HubSpot y SugarCRM.",
  },
  {
    icon: BarChart3,
    tag: "03",
    title: "Inteligencia de Negocios",
    desc: "Migración y calidad de datos, integración con herramientas ETL, cubos de información y minería de datos para decidir con evidencia.",
  },
  {
    icon: Code2,
    tag: "04",
    title: "Fábrica de Software",
    desc: "Desarrollo a medida en .NET, Java, PHP, Angular, React y Node.js, partiendo de un levantamiento riguroso de requerimientos.",
  },
];

const RAZONES = [
  {
    icon: Zap,
    title: "Experiencia comprobada",
    desc: "Más de una década entregando proyectos en distintos sectores e industrias.",
  },
  {
    icon: Target,
    title: "Enfoque a la medida",
    desc: "Nada de plantillas: cada solución se diseña sobre los procesos reales del negocio.",
  },
  {
    icon: Handshake,
    title: "Acompañamiento cercano",
    desc: "Un interlocutor técnico directo durante todo el ciclo de vida del proyecto.",
  },
  {
    icon: Brain,
    title: "Tecnología actualizada",
    desc: "Stacks vigentes, buenas prácticas y arquitecturas pensadas para durar.",
  },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    // Safety timer so hero paragraph/buttons always reveal even if typewriter callback is delayed
    const timer = setTimeout(() => {
      setTyped(true);
    }, 1800);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const heroDelayed = (extra: number) =>
    ({
      opacity: typed ? 1 : 0,
      transform: typed ? "none" : "translateY(14px)",
      transition:
        "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
      transitionDelay: `${extra}ms`,
    }) as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />

      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/70 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-xs"
            : "border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center">
            <Logo className="h-10 md:h-11" />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {NAV.map((n) =>
              n.external ? (
                <a
                  key={n.id}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-link group relative inline-flex items-center gap-1.5 rounded-xs border border-accent-ink/40 bg-accent-ink/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-ink transition-all hover:border-accent-ink hover:bg-accent-ink/20"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-ink opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-ink"></span>
                  </span>
                  {n.label}
                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="story-link font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent-ink"
                >
                  {n.label}
                </a>
              ),
            )}
            <a
              href="#contacto"
              className="btn-lift border border-accent-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent-ink hover:bg-primary hover:text-primary-foreground"
            >
              Hablemos
            </a>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Abrir menú"
              className="text-foreground"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col px-5 py-4">
              {NAV.map((n) =>
                n.external ? (
                  <a
                    key={n.id}
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border py-3.5 font-mono text-xs uppercase tracking-widest text-accent-ink font-semibold"
                  >
                    <span className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-ink opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-ink"></span>
                      </span>
                      {n.label}
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground"
                  >
                    {n.label}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
          style={{
            transform: `scaleX(${progress})`,
            opacity: scrolled ? 1 : 0,
            transition: "transform 120ms linear, opacity 300ms ease",
          }}
        />
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.45]" />
        <HeroGrid />
        <FloatingGlyphs />
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,var(--background)_80%)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-28 hidden select-none font-mono text-[11px] leading-6 text-muted-foreground/35 lg:block"
        >
          <div>{"$ nubex --init project"}</div>
          <div>{"> analizando procesos..."}</div>
          <div>{"> definiendo arquitectura..."}</div>
          <div>{"> build: ok  ✓"}</div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5">
          <span className="bracket-label">+10 años de trayectoria</span>
          <h1 className="mt-6 min-h-[3.2em] max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <Typewriter
              speed={32}
              linePause={280}
              lines={[
                { text: "Software que resuelve." },
                { text: "Equipos que entregan.", className: "text-accent-ink" },
              ]}
              onDone={() => setTyped(true)}
            />
          </h1>
          <p
            style={heroDelayed(0)}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Somos una empresa con más de 10 años construyendo soluciones tecnológicas a la medida de
            cada negocio: desde el levantamiento de requerimientos hasta la puesta en producción.
          </p>
          <div style={heroDelayed(180)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#servicios"
              className="btn-lift glitch-hover inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground shadow-sm"
            >
              Ver servicios <ArrowRight size={15} />
            </a>
            <a
              href="#contacto"
              className="btn-lift inline-flex items-center justify-center gap-2 border border-border bg-card/80 px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent-ink hover:text-accent-ink"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </section>

      <SectionDivider label="/// quiénes somos" />

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="relative overflow-hidden border-t border-border bg-slate-100/70 py-24 dark:bg-card/25"
      >
        <div className="tech-cross-bg pointer-events-none absolute inset-0 opacity-[0.25] dark:opacity-[0.12]" />
        <div className="studio-glow-radial pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div>
              <span className="bracket-label">Quiénes somos</span>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Entendemos el proceso antes de escribir la primera línea de código
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Nubex es un equipo de desarrollo enfocado en comprender cómo opera cada empresa
                antes de proponer una solución. Combinamos experiencia técnica con una mirada
                estratégica del negocio para construir software que se ajusta a lo que el cliente
                realmente necesita.
              </p>
              <p>
                Trabajamos de forma consultiva y cercana: definimos alcance, priorizamos lo que
                genera valor y acompañamos cada entrega hasta que el equipo del cliente se apropia
                de la herramienta.
              </p>
              <div className="mt-8 grid gap-px border border-border/80 bg-border/80 sm:grid-cols-3">
                <div className="bg-card p-6 shadow-xs">
                  <div className="font-mono text-2xl font-bold text-accent-ink">
                    <CountUp value={10} prefix="+" />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    años de experiencia
                  </div>
                </div>
                <div className="bg-card p-6 shadow-xs">
                  <div className="font-mono text-2xl font-bold text-accent-ink">
                    <CountUp value={100} suffix="%" />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    enfoque consultivo
                  </div>
                </div>
                <div className="bg-card p-6 shadow-xs">
                  <div className="font-mono text-2xl font-bold text-accent-ink">1:1</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    acompañamiento cercano
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider label="/// servicios" />

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="relative overflow-hidden border-t border-border bg-background py-24"
      >
        <div className="tech-dots-bg pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="bracket-label">Servicios</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Soluciones tecnológicas integrales
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="card-trace group h-full border border-border/80 bg-card/90 p-8 shadow-xs backdrop-blur-sm hover:bg-card">
                  <div className="flex items-start justify-between">
                    <span className="clipped-square inline-flex h-12 w-12 items-center justify-center border border-border/80 bg-slate-100/80 transition-colors group-hover:border-accent-ink dark:bg-background">
                      <s.icon
                        size={24}
                        strokeWidth={1.25}
                        className="icon-pop text-foreground group-hover:text-accent-ink"
                      />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{`< ${s.tag} />`}</span>
                  </div>
                  <span className="mt-6 block font-mono text-[11px] tracking-widest text-accent-ink/80">
                    {"<service>"}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={520} className="md:col-span-2">
              <article className="card-trace group relative overflow-hidden rounded-xs border-2 border-accent-ink/70 bg-gradient-to-br from-card via-card to-accent-ink/10 p-8 shadow-md backdrop-blur-md transition-all hover:border-accent-ink sm:p-10">
                {/* Decorative ambient tech elements */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-ink/15 blur-3xl"
                />
                <div
                  aria-hidden
                  className="tech-cross-bg pointer-events-none absolute inset-0 opacity-[0.2] dark:opacity-[0.1]"
                />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-xs border border-accent-ink bg-accent-ink/15 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-ink shadow-xs">
                        <Sparkles size={13} className="animate-pulse" />
                        Programa Destacado • Code Makers
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {"< 05 / Capacitaciones />"}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      Capacitaciones y Formación en Tecnología
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Impulsamos el talento técnico con programas especializados, bootcamps
                      prácticos y capacitaciones corporativas diseñadas para dominar las
                      herramientas de mayor demanda de la industria.
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {[
                        "Desarrollo Full Stack & Cloud Moderno",
                        "Inteligencia Artificial aplicada y Datos",
                        "Entrenamiento corporativo 100% práctico",
                        "Mentoría directa con ingenieros sénior",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 font-mono text-xs text-foreground/90"
                        >
                          <CheckCircle2 size={15} className="shrink-0 text-accent-ink" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                    <a
                      href={SITE.formacionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-lift glitch-hover inline-flex items-center justify-center gap-2.5 bg-accent-ink px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-md transition-all hover:bg-accent-ink/90"
                    >
                      <BookOpen size={16} />
                      Ver Portal de Capacitaciones
                      <ArrowUpRight size={16} />
                    </a>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {"> Cursos, rutas técnicas y certificaciones"}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionDivider label="/// por qué nubex" />

      {/* POR QUÉ */}
      <section
        id="porque"
        className="relative overflow-hidden border-t border-border bg-blue-50/25 py-24 dark:bg-card/20"
      >
        <div className="studio-stripe-bg pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.2]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal>
            <span className="bracket-label">Por qué Nubex</span>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              Lo técnico importa. La forma de trabajarlo, también.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-border/80 bg-border/80 sm:grid-cols-2 lg:grid-cols-4">
            {RAZONES.map((r, i) => (
              <Reveal key={r.title} delay={i * 120}>
                <div className="group relative h-full overflow-hidden bg-card p-8 transition-colors hover:bg-slate-50 dark:hover:bg-muted/60">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-bold text-foreground/[0.055] transition-colors group-hover:text-accent-ink/15"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <r.icon
                    size={26}
                    strokeWidth={1.25}
                    className="icon-pop relative text-accent-ink"
                  />
                  <h3 className="relative mt-5 font-bold tracking-tight">{r.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider label="/// contacto" />

      {/* CONTACTO */}
      <section
        id="contacto"
        className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-slate-100/60 to-slate-200/40 py-24 dark:from-background dark:via-card/30 dark:to-card/50"
      >
        <div className="tech-cross-bg pointer-events-none absolute inset-0 opacity-[0.22] dark:opacity-[0.1]" />
        <div className="studio-glow-radial pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
          <Reveal>
            <div>
              <span className="bracket-label">Contacto</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                Hablemos de tu proyecto
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Cuéntanos qué necesitas resolver y te proponemos un camino concreto, con alcance y
                tiempos claros.
              </p>

              <ul className="mt-10 space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <User size={16} className="text-accent-ink" />
                  <span>
                    Contacto directo:{" "}
                    <strong className="font-semibold text-foreground">{SITE.contactPerson}</strong>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent-ink" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-accent-ink">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent-ink" />
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="hover:text-accent-ink"
                  >
                    {SITE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent-ink" />
                  {SITE.address}
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { href: SITE.social.facebook, Icon: Facebook, label: "Facebook" },
                  { href: SITE.social.instagram, Icon: Instagram, label: "Instagram" },
                  { href: SITE.social.tiktok, Icon: TikTokIcon, label: "TikTok" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="border border-border p-3 text-muted-foreground transition-colors hover:border-accent-ink hover:text-accent-ink"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="border border-border bg-card p-8">
              <div className="grid gap-5">
                {[
                  { id: "nombre", label: "Nombre", type: "text" },
                  { id: "correo", label: "Correo", type: "email" },
                  { id: "empresa", label: "Empresa", type: "text" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.id !== "empresa"}
                      className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-ink"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent-ink"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-primary-foreground btn-lift"
                >
                  Enviar mensaje <ArrowRight size={15} />
                </button>
                {sent && (
                  <p className="font-mono text-xs text-accent-ink">
                    {"> Mensaje registrado. Te contactaremos pronto."}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        {/* Map subsection */}
        <div className="mx-auto mt-16 max-w-6xl px-5">
          <Reveal delay={200}>
            <CompanyMap />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div>
              <Logo className="h-11 md:h-13" />
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Desarrollo de software a la medida con más de 10 años de trayectoria.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-ink">
                  Sitio
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {NAV.map((n) => (
                    <li key={n.id}>
                      {n.external ? (
                        <a
                          href={n.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-accent-ink hover:underline"
                        >
                          {n.label} <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <a href={`#${n.id}`} className="hover:text-accent-ink">
                          {n.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-ink">
                  Capacitaciones
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href={SITE.formacionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-accent-ink"
                    >
                      Portal Code Makers <ArrowUpRight size={12} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.formacionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-ink"
                    >
                      Cursos y Bootcamps
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-accent-ink">
                  Redes
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href={SITE.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-ink"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-ink"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={SITE.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent-ink"
                    >
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Nubex — Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-13 w-13 items-center justify-center border border-accent-ink bg-primary p-3.5 text-primary-foreground shadow-lg btn-lift"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
