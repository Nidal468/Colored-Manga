'use client'

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link'
import userData from '@/public/data/user.json'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function SignUp() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visibility, setVisibility] = useState(false);
    const [state, setState] = useState(false);
    const checkUser = userData.find((data: any) => data.username === username)
    const [file, setFile] = useState<File>();
    const [imageUrl, setImageUrl] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [next, setNext] = useState(true);

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
        const checkEmail = () => {
            if (checkUser?.email === email) {
                setEmail('');
                setState(true)
            }
        }
        checkEmail()
        checkUsernameExists();
    }, [username, email]);

    const check = () => {

    }

    const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!file) return alert("file not found")
        const fileName = file.name;
        console.log('Uploaded file name:', fileName);
        try {
            const data = new FormData();
            data.set('file', file);

            const res = await fetch('/api/userAvater', {
                method: 'POST',
                body: data
            });

            if (res.ok) {
                const responseJson = await res.json();
                setImageUrl(`/images/user/${responseJson.imageUrl}`);
                console.log('Image uploaded successfully');
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
        const newuser = {
            id: new Date().getTime().toString(),
            username: username,
            avater: `/images/user/${fileName}`,
            firstname: firstname,
            lastname: lastname,
            password: password,
            token: generateToken(15),
            createdAt: formattedDate,
            email: email,
            bookmark: []
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
                const responseJson = await response.json();
                setImageUrl(`/images/user/${responseJson.imageUrl}`);
                console.log('User added successfully');

            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error adding user:', error);
        }
        setUsername('');
        setPassword('');
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];

        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return (
        <form className="w-full min-h-[100vh] flex items-center justify-center" onSubmit={handleAddUser}>
            <div className="w-[40%] h-[90%] flex flex-col items-center justify-center gap-[15px] text-center text-white text-[16px] px-[20px] bg-zinc-800 rounded-[10px] font-light cursor-pointer">
                {next ? <div className='w-full flex flex-col items-center justify-center gap-[15px]'>
                    <h1>Create a new account</h1>
                    <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                        <label className="text-[13px]">Enter Email</label>
                        <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px]' style={{ color: state ? "red" : "#fff", border: `1px solid ${state ? "red" : "transparent"}` }}><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="email" placeholder={state ? "Email has already been taken" : "Email"} className="px-[5px] placeholder:text-white bg-transparent w-full h-full text-[13px]" value={email} onChange={(e) => { setEmail(e.target.value), setState(false) }} /></div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                        <label className="text-[13px]">New Password</label>
                        <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px] text-white'><LockIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type={visibility ? "text" : "Password"} placeholder="Password" className="px-[5px] text-white placeholder:text-white bg-transparent w-full h-full text-[13px]" value={password} onChange={(e) => setPassword(e.target.value)} /><VisibilityIcon sx={{ fontSize: { xs: 12, lg: 18 } }} onClick={() => setVisibility(current => !current)} /></div>
                    </div>
                    <button className='w-[50%] h-[35px] bg-sky-400 rounded-[5px]' onClick={() => setNext(false)}>Next</button>
                </div> : <div className='w-full flex flex-col items-center justify-center gap-[14px]'>
                    <div className="w-[80px] h-[80px] relative border-2 border-sky-400 rounded-[10px] overflow-hidden flex items-start justify-start">
                        <Image fill={true} src={imagePreview || '/images/covers/borutoCover.jpg'} alt={`${imagePreview}`} className="object-cover" />
                        <input type="file" placeholder="Upload Cover" onChange={handleFileChange} className='w-[80px] h-[80px] text-[10px] opacity-0 absolute' />
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                        <label className="text-[13px]">First name</label>
                        <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px]' style={{ color: state ? "red" : "#fff", border: `1px solid ${state ? "red" : "transparent"}` }}><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="text" placeholder={"First name"} className="px-[5px] placeholder:text-white bg-transparent w-full h-full text-[13px]" value={firstname} onChange={(e) => { setFirstname(e.target.value), setState(false) }} /></div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                        <label className="text-[13px]">Last name</label>
                        <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px]' style={{ color: state ? "red" : "#fff", border: `1px solid ${state ? "red" : "transparent"}` }}><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="text" placeholder={"Last name"} className="px-[5px] placeholder:text-white bg-transparent w-full h-full text-[13px]" value={lastname} onChange={(e) => { setLastname(e.target.value), setState(false) }} /></div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start gap-[0.6vw]">
                        <label className="text-[13px]">Username</label>
                        <div className='w-full h-[35px] bg-zinc-600 rounded-[4px] flex items-center justify-start px-[15px]' style={{ color: state ? "red" : "#fff", border: `1px solid ${state ? "red" : "transparent"}` }}><PersonIcon sx={{ fontSize: { xs: 12, lg: 18 } }} /><input type="text" placeholder={state ? "Username has already been taken" : "Username"} className="px-[5px] placeholder:text-white bg-transparent w-full h-full text-[13px]" value={username} onChange={(e) => { setUsername(e.target.value), setState(false) }} /></div>
                    </div>

                    <div className='w-full flex items-center justify-center gap-[10px]'><button className='w-[40%] h-[35px] bg-sky-400 rounded-[5px]' type='submit'>Sign in</button><Link className='w-[40%] h-[35px]' href={"/auth/login"}><button className='w-full h-full bg-sky-400 rounded-[5px]' type='submit'>Back to login</button></Link></div>
                </div>}
                <p>Already have an account?<Link href={'/auth/login'} className='text-sky-400'> go login in now to start reading</Link></p>
            </div>
            <div></div>
        </form>
    )
}