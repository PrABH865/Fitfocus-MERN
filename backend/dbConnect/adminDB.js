const mongoose = require("mongoose");

let adminConnection;

const connectAdminDB = async () => {
  if (!adminConnection) {
    adminConnection = await mongoose.createConnection(
      process.env.FITFOCUS_ADMIN_URI
    );
  }
  return adminConnection;
};

module.exports = connectAdminDB;
