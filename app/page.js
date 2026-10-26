"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        // Tampilkan hanya 5 produk
        setProducts(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <Link href={`/products/${product.id}`} className="button">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
