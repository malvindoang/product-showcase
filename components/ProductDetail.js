"use client";

import { useState, useEffect } from "react";
import FavoriteButton from "@/components/FavoriteButton";

export default function ProductDetail({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found.</p>;

  return (
    <div className="detail">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h1>{product.title}</h1>
        <p className="category">Category: {product.category}</p>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <p>
          Rating: {product.rating?.rate} ({product.rating?.count} reviews)
        </p>
        <FavoriteButton productId={product.id} />
      </div>
    </div>
  );
}
