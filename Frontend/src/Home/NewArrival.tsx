import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Products } from "./products";

export type Product = {
  _id: string;
  sku: string;
  price: string;
  discount_price: string;
  active: boolean;
  subcategory_id: string;
  product_name: string;
  product_image: string[];
  options: string[];
  short_description: string;
  long_description: string;
};

export default function NewArrival() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getData = async () => {
    try {
      const responseData = await axios.get(
        "http://localhost:4000/v1/products/"
      );
      setProducts(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= 3 ? prevIndex - 3 : products.length - (3 - prevIndex)
    );
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < products.length
        ? prevIndex + 3
        : prevIndex + 3 - products.length
    );
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + 3);
  return (
    <>
      <div className="flex justify-between w-full mx-auto">
        <h2 className="font-bold text-6xl px-64 text-secondcolor font-Poppins ">
          <span className="block text-black dark:text-white">New</span> Arrival
        </h2>
        <div className="flex justify-start w-64 items-center">
          <ChevronLeft onClick={handleClickLeft} className="cursor-pointer" />
          <ChevronRight onClick={handleClickRight} className="cursor-pointer" />
        </div>
        
      </div>
      
      <div className=" backdrop-blur-md grid grid-cols-3 gap-4 justify-center overflow-y-hidden h-[440px] w-[80vw] mx-auto">
        {displayedProducts.map((contents) => (
          <Products
            _id={contents._id}
            key={contents._id}
            image={contents.product_image[0]}
            name={contents.product_name}
            price={contents.price}
            rating={5}
          />
        ))}
      </div>
    </>
  );
}
