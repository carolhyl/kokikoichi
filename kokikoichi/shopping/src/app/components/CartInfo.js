'use client';

import React from 'react';
import { useCart } from './CartContext';

export default function CartInfo() {
  const { cart, removeFromCart, clearCart } = useCart();

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
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.id)}>刪除</button>
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
