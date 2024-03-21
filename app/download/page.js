"use client"
import Note from '../showcase/[id]/[season]/note'
import { useEffect, useState } from 'react'
import Link from "next/link"
import Loading from '../loading'
 
const Page = ({searchParams}) => { 
  const [load, setload] = useState(true)
  useEffect(()=>{
    const data = setTimeout(()=>{
      setload(false)
    },2000)
    return()=>clearTimeout(data)
  },[])
  return (
        <div className=' w-full'>
           {load?<Loading/>:
    <div className=' min-h-[100vh] pt-40 pb-20 flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-centers'>
        <div className='flex justify-center mb-10'><img src='/logos.png' className=' sm:w-24 w-12'/></div>
        <div className=' flex justify-center mb-10 relative'><Link className=' bg-red-600 hover:bg-red-800 text-white px-9 py-2 rounded-3xl font-semibold' href={searchParams.uri}  >DOWNLOAD</Link></div>
      <div className='px-5'><Note/></div>
      </div>
    </div>}
    </div>
  )
}

export default Page