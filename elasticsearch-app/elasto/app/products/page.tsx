'use client';

export default function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>

      <input
        placeholder="Search products..."
        style={{
          padding: '10px',
          width: '100%',
          border: '1px solid #ddd',
          marginTop: 10
        }}
      />

      <p style={{ marginTop: 20 }}>
        Results will appear here...
      </p>
    </div>
  );
}