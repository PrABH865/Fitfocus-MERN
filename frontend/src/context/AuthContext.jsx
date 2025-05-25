import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Initialize login state and token from localStorage on mount
    const storedToken = localStorage.getItem("token");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (storedToken && storedIsLoggedIn) {
      setToken(storedToken);
      setIsLoggedIn(true);
    } else {
      setToken(null);
      setIsLoggedIn(false);
    }
  }, []);

  const login = (token) => {
    setIsLoggedIn(true);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  };

  const checkLoginStatus = () => {
    const storedToken = localStorage.getItem("token");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return storedToken && storedIsLoggedIn;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
