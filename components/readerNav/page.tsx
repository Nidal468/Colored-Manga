'use client'

import theme from '@/styles/themes.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import Link from 'next/link'

type DivStates = {
    div1: boolean;
    div2: boolean;
    div3: boolean;
    div4: boolean;
    div5: boolean;
    div6: boolean;
    div7: boolean;
};

export default function Nav(props: any) {
    const { menu} = props;
    const { openChapter, openPage } = props;
    
    return (
        <div className='lg:h-[60px] h-[50px] lg:px-5 lg:py-2.5 px-2 justify-between items-center flex fixed top-0 left-0 z-50 text-white' id={theme.solid} style={{ boxShadow: "0px 0px 0px #0b0b0b", width: props.width}}>
            <div className='flex items-center gap-[2vw] lg:text-[15px] text-[10px]'>
                <div className='lg:w-[150px] lg:h-[35px] w-[80px] h-[25px] flex lg:gap-[40px] gap-[10px] items-center justify-center rounded-[3px]' id={theme.outside} onClick={openChapter} >
                    <h1>Chapter 1</h1>
                    <div className={`${props.rotate} duration-500`}><KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/></div>
                </div>
                <div className='lg:w-[150px] lg:h-[35px] w-[80px] h-[25px] lg:flex lg:gap-[40px] gap-[10px] items-center justify-center rounded-[3px] hidden' id={theme.outside} onClick={openPage}>
                    <h1>Page 1</h1>
                    <div className={`${props.rotate1} duration-500`}><KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/></div>
                </div>
                <div className='lg:w-[150px] lg:h-[35px] w-[80px] h-[25px] lg:flex lg:gap-[40px] gap-[10px] items-center justify-center rounded-[3px] hidden' id={theme.outside}>
                    <Link href={`/manga/${props.back}`}><h1 className='lg:text-[12px] text-[2vw]'>Back to Manga</h1></Link>
                </div>
                <div className='flex items-center lg:gap-[10px] gap-[10px]'>
                    <Link href={`/manga/${props.back}/${props.prev}`}>
                    <div className='lg:p-2 p-1.5 lg:rounded-[4px] rounded-[3px] rotate-90' id={theme.outside}>
                        <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/>
                    </div>
                    </Link>
                    <Link href={`/manga/${props.back}/${props.next}`}>
                    <div className='lg:p-2 p-1.5 lg:rounded-[4px] rounded-[3px] -rotate-90' id={theme.outside}>
                        <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-[1vw]'>
                <div className='w-[26px] h-[26px] lg:w-[40px] lg:h-[40px] lg:rounded-[4px] rounded-[2px] flex items-center justify-center' id={theme.outside}>
                    <ChatBubbleIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/>
                </div>
                <div className='w-[26px] h-[26px] lg:w-[40px] lg:h-[40px] lg:rounded-[4px] rounded-[2px] flex items-center justify-center' id={theme.outside} onClick={menu}>
                    <MenuIcon sx={{ fontSize: { xs: 12, lg: 25 } }}/>
                </div>
            </div>
        </div>
    )
}