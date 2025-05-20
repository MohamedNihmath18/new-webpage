import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      {/* Section 1: Introduction */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white-500">About Us</h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-6">
          We are a premier construction company with over 30+ years of experience in the industry. We build exceptional spaces that stand the test of time. Our team is dedicated to quality, safety, and sustainability in every project.
        </p>
      </div>

       {/* Section 2: Completed Projects Count */}
<div className="w-full bg-gray-800 text-center py-12 mb-16">
  <h3 className="text-3xl font-semibold text-white mb-4">Our Achievements</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Completed Projects Count */}
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 hover:border-2 hover:border-red-500 hover:scale-105">
      <h4 className="text-4xl font-bold text-red-500">90+</h4>
      <p className="text-gray-300 text-xl">Completed Projects</p>
    </div>
    {/* Years of Experience */}
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 hover:border-2 hover:border-red-500 hover:scale-105">
      <h4 className="text-4xl font-bold text-red-500">30+</h4>
      <p className="text-gray-300 text-xl">Years of Experience</p>
    </div>
    {/* Satisfied Clients */}
    <div className="bg-gray-900 p-8 rounded-lg shadow-xl transition-all duration-300 hover:border-2 hover:border-red-500 hover:scale-105">
      <h4 className="text-4xl font-bold text-red-500">150+</h4>
      <p className="text-gray-300 text-xl">Satisfied Clients</p>
    </div>
  </div>
</div>


      {/* Section 3: Mission & Vision */}
      {/* <div className="text-center max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-white-500 mb-6">Our Mission</h3>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Our mission is to deliver world-class construction services that enhance the living and working environments of our clients. We aim to be a leader in quality, customer satisfaction, and innovative building practices.
        </p>
        <h3 className="text-3xl font-semibold text-white-500 mb-6">Our Vision</h3>
        <p className="text-gray-300 text-lg sm:text-xl">
          Our vision is to transform urban landscapes by constructing durable, sustainable, and beautiful buildings that improve the quality of life for generations to come.
        </p>
      </div>

      {/* Section 4: Our Team */}
      {/* <div className="text-center max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-semibold text-white-500 mb-6">Our Team</h3>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Our team is a group of passionate professionals committed to the craft of construction. From architects to engineers, we work together to turn visions into reality.
        </p> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* Team Member 1 */}
          {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:border-4 hover:border-red-500">
            <img
              src={assets.founder} // Replace with your image path
              alt="Team Member"
              className="w-full h-50 object-cover  rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-white">Mohamed Ali</h4>
            <p className="text-gray-300">CEO & Founder</p>
          </div> */}

          {/* Team Member 2 */}
          {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:border-4 hover:border-red-500">
            <img
              src={assets.teamMember2} // Replace with your image path
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-white">Mohamed Ilyas</h4>
            <p className="text-gray-300">Architect</p>
          </div> */}

          {/* Team Member 3 */}
          {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:border-4 hover:border-red-500">
            <img
              src={assets.teamMember3} // Replace with your image path
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-semibold text-white">Mohamed Sathik</h4>
            <p className="text-gray-300">Engineer</p>
          </div>
        </div>
      </div>  */}

      {/* Section 5: Why Choose Us */}
      <div className="bg-gray-800 text-center py-16 px-6">
        <h3 className="text-3xl font-semibold text-white mb-6">Why Choose Us</h3>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Our commitment to excellence, quality, and customer satisfaction makes us the preferred choice for your construction needs. Here’s why:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-red-500">Experience</h4>
            <p className="text-gray-300">
              Over 30+ years of experience delivering successful projects on time and within budget.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-red-500">Quality</h4>
            <p className="text-gray-300">
              We use the best materials and practices to ensure your project exceeds expectations.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2 text-red-500">Sustainability</h4>
            <p className="text-gray-300">
              We prioritize sustainable practices to protect the environment while building for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
