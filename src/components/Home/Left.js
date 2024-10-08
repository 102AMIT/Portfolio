import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import { TiWeatherStormy } from "react-icons/ti";
import { SiLeetcode } from "react-icons/si";

import CV from "../../assets/Amit_Kumar_Thakur_Resume.pdf";
import { profileImage } from "../../assets";
const Left = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Web Developer",
      "UI Developer",
      "MERN Stack Developer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 38,
    delaySpeed: 1500,
  });
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10">
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
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">
            Amit Kumar Thakur
          </h1>
          <p className="text-base text-designColor tracking-wide">
            {text} <Cursor cursorBlinking />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <a
              href="https://github.com/102AMIT"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/amit-thakur-ab7685128/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://twitter.com/amit_thakur7766"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqWgKRHHJVhjKtDbDhcxJKVPlvwxgGcFzjFFTGrcpHzlTqQfmZdqndSMmxNpSBmfvrwTdq"

              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <FiMail />
              </span>
            </a>
            <a
              href="https://leetcode.com/AmitKumarThakur/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
                <SiLeetcode />
              </span>
            </a>
          </div>
        </div>
        {/* buttons */}
        <div className="flex h-14">
          <a
            className="w-1/2 border-r-[0.5px]  border-r-zinc-800 gap-2  border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300s"
            href={CV}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center border-r-[1px] border-r-zinc-800 items-center gap-2 ">
              Download CV <TiWeatherStormy />
            </button>
          </a>
          
          <button className="w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800">
          <a className="flex justify-center items-center gap-2 hover:text-designColor duration-300s" href="https://www.linkedin.com/in/amit-thakur-ab7685128/">
            Contact me <FiSend />
          </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
