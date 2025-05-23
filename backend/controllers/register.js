const User = require("../models/User");
const { userValidationSchema } = require("../validations/validationSchema");
const bcrypt = require("bcryptjs");
// const welcomeMail = require("../nodemailer/welcomeMail");

const register = async (req, res, next) => {
  console.log(req.body);
  try {
    // const registerValues = await userValidationSchema.validateAsync(req.body);
    // console.log(registerValues);

    const {
      name,
      email,
      password,
      caloriesBurned,
      age,
      height,
      weight,
      goal,
      gender,
    } = req.body;

    const userVerification = await User.findOne({ email });

    if (userVerification) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 12);

    // 10 salt rounds by default. Stops all code execution until it's done. not recommended in production
    const hashedPassword = bcrypt.hashSync(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      caloriesBurned,
      age,
      height,
      weight,
      goal,
      gender,
    });

    console.log("Saving user to DB:", {
      name,
      email,
      password,
      caloriesBurned,
      age,
      height,
      weight,
      goal,
      gender,
    });

    await newUser.save();

    // await welcomeMail(email);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
