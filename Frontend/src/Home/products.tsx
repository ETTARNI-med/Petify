import { FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa';
import React, { useState } from 'react';
import { CiHeart, CiShoppingCart } from "react-icons/ci";

interface ProductProps {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
  }
export function Products(props: ProductProps) {
    const [cartClicked, setCartClicked] = useState<boolean>(false);
    const [heartClicked, setHeartClicked] = useState<boolean>(false);
  
    const handleCartClick = () => {
      setCartClicked(true);
      
    };
    const handleHeartClick = () => {
      setHeartClicked(true);
      
    };
    return(
        <div className='flex my-20 justify-evenly bg-gradient-to-br h-auto p-8 rounded-lg backdrop-blur-md'>
            <div key={props.id} className='  m-4 flex-1 flex-shrink-0 w-6 max-w-6 max-h-6 transition duration-200 '>
                <img src={props.image} alt='product-img' className='productImage mx-auto max-w-full h-auto justify-center'></img>

                  {cartClicked ? (
                
          <CiShoppingCart
            className={`productCard__cart absolute top-0 right-0 m-4 text-2xl cursor-pointer`}
            onClick={handleCartClick}
            
          />
        ) : (
          <FaShoppingCart
            className={`productCard__cart absolute top-0 right-0 m-4 text-2xl cursor-pointer`}
            onClick={handleCartClick}
          />
        )}

        {heartClicked ? (
          <CiHeart
            className={`productCard__wishlist absolute top-0 right-12 m-4 text-2xl cursor-pointer`}
            onClick={handleHeartClick}
          />
        ) : (
          <FaHeart
            className={`productCard__wishlist absolute top-0 right-12 m-4 text-2xl cursor-pointer`}
            onClick={handleHeartClick}
          />
        )}

                <div className='productCard__content m-8'>
                    <h3 className='productName text-1.5xl'>{props.name}</h3>
                    <div className='displayStack__1 mt-8 mb-8 flex justify-between items-center'>
                        <div className='productPrice text-1.5xl font-bold'>${props.price}</div>
                        <div className='productRating flex direction-normal'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1 } key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}