// import React from "react";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   return (
//     <div className="relative w-full min-h-screen bg-gray-900 text-white flex items-center justify-center">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${assets.herosection1})`, // Ensure the path to the image is correct
//         }}
//       ></div>

//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

//       {/* Hero Content */}
//       <div className="z-20 text-center max-w-3xl px-6">
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
//           Build Your Dream <span className="text-red-500">Construction</span> with Us
//         </h1>
//         <p className="mt-4 text-lg sm:text-xl text-gray-300">
//           We specialize in high-quality, sustainable construction projects. Let’s bring your vision to life with precision and expertise.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React from "react";
// import { assets } from "../assets/assets";

// const Hero = () => {
//   return (
//     <div className="relative w-full min-h-screen text-white flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center brightness-110"
//         style={{
//           backgroundImage: `url(${assets.herosection1})`,
//         }}
//       ></div>

//       {/* Overlay to increase contrast */}
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

//        {/* Floating Price Tag (Note Style) */}
//       <div className="absolute top-6 right-6 z-30">
//         <div className="bg-white text-black px-4 py-2 rounded-md shadow-lg border-2 border-red-500 rotate-2">
//           <p className="font-bold text-lg">₹ 2000 / sft</p>
//         </div>
//       </div>

//       {/* Hero Content */}
//       <div className="z-20 text-center max-w-3xl px-6">
//         <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
//           Build Your Dream <span className="text-red-500">Construction</span> with Us
//         </h1>
//         <p className="mt-4 text-lg sm:text-xl text-black-300">
//           We specialize in high-quality, sustainable construction projects. Let’s bring your vision to life with precision and expertise.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-110"
        style={{
          backgroundImage: `url(${assets.herosection1})`,
        }}
      ></div>

      {/* Overlay to increase contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* 📌 Pinned Note / Calendar Box */}
      <div className="absolute top-6 right-6 z-50">
        <div className="bg-yellow-200 text-black px-6 py-4 rounded-lg shadow-2xl border-[3px] border-red-500 rotate-2 relative">
          {/* Pushpin emoji or pin icon */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">📌</span>
          <p className="text-lg font-bold text-center">₹ 2000 / sft</p>
        </div>
      </div>

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

