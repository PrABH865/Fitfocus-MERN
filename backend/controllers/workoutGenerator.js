const { OpenAI } = require("openai");
require("dotenv").config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const Workout = require("../models/Workouts");

const workoutGenerator = async (req, res) => {
  const { goal, level, equipment } = req.body;

  try {
    const prompt = `
          Create a personalized 3-day workout plan for someone whose goal is: ${goal},
          fitness level: ${level}, and equipment available: ${equipment}.
          Include day-wise routines and brief instructions.
        `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a professional fitness coach." },
        { role: "user", content: prompt },
      ],
    });

    res.json({ workout: response.choices[0].message.content });
  } catch (error) {
    console.error("Error generating workout:", error);
    res.status(500).json({ error: "Failed to generate workout plan." });
  }
};

module.exports = workoutGenerator;
