import React from "react";
import LoaderImage from "/Dumbbell_50x50.png"; // Adjust the path as necessary
const Loader = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-bounce rounded-full h-16 w-16 border-4 border-red-500">
      <img
        src={LoaderImage}
        alt="Loading..."
        className="h-full w-full p-2 object-cover"
      />
    </div>
  </div>
);

export default Loader;

