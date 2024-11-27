import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="p-10 pt-20">
      <h1 className="text-xl font-semibold text-center text-cyan-500">Skills</h1>
      <h2 className="text-4xl text-black font-bold text-center mt-2">What I am capable of?</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
        
        <div className="flex flex-col items-center">
        <div className="w-20 h-20 flex items-center justify-center bg-orange-500 ">
            <FaHtml5 size={60} color="white"/>
          </div>
          </div>
      

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-lg">
            <IoLogoCss3 size={60} color="white" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-purple-500 rounded-lg">
            <BsBootstrapFill size={60} color="white" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-teal-500 rounded-lg">
            <RiTailwindCssFill size={60} color="white" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-indigo-600 rounded-lg">
            <SiPhp size={60} color="white" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-red-600 rounded-lg">
            <FaLaravel size={60} color="white" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
