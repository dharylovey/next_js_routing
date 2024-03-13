import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-5xl">
      <h1>HOME PAGE!!</h1>
      <Link href="/about">
        <h2>About</h2>
      </Link>
      <Link href="/products">
        <h2>Products</h2>
      </Link>
      <Link href="/shop">
        <h2>Shop</h2>
      </Link>
      <Link href="/blogs">
        <h2>Blogs</h2>
      </Link>
      <Link href="/dashboard">
        <h2>Dashboard</h2>
      </Link>
      <Link href="/order-product">
        <h2>Order Product</h2>
      </Link>
    </main>
  );
}
