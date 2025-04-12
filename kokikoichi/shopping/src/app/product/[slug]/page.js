// src/app/product/[slug]/page.js
import ProductDetail from './ProductDetail';

const products = [
  { slug: 'sticker', name: '✨ Sticker', price: 2.99, description: 'Cool vinyl sticker' },
  { slug: 'mug', name: '☕ Mug', price: 8.99, description: 'Ceramic mug for coffee lovers' },
  { slug: 'tshirt', name: '👕 T-Shirt', price: 15.99, description: 'Soft cotton t-shirt' },
];

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return <h1>找不到商品</h1>;

  return <ProductDetail product={product} />;
}
