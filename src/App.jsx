import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Routes */}
      {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      {/* </div> */}
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
