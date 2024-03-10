import React from 'react'

const Phone = ( {params} : {
    params: { 
        slug: string[] 
}}) => {
    if(params.slug?.length === 2) {
        return (
            <h1 className='min-h-screen flex justify-center items-center text-5xl flex-col'>Phone {params.slug[0]} and {params.slug[1]}</h1>
        )
    } else if(params.slug?.length === 1) {
        return (
            <h1 className='min-h-screen flex justify-center items-center text-5xl flex-col'>Phone {params.slug[0]}</h1>
        )
    }
  return (
    <div>
      <h1 className='min-h-screen flex justify-center items-center text-5xl flex-col'>Phone page!!</h1>
    </div>
  )
}

export default Phone
