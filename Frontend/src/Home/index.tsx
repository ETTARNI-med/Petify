import Swiper from "./swiper";
// import Marquee from "./marquee";
import Announecement from "./announcement";
import Caroussel from "./caroussel";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CategoriesSwiper from "./CategoriesSwiper";
import Marque from "./marquee";
import ProductsPreviewTest from "./components/svgcategories";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-8 xl:gap-10"> 
      <Announecement/>
      <Swiper/>
      {/* <ProductsPreviewTest  /> */}
      {/* <FeaturedSection></FeaturedSection> */}
      {/* <Marquee></Marquee> */}
      <Caroussel></Caroussel>
      <CategoriesSwiper />
      <Marque></Marque>
    </div>
  );
};

export default Home;
