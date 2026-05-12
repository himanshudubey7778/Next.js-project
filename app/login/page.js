'use client'; // Client side interactivity of important 

import React, { useState } from 'react';
import Link from 'next/link'; // Links ke liye

const LoginPage = () => {
  // 1. State setup (Jo Sir ne WhatsApp screenshot mein dikhaya)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      {/* 2. Navigation Links (Jo Sir ke browser wale screenshot mein upar dikh rahe hain) */}
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/user" style={{ color: 'purple', marginRight: '15px' }}>Go to User Page</Link>
        <Link href="/products" style={{ color: 'purple' }}>Go to Products Page</Link>
      </nav>

      <h1>Welcome to login page</h1>

      {/* 3. Form ( logic: value + onChange) */}
      <form>
        <input 
          type="text" 
          placeholder="Enter Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        
        <button type="button" style={{ padding: '5px 15px' }}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;