'use client'
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import Search from './searchbar/page'
import Image from 'next/image'
import userData from '@/public/data/user.json'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
export default function Nav() {
  const [token, setToken] = useState('');
  
  useEffect(() => {

    const token = Cookies.get('token');
    setToken(token || '')

  }, [])
  const currentUser = userData.find((data: any) => data.token === token)

  function Signout() {
    Cookies.remove('token');
  }

  return (
    <div className='w-full flex items-center justify-center hidden lg:flex fixed top-0 right-0 z-50' id={themes.solid}>
      <div className="w-[1300px] px-[30px] h-[60px] justify-between items-center flex">
        <div className="p-[10px] justify-center items-center gap-[20px] flex text-[15px] text-center font-light">
          <Link href="/">
            <Image width={35} height={35} src="/images/assets/logo.jpg" alt="coloredmanga" sizes="100vw, 100vw" />
          </Link>
          <div id={themes.dimtext}>Home</div>
          <div id={themes.dimtext}><Link href="/manga">Collection</Link></div>
          <div id={themes.dimtext}>Genre</div>
          <div id={themes.dimtext}>Profile</div>
          <div id={themes.dimtext}>Newest</div>
        </div>
        <Search />
        <div className='flex items-center gap-[5px] text-white text-[9px]'>

          <div className='flex items-center gap-[2vw]'><div className='w-[30px] h-[30px] rounded-full overflow-hidden relative'>{currentUser?.avater && <Image fill={true} className="object-cover" src={currentUser?.avater || ''} alt={currentUser?.username || ''} sizes="(max-width: 768px) 100vw, 33vw" />}</div>{currentUser?.avater? <button className="w-[60px] h-[25px] rounded-full" id={themes.button} onClick={Signout}>Sign out</button>:<Link href="/auth/login"><button className="w-[60px] h-[25px] rounded-full" id={themes.button}>Login in</button></Link>}</div>
        </div>
      </div>
    </div>

  );
}
