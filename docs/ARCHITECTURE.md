# Architecture: Davao Tourism QR Business Card & Portal

## 1. System Architecture and Component Ownership

The application is architected as a modular, lightweight, client-first Single Page Application (SPA) designed with progressive enhancement, zero bloat, an editorial gallery aesthetic balancing clean white space with high-resolution background imagery, and native zero-configuration deployment readiness for Vercel.

```
+---------------------------------------------------------------------------------+
|                                APPLICATION SHELL                                |
|  - App Header with Navigation Bar & Category Filter Pills                       |
|  - View Switcher (Portal Showcase View <--> Interactive Business Card View)     |
+---------------------------------------+-----------------------------------------+
                                        |
        +-------------------------------+-------------------------------+
        |                                                               |
        v                                                               v
+-----------------------------------+           +-----------------------------------+
|      BUSINESS CARD COMPONENT      |           |     TOURISM PORTAL COMPONENT      |
| - 3D Flippable Card (Front/Back)  |           | - Cinematic Hero Backdrop         |
| - Vector QR Code (Vercel URL)     |           | - Filter Bar (All/Spots/Dine/Cafe)|
| - Live Vercel Link Customizer     |           | - Balanced Gallery Grid           |
| - Print & Export Layout           |           | - Kadayawan Cultural Breakout     |
| - Interactive "Enter Portal" Flow |           | - Interactive Map Explorer        |
+-----------------------------------+           +-----------------+-----------------+
                                                                  |
                                                                  v
                                                +-----------------------------------+
                                                |     LOCATION DETAIL DRAWER        |
                                                | - Full-Bleed High-Res Photography |
                                                | - Verified Coordinates & Address  |
                                                | - Direct Google Maps Integration  |
                                                | - Cultural & Culinary Notes       |
                                                +-----------------------------------+
```

### Module Responsibilities
1. **`src/data/locations.js`**: Master single source of truth for all curated Davao City venues. Holds structured data for Tourist Spots, Restaurants, Cafes, and Hotels, complete with geographic coordinates, addresses, highlights, tags, and local high-resolution image paths.
2. **`src/components/business-card.js`**: Renders the 3.5" x 2" proportional business card in 3D perspective with interactive flip animation, real-time dynamic QR code generation encoding the Vercel hosting destination, scan simulator, URL configuration field, and print-ready styles.
3. **`src/components/navbar.js`**: Manages sticky header navigation, active category filters, view mode toggle (Portal vs. Business Card), and responsive drawer menu for mobile screens.
4. **`src/components/hero.js`**: Renders the editorial hero section balancing a full-bleed high-definition Davao backdrop (Mount Apo / city skyline) with generous macro white space, crisp text overlays, Kadayawan icons (Mount Apo, Philippine Eagle, Durian, Waling-Waling), and stats.
5. **`src/components/location-grid.js`**: Renders the uncluttered, image-focused grid of location cards with clean typography, tags, and action buttons.
6. **`src/components/map-explorer.js`**: Provides an embedded interactive Davao City map using Leaflet / OpenStreetMap or interactive SVG pin system with category filtering and Google Maps deep linking.
7. **`src/components/modal-detail.js`**: Displays a distraction-free modal drawer when a user selects a location, showcasing full-bleed high-res imagery, specialty highlights, and navigation links.
8. **`src/utils/qr.js`**: Generates crisp, high-contrast QR codes dynamically in pure JavaScript with zero external runtime dependencies, encoding the Vercel app endpoint.
9. **`src/utils/maps.js`**: Formats Google Maps query strings, coordinate coordinates, and universal navigation URLs.
10. **`vercel.json`**: Deployment routing configuration for Vercel, providing single-page application rewrites (`/((?!assets/).*)` -> `/index.html`), clean URLs, and HTTP caching headers.

---

## 2. Visual Balance Architecture: White Space and Background Imagery

### Structural Equilibrium
The design avoids the extremes of empty monotony and noisy visual overload by implementing an editorial alternating rhythm:
1. **Section 1: Atmospheric Hero (Background Image + Overlaid White Space):**
   - High-resolution (1920x1080) hero photography of Davao City landscape and Mount Apo.
   - Elegant directional gradient scrim (`linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.85) 100%)`) allowing bold, high-contrast white headlines to float gracefully.
2. **Section 2: Curated Category Filter & Gallery (Generous White Space Canvas):**
   - Pristine white and soft neutral canvas (`#FFFFFF` and `#FAFAFA`).
   - Generous macro-padding (80px - 120px section spacing, 32px grid gaps).
   - High-resolution photography contained within minimalist cards featuring subtle borders (`1px solid rgba(0,0,0,0.06)`), 0 cluttered badges, and large readable typography (24px - 32px headings).
