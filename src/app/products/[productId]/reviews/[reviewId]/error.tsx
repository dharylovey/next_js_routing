"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-5xl">
      <h1 className="text-5xl">{error.message} </h1>
      <button onClick={handleClick}>back</button>
      <button onClick={reset}>try again</button>
    </div>
  );
};

export default ErrorBoundary;
