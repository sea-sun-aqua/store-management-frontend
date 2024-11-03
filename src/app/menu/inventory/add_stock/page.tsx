'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import products from '@/app/data/mock_products'
import Link from 'next/link'
import axios from 'axios'


const AddProduct = () => {
  
  const [amounts, setAmounts] = useState<{ [key: string]: number }>({});
  const router = useRouter();

  const handleAmountChange = (id: string, amount: number) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [id]: amount,
    }));
  };


  const handleSave = () => {
    Object.entries(amounts).forEach(async ([id, amount]) => {
        try{
            const config = {
                headers: {
                  'Content-Type': 'application/json'
            }}
            const response = await axios.post(`http://localhost:9000/product/${id}`, JSON.stringify({
                product_amount: amount,
            }), config)

            console.log(response.data);
        }catch(err){
            console.error(err);
        }
    })
    // หลังจากบันทึกแล้ว redirect กลับไปที่หน้า Product List
    router.push('./');
  }



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Product Quantities</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product ID</th>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product.product_id}>
              <td className="py-2 px-4 border-b">{product.product_id}</td>
              <td className="py-2 px-4 border-b">{product.product_name}</td>
              <td className="py-2 px-4 border-b">${product.product_price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">
                <input
                  type="number"
                  value={amounts[product.product_id] || ''}
                  onChange={(e) =>
                    handleAmountChange(product.product_id, parseInt(e.target.value, 10) || 0)
                  }
                  className="border border-gray-400 p-1 w-16"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="./">
      <button className="mt-4 mr-5 px-4 py-2 bg-blue-500 text-white rounded">
        Back
      </button>
      </Link>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default AddProduct;
