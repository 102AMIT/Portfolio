import React from "react";

const ResumeCard = ({badge, title , subtitle, des}) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
    {
        badge === "" ?  <h5 className="w-1/2 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">Not Available</h5>: <h5 className="w-1/2 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">{badge}</h5>

    }
      <h2 className="text-lg font-titlefont text-gray-200 font-medium">{title}</h2>
      <h2 className="text-sm font-titlefont -mt-2">{subtitle}</h2>
      <p className="text-start text-[#999] font-sans pr-10  hover:text-gray-600">{des}</p>
    </div>
  );
};

export default ResumeCard;
