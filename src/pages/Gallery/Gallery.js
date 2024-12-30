import React from "react";
import Header from "../../components/gallery/Header";
import Photos from "../../components/gallery/Photos";
import Reels from "../../components/gallery/Reels";

const Gallery = () => {
  return (
    <div className="bg-black w-full h-full overflow-hidden">
      <Header />
      <Photos />
      <Reels />
    </div>
  );
};

export default Gallery;
