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
        if(window.innerWidth > 1170){
            setWidth(7)
        } else if(window.innerWidth > 1023){
            setWidth(5)
        } else {
            setWidth(3)
        }
    },[])
    return (
        <Swiper
            autoplay={{
                disableOnInteraction: true,
            }}
            slidesPerView={width}
            modules={[Autoplay]}
            className="w-full flex items-center justify-between"
            >
            {Data.map((data: any) => (
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.cover} title={data.name} /></Link></SwiperSlide>
            ))}
        </Swiper>
    )
}