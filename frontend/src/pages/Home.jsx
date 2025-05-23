// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUtensils, FaBlogger } from "react-icons/fa";
import { SiFacebook, SiInstagram, SiYoutubemusic } from "react-icons/si";
import Hero from "../assets/pngwing.com2.png";
import FitnessPlanner from "../assets/Clipped_image_20250522_150540.png";


const Home = () => {
  return (
    <div className="text-white bg-black min-h-screen -z-10">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-[url('/your-image-path.jpg')] bg-cover bg-center">
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Welcome to <span className="text-orange-500">FitFocus</span>
          </h2>
          <h3 className="text-3xl font-bold mb-4">ONLINE Fitness PLANNER</h3>
          <div className="flex items-center space-x-6 text-white mb-4">
            <div className="flex items-center space-x-2">
              <FaBlogger className="text-xl text-orange-500" />
              <span>Blog</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-xl text-orange-500" />
              <span>Weight Loss</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUtensils className="text-xl text-orange-500" />
              <span>Nutrition</span>
            </div>
          </div>
          <p className="mb-6">To use FitFocus planner for free</p>
          <Link to="/signup">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-md">
              Sign Up Now
            </button>
          </Link>
        </div>
        <div className="mt-10 lg:mt-0">
          <img
            src={Hero}
            alt="Workout Hero"
            className="max-h-[600px] rounded-lg shadow-lg"
          />
        </div>
        {/* <div className="absolute top-6 right-6 flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <SiInstagram className="text-2xl text-pink-500 hover:text-white" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <SiYoutubemusic className="text-2xl text-red-600 hover:text-white" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <SiFacebook className="text-2xl text-blue-600 hover:text-white" />
          </a>
        </div> */}
      </section>

      {/* Info Section */}
      <section className="bg-orange-100 text-black px-6 py-18 relative z-10">
        <h2 className="text-4xl font-extrabold mb-4 text-orange-800">WHAT IS FITNESS PLANNER?</h2>
        <p className="text-2xl max-w-4xl font-bold">
          The fitness planner is a website that allows you to create a custom
          workout plan based on the equipment you have and your personal
          preferences. If you think creating your own workout plan is too hard,
          we’re here to tell you it’s not. We’ll help you create a system that
          works best for your goal!
        </p>

        <img
          src={FitnessPlanner}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.33,
            height: '300px',
            width: 'auto',
            position: 'absolute',
            top: '0%',
            left: '70%',
            zIndex: 1
          }}
        />
      </section>

      <section className="bg-gray-100 text-black px-6 py-12"></section>
    </div>
  );
};

export default Home;
