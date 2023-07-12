import React from "react";
import "../../index.css";

const AboutMe = () => {
  return (
    <div className="flex pb-6 border-b-[1px] border-b-zinc-800">
      <div className="w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex-col p-6 ">
        <h2 className="font-bold mb-1 text-lg text-gray-200">
          Hello! I'm Amit Kumar Thakur
        </h2>
        <p className="text-base leading-6 py-4 text-left">
          A MERN stack developer, passionate about creating innovative and user
          friendly web applications. I thrive on tackling challenges and finding
          creative solutions to complex problems with a strong foundation in
          JavaScript, React, Node.js, Express.js and MongoDB. I love to talk with you about
          our unique.
        </p>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">GENDER:</span>
            <span>Male</span>
          </li>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">RESIDENCE:</span>
            <span>INDIA</span>
          </li>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">ADDRESS:</span>
            <span>Kolkata, India</span>
          </li>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">FREELANCE:</span>
            <span>Available</span>
          </li>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">OnSite:</span>
            <span>Available</span>
          </li>
          <li className=" text-zinc-400 text-base font-normal flex justify-between items-center border-b-[1px] border-gray-800 py-2">
            <span className=" bg-designColor text-black uppercase px-4 py-[1px] rounded-md">Remote:</span>
            <span>Available</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
