import React from "react";
import { assets } from "../assets/assets"; // You can replace this with your actual project images or import assets

const projects = [
  {
    id: 1,
    title: "Luxury Residential Building",
    description: "A luxurious residential complex with state-of-the-art amenities.",
    image: assets.prj1, // Replace with your actual image path
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

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
