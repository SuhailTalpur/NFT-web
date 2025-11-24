import React from "react";
import { FaCheckCircle, FaDotCircle } from "react-icons/fa";

const phases = [
  {
    title: "Phase 1 — Foundation",
    items: [
      "Concept & brand creation",
      "Social Launch",
      "Website V1",
      "AI Utility Engine Core",
      "Community building",
      "Early marketing push",
    ],
    icon: <FaCheckCircle className="text-2xl text-[#00bf62]" />,
    iconType: "check",
  },
  {
    title: "Phase 2 — Ecosystem Launch",
    items: [
      "Geckura Elixir Launch",
      "Geckura pfp Launch",
      "Revenue share module",
      "$Geckura Launch",
      "$Geckura Staking For Ecosystem",
      "Ai Trading Buddy Launch",
      "Partner onboarding",
    ],
    icon: <FaDotCircle className="text-2xl text-[#00bf62]" />,
    iconType: "dot",
  },
  {
    title: "Phase 3 — Expansion",
    items: [
      "Web3 trading tools",
      "Sniper + chart bot",
      "Telegram AI bot",
      "Ecosystem DAO",
      "Multi-chain support added",
    ],
    icon: <FaDotCircle className="text-2xl text-[#00bf62]" />,
    iconType: "dot",
  },
];

const Roadmap = () => (
  <section className="py-20 bg-[#0f0f0f] text-white px-5">
    <h2 className="text-4xl font-extrabold text-center mb-16">
      The<span className="text-[#00bf62]"> Roadmap</span>
    </h2>
    <div className="relative max-w-4xl mx-auto">
      {/* Center Line (hide on mobile) */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-[#00bf62] transform -translate-x-1/2 hidden md:block"></div>
      {/* Phases */}
      <div className="flex flex-col space-y-12">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col md:flex-row items-center justify-between ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-5/12 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-[#00bf62] mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center md:justify-start">
                    {phase.iconType === "check" ? (
                      <FaCheckCircle className="text-[#00bf62] text-base" />
                    ) : (
                      <FaDotCircle className="text-[#00bf62] text-base" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-12 h-12 bg-zinc-900 border-2 border-[#00bf62] rounded-full z-10 shadow-lg mx-0 md:mx-4 mb-6 md:mb-0">
              {phase.icon}
            </div>
            {/* Empty space for alignment (hide on mobile) */}
            <div className="hidden md:block w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Roadmap;
