import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props = {
   showNav: boolean;
   closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
   const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

   return (
      <div>
         {/* OVERLAY */}
         <div
            onClick={closeNav}
            className={`lg:hidden fixed inset-0 transform transition-all duration-500 z-[100002]
            bg-black opacity-70 cursor-pointer ${navOpen}`}
         ></div>

         {/* MENU */}
         <div
            className={`lg:hidden text-white fixed justify-center flex flex-col h-full
            transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%]
            bg-cyan-800 gap-6 z-[100050] right-0 ${navOpen}`}
         >
            {/* LINKS */}
            {NavLinks.map((link) => (
               <Link
                  key={link.id}
                  href={link.url}
                  onClick={closeNav}
                  className="text-white w-fit text-xl ml-12 border-b-[1.5px]
                  pb-1 border-white sm:text-[30px]"
               >
                  {link.label}
               </Link>
            ))}

            {/* CLOSE */}
            <button
               onClick={closeNav}
               className="absolute top-[0.7rem] right-[1.4rem] cursor-pointer"
            >
               <CgClose className="sm:w-8 sm:h-8 w-6 h-6" />
            </button>
         </div>
      </div>
   );
};

export default MobileNav;
