"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MdCall, MdEmail } from "react-icons/md";

const OurMission = () => {
  const Images = [
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379456/ABOUT_PAGE45_hziovi.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379185/ABOUT_PAGE42_mivqrk.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379172/ABOUT_PAGE41_mbeef6.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379183/ABOUT_PAGE43_xjuiyh.png",
    "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379449/ABOUT_PAGE44_tymzxi.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const imageRefs = useRef([]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  }, []);

  const getVisibleImages = () => {
    const visibleIndices = [];
    for (let i = -2; i <= 2; i++) {
      visibleIndices.push((currentIndex + i + Images.length) % Images.length);
    }
    return visibleIndices;
  };

  useEffect(() => {
    const visibleImages = getVisibleImages();
    visibleImages.forEach((index, position) => {
      const imgElement = imageRefs.current[index];
      gsap.fromTo(
        imgElement,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: position === 2 ? 1 : 0.8,
          duration: 0.05,
          ease: "power3.out",
        }
      );
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [handleNext]);
  

  return (
    <div className="pb-10 pt-20 h-full bg-black">
      <div className="w-full overflow-hidden flex justify-center items-center relative">
        <h2 className="text-[3.5rem] text-right text-[#b7afa4] font-semibold font-oswald absolute bottom-[24.5rem] left-[21%] xl:left-[27%] z-20">
          OUR <span className="block">MISSION</span>
        </h2>
        <p className="text-white absolute bottom-[23rem] right-[19.5%] xl:right-[26%] z-20">
          Delivering the perfect fit for{" "}
          <span className="block">your perfect body.</span>
        </p>
        <button
          className="w-12 h-12 bg-white rounded-full absolute right-4 flex items-center justify-center z-20"
          onClick={handleNext}
          aria-label="Next image"
        >
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
        <button
          className="w-12 h-12 rotate-180 bg-white rounded-full absolute left-4 flex items-center justify-center z-20"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
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
        <div className="relative w-full h-full flex justify-center items-end">
          <div className="flex items-end transition-transform duration-500 ease-in-out">
            {getVisibleImages().map((index, position) => (
              <div
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                className={`transition-transform duration-500 ease-in-out flex items-end ${
                  position === 2 ? "scale-100" : "scale-80"
                }`}
                style={{
                  transformOrigin: "bottom",
                }}
              >
                <img
                  src={Images[index]}
                  alt={`Mission Image ${index + 1}`}
                  width={300}
                  height={500}
                  className={`object-cover ${
                    position === 2 ? "w-auto h-[34rem]" : "w-auto h-[20rem]"
                  }`}
                  style={{ margin: "0", padding: "6px" }} // Ensure no margin or padding
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border border-white p-4 mx-40 mt-20 mb-10">
        <div>
          <p className="text-white font-oswald">Have Any Doubts?</p>
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
            <span className="font-oswald">+91 12345 67891</span>
          </h3>
          <p className="flex space-x-4 text-white">
            <MdEmail className="text-[1.5rem]" />
            <span className="font-oswald">company@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;