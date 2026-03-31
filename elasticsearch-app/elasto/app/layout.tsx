// app/layout.tsx

import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        
        {/* Navbar */}
        <nav style={navStyle}>
          <h3>SearchApp</h3>

          <div>
            <Link href="/">Home</Link>
            <Link href="/products" style={{ marginLeft: 16 }}>
              Products
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <main style={containerStyle}>{children}</main>
      </body>
    </html>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px 24px',
  borderBottom: '1px solid #eee',
};

const containerStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '24px',
};