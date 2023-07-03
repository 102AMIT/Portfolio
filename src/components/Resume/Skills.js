import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4">
        <ResumeTitle title="Design" icon={<SiArtstation />} />
        <div className="py-4">
          {/* Web Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Web Development</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Front End development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Front End Development
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Back End development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Back End Development
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* UI Development */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">UI Development</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4 pt-4">
      <ResumeTitle title="Languages" icon={<FaFlag />} />

        {/* English */}
        <div className="py-3 border-b-[1px] border-zinc-800">
          <p className="text-base text-textColor -mb-1.5">English</p>
          <span className="w-full bg-zinc-600 h-1 inline-flex relative">
            <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
          </span>
        </div>
        {/* Hindi */}
        <div className="py-3 border-b-[1px] border-zinc-800">
          <p className="text-base text-textColor -mb-1.5">Hindi</p>
          <span className="w-full bg-zinc-600 h-1 inline-flex relative">
            <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
          </span>
        </div>
        {/* Bengali */}
        <div className="py-3 border-b-[1px] border-zinc-800">
          <p className="text-base text-textColor -mb-1.5">Bengali</p>
          <span className="w-full bg-zinc-600 h-1 inline-flex relative">
            <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
          </span>
        </div>
      </div>
      <div className="col-span-4 pt-3">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
        <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">HTML</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">CSS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Java Script</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
                React JS
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">
              Express JS
            </p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Type Script</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MongoDB</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Git</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4 pt-4">
      <ResumeTitle title="KNOWLEDGE" icon={<IoIosPaper />} />

        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">Website hosting</p>
          
        </div>
        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">Design</p>
          
        </div>
        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">MicroServices Architecture</p>
          
        </div>
        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">Monolithic Architecture</p>
          
        </div>
        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">Search Engine Optimization</p>
          
        </div>
        <div className="py-3 border-b-[1px] border-zinc-800 flex"><span className="text-designColor pr-4">{<GiCheckMark />}</span>
          <p className="text-base text-textColor -mb-1.5">Scalability</p>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
