export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 10',
    maxLength: 'Maximum title length must be 20',
  },
  description: {
    minLength: 'Minimum description length must be 20',
    maxLength: 'Maximum description length must be 1024',
  },
  postDate: {
    invalidFormat: 'postDate must be a valid ISO date',
  },
  city: {
    invalidFormat: 'Invalid city'
  },
  photos: {
    invalidFormat: 'There should be 6 photos'
  },
  rating: {
    min: 'Minimum rating is 1',
    max: 'Maximum rating is 5',
  },
  price: {
    minValue: 'Minimum price is 100',
    maxValue: 'Maximum price is 100000',
  },
  amenities: {
    invalidFormat: 'Each value in the amenities array must be one of the following: Breakfast, Air, conditioning, Laptop, friendly, workspace, Baby seat, Washer, Towels, Fridge.'
  },
  type: {
    invalidFormat: 'Invalid property type'
  },
  roomsCount: {
    min: 'The minimum number of rooms is 1',
    max: 'The maximum number of rooms is 8',
  },
  guestsCount: {
    min: 'The minimum number of guests must be 1 person',
    max: 'The maximum number of guests must be 10 people',
  },
  latitude: {
    invalidFormat: 'Invalid latitude'
  },
  longitude: {
    invalidFormat: 'Invalid longitude'
  },
  common: {
    integer: 'Value must be an integer',
    number: 'Value must be an number',
    boolean: 'Value must be a boolean',
    id: 'Value must be a valid id',
    string: 'Value must be a string'
  }
};
