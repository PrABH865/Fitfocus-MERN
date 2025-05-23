const profile = require("../controllers/profile");
const { protect } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get('/profile', protect, profile);

module.exports = router;