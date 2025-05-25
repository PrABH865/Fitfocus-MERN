import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../axiosInstance/axiosInstance";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const successToast = () => {
    toast.success("Login successful", {
      position: "top-center",
    });
  };

  const doesNotExistToast = () => {
    toast.error("User does not exist", {
      position: "top-center",
    });
  };

  const errorToast = () => {
    toast.error("Invalid credentials, please signup", {
      position: "top-center",
    });
  };

  const loginUser = async () => {
    try {
      const response = await axiosInstance.post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      if (response.status === 200) {
        // Save token to localStorage and update context
        login(response.data.token);

        successToast();

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else if (response.status === 404) {
        doesNotExistToast();
      } else {
        errorToast();
      }
    } catch (error) {
      errorToast();
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-300 to-yellow-300 px-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        {/* Image Section (Hidden on small screens) */}
        <div className="lg:w-1/2 hidden lg:block">
          <img
            src="pexels-anush-1229356.jpg"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition">
              Login
            </button>
          </form>

          <div className="text-center text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
            <div className="mt-2">
              Login as{" "}
              <Link to="/admin-login" className="text-blue-600 hover:underline">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
