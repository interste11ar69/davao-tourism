/**
 * Location Detail Modal Component.
 * Clean, readable detail view when a user opens a destination.
 */

import { locations } from "../data/locations.js";
import { buildGoogleMapsUrl, buildGoogleDirectionsUrl, formatCoordinates } from "../utils/maps.js";

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

export function renderLocationModal(container, appState) {
  if (!container) return;

  function update() {
    const state = appState.getState();
    const selectedId = state.selectedLocationId;

    if (!selectedId) {
      container.innerHTML = `
        <div class="modal-overlay" id="location-modal-overlay" aria-hidden="true"></div>
      `;
      return;
    }

    const loc = locations.find((l) => l.id === selectedId);
    if (!loc) {
      container.innerHTML = `
        <div class="modal-overlay" id="location-modal-overlay" aria-hidden="true"></div>
      `;
      return;
    }

    const mapsUrl = buildGoogleMapsUrl(loc);
    const directionsUrl = buildGoogleDirectionsUrl(loc.coordinates.lat, loc.coordinates.lng);
    const coordsFormatted = formatCoordinates(loc.coordinates.lat, loc.coordinates.lng);
    const badgeClass = `badge-${loc.category.replace("-spot", "")}`;
    const categoryLabel = loc.category.replace("-", " ").toUpperCase();

    const highlightsListHtml = loc.highlights
      .map(
        (h) => `
        <li class="location-highlight-item" style="font-size: 0.9rem; color: var(--text-secondary);">
          <span>${h}</span>
        </li>
      `
      )
      .join("");

    const rawCatModal = loc.category.replace("-spot", "").replace("tourist-", "");
    const badgeClassModal = CATEGORY_BADGE[rawCatModal] || "badge-spot";
    const catLabelModal = CATEGORY_LABEL[rawCatModal] || loc.category;

    container.innerHTML = `
      <div class="modal-overlay is-open" id="location-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-content-box" id="modal-box">

          <button type="button" class="modal-close-btn" id="modal-close-btn" aria-label="Close dialog">
            &times;
          </button>

          <div class="modal-image-wrap">
            <img src="${loc.image}" alt="${loc.name}, Davao City" class="modal-image" />
          </div>

          <div class="modal-body">

            <div>
              <span class="badge ${badgeClassModal}" style="margin-bottom:0.75rem;">${catLabelModal}</span>
              <p class="location-district">${loc.district}</p>
              <h2 class="modal-title" id="modal-title">${loc.name}</h2>
              <p class="modal-meta">
                <span>${loc.address}</span>
                ${loc.openingHours ? `<span>${loc.openingHours}</span>` : ""}
              </p>
            </div>

            <p style="font-size: 0.95rem; line-height: 1.75; color: var(--ink-soft);">
              ${loc.description}
            </p>

            ${loc.bestFor ? `<p style="font-size:0.85rem;color:var(--ink-muted);">Best for: ${loc.bestFor}</p>` : ""}

            <div class="modal-actions">
              <a
                href="${mapsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
                aria-label="Open ${loc.name} in Google Maps"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Google Maps
              </a>

              <a
                href="${directionsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline"
                aria-label="Get directions to ${loc.name}"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                Directions
              </a>

              <button type="button" class="btn btn-text" id="modal-close-action-btn">
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    `;

    // Event Listeners for closing modal
    const overlay = container.querySelector("#location-modal-overlay");
    const closeBtn = container.querySelector("#modal-close-btn");
    const closeActionBtn = container.querySelector("#modal-close-action-btn");
    const modalBox = container.querySelector("#modal-box");

    const closeModal = () => appState.closeLocationModal();

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (closeActionBtn) closeActionBtn.addEventListener("click", closeModal);
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeModal();
        }
      });
    }

    // Escape key closes modal
    const keyHandler = (e) => {
      if (e.key === "Escape") {
        closeModal();
        window.removeEventListener("keydown", keyHandler);
      }
    };
    window.addEventListener("keydown", keyHandler);
  }

  appState.subscribe(() => {
    update();
  });
}
