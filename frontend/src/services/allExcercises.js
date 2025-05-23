import axios from "axios";

export const fetchAllExercises = async (
  setExercises,
  setLoading
) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      }
    );
    console.log("The target", target);
    setExercises(response.data);
  } catch (error) {
    if (error.response) {
      console.error("API Error Response Data:", error.response.data);
      console.error("API Error Response Status:", error.response.status);
      console.error("API Error Response Headers:", error.response.headers);
    } else {
      console.error("API Error:", error.message);
    }
  } finally {
    setLoading(false);
  }
};
