import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function About() {
  return (
    <div className="flex items-center justify-between gap-24 my-2.5 text-justify lg:flex-col lg:gap-12 xs:text-left">

      {/* image content */}

      <div className={styles.imgContainer}>
        <Image src='/about-img.png' alt='' width={600} height={400} className={styles.img} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
        <div className={styles.rotate}><Image src='/rotate-dark.png' alt='alt-img' width={180} height={180} />
         </div>
         <div className="absolute bottom-20 right-16 sm:hidden"><Image src='/about.png' alt='' width={50} height={50} /></div>
      </div>



      {/* text content */}

      <div className="!flex-1 flex flex-col justify-between gap-4 cursor-pointer items-center">
        <h1 className="text-center bg-gradient-to-b from-light-blue to-slate-200 bg-clip-text text-transparent font-extrabold text-4xl sm:text-2xl ">ABOUT ME</h1>
        <h3 className="text-xl sm:text-base">Hi, I'm Ayush,<span className="text-light-blue"> Creative and innovative thinker who is always looking for new ways to use technology</span></h3>
        <p className="text-xl font-normal sm:text-base"><span className="font-normal text-gray-400">As a Junior Developer, I possess an impressive arsenal of skills in JS, Python, Go & Solidity.</span>
          <br /> Additionally, I excel in Next, React with advanced animation styles for designing and maintaining responsive websites that offer a smooth user experience.<Link href='/projects'><span className='bg-gradient-to-r from-cyan-400 via-teal-600 to-slate-100 bg-clip-text text-transparent font-semibold'> Check out my projects here. </span></Link>
          Apart from all this, I've also won various competitons in my high school one of which involved building an Arduino-based robot, an AoC bridge, etc...
        </p>
        <div className="my-2.5 flex flex-col gap-1">
          <h1 className="text-center bg-gradient-to-t from-light-blue to-slate-200 bg-clip-text text-transparent font-extrabold text-4xl uppercase sm:text-2xl">Education</h1>
          <h3 className="text-teal-500 text-xl sm:text-base">Bachelor of Technology</h3>
          <h3 className="font-normal text-gray-400 sm:text-base">2021-2025 | BIT Mesra, India</h3>
          <p className="text-xl font-normal sm:text-base">Pursuing a degree with majors in Chemical Engineering & minors in Python
          </p>
        </div>
        <Button url='/' text='Resume' />
      </div>
    </div>

  )
}
