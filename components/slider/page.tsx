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
                    <div className="lg:w-[200px] lg:h-[230px] w-[65vw] h-[60vw] relative" ><Image fill={true} src={slider.image} alt="" className='object-cover' /></div>
                    <div className="w-full lg:h-[230px] h-[60vw]">
                        <div className="w-full h-full absolute z-1"><Image fill={true} src={slider.image} alt="" className='object-cover' priority={true} sizes="(max-width: 768px) 100vw, 33vw"/></div>
                        <div className="w-full h-full flex z-5 bg-black bg-opacity-60 backdrop-blur-[20px] text-white">
                            <div className="w-full lg:p-[5px] p-[2vw] flex-col justify-start items-start flex">
                                <div className="w-full h-full lg:p-[10px] p-[1vw] justify-between items-center gap-[5px] flex">
                                    <div className="flex-col justify-center items-start gap-[5px] inline-flex">
                                        <div className="text-[4vw] lg:text-[20px] font-medium">{slider.title}</div>
                                        <div className="self-stretch grow shrink basis-0 justify-start items-center gap-[10px] inline-flex text-[3vw] lg:text-[12px] font-medium">
                                            <div className="justify-start items-start flex">
                                                <div className="text-emerald-400 ">{slider.genre[0].type}</div>
                                            </div>
                                            <div className="justify-start items-start flex">
                                                <div>{slider.genre[1].type}</div>
                                            </div>
                                            <div className="justify-start items-start flex">
                                                <div>{slider.genre[2].type}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[5vw] h-[5vw] lg:w-[30px] lg:h-[30px] rounded-[0.5vw] lg:rounded-[0.3vw] justify-center items-center flex">
                                        <div className="text-[3vw] lg:text-[10px] font-medium">{slider.rating}</div>
                                    </div>
                                </div>
                                <div className="w-full h-full px-[1vw] py-[1vw] rounded-[0.5vw] justify-between items-start inline-flex">
                                    <div className="text-opacity-90 lg:text-[15px] text-[2.5vw] font-light">{slider.info}</div>
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
