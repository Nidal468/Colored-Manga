"use client"
import { useEffect, useState } from 'react';
import Card from '../simpleCard/page'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import datas from '@/public/data/recommended.json'
export default function Sideway() {
    const [width, setWidth] = useState(6)
    useEffect(() => {
        if(window.innerWidth > 1024){
            setWidth(8)
        } else {
            setWidth(6)
        }
    },[])
    return (
        <Swiper
            autoplay={{
                disableOnInteraction: true,
            }}
            spaceBetween={10}
            slidesPerView={width}
            modules={[Autoplay]}
            className="w-full flex items-center justify-between"
            
        >
            {datas.map((data: any) => (
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
            ))}
        </Swiper>
    )
}