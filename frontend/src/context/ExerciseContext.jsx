import React, { createContext, useState } from "react";

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <ExerciseContext.Provider
      value={{
        bodyPart,
        setBodyPart,
        exercises,
        setExercises,
        loading,
        setLoading,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};
