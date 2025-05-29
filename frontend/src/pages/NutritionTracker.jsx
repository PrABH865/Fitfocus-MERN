import { useState, useEffect } from "react";
import axios from "axios";

const NutritionTracker = () => {
  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({ food: "", calories: "", date: "" });

  const fetchMeals = async () => {
    const res = await axios.get("/api/nutrition");
    setMeals(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/nutrition", form);
    setForm({ food: "", calories: "", date: "" });
    fetchMeals();
  };

  const totalCalories = meals.reduce((sum, m) => sum + Number(m.calories), 0);

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="p-4">
      {" "}
      <h2 className="text-xl font-bold mb-4">Nutrition Tracker</h2>{" "}
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        {" "}
        <input
          type="text"
          name="food"
          value={form.food}
          onChange={handleChange}
          placeholder="Food Item"
          className="border p-2 w-full"
        />{" "}
        <input
          type="number"
          name="calories"
          value={form.calories}
          onChange={handleChange}
          placeholder="Calories"
          className="border p-2 w-full"
        />{" "}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 w-full"
        />{" "}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {" "}
          Add Meal{" "}
        </button>{" "}
      </form>
      <div>
        <h3 className="text-lg font-semibold mb-2">Logged Meals</h3>
        <ul className="space-y-2">
          {meals.map((m) => (
            <li key={m._id} className="border p-2 rounded">
              <strong>{m.food}</strong> - {m.calories} cal on{" "}
              {new Date(m.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
        <div className="mt-4 font-bold">Total Calories: {totalCalories}</div>
      </div>
    </div>
  );
};

export default NutritionTracker;
