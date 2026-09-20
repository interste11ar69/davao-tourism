/**
 * Curated Location Gallery Grid Component.
 * Asymmetric grid: first card in each category view is featured (wider).
 * No pill badges on cards, no decorative left stripe.
 * Empty state names what happened and gives the next action.
 */

import { locations, categories } from "../data/locations.js";
import { buildGoogleMapsUrl } from "../utils/maps.js";

const CATEGORY_BADGE = {
  spot: "badge-spot",
  restaurant: "badge-restaurant",
  cafe: "badge-cafe",
  hotel: "badge-hotel",
};

const CATEGORY_LABEL = {
  spot: "Tourist Spot",
  restaurant: "Restaurant",
  cafe: "Cafe",
  hotel: "Hotel",
};

function buildCard(loc, index) {
  const isFeatured = index === 0;
  const rawCat = loc.category.replace("-spot", "").replace("tourist-", "");
  const badgeClass = CATEGORY_BADGE[rawCat] || "badge-spot";
  const categoryLabel = CATEGORY_LABEL[rawCat] || loc.category;
  const mapsUrl = buildGoogleMapsUrl(loc);

  const hours = loc.hours
    ? `<span class="location-card-hours">${loc.hours}</span>`
    : "";

  return `
    <article
      class="location-card${isFeatured ? " is-featured" : ""}"
      id="card-${loc.id}"
      data-id="${loc.id}"
      aria-label="${loc.name}"
    >
      <div class="location-card-image-wrap">
        <div class="location-card-badge-wrap">
          <span class="badge ${badgeClass}">${categoryLabel}</span>
        </div>
        <img
          src="${loc.image}"
          alt="${loc.name}, Davao City"
          class="location-card-image"
          loading="${isFeatured ? "eager" : "lazy"}"
        />
      </div>

      <div class="location-card-body">
        <span class="location-district">${loc.district}</span>
        <h3 class="location-title">${loc.name}</h3>
        <p class="location-tagline">${loc.tagline}</p>

        <div class="location-card-footer">
          ${hours}
          <div style="display:flex;align-items:center;gap:0.5rem;margin-left:auto;">
            <a
              href="${mapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-maps"
              aria-label="View ${loc.name} on Google Maps (opens new tab)"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Maps
            </a>
            <button
              type="button"
              class="btn btn-primary btn-details"
              data-id="${loc.id}"
              aria-label="View details for ${loc.name}"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

export function renderLocationGrid(container, appState) {
  if (!container) return;

  function update() {
    const state = appState.getState();

    let filtered = locations;
    if (state.activeCategory && state.activeCategory !== "all") {
      filtered = filtered.filter((loc) => loc.category === state.activeCategory);
    }

    const query = state.searchQuery.trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(
        (loc) =>
          loc.name.toLowerCase().includes(query) ||
          loc.district.toLowerCase().includes(query) ||
          loc.tagline.toLowerCase().includes(query) ||
          (loc.description && loc.description.toLowerCase().includes(query)) ||
          (loc.highlights && loc.highlights.some((h) => h.toLowerCase().includes(query)))
      );
    }

    const activeCatObj =
      categories.find((c) => c.id === state.activeCategory) || categories[0];
    const categoryTitle =
      activeCatObj.id === "all"
        ? "All Davao City Destinations"
        : activeCatObj.label;

    let gridContent;
    if (filtered.length > 0) {
      gridContent = filtered.map((loc, i) => buildCard(loc, i)).join("");
    } else {
      const reason = query
        ? `No results for "${state.searchQuery}"`
        : `No ${categoryTitle.toLowerCase()} found`;

      gridContent = `
        <div style="grid-column: 1 / -1;">
          <div class="gallery-empty">
            <p class="gallery-empty-heading">${reason}</p>
            <p class="gallery-empty-body">
              ${
                query
                  ? `Try a different keyword, or clear the search to see all venues.`
                  : `Try selecting a different category from the navigation above.`
              }
            </p>
            <button class="btn btn-outline" id="btn-reset-filters" type="button">
              Clear filters
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <section class="gallery-section" id="gallery-section" aria-label="Davao City Destinations">
        <div class="container">

          <div class="section-header">
            <span class="overline">Verified Davao Only</span>
            <h2>${categoryTitle}</h2>
            <p>${filtered.length} of ${locations.length} venues</p>
          </div>

          <div class="search-wrap">
            <div class="search-field">
              <span class="search-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="search"
                class="search-input"
                id="search-destinations-input"
                value="${state.searchQuery}"
                placeholder="Search Davao spots, food, coffee..."
                aria-label="Search Davao City destinations"
              />
            </div>
          </div>

          <div class="location-grid" role="region" aria-live="polite" aria-label="Location results">
            ${gridContent}
          </div>

        </div>
      </section>
    `;

    // Search
    const searchInput = container.querySelector("#search-destinations-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        appState.setSearchQuery(e.target.value);
      });
    }

    // Reset
    const resetBtn = container.querySelector("#btn-reset-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        appState.setCategory("all");
        appState.setSearchQuery("");
      });
    }

    // Details
    container.querySelectorAll(".btn-details").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        appState.selectLocation(id);
      });
    });
  }

  update();
  appState.subscribe(() => update());
}
