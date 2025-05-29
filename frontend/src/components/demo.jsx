import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosInstance/axiosInstance";

const MealPlan = () => {
  const { goal } = useParams(); // Get goal from URL
  const [selectedGoal, setSelectedGoal] = useState(goal || "");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (goal) {
      fetchMealPlan(goal);
    }
  }, [goal]);

  const fetchMealPlan = async (goal) => {
    try {
      const response = await axiosInstance.get(`/mealPlan/${goal}`);
      const data = response.data;
      setMeals(data);
    } catch (error) {
      console.error("Failed to fetch meal plan", error);
    }
  };

  return (
    <div className="meal-container">
      <h2 className="text-2xl font-bold">Meal Plan for: {selectedGoal}</h2>

      <select
        value={selectedGoal}
        onChange={(e) => {
          setSelectedGoal(e.target.value);
          fetchMealPlan(e.target.value); // refetch on change
        }}
        className="w-[25.6rem] p-3 border rounded-lg"
      >
        <option value="">Select Goal</option>
        <option value="weight-loss">Weight Loss</option>
        <option value="weight-gain">Weight Gain</option>
        <option value="muscle-gain">Muscle Gain</option>
        <option value="maintain">Maintain Health</option>
      </select>

      <div className="meal-results mt-4">
        {meals.length > 0 ? (
          meals.map((meal, index) => (
            <div key={index} className="meal-card">
              <h3>{meal.name}</h3>
              <p>{meal.description}</p>
            </div>
          ))
        ) : (
          <p>No meal plans found.</p>
        )}
      </div>
    </div>
  );
};

export default MealPlan;
