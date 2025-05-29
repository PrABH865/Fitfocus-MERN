import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const admin = localStorage.getItem("adminToken");
  let isAdmin;
  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }
  // Assuming adminToken is a JSON string containing admin details
  try {
    isAdmin = admin.email;
  } catch (error) {
    console.error("Error parsing admin token:", error);
    return <Navigate to="/admin-login" replace />;
  }
  if (!isAdmin) {
    return (
      <div className="text-center text-red-500">
        Access Denied. Admins only.
      </div>
    );
  }
  return (
    <div>
      {isAdmin ? (
        <div className="p-8 text-white bg-gray-200 min-h-screen flex-1">
          <Navigate to="/admin/dashboard" replace />
        </div>
      ) : (
        <div className="p-8 text-red-500">Access Denied. Admins only.</div>
      )}
    </div>
  );
};

export default ProtectedRoute;
