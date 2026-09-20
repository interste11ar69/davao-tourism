/**
 * Davao Tourism Application Bootstrap
 * Orchestrates component mounting, reactive state binding,
 * view transitions, and deployment environment detection.
 */

import { createAppState } from "./state/app-state.js";
import { renderNavbar } from "./components/navbar.js";
import { renderBusinessCard } from "./components/business-card.js";
import { renderHero } from "./components/hero.js";
import { renderLocationGrid } from "./components/location-grid.js";
import { renderMapExplorer } from "./components/map-explorer.js";
import { renderLocationModal } from "./components/modal-detail.js";

document.addEventListener("DOMContentLoaded", () => {
  // Automatically detect live hosting domain (e.g. Vercel deployment URL)
  let initialVercelUrl = "https://davao-tourism.vercel.app";
  if (
    typeof window !== "undefined" &&
    window.location &&
    window.location.origin &&
    !window.location.origin.startsWith("file://") &&
    !window.location.origin.includes("localhost") &&
    !window.location.origin.includes("127.0.0.1")
  ) {
    initialVercelUrl = window.location.origin;
  }

  // Initialize Application State
  const appState = createAppState({
    targetVercelUrl: initialVercelUrl
  });

  // Mount Components
  const navbarMount = document.getElementById("navbar-mount");
  const heroMount = document.getElementById("hero-mount");
  const cardMount = document.getElementById("business-card-mount");
  const galleryMount = document.getElementById("gallery-mount");
  const mapMount = document.getElementById("map-mount");
  const modalMount = document.getElementById("modal-mount");
  const footerMount = document.getElementById("footer-mount");

  if (navbarMount) renderNavbar(navbarMount, appState);
  if (heroMount) renderHero(heroMount, appState);
  if (cardMount) renderBusinessCard(cardMount, appState);
  if (galleryMount) renderLocationGrid(galleryMount, appState);
  if (mapMount) renderMapExplorer(mapMount, appState);
  if (modalMount) renderLocationModal(modalMount, appState);

  // Render Footer Content
  if (footerMount) {
    footerMount.innerHTML = `
      <div class="container">
        <div class="footer-inner">

          <div class="footer-brand">
            <h3>Madayaw <span style="color:var(--gold)">Davao</span></h3>
            <p>
              A curated guide to Davao City's verified tourist spots, restaurants, specialty cafes, and hotels. Built for the QR business card experience.
            </p>
          </div>

            <div class="footer-links-group">
              <a href="#gallery-section">All Destinations</a>
              <a href="card.html">Print Physical Cards (Driver Pass)</a>
              <a href="#map-section">Map View</a>
              <a href="#kadayawan-section">Kadayawan</a>
            </div>
            <div class="footer-links-group">
              <span style="font-size:0.72rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.35);display:block;margin-bottom:0.5rem;">Davao Hotlines</span>
              <span>Emergency: 911</span>
              <span>Tourism: (082) 222-1956</span>
              <span>Airport: Francisco Bangoy (DVO)</span>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          Madayaw Davao. 100% Davao City verified destinations.
        </div>
      </div>
    `;
  }

  // Handle Initial URL Hash Routing (e.g. #card, #spot-id)
  const handleHashRouting = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "card" || hash === "business-card-section") {
      const cardSec = document.getElementById("business-card-section");
      if (cardSec) cardSec.scrollIntoView({ behavior: "smooth" });
    } else if (hash.startsWith("spot-")) {
      const locId = hash.replace("spot-", "");
      appState.selectLocation(locId);
    }
  };

  window.addEventListener("hashchange", handleHashRouting);
  handleHashRouting();

  console.log("Madayaw Davao application successfully initialized.");
});
