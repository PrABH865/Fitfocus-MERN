const getAdminModel = require("../models/Admin");
const User = require("../models/User");

// Admin dashboard stats
const getAdminStats = async (req, res, next) => {
  try {
    const users = await User.find({});
    const totalUsers = users.length;

    // Calories burned sum
    const totalCaloriesBurned = users.reduce(
      (sum, user) => sum + (user.caloriesBurned || 0),
      0
    );

    // User goals average percentage
    const avgGoalPercent =
      users.length > 0
        ? (
            users.reduce((sum, user) => sum + (user.goalPercent || 0), 0) /
            users.length
          ).toFixed(2)
        : 0;

    // Gender stats
    const genderCounts = users.reduce(
      (acc, user) => {
        if (user.gender === "male") acc.male++;
        else if (user.gender === "female") acc.female++;
        else acc.other++;
        return acc;
      },
      { male: 0, female: 0, other: 0 }
    );
    const mostGender =
      genderCounts.male >= genderCounts.female &&
      genderCounts.male >= genderCounts.other
        ? "male"
        : genderCounts.female >= genderCounts.other
        ? "female"
        : "other";
    const mostGenderPercent =
      totalUsers > 0
        ? ((genderCounts[mostGender] / totalUsers) * 100).toFixed(2)
        : 0;

    res.status(200).json({
      totalUsers,
      totalCaloriesBurned,
      avgGoalPercent,
      mostGender,
      mostGenderPercent,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch admin stats", error: error.message });
  }
};

module.exports = {
  getAdminStats,
};
