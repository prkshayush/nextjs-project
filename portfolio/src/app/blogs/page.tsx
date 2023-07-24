import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export const metadata = {
    title: 'Blogs Page',
    description: "All blogs by Ayush",
  }
  

export default async function Blogs() {
    const datas = await getData()
    return (
        <div className='flex flex-col my-8 items-center gap-10 w-full h-full'>
            {/* heading section */}
            <h1 className="text-5xl uppercase font-bold bg-gradient-to-bl from-light-blue to-slate-300 bg-clip-text text-transparent">my blogs</h1>

            {/* content section of the blog */}

            {datas.map((data: any) => (
                <Link href={`/blogs/${data._id}`} className='flex items-center gap-12 lg:flex-col' key={data._id}>
                    <div>
                        <Image src='/about-img.png' alt='no image' width={300} height={170} className='object-cover rounded-lg' />
                    </div>
                    <div>
                        <h1 className="mb-2 text-3xl lg:text-xl font-medium">{data.title}</h1>
                        <p className="text-md text-slate-400">{data.desc}</p>
                    </div>
                </Link>
            ))}


        </div>
    )
}
