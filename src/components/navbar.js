/**
 * Navigation Bar Component.
 * Underline-tab category navigation. Solid white navbar, no glassmorphism.
 * Scroll-aware shadow via IntersectionObserver on hero.
 */

import { categories } from "../data/locations.js";

export function renderNavbar(container, appState) {
  if (!container) return;

  function update() {
    const state = appState.getState();

    const tabsHtml = categories
      .map((cat) => {
        const isActive = state.activeCategory === cat.id;
        return `
          <button
            class="filter-tab ${isActive ? "is-active" : ""}"
            data-category="${cat.id}"
            type="button"
            aria-pressed="${isActive}"
            aria-label="Show ${cat.label}"
          >
            ${cat.label}
          </button>
        `;
      })
      .join("");

    container.innerHTML = `
      <header class="app-header" id="app-header" role="banner">
        <div class="container">
          <div class="navbar-inner">

            <a href="#hero-section" class="brand-logo" id="brand-logo-link" aria-label="Madayaw Davao home">
              <span class="brand-word">Madayaw</span>
              <span class="brand-word brand-word-accent">Davao</span>
            </a>

            <nav class="nav-filters" role="navigation" aria-label="Destination categories">
              ${tabsHtml}
            </nav>

            <div class="navbar-actions">
              <a href="#business-card-section" class="btn btn-outline" id="nav-btn-card" aria-label="View QR Business Card">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                QR Card
              </a>

              <a href="#map-section" class="btn btn-text" id="nav-btn-map" aria-label="View map">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                Map
              </a>
            </div>

          </div>
        </div>
      </header>
    `;

    const header = container.querySelector("#app-header");

    // Add scroll-aware shadow without glassmorphism
    const heroEl = document.getElementById("hero-section");
    if (heroEl && header) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          header.classList.toggle("is-scrolled", !entry.isIntersecting);
        },
        { rootMargin: "-66px 0px 0px 0px" }
      );
      obs.observe(heroEl);
    }

    // Category tab events
    container.querySelectorAll(".filter-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-category");
        appState.setCategory(cat);
        const gallery = document.getElementById("gallery-section");
        if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
      });
    });

    // Brand logo
    const logo = container.querySelector("#brand-logo-link");
    if (logo) {
      logo.addEventListener("click", (e) => {
        e.preventDefault();
        appState.setCategory("all");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // QR Card
    const cardBtn = container.querySelector("#nav-btn-card");
    if (cardBtn) {
      cardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const cardSection = document.getElementById("business-card-section");
        if (cardSection) cardSection.scrollIntoView({ behavior: "smooth" });
      });
    }

    // Map
    const mapBtn = container.querySelector("#nav-btn-map");
    if (mapBtn) {
      mapBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const mapSection = document.getElementById("map-section");
        if (mapSection) mapSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  update();
  appState.subscribe(() => update());
}
