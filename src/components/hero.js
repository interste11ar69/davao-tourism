/**
 * Hero Section and Davao Heritage Spotlight Component.
 * Editorial left-anchored layout. No fake stat numbers.
 * Kadayawan section: text on photography, no frosted card.
 */

import { davaoIcons } from "../data/locations.js";

export function renderHero(container, appState) {
  if (!container) return;

  const iconsHtml = davaoIcons
    .map(
      (icon) => `
      <div class="kadayawan-item">
        <span class="kadayawan-item-sub">${icon.subtitle}</span>
        <h4>${icon.name}</h4>
        <p>${icon.description}</p>
      </div>
    `
    )
    .join("");

  container.innerHTML = `
    <section class="hero-section" id="hero-section" aria-label="Davao City Tourism">
      <div class="hero-scrim" aria-hidden="true"></div>

      <div class="container">
        <div class="hero-content">

          <span class="overline hero-overline">Davao City, Mindanao</span>

          <h1 class="hero-title">
            The Crown Jewel<br>of <em>Mindanao</em>
          </h1>

          <p class="hero-lead">
            From Mount Apo's summit to the coral gardens of Samal Island. Kadayawan's living culture, single-origin coffee, and tuna fresh from the Gulf. This is Davao.
          </p>

          <div class="hero-cta-row">
            <a href="#gallery-section" class="btn btn-gold" id="hero-cta-explore">
              Browse 27 Venues
            </a>
            <a href="#map-section" class="btn-hero-ghost" id="hero-cta-map">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              Interactive Map
            </a>
          </div>

        </div>
      </div>
    </section>

    <section class="kadayawan-section" id="kadayawan-section" aria-label="Kadayawan Cultural Heritage">
      <div class="kadayawan-scrim" aria-hidden="true"></div>

      <div class="container">
        <div class="kadayawan-inner">
          <div class="kadayawan-header">
            <span class="overline">Annual Festival</span>
            <h2>Kadayawan:<br>Thanksgiving of a City</h2>
            <p>
              From the Dabawenyo greeting "Madayaw" (precious, good, beautiful). Each August, 11 indigenous and Moro tribes unite in street dancing, floral floats, and harvest celebration.
            </p>
          </div>

          <div class="kadayawan-grid">
            ${iconsHtml}
          </div>
        </div>
      </div>
    </section>
  `;

  const exploreBtn = container.querySelector("#hero-cta-explore");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const gallery = document.getElementById("gallery-section");
      if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
    });
  }

  const mapBtn = container.querySelector("#hero-cta-map");
  if (mapBtn) {
    mapBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const mapSection = document.getElementById("map-section");
      if (mapSection) mapSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}
