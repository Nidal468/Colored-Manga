"use client"

import Card from '../simpleCard/page'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link'
import { Autoplay } from 'swiper/modules';
import datas from '@/public/data/recommended.json'
import themes from '@/styles/themes.module.css'
export default function Sideway() {
    return (
        <Swiper

            autoplay={{
                disableOnInteraction: true,
            }}
            slidesPerView={5}
            modules={[Autoplay]}
            className="w-full flex items-center justify-between"
            id={themes.box}
        >
            {datas.map((data: any) => (
                <>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                    <SwiperSlide key={data.id}><Link href="/dynamic/boruto"><Card image={data.source} title={data.title} /></Link></SwiperSlide>
                </>


            ))}
        </Swiper>
    )
}