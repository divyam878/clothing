import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const textRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const paragraphElement = paragraphRef.current;

    gsap.fromTo(
      element,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      paragraphElement,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 13,
        ease: "power13.out",
        scrollTrigger: {
          trigger: paragraphElement,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex w-full h-screen space-x-52 py-12 relative items-center">
      <div className="w-[20%] h-full border-y-4 border-r-4 border-white flex items-center">
        <h2
          ref={textRef}
          className="text-white text-[4.5rem] font-semibold font-oswald rotate-90 whitespace-nowrap -ml-[8.6rem]"
        >
          Who We Are?
        </h2>
      </div>
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735535247/ABOUT_PAGE3_lwsj0v.png"
        alt="Banner"
        className="h-[28rem] xl:h-[38rem] w-auto absolute -left-[5rem]"
      />
      <div className="w-[80%] bg-[#0d1a0e] h-full flex items-center justify-center">
        <p
          ref={paragraphRef}
          className="w-[50%] text-white text-[1.1rem] xl:text-[1.4rem] text-justify"
        >
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