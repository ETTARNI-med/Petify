import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";

export type ProductProps = {
  _id: string;
  price: string;
  name: string;
  image: string;
  rating: number;
};

export function Products(props: ProductProps) {
  const [cartClicked, setCartClicked] = useState<boolean>(false);
  const [heartClicked, setHeartClicked] = useState<boolean>(false);

  const handleCartClick = () => {
    setCartClicked(!cartClicked);
  };
  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };
  return (
    <div className="flex my-2 justify-evenly bg-white h-[440px] p-8 rounded-lg backdrop-blur-md">
      <div
        key={props._id}
        className="  m-4 flex-1 flex-shrink-0 w-6 max-w-6 max-h-6 transition duration-200 "
      >
        <img
          src={props.image}
          alt="product-img"
          className="productImage mx-auto h-60 justify-center"
        ></img>

        {cartClicked ? (
          <FaShoppingCart
            className={`productCard__cart absolute top-0 right-0 m-4 text-2xl cursor-pointer`}
            onClick={handleCartClick}
          />
        ) : (
          <CiShoppingCart
            className={`productCard__cart absolute top-0 right-0 m-4 text-2xl cursor-pointer`}
            onClick={handleCartClick}
          />
        )}

        {heartClicked ? (
          <FaHeart
            className={`productCard__wishlist absolute top-0 right-12 m-4 text-2xl cursor-pointer`}
            onClick={handleHeartClick}
          />
        ) : (
          <CiHeart
            className={`productCard__wishlist absolute top-0 right-12 m-4 text-2xl cursor-pointer`}
            onClick={handleHeartClick}
          />
        )}

        <div className="productCard__content m-8">
          <h3 className="productName text-1.5xl line-clamp-1">{props.name}</h3>
          <div className="displayStack__1 mt-8 mb-8 flex justify-between items-center">
            <div className="productPrice text-1.5xl font-bold">
              {props.price} MAD
            </div>
            <div className="productRating flex direction-normal">
              {[...Array(props.rating)].map((index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
