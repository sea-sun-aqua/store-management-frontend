'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useSearchParams, useRouter } from 'next/navigation';
import config from '@/config';

const CreateOrder = () => {
    //ดึงข้อมูล order ที่ส่งมา
    const searchParams = useSearchParams();
    const ordersString = searchParams.get('orders')
    const orders: Order[] = ordersString ? JSON.parse(decodeURIComponent(ordersString)) : [];
  
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    //text field
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});

    
    const handleQuantityChange = (productId: string, quantity: number) => {
      setProductQuantities((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    };
  
    const handleSubmit = async () => {
        try{
          const date = new Date();
          const dateString = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
          
            const orderData= {
                order_id: generateOrderId(orders),
                customer_name: customerName,
                customer_email: customerEmail,
                phone_number: phoneNumber,
                customer_address: address,
                order_payment_method: paymentMethod,
                order_status: "Pending",
                order_created_date: dateString,
                staff_id: getUserFromLocalStorage()?.staff_id,
                products: products
                  .filter((product: Product) => productQuantities[product.product_id] > 0)
                  .map((product) => ({
                    product_id: product.product_id,
                    order_amount: Number(productQuantities[product.product_id]),
                  })),
              };
            console.log(orderData);
      
            // ส่ง orderData ไปยังเซิร์ฟเวอร์หรือ API ที่ต้องการ
            const configs = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const response = await axios.post(`${config.apiUrl}/order`, JSON.stringify(orderData), configs)
            console.log(response.data);
            alert("Success Register")
            router.push('/menu/sales')
  
        } catch (error) {
            console.error(error);
            alert('Create Failed.');
        }
    };


    // fetch api data
    useEffect(() => {
      const fetchProducts = async () => {
            try {
              const configs = {
                headers: {
                    'Content-Type': 'application/json'
                }
              };
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

    if (loading) {
        return <p>Loading</p>
    }
  
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Create Order</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Customer Name</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Enter customer name"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Customer Email</label>
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Enter customer email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Enter phone number"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Enter address"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          >
            <option value="cash">Cash</option>
            <option value="credit_card">Credit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
  
        <h2 className="text-2xl font-bold mt-6 mb-4">Products</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.product_id} className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{product.product_name}</p>
                <p className="text-gray-500">Price: ${product.product_price}</p>
              </div>
              <input
                type="number"
                min="0"
                max={product.product_amount}
                value={productQuantities[product.product_id] || 0}
                onChange={(e) => handleQuantityChange(product.product_id, parseInt(e.target.value))}
                className="w-20 p-1 border border-gray-300 rounded"
                placeholder="Qty"
              />
            </div>
          ))}
        </div>
  
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit Order
        </button>
        <Link href="/menu/sales">
        <button
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Back
        </button>
        </Link>
      </div>
    );
  };

  const generateOrderId = (orders : Order[]) => {
    const newId = `OD${(orders != null ? orders.length + 1 : 1).toString().padStart(4, '0')}`;
    return newId;
};

const getUserFromLocalStorage = (): User | null => {
    const userJson = localStorage.getItem('user'); // ดึงข้อมูล JSON string จาก localStorage
  
    if (userJson) {
      try {
        const user: User = JSON.parse(userJson) as User; // แปลงเป็น object และ cast เป็น User
        return user;
      } catch (error) {
        console.error('Error parsing user data:', error);
        return null;
      }
    }
  
    return null;
  };    

  export default CreateOrder;