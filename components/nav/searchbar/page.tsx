'use client'

import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import themes from '@/styles/themes.module.css'
import data from '@/public/data/manga.json'

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const results = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleClearInput = () => {
    setSearchValue('');
  };
  return (
    <div className="w-[400px] p-[4px] rounded-full justify-start items-center flex" id={themes.outside}>
      <div className="p-[6px] rounded-full justify-center items-center flex" id={themes.opacity}><SearchIcon sx={{ fontSize: 15 }} id={themes.opacity} /></div>
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
      {searchValue && (
        <div className='fixed w-[400px] h-[300px] bg-zinc-700 top-[70px] rounded-[5px] overflow-hidden'>
          {
            results.map((result: any) => (
              <div className='w-full flex items-center justify-start p-[10px] bg-zinc-800' key={result.id}>
                <img className='w-[40px] h-[60px]' src={result.cover} alt='0' sizes='8000px, 8000px' />
                <div className='h-full flex flex-col items-start justify-center p-[10px] text-[10px] gap-[15px]'>
                  <h1 className='text-[14px]'>{result.name}</h1>
                  <h4 className='text-zinc-300'>Chapter 5</h4>
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}