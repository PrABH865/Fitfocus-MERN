import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { ExerciseProvider } from "./context/ExerciseContext";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ExerciseProvider>
      <Router>
        <Navbar />
        <App />
     
      </Router>
    </ExerciseProvider>
  </AuthProvider>
);
