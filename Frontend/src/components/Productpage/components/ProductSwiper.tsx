import "swiper/css";
import "swiper/css/scrollbar";
import  { useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Import Swiper core and required modules
import SwiperCore from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
// install Swiper modules\
SwiperCore.use([Navigation, Thumbs]);

interface ProductSwiperProps {
  images: string[];
  defaultImg: string;
}

export default function ProductSwiper({ images ,defaultImg }: ProductSwiperProps) {
  const [currentMain, setCurrentMain] = useState(defaultImg);
  const ChangeImg = (image: string) => {
    setCurrentMain(image);
  };

  return (
    <div className="gap-2 bg-transparent w-full flex ">
      <div className=" bg-transparent w-[70px] h-[300px] md:w-[100px] md:h-[400px]">
        <Swiper
          direction="vertical"
          loop={true}
          slidesPerView={5}
          spaceBetween={4}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {images.map((item,index)=>{
            return (
              <SwiperSlide
                onClick={() => {
                  ChangeImg(item);
                }}
                key={index}
                draggable
                className="flex cursor-pointer"
              >
                <img src={item} alt="IMG3" />
              </SwiperSlide>
            );
          })}
        
        </Swiper>
      </div>
      <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
        <Swiper
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
            <img src={currentMain} className="transition ease-linear duration-150" alt="IMG1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
