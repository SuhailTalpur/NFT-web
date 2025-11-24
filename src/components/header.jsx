import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";

const images = [img1, img2, img3];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full min-h-screen bg-[#ebfde3] shadow-md overflow-hidden">
      {/* Smooth fade to black at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 relative z-20">
        <div className="text-2xl font-myfont font-medium text-[#00bf62]">Gekura</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[#fff1f2] font-medium">
          <li>
            <a href="#home" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#vision" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300 font-semibold">
              Vision
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300 font-semibold">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#benefits" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300 font-semibold">
              Utility
            </a>
          </li>
        </ul>

        <div></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00bf62] text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
          <div className={`fixed right-0 top-0 h-full w-64 bg-gradient-to-l from-[#00bf634b] to-[#00bf63d3] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-[#00bf62] text-2xl transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>

            <div className="p-8 mt-8">
              <ul className="space-y-6 text-[#fff1f2] font-medium">
                <li>
                  <a
                    href="#home"
                    className="block hover:text-[#ffc6cc] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#vision"
                    className="block hover:text-[#ffc6cc] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="block hover:text-[#ffc6cc] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="block hover:text-[#ffc6cc] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Utility
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Photo Gallery at Top Center */}
      <div className="flex justify-center mt-12 md:mt-20 relative z-10">
        <div className="flex items-center justify-center">
          <img
            src={img1}
            alt="gallery-1"
            className="w-48 h-48 object-cover drop-shadow-lg border-[6px] border-[#00bf62] rounded-2xl rotate-[-10deg] -mr-8 z-20"
          />
          <img
            src={img2}
            alt="gallery-2"
            className="w-48 h-48 object-cover drop-shadow-lg border-[6px] border-[#00bf62] rounded-2xl rotate-[8deg] -mr-8 z-30"
          />
          <img
            src={img3}
            alt="gallery-3"
            className="w-48 h-48 object-cover drop-shadow-lg border-[6px] border-[#00bf62] rounded-2xl rotate-[15deg] z-10"
          />
        </div>
      </div>

      {/* Hero Section: Heading & Text at Bottom Center */}
      <div className="flex flex-col items-center justify-center text-center mt-12 md:mt-16 px-8 z-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          <span className="text-[#00bf62] font-myfont text-4xl font-medium">Geckura</span> AI-Powered Ecosystem for Builders, Creators & Innovators
        </h1>
        <p className="text-gray-700 text-lg max-w-md">
          Unlock next-generation utilities powered by AI, automation, and blockchain.
          Stake. Earn. Build. Create.
          Reinvent the way communities grow
        </p>
      </div>
    </header>
  );
};

export default Header;
