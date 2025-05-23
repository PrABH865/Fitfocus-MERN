import React, { useContext } from "react";
import ExerciseCard from "../components/ExerciseCard";
import Loader from "../components/Loader";
import { ExerciseContext } from "../context/ExerciseContext";
import { fetchExercisesByTarget } from "../services/excerciseService";

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 ml-[40%]">Select Body Part</h2>
      <select
        onChange={handleChange}
        value={bodyPart}
        className="p-2 border rounded-md mb-6 ml-[40%]"
      >
        <option value="">-- Choose a target area --</option>
        {targetOptions.map((part) => (
          <option key={part} value={part}>
            {part.charAt(0).toUpperCase() + part.slice(1)}
          </option>
        ))}
      </select>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExercisesByTarget;
