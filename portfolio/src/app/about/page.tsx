import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src='/about-img.png' alt='' width={300} height={200} className={styles.img} />
        </div>
        <div className={styles.text}>
          <h1>About Me</h1>
          <h3>Hi, I'm Ayush, passionate web-developer from India</h3>
          <p className="desc">As a junior developer, I possess an impressive arsenal of skills in JS, Python, Go & Solidity
            <br /> Additionally, I excel in NextJs, ReactJs for designing and maintaining responsive websites that offer a smooth user experience. Currently, I'm learning & exploring Web3 technologies and backend development. I have some cool projects under my <Link href='/projects'><span className={styles.project}>Projects</span></Link> section. I love to collab with skilled people as it gives me the opportunity to learn & enhance my knowledge.
          </p>
        </div>
      </div>
      <div className={styles.education}>
        <h1>Education-degree title</h1>
        <h3>College</h3>
        <p>Degree details
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolor est iste harum eligendi repudiandae doloribus reiciendis veniam quo unde, impedit accusantium voluptate atque possimus similique corporis? Adipisci, aliquid ut?
        </p>
      </div>
    </div>

  )
}
