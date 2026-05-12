import React from 'react';

const UserProfile = () => {
  // Hardcoded user data (Later we will fetch this from Database)
  const userData = {
    name: "Himanshu Dubey",
    email: "hackerhimanshu@gmail.com",
    city: "Sultanpur",
    orders: ["Smart Watch", "Developer Keyboard"]
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#fff' }}>
        <h1 style={{ borderBottom: '2px solid #febd69', paddingBottom: '10px' }}>Your Account</h1>
        
        <div style={{ marginTop: '20px' }}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Location:</strong> {userData.city}</p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3>Your Orders</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {userData.orders.map((order, index) => (
              <li key={index} style={{ padding: '10px', backgroundColor: '#f6f6f6', marginBottom: '10px', borderRadius: '5px' }}>
                📦 {order}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;