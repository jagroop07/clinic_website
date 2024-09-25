import solutions from '@/backend/models/solutions';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import axios from 'axios';
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";
async function getsolutions() {
    try {
      const response = await axios.get('http://localhost:3000/api/solutions');

      return response.data.solutions; // Adjust according to your API structure
    
    } catch (error) {
      console.error('Error fetching solutions:', error);
      throw new Error('Failed to fetch solutions');
    }
  }
const OurSolutions = async() => {
   const solutions=await getsolutions()
    console.log(solutions)
  return (
    
    <>
    <div className='p-4 mt-20'> <h1 className='text-5xl font-bold text-center text-blue-900'>After Service</h1>
    <p className='mt-5 text-center text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quam necessitatibus eligendi libero distinctio unde cupiditate beatae, praesentium ut dicta!</p>
    <div className='solutions'>
        
        
       
        {solutions?.map((e,i)=><div key={i} className={`md:flex justify-center ${i%2==0?"flex-row-reverse":""} gap-5 align-middle`}>
            <div className='flex justify-center align-center'><Image className='md:w-[500px] mt-7' width={500} height={500} alt='...' src={e.solution_first?.solution_image}/></div>
            <div className='content-center md:w-[40%]'>
                <div className='flex '>
                    <div> <MdPayment className='text-4xl text-white bg-blue-600 p-1 rounded-xl'/ ></div>
                   <p className='font-bold text-xl  ms-6 content-center'>
{e.solution_first.solution_title}
</p></div>
                <div className='mt-6'>
                    {e.solution_first?.solution_points.map((e,i)=>                    <div key={i} className='flex my-4'><span><BiSolidCheckboxChecked className='h-8 w-8 text-blue-900' /></span><p className='ms-4 content-center text-sm'>	{e}</p></div>
)}
                    
                </div>
                <Link href={"/"} className="bg-blue-900 mt-4 py-2 px-6 w-[160px] flex  gap-2 rounded-lg text-white">Read more<span className="ms-2 mt-1"><FaArrowAltCircleRight /></span></Link>

            </div>
        </div>)}
        
    </div></div>
   
    </>
  )
}

export default OurSolutions