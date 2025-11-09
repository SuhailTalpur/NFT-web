import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NFT from "../assets/images/prrp.png"; // change this to your actual image path

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
<header className="relative w-full min-h-screen bg-[#ebfde3] shadow-md overflow-hidden">
  {/* Smooth fade to black at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] pointer-events-none"></div>

  {/* Navbar */}
  <nav className="flex items-center justify-between px-8 py-4 relative z-20">
    <div className="text-2xl font-bold text-[#00bf62]">Gekura</div>
    
    {/* Desktop Menu */}
    <ul className="hidden md:flex space-x-6 text-[#fff1f2] font-medium">
      <li>
        <a href="#home" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="#vision" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300">
          Vision
        </a>
      </li>
      <li>
        <a href="#roadmap" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300">
          Roadmap
        </a>
      </li>
      <li>
        <a href="#benefits" className="hover:text-[#00bf62] text-[#00bf62] cursor-pointer transition-colors duration-300">
          Utility
        </a>
      </li>
    </ul>

    {/* Mobile Menu Button */}
    <button 
        className="md:hidden text-[#00bf62] text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
        <FaBars />
    </button>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}>
        <div className={`fixed right-0 top-0 h-full w-64 bg-gradient-to-l from-[#00bf634b] to-[#00bf63d3] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
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

  {/* Hero Section */}
  <div className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-8 z-10">
    {/* Left: Image */}
    <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
      <img
        src={NFT}
        alt="Hero"
        className="w-72 object-contain drop-shadow-lg border-[6px] border-[#00bf62] rounded-2xl"
      />
    </div>

    {/* Right: Heading */}
    <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        <span className="text-[#00bf62]">Geckura</span> The Trading Alchemist
      </h1>
      <p className="text-gray-700 text-lg max-w-md">
        Welcome to Geckura, an ecosystem born from Solana’s pulse — blending instinct, technology, and a hint of alchemy
      </p>
    </div>
  </div>
</header>

    );
};

export default Header;
