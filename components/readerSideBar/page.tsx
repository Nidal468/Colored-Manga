'use client'

import theme from '@/styles/themes.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link'

export default function Sidebar(props: any) {
    const { toggleVisibility } = props;
    const chapterNumber = props.data?.number || [];

    return (
        <div className="w-[20%] h-full shadow flex-col justify-start items-center flex fixed top-0 right-0 p-[2vw] text-white" id={theme.box}>
            <div className='w-full py-[0.5vw] flex items-center font-medium'>
                <h1>{props.manga?.name}</h1>
                <Link href={`/manga/${props.manga?.id}`}>
                    <div className='p-2 rounded-[0.4vw] -rotate-90' id={theme.inner}>
                        <KeyboardArrowDownIcon />
                    </div>
                </Link>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <Link href={`/manga/${props.manga?.id}/${props.prev}`}>
                <div className='p-[0.5vw] rounded-[0.4vw] rotate-90' id={theme.inner}>
                    <KeyboardArrowDownIcon />
                </div>
                </Link>
                <div className='w-full h-full flex items-center justify-between px-[0.5vw] rounded-[0.4vw] text-[1vw]' id={theme.inner}>Chapter {chapterNumber} <KeyboardArrowDownIcon sx={{ fontSize: "1.5vw" }} /></div>
                <Link href={`/manga/${props.manga?.id}/${props.next}`}>
                <div className='p-[0.5vw] rounded-[0.4vw] -rotate-90' id={theme.inner}>
                    <KeyboardArrowDownIcon />
                </div>
                </Link>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.inner}><ChatIcon sx={{ fontSize: "1.5vw" }} /> Chapter 100 Comments</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.inner}><BookmarkAddIcon sx={{ fontSize: "1.5vw" }} /> Bookmark the Manga</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.inner}><ViewArrayIcon sx={{ fontSize: "1.5vw" }} />Remove Header</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.inner}><CalendarViewDayIcon sx={{ fontSize: "1.5vw" }} />Long Strip</div>
            </div>
            <div className='w-full flex items-center gap-[0.5vw] py-[0.4vw]'>
                <div className='w-full h-full flex items-center justify-between p-[1vw] rounded-[0.4vw] text-[1vw]' id={theme.inner} onClick={toggleVisibility}><SettingsIcon sx={{ fontSize: "1.5vw" }} />Advance Settings</div>
            </div>
            <div className='w-full py-[1vw] flex flex-col items-center justify-start gap-[0.5vw]'>
                <h1 className='text-[1vw] text-center'>Join our discord to get the latest updates</h1>
                <Link href=""><div className='px-[2vw] py-[0.5vw] rounded-full bg-sky-300'>Join Discord</div></Link>
            </div>
        </div>
    )
}