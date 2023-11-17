// import the swiperJS
import { Swiper, SwiperSlide } from "swiper/react";

//import pictures
import Slide1 from "../assets/banner1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import products
import React, { useState, useEffect } from 'react';
import ProductList from './productList';


interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}


const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('Product.json')
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <>
    {/************************ * Swiper section ************** */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
       
      >
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
      </Swiper>


      <div className="App">
      <h1>E-commerce Collection</h1>
      <ProductList products={products} />
    </div>
      
</>
     
  );
};

export default Home;
