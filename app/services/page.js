import React from 'react';

const Services = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#007185' }}>Our Premium Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>🚀 Fast Delivery</h3>
          <p>Get your products delivered in lucknow within 24 hours.</p>
        </div>
        <div style={{ width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>🛡️ Secure Payment</h3>
          <p>100% secure checkout with UPI, Cards, and Net Banking.</p>
        </div>
        <div style={{ width: '250px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
          <h3>📞 24/7 Support</h3>
          <p>Technical support available for all your coding gear needs.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;