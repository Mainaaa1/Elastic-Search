// Mark this file as a Client Component
'use client';

import React, { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch(`/api/search?q=${encodeURIComponent(search)}`);
        if (!res.ok) throw new Error('API error');
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    const debounce = setTimeout(() => fetchProducts(), 300);
    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">All Products</h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border rounded shadow focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Products Grid */}
        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded p-4 hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?${encodeURIComponent(
                    product.category
                  )}`}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-blue-700 font-bold mb-4">${product.price}</p>
                <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}