'use client'

import themes from "@/styles/themes.module.css"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import userData from '@/public/data/user.json'
import Nav from '@/components/nav/page'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Data from '@/public/data/manga.json'
import Card from "@/components/card/page";
import BookmarkData from '@/public/data/bookmark.json'

export default function Profile() {
    const [token, setToken] = useState('');
    const selectedBookmarks = Data.filter((data: any) => BookmarkData.some((bookmark: any) => bookmark.id === data.id));

    useEffect(() => {

        const token = Cookies.get('token');
        setToken(token || '')

    }, [])
    const currentUser = userData.find((data: any) => data.token === token)
    if(!token){
        return(
            <div className="w-full min-h-[100vh] flex items-center justify-center text-white">
                <Nav/>
                <h1 className="text-[30px]">Login first to bookmark manga or manwha</h1>
            </div>
        )
    }
    return (
        <div className="xl:w-[1280px] w-full min-h-[100vh] font-light flex flex-col items-center justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[80px] gap-[4vw] lg:gap-[20px]" id={themes.body}>
            <Nav />
            <div className="w-full h-[50px] flex items-center gap-[10px]">
                <BookmarksIcon sx={{ fontSize: { xs: 12, lg: 20 } }} />
                <h1 className="font-medium">Bookmarked List</h1>
            </div>
            <div className="w-full min-h-[80vh] flex items-start justify-start lg:gap-[20px] gap-[2vw] flex-wrap">
                {selectedBookmarks.map((data: any) => {
                    const chapters = Array.isArray(data.chapters) ? data.chapters : [];

                    // Extract the last chapter number from the chapters array
                    const lastChapterNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].number : null;
                    const lastChapterNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].number : null;
                    const lastChapterNumber3 = chapters.length > 2 ? chapters[chapters.length - 3].number : null;
                    const lastDateNumber1 = chapters.length > 0 ? chapters[chapters.length - 1].date : null;
                    const lastDateNumber2 = chapters.length > 1 ? chapters[chapters.length - 2].date : null;
                    const lastDateNumber3 = chapters.length > 2 ? chapters[chapters.length - 3].date : null;
                    return (
                        <Card title={data.name} author={data.author} key={data.id} image={data.cover} number1={lastChapterNumber1} number2={lastChapterNumber2} number3={lastChapterNumber3} data1={lastDateNumber1} data2={lastDateNumber2} data3={lastDateNumber3} link={`/manga/${data.id}`} />
                    )
                })}
            </div>
        </div>
    )
}