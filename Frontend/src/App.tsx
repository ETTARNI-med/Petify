import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
// import Footer from "./components/Footer/Footer.tsx"
import "./styles.css";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    
    </>
  );
}
