import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400">FitFocus</h2>
          <p className="text-sm text-gray-400 mt-1">
            Empowering wellness through smart fitness planning.
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-300">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/workouts" className="hover:text-white transition">
              Workouts
            </Link>
          </li>
          <li>
            <Link to="/meals" className="hover:text-white transition">
              Meal Plans
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-white transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/calorie-calculator"
              className="hover:text-white transition"
            >
              Calorie Calculator
            </Link>
          </li>

          <li>
            <Link to="/workout" className="hover:text-white transition">
              Workout Generator
            </Link>
          </li>

          <li>
            <Link to="/calorie-needs" className="hover:text-white transition">
              Calorie Needs
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} FitFocus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
