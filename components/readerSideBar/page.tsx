'use client'

import theme from '@/styles/themes.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AdjustIcon from '@mui/icons-material/Adjust';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Sidebar(props: any) {
    const { action } = props
    const chapterNumber = props.data?.number || [];
    const pageNumber = props.data?.images.length;
    const { removeHeader, removeSideBar, fitWidth, fitHeight, fitRes } = props;
    const [page, setPage] = useState(0);
    const [strip, setStrip] = useState(false);

    useEffect(() => {
        if (page < 0) {
            setPage(0);
        }
        if (page > pageNumber) {
            setPage(pageNumber);
          }
    }, [page])
    function Strip() {
        setStrip(current => !current);
        action();
    }
    return (
        <div className="lg:w-[20%] w-[200px] h-full shadow flex-col justify-start items-center flex fixed top-0 right-0 lg:p-[25px] p-[15px] text-white z-[999] lg:text-[15px] text-[12px] gap-[8px]" id={theme.box}>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <h1>{props.manga?.name}</h1>
                <div className='lg:w-[40px] w-[30px] h-full flex items-center justify-center rounded-[4px] -rotate-90' id={theme.inner} onClick={removeSideBar}>
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }} />
                </div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium cursor-pointer'>
                <Link href={`/manga/${props.manga?.id}/${props.prev}`} className='lg:w-[40px] w-[30px] h-full flex items-center justify-center rounded-[4px] rotate-90' id={theme.inner}>
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }} />
                </Link>
                <div className='lg:w-[100px] w-[95px] h-full flex items-center justify-center rounded-[4px] lg:text-[10px] text-[10px] font-medium px-[5px]' id={theme.inner}>{chapterNumber}</div>
                <Link href={`/manga/${props.manga?.id}/${props.next}`} className='lg:w-[40px] w-[30px] h-full flex items-center justify-center rounded-[4px] -rotate-90' id={theme.inner}>
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }} />
                </Link>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium cursor-pointer'>
                <Link href={`/manga/${props.manga?.id}/${props.data?.id}?number=${page - 1}#${page - 1}`} className='lg:w-[40px] w-[30px] h-full flex items-center justify-center rounded-[4px] rotate-90' id={theme.inner} onClick={() => setPage(prev => prev - 1)}>
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }} />
                </Link>
                <div className='lg:w-[100px] w-[95px] h-full flex items-center justify-center rounded-[4px] lg:text-[10px] text-[10px] font-medium px-[5px]' id={theme.inner}>Page {page +1}</div>
                <Link href={`/manga/${props.manga?.id}/${props.data?.id}?number=${page + 1}#${page + 1}`} className='lg:w-[40px] w-[30px] h-full flex items-center justify-center rounded-[4px] -rotate-90' id={theme.inner} onClick={() => setPage(prev => prev + 1)}>
                    <KeyboardArrowDownIcon sx={{ fontSize: { xs: 12, lg: 25 } }} />
                </Link>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner}><ChatIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /> Chapter 100 Comments</div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner}><BookmarkAddIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /> Bookmark the Manga</div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner} onClick={removeHeader}><ViewArrayIcon sx={{ fontSize: { xs: 12, lg: 15 } }} />{props.value}</div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium' onClick={Strip}>
                {strip ? <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner}><CalendarViewDayIcon sx={{ fontSize: { xs: 12, lg: 15 } }} className='rotate-90' />Single Page</div> : <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner}><CalendarViewDayIcon sx={{ fontSize: { xs: 12, lg: 15 } }} />Long Strip</div>}
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner} onClick={fitWidth}><div style={{ transform: "rotate(45deg)" }}><OpenInFullIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>Fit Width</div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner} onClick={fitHeight}><div style={{ transform: "rotate(-45deg)" }}><OpenInFullIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>Fit Height</div>
            </div>
            <div className='lg:w-[200px] w-[175px] lg:h-[40px] h-[30px] flex items-center justify-between font-medium'>
                <div className='w-full h-full flex items-center justify-between rounded-[4px] lg:text-[13px] text-[10px] font-medium px-[10px]' id={theme.inner} onClick={fitRes}><div><AdjustIcon sx={{ fontSize: { xs: 12, lg: 15 } }} /></div>Comfort View</div>
            </div>
            <div className='w-[200px] flex flex-col items-center justify-start gap-[8px]'>
                <h1 className='w-[80%] lg:text-[13px] text-[10px] text-center'>Join our discord to get the latest updates</h1>
                <Link href="" className='lg:w-[100px] w-[70px] lg:h-[40px] h-[30px] flex items-center justify-center lg:text-[13px] text-[10px] rounded-[5px] bg-sky-400 font-medium'>Join Discord</Link>
            </div>
        </div>
    )
}