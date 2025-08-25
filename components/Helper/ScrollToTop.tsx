'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false);

   // SHOW / HIDE SCROLL-BTN
   useEffect(() => {
      const toggleVisibility = () => {
         if (window.scrollY > 300) setIsVisible(true);
         else setIsVisible(false);
      };

      window.addEventListener('scroll', toggleVisibility);

      return () => {
         window.removeEventListener('scroll', toggleVisibility);
      };
   }, []);

   // SCROLL TO TOP
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   if (!isVisible) return null;

   return (
      <button
         onClick={scrollToTop}
         className="fixed bottom-4 animate-bounce right-4 bg-blue-950/60 cursor-pointer
         text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
      >
         <FaArrowUp />
      </button>
   );
};

export default ScrollToTop;
