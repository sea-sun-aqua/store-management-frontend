'use client'

import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import sampleOrders from "@/app/data/mock_orders";



const OrderDetail = () => {
    const { order_id } = useParams();
    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(false);
    console.log(order_id)
    const order = sampleOrders[0]
    // const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (order_id) {
    //   // ดึงข้อมูล order ตาม orderId จาก API
    //   const fetchOrder = async () => {
    //     const response = await fetch(`/api/orders/${orderId}`);
    //     const data = await response.json();
    //     setOrder(data);
    //   };

    //   fetchOrder();
    // setOrder(sampleOrders[0])
    }
  }, [order_id]);

  if (!order) {
    return <p>Loading...</p>;
  }

const handleComplete = () => {
    // เปลี่ยนสถานะ order เป็น complete
    setIsCompleted(true);
    // สามารถเพิ่มการอัพเดตสถานะลงฐานข้อมูลได้ที่นี่
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
        {order.products.map((product) => (
          <li
            key={product.product_id}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <p className="text-lg font-medium text-gray-700">
              Name: {product.product_name}
            </p>
            <p className="text-gray-600">Quantity: {product.product_amount}</p>
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
