import React from "react";
import { FaEye, FaRocket, FaGlobe } from "react-icons/fa";

const Vision = () => {
  const cards = [
    {
      icon: <FaEye className="text-4xl text-pink-400 mb-4" />,
      title: "Our Vision",
      text: "Empowering creators and collectors through the limitless possibilities of blockchain technology.",
    },
    {
      icon: <FaRocket className="text-4xl text-pink-400 mb-4" />,
      title: "Our Mission",
      text: "To revolutionize digital ownership by creating a seamless, transparent, and inspiring NFT ecosystem.",
    },
    {
      icon: <FaGlobe className="text-4xl text-pink-400 mb-4" />,
      title: "Our Goal",
      text: "Connecting artists and communities worldwide through innovation and decentralized creativity.",
    },
  ];

  return (
    <section className="py-16 bg-[#0f0f0f] text-center text-white">
      <h2 className="text-4xl font-extrabold mb-12">
        Our <span className="text-pink-400">Vision</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-2xl font-semibold mb-3 text-pink-300">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
