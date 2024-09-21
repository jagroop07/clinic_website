import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";
const OurSolutions = () => {
  return (
    <>
    <div className='p-4 mt-20'> <h1 className='text-5xl font-bold text-center text-blue-900'>After Service</h1>
    <p className='mt-5 text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam necessitatibus eligendi libero distinctio unde cupiditate beatae, praesentium ut dicta!</p>
    <div className='solutions'>
        
        
        <div className='md:flex md:flex-row-reverse justify-center gap-5 align-middle'>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={"https://knackglobal.com/wp-content/uploads/2023/05/image_Medical-Coding-Services-768x664.png"}/></div>
            <div className='content-center md:w-[40%]'>
                <div className='flex '>
                    <div> <MdPayment className='text-4xl text-white bg-blue-600 p-1 rounded-xl'/ ></div>
                   <p className='font-bold text-xl  ms-6 content-center'>Medical Coding Services </p></div>
                <div className='mt-6'>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>	Reduce Coding Costs & Invest in Scalable Systems</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>	Ensure Compliance With ICD-10, CPT-4, & HCPCS</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>	Adhere to Annual Coding Changes</p></div>
                    
                </div>
                <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">Read more<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>

            </div>
        </div>
        {/* sol3 */}
        <div className='md:flex justify-center gap-5 align-middle'>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={"https://knackglobal.com/wp-content/uploads/2023/04/image_Accounts-Receivable-Services-768x648.png"}/></div>
            <div className='content-center md:w-[40%]'>
                <div className='flex '>
                    <div> <MdPayment className='text-4xl text-white bg-blue-600 p-1 rounded-xl'/ ></div>
                   <p className='font-bold text-xl  ms-6 content-center'>
Accounts Receivable
Services
</p></div>
                <div className='mt-6'>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>	Decrease Operational Costs & Maximize Cash Flow</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Our Expert A/R Team Serves You as a Revenue-Enhancing Partner</p></div>
                    
                </div>
                <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">Read more<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>

            </div>
        </div>
        {/* sol4*/}
        <div className='md:flex md:flex-row-reverse justify-center gap-5 align-middle'>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={"https://knackglobal.com/wp-content/uploads/2023/04/image_Denial-Management-Services-768x646.png"}/></div>
            <div className='content-center md:w-[40%]'>
                <div className='flex '>
                    <div> <MdPayment className='text-4xl text-white bg-blue-600 p-1 rounded-xl'/ ></div>
                   <p className='font-bold text-xl  ms-6 content-center'>
Denial Management Services
</p></div>
                <div className='mt-6'>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Prevent Future Denials With Detailed Data Analysis & Process Improvements</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Our Dedicated Team Takes a Hands-On Approach to Appealing & Reversing Inaccurate Denials</p></div>
                    
                </div>
                <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">Read more<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>

            </div>
        </div>
        {/* sol5*/}
        <div className='md:flex justify-center gap-5 align-middle'>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={"https://knackglobal.com/wp-content/uploads/2023/04/image_Provider-Enrollment-and-Credentialing-Services.png"}/></div>
            <div className='content-center md:w-[40%]'>
                <div className='flex '>
                    <div> <MdPayment className='text-4xl text-white bg-blue-600 p-1 rounded-xl'/ ></div>
                   <p className='font-bold text-xl  ms-6 content-center'>
                   Provider Enrollment and Credentialing Services</p></div>
                <div className='mt-6'>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Manage New Provider Enrollment with Our Seamless Application Process</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Automatically Track Document Expiration Dates & Quickly Re-Enroll</p></div>
                    <div className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>Complete Enrollment Services for Most Insurance Companies</p></div>
                    
                </div>
                <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">Read more<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>

            </div>
        </div>
    </div></div>
   
    </>
  )
}

export default OurSolutions