import React from "react";
import ServicesCard from "./ServicesCard";
import { FaAppStoreIos, FaReact } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";

const MyServices = () => {
  return (
    <div className="grid grid-clos-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
      <ServicesCard
        icons={<FaReact />}
        title="Front End Development"
        subTitle="Extensive experience in developing responsive and user-friendly front-end applications using React, Redux, and Tailwind CSS, leveraging their powerful features to create efficient and visually appealing interfaces."
      />
      <ServicesCard
        icons={<BiLogoNodejs />}
        title="Back End Development"
        subTitle="Proficient in building scalable and efficient web applications using Node.js, leveraging frameworks like Express and utilizing NoSQL databases such as MongoDB."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Skilled in creating visually appealing and user-centric web designs by leveraging modern design principles."
      />
      <ServicesCard icons={<FaAppStoreIos />} title="SEO" subTitle="Proficient in implementing effective SEO strategies, including keyword research, on-page optimization, technical SEO, and link building, to improve organic search visibility, drive targeted traffic" />
    </div>
  );
};

export default MyServices;
