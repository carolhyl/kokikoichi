import ProductDetail from '../../../components/ProductDetail';
import { notFound } from 'next/navigation';

async function getProducts() {
  const res = await fetch('http://localhost:3000/products.json');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    category: product.category,
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  const { category, id } = params;
  const products = await getProducts();

  const product = products.find(
    (p) => p.category === category && p.id.toString() === id
  );

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
