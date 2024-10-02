"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const ScrolltoTop = () => {
    const pathname=usePathname()
    useEffect(()=>{
        window.scroll(0,0)

    },[pathname])
  return null
}

export default ScrolltoTop