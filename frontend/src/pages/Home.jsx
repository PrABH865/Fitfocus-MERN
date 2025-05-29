import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUtensils, FaBlogger } from "react-icons/fa";

import {
  FaDumbbell,
  FaAppleAlt,
  FaChartLine,
  FaBriefcaseMedical,
  FaUsers,
  FaClock,
} from "react-icons/fa";

import Hero from "../assets/pngwing.com2.png";
import FitnessPlanner from "../assets/Clipped_image_20250522_150540.png";
import SplitText from "../motion/SplitText"
import FadeInSection from "../motion/FadeIn";
import AnimatedImage from "../motion/AnimatedImage";
import SlideInLeft from "../motion/SlideInLeft";
import BounceButton from "../motion/BounceButton";

const Home = () => {
  return (
    <div className="text-white bg-black min-h-screen -z-10">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-16">
        <div className="max-w-xl">
          <h2 className="text-6xl lg:text-7xl font-extrabold mb-6">
            <SplitText
              text="Welcome to FitFocus"
              className="text-6xl lg:text-7xl font-extrabold mb-6"
            />
          </h2>

          <h3 className="text-3xl font-bold mb-4 text-red-600">
            ONLINE Fitness PLANNER
          </h3>

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
            <BounceButton text="Sign Up Now" />
          </Link>
        </div>

        <div className="mt-10 lg:mt-0">
          <AnimatedImage
            src={Hero}
            alt="Hero Image"
            className="w-full h-auto max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Info Section */}
      <FadeInSection>
        <section className="bg-orange-100 text-black px-6 py-20 relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 text-orange-800">
            WHAT IS FITNESS PLANNER?
          </h2>
          <SlideInLeft>
            <p className="text-2xl max-w-4xl font-bold">
              The fitness planner is a website that allows you to create a
              custom workout plan based on the equipment you have and your
              personal preferences. If you think creating your own workout plan
              is too hard, we’re here to tell you it’s not. We’ll help you
              create a system that works best for your goal!
            </p>
          </SlideInLeft>

          <img
            src={FitnessPlanner}
            alt="Fitness Planner"
            className="absolute top-0 right-0 opacity-30 h-[300px] hidden md:block"
          />
        </section>
      </FadeInSection>

      {/* Feature Highlights Section */}
      <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-orange-400">
          Why Join FitFocus?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaDumbbell className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              AI-Powered Workout Plans
            </h3>
            <p className="text-gray-300">
              Personalized workouts tailored to your goals, time, and fitness
              level — using smart automation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaAppleAlt className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Smart Nutrition Planner
            </h3>
            <p className="text-gray-300">
              Plan meals that suit your lifestyle with guidance for office,
              home, or on-the-go diets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaChartLine className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Track Progress Easily
            </h3>
            <p className="text-gray-300">
              Visualize your transformation with smart dashboards tracking
              weight, calories, and activity.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaBriefcaseMedical className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Workplace Wellness Tips
            </h3>
            <p className="text-gray-300">
              Desk-friendly stretches, posture checks, and mindfulness tips for
              busy professionals.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaUsers className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Community Support
            </h3>
            <p className="text-gray-300">
              Join a thriving network of achievers. Get motivation, share
              milestones, and grow together.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 border border-orange-500">
            <FaClock className="text-4xl text-orange-400 mb-3" />
            <h3 className="text-xl font-semibold text-orange-300 mb-2">
              Challenges & Reminders
            </h3>
            <p className="text-gray-300">
              Stay consistent with habit challenges, hydration alerts, and
              custom push reminders.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/signup">
            <BounceButton text="Start Your Journey — Register Now!" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
