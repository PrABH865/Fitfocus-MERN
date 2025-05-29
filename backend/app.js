const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const authRoutes = require("./routes/auth_routes");
const adminRoutes = require("./routes/admin_routes");
const profileRoutes = require("./routes/profile_routes");
const youtubeRoutes = require("./routes/youtube_routes");
const mealRoutes = require("./routes/meal_routes");
const contactRoutes = require("./routes/contact-us");

const connectDB = require("./dbConnect/dbConnection");
const connectAdminDB = require("./dbConnect/adminDB");
const connectContactDB = require("./dbConnect/contactDB");

require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/auth", authRoutes);
app.use("/", contactRoutes);
app.use("/admin", adminRoutes);
app.use("/user", profileRoutes);
app.use('/mealplan', mealRoutes);
app.use("/youtube", youtubeRoutes);
app.use("/api", require("./routes/workout_routes"));

// PORT listening and connection to DB

Promise.all([connectDB(), connectAdminDB(), connectContactDB()])
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Connected to User DB, Contact DB and Admin DB");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to one or both DBs", err);
  });

module.exports = app;
