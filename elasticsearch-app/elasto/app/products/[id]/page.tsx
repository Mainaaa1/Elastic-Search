export default function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {params.id}</p>
    </div>
  );
}