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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* 📌 Professional Pinned Price Note with Hover Animation */}
      <div className="absolute top-24 right-6 z-40">
        <div
          className="relative bg-white text-black px-5 py-3 rounded-lg shadow-xl ring-2 ring-red-500 rotate-2 w-44 text-center
          transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Red Pin Dot */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full shadow-md z-50 border-2 border-white"></div>
          <p className="font-semibold text-gray-900 text-base">Starting at</p>
          <p className="text-xl font-bold text-red-600">₹ 2000 / sft</p>
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

