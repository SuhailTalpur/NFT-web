import React from "react";
import { FaTwitter, FaDiscord, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-4 border-t border-pink-400/30">
      <div className="max-w-6xl mx-auto px-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-400">NFT</h2>
          <p className="text-sm text-gray-400 mt-2">
            Revolutionizing Digital Ownership.
          </p>
        </div>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#vision"
              className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#benefits"
              className="hover:text-pink-400 transition-colors duration-300 cursor-pointer"
            >
              Benefits
            </a>
          </li>
        </ul>

        {/* Right: Socials */}
        <div className="flex justify-center md:justify-end gap-4 text-pink-400 text-xl">
          <a
            href="#"
            className="hover:text-pink-300 transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition-transform duration-300 hover:scale-110"
          >
            <FaDiscord />
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition-transform duration-300 hover:scale-110"
          >
            <FaTelegram />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t border-zinc-800 pt-4">
        © {new Date().getFullYear()} NFT Project — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
