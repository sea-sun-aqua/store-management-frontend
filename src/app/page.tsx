// pages/products.tsx
import ProductList from './components/ProductList';
import products from './data/products'

const Products = () => {
  return <ProductList products={products} />;
};

export default Products;