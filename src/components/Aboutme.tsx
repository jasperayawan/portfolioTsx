import React from "react";
import { Link } from "react-router-dom";
import { IoSendOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Aboutme: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-[100px] lg:px-[200px] bg-yellow-400">
      <div className="md:flex-[1] flex flex-row w-full justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-Krona-One">
          Hello, I'm Jasper
          <br className="hidden md:block"/> a Web Developer
        </h2>
        <button></button>
      </div>
      <div className="md:flex-[1] flex flex-col gap-y-5">
        <p className="text-[18px] md:text-[24px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p className="text-[#646B73]">
        Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-start items-center">
          <Link
            to=""
            className="bg-black w-full md:w-[max-content] text-white px-7 py-3 rounded-full flex justify-center items-center gap-x-4"
          >
            Write a message <IoSendOutline fontSize={20}/>
          </Link>
          <div className="flex flex-row gap-6 justify-center items-start md:items-center">
            <Link to='' className="flex flex-row gap-x-2 justify-center items-center">
                <FaFacebook fontSize={20}/> Facebook
            </Link>
            <Link to='' className="flex flex-row gap-x-2 justify-center items-center">
                <FaLinkedin fontSize={20}/> LinkedIn
            </Link>
            <Link to='' className="flex flex-row gap-x-2 justify-center items-center">
                <AiFillTikTok fontSize={20}/> Tiktok
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
