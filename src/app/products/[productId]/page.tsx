

const ProductId = ( {params}: {
    params: { productId: string}
} ) => {
  return (
    <div className="min-h-screen flex justify-center items-center text-5xl">
      Details of Product { params.productId}
    </div>
  )
}

export default ProductId
