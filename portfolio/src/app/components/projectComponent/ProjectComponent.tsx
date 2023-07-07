import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Project() {
    const links = [
        {
          id: 1,
          url: 'https://github.com/prksh_ayush',
          title: "Name of Project",
          img: '/about-img.png',
        },
        {
          id: 2,
          url: 'https://github.com/prksh_ayush',
          title: "Name of Project",
          img: '/about-img.png',
        }//add links to some projects after making them and an image to show them
      ]
  return (
    <div className={styles.content}>
        <div className={styles.textContainer}>
        <h2>About the project</h2>
        </div>
        <div className={styles.imgContainer}>
          {links.map(link => (
            <Link href={link.url} key={link.id} className={styles.item}>
              <Image src={link.img} alt={link.title} width={400} height={237} className={styles.images} />
              <span className={styles.title}>
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
  )
}
