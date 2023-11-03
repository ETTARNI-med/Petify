import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Collections from "../Collections";
import Favorites from "../Favorites";
import Orders from "../Orders";
import Cart from "../Cart";
import AddSold from "../AddSold";
import Profile from "../Profile";
import Contact from "../components/Contact/Contact";
import ShippingPolicy from "../components/Pages/ShippingPolicy";
import TermsOfSale from "../components/Pages/TermsOfSale";
import RefundPolicy from "../components/Pages/RefundPolicy";
import PrivacyPolicy from "../components/Pages/PrivacyPolicy";
import Blog from "../components/Pages/Blog";
import AboutUs from "../components/Pages/AboutUs";
import Layout from "./Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/addsold",
        element: <AddSold />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/TermsOfSale",
        element: <TermsOfSale />,
      },  {
        path: "/ShippingPolicy",
        element: <ShippingPolicy />,
      },  {
        path: "/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },  {
        path: "/RefundPolicy",
        element: <RefundPolicy />,
      },{
        path: "/AboutUs",
        element: <AboutUs />,
      },{
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
]);

export default Router;