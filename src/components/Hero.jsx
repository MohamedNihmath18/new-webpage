import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.herosection1})`, // Ensure the path to the image is correct
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Hero Content */}
      <div className="z-20 text-center max-w-3xl px-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Build Your Dream <span className="text-red-500">Construction</span> with Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          We specialize in high-quality, sustainable construction projects. Let’s bring your vision to life with precision and expertise.
        </p>
      </div>
    </div>
  );
};

export default Hero;
