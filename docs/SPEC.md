# Specification: Davao Tourism QR Business Card & Portal

## 1. Problem Statement and Target Users

### Problem Statement
Travelers, business delegates, and festival visitors arriving in Davao City often struggle to quickly access trusted, high-quality, and hyper-local recommendations without sifting through cluttered directories, ad-heavy social media pages, and outdated travel blogs. Furthermore, event organizers and hospitality ambassadors need a compact, physical-to-digital bridge (a physical business card) that instantly redirects guests to a curated, uncluttered, and mobile-optimized Davao showcase hosted live on Vercel without requiring manual typing or app installations.

### Target Users
1. **Independent Tourists and International Travelers:** Visiting Davao City for the first time, seeking dependable information on nature parks, dining, cafes, and accommodations.
2. **Kadayawan Festival Visitors:** Attendees celebrating Davao's thanksgiving festival who need quick access to cultural highlights, street food hotspots, and festival hubs.
3. **Local Foodies and Cafe Enthusiasts:** Looking for specialty coffee roasters and iconic Dabawenyo comfort food in Poblacion, Torres, and Matina.
4. **Tourism Ambassadors and Hospitality Hosts:** Professionals distributing physical business cards at conferences, hotels, and tourist touchpoints to guide guests to the live Vercel portal.

---

## 2. Core User Journeys

### Journey 1: Physical-to-Digital Entry via QR Business Card
- Step 1: A traveler receives a physical Davao Tourism Card or views the digital interactive business card.
- Step 2: The user scans the QR code with their mobile device camera. The QR code encodes the live Vercel hosting link (defaulting to a project Vercel app URL or the active deployment origin).
- Step 3: The mobile browser instantly loads the Vercel-hosted Davao Tourism portal with zero friction, zero pop-ups, and instant loading.

### Journey 2: Frictionless Category Exploration with Balanced Visuals
- Step 1: Upon landing on the portal, the user experiences a balanced modern layout: an expansive, atmospheric high-resolution hero background paired with generous macro and micro white space.
- Step 2: The user clicks a category tab in the top navigation bar (Tourist Spots, Restaurants, Cafes, or Hotels).
- Step 3: The view filters smoothly to showcase large, vivid imagery accompanied by bold typography, concise descriptions, and key highlights without visual clutter.

### Journey 3: Real-Time Google Maps Navigation
- Step 1: The user discovers an interesting location (e.g., Eden Nature Park or Balik Bukid Farm + Kitchen).
- Step 2: The user clicks the "View on Google Maps" action button or switches to the integrated "Map View".
- Step 3: The app opens Google Maps navigation with exact coordinates and street address, allowing seamless routing and commute planning.

### Journey 4: Card Customization and Export
- Step 1: A tourism host or visitor toggles the "Business Card" mode.
- Step 2: The user views the card front (branding and Davao identity) and clicks to flip to the card back (high-contrast QR code, NFC tap zone, Vercel destination link display, and coordinates).
- Step 3: The user can adjust the target Vercel domain if desired, immediately regenerating the QR code vector.
- Step 4: The user clicks "Print / Export Card" to generate a print-ready 3.5" x 2" card asset.

---

## 3. Scope Boundaries

### Explicit Goals (In Scope)
1. **Dual-Mode Experience:**
   - Interactive 3D flip business card with dynamic, scannable QR code wired to the Vercel hosting URL, plus printable layout.
   - Curated tourism web portal featuring 100% Davao-based establishments and sights.
2. **Balanced Modern Editorial Design:**
   - Careful balance between gallery white space (`#FFFFFF`, `#FAFAFA`) and full-bleed high-resolution background imagery.
   - Full-bleed cinematic backdrops for hero and Kadayawan cultural sections with high-contrast text overlays (using subtle gradient scrims and frosted translucent cards for guaranteed readability).
   - Generous macro-spacing (page gutters, section padding) and micro-spacing (letter-spacing, line-height).
3. **High-Resolution Local Image Assets:**
   - High-definition (1080p+ / 1920x1080) curated photography showcasing Davao City landscapes, Mount Apo, Kadayawan dancers, local dishes, and venue interiors.
   - Curated locally in `assets/images/` to eliminate broken external hotlinks.
