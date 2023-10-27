'use client'
import { useState } from 'react'
import Nav from '@/components/readerNav/page'
import Settings from '@/components/readerSettings/page'
import Footer from '@/components/footer/page'
export default function Manga() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="w-full font-light p-[2vw] px-[3vw] lg:px-[1vw] lg:p-[1vw] flex flex-col items-start justify-start gap-[10vw]">
            <Nav toggleVisibility={toggleVisibility}/>
            {isVisible && <Settings />}
            <div className='w-full flex flex-col items-center justify-start gap-[1vw] my-[5vw]'>
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
                <img width={"50%"} src='/images/assets/fpr.jpg' />
            </div>
            <Footer/>
        </div>
    )
}