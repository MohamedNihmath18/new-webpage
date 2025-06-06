import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left place-items-center md:place-items-start">

        {/* Company Info */}
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={assets.mm1}
              alt="Company Logo"
              className="h-10 object-contain"
            />
            <h3 className="text-2xl font-bold text-red-500">M.M Constructions</h3>
          </div>
          <ul className="space-y-2">
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-red-500 transition cursor-pointer"
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:text-red-500 transition cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      <hr className="block md:hidden border-gray-700 my-6" />


        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Contact Info</h3>
          <ul className="space-y-2">
            <li>Phone: +919894585479</li>
            <li>Email: mmconstructionss@gmail.com</li>
            <li>Address: 3/2 Mannarsamy Koil Street,</li>
            <li>Puliunthope, Chennai-12, India</li>
          </ul>
        </div>
      <hr className="block md:hidden border-gray-700 my-6" />

        {/* Social Media Links */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/mmconstructionss?igsh=czExM2JjMnpkbWxt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} M.M Constructions. All rights
          reserved. Designed by
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-nihmathullah-a-bb111322b/"
            className="text-white hover:text-red-500 ml-1"
          >
            Nihmath
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
