const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = process.env.SPOONACULAR_API_KEY;

const goalMap = {
  "weight-loss": "low-calorie",
  "weight-gain": "high-calorie",
  "muscle-gain": "high-protein",
  "maintain": "balanced",
};

router.get("/:goal", async (req, res) => {
  const goal = req.params.goal;
  const tag = goalMap[goal];

  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: API_KEY,
          number: 20,
          tags: tag,
          type: "main course",
        },
      }
    );
    res.json({ meals: response.data.results });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch meals" });
  }
});

module.exports = router;
