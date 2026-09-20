/**
 * Interactive Map Explorer Component
 * Visualizes verified Davao City locations on an interactive spatial canvas
 * with category-coded pins, distance calculations from Davao City Hall,
 * and direct Google Maps navigation routing.
 */

import { locations } from "../data/locations.js";
import { buildGoogleMapsUrl, calculateDistanceKm, DAVAO_CITY_CENTER, formatCoordinates } from "../utils/maps.js";

export function renderMapExplorer(container, appState) {
  if (!container) return;

  // Selected map pin location
  let activeMapLocation = locations[0];

  function update() {
    const state = appState.getState();

    // Filter locations for map list if a category is selected
    let displayLocations = locations;
    if (state.activeCategory && state.activeCategory !== "all") {
      displayLocations = displayLocations.filter((l) => l.category === state.activeCategory);
    }
    if (!displayLocations.includes(activeMapLocation) && displayLocations.length > 0) {
      activeMapLocation = displayLocations[0];
    }

    // Davao Geographic Bounds for Proportional Canvas Plotting
    // Lat: 7.01 (Toril South) to 7.21 (Malagos North)
    // Lng: 125.38 (Mount Apo foothills) to 125.73 (Samal Island East)
    const minLat = 7.01;
    const maxLat = 7.21;
    const minLng = 125.38;
    const maxLng = 125.73;

    function getPinCoords(lat, lng) {
      const x = ((lng - minLng) / (maxLng - minLng)) * 100;
      // Invert Y because SVG/CSS Y goes downwards, while latitude goes upwards
      const y = 100 - ((lat - minLat) / (maxLat - minLat)) * 100;
      return {
        x: Math.max(5, Math.min(95, x)),
        y: Math.max(5, Math.min(95, y))
      };
    }

    // Generate Pin Markers
    const pinsHtml = displayLocations
      .map((loc) => {
        const { x, y } = getPinCoords(loc.coordinates.lat, loc.coordinates.lng);
        const isSelected = activeMapLocation && activeMapLocation.id === loc.id;
        const color =
          loc.category === "tourist-spot"
            ? "#0F766E"
            : loc.category === "restaurant"
            ? "#D97706"
            : loc.category === "cafe"
            ? "#78350F"
            : "#1D4ED8";

        return `
          <button 
            type="button" 
            class="map-pin-btn ${isSelected ? "is-active-pin" : ""}" 
            data-id="${loc.id}"
            style="position: absolute; left: ${x}%; top: ${y}%; transform: translate(-50%, -100%); z-index: ${isSelected ? 30 : 10};"
            aria-label="${loc.name} marker"
          >
            <svg width="${isSelected ? "36" : "28"}" height="${isSelected ? "36" : "28"}" viewBox="0 0 24 24" fill="${color}" stroke="#FFFFFF" stroke-width="1.5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5" fill="#FFFFFF"/>
            </svg>
          </button>
        `;
      })
      .join("");

    // Generate Sidebar Items with Distance from City Center
    const sidebarItemsHtml = displayLocations
      .map((loc) => {
        const isSelected = activeMapLocation && activeMapLocation.id === loc.id;
        const distKm = calculateDistanceKm(
          DAVAO_CITY_CENTER.lat,
          DAVAO_CITY_CENTER.lng,
          loc.coordinates.lat,
          loc.coordinates.lng
        );

        return `
          <div 
            class="map-list-item ${isSelected ? "is-selected" : ""}" 
            data-id="${loc.id}"
            role="button"
            tabindex="0"
            aria-selected="${isSelected}"
          >
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <span class="map-list-item-title">${loc.name}</span>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--accent-gold);">${distKm} km</span>
            </div>
            <span class="map-list-item-district">${loc.district}</span>
          </div>
        `;
      })
      .join("");

    // Active Pin Card Overlay
    const activePin = activeMapLocation || locations[0];
    const activeMapsUrl = buildGoogleMapsUrl(activePin);
    const activeCoordsFormatted = formatCoordinates(activePin.coordinates.lat, activePin.coordinates.lng);
    const activeDist = calculateDistanceKm(
      DAVAO_CITY_CENTER.lat,
      DAVAO_CITY_CENTER.lng,
      activePin.coordinates.lat,
      activePin.coordinates.lng
    );

    container.innerHTML = `
      <section class="map-section" id="map-section" aria-label="Davao City Geographic Explorer">
        <div class="container">
          
          <div style="text-align: center; max-width: 680px; margin: 0 auto var(--space-xl) auto;">
            <span class="badge badge-spot" style="margin-bottom: var(--space-xs);">GEOGRAPHIC EXPLORER</span>
            <h2>Locate Destinations on the Map</h2>
            <p>Every destination is 100% Davao City verified with exact GPS coordinates and direct Google Maps navigation routing.</p>
          </div>

          <div class="map-layout-grid">
            
            <!-- Map Destination Sidebar -->
            <div class="map-sidebar">
              <div class="map-sidebar-header">
                <h4>Davao Venues</h4>
                <span style="font-size: 0.78rem; color: var(--text-muted);">${displayLocations.length} locations</span>
              </div>
              <div class="map-sidebar-list">
                ${sidebarItemsHtml}
              </div>
            </div>

            <!-- Spatial Map Visualizer Canvas -->
            <div class="map-canvas-container">
              
              <!-- Stylized Vector Map Background (Topography & Davao Gulf) -->
              <svg class="map-viewport" viewBox="0 0 1000 600" preserveAspectRatio="none" style="width: 100%; height: 100%; background: #F8FAFC;">
                <defs>
                  <linearGradient id="gulf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#E0F2FE" />
                    <stop offset="100%" stop-color="#BAE6FD" />
                  </linearGradient>
                </defs>
                
                <!-- Davao Gulf Water Body -->
                <path d="M 620 600 Q 640 400 750 280 T 1000 200 L 1000 600 Z" fill="url(#gulf-grad)" />
                <text x="820" y="450" font-family="sans-serif" font-size="18" font-weight="700" fill="#0284C7" fill-opacity="0.5" letter-spacing="3">DAVAO GULF</text>
                
                <!-- Samal Island Contour -->
                <path d="M 880 250 Q 940 320 900 420 Q 860 380 880 250 Z" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5" />
                <text x="860" y="340" font-family="sans-serif" font-size="12" font-weight="600" fill="#64748B">Samal Island</text>

                <!-- City Center Landmark Marker -->
                <circle cx="600" cy="380" r="6" fill="#D97706" />
                <circle cx="600" cy="380" r="14" fill="none" stroke="#D97706" stroke-width="1.5" stroke-opacity="0.4" />
                <text x="618" y="384" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F172A">Davao City Hall (Center)</text>

                <!-- Mount Apo Foothills Region -->
                <path d="M 0 0 L 260 0 L 180 600 L 0 600 Z" fill="#F1F5F9" fill-opacity="0.8" />
                <text x="30" y="60" font-family="sans-serif" font-size="14" font-weight="700" fill="#64748B" letter-spacing="2">MOUNT APO REGION</text>
              </svg>

              <!-- Placed Interactive Pins -->
              <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
                ${pinsHtml}
              </div>

              <!-- Floating Active Pin Card Overlay -->
              <div class="map-pin-card-overlay" id="map-pin-card">
                <div class="map-pin-card-top">
                  <div>
                    <span class="badge badge-restaurant" style="font-size: 0.68rem; padding: 0.2rem 0.5rem;">
                      ${activePin.category.replace("-", " ").toUpperCase()}
                    </span>
                    <h3 class="map-pin-card-title">${activePin.name}</h3>
                  </div>
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-gold); white-space: nowrap;">
                    ${activeDist} km from City Hall
                  </span>
                </div>

                <div class="map-pin-card-address">${activePin.address}</div>
                <div style="font-size: 0.75rem; font-family: monospace; color: var(--text-muted);">${activeCoordsFormatted}</div>

                <div class="map-pin-card-actions" style="margin-top: 0.25rem;">
                  <a 
                    href="${activeMapsUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-primary btn-sm"
                    style="padding: 0.5rem 1rem; font-size: 0.82rem;"
                    aria-label="Navigate to ${activePin.name} in Google Maps (opens in new tab)"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Open in Google Maps</span>
                  </a>

                  <button 
                    type="button" 
                    class="btn btn-outline" 
                    id="btn-map-card-details"
                    style="padding: 0.5rem 0.9rem; font-size: 0.82rem;"
                    data-id="${activePin.id}"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    `;

    // Bind Pin Click Handlers
    const pinButtons = container.querySelectorAll(".map-pin-btn");
    pinButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const found = locations.find((l) => l.id === id);
        if (found) {
          activeMapLocation = found;
          update();
        }
      });
    });

    // Bind Sidebar Item Click Handlers
    const listItems = container.querySelectorAll(".map-list-item");
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        const found = locations.find((l) => l.id === id);
        if (found) {
          activeMapLocation = found;
          update();
        }
      });
    });

    // Bind Details Button from Map Card
    const detailsBtn = container.querySelector("#btn-map-card-details");
    if (detailsBtn) {
      detailsBtn.addEventListener("click", () => {
        const id = detailsBtn.getAttribute("data-id");
        appState.selectLocation(id);
      });
    }
  }

  appState.subscribe(() => {
    update();
  });
}
