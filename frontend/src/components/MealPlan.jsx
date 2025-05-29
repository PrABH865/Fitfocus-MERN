import React, { useState } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";

const MealPlan = () => {
  const [goal, setGoal] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = async (e) => {
    const selectedGoal = e.target.value;
    setGoal(selectedGoal);
    setMeals([]);
    setError("");
    setLoading(true);

    try {
      const { data } = await axiosInstance.get(`/mealplan/${selectedGoal}`);
      setMeals(data.meals || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load meal plans. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-green-800 mb-4">
            Personalized Meal Planner
          </h1>
          <p className="text-lg text-green-700">
            Select your fitness goal to get meal recommendations
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <img
            src="/meal.png"
            alt="Healthy Meal"
            className="w-56 md:w-72 rounded-lg shadow-lg mb-6"
          />

          <input
            type="text"
            list="fitnessGoals"
            placeholder="e.g., weight-loss"
            value={goal}
            onChange={handleChange}
            className="w-full md:w-96 px-4 py-3 text-lg text-center rounded-xl border-2 border-green-400 shadow focus:outline-none focus:ring-4 focus:ring-green-300 bg-white"
          />

          <datalist id="fitnessGoals">
            <option value="weight-loss" />
            <option value="weight-gain" />
            <option value="muscle-gain" />
            <option value="maintain" />
          </datalist>
        </div>

        {loading && (
          <p className="text-center text-green-800 text-lg">Loading meals...</p>
        )}
        {error && <p className="text-center text-red-500 text-lg">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              {meal.image && (
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700">
                  {meal.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
