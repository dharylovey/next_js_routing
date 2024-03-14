import Link from "next/link";
import React from "react";

export default function F1() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>F1 page!</h1>
      <div>
        <Link href={"/f1/f2"} className="hover:text-indigo-600 hover:underline">F2</Link>
      </div>
    </div>
  );
}
