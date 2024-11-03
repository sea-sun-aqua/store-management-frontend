'use client'
import Input from "@/components/Input";
import NavLink from "@/components/NavLink";
import SalesOrderRFQList from "@/components/SalesOrderRFQList"
import SalesOrderRFQListHeader from "@/components/SalesOrderRFQListHeader";
import axios from "axios";
import { useEffect, useState } from "react";

const sampleOrders: Order[] = [
    {
        order_id: 'ORD001',
        customer_name: 'John Doe',
        customer_email: 'johndoe@example.com',
        phone_number: '0812345678',
        customer_address: '123 Main St, Anytown, CA',
        order_payment_method: 'Credit Card',
        order_status: 'Pending',
        order_created_date: new Date('2023-11-23'),
        staff_id: 'EMP001',
        staff_name: 'Alice Smith'
    },
    {
        order_id: 'ORD002',
        customer_name: 'Jane Smith',
        customer_email: 'jane.smith@company.com',
        phone_number: '+44 20 7946 0123',
        customer_address: '456 Baker St, London, UK',
        order_payment_method: 'Debit Card',
        order_status: 'Processing',
        order_created_date: new Date('2023-11-21'),
        staff_id: 'EMP002',
        staff_name: 'Bob Johnson'
      },
      {
        order_id: 'ORD003',
        customer_name: 'David Lee',
        customer_email: 'davidlee123@gmail.com',
        phone_number: '+852 8123 4567',
        customer_address: '789 Queen\'s Rd, Hong Kong',
        order_payment_method: 'Cash on Delivery',
        order_status: 'Shipped',
        order_created_date: new Date('2023-11-22'),
        staff_id: 'EMP003',
        staff_name: 'Emily Wang'
      },
      {
        order_id: 'ORD004',
        customer_name: 'Maria Garcia',
        customer_email: 'maria.garcia@hotmail.com',
        phone_number: '+34 91 756 3210',
        customer_address: 'Calle Mayor 123, Madrid, Spain',
        order_payment_method: 'PayPal',
        order_status: 'Delivered',
        order_created_date: new Date('2023-11-18'),
        staff_id: 'EMP004',
        staff_name: 'Carlos Sanchez'
      },
      {
        order_id: 'ORD005',
        customer_name: 'Michael Chen',
        customer_email: 'michael.chen@yahoo.com',
        phone_number: '+86 21 6123 4567',
        customer_address: '10th Floor, Building A, Shanghai',
        order_payment_method: 'Credit Card',
        order_status: 'Cancelled',
        order_created_date: new Date('2023-11-20'),
        staff_id: 'EMP001',
        staff_name: 'Alice Smith'
      },
      {
        order_id: 'ORD006',
        customer_name: 'Sarah Jones',
        customer_email: 'sarahjones@outlook.com',
        phone_number: '+1 212 555 1234',
        customer_address: '345 Broadway, New York, NY',
        order_payment_method: 'Debit Card',
        order_status: 'Pending',
        order_created_date: new Date('2023-11-24'),
        staff_id: 'EMP005',
        staff_name: 'David Miller'
      },
      {
        order_id: 'ORD007',
        customer_name: 'Ibrahim Hassan',
        customer_email: 'ibrahim.hassan@gmail.com',
        phone_number: '+971 4 397 1234',
        customer_address: 'Burj Khalifa St, Dubai, UAE',
        order_payment_method: 'Credit Card',
        order_status: 'Processing',
        order_created_date: new Date('2023-11-22'),
        staff_id: 'EMP002',
        staff_name: 'Bob Johnson'
      },
];

export default function SalesPage() {
    
    //fetch api data
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fca7-158-108-228-146.ngrok-free.app/order");
                setOrders(response.data);
            }catch (error) {
                console.error('Error fetching products', error);
            }finally {
                setLoading(false);
            }
      }
      fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading</p>
    }

    const navLinks = [
        {
            title: "Back",
            path: "/menu"
        },
        {
            title: "All",
            path: "/menu/sales"
        },
        {
            title: "Complete",
            path: "/menu/sales/complete"
        },
        {
            title: "Incomplete",
            path: "/menu/sales/complete/request_order"
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
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>

                    <Input input="Search"/>

                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4 bg-white rounded">
                        <SalesOrderRFQListHeader col_1="Order ID" col_2="Date" col_3="Customer" col_4="Sales Person" col_5="Total" col_6="Status"/>
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        {sampleOrders.map((order: Order, index) => (
                           <SalesOrderRFQList key={index} order={order} />
                        ))}
                        {/* <SalesOrderRFQList col_1="SO-001" col_2="03/02/67" col_3="Aquarat" col_4="Athitrat" col_5="2,000" col_6="Transferring"/>
                        <SalesOrderRFQList col_1="SO-002" col_2="15/02/67" col_3="Athirat" col_4="Aquarat" col_5="8,000" col_6="Packing"/>
                        <SalesOrderRFQList col_1="SO-003" col_2="20/02/67" col_3="Aquarat" col_4="Aquarat" col_5="5,000" col_6="Delivery"/>
                        <SalesOrderRFQList col_1="SO-004" col_2="21/02/67" col_3="Patdarin" col_4="Athirat" col_5="1,474" col_6="Delivery"/> */}
                    </div>
                </div>
            </div>
        </>
    )
    
}