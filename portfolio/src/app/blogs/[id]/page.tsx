import Image from 'next/image'
import React from 'react'
import {notFound} from 'next/navigation'

async function getData(id: any) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

export async function generateMetadata({ params }: {params: {id: any}}) {
    const post = await getData(params.id)
    return {
      title: post.title,
      description: post.desc,
    }
  }

export default async function BlogPost({params}: {params: { id: any }}) {
    const data = await getData(params.id)
    return (
        <div className='my-8 w-full h-full'>
            <div className="flex cursor-pointer gap-20">
                <div className="flex-1 flex flex-col justify-between text-left">
                    <h1 className='text-4xl font-bold lg:text-3xl md:text-2xl'>{data.title}</h1>
                    <p className='font-normal text-slate-400 text-xl lg:text-md'>{data.desc}</p>
                    <div className="flex items-center gap-2.5">
                        <Image src='/about.png' alt='' width={45} height={45} className="object-cover rounded-full" />
                        <p>{data.authImg}</p>
                        <span className="text-light-blue text-md">{data.username}</span>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image src='/about-img.png' alt='' width={400} height={250} className='object-cover rounded-md' />
                    <p>{data.img}</p>
                </div>
            </div>
            <div className="mt-12 text-2xl lg:text-lg font-light text-justify">
                <p className='text-slate-300'>{data.content}</p>
            </div>
        </div>
    )
}
