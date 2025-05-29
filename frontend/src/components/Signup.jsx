import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../axiosInstance/axiosInstance";
import MealPlan from "./MealPlan";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [goal, setGoal] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isRegistered = await registerUser();

    if (isRegistered) {
      // Redirect to meal plan after showing toast
      setTimeout(() => {
        navigate(`/mealPlan/${goal}`);
      }, 2000);
    }
  };

  const registerUser = async () => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
        caloriesBurned,
        age,
        height,
        weight,
        goal,
        gender,
        isLoggedIn: true,
      });

      if (response.status === 201) {
        successToast();
        return true;
      } else if (response.status === 409) {
        existingUserToast();
        return false;
      } else {
        errorToast();
        return false;
      }
    } catch (error) {
      errorToast();
      console.log(error);
      return false;
    }
  };
  

  const successToast = () => {
    toast.success("User registered successfully", {
      position: "top-center",
    });
  };

  const errorToast = () => {
    toast.error("User registration failed", {
      position: "top-center",
    });
  };
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z 0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
  }

  const notValidEmail = () => {
    toast.error("Invalid email format", {
      position: "top-center",
      });
    }


  const handleBlur = () => {
      if (!/\S+@\S+\.\S+/.test(email)) {
        notValidEmail();
      }
  };

  const existingUserToast = () => {
    toast.error("User already exists", {
      position: "bottom-center",
    });
  };

  // const registerUser = async () => {
  //   try {
  //     const response = await axiosInstance.post("/auth/signup", {
  //       name,
  //       email,
  //       password,
  //       caloriesBurned,
  //       age,
  //       height,
  //       weight,
  //       goal,
  //       gender,
  //     });

  //     if (response.status === 201) {
  //       successToast();
  //     } else if (response.status === 409) {
  //       existingUserToast();
  //     } else {
  //       errorToast();
  //     }
  //   } catch (error) {
  //     errorToast();
  //     console.log(error);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-500 to-blue-500 px-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg  shadow-2xl overflow-hidden">
        {/* Image Section */}
        {/* <div className="lg:w-1/2 hidden lg:block bg-black">
          <img
            src="https://imgs.search.brave.com/1rxxMQrPrncQro_JYkXHwpo5DTEPS0G68i5jSR8DxUE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Xb3Jr/b3V0LVRyYW5zcGFy/ZW50LnBuZw"
            alt="Sign Up"
            className="h-[50%] w-[100%] object-cover"
          />
        </div> */}

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center ">
          <h1 className="text-3xl w-[26rem] font-bold text-center rounded-2xl p-4 text-red-600 mb-6">
            Create an Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="px-28 py-2 border rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="px-28 py-2 border rounded-lg "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="px-28 py-2 border rounded-lg "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium">Age</label>
                <input
                  type="number"
                  className="px-28 py-2 border rounded-lg"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <div className="w-full px-2 py-2 rounded-lg relative">
                  <label className=" block text-sm font-medium">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    className="px-2 py-2 w-[25.6rem] border rounded-lg relative"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>

                <div className="w-full px-2 py-2 rounded-lg relative bg-amber-200">
                  <label className="block text-sm font-medium">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className=" px-2 py-2 w-[25.6rem] border rounded-lg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div class="text-container">
                  <label className="block text-sm font-medium">
                    Fitness Goal
                  </label>

                  <input
                    type="text"
                    className="w-[25.6rem] p-3 border rounded-lg "
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    list="fitnessGoals"
                    placeholder="Enter Here"
                  />

                  <datalist id="fitnessGoals">
                    <option value="">Select Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="weight-gain">Weight Gain</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="maintain">Maintain Health</option>
                  </datalist>
                </div>

                <div className="text-sm font-medium">
                  {goal && (
                    <p>
                      Your fitness goal is: <strong>{goal}</strong>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Gender</label>
                <select
                  className="w-[25.6rem] p-3 border rounded-lg "
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Calories Burned
                </label>
                <input
                  type="number"
                  className="w-[25.6rem] p-3 border rounded-lg "
                  value={caloriesBurned}
                  onChange={(e) => setCaloriesBurned(e.target.value)}
                />
              </div>
            </div>
            <button className="w-[26rem] bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm mt-6 flex flex-col items-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* <MealPlan goal={goal} setGoal={setGoal} /> */}

      <ToastContainer />
    </div>
  );
};

export default Signup;
