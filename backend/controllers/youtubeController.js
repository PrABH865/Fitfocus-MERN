const axios = require("axios");

const API_KEY = process.env.YOUTUBE_API_KEY; // Read from environment variable
const searchQuery = "home fitness workout";

const getFitnessVideos = async (req, res) => {
  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q: searchQuery,
        type: "video",
        maxResults: 6,
        key: API_KEY,
      },
    });
    res.status(200).json(response.data.items);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    res.status(500).json({ message: "Failed to fetch YouTube videos" });
  }
};

module.exports = { getFitnessVideos };
