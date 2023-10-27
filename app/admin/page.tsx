'use client'
import { useState, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
export default function Admin() {
  const [isUser, setUser] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isSubmited, setSubmited] = useState("inActive")
  useEffect(() => {
    if (isUser === "Fate" && isPassword === "1234" && isSubmited === "activeted" || isUser === "Anna" && isPassword === "411" && isSubmited === "activeted") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      setSubmited("inActive");
    }
  }, [isSubmited]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isAuthenticated ? <div className='w-full h-[80vh] flex'>
        <div className='w-[80%] h-full'></div>
        <div className='w-[20%] h-full flex flex-col border-l'></div>
      </div> : <div className='w-full h-[80vh] flex items-center justify-center'>
        <div className='bg-zinc-800 flex items-start justify-end text-white rounded-[1vw] overflow-hidden' style={{ display: isAuthenticated ? "none" : "flex" , background: `url`}}>
          <img className='w-[21vw]' src='/images/assets/fpr.jpg'/>
          <div className='w-[22.5vw] p-[2vw] flex flex-col items-center justify-start gap-[2vw]'>
            <h1>Login In</h1>
            <h2 className='text-[1vw] font-light'>To access the Admin Panel please type in your username & password</h2>
            <div className='w-full flex flex-col gap-[1vw]'>
              <h1 className='text-[1vw] font-light'>Enter your username below</h1>
              <input type='text' placeholder='Enter Username' value={isUser} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className='w-full flex flex-col gap-[1vw]'>
              <h1 className='text-[1vw] font-light'>Enter your password below</h1>
              <input type='text' placeholder='Enter Password' value={isPassword} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='py-[0.5vw] px-[2vw] bg-white text-black rounded-[0.2vw] cursor-pointer' onClick={() => setSubmited("activeted")}>Submit</div>
          </div>
        </div>
      </div>}
    </div>
  )
}