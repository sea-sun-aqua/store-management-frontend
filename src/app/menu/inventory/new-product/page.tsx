'use client'
import axios from "axios";
import Link from 'next/link'
import { useState } from "react";

const generateProductId = (products : Product[]) => {
    const newId = `P-${(products.length + 1).toString().padStart(4, '0')}`;
    return newId;
};

export default function InventoryProductPage() {
    const [productName, setProductName] =  useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [safetyStock, setSafetyStock] = useState<number | ''>('');
    const [products, setProducts] = useState<Product[]>([]);

    // ฟังก์ชันจัดการการส่งฟอร์ม
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName || price === '' || safetyStock === '') {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    const newProduct: Product = {
        product_id: generateProductId(products),
        product_name: productName,
        product_price: Number(price),
        product_amount: 0,
        safety_stock_amount: Number(safetyStock),
      };

    try {
      // ส่งข้อมูลไปยัง API
      await axios.post('http://localhost:9000/product', newProduct);
      alert('เพิ่มสินค้าเรียบร้อยแล้ว');

      // เพิ่มข้อมูลสินค้าใหม่ใน state และรีเซ็ตฟิลด์ฟอร์ม
      setProducts([...products, newProduct]);
      setProductName('');
      setPrice('');
      setSafetyStock('');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('ไม่สามารถเพิ่มสินค้าได้');
    }
  };

    return (
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">เพิ่มสินค้าใหม่</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">ชื่อสินค้า:</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700">ราคา:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700">สต็อกปลอดภัย:</label>
              <input
                type="number"
                value={safetyStock}
                onChange={(e) => setSafetyStock(e.target.value ? Number(e.target.value) : '')}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              เพิ่มสินค้า
            </button>
          </form>
          <Link href="./">
            <button className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Back
            </button>
            </Link>
        </div>
      );
    };