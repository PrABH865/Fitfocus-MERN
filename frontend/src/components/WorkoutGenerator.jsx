import { useState } from "react";
import axios from "axios";

const WorkoutGenerator = () => {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("beginner");
  const [equipment, setEquipment] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWorkout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/workout", {
        goal,
        level,
        equipment,
      });
      setResult(res.data.workout);
    } catch (err) {
      setResult("Error fetching workout plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <h1 className="text-2xl font-bold mb-4">💪 Smart Workout Generator</h1>

      <input
        className="w-full p-2 border rounded mb-3"
        placeholder="Your fitness goal (e.g. fat loss, strength)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded mb-3"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <input
        className="w-full p-2 border rounded mb-3"
        placeholder="Available equipment (e.g. dumbbells, none)"
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
      />

      <button
        onClick={generateWorkout}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Workout"}
      </button>

      {result && (
        <div className="mt-4 whitespace-pre-wrap bg-gray-100 p-4 rounded">
          {result}
        </div>
      )}
    </div>
  );
}

export default WorkoutGenerator;