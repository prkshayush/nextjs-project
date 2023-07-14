import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blogs() {
  return (
    <div>
        <Link href='/blog/testId' className="flex items-center gap-14 my-14 text-justify">
            <div className={styles.container}>
                <Image src='/about-img.png' alt='' width={300} height={200} className='rounded' />
            </div>
            <div className={styles.content}>
                <h2 className="text-xl font-medium">This is the blog title</h2>
                <p className="font-medium text-lg text-gray-400">This is the description for the blogpost</p>
            </div>
        </Link>
    </div>
  )
}
