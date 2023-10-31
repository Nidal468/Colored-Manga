"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '@/public/data/slider.json'
import { Autoplay } from 'swiper/modules';
export default function SwiperComponent() {
    return (
        <Swiper
            centeredSlides={true}
            autoplay={{
                disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            loop={true}
            className='w-full'
        >
            {data.map((slider) => (
                <SwiperSlide key={slider.id}><div className="w-full justify-end items-end flex">
                <img className="lg:w-[16vw] lg:h-[24vw] w-[24vw] h-[36vw] object-cover" src={slider.image} />
                <div className="w-full lg:h-[22vw] h-[32vw]">
                <img className="w-full h-full object-cover absolute z-1" src={slider.image} />
                    <div className="w-full h-full flex z-5 bg-white bg-opacity-10 lg:backdrop-blur-[10px] backdrop-blur-[80px]">
                        <div className="w-full p-[1vw] flex-col justify-between items-start flex">
                            <div className="self-stretch p-[1vw] bg-stone-950 bg-opacity-40 rounded-[0.5vw] justify-between items-center gap-[5px] inline-flex">
                                <div className="flex-col justify-center items-start gap-[0.5vw] inline-flex">
                                    <div className="text-white text-[2vw] font-medium">{slider.title}</div>
                                    <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2.5 inline-flex text-[1.5vw] font-medium">
                                        <div className="rounded-[1px] justify-start items-start gap-2.5 flex">
                                            <div className="text-emerald-400 ">{slider.genre[0].type}</div>
                                        </div>
                                        <div className="rounded-[1px] justify-start items-start gap-2.5 flex">
                                            <div className="text-white">{slider.genre[1].type}</div>
                                        </div>
                                        <div className="rounded-[1px] justify-start items-start gap-2.5 flex">
                                            <div className="text-white">{slider.genre[2].type}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[4.5vw] h-[4.5vw] bg-white bg-opacity-5 rounded-[0.6vw] border border-white justify-center items-center flex lg:backdrop-blur-[5px] backdrop-blur-[80px]">
                                    <div className="text-white text-[1.5vw] font-medium">{slider.rating}</div>
                                </div>
                            </div>
                            <div className="w-full px-[1vw] py-[2vw] bg-stone-950 bg-opacity-40 rounded-[0.5vw] justify-between items-start inline-flex mt-2">
                                <div className="text-white text-opacity-90 lg:text-[1.2vw] text-[2vw] font-light">{slider.info}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div></SwiperSlide>
             ))}
        </Swiper>
    );
}
