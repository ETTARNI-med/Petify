import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Collections from "../Collections";
import Favorites from "../Favorites";
import Orders from "../Orders";
import Cart from "../Cart";
import AddSold from "../AddSold";
import Profile from "../Profile";
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
    ],
  },
]);

export default Router;
