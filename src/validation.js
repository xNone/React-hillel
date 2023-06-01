export const validationRules = {
  email: {
    pattern: /^\S+@\S+\.\S+$/,
    message: 'Email is invalid',
  },
  password: {
    pattern: /(?=.*[A-Z])(?=.*\d).{6,10}$/,
    message: 'Password must have at least 1 uppercase letter, 1 digit, and be 6-10 characters long',
  },
  firstname: {
    pattern: /^[a-zA-Z\s]{2,}$/,
    message: 'First Name is invalid',
  },
  lastname: {
    pattern: /^[a-zA-Z\s]{2,}$/,
    message: 'Last Name is invalid',
  }
};