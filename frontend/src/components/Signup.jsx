import React, { useState } from "react";
import { createCookie, Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

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
    await registerUser();
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

  const existingUserToast = () => {
    toast.error("User already exists", {
      position: "bottom-center",
    });
  };

  const registerUser = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
        caloriesBurned,
        age,
        height,
        weight,
        goal,
        gender,
      });

      if (response.status === 201) {
        successToast();

        setTimeout(() => {
          navigate(`/api/dashboard/${role}`);
        }, 2000);
      } else if (response.status === 409) {
        existingUserToast();
      } else {
        errorToast();
      }
    } catch (error) {
      errorToast();
      console.log(error);
    }
  };

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
        <div className="w-[50%] lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center ">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
            Create an Account
          </h2>

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

              <div className=" sm:grid-cols-2 gap-4">
                <div className="px-2 py-2 border rounded-lg relative">
                  <label className="px-2 py-2 block text-sm font-medium">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    className="px-2 py-2 border rounded-lg relative"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                <div className="px-2 py-2 border rounded-lg absolute  ">
                  <label className="block text-sm font-medium">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className=""
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Fitness Goal
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg "
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g., Lose fat, Build muscle"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Gender</label>
                <select
                  className="w-full p-3 border rounded-lg "
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
                  Calories Burned (Optional)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-lg "
                  value={caloriesBurned}
                  onChange={(e) => setCaloriesBurned(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm mt-6">
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
      <ToastContainer />
    </div>
  );
};

export default Signup;
