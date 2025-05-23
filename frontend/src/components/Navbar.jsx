// import React from "react";
// import Logo from "../assets/FitFocus_logo_100x100.png";
// import { Link } from "react-router-dom";
// import LoginPng from ".././assets/pngwing.com.png";
// import { useAuth } from "../context/AuthContext";

// const Navbar = () => {

//   const { isLoggedIn, login, logout } = useAuth();

//   return (
//     <div className="nav flex w-full justify-around sticky z-10">
//       {/* Logo */}
//       <Link to="/">
//         <img src={Logo} alt="Logo" className="logo font-extrabold" />
//       </Link>

//       {/* Navigation Links */}
//       <div className="flex gap-5 justify-center items-center font-extrabold">
//         <Link to="/" className="text-[25px] text-red-500 active:text-red-500">
//           Home
//         </Link>

//         <Link to="/fitness-videos" className="text-[25px] hover:underline">
//           Fitness Videos
//         </Link>

//         <Link to="/exercise" className="text-[25px] hover:underline">
//           Excercise by target
//         </Link>
//       </div>

//       <div className="auth flex h-1/2 relative">
//         <Link
//           to="/login"
//           className="text-[20px] rounded-b-xl p-3 mt-2.5 mr-0 bg-orange-500 text-white font-serif font-bold "
//         >
//           <button className="login-btn">Login</button>
//         </Link>

//         <Link 
//         to= "/login">
//          Login
//         </Link>


//         {/* <img src={LoginPng} alt="Avatar" className="relative bottom-0" /> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;







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
      className={`sticky top-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${
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
          <Link to="/" className="text-red-500 hover:text-red-600">
            Home
          </Link>
          <Link to="/fitness-videos" className="hover:underline">
            Fitness Videos
          </Link>
          <Link to="/exercise" className="hover:underline">
            Exercise by Target
          </Link>
        </div>

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
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-xl">
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
                  toggleMenu();
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
