import React from 'react'
import Image from 'next/image'

const loading = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center items-center fixed top-0 right-0 z-50'>
      <Image src={'/img/giphy.webp'} height={400} width={400} alt='...'/>
    </div>
  )
}

export default loading