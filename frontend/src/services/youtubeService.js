import axios from "axios";

const fetchTopFitnessVideos = async (setVideos, setLoading, setError) => {
  setLoading(true);
  setError("");

  const options = {
    method: "GET",
    url: "https://youtube-search-and-download.p.rapidapi.com/search",
    params: {
      query: "Top Fitness Videos",
      hl: "en",
      gl: "US",
      type: "v",
    },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_YOUTUBE_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    setVideos(response.data.contents);
  } catch (error) {
    console.error("YouTube API Error:", error);
    setError("Failed to fetch videos");
  } finally {
    setLoading(false);
  }
};

export default fetchTopFitnessVideos ;
