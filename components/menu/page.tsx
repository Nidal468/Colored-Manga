'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='w-full h-[10vw] fixed top-0 left-0 z-[999] lg:hidden bg-neutral-800 shadow'>
      <div className="w-full h-full flex items-center justify-between text-white text-[2vw] px-[4vw]">
        <div className='flex items-center gap-[10px]'>
        <div onClick={toggleMenu}><MenuIcon sx={{ fontSize: 18 }} /></div>
        <div className='w-[5vw] h-[5vw] relative'><Image fill={true} src="/images/assets/logo.jpg" alt="coloredmanga" /></div>
        </div>
        <div className="relative w-[8vw] h-[8vw] flex items-center justify-center">
          {isOpen && (
            <div className="fixed top-[50px] left-[5px] right-0 bg-zinc-800 rounded-[5px] z-[999] text-white text-[12px] p-[8px] py-[15px] flex flex-col items-start justify-start gap-[18px] w-[80px]">
              <Link href="/"><h1>Home</h1></Link>
              <Link href="/manga"><h1>Collection</h1></Link>
              <Link href="/"><h1>Genre</h1></Link>
              <Link href="/"><h1>Types</h1></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}