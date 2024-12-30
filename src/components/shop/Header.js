import React, { useState } from "react";

const Header = () => {
  const titles = ["T-SHIRTS", "JEANS", "SHIRTS", "CARGOS", "PANTS", "POLO T-SHIRTS"];
  const images = {
    "T-SHIRTS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551653/SHOP-tshirt-image-3_jffnkb.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551654/SHOP-tshirt-image-2_b7clxm.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551653/SHOP-tshirt-image-1_uckppo.png",
    ],
    "JEANS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551645/SHOP-jeans-image-3_ywyvni.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551644/SHOP-jeans-image-1_hzswxp.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551643/SHOP-jeans-image-2_g9ekde.png",
    ],
    "SHIRTS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551652/SHOP-shirt-image-3_yh5qwk.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551649/SHOP-shirt-image-2_alcsgt.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551649/SHOP-shirt-image-1_w8e90v.png",
    ],
    "CARGOS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551643/SHOP-cargo-image-3_qpfhaf.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551642/SHOP-cargo-image-2_wwctxm.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551642/SHOP-cargo-image-1_k3rwak.png",
    ],
    "PANTS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551648/SHOP-pant-image-3_tcyrcu.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551648/SHOP-pant-image-2_xgzsgy.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551646/SHOP-pant-image-1_beutoo.png",
    ],
    "POLO T-SHIRTS": [
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551649/SHOP-polo-tshirt-image-3_r2cllg.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551648/SHOP-polo-tshirt-image-2_ar4qqa.png",
      "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551648/SHOP-polo-tshirt-image-1_sqwmfg.png",
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("T-SHIRTS");

  return (
    <div className="h-full w-full font-oswald px-4 pb-10">
      <h1 className="text-[#919191] text-[7rem] font-bold opacity-30 w-max tracking-wide">
        {selectedCategory}
      </h1>
      <div className="flex">
        <div className="w-[20%] space-y-2 pt-10 pl-4">
          {titles.map((title, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(title)}
              className={`cursor-pointer ${
                selectedCategory === title ? "text-black font-bold" : "text-gray-500"
              }`}
            >
              <h3>{title}</h3>
            </div>
          ))}
          <div className="flex items-center justify-start pt-16 pl-2 space-x-8">
            <div className="w-12 h-12 bg-black rounded-full relative">
              <button className="w-12 h-12 bg-[#e7e4e3] absolute -left-2 rounded-full flex items-center justify-center rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 -4 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="1" y1="12" x2="30" y2="12"></line>
                  <polyline points="26 9 30 12 26 15"></polyline>
                </svg>
              </button>
            </div>
            <div className="w-12 h-12 bg-black rounded-full relative">
              <button className="w-12 h-12 bg-[#e7e4e3] absolute -left-2 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 -4 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="1" y1="12" x2="30" y2="12"></line>
                  <polyline points="26 9 30 12 26 15"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%]">
          <div className="flex items-center justify-center space-x-16">
          {images[selectedCategory].map((item, index) => {
              const isMiddleImage = index === Math.floor(images[selectedCategory].length / 2);
              return (
                <div
                  key={index}
                  className={`transition-transform duration-500 ${
                    isMiddleImage ? "scale-125" : "scale-60"
                  }`}
                >
                  <img src={item} alt={selectedCategory} className="h-[20rem]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
