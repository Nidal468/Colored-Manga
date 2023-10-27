'use client'

import React, { useState } from 'react';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import DnsIcon from '@mui/icons-material/Dns';
import AssistantIcon from '@mui/icons-material/Assistant';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CodeIcon from '@mui/icons-material/Code';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Link from 'next/link'
import theme from '@/styles/theme.module.css'
export default function Sidebar() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [detailsTop, setDetailsTop] = useState("0%");
    const [text, setText] = useState("")

    const isIconSelected = (iconName: any) => iconName === selectedIcon;

    const handleMouseEnter = (iconName: any, topValue: any, isText: any) => {
        setSelectedIcon(iconName);
        setDetailsTop(topValue);
        setText(isText)
    };

    const handleMouseLeave = () => {
        setSelectedIcon(null);
        setDetailsTop("0%");
    };

    return (
        <div className='z-50 hidden lg:flex'>
            <div className="w-[6%] h-full py-[2.5vw] shadow flex-col justify-between items-center inline-flex fixed top-0 left-0" id={theme.sidebar}>
                <img className="w-[60%]" src="/images/assets/logo.Webp" />
                <div className="p-[0.5vw] bg-white bg-opacity-10 rounded-[200vw] flex-col justify-start items-center gap-[1.5vw] flex">
                    <Link href={"./"}>
                        <DonutSmallIcon
                            sx={{ color: isIconSelected('DonutSmall') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                            onMouseEnter={() => handleMouseEnter('DonutSmall', "19%", "Home")}
                            onMouseLeave={handleMouseLeave}
                        /></Link>
                    <div className="p-[0.5vw] bg-white bg-opacity-10 rounded-[20vw] backdrop-blur-[200vw] flex-col justify-start items-center gap-[1.5vw] flex">
                        <DnsIcon
                            sx={{ color: isIconSelected('Dns') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                            onMouseEnter={() => handleMouseEnter('Dns', "27.5%", "All Mangas")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <AssistantIcon
                            sx={{ color: isIconSelected('Assistant') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                            onMouseEnter={() => handleMouseEnter('Assistant', "34%", "Upload")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <HelpOutlineOutlinedIcon
                            sx={{ color: isIconSelected('HelpOutlineOutlined') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                            onMouseEnter={() => handleMouseEnter('HelpOutlineOutlined', "40.5%", "Help")}
                            onMouseLeave={handleMouseLeave}
                        />
                        <SettingsIcon
                            sx={{ color: isIconSelected('Settings') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                            onMouseEnter={() => handleMouseEnter('Settings', "47.5%", "Settings")}
                            onMouseLeave={handleMouseLeave}
                        />
                    </div>
                </div>
                <div className="flex-col justify-start items-center gap-[2vw] flex">
                    <div
                        className="p-[1vw] relative bg-white bg-opacity-10 rounded-[200px] flex items-center justify-center"
                        onMouseEnter={() => handleMouseEnter('Code', "65.5%", "Developer Mode")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CodeIcon
                            sx={{ color: isIconSelected('Code') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                        />
                    </div>
                    <div className="rounded-[100vw] justify-center items-center inline-flex">
                        <img className="w-[3vw] h-[3vw] rounded-[200vw]" src="/images/assets/frozen.jpg" />
                    </div>
                </div>
                <Link href="/admin">
                <AdminPanelSettingsIcon
                    sx={{ color: isIconSelected('AdminPanelSettings') ? '#fff' : '#bdbdbd' , fontSize: "1.5vw"}}
                    onMouseEnter={() => handleMouseEnter('AdminPanelSettings', "90.5%", "Admin Panel")}
                    onMouseLeave={handleMouseLeave}
                />
                </Link>
                
            </div>
            <div
                className="details w-[15vw] h-[5vw] flex-col justify-center items-center gap-2.5 inline-flex fixed left-[7%] z-50"
                style={{
                    visibility: detailsTop > "0%" ? 'visible' : 'hidden',
                    top: `${detailsTop}`
                }}
            >
                <img className='w-full h-full' src='/images/svg/Rectangle 4.svg' />
                <div className="text-black text-[1.5vw] font-medium absolute">
                    {text}
                </div>
            </div>
        </div>
    );
}
