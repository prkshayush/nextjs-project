import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function About() {
  return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src='/about-img.png' alt='' width={600} height={400} className={styles.img} />
          <Image src='/rotate.png' alt='alt-img' width={180} height={180} className={styles.rotate} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.item}>About Me</h1>
          <h3>Hi, I'm Ayush,<span className={styles.title}> Creative and innovative thinker who is always looking for new ways to use technology</span></h3>
          <p className={styles.desc}><span className={styles.description}>As a Junior Developer, I possess an impressive arsenal of skills in JS, Python, Go & Solidity.</span>
            <br /> Additionally, I excel in Next, React with advanced animation styles for designing and maintaining responsive websites that offer a smooth user experience.<Link href='/projects'><span className={styles.project}> Check out my projects here. </span></Link>
             Apart from all this, I've also won various competitons in my high school one of which involved building an Arduino-based robot, an AoC bridge, etc...
          </p>
          <div className={styles.education}>
            <h1 className={styles.item}>Education</h1>
            <h3 className={styles.title}>Bachelor of Technology</h3>
            <h3 className={styles.description}>2021-2025 | BIT Mesra, India</h3>
            <p className={styles.desc}>Pursuing a degree with majors in Chemical Engineering & minors in Python
            </p>
          </div>
        <Button url='/' text='Resume' />
        </div>
      </div>

  )
}
