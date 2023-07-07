import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

export default function TechStack() {
    const images = [
        {
            id: 1,
            name: "JS",
            url: '/js.svg',
        },
        {
            id: 2,
            name: "Python",
            url: '/python.svg',
        },
        {
            id: 3,
            name: "Go",
            url: '/golang.svg',
        },
        {
            id: 4,
            name: "Solidity",
            url: '/solidity.svg',
        },
        {
            id: 5,
            name: "NextJS",
            url: '/nextjs.png',
        },
        {
            id: 6,
            name: "Docker",
            url: '/docker.svg',
        },
        {
            id: 7,
            name: "Kubernetes",
            url: '/kubernetes.svg',
        },
    ]
  return (
    <div className={styles.container}>
        {images.map(image => (
        <Image key={image.id} src={image.url} alt='teck-stack' width={55} height={55} className={styles.links} />
        ))}
    </div>
  )
}