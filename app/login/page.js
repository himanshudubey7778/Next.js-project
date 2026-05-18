"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Toggle logic

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Agar Register mode hai toh register API par bhejo, nahi toh login par
    const endpoint = isRegistering ? '/api/register' : '/api/login';

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>{isRegistering ? "Create Account (Register)" : "Welcome to Login Page"}</h2>
      
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter Username" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password" 
          required 
        />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>

      <button 
        onClick={() => setIsRegistering(!isRegistering)} 
        style={{ marginTop: "20px", background: "none", border: "none", color: "blue", cursor: "pointer" }}
      >
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register here"}
      </button>
    </div>
  );
}