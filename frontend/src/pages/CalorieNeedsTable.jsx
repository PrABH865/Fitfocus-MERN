import React from "react";

const calorieData = [
  {
    group: "Women (19–30 yrs)",
    sedentary: "1,800–2,000",
    moderate: "2,000–2,200",
    active: "2,400",
  },
  {
    group: "Women (31–50 yrs)",
    sedentary: "1,800",
    moderate: "2,000",
    active: "2,200",
  },
  {
    group: "Men (19–30 yrs)",
    sedentary: "2,400–2,600",
    moderate: "2,600–2,800",
    active: "3,000",
  },
  {
    group: "Men (31–50 yrs)",
    sedentary: "2,200–2,400",
    moderate: "2,400–2,600",
    active: "2,800–3,000",
  },
];

const CalorieNeedsTable = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto border-black border-3 rounded-xl bg-gray-200 shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
    👀 Daily Calorie Needs
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-blue-100 text-blue-900">
              <th className="px-4 py-2">Demographic</th>
              <th className="px-4 py-2">Sedentary</th>
              <th className="px-4 py-2">Moderately Active</th>
              <th className="px-4 py-2">Active</th>
            </tr>
          </thead>
          <tbody>
            {calorieData.map((row, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="px-4 py-2 font-medium">{row.group}</td>
                <td className="px-4 py-2">{row.sedentary}</td>
                <td className="px-4 py-2">{row.moderate}</td>
                <td className="px-4 py-2">{row.active}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-gray-500 text-center">
        Source:{" "}
        <a
          href="https://www.dietaryguidelines.gov/resources/2020-2025-dietary-guidelines-online-materials"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          U.S. Dietary Guidelines 2020–2025
        </a>
      </p>
    </div>
  );
};

export default CalorieNeedsTable;
