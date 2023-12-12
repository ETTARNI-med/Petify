import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../assets/banner1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DogBanners from "@/assets/3851663.png";
import CatBanners from "@/assets/3858431.png";
import BirdBanners from "@/assets/banner-bird.png";
import FishBanners from "@/assets/fish-banner.png";
import SmallPetBanners from "@/assets/small-pet-banner.png";

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
        className="mySwiper m-0 bg-white h-full"
      >
        <SwiperSlide>
          <img src={DogBanners} alt="banner1" className="h-96 pt-10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CatBanners} alt="banner2" className="h-96 pt-10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BirdBanners} alt="banner3" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FishBanners} alt="banner4" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SmallPetBanners} alt="banner5" className="w-96 pt-10" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;
