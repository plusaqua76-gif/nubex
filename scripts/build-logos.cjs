const fs = require("fs");
const path = require("path");

const publicDir = path.join(process.cwd(), "public");

const svgLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="1200" height="480">
  <defs>
    <linearGradient id="nubexGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="nubexAccentLight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>
  <g transform="translate(30, 20)">
    <!-- Cloud Left Contour -->
    <path d="M 60 140 C 40 140 25 125 25 105 C 25 87 37 72 55 70 C 60 45 82 25 110 25 C 135 25 156 41 164 63 C 171 60 179 58 187 58 C 212 58 232 78 232 103 C 232 125 216 140 195 140" fill="none" stroke="url(#nubexAccentLight)" stroke-width="9" stroke-linecap="round" stroke-dasharray="7 5" opacity="0.8"/>
    
    <!-- Stylized Modern 'N' -->
    <path d="M 70 185 V 75 L 145 185 V 75" fill="none" stroke="url(#nubexGradLight)" stroke-width="23" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Circuit lines & Dots -->
    <path d="M 165 100 H 200 L 215 115 H 230" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>
    <circle cx="233" cy="115" r="5" fill="#0284c7"/>
    
    <path d="M 170 155 H 205 L 217 142" fill="none" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>
    <circle cx="220" cy="142" r="5" fill="#2563eb"/>

    <!-- Code Bracket Symbol </> -->
    <text x="195" y="188" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="900" fill="#0284c7">&lt;/&gt;</text>
  </g>

  <!-- NUBEX Text -->
  <text x="290" y="145" font-family="'Space Grotesk', 'Montserrat', sans-serif" font-size="96" font-weight="900" letter-spacing="4" fill="#0f172a">NUBEX</text>
  <text x="294" y="180" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="600" letter-spacing="6" fill="#64748b">SOFTWARE &amp; CLOUD</text>
</svg>`;

const svgDark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" width="1200" height="480">
  <defs>
    <linearGradient id="nubexGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>
    <linearGradient id="nubexAccentDark" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>
  <g transform="translate(30, 20)">
    <!-- Cloud Left Contour -->
    <path d="M 60 140 C 40 140 25 125 25 105 C 25 87 37 72 55 70 C 60 45 82 25 110 25 C 135 25 156 41 164 63 C 171 60 179 58 187 58 C 212 58 232 78 232 103 C 232 125 216 140 195 140" fill="none" stroke="url(#nubexAccentDark)" stroke-width="9" stroke-linecap="round" stroke-dasharray="7 5" opacity="0.8"/>
    
    <!-- Stylized Modern 'N' -->
    <path d="M 70 185 V 75 L 145 185 V 75" fill="none" stroke="url(#nubexGradDark)" stroke-width="23" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Circuit lines & Dots -->
    <path d="M 165 100 H 200 L 215 115 H 230" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
    <circle cx="233" cy="115" r="5" fill="#38bdf8"/>
    
    <path d="M 170 155 H 205 L 217 142" fill="none" stroke="#60a5fa" stroke-width="6" stroke-linecap="round"/>
    <circle cx="220" cy="142" r="5" fill="#60a5fa"/>

    <!-- Code Bracket Symbol </> -->
    <text x="195" y="188" font-family="'JetBrains Mono', monospace" font-size="22" font-weight="900" fill="#38bdf8">&lt;/&gt;</text>
  </g>

  <!-- NUBEX Text -->
  <text x="290" y="145" font-family="'Space Grotesk', 'Montserrat', sans-serif" font-size="96" font-weight="900" letter-spacing="4" fill="#f8fafc">NUBEX</text>
  <text x="294" y="180" font-family="'JetBrains Mono', monospace" font-size="18" font-weight="600" letter-spacing="6" fill="#94a3b8">SOFTWARE &amp; CLOUD</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, "nubex-logo.svg"), svgLight);
fs.writeFileSync(path.join(publicDir, "nubex-logo-white.svg"), svgDark);

console.log("SVG Assets generated successfully!");
