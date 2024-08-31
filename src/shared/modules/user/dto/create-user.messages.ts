export const CreateUserMessages = {
  email: {
    invalidFormat: 'email must be a valid address'
  },
  avatarPath: {
    invalidFormat: 'avatarPath is required',
  },
  firstName: {
    invalidFormat: 'firstname is required',
  },
  lastName: {
    invalidFormat: 'lastname is required',
  },
  password: {
    invalidFormat: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
  type: {
    invalidFormat: 'Invalid user type'
  },
  common: {
    string: 'Value must be a string'
  }
} as const;
