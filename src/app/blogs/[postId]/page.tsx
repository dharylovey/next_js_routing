import React from 'react'

const postId = ( {params }: {
  params: { postId: string }
}) => {
  return (
    <div className='min-h-screen flex justify-center items-center text-5xl'>
      POST {params.postId}
    </div>
  )
}

export default postId
