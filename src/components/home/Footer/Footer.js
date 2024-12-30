import React from "react";
import { FaFacebookF } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-start bg-black justify-center font-oswald">
      <div className="w-[70%] bg-[#b7afa4] h-full pt-4 pl-4">
        <h3 className="block text-center w-max tracking-widest">
          WHAT THE{" "}
          <span className="font-semibold block text-[1.2rem]">FASHION</span>
        </h3>
        <div className="border-t border-x border-black flex items-start justify-between pt-4 pl-4 pr-20 pb-20 ml-4 mt-8">
          <ul className="text-[0.8rem] space-y-2">
            <li className="text-[0.9rem] block pb-2">
              SHOP <span className="block">MEN'S WEAR</span>
            </li>
            <li>T-Shirts</li>
            <li>Jeans</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Sweatshirts & Hoodies</li>
            <li>Jacket</li>
          </ul>
          <ul className="text-[0.8rem] space-y-2">
            <li className="text-[0.9rem] pb-2">TRENDING</li>
            <li>ACOSTA Collection</li>
            <li>Anime Collection</li>
            <li>Oversized T-shirt</li>
            <li>Oversized Shirt</li>
            <li>Bottoms for Women</li>
            <li>Bottoms for Men</li>
            <li>Sweatshirts & Hoodies</li>
            <li>Jacket</li>
          </ul>
          <ul className="text-[0.8rem] space-y-2">
            <li className="text-[0.9rem] pb-2">QUICK LINKS</li>
            <li>Payments & Refunds</li>
            <li>Return & Refund Policies</li>
            <li>Privacy Policy</li>
            <li>Offers & Deals</li>
            <li>About</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
      <div className="w-[30%] bg-[#b7afa4] h-max pt-4 pr-4">
        <div className="w-8 h-8 bg-black float-right"></div>
        <div className="mt-[5.3rem] py-4 border-t border-r border-black px-4 mr-2">
          <h3 className="text-black text-[1.1rem] font-semibold">
            NEWSLETTER
          </h3>
          <h3 className="text-black text-[0.9rem] pt-2 w-[85%]">
            Beyond the Outfit: Be the first to know about new arrivals, sales &
            exclusive events.
          </h3>
          <div className="flex mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="px-4 h-10 w-full outline-none text-black border border-black placeholder-black"
            />
            <div className="bg-[#b7afa4] w-12 h-10 flex items-center justify-center border-y border-r border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 -4 32 32"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-arrow-right"
              >
                <line x1="1" y1="12" x2="30" y2="12"></line>
                <polyline points="26 9 30 12 26 15"></polyline>
              </svg>
            </div>
          </div>
          <h3 className="text-black text-[1.1rem] font-semibold pt-10">
            SOCIAL
          </h3>
          <div className="flex items-center space-x-2 my-2">
            <FaFacebookF className="bg-white w-6 h-6 rounded-full p-1" />
            {/* <RiTwitterXLine /> */}
            <FaInstagram className="bg-white w-6 h-6 rounded-full p-1" />
            <FaPinterestP className="bg-white w-6 h-6 rounded-full p-1" />
          </div>
          <h3 className="text-black text-[1.1rem] font-semibold pt-2">
            CONTACT
          </h3>
          <div className="flex items-center space-x-2 mt-2">
            <MdCall className="bg-white w-7 h-7 rounded-full p-1" />
            <MdEmail className="bg-white w-7 h-7 rounded-full p-1" />
            <IoLogoWhatsapp className="bg-white w-7 h-7 rounded-full p-1" />
            <FaInstagram className="bg-white w-7 h-7 rounded-full p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
