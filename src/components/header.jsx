import React from "react";
import NFT from "../assets/images/prrp.png"; // change this to your actual image path

const Header = () => {
    return (
<header className="relative w-full min-h-screen bg-gradient-to-r from-pink-800 via-red-900 to-pink-900 shadow-md overflow-hidden">
  {/* Smooth fade to black at bottom */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] pointer-events-none"></div>

  {/* Navbar */}
  <nav className="flex items-center justify-between px-8 py-4 relative z-10">
    <div className="text-2xl font-bold text-[#fff1f2]">NFT</div>
    <ul className="flex space-x-6 text-[#fff1f2] font-medium">
      <li>
        <a href="#home" className="hover:text-[#ffc6cc] cursor-pointer transition-colors duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="#vision" className="hover:text-[#ffc6cc] cursor-pointer transition-colors duration-300">
          Vision
        </a>
      </li>
      <li>
        <a href="#roadmap" className="hover:text-[#ffc6cc] cursor-pointer transition-colors duration-300">
          Roadmap
        </a>
      </li>
      <li>
        <a href="#benefits" className="hover:text-[#ffc6cc] cursor-pointer transition-colors duration-300">
          Benefits
        </a>
      </li>
    </ul>
  </nav>

  {/* Hero Section */}
  <div className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-8 z-10">
    {/* Left: Image */}
    <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
      <img
        src={NFT}
        alt="Hero"
        className="w-72 object-contain drop-shadow-lg border-[6px] border-[#ff9ea8] rounded-2xl"
      />
    </div>

    {/* Right: Heading */}
    <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#fff1f2] mb-4">
        Your Gateway to the Digital <span className="text-[#ffc6cc]">Art Revolution</span>
      </h1>
      <p className="text-[#ff9ea8] text-lg max-w-md">
        Join the future of digital ownership with exclusive art, collectibles, and experiences.
      </p>
    </div>
  </div>
</header>

    );
};

export default Header;
