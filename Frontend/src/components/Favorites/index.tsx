import { useEffect, useState } from "react";
import ProductCard from "../Reusable/ProductCard";
import SectionHeader from "./SectionHeader";
import Breadcrumps from "../BreadCrumps/Breadcrumps";
import { CiHeart, CiHome } from "react-icons/ci";

const Favorites = () => {
  const initialVisibleProducts = 4;
  const [visibleProducts, setVisibleProducts] = useState(
    initialVisibleProducts
  );

  useEffect(() => {
    const slicedDescription = (description: string) => {
      description.split("...", 20);
    };
    console.log(slicedDescription(products[0].description));
  }, []);

  const products = [
    {
      imgLink:
        "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/t3jcnaulo6pht2rs1v0x",
      title: "Feline Natural Lamb & King Salmon Grain, case of 12",
      price: 650.99,
      description:
        "Grain-free, lamb and salmon flavored cat food pouches that are made in New Zealand.",
    },
    {
      imgLink:
        "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/ylxapg8ilkuyixampdye",
      title:
        "James Wellbeloved Grain Free Adult Cat Food Turkey in Gravy, case of 12",
      price: 420.99,
      description:
        "At James Wellbeloved, a lot of love is put into the creation of recipes cats will love.",
    },
    {
      imgLink:
        "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/bxz1y1q06sudjjqkaugy",
      title: "KONG - Wrangler Avocato",
      price: 39.99,
      description:
        "At James Wellbeloved, a lot of love is put into the creation of recipes cats will love.",
    },
    {
      imgLink:
        "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/gvvlpdvdnbo48fnfwtqb",
      title: "Royal Canin Kitten Chunks In Gravy Pouches",
      price: 269.99,
      description:
        "Formulated to match the natural nutrition for kittens in their growth",
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
      description:
        "Description for Product Description for Product Description for Product 2",
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
  const WishlistDirectory = [
    {
      logo: <CiHome size={30} />,
      path: "/",
      title: "Home",
    },
    {
      logo: <></>,
      path: "/wishlist",
      title: "Wishlist",
    },
  ];

  const showAllProducts = () => {
    setVisibleProducts(products.length);
  };

  const showLessProducts = () => {
    setVisibleProducts(initialVisibleProducts);
  };

  return (
    <section className="flex flex-col space-y-10 px-3 md:px-5 xl:px-7 2xl:px-10 pb-5">
      <Breadcrumps Directory={WishlistDirectory} />
      <SectionHeader
        title="My wishlist"
        subtitle="Browse Your Favorite Items"
      />
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
        onClick={
          visibleProducts === initialVisibleProducts
            ? showAllProducts
            : showLessProducts
        }
      >
        {visibleProducts === initialVisibleProducts ? "Show More" : "Show Less"}
      </button>
    </section>
  );
};

export default Favorites;
