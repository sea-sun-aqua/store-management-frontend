'use client'
import Input from "@/components/Input";
import SalesOrderRFQListHeader from "@/components/SalesOrderRFQListHeader";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from "axios";
import { useEffect, useState } from "react";
// import sampleOrders from "@/app/data/mock_orders";


export default function SalesPage() {
   
    const router = useRouter();
    const viewOrderDetails = (order_id: string) => {
        console.log(order_id)
        router.push(`./sales/${order_id}`);
      };
    
    //fetch api data
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:9000/order");
                setOrders(response.data);
            }catch (error) {
                console.error('Error fetching Orders', error);
            }finally {
                setLoading(false);
            }
      }
      fetchOrders();
    }, []);

    if (loading) {
        return <p>Loading</p>
    }
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center text-black p-10 text-3xl font-black0">
                    Sales Order
                </div>

                <div className="flex flex-wrap items-center justify-between mx-auto px-40">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8"> {/*unorder list*/}
                        <Link href="/menu" className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            Back
                        </Link>
                        <Link href={`/menu/sales/new-order?orders=${encodeURIComponent(JSON.stringify(orders))}`} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            New Order
                        </Link>
                    </ul>
                </div>
                <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                <div className="text-center mx-auto p-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="text-2xl py-2 px-4 border-b">Order ID</th>
                <th className="text-2xl py-2 px-4 border-b">Date</th>
                <th className="text-2xl py-2 px-4 border-b">Customer name</th>
                <th className="text-2xl py-2 px-4 border-b">Sales person</th>
                <th className="text-2xl py-2 px-4 border-b">Total</th>
                <th className="text-2xl py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders != null ? orders.map((order: Order) => (
                <tr key={order.order_id} onClick={() => viewOrderDetails(order.order_id)}>
                  <td className="py-2 px-4 border-b">{order.order_id}</td>
                  <td className="py-2 px-4 border-b">{order.order_created_date.toString()}</td>
                  <td className="py-2 px-4 border-b">{order.customer_name}</td>
                  {/* <td className="py-2 px-4 border-b">{order.staff.staff_name}</td> */}
                  <td className="py-2 px-4 border-b">${getTotalOrder(order.products).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">{order.order_status}</td>
                </tr>
              )) : null}
            </tbody>
          </table>
        </div>
                 </div>
            </div>
        </>
    )
    
}


function getTotalOrder(products: Product[]) :number {
    return products.reduce((total, product) => {
        return total + (product.product_price * product.product_amount);
    }, 0);
}