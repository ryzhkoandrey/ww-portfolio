import { FaCodepen, FaReact } from 'react-icons/fa';
import ResumeCard from './ResumeCard';
import { BsDatabase } from 'react-icons/bs';
import { BiBadge } from 'react-icons/bi';

const Resume = () => {
   return (
      <div id="resume" className="pt-20 pb-16 scroll-mt-20">
         <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* WORK */}
            <div>
               <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  My Work <span className="text-cyan-200">Experience</span>
               </h2>

               <div
                  data-aos="zoom-in"
                  data-aos-anchor-placement="top-center"
                  className="mt-10"
               >
                  <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
                  <ResumeCard Icon={FaReact} role="Front-End Developer" />
                  <ResumeCard Icon={BsDatabase} role="Backend Developer" />
               </div>
            </div>

            {/* EDUCATION */}
            <div>
               <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  My <span className="text-cyan-200">Education</span>
               </h2>

               <div
                  data-aos="zoom-out"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay="300"
                  className="mt-10"
               >
                  <ResumeCard
                     Icon={BiBadge}
                     date="Jan 2023 - Dec 2024"
                     role="Design Institute of Technology"
                  />
                  <ResumeCard
                     Icon={FaReact}
                     date="Jan 2019 - Dec 2022"
                     role="Bachelor in Computer Science"
                  />
                  <ResumeCard
                     Icon={BsDatabase}
                     date="Jan 2016 - Dec 2019"
                     role="Certificate in Digital Marketing"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Resume;
