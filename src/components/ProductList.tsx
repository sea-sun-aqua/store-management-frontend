// ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import {Product} from '../data/products';
// import products from '../data/products'; // หรือดึงข้อมูลจาก API

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;