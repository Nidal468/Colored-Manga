'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/readerNav/page'
import Sidebar from '@/components/readerSideBar/page'
import Footer from '@/components/footer/page'
import Image from 'next/image'
import Box from '@/components/dataBox/page'
import Data from '@/public/data/manga.json'
import themes from '@/styles/themes.module.css'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

type DivStates = {
    div1: boolean;
    div2: boolean;
    div3: boolean;
    div4: boolean;
    div5: boolean;
    div6: boolean;
    div7: boolean;
};

export default function Manga(params: any) {

    const { chapters, manga } = params.params;
    const selectedManga = Data.find((manga: any) => manga.id === chapters);
    const selectedChapter = selectedManga?.chapters.find((chapter: any) => chapter.id === manga);
    const [width, setWidth] = useState('70%');
    const [height, setHeight] = useState('100%');
    const [divStates, setDivStates] = useState<DivStates>({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
        div6: false,
        div7: false,
    });
    const findNextPrevChapterIds = (currentChapterId: string) => {
        const chapterIndex = selectedManga?.chapters.findIndex((c) => c.id === currentChapterId);

        if (chapterIndex !== undefined && chapterIndex !== -1) {
            const nextChapterId = selectedManga?.chapters[chapterIndex + 1]?.id || null;
            const prevChapterId = selectedManga?.chapters[chapterIndex - 1]?.id || null;

            return { nextChapterId, prevChapterId };
        }

        return { nextChapterId: null, prevChapterId: null };
    };
    const { nextChapterId, prevChapterId } = findNextPrevChapterIds(manga);
    const toggleDivState = (divKey: keyof DivStates) => {
        setDivStates((prevState) => ({
            ...prevState,
            [divKey]: !prevState[divKey],
        }));
    };
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'S' || event.key === 's') {
                toggleDivState('div4');
            } else if (event.key === 'N' || event.key === 'n') {
                toggleDivState('div5');
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    useEffect(() => {
        const handleWindowResize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 720) {
            setWidth('100%');
          } else if (screenWidth > 1000) {
            setWidth('75%');
          }
        };
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);
    return (
        <div className='w-full flex items-start justify-start'>
            <div className="font-light flex flex-col items-center justify-start gap-[10vw]" style={{ width: divStates.div4 ? "80%":"100%" }}>
                {divStates.div5 ? <></> : <Nav
                    menu={() => toggleDivState('div4')}
                    openChapter={() => toggleDivState('div2')}
                    openPage={() => toggleDivState('div3')}
                    rotate={divStates.div2 ? "rotate-180" : "rotate-0"}
                    rotate1={divStates.div3 ? "rotate-180" : "rotate-0"}
                    prev={prevChapterId}
                    next={nextChapterId}
                    mangaID={chapters}
                    width={divStates.div4 ? "80%":"100%"}
                />}

                {divStates.div4 ? <Sidebar

                    toggleVisibility={() => toggleDivState('div1')}
                    data={selectedChapter}
                    manga={selectedManga}
                    prev={prevChapterId}
                    next={nextChapterId}
                    removeHeader={() => toggleDivState('div5')}
                    value={divStates.div5 ? "Enable Header" : "Remove Header"}
                    removeSideBar={() => toggleDivState('div4')}
                    fitWidth={() => { setWidth("95%"), setHeight("100%") }}
                    fitHeight={() => { setHeight("100%"); setWidth("37%") }}
                    fitRes={() => { setWidth("75%"), setHeight("100%") }}
                /> : <></>
                }
                <Box Data={selectedManga} width={divStates.div2 ? "100%" : "80%"} name="Chapter List" id={chapters} display={divStates.div2 ? "flex" : "none"} />
                <Box Data={selectedChapter} width={divStates.div3 ? "100%" : "80%"} name="Page List" id={selectedChapter} display={divStates.div3 ? "flex" : "none"} />
                <div className='w-[95%] lg:w-full flex flex-col items-center justify-start gap-[1vw] lg:mb-[50px] mb-[5vw]' style={{ marginTop: divStates.div5 ? "0px" : "50px" }}>
                    <div className='relative z-0' style={{ width: width, height: height }}>
                        <Image
                            width={4000}
                            height={4000}
                            src="/images/chapters/10000/6.png"
                            alt=""
                            sizes='8000px,  8000px'
                        />
                    </div>
                    <div className='relative z-0' style={{ width: width, height: height }}>
                        <Image
                            width={4000}
                            height={4000}
                            src="/images/chapters/10000/20.png"
                            alt=""
                            sizes='8000px,  8000px'
                        />
                    </div>
                    <div className='relative z-0' style={{ width: width, height: height }}>
                        <Image

                            width={4000}
                            height={4000}
                            src="/images/chapters/10000/21.png"
                            alt=""
                            sizes='8000px,  8000px'

                        />
                    </div>
                </div>
                <div className='px-[20px] py-[10px] flex items-center gap-[20px] bg-zinc-800 fixed bottom-[2%] left-[4%] z-[999] duration-300 rounded-[5px] text-white cursor-pointer' style={{ opacity: divStates.div4 ? divStates.div5 ? "90%" : "0" : "0" }}>
                    <h1 className='flex items-center gap-[10px]'>Press<div className='w-[30px] h-[30px] bg-white shadow-lg rounded-[10px] flex items-center justify-center text-zinc-800 font-medium'>S</div> to open sidebar</h1>
                </div>
                <div className='px-[20px] py-[10px] flex items-center gap-[20px] bg-zinc-800 fixed bottom-[13%] left-[4%] z-[999] duration-300 rounded-[5px] text-white cursor-pointer' style={{ opacity: divStates.div4 ? divStates.div5 ? "90%" : "0" : "0" }}>
                    <h1 className='flex items-center gap-[10px]'>Press<div className='w-[30px] h-[30px] bg-white shadow-lg rounded-[10px] flex items-center justify-center text-zinc-800 font-medium'>N</div> to open navbar</h1>
                </div>
            </div>
        </div>
    )
}