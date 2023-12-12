
import {Truck , CircleDollarSign , Phone , Lock  } from 'lucide-react';

export default function CategoriesSwiper() {
  const categories = [
    { name: 'Free Shipping >300 Dh', logo: <Truck  className='w-7 h-7 md:w-10 md:h-10 xl:w-14 xl:h-14 ' /> },
    { name: 'Money-Back <30 days', logo: <CircleDollarSign  className='w-7 h-7 md:w-10 md:h-10 xl:w-14 xl:h-14 '  /> },
    { name: 'Secure Payments', logo: <Lock  className='w-7 h-7 md:w-10 md:h-10 xl:w-14 xl:h-14 '/> },
    { name: '24/7 Support ', logo: <Phone  className='w-7 h-7 md:w-10 md:h-10 xl:w-14 xl:h-14 ' /> },

  ];

  return (
       <div  className="flex justify-center">
      <div className="flex gap-2 md:gap-5 lg:gap-7 items-center">
        {categories.map(({ logo, name }, index) => (
          <div className='bg-transparent backdrop-blur-lg w-12 h-12 md:w-28 md:h-28 xl:h-44 xl:w-44 rounded-sm border-2  border-secondcolor border-solid flex flex-col items-center justify-center hover:bg-orange-300' key={index}>
            {logo}
            <span className="  text-center mx-auto text-sm md:text-md xl:text-lg font-bold font-Poppins">
              {name}
            </span>
            
          </div>
        ))}
      </div>
      </div>
  );
}