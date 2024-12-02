const PropertyTypes = {
  apartment: 'apartment',
  house: 'house',
  room: 'room',
  hotel: 'hotel',
} as const;

export const allowedPropertyTypes = Object.values(PropertyTypes);

export type PropertyType = keyof typeof PropertyTypes;
