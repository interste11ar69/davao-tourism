export const categories = [
  { id: 'all', label: 'All places' },
  { id: 'spot', label: 'Explore' },
  { id: 'restaurant', label: 'Eat' },
  { id: 'cafe', label: 'Coffee' },
  { id: 'hotel', label: 'Stay' }
];

const checkedAt = '2026-09-27';
const source = (url, supports) => [{ url, checkedAt, supports }];

export const locations = [
  {
    id: 'peoples-park', name: "People's Park", category: 'spot', district: 'Poblacion',
    address: 'Palma Gil Street, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: "People's Park, Palma Gil Street, Davao City", status: 'published',
    description: 'An easy downtown pause among trees, public art and the unmistakable Durian Dome.',
    bestFor: 'A relaxed city walk', image: { path: 'assets/images/peoples-park.webp', alt: "People's Park in Davao City", depictsVenue: true, creditId: 'peoples-park' },
    sources: source('https://tourism.davaocity.gov.ph/explore-the-city/attractions/man-made-nature-parks/peoples-park/', 'park, features and location')
  },
  {
    id: 'roxas-night-market', name: 'Roxas Night Market', category: 'spot', district: 'Poblacion',
    address: 'Roxas Avenue, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: 'Roxas Night Market, Roxas Avenue, Davao City', status: 'published',
    description: 'Follow the evening crowd along Roxas Avenue for food stalls and a lively city atmosphere.',
    bestFor: 'An evening out', image: { path: 'assets/images/roxas-night-market.webp', alt: 'Stalls at Roxas Night Market', depictsVenue: true, creditId: 'roxas-night-market' },
    sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/night-market/roxas-night-market/', 'market and location')
  },
  {
    id: 'crocodile-park', name: 'Davao Crocodile Park', category: 'spot', district: "Ma-a",
    address: 'Riverfront Corporate City, Diversion Highway, Ma-a, Davao City', city: 'Davao City',
    mapsQuery: 'Davao Crocodile Park, Ma-a, Davao City', status: 'published',
    description: 'A wildlife park focused on crocodiles, with other animals and educational visits.',
    bestFor: 'Families and wildlife', image: { path: 'assets/images/crocodile-park.webp', alt: 'Crocodile at Davao Crocodile Park', depictsVenue: true, creditId: 'crocodile-park' },
    sources: source('https://tourism.davaocity.gov.ph/explore-the-city/attractions/man-made-nature-parks/davao-crocodile-park-wild-water-rafting-zip-city/', 'park purpose and location')
  },
  {
    id: 'kadayawan-village', name: 'Kadayawan Village', category: 'spot', district: 'Magsaysay Park',
    address: 'Magsaysay Park, Davao City', city: 'Davao City',
    mapsQuery: 'Kadayawan Village, Magsaysay Park, Davao City', status: 'published',
    description: "Learn about the city's 11 ethnolinguistic communities through the village at Magsaysay Park. Confirm access before visiting.",
    bestFor: 'Culture and local history', image: { path: 'assets/images/kadayawan.webp', alt: 'Kadayawan street dancers in Davao City', depictsVenue: false, creditId: 'kadayawan', caption: 'Kadayawan festival scene; the photo does not show the Village.' },
    sources: source('https://davaocity.gov.ph/tourism/kadayawan-village-remains-open-to-public-says-ctoo/', 'village, communities and location, reported 2025')
  },
  {
    id: 'marina-tuna', name: 'Marina Tuna', category: 'restaurant', district: 'Sandawa',
    address: 'Sandawa Plaza, Quimpo Boulevard, Davao City', city: 'Davao City',
    mapsQuery: 'Marina Tuna, Sandawa Plaza, Davao City', status: 'published',
    description: 'A Davao seafood stop listed by the city tourism office on Quimpo Boulevard.',
    bestFor: 'A seafood meal', image: { path: 'assets/images/marina-tuna-context.webp', alt: 'Fresh seafood displayed in Davao City', depictsVenue: false, creditId: 'marina-tuna-context', caption: 'Davao seafood scene; this is not Marina Tuna.' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/marina-tuna-2/', 'restaurant and address')
  },
  {
    id: 'bistro-rosario', name: 'Bistro Rosario', category: 'restaurant', district: 'F. Torres Street',
    address: 'F. Torres Street, Davao City', city: 'Davao City',
    mapsQuery: 'Bistro Rosario Cafe and Bakeshop, F. Torres Street, Davao City', status: 'published',
    description: 'A cafe and bakeshop on F. Torres Street when you want a slower meal or a pastry.',
    bestFor: 'A casual break', image: { path: 'assets/images/bistro-rosario-context.webp', alt: 'View across Bajada in Davao City', depictsVenue: false, creditId: 'bistro-rosario-context', caption: 'Bajada city view; this is not Bistro Rosario.' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/bistro-rosario-cafe-bakeshop/', 'business type and address')
  },
  {
    id: 'purge-coffee', name: 'Purge Coffee Roaster', category: 'cafe', district: 'Matina',
    address: 'Tulip Drive, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Purge Coffee Roaster, Tulip Drive, Matina, Davao City', status: 'published',
    description: 'A coffee stop on Tulip Drive, listed among Davao City tourism office coffee shops.',
    bestFor: 'A coffee pause', image: { path: 'assets/images/purge-coffee-context.webp', alt: 'MacArthur Highway in Matina with a view of Mount Apo', depictsVenue: false, creditId: 'purge-coffee-context', caption: 'Matina and Mount Apo; this is not Purge Coffee.' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/purge-coffee-roaster/', 'cafe and address')
  },
  {
    id: 'green-coffee', name: 'Green Coffee Bajada', category: 'cafe', district: 'Bajada',
    address: 'Generoso Sobrecaray Street, Barangay 18-B, Davao City', city: 'Davao City',
    mapsQuery: 'Green Coffee Bajada, Davao City', status: 'published',
    description: 'A Bajada coffee stop for a break between city walks.',
    bestFor: 'A quick recharge', image: { path: 'assets/images/green-coffee-context.webp', alt: 'JP Laurel Avenue in Bajada, Davao City', depictsVenue: false, creditId: 'green-coffee-context', caption: 'JP Laurel Avenue, Bajada; this is not Green Coffee.' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/green-coffee-bajada-branch/', 'branch and address')
  },
  {
    id: 'apo-view', name: 'The Apo View Hotel', category: 'hotel', district: 'Poblacion',
    address: '150 J. Camus Street, Davao City', city: 'Davao City',
    mapsQuery: 'The Apo View Hotel, 150 J. Camus Street, Davao City', status: 'published',
    description: 'A central stay near downtown streets and city landmarks.',
    bestFor: 'A downtown base', image: { path: 'assets/images/apo-view-context.webp', alt: 'Poblacion skyline in Davao City', depictsVenue: false, creditId: 'apo-view-context', caption: 'Poblacion skyline; this is not The Apo View Hotel.' }, sources: source('https://apoviewhotel.com/contact', 'hotel and address')
  },
  {
    id: 'dusit-residence', name: 'Dusit Thani Residence Davao', category: 'hotel', district: 'Pampanga',
    address: 'Stella Hizon Reyes Drive, Bo. Pampanga, Davao City', city: 'Davao City',
    mapsQuery: 'Dusit Thani Residence Davao, Stella Hizon Reyes Drive, Davao City', status: 'published',
    description: 'A residence-style stay on Stella Hizon Reyes Drive.',
    bestFor: 'A longer city stay', image: { path: 'assets/images/dusit-context.webp', alt: 'View of Shrine Hills from SM Lanang, Davao City', depictsVenue: false, creditId: 'dusit-context', caption: 'View from SM Lanang; this is not Dusit Thani Residence.' }, sources: source('https://www.dusit.com/dusitthani-residencedavao/contact-us/', 'hotel and address')
  }
];

locations.push(
  {
    id: 'philippine-eagle-center', name: 'Philippine Eagle Center', category: 'spot', district: 'Malagos',
    address: 'Malagos, Baguio District, Davao City', city: 'Davao City',
    mapsQuery: 'Philippine Eagle Center, Malagos, Davao City', status: 'published',
    description: 'Meet the conservation work behind the Philippine eagle and explore a rainforest setting. Plan this as a longer outing from downtown.',
    bestFor: 'A first Davao nature trip', image: { path: 'assets/images/philippine-eagle-center.webp', alt: 'Philippine eagle at the Philippine Eagle Center', depictsVenue: true, creditId: 'philippine-eagle-center' },
    sources: source('https://www.philippineeaglefoundation.org/pec', 'center, visitor activities and Malagos address')
  },
  {
    id: 'eden-nature-park', name: 'Eden Nature Park', category: 'spot', district: 'Toril uplands',
    address: 'Barangay Eden, Toril, Davao City', city: 'Davao City',
    mapsQuery: 'Eden Nature Park and Resort, Toril, Davao City', status: 'published',
    description: 'A cool upland escape with gardens and family-friendly outdoor activities. Set aside a longer outing from downtown.',
    bestFor: 'A family day in the hills', image: { path: 'assets/images/eden-nature-park.webp', alt: 'Entrance of Eden Nature Park in Toril', depictsVenue: true, creditId: 'eden-nature-park' },
    sources: source('https://tourism.davaocity.gov.ph/explore-the-city/attractions/resorts/eden-nature-park-and-resort/', 'resort, family use and Toril address')
  },
  {
    id: 'jacks-ridge', name: "Jack's Ridge", category: 'spot', district: 'Shrine Hills',
    address: 'Shrine Hills, Matina Crossing, Davao City', city: 'Davao City',
    mapsQuery: "Jack's Ridge, Shrine Hills, Davao City", status: 'published',
    description: 'A ridge-side stop in Matina for a change of perspective on the city, especially as the day winds down.',
    bestFor: 'A late-day stop', image: { path: 'assets/images/jacks-ridge.webp', alt: "Jack's Ridge at night in Davao City", depictsVenue: true, creditId: 'jacks-ridge' },
    sources: [
      ...source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/jacks-ridge-resort-and-restaurant-corp/', 'venue and Shrine Hills address'),
      ...source('https://www.jacksridgedavao.com/amenities.php', 'restaurant and evening amenities')
    ]
  }
);

const guideTags = {
  'peoples-park': ['first-time', 'family'],
  'roxas-night-market': ['first-time', 'tonight', 'food'],
  'crocodile-park': ['family'],
  'kadayawan-village': ['first-time', 'family'],
  'marina-tuna': ['food'],
  'bistro-rosario': ['food'],
  'purge-coffee': ['food'],
  'green-coffee': ['food'],
  'apo-view': ['stay'],
  'dusit-residence': ['stay'],
  'philippine-eagle-center': ['first-time', 'family'],
  'eden-nature-park': ['family'],
  'jacks-ridge': ['tonight', 'first-time']
};
const areas = {
  'peoples-park': 'downtown', 'roxas-night-market': 'downtown',
  'crocodile-park': 'south', 'kadayawan-village': 'downtown',
  'marina-tuna': 'south', 'bistro-rosario': 'downtown',
  'purge-coffee': 'south', 'green-coffee': 'north',
  'apo-view': 'downtown', 'dusit-residence': 'north',
  'philippine-eagle-center': 'uplands', 'eden-nature-park': 'uplands',
  'jacks-ridge': 'south'
};
for (const place of locations) {
  place.intents = guideTags[place.id];
  place.area = areas[place.id];
}
