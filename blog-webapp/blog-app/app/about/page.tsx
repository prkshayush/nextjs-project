import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div>
        <p className="text-center mt-52">
            This is the about section of this website
        </p>
      <div className="btn text-center">This will be a link to my portfolio website</div>
      <button className="">
        <Link href='/'>Go to Home</Link>
      </button>
    </div>
  )
}
