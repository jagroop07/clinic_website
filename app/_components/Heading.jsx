import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Heading = ({heading,subheading,link,linktext,imagelink}) => {
  return (
    <>
   <div className="md:flex gap-4 py-4 md:px-10 2xl:container 2xl:mx-auto">
      <div className="content-center sm:px-8 px-3">
        <h1 className="text-4xl font-bold my-10">
    {heading}
    </h1>
        <p className="pb-4">{subheading}</p>
        <Link href={link} className="bg-blue-900 mt-2 py-2 px-6 w-[160px] flex gap-2 rounded-lg text-white">{linktext}<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>
      </div>
      <div className="md:mt-0 md:content-center mt-8">
        <Image src={imagelink} alt="..." height={800} width={800} />
      </div>
    </div>
    </>
  )
}

export default Heading