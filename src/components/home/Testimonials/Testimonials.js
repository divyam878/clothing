import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Testimonials = () => {
  const [rating, setRating] = useState(0); // Holds the rating value

  // Function to handle star click
  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <div className="pb-10 px-4 w-full font-oswald">
      <h2 className="text-[1.5rem]">TESTIMONIALS</h2>
      <p className="text-[#919191]">What our customers say</p>
      <div className="border-b border-[#919191] w-[40%] pt-4"></div>
      <div className="flex flex-col items-center justify-center py-20 w-full">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="cursor-pointer"
              onClick={() => handleRating(star)}
            >
              {rating >= star ? (
                <IoIosStar className="text-black text-[1.5rem]" />
              ) : (
                <IoIosStarOutline className="text-gray-400 text-[1.5rem]" />
              )}
            </div>
          ))}
        </div>
        <p className="text-[1.8rem] pt-6">
          The quality of fabric was soo good, it’s a must buy.
        </p>
        <p className="text-[1rem] pt-6">-david</p>
      </div>
      <div className="flex items-center justify-between border border-black p-4 mx-40">
        <div>
          <p className="">Have Any Doubts?</p>
          <p className="text-[0.8rem] block pt-4">Feel Free to <span className="block">Reachout</span></p>
        </div>
        <div className="flex items-center">
        <div className="bg-black w-3 h-3 rounded-full"></div>
        <div className="border-t w-[30rem] border-black"></div>
        <div className="bg-black w-3 h-3 rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-6">
          <h3 className="flex space-x-4"><MdCall className="text-[1.5rem]"/><span className="">+91 12345 67891</span></h3>
          <p className="flex space-x-4"><MdEmail className="text-[1.5rem]"/><span className="">company@gmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
