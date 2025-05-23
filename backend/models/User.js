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
      enum: ["Lose", "Gain", "Maintain"],
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
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
