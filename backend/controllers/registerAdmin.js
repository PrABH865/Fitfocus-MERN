const Admin = require("../models/Admin");
const { userValidationSchema } = require("../validations/validationSchema");
const bcrypt = require("bcryptjs");
// const welcomeMail = require("../nodemailer/welcomeMail");

const adminRegister = async (req, res, next) => {
  console.log(req.body);
  try {
    // const registerValues = await userValidationSchema.validateAsync(req.body);
    // console.log(registerValues);

    const { name, email, password, role } = req.body;

    if (role === "admin") {
      const adminVerification = await Admin.findOne({ role: "admin" });
      if (adminVerification) {
        return res.status(409).json({
          success: false,
          message: "Admin already exists",
        });
      }
    }

    // 10 salt rounds by default. Stops all code execution until it's done. not recommended in production
    // const hashedPassword = bcrypt.hashSync(password);
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
      role,
    });

    console.log("Saving user to DB:", {
      name,
      email,
      password,
      role,
    });

    await admin.save();

    // await welcomeMail(email);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: admin,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = adminRegister;
