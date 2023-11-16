"use client"
import { useEffect, useState } from 'react';
import Card from '../simpleCard/page'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import Data from '@/public/data/manga.json'
export default function Sideway() {
    const [width, setWidth] = useState(6)
    useEffect(() => {
        if (window.innerWidth > 1170) {
            setWidth(7)
        } else if (window.innerWidth > 1023) {
            setWidth(5)
        } else {
            setWidth(3)
        }
    }, [])
    return (
        <Swiper
            autoplay={{
                disableOnInteraction: true,
            }}
            slidesPerView={width}
            modules={[Autoplay]}
            className="w-full flex items-center justify-between"
        >
            {Data.map((data: any) => {
                // Check if 'chapters' property exists and is an array
                const chapters = Array.isArray(data.chapters) ? data.chapters : [];

                // Extract the last chapter number from the chapters array
                const lastChapterNumber = chapters.length > 0 ? chapters[chapters.length - 1].number : null;

                return (
                    <SwiperSlide key={data.id}>
                        <Link href={`/manga/${data.id}`}>
                            <Card
                                image={data.cover}
                                title={data.name}
                                ratings={data.ratings}
                                views={data.views}
                                chapter={lastChapterNumber}
                            />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}