/**
 * Curated Database of 100% Davao City Locations
 * Verified addresses, precise geographic coordinates, and curated highlights.
 */

export const categories = [
  { id: "all", label: "All Destinations" },
  { id: "tourist-spot", label: "Tourist Spots" },
  { id: "restaurant", label: "Restaurants" },
  { id: "cafe", label: "Specialty Cafes" },
  { id: "hotel", label: "Hotels & Stays" }
];

export const locations = [
  // ---------------- TOURIST SPOTS ----------------
  {
    id: "philippine-eagle-center",
    name: "Philippine Eagle Center",
    category: "tourist-spot",
    district: "Baguio District",
    address: "Malagos, Baguio District, Davao City, 8000 Davao del Sur",
    coordinates: { lat: 7.18488, lng: 125.41529 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.18488,125.41529",
    tagline: "Sanctuary for the majestic national bird and rich rainforest canopy",
    description: "A world-renowned 8.4-hectare conservation breeding sanctuary set at the foothills of Mount Apo. Home to the critically endangered Philippine Eagle and various indigenous raptors, birds, and flora.",
    highlights: [
      "Home of the majestic Philippine Eagle conservation breeding program",
      "Immersive rainforest nature trail under high canopies",
      "Interactive educational raptor exhibits and native wildlife"
    ],
    image: "assets/images/spots/philippine-eagle.jpg",
    priceRange: "$",
    openingHours: "8:00 AM - 5:00 PM Daily",
    bestFor: "Wildlife Conservation, Eco-Tourism & Nature Walks"
  },
  {
    id: "eden-nature-park",
    name: "Eden Nature Park and Resort",
    category: "tourist-spot",
    district: "Toril District",
    address: "Brgy. Eden, Toril, Davao City, 8000 Davao del Sur",
    coordinates: { lat: 7.03256, lng: 125.39735 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.03256,125.39735",
    tagline: "Cool mountain retreat overlooking Davao Gulf and highland pine forests",
    description: "A 75-hectare mountain resort nestled 2,600 feet above sea level. Offers crisp mountain air, over 100,000 pine trees, flower terraces, deer parks, and indigenous cultural exhibits.",
    highlights: [
      "Tinubdan ancestral cultural heritage village",
      "Panoramic views of Davao Gulf from 2,600 feet elevation",
      "Lush organic vegetable and hydroponic gardens"
    ],
    image: "assets/images/spots/eden-nature-park.jpg",
    priceRange: "$$",
    openingHours: "9:00 AM - 5:00 PM Daily",
    bestFor: "Mountain Hiking, Family Retreats & Cool Mountain Air"
  },
  {
    id: "malagos-garden-resort",
    name: "Malagos Garden Resort & Chocolate Museum",
    category: "tourist-spot",
    district: "Baguio District",
    address: "Calinan-Baguio-Cadalian Road, Malagos, Davao City",
    coordinates: { lat: 7.18180, lng: 125.41720 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.18180,125.41720",
    tagline: "The birthplace of award-winning single-origin Malagos chocolate",
    description: "An agri-eco resort famous for pioneering Philippine tree-to-bar artisan chocolate. Features the Philippines' first chocolate museum, interactive bird shows, butterfly domes, and artisan cheese tastings.",
    highlights: [
      "Tree-to-bar interactive Chocolate Museum and workshop",
      "Award-winning single-origin artisan chocolate and goat cheese",
      "Interactive bird feeding dome and butterfly sanctuary"
    ],
    image: "assets/images/spots/malagos-resort.jpg",
    priceRange: "$$",
    openingHours: "6:00 AM - 9:00 PM Daily",
    bestFor: "Artisan Chocolate, Farm Experiences & Botanical Gardens"
  },
  {
    id: "peoples-park",
    name: "People's Park Davao",
    category: "tourist-spot",
    district: "Poblacion District",
    address: "Palma Gil Street, Poblacion District, Davao City",
    coordinates: { lat: 7.07020, lng: 125.60740 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07020,125.60740",
    tagline: "Downtown urban green sanctuary featuring the iconic Durian Dome",
    description: "A 4-hectare public park in the heart of downtown Davao City. Known for its towering Durian Dome visitor center, life-sized indigenous sculptures by artist Kublai Millan, dancing musical fountain, and walking tracks.",
    highlights: [
      "Iconic spiky Durian Dome architectural landmark",
      "Celebrated cultural sculptures honoring indigenous Mindanao tribes",
      "Tree-lined shaded promenade with dancing water fountain"
    ],
    image: "assets/images/spots/peoples-park.jpg",
    priceRange: "$",
    openingHours: "5:00 AM - 10:00 PM Daily",
    bestFor: "Morning Jogging, Cultural Sculptures & Peaceful Green Space"
  },
  {
    id: "roxas-night-market",
    name: "Roxas Avenue Night Market",
    category: "tourist-spot",
    district: "Poblacion District",
    address: "Roxas Avenue, Poblacion District, Davao City",
    coordinates: { lat: 7.07350, lng: 125.61270 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07350,125.61270",
    tagline: "Lively street food epicenter and night-time cultural melting pot",
    description: "The city's vibrant evening gathering place where locals and travelers converge for freshly grilled tuna belly, skewered barbecue, exotic fruits including fresh durian and marang, and open-air massage stalls.",
    highlights: [
      "Endless rows of sizzling local barbecue and fresh seafood grills",
      "Fresh Davao seasonal fruit stalls (Durian, Marang, Mangosteen)",
      "High security, friendly atmosphere, and affordable local street snacks"
    ],
    image: "assets/images/spots/roxas-night-market.jpg",
    priceRange: "$",
    openingHours: "5:00 PM - 11:30 PM Daily",
    bestFor: "Street Food Culinary Exploration & Nightlife Vibes"
  },
  {
    id: "bone-collector-museum",
    name: "D' Bone Collector Museum",
    category: "tourist-spot",
    district: "Bucana District",
    address: "76-A San Pedro Street, Bucana, Davao City",
    coordinates: { lat: 7.06010, lng: 125.60250 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.06010,125.60250",
    tagline: "One of the world's largest collections of articulated skeletal specimens",
    description: "An extraordinary natural history museum housing over 700 curated bone specimens, including a massive 41-foot sperm whale skeleton, dolphins, grizzly bears, and indigenous Mindanao marine life.",
    highlights: [
      "41-foot sperm whale skeleton and deep-sea marine specimens",
      "Global wildlife education and oceanic conservation advocacy",
      "Guided scientific tours on biodiversity preservation"
    ],
    image: "assets/images/spots/bone-collector.jpg",
    priceRange: "$",
    openingHours: "9:00 AM - 5:00 PM (Mon-Sat)",
    bestFor: "Educational Curiosity, Marine Biology & Conservation"
  },
  {
    id: "davao-crocodile-park",
    name: "Davao Crocodile Park & Wildlife Sanctuary",
    category: "tourist-spot",
    district: "Ma-a District",
    address: "Riverfront Corporate City, Diversion Highway, Ma-a, Davao City",
    coordinates: { lat: 7.09840, lng: 125.59460 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.09840,125.59460",
    tagline: "Modern wildlife sanctuary and home to impressive saltwater crocodiles",
    description: "A premier zoological institution focused on crocodile breeding and wildlife conservation. Features giant saltwater and freshwater crocodiles, raptor flight shows, butterfly gardens, and exotic animal encounters.",
    highlights: [
      "State-of-the-art crocodile conservation facility",
      "Exotic animal interactions and afternoon bird shows",
      "Adjacent Tribu K'Mindanawan cultural village"
    ],
    image: "assets/images/spots/crocodile-park.jpg",
    priceRange: "$$",
    openingHours: "8:00 AM - 6:00 PM Daily",
    bestFor: "Wildlife Encounters, Kids & Family Outings"
  },
  {
    id: "jacks-ridge",
    name: "Jack's Ridge Resort and Amphitheater",
    category: "tourist-spot",
    district: "Matina District",
    address: "117 Shrine Hills Road, Matina, Davao City",
    coordinates: { lat: 7.06080, lng: 125.58020 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.06080,125.58020",
    tagline: "Historic World War II vantage point with sweeping Davao city views",
    description: "Perched atop Shrine Hills, Jack's Ridge was once a fortified retreat for retreating Japanese forces in 1945. Today it features an open-air amphitheater, historic war relics, and an unrivaled vista of Davao City glittering at night.",
    highlights: [
      "Sweeping panoramic city vista and glittering evening skyline",
      "Preserved World War II tunnels and historic artillery artifacts",
      "Karlo's Gourmet and Taklobo hillside open-air dining"
    ],
    image: "assets/images/spots/jacks-ridge.jpg",
    priceRange: "$$",
    openingHours: "10:00 AM - 11:00 PM Daily",
    bestFor: "Scenic Sunset Overlook, History & Evening Gatherings"
  },

  // ---------------- RESTAURANTS ----------------
  {
    id: "balik-bukid-farm-kitchen",
    name: "Balik Bukid Farm + Kitchen",
    category: "restaurant",
    district: "Matina District",
    address: "Sandawa Plaza, Quimpo Boulevard, Matina, Davao City",
    coordinates: { lat: 7.05430, lng: 125.59750 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.05430,125.59750",
    tagline: "Farm-to-table culinary artistry in an eco-artisan rustic sanctuary",
    description: "A beloved Davao landmark celebrated for organic farm-to-table cuisine. Sourced directly from their family farm in Wao, dishes are prepared without artificial flavorings and served inside a charming dining hall handcrafted from recycled materials.",
    highlights: [
      "Signature organic Blue Rice naturally tinted with butterfly pea flowers",
      "House-churned carabao milk artisan ice cream (Turon, Durian, Tablea)",
      "Zero-preservative heirloom recipes celebrating Mindanao produce"
    ],
    image: "assets/images/restaurants/balik-bukid.jpg",
    priceRange: "$$",
    openingHours: "11:00 AM - 2:00 PM, 5:00 PM - 9:00 PM Daily",
    bestFor: "Organic Farm-to-Table Dining & Creative Filipino Comfort Food"
  },
  {
    id: "rekado-filipino-comfort-cuisine",
    name: "Rekado Filipino Comfort Cuisine",
    category: "restaurant",
    district: "Poblacion District",
    address: "1050 Jacinto Extension, Poblacion District, Davao City",
    coordinates: { lat: 7.07920, lng: 125.61740 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07920,125.61740",
    tagline: "Modern Filipino gastronomic heritage crafted with Dabawenyo soul",
    description: "Housed in a chic, contemporary two-story heritage building, Rekado elevates classic Philippine home cooking with refined culinary techniques. Signature creations include their melt-in-your-mouth beef kaldereta and savory crispy pork belly.",
    highlights: [
      "Slow-simmered Kaldereta with creamy liver spread reduction",
      "Modern heritage architecture with warm Dabawenyo hospitality",
      "Famous artisan Durian Cheesecake and local dessert pairings"
    ],
    image: "assets/images/restaurants/rekado.jpg",
    priceRange: "$$",
    openingHours: "11:00 AM - 9:00 PM Daily",
    bestFor: "Elevated Filipino Dinners & Celebratory Family Feasts"
  },
  {
    id: "blue-posts-boiling-crabs",
    name: "Blue Posts Boiling Crabs and Shrimps",
    category: "restaurant",
    district: "Bajada District",
    address: "JP Laurel Avenue, Bajada, Davao City",
    coordinates: { lat: 7.08980, lng: 125.61490 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.08980,125.61490",
    tagline: "Casual, hands-on Louisiana-style seafood boil with local spices",
    description: "Born and bred in Davao, Blue Posts pioneered the fun, communal bag-boiled seafood dining style. Guests strap on plastic bibs and savor fresh local mud crabs and prawns tossed in their signature sambal and garlic butter sauces.",
    highlights: [
      "Fresh Davao mud crabs and prawns drenched in signature Blue Posts Cajun sauce",
      "Hands-on boodle-style communal dining on wax-lined wooden tables",
      "Crispy baby squid and garlic-tossed seafood buckets"
    ],
    image: "assets/images/restaurants/blue-posts.jpg",
    priceRange: "$$$",
    openingHours: "10:00 AM - 10:00 PM Daily",
    bestFor: "Communal Seafood Feasts & Group Gatherings"
  },
  {
    id: "tiny-kitchen",
    name: "Tiny Kitchen Creations",
    category: "restaurant",
    district: "Torres District",
    address: "F. Torres Street, Poblacion District, Davao City",
    coordinates: { lat: 7.07820, lng: 125.61050 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07820,125.61050",
    tagline: "Authentic Spanish paella and award-winning artisan desserts",
    description: "A treasured Davao culinary gem founded by Chef Vincent and Donna Rodriguez. Famous across Mindanao for slow-cooked authentic Valenciana and Mariscos paellas, savory tapas, and world-class pastries.",
    highlights: [
      "Handmade traditional Paella cooked in cast-iron pans to order",
      "Slow-braised tender Lengua Estofada in rich mushroom sauce",
      "Legendary Red Velvet and artisan chocolate crinkles"
    ],
    image: "assets/images/restaurants/tiny-kitchen.jpg",
    priceRange: "$$",
    openingHours: "11:00 AM - 9:00 PM (Closed Sundays)",
    bestFor: "Spanish-Dabawenyo Bistro Cuisine & Decadent Pastries"
  },
  {
    id: "yellow-fin-seafood",
    name: "Yellow Fin Seafood Restaurant",
    category: "restaurant",
    district: "Sandawa District",
    address: "Sandawa Plaza, Quimpo Boulevard, Davao City",
    coordinates: { lat: 7.05380, lng: 125.59620 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.05380,125.59620",
    tagline: "The golden standard of authentic Dabawenyo grilled yellowfin tuna",
    description: "An institution of Dabawenyo cuisine, Yellow Fin showcases the supreme quality of freshly landed Gulf of Davao tuna. Renowned for its sizzling tuna belly, grilled panga (tuna jaw), and flavorful native chicken soup.",
    highlights: [
      "Charcoal-grilled tuna panga basted in sweet-savory calamansi glaze",
      "Tuna Sisig served sizzling on cast iron with green chilies",
      "Traditional Imbao clam soup with ginger and lemongrass"
    ],
    image: "assets/images/restaurants/yellow-fin.jpg",
    priceRange: "$$",
    openingHours: "10:00 AM - 9:30 PM Daily",
    bestFor: "Authentic Davao Seafood & Iconic Tuna Specialties"
  },
  {
    id: "claudes-le-cafe-de-ville",
    name: "Claude's Le Cafe de Ville",
    category: "restaurant",
    district: "Poblacion District",
    address: "The Oboza Heritage House, Rizal Street, Davao City",
    coordinates: { lat: 7.06940, lng: 125.60670 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.06940,125.60670",
    tagline: "Timeless French haute cuisine inside a historic 1920s ancestral home",
    description: "Set within the storied Oboza Heritage House, Claude's provides an intimate dining experience blending classical French culinary tradition with Mindanao's finest fresh ingredients and curated international wines.",
    highlights: [
      "Exquisite Chateaubriand steak with Béarnaise sauce",
      "Fresh French escargots, duck confit, and artisanal crepe Suzette",
      "Historic 1920s heritage mansion architecture and romantic gardens"
    ],
    image: "assets/images/restaurants/claudes.jpg",
    priceRange: "$$$$",
    openingHours: "11:00 AM - 2:00 PM, 6:00 PM - 10:00 PM (Closed Sundays)",
    bestFor: "Fine Dining, Romantic Dinners & Heritage Architecture"
  },
  {
    id: "marina-tuna",
    name: "Marina Tuna Seafood Restaurant",
    category: "restaurant",
    district: "Sasa District",
    address: "KM 8, Barrio Pampanga, Sasa, Davao City",
    coordinates: { lat: 7.11210, lng: 125.65480 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.11210,125.65480",
    tagline: "World-famous home of the authentic 10-Way Tuna Culinary Feast",
    description: "Renowned globally as the culinary ambassador of Philippine tuna. Marina Tuna serves tuna prepared in ten distinct Filipino cooking styles, from raw sashimi and kinilaw to crispy tuna tail and sinigang sa bayabas.",
    highlights: [
      "The celebrated 10-Way Tuna culinary tasting journey",
      "Sashimi-grade yellowfin tuna flown in fresh daily",
      "Panoramic dining hall overlooking the Pakiputan Strait"
    ],
    image: "assets/images/restaurants/marina-tuna.jpg",
    priceRange: "$$$",
    openingHours: "9:00 AM - 10:00 PM Daily",
    bestFor: "Visiting Dignitaries, Tuna Lovers & Expansive Seafood Feasts"
  },

  // ---------------- SPECIALTY CAFES ----------------
  {
    id: "glasshouse-coffee",
    name: "Glasshouse Coffee at Oboza",
    category: "cafe",
    district: "Poblacion District",
    address: "Oboza Heritage House Compound, Rizal St. cor. Ponciano St., Davao City",
    coordinates: { lat: 7.06930, lng: 125.60680 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.06930,125.60680",
    tagline: "Minimalist glass pavilion nestled amidst century-old acacia gardens",
    description: "A striking architectural glass box cafe set inside the lush gardens of the Oboza Heritage estate. Dedicated to spotlighting single-origin Mindanao coffee beans, slow pour-overs, and delicate French pastries.",
    highlights: [
      "Single-origin Mount Apo specialty Arabica hand-brewed pour-overs",
      "360-degree floor-to-ceiling glass design enveloped in tropical greenery",
      "House-baked almond croissants and Basque burnt cheesecake"
    ],
    image: "assets/images/cafes/glasshouse-coffee.jpg",
    priceRange: "$$",
    openingHours: "7:00 AM - 10:00 PM Daily",
    bestFor: "Aesthetic Morning Coffee, Outdoor Garden Reading & Design Lovers"
  },
  {
    id: "purge-coffee-roaster",
    name: "Purge Coffee Roaster",
    category: "cafe",
    district: "Matina District",
    address: "CVA Building, Tulip Drive, Matina, Davao City",
    coordinates: { lat: 7.04980, lng: 125.58730 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.04980,125.58730",
    tagline: "Nationally acclaimed champion micro-roaster pushing coffee boundaries",
    description: "Founded by award-winning baristas, Purge Coffee Roaster is Davao's coffee laboratory. Specializing in precision anaerobic fermentation, bespoke roast profiles, and high-scoring Mindanao microlots.",
    highlights: [
      "Precision-roasted competition microlots from Bansalan and Mount Apo",
      "Experimental espresso tonics and nitro cold brews",
      "Clean, warm Scandinavian wooden aesthetic with expert barista bar"
    ],
    image: "assets/images/cafes/purge-coffee.jpg",
    priceRange: "$$",
    openingHours: "8:00 AM - 9:00 PM Daily",
    bestFor: "Coffee Connoisseurs, Single-Origin Tastings & Barista Art"
  },
  {
    id: "fourth-street-cafe",
    name: "Fourth Street Cafe",
    category: "cafe",
    district: "Poblacion District",
    address: "Narra Street, Poblacion District, Davao City",
    coordinates: { lat: 7.08150, lng: 125.61420 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.08150,125.61420",
    tagline: "Cozy urban hideout with artisanal matcha, cold brews, and warm brunch",
    description: "A charming neighborhood cafe in central Davao known for its welcoming community vibe, excellent cold brew tonics, Ceremonial Uji matcha lattes, and hearty pasta and sourdough toast brunch menus.",
    highlights: [
      "Ceremonial-grade Japanese Uji Matcha with oat milk",
      "Handcrafted cold brews steeped for 18 hours",
      "Intimate, plant-filled reading nook with high-speed fiber internet"
    ],
    image: "assets/images/cafes/fourth-street.jpg",
    priceRange: "$$",
    openingHours: "8:00 AM - 10:00 PM Daily",
    bestFor: "Casual Coffee Dates, Remote Laptop Work & Brunch"
  },
  {
    id: "stash-coffee-co",
    name: "Stash Coffee Co.",
    category: "cafe",
    district: "Obrero District",
    address: "Corner Iñigo and Porras St., Bo. Obrero, Davao City",
    coordinates: { lat: 7.08540, lng: 125.61780 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.08540,125.61780",
    tagline: "Industrial-chic roastery and creative haven in Davao's trendiest quarter",
    description: "Located in the lively Obrero neighborhood, Stash Coffee pairs sleek exposed concrete architecture with artisanal coffee craft. Famous for its energizing espresso sparkle and comfortable collaborative work spaces.",
    highlights: [
      "The 'Black Sparkle' signature drink blending espresso with tonic and citrus",
      "Custom espresso blends roasted in-house on a San Franciscan machine",
      "Spacious loft-style seating optimized for creative discussions"
    ],
    image: "assets/images/cafes/stash-coffee.jpg",
    priceRange: "$$",
    openingHours: "7:30 AM - 11:00 PM Daily",
    bestFor: "Creative Workspace, Evening Coffee & Trendy Obrero Vibe"
  },
  {
    id: "paramount-coffee",
    name: "Paramount Coffee Roasters",
    category: "cafe",
    district: "Poblacion District",
    address: "Block 6 Lot 14, Mabini Street, Poblacion District, Davao City",
    coordinates: { lat: 7.07320, lng: 125.60940 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07320,125.60940",
    tagline: "Direct-trade seed-to-cup champion for indigenous Mindanao farmers",
    description: "Paramount Coffee works directly with Bagobo-Tagabawa coffee farming families around Mount Apo. Every cup served honors fair-trade values, sustainable agroforestry, and pristine mountain terroir.",
    highlights: [
      "100% single-origin Mindanao Arabica sourced with direct farmer equity",
      "Clean manual brew bar with Chemex, V60, and Aeropress stations",
      "Freshly baked local fruit scones and artisan pastries"
    ],
    image: "assets/images/cafes/paramount-coffee.jpg",
    priceRange: "$$",
    openingHours: "8:00 AM - 9:00 PM Daily",
    bestFor: "Ethical Coffee, Farmer Advocacy & Pure Mountain Terroir"
  },
  {
    id: "kape-fabrika",
    name: "Kape Fabrika Micro-Roastery",
    category: "cafe",
    district: "Marfori District",
    address: "Circumferential Road, Marfori Heights, Davao City",
    coordinates: { lat: 7.08100, lng: 125.60450 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.08100,125.60450",
    tagline: "Serene residential garden cafe celebrating artisanal tablea and coffee",
    description: "Tucked away in quiet Marfori Heights, Kape Fabrika blends slow-roasted local coffee with pure Davao tablea cacao. Its peaceful garden courtyard provides a serene escape from downtown bustle.",
    highlights: [
      "Signature Davao Tablea Mocha made with 100% pure fermented cacao",
      "Serene shaded garden patio surrounded by tropical ferns",
      "Freshly baked sourdough pastries and grilled toast sandwiches"
    ],
    image: "assets/images/cafes/kape-fabrika.jpg",
    priceRange: "$$",
    openingHours: "9:00 AM - 9:00 PM (Closed Mondays)",
    bestFor: "Quiet Courtyard Reading, Cacao Delights & Serenity"
  },

  // ---------------- HOTELS & STAYS ----------------
  {
    id: "dusit-thani-residence",
    name: "Dusit Thani Residence Davao",
    category: "hotel",
    district: "Lanang / Pampanga",
    address: "Stella Hizon Reyes Drive, Bo. Pampanga, Davao City",
    coordinates: { lat: 7.11350, lng: 125.65650 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.11350,125.65650",
    tagline: "Five-star luxury combining Thai royal elegance with Dabawenyo warmth",
    description: "An international 5-star oasis on the coast of Davao City. Features expansive residential suites with private balconies, a breathtaking lagoon swimming pool, full-service Namm luxury spa, and world-class culinary venues.",
    highlights: [
      "Sprawling lagoon-style tropical outdoor swimming pool",
      "Benjarong fine-dining authentic Royal Thai restaurant",
      "Unrivaled coastal views of Samal Island across the Pakiputan Strait"
    ],
    image: "assets/images/hotels/dusit-thani.jpg",
    priceRange: "$$$$",
    openingHours: "24/7 Front Desk",
    bestFor: "Luxury Vacations, Executive Retreats & 5-Star Indulgence"
  },
  {
    id: "pearl-farm-beach-resort",
    name: "Pearl Farm Beach Resort",
    category: "hotel",
    district: "Samal Island Gateway",
    address: "Marina Terminal: KM 9, Sasa, Davao City (Direct Resort Ferry)",
    coordinates: { lat: 7.02670, lng: 125.71750 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.02670,125.71750",
    tagline: "Iconic island paradise featuring overwater stilt villas by Bobby Mañosa",
    description: "Once a cultivation sanctuary for golden pearls, this world-renowned 5-star resort is accessed via its private marina in Davao City. Showcases stilt villas inspired by Samal and Badjao tribal architecture and turquoise waters.",
    highlights: [
      "World-famous overwater Mandaya and Samal stilt villas",
      "Protected marine sanctuary with pristine coral reefs and dive spots",
      "Private boat transfer departing from the Davao City Marina Terminal"
    ],
    image: "assets/images/hotels/pearl-farm.jpg",
    priceRange: "$$$$",
    openingHours: "24/7 Island Concierge",
    bestFor: "Honeymoons, Tropical Luxury & Island Escapes"
  },
  {
    id: "seda-abreeza",
    name: "Seda Abreeza",
    category: "hotel",
    district: "Bajada District",
    address: "J.P. Laurel Avenue, Bajada, Davao City",
    coordinates: { lat: 7.09450, lng: 125.61630 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.09450,125.61630",
    tagline: "Contemporary lifestyle hotel connected to the Abreeza commercial hub",
    description: "A premier hotel combining sleek urban aesthetics with exceptional convenience. Located along Davao's main transit artery, it offers direct access to the Abreeza Mall complex, meeting halls, and Misto restaurant.",
    highlights: [
      "Direct pedestrian bridge to Abreeza Ayala Mall shopping and dining",
      "Misto restaurant showcasing international and Davao fusion dishes",
      "Rooftop lap pool, modern fitness center, and fast business WiFi"
    ],
    image: "assets/images/hotels/seda-abreeza.jpg",
    priceRange: "$$$",
    openingHours: "24/7 Front Desk",
    bestFor: "Business Travel, Shopping Convenience & Urban Comfort"
  },
  {
    id: "the-apo-view-hotel",
    name: "The Apo View Hotel",
    category: "hotel",
    district: "Poblacion District",
    address: "150 J. Camus Street, Poblacion District, Davao City",
    coordinates: { lat: 7.07060, lng: 125.60830 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.07060,125.60830",
    tagline: "Davao's pioneer luxury hotel celebrating 75 years of Dabawenyo hospitality",
    description: "Established in 1948, The Apo View Hotel is Davao's oldest and most historic grand hotel. Fully modernized with contemporary comforts while retaining its majestic cultural heritage, it stands steps away from People's Park.",
    highlights: [
      "Historic landmark hotel established in 1948 with rich local heritage",
      "Downtown walking access to People's Park, city hall, and museums",
      "Grand ballroom, 24-hour casino, and outdoor garden pool"
    ],
    image: "assets/images/hotels/apo-view.jpg",
    priceRange: "$$$",
    openingHours: "24/7 Front Desk",
    bestFor: "Heritage Enthusiasts, Downtown Walking & Conferences"
  },
  {
    id: "waterfront-insular-hotel",
    name: "Waterfront Insular Hotel Davao",
    category: "hotel",
    district: "Lanang District",
    address: "KM 7, Lanang, Davao City",
    coordinates: { lat: 7.10650, lng: 125.64820 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.10650,125.64820",
    tagline: "Sprawling beachfront garden resort framed by towering coconut palms",
    description: "A tropical coastal resort sprawling over verdant beachfront acres in Lanang. Features low-rise Philippine-Spanish heritage architecture, palm-fringed gardens fronting the Davao Gulf, and open-air dining pavilions.",
    highlights: [
      "Extensive manicured beachfront gardens with mature coconut palms",
      "Open-air Pirata bar and Cafe Uno garden terrace dining",
      "Resort serenity located just 15 minutes from Davao International Airport"
    ],
    image: "assets/images/hotels/waterfront-insular.jpg",
    priceRange: "$$$",
    openingHours: "24/7 Front Desk",
    bestFor: "Garden Weddings, Resort Relaxation & Airport Proximity"
  },
  {
    id: "hop-inn-hotel-davao",
    name: "Hop Inn Hotel Davao",
    category: "hotel",
    district: "Bajada District",
    address: "JP Laurel Avenue, Bajada, Davao City",
    coordinates: { lat: 7.09120, lng: 125.61520 },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.09120,125.61520",
    tagline: "Spotless, modern budget hotel with Japanese efficiency in prime Bajada",
    description: "A high-quality, reliable modern hotel designed for smart travelers. Offers pristine, soundproofed guestrooms with high-pressure power showers, comfortable beds, and high-speed Wi-Fi right in central Bajada.",
    highlights: [
      "Spotless, soundproofed rooms with premium pocket-spring beds",
      "Unbeatable location walking distance to dining hubs and malls",
      "24-hour security, reliable high-speed Wi-Fi, and top value pricing"
    ],
    image: "assets/images/hotels/hop-inn.jpg",
    priceRange: "$",
    openingHours: "24/7 Front Desk",
    bestFor: "Budget-Conscious Travelers, Solo Explorers & City Trips"
  }
];

export const kadayawanTribes = [
  { name: "Ata", description: "Dwellers of the northern forests, known for intricate beadwork and bamboo instruments." },
  { name: "Bagobo-Klata", description: "Forest guardians of the foot of Mount Apo, masters of woven abaca fibers." },
  { name: "Bagobo-Tagabawa", description: "Known for the sacred Inabal cloth woven from natural abaca and plant dyes." },
  { name: "Matigsalug", description: "River people of the Salug (Davao) River basin, celebrated for hunting and harvest dances." },
  { name: "Ovu-Manuvu", description: "Renowned for their vibrant brass casting, beadwork, and epic musical oral chants." },
  { name: "Iranun", description: "Maritime navigators and skilled woodcarvers with ancestral ties to the coastline." },
  { name: "Kagan", description: "Original inhabitants of the Davao river plains, renowned for agriculture and diplomacy." },
  { name: "Maguindanaon", description: "People of the flooded plains, famous for the majestic Kulintang bronze gong ensemble." },
  { name: "Maranao", description: "People of Lake Lanao living in Davao, renowned for the elegant Okir wood and brass carving." },
  { name: "Sama", description: "Ocean dwellers and sea-farers, master weavers of the vibrant geometric Tepos mats." },
  { name: "Taosug", description: "People of the Current, recognized for heroic poetry, metalwork, and Pis Siyabit textiles." }
];

export const davaoIcons = [
  {
    name: "Mount Apo",
    subtitle: "The Sacred Grandfather",
    description: "Standing at 2,954 meters (9,692 ft), Mount Apo is the highest mountain peak in the Philippines and a sacred ancestral landmark for indigenous tribes."
  },
  {
    name: "Philippine Eagle",
    subtitle: "The King of Birds",
    description: "The critically endangered national bird of the Philippines, representing strength, valor, and the biodiversity of Davao's virgin rainforests."
  },
  {
    name: "Durian",
    subtitle: "The King of Fruits",
    description: "Rich, creamy, and iconic, Davao produces over 80% of the Philippines' durian, symbolizing the bountiful agricultural harvest of the region."
  },
  {
    name: "Waling-Waling",
    subtitle: "Queen of Philippine Orchids",
    description: "Vanda sanderiana, endemic to the rainforests of Davao, is revered as the Queen of Philippine Flowers for its extraordinary velvet purple petals."
  }
];
