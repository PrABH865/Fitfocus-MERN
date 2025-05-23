const mongoose = require("mongoose");
const connectAdminDB = require("../dbConnect/adminDB");

const adminSchema = new mongoose.Schema(
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
    role: {
      type: String,
      enum: ["admin"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

let Admin;
connectAdminDB().then((conn) => {
  Admin = conn.model("Admin", adminSchema);
});

module.exports = function getAdminModel() {
  return Admin;
};
