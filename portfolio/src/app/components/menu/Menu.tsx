import React, { useState } from 'react'
import styles from './page.module.css'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <button className="flex flex-col justify-center item-center" onClick={handleClick}>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : ' -translate-y-1'}`}></span>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-teal-400 transition-all duration-300 ease-in-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : ' translate-y-1'}`}></span>
      </button>
    </div>
  )
}
