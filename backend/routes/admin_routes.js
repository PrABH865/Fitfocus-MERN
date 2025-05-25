const { getAdminStats } = require("../controllers/admin");
const { protect } = require("../middlewares/authMiddleware");
const { adminLogin } = require("../controllers/adminLogin");
const adminRegister = require("../controllers/registerAdmin");
const getAdminModel = require("../models/Admin");

const router = require("express").Router();

router.post("/signup", adminRegister);
router.post("/login", adminLogin);

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Admin = getAdminModel(); // get the model instance
    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting admin", error: err.message });
  }
});
router.get("/dashboard", protect, getAdminStats);

router.get("/stats", protect, getAdminStats); // Only accessible if token is valid

module.exports = router;
