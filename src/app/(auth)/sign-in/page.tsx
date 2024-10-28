'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/api/signup', { username, password });
      alert('Sign In Successful!');
    } catch (error) {
      console.error(error);
      alert('Sign In Failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          onClick={handleSignIn}
          className="w-full p-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        <Link href="./login">
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
