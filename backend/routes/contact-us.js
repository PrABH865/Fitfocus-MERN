// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contactus = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contactus({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
