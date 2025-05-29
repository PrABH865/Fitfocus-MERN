const mongoose = require("mongoose");
// require("dotenv").config()

const connectContactDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connection to the db");
  }
};

module.exports = connectContactDB;
