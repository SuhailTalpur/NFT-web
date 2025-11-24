import React from "react";
import { FaEye, FaRocket, FaGlobe } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";

const Story = () => {
    return (
        <section className="py-16 bg-[#0f0f0f] text-center text-white w-full ">
            <h2 className="text-4xl font-extrabold mb-12">
                THE <span className="text-[#00bf62]">GECKURA STORY</span>
            </h2>
            <div className="w-full flex justify-center items-center ">
                <div className="w-1/2 flex flex-col gap-3 text-lg">
                    <p>GECKURA was created with one mission: to make AI and Web3 tools simple, powerful, and accessible to everyone.
                        We saw a world where creators struggle, communities are scattered, and AI tools are expensive or limited.
                        So we built something different.
                    </p>
                    <p>A unified ecosystem where AI utilities, staking rewards, revenue share, and creator tools live in one place  built for the people, driven by the community.</p>
                    <p>GECKURA isn’t just a project…
                        It’s a movement.</p>
                </div>
            </div>
        </section>
    );
};

export default Story;
