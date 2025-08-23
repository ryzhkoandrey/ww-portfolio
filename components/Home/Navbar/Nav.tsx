import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const Nav = () => {
   return (
      <div className="transition-all duration-200 h-[12vh] z-[10000] fixed w-full">
         <div className="flex items-center h-full justify-between w-[90%] mx-auto">
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
            <div className="hidden lg:flex items-center gap-10">
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
         </div>
      </div>
   );
};

export default Nav;
