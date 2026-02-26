export interface Location {
  name: string;
  lat: number;
  lng: number;
}

export const LOCATIONS: Location[] = [
  { name: "Clifden", lat: 53.489, lng: -10.019 },
  { name: "Letterfrack", lat: 53.551, lng: -9.946 },
  { name: "Roundstone", lat: 53.401, lng: -9.921 },
  { name: "Leenane", lat: 53.596, lng: -9.839 },
  { name: "Cleggan", lat: 53.561, lng: -10.113 },
  { name: "Ballyconneely", lat: 53.425, lng: -10.090 },
  { name: "Recess", lat: 53.462, lng: -9.828 },
  { name: "Cashel", lat: 53.437, lng: -9.861 },
  { name: "Inishbofin Ferry", lat: 53.559, lng: -10.124 },
  { name: "Kylemore Abbey", lat: 53.559, lng: -9.889 },
  { name: "Galway City", lat: 53.274, lng: -9.049 },
  { name: "Oughterard", lat: 53.432, lng: -9.323 },
  { name: "Maam Cross", lat: 53.445, lng: -9.601 },
  { name: "Spiddal", lat: 53.243, lng: -9.307 },
  { name: "Shannon Airport", lat: 52.702, lng: -8.925 },
  { name: "Knock Airport", lat: 53.910, lng: -8.818 },
  { name: "Westport", lat: 53.800, lng: -9.521 },
  { name: "Cong", lat: 53.537, lng: -9.284 },
];

const EARTH_RADIUS_KM = 6371;

export function haversineDistance(a: Location, b: Location): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const sinLat = Math.sin(dLat / 2);
  const sinLng = Math.sin(dLng / 2);
  const h =
    sinLat * sinLat + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * sinLng * sinLng;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(h));
}

export const BASE_FARE = 4.0;
export const PER_KM_RATE = 1.85;
export const NIGHT_SURCHARGE = 5.0;
export const WEEKEND_SURCHARGE = 3.0;

export function estimateFare(
  pickup: Location,
  dropoff: Location,
  isNight: boolean,
  isWeekend: boolean
): { distanceKm: number; fare: number } {
  const distanceKm = haversineDistance(pickup, dropoff);
  const roadFactor = 1.35; // rural roads are winding
  const roadDistance = distanceKm * roadFactor;
  let fare = BASE_FARE + roadDistance * PER_KM_RATE;
  if (isNight) fare += NIGHT_SURCHARGE;
  if (isWeekend) fare += WEEKEND_SURCHARGE;
  return { distanceKm: Math.round(roadDistance * 10) / 10, fare: Math.round(fare * 100) / 100 };
}
