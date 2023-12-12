import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import { PrimeReactProvider } from "primereact/api";
import "./styles.css";


export default function App() {
  return (
    <>
      <PrimeReactProvider>
        <RouterProvider router={Router} />
      </PrimeReactProvider>
    </>
  );
}
