import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE } from "../lib/site";

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareHouse", "LocalBusiness", "Organization"],
      "@id": "https://nubex.co/#organization",
      name: "Nubex",
      legalName: "Nubex S.A.S.",
      alternateName: ["Nubex", "Nubex S.A.S.", "Nubex Pitalito", "Nubex Colombia"],
      url: "https://nubex.co",
      logo: SITE.logoUrl,
      image: [SITE.logoUrl],
      description:
        "Empresa especializada en la construcción de soluciones tecnológicas a la medida, desarrollo web y software corporativo.",
      telephone: "+573125964567",
      email: "josechavarrorojas@gmail.com",
      founder: {
        "@type": "Person",
        name: "Jose Chavarro Rojas",
        email: "josechavarrorojas@gmail.com",
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrera 15 # 19B - 15 SUR, Barrio Siglo XXI",
        addressLocality: "Pitalito",
        addressRegion: "Huila",
        postalCode: "417030",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 1.8499,
        longitude: -76.0658,
      },
      hasMap: "https://maps.google.com/maps?q=1.8499,-76.0658",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/share/1CDKhmyUFx/?mibextid=wwXIfr",
        "https://www.instagram.com/chavarrojoselito?utm_source=qr",
        "https://www.tiktok.com/@joselitochavarro",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+573125964567",
        contactType: "customer service",
        name: "Jose Chavarro Rojas",
        email: "josechavarrorojas@gmail.com",
        areaServed: "CO",
        availableLanguage: ["Spanish", "English"],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "48",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        { "@type": "Country", name: "Colombia" },
        { "@type": "AdministrativeArea", name: "Huila" },
        { "@type": "AdministrativeArea", name: "Pitalito" },
        { "@type": "Continent", name: "América Latina" },
      ],
      knowsAbout: [
        "Desarrollo de software a la medida",
        "Fábrica de software",
        "Staff Augmentation",
        "Outsourcing de desarrolladores",
        "Sistemas CRM personalizados",
        "Inteligencia de negocios y analítica de datos",
        "Capacitaciones en tecnología y programación",
        "Servicios de ingeniería de software",
        ".NET",
        "Java",
        "PHP",
        "React",
        "Node.js",
        "Angular",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nubex.co/#website",
      url: "https://nubex.co",
      name: "Nubex - Empresa de Desarrollo de Software y Tecnología",
      description:
        "Desarrollo de software a la medida, fábrica de software, staff augmentation e inteligencia de negocios en Colombia.",
      publisher: { "@id": "https://nubex.co/#organization" },
      inLanguage: "es-CO",
    },
    {
      "@type": "ItemList",
      name: "Servicios Profesionales de Tecnología de Nubex",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Staff Augmentation & Outsourcing de Programadores",
          description:
            "Ampliación de equipos de ingeniería de software con programadores experimentados en Colombia.",
        },
        {
          "@type": "Service",
          position: 2,
          name: "CRM a la Medida",
          description:
            "Plataformas personalizadas de gestión de clientes, leads, ventas e integración con HubSpot y SugarCRM.",
        },
        {
          "@type": "Service",
          position: 3,
          name: "Inteligencia de Negocios & Business Intelligence",
          description:
            "Calidad de datos, minería de información, analítica predictiva y tableros de control ejecutivos.",
        },
        {
          "@type": "Service",
          position: 4,
          name: "Fábrica de Software & Desarrollo a la Medida",
          description:
            "Construcción de aplicaciones web, móviles y sistemas corporativos en .NET, Java, PHP, React y Node.js.",
        },
        {
          "@type": "Service",
          position: 5,
          name: "Capacitaciones Tecnológicas Nubex",
          description:
            "Cursos y programas prácticos de entrenamiento en tecnologías de la información y programación.",
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      {
        name: "google-site-verification",
        content: "M1U44fAsZSJglq290I2vQ37QJuio2pl_uXrdZynGGe8",
      },
      {
        title:
          "Nubex | Desarrollo de Software a la Medida, Fábrica de Software & Staff Augmentation en Colombia",
      },
      {
        name: "description",
        content:
          "Empresa líder en desarrollo de software a la medida en Colombia con +10 años de experiencia. Especialistas en Staff Augmentation, Fábrica de Software (.NET, Java, React, Node.js), CRM personalizado, Inteligencia de Negocios y Formación Tecnológica (Nubex) en Pitalito, Huila.",
      },
      {
        name: "keywords",
        content:
          "desarrollo de software a la medida, fabrica de software colombia, staff augmentation colombia, outsourcing de desarrolladores, contratacion de programadores, crm a la medida, inteligencia de negocios colombia, business intelligence, capacitaciones tecnologicas, cursos de programacion pitalito, desarrollo web colombia, aplicaciones moviles, consultoria ti, empresa de tecnologia huila, desarrollo de software pitalito, software empresarial, nubex, nubex sas, capacitaciones nubex, programadores react node dotnet java",
      },
      { name: "author", content: "Nubex" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "bingbot", content: "index, follow" },
      { name: "language", content: "Spanish" },
      { name: "geo.region", content: "CO-HUI" },
      { name: "geo.placename", content: "Pitalito" },
      { name: "geo.position", content: "1.8499;-76.0658" },
      { name: "ICBM", content: "1.8499, -76.0658" },
      { name: "theme-color", content: "#090d16" },

      // Open Graph / Facebook / WhatsApp
      { property: "og:site_name", content: "Nubex" },
      { property: "og:locale", content: "es_CO" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Nubex | Desarrollo de Software, Staff Augmentation & Fábrica de Software",
      },
      {
        property: "og:description",
        content:
          "Impulsamos tu negocio con ingeniería de software de alto nivel: Staff Augmentation, CRM a la medida, Business Intelligence y Capacitaciones Tecnológicas con +10 años de experiencia.",
      },
      { property: "og:url", content: "https://nubex.co/" },
      { property: "og:image", content: SITE.logoUrl },
      {
        property: "og:image:alt",
        content: "Logo de Nubex - Empresa de Desarrollo de Software",
      },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Nubex | Soluciones Empresariales de Software y Talento TI",
      },
      {
        name: "twitter:description",
        content:
          "Fábrica de software, Staff Augmentation, CRM a la medida e Inteligencia de Negocios en Colombia.",
      },
      { name: "twitter:image", content: SITE.logoUrl },
    ],
    links: [
      { rel: "canonical", href: "https://nubex.co/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
      { rel: "icon", href: SITE.logoUrl },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: SITE.logoUrl },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `(function(){try{var s=localStorage.getItem("nubex-theme")||localStorage.getItem("codebug-theme");var d=s?s==="dark":true;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
