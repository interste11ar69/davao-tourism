/**
 * Google Maps and Navigation Utilities for Davao City
 */

/**
 * Builds a direct Google Maps search and navigation URL.
 * Supports coordinates, place name, and street address.
 */
export function buildGoogleMapsUrl(params) {
  const { lat, lng, name, address } = params;
  if (lat !== undefined && lng !== undefined) {
    // Exact coordinate query provides the most precise pin in Google Maps
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }
  const query = [name, address, "Davao City", "Philippines"].filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/**
 * Builds a Google Maps turn-by-turn driving directions URL.
 */
export function buildGoogleDirectionsUrl(lat, lng) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

/**
 * Formats coordinates into standard geographic display format.
 * Example: 7.1849 N, 125.4153 E
 */
export function formatCoordinates(lat, lng) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
}

/**
 * Calculates straight-line distance in kilometers between two points using the Haversine formula.
 */
export function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Davao City Center (City Hall / San Pedro Square) benchmark coordinates.
 */
export const DAVAO_CITY_CENTER = {
  lat: 7.0644,
  lng: 125.6090,
  name: "Davao City Hall"
};
