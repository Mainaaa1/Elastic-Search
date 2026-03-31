'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  const search = async () => {
    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div>
      <h2>Products</h2>

      {/* Search Bar */}
      <div style={searchBar}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          style={inputStyle}
        />
        <button onClick={search} style={primaryBtn}>
          Search
        </button>
      </div>

      {/* Results */}
      <div style={grid}>
        {results.map((item, i) => (
          <Link key={i} href={`/products/${item.id}`}>
            <div style={card}>
              <h4>{item.name}</h4>
              <p style={{ color: '#777' }}>{item.category}</p>
              <p style={{ fontWeight: 'bold' }}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const searchBar = {
  display: 'flex',
  gap: '10px',
  marginBottom: '20px',
};

const inputStyle = {
  flex: 1,
  padding: '10px',
  border: '1px solid #ddd',
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '16px',
};

const card = {
  padding: '16px',
  border: '1px solid #eee',
  borderRadius: '8px',
  cursor: 'pointer',
};

const primaryBtn = {
  padding: '10px 16px',
  background: 'black',
  color: 'white',
  border: 'none',
};