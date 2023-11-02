import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Footer from "../components/Footer/index";
// import Contact from "../components/Contact/Contact"
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="App">
      <NavBar />
      <LeftSide />
      <Outlet />

      <RightSide />
      <Footer />
    </div>
  );
};

export default Layout;
