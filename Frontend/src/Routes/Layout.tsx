import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Footer from "../components/Footer/index";

const Layout = () => {

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
