import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosInstance/axiosInstance";
import { useNavigate } from "react-router-dom";

const MealPlan = () => {
  const [goal, setGoal] = useState("");
  const [meals, setMeals] = useState([]); // Ensure meals is always an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const mealPageNavigate = useNavigate();
  // const { selectedGoal } = useParams();

  const handleChange = async (e) => {
    const selectedGoal = e.target.value;
    setGoal(selectedGoal);
    setMeals([]);
    setError("");
    setLoading(true);

    try {
      const { data } = await axiosInstance.get(`/mealplan/${selectedGoal}`);
      // mealPageNavigate(`/mealplan/${selectedGoal}`); // Navigate to the meal plan page
      setMeals(data.meals || []); // fallback to empty array
    } catch (err) {
      console.error(err);
      setError("Failed to load meal plans. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="text-container">
        <label className="block text-sm font-medium">Fitness Goal</label>

        <input
          type="text"
          className="w-[25.6rem] p-3 border rounded-lg "
          value={goal}
          onChange={handleChange}
          list="fitnessGoals"
          placeholder="Enter Here"
        />

        <datalist id="fitnessGoals">
          <option value="">Select Goal</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="weight-gain">Weight Gain</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="maintain">Maintain Health</option>
        </datalist>

      </div>

      {loading && <p className="mt-4">Loading meals...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals &&
          meals.map((meal, index) => (
            <div key={index} className="border rounded p-2 shadow">
              <h3 className="font-bold">{meal.title}</h3>
              {meal.image && (
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-40 object-cover"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MealPlan;
