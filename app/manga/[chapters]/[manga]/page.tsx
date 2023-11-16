'use client'
import { useState } from 'react'
import Nav from '@/components/readerNav/page'
import Settings from '@/components/readerSettings/page'
import Sidebar from '@/components/readerSideBar/page'
import Footer from '@/components/footer/page'
import Image from 'next/image'
export default function Manga() {
    const [isVisible, setIsVisible] = useState(false);
    const [width, setWidth] = useState(350);
    const toggleVisibility: any = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="w-[86%] font-light p-[2vw] px-[3vw] lg:px-[1vw] lg:p-[1vw] flex flex-col items-center justify-start gap-[10vw]">
            <Nav zoom={() => setWidth(prev => prev + 40)} unzoom={() => setWidth(prev => prev - 40)} />
            <Settings visibility={isVisible ? "flex" : "none"} />
            <Sidebar toggleVisibility={toggleVisibility} />
            <div className='w-full flex flex-col items-center justify-start gap-[1vw] my-[5vw]'>
                <Image width={width} height={0} src="/images/assets/fpr.jpg" alt="" />
            </div>
            <div className='w-[86%]'>
                <Footer />
            </div>
        </div>
    )
}