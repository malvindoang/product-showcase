"use client";

import { useState, useEffect } from "react";

export default function FavoriteButton({ productId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Baca status favorit dari localStorage saat komponen tampil
  useEffect(() => {
    const saved = localStorage.getItem(`favorite-${productId}`);
    setIsFavorite(saved === "true");
  }, [productId]);

  // Simpan status favorit setiap kali berubah
  function handleClick() {
    const next = !isFavorite;
    setIsFavorite(next);
    localStorage.setItem(`favorite-${productId}`, String(next));
  }

  return (
    <button onClick={handleClick} className="favorite">
      {isFavorite ? "★ Added to Favorite" : "☆ Add to Favorite"}
    </button>
  );
}
