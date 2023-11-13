"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Data from '@/public/data/manga.json'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image'
export default function SwiperComponent() {
    return (
        <Swiper
            autoplay={{
                disableOnInteraction: true,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            className='w-full flex items-center justify-between'
        >
            {Data.map((data: any) => (
                <SwiperSlide key={data.id}>
                    <div className="w-full flex justify-end items-end">
                    <div className="lg:w-[200px] lg:h-[230px] w-[65vw] h-[60vw] relative" ><Image fill={true} src={data.cover} alt={data.cover} className='object-cover' /></div>
                    <div className="w-full lg:h-[230px] h-[60vw]">
                        <div className="w-full h-full absolute z-1"><Image fill={true} src={data.cover} alt={data.cover} className='object-cover' priority={true} sizes="(max-width: 768px) 100vw, 33vw"/></div>
                        <div className="w-full h-full flex z-5 bg-black bg-opacity-60 backdrop-blur-[20px] text-white">
                            <div className="w-full lg:p-[5px] lg:p-[5px] px-[2vw] py-[0.5vw] flex-col justify-start items-start flex">
                                <div className="w-full h-[30%] lg:p-[5px] p-[0.5vw] justify-between items-center gap-[5px] flex">
                                    <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                                        <div className="text-[4vw] lg:text-[20px] font-medium">{data.name}</div>
                                        <div className="self-stretch grow shrink basis-0 justify-start items-center gap-[10px] inline-flex text-[3vw] lg:text-[12px] font-medium">
                                            <div className="justify-start items-start flex">
                                                <div className="text-emerald-400 ">{data.genres[0].genre}</div>
                                            </div>
                                            <div className="justify-start items-start flex">
                                                <div>{data.genres[0].genre}</div>
                                            </div>
                                            <div className="justify-start items-start flex">
                                                <div>{data.genres[0].genre}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[5vw] h-[5vw] lg:w-[30px] lg:h-[30px] rounded-[0.5vw] lg:rounded-[0.3vw] justify-center items-center flex">
                                        <div className="text-[3vw] lg:text-[10px] font-medium">{data.ratings}</div>
                                    </div>
                                </div>
                                <div className="w-full h-[60%] lg:p-[5px] p-[0.8vw] justify-between items-start flex text-opacity-90 lg:text-[15px] text-[2.5vw] text-ellipsis overflow-hidden ...">
                                    {data.info}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
