const User = require("../models/User");

const resetPassword = async (req, res) => {
    const { email, newPassword, otp } = req.body;
    
    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if OTP is valid
        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // Check if OTP has expired
        if (Date.now() > user.otpExpiry) {
            return res.status(400).json({ message: "OTP has expired" });
        }

        // Update user's password
        user.password = newPassword;
        user.otp = null;
        user.otpExpiry = null;
        await user.save();

        return res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        console.error("Error in resetPassword:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = resetPassword;