'use client'

import theme from '@/styles/theme.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link'

import {useState, useEffect} from 'react'

export default function Sidebar(props: any) {
    const { toggleVisibility } = props;
    return (
        <div className="w-[20%] h-full shadow flex-col justify-start items-center flex fixed top-0 right-0 p-[2vw]" id={theme.sidebar}>
            <div className='w-full py-[0.5vw] flex items-center font-medium'>
                <h1>The return of the frozen player</h1>
                <div className='p-2 rounded-[0.4vw] -rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='p-[0.5vw] rounded-[0.4vw] rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='w-full h-full flex items-center justify-between px-[0.5vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}>Chapter 1 <KeyboardArrowDownIcon sx={{fontSize: "1.5vw"}}/></div>
                <div className='p-[0.5vw] rounded-[0.4vw] -rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='p-[0.5vw] rounded-[0.4vw] rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='w-full h-full flex items-center justify-between px-[0.5vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}>Page 1 <KeyboardArrowDownIcon sx={{fontSize: "1.5vw"}}/></div>
                <div className='p-[0.5vw] rounded-[0.4vw] -rotate-90' id={theme.ScrollDown}>
                    <KeyboardArrowDownIcon />
                </div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}><ChatIcon sx={{fontSize: "1.5vw"}}/> Chapter 100 Comments</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}><BookmarkAddIcon sx={{fontSize: "1.5vw"}}/> Bookmark the Manga</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}><ViewArrayIcon sx={{fontSize: "1.5vw"}}/>Remove Header</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}><CalendarViewDayIcon sx={{fontSize: "1.5vw"}}/>Long Strip</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
            <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.ScrollDown}  onClick={toggleVisibility}><SettingsIcon sx={{fontSize: "1.5vw"}}/>Advance Settings</div>
            </div>
            <div className='w-full py-[1vw] flex flex-col items-center justify-start gap-[0.5vw]'>
                <h1 className='text-[1vw] text-center'>Join our discord to get the latest updates</h1>
                <Link href=""><div className='px-[2vw] py-[0.5vw] rounded-full bg-sky-300'>Join Discord</div></Link>
            </div>
        </div>
    )
}