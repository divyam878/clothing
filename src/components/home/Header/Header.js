import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-14 bg-white sticky top-0 z-50 font-oswald">
      <nav className="h-full px-4 max-w-container mx-auto relative flex items-center">
        <Flex className="flex items-center justify-center h-full">
          <Link to="/">
            <div>
              <Image className="w-20 object-cover" imgSrc={logo} />
            </div>
          </Link>
        </Flex>
        <div className="flex items-center w-full justify-center">
          {showMenu && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-50 p-0 gap-2"
            >
              <>
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    className="flex font-normal hover:font-normal w-20 h-6 justify-center items-center px-12 text-base text-black hover:underline underline-offset-[4px] decoration-[1px] hover:text-black"
                    to={link}
                  >
                    <li>{title}</li>
                  </NavLink>
                ))}
              </>
            </motion.ul>
          )}
          <HiMenuAlt2
            onClick={() => setSidenav(!sidenav)}
            className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
          />
          {sidenav && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-full relative"
              >
                <div className="w-full h-full bg-primeColor p-6">
                  <img className="w-28 mb-6" src={logoLight} alt="logoLight" />
                  <ul className="text-gray-200 flex flex-col gap-2">
                    {navBarList.map((item) => (
                      <li
                        className="font-normal hover:font-normal items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white"
                        key={item._id}
                      >
                        <NavLink
                          to={item.link}
                          state={{ data: location.pathname.split("/")[1] }}
                          onClick={() => setSidenav(false)}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h1
                      onClick={() => setCategory(!category)}
                      className="flex justify-between text-base cursor-pointer items-center font-oswald mb-2"
                    >
                      Shop by Category{" "}
                      <span className="text-lg">{category ? "-" : "+"}</span>
                    </h1>
                    {category && (
                      <motion.ul
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm flex flex-col gap-1"
                      >
                        <li className="headerSedenavLi">New Arrivals</li>
                        <li className="headerSedenavLi">Gudgets</li>
                        <li className="headerSedenavLi">Accessories</li>
                        <li className="headerSedenavLi">Electronics</li>
                        <li className="headerSedenavLi">Others</li>
                      </motion.ul>
                    )}
                  </div>
                  <div className="mt-4">
                    <h1
                      onClick={() => setBrand(!brand)}
                      className="flex justify-between text-base cursor-pointer items-center font-oswald mb-2"
                    >
                      Shop by Brand
                      <span className="text-lg">{brand ? "-" : "+"}</span>
                    </h1>
                    {brand && (
                      <motion.ul
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-sm flex flex-col gap-1"
                      >
                        <li className="headerSedenavLi">New Arrivals</li>
                        <li className="headerSedenavLi">Gudgets</li>
                        <li className="headerSedenavLi">Accessories</li>
                        <li className="headerSedenavLi">Electronics</li>
                        <li className="headerSedenavLi">Others</li>
                      </motion.ul>
                    )}
                  </div>
                </div>
                <span
                  onClick={() => setSidenav(false)}
                  className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                >
                  <MdClose />
                </span>
              </motion.div>
            </div>
          )}
        </div>
        <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-2 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-8 right-0 z-50 bg-primeColor w-max text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Login
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Sign Up
                  </li>
                </Link>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Profile
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Others
                </li>
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {products.length > 0 ? products.length : 0}
                </span>
              </div>
            </Link>
          </div>
      </nav>
    </div>
  );
};

export default Header;
