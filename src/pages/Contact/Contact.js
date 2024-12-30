import React from "react";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-black w-full h-screen pt-12 pb-20 pr-4 pl-12 flex">
      <div className="w-[30%] h-full border-y border-l border-white relative">
        <div className="border-t border-white w-[2.75rem] absolute -top-[1.05rem] -right-[0.4rem] rotate-45"></div>
        <div className="border-t border-white w-[2.9rem] absolute bottom-[1rem] -right-[0.4rem] rotate-45"></div>
        <div className="border-t border-white w-[2.95rem] absolute bottom-[0.95rem] -left-[2.5rem] rotate-45"></div>
        <div className="bg-[#b7afa4] border border-white w-full h-full flex flex-col items-center absolute -top-8 -left-8 py-6 xl:py-12 px-10 xl:px-14 ">
          <h3 className="text-[1.5rem] xl:text-[3rem] font-oswald">CONTACT US</h3>
          <div className="w-full pt-8 xl:pt-10">
            <label htmlFor="name" className="block text-white text-[1.1rem]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full outline-none text-[0.9rem] bg-transparent border-b-2 border-white text-black"
              required
            />
          </div>
          <div className="w-full pt-6 xl:pt-8">
            <label htmlFor="email" className="block text-white text-[1.1rem]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full outline-none text-[0.9rem] bg-transparent border-b-2 border-white text-black"
              required
            />
          </div>
          <div className="w-full pt-6 xl:pt-8">
            <label htmlFor="phone" className="block text-white text-[1.1rem]">
              Phone No.
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="block w-full outline-none text-[0.9rem] bg-transparent border-b-2 border-white text-black"
              required
            />
          </div>
          <div className="border border-white mt-8 xl:mt-16 w-full">
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Write A Message..."
              className="w-full outline-none text-[0.9rem] bg-transparent border h-20 xl:h-48 border-white text-black placeholder-white px-2"
              required
            />
          </div>
          <div className="mt-10 xl:mt-16">
            <button className="bg-transparent border border-black text-lg font-oswald w-[185px] xl:w-[240px] h-[50px] hover:bg-white transition-all duration-300  relative group">
              <div className="absolute -top-2 -left-2 w-[185px] xl:w-[240px] h-[50px] border-2 border-black transition-all duration-300 flex items-center justify-center text-white bg-black space-x-4">
                <span>Submit</span>
                <span className="text-[2rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 -6 32 32"
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
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full border border-white py-4 pl-6 pr-20">
        <h2 className="text-white text-[1.5rem] xl:text-[2.5rem] font-oswald">
          How Can We Help?
        </h2>
        <p className="text-white text-[0.9rem] pt-4 block">
          Got a burning question or just need someone to chat with (we don’t
          bite)? We’re here for all of it! Whether you're curious about our
          products, need help with your order, or just want to tell us how much
          you love our stuff (we’ll take that), our team is on standby to
          assist.
          <span className="block pt-4">
            Before you reach out, you might want to check our FAQs—we’ve covered
            the most asked questions there. But if your question’s a bit more...
            unique, feel free to hit us up directly!
          </span>
        </p>
        <h3 className="pt-8 text-white text-[1.1rem] xl:text-[1.8rem] font-oswald">
          Here’s how you can reach us:
        </h3>
        <h3 className="pt-4 text-white text-[1.1rem]  xl:text-[1.4rem] font-oswald">
          Customer Service Hours:
        </h3>
        <p className="pt-4 text-white text-[0.9rem] block">
          Call us: 9:00 AM – 6:00 PM, every day{" "}
          <span className="block">
            Chat with us: 9:00 AM – 6:00 PM, every day
          </span>
        </p>
        <div className="flex pt-8 items-center space-x-28">
          <div className="">
            <h3 className="text-white text-[1.1rem]  xl:text-[1.4rem] font-oswald">
              Contact Numbers:
            </h3>
            <div className="flex items-center space-x-4 pt-2">
              <div className="border border-white rounded-full p-1">
                <MdCall className="text-[1rem] text-white" />
              </div>
              <p className="text-white text-[0.9rem]">
                022 4890 6274/<span className="block">022 4893 0015</span>
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-white text-[1.1rem]  xl:text-[1.4rem] font-oswald">
              Chat With Us:
            </h3>
            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2">
                <div className="border border-white rounded-full p-1 w-max">
                  <FiMail className="text-[1rem] text-white" />
                </div>
                <p className="text-white text-[0.9rem]">acb@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <IoLogoWhatsapp className="text-[1.8rem] text-white" />
                <p className="text-white text-[0.9rem]">022 4893 0015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
