import { useEffect, useState } from 'react';
import ProductCard from "../Reusable/ProductCard";
import SectionHeader from "./SectionHeader";

const Favorites = () => {
  const initialVisibleProducts = 4;
  const [visibleProducts, setVisibleProducts] = useState(initialVisibleProducts);

  useEffect(()=>{
    const slicedDescription = (description:string)=>{
      description.split("...", 20)  
    }
    console.log(slicedDescription(products[0].description))
  },[])
  
  const products = [
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 1",
      price: 19.99,
      description: "Description for Product 1",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 2",
      price: 29.99,
      description: "Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 3",
      price: 39.99,
      description: "Description for Product 3",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 4",
      price: 29.99,
      description: "Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 5",
      price: 29.99,
      description: "Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 3",
      price: 39.99,
      description: "Description for Product 3",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 4",
      price: 29.99,
      description: "Description for Product Description for Product Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 5",
      price: 29.99,
      description: "Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 3",
      price: 39.99,
      description: "Description for Product 3",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 4",
      price: 29.99,
      description: "Description for Product 2",
    },
    {
      imgLink: "https://via.placeholder.com/1640x624",
      title: "Product 5",
      price: 29.99,
      description: "Description for Product 2",
    },
  ];

  const showAllProducts = () => {
    setVisibleProducts(products.length);
  };

  const showLessProducts = () => {
    setVisibleProducts(initialVisibleProducts);
  };

  return (
    <section className="flex flex-col space-y-10 pb-5">
      <SectionHeader title="My wishlist" subtitle="Browse Your Favorite Items" />
      <div className="w-full grid md:px-4 2xl:px-0 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            description={product.description}
            imgLink={product.imgLink}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
      <button
        className="flex items-center justify-center hover:bg-secondcolor duration-200 border-secondcolor border-2 bg-transparent bg text-center w-2/5 self-center rounded-lg hover:text-white text-lg py-1 md:py-2 transition-transform duration-300 transform"
        onClick={visibleProducts === initialVisibleProducts ? showAllProducts : showLessProducts}
      >
        {visibleProducts === initialVisibleProducts ? 'Show More' : 'Show Less'}
      </button>
    </section>
  );
};

export default Favorites;
