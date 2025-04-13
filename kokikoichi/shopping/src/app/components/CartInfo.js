'use client';

import React from 'react';
import { useCart } from './CartContext';
import Link from 'next/link';

export default function CartInfo() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <div>
      <h1>購物車內容</h1>
      {cart.length === 0 ? (
        <p>你的購物車是空的</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                <Link href={`/product/${item.category}/${item.id}`} style={{ marginRight: '1rem' }}>
                  {item.name}
                </Link>
                <div>
                  數量: {item.quantity}
                  <button onClick={() => decreaseQty(item.id)} style={{ marginLeft: '0.5rem' }}>➖</button>
                  <button onClick={() => increaseQty(item.id)} style={{ marginLeft: '0.5rem' }}>➕</button>
                  <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '0.5rem' }}>
                    🗑️
                  </button>
                </div>
                <div>小計：${(item.price * item.quantity).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} style={{ marginTop: '1rem' }}>
            🧹 清空購物車
          </button>
        </>
      )}
    </div>
  );
}
