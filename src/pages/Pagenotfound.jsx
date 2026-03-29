import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      
      <div className="text-center max-w-xl">
        
        {/* 404 Heading */}
        <h1 className="text-7xl md:text-8xl font-bold text-yellow-400 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8">
          The page you’re looking for doesn’t exist or has been moved.  
          Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-yellow-500 text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default PageNotFound;