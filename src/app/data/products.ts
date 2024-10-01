// import Product from "./product_interface";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "เสื้อยืดสีขาว",
    price: 299,
    image: "/images/product1.jpg",
    description: "เสื้อยืดคอกลม เนื้อผ้า cotton 100%"
  },
  
];

export type {Product};
export default products;