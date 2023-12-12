import { Logins } from '@/components/login/page'

export default async function Login(data: any) {
    
      
    return (
        <div className="w-full h-[100vh] bg-zinc-900 flex items-center justify-center">
            <div className="w-[40%] h-[80%] flex flex-col items-center justify-center gap-[2vw] text-center text-white text-[16px] px-[20px] bg-zinc-800 rounded-[10px]">
                <div className="w-full flex flex-col items-center justify-center gap-[0.5vw]">
                    <h1 className='text-[20px] font-medium'>Login</h1>
                    <p>Welcome back to Coloredmanga</p>
                </div>
                <Logins/>
            </div>
        </div>
    )
}