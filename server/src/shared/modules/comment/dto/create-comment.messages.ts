export const CreateCommentValidationMessage = {
  text: {
    length: 'min is 5, max is 1024'
  },
  rating: {
    min: 'Minimum rating is 1',
    max: 'Maximum rating is 5',
  },
  common: {
    number: 'Value must be an number',
    id: 'Value must be a valid id',
    string: 'Value must be a string'
  }
};
