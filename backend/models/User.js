const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    caloriesBurned: {
      type: Number,
      default: 0,
    },
    age: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
    goal: {
      type: String,
      enum: ["weight-loss", "weight-gain", "muscle-gain", "maintain"],
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "",
    },
    isLoggedin: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
    // OTP fields for password reset
    otp: {
      type: Number,
      default: null,
    },

    otpExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }

);


const User = mongoose.model("User", userSchema);

module.exports = User;
