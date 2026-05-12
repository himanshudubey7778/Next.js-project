import React from 'react';

const Dashboard = () => {
  const products = [
    { id: 1, name: 'Smart Watch', price: '₹1,999', img: '⌚' },
    { id: 2, name: 'Developer Keyboard', price: '₹4,500', img: '⌨️' },
    { id: 3, name: 'Coding Hoodie', price: '₹1,200', img: '🧥' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f3f3f3', minHeight: '100vh' }}>
      <h1 style={{ color: '#232f3e', textAlign: 'center' }}>Tejjora Shops</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map(item => (
          <div key={item.id} style={{ background: '#fff', padding: '15px', borderRadius: '8px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '50px' }}>{item.img}</div>
            <h3>{item.name}</h3>
            <p style={{ fontWeight: 'bold', color: '#B12704' }}>{item.price}</p>
            <button style={{ backgroundColor: '#ffd814', border: '1px solid #fcd200', padding: '8px 15px', borderRadius: '20px', cursor: 'pointer' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;