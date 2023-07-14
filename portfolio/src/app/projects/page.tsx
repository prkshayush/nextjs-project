import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <p className={styles.desc}>Some awesome pieces of code & desgin, turned into reality</p>
      <div className={styles.carousel}>
        <div className={styles.content}>
          <Image src='/about-img.png' alt='' width={600} height={400} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
        </div>
        <div className={styles.descrip}>
          <p >This is the project name</p>
          <div className={styles.links}>
            <Link href='https://github.com/prksh_ayush'>
              <Image src='/insta.png' alt='' width={30} height={30} className={styles.social} />
            </Link>
            <Link href='/' className={styles.visit}>View</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
