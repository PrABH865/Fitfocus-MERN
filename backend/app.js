const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth_routes");
const adminRoutes = require("./routes/admin_routes");
const profileRoutes = require("./routes/profile_routes");
const youtubeRoutes = require("./routes/youtube_routes");

const connectDB = require("./dbConnect/dbConnection");
const connectAdminDB = require("./dbConnect/adminDB");

require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", profileRoutes);
app.use("/youtube", youtubeRoutes);

// PORT listening and connection to DB

Promise.all([connectDB(), connectAdminDB()])
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Connected to both User DB and Admin DB");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to one or both DBs", err);
  });

module.exports = app;
