import React from 'react';
import Image from 'next/image';
import { GiCheckedShield } from "react-icons/gi";
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Link from 'next/link';
const Singlesolution = ({data,index}) => {
  return (
   <>
     <div className={`flex  flex-cols-2 rounded-xl mb-10  border-spacing-5 border-black md:w-[60%] ${index%2==0?"flex-row-reverse":""} items-center justify-center  gap-5 `}>
            <div className='flex  justify-center items-center min-w-[150px] w-[200px] h-[200px] bg-blue-900'><span className='text-6xl font-bold text-white'>{index+1}</span></div>
            <div className=''>
                <h1 className='text-4xl font-black text-blue-950'>{data?.section_title}</h1>
                <div className='mt-5'>
                       {data?.section_description}
                </div>
               

            </div>
        </div>
   </>
  );
};

export default Singlesolution;
