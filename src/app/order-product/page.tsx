'use client';
import React from 'react'
import { useRouter } from 'next/navigation'

const OrderProduct = () => {
    const router = useRouter()
    const handleClick = () => {
        alert('Order Placed Successfully')
        router.push('/dashboard')
    }

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default OrderProduct
