import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav
      className="bg-reactGray flex border-gray-200 h-24  lg:px-2 sm:px-4 md:px-6 py-2.5 z-10"
      style={{ minHeight: "100px" }}
    >
      <div className="container flex flex-wrap min-h-full justify-between min-h-full items-center mx-auto md:px-4">
        <Link to="/" className="flex min-h-full">
          <span className="px-6  self-center text-reactBlue font-semibold whitespace-nowrap lg:text-3xl md:text-xl dark:text-white">
            Tatsuma Sato
          </span>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 px6 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 text-reactBlue"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col lg:mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:mt-0">
            <li>
              <Link
                to={"/"}
                className="block bg-reactGray py-2 px-6 md:pr-4 md:pl-3 text-white lg:text-2xl md:text-xl hover:text-reactBlue md:bg-transparent md:text-white md:p-0 dark:text-white transition-all duration-300 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block bg-reactGray md:bg-inherit py-2 px-6 md:pr-4 md:pl-3 text-white lg:text-2xl md:text-xl hover:text-reactBlue  md:hover:bg-transparent md:border-0 md:p-0 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="block bg-reactGray md:bg-inherit py-2 px-6 md:pr-4 md:pl-3 text-white lg:text-2xl md:text-xl hover:text-reactBlue md:hover:bg-transparent md:border-0 md:p-0 transition-all duration-300"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block bg-reactGray md:bg-inherit py-2 px-6 md:pr-4 md:pl-3 text-white lg:text-2xl md:text-xl  hover:text-reactBlue md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
