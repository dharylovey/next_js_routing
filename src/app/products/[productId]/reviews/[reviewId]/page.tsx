import { notFound } from "next/navigation"

const ReviewId = ( {params}: {
  params: {
    productId: string, 
    reviewId: string
}}) => {
  if(parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="min-h-screen flex justify-center items-center text-5xl">
      <h1>Review  {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}

export default ReviewId
