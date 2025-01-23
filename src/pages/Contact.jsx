import React, { useState } from "react";

const Contact = () => {

  const phoneNumber = "+919894585479"; // Replace with your boss's phone number
  const message = "Hello, I need assistance."; // Optional message you want to pre-fill

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show success or error message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend API
      const response = await fetch("https://your-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      } else {
        setStatus("Failed to send message!");
      }
    } catch (error) {
      setStatus("An error occurred, please try again.");
    }
  };

  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      {/* Contact Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white-500 mb-4">Contact Us</h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-6">
          Have a question or need assistance? Reach out to us using the form below or through the contact details.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-red-500 mb-4">Get In Touch</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white text-lg font-semibold rounded-md hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-300">
            {status}
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="mt-6 text-center">
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
