export function buildGoogleMapsUrl(location) {
  const query = location.mapsQuery || `${location.name}, ${location.address}`;
  const url = new URL('https://www.google.com/maps/search/');
  url.searchParams.set('api', '1');
  url.searchParams.set('query', query);
  if (location.placeId) url.searchParams.set('query_place_id', location.placeId);
  return url.toString();
}

export function buildGoogleDirectionsUrl(location) {
  const url = new URL('https://www.google.com/maps/dir/');
  url.searchParams.set('api', '1');
  url.searchParams.set('destination', location.mapsQuery || `${location.name}, ${location.address}`);
  if (location.placeId) url.searchParams.set('destination_place_id', location.placeId);
  return url.toString();
}
