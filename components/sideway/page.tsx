"use client"

import Card from '../simpleCard/page'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import datas from '@/public/data/recommended.json'
export default function Sideway() {
    return (
        <Swiper
            autoplay={{
                disableOnInteraction: true,
            }}
            spaceBetween={30}
            slidesPerView={7}
            modules={[Autoplay]}
            className="w-full flex items-center justify-between"
            
        >
            {datas.map((data: any) => (
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
            ))}
        </Swiper>
    )
}