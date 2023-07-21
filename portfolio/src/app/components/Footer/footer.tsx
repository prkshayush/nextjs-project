import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link';
import Socials from '../socials/Socials';

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className='bg-dark text-light drop-shadow-3xl py-5'>
      <div className="flex justify-between items-center py-8 gap-8 mx-8 md:flex-col">
        <p className="font-bold text-xl md:text-lg xs:text-sm">
          <Link href='/'>Copyright<span className={styles.year}> © {year}. Ayush </span>Prakash </Link>
        </p>
        <div className="mx-8">
          <Socials />
        </div>
      </div>
    </footer>
  )
}
