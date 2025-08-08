"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { IoIosGlobe, IoMdPerson, IoMdSearch } from "react-icons/io";

function Header() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="absolute flex flex-wrap justify-between items-center gap-2 opacity-90 mt-5 md:px-10 w-full font-medium text-xs uppercase">
      <Head>
        <title>Next js slider</title>
      </Head>

      <div className="flex items-center gap-2 font-medium tracking-wide">
        <IoIosGlobe className="text-xl" /> travel
      </div>

      <ul className="flex flex-wrap items-center gap-3 md:gap-10 text-sm">
        {menus.map((menu, index) => (
          <motion.li
            key={index}
            layout
            className={`cursor-pointer inline-block border-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white ${
              active === index && "border-b-2 border-yellow-500"
            }`}
            onClick={() => setActive(index)}
          >
            {menu}
          </motion.li>
        ))}

        <div className="flex items-center gap-6">
          <IoMdSearch className="text-lg" />
          <IoMdPerson className="text-lg" />
        </div>
      </ul>
    </div>
  );
}

export default Header;

const menus = ["Home", "About", "Services", "Portfolio", "Blog", "Contact"];
