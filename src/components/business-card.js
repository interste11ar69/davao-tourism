/**
 * Interactive 3D Business Card Component
 * Editorial presentation of the official Davao Tourism Smart Pass (3.5" x 2.0" ratio).
 * Features real-time vector QR generation, 3D flip interaction, print stylesheet,
 * and clean collapsible URL destination configuration.
 */

import { generateQRCodeSVG } from "../utils/qr.js";

export function renderBusinessCard(container, appState) {
  if (!container) return;

  let isUrlDrawerOpen = false;

  function update() {
    const state = appState.getState();
    const qrSvg = generateQRCodeSVG({
      text: state.targetVercelUrl,
      size: 130,
      darkColor: "#0D1117",
      lightColor: "#FFFFFF"
    });

    let displayUrl = state.targetVercelUrl.replace(/^https?:\/\//, "");

    container.innerHTML = `
      <section class="card-experience-section" id="business-card-section" aria-label="Official Davao Visitor Card">
        <div class="container">

          <div class="card-stage-layout">

            <!-- Left: Editorial Narrative & Actions -->
            <div class="card-stage-info">
              <span class="overline">Official Smart Pass</span>
              <h2 class="card-stage-title">
                The Davao <em>Visitor Pass</em>
              </h2>
              <p class="card-stage-desc">
                Carry the King City of the South in your pocket. Scan the card with your smartphone camera to access this complete directory on the go, or print it as a physical keepsake.
              </p>

              <ul class="card-feature-list">
                <li class="card-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Instant access to 27 curated Davao destinations</span>
                </li>
                <li class="card-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Offline-ready vector QR code for mobile visitors</span>
                </li>
                <li class="card-feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Standard 3.5" x 2.0" print format with bleed alignment</span>
                </li>
              </ul>

              <div class="card-actions-row">
                <button class="btn btn-primary" id="btn-flip-card" type="button" aria-label="Flip card to opposite side">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                  </svg>
                  <span>${state.cardFlipped ? "View Front Face" : "Flip to View QR Code"}</span>
                </button>

                <button class="btn btn-outline" id="btn-print-card" type="button" aria-label="Print business card">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  <span>Print Card</span>
                </button>
              </div>

              <!-- Unobtrusive Destination URL Customizer -->
              <div>
                <button class="card-url-toggle" id="btn-toggle-url-config" type="button" aria-expanded="${isUrlDrawerOpen}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <span>${isUrlDrawerOpen ? "Hide link settings" : "Customize encoded link"}</span>
                </button>

                <div class="card-url-drawer ${isUrlDrawerOpen ? "" : "is-hidden"}" id="url-drawer">
                  <label for="vercel-url-input">Target Web Address</label>
                  <div class="card-url-input-group">
                    <input
                      type="text"
                      id="vercel-url-input"
                      class="card-url-input"
                      value="${state.targetVercelUrl}"
                      placeholder="https://your-domain.vercel.app"
                    />
                    <button class="btn btn-gold" id="btn-update-vercel-url" type="button" style="padding:0.5rem 1rem;font-size:0.82rem;">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right: 3D Card Stage Canvas -->
            <div class="card-stage-canvas">
              <div class="card-scene">
                <div
                  class="card-container ${state.cardFlipped ? "is-flipped" : ""}"
                  id="interactive-card"
                  tabindex="0"
                  role="button"
                  aria-label="3D Flippable Business Card. Click or press Enter to flip."
                >
                  <div class="card-inner">

                    <!-- FRONT FACE -->
                    <div class="card-face card-front">
                      <div class="card-front-pattern" aria-hidden="true"></div>

                      <div class="card-front-top">
                        <span class="card-front-brand">Madayaw Davao</span>
                        <div class="card-chip">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                            <line x1="2" y1="10" x2="22" y2="10"></line>
                          </svg>
                          <span>VISITOR PASS</span>
                        </div>
                      </div>

                      <div class="card-front-center">
                        <h3 class="card-front-title">DAVAO CITY</h3>
                        <div class="card-front-subtitle">Crown Jewel of Mindanao</div>
                      </div>

                      <div class="card-front-bottom">
                        <span class="card-front-coords">7.0731 N, 125.6128 E</span>
                        <span class="card-flip-prompt">
                          <span>Flip for QR</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <!-- BACK FACE -->
                    <div class="card-face card-back">
                      <div class="card-back-grid">
                        <div class="card-qr-box" title="Scan with camera to launch guide">
                          ${qrSvg}
                        </div>
                        <div class="card-back-info">
                          <span class="card-back-overline">Mobile Gateway</span>
                          <h4 class="card-back-title">Scan to Explore</h4>
                          <div class="card-back-domain">${displayUrl}</div>
                          <p class="card-back-caption">
                            Open with your camera to access 27 verified spots, cafes, dining, and maps.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="card-canvas-hint" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 15l6 6m-6-6v4.5m0-4.5h4.5M9 9L3 3m6 6V4.5M9 9H4.5"></path>
                  </svg>
                  <span>Click card to inspect both sides</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    `;

    // Event Bindings
    const cardElement = container.querySelector("#interactive-card");
    if (cardElement) {
      cardElement.addEventListener("click", () => {
        appState.toggleCardFlip();
      });
      cardElement.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          appState.toggleCardFlip();
        }
      });
    }

    const flipBtn = container.querySelector("#btn-flip-card");
    if (flipBtn) {
      flipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        appState.toggleCardFlip();
      });
    }

    const printBtn = container.querySelector("#btn-print-card");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    const urlToggleBtn = container.querySelector("#btn-toggle-url-config");
    if (urlToggleBtn) {
      urlToggleBtn.addEventListener("click", () => {
        isUrlDrawerOpen = !isUrlDrawerOpen;
        const drawer = container.querySelector("#url-drawer");
        if (drawer) {
          drawer.classList.toggle("is-hidden", !isUrlDrawerOpen);
          urlToggleBtn.setAttribute("aria-expanded", isUrlDrawerOpen);
          const span = urlToggleBtn.querySelector("span");
          if (span) {
            span.textContent = isUrlDrawerOpen ? "Hide link settings" : "Customize encoded link";
          }
        }
      });
    }

    const updateUrlBtn = container.querySelector("#btn-update-vercel-url");
    const urlInput = container.querySelector("#vercel-url-input");
    if (updateUrlBtn && urlInput) {
      const handleUrlUpdate = () => {
        const val = urlInput.value.trim();
        if (val) {
          appState.setVercelUrl(val);
          isUrlDrawerOpen = false;
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

  update();
  appState.subscribe(() => update());
}
