/**
 * Interactive 3D Business Card Component
 * Renders a standard proportional (3.5" x 2.0") flippable card
 * with dynamic vector QR code targeting the user's Vercel deployment,
 * URL configurator, scan simulator, and print-ready layout.
 */

import { generateQRCodeSVG } from "../utils/qr.js";

export function renderBusinessCard(container, appState) {
  if (!container) return;

  function update() {
    const state = appState.getState();
    const qrSvg = generateQRCodeSVG({
      text: state.targetVercelUrl,
      size: 140,
      darkColor: "#0F172A",
      lightColor: "#FFFFFF"
    });

    // Extract display domain from URL
    let displayUrl = state.targetVercelUrl.replace(/^https?:\/\//, "");

    container.innerHTML = `
      <section class="card-experience-section" id="business-card-section" aria-label="Interactive Business Card">
        <div class="container">
          <div class="card-experience-header">
            <span class="badge badge-restaurant">PHYSICAL-TO-DIGITAL BRIDGE</span>
            <h2>The Davao Tourism Business Card</h2>
            <p>Scan the QR code with your smartphone camera to access this portal on mobile, or interact with the 3D card below.</p>
          </div>

          <!-- 3D Card Scene -->
          <div class="card-scene">
            <div class="card-container ${state.cardFlipped ? "is-flipped" : ""}" id="interactive-card" role="region" aria-label="3D Flippable Business Card. Click or press space to flip.">
              <div class="card-inner">
                
                <!-- FRONT FACE -->
                <div class="card-face card-front">
                  <div class="card-front-top">
                    <span class="card-brand-tag">DAVAO TOURISM COLLECTIVE</span>
                    <div class="card-front-chip">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                        <line x1="2" y1="10" x2="22" y2="10"></line>
                      </svg>
                      <span>SMART PASS</span>
                    </div>
                  </div>

                  <div class="card-front-center">
                    <h3 class="card-front-title">MADAYAW DAVAO</h3>
                    <div class="card-front-subtitle">Crown Jewel of Mindanao | Official Destination Pass</div>
                  </div>

                  <div class="card-front-bottom">
                    <span class="card-front-coords">7.0731 N, 125.6128 E</span>
                    <span class="card-front-hint">Click card to flip for QR</span>
                  </div>
                </div>

                <!-- BACK FACE -->
                <div class="card-face card-back">
                  <div class="card-back-content">
                    <div class="card-qr-box" title="Scan with your phone to open portal">
                      ${qrSvg}
                    </div>
                    <div class="card-back-details">
                      <span class="card-back-tag">MOBILE WEB DESTINATION</span>
                      <h4 class="card-back-title">Scan to Explore Davao</h4>
                      <div class="card-back-url">${displayUrl}</div>
                      <p class="card-back-instructions">
                        Point your smartphone camera at the QR code to instantly launch the Davao City curated guide.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- Card Controls -->
          <div class="card-controls">
            <button class="btn btn-outline" id="btn-flip-card" aria-label="Flip card to opposite side">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>${state.cardFlipped ? "Show Front Side" : "Flip Card (Show QR Code)"}</span>
            </button>

            <button class="btn btn-primary" id="btn-enter-portal" aria-label="Enter curated tourism portal">
              <span>Enter Tourism Portal</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button class="btn btn-outline" id="btn-print-card" aria-label="Print physical business card">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print / Export Card</span>
            </button>
          </div>

          <!-- Vercel URL Customization Box -->
          <div class="vercel-config-box">
            <label class="vercel-config-label" for="vercel-url-input">
              <span>Configured Vercel Destination URL</span>
              <span class="vercel-config-status">LIVE ENCODED IN QR</span>
            </label>
            <div class="vercel-config-input-group">
              <input 
                type="text" 
                id="vercel-url-input" 
                class="vercel-config-input" 
                value="${state.targetVercelUrl}" 
                placeholder="https://your-project.vercel.app" 
                aria-label="Target Vercel deployment URL"
              />
              <button class="btn btn-accent" id="btn-update-vercel-url" type="button">
                Update QR
              </button>
            </div>
          </div>

        </div>
      </section>
    `;

    // Bind Event Listeners
    const cardElement = container.querySelector("#interactive-card");
    if (cardElement) {
      cardElement.addEventListener("click", () => {
        appState.toggleCardFlip();
      });
    }

    const flipBtn = container.querySelector("#btn-flip-card");
    if (flipBtn) {
      flipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        appState.toggleCardFlip();
      });
    }

    const enterBtn = container.querySelector("#btn-enter-portal");
    if (enterBtn) {
      enterBtn.addEventListener("click", () => {
        appState.setView("portal");
        const hero = document.getElementById("hero-section");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const printBtn = container.querySelector("#btn-print-card");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    const updateUrlBtn = container.querySelector("#btn-update-vercel-url");
    const urlInput = container.querySelector("#vercel-url-input");
    if (updateUrlBtn && urlInput) {
      const handleUrlUpdate = () => {
        const val = urlInput.value.trim();
        if (val) {
          appState.setVercelUrl(val);
        }
      };
      updateUrlBtn.addEventListener("click", handleUrlUpdate);
      urlInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleUrlUpdate();
        }
      });
    }
  }

  // Subscribe to state changes
  appState.subscribe(() => {
    update();
  });
}
