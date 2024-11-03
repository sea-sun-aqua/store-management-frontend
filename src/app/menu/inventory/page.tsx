'use client'
import Input from "@/components/Input";
import InventoryList from "@/components/InventoryList";
import InventoryListHeader from "@/components/InventoryListHeader";
import NavLink from "@/components/NavLink";
import axios from "axios";
import { useState, useEffect } from "react";

export default function InventoryPage() {
    //fetch api data
    const [products, setProducts] = useState<Product[]>([]);
    const [staffs, setStaffs] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fca7-158-108-228-146.ngrok-free.app/product");
                const response_staff = await axios.get("http://localhost:9000/");
                setProducts(response.data);
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
            title: "New",
            path: "inventory/new-product"
        }
    ]

    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center text-black p-10 text-3xl font-black0">
                    Inventory
                </div>

                <div className="flex flex-wrap items-center justify-between mx-auto px-40">
                    <ul className="flex p-4  md:p- md:flex-row md:space-x-8"> {/*unorder list*/}
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

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4 bg-white rounded-xl">
                        <InventoryListHeader col_1="Product ID" col_2="Name" col_3="Price" col_4="In Stock"/>
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        {products.map((product, index) => (
                            <InventoryList key={index} product_id={product.product_id} product_name={product.product_name} product_price={product.product_price} product_amount={product.product_amount}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
    
}