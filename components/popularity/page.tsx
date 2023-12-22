'use client'

import Card from '../smallCard/page'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DnsIcon from '@mui/icons-material/Dns';
import themes from "@/styles/themes.module.css"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Data from '@/public/data/manga.json'
import { useState, useEffect } from 'react';

interface Image {
    source: string;
}
interface Viewed {
    id: string;
}
interface Chapter {
    id: string;
    title: string;
    number: string;
    date: string;
    images?: Image[];
    viewed?: Viewed[];
}
interface MangaData {
    id: string;
    name: string;
    author: string;
    date: string;
    info: string;
    genre1: string;
    genre2: string;
    genre3: string;
    cover: string;
    chapters: Chapter[];
}







export default function Popularity() {
    const [mangaWithTotalViews, setMangaWithTotalViews] = useState<{ id: string; totalViews: number }[]>([]);
const sortedViews = Data.sort((a: any, b: any) => b.totalViews - a.totalViews);
const topMangas = sortedViews.slice(0, 10);

useEffect(() => {
    const fetchData = async () => {
        const mangaWithViewsData = Data.map((data: MangaData) => {
            const allChapters = data.chapters;
            const totalViews = allChapters.reduce((sum: number, chapter: Chapter) => {
                const viewedCount = chapter.viewed ? chapter.viewed.length : 0;
                return sum + viewedCount;
            }, 0);

            // Return an object with manga ID and totalViews for each manga
            return { id: data.id, totalViews };
        });
        setMangaWithTotalViews(mangaWithViewsData);

        // Now that fetchData has completed, you can call sendViews
       
    };

    fetchData();
}, []);

useEffect(() => {
    const sendViews = async () => {
        const response = await fetch('/api/uploadViews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mangaWithTotalViews),
        });
        // Handle the response as needed
    };
    sendViews();
    // No need to call sendViews here, it is now called in the first useEffect
}, [mangaWithTotalViews]);

    function Last(data: any) {
        const chapters = Array.isArray(data.chapters) ? data.chapters : [];
        const lastChapterNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].number : null;
        const lastChapterNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].number : null;
        return { lastChapterNumber1, lastChapterNumber2 }
    }
    return (
        <div className='w-full xl:w-[360px] lg:w-[310px] flex flex-col items-center justify-center gap-[20px] hidden lg:flex'>
            <div className='w-full p-[2vw] lg:p-[10px] justify-start items-center flex font-light text-[2vw] lg:text-[10px]' id={themes.outside}>
                <div className='flex gap-[1vw] items-center'><LeaderboardIcon className="text-[4vw] lg:text-[20px]" />Most Viewed</div>
            </div>
            <div className='w-full h-[40vw] xl:h-[250px] lg:h-[220px] flex flex-col items-center justify-end rounded-[3px] overflow-hidden'>
                <img alt={topMangas[0].cover} src={topMangas[0].cover} className='w-[96vw] xl:w-[357px] lg:w-[310px] h-[40vw] xl:h-[250px] lg:h-[220px] absolute overflow-hidden object-cover' sizes="100px, 100px" loading='lazy' />
                <div className='w-[98vw] lg:w-full h-[60%] xl:h-[42%] lg:h-[50%] bg-white bg-opacity-5 backdrop-blur-[50px] flex items-center justify-between px-[8px]'>
                    <div className='w-[90%] lg:w-[85%] bg-zinc-800 bg-opacity-50 rounded-[0.6vw] lg:rounded-[3px] lg:p-[6px] text-[2vw] lg:text-[10px] flex flex-col items-start justify-start gap-[2vw] lg:gap-[10px]'>
                        <h1 className='lg:text-[15px] text-[3vw] font-medium'>{topMangas[0].name}</h1>
                        <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                            <VisibilityIcon sx={{ fontSize: "15px" }} />
                            <h3>{topMangas[0].totalViews}</h3>
                        </div>
                        <div className='flex items-center justify-start gap-[2vw] lg:gap-[20px]'>
                            <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                                <DnsIcon sx={{ fontSize: "15px" }} /><h3>Chapter {Last(topMangas[1]).lastChapterNumber1}</h3>
                            </div>
                            <div className='flex items-center gap-[0.8vw] lg:gap-[8px]'>
                                <DnsIcon sx={{ fontSize: "15px" }} /><h3>Chapter {Last(topMangas[1]).lastChapterNumber2}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='w-[6vw] h-[6vw] lg:w-[25px] lg:h-[25px] bg-white flex items-center justify-center rounded-[3px] text-black font-medium'>1</div>
                </div>
            </div>
            <div className='w-full flex flex-wrap lg:gap-[10px] gap-[2vw]'>
                {
                    topMangas.slice(1).map((data: any, index: number) => {
                        const chapters = Array.isArray(data.chapters) ? data.chapters : [];
                        const lastChapterNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].number : null;
                        const lastChapterNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].number : null;
                        const View = Array.isArray(data.views) ? data.views : [];
                        const lastView = View.length > 0? View[View.length -1].totalViews : null;

                        return (
                            <Card title={data.name} id={data.id} author={data.author} key={data.id} views={data.totalViews} number1={lastChapterNumber1} number2={lastChapterNumber2} index={index + 2} cover={data.cover} />
                        )
                    })
                }

            </div>
        </div>
    )
}