3. **Section 3: Kadayawan Cultural Feature Break (Cinematic Visual Backdrop):**
   - Full-bleed high-definition photography showcasing Kadayawan Festival street dancing, ethnic weaves, and the 11 tribes of Davao.
   - Text sits on an airy, frosted translucent card (`background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(12px)`) establishing clean white space directly over the visual imagery.
4. **Section 4: Interactive Map Explorer (Clean Spatial Utility):**
   - Clean, light-themed map canvas with category pins and direct Google Maps links.

---

## 3. Comprehensive File Tree

```
davao-tourism/
|-- assets/
|   `-- images/
|       |-- hero-davao.jpg               # High-res hero background (Davao skyline & Mount Apo)
|       |-- kadayawan-backdrop.jpg       # High-res cinematic Kadayawan festival dancing backdrop
|       |-- spots/
|       |   |-- philippine-eagle.jpg     # Philippine Eagle Center in Malagos
|       |   |-- eden-nature-park.jpg     # Eden Nature Park pine trees and mountain ridge
|       |   |-- malagos-resort.jpg       # Malagos Garden and Chocolate Museum
|       |   |-- peoples-park.jpg         # People's Park giant durian dome and sculptures
|       |   |-- roxas-night-market.jpg   # Roxas Night Market street food and vibrant stalls
|       |   |-- bone-collector.jpg       # D' Bone Collector Museum animal skeletons
|       |   |-- crocodile-park.jpg       # Davao Crocodile Park and wildlife sanctuary
|       |   `-- jacks-ridge.jpg          # Jack's Ridge scenic view overlooking Davao City
|       |-- restaurants/
|       |   |-- balik-bukid.jpg          # Balik Bukid Farm + Kitchen organic farm setting
|       |   |-- rekado.jpg               # Rekado Filipino Comfort Cuisine dining hall
|       |   |-- blue-posts.jpg           # Blue Posts Boiling Crabs seafood spread
|       |   |-- tiny-kitchen.jpg         # Tiny Kitchen Spanish paella and pastries
|       |   |-- yellow-fin.jpg           # Yellow Fin Seafood Restaurant tuna grill
|       |   |-- claudes.jpg              # Claude's Le Cafe de Ville heritage house
|       |   `-- marina-tuna.jpg          # Marina Tuna 10-way tuna feast
|       |-- cafes/
|       |   |-- glasshouse-coffee.jpg    # Glasshouse Coffee at Oboza Heritage House
|       |   |-- purge-coffee.jpg         # Purge Coffee Roaster specialty cafe
|       |   |-- fourth-street.jpg        # Fourth Street Cafe cozy interior
|       |   |-- stash-coffee.jpg         # Stash Coffee Co. modern roastery
|       |   `-- paramount-coffee.jpg     # Paramount Coffee seed-to-cup roasters
|       `-- hotels/
|           |-- dusit-thani.jpg          # Dusit Thani Residence Davao luxury facade
|           |-- pearl-farm.jpg           # Pearl Farm Beach Resort water villas
|           |-- seda-abreeza.jpg         # Seda Abreeza contemporary hotel lobby
|           |-- apo-view.jpg             # The Apo View Hotel historic landmark
|           |-- waterfront-insular.jpg   # Waterfront Insular Hotel garden beachfront
|           `-- hop-inn.jpg              # Hop Inn Hotel clean modern guestrooms
|-- docs/
|   |-- SPEC.md                          # Project specifications, user journeys, scope boundaries
|   |-- ARCHITECTURE.md                  # System architecture, file layout, contracts, and risks
|   `-- TASKS.md                         # Dependency-ordered atomic execution plan and verification
|-- scripts/
|   |-- fetch-images.py                  # High-res image downloader and quality verifier
|   `-- verify-system.js                 # Verification script validating all schemas, assets, and builds
|-- src/
|   |-- components/
|   |   |-- business-card.js             # 3D interactive business card and print engine
|   |   |-- hero.js                      # Hero section with balanced backdrop & white space
|   |   |-- location-grid.js             # Image-centric, uncluttered location cards
|   |   |-- map-explorer.js              # Interactive map modal and embedded coordinate viewer
|   |   |-- modal-detail.js              # Full-screen / drawer detail modal for chosen spot
|   |   `-- navbar.js                    # Sticky modern top navigation and category filter
|   |-- data/
|   |   `-- locations.js                 # Comprehensive database of verified Davao City spots
|   |-- state/
|   |   `-- app-state.js                 # Reactive application state manager and event emitter
|   |-- styles/
|   |   |-- base.css                     # Reset, typographic scale, CSS variables, white-space grid
|   |   |-- card.css                     # 3D card flip transformations and print styles
|   |   |-- portal.css                   # Gallery grid, backdrop scrims, and modal transitions
|   |   `-- map.css                      # Leaflet / interactive map pin and popover styling
|   |-- utils/
|   |   |-- maps.js                      # Google Maps URL generator and coordinate utilities
|   |   `-- qr.js                        # Pure JavaScript QR code matrix generator and SVG renderer
|   |-- app.js                           # Application bootstrap and component mounting
|-- index.html                           # Main entry HTML document with semantic structure
|-- package.json                         # Project scripts and lightweight dev dependencies
|-- vercel.json                          # Vercel deployment routing, SPA rewrite, and header rules
`-- README.md                            # Operational guide, feature summary, and local run steps
```

