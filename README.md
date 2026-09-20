# Madayaw Davao: Curated Tourism Portal & QR Business Card

A modern, editorial web application providing a physical-to-digital bridge for visitors and travelers exploring Davao City, Philippines. The project combines an interactive 3D flippable business card with a scannable QR code that redirects directly to a curated tourism showcase, designed specifically for zero-configuration deployment on Vercel.

---

## 1. Core Features

### Physical-to-Digital 3D Business Card
- **Proportional Geometry:** Conforms to the standard 3.5in x 2.0in physical business card ratio (1.75:1).
- **Interactive 3D Perspective:** Smooth 60fps card flip animation toggled by clicking or pressing dedicated controls.
- **Dynamic Vector QR Code Generator:** Implemented in pure JavaScript without external third-party dependencies or tracking endpoints.
- **Vercel Destination Target:** Pre-configured to encode the live Vercel deployment URL (e.g., `https://davao-tourism.vercel.app` or the current active deployment origin).
- **Live URL Customizer:** Built-in control panel allows users and ambassadors to type their custom Vercel domain and instantly re-render the vector QR code.
- **Print & Export Stylesheet:** Dedicated `@media print` rules format the card front and back side-by-side with crop marks ready for physical print production.

### Curated 100% Davao-Only Directory
All 27 venues are strictly based within Davao City across four categories:
1. **Tourist Spots (8 venues):** Philippine Eagle Center, Eden Nature Park and Resort, Malagos Garden Resort & Chocolate Museum, People's Park, Roxas Avenue Night Market, D' Bone Collector Museum, Davao Crocodile Park, Jack's Ridge.
2. **Restaurants (7 venues):** Balik Bukid Farm + Kitchen, Rekado Filipino Comfort Cuisine, Blue Posts Boiling Crabs, Tiny Kitchen, Yellow Fin Seafood Restaurant, Claude's Le Cafe de Ville, Marina Tuna.
3. **Specialty Cafes (6 venues):** Glasshouse Coffee at Oboza, Purge Coffee Roaster, Fourth Street Cafe, Stash Coffee Co., Paramount Coffee Roasters, Kape Fabrika.
4. **Hotels & Stays (6 venues):** Dusit Thani Residence Davao, Pearl Farm Beach Resort, Seda Abreeza, The Apo View Hotel, Waterfront Insular Hotel, Hop Inn Hotel Davao.

### Modern Editorial Design System
- **Balanced Visual Hierarchy:** Harmonious equilibrium alternating between high-contrast gallery white space (`#FFFFFF` and `#FAFAFA`) and full-bleed high-resolution background photography.
- **Atmospheric Backdrops with Protected Contrast:** Hero section and Kadayawan cultural feature use high-definition photography paired with gradient scrims and frosted translucent cards (`backdrop-filter: blur(16px)`).
- **Zero Visual Clutter:** Large, clean typography (`clamp()` scale), wide section margins (80px to 120px), no flashing ads, no auto-playing media, and no crowded sidebars.
- **Dabawenyo Cultural Roots:** Visual accents inspired by Kadayawan harvest gold, rainforest pine green, and Bagobo-Tagabawa inabal textiles.

### Google Maps Navigation
- Every destination includes verified latitude and longitude coordinates.
- Direct "View on Google Maps" buttons generate turn-by-turn routing and place search queries.
- Interactive Geographic Explorer plots all venues proportionally over Davao City and the Gulf, with distance calculations from Davao City Hall.

---

## 2. Directory Structure

```
davao-tourism/
|-- assets/
|   `-- images/
|       |-- hero-davao.jpg               # High-res hero backdrop (Mount Apo & skyline)
|       |-- kadayawan-backdrop.jpg       # High-res Kadayawan festival dancing backdrop
|       |-- spots/                       # 8 high-res tourist spot photos
|       |-- restaurants/                 # 7 high-res restaurant photos
|       |-- cafes/                       # 6 high-res cafe photos
|       `-- hotels/                      # 6 high-res hotel photos
|-- docs/
|   |-- SPEC.md                          # Discovery & specification requirements
|   |-- ARCHITECTURE.md                  # System architecture, schemas, and contracts
|   `-- TASKS.md                         # Dependency-ordered atomic execution plan
|-- scripts/
|   |-- fetch-images.py                  # Image acquisition and fallback asset generator
|   `-- verify-system.js                 # Automated data validation and system audit
|-- src/
|   |-- components/
|   |   |-- business-card.js             # 3D flippable business card and print engine
|   |   |-- hero.js                      # Hero section with balanced backdrop
|   |   |-- location-grid.js             # Image-driven location cards & search
|   |   |-- map-explorer.js              # Geographic visualizer & distance calculator
|   |   |-- modal-detail.js              # Full-feature location detail modal
|   |   `-- navbar.js                    # Sticky header & category filter pills
|   |-- data/
|   |   `-- locations.js                 # Curated database of 27 Davao City venues
|   |-- state/
|   |   `-- app-state.js                 # Reactive application state manager
|   |-- styles/
|   |   |-- base.css                     # Reset, typography scale, CSS custom properties
|   |   |-- card.css                     # 3D perspective transforms & print styles
|   |   |-- portal.css                   # Gallery grid, backdrop scrims & transitions
|   |   `-- map.css                      # Map layout & pin visualizer styles
|   |-- utils/
|   |   |-- maps.js                      # Google Maps navigation & coordinate helpers
|   |   `-- qr.js                        # Pure JavaScript vector SVG QR code generator
|   `-- app.js                           # Application bootstrap & lifecycle coordinator
|-- index.html                           # Main semantic HTML5 document
|-- package.json                         # Project execution scripts
|-- vercel.json                          # Vercel SPA routing rewrites & caching rules
`-- README.md                            # Complete operational documentation
```

---

## 3. Local Development

To run the application locally:

```bash
# Option 1: Using Python's built-in HTTP server
python3 -m http.server 3000

# Option 2: Using Node or Deno
npx serve .
# or
deno serve --port 3000
```

Open `http://localhost:3000` in any modern web browser.

---

## 4. Vercel Deployment Instructions

The repository is pre-configured with `vercel.json` for zero-configuration static hosting on Vercel.

### Deploying via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy directly from the project directory
vercel
```

### Deploying via GitHub / Git Repository
1. Push this repository to GitHub or GitLab.
2. In the Vercel dashboard, click "Add New Project" and import this repository.
3. Framework Preset: Select "Other" (Static HTML).
4. Root Directory: `./` (or `davao-tourism`).
5. Click "Deploy".

Vercel will automatically serve `index.html`, route all paths according to `vercel.json`, and cache static assets on its global edge network.

---

## 5. Automated Verification

Run the test suite to validate all location data, coordinate bounds, image assets, QR generation, and `vercel.json` syntax:

```bash
node scripts/verify-system.js
```
