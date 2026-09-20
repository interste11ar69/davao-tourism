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
            <button class="btn-hero-ghost" id="hero-cta-card">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              QR Business Card
            </button>
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

  const cardBtn = container.querySelector("#hero-cta-card");
  if (cardBtn) {
    cardBtn.addEventListener("click", () => {
      const cardSection = document.getElementById("business-card-section");
      if (cardSection) cardSection.scrollIntoView({ behavior: "smooth" });
    });
  }
}
