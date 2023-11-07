'use client'

import React, { useState } from 'react';
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import Search from './searchbar/page'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
export default function Nav() {
  const supabase = createClientComponentClient()
  const [image, setImage] = useState("")
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
  const Check = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      setImage(`${user?.user_metadata.avatar_url}`)
    } else {
      setImage("/images/assets/fpr.jpg")
    }
  }
  Check()
  return (
    <div className='w-full flex items-center justify-center hidden lg:flex fixed top-0 right-0 z-50'  id={themes.solid}>
      <div className="w-[1300px] px-[30px] h-[50px] justify-between items-center flex">
        <div className="p-[10px] justify-center items-center gap-[20px] flex text-[10px] text-center font-light">
          <Link href="/">
            <div className='w-[25px] h-[25px] relative'>
              <Image fill={true} src="/images/assets/logo.Webp" alt="coloredmanga" className='object-cover' />
            </div>
          </Link>
          <div id={themes.dimtext}>Type</div>
          <div id={themes.dimtext}>Genre</div>
          <div id={themes.dimtext}>Newest</div>
          <div id={themes.dimtext}>Updated</div>
          <div id={themes.dimtext}>Added</div>
        </div>
        <Search />
        <div className='flex items-center gap-[5px] text-white text-[9px]'>

          {sign ? <Link href="/login" className='flex items-center gap-[5px]'><div className="w-[60px] h-[25px] rounded-full flex items-center justify-center" id={themes.button}>Sign Up</div>
            <div className="w-[60px] h-[25px] rounded-full flex items-center justify-center" id={themes.button}>Login</div></Link> : <form action="/auth/signout" method="post" className='flex items-center gap-[2vw]'><div className='w-[30px] h-[30px] rounded-full overflow-hidden relative'><Image fill={true} className="object-cover" src={image} alt={image} /></div><button className="w-[60px] h-[25px] rounded-full" type="submit" id={themes.button}>Sign out</button></form>}
        </div>
      </div>
    </div>

  );
}
