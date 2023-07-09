import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blogs() {
  return (
    <div>
        <Link href='/blog/testId' className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/about-img.png' alt='' width={300} height={200} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>This is the blog title</h2>
                <p className={styles.desc}>This is the description for the blogpost</p>
            </div>
        </Link>
    </div>
  )
}
