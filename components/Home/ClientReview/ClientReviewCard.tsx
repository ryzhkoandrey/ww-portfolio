import Image from 'next/image';

type Props = {
   image: string;
   name: string;
   role: string;
};

const ClientReviewCard = ({ image, name, role }: Props) => {
   return (
      <div className="m-2">
         <Image
            src={image}
            alt="client"
            width={60}
            height={60}
            className="rounded-full"
         />

         <p className="mt-6 text-base text-gray-200 font-medium">
            &quot; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi
            officia doloribus &quot;
         </p>

         <h3 className="mt-6 text-xl font-bold text-cyan-200">{name}</h3>

         <p className="mt-1 text-white">{role}</p>
      </div>
   );
};

export default ClientReviewCard;
