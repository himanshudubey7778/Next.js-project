// app/dashboard/[id]/page.js
'use client';

export default function ProductDetail({ params }) {
  // params.id se humein pata chalta hai ki user ne kaunse product par click kiya
  const productId = params.id;

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Product Detail Page</h1>
      <p style={{ fontSize: '20px' }}>Showing details for Product ID: <span style={{ color: 'orange', fontWeight: 'bold' }}>{productId}</span></p>
      
      <div style={{ border: '1px solid #ddd', padding: '20px', display: 'inline-block', marginTop: '20px' }}>
        <h3> Item #{productId}</h3>
        <p>This is where the real data from the database will appear tomorrow!</p>
        <button style={{ backgroundColor: '#ffd814', padding: '10px 20px', border: 'none', borderRadius: '20px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}