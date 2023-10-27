'use client'

import React, { useState } from 'react';
import AllOutIcon from '@mui/icons-material/AllOut';
export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full h-[14vw] flex items-center justify-between text-white text-[4vw] lg:hidden px-[2vw] bg-neutral-800 shadow">
            <h1>ColoredManga</h1>
            <div className="relative w-[8vw] h-[8vw] flex items-center justify-center">
      <div className={`transition-all transform ${isOpen ? 'rotate-45' : 'rotate-0'}`} onClick={toggleMenu}><AllOutIcon sx={{color: '#fff', fontSize: '8vw'}}/></div>
      {isOpen && (
        <div className="absolute top-[50px] right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
          <ul className="py-2">
            <li className="px-4 py-2 text-gray-700">Item 1</li>
            <li className="px-4 py-2 text-gray-700">Item 2</li>
            <li className="px-4 py-2 text-gray-700">Item 3</li>
          </ul>
        </div>
      )}
    </div>
        </div>
    )
}