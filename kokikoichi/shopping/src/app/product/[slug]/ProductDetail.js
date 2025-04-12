'use client';

import { useCart } from '../../components/CartContext';

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>
        加入購物車
      </button>
    </main>
  );
}
