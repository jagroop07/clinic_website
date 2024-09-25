import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiCheckedShield } from "react-icons/gi";
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Solution = ({heading,points,imagelink,buttonlink,buttontext}) => {
  return (
    <>
         <div className='md:flex-row flex flex-col-reverse justify-center gap-5 align-middle'>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={imagelink}/></div>
            <div className='content-center md:w-[40%]'>
                <h1 className='text-4xl font-black'>{heading}</h1>
                <div className='mt-6'>
                {points.map((e,i)=><div key={i} className='flex my-4'><span><GiCheckedShield className='h-6 w-6 text-blue-900' /></span><p className='ms-4 content-center text-sm'>{e}</p></div>
)}                    
                </div>
                <div className='flex'>                <Link href={buttonlink} className="bg-blue-900  mt-4 py-2 px-6  flex   gap-2 rounded-lg text-white">{buttontext}<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>
                </div>

            </div>
        </div>
    </>
  )
}

export default Solution