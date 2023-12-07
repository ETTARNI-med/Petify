import Swiper from "./swiper";
import FeaturedSection from "./featuredSection";
// import Marquee from "./marquee";
import Announecement from "./announcement";
import Caroussel from "./caroussel";
const Home = () => {
  return (
    <>
      <Announecement></Announecement>
      <Swiper></Swiper>
      <FeaturedSection></FeaturedSection>
      <Caroussel></Caroussel>
      {/* <Marquee></Marquee> */}
    </>
  );
};

export default Home;
