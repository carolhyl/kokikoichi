'use client';

import { useCart } from './CartContext';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ marginTop: '1rem', width: '200px', height: '200px', objectFit: 'cover' }}
      />
      <p style={{ fontSize: '1.2rem' }}>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)} style={{ marginTop: '1rem' }}>
        加入購物車
      </button>
      <br />
      <Link href="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        🔙 回首頁
      </Link>
    </main>
  );
}
