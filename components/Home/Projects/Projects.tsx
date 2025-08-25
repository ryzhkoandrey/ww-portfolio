import Image from 'next/image';

// PROJECTS DATA
const projectsData = [
   {
      id: 1,
      img: '/images/p1.jpg',
      title: 'Modern Finance Dashboard UI',
      categories: 'Apps, UI/UX',
   },
   {
      id: 2,
      img: '/images/p2.jpg',
      title: 'Portfolio Website for Creatives',
      categories: 'Bradning, Motion',
   },
   {
      id: 3,
      img: '/images/p3.jpg',
      title: 'Brand Identity for Startups',
      categories: 'Branding, UI/UX',
   },
   {
      id: 4,
      img: '/images/p4.jpg',
      title: 'SaaS Dashboard Development',
      categories: 'Apps, UI/UX',
   },
];

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
            {projectsData.map(({ id, img, title, categories }) => (
               <div key={id}>
                  {/* PROJECT IMAGE */}
                  <Image
                     src={img}
                     width={800}
                     height={650}
                     alt="img"
                     className="rounded-lg"
                  />

                  {/* PROJECT TITLE */}
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                     {title}
                  </h3>

                  {/* PROJECT CATEGORIES */}
                  <p className="pt-2 font-medium text-white/80">{categories}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
