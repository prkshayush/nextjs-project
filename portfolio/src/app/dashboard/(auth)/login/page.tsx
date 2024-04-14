// 'use client'
// needs better implementation
// import React from 'react'
// import { signIn, useSession } from 'next-auth/react'
// import { FaGoogle } from 'react-icons/fa'
// import Button from '@/app/components/button/Button'
// import Loader from '@/app/components/loader/Loader'
// import { useRouter } from 'next/navigation'

// export default function Login() {
//     const session = useSession()
//     const router = useRouter()

//     if (session.status === 'loading' ){
//         return(
//             <div className='m-10 flex items-center justify-between'>
//                 <Loader />
//             </div>
//         )
//     }

//     if (session.status === 'authenticated' ) {
//         router?.push('/dashboard')
//     }

//     const handleSubmit = async (e: any) => {
//         e.preventDefault()
//         const email = e.target[0].value
//         const password = e.target[1].value
//     }
//     return (
//         <div className='w-full h-full my-10 flex flex-col gap-4 items-center justify-center'>
//             <h1 className='text-center uppercase text-4xl my-8 font-bold bg-clip-text text-transparent bg-cyan-500'>Login</h1>
//             <button name='login' className='bg-transparent rounded-lg p-2 hover:text-cyan-400 ease transition-all delay-75 flex gap-5 items-center hover:bg-gray-800 active:scale-105' onClick={() => signIn("google")}><FaGoogle className='text-slate-200' /> Continue with Google</button>
//             <span className='text-sm font-extralight'>Or</span>
//             <form className='flex flex-col gap-2'>
//                 <p className='text-sm font-extralight'>Enter your username</p>
//                 <input type="text" placeholder='username' className='py-3 text-center font-thin bg-transparent border-[1px] border-solid border-gray-600 rounded-md text-slate-100' />
//                 <p className='text-sm font-extralight'>Enter your password</p>
//                 <input type="password" placeholder='password' className='py-3 text-center font-thin bg-transparent border-[1px] border-solid border-gray-600 rounded-md text-slate-100' />
//                 <button name='loginButton' onClick={handleSubmit} className='bg-teal-600 rounded-lg p-2 my-2 hover:bg-sky-700 ease transition-all text-center active:scale-95'>Login</button>
//             </form>
//             <Button text='Return Home' url='/' />
//         </div>
//     )
// }
