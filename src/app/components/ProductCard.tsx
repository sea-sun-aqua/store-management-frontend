// ProductCard.tsx
import React from 'react';
import {Product} from '../data/products';

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded px-4 py-2 mb-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <span className="text-green-500 font-bold">ราคา: {product.price} บาท</span>
    </div>
  );
};

export default ProductCard;