'use client'

import theme from '@/styles/theme.module.css'

export default function Seettings() {
    
    return (
        <div className="fixed w-[92%] top-[20%] flex flex-col items-start justify-start p-[1.5vw] text-[1vw] font-light gap-[2vw]" id={theme.subSettings}>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-[2vw]'>Page Fit</h1>
                <div className='px-[2vw] py-[1vw] border border-white rounded-[0.5vw]'>Recomended</div>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='p-[1vw] border border-white rounded-[0.5vw]'>1 : 1 Original Size</div>
                <div className='border border-white rounded-[0.5vw] flex text-[1vw]'>
                    <div className='p-[1vw] border-r border-white'>1 : 2 Size</div>
                    <div className='p-[1vw]'>3 : 2 Size</div>
                    <div className='p-[1vw] border-l border-white'>2 : 3 Size</div>
                </div>
            </div>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-[2vw]'>Advance Settings</h1>
                <div className='w-[4vw] p-[0.2vw] bg-white rounded-[200px]'>
                        <div className='w-[1.5vw] h-[1.5vw] bg-slate-700 rounded-[200px]'></div>
                    </div>
            </div>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-[1vw]'><h1>Width</h1><input type='text' placeholder='200px' className='px-[1vw] py-[0.5vw] rounded-[0.2vw] border bg-transparent outline-0'/><h1>Height</h1><input type='text' placeholder='300px' className='px-[1vw] py-[0.5vw] rounded-[0.2vw] border bg-transparent outline-0'/></div>
                <div className='py-[1vw] px-[2vw] border border-white rounded-[0.5vw] cursor-pointer'>Apply</div>
            </div>
        </div>
    )
}