'use client'
import Input from "@/components/Input";
import InventoryList from "@/components/InventoryList";
import InventoryListHeader from "@/components/InventoryListHeader";
import NavLink from "@/components/NavLink";
// import products from "@/app/data/products";
import axios from "axios";
import { useState, useEffect } from "react";



export default function InventoryPage() {
    //fetch api data
    // const [products, setProducts] = useState<Product[]>([]);
    // const [staffs, setStaffs] = useState<User[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //   const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:9000/product");
    //             const response_staff = await axios.get("http://localhost:9000/");
    //             setProducts(response.data);
    //         }catch (error) {
    //             console.error('Error fetching products', error);
    //         }finally {
    //             setLoading(false);
    //         }
    //   }
    //   fetchProducts();
    // }, []);
    // products

    // if (loading) {
    //     return <p>Loading</p>
    // }
    

    const navLinks = [
        {
            title: "Back",
            path: "/menu"
        },
        {
            title: "Add stock",
            path: "inventory/add_stock"
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
                        <InventoryListHeader product_id="Product ID" product_name="Name" product_price="Price" product_amount="In Stock"/>
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        {/* {products.map((product, index) => (
                            <InventoryList key={index} product_id={product.product_id} product_name={product.product_name} product_price={product.product_price} product_amount={product.product_amount}/>
                        ))} */}
                        {/* <InventoryListHeader product_id="Product ID" product_name="Name" product_price="Price" product_amount="In Stock"/> */}
                        <InventoryList product_id="PD-001" product_name="Glass_container" product_price={2500} product_amount={10}/>
                        {/* <InventoryList product_id="PD-002" product_name="ปั๊มน้ำ" product_price="400" product_amount="4"/>
                        <InventoryList product_id="PD-001" product_name="Glass-container" product_price="2500" product_amount="10"/>
                        <InventoryList product_id="PD-002" product_name="Pump" product_price="400" product_amount="4"/>
                        <InventoryList product_id="PD-003" product_name="สายยางใส" product_price="200" product_amount="12"/>
                        <InventoryList product_id="PD-004" product_name="ฟองน้ำ" product_price="85" product_amount="11"/>
                        <InventoryList product_id="PD-005" product_name="น้ำยาบำรุงน้ำ" product_price="112" product_amount="3"/> */}
                    </div>
                </div>
            </div>
        </>
    )
    
}