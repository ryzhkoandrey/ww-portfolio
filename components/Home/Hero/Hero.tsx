import Image from 'next/image';

const Hero = () => {
   return (
      <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
         <div className="relative z-10 flex flex-col items-center">
            {/* IMAGE */}
            <Image
               src="/images/s1.jpg"
               alt="hero image"
               width={150}
               height={150}
               priority={true}
               className="rounded-full border-8 border-[#0c0c48aa]"
            />

            {/* TITLE */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
               Creating web products, <br />
               brands, <span className="text-cyan-200">and experiences.</span>
            </h1>
         </div>
      </div>
   );
};

export default Hero;
