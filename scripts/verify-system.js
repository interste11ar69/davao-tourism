import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { locations, categories } from '../src/data/locations.js';
import { stories } from '../src/data/stories.js';
import { buildGoogleMapsUrl, buildGoogleDirectionsUrl } from '../src/utils/maps.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const required = (condition, message) => { if (!condition) errors.push(message); };
const exists = (relative) => fs.existsSync(path.join(root, relative));
const sourceValid = (record) => record.sources?.length && record.sources.every(s => /^https:\/\//.test(s.url) && /^\d{4}-\d{2}-\d{2}$/.test(s.checkedAt) && s.supports);
const categoriesExpected = ['all', 'spot', 'restaurant', 'cafe', 'hotel'];
required(JSON.stringify(categories.map(c => c.id)) === JSON.stringify(categoriesExpected), 'Category IDs differ from contract');
required(locations.length === 26, `Expected 26 published places, found ${locations.length}`);
required(stories.length >= 1, 'Missing cultural story');
const requiredNewPlaces = ['davao-famous', 'totsys', 'barok', 'capris', 'la-flee', 'atcurbside', 'robata', 'tiny-kitchen', 'black-scoop', 'lara-mia', 'blarneys', 'hygge-coffee', 'daily-dose'];
const locationIds = new Set(locations.map(loc => loc.id));
for (const id of requiredNewPlaces) required(locationIds.has(id), `Missing requested business: ${id}`);
const photoCredits = fs.readFileSync(path.join(root, 'src/app.js'), 'utf8');
const creditedIds = new Set([...photoCredits.matchAll(/^\s+\['([^']+)'/gm)].map(match => match[1]));
for (const loc of locations) required(creditedIds.has(loc.image?.creditId), `Photo credit missing: ${loc.id}`);
const ids = new Set();
for (const loc of locations) {
  required(!ids.has(loc.id), `Duplicate place ID: ${loc.id}`); ids.add(loc.id);
  required(loc.status === 'published' && loc.city === 'Davao City' && !/samal|pearl farm/i.test(`${loc.name} ${loc.address}`), `City scope: ${loc.id}`);
  required(['spot','restaurant','cafe','hotel'].includes(loc.category), `Category: ${loc.id}`);
  required(Boolean(loc.name && loc.district && loc.address && loc.description && loc.mapsQuery), `Fields: ${loc.id}`);
  required(['downtown', 'south', 'north', 'uplands'].includes(loc.area) && Array.isArray(loc.intents) && loc.intents.length > 0, `Passenger guidance: ${loc.id}`);
  required(sourceValid(loc), `Sources: ${loc.id}`);
  required(Boolean(loc.image), `Card image missing: ${loc.id}`);
  if (loc.image) {
    required(exists(loc.image.path) && fs.statSync(path.join(root, loc.image.path)).size < 500_000, `Image missing or oversized: ${loc.id}`);
    required(Boolean(loc.image.alt && loc.image.creditId && (loc.image.depictsVenue || loc.image.caption)), `Image caption/credit: ${loc.id}`);
    if (loc.category === 'hotel') required(loc.image.depictsVenue === true && !loc.image.caption, `Stay image must depict hotel: ${loc.id}`);
    if (!loc.image.depictsVenue) required(/^Photo: .+/.test(loc.image.caption) && !/this is not|does not show/i.test(loc.image.caption), `Context caption must identify the scene: ${loc.id}`);
    if (['restaurant', 'cafe'].includes(loc.category) && !loc.image.depictsVenue) {
      required(['robata', 'daily-dose'].includes(loc.id), `Business image must depict the venue or its own named menu item: ${loc.id}`);
      required(loc.image.caption.toLowerCase().includes(loc.name.split(' ')[0].toLowerCase()), `Business menu photo caption must name the business: ${loc.id}`);
    }
  }
  for (const url of [buildGoogleMapsUrl(loc), buildGoogleDirectionsUrl(loc)]) {
    const parsed = new URL(url);
    required(parsed.hostname === 'www.google.com' && parsed.searchParams.get('api') === '1' && [...parsed.searchParams.values()].some(v => v.includes(loc.name.split(' ')[0])), `Maps query: ${loc.id}`);
  }
}
for (const intent of ['first-time', 'family', 'tonight', 'food', 'stay']) {
  required(locations.filter(loc => loc.intents.includes(intent)).length >= 2, `Passenger shortcut has too few places: ${intent}`);
}
required(locations.filter(loc => ['restaurant', 'cafe'].includes(loc.category)).length === 17, 'Expected 17 restaurant and cafe recommendations');
const robata = locations.find(loc => loc.id === 'robata');
required(robata?.address.includes('The Compound') && !/Azuela Cove|G Center/i.test(robata.address), 'Robata still points to its former Azuela Cove branch');
const dailyDose = locations.find(loc => loc.id === 'daily-dose');
required(dailyDose?.address.includes('Maa') && dailyDose.sources.some(s => s.url.includes('/vmh3/')), 'Daily Dose must use the active Maa branch');
for (const story of stories) {
  required(sourceValid(story) && story.title && story.body, `Story: ${story.id}`);
  if (story.image) required(exists(story.image.path) && story.image.creditId, `Story image: ${story.id}`);
}
for (const image of fs.readdirSync(path.join(root, 'assets/images'))) {
  const full = path.join(root, 'assets/images', image);
  required(fs.statSync(full).isFile() && fs.statSync(full).size < 500_000, `Oversized/unexpected image: ${image}`);
}
required(exists('docs/SOURCES.md'), 'Missing attribution register');
required(fs.readFileSync(path.join(root, 'docs/SOURCES.md'), 'utf8').includes('permission unconfirmed'), 'Image reuse status is missing from the source register');
required(photoCredits.includes('Reuse permission not stated'), 'Public photo credits omit unconfirmed reuse status');
required(fs.readdirSync(path.join(root, 'assets/images')).every(name => !name.endsWith('-context.webp')), 'Obsolete unrelated context image remains');
required(exists('index.html') && !exists('card.html') && !exists('assets/card') && !exists('src/styles/card.css'), 'Print files remain in public tree');
required(fs.readFileSync(path.join(root, '.gitignore'), 'utf8').includes('owner-card/'), 'Owner card is not Git ignored');
required(fs.readFileSync(path.join(root, '.vercelignore'), 'utf8').includes('owner-card/'), 'Owner card is not Vercel ignored');
required(JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')), 'Vercel config invalid');
if (process.argv.includes('--final')) {
  for (const relative of ['src/utils/qr.js', 'src/components/business-card.js']) required(!exists(relative), `Runtime QR file remains: ${relative}`);
  for (const relative of ['index.html', 'src/app.js', 'src/components/navbar.js', 'src/state/app-state.js']) {
    const content = fs.readFileSync(path.join(root, relative), 'utf8');
    required(!/generateQRCode|targetVercelUrl|renderBusinessCard|Customize encoded link/.test(content), `Runtime QR reference: ${relative}`);
    required(!/card\.html|assets\/card|owner-card/.test(content), `Public card reference: ${relative}`);
  }
}
if (errors.length) {
  errors.forEach(e => console.error(`FAIL: ${e}`));
  process.exit(1);
}
const menuPhotoIds = locations.filter(loc => ['robata', 'daily-dose'].includes(loc.id));
console.log(`PASS: ${locations.length} city places, ${locations.filter(loc => ['restaurant', 'cafe'].includes(loc.category)).length} restaurant/cafe cards, ${stories.length} stories, sources, images, Maps URLs${process.argv.includes('--final') ? ', no runtime QR' : ''}`);
console.log(`NOTE: These cards use named menu-item photos rather than premises photos: ${menuPhotoIds.map(loc => loc.name).join(', ')}.`);
console.log('NOTE: Third-party restaurant and cafe photo reuse rights are unconfirmed; this build is for local review and must not be publicly released until cleared.');
