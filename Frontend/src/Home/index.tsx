// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//import pictures
// import Slide1 from '../assets/beagles-puppies-looking-something.jpg'
// import Slide2 from '../assets/flat-lay-toys-with-food-bowl-fur-brush-dogs.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Home = () => {
  return  (
  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
  <SwiperSlide></SwiperSlide>
  <SwiperSlide></SwiperSlide>
  <SwiperSlide></SwiperSlide>
  <SwiperSlide></SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>

);
};

export default Home;
