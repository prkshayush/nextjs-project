import React from 'react'
import styles from './page.module.css'
import Button from '../components/button/Button'
import Card from '../components/card/Card'

export default function Contact() {
  return (
    <div className='w-[100%] h-[100%]'>
      <h1 className="text-5xl font-bold my-5 text-center uppercase bg-gradient-to-t from-light-blue via-teal-300 to-slate-200 bg-clip-text text-transparent lg:text-2xl">Contact</h1>
      <h3 className="text-center text-2xl mb-16 lg:text-base">Wanna connect? Send a message!!</h3>
      
      {/* Content for the contact page */}

      <div className="flex  justify-between items-center lg:flex-col gap-8">
        <div className="flex-1 grid place-items-center">
          <Card />
        </div>
        <form className='flex-1 flex flex-col gap-5'>
          <input type="text" placeholder='Name' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200' />
          <input type="email" placeholder='E-mail' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200' />
          <textarea name="message" placeholder='Message' className='p-5 bg-transparent rounded-lg text-lg font-semibold outline-none border-2 border-slate-600 border-solid text-cyan-200' cols='30' rows="10"></textarea>
          <div className='grid place-items-center'><Button text='Send' url='/' /></div>
        </form>
      </div>
    </div>
  )
}
