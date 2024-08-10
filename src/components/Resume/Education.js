import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-4 ">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="July 2023- Present"
          title="Full Stack Developer"
          subtitle="Zorrro Services PVT.LTD"
          des="Implemented bi-directional data flow using Socket.IO for real-time operations, assuming full responsibility for
managing and optimizing scalable systems."
        />
        <ResumeCard
          badge="Feb 2023-Jun 2023"
          title="Full Stack Developer"
          subtitle="AdmitKard"
          des="Experience working with microservices architecture, which
allows for greater scalability and flexibility. Integrated authentication service and third-party API for
accommodation service."
        />
        <ResumeCard
          badge="Sep 2021-Jan 2023"
          title="Teaching Assistance"
          subtitle="Coding Ninjas"
          des="Conducted effective Node.js doubt sessions, assisting
students with debugging and error fixing. 
And Rated 8.6/10 by students, among the top-rated tutors"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019-2022"
          title="Techno Engineering College"
          subtitle="Kolkata"
          des="Bachelor of Technology, CGPA:8.7"
        />
        <ResumeCard
          badge="2015-2018"
          title="Kingston Engineering College"
          subtitle=" Kolkata"
          des="Diploma In Engineering, CGPA:7.8"
        />
      </div>
    </div>
  );
};

export default Education;
