import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "What is Geckura?",
    a: "A full AI-powered Web3 ecosystem offering tools for creators, traders, and communities.",
  },
  {
    q: "What is the $GECKURA token used for?",
    a: "Access, staking, rewards, governance, marketplace fees, and premium features.",
  },
  {
    q: "How does revenue share work?",
    a: "40% of ecosystem revenue is distributed to holders & stakers automatically.",
  },
  {
    q: "Is Geckura AI-powered?",
    a: "Yes — most utilities run on advanced AI engines for text, image, automation, and detection.",
  },
  {
    q: "Can anyone join?",
    a: "Yes. No restrictions. AI + Web3 tools are accessible to all.",
  },
];

const Faq = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 bg-[#0f0f0f] text-white px-5">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="text-[#00bf62]">FAQ</span>
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-zinc-900/80 rounded-xl border border-[#00bf62]/30 shadow transition-all"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="font-semibold text-lg text-[#00bf62]">{faq.q}</span>
              {openIdx === idx ? (
                <FaChevronUp className="text-[#00bf62] transition-transform duration-300" />
              ) : (
                <FaChevronDown className="text-[#00bf62] transition-transform duration-300" />
              )}
            </button>
            <div
              className={`px-6 pb-2 text-gray-300 text-base transition-all duration-300 overflow-hidden ${
                openIdx === idx
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
