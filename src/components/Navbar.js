import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className="bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex-shrink-0 flex items-center">
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
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="/about"
              className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-base font-semibold"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-base font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
