'use client'

import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styles from './styles.module.css'
import theme from '@/styles/theme.module.css'
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
export default function Nav() {
  const supabase = createClientComponentClient()
  const [searchValue, setSearchValue] = useState('');
  const [sign,signOut] = useState(false)
  const handleClearInput = () => {
    setSearchValue('');
  };
  useEffect(() => {
    const Data = async () => {
      const {data : {user}} = await supabase.auth.getUser()
      if(user) {
        signOut(false)
      } else {
        signOut(true)
      }
    }
    Data()
  },[])
  return (
    <div className="w-[94%] h-[5vw] px-5 py-2.5 justify-between items-center hidden lg:inline-flex fixed top-0 right-0 z-50" id={theme.nav}>
      <div className="p-2.5 justify-center items-end gap-5 flex cursor-pointer" id={styles.links}>
        <div className="text-center text-[1.2vw] font-light">Type</div>
        <div className="text-center text-[1.2vw] font-light">Genre</div>
        <div className="text-center text-[1.2vw] font-light">Newest</div>
        <div className="text-center text-[1.2vw] font-light">Updated</div>
        <div className="text-center text-[1.2vw] font-light">Added</div>
      </div>
      <div className="w-[40%] h-full pl-[.8vw] pr-[0.3vw] rounded-[100px] ustify-start items-center gap-2 flex" id={theme.search}>
        <SearchIcon sx={{ color: '#fff', fontSize: "2.5vw" }} />
        <input
          className="grow shrink basis-0 text-neutral-100 text-[1.3vw] font-light outline-0 px-[0.6vw] rounded-[200vw] bg-transparent placeholder-gray-50"
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <div
            className="px-[0.8vw] py-[0.8vw] bg-zinc-600 bg-opacity-20 rounded-[100vw] justify-center items-center flex"
            onClick={handleClearInput}
          >
            <CloseIcon sx={{ color: '#fff', fontSize: "1.5vw" }} />
          </div>
        )}
      </div>
      <div className='flex items-center gap-[0.5vw] text-white text-[0.8vw] cursor-pointer'>
      
        {sign? <Link href="/login" className='flex items-center gap-[0.5vw]'><div className='px-[2vw] py-[0.5vw] bg-sky-500 rounded-full'>Sign Up</div>
        <div className='px-[2vw] py-[0.5vw] bg-sky-500 rounded-full'>Login</div></Link>:<form action="/auth/signout" method="post"><button className="px-[2vw] py-[0.5vw] bg-sky-500 rounded-full" type="submit">Sign out</button></form>}
      </div>
    </div>
  );
}
