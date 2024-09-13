import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const Heading = () => {
  return (
    <>
   <div className="md:flex gap-4 py-4 md:px-10 bg-blue-50">
      <div className="content-center px-8">
        <h1 className="text-4xl font-bold my-10">
    Comprehensive Revenue Cycle Management​
    </h1>
        <p className="pb-4">We provide comprehensive technical and staffing solutions for streamlined revenue cycle management and credentialing.</p>
        <Link href={"/"} className="bg-blue-900 mt-2 py-2 px-6 w-[160px] flex gap-2 rounded-lg text-white">Contact Us<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>
      </div>
      <div className="md:mt-0 md:content-center mt-8">
        <Image src={"/img/hero-image-1536x1159.png"} alt="..." height={800} width={800} />
      </div>
    </div>
    </>
  )
}

export default Heading