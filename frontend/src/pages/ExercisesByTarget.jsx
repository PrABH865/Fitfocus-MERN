import React, { useContext } from "react";
import ExerciseCard from "../components/ExerciseCard";
import Loader from "../loader/Loader"
import { ExerciseContext } from "../context/ExerciseContext";
import { fetchExercisesByTarget } from "../services/excerciseService";

// Fitness background image (royalty-free from Unsplash)
const bgImageUrl =
  "https://images.unsplash.com/photo-1734668476747-8e46a86fb925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGJhY2tncm91bmQlMjBwbmd8ZW58MHx8MHx8fDA%3D";

const targetOptions = [
  "chest",
  "back",
  "legs",
  "cardio",
  "shoulders",
  "abs",
  "arms",
];

const ExercisesByTarget = () => {
  const {
    bodyPart,
    setBodyPart,
    exercises,
    setExercises,
    loading,
    setLoading,
  } = useContext(ExerciseContext);

  const handleChange = async (e) => {
    const selectedPart = e.target.value;
    setBodyPart(selectedPart);
    await fetchExercisesByTarget(selectedPart, setExercises, setLoading);
  };

  return (
    <div
      className="p-4 min-h-screen flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-2xl mt-8 max-w-xl w-full text-center animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
          Select Body Part
        </h2>

        <div className="relative">
          <select
            onChange={handleChange}
            value={bodyPart}
            className="w-full p-3 text-lg border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <option value="">-- Choose a target area --</option>
            {targetOptions.map((part) => (
              <option key={part} value={part}>
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 w-full px-4">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white bg-opacity-90 p-6 rounded-xl shadow-xl">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisesByTarget;
