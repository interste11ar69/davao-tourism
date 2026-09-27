const validCategories = new Set(['all', 'spot', 'restaurant', 'cafe', 'hotel']);
const validIntents = new Set(['first-time', 'family', 'tonight', 'food', 'stay']);

export function createAppState() {
  const state = {
    activeCategory: 'all', activeIntent: null, searchQuery: '',
    selectedLocationId: null, mobileNavOpen: false
  };
  const listeners = new Set();
  const publish = () => listeners.forEach(listener => listener({ ...state }));
  return {
    getState: () => ({ ...state }),
    subscribe(listener) { listeners.add(listener); listener({ ...state }); return () => listeners.delete(listener); },
    setCategory(category) {
      if (!validCategories.has(category)) return;
      state.activeCategory = category; state.activeIntent = null; state.mobileNavOpen = false; publish();
    },
    setIntent(intent) {
      if (!validIntents.has(intent)) return;
      state.activeIntent = intent; state.activeCategory = 'all'; state.mobileNavOpen = false; publish();
    },
    setSearchQuery(query) { state.searchQuery = String(query ?? ''); publish(); },
    selectLocation(id) { state.selectedLocationId = id; publish(); },
    closeLocationModal() { state.selectedLocationId = null; publish(); },
    toggleMobileNav() { state.mobileNavOpen = !state.mobileNavOpen; publish(); },
    clearFilters() { state.activeCategory = 'all'; state.activeIntent = null; state.searchQuery = ''; publish(); }
  };
}
