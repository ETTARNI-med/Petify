import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../assets/banner1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const swiper = () => {
  return (
    <div>
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
          <img src="https://via.placeholder.com/1640x624" alt="banner4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/1640x624" alt="banner5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;
