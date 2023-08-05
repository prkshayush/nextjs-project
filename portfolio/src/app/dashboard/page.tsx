"use client"
import React from 'react'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Loader from '../components/loader/Loader'
import Image from 'next/image'


const fetcher = async () => {
  const res = await fetch("http://localhost:3000/api/posts")
  const data = await res.json()
  return data
}
export default function Dashboard() {
  const router = useRouter()
  const session = useSession()
  const { data, error } = useSWR(`/api/posts`, fetcher)

  console.log(data)
// ?username=${session?.data?.user?.name}

  if (session.status === "loading") {
    return <div className='m-10 flex items-center justify-between'><Loader /></div>

  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }


  if (error) return <div className='my-8'>There's an error</div>
  
  // const handleSubmit = async(e: any) => {
  //   e.preventDefault()
  //   const title = e.target[0].value
  //   const desc = e.target[1].value
  //   const img = e.target[2].value

  //   try {
  //     await fetch('/api/posts', {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title,
  //         desc,
  //         img,
  //         username: session?.data?.user?.name
  //       })
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  if (session.status === 'authenticated') {
    return (
      <div className='my-8 w-full h-full'>
        <h1 className='text-center uppercase text-4xl font-bold bg-gradient-to-tr from-cyan-500 to-slate-300 bg-clip-text text-transparent'>Dashboard</h1>
        <div className="posts">

          {/* {data.map((blog: any) => (
            <div className="post" key={blog._id}>
              <div className="imgContainer">
                <Image src={blog.img} alt='' width={21} height={21} />
              </div>
              <h2 className='Title'>{blog.title}</h2>
              <span className='delete'>X</span>
            </div>
          ))} */}

          {/* <form className='post' onClick={handleSubmit} >
            <h1>Add new posts</h1>
            <input type="text" className="heading" placeholder='Provide heading' />
            <p>Add description</p>
            <input type="text" className='desc' placeholder='Description' />
            <p>Add an image</p>
            <input type="text" className='image' placeholder='image url' />
            <p>Add content</p>
            <textarea name="Content" placeholder='add content' id=""></textarea>
          </form> */}
          <button>Publish</button>
        </div>
      </div>
    )
  }
}
