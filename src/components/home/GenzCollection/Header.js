import React from "react";

const Header = () => {
  return (
    <div className="pb-10 w-full h-full relative font-oswald flex flex-col items-center">
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735203766/genzbannerimg1_th7tln.png"
        alt="Banner"
        className="h-full w-full"
      />
      <div className="text-center absolute top-[8%]">
        <h2 className="text-[3rem] font-semibold">GEN-Z COLLECTION</h2>
        <p>BE YOU WITH OUR NEWEST GEN-Z COLLECTION</p>
      </div>
    </div>
  );
};

export default Header;
