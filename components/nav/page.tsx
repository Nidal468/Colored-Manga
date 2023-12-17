'use client'
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import Search from './searchbar/page'
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
            <img className='w-[40px] h-[40px]' src="/images/assets/logo.jpg" alt="coloredmanga" sizes="8000px, 8000px" />
          </Link>
          <div id={themes.dimtext}><Link href="/">Home</Link></div>
          <div id={themes.dimtext}><Link href="/manga">Collection</Link></div>
          <div id={themes.dimtext}>Genre</div>
          <div id={themes.dimtext}><Link href="/profile">Profile</Link></div>
        </div>
        <Search />
        <div className='flex items-center gap-[5px] text-white text-[9px]'>
          <div className='flex items-center gap-[2vw]'>{currentUser?.avater && <img className="w-[30px] h-[30px] rounded-full overflow-hidden relative object-cover" src={currentUser?.avater || ''} alt={currentUser?.username || ''} sizes="(max-width: 768px) 100vw, 33vw" />}{currentUser?.avater? <button className="w-[60px] h-[25px] rounded-full" id={themes.button} onClick={Signout}>Sign out</button>:<Link href="/auth/login"><button className="w-[60px] h-[25px] rounded-full" id={themes.button}>Login in</button></Link>}</div>
        </div>
      </div>
    </div>

  );
}
