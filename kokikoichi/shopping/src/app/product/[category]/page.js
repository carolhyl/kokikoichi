import Link from 'next/link';

async function getProducts() {
  const res = await fetch('http://localhost:3000/products.json');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function generateStaticParams() {
  const products = await getProducts();
  const categories = [...new Set(products.map((p) => p.category))];

  return categories.map((category) => ({
    category,
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const products = await getProducts();

  const filtered = products.filter((p) => p.category === category);

  if (filtered.length === 0) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>找不到這個分類：{category}</h1>
        <Link href="/">回首頁</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>分類：{category}</h1>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            <Link href={`/product/${item.category}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link href="/" style={{ display: 'inline-block', marginTop: '1rem' }}>
        🔙 回首頁
      </Link>
    </main>
  );
}
