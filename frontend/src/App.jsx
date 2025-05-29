import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/FitnessVideos";
import Profile from "./components/Profile";
import Exercises from "./pages/ExercisesByTarget";
import FitnessVideos from "./pages/FitnessVideos";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminLogin from './admin/AdminLogin';
import MealPlan from "./components/MealPlan";
import ContactForm from "./pages/ContactUs";
import Footer from "./components/Footer";
import CalorieCalculator from "./pages/CalorieCalculator";
import CalorieNeedsTable from "./pages/CalorieNeedsTable";
import ForgotPassword from "./components/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import WorkoutGenerator from "./components/WorkoutGenerator";

const App = () => {

  const location = useLocation();

  const hideFooterRoutes = ["/mealplan"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/meals" element={<MealPlan />} />
        <Route path="/mealPlan/:goal" element={<MealPlan />} />
        <Route path="/exercise" element={<Exercises />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/workout" element={<WorkoutGenerator />} />
        <Route path="/calorie-needs" element={<CalorieNeedsTable />} />
        <Route path="/fitness-videos" element={<FitnessVideos />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute/>}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Public Routes */} 
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default App;
