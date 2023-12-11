
import {Truck , CircleDollarSign , Phone , Lock  } from 'lucide-react';

export default function CategoriesSwiper() {
  const categories = [
    { name: 'Free Shipping >300 Dh', logo: <Truck  size={70} /> },
    { name: 'Money-Back <30 days', logo: <CircleDollarSign  size={70}  /> },
    { name: 'Secure Payments', logo: <Lock  size={70}/> },
    { name: '24/7 Support ', logo: <Phone  size={50}  /> },

  ];

  return (
       <div  className="flex justify-center">
      <div className="flex gap-32 items-center">
        {categories.map(({ logo, name }, index) => (
          <div className='bg-transparent backdrop-blur-lg w-48 h-48 border rounded-sm border-2  border-secondcolor border-solid flex flex-col items-center justify-center hover:bg-orange-300' key={index}>
            {logo}
            <span className="mt-4 w-32 text-center mx-auto text-lg font-bold font-Poppins">
              {name}
            </span>
            
          </div>
        ))}
      </div></div>
  );
}
