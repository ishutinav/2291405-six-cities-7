import { Location } from '../types/index.js';

export enum Commands {
  help = '--help',
  version = '--version',
  import = '--import',
  generate = '--generate'
}

export const CITIES: Record<string, Location> = {
  'Paris': { latitude: 48.85661, longitude: 2.351499 },
  'Cologne': { latitude: 50.938361, longitude: 6.959974 },
  'Brussels': { latitude: 50.846557, longitude: 4.351697 },
  'Amsterdam': { latitude: 52.370216, longitude: 4.895168 },
  'Hamburg': { latitude: 53.550341, longitude: 10.000654 },
  'Dusseldorf': { latitude: 51.225402, longitude: 6.776314 }
};

export const GOODS = [
  'Breakfast',
  'Air conditioning',
  'Laptop friendly workspace',
  'Baby seat',
  'Washer',
  'Towels',
  'Fridge'
];

export enum OfferType {
  apartment = 'apartment',
  house = 'house',
  room = 'room',
  hotel = 'hotel'
}
