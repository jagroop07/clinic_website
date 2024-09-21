import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Heading = ({heading,subheading,link,linktext,imagelink}) => {
  return (
    <>
   <div className="md:flex gap-4 py-8 md:px-10  2xl:container 2xl:mx-auto">
      <div className="content-center sm:px-8 px-3">
        <h1 className="text-4xl font-bold mt-10 mb-6">
    {heading}
    </h1>
        <p className="pb-4 text-xl text-gray-700">{subheading}</p>
        <div className='flex'>
          <Link href={link} className="bg-blue-900 mt-2 py-2 px-6 flex gap-2 rounded-lg text-white">{linktext}<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>
        </div>
      </div>
      <div className="md:mt-0 flex justify-center md:content-center mt-8">
        <Image className='' src={imagelink} alt="..." height={700} width={700} />
      </div>
    </div>
    </>
  )
}

export default Heading