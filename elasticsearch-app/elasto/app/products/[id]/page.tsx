// app/products/[id]/page.tsx

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Product Detail</h2>
      <p>Product ID: {params.id}</p>
    </div>
  );
}