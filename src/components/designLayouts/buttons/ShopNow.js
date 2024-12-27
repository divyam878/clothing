import React from "react";

const ShopNow = () => {
  return (
    <button className="bg-transparent border border-black text-lg font-oswald w-[185px] h-[50px] hover:bg-[#b7afa4] transition-all duration-300  relative group">
      <div className="absolute -top-2 -left-2 w-[185px] h-[50px] group-hover:bg-black border-2 border-black transition-all duration-300 flex items-center justify-center text-black group-hover:text-white space-x-4">
        <span>Show Now</span>
        <span className="text-[2rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 -6 32 32"
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
      </div>
    </button>
  );
};

export default ShopNow;
