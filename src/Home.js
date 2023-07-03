import React from "react";
import { FaUser, FaEnvelope, FaGoogle } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork, MdOutlineClose } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import Left from "./components/Home/Left";
import About from "./components/About/About";

const Home = () => {
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
      <div className="w-16 h-96 bg-transparent flex flex-col gap-2">
        <div className="w-full h-20 bg-bodyColor rounded-3xl  flex justify-center items-center cursor-pointer group">
          {/* Home Icons */}
          <div className="flex flex-col  gap-1.5 overflow-hidden">
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
            <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
          </div>
        </div>
        {/* other icons */}
        <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <FaUser />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              About
            </span>
          </span>
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <IoIosPaper />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Resume
            </span>
          </span>
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <MdWork />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </span>
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <FaGoogle />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Blog
            </span>
          </span>
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <FaEnvelope />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Contact
            </span>
          </span>
          <span className="w-full h-6 text-textColor items-center flex justify-center text-xl hover:text-designColor duration-300 cursor-pointer relative group">
            <BsTelephonePlusFill />
            <span className="absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">
              Call
            </span>
          </span>
        </div>
      </div>
      <div className="w-[94%] h-full bg-transparent flex items-center">
        {/* left part start */}
        <Left />
        {/* right part start */}
        <div className="w-8/12 h-[95%] bg-bodyColor ">
            <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
