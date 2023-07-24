import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="absolute w-full bg-green-500 dark:bg-gray-950">
      <div className="w-full sm:px-20 px-5">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 3C1.44772 3 1 3.44772 1 4V20C1 20.5523 1.44772 21 2 21H22C22.5523 21 23 20.5523 23 20V4C23 3.44772 22.5523 3 22 3H2ZM3 5V19H21V5H3ZM5 7H19V9H5V7ZM5 11H19V13H5V11ZM5 15H14V17H5V15Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-white text-lg font-bold ml-2">
                TextUtils
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white hover:bg-green-600 dark:hover:bg-slate-700 p-2 rounded-md text-base font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-green-600 dark:hover:bg-slate-700 p-2 rounded-md text-base font-semibold"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-green-600 dark:hover:bg-slate-700 p-2 rounded-md text-base font-semibold"
            >
              Contact
            </Link>
            <button
              className="px-2"
              onClick={handleThemeSwitch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2" />
                <path d="M12 21v2" />
                <path d="M4.22 4.22l1.42 1.42" />
                <path d="M18.36 18.36l1.42 1.42" />
                <path d="M1 12h2" />
                <path d="M21 12h2" />
                <path d="M4.22 19.78l1.42-1.42" />
                <path d="M18.36 5.64l1.42-1.42" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
