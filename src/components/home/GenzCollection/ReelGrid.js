import React from "react";
import { MenCollection } from "../../../constants";

const ReelGrid = () => {
  return (
    <div className="py- font-oswald">
      <div className="relative pl-4">
        <h2 className="text-[1.5rem]">EXPLORE THE NEWEST TRENDS.<span className="text-[#6b473b]"> BE THE INFLUENCE, JOIN OUR COMMUNITY.</span></h2>
        <div className="border-b border-[#919191] w-[40%] pt-4"></div>
        <div className="absolute right-0 top-2">
          <button className="flex items-center justify-center space-x-2 bg-black text-white px-4">
            <span>EXPLORE MORE</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide w-full h-full">
        <div className="w-max h-full p-4 flex items-center space-x-6">
          {MenCollection.map(({ _id, img }) => (
            <div key={_id} className="h-max w-[15rem] overflow-hidden rounded-[0.8rem]">
              <img src={img} alt="Banner" className="h-full w-full" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelGrid;
