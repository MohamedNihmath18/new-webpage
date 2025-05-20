import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('home')

  const handleSetActive = (link) => {
    setActiveLink(link)
  }

  // Prevent body scroll when sidebar is visible
  React.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div className="w-full bg-gray-900 text-white flex items-center justify-between py-4 px-6 fixed top-0 left-0 z-50">
      {/* Logo */}
      <img src={assets.mm1} className="w-24" alt="Logo" />

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 text-sm">
        <ScrollLink
          to="home" // Target section ID
          smooth={true}
          duration={500}
          offset={-70} // Adjust for navbar height
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={() => handleSetActive('home')}
        >
          <p>HOME</p>
          {activeLink === 'home' && (
          <hr
            className='w-2/4 border-none h-[1.5px]'
            style={{ backgroundColor: "#FF004F" }}
          /> )}
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={() => handleSetActive('services')}
        >
          <p>SERVICES</p>
          {activeLink === 'services' && (
          <hr
            className="w-2/4 border-none h-[1.5px] "
            style={{ backgroundColor: "#FF004F" }}
          />) }
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={() => handleSetActive('projects')}
        >
          <p>PROJECTS</p>
          {activeLink === 'projects' && (
          <hr
            className="w-2/4 border-none h-[1.5px] "
            style={{ backgroundColor: "#FF004F" }}
          /> )}
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={() => handleSetActive('about')}
        >
          <p>ABOUT</p>
          {activeLink === 'about' && (
          <hr
            className="w-2/4 border-none h-[1.5px] "
            style={{ backgroundColor: "#FF004F" }}
          /> )}
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex flex-col items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={() => handleSetActive('contact')}
        >
          <p>CONTACT</p>
          {activeLink === 'contact' && (
          <hr
            className="w-2/4 border-none h-[1.5px] "
            style={{ backgroundColor: "#FF004F" }}
          />)}
        </ScrollLink>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-6 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white text-gray-900 z-50 transition-all duration-300 ease-in-out ${
          visible ? "w-3/4" : "w-0"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <img
            onClick={() => setVisible(false)}
            src={assets.dropdown_icon}
            className="h-5 cursor-pointer transform rotate-180"
            alt="Close"
          />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col mt-4">
          <ScrollLink
            onClick={() => setVisible(false)}
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="py-3 px-4 border-b cursor-pointer hover:bg-gray-200"
          >
            HOME
          </ScrollLink>
          <ScrollLink
            onClick={() => setVisible(false)}
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="py-3 px-4 border-b cursor-pointer hover:bg-gray-200"
          >
            SERVICES
          </ScrollLink>
          <ScrollLink
            onClick={() => setVisible(false)}
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="py-3 px-4 border-b cursor-pointer hover:bg-gray-200"
          >
            PROJECTS
          </ScrollLink>
          <ScrollLink
            onClick={() => setVisible(false)}
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="py-3 px-4 border-b cursor-pointer hover:bg-gray-200"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            onClick={() => setVisible(false)}
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="py-3 px-4 border-b cursor-pointer hover:bg-gray-200"
          >
            CONTACT
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
