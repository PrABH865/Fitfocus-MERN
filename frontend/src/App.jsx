import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/FitnessVideos";
import Profile from "./components/Profile";
import Exercises from "./pages/ExercisesByTarget";
import FitnessVideos from "./pages/FitnessVideos";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workouts" element={<Workouts />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/exercise" element={<Exercises />} />
      <Route path="/fitness-videos" element={<FitnessVideos />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  );
};

export default App;
