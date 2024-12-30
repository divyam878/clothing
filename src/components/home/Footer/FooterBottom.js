import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-black group font-oswald py-6 px-4">
      
        <p className="font-normal flex md:items-center text-[#b7afa4] text-sm">
          <span className="text-md mr-2 mt-[2px] md:mt-0 hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          2024 whatthefashion.com
        </p>
      
    </div>
  );
};

export default FooterBottom;
