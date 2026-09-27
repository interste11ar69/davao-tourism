import { locations, categories } from '../data/locations.js';
import { buildGoogleMapsUrl } from '../utils/maps.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const areaLabel = { downtown:'Downtown stop', south:'South Davao', north:'North Davao', uplands:'Longer upland outing' };
const intentLabel = { 'first-time':'First time in Davao', family:'With the family', tonight:'Going out tonight', food:'Looking for food', stay:'Need a place to stay' };

function card(place, index) {
  const image = `<div class="place-visual"><img src="${escapeHtml(place.image.path)}" alt="${escapeHtml(place.image.alt)}" loading="lazy">${place.image.caption ? `<span class="place-caption">${escapeHtml(place.image.caption)}</span>` : ''}</div>`;
  return `<article class="place-card ${index === 0 ? 'featured' : ''}" data-category="${place.category}">
    ${image}<div class="place-content"><span class="place-meta">${escapeHtml(place.district)} / ${areaLabel[place.area]}</span>
    <h3>${escapeHtml(place.name)}</h3><p>${escapeHtml(place.description)}</p>
    <div class="place-actions"><button type="button" data-detail="${escapeHtml(place.id)}">Why go here?</button><a href="${buildGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHtml(place.name)} in Google Maps">Open in Maps ↗</a></div></div></article>`;
}

export function renderLocationGrid(container, appState) {
  if (!container) return;
  container.innerHTML = `<section class="places" id="places" aria-labelledby="places-title"><div class="shell">
    <div class="places-head"><div><p class="section-kicker">The local shortlist</p><h2 id="places-title">Pick your Davao.</h2></div><p class="places-intro">A few good answers to the questions visitors ask. Check current hours and availability before setting out.</p></div>
    <div class="filter-bar" role="group" aria-label="Filter by type">${categories.map(c => `<button class="filter-button" type="button" data-category="${c.id}" aria-pressed="false">${c.label}</button>`).join('')}</div>
    <div class="search-row"><input id="place-search" type="search" placeholder="Search a place or neighborhood" aria-label="Search places"><p id="result-count" aria-live="polite"></p></div>
    <div class="place-grid" id="place-grid"></div>
  </div></section>`;
  const grid = container.querySelector('#place-grid');
  const input = container.querySelector('#place-search');
  const count = container.querySelector('#result-count');
  const heading = container.querySelector('#places-title');
  const buttons = [...container.querySelectorAll('[data-category]')];
  let lastFilterKey = null;
  const render = state => {
    const filterKey = JSON.stringify([state.activeCategory, state.activeIntent, state.searchQuery]);
    if (filterKey === lastFilterKey) return;
    lastFilterKey = filterKey;
    const query = state.searchQuery.trim().toLocaleLowerCase();
    let found = locations.filter(place => place.status === 'published');
    if (state.activeCategory !== 'all') found = found.filter(place => place.category === state.activeCategory);
    if (state.activeIntent) found = found.filter(place => place.intents.includes(state.activeIntent));
    if (query) found = found.filter(place => `${place.name} ${place.district} ${place.description} ${place.bestFor}`.toLocaleLowerCase().includes(query));
    heading.textContent = state.activeIntent ? intentLabel[state.activeIntent] : state.activeCategory === 'all' ? 'Pick your Davao.' : categories.find(c => c.id === state.activeCategory).label + ' in Davao';
    count.textContent = `${found.length} ${found.length === 1 ? 'place' : 'places'}`;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === state.activeCategory && !state.activeIntent)));
    if (input !== document.activeElement && input.value !== state.searchQuery) input.value = state.searchQuery;
    grid.innerHTML = found.length ? found.map(card).join('') : `<div class="empty-state"><h3>No match in this shortlist.</h3><p>Try another place name or clear the filters.</p><button type="button" id="clear-filters">Show all places</button></div>`;
  };
  input.addEventListener('input', () => appState.setSearchQuery(input.value));
  buttons.forEach(button => button.addEventListener('click', () => appState.setCategory(button.dataset.category)));
  grid.addEventListener('click', event => {
    const details = event.target.closest('[data-detail]');
    if (details) appState.selectLocation(details.dataset.detail);
    if (event.target.closest('#clear-filters')) appState.clearFilters();
  });
  appState.subscribe(render);
}
