import React from "react";

const services = [
  {
    id: 1,
    title: "Residential Construction",
    description: "We build high-quality homes tailored to your needs.",
    icon: "🏡", // You can replace this with an image if you have icons
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "Creating efficient and modern commercial spaces.",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Renovations",
    description: "Transforming existing structures into new masterpieces.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "Interior Design",
    description: "Crafting beautiful and functional interiors.",
    icon: "🛋️",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <p className="text-gray-300 mb-12">
          We provide top-notch construction services to meet your needs.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-800 rounded-lg shadow-md border-2 border-gray-700 hover:border-red-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
