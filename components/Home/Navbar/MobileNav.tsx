import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

const MobileNav = () => {
   return (
      <div>
         {/* OVERLAY */}
         <div
            className="fixed inset-0 transform transition-all duration-500 z-[100002]
            bg-black opacity-70"
         ></div>

         {/* MENU */}
         <div
            className="text-white fixed justify-center flex flex-col h-full
            transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]
            bg-cyan-800 gap-6 z-[100050] right-0"
         >
            {/* LINKS */}
            {NavLinks.map((link) => (
               <Link
                  key={link.id}
                  href={link.url}
                  className="text-white w-fit text-xl ml-12 border-b-[1.5px]
                  pb-1 border-white sm:text-[30px]"
               >
                  {link.label}
               </Link>
            ))}

            {/* CLOSE */}
            <button className="absolute top-[0.7rem] right-[1.4rem]">
               <CgClose className="sm:w-8 sm:h-8 w-6 h-6" />
            </button>
         </div>
      </div>
   );
};

export default MobileNav;
