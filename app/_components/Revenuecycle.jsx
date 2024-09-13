import React from 'react'
import { BsGraphDownArrow } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Image from 'next/image';
const Revenuecycle = () => {
  return (
    <><div className='bg-gray-200 p-7 mt-10'>
    <div >
    <h1 className='font-bold text-3xl'>Our Revenue cycle indigator</h1>
    <p className='mt-8'>We utilize a comprehensive set of indicators to measure the efficiency and effectiveness of your revenue cycle processes. These indicators include metrics such as days in accounts receivable, clean claims rate, denial rate, net collection percentage, and average reimbursement time. By closely monitoring these indicators, we gain valuable insights into the performance of our RCM processes, identify areas for improvement, and ensure optimal revenue recovery for our clients.</p>
</div>
    <div className='mt-10'>
        <div className='grid  lg:grid-cols-4 sm:grid-cols-2 gap-2 '>
            <div className='flex justify-between bg-white rounded-xl p-12'>
                <div><div><span><BsGraphDownArrow className='text-red-500 text-5xl' /></span></div><div><p className='text-black w-20'>Reduced Bad Debt</p></div></div>
                <div><div><FaTrashAlt className='text-red-500 text-5xl'/></div><div><p className='ms-2'>5.3%</p></div></div>
            </div>
            <div className='flex justify-between bg-white rounded-xl p-12'>
                <div><div><span><BiUpArrowAlt className='text-green-800 text-5xl'/></span></div><div><p className='text-black w-20'>Days of Bill</p></div></div>
                <div><div><FaMoneyBillTrendUp className='text-blue-500 ms-4 text-5xl'/></div><div><p className='ms-2'>1-2 Days</p></div></div>
            </div>
            <div className='flex justify-between bg-white rounded-xl p-12'>
                <div><div><span><BiUpArrowAlt className='text-green-800 text-5xl'/></span></div><div><p className='text-black w-20'>Days in AR</p></div></div>
                <div><div><SlCalender className='text-blue-500 ms-4 text-5xl'/></div><div><p className='ms-2'>35 Days</p></div></div>
            </div>
            
            <div className='flex justify-between bg-white rounded-xl p-12'>
                <div><div><h1 className='text-xl text-blue-800'>AR &gt; 90</h1></div><div><p className='text-black w-20'>16%</p></div></div>
                <div><Image alt='...' width={100} height={100} src={"https://knackglobal.com/wp-content/uploads/2023/03/chart-graphic.png"}/></div>
            </div>
    
            
        </div>
    </div>
    </div>
</>
    
  )
}

export default Revenuecycle