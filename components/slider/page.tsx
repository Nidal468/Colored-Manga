"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '@/public/data/slider.json'
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
            {data.map((slider) => (
                <SwiperSlide key={slider.id}>
                    <div className="w-full flex justify-end items-end">
                    <div className="lg:w-[14vw] lg:h-[18vw] w-[24vw] h-[28vw] relative" ><Image fill={true} src={slider.image} alt="" className='object-cover' /></div>
                    <div className="w-full lg:h-[15.5vw] h-[25vw]">
                        <div className="w-full h-full absolute z-1"><Image fill={true} src={slider.image} alt="" className='object-cover' priority={true} /></div>
                        <div className="w-full h-full flex z-5 bg-white bg-opacity-10 lg:backdrop-blur-[10px] backdrop-blur-[80px]">
                            <div className="w-full p-[0.5vw] flex-col justify-between items-start flex gap-[1vw]">
                                <div className="self-stretch p-[1vw] bg-stone-950 bg-opacity-40 rounded-[0.5vw] justify-between items-center gap-[5px] inline-flex">
                                    <div className="flex-col justify-center items-start gap-[0.5vw] inline-flex">
                                        <div className="text-white text-[3vw] lg:text-[1.5vw] font-medium">{slider.title}</div>
                                        <div className="self-stretch grow shrink basis-0 justify-start items-center gap-[1vw] inline-flex text-[2vw] lg:text-[1vw] font-medium">
                                            <div className="rounded-[1px] justify-start items-start flex">
                                                <div className="text-emerald-400 ">{slider.genre[0].type}</div>
                                            </div>
                                            <div className="rounded-[1px] justify-start items-start flex">
                                                <div className="text-white">{slider.genre[1].type}</div>
                                            </div>
                                            <div className="rounded-[1px] justify-start items-start flex">
                                                <div className="text-white">{slider.genre[2].type}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[5vw] h-[5vw] lg:w-[3vw] lg:h-[3vw] bg-white bg-opacity-5 rounded-[0.5vw] lg:rounded-[0.3vw] border border-white justify-center items-center flex lg:backdrop-blur-[5px] backdrop-blur-[80px]">
                                        <div className="text-white text-[1.5vw] lg:text-[1vw] font-medium">{slider.rating}</div>
                                    </div>
                                </div>
                                <div className="w-full h-full px-[1vw] py-[1vw] bg-stone-950 bg-opacity-40 rounded-[0.5vw] justify-between items-start inline-flex">
                                    <div className="text-white text-opacity-90 lg:text-[1vw] text-[1.5vw] font-light">{slider.info}</div>
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
