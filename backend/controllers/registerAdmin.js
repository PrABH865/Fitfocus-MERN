const welcomeMail = require("../emails/welcomeEmail");
const getAdminModel = require("../models/Admin");
const bcrypt = require("bcryptjs");

const registerAdmin = async (req, res) => {
  const { name, email, password, role, isAdmin } = req.body;
  try {
    const Admin = getAdminModel(); // get the model instance
    const existing = await Admin.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      role,
      isAdmin,
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = registerAdmin;