 
import React, { useState } from "react";
import { assets } from "../assets/assets";

// Main Projects
const projects = [
  {
    id: 1,
    title: "Luxury Residential Building",
    description: "A luxurious residential complex with state-of-the-art amenities.",
    image: assets.prj1,
  },
  {
    id: 2,
    title: "Modern Commercial Space",
    description: "A modern commercial building designed for office spaces and retail.",
    image: assets.prj2,
  },
  {
    id: 3,
    title: "Renovation of Historic Building",
    description: "Restoration and renovation of a historical building with modern features.",
    image: assets.prj3,
  },
  {
    id: 4,
    title: "Community Park Development",
    description: "Design and construction of a community park with recreational facilities.",
    image: assets.prj4,
  },
  {
    id: 5,
    title: "Eco-Friendly Office Building",
    description: "An eco-friendly office building with sustainable design.",
    image: assets.prj5,
  },
  {
    id: 6,
    title: "Luxury Villa",
    description: "A luxury villa with modern architecture and landscaping.",
    image: assets.prj6,
  },
  {
    id: 7,
    title: "High-Rise Apartment Complex",
    description: "A high-rise apartment complex with stunning views.",
    image: assets.prj7,
  },
  {
    id: 8,
    title: "Shopping Mall Construction",
    description: "Construction of a modern shopping mall with various retail outlets.",
    image: assets.prj8,
  },
  {
    id: 9,
    title: "Industrial Warehouse",
    description: "Construction of a large industrial warehouse for storage and logistics.",
    image: assets.prj9,
  },
  {
    id: 10,
    title: "School Building",
    description: "Construction of a modern school building with advanced facilities.",
    image: assets.prj10,
  },
  {
    id: 11,
    title: "Hospital Construction",
    description: "Building a state-of-the-art hospital with advanced medical facilities.",
    image: assets.prj11,
  },
  {
    id: 12,
    title: "Bridge Construction",
    description: "Construction of a modern bridge with innovative engineering.",
    image: assets.prj12,
  },
  {
    id: 13,
    title: "Sports Complex",
    description: "Construction of a sports complex with various facilities.",
    image: assets.prj13,
  },
  {
    id: 14,
    title: "Cultural Center",
    description: "Building a cultural center to promote arts and community events.",
    image: assets.prj14,
  },
  {
    id: 15,
    title: "Residential Community",
    description: "Development of a residential community with parks and amenities.",
    image: assets.prj15,
  },
  {
    id: 16,
    title: "Office Tower",
    description: "Construction of a modern office tower with green building features.",
    image: assets.prj16,
  },
  {
    id: 17,
    title: "Luxury Hotel",
    description: "Building a luxury hotel with world-class amenities.",
    image: assets.prj17,
  },
  {
    id: 18,
    title: "Mixed-Use Development",
    description: "A mixed-use development combining residential and commercial spaces.",
    image: assets.prj18,
  },
  {
    id: 19,
    title: "Public Library",
    description: "Construction of a modern public library with community spaces.",
    image: assets.prj19,
  },
  {
    id: 20,
    title: "Green Roof Project",
    description: "Installation of a green roof to promote sustainability.",
    image: assets.prj20,
  },
  {
    id: 21,
    title: "Waterfront Development",
    description: "Development of a waterfront area with recreational facilities.",
    image: assets.prj21,
  }
];

// Interior Projects
const interiorProjects = [
  {
    id: 101,
    title: "Modern Living Room",
    description: "A stylish interior design for a luxury living room.",
    image: assets.Int1,
  },
  {
    id: 102,
    title: "Office Interior Design",
    description: "Sleek and modern workspace with functional furniture.",
    image: assets.Int2,
  },
  {
    id: 103,
    title: "Luxury Kitchen",
    description: "A modern kitchen with high-end appliances and finishes.",
    image: assets.Int3,
  },
  {
    id: 104,
    title: "Elegant Bedroom",
    description: "A cozy and elegant bedroom design.",
    image: assets.Int4,
  },
  {
    id: 105,
    title: "Contemporary Bathroom",
    description: "A stylish bathroom with modern fixtures.",
    image: assets.Int5,
  },
  {
    id: 106,
    title: "Dining Room Design",
    description: "A beautiful dining room with a modern touch.",
    image: assets.Int6,
  },
  {
    id: 107,
    title: "Home Office Setup",
    description: "A functional and stylish home office design.",
    image: assets.Int7,
  },
  {
    id: 108,
    title: "Kids' Room Design",
    description: "A playful and colorful kids' room interior.",
    image: assets.Int8,
  },
  {
    id: 109,
    title: "Outdoor Living Space",
    description: "An inviting outdoor area for relaxation and entertainment.",
    image: assets.Int9,
  },
  {
    id: 110,
    title: "Luxury Home Theater",
    description: "A state-of-the-art home theater design.",
    image: assets.Int10,
  },
  {
    id: 111,
    title: "Minimalist Interior",
    description: "A minimalist approach to interior design.",
    image: assets.Int11,
  },
  {
    id: 112,
    title: "Rustic Cabin Interior",
    description: "A cozy rustic cabin interior design.",
    image: assets.Int12,
  },
  {
    id: 113,
    title: "Artistic Living Space",
    description: "A living space with artistic elements and decor.",
    image: assets.Int13,
  },
  {
    id: 114,
    title: "Luxury Bathroom",
    description: "A luxurious bathroom with high-end finishes.",
    image: assets.Int14,
  },
  {
    id: 115,
    title: "Modern Entryway",
    description: "A stylish entryway design.",
    image: assets.Int15,
  },
  {
    id: 116,
    title: "Elegant Hallway",
    description: "An elegant hallway with beautiful decor.",
    image: assets.Int16,
  },
  {
    id: 117,
    title: "Stylish Balcony",
    description: "A stylish balcony design for outdoor relaxation.",
    image: assets.Int17,
  },
  {
    id: 118,
    title: "Contemporary Workspace",
    description: "A contemporary workspace with modern furniture.",
    image: assets.Int18,
  }
  // Add more interior projects as needed
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showInteriors, setShowInteriors] = useState(false);

  const displayedProjects = showInteriors ? interiorProjects : projects;

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>

        {/* Buttons to switch views */}
        <div className="mb-8 space-x-4">
          <button
            onClick={() => setShowInteriors(false)}
            className={`px-4 py-2 rounded ${!showInteriors ? "bg-red-500" : "bg-gray-700"} hover:bg-red-600 transition`}
          >
            All Projects
          </button>
          <button
            onClick={() => setShowInteriors(true)}
            className={`px-4 py-2 rounded ${showInteriors ? "bg-red-500" : "bg-gray-700"} hover:bg-red-600 transition`}
          >
            Interiors
          </button>
        </div>

        <p className="text-gray-300 mb-12">
          {showInteriors
            ? "Explore our elegant interior design projects."
            : "A collection of our recent and past successful construction projects."}
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden bg-gray-800 rounded-lg shadow-md border-2 border-gray-700 group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white z-10">
                <h3 className="text-xl font-semibold"></h3>
                <p className="text-sm mt-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Project"
            className="max-w-full max-h-full rounded shadow-lg border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
