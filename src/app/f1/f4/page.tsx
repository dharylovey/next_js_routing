import Link from 'next/link'
import React from 'react'

export default function F4page() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <h1>F4 page</h1>
      <Link href={'/f1/f3'} className='hover:text-indigo-600 hover:underline'>F3</Link>
    </div>
  )
}
