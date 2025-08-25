import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
   return (
      <div id="contact" className="p-16 scroll-mt-20">
         <div
            className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2
            gap-10 items-center"
         >
            {/* INFO */}
            <div>
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
                  Schedule a call with me to see if I can help
               </h2>

               <p className="text-gray-400 mt-6 text-base sm:text-lg">
                  Reach out to me today and let’s discuss how I can help you achieve
                  your goals.
               </p>

               {/* CONTACT DATA */}
               <div className="mt-7">
                  {/* PHONE */}
                  <div className="flex items-center gap-3 mb-4">
                     <BiPhone className="w-9 h-9 text-cyan-300" />
                     <span className="text-xl font-bold text-gray-400">
                        +9843582345
                     </span>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-center gap-3 mb-4">
                     <BiEnvelope className="w-9 h-9 text-cyan-300" />
                     <span className="text-xl font-bold text-gray-400">
                        hello@example.com
                     </span>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-center gap-3 mb-4">
                     <BiMap className="w-9 h-9 text-cyan-300" />
                     <span className="text-xl font-bold text-gray-400">
                        Dhaka, Bangladesh
                     </span>
                  </div>
               </div>

               {/* SOCIALS */}
               <div className="flex items-center mt-8 gap-3">
                  {/* FACEBOOK */}
                  <div
                     className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center
                     cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300"
                  >
                     <FaFacebookF className="text-white w-6 h-6" />
                  </div>

                  {/* YOUTUBE */}
                  <div
                     className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center
                     cursor-pointer flex-col hover:bg-red-600 transition-all duration-300"
                  >
                     <FaYoutube className="text-white w-6 h-6" />
                  </div>

                  {/* TWITTER */}
                  <div
                     className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center
                     cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300"
                  >
                     <FaTwitter className="text-white w-6 h-6" />
                  </div>

                  {/* INSTAGRAM */}
                  <div
                     className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center
                     cursor-pointer flex-col hover:bg-pink-500 transition-all duration-300"
                  >
                     <FaInstagram className="text-white w-6 h-6" />
                  </div>
               </div>
            </div>

            {/* FORM */}
            <form className="md:p-10 p-5 bg-[#131332] rounded-lg">
               {/* NAME */}
               <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3.5 bg-[#363659] text-white outline-none
                  rounded-md w-full placeholder:text-white/70"
               />

               {/* EMAIL */}
               <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                  rounded-md w-full placeholder:text-white/70"
               />

               {/* PHONE */}
               <input
                  type="text"
                  placeholder="Mobile Number"
                  className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                  rounded-md w-full placeholder:text-white/70"
               />

               {/* MESSAGE */}
               <textarea
                  placeholder="Your Message"
                  className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none
                  rounded-md w-full placeholder:text-white/70 h-[10rem] resize-none"
               ></textarea>

               {/* SUBMIT */}
               <button
                  className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all
                  duration-300 cursor-pointer text-white rounded-full"
               >
                  Send Message
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
