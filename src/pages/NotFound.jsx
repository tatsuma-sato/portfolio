import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-full
    h-full
    bg-black
    from-indigo-600
    to-blue-400
    grow
  "
    >
      <div className="px-40 py-20 bg-black">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-white md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            className="px-6 py-2 text-sm font-semibold text-black bg-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
