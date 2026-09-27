import { locations } from '../data/locations.js';
import { buildGoogleMapsUrl } from '../utils/maps.js';

const areas = [
  { id: 'downtown', label: 'Around downtown', note: 'A compact starting point for city visitors.' },
  { id: 'south', label: 'South Davao', note: 'Food, wildlife and hillside stops.' },
  { id: 'north', label: 'North Davao', note: 'Coffee and a city stay.' },
  { id: 'uplands', label: 'A longer outing', note: 'Make more room in the day for Malagos or Toril.' }
];

export function renderMapExplorer(container) {
  if (!container) return;
  container.innerHTML = `<section class="area-guide" id="areas" aria-labelledby="areas-title"><div class="shell">
    <div class="area-head"><div><p class="section-kicker">Plan the ride</p><h2 id="areas-title">Start with the area.</h2></div><p>These are broad parts of the city, not travel-time estimates. Open a place in Google Maps for the actual route.</p></div>
    <div class="area-grid">${areas.map(area => `<div class="area-group"><h3>${area.label}</h3><p>${area.note}</p><ul>${locations.filter(place => place.area === area.id).map(place => `<li><a href="${buildGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer"><span>${place.name}</span><span aria-hidden="true">↗</span></a></li>`).join('')}</ul></div>`).join('')}</div>
  </div></section>`;
}
