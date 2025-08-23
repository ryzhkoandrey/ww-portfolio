'use client';

import Link from 'next/link';
import { NavLinks } from '@/constant/constant';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useEffect, useState } from 'react';

type Props = {
   openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
   const [navBg, setNavBg] = useState(false);

   useEffect(() => {
      const handler = () => {
         if (window.scrollY >= 90) setNavBg(true);
         if (window.scrollY < 90) setNavBg(false);
      };

      window.addEventListener('scroll', handler);

      return () => window.removeEventListener('scroll', handler);
   }, []);

   return (
      <div
         className={`transition-all duration-200 h-[12vh] z-[10000] fixed w-full
         ${navBg ? 'bg-[#0f142ed9] shadow-md' : ''}`}
      >
         <div className="flex items-center h-full justify-between w-[90%] mx-auto gap-4">
            {/* LOGO */}
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                  <FaCode className="w-5 h-5 text-black" />
               </div>
               <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
                  SAJAL
               </h1>
            </div>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
               {NavLinks.map((link) => (
                  <Link
                     key={link.id}
                     href={link.url}
                     className="text-base hover:text-cyan-300 text-white font-medium
                     transition-all duration-200"
                  >
                     {link.label}
                  </Link>
               ))}
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-4">
               {/* DOWNLOAD CV */}
               <button
                  className="px-8 py-3.5 text-sm cursor-pointer rounded-lg
                  bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white
                  flex items-center gap-2"
               >
                  <BiDownload className="w-5 h-5" />
                  <span>Download CV</span>
               </button>

               {/* BURGER MENU */}
               <button className="lg:hidden cursor-pointer" onClick={openNav}>
                  <HiBars3BottomRight className="w-8 h-8 text-white" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default Nav;
