import React from "react";
import ShopNow from "../../designLayouts/buttons/ShopNow";
// import { Link } from "react-router-dom";

const MenEssentials = () => {
  return (
    <div className="pb-10 pl-2 flex justify-center font-oswald">
      <div className="w-[25%] px-4 relative">
        <h2 className="text-[2.8rem] font-semibold block">MEN'S <span className="block">ESSENTIALS</span></h2>
        <p className="pt-6">
          Our clothing is more than just fashion—it’s a statement of values. By
          combining premium materials with designs that reflect Gen-Z’s dynamic
          identity, we deliver a wardrobe that doesn’t just keep up with the
          trends but sets them.
        </p>
        <div className="absolute bottom-2 left-6">
          <ShopNow />
        </div>
      </div>
      <div className="w-[75%]">
        <img
          src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735209611/mesessentialbannerimg1_vk98ig.png"
          alt="Banner"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default MenEssentials;
