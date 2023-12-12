import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../assets/banner1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import DogBanners from "@/assets/banners/DOG-BANNERS.png";
import CatBanners from "@/assets/banners/CAR-BANNER.png";
import BirdBanners from "@/assets/banners/BIRD-BANNER.png";
import FishBanners from "@/assets/banners/FISH-BANNER.png";
import SmallPetBanners from "@/assets/banners/small-pet.png";

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
        className="mySwiper -mt-10 bg-white h-full"
      >
        <SwiperSlide>
          <img src={DogBanners} alt="banner1" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CatBanners} alt="banner2" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BirdBanners} alt="banner3" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FishBanners} alt="banner4" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SmallPetBanners} alt="banner5" className="w-96" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default swiper;
