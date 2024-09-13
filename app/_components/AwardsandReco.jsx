import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'

export const AwardsandReco = () => {
  return (
    <>
    <div className='md:flex justify-between gap-5 align-middle sm:p-20 p-3'>
    <div className='content-center'><h1 className='text-3xl font-bold '>Awards and Recognition</h1>
    <p className='mt-5'>Trust and excellence are the pillars of our work. We’re proud to be recognized for our commitment to quality and compliance. When you choose us, you can rest assured that you’re partnering with a trusted provider that prioritizes the well-being of your organization and ensures the utmost protection of sensitive information. Experience award-winning excellence with us today!</p>
    <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">About us<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>
    </div>
    <div className='grid grid-cols-2 gap-4'>
    <div className='p-10 h-[200px] flex justify-center items-center shadow-xl rounded-lg'><Image src={"https://knackglobal.com/wp-content/uploads/2023/03/logo-3.webp"} height={700} width={700} alt='...' /></div>
    <div  className='p-10 h-[200px] flex justify-center items-center shadow-xl rounded-lg'><Image src={"https://knackglobal.com/wp-content/uploads/2023/07/TE.png"} height={700} width={700} alt='...' /></div>
    <div className='p-10 h-[200px] flex justify-center items-center shadow-xl rounded-lg'><Image src={"https://knackglobal.com/wp-content/uploads/2023/03/logo-1.webp"} height={300} width={300} alt='...' /></div>
    <div className='p-10 h-[200px] flex justify-center items-center shadow-xl rounded-lg'><Image src={"https://knackglobal.com/wp-content/uploads/2023/07/ISO.png"} height={300} width={300} alt='...' /></div>
    </div>
    </div>
    </>
  )
}
