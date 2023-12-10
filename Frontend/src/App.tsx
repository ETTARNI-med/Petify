import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import "./styles.css";

export default function App() {
  return (
    <>
     
        <RouterProvider router={Router} />
    
    </>
  );
}
