'use client'

import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';
import Link from 'next/link';
import axios from 'axios';


const Page: React.FC = () => {
  const {setUser} = useUser()
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const config = {
        headers: {
          'Content-Type': 'application/json'
        }
        };
        const response = await axios.post('http://localhost:9000/login', JSON.stringify({
            staff_email: email,
            staff_password: password
        }), config)

        // ตรวจสอบว่าข้อมูลที่ต้องการอยู่ใน response อย่างถูกต้อง
        const userData: User = {
            staff_id: response.data.staff_id,
            staff_name: response.data.staff_name,
            staff_email: response.data.staff_email,
        };

        // เก็บข้อมูลผู้ใช้ใน context
        setUser(userData); 
        // เก็บข้อมูลใน Local Storage
        localStorage.setItem('user', JSON.stringify(userData));
        alert('Login Successful!');
        

    } catch (error) {
      console.error(error);
      alert('Login Failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
        
        <Link href="./sign-in">
        <button className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
        Sign In
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
