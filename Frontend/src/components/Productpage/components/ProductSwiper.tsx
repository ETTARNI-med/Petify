import React, { useState } from "react";
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
interface ProductImages {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
}

export default function ProductSwiper(props: ProductImages) {
  const { image1, image2, image3, image4, image5, image6, image7, image8 } =
    props;
    const AllImages = [image1, image2, image3, image4, image5, image6, image7, image8 ]
  const [CurentMain, setCurrentMain] = useState(image1);
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
          {AllImages.map((item,index)=>{
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
            <img src={CurentMain} className="transition ease-linear duration-150" alt="IMG1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
import "swiper/css";
import "swiper/css/scrollbar";
