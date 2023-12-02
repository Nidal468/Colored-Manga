'use client'

import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import themes from '@/styles/themes.module.css'

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const handleClearInput = () => {
        setSearchValue('');
      };
    return(
        <div className="w-[400px] p-[4px] rounded-full justify-start items-center flex" id={themes.outside}>
        <div className="p-[6px] rounded-full justify-center items-center flex" id={themes.opacity}><SearchIcon sx={{ fontSize: 15 }} id={themes.opacity}/></div>
        <input
          className="w-full text-neutral-100 text-[10px] font-light outline-0 px-[6px] rounded-full bg-transparent placeholder-gray-50"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <div className="p-[6px] rounded-full justify-center items-center flex" onClick={handleClearInput} id={themes.opacity}>
            <CloseIcon sx={{ color: '#fff', fontSize: "15px" }} />
          </div>
        )}
      </div>
    )
}