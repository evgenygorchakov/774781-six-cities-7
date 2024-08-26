const Amenities = {
  breakfast: 'Breakfast',
  air: 'Air',
  conditioning: 'conditioning',
  laptop: 'Laptop',
  friendly: 'friendly',
  babySeat: 'Baby seat',
  washer: 'Washer',
  towels: 'Towels',
  fridge: 'Fridge',
} as const;

export const allowedAmenities = Object.values(Amenities);

export type Amenity = keyof typeof Amenities;
