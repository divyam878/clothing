import React, { useRef } from "react";

const Photos = () => {
  const Images = [
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-photos-image-1_yfcwub.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551639/GALLERY-photos-image-2_cat7fm.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551639/GALLERY-photos-image-3_doya92.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551642/GALLERY-photos-image-4_uyeesa.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-photos-image-1_yfcwub.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551639/GALLERY-photos-image-2_cat7fm.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551639/GALLERY-photos-image-3_doya92.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551642/GALLERY-photos-image-4_uyeesa.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-photos-image-1_yfcwub.png",
    "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551639/GALLERY-photos-image-2_cat7fm.png",
  ];
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="w-full h-full pb-20 pt-10">
      <div className="flex items-center justify-between px-4">
        <h2 className="font-oswald text-white text-[5rem] font-bold tracking-wide">
          PHOTOS
        </h2>
        <div className="flex items-center justify-start space-x-8">
          <div
            className="w-12 h-12 bg-white rounded-full relative"
            onClick={handleScrollLeft}
          >
            <button className="w-12 h-12 bg-[#b7afa4] absolute -left-2 rounded-full flex items-center justify-center rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </button>
          </div>
          <div
            className="w-12 h-12 bg-white rounded-full relative"
            onClick={handleScrollRight}
          >
            <button className="w-12 h-12 bg-[#b7afa4] absolute -left-2 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide w-full h-full"
      >
        <div className="w-max h-full px-4 flex items-center space-x-4">
          {Images.map((item, index) => (
            <div
              key={index}
              className="h-max xl:w-[30rem] w-[18rem] border border-black"
            >
              <img src={item} alt="Banner" className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
