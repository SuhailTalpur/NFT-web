import React from "react";
import { FaSeedling, FaUsers, FaRocket, FaInfinity } from "react-icons/fa";

const Roadmap = () => {
  const steps = [
    {
      icon: <FaSeedling className="text-2xl text-pink-400" />,
      title: "Phase 1 — Launch",
      desc: "Kick off with the first NFT collection and exclusive whitelist events.",
    },
    {
      icon: <FaUsers className="text-2xl text-pink-400" />,
      title: "Phase 2 — Community Growth",
      desc: "Expand partnerships and build a strong, engaging NFT community.",
    },
    {
      icon: <FaRocket className="text-2xl text-pink-400" />,
      title: "Phase 3 — Marketplace",
      desc: "Launch the in-house NFT marketplace with rarity tracking and analytics.",
    },
    {
      icon: <FaInfinity className="text-2xl text-pink-400" />,
      title: "Phase 4 — Expansion",
      desc: "Integrate metaverse assets and cross-chain support for the future.",
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f] text-white px-5">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        Project <span className="text-pink-400">Roadmap</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-500/30 transform -translate-x-1/2"></div>

        {/* Steps */}
        <div className="flex flex-col space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="w-5/12 text-right md:text-left">
                <h3 className="text-xl font-semibold text-pink-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>

              {/* Icon Circle */}
              <div className="flex items-center justify-center w-12 h-12 bg-zinc-900 border-2 border-pink-400 rounded-full z-10 shadow-lg mx-4">
                {step.icon}
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
