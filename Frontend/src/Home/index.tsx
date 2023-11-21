import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../assets/banner1.png";
import FeaturedSection from "./featuredSection";
import Marquee from "./marquee";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
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

      <FeaturedSection></FeaturedSection>
      <Marquee></Marquee>
    </>
  );
};

export default Home;
