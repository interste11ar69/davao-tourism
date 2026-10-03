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
  ['hero-davao', 'City skyline', 'Patrickroque01', 'https://commons.wikimedia.org/wiki/File:Davao_Bajada-Buhangin_skyline_Shrine_Hills_(Davao_City;_04-19-2024).jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['kadayawan', 'Kadayawan story', 'GinaD', 'https://commons.wikimedia.org/wiki/File:Indak-indak_sa_Kadalanan_06.JPG', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'],
  ['peoples-park', "People's Park", 'Robert Ryan U. Ong', "https://commons.wikimedia.org/wiki/File:People%27s_Park,_Davao_City,_Philippines_(1_May_2010).jpg", 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'],
  ['roxas-night-market', 'Roxas Night Market', 'RoyKabanlit', 'https://commons.wikimedia.org/wiki/File:Roxas_Ave_Night_Market_001.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['crocodile-park', 'Davao Crocodile Park', 'WorldTravleerAndPhotoTaker', 'https://commons.wikimedia.org/wiki/File:Pangil_at_Davao_Crocodile_Park.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['philippine-eagle-center', 'Philippine Eagle Center entrance', 'Photo supplied by the project owner; photographer unspecified', null, 'Use requested by the project owner'],
  ['dusit-thani', 'Dusit Thani Residence Davao', 'Dusit; photographer not credited', 'https://www.dusit.com/dusitthani-residencedavao/gallery/', 'Reuse permission not stated'],
  ['acacia-hotel', 'Acacia Hotel Davao', 'Acacia Hotel Davao; photographer not credited', 'https://acaciahotelsdavao.com/', 'Reuse permission not stated'],
  ['grand-regal', 'Grand Regal Hotel Davao', 'Davao City Tourism; photographer not credited', 'https://tourism.davaocity.gov.ph/explore-the-city/nightlife/spa/grand-regal-hotel-davao/', 'Reuse permission not stated'],
  ['aeon-suites', 'Aeon Suites at Aeon Towers', 'Aeon Suites operator; photographer not credited', 'https://greenwindowsdormitel.com/en/aeon-suites-staycations', 'Reuse permission not stated'],
  ['waterfront-insular', 'Waterfront Insular Hotel Davao', 'Waterfront Hotels; photographer not credited', 'https://www.waterfronthotels.com.ph/waterfront-insular-hotel-davao/', 'Reuse permission not stated'],
  ['inspiria-abreeza', 'Inspiria building exterior', 'Booking.com property listing; photographer not credited', 'https://www.booking.com/hotel/ph/inspiria-tower-condominium.en-gb.html', 'Reuse permission not stated'],
  ['blue-lotus', 'Blue Lotus Hotel', 'Blue Lotus Hotel; photographer not credited', 'https://www.bluelotushotel.com/', 'Reuse permission not stated'],
  ['pinnacle-hotel', 'The Pinnacle Hotel and Suites', 'The Pinnacle Hotel; photographer not credited', 'https://thepinnaclehotel.com/', 'Reuse permission not stated'],
  ['apo-view', 'The Apo View Hotel', 'Davao City Tourism; photographer not credited', 'https://tourism.davaocity.gov.ph/explore-the-city/restaurants/ktv/apo-view-hotel/', 'Reuse permission not stated'],
  ['eden-nature-park', 'Eden Nature Park', 'Michael E. Peligro', 'https://commons.wikimedia.org/wiki/File:Eden_Nature_Park_panorama.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  ['jacks-ridge', "Jack's Ridge", 'Saqib Qayyum', 'https://commons.wikimedia.org/wiki/File:Davao.JPG', 'CC BY-SA 3.0', 'https://creativecommons.org/licenses/by-sa/3.0/'],
  ['seda-abreeza', 'Seda Abreeza', 'Kenneth Rangas', 'https://commons.wikimedia.org/wiki/File:Seda_Hotel_Davao_-_panoramio_(2).jpg', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'],
  ['park-inn', 'Park Inn by Radisson Davao', 'Kenneth Rangas', 'https://commons.wikimedia.org/wiki/File:SM_Lanang_Premier_Fountain_Court_and_Park_Inn_Davao_-_panoramio.jpg', 'CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'],
  ['marina-tuna', 'Marina Tuna', 'Davao City Tourism; photographer not credited on the source page', 'https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/marina-tuna-2/', 'Reuse permission not stated'],
  ['bistro-rosario', 'Bistro Rosario', 'Davao City Tourism; photographer not credited on the source page', 'https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/bistro-rosario-cafe-bakeshop/', 'Reuse permission not stated'],
  ['purge-coffee', 'Purge Coffee Roaster', 'Davao City Tourism; photographer not credited on the source page', 'https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/purge-coffee-roaster/', 'Reuse permission not stated'],
  ['green-coffee', 'Green Coffee Bajada', 'Davao City Tourism; photographer not credited on the source page', 'https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/green-coffee-bajada-branch/', 'Reuse permission not stated'],
  ['davao-famous', 'Davao Famous', 'New Davao Famous Restaurant; photographer not credited on the source page', 'https://newdavaofamous.com/about-us', 'Reuse permission not stated'],
  ['totsys', "Totsy's", 'Eats Me, Jax!; photographer not credited on the source page', 'https://eatsmejax.com/2024/05/08/totsys-a-beloved-bukidnon-favorite-now-in-davao/', 'Reuse permission not stated'],
  ['barok', 'Barok Cafe & Resto', 'Davao Food Trips', 'https://www.davaofoodtrips.com/coffee-shop/24-7-barok-cafe-resto-opens-in-pryce-business-park.html', 'Reuse permission not stated'],
  ['capris', "Capri's Restaurant and Deli", 'SunStar Davao; individual photo credit not stated', 'https://www.sunstar.com.ph/davao/a-mid-week-lunch-at-capris', 'Reuse permission not stated'],
  ['la-flee', 'La Flee Ristorante & Lounge', 'Eats Me, Jax!; photographer not credited on the source page', 'https://eatsmejax.com/2025/04/22/davao-la-fle-e-ristorante-lounge/', 'Reuse permission not stated'],
  ['atcurbside', 'AtCurbside', 'Kape Diaries', 'https://kapediaries.com/2023/09/30/ready-set-crawl/', 'Reuse permission not stated'],
  ['robata', 'Robata Davao', 'Davao FoodTographer', 'https://davaofoodtographer.com/resto-review-robata-davao-at-the-azuela-cove/', 'Reuse permission not stated'],
  ['tiny-kitchen', 'Tiny Kitchen Creations', 'Mae Dizon / When In Manila', 'https://www.wheninmanila.com/tiny-kitchen-and-dulce-vida-where-spanish-cuisine-and-delectable-dessert-creations-make-a-delightful-davao-city-getaway/', 'Reuse permission not stated'],
  ['black-scoop', 'Black Scoop Cafe Matina', 'JameeLakwatsera Philippines', 'https://us.trip.com/moments/detail/pampanga-1474363-120078854/', 'Reuse permission not stated'],
  ['lara-mia', 'Lara Mia Cafe & Bistro', 'Wheree listing; individual photo credit not stated', 'https://wanderlog.com/place/details/1391961/lara-mia-caf%C3%A9--bistro', 'Reuse permission not stated'],
  ['blarneys', "Blarney's Irish Pub", 'Eats Me, Jax!; photographer not credited on the source page', 'https://eatsmejax.com/2025/11/10/davao-blarneys-irish-pub-review/', 'Reuse permission not stated'],
  ['hygge-coffee', 'Hygge Coffee, Juna', 'Davao Food Trips', 'https://www.davaofoodtrips.com/coffee-shop/hygge-coffee/hygge-coffee-opens-3rd-branch-in-juna.html', 'Reuse permission not stated'],
  ['daily-dose', 'Daily Dose Coffee Bar, Maa', 'Foodpanda; image contributor not stated', 'https://www.foodpanda.ph/restaurant/vmh3/daily-dose-coffee-bar-maa', 'Reuse permission not stated']
];
const footer = document.getElementById('footer-mount');
footer.innerHTML = `<div class="shell footer-top"><div><p class="footer-brand">Madayaw Davao.</p><p>A small guide to a big city. Made for visitors and the people who welcome them.</p></div><div class="footer-credit"><span>Created by</span><strong>Lance C. Lastimosa</strong></div></div><div class="shell footer-bottom"><p>Independent student project. Check venue hours and access before visiting.</p><details><summary>Photo sources and reuse terms</summary><p>Some business photo pages do not state a reuse license. A credit records the source and creator status; it does not grant permission. Confirm reuse rights before public release.</p><ul>${credits.map(([id, label, creator, source, rights, license]) => `<li id="photo-credit-${id}">${source ? `<a href="${source}" target="_blank" rel="noopener noreferrer">${label}: ${creator}</a>` : `${label}: ${creator}`} (${license ? `<a href="${license}" target="_blank" rel="noopener noreferrer">${rights}</a>` : rights})</li>`).join('')}</ul></details></div>`;
