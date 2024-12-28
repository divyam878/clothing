import React from "react";

const WhoWeAre = () => {
  return (
    <div className="flex w-full h-screen space-x-52 py-10 relative items-center">
      <div className="w-[20%] h-full border-y-4 border-r-4 border-white flex items-center">
        <h2 className="text-white text-[4.5rem] font-semibold font-oswald rotate-90 whitespace-nowrap -ml-[8.6rem]">
          Who We Are?
        </h2>
      </div>
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735379547/ABOUT_PAGE3_skd1ss.png"
        alt="Banner"
        className="h-[28rem] w-auto absolute -left-[5rem]"
      />
      <div className="w-[80%] bg-[#0d1a0e] h-full flex items-center justify-center">
        <p className="w-[50%] text-white text-justify">
          We are a clothing brand for the new generation, redefining style with
          a blend of modern trends and timeless comfort. Designed for those who
          embrace individuality, our collections cater to dynamic lifestyles
          with versatile, high-quality pieces that inspire confidence and
          self-expression.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
