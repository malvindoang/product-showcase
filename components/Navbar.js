import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="brand">Product Showcase</span>
      <div className="menu">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
