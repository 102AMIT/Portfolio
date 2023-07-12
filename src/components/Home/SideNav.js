import React from "react";
import SidenavTitle from "./SidenavTitle";

const SideNav = () => {
  return (
    <div className="px-7 py-9">
      <SidenavTitle title="M" subtitle="enu" />
      <ul>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          Portfolio Page
        </li>

        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          Achievenments
        </li>
        <SidenavTitle title="P" subtitle="rojects" />
      </ul>
      <ul>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          Food Meal App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          My Video App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          Music Player App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          CSV parser App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          My Blog App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          OTP Login App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
          Social Media App
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
        E-commerce Rest Api
        </li>
        <SidenavTitle title="A" subtitle="chievement" />
      </ul>
        <ul>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
        200+ DSA Problems Solved
        </li>
        <li className="text-textColor border-b-[1px] border-b-zinc-500 py-4 text-base hover:text-designColor duration-300">
        30+ Projects Completed
        </li>
         </ul>


    </div>
  );
};

export default SideNav;
