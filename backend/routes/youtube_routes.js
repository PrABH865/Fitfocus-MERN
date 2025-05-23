const express = require("express");
const router = express.Router();
const { getFitnessVideos } = require("../controllers/youtubeController");

router.get("/fitness-videos", getFitnessVideos);
router.post("/search", getFitnessVideos);

module.exports = router;
