import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CategoryCard from './components/CategoryCard';
import { Bird, Cat, Dog, Fish, Rat } from 'lucide-react';
//import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/Favorites/SectionHeader';

export default function CategoriesSwiper() {
  const categories = [
    { name: 'Cats', logo: <Cat size={70} /> },
    { name: 'Dogs', logo: <Dog size={70} /> },
    { name: 'Birds', logo: <Bird size={70} /> },
    { name: 'Fish', logo: <Fish size={70} /> },
    { name: 'Others', logo: <Rat size={70} /> },
  ];

  return (
    <div className='flex flex-col items-center '>
        <div className='self-start'>
       <SectionHeader  subtitle='Browse By Category' title='Categories'/>
        </div>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{  
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          '@1.50': {
            slidesPerView: categories.length,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
        className="myswiper bg-slate-100/10 backdrop-blur-md px-5 py-10"
      >
        {categories.map(({ logo, name }, index) => (
          <SwiperSlide className='bg-transparent ' key={index}>
            <CategoryCard logo={logo} name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
