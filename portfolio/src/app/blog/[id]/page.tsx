import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function BlogPosts() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, animi quam?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, porro! Veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quae eum quas autem placeat exercitationem repudiandae laborum quos ex, dignissimos voluptate inventore!</p>
          <div className={styles.author}>
            <Image src='/image.jpg' alt='' className={styles.avatar} width={40} height={40} />
            <span className={styles.username}>Ayush Prakash</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/about-img.png' alt='' width={500} height={320} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nesciunt officiis?</p>
      </div>
    </div>
  )
}
