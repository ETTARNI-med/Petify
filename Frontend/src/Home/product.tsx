import React from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

interface ProductProps {
  product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;