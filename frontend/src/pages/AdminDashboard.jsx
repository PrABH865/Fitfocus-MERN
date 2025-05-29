// pages/AdminDashboard.jsx
import axios from "axios";
import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCaloriesBurned: 0,
    avgGoalPercent: 0,
    mostGender: "",
    mostGenderPercent: 0,
  });

  useEffect(() => {
    // Simulate API fetch
    const fetchStats = async () => {
      const response = await axios.get(
        "http://localhost:8000/admin/stats",
        { withCredentials: true }
      );
      localStorage.getItem("adminToken", response.data.token);
      localStorage.getItem("adminEmail", response.data.admin.email);
      setStats(response);
    };

    fetchStats();
  }, []);

  if (!stats) return <div className="p-8 text-white">Loading...</div>;

  return (
    <div className="p-8 text-white bg-gray-100 min-h-screen flex-1">
      <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-5 rounded-2xl shadow-md">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="bg-gray-700 p-5 rounded-2xl shadow-md">
          <h3 className="text-lg font-medium">Calories Burned</h3>
          <p className="text-2xl font-bold">{stats.totalCaloriesBurned}</p>
        </div>
        <div className="bg-gray-700 p-5 rounded-2xl shadow-md">
          <h3 className="text-lg font-medium">Avg Goal Completion</h3>
          <p className="text-2xl font-bold">{stats.avgGoalPercent}%</p>
        </div>
        <div className="bg-gray-700 p-5 rounded-2xl shadow-md">
          <h3 className="text-lg font-medium">Most Common Gender</h3>
          <p className="text-2xl font-bold capitalize">{stats.mostGender}</p>
          <p className="text-sm text-gray-300">
            {stats.mostGenderPercent}% of users
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
