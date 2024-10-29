'use client'

import Link from 'next/link'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const SignIn: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      if (password1 !== password2){
        alert("Password Wrong");
        throw new Error("Password Wrong");
      }

      const config = {
      headers: {
        'Content-Type': 'application/json'
      }
      };
      const response = await axios.post('http://localhost:9000/register', JSON.stringify({
        staff_name: name,
        staff_email: email,
        staff_password: password1
    }), config)

      alert("Success Register")

      router.push('/')

  } catch (error) {
    console.error(error);
    alert('Register Failed.');
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          className="w-full p-3 border rounded"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        <Link href="/">
        <button
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
          Back
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
