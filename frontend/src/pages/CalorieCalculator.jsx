import { useState } from "react";
import { Link } from "react-router-dom";

const CalorieCalculator = () => {
  const [inputs, setInputs] = useState({ carbs: "", protein: "", fat: "" });
  const [calories, setCalories] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCalculate = () => {
    const c = Number(inputs.carbs) * 4;
    const p = Number(inputs.protein) * 4;
    const f = Number(inputs.fat) * 9;
    setCalories(c + p + f);
  };

  return (
    <>
      <div classNamke="bg-gray-200 w-full h-screen flex items-center justify-center">
        <div className="p-4 border rounded max-w-md mx-auto ml-1/2 mt-4 flex flex-col items-center shadow-lg">
          {" "}
          <h3 className="text-2xl font-bold mb-4">
            Calorie Calculator
          </h3>{" "}
          <div className="space-y-2">
            {" "}
            <input
              type="number"
              name="carbs"
              value={inputs.carbs}
              onChange={handleChange}
              placeholder="Carbs (g)"
              className="border p-2 w-full"
            />{" "}
            <input
              type="number"
              name="protein"
              value={inputs.protein}
              onChange={handleChange}
              placeholder="Protein (g)"
              className="border p-2 w-full"
            />{" "}
            <input
              type="number"
              name="fat"
              value={inputs.fat}
              onChange={handleChange}
              placeholder="Fat (g)"
              className="border p-2 w-full"
            />{" "}
            <button
              onClick={handleCalculate}
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              {" "}
              Calculate Calories{" "}
            </button>{" "}
            {calories !== null && (
              <div className="mt-4 font-bold text-center">
                Total Calories:<h2 className="text-red-500">{calories}</h2>
              </div>
            )}{" "}
            <div className="ml-2 mt-4 text-center">
              <Link
                to="/calorie-needs"
                className="text-blue-500 hover:underline"
              >
                View Calorie Needs Table
              </Link>
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Note: 1g of Carbs/Protein = 4 Calories, 1g of Fat = 9 Calories
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default CalorieCalculator;
