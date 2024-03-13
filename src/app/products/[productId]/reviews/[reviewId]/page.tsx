"use client";
import { notFound } from "next/navigation";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

const ReviewId = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = getRandomInt(3);

  if (random === 1) {
    throw new Error("Something went wrong");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="min-h-screen flex justify-center items-center text-5xl">
      <h1>
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewId;
