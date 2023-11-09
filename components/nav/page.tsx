'use client'

import React, { useState, useEffect } from 'react';
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import Search from './searchbar/page'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
export default function Nav() {
  const supabase = createClientComponentClient()
  const [image, setImage] = useState("/images/assets/fpr.jpg")
  const [sign, signOut] = useState(false)

  useEffect(() => {
    const Check = async () => {
      const { data: {session}} = await supabase.auth.getSession()
      if(session){
        const { data: { user } } = await supabase.auth.getUser()
          signOut(false)
          setImage(`${user?.user_metadata.avatar_url}`)
        } else {
          signOut(true)
        }
    }
    Check()
  }, [])

  return (
    <div className='w-full flex items-center justify-center hidden lg:flex fixed top-0 right-0 z-50' id={themes.solid}>
      <div className="w-[1300px] px-[30px] h-[50px] justify-between items-center flex">
        <div className="p-[10px] justify-center items-center gap-[20px] flex text-[10px] text-center font-light">
          <Link href="/">
            <div className='w-[25px] h-[25px] relative'>
              <Image fill={true} src="/images/assets/logo.jpg" alt="coloredmanga" className='object-cover' sizes="(max-width: 768px) 100vw, 33vw"/>
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
            <div className="w-[60px] h-[25px] rounded-full flex items-center justify-center" id={themes.button}>Login</div></Link> : <form action="/auth/signout" method="post" className='flex items-center gap-[2vw]'><div className='w-[30px] h-[30px] rounded-full overflow-hidden relative'><Image fill={true} className="object-cover" src={image} alt={image} sizes="(max-width: 768px) 100vw, 33vw"/></div><button className="w-[60px] h-[25px] rounded-full" type="submit" id={themes.button}>Sign out</button></form>}
        </div>
      </div>
    </div>

  );
}
