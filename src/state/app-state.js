/**
 * Reactive Application State Store
 * Manages view switching, category filtering, search querying,
 * location modals, 3D card flip status, and dynamic Vercel target URL.
 */

export function createAppState(initialState = {}) {
  let state = {
    activeView: "portal", // "portal" | "card"
    activeCategory: "all", // "all" | "tourist-spot" | "restaurant" | "cafe" | "hotel"
    searchQuery: "",
    selectedLocationId: null,
    cardFlipped: false,
    targetVercelUrl: "https://davao-tourism.vercel.app",
    mobileNavOpen: false,
    ...initialState
  };

  const listeners = new Set();

  function notify() {
    for (const listener of listeners) {
      try {
        listener({ ...state });
      } catch (err) {
        console.error("State listener error:", err);
      }
    }
  }

  return {
    getState() {
      return { ...state };
    },

    subscribe(listener) {
      listeners.add(listener);
      // Immediately call with current state
      listener({ ...state });
      return () => listeners.delete(listener);
    },

    setView(view) {
      if (view !== "portal" && view !== "card") return;
      state.activeView = view;
      state.mobileNavOpen = false;
      notify();
    },

    setCategory(category) {
      state.activeCategory = category;
      state.mobileNavOpen = false;
      notify();
    },

    setSearchQuery(query) {
      state.searchQuery = typeof query === "string" ? query : "";
      notify();
    },

    selectLocation(locationId) {
      state.selectedLocationId = locationId;
      notify();
    },

    closeLocationModal() {
      state.selectedLocationId = null;
      notify();
    },

    toggleCardFlip(forceState) {
      state.cardFlipped = forceState !== undefined ? Boolean(forceState) : !state.cardFlipped;
      notify();
    },

    setVercelUrl(url) {
      if (typeof url === "string" && url.trim().length > 0) {
        let cleanUrl = url.trim();
        if (!cleanUrl.startsWith("http://") && !cleanUrl.startsWith("https://")) {
          cleanUrl = "https://" + cleanUrl;
        }
        state.targetVercelUrl = cleanUrl;
        notify();
      }
    },

    toggleMobileNav(forceState) {
      state.mobileNavOpen = forceState !== undefined ? Boolean(forceState) : !state.mobileNavOpen;
      notify();
    }
  };
}
