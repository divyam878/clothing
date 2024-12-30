import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const imgRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    const textElement1 = textRef1.current;
    const textElement2 = textRef2.current;

    gsap.fromTo(
      imgElement,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 5, // Slower animation
        ease: "power5.out", // Smoother easing
        scrollTrigger: {
          trigger: imgElement,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textElement1,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3, // Slower animation
        ease: "power3.out", // Smoother easing
        scrollTrigger: {
          trigger: textElement1,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textElement2,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3, // Slower animation
        ease: "power3.out", // Smoother easing
        scrollTrigger: {
          trigger: textElement2,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center relative w-full h-screen">
      <img
        ref={imgRef}
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735535252/GALLERY-main-image-1_iluknv.png"
        alt="Banner"
        className="h-[60%] w-auto"
      />
      <h2
        ref={textRef1}
        className="text-white font-oswald text-[2rem] font-semibold absolute right-[8rem] top-[15%] w-[18rem]"
      >
        Meticulously designed, exceptionally comfortable.
      </h2>
      <div
        ref={textRef2}
        className="bg-[#0d1a0e] py-4 px-6 absolute bottom-[18%] left-[4rem] w-[24rem]"
      >
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