4. **Vercel Hosting Architecture:**
   - Pre-configured `vercel.json` with SPA routing rewrites and cache headers for instant zero-configuration deployment to Vercel.
   - Configurable QR code payload defaulting to the production Vercel link (`https://davao-tourism.vercel.app` or `window.location.origin`).
5. **Four Curated Categories (Davao-Only):**
   - **Tourist Spots:** Philippine Eagle Center, Eden Nature Park, Malagos Garden & Chocolate Museum, People's Park, Roxas Night Market, D' Bone Collector Museum, Crocodile Park, Jack's Ridge.
   - **Restaurants:** Balik Bukid Farm + Kitchen, Rekado Filipino Comfort Cuisine, Blue Posts Boiling Crabs, Tiny Kitchen, Yellow Fin Seafood Restaurant, Claude's Le Cafe de Ville, Marina Tuna.
   - **Cafes:** Glasshouse Coffee (Oboza Heritage House), Purge Coffee Roaster, Fourth Street Cafe, Stash Coffee Co., Paramount Coffee.
   - **Hotels:** Dusit Thani Residence Davao, Pearl Farm Beach Resort, Seda Abreeza, The Apo View Hotel, Waterfront Insular Hotel, Hop Inn Hotel Davao.
6. **Google Maps Integration:**
   - Exact latitude and longitude for every location.
   - Direct deep links to Google Maps for turn-by-turn navigation.
   - Interactive visual map explorer with category-coded markers.

### Explicit Anti-Goals (Out of Scope)
1. Locations outside Davao City / Davao Region (no Cebu, Manila, or Palawan destinations).
2. Low-resolution, pixelated, or watermarked imagery.
3. Cluttered banners, intrusive pop-ups, auto-playing video noise, or over-dense sidebars.
4. Multi-user login or payment gateways.

---

## 4. Hard Constraints

1. **Platform and Runtime:**
   - Modern standard Web platform (HTML5, CSS3, ES Modules).
   - Compatible with modern browsers (Chrome, Safari, Firefox, Edge, Mobile Safari, Chrome Android).
   - Zero-configuration deployment compatibility with Vercel (`vercel.json` rewrites).
   - Capable of being previewed via local static server (Deno, Python HTTP server, or Vite).
2. **Performance & Image Quality Budget:**
   - Initial load time under 1.5 seconds on 4G mobile connections.
   - High-resolution images (minimum 1600px width for backdrops, 800px width for cards) optimized for web performance.
   - Lightweight application code footprint.
3. **Visual Accessibility:**
   - WCAG 2.1 AA compliant color contrast (text contrast >= 4.5:1 on light backgrounds, scrimmed overlays on image backdrops).
   - Minimum tap target size of 44x44px for mobile devices.
   - Responsive design adapting from 320px mobile screens up to 4K desktop displays.
4. **Codebase Hygiene:**
   - Zero placeholder comments (`// TODO`, `/* rest of code here */`).
   - Strictly plain text with zero emojis across all code, comments, documentation, and user interfaces.

---

## 5. Success Criteria & Definition of Done

1. **QR Code Functionality:** The QR code renders cleanly at high resolution, is scannable by any standard smartphone camera app, and resolves directly to the Vercel-hosted destination URL.
2. **Visual Balance & Quality:** Editorial design achieves equilibrium between clean white space and high-resolution background imagery with zero visual clutter.
3. **Vercel Readiness:** Project contains `vercel.json` with appropriate routing rules and passes static deployment checks.
4. **100% Davao Verification:** Every single listing belongs to Davao City with verified addresses, coordinates, and local context.
5. **Category Filtering:** Switching between "All", "Tourist Spots", "Restaurants", "Cafes", and "Hotels" updates the listing instantly with smooth transitions and zero page reloads.
6. **Google Maps Navigation:** Every card has a functioning Google Maps button that launches the exact location coordinates.
7. **Automated Verification:** A verification test script validates all location data (coordinates, required fields, image references, image dimensions) and builds cleanly with zero errors.
