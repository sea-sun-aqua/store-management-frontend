'use client'
import ProductList from '@/components/product-list'
import Link from "next/link"
import axios from "axios";
import { useState, useEffect } from "react";
import config from '@/config';



export default function InventoryPage() {
    // fetch api data
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchProducts = async () => {
            try {
                const configs = {
                    headers: {
                      'Content-Type': 'application/json'
                }}
                const response = await axios.get(`${config.apiUrl}/product`, configs);
                setProducts(response.data);
            }catch (error) {
                console.error('Error fetching products', error);
            }finally {
                setLoading(false);
            }
      }
      fetchProducts();
    }, []);
    products

    if (loading) {
        return <p>Loading</p>
    }

    

    products
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center text-black p-10 text-3xl font-black0 bg-white font-bold">
                    Inventory
                </div>

                <div className="flex flex-wrap items-center justify-between mx-auto px-16">
                    <ul className="flex p-4  md:p- md:flex-row md:space-x-8">
                        <Link href="/menu" className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            Back
                        </Link>
                        <Link href={`inventory/new-product?products=${encodeURIComponent(JSON.stringify(products))}`} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            Create Product
                        </Link>
                        <Link href={`inventory/add_stock?products=${encodeURIComponent(JSON.stringify(products))}`} className="p-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white">
                            Add stock
                        </Link>
                    </ul>
                </div>
                <ProductList products={products} />
            </div>
        </>
    )
    
}