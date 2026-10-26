import ProductDetail from "@/components/ProductDetail";

// Server component: ambil slug dari URL, lalu kirim ke client component
export default async function ProductPage({ params }) {
  const { slug } = await params;

  return <ProductDetail slug={slug} />;
}
