import Link from 'next/link'
import React from 'react'

export default function InterceptedAbout() {
  return (
    <div>
      <h1>(....) Intercepted About</h1>
      <div>
        <Link href='f1/f3'>F3</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  )
}
