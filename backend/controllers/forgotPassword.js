const nodemailerWrapper = require("../emails/forgot-pass");
const User = require("../models/User");

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate OTP
    const otp = Math.floor(Math.random() * (9999 - 1000) + 1000);

    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
    await user.save();

    // Send OTP to user's email
    await nodemailerWrapper(email, otp, "Password Reset OTP");

    return res.status(200).json({
      message: "Sent to your email successfully!",
      success: true,
    });
  } catch (error) {
    console.error("Error in forgotPassword:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = forgotPassword;
