import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/FitFocus_logo_100x100.png";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Scroll handler to toggle shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-gray-200 shadow-md transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "gap-2" : "gap-4"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={Logo}
            alt="FitFocus Logo"
            className={`transition-all duration-300 ${
              scrolled ? "w-18 h-18 " : "w-24 h-24"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-bold text-2xl">
          <Link
            to="/"
            className="text-red-600 hover:text-red-400 underline-offset-auto"
          >
            Home
          </Link>
          <Link to="/fitness-videos" className="hover:underline">
            Fitness Videos
          </Link>
          <Link to="/exercise" className="hover:underline">
            Exercise by Target
          </Link>
        </div>

        <Link to="/meals">Meals Plan</Link>
        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/profile">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl">
                  Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-red-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-lg transition-all duration-300">
          <Link to="/" onClick={toggleMenu} className="text-lg font-semibold">
            Home
          </Link>
          <Link
            to="/fitness-videos"
            onClick={toggleMenu}
            className="text-lg font-semibold"
          >
            Fitness Videos
          </Link>

          <Link
            to="/exercise"
            onClick={toggleMenu}
            className="text-lg font-semibold"
          >
            Exercise by Target
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                onClick={toggleMenu}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={toggleMenu}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
