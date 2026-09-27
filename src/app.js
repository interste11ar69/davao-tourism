import { createAppState } from './state/app-state.js';
import { renderNavbar } from './components/navbar.js';
import { renderHero, renderStory } from './components/hero.js';
import { renderLocationGrid } from './components/location-grid.js';
import { renderMapExplorer } from './components/map-explorer.js';
import { renderLocationModal } from './components/modal-detail.js';

const appState = createAppState();
renderNavbar(document.getElementById('navbar-mount'), appState);
renderHero(document.getElementById('hero-mount'), appState);
renderLocationGrid(document.getElementById('gallery-mount'), appState);
renderStory(document.getElementById('story-mount'));
renderMapExplorer(document.getElementById('map-mount'));
renderLocationModal(document.getElementById('modal-mount'), appState);

const credits = [
  ['Skyline', 'Patrickroque01', 'https://commons.wikimedia.org/wiki/File:Davao_Bajada-Buhangin_skyline_Shrine_Hills_(Davao_City;_04-19-2024).jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', 'CC BY-SA 4.0'],
  ['Kadayawan', 'GinaD', 'https://commons.wikimedia.org/wiki/File:Indak-indak_sa_Kadalanan_06.JPG', 'https://creativecommons.org/licenses/by-sa/3.0/', 'CC BY-SA 3.0'],
  ["People's Park", 'Robert Ryan U. Ong', "https://commons.wikimedia.org/wiki/File:People%27s_Park,_Davao_City,_Philippines_(1_May_2010).jpg", 'https://creativecommons.org/licenses/by-sa/3.0/', 'CC BY-SA 3.0'],
  ['Roxas Night Market', 'RoyKabanlit', 'https://commons.wikimedia.org/wiki/File:Roxas_Ave_Night_Market_001.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', 'CC BY-SA 4.0'],
  ['Davao Crocodile Park', 'WorldTravleerAndPhotoTaker', 'https://commons.wikimedia.org/wiki/File:Pangil_at_Davao_Crocodile_Park.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', 'CC BY-SA 4.0']
];
const footer = document.getElementById('footer-mount');
footer.innerHTML = `<div class="shell footer-top"><div><p class="footer-brand">Madayaw Davao.</p><p>A small guide to a big city. Made for visitors and the people who welcome them.</p></div><div class="footer-credit"><span>Created by</span><strong>Lance C. Lastimosa</strong><a href="card.html">See the visitor card</a></div></div><div class="shell footer-bottom"><p>Independent student project. Check venue hours and access before visiting.</p><details><summary>Photo credits and licenses</summary><p>Images resized and converted to WebP from Wikimedia Commons originals.</p><ul>${credits.map(([label, author, file, license, name]) => `<li>${label}: <a href="${file}" target="_blank" rel="noopener noreferrer">${author}</a>, <a href="${license}" target="_blank" rel="noopener noreferrer">${name}</a></li>`).join('')}</ul></details></div>`;
