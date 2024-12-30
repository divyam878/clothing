import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiDoubleQuotesL } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const imgRefs = useRef([]);
  const quoteRef = useRef(null);
  const headingRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    // Initial load animation for images
    imgRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: index % 2 === 0 ? -200 : 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power3.out",
            delay: index * 0.2, // Stagger the animations
          }
        );
      }
    });

    // Scroll animation for images
    imgRefs.current.forEach((img, index) => {
      if (img) {
        gsap.fromTo(
          img,
          { y: index % 2 === 0 ? -200 : 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }
    });

    // Initial load animation for text elements
    if (quoteRef.current && headingRef.current && authorRef.current) {
      gsap.fromTo(
        [quoteRef.current, headingRef.current, authorRef.current],
        { scale: 0.8, opacity: 0 },
        {
          scale: 1.2,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // Stagger the animations
        }
      );
    }
  }, []);

  return (
    <div className='w-full h-screen flex space-x-2 justify-center relative overflow-hidden'>
      {[
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_oqvkjl.png",
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376144/ABOUT_PAGE_copy_4_mbe29u.png",
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_3_vvj5kj.png",
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_2_u0isx8.png",
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_2_wrhlyd.png",
        "https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376142/ABOUT_PAGE_2_copy_rx8qpm.png"
      ].map((src, index) => (
        <img
          key={index}
          ref={(el) => (imgRefs.current[index] = el)}
          src={src}
          alt="Banner"
          className={`h-[80%] w-auto ${index % 2 !== 0 ? 'mt-20' : ''}`}
        />
      ))}
      <div className='bg-black h-screen w-full absolute top-0 -left-2 opacity-50'></div>
      <RiDoubleQuotesL ref={quoteRef} className='text-white text-[6rem] absolute top-[20%]'/>
      <h1 ref={headingRef} className='absolute top-[32%] text-white text-[3rem] w-[50%] text-center'>
        You can have anything you want in life if you dress for it.
      </h1>
      <p ref={authorRef} className='absolute top-[58%] text-white text-[1rem] text-center'>
        ~Edith Head
      </p>
    </div>
  );
};

export default Header;