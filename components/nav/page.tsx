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
    <div className="w-full h-[4vw] px-5 py-2.5 justify-between items-center hidden lg:inline-flex fixed top-0 right-0 z-50" id={themes.solid}>

      <div className="p-[1vw] justify-center items-center gap-[2vw] flex text-[1vw] text-center font-light">
        <Link href="/">
          <div className='w-[2vw] h-[2vw] relative'>
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
      <div className='flex items-center gap-[0.5vw] text-white text-[0.8vw]'>

        {sign ? <Link href="/login" className='flex items-center gap-[0.5vw]'><div className='px-[2vw] py-[0.5vw] rounded-full' id={themes.button}>Sign Up</div>
          <div className='px-[2vw] py-[0.5vw] rounded-full' id={themes.button}>Login</div></Link> : <form action="/auth/signout" method="post" className='flex items-center gap-[2vw]'> <div className='w-[3vw] h-[3vw] rounded-[200vw] overflow-hidden relative'><Image fill={true} className="object-cover" src={image} alt={image} /></div><button className="w-[5vw] h-[2vw] rounded-full" type="submit" id={themes.button}>Sign out</button></form>}
      </div>
    </div>
  );
}
