import { IconType } from 'react-icons';

type Props = {
   Icon: IconType;
   date?: string;
   role: string;
};

const ResumeCard = ({ Icon, date, role }: Props) => {
   return (
      <div className="mb-6">
         <div
            className="flex items-start gap-6 bg-blue-950/20 transition-all duration-300
            p-4 sm:p-8 rounded-md"
         >
            {/* ICON */}
            <div
               className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full
               flex items-center justify-center flex-col"
            >
               <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
            </div>

            {/* INFO */}
            <div className="flex-1">
               {/* DATE */}
               {date && (
                  <p
                     className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full
                     bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold"
                  >
                     {date}
                  </p>
               )}

               {/* ROLE */}
               <h3 className="text-gray-200 text-xl sm:text-2xl font-semibold">
                  {role}
               </h3>

               {/* DESCRIPTION */}
               <p className="text-gray-300 text-sm sm:text-base pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                  eum laudantium sapiente cumque distinctio.
               </p>
            </div>
         </div>
      </div>
   );
};

export default ResumeCard;
