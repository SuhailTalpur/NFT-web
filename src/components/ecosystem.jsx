import React from "react";
import { FaLeaf } from "react-icons/fa";

const Ecosystem = () => (
  <section className="py-20 bg-[#0f0f0f] text-white px-5">
    <h2 className="text-4xl font-extrabold text-center mb-8">
      <span className="text-[#00bf62]">🧬 GECKURA ECOSYSTEM</span>
    </h2>
    <div className="max-w-3xl mx-auto bg-zinc-900/80 rounded-2xl shadow-lg p-8 space-y-6 border border-[#00bf62]/30">
      <p className="text-lg text-gray-300 text-center mb-6">
        A complete suite of tools built for creators, founders, traders & communities.
      </p>
      <ul className="space-y-5">
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">AI Utilities Hub</span>
            <div className="text-gray-400 text-sm">
              Smart tools for writing, design, content creation and automation.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Staking Platform</span>
            <div className="text-gray-400 text-sm">
              Stake $GECKURA and earn passive rewards.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Revenue Share System</span>
            <div className="text-gray-400 text-sm">
              40% community rev-share distributed to holders & stakers.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Creator Tools</span>
            <div className="text-gray-400 text-sm">
              AI content generator, thumbnails, scripts, voiceovers, and branding tools.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Web3 Tools</span>
            <div className="text-gray-400 text-sm">
              Chart bots, sniper modules, wallet analytics, community tracking.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Discord + Telegram Utilities</span>
            <div className="text-gray-400 text-sm">
              Anti-scam filters, auto-mod, verification, level systems, AI assistants.
            </div>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <FaLeaf className="text-[#00bf62] text-xl mt-1" />
          <div>
            <span className="font-semibold text-[#00bf62]">Automation Labs</span>
            <div className="text-gray-400 text-sm">
              Automated posting, funnel creation, content batching.
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Ecosystem;