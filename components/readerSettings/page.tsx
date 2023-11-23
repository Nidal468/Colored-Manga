'use client'

import theme from '@/styles/themes.module.css'
import { Slots } from "./parts/page";
import { useState, useEffect } from "react";
export default function Seettings(props: any) {
    const [isWidth, setIsWidth] = useState<boolean>(() => {
        const savedIsWidth = localStorage.getItem('isWidth');
        return savedIsWidth === 'true';
    });
    const [isHeight, setIsHeight] = useState<boolean>(() => {
        const savedIsHeight = localStorage.getItem('isHeight');
        return savedIsHeight === 'true';
    });
    useEffect(() => {
        localStorage.setItem('isWidth', isWidth.toString());
        localStorage.setItem('isHeight', isHeight.toString());
    }, [isWidth,isHeight]);
    return (
        <div className="fixed w-[72%] top-[15%] right-[21%] flex flex-col items-start justify-start p-[1.5vw] text-[1vw] font-light gap-[1vw] text-white" id={theme.solid} style={{display: props.visibility}}>
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
            <Slots title="Advance Settings" font="2vw"/>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-[1vw]'><h1>Width</h1><input type='text' placeholder='200px' className='px-[1vw] py-[0.5vw] rounded-[0.2vw] border bg-transparent outline-0'/><h1>Height</h1><input type='text' placeholder='300px' className='px-[1vw] py-[0.5vw] rounded-[0.2vw] border bg-transparent outline-0'/></div>
                <div className='py-[1vw] px-[2vw] border border-white rounded-[0.5vw] cursor-pointer'>Apply</div>
            </div>
            <Slots title="Active Menu" action={() => setIsHeight(!isHeight)} font="1vw" align={isHeight? "flex-end":"flex-start"} color={isHeight? "rgb(134 239 172)":"rgb(51 65 85)"}/>
            <Slots title="contain to width" action={() => setIsWidth(!isWidth)} font="1vw" align={isWidth? "flex-end":"flex-start"} color={isWidth? "rgb(134 239 172)":"rgb(51 65 85)"}/>
            <Slots title="contain to height" font="1vw"/>
            <Slots title="contain to width" font="1vw"/>
            {isWidth.toString()}
        </div>
    )
}