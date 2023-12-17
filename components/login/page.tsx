'use client'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link'
import userData from '@/public/data/user.json'
import { useState } from 'react'
import Cookies from 'js-cookie';

export function Logins() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);
    const findUser = userData.find((data: any) => data.username === username);
    const checkPassword = userData.find((data: any) => data.password === password);

    const setCookie = () => {

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 20); // 7 days from now

        if (findUser || checkPassword) {
            const getToken = findUser?.token;
            Cookies.set('token', getToken || "", { expires: expirationDate });
            localStorage.removeItem('guestId');
        }
    };
    return (
        <form className="w-[90%] flex flex-col items-center justify-start gap-[2vw] font-light" onSubmit={() => setCookie()}>
            <div className="w-full flex flex-col items-start justify-start gap-[1vw]">
                <label className="text-[13px]">Please enter your username</label>
                <div className='w-full h-[45px] bg-zinc-600 rounded-[6px] flex items-center justify-start px-[15px] text-white'><PersonIcon sx={{ fontSize: { xs: 12, lg: 20 } }} /><input type="text" placeholder="Username" className="px-[5px] text-white placeholder:text-white bg-transparent w-full h-full" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[1vw]">
                <label className="text-[13px]">Please enter your password</label>
                <div className='w-full h-[45px] bg-zinc-600 rounded-[6px] flex items-center justify-start px-[15px] text-white'><LockIcon sx={{ fontSize: { xs: 12, lg: 20 } }} /><input type={visibility ? "text" : "Password"} placeholder="Password" className="px-[5px] text-white placeholder:text-white bg-transparent w-full h-full" value={password} onChange={(e) => setPassword(e.target.value)} /><VisibilityIcon sx={{ fontSize: { xs: 12, lg: 18 } }} onClick={() => setVisibility(current => !current)} /></div>
            </div>
            <button className='w-[50%] h-[35px] bg-sky-400 rounded-[5px]' type="submit">Login Now</button>
            <p>Dont have an account?<Link href={'/auth/sign-up'} className='text-sky-400'> Create a new one</Link></p>
        </form>
    )
}