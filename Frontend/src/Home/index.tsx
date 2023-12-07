import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../assets/banner1.png";
import FeaturedSection from "./featuredSection";
import Marquee from "./marquee";
import Announecement from "./announcement";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CategoriesSwiper from "./CategoriesSwiper";

const Home = () => {
  return (
    <>
    <Announecement></Announecement>
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
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper m-0"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624" alt="banner1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624" alt="banner2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624" alt="banner3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624"alt="banner4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624" alt="banner5" />
        </SwiperSlide>
      </Swiper>

      <FeaturedSection></FeaturedSection>
      <div className=" mb-10">
      <CategoriesSwiper/>
      </div>
      <Marquee></Marquee>
    </>
  );
};

export default Home;
