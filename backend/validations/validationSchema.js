const Joi = require("joi");


// Register validations
const registerValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(1)
    .required()
    .messages({
      'string.empty': 'Name is required.',
      'any.required': 'Name is a mandatory field.',
    }),

  email: Joi.string()
    .email()
    .lowercase()
    .required()
    .messages({
      'string.email': 'Please enter a valid email address.',
      'string.empty': 'Email is required.',
      'any.required': 'Email is a mandatory field.',
    }),

  password: Joi.string()
    .min(8)
    .required()
    .messages({
      'string.min': 'Password must be at least 6 characters long.',
      'string.empty': 'Password is required.',
      'any.required': 'Password is a mandatory field.',
    }),

  caloriesBurned: Joi.number()
    .min(0)
    .default(0)
    .messages({
      'number.base': 'Calories burned must be a number.',
      'number.min': 'Calories burned cannot be negative.',
    }),

  age: Joi.number()
    .integer()
    .min(0)
    .default(0)
    .messages({
      'number.base': 'Age must be a number.',
      'number.min': 'Age cannot be negative.',
      'number.integer': 'Age must be an integer.',
    }),

  height: Joi.number()
    .min(0)
    .default(0)
    .messages({
      'number.base': 'Height must be a number (in inches).',
      'number.min': 'Height cannot be negative.',
    }),

  weight: Joi.number()
    .min(0)
    .default(0)
    .messages({
      'number.base': 'Weight must be a number (in kg).',
      'number.min': 'Weight cannot be negative.',
    }),

  goal: Joi.string()
    .allow('')
    .default('')
    .messages({
      'string.base': 'Goal must be a string.',
    }),

  gender: Joi.string()
    .valid('Male', 'Female', 'Other', '')
    .default('')
    .messages({
      'any.only': 'Gender must be either Male, Female, Other, or left blank.',
    }),
});

// Login validations
const loginValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(8).max(150).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should have a minimum length of 8",
    "string.max": "Password should have a maximum length of 30",
  }),
});


module.exports = { registerValidationSchema, loginValidationSchema };