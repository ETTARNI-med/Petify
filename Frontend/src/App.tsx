import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
// import Footer from "./components/Footer/Footer.tsx"
import "./styles.css";

export default function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
