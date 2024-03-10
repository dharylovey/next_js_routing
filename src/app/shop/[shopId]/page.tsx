

const Shop = ( { params } : {
    params: { shopId: string }
}) => {
  return (
    <div>
      SHOP {params.shopId}
    </div>
  )
}

export default Shop
