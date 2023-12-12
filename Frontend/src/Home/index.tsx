import Swiper from "./swiper";
import FeaturedSection from "./featuredSection";
// import Marquee from "./marquee";
import Announecement from "./announcement";
import Caroussel from "./caroussel";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
//import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CategoriesSwiper from "./CategoriesSwiper";
import Marque from "./marquee";
//import ProductsPreviewSection from "./components/ProductsPreviewSection";
import ProductsPreviewTest from "./components//svgcategories"
const Home = () => {
  return (
    <>
      <Announecement></Announecement>
      <Swiper></Swiper>
      
      <ProductsPreviewTest/>
÷      <Caroussel></Caroussel>
      {/*<ProductsPreviewSection/>*/}
      {/* <Marquee></Marquee> */}
      <div className=" mb-10">
      <CategoriesSwiper/>
      </div>
      <Marque></Marque>
    </>
  );
};

export default Home;
