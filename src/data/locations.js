export const categories = [
  { id: 'all', label: 'All places' },
  { id: 'spot', label: 'Explore' },
  { id: 'restaurant', label: 'Eat' },
  { id: 'cafe', label: 'Coffee' },
  { id: 'hotel', label: 'Stay' }
];

const checkedAt = '2026-09-27';
const source = (url, supports) => [{ url, checkedAt, supports }];
const businessSource = (url, supports) => [{ url, checkedAt: '2026-10-02', supports }];
const hotelSource = (url, supports) => [{ url, checkedAt: '2026-10-03', supports }];

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
    bestFor: 'Culture and local history', image: { path: 'assets/images/kadayawan.webp', alt: 'Kadayawan street dancers in Davao City', depictsVenue: false, creditId: 'kadayawan', caption: 'Photo: Kadayawan street dancers' },
    sources: source('https://davaocity.gov.ph/tourism/kadayawan-village-remains-open-to-public-says-ctoo/', 'village, communities and location, reported 2025')
  },
  {
    id: 'marina-tuna', name: 'Marina Tuna', category: 'restaurant', district: 'Sandawa',
    address: 'Sandawa Plaza, Quimpo Boulevard, Davao City', city: 'Davao City',
    mapsQuery: 'Marina Tuna, Sandawa Plaza, Davao City', status: 'published',
    description: 'A Davao seafood stop listed by the city tourism office on Quimpo Boulevard.',
    bestFor: 'A seafood meal', image: { path: 'assets/images/marina-tuna.webp', alt: 'Entrance and sign at Marina Tuna on Quimpo Boulevard', depictsVenue: true, creditId: 'marina-tuna' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/marina-tuna-2/', 'restaurant and address')
  },
  {
    id: 'bistro-rosario', name: 'Bistro Rosario', category: 'restaurant', district: 'F. Torres Street',
    address: 'F. Torres Street, Davao City', city: 'Davao City',
    mapsQuery: 'Bistro Rosario Cafe and Bakeshop, F. Torres Street, Davao City', status: 'published',
    description: 'A cafe and bakeshop on F. Torres Street for a meal or a pastry.',
    bestFor: 'A casual break', image: { path: 'assets/images/bistro-rosario.webp', alt: 'Dining room inside Bistro Rosario on F. Torres Street', depictsVenue: true, creditId: 'bistro-rosario' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/bistro-rosario-cafe-bakeshop/', 'business type and address')
  },
  {
    id: 'purge-coffee', name: 'Purge Coffee Roaster', category: 'cafe', district: 'Matina',
    address: 'Tulip Drive, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Purge Coffee Roaster, Tulip Drive, Matina, Davao City', status: 'published',
    description: 'A coffee stop on Tulip Drive, listed among Davao City tourism office coffee shops.',
    bestFor: 'A coffee pause', image: { path: 'assets/images/purge-coffee.webp', alt: 'Purge Coffee Roaster storefront on Tulip Drive', depictsVenue: true, creditId: 'purge-coffee' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/purge-coffee-roaster/', 'cafe and address')
  },
  {
    id: 'green-coffee', name: 'Green Coffee Bajada', category: 'cafe', district: 'Bajada',
    address: 'Generoso Sobrecaray Street, Barangay 18-B, Davao City', city: 'Davao City',
    mapsQuery: 'Green Coffee Bajada, Davao City', status: 'published',
    description: 'A Bajada coffee stop for a break between city walks.',
    bestFor: 'A quick recharge', image: { path: 'assets/images/green-coffee.webp', alt: 'Green Coffee sign and entrance at the Bajada branch', depictsVenue: true, creditId: 'green-coffee' }, sources: source('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/coffeeshops-2/green-coffee-bajada-branch/', 'branch and address')
  },
  {
    id: 'seda-abreeza', name: 'Seda Abreeza', category: 'hotel', district: 'Bajada',
    address: 'J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: 'Seda Abreeza, J.P. Laurel Avenue, Davao City', status: 'published',
    description: 'A city stay across from Abreeza Mall, useful if shopping is part of your visit.',
    bestFor: 'A central shopping base', image: { path: 'assets/images/seda-abreeza.webp', alt: 'Exterior of Seda Abreeza hotel in Davao City', depictsVenue: true, creditId: 'seda-abreeza' }, sources: [
      ...source('https://ir.ayalaland.com.ph/wp-content/uploads/2026/04/ALI-2025-Integrated-Report.pdf', 'hotel reopened after renovation'),
      ...source('https://static.pbahotels.com/seda-group/assets/images/hotels/86653896bc0851f35fc2a15805175d85a8ef44aa.pdf', 'location across from Abreeza Mall'),
      ...source('https://loyalty.sedahotels.com/', 'current Davao reservation listing')
    ]
  },
  {
    id: 'park-inn', name: 'Park Inn by Radisson Davao', category: 'hotel', district: 'Agdao',
    address: 'J.P. Laurel Avenue, Agdao, Davao City', city: 'Davao City',
    mapsQuery: 'Park Inn by Radisson Davao, J.P. Laurel Avenue, Davao City', status: 'published',
    description: 'A hotel beside SM Lanang Premier, with footbridge access to the mall.',
    bestFor: 'A north city base', image: { path: 'assets/images/park-inn.webp', alt: 'Exterior of Park Inn by Radisson Davao beside SM Lanang Premier', depictsVenue: true, creditId: 'park-inn' }, sources: source('https://www.radissonhotels.com/en-us/hotels/park-inn-davao', 'hotel, address and mall access')
  }
];

locations.push(
  {
    id: 'philippine-eagle-center', name: 'Philippine Eagle Center', category: 'spot', district: 'Malagos',
    address: 'Malagos, Baguio District, Davao City', city: 'Davao City',
    mapsQuery: 'Philippine Eagle Center, Malagos, Davao City', status: 'published',
    description: 'Meet the conservation work behind the Philippine eagle and explore a rainforest setting. Plan this as a longer outing from downtown.',
    bestFor: 'A first Davao nature trip', image: { path: 'assets/images/philippine-eagle-center.webp', alt: 'Philippine Eagle Center entrance arch surrounded by trees', depictsVenue: true, creditId: 'philippine-eagle-center' },
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

locations.push(
  {
    id: 'davao-famous', name: 'Davao Famous', category: 'restaurant', district: 'Magsaysay Avenue',
    address: '#401 R. Magsaysay Avenue, Davao City', city: 'Davao City',
    mapsQuery: 'New Davao Famous Restaurant, 401 R. Magsaysay Avenue, Davao City', status: 'published',
    description: 'A long-running, family-style Chinese restaurant on Magsaysay Avenue.',
    bestFor: 'A classic Chinese-Filipino meal', image: { path: 'assets/images/davao-famous.webp', alt: 'Dining room inside New Davao Famous Restaurant on Magsaysay Avenue', depictsVenue: true, creditId: 'davao-famous' },
    sources: [
      ...businessSource('https://tourism.davaocity.gov.ph/explore-the-city/restaurants/restaurants/new-davao-famous-restaurant-magsaysay-branch/', 'Magsaysay branch and address'),
      ...businessSource('https://newdavaofamous.com/about-us', 'family-style Chinese dining and business history')
    ]
  },
  {
    id: 'totsys', name: "Totsy's Cakes and Pastries", category: 'restaurant', district: 'Bajada',
    address: 'Ascendido Building, Pryce Business Park, J.P. Laurel Avenue, Barangay 18-B, Davao City', city: 'Davao City',
    mapsQuery: "Totsy's Cakes and Pastries, Ascendido Building, Pryce Business Park, Davao City", status: 'published',
    description: 'A bakery and cafe in Ascendido for cakes, pastries, coffee, and meals.',
    bestFor: 'A pastry or a full meal', image: { path: 'assets/images/totsys.webp', alt: "Totsy's Cakes and Pastries sign at the Ascendido branch in Davao", depictsVenue: true, creditId: 'totsys' },
    sources: [
      ...businessSource('https://www.foodpanda.ph/restaurant/m99c/totsys-cakes-and-pastries-ascendido-building', 'Ascendido branch, menu, and address'),
      ...businessSource('https://eatsmejax.com/2024/05/08/totsys-a-beloved-bukidnon-favorite-now-in-davao/', 'Davao branch background')
    ]
  },
  {
    id: 'barok', name: 'Barok Cafe & Resto', category: 'cafe', district: 'Bajada',
    address: 'Pryce Business Park, J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: 'Barok Cafe and Resto, Pryce Business Park, Davao City', status: 'published',
    description: 'A cafe and resto beside Ascendido Building in Pryce Business Park.',
    bestFor: 'Coffee and a casual meal', image: { path: 'assets/images/barok.webp', alt: 'Barok Cafe and Resto counter at Pryce Business Park', depictsVenue: true, creditId: 'barok' },
    sources: [
      ...businessSource('https://www.davaofoodtrips.com/coffee-shop/24-7-barok-cafe-resto-opens-in-pryce-business-park.html', 'Pryce Business Park branch and cafe/restaurant'),
      ...businessSource('https://www.facebook.com/barokcafeandresto/', 'current business listing')
    ]
  },
  {
    id: 'capris', name: "Capri's Restaurant and Deli", category: 'restaurant', district: 'Bajada',
    address: 'J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: "Capri's Restaurant and Deli, J.P. Laurel Avenue, Bajada, Davao City", status: 'published',
    description: 'Modern European and Western plates in a spacious Bajada dining room.',
    bestFor: 'A sit-down lunch or dinner', image: { path: 'assets/images/capris.webp', alt: "Dining room at Capri's Restaurant and Deli in Bajada", depictsVenue: true, creditId: 'capris' },
    sources: [
      ...businessSource('https://www.davaofoodtrips.com/places-to-eat-in-davao/capris/new-davao-resto-alert-capris.html', 'Bajada location and restaurant opening'),
      ...businessSource('https://www.sunstar.com.ph/davao/a-mid-week-lunch-at-capris', 'restaurant menu and interior')
    ]
  },
  {
    id: 'la-flee', name: 'La Flee Ristorante & Lounge', category: 'restaurant', district: 'Bajada',
    address: 'Second floor, SK Complex, J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: 'La Flee Ristorante and Lounge, SK Complex, J.P. Laurel Avenue, Davao City', status: 'published',
    description: 'Italian-American dishes and a lounge setting inside SK Complex.',
    bestFor: 'Dinner and a lounge stop', image: { path: 'assets/images/la-flee.webp', alt: 'Lounge interior at La Flee Ristorante and Lounge in Bajada', depictsVenue: true, creditId: 'la-flee' },
    sources: [
      ...businessSource('https://eatsmejax.com/2025/04/22/davao-la-fle-e-ristorante-lounge/', 'Bajada address, dining room, and cuisine'),
      ...businessSource('https://vaplatinum.com.au/wp-content/uploads/2025/08/VAP-Davao-Guide-2025-V1.pdf', 'visitor address reference')
    ]
  },
  {
    id: 'atcurbside', name: 'AtCurbside', category: 'cafe', district: 'Marfori Heights',
    address: 'Paseo Uno Building, Ruby Street, Marfori Heights, Davao City', city: 'Davao City',
    mapsQuery: 'AtCurbside Cafe, Paseo Uno Building, Ruby Street, Davao City', status: 'published',
    description: 'A coffee stop on Ruby Street for espresso drinks and cafe food.',
    bestFor: 'Coffee, baps, and quesadillas', image: { path: 'assets/images/atcurbside.webp', alt: 'AtCurbside cafe front at Paseo Uno Building in Marfori Heights', depictsVenue: true, creditId: 'atcurbside' },
    sources: [
      ...businessSource('https://www.davaofoodtrips.com/menu/menu-atcurbside-coffee-updated-as-of-january-2026.html', 'January 2026 cafe menu and branch'),
      ...businessSource('https://atcurbside.com/', 'business and menu information')
    ]
  },
  {
    id: 'robata', name: 'Robata Davao', category: 'restaurant', district: 'Matina',
    address: 'The Compound, Carlos Villa-Abrille Drive, Juna Subdivision, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Robata Davao inside The Compound, Carlos Villa-Abrille Drive, Davao City', status: 'published',
    description: 'Japanese dining near Tulip Drive, with sushi, ramen, and grilled dishes.',
    bestFor: 'Japanese food in Matina', image: { path: 'assets/images/robata.webp', alt: 'Sushi and grilled dishes served at Robata Davao', depictsVenue: false, creditId: 'robata', caption: 'Photo: dishes served at Robata Davao' },
    sources: [
      ...businessSource('https://www.waze.com/live-map/directions/ph/davao-region/davao-city/the-compound?to=place.ChIJwcCFudxz-TIRwTFsMm2VcHY', 'The Compound location pin for the recently opened Robata branch'),
      ...businessSource('https://www.reddit.com/r/davao/comments/1w8jbir/hisher_cafe_azuela_cove/', 'September 2026 report that Robata left the Azuela Cove G Center lease and opened at The Compound; exact unit remains unconfirmed'),
      ...businessSource('https://davaofoodtographer.com/resto-review-robata-davao-at-the-azuela-cove/', 'Azuela Cove restaurant, menu, and venue review'),
      ...businessSource('https://restaurantguru.com/Robata-Davao-Davao-City', 'recent activity listing')
    ]
  },
  {
    id: 'tiny-kitchen', name: 'Tiny Kitchen Creations', category: 'restaurant', district: 'F. Torres Street',
    address: 'Corner of F. Torres and Mabini Streets, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: 'Tiny Kitchen Creations, F. Torres Street and Mabini Street, Davao City', status: 'published',
    description: 'Spanish home-style dishes, including paella, at F. Torres and Mabini.',
    bestFor: 'A Spanish-style meal downtown', image: { path: 'assets/images/tiny-kitchen.webp', alt: 'Tiny Kitchen Creations facade at its F. Torres Street location', depictsVenue: true, creditId: 'tiny-kitchen', caption: 'Photo: Tiny Kitchen facade, 2014' },
    sources: [
      ...businessSource('https://www.tripadvisor.com.ph/Restaurant_Review-g294252-d2560500-Reviews-Tiny_Kitchen_Creations-Mindanao.html', 'restaurant, Spanish cuisine, and location'),
      ...businessSource('https://davaostart.com/business/tiny-kitchen-creations/', 'F. Torres and Mabini location'),
      ...businessSource('https://www.davaocitydirectory.com/food-and-beverages/restaurants/tiny-kitchen.html', 'business listing')
    ]
  },
  {
    id: 'black-scoop', name: 'Black Scoop Cafe', category: 'cafe', district: 'Juna, Matina',
    address: 'Units 1-3, McPod 2 Building, Camachili Street corner Acacia Street, Juna Subdivision, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Black Scoop Cafe Matina, Camachili Street and Acacia Street, Davao City', status: 'published',
    description: 'Coffee, milk tea, desserts, and meals at the Juna branch.',
    bestFor: 'Coffee, milk tea, and a snack', image: { path: 'assets/images/black-scoop.webp', alt: 'Menu counter and cafe interior at Black Scoop Cafe Matina', depictsVenue: true, creditId: 'black-scoop' },
    sources: [
      ...businessSource('https://www.foodpanda.ph/restaurant/b6dh/black-scoop-cafe-matina', 'Matina branch, menu, and address'),
      ...businessSource('https://us.trip.com/moments/detail/pampanga-1474363-120078854/', 'visitor photo post identifies the Davao Matina branch')
    ]
  },
  {
    id: 'lara-mia', name: 'Lara Mia Cafe & Bistro', category: 'cafe', district: 'Juna, Matina',
    address: 'University Avenue corner Talisay Street, Juna Subdivision, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Lara Mia Cafe and Bistro, University Avenue, Juna, Davao City', status: 'published',
    description: 'Italian-style meals and desserts at University Avenue in Juna.',
    bestFor: 'A cafe meal and dessert', image: { path: 'assets/images/lara-mia.webp', alt: 'Lara Mia Cafe and Bistro entrance in Juna, Matina', depictsVenue: true, creditId: 'lara-mia' },
    sources: [
      ...businessSource('https://www.davaocitydirectory.com/food-and-beverages/bakeshops-cakes-pastries/lara-mia-cafe-bistro.html', 'business address and cafe/bistro listing'),
      ...businessSource('https://wanderlog.com/place/details/1391961/lara-mia-caf%C3%A9--bistro', 'current location listing')
    ]
  },
  {
    id: 'blarneys', name: "Blarney's Irish Pub", category: 'restaurant', district: 'Poblacion',
    address: 'V. Mapa Street corner Tavera Street, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: "Blarney's Irish Pub, V. Mapa Street and Tavera Street, Davao City", status: 'published',
    description: 'An Irish-style pub downtown for pub food and drinks.',
    bestFor: 'A downtown night out', image: { path: 'assets/images/blarneys.webp', alt: "Blarney's Irish Pub interior, bar, and food in Davao City", depictsVenue: true, creditId: 'blarneys' },
    sources: [
      ...businessSource('https://wanderlog.com/place/details/15134878/blarneys-irish-pub', 'current address and pub listing'),
      ...businessSource('https://www.davaocitydirectory.com/tag/irish-pub', 'Davao City business directory')
    ]
  },
  {
    id: 'hygge-coffee', name: 'Hygge Coffee', category: 'cafe', district: 'Juna, Matina',
    address: 'Ground floor, 8Espacio, Juna Avenue, Matina, Davao City', city: 'Davao City',
    mapsQuery: 'Hygge Coffee 8Espacio, Juna Avenue, Davao City', status: 'published',
    description: 'A coffee stop on Juna Avenue with light meals.',
    bestFor: 'Coffee in Matina', image: { path: 'assets/images/hygge-coffee.webp', alt: 'Hygge Coffee soft opening banner at the 8Espacio branch in Juna', depictsVenue: true, creditId: 'hygge-coffee' },
    sources: [
      ...businessSource('https://www.davaofoodtrips.com/coffee-shop/hygge-coffee/hygge-coffee-opens-3rd-branch-in-juna.html', 'Juna branch at 8Espacio'),
      ...businessSource('https://www.foodpanda.ph/restaurant/df75/hygge-coffee-juan-luna', 'brand and menu listing')
    ]
  },
  {
    id: 'daily-dose', name: 'Daily Dose Coffee Bar, Maa', category: 'cafe', district: 'Maa',
    address: 'Unit CO1, Trentino Building, Palmetto Place, Don J. Rodriguez Avenue, Maa, Davao City', city: 'Davao City',
    mapsQuery: 'Daily Dose Coffee Bar Maa, Trentino Building, Davao City', status: 'published',
    description: 'Coffee and all-day meals at the Maa branch, south of the city center.',
    bestFor: 'Coffee and a meal in Maa', image: { path: 'assets/images/daily-dose.webp', alt: 'Iced coffee from the Daily Dose Coffee Bar Maa menu', depictsVenue: false, creditId: 'daily-dose', caption: 'Photo: iced coffee from the Daily Dose Coffee Bar Maa menu' },
    sources: [
      ...businessSource('https://www.foodpanda.ph/restaurant/vmh3/daily-dose-coffee-bar-maa', 'active Maa branch, address, menu, and 2026 reviews'),
      ...businessSource('https://www.foodpanda.ph/city/davao-city/cuisine/coffee?page=2', 'current Davao City listing')
    ]
  }
);

locations.push(
  {
    id: 'dusit-thani', name: 'Dusit Thani Residence Davao', category: 'hotel', district: 'Pampanga, Lanang',
    address: 'Stella Hizon Reyes Drive, Barrio Pampanga, Davao City', city: 'Davao City',
    mapsQuery: 'Dusit Thani Residence Davao, Stella Hizon Reyes Drive, Davao City', status: 'published',
    description: 'Hotel residences with kitchenettes on the north side of the city, suited to a short visit or a longer stay.',
    bestFor: 'A residence-style hotel stay', image: { path: 'assets/images/dusit-thani.webp', alt: 'Exterior and entrance of Dusit Thani Residence Davao', depictsVenue: true, creditId: 'dusit-thani' },
    sources: hotelSource('https://www.dusit.com/dusitthani-residencedavao/', 'Davao City property, address, residences and kitchenettes')
  },
  {
    id: 'acacia-hotel', name: 'Acacia Hotel Davao', category: 'hotel', district: 'Lanang',
    address: 'J.P. Laurel Avenue, Lanang, Davao City', city: 'Davao City',
    mapsQuery: 'Acacia Hotel Davao, J.P. Laurel Avenue, Lanang, Davao City', status: 'published',
    description: 'A Lanang hotel with rooms and suites for visitors planning most of their stops on the north side.',
    bestFor: 'A north-city hotel base', image: { path: 'assets/images/acacia-hotel.webp', alt: 'Acacia Hotel Davao facade and illuminated sign', depictsVenue: true, creditId: 'acacia-hotel' },
    sources: hotelSource('https://acaciahotelsdavao.com/', 'Lanang address, hotel rooms and suites')
  },
  {
    id: 'grand-regal', name: 'Grand Regal Hotel Davao', category: 'hotel', district: 'Lanang',
    address: 'Km. 7, J.P. Laurel Avenue, Lanang, Davao City', city: 'Davao City',
    mapsQuery: 'Grand Regal Hotel Davao, Km. 7 J.P. Laurel Avenue, Lanang, Davao City', status: 'published',
    description: 'A hotel on J.P. Laurel Avenue in Lanang, useful as a base for a north-Davao itinerary.',
    bestFor: 'Staying around Lanang', image: { path: 'assets/images/grand-regal.webp', alt: 'Grand Regal Hotel Davao building and entrance', depictsVenue: true, creditId: 'grand-regal' },
    sources: hotelSource('https://tourism.davaocity.gov.ph/explore-the-city/nightlife/spa/grand-regal-hotel-davao/', 'hotel identity and Km. 7 Lanang address')
  },
  {
    id: 'aeon-suites', name: 'Aeon Suites at Aeon Towers', category: 'hotel', district: 'Bajada',
    address: 'Aeon Towers, J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: 'Aeon Suites Staycation, Aeon Towers, J.P. Laurel Avenue, Davao City', status: 'published',
    description: 'Suites in Aeon Towers for an Abreeza-area stay. Confirm your room category and check-in arrangements with the operator.',
    bestFor: 'A suite near Abreeza', image: { path: 'assets/images/aeon-suites.webp', alt: 'Bedroom in a one-bedroom suite at Aeon Suites Staycation', depictsVenue: true, creditId: 'aeon-suites' },
    sources: [
      ...hotelSource('https://greenwindowsdormitel.com/en/aeon-suites-staycations', 'active Aeon Suites Staycation accommodation and room categories'),
      ...hotelSource('https://aeontowers.com.ph/', 'Aeon Towers address on J.P. Laurel Avenue, Bajada')
    ]
  },
  {
    id: 'waterfront-insular', name: 'Waterfront Insular Hotel Davao', category: 'hotel', district: 'Lanang',
    address: 'Lanang, Davao City', city: 'Davao City',
    mapsQuery: 'Waterfront Insular Hotel Davao, Lanang, Davao City', status: 'published',
    description: 'Garden grounds and Davao Gulf views make this Lanang hotel a choice for a slower city stay.',
    bestFor: 'Gardens and a bayside setting', image: { path: 'assets/images/waterfront-insular.webp', alt: 'Waterfront Insular Hotel Davao entrance surrounded by gardens', depictsVenue: true, creditId: 'waterfront-insular' },
    sources: [
      ...hotelSource('https://www.waterfronthotels.com.ph/waterfront-insular-hotel-davao/', 'hotel grounds, gardens and Davao Gulf setting'),
      ...hotelSource('https://www.waterfronthotels.com.ph/wihd_contact/', 'Lanang, Davao City address')
    ]
  },
  {
    id: 'inspiria-abreeza', name: 'Inspiria Abreeza Davao', category: 'hotel', district: 'Bajada',
    address: 'Inspiria Condominium, J.P. Laurel Avenue, Bajada, Davao City', city: 'Davao City',
    mapsQuery: 'Inspiria Condominium, J.P. Laurel Avenue, Bajada, Davao City', status: 'published',
    description: 'A condo stay beside Abreeza Mall. Units are separately managed, so confirm your host, unit and check-in instructions before booking.',
    bestFor: 'A condo base beside Abreeza', image: { path: 'assets/images/inspiria-abreeza.webp', alt: 'Real exterior of Inspiria Condominium beside Abreeza in Davao City', depictsVenue: true, creditId: 'inspiria-abreeza' },
    sources: [
      ...hotelSource('https://www.lacouronnededavao.com/directions', 'Inspiria Condominium address and location beside Abreeza'),
      ...hotelSource('https://www.booking.com/hotel/ph/inspiria-abreeza-davao.html', 'named condo accommodation listing'),
      ...hotelSource('https://inspiriatower.com/project-details/', 'residential condominium identity')
    ]
  },
  {
    id: 'blue-lotus', name: 'Blue Lotus Hotel', category: 'hotel', district: 'Ecoland',
    address: 'Quimpo Boulevard corner Ecoland Drive, Talomo District, Davao City', city: 'Davao City',
    mapsQuery: 'Blue Lotus Hotel, Quimpo Boulevard and Ecoland Drive, Davao City', status: 'published',
    description: 'A hotel at Quimpo Boulevard and Ecoland Drive, with family rooms and suites for a south-city base.',
    bestFor: 'Staying around Ecoland', image: { path: 'assets/images/blue-lotus.webp', alt: 'Lobby and reception area inside Blue Lotus Hotel Davao', depictsVenue: true, creditId: 'blue-lotus' },
    sources: hotelSource('https://www.bluelotushotel.com/', 'hotel, Ecoland address and family rooms')
  },
  {
    id: 'pinnacle-hotel', name: 'The Pinnacle Hotel and Suites', category: 'hotel', district: 'Sta. Ana Avenue',
    address: 'Sta. Ana Avenue, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: 'The Pinnacle Hotel and Suites, Sta. Ana Avenue, Davao City', status: 'published',
    description: 'A downtown hotel on Sta. Ana Avenue, near Gaisano Mall of Davao and the city\'s central stops.',
    bestFor: 'A downtown sightseeing base', image: { path: 'assets/images/pinnacle-hotel.webp', alt: 'Lobby inside The Pinnacle Hotel and Suites in Davao City', depictsVenue: true, creditId: 'pinnacle-hotel' },
    sources: hotelSource('https://thepinnaclehotel.com/', 'hotel, Sta. Ana address and nearby Gaisano Mall of Davao')
  },
  {
    id: 'apo-view', name: 'The Apo View Hotel', category: 'hotel', district: 'J. Camus Street',
    address: '150 J. Camus Street, Poblacion District, Davao City', city: 'Davao City',
    mapsQuery: 'The Apo View Hotel, 150 J. Camus Street, Davao City', status: 'published',
    description: 'A central hotel on J. Camus Street for visitors who want a downtown base for city walks and meals.',
    bestFor: 'A central Davao stay', image: { path: 'assets/images/apo-view.webp', alt: 'The Apo View Hotel building with pool in the foreground', depictsVenue: true, creditId: 'apo-view' },
    sources: [
      ...hotelSource('https://apoviewhotel.com/', 'hotel and central city setting'),
      ...hotelSource('https://apoviewhotel.com/contact/', '150 J. Camus Street address')
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
  'seda-abreeza': ['stay'],
  'park-inn': ['stay'],
  'dusit-thani': ['stay'], 'acacia-hotel': ['stay'], 'grand-regal': ['stay'],
  'aeon-suites': ['stay'], 'waterfront-insular': ['stay'], 'inspiria-abreeza': ['stay'],
  'blue-lotus': ['stay'], 'pinnacle-hotel': ['stay'], 'apo-view': ['stay'],
  'philippine-eagle-center': ['first-time', 'family'],
  'eden-nature-park': ['family'],
  'jacks-ridge': ['tonight', 'first-time'],
  'davao-famous': ['first-time', 'family', 'food'],
  'totsys': ['family', 'food'],
  'barok': ['food'],
  'capris': ['family', 'food'],
  'la-flee': ['tonight', 'food'],
  'atcurbside': ['food'],
  'robata': ['food'],
  'tiny-kitchen': ['first-time', 'food'],
  'black-scoop': ['food'],
  'lara-mia': ['food'],
  'blarneys': ['tonight', 'food'],
  'hygge-coffee': ['food'],
  'daily-dose': ['food']
};
const areas = {
  'peoples-park': 'downtown', 'roxas-night-market': 'downtown',
  'crocodile-park': 'south', 'kadayawan-village': 'downtown',
  'marina-tuna': 'south', 'bistro-rosario': 'downtown',
  'purge-coffee': 'south', 'green-coffee': 'north',
  'seda-abreeza': 'north', 'park-inn': 'north',
  'dusit-thani': 'north', 'acacia-hotel': 'north', 'grand-regal': 'north',
  'aeon-suites': 'north', 'waterfront-insular': 'north', 'inspiria-abreeza': 'north',
  'blue-lotus': 'south', 'pinnacle-hotel': 'downtown', 'apo-view': 'downtown',
  'philippine-eagle-center': 'uplands', 'eden-nature-park': 'uplands',
  'jacks-ridge': 'south',
  'davao-famous': 'downtown', 'totsys': 'north', 'barok': 'north',
  'capris': 'north', 'la-flee': 'north', 'atcurbside': 'downtown',
  'robata': 'north', 'tiny-kitchen': 'downtown', 'black-scoop': 'south',
  'lara-mia': 'south', 'blarneys': 'downtown', 'hygge-coffee': 'south',
  'daily-dose': 'south'
};
for (const place of locations) {
  place.intents = guideTags[place.id];
  place.area = areas[place.id];
}
