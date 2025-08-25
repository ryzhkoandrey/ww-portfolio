'use client';

import Tilt from 'react-parallax-tilt';

import {
   SiJavascript,
   SiNextdotjs,
   SiNodedotjs,
   SiReact,
   SiTailwindcss,
   SiTypescript,
} from 'react-icons/si';

const skillsData = [
   {
      name: 'JavaScript',
      icon: <SiJavascript />,
      percentage: 89,
   },
   {
      name: 'React.js',
      icon: <SiReact />,
      percentage: 92,
   },
   {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      percentage: 90,
   },
   {
      name: 'Node.js',
      icon: <SiNodedotjs />,
      percentage: 88,
   },
   {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      percentage: 94,
   },
   {
      name: 'TypeScript',
      icon: <SiTypescript />,
      percentage: 86,
   },
];

const Skills = () => {
   return (
      <div id="skills" className="text-white py-16 scroll-mt-20">
         {/* TITLE */}
         <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My <span className="text-cyan-300">Skills</span>
         </h2>

         {/* SKILLS */}
         <div className="flex flex-wrap justify-center gap-6 mt-16">
            {skillsData.map((skill) => (
               <Tilt
                  key={skill.name}
                  scale={1.5}
                  perspective={500}
                  transitionSpeed={400}
               >
                  <div
                     className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col 
                     items-center justify-center shadow-lg transition hover:scale-105"
                  >
                     <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                     <p className="text-2xl font-semibold">{skill.percentage}</p>
                     <h3 className="text-purple-400 mt-1">{skill.name}</h3>
                  </div>
               </Tilt>
            ))}
         </div>
      </div>
   );
};

export default Skills;
