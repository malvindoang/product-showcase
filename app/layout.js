import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Product Showcase",
  description: "Simple product showcase built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
