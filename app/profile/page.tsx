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

    return (
        <div className="xl:w-[1280px] w-full min-h-[100vh] font-light flex flex-col items-center justify-start lg:px-[30px] pt-[12vw] px-[2vw] lg:pt-[50px] gap-[4vw] lg:gap-[20px]" id={themes.body}>
            <Nav />
            <div className="w-[95%] h-[200px]  mt-[40px] flex items-start justify-center overflow-hidden rounded-[10px]">
                <img src={currentUser?.avater} alt={currentUser?.username} sizes="8000px,8000px" className="w-full h-full object-cover" />
                <div className="h-[200px] w-[95%] bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-10 absolute rounded-[10px]"></div>
            </div>
            <div className="w-[95%] flex items-center justify-start translate-y-[-70px] px-[60px] gap-[20px]">
                <img src={currentUser?.avater} alt={currentUser?.username} sizes="8000px,8000px" className="w-[140px] h-[140px] object-cover rounded-full" />
                <div className="flex items-center justify-start h-full pt-[30px]">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                        <h1 className="font-medium">{currentUser?.username}</h1>
                        <h2 className="font-medium">{currentUser?.roles[0].role1}</h2>
                    </div>
                </div>
            </div>
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