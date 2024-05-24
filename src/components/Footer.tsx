import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-end items-end  md:px-[40px] px-[4px] md:pb-[40px] pb-[4px]">
      <div className="w-full rounded-2xl h-[70vh] bg-[#1c1f21] px-8 md:px-16 pt-10">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-Krona-One text-[#CED2D4]">
            Let's talk about
            <br className="md:hidden"/> your project
          </h2>
          <div className="flex flex-col gap-y-3 mt-10">
            <h4 className="text-zinc-500 font-Krona-One">Social</h4>
            <div className="flex flex-row gap-x-6 justify-start items-center">
                <Link
                to=""
                className="flex flex-row gap-x-2 justify-center items-center text-white"
                >
                <FaFacebook fontSize={20} /> Facebook
                </Link>
                <Link
                to=""
                className="flex flex-row gap-x-2 justify-center items-center text-white"
                >
                <FaLinkedin fontSize={20} /> LinkedIn
                </Link>
                <Link
                to=""
                className="flex flex-row gap-x-2 justify-center items-center text-white"
                >
                <AiFillTikTok fontSize={20} /> Tiktok
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
