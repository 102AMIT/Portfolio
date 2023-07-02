import React from "react";
import { profileImage } from "../../assets";
const Left = () => {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={profileImage}
          alt="profileImage"
          loading="priority"
        />
      </div>
        <div className="w-full h-2/5">
            {/* contain the intro */}
            <div>
                <h1 className='text-3xl font-bold'>Hi, I'm <span className='text-[#00FF00]'>A</span>mit</h1>
                <h2>Full Stack Developer</h2>
            </div>
            {/* buttons */}
            <div></div>
        </div>
    </div>
  );
};

export default Left;