---

## 4. Interfaces and Data Contracts

### Location Data Schema (`src/data/locations.js`)
```typescript
interface DavaoLocation {
  id: string;                     // Unique kebab-case slug (e.g. "philippine-eagle-center")
  name: string;                   // Official venue name (e.g. "Philippine Eagle Center")
  category: "tourist-spot" | "restaurant" | "cafe" | "hotel";
  district: string;               // District in Davao City (e.g. "Malagos, Baguio District")
  address: string;                // Complete street address
  coordinates: {
    lat: number;                  // Latitude (e.g. 7.1852)
    lng: number;                  // Longitude (e.g. 125.4190)
  };
  googleMapsUrl: string;          // Direct navigation link for Google Maps
  tagline: string;                // Short, punchy 1-line description
  description: string;            // 2-3 sentence overview highlighting what makes it special
  highlights: string[];           // Array of 3 key items (e.g. ["Home of Pag-asa", "Rainforest Trek", "Interactive Exhibit"])
  image: string;                  // Local relative path (e.g. "assets/images/spots/philippine-eagle.jpg")
  priceRange?: "$" | "$$" | "$$$" | "$$$$";
  openingHours: string;           // Operating hours
  bestFor: string;                // Target vibe (e.g. "Wildlife Conservation & Families")
}
```

### High-Resolution Image Pipeline Contract (`scripts/fetch-images.py`)
```python
# Specifications for downloaded image assets
MIN_WIDTH_BACKDROP = 1600
MIN_HEIGHT_BACKDROP = 900
MIN_WIDTH_CARD = 800
MIN_HEIGHT_CARD = 600
FORMATS = ("image/jpeg", "image/webp", "image/png")
```

---

## 5. Technology Choices and Justifications

1. **Vercel Static Hosting**:
   - *Justification:* Vercel provides instant global edge deployment, automatic SSL certificates, fast CDN caching, and seamless previews without infrastructure overhead.
2. **Vanilla ES Modules (JavaScript) + Modern Semantic HTML5**:
   - *Justification:* Guarantees ultra-fast startup (zero hydration overhead), maximum maintainability, and zero dependency decay. No complex build pipelines required to inspect or run.
3. **Modern CSS (Backdrop Filter, CSS Grid, 3D Transforms, Custom Scrims)**:
   - *Justification:* Delivers silky smooth 60fps animations for 3D card flips, responsive typography, and an equilibrium of negative space and backdrop imagery without external CSS framework bloat.
4. **Pure JavaScript Dynamic QR Generator (`src/utils/qr.js`)**:
   - *Justification:* Generates vector SVG QR codes directly in the DOM encoding the Vercel link without relying on external third-party QR imaging APIs that could fail offline or introduce tracking.
5. **Leaflet OpenStreetMap + Google Maps Deep Linking**:
   - *Justification:* Provides an interactive on-page map preview without requiring a paid Google Maps API key, while offering a one-click Google Maps link for actual GPS navigation on user devices.
6. **Python 3 High-Resolution Asset Pipeline (`scripts/fetch-images.py`)**:
   - *Justification:* Automates the download of high-resolution, uncompressed curated Davao photography and verifies file integrity and dimensions.

---

## 6. Risks, Edge Cases and Mitigations

1. **Risk: Large Background Images Slowing Down Mobile Page Loads**
   - *Mitigation:* Backdrops utilize modern CSS `image-set()` or responsive media queries, priority preloading for the hero image, and asynchronous lazy-loading for off-screen cards.
2. **Risk: Legibility Conflicts between Text and High-Detail Background Images**
   - *Mitigation:* Strict contrast protection using directional gradient scrims and translucent frosted glass backing (`backdrop-filter: blur(12px)`) ensuring WCAG 2.1 AA text contrast across all resolutions.
3. **Risk: Target Vercel Subdomain Not Finalized Before Printing Cards**
   - *Mitigation:* The business card includes an interactive "Vercel URL" input control that updates the QR code in real-time, allowing the user to type their exact deployed Vercel domain prior to exporting or printing.
