import React from "react";
import { FaRobot, FaCoins } from "react-icons/fa";
import { TbWheel } from "react-icons/tb";

const Holders = () => {
  const benefits = [
    {
      icon: <FaRobot className="text-5xl text-white mb-4" />,
      title: "AI Agent Access",
      desc: "Interact with Geckura’s evolving trading intelligence",
      gradient: "from-pink-500 via-red-400 to-yellow-400",
    },
    {
      icon: <FaCoins className="text-5xl text-white mb-4" />,
      title: "Instant Insights",
      desc: "NFT floor changes, token movements, and alerts",
      gradient: "from-purple-500 via-pink-400 to-indigo-400",
    },
    {
      icon: <TbWheel className="text-5xl text-white mb-4" />,
      title: "Customizable Dashboards",
      desc: "Personalize what data matters most",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f] text-white text-center">
      <h2 className="text-4xl font-extrabold mb-12">
        Holders <span className="text-[#00bf62]">Utility</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 bg-gradient-to-br ${benefit.gradient}`}
          >
            {benefit.icon}
            <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-white/80 text-sm">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Holders;
