// app/products/[id]/page.tsx

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h2>Product Details</h2>

      <div style={card}>
        <h3>Product #{params.id}</h3>

        <p style={{ color: '#555' }}>
          This is a placeholder product detail page.
        </p>

        <button style={primaryBtn}>Add to Cart</button>
      </div>
    </div>
  );
}

const card = {
  border: '1px solid #eee',
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
};

const primaryBtn = {
  marginTop: '16px',
  padding: '10px 16px',
  background: 'black',
  color: 'white',
  border: 'none',
};