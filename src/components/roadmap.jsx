import React from "react";
import { FaSeedling, FaUsers, FaRocket } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGem } from "react-icons/fa";

const Roadmap = () => {
  const steps = [
    {
      icon: <FaSeedling className="text-2xl text-[#00bf62]" />,
      title: "Phase 1 — Foundations",
      desc: "Launch official socials (X, Discord, Website) Introduce the Geckura brand, lore, and vision Build the early community of traders and collectors",
    },
    {
      icon: <FaUsers className="text-2xl text-[#00bf62]" />,
      title: "Phase 2 — Mint Elixirs",
      desc: "Mint Geckura Elixirs (Pass Collection) Distribute early access passes to community members Begin testing of Gecko Trading Buddy v1",
    },
    {
      icon: <FaTools className="text-lg text-[#00bf62]" />,
      title: "Phase 3 — Utility Activation",
      desc: "Integrate Trading Buddy Dashboard Enable NFT-linked access Release Holder Rewards & Quests",
    },
        {
      icon: <FaRocket className="text-2xl text-[#00bf62]" />,
      title: "Phase 4 — Geckura Main Launch",
      desc: "Public launch of Geckura Utility Platform Add AI trading agents and portfolio management tools Open Partnerships & Collabs with other Solana projects",
    },
            {
      icon: <FaGem className="text-2xl text-[#00bf62]" />,
      title: "Phase 5 — The Official Collection",
      desc: "Launch the Geckura Genesis Collection Grant holders of Elixir Passes access to founder-level utilities Begin Holder Agent Access — AI assistants that learn from your trade patterns",
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f] text-white px-5">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        The<span className="text-[#00bf62]"> Roadmap</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#00bf62] transform -translate-x-1/2"></div>

        {/* Steps */}
        <div className="flex flex-col space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
            >
              {/* Content */}
              <div className="w-5/12 text-right md:text-left">
                <h3 className="text-xl font-semibold text-[#00bf62] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>

              {/* Icon Circle */}
              <div className="flex items-center justify-center w-12 h-12 bg-zinc-900 border-2 border-[#00bf62] rounded-full z-10 shadow-lg mx-4">
                {step.icon}
              </div>

              {/* Empty space for alignment */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-xl font-medium text-center mt-16 text-gray-400 max-w-2xl mx-auto">
        Each pass is your key to an evolving Web3 toolkit not just art, but function in its purest alchemy.
      </h2>
    </section>
  );
};

export default Roadmap;
