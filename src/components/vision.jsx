import React from "react";
import { FaEye, FaRocket, FaGlobe } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";

const Vision = () => {
  const cards = [
    {
      icon: <FaEye className="text-4xl text-[#00bf62] mb-4" />,
      title: "Seeker Pass",
      text: "Entry to the Geckura ecosystem. Get early access to tools and Discord utilities",
    },
    {
      icon: <IoDiamondSharp className="text-4xl text-[#00bf62] mb-4" />,
      title: "Disciple Pass",
      text: "Unlock premium analytics, faster data refresh, and private alpha channels",
    },
    {
      icon: <FaCrown className="text-4xl text-[#00bf62] mb-4" />,
      title: "Founder Pass",
      text: "Lifetime access to all future utilities, AI assistants, and agent integrations",
    },
  ];

  return (
    <section className="py-16 bg-[#0f0f0f] text-center text-white">
      <h2 className="text-4xl font-extrabold mb-12">
        Our <span className="text-[#00bf62]">Vision</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-2xl font-semibold mb-3 text-[#00bf62]">
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
