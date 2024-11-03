'use client'
import Input from "@/components/Input";
import SalesOrderRFQListHeader from "@/components/SalesOrderRFQListHeader";
import Link from 'next/link'
import axios from "axios";
import { useEffect, useState } from "react";
import sampleOrders from "@/app/data/mock_orders";

export default function SalesPage() {
    
    // //fetch api data
    // const [orders, setOrders] = useState<Order[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //   const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get("https://fca7-158-108-228-146.ngrok-free.app/order");
    //             setOrders(response.data);
    //         }catch (error) {
    //             console.error('Error     fetching products', error);
    //         }finally {
    //             setLoading(false);
    //         }
    //   }
    //   fetchProducts();
    // }, []);

    // if (loading) {
    //     return <p>Loading</p>
    // }

    const navLinks = [
        {
            title: "Back",
            path: "/menu"
        },
        {
            title: "New",
            path: "/menu/sales/complete/request_order/new_sale"
        }
    ]
    
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
                        <Link href="/menu/sales/complete/request_order/new_sale" className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            New Order
                        </Link>
                    </ul>

                    <Input input="Search"/>

                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4 bg-white rounded">
                        <SalesOrderRFQListHeader col_1="Order ID" col_2="Date" col_3="Customer" col_4="Sales Person" col_5="Total" col_6="Status"/>
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        {sampleOrders.map((order: Order, index) => (
                           <SalesOrderRFQList key={index} order={order}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
    
}

const SalesOrderRFQList = ({order}: {order: Order}) => {

    return (
        <div className="p-1">
          <div className="grid grid-cols-6 border-solid border-2 border-sky-600">
            <div className="p-2 bg-black text-white">
              <p className="flex justify-center">{order.order_id}</p>
            </div>
            
            <div className="p-2 text-black">
              <p className="flex justify-center">
                {order.order_created_date.toString()}
              </p>
            </div>
            
            <div className="p-2 bg-black text-white">
              <p className="flex justify-center">{order.customer_name}</p>
            </div>
    
            <div className="p-2 text-black">
              <p className="flex justify-center">{order.staff.staff_name}</p>
            </div>
    
            <div className="p-2 bg-black text-white">
              <p className="flex justify-center">{order.phone_number}</p>
            </div>
    
            <div className="p-2 text-black">
              <p className="flex justify-center">{order.order_status}</p>
            </div>
          </div>
        </div>
      );
    };
