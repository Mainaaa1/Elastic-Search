import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  {
    id: 1,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1612832021298-934165b6a6c1?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Smartphone X',
    price: 999,
    image: 'https://images.unsplash.com/photo-1580910051077-8823b5b27b3f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: 199,
    image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Smartwatch Pro',
    price: 299,
    image: 'https://images.unsplash.com/photo-1617052665126-5fa23b02dff7?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to ElectroShop</h1>
          <p className="text-xl mb-8">
            Discover the latest electronics, gadgets, and accessories.
          </p>
          <Link
  href="/products"
  className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
>
  Browse Products
</Link>
        </div>
      </header>

      {/* Featured Categories */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
            <Image
              src="https://images.unsplash.com/photo-1612832021298-934165b6a6c1?auto=format&fit=crop&w=400&q=80"
              alt="Laptops"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded"
            />
            <h3 className="font-semibold text-xl mb-2">Laptops</h3>
            <p>High-performance laptops for work and gaming.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
            <Image
              src="https://images.unsplash.com/photo-1580910051077-8823b5b27b3f?auto=format&fit=crop&w=400&q=80"
              alt="Smartphones"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded"
            />
            <h3 className="font-semibold text-xl mb-2">Smartphones</h3>
            <p>Latest smartphones with cutting-edge technology.</p>
          </div>
          <div className="bg-white shadow rounded p-6 text-center hover:shadow-lg transition">
            <Image
              src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=400&q=80"
              alt="Accessories"
              width={200}
              height={150}
              className="mx-auto mb-4 rounded"
            />
            <h3 className="font-semibold text-xl mb-2">Accessories</h3>
            <p>Headphones, chargers, and other must-have gadgets.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white shadow rounded p-4 hover:shadow-lg transition flex-shrink-0"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={250}
                height={150}
                className="rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-blue-700 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-16 text-center">
        <Link
  href="/products"
  className="bg-blue-600 text-white font-semibold px-8 py-4 rounded shadow-lg hover:bg-blue-700 transition inline-block"
>
  Start Shopping Now
</Link>
      </section>
    </div>
  );
}