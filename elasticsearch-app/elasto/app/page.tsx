// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Modern Search Experience</h1>

      <p style={{ color: '#555', marginTop: 8 }}>
        Fast, scalable product search powered by Elasticsearch.
      </p>

      <div style={{ marginTop: 24 }}>
        <Link href="/products">
          <button style={primaryBtn}>Browse Products</button>
        </Link>
      </div>

      {/* Feature section */}
      <div style={{ marginTop: 48 }}>
        <h3>Features</h3>

        <ul style={{ lineHeight: '1.8' }}>
          <li>⚡ Fast full-text search</li>
          <li>🔎 Real-time results</li>
          <li>📊 Scalable architecture</li>
        </ul>
      </div>
    </div>
  );
}

const primaryBtn = {
  padding: '10px 18px',
  background: 'black',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};