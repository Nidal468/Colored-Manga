"use client"

import Card from '../simpleCard/page'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '@/public/data/slider.json'
import { Autoplay} from 'swiper/modules';
import datas from '@/public/data/recommended.json'
export default function Sideway() {
    return (
        <Swiper
            
            autoplay={{
                disableOnInteraction: true,
            }}
            slidesPerView={5}
            modules={[Autoplay]}
            className="w-full flex items-center justify-betwee"
        >
            {datas.map((data: any) => (
                <SwiperSlide key={data.id}><Card image={data.source} title={data.title}/></SwiperSlide>
            ))}
        </Swiper>
    )
}