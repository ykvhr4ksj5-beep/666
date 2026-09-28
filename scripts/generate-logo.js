// Script to generate high-quality JAYRAJI GROUP logo assets
import fs from 'fs';
import path from 'path';

// Let's create an SVG that matches the exact vector design of the user's logo:
// - Left geometric emblem with cobalt blue facet and deep navy blue arrow/arc body
// - "JAYRAJI" in bold geometric corporate typography
// - "GROUP" with tracked lettering underneath

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&amp;display=swap');
      .brand-title {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 800;
        font-size: 138px;
        fill: #002B5C;
        letter-spacing: -0.015em;
      }
      .brand-subtitle {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 32px;
        fill: #002B5C;
        letter-spacing: 0.38em;
      }
    </style>
  </defs>

  <!-- Background (Pure White) -->
  <rect width="1000" height="1000" fill="#FFFFFF" />

  <!-- Logo Mark Group -->
  <g id="logo-mark">
    <!-- Top Royal/Cobalt Blue Triangle Facet -->
    <polygon points="214,304 397,304 397,375" fill="#0A60B4" />

    <!-- Main Navy Geometric Arrow & Arc Body -->
    <path
      d="M 214,304
         L 144,500
         L 397,696
         L 397,625
         A 175 175 0 0 1 397,375
         Z"
      fill="#002B5C"
    />
  </g>

  <!-- Brand Typography -->
  <!-- "JAYRAJI" (Cradled into mark's circular notch) -->
  <text x="330" y="542" class="brand-title">JAYRAJI</text>

  <!-- "GROUP" (Right-aligned under RAJI) -->
  <text x="653" y="605" class="brand-subtitle">GROUP</text>
</svg>`;

// Also create a transparent background version for flexible embedding
const svgTransparent = svgContent.replace('<rect width="1000" height="1000" fill="#FFFFFF" />', '');

// Also create a compact horizontal asset (tightly cropped to content for headers/navbars)
const svgCompact = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="130 290 750 420" width="750" height="420">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&amp;display=swap');
      .brand-title {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 800;
        font-size: 138px;
        fill: #002B5C;
        letter-spacing: -0.015em;
      }
      .brand-subtitle {
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-weight: 700;
        font-size: 32px;
        fill: #002B5C;
        letter-spacing: 0.38em;
      }
    </style>
  </defs>

  <g id="logo-mark">
    <polygon points="214,304 397,304 397,375" fill="#0A60B4" />
    <path
      d="M 214,304
         L 144,500
         L 397,696
         L 397,625
         A 175 175 0 0 1 397,375
         Z"
      fill="#002B5C"
    />
  </g>

  <text x="330" y="542" class="brand-title">JAYRAJI</text>
  <text x="653" y="605" class="brand-subtitle">GROUP</text>
</svg>`;

fs.writeFileSync('public/jayraji-logo.svg', svgContent);
fs.writeFileSync('public/jayraji-logo-transparent.svg', svgTransparent);
fs.writeFileSync('public/jayraji-logo-compact.svg', svgCompact);

console.log('Saved public/jayraji-logo.svg and compact variants successfully.');
