const { getAdminStats } = require("../controllers/admin");
const { protect } = require("../middlewares/authMiddleware");
const { adminLogin } = require("../controllers/adminLogin");
const Admin = require("../models/Admin");
const adminRegister = require("../controllers/registerAdmin");

const router = require("express").Router();

router.post("/signup", adminRegister);
router.post("/login", adminLogin);

router.get("/dashboard", protect, getAdminStats);

router.get("/stats", protect, getAdminStats);  // Only accessible if token is valid

module.exports = router;
