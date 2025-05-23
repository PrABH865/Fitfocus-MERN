import React, { useState } from "react";

const videoData = {
  loseWeight: [
    "UBMk30rjy0o", // 30-Minute Fat Burn Workout - POPSUGAR
    "ml6cT4AZdqI", // Full Body Workout to Burn Fat
    "f4dzzv81X9w", // 10 Min Fat Burn Workout at Home
    "2pLT-olgUJs", // 15 Min Beginner Fat Loss
    // "VHYHd2z3MYg", // 20-Minute HIIT for Beginners
    "50kH47ZztHs", // 30-Minute Treadmill Weight Loss Workout
    "digpucxFbMo",
  ],
  gainWeight: [
    "gMaB-fG4u4g", // Workout for Skinny Guys
    // "X9V7xR55OU0", // Gain Weight Fast - Bulking
    // "jZx1M-o7tQI", // Best Diet for Weight Gain
    // "3Xw-QDc1RrA", // 20 Min Home Workout for Skinny Guys
    "7L-Td_p0bXE", // Best Foods for Muscle & Weight Gain
    "vXqHJYz8NXo", // Strength Workout to Build Mass
  ],
  buildMuscle: [
    "U0bhE67HuDY", // 45 Min Muscle Building
    "ZMO_XC9w7Lw", // Full Body Strength Training
    "q20pLhdoEoY", // No Equipment Muscle Workout
    "H2x3ZbZ9xX8", // Dumbbell Upper Body Strength
    "V3ExAo8U2o4", // Gym Muscle Gain Routine
    "0aNNYEUARAk", // Intense Push-Pull-Legs Routine
  ],
};

const FitnessVideos = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? "" : category);
  };

  const renderVideos = (ids) =>
    ids.map((id) => (
      <div key={id} className="w-full md:w-1/2 lg:w-1/3 p-2">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            className="w-full h-48"
            src={`https://www.youtube.com/embed/${id}`}
            title="Fitness Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ));

  return (
    <div className="max-w-7xl mx-auto p-4">
      {[
        { label: "I want to lose weight", key: "loseWeight" },
        { label: "I want to gain weight", key: "gainWeight" },
        { label: "I want to build muscles", key: "buildMuscle" },
      ].map(({ label, key }) => (
        <div key={key} className="mb-6">
          <button
            onClick={() => toggleDropdown(key)}
            className="w-full text-left text-lg font-semibold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {label}
          </button>
          {openDropdown === key && (
            <div className="flex flex-wrap mt-4">{renderVideos(videoData[key])}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FitnessVideos;
