'use client'

import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.css'
import themes from '@/styles/themes.module.css'

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const handleClearInput = () => {
        setSearchValue('');
      };
    return(
        <div className="w-[40%] min-w-[25vw] py-[0.3vw] pl-[0.8vw] pr-[0.3vw] rounded-[100px] justify-start items-center gap-2 flex" id={themes.outside}>
        <SearchIcon sx={{ color: '#fff', fontSize: "2.5vw" }} />
        <input
          className="grow shrink basis-0 text-neutral-100 text-[1.3vw] font-light outline-0 px-[0.6vw] rounded-[200vw] bg-transparent placeholder-gray-50"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <div className="px-[0.8vw] py-[0.8vw] rounded-[100vw] justify-center items-center flex" onClick={handleClearInput} id={themes.opacity}>
            <CloseIcon sx={{ color: '#fff', fontSize: "1.5vw" }} />
          </div>
        )}
      </div>
    )
}