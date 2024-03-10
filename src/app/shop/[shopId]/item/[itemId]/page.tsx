

const page = ( { params} : {
    params: { 
        shopId: string, 
        itemId: string }
}) => {
  return (
    <div>
      shop {params.shopId} - item {params.itemId}
    </div>
  )
}

export default page
