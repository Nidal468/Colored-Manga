'use client'
import { useState } from 'react'
import Nav from '@/components/readerNav/page'
import Settings from '@/components/readerSettings/page'
import Sidebar from '@/components/readerSideBar/page'
import Footer from '@/components/footer/page'
import Image from 'next/image'
import Box from '@/components/dataBox/page'
import Data from '@/public/data/manga.json'
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
    const [width, setWidth] = useState(350);
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
    return (
        <div className='w-full flex items-center justify-start'>
            <div className="font-light p-[2vw] px-[3vw] lg:px-[1vw] lg:p-[1vw] flex flex-col items-center justify-start gap-[10vw]" style={{width: divStates.div4? "100%":"80%"}}>
                <Nav zoom={() => setWidth(prev => prev + 40)} unzoom={() => setWidth(prev => prev - 40)} menu={() => toggleDivState('div4')} openChapter={() => toggleDivState('div2')} openPage={() => toggleDivState('div3')} rotate={divStates.div2? "rotate-180":"rotate-0"} rotate1={divStates.div3? "rotate-180":"rotate-0"} prev={prevChapterId} next={nextChapterId} mangaID={chapters} width={divStates.div4? "100%":"80%"}/>
                <Settings visibility={divStates.div1 ? "flex" : "none"} />
                {divStates.div4? <></>:<Sidebar toggleVisibility={() => toggleDivState('div1')} data={selectedChapter} manga={selectedManga} prev={prevChapterId} next={nextChapterId}/>}
                <Box Data={selectedManga} display={divStates.div2 ? "flex" : "none"} name="Chapter list" width={divStates.div4? "100%":"80%"}/>
                <Box Data={selectedChapter} display={divStates.div3 ? "flex" : "none"} name="Page list" width={divStates.div4? "100%":"80%"}/>
                <div className='w-full flex flex-col items-center justify-start gap-[1vw] my-[5vw]'>
                    <Image width={width} height={0} src="/images/chapters/10000/0.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/1.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/2.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/3.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/4.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/5.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/6.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/7.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/8.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/9.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/10.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/11.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/12.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/13.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/14.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/15.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/16.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/17.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/18.png" alt="" />
                    <Image width={width} height={0} src="/images/chapters/10000/19.png" alt="" />
                </div>
                <Footer />
            </div>
        </div>
    )
}