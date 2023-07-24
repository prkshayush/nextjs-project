"use client"
import React from 'react'
import useSWR from 'swr'


const fetcher = async () => {
  const res = await fetch("")
  const data = await res.json()
  return data
}
export default function Dashboard() {
  const { data, error, isLoading } = useSWR('/posts', fetcher)

  if (error) return <div className='my-8'>There's an error</div>
  if (isLoading) return <div className='my-8'>Loading...</div>
  console.log(data)
  return (
    <div className='my-8 uppercase text-4xl font-bold bg-gradient-to-tr from-cyan-500 to-sky-400 bg-clip-text text-transparent'>
      Dashboard
    </div>
  )
}
