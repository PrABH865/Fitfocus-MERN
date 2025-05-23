import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition bg-amber-50 hover:bg-red-300">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold mt-2">{exercise.name}</h3>
      <p className="text-gray-600">Target: {exercise.target}</p>
      <p className="text-gray-600">Body Part: {exercise.bodyPart}</p>
    </div>
  );
};

export default ExerciseCard;
