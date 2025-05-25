import React, { useState } from "react";

const videoData = {
  loseWeight: [
    "UBMk30rjy0o",
    "ml6cT4AZdqI",
    "2pLT-olgUJs",
    "50kH47ZztHs",
    "digpucxFbMo",
    "-hSma-BRzoo",
  ],
  gainWeight: [
    "Mbtl6QxQFtw",
    "7L-Td_p0bXE",
    "M6sQGCAtW1c",
    "fIv6W3TGmio",
    "nAgZBJ9C3AI",
    "39AZfptwQi0",
    "nAgZBJ9C3A",
  ],
  buildMuscle: [
    "U0bhE67HuDY",
    "ZMO_XC9w7Lw",
    "q20pLhdoEoY",
    "H2x3ZbZ9xX8",
    "V3ExAo8U2o4",
    "0aNNYEUARAk",
  ],
};

const bgImageUrl =
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1470&q=80";

const FitnessVideos = () => {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? "" : category);
  };

  const renderVideos = (ids) =>
    ids.map((id) => (
      <div key={id} className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105">
          <iframe
            className="w-full h-48 md:h-56"
            src={`https://www.youtube.com/embed/${id}`}
            title="Fitness Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ));

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Choose Your Fitness Goal
        </h1>

        {[
          { label: "I want to lose weight", key: "loseWeight" },
          { label: "I want to gain weight", key: "gainWeight" },
          { label: "I want to build muscles", key: "buildMuscle" },
        ].map(({ label, key }) => (
          <div key={key} className="mb-6">
            <button
              onClick={() => toggleDropdown(key)}
              className="w-full text-left text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg hover:brightness-110 transition-all duration-300"
            >
              {label}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openDropdown === key
                  ? "max-h-[1000px] mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-wrap -m-2">
                {renderVideos(videoData[key])}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessVideos;
