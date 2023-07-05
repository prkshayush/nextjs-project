import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card() {
  return (
    <div className='container'>
      <article>
        <div className="image"></div>
        <h2 className="title">Ayush Prakash</h2>
        <small>@prksh_ayush</small>
        <div className="profile-actions">
            <button className="resume">Resume</button>
            <button className="icon">
                <i className="download"></i>
            </button>
        </div>
        <div className="profile-links">
            <Link href='#'><Image src='#' alt='' width={20} height={20} /></Link> 
        </div>
      </article>
    </div>
  )
}
