const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const getAdminModel = require("../models/Admin"); // getAdminModel is a function

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const Admin = getAdminModel(); // get the model instance

    const getAdmin = await Admin.findOne({ email });
    console.log("Email from request:", email);
    console.log("Admin found in DB:", getAdmin);
    if (!getAdmin) {
      return res.status(401).json({ message: "Unauthorized: Admin not found" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, getAdmin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Unauthorized: Invalid password" });
    }

    // Check if user is admin
    if (getAdmin.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: Not an admin" });
    }

    const token = jwt.sign(
      { id: getAdmin._id, email: getAdmin.email, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Admin login successful",
      token,
      admin: {
        name: getAdmin.name,
        email: getAdmin.email,
        role: getAdmin.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

module.exports = { adminLogin };
