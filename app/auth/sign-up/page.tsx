'use client'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link'
import userData from '@/public/data/user.json'
import { useEffect, useState } from 'react'


export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [verification, setVerification] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [state, setState] = useState(false);
    const checkUser = userData.find((data: any) => data.username === username)

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date());

    function generateToken(length: any) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }

        return token;
    }

    useEffect(() => {
        const checkUsernameExists = () => {
            if (checkUser?.username === username) {
                setUsername('');
                setState(true)
            }
        }
        checkUsernameExists();
    }, [username]);
    const handleAddUser = async () => {
        if (!username || !password || !verification) return alert('please fill all the forms')
        
        const newuser = {
            id: new Date().getTime().toString(),
            username: username,
            password: password,
            verification: verification,
            token: generateToken(15),
            createdAt: formattedDate
        }
        try {
            const response = await fetch('/api/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newuser),
            });
            if (response.ok) {
                console.log('User added successfully');
                
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
        setUsername('');
        setPassword('');
        setVerification('');
    }
    return (
        <div className="w-full h-[100vh] flex items-center justify-center">
            <form className="w-[40%] h-[90%] flex flex-col items-center justify-center gap-[1.5vw] text-center text-white text-[16px] px-[20px] bg-zinc-800 rounded-[10px] font-light cursor-pointer" onSubmit={handleAddUser}>
                <h1>Create a new account</h1>
                <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                    <label className="text-[13px]">New Username</label>
                    <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px]' style={{ color: state ? "red" : "#fff", border: `1px solid ${state ? "red" : "transparent"}` }}><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="text" placeholder={state ? "Username has already been taken" : "Username"} className="px-[5px] placeholder:text-white bg-transparent w-full h-full text-[13px]" value={username} onChange={(e) => { setUsername(e.target.value), setState(false) }} /></div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                    <label className="text-[13px]">New Password</label>
                    <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px] text-white'><LockIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type={visibility? "text":"Password"} placeholder="Password" className="px-[5px] text-white placeholder:text-white bg-transparent w-full h-full text-[13px]" value={password} onChange={(e) => setPassword(e.target.value)} /><VisibilityIcon sx={{ fontSize: { xs: 12, lg: 18 } }} onClick={() => setVisibility(current => !current)}/></div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                    <label className="text-[13px]">Your Father/Mother's name ( <span className='text-red-500'>it will be used for your account recovery</span> )</label>
                    <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px] text-white'><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="text" placeholder="Please enter here" className="px-[5px] text-white placeholder:text-white bg-transparent w-full h-full text-[13px]" value={verification} onChange={(e) => setVerification(e.target.value)} /></div>
                </div>
                <button type='submit' className='w-[50%] h-[35px] bg-sky-400 rounded-[5px]'>Sign Up</button>
                <p>Already have an account?<Link href={'/auth/login'} className='text-sky-400'> go login in now to start reading</Link></p>
            </form>
        </div>
    )
}