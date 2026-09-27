import { locations } from '../data/locations.js';
import { buildGoogleMapsUrl, buildGoogleDirectionsUrl } from '../utils/maps.js';

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function renderLocationModal(container, appState) {
  if (!container) return;
  let previousFocus = null;
  const close = () => appState.closeLocationModal();
  const onKeyDown = event => {
    if (event.key === 'Escape') close();
    if (event.key !== 'Tab') return;
    const items = [...container.querySelectorAll('button,a[href]')];
    if (!items.length) return;
    const first = items[0], last = items.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };
  appState.subscribe(state => {
    const place = locations.find(loc => loc.id === state.selectedLocationId);
    if (!place) {
      if (container.innerHTML) { container.innerHTML = ''; document.removeEventListener('keydown', onKeyDown); previousFocus?.focus(); previousFocus = null; }
      return;
    }
    if (!container.innerHTML) previousFocus = document.activeElement;
    container.innerHTML = `<div class="dialog-backdrop" id="dialog-backdrop"><div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <button class="dialog-close" type="button" aria-label="Close place details">×</button>
      <p class="section-kicker">${escapeHtml(place.district)} / ${place.area === 'uplands' ? 'Longer upland outing' : 'Davao City'}</p>
      <h2 id="dialog-title">${escapeHtml(place.name)}</h2>
      <p>${escapeHtml(place.description)}</p><p><strong>Good for:</strong> ${escapeHtml(place.bestFor)}</p><p><strong>Find it:</strong> ${escapeHtml(place.address)}</p>
      <div class="dialog-actions"><a href="${buildGoogleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a><a href="${buildGoogleDirectionsUrl(place)}" target="_blank" rel="noopener noreferrer">Get directions</a></div>
      <small>Check current hours and availability before your trip. Listing checked ${escapeHtml(place.sources[0].checkedAt)}. <a href="${escapeHtml(place.sources[0].url)}" target="_blank" rel="noopener noreferrer">View source</a>.</small>
    </div></div>`;
    container.querySelector('.dialog-close').addEventListener('click', close);
    container.querySelector('#dialog-backdrop').addEventListener('click', event => { if (event.target.id === 'dialog-backdrop') close(); });
    document.removeEventListener('keydown', onKeyDown);
    document.addEventListener('keydown', onKeyDown);
    container.querySelector('.dialog-close').focus();
  });
}
