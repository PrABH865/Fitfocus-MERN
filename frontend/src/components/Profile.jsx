import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../axiosInstance/axiosInstance";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { isLoggedIn, token } = useAuth();
  
  const navigate = useNavigate();

  // profile.data.style = {
  //   backgroundColor: "white",
  //   borderRadius: "1rem",
  //   padding: "2rem",
  //   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //   maxWidth: "600px",
  //   margin: "auto",
  //   textAlign: "center",
  //   fontFamily: "Arial, sans-serif",
  //   color: "#333",
  //   fontSize: "1.2rem",
  //   lineHeight: "1.6",
  //   marginTop: "2rem",
  //   marginBottom: "2rem",
  //   transition: "all 0.3s ease-in-out",
  //   "&:hover": {
  //     boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
  //     transform: "translateY(-2px)",
  //   },
  // };

  useEffect(() => {
    const fetchProfile = async () => {
      console.log("Profile.jsx - context token:", token);
      console.log(
        "Profile.jsx - localStorage token:",
        localStorage.getItem("token")
      );

      if (!isLoggedIn) {
        console.log("User is not logged in");
        navigate("/login");
        return;
      }

      try {
        // Fetch user profile using axiosInstance to include token in header
        const response = await axiosInstance.get("/user/profile");
        setProfile(response.data); // Updated here to use response.data directly
        if (response.status === 200) {
          console.log(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [isLoggedIn, navigate, token]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-tl from-green-400 via-blue-300 to-blue-600">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          {profile.gender === "Male" ? (
            <img
              src="/boy-2-profile.png"
              alt="Profile"
              className="w-36 h-38 rounded-2xl border-4 shadow-lg mb-4"
            />
          ) : (
            <img
              src="/girl-profile.png"
              alt="Profile"
              className="w-32 h-32 rounded-b-2xl border-4 border-indigo-500 shadow-lg mb-4"
            />
          )}
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">Profile</h1>
          <div className="mt-4 w-full text-left space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Name:</span>
              <h3 className="text-red-600 font-bold">{profile.name}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Email:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.email}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Age:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.age}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Height:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.height}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Weight:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.weight}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Calories Burned:</span>{" "}
              <h3 className="text-red-600 font-bold">
                {profile.caloriesBurned}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Goal:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.goal}</h3>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-[1rem]">Gender:</span>{" "}
              <h3 className="text-red-600 font-bold">{profile.gender}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
