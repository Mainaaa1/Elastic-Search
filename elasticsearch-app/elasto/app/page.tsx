import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Modern Search App</h1>
      <p>Search products powered by Elasticsearch</p>

      <Link href="/products">
        <button style={{
          marginTop: 16,
          padding: '10px 16px',
          background: 'black',
          color: 'white',
          border: 'none'
        }}>
          Browse Products
        </button>
      </Link>
    </div>
  );
}