import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const OurMission = () => {
  const Images = [
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379456/ABOUT_PAGE45_hziovi.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379185/ABOUT_PAGE42_mivqrk.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379172/ABOUT_PAGE41_mbeef6.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379183/ABOUT_PAGE43_xjuiyh.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379449/ABOUT_PAGE44_tymzxi.png",
  ];

  const calculateHeight = (index) => {
    const midIndex = Math.floor(Images.length / 2);
    const distance = Math.abs(midIndex - index);

    // Define height classes based on distance from the middle
    if (distance === 0) return "h-[36rem]"; // Middle image
    if (distance === 1) return "h-[20rem]"; // Adjacent images
    if (distance === 2) return "h-[16rem]"; // Images two steps away
    return "h-[12rem]"; // Images farther away
  };

  return (
    <div className="pb-10 h-full">
      <div className="h-screen w-full overflow-x-scroll scrollbar-hide flex justify-center items-center relative">
        <h2 className="text-[3.5rem] text-right text-[#b7afa4] font-semibold font-oswald absolute bottom-[29rem] left-[20%]">
          OUR <span className="block">MISSION</span>{" "}
        </h2>
        <p className="text-white absolute bottom-[25rem] right-[19.5%]">
          Delivering the perfect fit for{" "}
          <span className="block">your perfect body.</span>{" "}
        </p>
        <button className="w-12 h-12 bg-white rounded-full absolute right-4 flex items-center justify-center">
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
        </button>
        <button className="w-12 h-12 bg-white rounded-full absolute left-4 flex items-center justify-center rotate-180">
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
        </button>
        <div className="w-max h-full flex space-x-4 items-end">
          {Images.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt="Banner"
                className={`${calculateHeight(index)} w-auto`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border border-white p-4 mx-40 font-oswald mt-20 mb-10">
        <div>
          <p className="text-white">Have Any Doubts?</p>
          <p className="text-white text-[0.8rem] block pt-4">
            Feel Free to <span className="block">Reachout</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="bg-white w-3 h-3 rounded-full"></div>
          <div className="border-t w-[30rem] border-white"></div>
          <div className="bg-white w-3 h-3 rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="flex space-x-4 text-white">
            <MdCall className="text-[1.5rem]" />
            <span className="">+91 12345 67891</span>
          </h3>
          <p className="flex space-x-4 text-white">
            <MdEmail className="text-[1.5rem]" />
            <span className="">company@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
