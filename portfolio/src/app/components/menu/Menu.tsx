import React from 'react'
import styles from './page.module.css'

export default function Menu() {
  return (
    <div>
      <button className="flex flex-col justify-center item-center">
        <span className='bg-teal-400 block h-0.5 w-6 rounded-sm -translate-y-1.5 '></span>
        <span className='bg-teal-400 block h-0.5 w-6 rounded-sm '></span>
        <span className='bg-teal-400 block h-0.5 w-6 rounded-sm translate-y-1.5 '></span>
      </button>
    </div>
  )
}
