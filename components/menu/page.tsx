'use client'

import React, { useState } from 'react';
import AllOutIcon from '@mui/icons-material/AllOut';
import Image from 'next/image'
import Link from 'next/link'
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='w-full h-[10vw] absolute z-999 lg:hidden bg-neutral-800 shadow'>
          <div className="w-full h-full flex items-center justify-between text-white text-[2vw] px-[4vw]">
            <div className='w-[5vw] h-[5vw] relative'><Image fill={true} src="/images/assets/logo.jpg" alt="coloredmanga"/></div>
            <div className="relative w-[8vw] h-[8vw] flex items-center justify-center">
      <div className={`transition-all transform ${isOpen ? 'rotate-45' : 'rotate-0'}`} onClick={toggleMenu}><AllOutIcon sx={{color: '#fff'}} className='text-[5vw]'/></div>
      {isOpen && (
        <div className="absolute top-[50px] right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
          <ul className="py-2">
            <li className="px-4 py-2 text-gray-700">Type</li>
            <li className="px-4 py-2 text-gray-700"><Link href="/manga">Collection</Link></li>
            <li className="px-4 py-2 text-gray-700">Newst</li>
            <li className="px-4 py-2 text-gray-700">Updated</li>
            <li className="px-4 py-2 text-gray-700">Added</li>
          </ul>
        </div>
      )}
    </div>
        </div>
        </div>
    )
}