'use client'

import config from '@/config';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';


const OrderDetail = () => {
    const searchParams = useSearchParams();
    const orderString = searchParams.get('order')
    const order: Order = orderString ? JSON.parse(decodeURIComponent(orderString)) : null;

    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(order.order_status === "Completed" ? true : false);

    const handleComplete = async () => {

    // สามารถเพิ่มการอัพเดตสถานะลงฐานข้อมูลได้ที่นี่
    try {
        const configs = {
            headers: {
              'Content-Type': 'application/json'
        }}
        const response = await axios.post(`${config.apiUrl}/order/${order.order_id}`, JSON.stringify({
            order_status: "Completed",
            products: order.products,
            
        }), configs)

        console.log(response.data)
        setIsCompleted(true);
        alert("Completed")

    } catch (err) {
        console.error(err)
        alert('Error Complete')
    }
  };

const handleBack = () => {
    router.push('/menu/sales');
  };

return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Order ID: {order.order_id}
      </h1>
      <p className="text-gray-600">
        Date: {new Date(order.order_created_date).toLocaleDateString()}
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
        Products in this order:
      </h2>
      <ul className="space-y-4">
        {order.products.map((product: ProductOrder) => (
          <li
            key={product.product_id}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <p className="text-lg font-medium text-gray-700">
              Name: {product.product_name}
            </p>
            <p className="text-gray-600 ">Quantity: {product.order_amount}</p>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>

        <button
          onClick={handleComplete}
          className={`px-4 py-2 rounded-lg ${
            isCompleted
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
          disabled={isCompleted}
        >
          {isCompleted ? 'Completed' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
