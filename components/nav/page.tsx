'use client'

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import Search from './searchbar/page'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
export default function Nav() {
  const supabase = createClientComponentClient()
  const [sign, signOut] = useState(false)
  const Data = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      signOut(false)
    } else {
      signOut(true)
    }
  }
  Data()
  return (
    <div className="w-[94%] h-[5vw] px-5 py-2.5 justify-between items-center hidden lg:inline-flex fixed top-0 right-0 z-50" id={themes.solid}>
      <div className="p-2.5 justify-center items-end gap-5 flex">
        <div className="text-center text-[1.2vw] font-light" id={themes.dimtext}>Type</div>
        <div className="text-center text-[1.2vw] font-light" id={themes.dimtext}>Genre</div>
        <div className="text-center text-[1.2vw] font-light" id={themes.dimtext}>Newest</div>
        <div className="text-center text-[1.2vw] font-light" id={themes.dimtext}>Updated</div>
        <div className="text-center text-[1.2vw] font-light" id={themes.dimtext}>Added</div>
      </div>
      <Search />
      <div className='flex items-center gap-[0.5vw] text-white text-[0.8vw]'>

        {sign ? <Link href="/login" className='flex items-center gap-[0.5vw]'><div className='px-[2vw] py-[0.5vw] rounded-full' id={themes.button}>Sign Up</div>
          <div className='px-[2vw] py-[0.5vw] rounded-full' id={themes.button}>Login</div></Link> : <form action="/auth/signout" method="post"><button className="px-[2vw] py-[0.5vw] rounded-full" type="submit" id={themes.button}>Sign out</button></form>}
      </div>
    </div>
  );
}
