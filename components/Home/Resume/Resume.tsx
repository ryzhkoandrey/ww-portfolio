import { FaCodepen, FaReact } from 'react-icons/fa';
import ResumeCard from './ResumeCard';
import { BsDatabase } from 'react-icons/bs';

const Resume = () => {
   return (
      <div className="pt-20 pb-16">
         <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* WORK */}
            <div>
               <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  My Work <span className="text-cyan-200">Experience</span>
               </h2>

               <div className="mt-10">
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
            </div>
         </div>
      </div>
   );
};

export default Resume;
