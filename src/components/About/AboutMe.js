import React from "react";

const AboutMe = () => {
  return (
    <div className="flex pb-6">
      <div className="w-1/2 text-zinc-400 px-6 borderRight flex-col p-6 ">
        <h2 className="font-bold mb-1 text-lg text-gray-200">
          Hello! I'm Amit Kumar Thakur
        </h2>
        <p className="text-base leading-6 py-4 text-left">
          A MERN stack developer, passionate about creating innovative and user
          friendly web applications. I thrive on tackling challenges and finding
          creative solutions to complex problems. With a strong foundation in
          JavaScript, React, Node.js, and MongoDB. I love to talk with you about
          our unique.
        </p>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">GENDER:</span>
            <span>Male</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">RESIDENCE:</span>
            <span>INDIA</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">ADDRESS:</span>
            <span>Kolkata, India</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">FREELANCE:</span>
            <span>Available</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">OnSite:</span>
            <span>Available</span>
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Remote:</span>
            <span>Available</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
