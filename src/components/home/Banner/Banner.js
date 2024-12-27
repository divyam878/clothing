import React from 'react';
import ShopNow from "../../designLayouts/buttons/ShopNow";

const imageUrl = "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735203766/bannerImg1_ydu7fu.png";

const Banner = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center -mt-14">
      <img src={imageUrl} alt="Banner" className="h-full w-full" />
      <div className="text-white absolute top-[50%] font-oswald text-center">
      <h1 className="text-[3rem] font-normal">NEW ARRIVALS</h1>
      <h2 className="text-[4.5rem] font-bold mb-8">WINTER COLLECTION</h2>
      <ShopNow />
      </div>
      </div>
    </>
  )
}

export default Banner;
