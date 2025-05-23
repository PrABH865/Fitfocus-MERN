const User = require("../models/User");
const { loginValidationSchema } = require("../validations/validationSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const login = async (req, res, next) => {
  try {
    const loginValues = await loginValidationSchema.validateAsync(req.body);
    const { email, password } = loginValues;

    // Fetch user from the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    // Validating password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid password" });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    // Send response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    next(error);
  }
};

module.exports = login;
