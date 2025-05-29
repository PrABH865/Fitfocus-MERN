import React, { useState } from "react";
import axiosInstance from "../axiosInstance/axiosInstance";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const forgotPassword = async (email) => {
    try {
      const res = await axiosInstance.post("/auth/forgot-password", { email });
      if (res.status === 200) {
        setEmail("");
        setError("");
        alert("Password reset link sent to your email.");
      } else {
        setError("Unable to send reset link.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await forgotPassword(email);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-200 p-4">
      <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
      <p className="mb-4 text-center">
        Enter your email to receive a reset link.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded border border-gray-400 w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Reset Link
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
