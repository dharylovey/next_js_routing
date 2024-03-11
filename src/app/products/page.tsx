import Link from "next/link";

const Products = () => {
  const productId = 100
  return (
    <div className="min-h-screen flex justify-center items-center text-5xl flex-col">
      <Link href="/">Home</Link>
      <h1>
        <Link href='products/1'>Product1</Link>
      </h1>
      <h1>
        <Link href='products/2'>Product2</Link>
      </h1>
      <h1>
        <Link href='/products/3'>Product3</Link>
      </h1>
      <h1>
        <Link href={`/products/${productId}`}>Product{productId}</Link>
      </h1>
    </div>
  );
};

export default Products;
