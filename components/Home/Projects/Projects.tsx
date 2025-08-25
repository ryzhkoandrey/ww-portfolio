import Image from 'next/image';

const Projects = () => {
   return (
      <div id="works" className="py-16 scroll-mt-20">
         {/* TITLE */}
         <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            A small selection of recent <br />
            <span className="text-cyan-300">projects</span>
         </h2>

         {/* PROJECTS */}
         <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* PROJECT 1 */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
               <Image
                  src="/images/p1.jpg"
                  width={800}
                  height={650}
                  alt="img"
                  className="rounded-lg"
               />

               <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  Modern Finance Dashboard UI
               </h3>

               <p className="pt-2 font-medium text-white/80">Apps, UI/UX</p>
            </div>

            {/* PROJECT 2 */}
            <div
               data-aos="fade-up"
               data-aos-anchor-placement="top-center"
               data-aos-delay="100"
            >
               <Image
                  src="/images/p2.jpg"
                  width={800}
                  height={650}
                  alt="img"
                  className="rounded-lg"
               />

               <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  Portfolio Website for Creatives
               </h3>

               <p className="pt-2 font-medium text-white/80">Bradning, Motion</p>
            </div>

            {/* PROJECT 3 */}
            <div
               data-aos="fade-up"
               data-aos-anchor-placement="top-center"
               data-aos-delay="200"
            >
               <Image
                  src="/images/p3.jpg"
                  width={800}
                  height={650}
                  alt="img"
                  className="rounded-lg"
               />

               <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  Brand Identity for Startups
               </h3>

               <p className="pt-2 font-medium text-white/80">Branding, UI/UX</p>
            </div>

            {/* PROJECT 4 */}
            <div
               data-aos="fade-up"
               data-aos-anchor-placement="top-center"
               data-aos-delay="300"
            >
               <Image
                  src="/images/p4.jpg"
                  width={800}
                  height={650}
                  alt="img"
                  className="rounded-lg"
               />

               <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                  SaaS Dashboard Development
               </h3>

               <p className="pt-2 font-medium text-white/80">Apps, UI/UX</p>
            </div>
         </div>
      </div>
   );
};

export default Projects;
