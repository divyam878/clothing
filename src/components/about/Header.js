import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";


const Header = () => {
  return (
    <div className='pb-10 w-full h-screen flex space-x-2 justify-center relative'>
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_oqvkjl.png"
        alt="Banner"
        className="h-[88%] w-auto"
      />
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376144/ABOUT_PAGE_copy_4_mbe29u.png"
        alt="Banner"
        className="h-[88%] w-auto mt-20"
      />
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_3_vvj5kj.png"
        alt="Banner"
        className="h-[88%] w-auto"
      />
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_2_u0isx8.png"
        alt="Banner"
        className="h-[88%] w-auto  mt-20"
      />
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376143/ABOUT_PAGE_copy_2_wrhlyd.png"
        alt="Banner"
        className="h-[88%] w-auto"
      />
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735376142/ABOUT_PAGE_2_copy_rx8qpm.png"
        alt="Banner"
        className="h-[88%] w-auto  mt-20"
      />
      <div className='bg-black h-screen w-full absolute top-0 opacity-50'></div>
      <RiDoubleQuotesL className='text-white text-[6rem] absolute top-[20%]'/>
      <h1 className='absolute top-[32%] text-white text-[3rem] w-[50%] text-center'>You can have anything you want in life if you dress for it.</h1>
    </div>
  )
}

export default Header
