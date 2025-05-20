import React from "react";
import { assets } from "../assets/assets"; // You can replace this with your actual project images or import assets

const projects = [
  {
    id: 1,
    title: "Luxury Residential Building",
    description: "A luxurious residential complex with state-of-the-art amenities.",
    image: assets.luxury, // Replace with your actual image path
  },
  {
    id: 2,
    title: "Modern Commercial Space",
    description: "A modern commercial building designed for office spaces and retail.",
    image: assets.modern,
  },
  {
    id: 3,
    title: "Renovation of Historic Building",
    description: "Restoration and renovation of a historical building with modern features.",
    image: assets.historic,
  },
  {
    id: 4,
    title: "Community Park Development",
    description: "Design and construction of a community park with recreational facilities.",
    image: assets.project4,
  },
  {
    id: 5,
    title: "Eco-Friendly Office Building",
    description: "An eco-friendly office building with sustainable design.",
    image: assets.eco,
  },
  {
    id: 6,
    title: "Luxury Villa",
    description: "A luxury villa with modern architecture and landscaping.",
    image: assets.villa,
  },
  {
    id: 7,
    title: "High-Rise Apartment Complex",
    description: "A high-rise apartment complex with stunning views.",
    image: assets.highrise,
  },
  {
    id: 8,
    title: "Shopping Mall Construction",
    description: "Construction of a modern shopping mall with various retail outlets.",
    image: assets.mall,
  },
  {
    id: 9,
    title: "Industrial Warehouse",
    description: "Construction of a large industrial warehouse for storage and logistics.",
    image: assets.warehouse,
  },
  {
    id: 10,
    title: "School Building",
    description: "Construction of a modern school building with advanced facilities.",
    image: assets.school,
  }
];

const Projects = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Projects</h2>
        <p className="text-gray-300 mb-12">
          A collection of our recent and past successful construction projects.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden bg-gray-800 rounded-lg shadow-md border-2 border-gray-700 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                {/* <a
                  href="#"
                  className="mt-4 inline-block text-red-500 hover:text-red-600"
                >
                  View Details
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
