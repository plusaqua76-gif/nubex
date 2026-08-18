# Code Bug S.A.S. — Official Corporate Platform

![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Proprietary-0052CC?style=for-the-badge)

Official web portal and service showcase for **Code Bug S.A.S.**, a Colombian software engineering firm with over 10 years of trajectory crafting bespoke enterprise software, IT staff augmentation, custom CRM platforms, data intelligence, and tech training programs.

---

## 🚀 Key Features

- **Enterprise Technical Visual Identity**: Modern, high-density layout featuring dark/light dynamic glassmorphism, monochrome precision, and electric blue tech accents (`#2563EB` / `#38BDF8`).
- **Interactive Tech Canvas Grid**: Custom HTML5 Canvas engine rendering active particle scanlines and interactive hover nodes that react dynamically to user cursor movement.
- **Service Portfolio & Capabilities**: Dedicated technical cards showcasing Staff Augmentation, Custom CRM Engineering, Business Intelligence, Software Factory (.NET, Java, React, Node.js), and Educational Training.
- **Training Portal Integration**: Direct link to Nubex's specialized training platform ([Capacitaciones Nubex](https://capacitaciones.nubex.dev/)).
- **Embedded Interactive Location Map**: Integrated Google Maps viewer featuring Code Bug's head office in Pitalito, Huila (*Carrera 15 # 19B - 15 SUR Piso 2, frente al C.C. Gran Plaza San Antonio*), complete with directions overlay and adaptive light/dark map themes.
- **Adaptive Theme Engine**: Seamless toggle between Light Studio Mode and Ultra-Dark Matrix Mode with persisted preference and zero FOUT.
- **Performance & Micro-Interactions**: Built on TanStack Router and Motion (Framer) for fluid section reveals, terminal-style typewriter headings, floating glyphs, and responsive navigation.

---

## 🛠️ Tech Stack & Architecture

### **Core Frontend**
- **Framework**: [React 18.3](https://react.dev/)
- **Build Tool**: [Vite 5.4](https://vitejs.dev/)
- **Type System**: [TypeScript 5.6](https://www.typescriptlang.org/)
- **Routing**: [@tanstack/react-router 1.58](https://tanstack.com/router)

### **Styling & UI Components**
- **Design System**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk & JetBrains Mono

---

## 📁 Repository Structure

```
├── public/                     # Static assets (Logos, favicons, open-graph imagery)
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── CompanyMap.tsx     # Embedded location map component
│   │   ├── HeroGrid.tsx       # Canvas grid engine with interactive particles
│   │   ├── Logo.tsx           # Adaptive illuminated brand logo frame
│   │   ├── Reveal.tsx         # Scroll-triggered viewport animations
│   │   ├── Typewriter.tsx     # Terminal typewriter effect component
│   │   └── ui/                # Base design system primitives (Radix/Shadcn)
│   ├── lib/
│   │   ├── site.ts            # Centralized corporate metadata & config
│   │   └── utils.ts           # Class merging and utility functions
│   ├── routes/                # Application routes & layout definitions
│   │   ├── __root.tsx         # Root layout with navbar, footer & theme provider
│   │   └── index.tsx          # Main corporate landing page
│   ├── styles.css             # Global CSS variables & utility classes
│   └── main.tsx               # Client entry point
├── package.json               # Dependencies & build scripts
├── vite.config.ts             # Vite configuration with path aliases
└── tsconfig.json              # TypeScript compiler configuration
```

---

## ⚙️ Getting Started

### **Prerequisites**
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v9+) or `pnpm`

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/codebug-sas/corporate-portal.git
   cd corporate-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Access the application at `http://localhost:3000`.

### **Production Build & Verification**

To compile and bundle for production:
```bash
# Build the static distribution files
npm run build

# Preview the production build locally
npm run preview

# Execute linter checks
npm run lint
```

---

## 📍 Corporate Contact & Location

- **Company**: Code Bug S.A.S.
- **Headquarters**: Carrera 15 # 19B - 15 SUR, Piso 2, Pitalito, Huila, Colombia *(Frente al C.C. Gran Plaza San Antonio)*
- **Email**: `contacto@codebug.com`
- **Phone / WhatsApp**: [+57 312 596 4567](https://wa.me/573125964567)
- **Training Portal**: [capacitaciones.nubex.dev](https://capacitaciones.nubex.dev/)

---

<!-- LOVABLE:BEGIN -->
> [!NOTE]
> This project is synchronized with [Lovable](https://lovable.dev).
<!-- LOVABLE:END -->

© 2026 Code Bug S.A.S. All rights reserved.
