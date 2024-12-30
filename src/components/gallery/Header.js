import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const imgRefs = useRef([]);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      const randomScale = 1 + Math.random() * 0.2; // Random scale between 1 and 1.2
      const randomDuration = 2 + Math.random() * 2; // Random duration between 2 and 4 seconds

      gsap.to(img, {
        scale: randomScale,
        duration: randomDuration,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
    <div className="w-full h-screen relative flex items-center justify-center py-10">
      <h1 className="font-oswald text-white text-[16rem] xl:text-[22rem] font-black tracking-wide z-50">GALLERY</h1>
      <div className="absolute h-screen w-full top-0 bg-black opacity-20 z-30"></div>
      {[
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551637/GALLERY-main-image-5_an0kdv.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-main-image-4_nxodpb.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-main-image-6_wfgfgm.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-main-image-7_qh5zju.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551638/GALLERY-main-image-2_wrrzwj.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551637/GALLERY-main-image-3_lrazpg.png",
        "https://res.cloudinary.com/dgma51ctx/image/upload/v1735551636/GALLERY-main-image-1_fjtwnw.png"
      ].map((src, index) => (
        <img
          key={index}
          ref={(el) => (imgRefs.current[index] = el)}
          src={src}
          alt="Banner"
          className={`h-[${index === 0 ? '70%' : index === 1 ? '20%' : index === 2 ? '25%' : index === 3 ? '18%' : index === 4 ? '40%' : index === 5 ? '24%' : '30%'}] xl:h-[${index === 0 ? '65%' : index === 1 ? '20%' : index === 2 ? '25%' : index === 3 ? '18%' : index === 4 ? '35%' : index === 5 ? '20%' : '25%'}] absolute ${index === 0 ? 'top-10 right-6' : index === 1 ? 'bottom-20 left-[18rem] xl:left-[20rem]' : index === 2 ? 'bottom-20 right-0' : index === 3 ? 'left-[27rem] top-[18.5rem] xl:top-[25rem]' : index === 4 ? 'bottom-20 left-10' : index === 5 ? 'top-32 left-[16rem] xl:left-[20rem]' : 'top-10 left-6'}`}
        />
      ))}
    </div>
  );
};

export default Header;