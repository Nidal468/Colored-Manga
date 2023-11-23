'use client'

import theme from '@/styles/themes.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuIcon from '@mui/icons-material/Menu';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
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
    const { zoom, unzoom , menu} = props;
    const { openChapter, openPage } = props;
    const [divStates, setDivStates] = useState<DivStates>({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
    });
    const toggleDivState = (divKey: keyof DivStates) => {
        setDivStates((prevState) => ({
            ...prevState,
            [divKey]: !prevState[divKey],
        }));
    };
    return (
        <div className='h-[50px] px-5 py-2.5 justify-between items-center hidden lg:inline-flex fixed top-0 left-0 z-50 text-white' id={theme.solid} style={{ boxShadow: "0px 4px 8px #0b0b0b", width: props.width}}>
            <div className='flex items-center gap-[2vw]'>
                <div className='w-[150px] h-[35px] flex gap-[30px] items-center justify-center rounded-[3px]' id={theme.outside} onClick={openChapter} >
                    <h1>Chapter 1</h1>
                    <div className={`${props.rotate} duration-500`}><KeyboardArrowDownIcon/></div>
                </div>
                <div className='px-[1vw] py-[0.5vw] gap-[1vw] flex items-center rounded-[0.2vw]' id={theme.outside} onClick={openPage}>
                    <h1>Page 1</h1>
                    <div className={`${props.rotate1} duration-500`}><KeyboardArrowDownIcon/></div>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <Link href={`/manga/${props.mangaID}/${props.prev}`}>
                    <div className='p-2 rounded-[0.4vw] rotate-90' id={theme.outside}>
                        <KeyboardArrowDownIcon />
                    </div>
                    </Link>
                    <Link href={`/manga/${props.mangaID}/${props.next}`}>
                    <div className='p-2 rounded-[0.4vw] -rotate-90' id={theme.outside}>
                        <KeyboardArrowDownIcon />
                    </div>
                    </Link>
                </div>
                <div className='flex items-center gap-[1vw]'>
                    <div className='p-2 rounded-[0.4vw]' id={theme.outside}>
                        <ZoomInIcon onClick={zoom} />
                    </div>
                    <div className='p-2 rounded-[0.4vw]' id={theme.outside}>
                        <ZoomOutIcon onClick={unzoom} />
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[1vw]'>
                <div className='p-2 rounded-[0.4vw]' id={theme.outside}>
                    <ChatBubbleIcon />
                </div>
                <div className='p-2 rounded-[0.4vw]' id={theme.outside} onClick={menu}>
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}