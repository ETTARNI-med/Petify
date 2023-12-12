import ProductDetails from "./components/ProductDetails";
import ProductSwiper from "./components/ProductSwiper";

export default function ProductPage() {
  const productProps = {
    price: 650.99,
    name: "Feline Natural Lamb & King Salmon Grain, case of 12",
    colors: ["Green", "Blue", "Red"],
    shownColor: "Green",
    sizes: ["S", "M", "L"],
    rating: 4.5,
    images: [
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/vyainwzahjhq5aaze2wj",
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/vaqvomtrzxqbzenadycz",
      "https://res.cloudinary.com/defnf0hzt/image/upload/f_auto,q_auto/t3jcnaulo6pht2rs1v0x",
    ],
  };
  return (
    <section className="flex flex-col w-full lg:flex-row items-center gap-5 xl:gap-10 lg:justify-evenly p-12">
      <div className="xl:w-1/3 w-full rounded-sm  ">
        <ProductSwiper
          images={productProps.images}
          defaultImg={productProps.images[0]}
        />
      </div>
      <div className="xl:w-1/3 w-full">
        <ProductDetails {...productProps} />
      </div>
    </section>
  );
}
