import React from "react";

const Page2 = () => {
  return (
    <div className="flex items-center justify-center relative pb-10 w-full h-screen">
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735209610/menscollection1_tiizkl.png"
        alt="Banner"
        className="h-full"
      />
      <h2 className="text-white font-oswald text-[2.2rem] font-semibold absolute right-[8rem] top-[1rem] w-[20rem]">
        Meticulously designed, exceptionally comfortable.
      </h2>
      <div className="bg-[#0d1a0e] py-4 px-6 absolute bottom-[4rem] left-[4rem] w-[24rem]">
        <p className="text-white text-justify">
          Our clothing combines modern design with unmatched comfort, using
          premium fabrics for a perfect fit and all-day ease. Each piece blends
          style and versatility, empowering you to look and feel confident
          effortlessly.
        </p>
      </div>
    </div>
  );
};

export default Page2;
